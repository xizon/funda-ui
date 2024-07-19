import React, { useEffect, useState, forwardRef, useId, useRef } from 'react';

import { TableProvider } from './TableContext';
import TableFilter from './table-utils/TableFilter';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    wrapperClassName?: string;
    tableClassName?: string;
    responsive?: boolean;
    bordered?: boolean;
    colGroup?: boolean;
    cellAutoWidth?: boolean;

    // filter
    data?: any[];
    filterFields?: string[];
    filterRow?: boolean;
    filterControlClassName?: string;
    filterControlPlaceholder?: string;
    filterLabel?: React.ReactNode;
    onChangeFilter?: (value: any) => void;
}


const Table = forwardRef<HTMLDivElement, TableProps>((
    {
        children,
        wrapperClassName,
        tableClassName,
        responsive,
        bordered,
        colGroup,
        cellAutoWidth,

        // filter
        data,
        filterFields,
        filterRow,
        filterControlClassName,
        filterControlPlaceholder,
        filterLabel,
        onChangeFilter,

        ...attributes
    },
    externalRef
) => {

    const uniqueID = useId().replace(/\:/g, "-");
    const rootRef = useRef<any>(null);

    // context
    const [instance, setInstance] = useState<any>(null);


    //
    const responsiveClasses = typeof responsive === 'undefined' || responsive === true ? 'table-responsive' : '';

    //Set the class names of different styles
    //
    let tableClasses = '';
    if (bordered) tableClasses += ' table-bordered';
    if (colGroup) tableClasses += ' table-colgroup';


    useEffect(() => {
        setInstance(data);
    }, [data]);

    return (
        <>

            <TableProvider value={{
                originData: data,
                filterFields,
                instance,
                setInstance
            }}>

                {/** Filter Control */}
                {filterRow ? <TableFilter 
                    className={filterControlClassName || ''} 
                    placeholder={filterControlPlaceholder || ''} 
                    onChange={onChangeFilter}
                    label={filterLabel}
                /> : null}

                {/** Main */}
                <div
                    {...attributes}
                    id={uniqueID}
                    ref={(node) => {
                        rootRef.current = node;
                        if (typeof externalRef === 'function') {
                            externalRef(node);
                        } else if (externalRef) {
                            externalRef.current = node;
                        }
                    }}
                    className={`syntable__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `mb-3 position-relative`} ${responsiveClasses}`}
                >

                    <table
                        className={`${tableClassName || tableClassName === '' ? tableClassName : "table"} ${tableClasses} ${typeof cellAutoWidth === 'undefined' || cellAutoWidth === false ? '' : 'cell-autowidth'}`}
                    >
                        {children}
                    </table>

                </div>

            </TableProvider>

        </>
    )
});

export default Table;