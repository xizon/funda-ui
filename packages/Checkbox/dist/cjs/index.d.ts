import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type OptionChangeFnType = (arg1: any, arg2: any) => void;
declare type CheckboxProps = {
    wrapperClassName?: string;
    value?: string | boolean;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    checked?: boolean;
    /** -- */
    id?: string;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: OptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export default Checkbox;
