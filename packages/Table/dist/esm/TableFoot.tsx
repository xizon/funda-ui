import React, { forwardRef } from 'react';


export interface TableFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
}

const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>((
    { children, className, ...attributes },
    externalRef
) => {

    return (
        <>

            <tfoot
                {...attributes}
                ref={externalRef}
                className={className || ''}
            >
                {children}
            </tfoot>

        </>
    )
});

export default TableFoot;