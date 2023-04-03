import React from 'react';
declare module 'react' {
    interface HTMLAttributes<T> {
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
    maxLength?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
};
export default function Input(props: InputProps): JSX.Element;
export {};
