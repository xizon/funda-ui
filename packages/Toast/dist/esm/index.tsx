import React, { useEffect, useRef, useCallback } from 'react';

import {
    useComId
} from 'funda-utils';
import RootPortal from 'funda-root-portal';


import Item from './Item';



type ToastProps = {
    /** The class name of the toast wrapper. */
    wrapperClassName?: string;
    /** Specify data of toasts as a JSON string format. */
    data: any[any];
    /** Automatically hide multiple items */
    autoHideMultiple?: boolean;
    /** The direction of the toast. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order. 
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** You can not close pop-win when it is enabled */
    lock?: boolean;
    /** Whether to use cascading styles */
    cascading?: boolean;
    /** Self-defined class name for body*/
    schemeBody?: string;
    /** Self-defined class name for header */
    schemeHeader?: string;
    /** Set the color of the close button */
    closeBtnColor?: string;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /**  */
    async?: boolean;
    /** -- */
    id?: string;
    onClose?: (e: HTMLDivElement, currentIndex: number, data: HTMLDivElement[]) => void;
};


const Toast = (props: ToastProps) => {
    const {
        wrapperClassName,
        async,
        autoHideMultiple,
        direction,
        autoCloseTime,
        lock,
        cascading,
        data,
        schemeBody,
        schemeHeader,
        closeBtnColor,
        closeDisabled,
        id,
        onClose
    } = props;


    const ANIM_SPEED = 300;
    const DEFAULT_AUTO_CLOSE_TIME = 3000;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const depth: number = autoHideMultiple ? data.slice(-2).length + 1 : data.length + 1;
    const cascadingEnabled = typeof cascading === 'undefined' ? true : cascading;

    // auto close
    const AUTO_CLOSE_TIME: any = typeof (autoCloseTime) === 'undefined' || autoCloseTime === false ? false : autoCloseTime;

    // progress animation
    const PROGRESS_TRANSITION_TIME: any = typeof (autoCloseTime) === 'undefined' || autoCloseTime === false ? DEFAULT_AUTO_CLOSE_TIME : autoCloseTime;


    const progressPausedRef = useRef<any[]>(data.map((v: any) => false));
    const progressObjRef = useRef<any[]>([]);
    const progressIntervalRef = useRef<any[]>(data.map((v: any) => null));
    const startProgressTimer = useCallback((el: any, i: number) => {

        // init progress
        let progressCurrentChunk = 100 / (PROGRESS_TRANSITION_TIME / 100);
        el.firstChild.style.width = 100 + '%';
        el.firstChild.ariaValueNow = 100;      


        // animation
        progressIntervalRef.current[i] = setInterval(() => {
            // console.log('toast setInterval');
            
            if (!progressPausedRef.current[i]) {
                
                const progPercent = 100 - progressCurrentChunk;
        

                el.firstChild.style.width = progPercent + '%';
                el.firstChild.ariaValueNow = progPercent;
                progressCurrentChunk++; 
                
        
                //
                if (progPercent === 0 || progPercent < 1) {  // may be 0.xxx
                    el.classList.add('complete');

                    // stop current animation
                    stopProgressTimer(i);

                    // hide toast item
                    const currentItem = el.closest('.toast-container');
                    handleClose(null, i as never, currentItem as never);
                }
            }

        }, PROGRESS_TRANSITION_TIME / 100);


    }, []);


    
    const clearAllProgressTimer = useCallback((curIndex: number | undefined = undefined) => {
        if (typeof curIndex === 'undefined') {
            data.forEach((item: any, i: number) => {
                clearInterval(progressIntervalRef.current[i]);
                progressIntervalRef.current[i] = null;
            });
        } else {
            data.forEach((item: any, i: number) => {
                if (i === curIndex) {
                    clearInterval(progressIntervalRef.current[i]);
                    progressIntervalRef.current[i] = null;
                }
            });
        }

    }, [data]);
    


    const stopProgressTimer = useCallback((index: number) => {
        clearInterval(progressIntervalRef.current[index]);
        progressIntervalRef.current[index] = null;

    }, [data]);
    

    function progressAnimBegin() {
        data.forEach((item: any, i: number) => {
            const el = progressObjRef.current[i];
            if (el !== null && typeof el !== 'undefined') startProgressTimer(el, i);
        });
    }


    function handleProgressPaused(e: any) {
        const _currentIndex = e.currentTarget.dataset.index;
        progressPausedRef.current[_currentIndex] = true;
    }

    function handleProgressStart(e: any) {
        const _currentIndex = e.currentTarget.dataset.index;
        progressPausedRef.current[_currentIndex] = false;
    }

    //
    function init() {
        if (rootRef.current === null) return;

        const $toast = rootRef.current;

        // Automatically hide multiple items
        // It creates a transition animation effect with multiple records and only one displayed.
        //------------------------------------------
        if (autoHideMultiple) {

            const _list: HTMLDivElement[] = [].slice.call($toast.querySelectorAll('.toast-container'));

            
            if (_list.length === 2) {
                _list.forEach((node: any, i: number) => {
                    node.classList.remove('auto-anim-switch', 'auto-anim-switch--initfirst', 'auto-anim-switch--first');

                    if (i !== _list.length - 1) {
                        node.classList.add('auto-anim-switch--initfirst'); // top element of source code
                    } else {
                        node.classList.add('auto-anim-switch--initfirst');   // bottom element of source code
                    }
                    
                });


                setTimeout(() => {
                    _list.forEach((node: any, i: number) => {
                        if (i !== _list.length - 1) {
                            node.classList.add('auto-anim-switch');
                        } else {
                            node.classList.add('auto-anim-switch--initfirst', 'auto-anim-switch--first');
                        }
                    });
                }, ANIM_SPEED/2);
            } else {

                _list.forEach((node: any, i: number) => {
                    if (i !== _list.length - 1) {
                        node.classList.add('auto-anim-switch');
                    } else {
                        node.classList.add('auto-anim-switch--initfirst', 'auto-anim-switch--first');
                    }
                });
            }


        }

        
        // Initialize data
        //--------------
        if ( $toast.dataset.async == 'true' ) {
            const _list: HTMLDivElement[] = [].slice.call($toast.querySelectorAll('.toast-container'));
            _list.forEach((node: any, i: number) => {
                node.classList.remove('hide-end');
                // rearrange
                if (cascadingEnabled) node.style.transform = `perspective(100px) translateZ(-${2 * i}px) translateY(${35 * i}px)`;

            });

        }

    }


    function autoClose() {

        // Auto hide
        //--------------
        if (AUTO_CLOSE_TIME !== false) {

            // start animation
            progressAnimBegin();
        }

    }

    function handleClose(e: any, index: number, currentItem: HTMLDivElement) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();
        if (rootRef.current === null) return;

        const curIndex = Number(index);
        
        const _list: HTMLDivElement[] = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
        currentItem.classList.add('hide-start');

        //Let the removed animation show
        setTimeout(() => {

            _list.forEach((node: any, i: number) => {
                node.classList.remove('hide-start');
            });

            // remove current
            currentItem.classList.add('hide-end');

            // rearrange
            if (cascadingEnabled) {
                _list.filter((node: any) => !node.classList.contains('hide-end')).forEach((node: any, k: number) => {
                    node.style.transform = `perspective(100px) translateZ(-${2 * k}px) translateY(${35 * k}px)`;
                });
            }

            // stop all animations or current animation
            if (_list.length === 1 || autoHideMultiple) {
                clearAllProgressTimer();
            } else {
                clearAllProgressTimer(curIndex);
            }
            

            //
            onClose?.(rootRef.current, curIndex, _list.filter((node: HTMLDivElement) => !node.classList.contains('hide-end') ));          

        }, ANIM_SPEED);

        
    }


    useEffect(() => {

        // Initialize Toast Item
        //------------------------------------------
        init();


        // Initialize Progress
        //------------------------------------------
        autoClose();


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {

            // Stop all animations
            clearAllProgressTimer();

        }

    }, [data]);

    return (
        <>

            <RootPortal show={true} containerClassName="Toast">

                <div 
                    id={`toasts__wrapper-${idRes}`} 
                    data-async={async ? async : false} 
                    className={`toasts__wrapper toasts__wrapper--${direction ? direction : 'bottom-center'} ${cascadingEnabled ? 'toasts__wrapper--cascading' : ''} ${wrapperClassName || ''}`} 
                    ref={rootRef}
                >
                    <div className="toasts">
                        {(autoHideMultiple ? data.slice(-2) : data).map((item: any, i: number) => {
                            return <Item
                                ref={el => progressObjRef.current[i] = el}
                                onlyOne={data.length === 1 ? true : false}
                                depth={depth - i}
                                key={i}
                                index={i}
                                title={item.title}
                                note={item.note}
                                theme={item.theme}
                                lock={lock}
                                cascading={cascadingEnabled}
                                schemeBody={schemeBody}
                                schemeHeader={schemeHeader}
                                closeBtnColor={closeBtnColor}
                                closeDisabled={closeDisabled}
                                message={item.message}
                                autoCloseTime={AUTO_CLOSE_TIME}
                                evStart={handleProgressStart}
                                evPause={handleProgressPaused}
                                evClose={handleClose}
                            />

                        })}
                    </div>

                </div>
            </RootPortal>


        </>
    )
};


export default Toast;