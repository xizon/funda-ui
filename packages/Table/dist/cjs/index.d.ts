import React from 'react';
declare type TableProps = {
    tableCheckRef?: React.RefObject<any>;
    wrapperClassName?: string;
    tableClassName?: string;
    bodyClassName?: string;
    headClassName?: string;
    footClassName?: string;
    rowActiveClassName?: string;
    checkable?: boolean;
    useRadio?: boolean;
    draggable?: boolean;
    sortable?: boolean;
    data: any;
    bordered?: boolean;
    colGroup?: boolean;
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;
    cellAutoWidth?: boolean;
    /** -- */
    id?: string;
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellClick?: (el: any) => void;
    onRowMouseEnter?: (el: any) => void;
    onRowMouseLeave?: (el: any) => void;
    onRowClick?: (el: any) => void;
    onHeadCellMouseEnter?: (el: any) => void;
    onHeadCellMouseLeave?: (el: any) => void;
    onHeadCellClick?: (el: any) => void;
    onClick?: (el: any, val: any) => void;
    onCheck?: (val: any, el: any, checked: boolean) => void;
    onDrag?: (dragStart: any, dragEnd: any) => void;
    onRenderFinished?: (res: boolean) => void;
};
declare const Table: (props: TableProps) => JSX.Element;
export default Table;
