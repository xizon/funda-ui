import React from 'react';
interface OptionConfig {
    [propName: string]: string | number | boolean;
}
declare type MultipleCheckboxesProps = {
    wrapperClassName?: string;
    inline?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any) => void;
};
declare const MultipleCheckboxes: React.ForwardRefExoticComponent<MultipleCheckboxesProps & React.RefAttributes<unknown>>;
export default MultipleCheckboxes;
