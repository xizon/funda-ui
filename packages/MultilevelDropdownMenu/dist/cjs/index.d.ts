import React from 'react';
declare type MultilevelDropdownMenuProps = {
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** set an arrow */
    arrow?: React.ReactNode;
    /** The class name of the navbar. */
    navbarClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format. */
    data?: any[any];
    /** Pass the current routing path into. It is used to determine whether to activate */
    routerPath?: string;
    /** -- */
    id?: string;
    onSelect?: (e: any, val: any) => void;
};
declare const _default: React.MemoExoticComponent<(props: MultilevelDropdownMenuProps) => JSX.Element>;
export default _default;
