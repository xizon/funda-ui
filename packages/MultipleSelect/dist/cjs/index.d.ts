import React from 'react';
export interface OptionConfig {
    [propName: string]: string | number | boolean | Function;
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
    removeAllBtnLabel?: string | React.ReactNode;
    addAllBtnLabel?: string | React.ReactNode;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    unattachedSelect?: boolean;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    appendControl?: React.ReactNode;
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
    onAddAll?: (e: any, data: any, dataStr: any) => void;
    onRemoveAll?: (e: any, data: any, dataStr: any) => void;
    onChange?: (e: any, data: any, dataStr: any, currentData: any, type: string) => void;
};
declare const MultipleSelect: React.ForwardRefExoticComponent<MultipleSelectProps & React.RefAttributes<unknown>>;
export default MultipleSelect;
