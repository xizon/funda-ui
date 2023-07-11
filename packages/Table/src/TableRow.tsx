import React from 'react';

import TableField from './TableField';
import TableFieldRow from './TableFieldRow';


/* Table Row
-------------------------------------------------*/
type TableRowProps = {
    index: React.Key;
    data?: any[];
    headerLabel?: any[];
    checkboxNamePrefix?: string;
    rowKey?: string;
    draggable?: boolean;
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    getCheckedRootData?: any[];
    updategetCheckedRootData?: any;
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
        onCheck,
        evDragEnd,
        evDragStart
    } = props;

    
    const rowChecked = getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked;


    return (
        <>
            <tr draggable={draggable} onDragEnd={evDragEnd} onDragStart={evDragStart} data-id={index} data-key={rowKey} className={`row-obj ${rowChecked ? 'active' : ''}`}>
                {data ? data.map((el: any, i: number) => {
                    let headerItem = headerLabel![i];
                    if (headerItem === undefined) headerItem = {type: false, content: ''};

                    if ( i === 0 ) {
                        return <TableFieldRow 
                                    key={i} 
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
                                    key={i} 
                                    columnHeader={headerItem.content.replace(/(<([^>]+)>)/ig, '')} 
                                    cols={el.cols} 
                                    content={el.content} 
                                    width={el.width} 
                                    style={el.style} 
                                    index={i} 
                                />;
                    }
                    
                }) : null}
            </tr>

        </>
    )
}

export default TableRow;
