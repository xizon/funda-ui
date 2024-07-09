import React, { useState, useRef, useCallback, KeyboardEvent } from 'react';


import TableField from './TableField';
import TableFieldRow from './TableFieldRow';

import { formatPerlineControlVal, cellMark, removeCellFocusClassName } from './table-utils';


/* Table Row
-------------------------------------------------*/
type TableRowProps = {
    updateFocusableCellId: any[];
    rootDataInfo: any;
    refNode: React.RefObject<any>;
    tableRootRef: React.RefObject<any>;
    tableCheckRef?: React.ForwardedRef<any>;
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
    onCheck?: (val: any, el: any, checked: boolean) => void;
    evDragEnd?: (option: any) => void | undefined;
    evDragStart?: (option: any) => void | undefined;
    evCellMouseEnter?: (el: any) => void | undefined;
    evCellMouseLeave?: (el: any) => void | undefined;
    evCellClick?: (el: any) => void | undefined;
    evRowMouseEnter?: (el: any) => void | undefined;
    evRowMouseLeave?: (el: any) => void | undefined;
    evRowClick?: (el: any) => void | undefined;
    evCellArrowKeys?: (classname: any, el: any) => void;
};

const TableRow = (props: TableRowProps) => {

    const {
        updateFocusableCellId,
        rootDataInfo,
        refNode,
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
        evCellArrowKeys
    } = props;

    
    
    const nonExistentRowKey = `row-null`;
    const rowIndex = rowKey?.replace('row-', '');
    const _rowChecked = getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked;

    const [firstInitCheckboxesClassName, setFirstInitCheckboxesClassName] = useState<boolean>(false);
 

      
    // effective element movement on keystroke
    const [focusableCellId, setFocusableCellId] = updateFocusableCellId;

    
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



    const handleKeyPressedForCell = useCallback( async (event: KeyboardEvent<HTMLTableElement>) => {
        if (typeof data === 'undefined' || data === null || rootDataInfo === null || tableRootRef.current === null) return;

        const key = event.code;
        const oldCellSignal = focusableCellId?.replace('cell-', '').split('-');
        let _row = Number(oldCellSignal[0]);
        let _col = Number(oldCellSignal[1]);

        const move = (key: string) => {
  
            switch (key) {
                case 'ArrowLeft':
                    _col = _col - 1 < 0 ? 0 : _col - 1;
                break;
                case 'ArrowRight':
                    _col = _col + 1 > data.length - 1 ? data.length -1 : _col + 1;
                break;
                case 'ArrowUp':
                    _row =  _row - 1 < 0 ? 0 : _row - 1;
                break;
                case 'ArrowDown':
                    _row = _row + 1 > rootDataInfo.totalRow - 1 ? rootDataInfo.totalRow - 1 : _row + 1;
                break;
            }

            const nextCellSignal = cellMark(_row, _col);
            evCellArrowKeys?.(nextCellSignal, refNode.current.get(nextCellSignal));
            
            // focus current cell
            // removeCellFocusClassName(tableRootRef.current);
            // tableRootRef.current.querySelector(`td.${nextCellSignal}`)?.classList.add('cell-focus');

            
            //
            setFocusableCellId(nextCellSignal);

        };
      
        if (key === 'ArrowLeft') {
            move('ArrowLeft');
        }

        if (key === 'ArrowRight') {
            move('ArrowRight');
        }

      
        if (key === 'ArrowUp') {
            move('ArrowUp');
        }

        if (key === 'ArrowDown') {
            move('ArrowDown');
        }

    }, [focusableCellId]);



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
                                    ref={(node: any) => {
                                        if (node) {
                                            refNode.current.set(cellMark(rowIndex, i), node);
                                        } else {
                                            refNode.current.delete(cellMark(rowIndex, i));
                                        }
                                    

                                    }}
                                    tableRootRef={tableRootRef}
                                    columnHeader={typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content} 
                                    className={`${el.className || ''} ${focusableCellId === cellMark(rowIndex, i) ? 'cell-focus' : ''}`}
                                    dataUse={el.data}
                                    cols={el.cols} 
                                    content={el.content} 
                                    width={el.width} 
                                    style={el.style} 
                                    rowKey={rowKey} 
                                    index={i} 
                                    onKeyDown={handleKeyPressedForCell}
                                    updateCellFocusedId={setFocusableCellId}
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
