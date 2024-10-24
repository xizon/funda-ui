import React, { useState, useEffect, useMemo, useRef, useCallback, useImperativeHandle } from 'react';


import RootPortal from 'funda-root-portal';
import ModalDialog from 'funda-modaldialog';

import useComId from 'funda-utils/dist/cjs/useComId';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { getTodayDate, getCalendarDate, isValidDate, padZero  } from 'funda-utils/dist/cjs/date';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export interface EventsValueConfig {
    id: string | number;
    date: string,
    time: string,
    data: string,
    dataTooltip?: string,
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

export type EventCalendarTimelineProps = {
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
    eventsValue?: TimelineRowListConfig[];
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
    forwardAndBackFillDisabled?: boolean;
    draggable?: boolean;
    showWeek?: boolean;
    autoScroll?: boolean;
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
    onModalEditEvent?: (currentData: any, closewin: any, gridInit: Function) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any, gridInit: Function) => void;

    //
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellClick?: (el: any) => void;


    // table
    tableListSectionTitle?: string | React.ReactNode;
    tableCellMinWidth?: number;

    // tooltip
    tableTooltipDirection?: string;
    tableTooltipOffset?: number;
    tableTooltipExceededSidePosOffset?: number;
    tableTooltipSize?: string;
    tableTooltipDisabled?: boolean;

    /** -- */
    id?: string;
}


