import React, { useState, useEffect, useMemo, useImperativeHandle } from 'react';

import { getTodayDate, getCalendarDate, isValidDate, padZero  } from 'funda-utils/dist/cjs/date';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import ModalDialog from 'funda-modaldialog';


export interface EventsValueConfig {
    id: string | number;
    date: string,
    time: string,
    data: string,
    eventStyles?: React.CSSProperties;
    callback?: () => void;
}

export interface TimelineCellListConfig {
    date: string;
    list: EventsValueConfig[];
}

export type EventCalendarProps = {
    contentRef?: React.ForwardedRef<any>;
    calendarWrapperClassName?: string;
    customTodayDate?: string;
    eventsValue?: any[];
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
    iconRemove?: React.ReactNode | string;
    iconAdd?: React.ReactNode | string;
    cellCloseBtnClassName?: string;
    cellCloseBtnLabel?: string | React.ReactNode;
    cellAddBtnClassName?: string;
    cellAddBtnLabel?: string | React.ReactNode;
    onChangeDate?: (e: any, currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
    onListRenderComplete?: () => void;

    // modal dialog
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
    onModalEditEvent?: (currentData: any, closewin: any) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any) => void;
    //
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellClick?: (el: any) => void;
    onCellMouseUp?: (el: any) => void;
    onKeyPressed?: (el: any) => void;

}


