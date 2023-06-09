import React, { useId, useEffect, useState, useRef } from 'react';


import { debounce } from './utils/performance';

import TableRow from './TableRow';
import TableHeaders from './TableHeaders';
import TableSummaries from './TableSummaries';
import TableColgroup from './TableColgroup';



type TableProps = {
    wrapperClassName?: string;
    tableClassName?: string;
    bodyClassName?: string;
    headClassName?: string;
    footClassName?: string;
    data: any;
    bordered?: boolean;
    colGroup?: boolean;
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;
    /** -- */
    id?: string;
};


const Table = (props: TableProps) => {
    const {
        wrapperClassName,
        tableClassName,
        bodyClassName,
        headClassName,
        footClassName,
        data,
        bordered,
        colGroup,
        responsive,
        enhancedResponsive,
        enhancedResponsiveWithScrollBar,
        id
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);

    const windowResizeUpdate = debounce(handleWindowUpdate, 50);

    const _headers = data.hasOwnProperty('headers') ? data.headers : false;
    const _summaries = data.hasOwnProperty('summaries') ? data.summaries : false;
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;


    //Set the class names of different styles
    //
    let tableClasses = '';
    if (bordered) tableClasses += ' table-bordered';
    if (colGroup) tableClasses += ' table-colgroup';


    //
    let responsiveClasses = '';
    if (responsive) tableClasses += ' table-responsive';

    //
    let enhancedResponsiveClasses = '';
    if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive js-table-enhanced-responsive';
    if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' js-table-enhanced-responsive-scrolled';


    function handleWindowUpdate() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if (window.innerWidth != windowWidth) {

            // Update the window width for next time
            windowWidth = window.innerWidth;

            // Do stuff here
            tableDataScrolledInit(windowWidth);

        }
    }

    function maxDimension(elements: any) {
        let res = {
            'height': 0,
            'width': 0
        };
        const elementHeights: any[] = Array.prototype.map.call(elements, function (el) {
            return el.clientHeight;
        });

        const elementWidths: any[] = Array.prototype.map.call(elements, function (el) {
            return el.clientWidth;
        });

        const maxHeight = Math.max.apply(null, elementHeights);
        const maxWidth = Math.max.apply(null, elementWidths);

        res = {
            'height': maxHeight,
            'width': maxWidth
        };
        return res;
    };


    function tableDataScrolledInit(w: number) {

        if (w <= 768) {
            //get maxHeight of per row
            for (let i = 0; i < rootRef.current.querySelector('tbody tr').children.length; i++ ) {
                const tbodyRows = rootRef.current.querySelectorAll(`tbody tr [data-table-row="${i}"]`);
                const maxHeight = maxDimension(tbodyRows).height;
                [].slice.call(tbodyRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });

                //
                const theadRows = rootRef.current.querySelectorAll(`thead tr [data-table-row="${i}"]`);
                [].slice.call(theadRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });
            }

        } else {
            [].slice.call(rootRef.current.querySelectorAll('tbody td, tbody th, thead th')).forEach((node: any, i: number) => {
                node.removeAttribute('style');
            });
        }

    }


    useEffect(() => {

        // With scroll bars
        //--------------
        if (enhancedResponsiveWithScrollBar) {
            let windowWidth = window.innerWidth;
            tableDataScrolledInit(windowWidth);
        }


        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('resize', windowResizeUpdate);
        window.addEventListener('resize', windowResizeUpdate);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            window.removeEventListener('resize', windowResizeUpdate);
        };

    }, [data]);


    return (
        <>

            <div ref={rootRef} id={idRes} className={`table__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `mb-3 position-relative`} ${responsiveClasses} ${enhancedResponsiveClasses}`}>

                <table className={`${tableClassName || tableClassName === '' ? tableClassName : "table"} ${tableClasses}`}>

                    <TableHeaders data={_headers} headClassName={headClassName}/>
                    <TableSummaries data={_summaries} footClassName={footClassName} />

                    {data.hasOwnProperty('fields') && colGroup ? <TableColgroup data={data.fields} /> : ""
                    }


                    <tbody className={bodyClassName ? bodyClassName : ''}>

                        {data.hasOwnProperty('fields') ? data.fields.map((item: any, i: number) => {
                            return <TableRow key={"row" + i} headerLabel={_headers} data={item} />;
                        }) : ""
                        }

                    </tbody>

                </table>
            </div>

        </>
    )
};


export default Table;