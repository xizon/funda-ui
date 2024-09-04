import React, { useState, useEffect, useRef, forwardRef, useContext, useImperativeHandle } from "react";
import { TableContext } from '../TableContext';

import { convertMapToArr } from './func';

export type ToggleSelectionProps = {
    contentRef?: React.ForwardedRef<any>;
    row: number;
    className?: string;
    useRadio?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (arg1: any, arg2: any, fetchData: any[]) => void;
    checked?: boolean;
};


const ToggleSelection = forwardRef((props: ToggleSelectionProps, ref: any) => {
    const {
        contentRef,
        row,
        useRadio,
        className,
        indeterminate = false,
        disabled,
        name,
        value,
        onChange,
        checked,
        ...attributes
    } = props;

    const { 
        originData, 
        rowSelectable,
        selectedItems,
        setSelectedItems,
        onChangeRowSelect,
    } = useContext(TableContext);


    const totalSize = originData.length;
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;
    const [allChecked, setAllChecked] = useState<boolean>(false);

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            indeterminate: (value: boolean) => {
                resolvedRef.current.indeterminate = value;
            },
            setSelectAll: (value: boolean) => {
                setAllChecked(value);
            },
            control: () => {
                return resolvedRef.current;
            }
        }),
        [contentRef, resolvedRef],
    );


    function selectTarget(rowIndex: string | number) {
        const _val = String(rowIndex);
        
        // filter
        // =================================================================
        let _selectedIndex: number[] = [];
        let filteredData: any[] = [];
        if (!isNaN(row) && Array.isArray(originData)) {

            // all
            if (row === -1) {
                const _target = Array.from({
                    length: totalSize
                    },
                    function(v, k) {
                        return String(k);
                    }
                );

                if (selectedItems.size === 0 || selectedItems.size < totalSize) {
                    _selectedIndex = convertMapToArr(checkedSpecItems(_target, true)).map((v: any) => Number(v));
                    setAllChecked(true);
                } else {
                    _selectedIndex = convertMapToArr(checkedSpecItems(_target, false)).map((v: any) => Number(v));
                    setAllChecked(false);
                }
                
                
            } else {
                const _newSelectedItems = checkedOneItem(_val);
                const _res = convertMapToArr(_newSelectedItems);
                _selectedIndex = _res.map((v: any) => Number(v));
            }

            filteredData = originData.filter((v: any, i: number) => _selectedIndex.includes(i));

        }

        return filteredData;
    }

    function selectTargetExclusive(rowIndex: string | number) {
        const _val = String(rowIndex);
        
        // filter
        // =================================================================
        let filteredData: any[] = [];
        if (!isNaN(row) && Array.isArray(originData)) {

            const newSelectedItems = new Set(new Map());
            newSelectedItems.add(_val as never);
            setSelectedItems(newSelectedItems);

            filteredData = originData.filter((v: any, i: number) => Number(_val) === i);

        }

        return filteredData;
    }


    function checkedSpecItems(itemKey: string[], check: boolean) {
        // first, make a copy of the original set rather than mutating the original
        const newSelectedItems = new Set(selectedItems);
        itemKey.forEach((s: string) => {
            if (check) {
                newSelectedItems.add(s);
            } else {
                newSelectedItems.delete(s);
            }
        });

        setSelectedItems(newSelectedItems);
        return newSelectedItems;
    }

    function checkedOneItem(itemKey: string) {
        // first, make a copy of the original set rather than mutating the original
        const newSelectedItems = new Set(selectedItems);
        if (!newSelectedItems.has(itemKey)) {
            newSelectedItems.add(itemKey);
        } else {
            newSelectedItems.delete(itemKey);
        }
        setSelectedItems(newSelectedItems);

        return newSelectedItems;
    }


    function handleChange(event: any) {
        const _val = event.target.value;
        const filteredData = useRadio ? selectTargetExclusive(_val) : selectTarget(_val);
   
        onChange?.(event, event.target.checked, filteredData);
        onChangeRowSelect?.(filteredData);

    }

    
    useEffect(() => {
        if (resolvedRef.current) {
            resolvedRef.current.indeterminate = indeterminate;
        }
    }, [resolvedRef, indeterminate]);


    return (
        <>

            {/** All */}
            {rowSelectable && row === -1 ? <input
                type={useRadio ? 'radio' : 'checkbox'}
                ref={resolvedRef}
                className={className || ''}
                name={name}
                value={`${row}`}
                checked={allChecked}
                onChange={handleChange}
                {...attributes}
            /> : null}
            

            {/** Per Row */}
            {rowSelectable && row != -1 ? <input
                type={useRadio ? 'radio' : 'checkbox'}
                ref={resolvedRef}
                className={className || ''}
                name={name}
                value={`${row}`}
                data-row={row}
                data-value={originData[row] ? JSON.stringify(originData[row]) : null}
                checked={selectedItems.has(`${row}`)}
                onChange={handleChange}
                {...attributes}
            /> : null}

            
        </>
    );
}
);

export default ToggleSelection;
