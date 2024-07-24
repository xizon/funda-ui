import React, { forwardRef, useContext } from "react";
import { TableContext } from '../TableContext';

type TableFilterProps = {
    className?: string;
    placeholder?: string;
    label?: React.ReactNode;
    onChange?: (e: any, fetchData: any[]) => void;
};


const TableFilter = forwardRef((props: TableFilterProps, externalRef: any) => {
    const { 
        className,
        placeholder,
        label,
        onChange
     } = props;

    const { 
        originData, 
        filterFields, 
        setInstance,
        onChangeFilter
    } = useContext(TableContext);

    const filterFieldsData = filterFields || [];


    return (
        <div className="syntable__filter-container">
            {label || null}
            <input
                type="text"
                ref={externalRef}
                className={className || ''}
                onChange={(e: any) => {
                    const filteredData = originData?.filter((item: any) => filterFieldsData.some((s: string) => item[s]?.toLowerCase().includes(e.target.value.toLowerCase())));
                    
                    if (e.target.value.trim() === '') {
                        setInstance(originData);
                        onChangeFilter?.(originData);
                        onChange?.(e, originData);
                    } else {
                        setInstance(filteredData);
                        onChangeFilter?.(filteredData);
                        onChange?.(e, filteredData);
                    }
                }}
                placeholder={placeholder || ''}
            />
        </div>
    );
});

export default TableFilter;
