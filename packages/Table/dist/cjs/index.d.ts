/// <reference types="react" />
declare type TableProps = {
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
    /** -- */
    id?: string;
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onRowMouseEnter?: (el: any) => void;
    onRowMouseLeave?: (el: any) => void;
    onClick?: (el: any, val: any) => void;
    onCheck?: (val: any) => void;
    onDrag?: (dragStart: any, dragEnd: any) => void;
    onRenderFinished?: (res: boolean) => void;
};
declare const Table: (props: TableProps) => JSX.Element;
export default Table;
