import React, { forwardRef, useContext } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';

import { TableContext } from './TableContext';

import { cellMark, removeCellFocusClassName } from './utils/func';
import useTableKeyPress from './utils/hooks/useTableKeyPress';

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    active?: boolean;
    nowrap?: boolean;
    activeClassName?: string;
    className?: string;
    colSpan?: number;
    style?: React.CSSProperties;
    scope?: `col` | `row` | `colgroup` | `rowgroup`;
    onClick?: (e: any) => void;
    onKeyDown?: (e: any) => void;
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((
    { 
        children, 
        active, 
        nowrap,
        activeClassName, 
        className: myClassName, 
        colSpan,
        style,
        scope,
        onClick,
        onKeyDown,
        ...attributes 
    },
    externalRef
) => {

    const { 
        originData,
        rootRef,
        rootDataInfo,
        setRootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        keyboardFocusable,
        onCellKeyPressed,
        onCellPressEnter,
     } = useContext(TableContext);


    const CellComponent = scope ? 'th' : 'td';

    // key press initialization
    const { handleKeyPressed } = useTableKeyPress({
        enabled: keyboardFocusable,
        data: originData,
        spyElement: rootRef.current,
        rootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        onCellKeyPressed,
        onCellPressEnter,
        onKeyDown
    }, [rootRef]);
    

    return (
        <>

            <CellComponent
                {...attributes}
                style={typeof nowrap === 'undefined' ? style : { whiteSpace: clsWrite(nowrap, 'normal', 'nowrap'), ...style }}
                ref={(node) => {
                    if (typeof externalRef === 'function') {
                        externalRef(node);
                    } else if (externalRef) {
                        externalRef.current = node;
                    }

                    if (node) {
                        const _row = node.dataset.tableRow;
                        const _col = node.dataset.tableCol;
                        if (typeof _row !== 'undefined' && typeof _col !== 'undefined') {
                            refNode.current.set(cellMark(_row, _col), node);
                        }
                        
                    }

                }}
                colSpan={colSpan} 
                tabIndex={-1}
                onKeyDown={handleKeyPressed}  // require "tabIndex" attribute
                onClick={(e: React.MouseEvent) => {
                    const _el: any = e.currentTarget;

                    // key press initialization
                    if (keyboardFocusable) {
                        const _row = Number(_el.dataset.tableRow);
                        const _col = Number(_el.dataset.tableCol);

                        removeCellFocusClassName(rootRef.current);
                        setFocusableCellId(cellMark(_row, _col));
                        _el.classList.add('cell-focus');

                    }

                    // callback
                    onClick?.(e);
                }}
                className={combinedCls(
                    myClassName,
                    active ? clsWrite(activeClassName, 'active') : undefined
                )}
            >
                {children}
            </CellComponent>

        </>
    )
});

export default TableCell;