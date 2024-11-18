import React from 'react';
export interface EventsValueConfig {
    id: string | number;
    date: string;
    time: string;
    data: string;
    dataTooltip?: string;
    eventStyles?: React.CSSProperties;
    callback?: () => void;
}
export interface TimelineRowSectionConfig {
    id: string | number;
    title: string;
}
export interface TimelineCellListConfig {
    date: string;
    list: EventsValueConfig[];
}
export interface TimelineRowListConfig {
    listSection: TimelineRowSectionConfig;
    eventSources: TimelineCellListConfig[];
}
export declare type EventCalendarTimelineProps = {
    contentRef?: React.ForwardedRef<any>;
    calendarWrapperClassName?: string;
    tableWrapperClassName?: string;
    tableClassName?: string;
    tableHeadClassName?: string;
    tableBodyClassName?: string;
    tableListStartClassName?: string;
    tableListEndClassName?: string;
    tableListDividerClassName?: string;
    customTodayDate?: string;
    multipleCells?: boolean;
    appearance?: 'week' | 'month';
    appearanceToggle?: boolean;
    appearanceWeekTmpl?: (startDate: string, endDate: string) => void;
    eventsValue?: TimelineRowListConfig[];
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
    langAppearanceLabelMonth?: string;
    langAppearanceLabelWeek?: string;
    iconRemove?: React.ReactNode | string;
    iconAdd?: React.ReactNode | string;
    cellCloseBtnClassName?: string;
    cellCloseBtnLabel?: string | React.ReactNode;
    cellAddBtnClassName?: string;
    cellAddBtnLabel?: string | React.ReactNode;
    forwardAndBackFillDisabled?: boolean;
    draggable?: boolean;
    showWeek?: boolean;
    autoScroll?: boolean;
    onChangeDate?: (e: any, currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
    onChangeWeek?: (startDate: string, endDate: string) => void;
    onListRenderComplete?: () => void;
    onChangeAppearanceMode?: (mode: string) => void;
    modalMaskOpacity?: string;
    modalMaxWidth?: number | string;
    modalMinHeight?: number | string;
    modalHeading?: React.ReactNode;
    modalContent?: React.ReactNode;
    modalDeleteContent?: React.ReactNode;
    modalCloseBtnClassName?: string;
    modalCloseBtnLabel?: string | React.ReactNode;
    modalSubmitBtnClassName?: string;
    modalSubmitBtnLabel?: string | React.ReactNode;
    modalSubmitDeleteBtnClassName?: string;
    modalSubmitDeleteBtnLabel?: string | React.ReactNode;
    onModalEditOpen?: (currentData: any, openwin: any, type: 'normal' | 'new') => void;
    onModalEditClose?: (currentData: any) => void;
    onModalDeleteOpen?: (currentData: any, openwin: any) => void;
    onModalDeleteClose?: (currentData: any) => void;
    onModalEditEvent?: (currentData: any, closewin: any, gridInit: Function) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any, gridInit: Function) => void;
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellMouseUp?: (el: any, selectedCellsData: any[]) => void;
    onCellClick?: (el: any, cellData: any) => void;
    onCellDoubleClick?: (el: any, cellData: any) => void;
    onKeyPressed?: (el: any, selectedCellsData: any[]) => void;
    onKeyCopy?: (el: any, selectedCellsData: any[]) => void;
    onKeyPaste?: (el: any, selectedCellsData: any[]) => void;
    tableListSectionTitle?: string | React.ReactNode;
    tableCellMinWidth?: number;
    tableTooltipDirection?: string;
    tableTooltipOffset?: number;
    tableTooltipExceededSidePosOffset?: number;
    tableTooltipSize?: string;
    tableTooltipDisabled?: boolean;
    /** -- */
    id?: string;
};
declare const EventCalendarTimeline: (props: EventCalendarTimelineProps) => JSX.Element;
export default EventCalendarTimeline;
