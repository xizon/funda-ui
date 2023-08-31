import React, { useId, useState, useEffect, useRef, useCallback } from 'react';

import { throttle } from './utils/performance';

type ScrollbarProps = {
    onlyVerticle?: boolean;
    onlyHorizontal?: boolean;
    arrowIcons?: React.ReactNode[];
    disableArrow?: boolean;
    horizontallyWithWheel?: boolean;
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
        data,
        onMove,
        id,
        children
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [
        <><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"> <path d="M12 5V19M12 5L6 11M12 5L18 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></>,
        <><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"> <path d="M12 6V18M12 18L7 13M12 18L17 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></>,
        <><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" transform="translate(0 -2)"> <path d="M6 12H18M6 12L11 7M6 12L11 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></>,
        <><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" transform="translate(0 -2)"> <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></>
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

    function contentScrollTo(dir: string, smooth: boolean = true) {
        const { current } = contentRef;
        if (current) {
            const scrollAmount = dir === 'down' ? 200 : -200;
            current.scrollBy({ top: scrollAmount, behavior: smooth ? 'smooth' : 'auto' });
        }
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

    const handleThumbMousedown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setScrollStartPosition(e.clientY);
        if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
        setIsDragging(true);
    }, []);

    const handleThumbMouseup = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (isDragging) {
                setIsDragging(false);
            }
        },
        [isDragging]
    ) as any;

    const handleThumbMousemove = useCallback(
        (e: React.MouseEvent) => {
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
        },
        [isDragging, scrollStartPosition, thumbHeight]
    ) as any;


    // Horizontal  --> functions
    //========================================    

    function horizontalContentScrollTo(dir: string, smooth: boolean = true) {
        const { current } = contentRef;
        if (current) {
            const pivot = current.clientWidth/10;
            const speed = pivot >= 200 ? 200 : pivot;
            const scrollAmount = dir === 'right' ? speed : -speed;
            current.scrollBy({ left: scrollAmount, behavior: smooth ? 'smooth' : 'auto' });
        }
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

    const handleHorizontalThumbMousedown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setScrollHorizontalStartPosition(e.clientX);
        if (contentRef.current) setInitialScrollLeft(contentRef.current.scrollLeft);
        setIsHorizontalDragging(true);
    }, []);

    const handleHorizontalThumbMouseup = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (isHorizontalDragging) {
                setIsHorizontalDragging(false);
            }
        },
        [isHorizontalDragging]
    ) as any;

    const handleHorizontalThumbMousemove = useCallback(
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
    ) as any;



    // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {

        
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
        document.addEventListener('mousemove', handleThumbMousemove);
        document.addEventListener('mouseup', handleThumbMouseup);
        document.addEventListener('mouseleave', handleThumbMouseup);

        document.addEventListener('mousemove', handleHorizontalThumbMousemove);
        document.addEventListener('mouseup', handleHorizontalThumbMouseup);
        document.addEventListener('mouseleave', handleHorizontalThumbMouseup);


        // Add function to the element that should be used as the scrollable area.
        if (contentRef.current) {
            contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
            contentRef.current.addEventListener('wheel', contentAreaScrollUpdate);
            contentAreaScrollUpdate();
        }



        return () => {
            document.removeEventListener('mousemove', handleThumbMousemove);
            document.removeEventListener('mouseup', handleThumbMouseup);
            document.removeEventListener('mouseleave', handleThumbMouseup);

            document.removeEventListener('mousemove', handleHorizontalThumbMousemove);
            document.removeEventListener('mouseup', handleHorizontalThumbMouseup);
            document.removeEventListener('mouseleave', handleHorizontalThumbMouseup);

            if (contentRef.current) {
                contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
            }


        };


    }, [handleThumbMousemove, handleThumbMouseup, handleHorizontalThumbMousemove, handleHorizontalThumbMouseup]);


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
                <div ref={scrollBarRef} className="custom-scrollbars__scrollbar" style={onlyHorizontal ? { display: 'none' } : {}}>
                    <button
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
                            onMouseDown={handleThumbMousedown}
                            style={{
                                height: `${thumbHeight}px`,
                                cursor: isDragging ? 'grabbing' : 'grab',
                            }}
                        ></div>
                    </div>
                    <button
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
                            onMouseDown={handleHorizontalThumbMousedown}
                            style={{
                                width: `${thumbWidth}px`,
                                cursor: isHorizontalDragging ? 'grabbing' : 'grab',
                            }}
                        ></div>
                    </div>
                    <button
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