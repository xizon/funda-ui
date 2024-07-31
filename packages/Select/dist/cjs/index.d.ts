import React from 'react';
interface ItemConfig {
    [propName: string]: string | number | boolean;
}
interface OptionConfig {
    [propName: string]: string | number | boolean | ItemConfig[];
}
declare type SelectOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;
declare type SelectProps = {
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
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<unknown>>;
export default Select;
