import React from 'react';
declare type DateProps = {
    contentRef?: React.RefObject<any>;
    popupRef?: React.RefObject<any>;
    popupClassName?: string;
    triggerClassName?: string;
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    enableEntireAreaPopup?: boolean;
    delimiter?: string;
    hideClearButton?: boolean;
    showToolsWhenHover?: boolean;
    offset?: number;
    exceededSidePosOffset?: number;
    localization?: 'en_US' | 'zh_CN';
    type?: 'date' | 'datetime-local' | 'time';
    onlyTime?: boolean;
    truncateSeconds?: boolean;
    valueUseSlash?: boolean;
    value?: string;
    clickInitValue?: string;
    min?: string;
    max?: string;
    placeholder?: string;
    label?: React.ReactNode | string;
    units?: string;
    name?: string;
    alt?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onLoad?: (e: any, data: any, allSplittingInputs: any[]) => void;
    onChange?: (e: any, data: any, isValidDate: boolean, allSplittingInputs: any[]) => void;
    onBlur?: (e: any, allSplittingInputs: any[]) => void;
    onFocus?: (e: any, allSplittingInputs: any[]) => void;
    onPressEnter?: (e: any, allSplittingInputs: any[]) => void;
    onOpenPopup?: (allSplittingInputs: any[]) => void;
    onClosePopup?: (allSplittingInputs: any[]) => void;
    onChangeDate?: (currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
    onChangeHours?: (currentData: any) => void;
    onChangeMinutes?: (currentData: any) => void;
    onChangeSeconds?: (currentData: any) => void;
    langHoursTitle?: string;
    langMinutesTitle?: string;
    langSecondsTitle?: string;
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
};
declare const Date: React.ForwardRefExoticComponent<DateProps & React.RefAttributes<unknown>>;
export default Date;
