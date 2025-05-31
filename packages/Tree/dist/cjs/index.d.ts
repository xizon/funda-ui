import React from 'react';
export interface ListSearchDataConfig {
    title: string | number;
}
export interface ItemConfig {
    key: string;
    slug: string;
    link: string;
    optiondata: string;
}
export interface UpdateDataFunction {
    (key: React.Key | null, fetch: FetchConfig | null): Promise<void>;
}
export interface DataNode {
    key: React.Key;
    title: string;
    link?: string;
    active?: boolean;
    checked?: boolean;
    disabled?: boolean;
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
export declare type TreeProps = {
    /** Set TreeNode display Checkbox or not */
    checkable?: boolean;
    /** Shows a connecting line */
    showLine?: boolean;
    /**  Specifies what kind of line to display */
    lineStyle?: string;
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** A function to render content of the option, replaces the default content of the option. */
    renderOption?: (optionData: DataNode, key: React.Key) => React.ReactNode;
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
    onSelect?: (e: React.MouseEvent<HTMLElement>, val: ItemConfig, updateData: UpdateDataFunction) => void;
    onDoubleSelect?: (e: React.MouseEvent<HTMLElement>, val: ItemConfig, updateData: UpdateDataFunction) => void;
    onCollapse?: (e: React.MouseEvent<HTMLElement>, val: ItemConfig, updateData: UpdateDataFunction, isExpanded: boolean) => void;
    onCheck?: (val: any) => void;
};
export interface TreeRef {
    collapse: (slug: string) => void;
    updateParentTreeHeights: (targetElement: HTMLElement) => Promise<void>;
}
declare const Tree: React.ForwardRefExoticComponent<TreeProps & React.RefAttributes<TreeRef>>;
export default Tree;
