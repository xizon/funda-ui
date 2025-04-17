import React, { useRef, useEffect, useState, useCallback } from 'react';


import RootPortal from 'funda-root-portal';
import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


import Item from './Item';

import type { ToastOptions } from './types';

export interface ToastProps {
    data: Array<ToastOptions>;
    
    // default props
    defaultWrapperClassName?: string;
    defaultOnlyShowOne?: boolean;
    defaultDirection?: ToastOptions['direction'];
    defaultCascading?: boolean;
    defaultReverseDisplay?: boolean;

    onUpdate?: (updatedData: Array<ToastOptions>) => void; 
}


export const Toast: React.FC<ToastProps> = ({ 
    data, 

    // default props
    defaultWrapperClassName,
    defaultOnlyShowOne,
    defaultDirection,
    defaultCascading,
    defaultReverseDisplay,

    onUpdate,
}) => {
    const ANIM_SPEED = 300;
    const DEFAULT_AUTO_CLOSE_TIME = 3000;
    const uniqueID = useComId();
    const rootRef = useRef<any>(null);

    // action id
    const [currentActionId, setCurrentActionId] = useState<string | number | null | undefined>(undefined);

    // 追踪每个 toast 的动画状态
    const [animatedToasts, setAnimatedToasts] = useState<Set<string>>(new Set());

    // force display
    const [initPopRoot, setInitPopRoot] = useState<boolean>(false);

    // Get the global configuration from the first toast item (if it exists)
    const firstToast = data[0] || {};
    
    // Use default values but allow individual toast overrides
    const wrapperClassName = firstToast.wrapperClassName || defaultWrapperClassName;
    const direction = firstToast.direction || defaultDirection;
    const cascadingEnabled = typeof firstToast.cascading !== 'undefined' ? firstToast.cascading : defaultCascading;
    const onlyShowOne = typeof firstToast.onlyShowOne !== 'undefined' ? firstToast.onlyShowOne : defaultOnlyShowOne;
    const reverseDisplay = typeof firstToast.reverseDisplay !== 'undefined' ? firstToast.reverseDisplay : defaultReverseDisplay;

    const depth: number = data.length + 1;

    // Processes the order of data based on the "direction" and "reverseDisplay" parameters
    const getProcessedData = useCallback(() => {
        let processedData = [...data];
      
        if (
            (direction?.startsWith('top-') || direction?.startsWith('vertical-')) && 
            reverseDisplay
        ) {
            processedData.reverse();
        } else if (
            direction?.startsWith('bottom-') && 
            !reverseDisplay
        ) {
            processedData.reverse();
        }

        // If only one is displayed, only the last one is returned
        return onlyShowOne ? [processedData[processedData.length - 1]] : processedData;
    }, [data, direction, reverseDisplay, onlyShowOne]);



    // Store the status of each toast
    const progressPausedRef = useRef<Map<string, boolean>>(new Map());
    const progressObjRef = useRef<Map<string, any>>(new Map());
    const progressIntervalRef = useRef<Map<string, NodeJS.Timeout | null>>(new Map());

    const startProgressTimer = useCallback((el: any, toastId: string, i: number) => {
        // If the toast already has a timer running, do not add it again
        if (progressIntervalRef.current.has(toastId)) {
            return;
        }
        const currentToast = data[i];

        // progress animation
        const PROGRESS_TRANSITION_TIME: any = typeof (currentToast.autoCloseTime) === 'undefined' || currentToast.autoCloseTime === false ? DEFAULT_AUTO_CLOSE_TIME as number : currentToast.autoCloseTime;

        // init progress
        let progressCurrentChunk = 100 / (PROGRESS_TRANSITION_TIME / 100);
        el.firstChild.style.width = 100 + '%';
        el.firstChild.ariaValueNow = 100;

        // animation
        const intervalId = setInterval(() => {
            // console.log('toast setInterval');


            if (!progressPausedRef.current.get(toastId)) {
                const progPercent = 100 - progressCurrentChunk;

                el.firstChild.style.width = progPercent + '%';
                el.firstChild.ariaValueNow = progPercent;
                progressCurrentChunk++;


                //
                if (progPercent === 0 || progPercent < 1) { // may be 0.xxx
                    el.classList.add('complete');

                    // stop current animation
                    stopProgressTimer(toastId);

                    // hide toast item
                    const currentItem = el.closest('.toast-container');
                    handleClose(null, i, currentItem);
                }
            }
        }, PROGRESS_TRANSITION_TIME / 100);

        // Save the timer ID
        progressIntervalRef.current.set(toastId, intervalId);

    }, [data]);

    const clearAllProgressTimer = useCallback(() => {
        progressIntervalRef.current.forEach((timer, id) => {
            if (timer) {
                clearInterval(timer);
                progressIntervalRef.current.set(id, null);
            }
        });
        progressIntervalRef.current.clear();
    }, []);

    const stopProgressTimer = useCallback((toastId: string) => {
        const timer = progressIntervalRef.current.get(toastId);
        if (timer) {
            clearInterval(timer);
            progressIntervalRef.current.delete(toastId);
        }
    }, []);


    function handleProgressPaused(e: any) {
        const toastId = e.currentTarget.dataset.toastId;
        progressPausedRef.current.set(toastId, true);
    }

    function handleProgressStart(e: any) {
        const toastId = e.currentTarget.dataset.toastId;
        progressPausedRef.current.set(toastId, false);
    }

    function handleClose(e: any, index: number, currentItem: HTMLDivElement) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();
        if (rootRef.current === null) return;

        const curIndex = Number(index);
        const currentToast = data[curIndex];
        const toastId = currentToast.id as string;
        const _list: HTMLDivElement[] = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
        currentItem.classList.add('hide-start');


        //Let the removed animation show
        setTimeout(() => {
            _list.forEach((node: any) => {
                node.classList.remove('hide-start');
            });

            // remove current
            currentItem.classList.add('hide-end');

            // rearrange
            if (cascadingEnabled) {
                _list.filter((node: any) => !node.classList.contains('hide-end'))
                    .forEach((node: any, k: number) => {
                        node.style.transform = `perspective(100px) translateZ(-${2 * k}px) translateY(${35 * k}px)`;
                    });
            }


            // stop all animations or current animation
            stopProgressTimer(toastId);

            // close callback
            const currentToast = data[curIndex];
            if (currentToast.onClose) {
                currentToast.onClose(
                    rootRef.current,
                    curIndex,
                    _list.filter((node: HTMLDivElement) => !node.classList.contains('hide-end'))
                );
            }

            // After the animation ends, remove the item from the data source
            if (onUpdate) {
                const newData = [...data];
                newData.splice(curIndex, 1);
                onUpdate(newData);
            }



        }, ANIM_SPEED);
    }

    useEffect(() => {
        if (initPopRoot) {
            const $toast = rootRef.current;
            if (!$toast) return;

            // When "onlyShowOne" is true, only the latest toast is kept
            //--------------
            if (onlyShowOne && data.length > 1) {
                // Clear all old timers
                data.slice(0, -1).forEach((toast, index) => {
                    stopProgressTimer(toast.id as string);
                });

                //Only keep the latest toast
                if (onUpdate) {
                    onUpdate([data[data.length - 1]]);
                }
                
                return;
            }


            // Auto hide
            //--------------
            data.forEach((toast, i) => {
                // auto close
                const AUTO_CLOSE_TIME: any = typeof (toast.autoCloseTime) === 'undefined' || toast.autoCloseTime === false ? false : toast.autoCloseTime;
                
                if (AUTO_CLOSE_TIME !== false) {
                    const el = progressObjRef.current.get(toast.id as string);
                    if (el) {
                        startProgressTimer(el, toast.id as string, i);
                    }
                }
            });

        }

    }, [data, initPopRoot, onlyShowOne]);

    // Handling animation when data changes
    useEffect(() => {
        if (initPopRoot && data.length > 0) {
            // Add animation to the new toast
            const newToasts = data.filter(toast => !animatedToasts.has(toast.id as string));
            
            if (newToasts.length > 0) {
                // Keep the new toast hidden first
                newToasts.forEach(toast => {
                    const progressEl = progressObjRef.current.get(toast.id as string);
                    if (progressEl) {
                        const currentItem = progressEl.closest('.toast-container');
                        currentItem.classList.add('animate-ready');
                    }
                });

                // Use "requestAnimationFrame" to ensure the DOM is updated before adding animation classes
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        newToasts.forEach(toast => {
                            const progressEl = progressObjRef.current.get(toast.id as string);
                            if (progressEl) {
                                const currentItem = progressEl.closest('.toast-container');
                                currentItem.classList.remove('animate-ready');
                                currentItem.classList.add('animate-in');
                            }
                        });
                        
                        // Update the animated toast list
                        setAnimatedToasts(prev => {
                            const newSet = new Set(prev);
                            newToasts.forEach(toast => newSet.add(toast.id as string));
                            return newSet;
                        });
                    }, 50); // A small delay ensures that animate-ready styles are applied
                });
            }
        }
    }, [data, initPopRoot]);

    // Monitor the currently displayed toast id
    useEffect(() => {
        if (onlyShowOne && data.length > 0) {
            const latestToast = data[data.length - 1];
            setCurrentActionId(latestToast.actionId);
        } else if (data.length > 0) {
            const currentIds = data.map(toast => toast.actionId);
            setCurrentActionId(currentIds[currentIds.length - 1]);
        } else {
            setCurrentActionId(null);
        }
    }, [data, onlyShowOne]);

    // The timer and data are emptied each time "useToast().show()" is executed
    useEffect(() => {
        if (currentActionId === null || typeof currentActionId === 'undefined') return;
        if (onUpdate) {
            onUpdate([data[data.length - 1]]);
        }

        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            clearAllProgressTimer();
        };
    }, [currentActionId]);


    // init
    useEffect(() => {
        setInitPopRoot(true);

        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            clearAllProgressTimer();
        };
    }, []);


    
    
    return (
        <RootPortal show={initPopRoot} containerClassName="Toast">
            <div
                id={`toasts__wrapper-${uniqueID}`}
                className={combinedCls(
                    'toasts__wrapper',
                    `toasts__wrapper--${direction}`,
                    clsWrite(wrapperClassName, ''),
                    {
                        'toasts__wrapper--cascading': cascadingEnabled,
                        'toasts__wrapper--only-one"': onlyShowOne
                    }
                )} 
                ref={rootRef}
            >
                <div className="toasts">
                    {getProcessedData().map((item, i) => (
                        <Item
                            ref={el => progressObjRef.current.set(item.id as string, el)}
                            key={item.id}
                            uniqueID={item.id}
                            isNew={!progressObjRef.current.has(item.id as string)} // Mark the new toast
                            onlyOne={data.length === 1}
                            depth={depth - i}
                            index={i}
                            title={item.title}
                            note={item.note}
                            theme={item.theme}
                            lock={item.lock}
                            cascading={cascadingEnabled}
                            schemeBody={item.schemeBody}
                            schemeHeader={item.schemeHeader}
                            closeBtnColor={item.closeBtnColor}
                            closeDisabled={item.closeDisabled}
                            message={item.message}
                            autoCloseTime={item.autoCloseTime}
                            evStart={handleProgressStart}
                            evPause={handleProgressPaused}
                            evClose={handleClose}
                        />
                    ))}
                </div>
            </div>
        </RootPortal>
    );
};

export default Toast;