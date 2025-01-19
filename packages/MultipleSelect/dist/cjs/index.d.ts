import React from 'react';
export interface OptionConfig {
    id: number;
    parentId?: number;
    label: string;
    listItemLabel: string;
    value: string;
    queryString: string;
    depth?: number;
    children?: OptionConfig[];
    disabled?: boolean;
    extendedContent?: React.ReactNode;
}
export declare type MultipleSelectProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    childClassName?: string;
    wrapperMinHeight?: string;
    wrapperMinWidth?: string;
    availableHeaderTitle?: string;
    selectedHeaderTitle?: string;
    selectedHeaderNote?: string;
    selectedResultReverse?: boolean;
    removeAllBtnLabel?: string | React.ReactNode;
    addAllBtnLabel?: string | React.ReactNode;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    unattachedSelect?: boolean;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    /** DragDrop List */
    draggable?: boolean;
    handleHide?: boolean;
    handleIcon?: string;
    handlePos?: 'left' | 'right';
    dragMode?: 'handle' | 'block';
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onAddAll?: (e: HTMLElement | null, data: any[], dataStr: string, res: any[]) => void;
    onRemoveAll?: (e: HTMLElement | null, data: any[], dataStr: string, res: any[]) => void;
    onChange?: (e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => void;
};
declare const MultipleSelect: React.ForwardRefExoticComponent<MultipleSelectProps & React.RefAttributes<unknown>>;
export default MultipleSelect;
