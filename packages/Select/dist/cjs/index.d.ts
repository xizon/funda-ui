import React from 'react';
export interface MultiSelectValue {
    items: {
        label: string;
        value: string;
    }[];
    labels: string[];
    values: string[];
    labelsOfString: string;
    valuesOfString: string;
}
export declare type SelectOptionChangeFnType = (element: HTMLElement, valueElement: HTMLElement, value: OptionConfig | MultiSelectValue) => void | Promise<void>;
export interface MultiSelectControlValConfig {
    values: string[];
    labels: string[];
}
export interface OptionConfig {
    disabled?: boolean;
    optgroup?: any[];
    group?: boolean;
    label: string;
    listItemLabel?: string;
    value: string | number | boolean;
    queryString: string | number;
    callback?: () => void | Promise<void>;
    [key: string]: string | number | boolean | any[] | (() => void | Promise<void>) | undefined;
}
export interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    deselectAllLabel?: string;
}
export interface multiSelectSelectedItemOnlyStatusConfig {
    itemsLabel?: string;
    allItemsLabel?: string;
    noneLabel?: string;
}
export interface ClearTriggerConfig {
    valid: boolean;
    clearValueLabel?: string;
}
export declare type SelectProps = {
    contentRef?: React.ForwardedRef<any>;
    popupRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    optionsExClassName?: string;
    customScrollContainer?: string | HTMLElement | React.RefObject<HTMLElement>;
    exceededSidePosOffset?: number;
    clearIcon?: boolean;
    renderOption?: (optionData: OptionConfig, index: number) => React.ReactNode;
    multiSelect?: MultiSelectConfig;
    multiSelectEntireAreaTrigger?: boolean;
    multiSelectSelectedItemOnlyStatus?: multiSelectSelectedItemOnlyStatusConfig;
    renderSelectedValue?: (selectedData: MultiSelectControlValConfig, removeFunc: (e: React.MouseEvent) => void) => React.ReactNode;
    clearTrigger?: ClearTriggerConfig;
    defaultValue?: string | OptionConfig | OptionConfig[];
    value?: string | OptionConfig | OptionConfig[];
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: OptionConfig[] | string;
    lockBodyScroll?: boolean;
    loader?: React.ReactNode;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    winWidth?: string | Function;
    controlArrow?: React.ReactNode;
    firstRequestAutoExec?: boolean;
    fetchTrigger?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: OptionConfig[]) => OptionConfig[];
    onFetch?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, element: HTMLElement, value: string, data: OptionConfig[], incomingData: string | null | undefined) => void;
    onLoad?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, element: HTMLElement, value: string | null | undefined) => void;
    onSelect?: (data: OptionConfig) => void | Promise<void>;
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    onKeyPressed?: (event: React.KeyboardEvent<HTMLElement>, element: HTMLElement, value: string) => void;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<unknown>>;
export default Select;
