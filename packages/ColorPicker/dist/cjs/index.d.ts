import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
interface ColorPickerProps extends React.ComponentPropsWithoutRef<"input"> {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    clearBtnClassName?: string;
    clearBtnLabel?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    shape?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
}
declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<unknown>>;
export default ColorPicker;
