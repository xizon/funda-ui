import React, { forwardRef } from 'react';


interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    active?: boolean;
    activeClassName?: string;
    className?: string;
    colSpan?: number;
    scope?: `col` | `row` | `colgroup` | `rowgroup`;
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((
    { 
        children, 
        active, 
        activeClassName, 
        className, 
        colSpan,
        scope,
        ...attributes 
    },
    externalRef
) => {

    const CellComponent = scope ? 'th' : 'td';
    

    return (
        <>

            <CellComponent
                {...attributes}
                ref={externalRef}
                colSpan={colSpan} 
                className={`${className || ''} ${active ? (activeClassName || 'active') : ''}`}
            >
                {children}
            </CellComponent>

        </>
    )
});

export default TableCell;