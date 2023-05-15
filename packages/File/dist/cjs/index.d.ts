import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type FileProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    labelClassName?: string;
    labelHoverClassName?: string;
    fetchUrl?: string;
    fetchMethod?: string;
    multiple?: boolean;
    submitLabel?: React.ReactNode | string;
    submitClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    /** -- */
    id?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onChange?: (e: any, e2: any, value: any) => void;
    onSubmit?: (e: any, callback: any) => void;
};
declare const File: React.ForwardRefExoticComponent<FileProps & React.RefAttributes<unknown>>;
export default File;
