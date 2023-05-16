import React, { useId, useState, useRef, useCallback } from 'react';


// Adapt the easing parameters of CSS3
enum EasingList {
    linear = 'linear',
    easeIn = 'ease-in',
    easeOut = 'ease-out',
    easeInOut = 'ease-in-out'
}


type ShowMoreLessProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` */
    defaultHeight?: string;
    /** /////  */
    /** Specify a class for the show trigger. */
    triggerShowClassName?: string;
    /** Specify a class for the hide trigger. */
    triggerHideClassName?: string;
    /** Set a piece of text or HTML code for the show trigger */
    triggerShowContent?: React.ReactNode;
    /** Set a piece of text or HTML code for the hide trigger */
    triggerHideContent?: React.ReactNode;
    /** Specifies the color effect of the mask */
    maskColor?: string;
    /** Set the opacity of the mask */
    maskOpacity?: number;
    /** Specifies the height of the mask */
    maskHeight?: string;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
};


const ShowMoreLess = (props: ShowMoreLessProps) => {
    const {
        speed,
        easing,
        defaultHeight,
        triggerShowClassName,
        triggerHideClassName,
        triggerShowContent,
        triggerHideContent,
        maskColor,
        maskOpacity,
        maskHeight,
        id,
        tabIndex,
        children
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);

    const color: string = maskColor ? maskColor.replace(/\,/g, ''): '255 255 255';
    const opacity: number = maskOpacity ? parseFloat(maskOpacity as never): 100;
    const duration: number = speed ? speed / 1000 : 0.5;
    const ease: string = EasingList[easing as never];
    const initHeight: number | string = defaultHeight ? defaultHeight : '8.5rem';

    const [displayEnabled, setDisplayEnabled] = useState<boolean>(false);
    const [height, setHeight] = useState<number | string>(initHeight);


    const handleChange = useCallback((e: any) => {
        e.preventDefault();

        setDisplayEnabled(!displayEnabled);

        if (height !== "auto") {
            setHeight(rootRef.current!.scrollHeight);
        } else {

            // If the height value is `auto` when hiding the content, there needs to be a delay 
            // (at least 1 millisecond), otherwise, the transition effect of translate cannot be presented
            setHeight(rootRef.current!.scrollHeight);
            setTimeout(() => setHeight(initHeight), 1); 
            
        }
        
      }, [height]);


    // Handling events when the animation execution is complete
    function updateAfterTransition() {
        if (displayEnabled) {
            setHeight('auto');
        }
    }


    return (
        <>

            <div
                ref={rootRef}
                id={idRes}
                onTransitionEnd={() => updateAfterTransition()}
                className={displayEnabled ? 'show-more-less__wrapper active' : 'show-more-less__wrapper'}
                style={{
                    height: height,
                    overflow: "hidden",
                    transition: `all ${duration}s ${ease} 0s`,
                }}
            >
                {children}


                {maskOpacity !== 0 ? <span className="show-more-less__mask" style={{ background: `linear-gradient(to bottom, rgb(${color} / 0%), rgb(${color} / ${opacity}%))`, height: maskHeight ? maskHeight : '2em' }}></span> : null}

            </div>

     
            {!displayEnabled ? <>
                {triggerShowContent ? <>
                    <a tabIndex={tabIndex || 0} href="#" className={triggerShowClassName ? `${triggerShowClassName}` : `d-inline w-auto`} onClick={handleChange}>{triggerShowContent}</a>
                </> : null}

            </> : <>
                {triggerHideContent ? <>
                    <a tabIndex={tabIndex || 0} href="#" className={triggerHideClassName ? `${triggerHideClassName}` : `d-inline w-auto`} onClick={handleChange}>{triggerHideContent}</a>
                </> : null}
            </>}






        </>
    )
};


export default ShowMoreLess;