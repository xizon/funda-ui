import React from 'react';
export declare type InputProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
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
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, param: any, el: any, value: string) => void;
    onBlur?: (e: any, param: any, el: any) => void;
    onFocus?: (e: any, param: any, el: any) => void;
    onPressEnter?: (e: any, el: any) => void;
    onKeyDown?: (e: any, el: any) => void;
    onKeyUp?: (e: any, el: any) => void;
};
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;
export default Input;
