/// <reference types="react" />
declare type TableProps = {
    wrapperClassName?: string;
    tableClassName?: string;
    bodyClassName?: string;
    headClassName?: string;
    footClassName?: string;
    data: any;
    bordered?: boolean;
    colGroup?: boolean;
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;
    /** -- */
    id?: string;
};
declare const Table: (props: TableProps) => JSX.Element;
export default Table;
