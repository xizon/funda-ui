import React, { useContext, forwardRef } from 'react';

import { TableContext } from './TableContext';
import { convertMapToArr } from './utils/func';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    active?: boolean;
    activeClassName?: string;
    className?: string;
    itemData?: any;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((
    { 
        children, 
        active, 
        activeClassName, 
        className, 
        itemData,
        ...attributes 
    },
    externalRef
) => {

    const { 
        originData,
        filterFields,
        selectedItems,
        instance,
        rowDraggable,
        handleDragStart,
        handleDragEnd, 
     } = useContext(TableContext);
     

    // ================================================================
    // filter
    // ================================================================
    const filteredData = instance || [];
    const filterFieldsData = filterFields || [];


    // ================================================================
    // selection
    // ================================================================
    const _res = convertMapToArr(selectedItems);
    // Performance optimization: stringify itemData only once instead of N times
    const itemDataStr = itemData ? JSON.stringify(itemData) : '';
    const filteredSelectedItems = _res.map((v: any) => Number(v)).map((rowNum: number) => {
        const originItem = originData?.[rowNum];
        // Fast path: reference equality
        if (itemData === originItem) return originItem;
        // Fallback: JSON comparison (itemDataStr is cached)
        if (itemDataStr && itemDataStr === JSON.stringify(originItem)) {
            return originItem;
        }
    }).filter(Boolean);
    const selectedClassName = activeClassName || 'active';



    return (
        <>

            <tr
                {...attributes}
                ref={externalRef}
                draggable={rowDraggable} 
                onDragStart={rowDraggable ? handleDragStart: () => void(0)} 
                onDragEnd={rowDraggable ? handleDragEnd : () => void(0)} 
                data-row-data={`${itemData && typeof itemData === 'object' ? JSON.stringify(itemData) : itemData}`}
                
                className={`row-obj ${className || ''} ${active ? selectedClassName : ''} ${itemData && originData ? (filteredData.every((item: any) => filterFieldsData.some((s: string) => !item[s]?.toLowerCase().includes(itemData[s]?.toLowerCase())) ) ? 'd-none' : '') : ''} ${itemData && originData && filteredSelectedItems.length > 0 ? selectedClassName : ''}`}
            >
                {children}
            </tr>

        </>
    )
});

export default TableRow;