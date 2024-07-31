import React, { useId, useState, useEffect, useRef, useCallback } from 'react';

import {
    throttle
} from 'funda-utils';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}


type ScrollbarProps = {
    onlyVerticle?: boolean;
    onlyHorizontal?: boolean;
    arrowIcons?: React.ReactNode[];
    disableArrow?: boolean;
    horizontallyWithWheel?: boolean;
    autoScrollTo?: boolean | string;
    /** Incoming data, changes in the `data` value will cause the component to re-render. */
    data?: any;
    onMove?: (data: any) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};



const Scrollbar = (props: ScrollbarProps) => {
    const {
        onlyVerticle,
        onlyHorizontal,
        arrowIcons,
        disableArrow,
        horizontallyWithWheel,
        autoScrollTo,
        data,
        onMove,
        id,
        children
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const AUTO_SCROLL_TO_DIR = typeof autoScrollTo === 'undefined' ? false : autoScrollTo;
    const icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [
        <><svg width="10px" height="10px" viewBox="0 0 24 24" fill="none"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"/> </svg></>,
        <><svg width="10px" height="10px" viewBox="0 0 24 24" fill="none"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" /> </svg></>,
        <><svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" transform="translate(0 -2)"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/> </svg></>,
        <><svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" transform="translate(0 -2)"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" /> </svg></>
    ] : arrowIcons;

    
    const contentAreaScrollUpdate = throttle(handleScrollEvent, 5);


    // Vertical (default)
    //========================================
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);
    const [thumbHeight, setThumbHeight] = useState<number>(20);
    const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null);
    const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    // Horizontal
    //========================================
    const scrollTrackHorizontalRef = useRef<HTMLDivElement>(null);
    const scrollThumbHorizontalRef = useRef<HTMLDivElement>(null);
    const scrollBarHorizontalRef = useRef<HTMLDivElement>(null);
    const horizontalObserver = useRef<ResizeObserver | null>(null);
    const [thumbWidth, setThumbWidth] = useState<number>(20);
    const [scrollHorizontalStartPosition, setScrollHorizontalStartPosition] = useState<number | null>(null);
    const [initialScrollLeft, setInitialScrollLeft] = useState<number>(0);
    const [isHorizontalDragging, setIsHorizontalDragging] = useState<boolean>(false);



    // common functions
    //========================================
    function handleScrollEvent(e: any) {
        if (typeof e === 'undefined') return;
        const scrollLeft = contentRef.current?.scrollLeft;
        const scrollTop = contentRef.current?.scrollTop;

        if (onlyHorizontal && horizontallyWithWheel) {
            const direction = e.deltaY < 0 ? 'left' : 'right';
            horizontalContentScrollTo(direction, false);  //do not use `smooth`
        }
        
        onMove?.({
            scrollLeft: scrollLeft,
            scrolTop: scrollTop,
            data: e
        });
    }



    // Vertical --> functions
    //========================================

    function contentScrollTo(dir: string, smooth: boolean = true, max: boolean = false) {
        const { current } = contentRef;
        if (current) {
            const pivot = current.scrollHeight/10;
            let speed = pivot >= 200 ? 200 : pivot;
            speed = !max ? speed : current.scrollHeight;
            const scrollAmount = dir === 'down' ? speed : -speed;
            current.scrollBy({ top: scrollAmount, behavior: smooth ? 'smooth' : 'auto' });
        }
    }


    function contentScrollToMax(dir: string) {
        contentScrollTo(dir, true, true);
    }


    function handleResize(ref: HTMLDivElement, trackSize: number) {
        const { clientHeight, scrollHeight } = ref;
        if (clientHeight === 0 || scrollHeight === 0) return;
        setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));


        // do not need scrolling
        if (clientHeight / scrollHeight === 1) {
            // hide scrollbar
            if (scrollBarRef.current !== null) scrollBarRef.current.classList.add('disabled');
        } else {
            if (scrollBarRef.current !== null) scrollBarRef.current.classList.remove('disabled');
        }


    }

    function handleScrollButton(direction: 'up' | 'down') {
        contentScrollTo(direction);
    }

    const handleTrackClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const { current: trackCurrent } = scrollTrackRef;
            const { current: contentCurrent } = contentRef;
            if (trackCurrent && contentCurrent) {
                const { clientY } = e;
                const target = e.target as HTMLDivElement;
                const rect = target.getBoundingClientRect();
                const trackTop = rect.top;
                const thumbOffset = -(thumbHeight / 2);
                const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
                const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
                contentCurrent.scrollTo({
                    top: scrollAmount,
                    behavior: 'smooth',
                });
            }
        },
        [thumbHeight]
    );

    const handleThumbPosition = useCallback(() => {
        if (
            !contentRef.current ||
            !scrollTrackRef.current ||
            !scrollThumbRef.current
        ) {
            return;
        }
        const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
        const { clientHeight: trackHeight } = scrollTrackRef.current;
        let newTop = (+contentTop / +contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight);
        const thumb = scrollThumbRef.current;
        thumb.style.top = `${newTop}px`;
    }, []);

    const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setScrollStartPosition(e.clientY);
        if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
        setIsDragging(true);
    }, []);

    const handleThumbMouseMove = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging && contentRef.current && scrollStartPosition) {
            const {
                scrollHeight: contentScrollHeight,
                offsetHeight: contentOffsetHeight,
            } = contentRef.current;

            const deltaY =
                (e.clientY - scrollStartPosition) *
                (contentOffsetHeight / thumbHeight);
            const newScrollTop = Math.min(
                initialScrollTop + deltaY,
                contentScrollHeight - contentOffsetHeight
            );

            contentRef.current.scrollTop = newScrollTop;
        }
    }, [isDragging, scrollStartPosition, thumbHeight]);


    const handleThumbMouseUp = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging) {
            setIsDragging(false);
        }
    }, [isDragging]);




    // Horizontal  --> functions
    //========================================    

    function horizontalContentScrollTo(dir: string, smooth: boolean = true, max: boolean = false) {
        const { current } = contentRef;
        if (current) {
            const pivot = current.scrollWidth/10;
            let speed = pivot >= 200 ? 200 : pivot;
            speed = !max ? speed : current.scrollWidth;
            const scrollAmount = dir === 'right' ? speed : -speed;
            current.scrollBy({ left: scrollAmount, behavior: smooth ? 'smooth' : 'auto' });
        }
    }

    function horizontalContentScrollToMax(dir: string) {
        horizontalContentScrollTo(dir, true, true);
    }


    
    function handleHorizontalResize(ref: HTMLDivElement, trackSize: number) {
        const { clientWidth, scrollWidth } = ref;
        if (clientWidth === 0 || scrollWidth === 0) return;
        setThumbWidth(Math.max((clientWidth / scrollWidth) * trackSize, 20));

        // do not need scrolling
        if (clientWidth / scrollWidth === 1) {
            // hide scrollbar
            if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.add('disabled');
        } else {
            if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.remove('disabled');
        }


    }


    function handleHorizontalScrollButton(direction: 'left' | 'right') {
        horizontalContentScrollTo(direction);
    }

    const handleHorizontalTrackClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const { current: trackCurrent } = scrollTrackHorizontalRef;
            const { current: contentCurrent } = contentRef;
            if (trackCurrent && contentCurrent) {
                const { clientX } = e;
                const target = e.target as HTMLDivElement;
                const rect = target.getBoundingClientRect();
                const trackLeft = rect.left;
                const thumbOffset = -(thumbWidth / 2);
                const clickRatio = (clientX - trackLeft + thumbOffset) / trackCurrent.clientWidth;
                const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollWidth);
                contentCurrent.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        },
        [thumbWidth]
    );

    const handleHorizontalThumbPosition = useCallback(() => {
        if (
            !contentRef.current ||
            !scrollTrackHorizontalRef.current ||
            !scrollThumbHorizontalRef.current
        ) {
            return;
        }
        const { scrollLeft: contentLeft, scrollWidth: contentWidth } = contentRef.current;
        const { clientWidth: trackWidth } = scrollTrackHorizontalRef.current;

        let newLeft = (+contentLeft / +contentWidth) * trackWidth;
        newLeft = Math.min(newLeft, trackWidth - thumbWidth);
        const thumb = scrollThumbHorizontalRef.current;
        thumb.style.left = `${newLeft}px`;
    }, []);

    const handleHorizontalThumbMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setScrollHorizontalStartPosition(e.clientX);
        if (contentRef.current) setInitialScrollLeft(contentRef.current.scrollLeft);
        setIsHorizontalDragging(true);
    }, []);

    const handleHorizontalThumbMouseUp = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (isHorizontalDragging) {
                setIsHorizontalDragging(false);
            }
        },
        [isHorizontalDragging]
    );

    const handleHorizontalThumbMouseMove = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (isHorizontalDragging && contentRef.current && scrollHorizontalStartPosition) {
                const {
                    scrollWidth: contentScrollWidth,
                    offsetWidth: contentOffsetWidth,
                } = contentRef.current;

                const deltaY =
                    (e.clientX - scrollHorizontalStartPosition) *
                    (contentOffsetWidth / thumbWidth);
                const newScrollLeft = Math.min(
                    initialScrollLeft + deltaY,
                    contentScrollWidth - contentOffsetWidth
                );

                contentRef.current.scrollLeft = newScrollLeft;
            }
        },
        [isHorizontalDragging, scrollHorizontalStartPosition, thumbWidth]
    );



    // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {


        //
        if (contentRef.current && scrollTrackRef.current && scrollTrackHorizontalRef.current) {

            // Vertical
            const ref = contentRef.current;
            const { clientHeight: trackSize } = scrollTrackRef.current;
            observer.current = new ResizeObserver(() => {
                handleResize(ref, trackSize);
            });
            observer.current.observe(ref);
            ref.addEventListener('scroll', handleThumbPosition);


            //Horizontal
            const horizontalRef = contentRef.current;
            const { clientWidth: trackHorizontalSize } = scrollTrackHorizontalRef.current;
            horizontalObserver.current = new ResizeObserver(() => {
                handleHorizontalResize(horizontalRef, trackHorizontalSize);
            });
            horizontalObserver.current.observe(horizontalRef);
            horizontalRef.addEventListener('scroll', handleHorizontalThumbPosition);


            // auto scroll to some position
            setTimeout(() => {
                if (
                    AUTO_SCROLL_TO_DIR !== false && 
                    (AUTO_SCROLL_TO_DIR == 'down' || AUTO_SCROLL_TO_DIR == 'up')
                ) {
                    contentScrollToMax(AUTO_SCROLL_TO_DIR);
                }
                if (
                    AUTO_SCROLL_TO_DIR !== false && 
                    (AUTO_SCROLL_TO_DIR == 'left' || AUTO_SCROLL_TO_DIR == 'right')
                ) {
                    horizontalContentScrollToMax(AUTO_SCROLL_TO_DIR);
                }
                
            }, 50);
                


            return () => {
                observer.current?.unobserve(ref);
                ref.removeEventListener('scroll', handleThumbPosition);

                horizontalObserver.current?.unobserve(horizontalRef);
                horizontalRef.removeEventListener('scroll', handleHorizontalThumbPosition);

            };
        }

    }, [data]);

    // Listen for mouse events to handle scrolling by dragging the thumb
    useEffect(() => {


        // Add function to the element that should be used as the scrollable area.
        if (contentRef.current) {
            contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
            contentRef.current.addEventListener('wheel', contentAreaScrollUpdate);
            contentAreaScrollUpdate();
        }


        return () => {

            if (contentRef.current) {
                contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
            }


        };


    }, [handleThumbMouseMove, handleThumbMouseUp, handleHorizontalThumbMouseMove, handleHorizontalThumbMouseUp]);


    return (
        <>

            <div 
                id={idRes}
                ref={rootRef} 
                className={`custom-scrollbars__wrapper ${onlyHorizontal ? 'custom-scrollbars__wrapper--horizontal' : ''} ${disableArrow ? 'arrow-disabled' : ''}`}
            >
                <div className="custom-scrollbars__content" ref={contentRef}>
                    {children}
                </div>


                {/* SCROLLBAR */}
                {/*
                !!! IMPORTANT:
                Button needs to specify type to prevent the "Enter" key event from interfering with the page outside the component
                */}
                <div ref={scrollBarRef} className="custom-scrollbars__scrollbar" style={onlyHorizontal ? { display: 'none' } : {}}>
                    <button
                        tabIndex={-1}
                        type="button"
                        className={`custom-scrollbars__button ${disableArrow ? 'disabled' : ''}`}
                        onClick={() => handleScrollButton('up')}
                    >
                        {icons[0]}
                    </button>
                    <div className="custom-scrollbars__track-and-thumb">
                        <div
                            className="custom-scrollbars__track"
                            ref={scrollTrackRef}
                            onClick={handleTrackClick}
                            style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
                        ></div>
                        <div
                            className="custom-scrollbars__thumb"
                            ref={scrollThumbRef}
                            onMouseDown={handleThumbMouseDown}
                            onMouseMove={handleThumbMouseMove}
                            onMouseUp={handleThumbMouseUp}
                            style={{
                                height: `${thumbHeight}px`,
                                cursor: isDragging ? 'grabbing' : 'grab',
                            }}
                        ></div>
                    </div>
                    <button
                        tabIndex={-1}
                        type="button"
                        className={`custom-scrollbars__button ${disableArrow ? 'disabled' : ''}`}
                        onClick={() => handleScrollButton('down')}
                    >
                        {icons[1]}
                    </button>
                </div>
                {/* /SCROLLBAR */}




                {/* SCROLLBAR HORIZONTAL */}
                <div ref={scrollBarHorizontalRef} className="custom-scrollbars__scrollbar-horizontal" style={onlyVerticle ? { display: 'none' } : {}}>
                    <button
                        tabIndex={-1}
                        type="button"
                        className={`custom-scrollbars__button ${disableArrow ? 'disabled' : ''}`}
                        onClick={() => handleHorizontalScrollButton('left')}
                    >
                        {icons[2]}
                    </button>
                    <div className="custom-scrollbars__track-and-thumb">
                        <div
                            className="custom-scrollbars__track"
                            ref={scrollTrackHorizontalRef}
                            onClick={handleHorizontalTrackClick}
                            style={{ cursor: isHorizontalDragging ? 'grabbing' : 'pointer' }}
                        ></div>
                        <div
                            className="custom-scrollbars__thumb"
                            ref={scrollThumbHorizontalRef}
                            onMouseDown={handleHorizontalThumbMouseDown}
                            onMouseMove={handleHorizontalThumbMouseMove}
                            onMouseUp={handleHorizontalThumbMouseUp}
                            style={{
                                width: `${thumbWidth}px`,
                                cursor: isHorizontalDragging ? 'grabbing' : 'grab',
                            }}
                        ></div>
                    </div>
                    <button
                        tabIndex={-1}
                        type="button"
                        className={`custom-scrollbars__button ${disableArrow ? 'disabled' : ''}`}
                        onClick={() => handleHorizontalScrollButton('right')}
                    >
                        {icons[3]}
                    </button>
                </div>
                {/* /SCROLLBAR HORIZONTAL */}


            </div>
        </>
    )
};


export default Scrollbar;