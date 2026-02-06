import React, { forwardRef, useContext } from "react";
import { TableContext } from '../TableContext';

import useTableSort from './hooks/useTableSort';

export type SortSpriteProps = {
    fieldType: 'text' | 'number' | 'date';
    className?: string;
    icon?: React.ReactNode;
    isReverse?: boolean;
    onClick?: (e: any) => void;
    sortBy?: (handleProcess: Function, filterType: string, inverse: boolean) => ((a: Element, b: Element) => number); // A function that determines the order of the elements. 
};


const SortSprite = forwardRef((props: SortSpriteProps, externalRef: any) => {
    const {
        fieldType,
        className,
        icon,
        isReverse = false,
        onClick,
        sortBy
    } = props;

    const {
        originData,
        rootRef,
        colSortable,
        onColSort
    } = useContext(TableContext);


    // sortable table initialization
    const { handleSortList } = useTableSort({
        enabled: colSortable && rootRef.current,
        data: originData,
        spyElement: rootRef.current,
        fieldType: fieldType,
        onColSort: onColSort,
        isReverse: isReverse,
        onClick: onClick,
        sortBy: sortBy
    }, [rootRef, originData]);


    return (
        <>
            {colSortable ? <span className={className || 'sort-trigger'} onClick={handleSortList}>
                {icon || <svg width="1em" height="1em" viewBox="0 0 18 18">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path d="M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z" id="path" fill="#000000"></path>
                    </g>
                </svg>}

            </span> : null}

        </>

    );
});

export default SortSprite;
