import React, { useId, useState, useRef, useEffect } from 'react';


type TooltipProps = {
    wrapperClassName?: string;
	/** The direction of the tip. Defaults to `top`. Possible values are: `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left` */
	direction?: string;
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
        size,
        hoverDelay,
        mouseOutDelay,
        content,
        id,
        children
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
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

            if (!isShow) setIsShow(true);

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


    function handleMouseEnter() {
        stopTimerHover();
        stopTimerMouseout();
        startTimerHover();
    }

    function handleMouseLeave() {
        stopTimerHover();
        stopTimerMouseout();
        startTimerMouseout();
    }


    function hideTip() {
        if (isShow) setIsShow(false);
    }

    function handleTouchStart(e: any) {
        hideTip();
    }


    useEffect(() => {

        window.removeEventListener('touchstart', handleTouchStart);
		window.addEventListener( 'touchstart', handleTouchStart);

        return () => {
            stopTimerHover();
            stopTimerMouseout();
            window.removeEventListener('touchstart', handleTouchStart);
        };

  
    }, []);


    return (
        <>

            <div
                ref={rootRef}
                id={idRes}
                className={`${wrapperClassName || wrapperClassName === '' ? `tooltip__wrapper ${wrapperClassName}` : `tooltip__wrapper d-inline-block`} ${isShow ? 'active' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                role="tooltip"
                data-microtip-position={direction || 'top'} 
                data-microtip-size={size || 'auto'}
            >
                <div className="tooltip__content">{content}</div>

                {children}
            </div>



        </>
    )
};


export default Tooltip;