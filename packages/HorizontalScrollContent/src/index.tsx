import React, { useState, useRef, useEffect } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';



export type HorizontalScrollContentProps = {
    slideOffset?: number;
    data?: React.ReactNode[];
    arrowIcons?: React.ReactNode[];
    contentWrapperClassName?: string;
    itemClassName?: string;
    btnClassName?: string;
    onMove?: (dir: number, wrapperWidth: number, realContentWidth: number, moveOffset: number) => void;
    /** -- */
    id?: string;
};



const HorizontalScrollContent = (props: HorizontalScrollContentProps) => {
    const {
        data,
        slideOffset,
        arrowIcons,
        contentWrapperClassName,
        itemClassName,
        btnClassName,
        id,
        onMove
    } = props;

    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<HTMLDivElement>(null);
    
    
    const icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [
        <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="inherit" transform="translate(0 -2)"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" /> </svg></>,
        <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="inherit" transform="translate(0 -2)"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" /> </svg></>
    ] : arrowIcons;

    const SLIDE_OFFSET = typeof slideOffset === 'undefined' ? 50 : slideOffset;
    const scrollContentRef = useRef(null);
    const btnPrevRef = useRef(null);
    const btnNextRef = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const observer = useRef<ResizeObserver | null>(null);


    // 
    const resetNextBtn = () => {
        const el: any = scrollContentRef.current;
        if (el) {
            const _contentWidth = Math.floor(el.scrollWidth - el.scrollLeft);
            const _realWidth = el.offsetWidth;

            if (_contentWidth > _realWidth) {
                if (btnNextRef.current) (btnNextRef.current as HTMLButtonElement).classList.remove('invalid');
            }

        }
    };


    const update = () => {
        const el: any = scrollContentRef.current;
        if (el === null) return;
   
        const _contentWidth = Math.floor(el.scrollWidth - el.scrollLeft);
        const _realWidth = el.offsetWidth;
 
        if (_contentWidth <= _realWidth) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
            resetNextBtn();
        }

        onMove?.(_contentWidth <= _realWidth ? 1 : -1, _realWidth, _contentWidth, _contentWidth - _realWidth);
    };


    //Slide click
    const slide = (shift) => {
        const el: any = scrollContentRef.current;
        if (el === null) return;
        
        el.scrollLeft += shift;
        setscrollX(scrollX + shift);

        update();
    };

    const scrollCheck = () => {
        const el: any = scrollContentRef.current;
        if (el === null) return;

        setscrollX(el.scrollLeft);

        update();

        

    };

    useEffect(() => {
        
        // content width observer
        const el: any = scrollContentRef.current;
        if (el) {
       
            observer.current = new ResizeObserver(entries => {

                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }

                entries.forEach(entry => {
                    resetNextBtn();
                });
            });
            observer.current.observe(el);
        }

        return () => {
            if (el) observer.current?.unobserve(el);
        };

    }, []);

    return (
        <div 
            id={idRes}
            ref={rootRef} 
            className="horizontal-scroll-content__wrapper"
        >
            {scrollX !== 0 && (
                <button
                    ref={btnPrevRef}
                    className={`horizontal-scroll-content__btn horizontal-scroll-content__prev ${btnClassName || ''}`}
                    tabIndex={-1}
                    onClick={() => slide(-SLIDE_OFFSET)}
                >
                    {icons[0]}
                </button>
            )}
            <ul className={contentWrapperClassName || ''} ref={scrollContentRef} onScroll={scrollCheck}>
                {data ? data.map((v: any, i: number) => (
                    <li key={i} className={itemClassName || ''}>{v}</li>
                )) : null}
            </ul>
            {!scrolEnd && (
                <button
                    ref={btnNextRef}
                    className={`horizontal-scroll-content__btn horizontal-scroll-content__next invalid ${btnClassName || ''}`}
                    tabIndex={-1}
                    onClick={() => slide(+SLIDE_OFFSET)}
                >
                    {icons[1]}
                </button>
            )}
        </div>
    );

};


export default HorizontalScrollContent;