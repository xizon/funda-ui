import React, { useId, useState, useEffect, useRef, useCallback } from 'react';

import {
    debounce
} from 'funda-utils';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}


type MasonryLayoutProps = {
    columns?: number,
    gap?: number,
    breakPoints?: Record<number, number>
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


    const uniqueID = useId();
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
        // Divide the children into columns
        let items: React.ReactNode[] = [];

        if (children && !Array.isArray(children)) {
            items.push(children);
        }
        if (children && Array.isArray(children)) {
            items = children;
        }

        items.forEach((el: React.ReactNode, i: number) => {
            const columnIndex = i % colCount;
            columnWrapper[`${itemWrapperKey}${columnIndex}`].push(
                <div 
                    key={i} 
                    className="masonry-item"
                    style={{ marginBottom: `${GAP}px` }}
                >
                    {el}
                </div>
            );
        });


        // STEP 4:
        //=================
        // Wrapping the items in each column with a div and pushing it into the result array
        for (let i = 0; i < colCount; i++) {
            result.push(
                <div
                    key={i}
                    className="masonry-item"
                    style={{
                        marginLeft: `${i > 0 ? GAP : 0}px`,
                        flex: 1
                    }}>
                    {columnWrapper[`${itemWrapperKey}${i}`]}
                </div>
            );
        }
        
        // STEP 5:
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
                className={`masonry__wrapper`}
            >
                <div className="masonry-innner" style={{ display: 'flex' }}>
                    {items}
                </div>
            </div>


        </>
    )
};


export default MasonryLayout;