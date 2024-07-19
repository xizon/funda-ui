import React, { forwardRef } from 'react';


interface TableColgroupProps extends React.HTMLAttributes<HTMLTableColElement> {
    className?: string;
    length?: number;
}

const TableColgroup = forwardRef<HTMLTableColElement, TableColgroupProps>((
    { className, length, ...attributes },
    externalRef
) => {

    return (
        <>

            <colgroup
                {...attributes}
                ref={externalRef}
                className={className || ''}
            >
                {Array.from({
                    length: length || 0
                },
                function (v, k) {
                    return k; // Return k(ey) as value for this index
                }
                ).map((el: any, i: number) => {
                    return <col key={i}></col>;
                })}
            </colgroup>

        </>
    )
});

export default TableColgroup;

