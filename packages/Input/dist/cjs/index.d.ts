import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type InputProps = {
    wrapperClassName?: string;
    type?: string;
    value?: string;
    label?: React.ReactNode | string;
    units?: string;
    name?: string;
    step?: number;
    maxLength?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;
export default Input;
