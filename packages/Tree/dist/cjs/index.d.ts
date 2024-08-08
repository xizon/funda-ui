import React from 'react';
export interface ListSearchDataConfig {
    title: string | number;
}
export interface DataNode {
    key: React.Key;
    title: string;
    link?: string;
    active?: boolean;
    checked?: boolean;
    heading?: string;
    icon?: string;
    slug?: string;
    customContentToHyperlink?: React.ReactNode;
    customContentToLiTag?: React.ReactNode;
    itemMouseEnterCallback?: () => void;
    itemMouseLeaveCallback?: () => void;
    itemLinkMouseEnterCallback?: () => void;
    itemLinkMouseLeaveCallback?: () => void;
    childrenAsync?: boolean;
    children?: DataNode[];
}
export interface FetchConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
}
declare type TreeProps = {
    /** Set TreeNode display Checkbox or not */
    checkable?: boolean;
    /** Shows a connecting line */
    showLine?: boolean;
    /**  Specifies what kind of line to display */
    lineStyle?: string;
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** set an arrow */
    arrow?: React.ReactNode;
    /** Set collapse/expand icon */
    arrowIcons?: React.ReactNode[];
    /** Disable arrow */
    disableArrow?: boolean;
    /** Disable the collapse effect */
    disableCollapse?: boolean;
    /** The class name of the tree. */
    treeClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format. */
    data?: any[any];
    /** Retrieve data */
    retrieveData?: ListSearchDataConfig[];
    /** -- */
    id?: string;
    onSelect?: (e: any, val: any, func: Function) => void;
    onCollapse?: (e: any, val: any, func: Function) => void;
    onCheck?: (val: any) => void;
};
declare const Tree: (props: TreeProps) => JSX.Element;
export default Tree;
