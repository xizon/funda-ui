import React, { forwardRef } from 'react';


interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    className?: string;
    captionSide?: string;
}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>((
    { 
        children, 
        captionSide,
        className, 
        ...attributes 
    },
    externalRef
) => {

    return (
        <>

            <caption
                {...attributes}
                ref={externalRef}
                className={`syntable__caption ${className || ''} syntable__caption--${captionSide || 'top'}`}
            >
                {children}
            </caption>

        </>
    )
});

export default TableCaption;