import React from 'react';

/* Table Field
-------------------------------------------------*/
type TableFieldProps = {
	cols?: number;
	content?: any;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
	columnHeader?: string;
	index?: number;
};

const TableField = (props: TableFieldProps) => {

    const {
        cols,
        width,
        className,
        style,
        columnHeader,
        index,
        content
    } = props;


    function handleTbodyLeave(e: any) {
        e.target.closest('table').querySelector('tbody').classList.remove('drag-trigger-mousedown');
    }

    return (
        <>
            <td colSpan={cols} data-table-text={columnHeader} data-table-col={index}  onMouseEnter={handleTbodyLeave} style={style ? style : (width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: width} : {}) : {})} className={className || ''}>{content}</td>
        </>
    )
}

export default TableField;

