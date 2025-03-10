import React from 'react';
export declare type TextareaProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    value?: string;
    defaultValue?: string;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    name?: string;
    minLength?: any;
    maxLength?: any;
    cols?: number;
    rows?: number;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    autoSize?: boolean;
    autoSizeMaxHeight?: number;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    aiPredict?: boolean;
    aiPredictRemainingTextRGB?: number[];
    aiPredictConfirmKey?: Array<string[]>;
    aiPredictFetchFuncAsync?: any;
    aiPredictFetchFuncMethod?: string;
    aiPredictFetchFuncMethodParams?: any[];
    aiPredictFetchCallback?: (data: any) => void;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, el: any, value: string) => void;
    onBlur?: (e: any, el: any) => void;
    onFocus?: (e: any, el: any) => void;
    onPressEnter?: (e: any, el: any) => void;
    onKeyDown?: (e: any, el: any) => void;
    onKeyUp?: (e: any, el: any) => void;
    onResize?: (el: any, params: number[]) => void;
};
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<unknown>>;
export default Textarea;
