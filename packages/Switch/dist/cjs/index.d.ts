import React from 'react';
declare type SwitchOptionChangeFnType = (arg1: any, arg2: any) => void;
declare type SwitchProps = {
    wrapperClassName?: string;
    value: string | boolean;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    checked?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: SwitchOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<unknown>>;
export default Switch;
