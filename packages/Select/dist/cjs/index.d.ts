import React from 'react';
export declare type SelectOptionChangeFnType = (arg1: any, arg2: any, arg3: any) => void;
export interface MultiSelectDataConfig {
    values: string[] | number[];
    labels: string[] | number[];
    queryStrings: string[] | number[];
}
export interface MultiSelectControlValConfig {
    values: string[];
    labels: string[];
}
export interface OptionConfig {
    disabled?: boolean;
    optgroup?: any[];
    group?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
    callback?: () => void;
}
export interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    data: MultiSelectDataConfig | null;
}
export interface multiSelectSelectedItemOnlyStatusConfig {
    itemsLabel?: string;
    allItemsLabel?: string;
    noneLabel?: string;
}
export interface CleanTriggerConfig {
    valid: boolean;
    cleanValueLabel?: string;
}
export declare type SelectProps = {
    contentRef?: React.ForwardedRef<any>;
    popupRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    exceededSidePosOffset?: number;
    multiSelect?: MultiSelectConfig;
    multiSelectEntireAreaTrigger?: boolean;
    multiSelectSelectedItemOnlyStatus?: multiSelectSelectedItemOnlyStatusConfig;
    renderSelectedValue?: (selectedData: MultiSelectControlValConfig, removeFunc: (e: React.MouseEvent) => void) => void;
    cleanTrigger?: CleanTriggerConfig;
    defaultValue?: string | OptionConfig;
    value?: string | OptionConfig;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: OptionConfig[] | string;
    lockBodyScroll?: boolean;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    winWidth?: string | Function;
    controlArrow?: React.ReactNode;
    firstRequestAutoExec?: boolean;
    fetchTrigger?: boolean;
    fetchTriggerForDefaultData?: MultiSelectDataConfig | null;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (e: any, e2: any, value: string, data: any, incomingData: string | null | undefined) => void;
    onLoad?: (e: any, e2: any, value: string | null | undefined) => void;
    onSelect?: (data: any) => void;
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<unknown>>;
export default Select;
