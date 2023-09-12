import React, { useId, useEffect, useState, useRef } from 'react';

import Item from './Item';

declare global {
    interface Window {
        setCloseToast?: any;
    }
}


type ToastProps = {
    /** Specify data of toasts as a JSON string format. */
    data: any[any];
    /** Use asynchronous triggering */
    async?: boolean;
    /** The direction of the toast. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order. 
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** Starts from the top position of the Array when we use the automatic close. */
    autoCloseReverse?: boolean;
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
    /** -- */
    id?: string;
    onClose?: (e: HTMLDivElement, currentIndex: number, data: HTMLDivElement[]) => void;
};


const Toast = (props: ToastProps) => {
    const {
        async,
        direction,
        autoCloseTime,
        autoCloseReverse,
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


    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    let depth: number = data.length + 1;
    const cascadingEnabled = typeof cascading === 'undefined' ? true : cascading;

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



        // Auto hide
        //--------------
        const _autoCloseTime: any = typeof (autoCloseTime) === 'undefined' || autoCloseTime === false ? false : autoCloseTime;
        if (_autoCloseTime !== false) {
            const items = JSON.parse(JSON.stringify(data));
            autoClose(0, items, _autoCloseTime);

        }


    }

    function handleClose(index: number, currentItem: HTMLDivElement) {

  
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
                _list.filter((node: any) => !node.classList.contains('hide-end')).forEach((node: any, index: number) => {
                    node.style.transform = `perspective(100px) translateZ(-${2 * index}px) translateY(${35 * index}px)`;
                });
            }


            //
            onClose?.(rootRef.current, Number(index), _list.filter((node: HTMLDivElement) => !node.classList.contains('hide-end') ));          

        }, 300);
    }

    function autoClose(index: number, items: any[], delay: number = 3000) {
        if ( items.length  === index ) {
            clearTimeout(window.setCloseToast);
            return;
        }
        

        window.setCloseToast = setTimeout(() => {
            const _list: HTMLDivElement[] = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));

            if ( autoCloseReverse ) {
                _list[items.length-index].classList.add('hide-start');
            } else {
                _list[index-1].classList.add('hide-start');
            }
            

            //Let the removed animation show
            setTimeout(() => {
                
                _list.forEach((node: any) => {
                    node.classList.remove('hide-start');
                });

                // remove current
                if ( autoCloseReverse ) {
                    _list[items.length-index].classList.add('hide-end');

                    //
                    onClose?.(rootRef.current, Number(items.length-index), _list.filter((node: HTMLDivElement) => !node.classList.contains('hide-end') ));

                } else {
                    _list[index-1].classList.add('hide-end');
                    //
                    onClose?.(rootRef.current, Number(index-1), _list.filter((node: HTMLDivElement) => !node.classList.contains('hide-end') ));
                }
                
                // rearrange
                if (cascadingEnabled) {
                    _list.filter((node: any) => !node.classList.contains('hide-end')).forEach((node: any, i: number) => {
                        node.style.transform = `perspective(100px) translateZ(-${2 * i}px) translateY(${35 * i}px)`;
                    });    
                }


                //
                autoClose(index, items, delay);

            }, 300); 
        }, delay);
     
        index++;
    }



    useEffect(() => {

        // Initialize 
        //------------------------------------------
        init();


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {

            // Cancels a timeout previously established by calling setTimeout().
            clearTimeout(window.setCloseToast);

            // Remove all toasts
            const _el = document.querySelector(`#toasts__wrapper-${idRes}`);
            if ( _el !== null ) _el.remove();

            // remove all events
            [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach( (node: HTMLElement) => {
                node.replaceWith(node.cloneNode(true));
            });    

        }

    }, [data]);

    return (
        <div>

            <div id={`toasts__wrapper-${idRes}`} data-async={async ? async : false} className={`toasts__wrapper toasts__wrapper--${direction ? direction : 'bottom-center'} ${cascadingEnabled ? 'toasts__wrapper--cascading' : ''}`} ref={rootRef}>
                <div className="toasts">
                    {data.map((item: any, i: number) => {
                        return <Item
                            depth={depth - i}
                            key={i}
                            index={i}
                            title={item.title}
                            note={item.note}
                            lock={lock}
                            cascading={cascadingEnabled}
                            schemeBody={schemeBody}
                            schemeHeader={schemeHeader}
                            closeBtnColor={closeBtnColor}
                            closeDisabled={closeDisabled}
                            message={item.message}
                        /> 

                    })}
                </div>

            </div>

        </div>
    )
};


export default Toast;