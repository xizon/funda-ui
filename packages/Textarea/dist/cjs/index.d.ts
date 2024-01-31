import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    initializingText?: string;
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
    onChangeCallback?: (e: any) => void;
    onInputCallback?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<unknown>>;
export default Textarea;
