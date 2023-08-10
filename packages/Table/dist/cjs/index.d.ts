/// <reference types="react" />
declare type TableProps = {
    wrapperClassName?: string;
    tableClassName?: string;
    bodyClassName?: string;
    headClassName?: string;
    footClassName?: string;
    checkable?: boolean;
    draggable?: boolean;
    sortable?: boolean;
    data: any;
    bordered?: boolean;
    colGroup?: boolean;
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;
    /** -- */
    id?: string;
    onClick?: (el: any, val: any) => void;
    onCheck?: (val: any) => void;
    onDrag?: (dragStart: any, dragEnd: any) => void;
};
declare const Table: (props: TableProps) => JSX.Element;
export default Table;