const EventCalendarTimeline = (props: EventCalendarTimelineProps) => {
    const {
        contentRef,
        calendarWrapperClassName,
        tableWrapperClassName,
        tableClassName,
        tableHeadClassName,
        tableBodyClassName,
        tableListStartClassName,
        tableListEndClassName,
        tableListDividerClassName,
        customTodayDate,
        eventsValue,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,
        iconRemove,
        iconAdd,
        cellCloseBtnClassName,
        cellCloseBtnLabel,
        cellAddBtnClassName,
        cellAddBtnLabel,
        forwardAndBackFillDisabled,
        draggable,
        showWeek,
        autoScroll,
        onChangeDate,
        onChangeMonth,
        onChangeYear,
        onChangeToday,
        onListRenderComplete,

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

        //
        tableListSectionTitle,
        tableCellMinWidth,

        //
        tableTooltipDirection,
        tableTooltipOffset,
        tableTooltipExceededSidePosOffset,
        tableTooltipSize,
        tableTooltipDisabled,

        //
        id
    } = props;

    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // orginal data
    const [val, setVal] = useState<TimelineRowListConfig[]>([]);

    //
    const FILL_BLANK_DATE_DISABLD = typeof forwardAndBackFillDisabled === 'undefined' ? true : forwardAndBackFillDisabled;

    //
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

    // table grid
    const AUTO_SCROLL = autoScroll || false;
    const SHOW_WEEK = showWeek || false;
    const BODY_DRAG = draggable || false;
    const CELL_MIN_W = typeof tableCellMinWidth === 'undefined' ? (SHOW_WEEK ? 100 : 50) : tableCellMinWidth;
    const tableGridRef = useRef<any>(null);
    const tableGridHeaderRef = useRef<any>(null);
    const scrollHeaderRef = useRef(null);
    const scrollBodyRef = useRef(null);
    const scrollListRef = useRef(null);

    // Open temporary storage for pop-ups
    const [tableRowNum, setTableRowNum] = useState<number>(-1);
    const [tableCellId, setTableCellId] = useState<number>(-1);

    // table grid tooltip
    const CELL_TOOLTIP_EXCEEDED_SIDE_POS_OFFSET = Number(tableTooltipExceededSidePosOffset) || 15;
    const CELL_TOOLTIP_POS_OFFSET = typeof tableTooltipOffset === 'undefined' ? 10 : tableTooltipOffset;
    const tableTooltipModalRef = useRef<any>(null);
    const [isShowTableTooltip, setIsShowTableTooltip] = useState<boolean>(false);
    const [tableTooltipContent, setTableTooltipContent] = useState<any>(null);


    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            gridInit: () => {
                tableGridInit();
            },
            gridReset: (cb?: any) => {
                tableGridReset();
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




    // click outside
    useClickOutside({
        enabled: isShowTableTooltip && tableGridRef.current,
        isOutside: (event: any) => {
            // close dropdown when other dropdown is opened
            return (
                (tableGridRef.current !== event.target && !tableGridRef.current.contains(event.target as HTMLElement))
            )
        },
        handle: (event: any) => {
            hideTableTooltip();
        }
    }, [isShowTableTooltip, tableGridRef]);




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

        return Array.from({ length: rows }).fill(null).map((_: any, i: number) => {
            const _col = allDays.slice(i * 7, (i + 1) * 7);

            // back fill
            const backFillArr: null[] = [];
            for (let k = 0; k < 7 - _col.length; k++) {
                backFillArr.push(null);
            }
            _col.splice(_col.length, 0, ...backFillArr as any);

            return {
                month: currentMonth,
                startDay: currentStartDay,
                row: i,
                col: _col
            }
        });
    };

    const getForwardFill = () => {
        const prevMonthStartDay = getCells('forward').at(-1)?.startDay;
        const prevMonthLastRowNums: any = getCells('forward').at(-1)?.col.filter(Boolean);

        if (prevMonthLastRowNums) {
            if (prevMonthLastRowNums.length === 7) return [];  // no remaining

            return prevMonthLastRowNums.map((dayIndex: number) => {
                const d = typeof dayIndex === 'number' ? dayIndex - (prevMonthStartDay - 2) : 0;
                return d;
            });
        } else {
            return [];
        }
    };

    const getBackFill = () => {
        const prevMonthStartDay = getCells('back').at(0)?.startDay;
        const prevMonthLastRowNums: any = getCells('back').at(0)?.col.filter(Boolean);

        if (prevMonthLastRowNums) {
            if (prevMonthLastRowNums.length === 7) return [];  // no remaining

            return prevMonthLastRowNums.map((dayIndex: number) => {
                const d = typeof dayIndex === 'number' ? dayIndex - (prevMonthStartDay - 2) : 0;
                return d;
            }).filter((n: number) => n > 0);
        } else {
            return [];
        }
    };


    const queryItemObj = () => {
        const curRowData: any = val[tableRowNum];

   
        if (curRowData) {
            const eventSourcesData = curRowData.eventSources;

            const _rowData = eventSourcesData.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));

            let _currentData: any = undefined;
            if (_rowData[0]) {
                const _items = _rowData[0].list;

                
                if (tableCellId === -1) {
                    // add new
                    _currentData = {
                        rowData: curRowData.listSection,
                        id: 0,
                        date: getCalendarDate(`${year}-${month + 1}-${day}`)
                    };
                } else {
                    // edit or delete
                    _currentData = _items.filter((item: any) => item.id == tableCellId)[0];
                }

            }

            return _rowData[0] ? _currentData: {
                rowData: curRowData.listSection,
                id: 0,
                date: getCalendarDate(`${year}-${month + 1}-${day}`)
            };
        }
    };


    // ================================================================
    // Table Grid drag & drop
    // ================================================================
    let draggedObj: any = null;
    let mouseDown: boolean = false;
    let startX: any = 0;
    let scrollLeft: any = 0;

    const handleTableDragStart = useCallback((e: any) => {
        draggedObj = e.currentTarget;

        mouseDown = true;
        draggedObj.classList.add('dragging');

        //
        startX = e.pageX - draggedObj.offsetLeft;
        scrollLeft = draggedObj.scrollLeft;


    }, []);

    const handleTableDragEnd = useCallback((e: any) => {
        if (draggedObj === null) return;

        mouseDown = false;
        draggedObj.classList.remove('dragging');
    }, []);

    const handleTableMove = useCallback((e: any) => {
        e.preventDefault();
        if (!mouseDown) { return; }
        const x = e.pageX - draggedObj.offsetLeft;
        const scroll = x - startX;
        draggedObj.scrollLeft = scrollLeft - scroll;
    }, []);




    // ================================================================
    // Table Grid Tooltip
    // ================================================================

    function handleTableTooltipMouseEnter(e: any, content: any) {
        setIsShowTableTooltip(true);

        // update tooltip content
        setTableTooltipContent(content);


        // update modal positiona
        const _tableTooltipModalRef: any = tableTooltipModalRef.current;
        const _triggerRef: any = e.currentTarget;

        if (_tableTooltipModalRef !== null && _triggerRef !== null) {

            const { x, y, width, height } = getAbsolutePositionOfStage(_triggerRef);

            let pos = _tableTooltipModalRef.dataset.microtipPosition;
            if (typeof pos === 'undefined') pos = 'top';

            // TOP
            //
            if (pos.indexOf('top') >= 0) {
                _tableTooltipModalRef.style.left = x + (width / 2) + 'px';
                _tableTooltipModalRef.style.top = y - height - CELL_TOOLTIP_POS_OFFSET + 'px';
            }


            // BOTTOM
            //
            if (pos.indexOf('bottom') >= 0) {
                _tableTooltipModalRef.style.left = x + (width / 2) + 'px';
                _tableTooltipModalRef.style.top = y + height + CELL_TOOLTIP_POS_OFFSET + 'px';
            }



            // Determine whether it exceeds the far right or left side of the screen
            const _modalContent = _tableTooltipModalRef.querySelector('.e-cal-timeline-table__cell-tooltipcontent');
            const _modalBox = _modalContent.getBoundingClientRect();
            if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {

                // 10 pixels is used to account for some bias in mobile devices
                if ((_modalBox.right + 10) > window.innerWidth) {
                    const _modalOffsetPosition = _modalBox.right - window.innerWidth + CELL_TOOLTIP_EXCEEDED_SIDE_POS_OFFSET;
                    _modalContent.dataset.offset = _modalOffsetPosition;
                    _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                    // console.log('_modalPosition: ', _modalOffsetPosition)
                }


                if ((_modalBox.left - 10) < 0) {
                    const _modalOffsetPosition = Math.abs(_modalBox.left) + CELL_TOOLTIP_EXCEEDED_SIDE_POS_OFFSET;
                    _modalContent.dataset.offset = _modalOffsetPosition;
                    _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                    // console.log('_modalPosition: ', _modalOffsetPosition)
                }


            }




        }



    }

    function handleTableTooltipMouseLeave() {
        hideTableTooltip();
    }


    function hideTableTooltip() {
        setIsShowTableTooltip(false);
    }



    // ================================================================
    // Calendar
    // ================================================================
    function setTodayDate(inputDate: Date) {
        setDay(inputDate.getDate());
        setMonth(inputDate.getMonth());
        setYear(inputDate.getFullYear());
        setStartDay(getStartDayOfMonth(inputDate));

        // update selector
        setSelectedMonth(inputDate.getMonth());
        setSelectedYear(inputDate.getFullYear());

        // initialize table grid
        setTimeout(() => {
            tableGridInit();
        }, 500);


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

            // restore table grid init status
            restoreTableGridInitStatus();



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


            // restore table grid init status
            restoreTableGridInitStatus();


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

        // restore table grid init status
        restoreTableGridInitStatus();

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

        // restore table grid init status
        restoreTableGridInitStatus();

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

        // restore table grid init status
        restoreTableGridInitStatus();

    }


    function handleShowWinYear() {
        setWinYear((prevState: boolean) => !prevState);
    }

    function handleShowWinMonth() {
        setWinMonth((prevState: boolean) => !prevState);
    }


    // ================================================================
    // Table Grid
    // ================================================================

    function generateListSectionUi() {
        return val.map((item: any, i: number) => {

            return (
                <tr key={i} role="row" data-index={i}>
                    <td role="gridcell" data-resource-index={i} className="e-cal-timeline-table__datagrid-cell">
                        <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-title" dangerouslySetInnerHTML={{
                            __html: item.listSection.title
                        }} />
                    </td>
                </tr>
            )

        });
    }


    function generateDaysUi(eventSourcesData: any[] = [], listSectionData: any = '', rowIndex: number = 0, showEvents: boolean = false) {

        // colIndex
        let colIndex = 0;

        return getCells().map((item: any, j: number) => {


            const isFirstRow = j === 0;
            const isLastRow = j === getCells().length - 1;

            // forward fill
            const __forwardFillNum: number[] = getForwardFill();

            // back fill
            const __backFillNum: number[] = getBackFill();



            return item.col.map((dayIndex: number | null, i: number) => {

                colIndex++;

                const d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
                const _currentData = eventSourcesData.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${d}`));
                const isLastCol = colIndex === 7 * getCells().length;


                // date
                let _dateShow = d > 0 ? `${year}-${month + 1}-${d}` : '';


                // forward & back
                if (isFirstRow && __forwardFillNum && _dateShow === '') {
                    if (month + 1 === 1) {
                        _dateShow = `${year - 1}-12-${__forwardFillNum[i]}`;
                    } else {
                        _dateShow = `${year}-${month}-${__forwardFillNum[i]}`;
                    }
                }

                if (isLastRow && __backFillNum && _dateShow === '') {
                    if (month + 1 === 12) {
                        _dateShow = `${year + 1}-1-${__backFillNum[i - item.col.filter(Boolean).length]}`;
                    } else {
                        _dateShow = `${year}-${month + 2}-${__backFillNum[i - item.col.filter(Boolean).length]}`;
                    }
                }



                // days
                //------
                if (!showEvents) {

                    const _thContent = () => {

                        const isForward = isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined';
                        const isBack = isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined';


                        return <th
                            className={combinedCls(
                                'e-cal-timeline-table__cell-cushion-headercontent__container',
                                {
                                    'empty': d <= 0,
                                    'today': d === now.getDate(),
                                    'selected': d === day,
                                    'last-cell': isLastCol
                                }
                            )}
                            key={"col" + i}
                            data-index={colIndex - 1}
                            data-datagrid-col={colIndex - 1}
                            colSpan={1}
                            data-date={getCalendarDate(_dateShow)}
                            data-day={padZero(d)}
                            data-week={i}
                            style={{ minWidth: CELL_MIN_W + 'px' }}
                            onClick={(e: React.MouseEvent) => {

                                // update row data
                                setTableRowNum(-1);

                                // update cell data
                                setTableCellId(-1);

                                if (_currentData.length > 0) {
                                    _currentData[0].rowData = listSectionData;
                                }


                                //
                                if (d > 0) {
                                    handleDayChange(e, d); // update current day

                                    onChangeDate?.(e, _currentData.length === 0 ? {
                                        rowData: listSectionData,
                                        id: 0,
                                        date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                    } : _currentData[0]);

                                    if (EVENTS_ENABLED) {
                                        onModalEditOpen?.(_currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                        } : _currentData[0], () => setShowEdit(true), 'normal');
                                    }
                                }
                            }}
                        >


                            {/* forward fill */}
                            {!FILL_BLANK_DATE_DISABLD && isForward ? <>
                                <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-headercontent disabled" style={{ width: (CELL_MIN_W - 1) + 'px' }}>
                                    {__forwardFillNum[i]}
                                </div>
                            </> : null}



                            {/* day */}
                            {d > 0 ? <>
                                {FILL_BLANK_DATE_DISABLD ? <>
                                    <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-headercontent" style={{ width: (CELL_MIN_W - 1) + 'px' }}>
                                        {d}
                                        {SHOW_WEEK ? <span dangerouslySetInnerHTML={{
                                            __html: WEEK[i]
                                        }} /> : null}
                                    </div>
                                </> : <>
                                    <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-headercontent" style={{ width: (CELL_MIN_W - 1) + 'px' }}>
                                        {d}
                                    </div>
                                </>}
                            </> : null}

                            {/* back fill */}
                            {!FILL_BLANK_DATE_DISABLD && isBack ? <>
                                <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-headercontent disabled" style={{ width: (CELL_MIN_W - 1) + 'px' }}>
                                    {__backFillNum[i - item.col.filter(Boolean).length]}
                                </div>
                            </> : null}



                        </th>;
                    };

                    if (!FILL_BLANK_DATE_DISABLD) {
                        return <>{_thContent()}</>;
                    } else {
                        return d > 0 && d <= days[month] ? (
                            <>{_thContent()}</>
                        ) : null;
                    }
                }


                // events
                //------
                if (showEvents) {


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

                            const _eventContentTooltip = typeof cellItem.dataTooltip === 'undefined' ? '' : <>
                                <div
                                    className="e-cal-timeline__day__event-tooltipcontent"
                                    dangerouslySetInnerHTML={{
                                        __html: cellItem.dataTooltip
                                    }}
                                ></div>
                            </>;

                            return <div
                                className={combinedCls(
                                    `e-cal-timeline-table__cell-cushion-content__item e-cal-timeline-table__cell-cushion-content__item-${cellItemIndex}`,
                                    {
                                        'first': cellItemIndex === 0,
                                        'last': cellItemIndex === _items.length-1
                                    }
                                )}
                                key={`cell-item-${rowIndex}-${cellItemIndex}}`}
                                data-overlay-id={`e-cal-timeline-table__cell-tooltipwrapper-${idRes}`}
                                data-cell-item-index={cellItemIndex}
                                data-date={getCalendarDate(_dateShow)}
                                data-day={padZero(d)}
                                data-week={i}
                                data-row={rowIndex}
                                onMouseEnter={(e: React.MouseEvent) => {
                                    e.stopPropagation();

                                    if (_eventContentTooltip !== '') {
                                        if (typeof tableTooltipDisabled === 'undefined' || tableTooltipDisabled === false) {
                                            handleTableTooltipMouseEnter(e, _eventContentTooltip);
                                        }
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent) => {
                                    e.stopPropagation();

                                    if (_eventContentTooltip !== '') {
                                        if (typeof tableTooltipDisabled === 'undefined' || tableTooltipDisabled === false) {
                                            handleTableTooltipMouseLeave();
                                        }

                                    }

                                }}
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();

                                    // update row data
                                    setTableRowNum(rowIndex);

                                    // update cell data
                                    setTableCellId(cellItem.id);

                                    cellItem.rowData = listSectionData;


                                    // Callback
                                    cellItem.callback?.();


                                    //
                                    if (d > 0) {
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
                                    className="e-cal-timeline__day__event"
                                    style={typeof cellItem !== 'undefined' && (cellItem as any).eventStyles !== 'undefined' ? cellItem.eventStyles : {}}
                                    dangerouslySetInnerHTML={{
                                        __html: cellItem.data
                                    }}
                                ></div>
                                {/* /ITEM */}

                                {/* DELETE BUTTON */}
                                <div
                                    className={`e-cal-timeline__day__eventdel ${cellCloseBtnClassName || ''}`}
                                >
                                    <a 
                                        href="#" 
                                        tabIndex={-1} 
                                        className="align-middle" 
                                        data-date={getCalendarDate(_dateShow)}
                                        data-day={padZero(d)}
                                        data-week={i}
                                        data-row={rowIndex}
                                        onClick={(e: React.MouseEvent) => {
                                            e.preventDefault();
                                            e.stopPropagation();

                                            // update row data
                                            setTableRowNum(rowIndex);

                                            // update cell data
                                            setTableCellId(cellItem.id);


                                            const _existsContent = cellItem;
                                            if (typeof _existsContent !== 'undefined') {
                                                _existsContent.rowData = listSectionData;
                                            }

                                            //
                                            if (d > 0) {
                                                handleDayChange(e, d); // update current day

                                                onChangeDate?.(e, {
                                                    rowData: listSectionData,
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

                    

                    const _tdContent = () => {

                        const isForward = isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined';
                        const isBack = isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined';

                        return <td
                            className={combinedCls(
                                'e-cal-timeline-table__cell-cushion-content__container e-cal-timeline-table__cell-tooltiptrigger',
                                {
                                    'has-event': eventSourcesData && _currentData.length > 0,
                                    'empty': d <= 0,
                                    'today': d === now.getDate(),
                                    'selected': d === day && tableRowNum === rowIndex,
                                    'last-cell': isLastCol
                                }
                            )}
                            key={"col" + i}
                            data-index={colIndex - 1}
                            colSpan={1}
                            data-date={getCalendarDate(_dateShow)}
                            data-day={padZero(d)}
                            data-week={i}
                            data-row={rowIndex}
                            onMouseEnter={(e: React.MouseEvent) => {
                                onCellMouseEnter?.(e);
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                onCellMouseLeave?.(e);
                            }}
                            onClick={(e: React.MouseEvent) => {
                                //
                                onCellClick?.(e);

                                if (d > 0) {
                                    handleDayChange(e, d); // update current day
                                    onChangeDate?.(e, null);
                                }
                            }}
                        >


                            {/* forward fill */}
                            {!FILL_BLANK_DATE_DISABLD && isForward ? <>
                                <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-content disabled">
                                    &nbsp;
                                </div>
                            </> : null}




                            {/* day */}
                            <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-content">
                                {/*++++++++++++++++ EVENT ++++++++++++++++*/}
                                {_eventContent()}
                                {/*++++++++++++++++ /EVENT ++++++++++++++++*/}

                                {/* ADD BUTTON */}
                                {isForward || isBack ? null : <>
                                    <div
                                        className={`e-cal-timeline__day__eventadd ${cellAddBtnClassName || ''}`}
                                    >
                                        <a 
                                            href="#" 
                                            tabIndex={-1} 
                                            className="align-middle" 
                                            data-date={getCalendarDate(_dateShow)}
                                            data-day={padZero(d)}
                                            data-week={i}
                                            data-row={rowIndex}
                                            onClick={(e: React.MouseEvent) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                // update row data
                                                setTableRowNum(rowIndex);

                                                // update cell data
                                                setTableCellId(-1);

                                                //
                                                if (d > 0) {
                                                    handleDayChange(e, d); // update current day

                                                    onChangeDate?.(e, {
                                                        rowData: listSectionData,
                                                        id: 0,
                                                        date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                                    });

                                                    if (EVENTS_ENABLED) {
                                                        onModalEditOpen?.({
                                                            rowData: listSectionData,
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


                            {/* back fill */}
                            {!FILL_BLANK_DATE_DISABLD && isBack ? <>
                                <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-content disabled">
                                    &nbsp;
                                </div>
                            </> : null}



                        </td>;
                    };


                    if (!FILL_BLANK_DATE_DISABLD) {
                        return <>{_tdContent()}</>;
                    } else {
                        return d > 0 && d <= days[month] ? (
                            <>{_tdContent()}</>
                        ) : null;
                    }


                }


            });

        })

    }

    function generateColUi() {

        if (FILL_BLANK_DATE_DISABLD) {

            //#######################
            return Array.from({ length: days[month] }).fill(0).map((item: any, i: number) => {
                return (
                    <col
                        key={"col-placeholder-" + i}
                        data-index={i}
                        data-datagrid-col={i}
                        style={{ minWidth: CELL_MIN_W + 'px' }}

                    />
                );
            })
            //#######################

        } else {

            //#######################
            // colIndex
            let colIndex = 0;

            return getCells().map((item: any, j: number) => {
                return item.col.map((dayIndex: number | null, i: number) => {

                    colIndex++;

                    const d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
                    return (
                        <col
                            className={`${d > 0 ? '' : 'empty'}`}
                            key={"col-placeholder-" + i}
                            data-index={colIndex - 1}
                            data-datagrid-col={colIndex - 1}
                            style={{ minWidth: CELL_MIN_W + 'px' }}

                        />
                    );

                });


            })
            //#######################
        }

    }

    function syncTableScrollHeader() {
        const el: any = scrollHeaderRef.current;
        if (el === null) return;

        const _latestScrollLeft = el.scrollLeft;

        if (scrollBodyRef.current) (scrollBodyRef.current as any).scrollLeft = _latestScrollLeft;


    }

    function syncTableScrollBody() {
        const el: any = scrollBodyRef.current;
        if (el === null) return;

        const _latestScrollTop = el.scrollTop;
        const _latestScrollLeft = el.scrollLeft;

        if (scrollListRef.current) (scrollListRef.current as any).scrollTop = _latestScrollTop;
        if (scrollHeaderRef.current) (scrollHeaderRef.current as any).scrollLeft = _latestScrollLeft;

    }

    function syncTableScrollList() {
        const el: any = scrollListRef.current;
        if (el === null) return;

        const _latestScrollTop = el.scrollTop;

        if (scrollBodyRef.current) (scrollBodyRef.current as any).scrollTop = _latestScrollTop;

    }



    function restoreTableGridInitStatus() {

        // restore table grid init status
        if (scrollListRef.current) (scrollListRef.current as any).scrollTop = 0;
        if (scrollBodyRef.current) (scrollBodyRef.current as any).scrollLeft = 0;

    }


    function tableGridInit(scrollBarInit: boolean = true) {

        //
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;


        //****************
        // STEP 1: 
        //****************
        // calculate min width 
        //--------------
        const cellMinWidth = CELL_MIN_W;
        const colCount = FILL_BLANK_DATE_DISABLD ? days[month] : 7 * getCells().length;
        const scrollableMinWidth = cellMinWidth * colCount;

        //****************
        // STEP 2: 
        //****************    
        // initialize scrollable wrapper (width)
        //--------------
        let _scrollableWrapper: HTMLElement[] = [];
        if (scrollBarInit) {
            _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-timeline-table__scroller-harness');
            [].slice.call(_scrollableWrapper).forEach((el: any) => {
                const scrollType = el.dataset.scroll;

                if (scrollType !== 'list') {
                    const _content = el.querySelector('.e-cal-timeline-table__scroller');
                    const tableMaxWidth = tableGridEl.clientWidth;
                    const tableHeaderTitleWidth = tableGridEl.querySelector('.e-cal-timeline-table__cell-cushion-headertitle').clientWidth;
                    const tableDividerWidth = tableGridEl.querySelector('.e-cal-timeline-table__timeline-divider').clientWidth;
                    const tableBorderWidth = 4;
                    const scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;


                    el.dataset.width = scrollMaxWidth;
                    el.style.maxWidth = el.dataset.width + 'px';
                    _content.style.minWidth = scrollableMinWidth + 'px';

                }
            });
        }


        //****************
        // STEP 3: 
        //****************
        // initialize cell width
        //--------------
        const headerThElements: any = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-header__content tbody').getElementsByTagName('th');
        const colElements: any = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__content colgroup').getElementsByTagName('col')
        const tdElements: any = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__content tbody').getElementsByTagName('td');
        const tdElementMaxWidth: number = typeof tdElements[0] === 'undefined' ? 0 : parseFloat(window.getComputedStyle(tdElements[0].querySelector('.e-cal-timeline-table__cell-cushion-content')).maxWidth);


        if (Array.isArray(eventsValue) && eventsValue.length > 0) {

            for (let i = 0; i < headerThElements.length; i++) {

                const curHeaderThElementMaxWidth = parseFloat(window.getComputedStyle(headerThElements[i].querySelector('.e-cal-timeline-table__cell-cushion-headercontent')).width);
                const targetElement = headerThElements[i].offsetWidth > tdElements[i].offsetWidth ? headerThElements[i] : tdElements[i];
                let tdOwidth = parseFloat(window.getComputedStyle(targetElement).width);


                // check td max width
                if (tdElementMaxWidth > 0 && tdOwidth > tdElementMaxWidth) {
                    tdOwidth = tdElementMaxWidth;
                }

                // check header th max width
                if (tdElementMaxWidth > 0 && tdElementMaxWidth < curHeaderThElementMaxWidth) {
                    tdOwidth = curHeaderThElementMaxWidth;
                }

                // Prevent the width from being +1 each time it is initialized
                tdOwidth = tdOwidth - 1;

                headerThElements[i].querySelector('.e-cal-timeline-table__cell-cushion-headercontent').style.width = tdOwidth + 'px';
                tdElements[i].querySelector('.e-cal-timeline-table__cell-cushion-content').style.minWidth = tdOwidth + 'px';
                colElements[i].style.minWidth = tdOwidth + 'px';


            }
        }


        //****************
        // STEP 4: 
        //****************    
        // initialize max width of table content
        //--------------
        if (scrollBodyRef.current !== null && scrollHeaderRef.current !== null) {
            const tableContentWidth = window.getComputedStyle(tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__content')).width;
            const scrollBodyEl: any = scrollBodyRef.current;
            const scrollHeaderEl: any = scrollHeaderRef.current;

            scrollBodyEl.style.width = tableContentWidth;
            scrollHeaderEl.style.width = tableContentWidth;
            scrollBodyEl.dataset.width = parseFloat(tableContentWidth);
            scrollHeaderEl.dataset.width = parseFloat(tableContentWidth);

            //
            const tableWrapperMaxWidthLatest = tableGridEl.clientWidth;
            if (tableWrapperMaxWidthLatest > parseFloat(tableContentWidth)) {
                tableGridEl.querySelector('.e-cal-timeline-table__timeline-table').style.width = tableContentWidth;
            }


        }



        //****************
        // STEP 5: 
        //****************
        // initialize cell height
        //--------------
        const headerTitleTrElements = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__title tbody').getElementsByTagName('tr');
        const trElements = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__content tbody').getElementsByTagName('tr');

        for (let i = 0; i < headerTitleTrElements.length; i++) {

            const targetElement = headerTitleTrElements[i].offsetHeight > trElements[i].offsetHeight ? headerTitleTrElements[i] : trElements[i];
            const tdOHeight = window.getComputedStyle(targetElement).height;
            headerTitleTrElements[i].style.height = tdOHeight;
            trElements[i].style.height = tdOHeight;

        }

        //****************
        // STEP 6: 
        //****************
        //initialize scrollable wrapper (height)
        //--------------
        if (scrollBarInit) {
            [].slice.call(_scrollableWrapper).forEach((el: any) => {
                const scrollType = el.dataset.scroll;
                const oldHeight = el.clientHeight;

                if (scrollType !== 'header') {
                    const tableWrapperMaxHeight = window.getComputedStyle(tableGridEl as HTMLElement).height;
                    if (oldHeight > parseFloat(tableWrapperMaxHeight)) {
                        el.style.height = tableWrapperMaxHeight;
                    }
                }

            });
        }



        //****************
        // STEP 7: 
        //****************
        // display wrapper
        //--------------
        tableGridEl.classList.remove('invisible');



    }


    function tableGridReset(scrollBarInit: boolean = true) {
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;


        // initialize scrollable wrapper (width & height)
        //--------------
        if (scrollBarInit) {
            const _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-timeline-table__scroller-harness');
            [].slice.call(_scrollableWrapper).forEach((el: any) => {
                
                const _content = el.querySelector('.e-cal-timeline-table__scroller');
                el.removeAttribute('data-width');
                el.removeAttribute('style');
                _content.removeAttribute('style');
            });
        }


        // initialize cell height
        //--------------
        const headerTitleTrElements = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__title tbody').getElementsByTagName('tr');
        const trElements = tableGridEl.querySelector('.e-cal-timeline-table__datagrid-body__content tbody').getElementsByTagName('tr');

        for (let i = 0; i < headerTitleTrElements.length; i++) {
            headerTitleTrElements[i].removeAttribute('style');
            trElements[i].removeAttribute('style');
        }

    }




    // ================================================================
    // 
    // ================================================================
    //if user change the selectedYear, then udate the years array that is displayed on year tab view
    useEffect(() => {
        const years: number[] = [];
        for (let y = selectedYear - 10; y < selectedYear + 10; y++) {
            years.push(y as never)
        }
        setYearsCollection(years);
    }, [selectedYear]);



    useEffect(() => {
        setTodayDate(date);
    }, [date]);


    useEffect(() => {
        // Guaranteed year change triggered by the front and rear buttons
        onChangeYear?.({
            day: padZero(day),
            month: padZero(month + 1),
            year: year.toString()
        });
    }, [year]);


    useEffect(() => {

        // update events value
        if (Array.isArray(eventsValue)) setVal(eventsValue);

        // update current today
        if (typeof customTodayDate !== 'undefined' && isValidDate(customTodayDate)) {
            const _customNow = new Date(customTodayDate);
            setTodayDate(_customNow);
        }

        // Call a function when the list has been rendered completely
        onListRenderComplete?.();


        return () => {

            // reset table grid
            tableGridReset();
        }

    }, [eventsValue, customTodayDate]);



    return (
        <>

            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Calendar //////////////////// */}
            {/*////////////////////////////////////////////////// */}

            <div className={combinedCls(
                "e-cal-timeline__wrapper",
                calendarWrapperClassName
            )}>

                {/*++++++++++++++++ MAIN ++++++++++++++++*/}
                <div className="e-cal-timeline__header bg-body-tertiary">
                    <button tabIndex={-1} type="button" className="e-cal-timeline__btn e-cal-timeline__btn--prev" onClick={handlePrevChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#000" />
                        </svg>
                    </button>
                    <div className="e-cal-timeline__header__btns">
                        <button tabIndex={-1} type="button" className={`e-cal-timeline__btn ${winMonth ? 'active' : ''}`} onClick={handleShowWinMonth}>
                            {MONTHS[month]}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                        <button tabIndex={-1} type="button" className={`e-cal-timeline__btn ${winYear ? 'active' : ''}`} onClick={handleShowWinYear}>
                            {year}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                    </div>
                    <button tabIndex={-1} type="button" className="e-cal-timeline__btn e-cal-timeline__btn--next" onClick={handleNextChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#000" />
                        </svg>
                    </button>
                </div>



                <div className="e-cal-timeline__body">


                    <div className="e-cal-timeline__row">
                        {/* day */}

                        {/* /day */}
                    </div>

                </div>
                {/*++++++++++++++++ /MAIN ++++++++++++++++*/}


                {/*++++++++++++++++ MONTH SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-timeline__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winMonth ? 'active' : ''}`}>
                    <div className="e-cal-timeline__month-container">
                        {MONTHS_FULL.map((month, index) => {
                            return <div
                                data-month={padZero(index + 1)}
                                className={`e-cal-timeline__month ${selectedMonth === index ? ' selected' : ''}`}
                                key={month + index}
                                onClick={() => { handleMonthChange(index) }}
                            >{month}</div>
                        })}
                    </div>
                </div>
                {/*++++++++++++++++ /MONTH SELECTION TAB ++++++++++++++++*/}

                {/*++++++++++++++++ YEAR SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-timeline__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winYear ? 'active' : ''}`}>
                    <div className="e-cal-timeline__year-container bg-body-tertiary">
                        {yearsArray.map((year, index) => {
                            return <div
                                data-year={year}
                                className={`e-cal-timeline__year ${selectedYear === year ? ' selected' : ''}`}
                                key={year + index}
                                onClick={() => { handleYearChange(year) }}
                            >{year}</div>
                        })}
                    </div>

                </div>
                {/*++++++++++++++++ /YEAR SELECTION TAB ++++++++++++++++*/}



                {/*++++++++++++++++ TODAY SELECTION TAB ++++++++++++++++*/}
                <div className="e-cal-timeline__today-wrapper p-2">
                    <button tabIndex={-1} type="button" className="e-cal-timeline__btn e-cal-timeline__btn--today" onClick={handleTodayChange}>
                        {langToday || 'Today'}
                    </button>
                </div>
                {/*++++++++++++++++ /TODAY SELECTION TAB ++++++++++++++++*/}


            </div>{/* /.e-cal-timeline__wrapper */}



            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Table Grid //////////////////// */}
            {/*////////////////////////////////////////////////// */}
            {val.length === 0 ? null : <>
                <div ref={tableGridRef} className={combinedCls(
                    "e-cal-timeline-table__timeline-table__wrapper invisible",
                    tableWrapperClassName
                )}>
                    <table role="grid" className={combinedCls(
                        "e-cal-timeline-table__timeline-table",
                        tableClassName
                    )}>
                        <colgroup>
                            <col className="e-cal-timeline-table__datagrid-header" />
                            <col />
                            <col />
                        </colgroup>
                        
                        <thead className={combinedCls(
                            tableHeadClassName
                        )}
                            ref={tableGridHeaderRef}
                            role="rowgroup"
                        >
                            <tr role="presentation">
                                <th role="presentation">
                                    {/*<!--///// HEADER LEFT //////-->*/}
                                    <div className="e-cal-timeline-table__timeline-header e-cal-timeline-table__timeline-headertitle">

                                        <table role="presentation" className="e-cal-timeline-table__datagrid-header__title">
                                            <colgroup>
                                                <col />
                                            </colgroup>
                                            <thead role="presentation">
                                                <tr role="row">
                                                    <th role="columnheader">
                                                        <div className="e-cal-timeline-table__cell-cushion e-cal-timeline-table__cell-cushion-headertitle">
                                                            {tableListSectionTitle || ''}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>

                                    </div>
                                    {/*<!--///// /HEADER LEFT //////-->*/}



                                </th>
                                <th role="presentation" className="e-cal-timeline-table__timeline-divider"><div></div></th>
                                <th role="presentation">
                                    <div 
                                        ref={scrollHeaderRef} 
                                        className="e-cal-timeline-table__scroller-harness e-cal-timeline-table__scroller-harness--hide" 
                                        data-scroll="header" 
                                        onScroll={syncTableScrollHeader}
                                    >
                                        <div className="e-cal-timeline-table__scroller">

                                            {/*<!--///// HEADER RIGHT //////-->*/}
                                            <div className="e-cal-timeline-table__timeline-header">

                                                <table className="e-cal-timeline-table__datagrid-header__content e-cal-timeline-table__scrollgrid-sync-table" >
                                                    <tbody>
                                                        <tr>
                                                            {generateDaysUi()}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/*<!--///// /HEADER RIGHT //////-->*/}
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>



                        <tbody className={combinedCls(
                            tableBodyClassName
                        )}
                            role="rowgroup"
                        >
                            <tr role="presentation" className="e-cal-timeline-table__list-section">
                                <td
                                    role="presentation"
                                    className={combinedCls(
                                        tableListStartClassName
                                    )}

                                >

                                    <div 
                                        ref={scrollListRef} 
                                        className={combinedCls(
                                            'e-cal-timeline-table__scroller-harness',
                                            {
                                                'autoscroll': AUTO_SCROLL
                                            }
                                        )}
                                        data-scroll="list" 
                                        onScroll={syncTableScrollList}
                                    >
                                        <div className="e-cal-timeline-table__scroller">

                                            {/*<!--///// RESOURCE LEFT //////-->*/}
                                            <table role="presentation" className="e-cal-timeline-table__datagrid-body__title e-cal-timeline-table__scrollgrid-sync-table">
                                                <colgroup>
                                                    <col />
                                                </colgroup>
                                                <tbody role="presentation">

                                                    {/*<!-- per row -->*/}
                                                    {generateListSectionUi()}
                                                    {/*<!-- /per row -->*/}

                                                </tbody>
                                            </table>
                                            {/*<!--///// /RESOURCE LEFT //////-->*/}
                                        </div>
                                    </div>


                                </td>
                                <td
                                    role="presentation"
                                    className={combinedCls(
                                        'e-cal-timeline-table__timeline-divider',
                                        tableListDividerClassName
                                    )}
                                >
                                    <div></div>
                                </td>
                                <td
                                    role="presentation"
                                    className={combinedCls(
                                        tableListEndClassName
                                    )}
                                >


                                    <div 
                                        ref={scrollBodyRef} 
                                        className={combinedCls(
                                            'e-cal-timeline-table__scroller-harness',
                                            {
                                                'autoscroll': AUTO_SCROLL
                                            }
                                        )}
                                        data-scroll="body" 
                                        onScroll={syncTableScrollBody} 
                                        onMouseMove={BODY_DRAG ? handleTableMove : () => { }} 
                                        onMouseDown={BODY_DRAG ? handleTableDragStart : () => { }} 
                                        onMouseUp={BODY_DRAG ? handleTableDragEnd : () => { }} 
                                        onMouseLeave={BODY_DRAG ? handleTableDragEnd : () => { }}
                                    >
                                        <div className="e-cal-timeline-table__scroller">
                                            {/*<!--///// RESOURCE RIGHT //////-->*/}
                                            <div className="e-cal-timeline-table__timeline-body">
                                                <table className="e-cal-timeline-table__datagrid-body__content e-cal-timeline-table__scrollgrid-sync-table">
                                                    <colgroup>
                                                        {generateColUi()}
                                                    </colgroup>
                                                    <tbody>
                                                        {/*<!-- per row -->*/}
                                                        {val.map((item: any, i: number) => {

                                                            return (
                                                                <tr key={i}>
                                                                    {generateDaysUi(item.eventSources, item.listSection, i, true)}
                                                                </tr>
                                                            )

                                                        })}

                                                    </tbody>
                                                </table>

                                            </div>
                                            {/*<!--///// /RESOURCE RIGHT //////-->*/}


                                        </div>
                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>{/* /.e-cal-timeline-table__timeline-table__wrapper */}


            </>}


            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Modal //////////////////// */}
            {/*////////////////////////////////////////////////// */}

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
                        onModalDeleteEvent?.(queryItemObj(), closewin, () => {

                            // initialize table grid
                            setTimeout(() => {
                                tableGridReset(false);
                                tableGridInit(false);
                            }, 500);
                        });
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

                        onModalEditEvent?.(queryItemObj(), closewin, () => {
                            // initialize table grid
                            setTimeout(() => {
                                tableGridReset(false);
                                tableGridInit(false);
                            }, 500);
                        });


                    }}
                >
                    {modalContent}

                </ModalDialog>
                {/*<!-- /EDIT -->*/}


            </> : null}
            {/*++++++++++++++++ /MODAL ++++++++++++++++*/}



            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Table Grid Tooltip //////////////////// */}
            {/*////////////////////////////////////////////////// */}
            <RootPortal show={true} containerClassName="EventCalendarTimeline-TooltipModal">
                <div
                    ref={tableTooltipModalRef}
                    id={`e-cal-timeline-table__cell-tooltipwrapper-${idRes}`}
                    className={`e-cal-timeline-table__cell-tooltipwrapper d-inline-block ${isShowTableTooltip ? 'active' : ''}`}
                    role="tooltip"
                    data-microtip-position={tableTooltipDirection || 'bottom'}
                    data-microtip-size={tableTooltipSize || 'auto'}
                    style={{ display: 'none' }}
                >
                    <div className="e-cal-timeline-table__cell-tooltipcontent">
                        {tableTooltipContent}
                    </div>
                </div>
            </RootPortal>


        </>
    )
};


export default EventCalendarTimeline;