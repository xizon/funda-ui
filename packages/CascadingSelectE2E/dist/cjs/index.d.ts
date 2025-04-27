import React from 'react';
export declare type CascadingSelectE2EOptionChangeFnType = (input: any, currentData: any, index: any, depth: any, value: any, closeFunc: any) => void;
export interface fetchArrayConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
}
export declare type CascadingSelectE2EProps = {
    popupRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    perColumnHeadersShow?: boolean;
    exceededSidePosOffset?: number;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    placeholder?: string;
    disabled?: any;
    required?: any;
    /** Whether to use curly braces to save result and initialize default value */
    extractValueByBraces?: boolean;
    /** Instead of using `parent_id` of response to match child and parent data
     * (very useful for multiple fetch requests with no directly related fields),
     * this operation will directly use the click event to modify the result. */
    destroyParentIdMatch?: boolean;
    /** Set headers for each column group */
    columnTitle?: any[];
    /** Set whether to use "label" or "value" for the value of this form
     * Optional values: `label`, `value`
     */
    valueType?: string;
    /** Whether to display the close button. */
    showCloseBtn?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Set a loader component to show while the component waits for the next load of data.
     * e.g. `<span>Loading...</span>` or any fancy loader element */
    loader?: React.ReactNode;
    /** Whether to show breadcrumb result */
    displayResult?: boolean;
    /** Set an arrow of breadcrumb result */
    displayResultArrow?: React.ReactNode;
    /** Set an arrow of control */
    controlArrow?: React.ReactNode;
    /** Specify a class for trigger. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** Specify a class for clean node button. */
    cleanNodeBtnClassName?: string;
    /** Set a piece of text or HTML code for the clean node button */
    cleanNodeBtnContent?: React.ReactNode;
    /** Configuration for multiple requests */
    fetchArray?: fetchArrayConfig[];
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onFetch?: (data: any, childrenData: any) => void;
    onChange?: CascadingSelectE2EOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};
declare const CascadingSelectE2E: (props: CascadingSelectE2EProps) => JSX.Element;
export default CascadingSelectE2E;
