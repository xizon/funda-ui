import React from 'react';
export interface OptionConfig {
    [propName: string]: string | number | React.ReactNode | boolean;
}
declare type RadioOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;
declare type RadioProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    itemSelectedClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string | unknown;
    inline?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onLoad?: (arg1: any, arg2: any, arg3: any) => void;
    onClick?: RadioOptionChangeFnType | null;
    onChange?: RadioOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onCallbackListItem?: (params: any) => void;
};
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<unknown>>;
export default Radio;
