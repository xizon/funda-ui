import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
export interface fetchResponseField {
    label: string | undefined;
    value: string | undefined;
}
declare type SelectOptionChangeFnType = (arg1: any, arg2: any) => void;
declare type SelectProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchResponseField?: fetchResponseField;
    onFetch?: (data: any) => void;
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<unknown>>;
export default Select;
