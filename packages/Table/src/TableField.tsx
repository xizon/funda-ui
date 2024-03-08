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
	index?: React.Key;
    evCellMouseEnter?: (el: any) => void | undefined;
    evCellMouseLeave?: (el: any) => void | undefined;
};

const TableField = (props: TableFieldProps) => {

    const {
        cols,
        width,
        className,
        style,
        columnHeader,
        index,
        content,
        evCellMouseEnter,
        evCellMouseLeave
    } = props;


    function handleTbodyLeave(e: any) {
        (e.target.closest('table') as any)?.querySelector('tbody').classList.remove('drag-trigger-mousedown');
        
        evCellMouseEnter?.(e);
    }

    return (
        <>
            <td 
                colSpan={cols} 
                data-table-text={columnHeader} 
                data-table-col={index}  
                onMouseEnter={handleTbodyLeave} 
                onMouseLeave={(e: React.MouseEvent) => {
                    evCellMouseLeave?.(e);
                }}
                style={style ? style : (width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: width} : {}) : {})} 
                className={className || ''}
            >{content}</td>
        </>
    )
}

export default TableField;

