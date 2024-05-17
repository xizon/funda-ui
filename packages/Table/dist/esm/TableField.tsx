import React, { forwardRef, MouseEvent } from 'react';

import { cellMark, removeCellFocusClassName } from './table-utils';

/* Table Field
-------------------------------------------------*/
type TableFieldProps = {
    tableRootRef: React.RefObject<any>;
    rowKey?: string;
	cols?: number;
	content?: any;
    width?: string;
    className?: string;
    dataUse?: string;
    style?: React.CSSProperties;
	columnHeader?: string;
	index?: React.Key;
    updateCellFocusedId?: any;
    evCellMouseEnter?: (el: any) => void | undefined;
    evCellMouseLeave?: (el: any) => void | undefined;
    evCellClick?: (el: any) => void | undefined;
    onKeyDown?: (el: any) => void;
};

const TableField = forwardRef((props: TableFieldProps, ref: any) => {

    const {
        tableRootRef,
        rowKey,
        cols,
        width,
        className,
        dataUse = '',
        style,
        columnHeader,
        index,
        content,
        updateCellFocusedId,
        evCellMouseEnter,
        evCellMouseLeave,
        evCellClick,
        onKeyDown,
    } = props;

    const rowIndex = rowKey?.replace('row-', '');

    function handleTbodyLeave(e: any) {
        (e.target.closest('table') as any)?.querySelector('tbody').classList.remove('drag-trigger-mousedown');
        
        evCellMouseEnter?.(e);
    }


  
    return (
        <>
            <td 
                ref={ref}
                colSpan={cols} 
                data-table-text={columnHeader} 
                data-table-col={index}  
                data-table-row={rowIndex}  
                data-use={dataUse}
                onMouseEnter={handleTbodyLeave} 
                onMouseLeave={(e: React.MouseEvent) => {
                    evCellMouseLeave?.(e);
                }}
                onClick={(e: React.MouseEvent) => {
                    evCellClick?.(e);

                    let _row = Number((e.currentTarget as any).dataset.tableRow);
                    let _col = Number((e.currentTarget as any).dataset.tableCol);

                    removeCellFocusClassName(tableRootRef.current);
                    updateCellFocusedId?.(cellMark(_row, _col));
                }}
                onKeyDown={onKeyDown}
                style={style ? style : (width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: width} : {}) : {})} 
                className={className || ''}
            >{content}</td>
        </>
    )
});

export default TableField;

