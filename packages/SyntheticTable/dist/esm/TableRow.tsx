import React, { useContext, forwardRef } from 'react';

import { TableContext } from "./TableContext";

import { valRes } from './table-utils/func';


interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
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
        instance
     } = useContext(TableContext);
     
    const filteredData = instance || [];
    const filterFieldsData = filterFields || [];

    // selection
    const _res = valRes(selectedItems);
    const _selectedIndex = _res.map((v: any) => Number(v));

    return (
        <>

            <tr
                {...attributes}
                ref={externalRef}
                className={`
                    ${className || ''} 
                    ${active ? (activeClassName || 'active') : ''} 
                    ${itemData && originData ? (filteredData.every((item: any) => filterFieldsData.some((s: string) => !item[s]?.toLowerCase().includes(itemData[s]?.toLowerCase())) ) ? 'd-none' : '') : ''}
                    ${itemData && originData ? _selectedIndex.some((rowNum: number) => JSON.stringify(itemData) === JSON.stringify(originData[rowNum]) ? 'selected' : '') : ''}
                `}
            >
                {children}
            </tr>

        </>
    )
});

export default TableRow;