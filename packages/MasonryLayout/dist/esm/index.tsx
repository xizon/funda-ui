import React, { useState, useEffect, useRef, useCallback } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    debounce
} from 'funda-utils/dist/cjs/performance';


export type MasonryLayoutProps = {
    columns?: number;
    gap?: number;
    breakPoints?: Record<number, number>;
    balanceColumnHeights?: boolean;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
    onResize?: (wrapperWidth: number) => void;
};


const MasonryLayout = (props: MasonryLayoutProps) => {
    const {
        columns,
        gap,
        breakPoints,
        balanceColumnHeights = true,
        id,
        children,
        onResize
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const itemWrapperKey = 'column-';
    const [items, setItems] = useState<React.ReactNode[]>([]);
    const [orginalItems, setOrginalItems] = useState<React.ReactNode[]>([]);
    const COLS = typeof columns !== 'undefined' ? parseFloat(columns as any) : 2;
    const GAP = typeof gap !== 'undefined' ? parseFloat(gap as any) : 15;
    const colsRef = useRef<Record<string, any>>(new Map());

    const windowResizeUpdate = debounce(handleWindowUpdate, 50);
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    
    const calcInit = useCallback((w: number, minColIndex: number | undefined = undefined, maxColIndex: number | undefined = undefined) => {

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
        let perBrickWidth = wrapperWidth/colCount; // Prevent the width of the internal elements from overflowing


        // return wrapper width
        onResize?.(wrapperWidth);


        //
        React.Children.forEach(children, (child: any, i: number) => {
            if (!child) return;
            
            const columnIndex = i % colCount;
            const itemRow = Math.floor(i / colCount);
            const itemIndex = itemRow * colCount + columnIndex;

            //
            columnWrapper[`${itemWrapperKey}${columnIndex}`].push(
                <div 
                    key={i} 
                    data-row={itemRow}
                    data-col={columnIndex}
                    data-index={itemIndex}
                    style={{ 
                        marginBottom: `${GAP}px`
                    }}
                >
                    <div style={perBrickWidth > 0 ? {width: perBrickWidth + 'px'} : undefined}>{child}</div>
                </div>
            );
        });


        // Add the item to the shortest column
        if (
            balanceColumnHeights && 
            (typeof minColIndex !== 'undefined' && typeof maxColIndex !== 'undefined') &&
            items.length > COLS
        ) {
            const maxColLastElement = columnWrapper[`${itemWrapperKey}${maxColIndex}`].pop();
            columnWrapper[`${itemWrapperKey}${minColIndex}`].push(maxColLastElement);
        }


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
                    <div 
                        className="masonry-item-inner"
                        data-inner-col={i}
                        ref={el => {
                            if (el) {
                                colsRef.current.set(`col-${i}`, el);
                            } else {
                                colsRef.current.delete(`col-${i}`);
                            }
                        }}
                    >
                        {columnWrapper[`${itemWrapperKey}${i}`]}
                    </div>
                </div>
            );
        }
        
        // STEP 6:
        //=================
        // update items
        setItems(result);

        // update orginal items
        if (typeof minColIndex === 'undefined' && typeof maxColIndex === 'undefined') {
            setOrginalItems(result);
        }

        

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

    function adjustPosition() {
        if (rootRef.current === null) return;

        // Adjust the position of the element
        const initCols  = () => {
            
            const columnHeights = new Array(COLS).fill(0);
            React.Children.forEach(items, (child: any, i: number) => {
                if (!child) return;
                
                const columnIndex = i % COLS;

                // update column height
                const columnInner = colsRef.current.get(`col-${columnIndex}`);
                if (columnInner) {
                    const height = columnInner.offsetHeight;
                    columnHeights[columnIndex] = height;
                }
    
            });

            // Find the shortest height column
            const minHeight = Math.min(...columnHeights);
            const maxHeight = Math.max(...columnHeights);
            if (minHeight > 0 && maxHeight > 0 && maxHeight/2 > minHeight) {
                const columnMinHeightIndex = columnHeights.indexOf(minHeight);
                const columnMaxHeightIndex = columnHeights.indexOf(maxHeight);
                calcInit(windowWidth, columnMinHeightIndex, columnMaxHeightIndex);
            }
            

        };
        
        const images: NodeListOf<HTMLImageElement> = rootRef.current.querySelectorAll('img');
        const imagePromises: Promise<void>[] = [];
        images.forEach((img: HTMLImageElement) => {
            const imgPromise: Promise<void> = new Promise((resolve, reject) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                }
            });
            imagePromises.push(imgPromise);
        });

        // Wait for all images to load
        if (images.length > 0) {
            Promise.all(imagePromises)
                .then(() => {
                    initCols();
                })
                .catch((error: Error) => {
                    console.error(error);
                });
        } else {
            initCols();
        }
    }


    useEffect(() => {
        adjustPosition();
    }, [orginalItems]);


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