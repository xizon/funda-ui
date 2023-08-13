import React from 'react';

import Radio from 'rpb-radio';

import TableField from './TableField';
import TableFieldRow from './TableFieldRow';

import { formatPerlineControlVal } from './table-utils';


/* Table Row
-------------------------------------------------*/
type TableRowProps = {
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
};

const TableRow = (props: TableRowProps) => {

    const {
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
        evDragStart
    } = props;

    
    const nonExistentRowKey = `row-null`;
    const rowChecked = getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked;

    function handleClick(event: any) {
        const curVal: any = formatPerlineControlVal(event.currentTarget)
        onClick?.(event, curVal);
    }

    return (
        <>
            <tr draggable={draggable} onDragEnd={evDragEnd} onDragStart={evDragStart} data-id={index} data-key={rowKey} className={`row-obj ${rowChecked ? 'active' : ''} ${typeof onClick === 'undefined' ? '' : 'clickable'}`} onClick={handleClick}>
                {data ? data.map((el: any, i: number) => {
                    let headerItem = headerLabel![i];
                    if (headerItem === undefined) headerItem = {type: false, content: ''};

                    if ( i === 0 ) {
                        return <TableFieldRow 
                                    key={'th-row' + i} 
                                    useRadio={useRadio}
                                    columnHeader={headerItem.content.replace(/(<([^>]+)>)/ig, '')} 
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
                                />;
                    } else {
                        return <TableField 
                                    key={'td-row' + i} 
                                    columnHeader={headerItem.content.replace(/(<([^>]+)>)/ig, '')} 
                                    cols={el.cols} 
                                    content={el.content} 
                                    width={el.width} 
                                    style={el.style} 
                                    index={i} 
                                />;
                    }
                    
                }) : null}


                {useRadio ? <>
                    <td style={{display: 'none'}}>
                        <Radio
                            wrapperClassName=""
                            options={`{
                                "":"${nonExistentRowKey}"}`}
                            name={`checkbox-${checkboxNamePrefix}-0`}
                            tabIndex={-1}
                            data-index={`${nonExistentRowKey?.replace('row-', '')}`}
                            data-key={`${nonExistentRowKey}`}
                            value={`${nonExistentRowKey}`}
                        />
                    </td>
                </> : null}
            </tr>

        </>
    )
}

export default TableRow;
