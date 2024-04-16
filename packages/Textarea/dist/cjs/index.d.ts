import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type TextareaProps = {
    contentRef?: React.RefObject<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    cols?: number;
    rows?: number;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    autoSize?: boolean;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, el: any) => void;
    onBlur?: (e: any, el: any) => void;
    onFocus?: (e: any, el: any) => void;
};
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<unknown>>;
export default Textarea;
