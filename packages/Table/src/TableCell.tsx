import React, { forwardRef, useContext } from 'react';

import { TableContext } from './TableContext';

import { cellMark, removeCellFocusClassName } from './table-utils/func';
import useTableKeyPress from './table-utils/hooks/useTableKeyPress';

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    active?: boolean;
    activeClassName?: string;
    className?: string;
    colSpan?: number;
    scope?: `col` | `row` | `colgroup` | `rowgroup`;
    onClick?: (e: any) => void;
    onKeyDown?: (e: any) => void;
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((
    { 
        children, 
        active, 
        activeClassName, 
        className, 
        colSpan,
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
     } = useContext(TableContext);


    const CellComponent = scope ? 'th' : 'td';

    // key press initialization
    const { handleKeyPressed } = useTableKeyPress({
        enabled: keyboardFocusable,
        data: originData,
        spyElement: rootRef.current,
        rootDataInfo,
        setRootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        onCellKeyPressed,
        onKeyDown
    }, [rootRef]);
    

    return (
        <>

            <CellComponent
                {...attributes}
                ref={(node) => {
                    if (typeof externalRef === 'function') {
                        externalRef(node);
                    } else if (externalRef) {
                        externalRef.current = node;
                    }

                    if (node) {
                        const _row = node.dataset.tableRow;
                        const _col = node.dataset.tableCol;
                        refNode.current.set(cellMark(_row, _col), node);
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
                className={`${className || ''} ${active ? (activeClassName || 'active') : ''}`}
            >
                {children}
            </CellComponent>

        </>
    )
});

export default TableCell;