import React, { useState, useRef } from 'react';

import useIsMobile from 'funda-utils/dist/cjs/useIsMobile';


interface RefresherProps {
    /** Pulling text */
    pullingText?: React.ReactNode;
    /**  Text when reaching the threshold */
    readyToRefreshText?: React.ReactNode;
    /** Refreshing text */
    refreshingText?: React.ReactNode;
    /** The pull distance (px) that triggers the refresh */
    threshold?: number;
    /** The height of the trigger area */
    triggerHeight?: number;
    /** The styles of the trigger area */
    triggerAreaStyle?: React.CSSProperties;
    /** Pull-down is only allowed when the scroll bar of this element is at the top. You can only fire certain actions when the scrollbar is at the top by listening to the scroll event of a given DOM element and determining if its scrollTop is 0. */
    scrollableElementClassName?: string;
    /** Refresh action is async */
    onRefresh: () => Promise<void>;
    children: React.ReactNode;
}

const Refresher = (prpps: RefresherProps) => {
    const {
        onRefresh,
        children,
        pullingText = 'Pull down to refresh',
        readyToRefreshText = 'Release to refresh',
        refreshingText = 'Refreshing...',
        threshold = 100,
        triggerHeight = 50,
        triggerAreaStyle,
        scrollableElementClassName,
    } = prpps;

    const isMobile = useIsMobile();
    const [pullDistance, setPullDistance] = useState<number>(0);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const startY = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (isRefreshing) return;
        // Pull-down is only allowed when the scroll bar is at the top
        const targetScrollableDiv = scrollableElementClassName === null || typeof scrollableElementClassName === 'undefined' ? containerRef.current : document.querySelector(scrollableElementClassName as string);


        if (targetScrollableDiv && targetScrollableDiv.scrollTop > 0) return;
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startY.current === null || isRefreshing) return;
        const distance = e.touches[0].clientY - startY.current;
        if (distance > 0) {
            setPullDistance(distance > threshold ? threshold : distance); // The maximum pull should not exceed "threshold" value
        }
    };

    const handleTouchEnd = async () => {
        if (isRefreshing) return;
        if (pullDistance >= threshold) {
            setIsRefreshing(true);
            await onRefresh();
            setIsRefreshing(false);
        }
        setPullDistance(0);
        startY.current = null;
    };

    return (
        <>
            {!isMobile ? <React.Fragment>
                {/** CONTENT */}
                {children}
            </React.Fragment> : <div
                ref={containerRef}
                style={{
                    overflow: 'hidden',
                    touchAction: 'pan-y',
                    marginTop: `-${triggerHeight}px`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    style={{
                        transform: `translateY(${isRefreshing ? triggerHeight : pullDistance}px)`,
                        transition: isRefreshing ? 'transform 0.2s' : 'transform 0.3s',
                    }}
                >

                     {/** TRIGGER */}
                    <div style={{
                        ...triggerAreaStyle,
                        height: `${triggerHeight}px`,
                        textAlign: 'center',
                        lineHeight: '50px'
                    }}
                    >
                        {isRefreshing
                            ? refreshingText
                            : pullDistance >= threshold
                                ? readyToRefreshText
                                : pullingText}
                    </div>

                    {/** CONTENT */}
                    {children}
                </div>
            </div>
            }
        </>
    );
};

export default Refresher;
