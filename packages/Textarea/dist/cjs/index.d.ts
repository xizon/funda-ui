import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type TextareaProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    cols?: number;
    rows?: number;
    disabled?: any;
    required?: any;
    placeholder?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<unknown>>;
export default Textarea;
