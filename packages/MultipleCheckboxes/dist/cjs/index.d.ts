import React from 'react';
interface OptionConfig {
    [propName: string]: string | number;
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
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, data: any) => void;
};
declare const MultipleCheckboxes: React.ForwardRefExoticComponent<MultipleCheckboxesProps & React.RefAttributes<unknown>>;
export default MultipleCheckboxes;
