import React, { forwardRef } from 'react';


interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    className?: string;
}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>((
    { children, className, ...attributes },
    externalRef
) => {

    return (
        <>

            <caption
                {...attributes}
                ref={externalRef}
                className={className || ''}
            >
                {children}
            </caption>

        </>
    )
});

export default TableCaption;