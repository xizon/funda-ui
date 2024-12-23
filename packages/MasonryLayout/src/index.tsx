import React, { useState, useEffect, useRef, useCallback } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    debounce
} from 'funda-utils/dist/cjs/performance';


export type MasonryLayoutProps = {
    columns?: number;
    gap?: number;
    breakPoints?: Record<number, number>;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
};


const MasonryLayout = (props: MasonryLayoutProps) => {
    const {
        columns,
        gap,
        breakPoints,
        id,
        children
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const itemWrapperKey = 'column-';
    const [items, setItems] = useState<React.ReactNode[]>([]);
    const COLS = typeof columns !== 'undefined' ? parseFloat(columns as any) : 2;
    const GAP = typeof gap !== 'undefined' ? parseFloat(gap as any) : 15;

    const windowResizeUpdate = debounce(handleWindowUpdate, 50);
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    
    const calcInit = useCallback((w: number) => {

        let colCount = COLS;
        const columnWrapper: any = {};
        const result: React.ReactNode[] = [];


        // STEP 1:
        //=================
        // calculate responsive column number
        if (breakPoints) {
            const columnsCountBreakPoints: any = breakPoints;
            const _breakPoints: number[] = Object.keys(columnsCountBreakPoints).map((v: string) => Number(v)).sort(
                (a: number, b: number) => a - b
            );
            
            colCount = _breakPoints.length > 0 ? columnsCountBreakPoints[_breakPoints[0]] : COLS;

            _breakPoints.forEach((num: number) => {
                if (num < w) {
                    colCount = columnsCountBreakPoints[num]
                }
            });

            // console.log(w, _breakPoints, colCount);

        }


        // STEP 2:
        //=================
        // create columns
        for (let i = 0; i < colCount; i++) {
            columnWrapper[`${itemWrapperKey}${i}`] = [];
        }


        // STEP 3:
        //=================
        // Calculate the wrapper width based on the gap
        let wrapperTotalGap: number = 0;
        for (let i = 0; i < colCount; i++) {
            if (i > 0) {
                wrapperTotalGap += GAP;
            }
        }
        if (rootRef.current) rootRef.current.style.width = `calc(100% - ${wrapperTotalGap}px)`;


        // STEP 4:
        //=================
        // Divide the children into columns
        let items: React.ReactNode[] = [];

        if (children && !Array.isArray(children)) {
            items.push(children);
        }
        if (children && Array.isArray(children)) {
            items = children;
        }

        // get wrapper width
        const wrapperWidth = rootRef.current?.offsetWidth || 0;
        const perBrickWidth = wrapperWidth/colCount; // Prevent the width of the internal elements from overflowing


        items.forEach((el: React.ReactNode, i: number) => {
            const columnIndex = i % colCount;
  
            columnWrapper[`${itemWrapperKey}${columnIndex}`].push(
                <div 
                    key={i} 
                    style={{ 
                        marginBottom: `${GAP}px`
                    }}
                >
                    <div style={perBrickWidth > 0 ? {width: perBrickWidth + 'px'} : undefined}>{el}</div>
                </div>
            );
        });


        // STEP 5:
        //=================
        // Wrapping the items in each column with a div and pushing it into the result array
        for (let i = 0; i < colCount; i++) {
            result.push(
                <div
                    key={i}
                    className="masonry-item"
                    style={{
                        marginLeft: `${i > 0 ? GAP : 0}px`,
                        flex: '0 1 auto'
                    }}>
                    {columnWrapper[`${itemWrapperKey}${i}`]}
                </div>
            );
        }
        
        // STEP 6:
        //=================
        setItems(result);
        
    }, [children]);


   
    function handleWindowUpdate() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if (window.innerWidth != windowWidth) {

            // Update the window width for next time
            windowWidth = window.innerWidth;

            // Do stuff here
            calcInit(windowWidth);

        }
    }

    useEffect(() => {

        // Initialize items
        //--------------
        calcInit(windowWidth);

    }, [children]);

    useEffect(() => {

        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('resize', windowResizeUpdate);
        window.addEventListener('resize', windowResizeUpdate);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            window.removeEventListener('resize', windowResizeUpdate);
        };

    }, []);



    return (
        <>

            <div
                ref={rootRef}
                id={idRes}
                className="masonry__wrapper"
            >
                <div className="masonry-innner" style={{ display: 'flex' }}>
                    {items}
                </div>
            </div>


        </>
    )
};


export default MasonryLayout;