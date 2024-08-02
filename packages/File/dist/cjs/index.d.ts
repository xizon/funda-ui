import React from 'react';
declare type FileProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    labelClassName?: string;
    labelHoverClassName?: string;
    accept?: string;
    inline?: boolean;
    autoSubmit?: boolean;
    fetchUrl?: string;
    fetchMethod?: string;
    fetchParams?: any;
    multiple?: boolean;
    submitLabel?: React.ReactNode | string;
    submitClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    /** Incoming data, you can set the third parameter of `onComplete` */
    data?: any;
    /** -- */
    id?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    onChange?: (e: any, e2: any, value: any) => void;
    onComplete?: (e: any, e2: any, callback: any, incomingData: string | null | undefined) => void;
    onProgress?: (files: any, e: any, e2: any) => void;
};
declare const File: React.ForwardRefExoticComponent<FileProps & React.RefAttributes<unknown>>;
export default File;
