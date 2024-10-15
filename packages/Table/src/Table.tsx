import React, { useEffect, useState, forwardRef, useRef } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



import { TableProvider } from './TableContext';
import useTableResponsive from './table-utils/hooks/useTableResponsive';
import useTableDraggable from './table-utils/hooks/useTableDraggable';


export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {

    // basic
    wrapperClassName?: string;
    tableClassName?: string;
    bordered?: boolean;
    colGroup?: boolean;
    cellAutoWidth?: boolean;

    // sort
    colSortable?: boolean;
    onColSort?: (fetchData: any) => void;

    // drag & drop
    rowDraggable?: boolean;
    onRowDrag?: (dragStart: any, dragEnd: any) => void;

    // responsive
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;

    // filter
    data?: any[];
    filterFields?: string[];
    filterControlClassName?: string;
    filterControlPlaceholder?: string;
    filterLabel?: React.ReactNode;
    onChangeFilter?: (fetchData: any) => void;

    // selection
    dataSelected?: number[];
    rowSelectable?: boolean;
    onChangeRowSelect?: (fetchData: any[]) => void;

    // key press
    keyboardFocusable?: boolean;
    onCellKeyPressed?: (classname: string, elem: HTMLTableCellElement, event: KeyboardEvent) => void;
}


const Table = forwardRef<HTMLDivElement, TableProps>((
    {
        // basic
        children,
        wrapperClassName,
        tableClassName,
        bordered,
        colGroup,
        cellAutoWidth,

        // sort
        colSortable,
        onColSort,

        // drag & drop
        rowDraggable,
        onRowDrag,

        // responsive
        responsive,
        enhancedResponsive,
        enhancedResponsiveWithScrollBar,

        // filter
        data,
        filterFields,
        filterControlClassName,
        filterControlPlaceholder,
        filterLabel,
        onChangeFilter,
        
        // selection
        dataSelected,
        rowSelectable,
        onChangeRowSelect,

        // key press
        keyboardFocusable,
        onCellKeyPressed,

        ...attributes
    },
    externalRef
) => {

    const uniqueID = useComId();
    const rootRef = useRef<any>(null);

    // context
    const [instance, setInstance] = useState<any>(null);

    // selection
    const [selectedItems, setSelectedItems] = useState<any>(new Set());
    
    // effective element movement on keystroke
    const [rootDataInfo, setRootDataInfo] = useState<null | {totalRow: number}>(null);
    const refNode = useRef(new Map<string, HTMLTableElement>());
    const [focusableCellId, setFocusableCellId] = useState<string>('');


    // responsive
    const responsiveClasses = typeof responsive === 'undefined' || responsive === true ? 'table-responsive' : '';
    let enhancedResponsiveClasses = '';
    if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
    if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';


    //Set the class names of different styles
    let tableClasses = '';
    if (bordered) tableClasses += ' table-bordered';
    if (colGroup) tableClasses += ' table-colgroup';

    
    // responsive table initialization
    useTableResponsive({
        enabled: enhancedResponsiveWithScrollBar && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    // initialize drag & drop data
    const {
        handleDragStart,
        handleDragEnd,
        handledragOver,
        handleTbodyEnter
    } = useTableDraggable({
        enabled: rowDraggable && rootRef.current,
        data: data,
        spyElement: rootRef.current,
        onRowDrag: onRowDrag
    }, [data, rootRef]);


    // initialize context
    useEffect(() => {
        setInstance(data);
    }, [data]);


    // The items are selected by default
    useEffect(() => {
        if (Array.isArray(data) && Array.isArray(dataSelected) && dataSelected.length > 0) {
            const newSelectedItems = new Set(selectedItems);
            dataSelected.forEach((s: number) => {
                newSelectedItems.add(String(s));
            });

            setSelectedItems(newSelectedItems);
        }
    }, [data, dataSelected]);

    return (
        <>

            <TableProvider value={{
                originData: data,
                rootRef: rootRef,

                // sort
                colSortable,
                onColSort,

                // drag & drop
                rowDraggable,
                handleDragStart,
                handleDragEnd,
                handledragOver,
                handleTbodyEnter,
                

                // filter
                filterFields,
                instance,
                setInstance,
                onChangeFilter,

                // selection
                dataSelected,
                rowSelectable,
                selectedItems,
                setSelectedItems,
                onChangeRowSelect,

                // key press
                keyboardFocusable,
                rootDataInfo, 
                setRootDataInfo,
                refNode,
                focusableCellId,
                setFocusableCellId,
                onCellKeyPressed,


            }}>


                {/** Main */}
                <div
                    {...attributes}
                    id={uniqueID}
                    ref={(node) => {
                        rootRef.current = node;
                        if (typeof externalRef === 'function') {
                            externalRef(node);
                        } else if (externalRef) {
                            externalRef.current = node;
                        }
                    }}
                    className={combinedCls(
                        'syntable__wrapper',
                        clsWrite(wrapperClassName, 'mb-3 position-relative'),
                        responsiveClasses,
                        enhancedResponsiveClasses,
                        {
                            'has-checkbox': rowSelectable,
                            'allow-dragdrop': rowDraggable,
                            'allow-sort': colSortable

                        }
                    )}
                >

                    <table
                        className={combinedCls(
                            clsWrite(tableClassName, 'table'),
                            tableClasses,
                            {
                                'cell-autowidth': cellAutoWidth
                            }

                        )}
                    >
                        {children}
                    </table>

                </div>

            </TableProvider>

        </>
    )
});

export default Table;