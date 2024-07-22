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
    filterControlClassName?: string;
    filterControlPlaceholder?: string;
    filterLabel?: React.ReactNode;
    onChangeFilter?: (value: any) => void;

    // selection
    dataSelected?: number[];
    checkboxSelection?: boolean;
    onChangeRowSelect?: (fetchData: any[]) => void;
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
        filterControlClassName,
        filterControlPlaceholder,
        filterLabel,
        onChangeFilter,
        
        // selection
        dataSelected,
        checkboxSelection,
        onChangeRowSelect,

        ...attributes
    },
    externalRef
) => {

    const uniqueID = useId().replace(/\:/g, "-");
    const rootRef = useRef<any>(null);

    // context
    const [instance, setInstance] = useState<any>(null);

    // selection
    const [selectedItems, setSelectedItems] = useState<any>(new Set());

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

    // The items are selected by default
    useEffect(() => {
        if (Array.isArray(data) && Array.isArray(dataSelected) && dataSelected.length > 0) {
            const newSelectedItems = new Set(selectedItems);
            dataSelected.forEach((s: number) => {
                newSelectedItems.add(String(s));
            });

            setSelectedItems(newSelectedItems);
        }
    }, [data, dataSelected]);

    return (
        <>

            <TableProvider value={{
                originData: data,

                // filter
                filterFields,
                instance,
                setInstance,
                onChangeFilter,

                // selection
                dataSelected,
                checkboxSelection,
                selectedItems,
                setSelectedItems,
                onChangeRowSelect
            }}>


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