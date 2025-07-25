import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef, useMemo } from 'react';

import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import { getElCSS } from 'funda-utils/dist/cjs/inputsCalculation';



export type TooltipProps = {
    triggerClassName?: string;
    wrapperClassName?: string;
	/** The direction of the tip. Defaults to `top`. Possible values are: `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left` */
	direction?: string;
    /** Position offset */
    offset?: number;
    /** Offset px that exceeds the far right or left side of the screen */
    exceededSidePosOffset?: number;
    /** The size of the content area. Defaults to `auto`. Possible values are: `auto`, `large`, `medium`, `small` */
    size?: string;
    /** The number of milliseconds to determine hover intent, defaults to 200 */
    hoverDelay?: number;
    /** The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value */
    mouseOutDelay?: number;
    /** Set a piece of text or HTML code */
    content?: React.ReactNode;
    /** If true, Tooltip is controlled by parent via ref, not by mouse events */
    controlled?: boolean;
    /** Custom color for the popup arrow */
    popupArrowColor?: number[];
    /** Custom style for the popup content */
    popupContentStyle?: React.CSSProperties;
    /** If true, tooltip closes only if mouse does not enter wrapper within timeout after leaving trigger */
    delayedClose?: boolean;
    /** Timeout in ms for delayed close (ms) */
    delayedCloseTimeout?: number;
    /** Called when mouse enters the tooltip wrapper */
    onContentMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** Called when mouse leaves the tooltip wrapper */
    onContentMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};

