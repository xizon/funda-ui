import React, { useState } from 'react';


import TableField from './TableField';
import TableFieldRow from './TableFieldRow';

import { formatPerlineControlVal } from './table-utils';


/* Table Row
-------------------------------------------------*/
type TableRowProps = {
    tableRootRef: React.RefObject<any>;
    tableCheckRef?: React.RefObject<any>;
    rowActiveClassName?: string;
    fieldsChecked?: boolean[] | boolean;
    fieldsCheckedAct?: any[];
    index: React.Key;
    data?: any[];
    headerLabel?: any[];
    checkboxNamePrefix?: string;
    rowKey?: string;
    draggable?: boolean;
    useRadio?: boolean;
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    getCheckedRootData?: any[];
    updategetCheckedRootData?: any;
    onClick?: (el: any, val: any) => void;
    onCheck?: (val: any) => void;
    evDragEnd?: (option: any) => void | undefined;
    evDragStart?: (option: any) => void | undefined;
    evCellMouseEnter?: (el: any) => void | undefined;
    evCellMouseLeave?: (el: any) => void | undefined;
    evCellClick?: (el: any) => void | undefined;
    evRowMouseEnter?: (el: any) => void | undefined;
    evRowMouseLeave?: (el: any) => void | undefined;
    evRowClick?: (el: any) => void | undefined;
};

const TableRow = (props: TableRowProps) => {

    const {
        tableRootRef,
        tableCheckRef,
        rowActiveClassName = 'active',
        fieldsChecked,
        fieldsCheckedAct,
        index,
        data,
        headerLabel,
        checkboxNamePrefix,
        rowKey,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        getCheckedRootData,
        updategetCheckedRootData,
        draggable,
        useRadio,
        onClick,
        onCheck,
        evDragEnd,
        evDragStart,
        evCellMouseEnter,
        evCellMouseLeave,
        evCellClick,
        evRowMouseEnter,
        evRowMouseLeave,
        evRowClick,
    } = props;

    
    
    const nonExistentRowKey = `row-null`;
    const rowIndex = rowKey?.replace('row-', '');
    const _rowChecked = getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked;

    const [firstInitCheckboxesClassName, setFirstInitCheckboxesClassName] = useState<boolean>(false);
 
    
    // initialize actived checkboxes
    const latestRowChecked = () => {
        if (firstInitCheckboxesClassName) return _rowChecked;

        if (Array.isArray(fieldsChecked)) {
            if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') {
                return fieldsChecked[Number(rowIndex)];
            }
        }
        return _rowChecked;
    };

    const rowChecked = firstInitCheckboxesClassName ? getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked : latestRowChecked();

    function handleClick(event: any) {
        const curVal: any = formatPerlineControlVal(event.currentTarget)
        onClick?.(event, curVal);
        evRowClick?.(event);
    }
  
    return (
        <>
            <tr 
                draggable={draggable} 
                onDragEnd={draggable ? evDragEnd : () => void(0)} 
                onDragStart={draggable ? evDragStart: () => void(0)} 
                data-id={index} 
                data-key={rowKey} 
                className={`row-obj ${rowChecked ? rowActiveClassName : ''} ${typeof onClick === 'undefined' ? '' : 'clickable'}`} 
                onClick={handleClick}
                onMouseEnter={(e: React.MouseEvent) => {
                    evRowMouseEnter?.(e);
                }}
                onMouseLeave={(e: React.MouseEvent) => {
                    evRowMouseLeave?.(e);
                }}
            >
                {data ? data.map((el: any, i: number) => {
                    let headerItem = headerLabel![i];
                    if (headerItem === undefined) headerItem = {type: false, content: ''};

                    if ( i === 0 ) {
                        return <TableFieldRow 
                                    key={'th-row' + i} 
                                    tableRootRef={tableRootRef}
                                    tableCheckRef={tableCheckRef}
                                    rowActiveClassName={rowActiveClassName}
                                    fieldsChecked={fieldsChecked}
                                    fieldsCheckedAct={fieldsCheckedAct}
                                    updateFirstInitCheckboxesClassName={setFirstInitCheckboxesClassName}
                                    useRadio={useRadio}
                                    columnHeader={typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content} 
                                    className={el.className}
                                    dataUse={el.data}
                                    cols={el.cols} 
                                    content={el.content} 
                                    width={el.width} 
                                    style={el.style} 
                                    index={i} 
                                    checkboxNamePrefix={checkboxNamePrefix} 
                                    rowKey={rowKey} 
                                    updateCheckedPrint={updateCheckedPrint}
                                    getCheckedPrint={getCheckedPrint}
                                    updategetCheckedData={updategetCheckedData}
                                    getCheckedData={getCheckedData}
                                    updategetCheckedRootData={updategetCheckedRootData}
                                    getCheckedRootData={getCheckedRootData}
                                    onCheck={onCheck}
                                    draggable={draggable}
                                    evCellMouseEnter={evCellMouseEnter}
                                    evCellMouseLeave={evCellMouseLeave}
                                    evCellClick={evCellClick}
                                />;
                    } else {
                        return <TableField 
                                    key={'td-row' + i} 
                                    columnHeader={typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content} 
                                    className={el.className}
                                    dataUse={el.data}
                                    cols={el.cols} 
                                    content={el.content} 
                                    width={el.width} 
                                    style={el.style} 
                                    index={i} 
                                    evCellMouseEnter={evCellMouseEnter}
                                    evCellMouseLeave={evCellMouseLeave}
                                    evCellClick={evCellClick}
                                />;
                    }
                    
                }) : null}

            </tr>

        </>
    )
}

export default TableRow;
