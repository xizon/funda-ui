import React, { useId, useState, useRef, useEffect } from 'react';

import { getAbsolutePositionOfStage } from './utils/get-element-property';


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
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const HOVER_DELAY = hoverDelay ? hoverDelay : 200;
    const MOUSE_OUT_DELAY = mouseOutDelay ? mouseOutDelay : HOVER_DELAY;

    const [hasBeenShown, setHasBeenShown] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);

    
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


    function handleMouseEnter(e: any) {
        stopTimerHover();
        stopTimerMouseout();
        startTimerHover();



        // update modal position
        const _modalRef: any = document.querySelector(`#tooltip__wrapper-${idRes}`);
        const _triggerRef: any = e.target;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef !== null && _triggerRef !== null) {

            const {x, y, width, height} = getAbsolutePositionOfStage(_triggerRef);

            let pos = _modalRef.dataset.microtipPosition;
            if (typeof pos === 'undefined') pos = 'top';
       
            // TOP
            //
            if (pos.indexOf('top') >= 0) {
                _modalRef.style.left = x + (width/2) + 'px';
                _modalRef.style.top = y - height - POS_OFFSET + 'px';
            }

       
            // BOTTOM
            //
            if (pos.indexOf('bottom') >= 0) {
                _modalRef.style.left = x + (width/2) + 'px';
                _modalRef.style.top = y + height + POS_OFFSET + 'px';
            }



            // Determine whether it exceeds the far right or left side of the screen
            const _modalContent = _modalRef.querySelector('.tooltip__content');
            const _modalBox = _modalContent.getBoundingClientRect();
            if (typeof _modalContent.dataset.offset === 'undefined') {

                if (_modalBox.right > window.innerWidth) {
                    const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                    _modalContent.dataset.offset = _modalOffsetPosition;
                    _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                    // console.log('_modalPosition: ', _modalOffsetPosition)
                }


                if (_modalBox.left < 0) {
                    const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                    _modalContent.dataset.offset = _modalOffsetPosition;
                    _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                    // console.log('_modalPosition: ', _modalOffsetPosition)
                }


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

    function handleTouchStart(e: any) {
        hideTip();
    }


    useEffect(() => {


        // Move HTML templates to tag end body </body>
        // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
        // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
        //--------------
        if (document.body !== null && modalRef.current !== null) {
            document.body.appendChild(modalRef.current);
        }


        window.removeEventListener('touchstart', handleTouchStart);
		window.addEventListener( 'touchstart', handleTouchStart);

        return () => {
            stopTimerHover();
            stopTimerMouseout();
            window.removeEventListener('touchstart', handleTouchStart);
            document.querySelector(`#tooltip__wrapper-${idRes}`)?.remove();

        };

  
    }, []);


    return (
        <>

            {/* FIX: "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node" when using remove() */}
            <span>
                <div
                    ref={modalRef}
                    id={`tooltip__wrapper-${idRes}`}
                    className={`${wrapperClassName || wrapperClassName === '' ? `tooltip__wrapper ${wrapperClassName}` : `tooltip__wrapper d-inline-block`} ${isShow ? 'active' : ''}`}
                    role="tooltip"
                    data-microtip-position={direction || 'top'}
                    data-microtip-size={size || 'auto'}
                >
                    <div className="tooltip__content">{content}</div>
                </div>
            </span>


            <div
                ref={rootRef}
                data-overlay-id={`tooltip__wrapper-${idRes}`}
                className="tooltip__trigger d-inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>


        </>
    )
};


export default Tooltip;