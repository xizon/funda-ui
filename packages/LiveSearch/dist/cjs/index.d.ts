import React from 'react';
interface OptionConfig {
    disabled?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
}
declare type LiveSearchProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    exceededSidePosOffset?: number;
    appearance?: string;
    isSearchInput?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    readOnly?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
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
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchAutoShow?: boolean;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onChange?: (e: any, data: any, selectedData: any) => void;
    onBlur?: (e: any) => void;
};
declare const LiveSearch: (props: LiveSearchProps) => JSX.Element;
export default LiveSearch;
