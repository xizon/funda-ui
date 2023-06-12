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

    const {
        cols,
        columnHeader,
        index,
        content
    } = props;


    function handleTbodyLeave(e: any) {
        e.target.closest('table').querySelector('tbody').classList.remove('drag-trigger-mousedown');
    }

    return (
        <>
            <td colSpan={cols} data-table-text={columnHeader} data-table-col={index}  onMouseEnter={handleTbodyLeave}>{content}</td>
        </>
    )
}

export default TableField;

