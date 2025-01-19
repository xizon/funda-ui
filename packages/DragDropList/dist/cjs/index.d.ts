import React from 'react';
export interface ListItem {
    id: number;
    parentId?: number;
    label: string;
    listItemLabel: string;
    value: string;
    queryString: string;
    depth?: number;
    children?: ListItem[];
    disabled?: boolean;
    appendControl?: React.ReactNode;
}
export interface DragDropListProps {
    wrapperClassName?: string;
    prefix?: string;
    data?: ListItem[];
    draggable?: boolean;
    handleHide?: boolean;
    handleIcon?: string;
    handlePos?: 'left' | 'right';
    dragMode?: 'handle' | 'block';
    editable?: boolean;
    itemStyle?: React.CSSProperties;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    onUpdate?: (items: ListItem[], curId: number) => void;
}
export interface EditValue {
    [propName: string]: string | number;
}
export interface TouchOffset {
    x: number;
    y: number;
}
export interface OptionConfig {
    [propName: string]: string | number | boolean | Function | any[];
}
declare const DragDropList: React.ForwardRefExoticComponent<DragDropListProps & React.RefAttributes<unknown>>;
export default DragDropList;