const EventCalendar = (props: EventCalendarProps) => {
    const {
        contentRef,
        calendarWrapperClassName,
        customTodayDate,
        eventsValue,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,
        onChangeDate,
        onChangeMonth,
        onChangeYear,
        onChangeToday,
        onListRenderComplete,

        //
        iconRemove,
        iconAdd,
        cellCloseBtnClassName,
        cellCloseBtnLabel,
        cellAddBtnClassName,
        cellAddBtnLabel,

        //
        modalMaskOpacity,
        modalMaxWidth,
        modalMinHeight,
        modalHeading,
        modalContent,
        modalDeleteContent,
        modalCloseBtnClassName,
        modalCloseBtnLabel,
        modalSubmitBtnClassName,
        modalSubmitBtnLabel,
        modalSubmitDeleteBtnClassName,
        modalSubmitDeleteBtnLabel,
        onModalEditOpen,
        onModalEditClose,
        onModalDeleteOpen,
        onModalDeleteClose,
        onModalEditEvent,
        onModalDeleteEvent,

        //
        onCellMouseEnter,
        onCellMouseLeave,
        onCellClick,
        onCellMouseUp,
        onKeyPressed
    } = props;

    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [val, setVal] = useState<TimelineCellListConfig[]>([]);

    const now = useMemo(() => new Date(), []);
    const [date, setDate] = useState<Date>(now);
    const [day, setDay] = useState<number>(date.getDate());
    const [month, setMonth] = useState<number>(date.getMonth());
    const [year, setYear] = useState<number>(date.getFullYear());
    const [startDay, setStartDay] = useState<number>(getStartDayOfMonth(date));


    // selection tab
    // gets the today date time object
    const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth());
    const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());
    const [yearsArray, setYearsCollection] = useState<number[]>([]);

    //
    const [winYear, setWinYear] = useState<boolean>(false);
    const [winMonth, setWinMonth] = useState<boolean>(false);

    // modal dialog
    const EVENTS_ENABLED = typeof modalContent !== 'undefined';
    const EVENTS_DELETE_ENABLED = typeof modalDeleteContent !== 'undefined';
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);

    // Open temporary storage for pop-ups
    const [tableCellId, setTableCellId] = useState<number>(-1);

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            gridInit: () => {

            },
            gridReset: (cb?: any) => {

            }
        }),
        [contentRef],
    );


    // helper buttons
    const _delBtn = () => <>
        {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
        {cellCloseBtnLabel || ''}
    </>;

    const _addBtn = () => <>
        {iconAdd ? <>{iconAdd}</> : <><svg width="20px" height="20px" viewBox="0 0 32 32"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-102.000000, -1037.000000)" fill="#000000"><path d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z"></path></g></g></svg></>}
        {cellAddBtnLabel || ''}
    </>;



    const queryItemObj = () => {
        const _perData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));

        let _currentData: any = undefined;
        if (_perData[0]) {
            const _items = _perData[0].list;


            if (tableCellId === -1) {
                // add new
                _currentData = {
                    id: 0,
                    date: getCalendarDate(`${year}-${month + 1}-${day}`)
                };
            } else {
                // edit or delete
                _currentData = _items.filter((item: any) => item.id == tableCellId)[0];
            }

        }

        return _perData[0] ? _currentData : {
            id: 0,
            date: getCalendarDate(`${year}-${month + 1}-${day}`)
        };
    };




    // cell
    const getCells = (type: 'none' | 'forward' | 'back' = 'none') => {

        let currentMonth: any = month;
        let currentStartDay: any = startDay;

        // previous month
        if (type === 'forward') {
            const _date = new Date(year, currentMonth - 1, day);
            currentMonth = _date.getMonth();
            currentStartDay = getStartDayOfMonth(_date);
        }

        // next month
        if (type === 'back') {
            const _date = new Date(year, currentMonth + 1, day);
            currentMonth = _date.getMonth();
            currentStartDay = getStartDayOfMonth(_date);
        }


        //
        const allDays = Array(days[currentMonth] + (currentStartDay - 1)).fill(null).map((_: any, i: number) => i); // [0,1,..,30,31]
        const rows = Math.ceil(allDays.length / 7); // 5

        //
        const _tempCells: any[] = Array.from({ length: rows }).fill(null);


        const _getForwardFill = (_year: number, _month: number) => {
            // Get the last day of the previous month
            const lastDayOfLastMonth = new Date(_year, _month - 1, 0);
            const last7Days: Date[] = [];

            // Rewind 7 days forward from the last day
            for (let i = 0; i < 7; i++) {
                last7Days.unshift(new Date(lastDayOfLastMonth));
                lastDayOfLastMonth.setDate(lastDayOfLastMonth.getDate() - 1);
            }
            return last7Days.map((v: Date) => getCalendarDate(v));
        };

        const _getBackFill = (_year: number, _month: number) => {
            // Get the first day of the next month
            const firstDayOfNextMonth = new Date(_year, _month, 1);
            const first7Days: Date[] = [];

            // Rewind 7 days forward from the first day of the next month
            for (let i = 0; i < 7; i++) {
                first7Days.push(new Date(firstDayOfNextMonth));
                firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() + 1);
            }

            return first7Days.map((v: Date) => getCalendarDate(v));
        };


        return _tempCells.map((_: any, j: number) => {
            const _col = allDays.slice(j * 7, (j + 1) * 7);


            // back fill
            const backFillArr: null[] = [];
            for (let k = 0; k < 7 - _col.length; k++) {
                backFillArr.push(null);
            }
            _col.splice(_col.length, 0, ...backFillArr as any);


            //
            const isFirstGroup = j === 0;
            const isLastGroup = j === _tempCells.length - 1;


            // forward fill
            const __forwardFillDate: string[] = _getForwardFill(year, month + 1);

            // back fill
            const __backFillDate: string[] = _getBackFill(year, month + 1);


            const _getDateShow = (_dayIndex: number, _m: number, _startDay: number, _month: number) => {
                const currentDay = typeof _dayIndex === 'number' ? _dayIndex - (_startDay - 2) : 0; // ..., -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, ...

                // date
                let _dateShow: any = currentDay > 0 ? `${year}-${_month + 1}-${currentDay}` : '';

                // forward & back
                if (isFirstGroup && _dateShow === '') {
                    _dateShow = __forwardFillDate.at(currentDay - 1);
                }

                if (isLastGroup && _dateShow === '') {
                    _dateShow = __backFillDate.at(_m);
                }


                return {
                    date: getCalendarDate(_dateShow),
                    firstGroup: isFirstGroup,
                    lastGroup: isLastGroup,
                    validDisplayDate: currentDay > 0 && currentDay <= days[month]
                };

            }

            //
            return {
                month: currentMonth,
                startDay: currentStartDay,
                row: j,
                col: _col,
                dateInfo: _col.map((k: number, m: number) => {
                    const _lastWeekDays: number = _col.filter(Boolean).length;
                    return _getDateShow(k, m - _lastWeekDays, currentStartDay, currentMonth);
                }),
                weekDisplay: _col.map((k: number, m: number) => {
                    return WEEK[m]
                }),
                week: _col.map((k: number, m: number) => {
                    return m
                }),

            }
        });

    };


    function setTodayDate(inputDate: Date) {
        setDay(inputDate.getDate());
        setMonth(inputDate.getMonth());
        setYear(inputDate.getFullYear());
        setStartDay(getStartDayOfMonth(inputDate));

        // update selector
        setSelectedMonth(inputDate.getMonth());
        setSelectedYear(inputDate.getFullYear());

    }


    function getStartDayOfMonth(date: Date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function isLeapYear(year: number) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const days = isLeapYear(year) ? DAYS_LEAP : DAYS;



    function handlePrevChange() {
        setDate((prevState) => {
            const _date = new Date(year, month - 1, day);

            // update
            setSelectedMonth(_date.getMonth());
            setSelectedYear(_date.getFullYear());

            //
            onChangeMonth?.({
                day: padZero(day),
                month: padZero(_date.getMonth() + 1),
                year: _date.getFullYear().toString()
            });


            return _date;
        });


    }

    function handleNextChange() {
        setDate((prevState) => {
            const _date = new Date(year, month + 1, day);

            // update
            setSelectedMonth(_date.getMonth());
            setSelectedYear(_date.getFullYear());

            //
            onChangeMonth?.({
                day: padZero(day),
                month: padZero(_date.getMonth() + 1),
                year: _date.getFullYear().toString()
            });

            return _date;
        });
    }
    function handleDayChange(e: React.MouseEvent, currentDay: number) {
        setDate(new Date(year, month, currentDay));
    }


    function handleYearChange(currentValue: number) {
        setSelectedYear(currentValue);
        setYear(currentValue);
        setDate(new Date(currentValue, month, day));

        // close win
        setWinYear(false);

    }


    function handleMonthChange(currentIndex: number) {
        setSelectedMonth(currentIndex);
        setMonth(currentIndex);
        setDate(new Date(year, currentIndex, day));

        // close win
        setWinMonth(false);


        //
        onChangeMonth?.({
            day: padZero(day),
            month: padZero(currentIndex + 1),
            year: year.toString()
        });

    }


    function handleTodayChange() {
        setSelectedMonth(now.getMonth());
        setSelectedYear(now.getFullYear());
        setTodayDate(now);

        //
        const _now = getTodayDate().split('-');
        onChangeToday?.({
            day: _now[2],
            month: _now[1],
            year: _now[0]
        });

    }


    function handleShowWinYear() {
        setWinYear((prevState: boolean) => !prevState);
    }

    function handleShowWinMonth() {
        setWinMonth((prevState: boolean) => !prevState);
    }



    //if user change the selectedYear, then udate the years array that is displayed on year tab view
    useEffect(() => {
        const years: number[] = [];
        for (let y = selectedYear - 10; y < selectedYear + 10; y++) {
            years.push(y as never)
        }
        setYearsCollection(years);
    }, [selectedYear]);


    useEffect(() => {
        // Guaranteed year change triggered by the front and rear buttons
        onChangeYear?.({
            day: padZero(day),
            month: padZero(month + 1),
            year: year.toString()
        });
    }, [year]);



    useEffect(() => {
        setTodayDate(date);
    }, [date]);


    useEffect(() => {

        // update events value
        if (Array.isArray(eventsValue)) setVal(eventsValue);

        // update current today
        if (typeof customTodayDate === 'string' && customTodayDate !== '' && isValidDate(customTodayDate)) {
            const _customNow = new Date(customTodayDate);
            setTodayDate(_customNow);
        }

        // Call a function when the list has been rendered completely
        onListRenderComplete?.();

    }, [eventsValue, customTodayDate]);


    return (
        <>

            <div 
                className={combinedCls(
                    "e-cal-normal__wrapper",
                    calendarWrapperClassName
                )}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    onKeyPressed?.(e);
                }}
                tabIndex={-1}
            >


                {/*++++++++++++++++ MAIN ++++++++++++++++*/}
                <div className="e-cal-normal__header bg-body-tertiary">
                    <button tabIndex={-1} type="button" className="e-cal-normal__btn e-cal-normal__btn--prev" onClick={handlePrevChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#000" />
                        </svg>
                    </button>
                    <div className="e-cal-normal__header__btns">
                        <button tabIndex={-1} type="button" className={`e-cal-normal__btn ${winMonth ? 'active' : ''}`} onClick={handleShowWinMonth}>
                            {MONTHS[month]}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                        <button tabIndex={-1} type="button" className={`e-cal-normal__btn ${winYear ? 'active' : ''}`} onClick={handleShowWinYear}>
                            {year}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                    </div>
                    <button tabIndex={-1} type="button" className="e-cal-normal__btn e-cal-normal__btn--next" onClick={handleNextChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#000" />
                        </svg>
                    </button>
                </div>
                <div className="e-cal-normal__body">

                    {/* week */}
                    <div className="e-cal-normal__row">
                        {WEEK.map((s: string, i: number) => (
                            <div
                                className={combinedCls(
                                    'e-cal-normal__cell e-cal-normal__day e-cal-normal__day--week e-cal-normal__day--disabled bg-secondary-subtle empty',
                                    {
                                        'last-cell': i === WEEK.length - 1
                                    }
                                )}
                                key={i}
                                data-week={i}
                                dangerouslySetInnerHTML={{
                                    __html: s
                                }}
                            />
                        ))}
                    </div>
                    {/* /week */}

                    {/* day */}
                    {getCells().map((item: any, j: number) => {

                        const isLastRow = j === getCells().length - 1;

                        return <div key={'row' + item.row} className="e-cal-normal__row">
                            {item.col.map((dayIndex: number | null, i: number) => {

                                const isLastCell = i === item.col.length - 1;

                                // date
                                const _dateShow = item.dateInfo[i].date;
                                const _dateDayShow = _dateShow.split('-').at(-1);

                                // week day
                                const weekDay = item.week[i];

                                // helper
                                const d = parseFloat(_dateDayShow);
                                const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === _dateShow);
                                const isInteractive = item.dateInfo[i].validDisplayDate;  // The date on which the user interaction can occur, e.g. click, modify
                                const isForward = item.dateInfo[i].firstGroup && !isInteractive;
                                const isBack = item.dateInfo[i].lastGroup && !isInteractive;


                                const _eventContent = () => {

                                    if (
                                        _currentData.length === 0 ||
                                        !Array.isArray(_currentData) ||
                                        typeof _currentData[0].list === 'undefined'
                                    ) {
                                        return null;
                                    }

                                    //
                                    const _items = _currentData[0].list;

                                    return _items.map((cellItem: any, cellItemIndex: number) => {

                                        return <div
                                            className={combinedCls(
                                                `e-cal-normal__cell-item e-cal-normal__cell-item-${cellItemIndex}`,
                                                {
                                                    'first': cellItemIndex === 0,
                                                    'last': cellItemIndex === _items.length - 1
                                                }
                                            )}
                                            key={`cell-item-${cellItemIndex}}`}
                                            data-date={_dateShow}
                                            data-day={_dateDayShow}
                                            data-week={weekDay}
                                            onClick={(e: React.MouseEvent) => {
                                                e.stopPropagation();

                                                // update cell data
                                                setTableCellId(cellItem.id);

                                                // Callback
                                                cellItem.callback?.();


                                                if (isInteractive) {
                                                    handleDayChange(e, d); // update current day

                                                    onChangeDate?.(e, cellItem);

                                                    if (EVENTS_ENABLED) {
                                                        onModalEditOpen?.(cellItem, () => setShowEdit(true), 'normal');
                                                    }
                                                }
                                            }}
                                        >

                                            {/* ITEM */}
                                            <div
                                                className="e-cal-normal__day__event"
                                                style={typeof cellItem !== 'undefined' && (cellItem as any).eventStyles !== 'undefined' ? cellItem.eventStyles : {}}
                                                dangerouslySetInnerHTML={typeof cellItem.data === 'string' ? {
                                                    __html: cellItem.data
                                                } : undefined}
                                            >
                                                {React.isValidElement(cellItem.data) ? <>{cellItem.data}</> : null}
                                            </div>
                                            {/* /ITEM */}

                                            {/* DELETE BUTTON */}
                                            <div
                                                className={`e-cal-normal__day__eventdel ${cellCloseBtnClassName || ''}`}
                                            >
                                                <a
                                                    href="#"
                                                    tabIndex={-1}
                                                    className="align-middle"
                                                    data-date={getCalendarDate(_dateShow)}
                                                    data-day={padZero(d)}
                                                    data-week={i}
                                                    onClick={(e: React.MouseEvent) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();

                                                        // update cell data
                                                        setTableCellId(cellItem.id);


                                                        const _existsContent = cellItem;

                                                        //
                                                        if (isInteractive) {
                                                            handleDayChange(e, d); // update current day

                                                            onChangeDate?.(e, {
                                                                id: 0,
                                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                                            });

                                                            if (EVENTS_DELETE_ENABLED) {
                                                                onModalDeleteOpen?.(_existsContent, () => setShowDelete(true));
                                                            }
                                                        }

                                                    }}
                                                >
                                                    {_delBtn()}
                                                </a>

                                            </div>
                                            {/* /DELETE BUTTON */}
                                        </div>
                                    });
                                };


                                return (
                                    <div
                                        className={combinedCls(
                                            'e-cal-normal__cell e-cal-normal__day',
                                            {
                                                'empty': !isInteractive,
                                                'today': d === now.getDate(),
                                                'selected': d === day,
                                                'last-cell': isLastCell,
                                                'last-row': isLastRow,
                                            }
                                        )}
                                        key={"col" + i}
                                        data-date={getCalendarDate(_dateShow)}
                                        data-day={padZero(d)}
                                        data-week={i}
                                        onMouseEnter={(e: React.MouseEvent) => {
                                            onCellMouseEnter?.(e);
                                        }}
                                        onMouseDown={(e: React.MouseEvent) => {
                                            //
                                            onCellClick?.(e);

                                            if (isInteractive) {
                                                handleDayChange(e, d); // update current day
                                                onChangeDate?.(e, null);
                                            }
                                        }}
                                        onMouseLeave={(e: React.MouseEvent) => {
                                            onCellMouseLeave?.(e);
                                        }}
                                        onMouseUp={(e: React.MouseEvent) => {
                                            onCellMouseUp?.(e);
                                        }}

                                    >

                                        {/* forward fill & day & back fill */}
                                        <span
                                            className={combinedCls(
                                                {
                                                    'disabled': !isInteractive
                                                }
                                            )}
                                        >
                                            {d}
                                        </span>

                                        {/*++++++++++++++++ EVENT ++++++++++++++++*/}
                                        {_eventContent()}
                                        {/*++++++++++++++++ /EVENT ++++++++++++++++*/}

                                        {/* ADD BUTTON */}
                                        {isForward || isBack ? null : <>
                                            <div
                                                className={`e-cal-normal__day__eventadd ${cellAddBtnClassName || ''}`}
                                            >
                                                <a
                                                    href="#"
                                                    tabIndex={-1}
                                                    className="align-middle"
                                                    data-date={getCalendarDate(_dateShow)}
                                                    data-day={padZero(d)}
                                                    data-week={i}
                                                    onClick={(e: React.MouseEvent) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();

                                                        // update cell data
                                                        setTableCellId(-1);

                                                        //
                                                        if (isInteractive) {
                                                            handleDayChange(e, d); // update current day

                                                            onChangeDate?.(e, {
                                                                id: 0,
                                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                                            });

                                                            if (EVENTS_ENABLED) {
                                                                onModalEditOpen?.({
                                                                    id: 0,
                                                                    date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                                                }, () => setShowEdit(true), 'new');
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {_addBtn()}
                                                </a>

                                            </div>
                                        </>}
                                        {/* /ADD BUTTON */}

                                    </div>
                                );
                            })}
                        </div>;

                    })}

                    {/* /day */}

                </div>
                {/*++++++++++++++++ /MAIN ++++++++++++++++*/}


                {/*++++++++++++++++ MONTH SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-normal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winMonth ? 'active' : ''}`}>
                    <div className="e-cal-normal__month-container">
                        {MONTHS_FULL.map((month, index) => {
                            return <div
                                data-month={padZero(index + 1)}
                                className={`e-cal-normal__month ${selectedMonth === index ? ' selected' : ''}`}
                                key={month + index}
                                onClick={() => { handleMonthChange(index) }}
                            >{month}</div>
                        })}
                    </div>
                </div>
                {/*++++++++++++++++ /MONTH SELECTION TAB ++++++++++++++++*/}

                {/*++++++++++++++++ YEAR SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-normal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winYear ? 'active' : ''}`}>
                    <div className="e-cal-normal__year-container bg-body-tertiary">
                        {yearsArray.map((year, index) => {
                            return <div
                                data-year={year}
                                className={`e-cal-normal__year ${selectedYear === year ? ' selected' : ''}`}
                                key={year + index}
                                onClick={() => { handleYearChange(year) }}
                            >{year}</div>
                        })}
                    </div>

                </div>
                {/*++++++++++++++++ /YEAR SELECTION TAB ++++++++++++++++*/}



                {/*++++++++++++++++ TODAY SELECTION TAB ++++++++++++++++*/}
                <div className="e-cal-normal__today-wrapper p-2 bg-body-tertiary">
                    <button tabIndex={-1} type="button" className="e-cal-normal__btn e-cal-normal__btn--today" onClick={handleTodayChange}>
                        {langToday || 'Today'}
                    </button>
                </div>
                {/*++++++++++++++++ /TODAY SELECTION TAB ++++++++++++++++*/}


            </div>


            {/*++++++++++++++++ MODAL ++++++++++++++++*/}
            {EVENTS_ENABLED ? <>

                {/*<!-- DELETE -->*/}
                <ModalDialog
                    show={showDelete}
                    maskOpacity={modalMaskOpacity}
                    triggerClassName=""
                    triggerContent=""
                    closeBtnClassName={modalCloseBtnClassName || 'btn btn-secondary'}
                    closeBtnLabel={modalCloseBtnLabel || 'Close'}
                    submitBtnClassName={modalSubmitDeleteBtnClassName || 'btn btn-danger'}
                    submitBtnLabel={modalSubmitDeleteBtnLabel || <>Delete</>}
                    onClose={(e) => {

                        setTimeout(() => {
                            setShowDelete(false);
                            onModalDeleteClose?.(queryItemObj());
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {
                        onModalDeleteEvent?.(queryItemObj(), closewin);

                    }}
                >
                    {modalDeleteContent || 'Are you sure?'}

                </ModalDialog>
                {/*<!-- /DELETE -->*/}


                {/*<!-- EDIT -->*/}
                <ModalDialog
                    show={showEdit}
                    maskOpacity={modalMaskOpacity}
                    heading={modalHeading}
                    maxWidth={modalMaxWidth}
                    minHeight={modalMinHeight}
                    triggerClassName=""
                    triggerContent=""
                    closeBtnClassName={modalCloseBtnClassName || 'btn btn-secondary'}
                    closeBtnLabel={modalCloseBtnLabel || 'Close'}
                    submitBtnClassName={modalSubmitBtnClassName || 'btn btn-primary'}
                    submitBtnLabel={modalSubmitBtnLabel || <>Save</>}
                    onClose={(e) => {
                        setTimeout(() => {
                            setShowEdit(false);
                            onModalEditClose?.(queryItemObj());
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {
                        onModalEditEvent?.(queryItemObj(), closewin);

                    }}
                >
                    {modalContent}

                </ModalDialog>
                {/*<!-- /EDIT -->*/}


            </> : null}
            {/*++++++++++++++++ /MODAL ++++++++++++++++*/}


        </>
    )
};


export default EventCalendar;