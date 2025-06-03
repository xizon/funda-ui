import React from 'react';
export interface OptionConfig {
    [propName: string]: string | number | boolean;
}
export interface CustomOptionsItemsListParams {
    name?: string;
    groupLabelClassName?: string;
    groupWrapperClassName?: string;
    tableLayoutCellClassName?: string;
    tableLayout?: boolean;
    dataInit: OptionConfig[];
    required?: boolean;
    inline?: boolean;
    selectedItems: Set<any>;
    uniqueID: string;
    valueBrackets?: boolean;
    disabled?: boolean;
    labelRes: (label: any, id: any) => React.ReactNode;
    valRes: (setData: any) => any[];
    handleCheckboxChange: (itemKey: string) => Set<any>;
    convertArrToValByBrackets: (arr: string[]) => string;
    isAllSelected: boolean;
    handleSelectAll: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | null, value: string[] | null, valueStr: string, label: string[] | null, labelStr: string, currentData: OptionConfig | null, dataCollection: OptionConfig[]) => void;
    attributes: React.HTMLAttributes<HTMLInputElement>;
}
export declare type MultipleCheckboxesProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    inline?: boolean;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string | unknown;
    disabled?: any;
    required?: any;
    showSelectAll?: boolean;
    selectAllLabel?: string;
    singleSelect?: boolean;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
 *  Exposes the JSON format data about the option as an argument.
 */
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: OptionConfig[]) => OptionConfig[];
    onFetch?: (data: OptionConfig[]) => void;
    onLoad?: (latestData: OptionConfig[], defaultValue: string | string[], rootElement: HTMLDivElement | HTMLTableElement | null) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | null, value: string[] | null, valueStr: string, label: string[] | null, labelStr: string, currentData: OptionConfig | null, dataCollection: OptionConfig[]) => void;
    onCallbackListItem?: (optiondata: any) => void;
};
declare const MultipleCheckboxes: React.ForwardRefExoticComponent<MultipleCheckboxesProps & React.RefAttributes<unknown>>;
export default MultipleCheckboxes;
