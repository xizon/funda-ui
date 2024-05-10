import React from 'react';
interface OptionConfig {
    [propName: string]: string | number | boolean;
}
declare type MultipleCheckboxesProps = {
    wrapperClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    inline?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string | unknown;
    disabled?: any;
    required?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
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
    onChange?: (e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => void;
};
declare const MultipleCheckboxes: React.ForwardRefExoticComponent<MultipleCheckboxesProps & React.RefAttributes<unknown>>;
export default MultipleCheckboxes;
