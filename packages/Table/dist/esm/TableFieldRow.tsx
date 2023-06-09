import React from 'react';

/* Table Field Row
-------------------------------------------------*/
type TableFieldRowProps = {
	cols?: number;
	content?: any;
	columnHeader?: string;
	index?: number;
};

const TableFieldRow = (props: TableFieldRowProps) => {

    return (
        <>
            <th scope="row" colSpan={props.cols} data-table={props.columnHeader} data-table-row={props.index}>{props.content}</th>
        </>
    )
}

export default TableFieldRow;

