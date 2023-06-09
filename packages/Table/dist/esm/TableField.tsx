import React from 'react';

/* Table Field
-------------------------------------------------*/
type TableFieldProps = {
	cols?: number;
	content?: any;
	columnHeader?: string;
	index?: number;
};

const TableField = (props: TableFieldProps) => {

    return (
        <>
            <td colSpan={props.cols} data-table={props.columnHeader} data-table-row={props.index}>{props.content}</td>
        </>
    )
}

export default TableField;

