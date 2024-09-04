import React from 'react';
export interface OptionConfig {
    disabled?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
}
export declare type LiveSearchProps = {
    contentRef?: React.ForwardedRef<any>;
    popupRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    exceededSidePosOffset?: number;
    appearance?: string;
    isSearchInput?: boolean;
    allowSpacingRetrive?: boolean;
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
    noMatchPopup?: boolean;
    options?: OptionConfig[] | string;
    winWidth?: string | Function;
    icon?: React.ReactNode | string;
    btnId?: string;
    fetchTrigger?: boolean;
    hideIcon?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    autoShowOptions?: boolean;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onClick?: (inputEl: any, popupEl: any) => void;
    onChange?: (inputEl: any, data: any, selectedData: any, popupEl: any) => void;
    onKeyboardInput?: (e: any, inputEl: any, popupEl: any) => void;
    onBlur?: (inputEl: any, popupEl: any) => void;
    onPressEnter?: (inputEl: any, popupEl: any) => void;
};
declare const LiveSearch: React.ForwardRefExoticComponent<LiveSearchProps & React.RefAttributes<unknown>>;
export default LiveSearch;
