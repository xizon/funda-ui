import React from 'react';
export interface EventsValueConfig {
    id: string | number;
    date: string;
    time: string;
    data: string;
    dataTooltip?: string;
    eventStyles?: React.CSSProperties;
}
export interface TimelineRowFieldConfig {
    id: string | number;
    title: string;
}
export interface TimelineValueConfig {
    listSection: TimelineRowFieldConfig;
    eventSources: EventsValueConfig[];
}
declare type EventCalendarTimelineProps = {
    customTodayDate?: string;
    eventsValue?: TimelineValueConfig[];
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
    iconRemove?: React.ReactNode | string;
    cellCloseBtnClassName?: string;
    cellCloseBtnLabel?: string | React.ReactNode;
    forwardAndBackFillDisabled?: boolean;
    draggable?: boolean;
    showWeek?: boolean;
    autoScroll?: boolean;
    onChangeDate?: (e: any, currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
    onListRenderComplete?: () => void;
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
    onModalEditOpen?: (currentData: any, openwin: any) => void;
    onModalEditClose?: (currentData: any) => void;
    onModalDeleteOpen?: (currentData: any) => void;
    onModalDeleteClose?: (currentData: any) => void;
    onModalEditEvent?: (currentData: any, closewin: any) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any) => void;
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellClick?: (el: any) => void;
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
