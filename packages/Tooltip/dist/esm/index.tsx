import React, { useState, useRef, useEffect } from 'react';

import RootPortal from 'funda-root-portal';
import {
    useComId,
    useClickOutside,
    getAbsolutePositionOfStage
} from 'funda-utils';



declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}


type TooltipProps = {
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
    /** -- */
    id?: string;
    children: React.ReactNode;
};

const useContainerDimensions = (myRef: any) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const getDimensions = () => ({
            width: myRef.current.offsetWidth,
            height: myRef.current.offsetHeight
        })

        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;
};


const Tooltip = (props: TooltipProps) => {
    const {
        wrapperClassName,
        direction,
        offset,
        exceededSidePosOffset,
        size,
        hoverDelay,
        mouseOutDelay,
        content,
        id,
        children
    } = props;


    const POS_OFFSET = Number(offset) || 10;
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



    // click outside
    useClickOutside({
        enabled: isShow && rootRef.current,
        isOutside: (event: any) => {
            // close dropdown when other dropdown is opened
            return (
                (rootRef.current !== event.target && !rootRef.current.contains(event.target as HTMLElement))
            )
        },
        handle: (event: any) => {
            hideTip();
        }
    }, [isShow, rootRef]);



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
        
        const _modalContent = _modalRef.querySelector('.tooltip__content');
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined') {

            // 10 pixels is used to account for some bias in mobile devices
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
        stopTimerHover();
        stopTimerMouseout();
        startTimerMouseout();
    }


    function hideTip() {
       setIsShow(false);
    }


    useEffect(() => {
        return () => {
            stopTimerHover();
            stopTimerMouseout();
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
                data-overlay-id={`tooltip__wrapper-${idRes}`}
                className="tooltip__trigger d-inline-block"
                data-microtip-position={direction || 'top'}
                data-microtip-size={size || 'auto'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>


            <RootPortal show={isShow} containerClassName="Tooltip">
                <div
                    ref={modalRef}
                    id={`tooltip__wrapper-${idRes}`}
                    className={`tooltip__wrapper ${wrapperClassName || '' } active`}
                    role="tooltip"
                    data-microtip-position={direction || 'top'}
                    data-microtip-size={size || 'auto'}
                    style={{
                        left: position.x,
                        top: position.y,
                        display: 'none'
                    }}
                >
                    <div className="tooltip__content">{content}</div>
                </div>

            </RootPortal>





        </>
    )
};


export default Tooltip;