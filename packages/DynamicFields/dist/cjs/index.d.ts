import React from 'react';
declare type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};
declare type DynamicFieldsProps = {
    wrapperClassName?: string;
    btnAddWrapperClassName?: string;
    btnRemoveWrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    data: DynamicFieldsValueProps | null;
    maxFields?: any;
    confirmText?: string;
    doNotRemoveDom?: boolean;
    iconAddBefore?: React.ReactNode | string;
    iconAddAfter?: React.ReactNode | string;
    iconAdd?: React.ReactNode | string;
    iconAddPosition?: `start` | `end`;
    iconRemove?: React.ReactNode | string;
    innerAppendClassName?: string;
    innerAppendCellClassName?: string;
    innerAppendLastCellClassName?: string;
    innerAppendHideClassName?: string;
    innerAppendBodyClassName?: string;
    innerAppendHeadData?: React.ReactNode[] | string[];
    innerAppendHeadRowShowFirst?: boolean;
    innerAppendHeadRowClassName?: string;
    innerAppendHeadCellClassName?: string | string[];
    innerAppendHeadCellStyles?: React.CSSProperties[];
    innerAppendEmptyContent?: React.ReactNode;
    /** -- */
    id?: string;
    onAdd?: (items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => void;
    onRemove?: (items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => void;
    onLoad?: (addbtn: any, rootNode: HTMLDivElement, perRowDomClassName: string) => void;
};
declare const DynamicFields: (props: DynamicFieldsProps) => JSX.Element;
export default DynamicFields;
