import React, { useState, useEffect, useMemo, useRef, useCallback, useImperativeHandle } from 'react';


import RootPortal from 'funda-root-portal';
import ModalDialog from 'funda-modaldialog';

import useComId from 'funda-utils/dist/cjs/useComId';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { getTodayDate, getCalendarDate, isValidDate, padZero, getDateDetails, getMonthDates, getWeekDatesFromMon  } from 'funda-utils/dist/cjs/date';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import getOs from 'funda-utils//dist/cjs/os';



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
    langAppearanceLabelWeek?: string
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
    onCellMouseUp?: (el: any, selectedCellsData: any[]) => void;
    onCellClick?: (el: any, cellData: any) => void;
    onCellDoubleClick?: (el: any, cellData: any) => void;
    onKeyPressed?: (el: any, selectedCellsData: any[]) => void;
    onKeyCopy?: (el: any, selectedCellsData: any[]) => void;
    onKeyPaste?: (el: any, selectedCellsData: any[]) => void;

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
        multipleCells = false,
        customTodayDate,
        appearance = 'month',
        appearanceToggle = true,
        appearanceWeekTmpl,
        eventsValue,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,
        langAppearanceLabelMonth,
        langAppearanceLabelWeek,
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
        onChangeWeek,
        onListRenderComplete,
        onChangeAppearanceMode,

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
        onCellMouseUp,
        onCellClick,
        onCellDoubleClick,
        onKeyPressed,
        onKeyCopy,
        onKeyPaste,

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


    //================================================================
    // General
    //================================================================    
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formatToEnglishMonthDay = (inputDate: string) => {
        const date = new Date(inputDate);
        const month = MONTHS[date.getMonth()];
        const day = date.getDate();
        return month + ' ' + day;
    };
    const START_WEEK_ON = 1; // represents "Monday/1" in JavaScript

    // orginal data
    const [orginalData, setOrginalData] = useState<TimelineRowListConfig[]>([]);

    //
    const FILL_BLANK_DATE_DISABLD = typeof forwardAndBackFillDisabled === 'undefined' ? true : forwardAndBackFillDisabled;

    // root
    const rootRef = useRef<any>(null);
    const rootWidth = useRef<number>(0);

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
    const modalEditHandleRef = useRef<any>();
    const modalDeleteHandleRef = useRef<any>();
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

    // Temporary date
    const [tempDate, setTempDate] = useState<string>('');



    // Open temporary storage for pop-ups
    const [tableRowNum, setTableRowNum] = useState<number>(-1);
    const [tableCellId, setTableCellId] = useState<number>(-1);

    // table grid tooltip
    const CELL_TOOLTIP_EXCEEDED_SIDE_POS_OFFSET = Number(tableTooltipExceededSidePosOffset) || 15;
    const CELL_TOOLTIP_POS_OFFSET = typeof tableTooltipOffset === 'undefined' ? 10 : tableTooltipOffset;
    const tableTooltipModalRef = useRef<any>(null);
    const [isShowTableTooltip, setIsShowTableTooltip] = useState<boolean>(false);
    const [tableTooltipContent, setTableTooltipContent] = useState<any>(null);


    // appearance mode
    const [appearanceMode, setAppearanceMode] = useState<string>(appearance);


    const findMondayAndTruncate = (dates: string[]) => {
        const _res = dates.map((s: string) => new Date(s));
        // Find the first Monday in the sequence
        for (let i = 0; i < _res.length; i++) {
            const date = _res[i];
            if (date.getDay() === START_WEEK_ON) {
                // Return dates starting from Monday onwards
                return dates.slice(i);
            }
        }

        return [];  // Return empty array if no Monday found
    }



    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            gridInit: () => {
                tableGridInit();
            },
            gridInitHeadertitle: () => {
                tableGridInitHeadertitle();
            },
            gridReset: (cb?: any) => {
                tableGridReset();
            },
            resetSelectedCells: () => {
                // reset selection area
                setSelectedCells([]);
                setCopiedCells(null);
            },
            closeModal: () => {
                if (modalEditHandleRef.current) modalEditHandleRef.current.close();
                if (modalDeleteHandleRef.current) modalDeleteHandleRef.current.close();
            }
        }),
        [contentRef],
    );



    //================================================================
    // Monthly calendar
    //================================================================
    //


    //================================================================
    // Weekly calendar
    //================================================================
    const [weekOffset, setWeekOffset] = useState<number>(0);
    const handleNextWeek = () => {
        setWeekOffset(weekOffset + 1);
        return weekOffset + 1;
    };
    const handlePreviousWeek = () => {
        setWeekOffset(weekOffset - 1)
        return weekOffset - 1;
    };
    const weekDates = getWeekDatesFromMon(weekOffset);
    const [displayWeekForHeader, setDisplayWeekForHeader] = useState<string[]>([]);





    //================================================================
    // Drag to activate the selection area
    //================================================================    
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [selectedCells, setSelectedCells] = useState<any[]>([]);
    const [startCell, setStartCell] = useState<any>(null);

    // Determine whether it is a selected cell
    const isCellSelected = (row: number, col: number) => {
        return selectedCells.map((item: any) => [item.row, item.col]).some(([r, c]) => r === row && c === col);
    };


    // Start selecting
    const handleTableMainCellMouseDown = (e: React.MouseEvent, row: number, col: number, colsOffset: number) => {
        const isMultiSelect = e.ctrlKey || e.metaKey; // Check whether the Ctrl or Command key is pressed

        setIsSelecting(true);
        setStartCell({ row, col });

        const _el: any = e.currentTarget;

        setIsSelecting(true);
        setStartCell({ row, col });

        setSelectedCells((prevSelectedCells: any[]) => {
            if (isMultiSelect) {
                // Multi-select mode: Add or remove cells
                //++++++++++
                const cellExists = prevSelectedCells.some(({ row: r, col: c }) => r === row && c === col);
                if (cellExists) {
                    return prevSelectedCells.filter(({ row: r, col: c }) => !(r === row && c === col));
                } else {
                    return [...prevSelectedCells, {
                        rowData: JSON.parse(_el.dataset.rowinfo),
                        date: _el.dataset.date,
                        row: row,
                        col: col
                    }];
                }
            } else {
                // Radio Mode: Clear the previous selection, select only the current cell
                //++++++++++
                return [{
                    rowData: JSON.parse(_el.dataset.rowinfo),
                    date: _el.dataset.date,
                    row: row,
                    col: col
                }];
            }
        });

    };

    // Selecting now
    const handleTableMainCellMouseEnter = (e: React.MouseEvent, row: number, col: number, colsOffset: number) => {

        if (isSelecting && startCell) {

            //########## MODE: WEEK #############
            let curDateList: any[] = [];
            if (appearanceMode === 'week') {
                curDateList = weekDates.map((v: Date) => getCalendarDate(v));
            }
            //########## /MODE: WEEK #############

            //########## MODE: MONTH #############
            if (appearanceMode === 'month') {
                curDateList = getMonthDates(year, month + 1);
            }
            //########## /MODE: MONTH #############


            const newSelectedCells: any[] = [];
            const [minRow, maxRow] = [startCell.row, row].sort((a, b) => a - b);
            const [minCol, maxCol] = [startCell.col, col].sort((a, b) => a - b);


            for (let r = minRow; r <= maxRow; r++) {
                for (let c = minCol; c <= maxCol; c++) {

                    // query date and row data
                    const curRowData: any = orginalData[r];
                    newSelectedCells.push({
                        rowData: curRowData?.listSection,
                        date: curDateList[c - colsOffset],
                        row: r,
                        col: c
                    });
                }
            }
            setSelectedCells(newSelectedCells);
        }
    };

    // Stop selecting
    const handleTableMainMouseUp = (e: React.MouseEvent) => {
        setIsSelecting(false);
    };

    //================================================================
    // Copy & Paste
    //================================================================    
    const [copiedCells, setCopiedCells] = useState<{
        structure: {
            rows: number,
            cols: number
        },
        offset: { row: number, col: number },
        cells: any[]
    } | null>(null);

    const handleWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const isMac = getOs().isOSX;

        //########## MODE: WEEK #############
        let curDateList: any[] = [];
        if (appearanceMode === 'week') {
            curDateList = weekDates.map((v: Date) => getCalendarDate(v));
        }
        //########## /MODE: WEEK #############

        //########## MODE: MONTH #############
        if (appearanceMode === 'month') {
            curDateList = getMonthDates(year, month + 1);
        }
        //########## /MODE: MONTH #############


        // Listen for copy
        if ((isMac && e.metaKey && e.key === 'c') || (!isMac && e.ctrlKey && e.key === 'c')) {

            if (selectedCells.length > 0) {
                // Gets the structure of the selected area
                const _selectedCellsCoordinates = selectedCells.map(({ row: r, col: c }) => {
                    return [r, c];
                });

                const [minRow, maxRow] = _selectedCellsCoordinates.reduce(
                    ([min, max], [r]) => [Math.min(min, r), Math.max(max, r)],
                    [Infinity, -Infinity]
                );
                const [minCol, maxCol] = _selectedCellsCoordinates.reduce(
                    ([min, max], [_, c]) => [Math.min(min, c), Math.max(max, c)],
                    [Infinity, -Infinity]
                );

                /*
                [Be equal to:]

                // Suppose _selectedCellsCoordinates is an array of selected cells, each of which is in the form of [row, col].
                let minRow = Infinity;
                let maxRow = -Infinity;
                let minCol = Infinity;
                let maxCol = -Infinity;

                for (const [row, col] of _selectedCellsCoordinates) {
                    if (row < minRow) minRow = row;
                    if (row > maxRow) maxRow = row;
                    if (col < minCol) minCol = col;
                    if (col > maxCol) maxCol = col;
                }
                */

                // Calculate the offset and adjust the cell coordinates
                const adjustedCells = _selectedCellsCoordinates.map(([r, c]) => [r - minRow, c - minCol]);

                // The copy result is independent of the data
                setCopiedCells({
                    structure: {
                        rows: maxRow - minRow + 1,
                        cols: maxCol - minCol + 1
                    },
                    offset: { row: minRow, col: minCol },
                    cells: adjustedCells
                });


                //
                onKeyCopy?.(e, selectedCells);

            }

        }

        // Listen for paste
        if ((isMac && e.metaKey && e.key === 'v') || (!isMac && e.ctrlKey && e.key === 'v')) {


            if (copiedCells && selectedCells.length > 0) {
                const { rowsTotal, colsTotal, forwardFillTotal } = getCells();
                const { row: targetRow, col: targetCol } = selectedCells[0]; // the first position
                const newSelectedCellsCoordinates = copiedCells.cells.map(([r, c]) => [
                    targetRow + r,
                    targetCol + c
                ]).filter(([r, c]) => r < rowsTotal && c < colsTotal); // Make sure you don't go beyond the scope of the table

                // query date and row data
                const newSelectedCells: any[] = [];
                newSelectedCellsCoordinates.forEach((item: any[]) => {
                    const [r, c] = item;
                    const curRowData: any = orginalData[r];
                    newSelectedCells.push({
                        rowData: curRowData?.listSection,
                        date: curDateList[c - forwardFillTotal],
                        row: r,
                        col: c
                    });
                });


                setSelectedCells(newSelectedCells);

                //
                onKeyPaste?.(e, newSelectedCells);
            }
        }
    };



    //================================================================
    // Other
    //================================================================    

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


        //########## MODE: WEEK #############
        if (appearanceMode === 'week') {
            const curWeek: any[] = [];
            weekDates.forEach((date: Date, dayIndex: number) => {
                const _dayOfWeek = new Date(date).getDay();
                //                     ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                const _daysIndicator = [7, 1, 2, 3, 4, 5, 6];
                const _detail = getDateDetails(date);
                const {
                    year: _temp_year,
                    month: _temp_month,
                    day: _temp_day
                } = _detail;

                curWeek.push({
                    month: Number(_temp_month) - 1,
                    startDay: _daysIndicator[_dayOfWeek],
                    row: 0,
                    col: [
                        dayIndex
                    ],
                    dateInfo: [
                        {
                            date: getCalendarDate(date),
                            firstGroup: false,
                            lastGroup: false,
                            validDisplayDate: true
                        }
                    ],
                    weekDisplay: [
                        WEEK[_daysIndicator[_dayOfWeek] - 1]
                    ],
                    week: [
                        _daysIndicator[_dayOfWeek] - 1
                    ]
                });

            });

            return {
                rowsTotal: orginalData.length,
                colsTotal: curWeek.length,
                forwardFillTotal: 0,
                list: curWeek
            };

        }
        //########## /MODE: WEEK #############



        //########## MODE: MONTH #############
        if (appearanceMode === 'month') {
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



            // The remaining date of the previous month
            // If the number is 7, the calendar does not include the date of the previous month
            const remainPrevDate = findMondayAndTruncate(_getForwardFill(year, month + 1));
            const remainPrevDateTotal = remainPrevDate.length === 7 ? 0 : remainPrevDate.length;


            return {
                rowsTotal: orginalData.length,
                colsTotal: allDays.length,
                forwardFillTotal: remainPrevDateTotal,
                list: _tempCells.map((_: any, j: number) => {
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
                })
            };


        }
        //########## /MODE: MONTH #############


        return {
            rowsTotal: 0,
            colsTotal: 0,
            forwardFillTotal: 0,
            list: []
        };


    };

    const queryItemObj = () => {
        const curRowData: any = orginalData[tableRowNum];
        const curDate: string = tempDate !== '' ? tempDate : `${year}-${month + 1}-${day}`;

        if (curRowData) {
            const eventSourcesData = curRowData.eventSources;

            const _rowData = eventSourcesData.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(curDate));

            let _currentData: any = undefined;
            if (_rowData[0]) {
                const _items = _rowData[0].list;


                if (tableCellId === -1) {
                    // add new
                    _currentData = {
                        rowData: curRowData.listSection,
                        id: 0,
                        date: getCalendarDate(curDate)
                    };
                } else {
                    // edit or delete
                    _currentData = _items.filter((item: any) => item.id == tableCellId)[0];
                }

            }

            return _rowData[0] ? _currentData : {
                rowData: curRowData.listSection,
                id: 0,
                date: getCalendarDate(curDate)
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
            const _modalContent = _tableTooltipModalRef.querySelector('.custom-event-tl-table__cell-tooltipcontent');
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

        //########## MODE: WEEK #############
        if (appearanceMode === 'week') {
            const _latestWeekOffset = handlePreviousWeek();
            const weekDates: Date[] = getWeekDatesFromMon(_latestWeekOffset);
            onChangeWeek?.(getCalendarDate(weekDates.at(0) as Date), getCalendarDate(weekDates.at(-1) as Date));
        }
        //########## /MODE: WEEK #############


        //########## MODE: MONTH #############
        if (appearanceMode === 'month') {
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
        //########## /MODE: MONTH #############


    }

    function handleNextChange() {


        //########## MODE: WEEK #############
        if (appearanceMode === 'week') {
            const _latestWeekOffset = handleNextWeek();
            const weekDates: Date[] = getWeekDatesFromMon(_latestWeekOffset);
            onChangeWeek?.(getCalendarDate(weekDates.at(0) as Date), getCalendarDate(weekDates.at(-1) as Date));
        }
        //########## /MODE: WEEK #############


        //########## MODE: MONTH #############
        if (appearanceMode === 'month') {
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
        //########## /MODE: MONTH #############


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

        //
        const weekDates: Date[] = getWeekDatesFromMon(0);
        onChangeWeek?.(getCalendarDate(weekDates.at(0) as Date), getCalendarDate(weekDates.at(-1) as Date));
        setWeekOffset(0);


        // restore table grid init status
        restoreTableGridInitStatus();

    }

    function handleAppearanceChange(e: React.MouseEvent) {
        const _mode = (e.target as any).dataset.mode;
        setAppearanceMode(_mode);

        //
        onChangeAppearanceMode?.(_mode);
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
        return orginalData.map((item: any, i: number) => {

            return (
                <tr key={i} role="row" data-index={i}>
                    <td role="gridcell" data-resource-index={i} className="custom-event-tl-table__datagrid-cell">
                        <div className="custom-event-tl-table__cell-cushion custom-event-tl-table__cell-cushion-title" dangerouslySetInnerHTML={{
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

        const { forwardFillTotal, list: cellsList } = getCells();
        return cellsList.map((item: any, j: number) => {



            return item.col.map((dayIndex: number, i: number) => {

                colIndex++;


                // date
                const _dateShow = item.dateInfo[i].date;
                const _dateDayShow = _dateShow.split('-').at(-1);

                // week day
                const weekDay = item.week[i];
                const _weekDayStr = SHOW_WEEK ? <span dangerouslySetInnerHTML={{
                    __html: item.weekDisplay[i]
                }} /> : null;

                // helper
                const d = parseFloat(_dateDayShow);
                const _currentData = eventSourcesData.filter((item: any) => getCalendarDate(item.date as string) === _dateShow);
                const isLastCol = colIndex === 7 * cellsList.length;
                const isInteractive = item.dateInfo[i].validDisplayDate;  // The date on which the user interaction can occur, e.g. click, modify
                const isForward = item.dateInfo[i].firstGroup && !isInteractive;
                const isBack = item.dateInfo[i].lastGroup && !isInteractive;


                // days
                //------
                if (!showEvents) {

                    const _thContent = () => {

                        return <th
                            className={combinedCls(
                                'custom-event-tl-table__cell-cushion-headercontent__container',
                                {
                                    'empty': !isInteractive,
                                    'today': d === now.getDate(),
                                    'selected': d === day,
                                    'last-cell': isLastCol
                                }
                            )}
                            key={"col" + i}
                            data-index={colIndex - 1}
                            data-datagrid-col={colIndex - 1}
                            colSpan={1}
                            data-date={_dateShow}
                            data-day={_dateDayShow}
                            data-week={weekDay}
                            style={{ minWidth: CELL_MIN_W + 'px' }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                onCellMouseEnter?.(e);
                            }}
                            onMouseDown={(e: React.MouseEvent) => {
                                // update row data
                                setTableRowNum(-1);

                                // update cell data
                                setTableCellId(-1);

                                if (_currentData.length > 0) {
                                    _currentData[0].rowData = listSectionData;
                                }

                                // reset selection area
                                setSelectedCells([]);
                                setCopiedCells(null);


                                //
                                if (isInteractive) {
                                    handleDayChange(e, d); // update current day

                                    onChangeDate?.(e, _currentData.length === 0 ? {
                                        rowData: listSectionData,
                                        id: 0,
                                        date: _dateShow
                                    } : _currentData[0]);

                                    if (EVENTS_ENABLED) {
                                        onModalEditOpen?.(_currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: _dateShow
                                        } : _currentData[0], () => setShowEdit(true), 'normal');

                                        // set temporary date
                                        setTempDate(_dateShow);
                                    }
                                }

                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                onCellMouseLeave?.(e);
                            }}
                            onMouseUp={(e: React.MouseEvent) => {
                                onCellMouseUp?.(e, selectedCells);
                            }}
                        >


                            {/* forward fill & day & back fill */}
                            <div
                                className={combinedCls(
                                    'custom-event-tl-table__cell-cushion custom-event-tl-table__cell-cushion-headercontent',
                                    {
                                        'disabled': !isInteractive
                                    }
                                )}
                                style={{ width: (CELL_MIN_W - 1) + 'px' }}
                            >
                                {d}
                                {_weekDayStr}
                            </div>


                        </th>;
                    };

                    if (!FILL_BLANK_DATE_DISABLD) {
                        return <>{_thContent()}</>;
                    } else {
                        return isInteractive ? (
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
                                    className="custom-event-tl__day__event-tooltipcontent"
                                    dangerouslySetInnerHTML={{
                                        __html: cellItem.dataTooltip
                                    }}
                                ></div>
                            </>;

                            return <div
                                className={combinedCls(
                                    `custom-event-tl-table__cell-cushion-content__item custom-event-tl-table__cell-cushion-content__item-${cellItemIndex}`,
                                    {
                                        'first': cellItemIndex === 0,
                                        'last': cellItemIndex === _items.length - 1
                                    }
                                )}
                                key={`cell-item-${rowIndex}-${cellItemIndex}}`}
                                data-overlay-id={`custom-event-tl-table__cell-tooltipwrapper-${idRes}`}
                                data-cell-item-index={cellItemIndex}
                                data-date={_dateShow}
                                data-day={_dateDayShow}
                                data-week={weekDay}
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
                                    if (isInteractive) {
                                        handleDayChange(e, d); // update current day


                                        onChangeDate?.(e, cellItem);

                                        if (EVENTS_ENABLED) {
                                            onModalEditOpen?.(cellItem, () => setShowEdit(true), 'normal');

                                            // set temporary date
                                            setTempDate(_dateShow);
                                        }
                                    }
                                }}
                            >



                                {/* ITEM */}
                                <div
                                    className="custom-event-tl__day__event"
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
                                    className={`custom-event-tl__day__eventdel ${cellCloseBtnClassName || ''}`}
                                >
                                    <a
                                        href="#"
                                        tabIndex={-1}
                                        className="align-middle"
                                        data-date={_dateShow}
                                        data-day={_dateDayShow}
                                        data-week={weekDay}
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
                                            if (isInteractive) {
                                                handleDayChange(e, d); // update current day

                                                onChangeDate?.(e, {
                                                    rowData: listSectionData,
                                                    id: 0,
                                                    date: _dateShow
                                                });

                                                if (EVENTS_DELETE_ENABLED) {
                                                    onModalDeleteOpen?.(_existsContent, () => setShowDelete(true));

                                                    // set temporary date
                                                    setTempDate(_dateShow);
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

                        return <td
                            className={combinedCls(
                                'custom-event-tl-table__cell-cushion-content__container custom-event-tl-table__cell-tooltiptrigger',
                                {
                                    'has-event': eventSourcesData && _currentData.length > 0,
                                    'empty': !isInteractive,
                                    'today': d === now.getDate(),
                                    'selected': isCellSelected(rowIndex, dayIndex),
                                    'last-cell': isLastCol
                                }
                            )}
                            key={"col" + i}
                            data-index={colIndex - 1}
                            colSpan={1}
                            data-rowinfo={JSON.stringify(orginalData[rowIndex]?.listSection)}
                            data-date={_dateShow}
                            data-day={_dateDayShow}
                            data-week={weekDay}
                            data-row={rowIndex}
                            onMouseEnter={(e: React.MouseEvent) => {
                                onCellMouseEnter?.(e);

                                //
                                if (multipleCells) handleTableMainCellMouseEnter(e, rowIndex, dayIndex, forwardFillTotal);
                            }}
                            onMouseDown={(e: React.MouseEvent) => {
                                //
                                onCellClick?.(e, {
                                    rowData: orginalData[rowIndex]?.listSection,
                                    date: _dateShow,
                                    row: rowIndex,
                                    col: dayIndex
                                });

                                if (isInteractive) {
                                    handleDayChange(e, d); // update current day
                                    onChangeDate?.(e, null);
                                }


                                if (multipleCells) handleTableMainCellMouseDown(e, rowIndex, dayIndex, forwardFillTotal);
                            }}

                            onDoubleClick={(e: React.MouseEvent) => {
                                //
                                onCellDoubleClick?.(e, {
                                    rowData: orginalData[rowIndex]?.listSection,
                                    date: _dateShow,
                                    row: rowIndex,
                                    col: dayIndex
                                });
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                onCellMouseLeave?.(e);
                            }}
                            onMouseUp={(e: React.MouseEvent) => {
                                onCellMouseUp?.(e, selectedCells);
                            }}
                        >


                            {/* forward fill & day & back fill */}
                            <div
                                className={combinedCls(
                                    'custom-event-tl-table__cell-cushion custom-event-tl-table__cell-cushion-content',
                                    {
                                        'disabled': !isInteractive
                                    }
                                )}
                                style={{ width: (CELL_MIN_W - 1) + 'px' }}
                            >

                                {/*++++++++++++++++ EVENT ++++++++++++++++*/}
                                {_eventContent() || <><i style={{ userSelect: 'none' }}>&nbsp;</i></>}
                                {/*++++++++++++++++ /EVENT ++++++++++++++++*/}

                                {/* ADD BUTTON */}
                                {isForward || isBack ? null : <>
                                    <div
                                        className={`custom-event-tl__day__eventadd ${cellAddBtnClassName || ''}`}
                                    >
                                        <a
                                            href="#"
                                            tabIndex={-1}
                                            className="align-middle"
                                            data-date={_dateShow}
                                            data-day={_dateDayShow}
                                            data-week={weekDay}
                                            data-row={rowIndex}
                                            onClick={(e: React.MouseEvent) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                // update row data
                                                setTableRowNum(rowIndex);

                                                // update cell data
                                                setTableCellId(-1);

                                                //
                                                if (isInteractive) {
                                                    handleDayChange(e, d); // update current day

                                                    onChangeDate?.(e, {
                                                        rowData: listSectionData,
                                                        id: 0,
                                                        date: _dateShow
                                                    });

                                                    if (EVENTS_ENABLED) {
                                                        onModalEditOpen?.({
                                                            rowData: listSectionData,
                                                            id: 0,
                                                            date: _dateShow
                                                        }, () => setShowEdit(true), 'new');

                                                        // set temporary date
                                                        setTempDate(_dateShow);

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


                        </td>;
                    };

                    if (!FILL_BLANK_DATE_DISABLD) {
                        return <>{_tdContent()}</>;
                    } else {
                        return isInteractive ? (
                            <>{_tdContent()}</>
                        ) : null;
                    }

                }


            });

        })

    }

    function generateColUi() {

        {/* //########## MODE: WEEK ############# */ }
        if (appearanceMode === 'week') {
            return Array.from({ length: 7 }).fill(0).map((item: any, i: number) => {
                return (
                    <col
                        key={"col-placeholder-" + i}
                        data-index={i}
                        data-datagrid-col={i}
                        style={{ minWidth: CELL_MIN_W + 'px' }}

                    />
                );
            })
        }

        {/* //########## /MODE: WEEK ############# */ }


        {/* //########## MODE: MONTH ############# */ }
        if (appearanceMode === 'month') {
            if (FILL_BLANK_DATE_DISABLD) {
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

            } else {
                // colIndex
                let colIndex = 0;

                const { forwardFillTotal, list: cellsList } = getCells();
                return cellsList.map((item: any, j: number) => {
                    return item.col.map((dayIndex: number | null, i: number) => {

                        colIndex++;

                        // helper
                        const isInteractive = item.dateInfo[i].validDisplayDate;  // The date on which the user interaction can occur, e.g. click, modify

                        return (
                            <col
                                className={combinedCls(
                                    {
                                        'empty': !isInteractive
                                    }
                                )}
                                key={"col-placeholder-" + i}
                                data-index={colIndex - 1}
                                data-datagrid-col={colIndex - 1}
                                style={{ minWidth: CELL_MIN_W + 'px' }}

                            />
                        );

                    });


                })
            }
        }
        {/* //########## /MODE: MONTH ############# */ }








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


    function tableGridInitHeadertitle() {
        //
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;

        // initialize cell height
        const headerTitleTrElements = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__title tbody').getElementsByTagName('tr');
        const trElements = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__content tbody').getElementsByTagName('tr');

        for (let i = 0; i < headerTitleTrElements.length; i++) {

            const targetElement = headerTitleTrElements[i].offsetHeight > trElements[i].offsetHeight ? headerTitleTrElements[i] : trElements[i];
            const tdOHeight = window.getComputedStyle(targetElement).height;
            headerTitleTrElements[i].style.height = tdOHeight;
            trElements[i].style.height = tdOHeight;

        }

    }
   

    function outerWrapperInit() {
        if (rootRef.current === null) return;

        const hasInlineHeightOrMaxHeight = (element: HTMLElement) => {
            if (!element) return false;
            return element.style.height !== '' || element.style.maxHeight !== '';
        };

        // calculate wrapper width & height
        const wrapperWidth = rootRef.current.parentElement?.offsetWidth || 0;
        if (rootRef.current && wrapperWidth > 0 && rootWidth.current === 0) {
            rootWidth.current = wrapperWidth;
            rootRef.current.style.width = wrapperWidth + 'px';
 
            // height
            const wrapperHeight = rootRef.current.parentElement?.offsetHeight || 0;
            if (hasInlineHeightOrMaxHeight(rootRef.current.parentElement) && wrapperHeight > 0) {
                rootRef.current.style.height = wrapperHeight + 'px';
            }
            
        }
    }


    function tableGridInit() {

        //
        if (tableGridRef.current === null) return;

        const { forwardFillTotal, list: cellsList } = getCells();
        const tableGridEl: any = tableGridRef.current;
        let _curCellMinWidth: number = CELL_MIN_W;
        let _curColCount: number = FILL_BLANK_DATE_DISABLD ? days[month] : 7 * cellsList.length;


        if (appearanceMode === 'week') {
            _curColCount = 7;
        }

        //****************
        // STEP 1-1: 
        //****************
        // calculate min width (MODE: WEEK)
        //--------------
        if (appearanceMode === 'week') {
            const tableMaxWidth = tableGridEl.clientWidth;
            const tableHeaderTitleWidth = tableGridEl.querySelector('.custom-event-tl-table__cell-cushion-headertitle').clientWidth;
            const tableDividerWidth = tableGridEl.querySelector('.custom-event-tl-table__timeline-divider').clientWidth;
            const tableBorderWidth = 4;
            const scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;

            _curCellMinWidth = scrollMaxWidth / 7;
            _curColCount = 7;

            // header
            tableGridEl.querySelectorAll('.custom-event-tl-table__cell-cushion-headercontent__container, .custom-event-tl-table__cell-cushion-content').forEach((node: HTMLDivElement) => {
                node.style.width = _curCellMinWidth + 'px';
            });


        }



        //****************
        // STEP 1-2: 
        //****************
        // calculate min width (MODE: MONTH)
        //--------------
        const cellMinWidth = _curCellMinWidth;
        const colCount = _curColCount;
        const scrollableMinWidth = cellMinWidth * colCount;


        //****************
        // STEP 1-3: 
        //****************
        // initialize "header & main" cells
        //--------------
        const headerThContentContainers: any = tableGridEl.querySelector('.custom-event-tl-table__datagrid-header__content tbody').getElementsByTagName('th');
        for (let i = 0; i < headerThContentContainers.length; i++) {
            const curHeaderThContent = headerThContentContainers[i].querySelector('.custom-event-tl-table__cell-cushion-headercontent');
            if (curHeaderThContent !== null) curHeaderThContent.style.width = _curCellMinWidth + 'px';
        }


        const mainTdContentContainers: any = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__content tbody').getElementsByTagName('td');
        for (let i = 0; i < mainTdContentContainers.length; i++) {
            const curHeaderThContent = mainTdContentContainers[i].querySelector('.custom-event-tl-table__cell-cushion-content');
            if (curHeaderThContent !== null) curHeaderThContent.style.width = _curCellMinWidth + 'px';
        }

        const mainTdContentCols: any = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__content colgroup').getElementsByTagName('col')
        for (let i = 0; i < mainTdContentCols.length; i++) {
            mainTdContentCols[i].style.minWidth = _curCellMinWidth + 'px';
        }


        //****************
        // STEP 2: 
        //****************    
        // initialize scrollable wrapper (width)
        //--------------
        const _scrollableWrapper: HTMLElement[] = tableGridEl.querySelectorAll('.custom-event-tl-table__scroller-harness');
        [].slice.call(_scrollableWrapper).forEach((el: any) => {
            const scrollType = el.dataset.scroll;

            if (appearanceMode === 'week') {
                el.classList.add('custom-event-tl-table__scroller-harness--hideX');
            }
            if (appearanceMode === 'month') {
                el.classList.remove('custom-event-tl-table__scroller-harness--hideX');
            }

            if (scrollType !== 'list') {
                const _content = el.querySelector('.custom-event-tl-table__scroller');
                const tableMaxWidth = tableGridEl.clientWidth;
                const tableHeaderTitleWidth = tableGridEl.querySelector('.custom-event-tl-table__cell-cushion-headertitle').clientWidth;
                const tableDividerWidth = tableGridEl.querySelector('.custom-event-tl-table__timeline-divider').clientWidth;
                const tableBorderWidth = 4;
                const scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;

                el.dataset.width = scrollMaxWidth;
                el.style.maxWidth = el.dataset.width + 'px';
                _content.style.minWidth = scrollableMinWidth + 'px';

            }
        });


        //****************
        // STEP 3: 
        //****************
        // initialize cell width
        //--------------
        const tdElementMaxWidth: number = typeof mainTdContentContainers[0] === 'undefined' ? 0 : parseFloat(window.getComputedStyle(mainTdContentContainers[0].querySelector('.custom-event-tl-table__cell-cushion-content')).maxWidth);


        if (Array.isArray(eventsValue) && eventsValue.length > 0) {

            for (let i = 0; i < headerThContentContainers.length; i++) {

                const curHeaderThContent = headerThContentContainers[i].querySelector('.custom-event-tl-table__cell-cushion-headercontent');
                const curHeaderThContentMaxWidth = parseFloat(window.getComputedStyle(curHeaderThContent).width);
                const targetElement = headerThContentContainers[i].offsetWidth > mainTdContentContainers[i].offsetWidth ? headerThContentContainers[i] : mainTdContentContainers[i];
                let tdOwidth = parseFloat(window.getComputedStyle(targetElement).width);


                // check td max width
                if (tdElementMaxWidth > 0 && tdOwidth > tdElementMaxWidth) {
                    tdOwidth = tdElementMaxWidth;
                }

                // check header th max width
                if (tdElementMaxWidth > 0 && tdElementMaxWidth < curHeaderThContentMaxWidth) {
                    tdOwidth = curHeaderThContentMaxWidth;
                }

                // Prevent the width from being +1 each time it is initialized
                tdOwidth = tdOwidth - 1;


                headerThContentContainers[i].querySelector('.custom-event-tl-table__cell-cushion-headercontent').style.width = tdOwidth + 'px';
                mainTdContentCols[i].style.minWidth = tdOwidth + 'px';


            }
        }


        //****************
        // STEP 4: 
        //****************    
        // initialize max width of table content
        //--------------
        if (scrollBodyRef.current !== null && scrollHeaderRef.current !== null) {
            const tableContentWidth = window.getComputedStyle(tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__content')).width;
            const scrollBodyEl: any = scrollBodyRef.current;
            const scrollHeaderEl: any = scrollHeaderRef.current;

            scrollBodyEl.style.width = tableContentWidth;
            scrollHeaderEl.style.width = tableContentWidth;
            scrollBodyEl.dataset.width = parseFloat(tableContentWidth);
            scrollHeaderEl.dataset.width = parseFloat(tableContentWidth);

            //
            const tableWrapperMaxWidthLatest = tableGridEl.clientWidth;
            if (tableWrapperMaxWidthLatest > parseFloat(tableContentWidth)) {
                tableGridEl.querySelector('.custom-event-tl-table__timeline-table').style.width = tableContentWidth;
            }


        }



        //****************
        // STEP 5: 
        //****************
        // initialize cell height
        //--------------
        tableGridInitHeadertitle();

        //****************
        // STEP 6: 
        //****************
        //initialize scrollable wrapper (height)
        //--------------
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



        //****************
        // STEP 7: 
        //****************
        // display wrapper
        //--------------
        tableGridEl.classList.remove('invisible');

        //****************
        // STEP 1-1: 
        //****************
        // calculate min width (MODE: WEEK)
        //--------------
        if (appearanceMode === 'week') {
            const tableMaxWidth = tableGridEl.clientWidth;
            const tableHeaderTitleWidth = tableGridEl.querySelector('.custom-event-tl-table__cell-cushion-headertitle').clientWidth;
            const tableDividerWidth = tableGridEl.querySelector('.custom-event-tl-table__timeline-divider').clientWidth;
            const tableBorderWidth = 4;
            const scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;

            _curCellMinWidth = scrollMaxWidth / 7;
            _curColCount = 7;

            // header content
            tableGridEl.querySelectorAll('.custom-event-tl-table__cell-cushion-headercontent__container, .custom-event-tl-table__cell-cushion-headercontent').forEach((node: HTMLDivElement) => {
                node.style.width = _curCellMinWidth + 'px';
            });

            // main content
            tableGridEl.querySelectorAll('.custom-event-tl-table__cell-cushion-content').forEach((node: HTMLDivElement) => {
                node.style.width = _curCellMinWidth + 'px';
            });

        }

    }


    function tableGridReset() {
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;


        // initialize scrollable wrapper (width & height)
        //--------------
        const _scrollableWrapper = tableGridEl.querySelectorAll('.custom-event-tl-table__scroller-harness');
        [].slice.call(_scrollableWrapper).forEach((el: any) => {

            const _content = el.querySelector('.custom-event-tl-table__scroller');
            el.removeAttribute('data-width');
            el.removeAttribute('style');
            _content.removeAttribute('style');
        });


        // initialize cell height
        //--------------
        const headerTitleTrElements = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__title tbody').getElementsByTagName('tr');
        const trElements = tableGridEl.querySelector('.custom-event-tl-table__datagrid-body__content tbody').getElementsByTagName('tr');

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

        const { forwardFillTotal, list: cellsList } = getCells();
        if (typeof appearanceWeekTmpl === 'function') {
            setDisplayWeekForHeader([cellsList.at(0).dateInfo[0].date, cellsList.at(-1).dateInfo[0].date]);
        } else {
            setDisplayWeekForHeader([formatToEnglishMonthDay(cellsList.at(0).dateInfo[0].date), formatToEnglishMonthDay(cellsList.at(-1).dateInfo[0].date)]);
        }

    }, [weekOffset]);

    useEffect(() => {

        // update events value
        if (Array.isArray(eventsValue) && eventsValue.length > 0) setOrginalData(eventsValue);

        // update current today
        if (typeof customTodayDate !== 'undefined' && isValidDate(customTodayDate)) {
            const _customNow = new Date(customTodayDate);
            setTodayDate(_customNow);
        }

        // Call a function when the list has been rendered completely
        onListRenderComplete?.();

    }, [eventsValue, customTodayDate, appearanceMode]);



    useEffect(() => {


        // calculate wrapper width (!!!FIRST!!!)
        //--------------
        outerWrapperInit();

        // !!!Please do not use dependencies
        //--------------
        return () => {

            // reset table grid
            tableGridReset();

            // reset selection area
            setSelectedCells([]);
            setCopiedCells(null);
        }

    }, []);
    return (
        <>

            <div
                ref={rootRef}
                className="custom-event-tl__outerwrapper"
            >

                {/*/////////////////////////////////////////////////// */}
                {/*//////////////////// Calendar //////////////////// */}
                {/*////////////////////////////////////////////////// */}

                <div className={combinedCls(
                    `custom-event-tl__wrapper custom-event-tl__wrapper--${appearanceMode}`,
                    calendarWrapperClassName
                )}>

                    {/*++++++++++++++++ MAIN ++++++++++++++++*/}
                    <div className="custom-event-tl__header bg-body-tertiary">
                        <button tabIndex={-1} type="button" className="custom-event-tl__btn custom-event-tl__btn--prev" onClick={handlePrevChange}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#000" />
                            </svg>
                        </button>

                        {/* //########## MODE: WEEK ############# */}
                        {appearanceMode === 'week' ? <>
                            <div className="custom-event-tl__header__info">
                                {typeof appearanceWeekTmpl === 'function' ? <>{appearanceWeekTmpl(displayWeekForHeader[0], displayWeekForHeader[1])}</> : <>{displayWeekForHeader[0]} - {displayWeekForHeader[1]}</>}
                            </div>
                        </> : null}
                        {/* //########## /MODE: WEEK ############# */}


                        {/* //########## MODE: MONTH ############# */}
                        {appearanceMode === 'month' ? <>
                            <div className="custom-event-tl__header__btns">
                                <button tabIndex={-1} type="button" className={`custom-event-tl__btn ${winMonth ? 'active' : ''}`} onClick={handleShowWinMonth}>
                                    {MONTHS[month]}
                                    <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                                </button>
                                <button tabIndex={-1} type="button" className={`custom-event-tl__btn ${winYear ? 'active' : ''}`} onClick={handleShowWinYear}>
                                    {year}
                                    <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                                </button>
                            </div>
                        </> : null}
                        {/* //########## /MODE: MONTH ############# */}



                        <button tabIndex={-1} type="button" className="custom-event-tl__btn custom-event-tl__btn--next" onClick={handleNextChange}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#000" />
                            </svg>
                        </button>
                    </div>



                    <div className="custom-event-tl__body">


                        <div className="custom-event-tl__row">
                            {/* day */}

                            {/* /day */}
                        </div>

                    </div>
                    {/*++++++++++++++++ /MAIN ++++++++++++++++*/}


                    {/*++++++++++++++++ MONTH SELECTION TAB ++++++++++++++++*/}
                    <div className={`custom-event-tl__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winMonth ? 'active' : ''}`}>
                        <div className="custom-event-tl__month-container">
                            {MONTHS_FULL.map((month, index) => {
                                return <div
                                    data-month={padZero(index + 1)}
                                    className={`custom-event-tl__month ${selectedMonth === index ? ' selected' : ''}`}
                                    key={month + index}
                                    onClick={() => { handleMonthChange(index) }}
                                >{month}</div>
                            })}
                        </div>
                    </div>
                    {/*++++++++++++++++ /MONTH SELECTION TAB ++++++++++++++++*/}

                    {/*++++++++++++++++ YEAR SELECTION TAB ++++++++++++++++*/}
                    <div className={`custom-event-tl__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winYear ? 'active' : ''}`}>
                        <div className="custom-event-tl__year-container bg-body-tertiary">
                            {yearsArray.map((year, index) => {
                                return <div
                                    data-year={year}
                                    className={`custom-event-tl__year ${selectedYear === year ? ' selected' : ''}`}
                                    key={year + index}
                                    onClick={() => { handleYearChange(year) }}
                                >{year}</div>
                            })}
                        </div>

                    </div>
                    {/*++++++++++++++++ /YEAR SELECTION TAB ++++++++++++++++*/}



                    {/*++++++++++++++++ TODAY SELECTION TAB ++++++++++++++++*/}
                    <div className="custom-event-tl__today-wrapper p-2">
                        <button
                            tabIndex={-1}
                            type="button"
                            className="custom-event-tl__btn custom-event-tl__btn--today"
                            onClick={handleTodayChange}
                        >
                            {langToday || 'Today'}
                        </button>

                        {appearanceToggle ? <>
                            <button
                                tabIndex={-1}
                                type="button"
                                className={`custom-event-tl__btn custom-event-tl__btn--appearance ${appearanceMode === 'month' ? 'active' : ''}`}
                                data-mode="month"
                                onClick={handleAppearanceChange}
                            >
                                {langAppearanceLabelMonth || 'Month'}
                            </button>
                            <button
                                tabIndex={-1}
                                type="button"
                                className={`custom-event-tl__btn custom-event-tl__btn--appearance ${appearanceMode === 'week' ? 'active' : ''}`}
                                data-mode="week"
                                onClick={handleAppearanceChange}
                            >
                                {langAppearanceLabelWeek || 'Week'}
                            </button>
                        </> : null}

                    </div>
                    {/*++++++++++++++++ /TODAY SELECTION TAB ++++++++++++++++*/}


                </div>{/* /.custom-event-tl__wrapper */}



                {/*/////////////////////////////////////////////////// */}
                {/*//////////////////// Table Grid //////////////////// */}
                {/*////////////////////////////////////////////////// */}
                {orginalData.length === 0 ? null : <>
                    <div
                        ref={tableGridRef}
                        className={combinedCls(
                            `custom-event-tl-table__timeline-table__wrapper custom-event-tl-table__timeline-table__wrapper--${appearanceMode} invisible`,
                            tableWrapperClassName
                        )}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                            onKeyPressed?.(e, selectedCells);

                            // Copy & Paste
                            handleWrapperKeyDown(e);
                        }}
                        tabIndex={-1} // require "tabIndex" attribute
                    >
                        <table role="grid" className={combinedCls(
                            "custom-event-tl-table__timeline-table",
                            tableClassName
                        )}>
                            <colgroup>
                                <col className="custom-event-tl-table__datagrid-header" />
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
                                        <div className="custom-event-tl-table__timeline-header custom-event-tl-table__timeline-headertitle">

                                            <table role="presentation" className="custom-event-tl-table__datagrid-header__title">
                                                <colgroup>
                                                    <col />
                                                </colgroup>
                                                <thead role="presentation">
                                                    <tr role="row">
                                                        <th role="columnheader">
                                                            <div className="custom-event-tl-table__cell-cushion custom-event-tl-table__cell-cushion-headertitle">
                                                                {tableListSectionTitle || ''}
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </table>

                                        </div>
                                        {/*<!--///// /HEADER LEFT //////-->*/}



                                    </th>
                                    <th role="presentation" className="custom-event-tl-table__timeline-divider"><div></div></th>
                                    <th role="presentation">
                                        <div
                                            ref={scrollHeaderRef}
                                            className="custom-event-tl-table__scroller-harness custom-event-tl-table__scroller-harness--hide"
                                            data-scroll="header"
                                            onScroll={syncTableScrollHeader}
                                        >
                                            <div className="custom-event-tl-table__scroller">

                                                {/*<!--///// HEADER RIGHT //////-->*/}
                                                <div className="custom-event-tl-table__timeline-header">

                                                    <table className="custom-event-tl-table__datagrid-header__content custom-event-tl-table__scrollgrid-sync-table" >
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
                                <tr role="presentation" className="custom-event-tl-table__list-section">
                                    <td
                                        role="presentation"
                                        className={combinedCls(
                                            tableListStartClassName
                                        )}

                                    >

                                        <div
                                            ref={scrollListRef}
                                            className={combinedCls(
                                                'custom-event-tl-table__scroller-harness',
                                                {
                                                    'autoscroll': AUTO_SCROLL
                                                }
                                            )}
                                            data-scroll="list"
                                            onScroll={syncTableScrollList}
                                        >
                                            <div className="custom-event-tl-table__scroller">

                                                {/*<!--///// RESOURCE LEFT //////-->*/}
                                                <table role="presentation" className="custom-event-tl-table__datagrid-body__title custom-event-tl-table__scrollgrid-sync-table">
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
                                            'custom-event-tl-table__timeline-divider',
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
                                                'custom-event-tl-table__scroller-harness',
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
                                            <div className="custom-event-tl-table__scroller">
                                                {/*<!--///// RESOURCE RIGHT //////-->*/}
                                                <div className="custom-event-tl-table__timeline-body">
                                                    <table
                                                        className="custom-event-tl-table__datagrid-body__content custom-event-tl-table__scrollgrid-sync-table"
                                                        /* Drag to activate the selection area */
                                                        onMouseLeave={multipleCells ? handleTableMainMouseUp : undefined}
                                                        onMouseUp={multipleCells ? handleTableMainMouseUp : undefined}

                                                    >
                                                        <colgroup>
                                                            {generateColUi()}
                                                        </colgroup>
                                                        <tbody>
                                                            {/*<!-- per row -->*/}
                                                            {orginalData.map((item: any, i: number) => {

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

                    </div>{/* /.custom-event-tl-table__timeline-table__wrapper */}


                </>}
            </div>



            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Modal //////////////////// */}
            {/*////////////////////////////////////////////////// */}

            {/*++++++++++++++++ MODAL ++++++++++++++++*/}
            {EVENTS_ENABLED ? <>

                {/*<!-- DELETE -->*/}
                <ModalDialog
                    ref={modalDeleteHandleRef}
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
                            // set temporary date
                            setTempDate('');
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {
                        onModalDeleteEvent?.(queryItemObj(), closewin, () => {

                            // initialize table grid
                            setTimeout(() => {
                                tableGridInitHeadertitle();
                            }, 500);
                        });
                    }}
                >
                    {modalDeleteContent || 'Are you sure?'}

                </ModalDialog>
                {/*<!-- /DELETE -->*/}


                {/*<!-- EDIT -->*/}
                <ModalDialog
                    ref={modalEditHandleRef}
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
                            // set temporary date
                            setTempDate('');
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {

                        onModalEditEvent?.(queryItemObj(), closewin, () => {
                            // initialize table grid
                            setTimeout(() => {
                                tableGridInitHeadertitle();
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
                    id={`custom-event-tl-table__cell-tooltipwrapper-${idRes}`}
                    className={`custom-event-tl-table__cell-tooltipwrapper d-inline-block ${isShowTableTooltip ? 'active' : ''}`}
                    role="tooltip"
                    data-microtip-position={tableTooltipDirection || 'bottom'}
                    data-microtip-size={tableTooltipSize || 'auto'}
                    style={{ display: 'none' }}
                >
                    <div className="custom-event-tl-table__cell-tooltipcontent">
                        {tableTooltipContent}
                    </div>
                </div>
            </RootPortal>


        </>
    )
};


export default EventCalendarTimeline;