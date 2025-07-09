import React, { useEffect, useState, forwardRef, useRef, useLayoutEffect, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



import { TableProvider } from './TableContext';
import useTableResponsive from './utils/hooks/useTableResponsive';
import useTableDraggable from './utils/hooks/useTableDraggable';
import useTableKeyPress from './utils/hooks/useTableKeyPress';
import { cellMark, removeCellFocusClassName, initRowColProps, getTableRowsColCount } from './utils/func';

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    // content ref
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]

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
    onCellKeyPressed?: (
        classname: string,
        elem: HTMLTableCellElement,
        event: React.KeyboardEvent<Element>,
        isLeftEdge: boolean,
        isRightEdge: boolean,
        isTopEdge: boolean,
        isBottomEdge: boolean
    ) => void;
    onCellPressEnter?: (classname: string, elem: HTMLTableCellElement, event: React.KeyboardEvent<Element>) => void;
    
}


const Table = forwardRef<HTMLDivElement, TableProps>((
    {
        contentRef,
        
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
        onCellPressEnter,

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
    const [rootDataInfo, setRootDataInfo] = useState<null | {totalRow: number; totalCol: {row: number; colCount: number}[];}>(null);
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

    const tableKeyPress = useTableKeyPress({
        enabled: keyboardFocusable,
        data: data,
        spyElement: rootRef.current,
        rootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        onCellKeyPressed,
        onCellPressEnter,
    }, [data, rootRef, rootDataInfo, refNode, focusableCellId]);

    const updateFocusableCell = (row: number, col: number) => {
            
        setFocusableCellId(cellMark(row, col));

        // Find and focus the cell element
        const targetCell = refNode.current.get(cellMark(row, col)) as HTMLElement;

        if (typeof targetCell !== 'undefined') {
            removeCellFocusClassName(rootRef.current);
            targetCell.classList.add('cell-focus');
        }
    };

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

    // Synchronous execution, which blocks rendering
    useLayoutEffect(() => {
        if (rootRef.current) {
            // Initialize custom props of table elements
            initRowColProps(rootRef.current);

            // Count the number of columns per row
            const totalCol = getTableRowsColCount(rootRef.current);
            setRootDataInfo({
                totalRow: Array.isArray(data) ? data.length : 0,
                totalCol
            });

            // Initialize the focused index
            if (keyboardFocusable) {
                updateFocusableCell(0, 0);
            }
            
        }
    }, [data]); // Re-run when data changes


    // exposes the following methods
    useImperativeHandle(contentRef, () => ({
        setFocusableCell: updateFocusableCell,
        clearAllCellFocus: () => {
            if (rootRef.current) {
                removeCellFocusClassName(rootRef.current);
                
                const focusedCells = rootRef.current.querySelectorAll('td.cell-focus, th.cell-focus');
                focusedCells.forEach((cell: any) => {
                    if (typeof cell.blur === 'function') cell.blur();
                    if (cell.classList) cell.classList.remove('cell-focus');
                });
            }
        },
        getCellElement: (row: number, col: number) => {
            // Find and focus the cell element
            const targetCell = refNode.current.get(cellMark(row, col)) as HTMLElement;
            return typeof targetCell !== 'undefined' ? targetCell : null;
        },
        forceFocusCell: (row: number, col: number) => {
            // Find and focus the cell element
            const targetCell = refNode.current.get(cellMark(row, col)) as HTMLElement;

            if (typeof targetCell !== 'undefined') {
                // After forcing focus, you can use the keyboard to listen directly
                targetCell.focus(); 
            }
        },
        triggerCellKeyPressed: tableKeyPress.triggerCellKeyPressed
    }), [rootRef, data, rootDataInfo]);

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
                onCellPressEnter,


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