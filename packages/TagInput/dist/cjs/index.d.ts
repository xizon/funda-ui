import React from 'react';
declare type TagInputProps = {
    wrapperClassName?: string;
    value?: string;
    maxTags?: number;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    autoComplete?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, data: any, dataStr: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<unknown>>;
export default TagInput;
