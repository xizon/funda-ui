import React, { useContext } from "react";
import { TableContext } from '../TableContext';

type TableFilterProps = {
    className?: string;
    placeholder?: string;
    label?: React.ReactNode;
    onChange?: (value: any) => void;
};


const TableFilter = (props: TableFilterProps) => {
    const { 
        className,
        placeholder,
        label,
        onChange
     } = props;

    const { 
        originData, 
        filterFields, 
        setInstance 
    } = useContext(TableContext);

    const filterFieldsData = filterFields || [];


    return (
        <div style={{ marginBottom: "16px" }}>
            {label || null}
            <input
                type="text"
                className={className || ''}
                onChange={e => {
                    const filteredData = originData?.filter((item: any) => filterFieldsData.some((s: string) => item[s]?.toLowerCase().includes(e.target.value.toLowerCase())));
                    
                    if (e.target.value.trim() === '') {
                        setInstance(originData);
                        onChange?.(originData);
                    } else {
                        setInstance(filteredData);
                        onChange?.(filteredData);
                    }
                }}
                placeholder={placeholder || ''}
            />
        </div>
    );
};

export default TableFilter;
