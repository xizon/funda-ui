import React, { useContext, forwardRef } from 'react';

import { TableContext } from "./TableContext";

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
        instance
     } = useContext(TableContext);
     
    const filteredData = instance || [];
    const filterFieldsData = filterFields || [];

    return (
        <>

            <tr
                {...attributes}
                ref={externalRef}
                className={`
                    ${className || ''} 
                    ${active ? (activeClassName || 'active') : ''} 
                    ${itemData && originData ? (filteredData.every((item: any) => filterFieldsData.some((s: string) => !item[s]?.toLowerCase().includes(itemData[s]?.toLowerCase())) ) ? 'd-none' : '') : ''}
                `}
            >
                {children}
            </tr>

        </>
    )
});

export default TableRow;