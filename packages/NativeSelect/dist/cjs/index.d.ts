import React from 'react';
export interface ItemConfig {
    [propName: string]: string | number | boolean;
}
export interface OptionConfig {
    [propName: string]: string | number | boolean | ItemConfig[];
}
declare type NativeSelectOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;
declare type NativeSelectProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string | unknown;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onChange?: NativeSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const NativeSelect: React.ForwardRefExoticComponent<NativeSelectProps & React.RefAttributes<unknown>>;
export default NativeSelect;
