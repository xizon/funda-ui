import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type MultiFuncSelectOptionChangeFnType = (arg1: any, arg2: any) => void;
interface MultiSelectDataConfig {
    values: string[] | number[];
    labels: string[] | number[];
    queryStrings: string[] | number[];
}
interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    data: MultiSelectDataConfig | null;
}
declare type MultiFuncSelectProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    multiSelect?: MultiSelectConfig;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: any;
    controlArrow?: React.ReactNode;
    fetchTrigger?: boolean;
    fetchTriggerForDefaultData?: MultiSelectDataConfig | null;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any, incomingData: string | null | undefined) => void;
    onSelect?: (data: any) => void;
    onChange?: MultiFuncSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const MultiFuncSelect: React.ForwardRefExoticComponent<MultiFuncSelectProps & React.RefAttributes<unknown>>;
export default MultiFuncSelect;
