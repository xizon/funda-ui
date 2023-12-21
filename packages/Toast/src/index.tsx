import React, { useId, useEffect, useRef, useCallback } from 'react';

import Item from './Item';



type ToastProps = {
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


    const DEFAULT_AUTO_CLOSE_TIME = 3000;
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    let depth: number = autoHideMultiple ? data.slice(-2).length + 1 : data.length + 1;
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
                    handleClose(i as never, currentItem as never);
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
        

        // Move HTML templates to tag end body </body>
        // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
        // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
        //------------------------------------------
        if ( document.body !== null ) {
            document.body.appendChild(rootRef.current);
            [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach( (node: HTMLElement) => {
                node.addEventListener('pointerdown', (e: any) => {
                    const index = node.dataset.index;
                    const currentItem = node.closest('.toast-container');
                    handleClose(index as never, currentItem as never);
                });
            });      
            
            [].slice.call(rootRef.current.querySelectorAll('.toast-container')).forEach( (node: HTMLElement) => {
                node.addEventListener('mouseenter', handleProgressPaused);
                node.addEventListener('mouseleave', handleProgressStart);
            });   


            
            // Automatically hide multiple items
            // It creates a transition animation effect with multiple records and only one displayed.
            if (autoHideMultiple) {
                const _list: HTMLDivElement[] = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
                _list.forEach((node: any, i: number) => {
                    if (i !== _list.length - 1) {
                        node.classList.add('auto-anim-switch');
                    } else {
                        node.classList.add('auto-anim-switch--initfirst');
                        node.classList.add('auto-anim-switch--first');
                    }
                });
            }



        }



        

        // Initialize data
        //--------------
        const $toast = document.querySelector(`#${rootRef.current.id}`) as HTMLElement;
        if ( $toast !== null ) {
            if ( $toast.dataset.async == 'true' ) {

                const _list: HTMLDivElement[] = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
                _list.forEach((node: any, i: number) => {
                    node.classList.remove('hide-end');
                    // rearrange
                    if (cascadingEnabled) node.style.transform = `perspective(100px) translateZ(-${2 * i}px) translateY(${35 * i}px)`;

                });

            }

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

    function handleClose(index: number, currentItem: HTMLDivElement) {
        const curIndex = Number(index);
        if (rootRef.current === null) return;

  
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

        }, 300);

        
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

            // Remove all toasts
            const _el = document.querySelector(`#toasts__wrapper-${idRes}`);
            if ( _el !== null ) _el.remove();

            // remove all events
            if (rootRef.current !== null) {
                [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach( (node: HTMLElement) => {
                    node.replaceWith(node.cloneNode(true));
                });   

                [].slice.call(rootRef.current.querySelectorAll('.toast-container')).forEach( (node: HTMLElement) => {
                    node.removeEventListener('mouseenter', handleProgressPaused);
                    node.removeEventListener('mouseleave', handleProgressStart);
                });   
    
            }
 

        }

    }, [data]);

    return (
        <div>

            <div id={`toasts__wrapper-${idRes}`} data-async={async ? async : false} className={`toasts__wrapper toasts__wrapper--${direction ? direction : 'bottom-center'} ${cascadingEnabled ? 'toasts__wrapper--cascading' : ''}`} ref={rootRef}>
                <div className="toasts">
                    {(autoHideMultiple ? data.slice(-2) : data).map((item: any, i: number) => {
                        return <Item
                                    ref={el => progressObjRef.current[i] = el } 
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
                                /> 

                    })}
                </div>

            </div>

        </div>
    )
};


export default Toast;