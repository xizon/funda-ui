import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type InputProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    type?: string;
    value?: string;
    label?: React.ReactNode | string;
    units?: React.ReactNode | string;
    name?: string;
    step?: any;
    min?: any;
    max?: any;
    src?: any;
    size?: any;
    minLength?: any;
    maxLength?: any;
    alt?: any;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    pattern?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    appendControl?: React.ReactNode;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any) => void;
    onInputCallback?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any, param: any) => void;
    onFocus?: (e: any, param: any) => void;
};
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;
export default Input;
