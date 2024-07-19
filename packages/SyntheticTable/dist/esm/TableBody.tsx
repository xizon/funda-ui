import React, { forwardRef } from 'react';


interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((
    { children, className, ...attributes },
    externalRef
) => {

    return (
        <>

            <tbody
                {...attributes}
                ref={externalRef}
                className={className || ''}
            >
                {children}
            </tbody>

        </>
    )
});

export default TableBody;