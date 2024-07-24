import React, { useContext, forwardRef } from 'react';

import { TableContext } from './TableContext';


interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((
    { 
        children, 
        className, 
        ...attributes 
    },
    externalRef
) => {

    const { 
        rowDraggable,
        handledragOver
     } = useContext(TableContext);
     

    return (
        <>

            <tbody
                {...attributes}
                ref={externalRef}
                onDragOver={rowDraggable ? handledragOver: () => void(0)} 
                className={className || ''}
            >
                {children}
            </tbody>

        </>
    )
});

export default TableBody;