// Use forwardRef to expose imperative methods
const Tooltip = forwardRef<any, TooltipProps>((props, ref) => {
    const {
        triggerClassName,
        wrapperClassName,
        direction,
        offset,
        exceededSidePosOffset,
        size,
        hoverDelay,
        mouseOutDelay,
        content,
        id,
        children,
        controlled,
        popupArrowColor,
        popupContentStyle,
        delayedClose,
        delayedCloseTimeout,
        onContentMouseEnter,
        onContentMouseLeave
    } = props;


    const POS_OFFSET = Number(offset) || 4;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const HOVER_DELAY = hoverDelay ? hoverDelay : 200;
    const MOUSE_OUT_DELAY = mouseOutDelay ? mouseOutDelay : HOVER_DELAY;

    const [hasBeenShown, setHasBeenShown] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [position, setPosition] = useState<any>({
        x: 0,
        y: 0
    }); 

    const popupArrowStyle = useMemo(() => {
        if (
            typeof popupArrowColor !== 'undefined' &&
            Array.isArray(popupArrowColor) &&
            popupArrowColor.length === 4
        ) {
            return {
                '--cus-tooltip-arrow-bg-top': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-tooltip-arrow-bg-bottom': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-tooltip-arrow-bg-left': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-tooltip-arrow-bg-right': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
            };
        }
        return undefined;
    }, [popupArrowColor]);

    // Expose show/hide methods to parent via ref
    useImperativeHandle(ref, () => ({
        show: () => {
            // Find the trigger element
            const triggerEl = rootRef.current;
            if (triggerEl) {
                // Calculate position (copy from handleMouseEnter)
                const { x, y, width, height } = getAbsolutePositionOfStage(triggerEl);
                let pos = triggerEl.dataset.microtipPosition;
                if (typeof pos === 'undefined') pos = 'top';

                if (pos.indexOf('top') >= 0) {
                    setPosition({
                        x: x + (width / 2) + 'px',
                        y: y - height - POS_OFFSET + 'px'
                    });
                }
                if (pos.indexOf('bottom') >= 0) {
                    setPosition({
                        x: x + (width / 2) + 'px',
                        y: y + height + POS_OFFSET + 'px'
                    });
                }
            }
            setIsShow(true);
        },
        hide: () => {
            hideTip();
        }
    }), [POS_OFFSET]);


    // click outside
    useClickOutside({
        enabled: isShow && rootRef.current && !controlled, // Only auto-close if not controlled
        isOutside: (event: any) => {
            // Prevent closing when clicking inside the tooltip wrapper
            if (modalRef.current && modalRef.current.contains(event.target)) {
                return false; // Click is inside the tooltip wrapper, do not close
            }
            // close dropdown when other dropdown is opened
            return (
                (rootRef.current !== event.target && !rootRef.current.contains(event.target as HTMLElement))
            )
        },
        handle: (event: any) => {
            hideTip();
        }
    }, [isShow, rootRef, controlled]);



    //timer hover
    const timeoutHoverIdRef = useRef<any>(null);
    const startTimerHover = () => {
        timeoutHoverIdRef.current = setTimeout(() => {

            if (!hasBeenShown) {
                // this will render once, then fire componentDidUpdate, which will show the tip
                setHasBeenShown(true);
            }

            setIsShow(true);

        }, HOVER_DELAY);
    };

    const stopTimerHover = () => {
        clearTimeout(timeoutHoverIdRef.current);
        timeoutHoverIdRef.current = null;
    };


    //timer mouseout
    const timeoutMouseoutIdRef = useRef<any>(null);
    const startTimerMouseout = () => {
        timeoutMouseoutIdRef.current = setTimeout(() => {
            hideTip();
        }, MOUSE_OUT_DELAY);
    };

    const stopTimerMouseout = () => {
        clearTimeout(timeoutMouseoutIdRef.current);
        timeoutMouseoutIdRef.current = null;
    };

    const exceededOffsetInit = () => {
        // Determine whether it exceeds the far right or left side of the screen
        //------------------
        const _modalRef: any = modalRef.current;
        if (_modalRef === null) return;
        
        const _modalContent = _modalRef.querySelector('.cus-tooltip__content');
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {

            // Adjust the coordinates due to height
            //------------------
            const triggerEl: any = document.querySelector(`[data-overlay-id="${_modalRef.id}"]`);
            if (triggerEl !== null) {
                let pos = triggerEl.dataset.microtipPosition;
                if (typeof pos === 'undefined') pos = 'top';

                const _offsetY = _modalBox.height - getElCSS(_modalContent, 'font-size', true) - getElCSS(_modalContent, 'padding-top', true) - getElCSS(_modalContent, 'padding-bottom', true);

                // TOP
                //
                if (pos.indexOf('top') >= 0) {
                    _modalRef.style.transform = `translateY(-${_offsetY}px)`;
                }

            }

     
            // 10 pixels is used to account for some bias in mobile devices
            //------------------
            if ((_modalBox.right + 10) > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if ((_modalBox.left - 10) < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }

        }
    };

    function handleMouseEnter(e: any) {
        if (controlled) return; // Do nothing if controlled
        stopTimerHover();
        stopTimerMouseout();
        startTimerHover();

        // update modal position
        //------------------
        const _triggerRef: any = e.currentTarget;

        // console.log(getAbsolutePositionOfStage(_triggerRef));
        if (_triggerRef !== null) {

            const {x, y, width, height} = getAbsolutePositionOfStage(_triggerRef);

            let pos = _triggerRef.dataset.microtipPosition;
            if (typeof pos === 'undefined') pos = 'top';
       
            // TOP
            //
            if (pos.indexOf('top') >= 0) {
                setPosition({
                    x: x + (width/2) + 'px',
                    y: y - height - POS_OFFSET + 'px'
                });
            }

       
            // BOTTOM
            //
            if (pos.indexOf('bottom') >= 0) {
                setPosition({
                    x: x + (width/2) + 'px',
                    y: y + height + POS_OFFSET + 'px'
                });
            }

        }


    }
    

    function handleMouseLeave() {
        if (controlled) return; // Do nothing if controlled
        stopTimerHover();
        stopTimerMouseout();
        startTimerMouseout();
    }


    function hideTip() {
       setIsShow(false);
    }


    // Timer for delayed close
    const delayedCloseTimerRef = useRef<any>(null);
    const DELAYED_CLOSE_TIMEOUT = typeof delayedCloseTimeout === 'number' ? delayedCloseTimeout : 1500;

    // Handler for mouse leave on trigger (when delayedClose is enabled)
    function handleTriggerMouseLeave() {
        if (controlled) return;
        if (delayedClose) {
            // Start delayed close timer
            if (delayedCloseTimerRef.current) clearTimeout(delayedCloseTimerRef.current);
            delayedCloseTimerRef.current = setTimeout(() => {
                hideTip();
            }, DELAYED_CLOSE_TIMEOUT);
        } else {
            stopTimerHover();
            stopTimerMouseout();
            startTimerMouseout();
        }
    }

    // Handler for mouse enter on wrapper (cancel delayed close)
    function handleWrapperMouseEnter(event?: React.MouseEvent<HTMLDivElement>) {
        if (controlled) return;
        if (delayedClose && delayedCloseTimerRef.current) {
            clearTimeout(delayedCloseTimerRef.current);
            delayedCloseTimerRef.current = null;
        }
        // Call user-provided handler if present
        if (onContentMouseEnter && event) {
            onContentMouseEnter(event);
        }
    }

    // Handler for mouse leave on wrapper (restart delayed close timer)
    function handleWrapperMouseLeave(event?: React.MouseEvent<HTMLDivElement>) {
        if (controlled) return;
        if (delayedClose) {
            if (delayedCloseTimerRef.current) clearTimeout(delayedCloseTimerRef.current);
            delayedCloseTimerRef.current = setTimeout(() => {
                hideTip();
            }, DELAYED_CLOSE_TIMEOUT);
        }
        // Call user-provided handler if present
        if (onContentMouseLeave && event) {
            onContentMouseLeave(event);
        }
    }


    useEffect(() => {
        return () => {
            stopTimerHover();
            stopTimerMouseout();
            if (delayedCloseTimerRef.current) clearTimeout(delayedCloseTimerRef.current);
        };
    }, []);


    // Prevent element data from being unable to be obtained when ref is null
    useEffect(() => {
        exceededOffsetInit();
    });

    return (
        <>

            <div
                ref={rootRef}
                data-overlay-id={`cus-tooltip__wrapper-${idRes}`}
                className={combinedCls(
                    'cus-tooltip__trigger',
                    clsWrite(triggerClassName, 'd-inline-block')
                )}
                data-microtip-position={direction || 'top'}
                data-microtip-size={size || 'auto'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={delayedClose ? handleTriggerMouseLeave : handleMouseLeave}
            >
                {children}
            </div>


            <RootPortal show={isShow} containerClassName="Tooltip">
                <div
                    ref={modalRef}
                    id={`cus-tooltip__wrapper-${idRes}`}
                    className={combinedCls(
                        'cus-tooltip__wrapper',
                        wrapperClassName,
                        'active'
                    )}
                    role="tooltip"
                    data-microtip-position={direction || 'top'}
                    data-microtip-size={size || 'auto'}
                    style={{
                        left: position.x,
                        top: position.y,
                        display: 'none',
                        ...popupArrowStyle
                    }}
                    onMouseEnter={delayedClose || onContentMouseEnter ? (e) => handleWrapperMouseEnter(e) : undefined}
                    onMouseLeave={delayedClose || onContentMouseLeave ? (e) => handleWrapperMouseLeave(e) : undefined}
                >
                    <div className="cus-tooltip__content" style={{
                        ...popupContentStyle
                    }}>{content}</div>
                </div>

            </RootPortal>





        </>
    )
});

export default Tooltip;