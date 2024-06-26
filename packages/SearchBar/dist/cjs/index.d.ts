import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type SearchBarProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    appearance?: string;
    isSearchInput?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    units?: React.ReactNode | string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    minLength?: any;
    maxLength?: any;
    readOnly?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    icon?: React.ReactNode | string;
    btnId?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onClick?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onSubmit?: (e: any) => void;
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any, param: any) => void;
    onFocus?: (e: any, param: any) => void;
    onPressEnter?: (e: any, param: any) => void;
};
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<unknown>>;
export default SearchBar;
