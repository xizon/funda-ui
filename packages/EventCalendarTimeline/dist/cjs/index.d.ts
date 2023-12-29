import React from 'react';
interface EventsValueConfig {
    id: string | number;
    date: string;
    time: string;
    data: string;
    dataTooltip?: string;
    eventStyles?: React.CSSProperties;
}
interface TimelineValueConfig {
    listSection: string;
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
    onModalEditOpen?: (currentData: any) => void;
    onModalEditClose?: (currentData: any) => void;
    onModalDeleteOpen?: (currentData: any) => void;
    onModalDeleteClose?: (currentData: any) => void;
    onModalEditEvent?: (currentData: any, closewin: any) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any) => void;
    tableListSectionTitle?: string | React.ReactNode;
    tableCellMinWidth?: number;
    tableTooltipDirection?: string;
    tableTooltipOffset?: number;
    tableTooltipSize?: string;
    tableTooltipDisabled?: boolean;
    /** -- */
    id?: string;
};
declare const EventCalendarTimeline: (props: EventCalendarTimelineProps) => JSX.Element;
export default EventCalendarTimeline;
