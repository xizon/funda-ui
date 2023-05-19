import React, { useId, useEffect, useState, useRef } from 'react';

import Item from './Item';

type ToastProps = {
    /** The direction of the toaster. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order. 
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** Starts from the top position of the Array when we use the automatic close. */
    autoCloseReverse?: boolean;
    /** You can not close pop-win when it is enabled */
    lock?: boolean;
    /** Specify data of toasts as a JSON string format. 
     * Such as: `[{"title":"Title 1","message":"description..."},{"title":"Title 2","message":"description..."}]` */
    data?: any[any];
    /** Self-defined class name for body*/
    schemeBody?: string;
    /** Self-defined class name for header */
    schemeHeader?: string;
    /** Set the color of the close button */
    closeBtnColor?: string;
    /** -- */
    id?: string;
};


const Toast = (props: ToastProps) => {
    const {
        direction,
        autoCloseTime,
        autoCloseReverse,
        lock,
        data,
        schemeBody,
        schemeHeader,
        closeBtnColor,
        id
    } = props;


    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [toasts, setToasts] = useState<any[]>(data ? data : []);
    let depth: number = toasts.length + 1;
    let autoHideTimeout: any = null;


    function handleClose(index: number) {
        const items = JSON.parse(JSON.stringify(toasts));
        if (items[index] !== undefined) {
            const _list = rootRef.current.querySelectorAll('.toast-container');
            _list[index].classList.add('hide');

            //Let the removed animation show
            setTimeout(() => {
                [].slice.call(_list).forEach((node: any) => {
                    node.classList.remove('hide');
                });

                items.splice(index, 1); //delete one item
                setToasts(items);
            }, 300);
        }
    }

    function autoClose(index: number, items: any[], delay: number = 3000) {
        if ( items.length  === 0 ) return;

        autoHideTimeout = setTimeout(() => {
            const _list = rootRef.current.querySelectorAll('.toast-container');

            if ( autoCloseReverse ) {
                _list[items.length-1].classList.add('hide');
            } else {
                _list[0].classList.add('hide');
            }
            

            //Let the removed animation show
            setTimeout(() => {
                [].slice.call(_list).forEach((node: any) => {
                    node.classList.remove('hide');
                });

                if ( autoCloseReverse ) {
                    items.splice(items.length-1, 1);
                } else {
                    items.splice(0, 1);
                }
                
                
                setToasts(items);
                autoClose(index++, items, delay);
            }, 300); 
        }, delay * (index + 1));
    }



    useEffect(() => {


        // Move HTML templates to tag end body </body>
        // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
        //------------------------------------------
        document.body.appendChild(rootRef.current);
        
        [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach( (node: HTMLElement) => {
            node.addEventListener('pointerdown', (e: any) => {
                const index = node.dataset.index;
                handleClose(index as never);
            });
        });


        // Auto hide
        //--------------
        const _autoCloseTime: any = typeof (autoCloseTime) === 'undefined' || autoCloseTime === false ? false : autoCloseTime;
        if (_autoCloseTime !== false) {
            const items = JSON.parse(JSON.stringify(toasts));
            autoClose(0, items, _autoCloseTime);
        }

        return () => {

            // Cancels a timeout previously established by calling setTimeout().
            //--------------
            clearTimeout(autoHideTimeout);

        }

    }, [toasts]);

    return (
        <>

            <div id={`toaster-${idRes}`} className={`toaster__container toaster__container--${direction ? direction : 'bottom-center'}`} ref={rootRef}>
                <div className="toaster">
                    {toasts.map((item, i) => {
                        return <Item
                            depth={depth - i}
                            key={i}
                            index={i}
                            title={item.title}
                            note={item.note}
                            lock={lock}
                            schemeBody={schemeBody}
                            schemeHeader={schemeHeader}
                            closeBtnColor={closeBtnColor}
                            message={item.message}
                            closeEv={handleClose}
                        /> 

                    })}
                </div>

            </div>

        </>
    )
};


export default Toast;