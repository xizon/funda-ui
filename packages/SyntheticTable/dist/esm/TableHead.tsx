import React, { forwardRef } from 'react';


interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((
    { children, className, ...attributes },
    externalRef
) => {

    return (
        <>

            <thead
                {...attributes}
                ref={externalRef}
                className={className || ''}
            >
                {children}
            </thead>

        </>
    )
});

export default TableHead;