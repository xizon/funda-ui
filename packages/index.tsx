import React, { useId, useState, useEffect, useMemo, useRef, useCallback } from 'react';

import ModalDialog from 'funda-modaldialog';

import { getAbsolutePositionOfStage } from './utils/get-element-property';


interface EventsValueConfig {
    id: string | number;
    date: string,
    time: string,
    data: string,
    dataTooltip?: string,
    eventStyles?: React.CSSProperties;
}

interface TimelineValueConfig {
    listSection: string;
    eventSources: EventsValueConfig[]
}


type EventCalendarTimelineProps = {
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
    onModalEditOpen?: (currentData: any) => void;
    onModalEditClose?: (currentData: any) => void;
    onModalDeleteOpen?: (currentData: any) => void;
    onModalDeleteClose?: (currentData: any) => void;
    onModalEditEvent?: (currentData: any, closewin: any) => void;
    onModalDeleteEvent?: (currentData: any, closewin: any) => void;
    

    // table
    tableListSectionTitle?: string | React.ReactNode;
    tableCellMinWidth?: number;

    // tooltip
    tableTooltipDirection?: string;
    tableTooltipOffset?: number;
    tableTooltipSize?: string;
    tableTooltipDisabled?: boolean;

    /** -- */
    id?: string;   
}


const EventCalendarTimeline = (props: EventCalendarTimelineProps) => {
    const {
        customTodayDate,
        eventsValue,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,
        iconRemove,
        cellCloseBtnClassName,
        cellCloseBtnLabel,
        forwardAndBackFillDisabled,
        draggable,
        showWeek,
        autoScroll,
        onChangeDate,

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
        tableListSectionTitle,
        tableCellMinWidth,

        //
        tableTooltipDirection,
        tableTooltipOffset,
        tableTooltipSize,
        tableTooltipDisabled,

        //
        id
    } = props;

    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [val, setVal] = useState<TimelineValueConfig[]>([]);

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
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);



    // table grid
    const AUTO_SCROLL = autoScroll || false;
    const SHOW_WEEK = showWeek || false;
    const BODY_DRAG = draggable || false;
    const CELL_MIN_W = typeof tableCellMinWidth === 'undefined' ? (SHOW_WEEK ? 100 : 50) : tableCellMinWidth;
    const tableGridRef = useRef<HTMLDivElement>(null);
    const scrollHeaderRef = useRef(null);
    const scrollBodyRef = useRef(null);
    const scrollListRef = useRef(null);

    const CELL_TOOLTIP_POS_OFFSET = typeof tableTooltipOffset === 'undefined' ? 10 : tableTooltipOffset;
    const tableTooltipModalRef = useRef<any>(null);
    const [isShowTableTooltip, setIsShowTableTooltip] = useState<boolean>(false);
    const [tableTooltipContent, setTableTooltipContent] = useState<any>(null);


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
        const allDays = Array(days[currentMonth] + (currentStartDay - 1)).fill(null).map((_: any, i: number) => i ); // [0,1,..,30,31]
        const rows = Math.ceil(allDays.length / 7); // 5
       
        return Array.from({length: rows}).fill(null).map((_: any, i: number) => {
            const _col = allDays.slice(i * 7, (i+1) * 7);
            
            // back fill
            const backFillArr: null[] = [];
            for (let k = 0; k < 7-_col.length; k++) {
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
        draggedObj.classList.add( 'dragging' );

        //
        startX = e.pageX - draggedObj.offsetLeft;
        scrollLeft = draggedObj.scrollLeft;
      
        
    }, []);

    const handleTableDragEnd = useCallback((e: any) => {
        if (draggedObj === null) return;

        mouseDown = false;
        draggedObj.classList.remove( 'dragging' );
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
        const _tableTooltipModalRef: any = document.querySelector(`#e-cal-tl-table__cell-tooltipwrapper-${idRes}`);
        const _triggerRef: any = e.target;

        if (_tableTooltipModalRef !== null && _triggerRef !== null) {

            const {x, y, width, height} = getAbsolutePositionOfStage(_triggerRef);

            let pos = _tableTooltipModalRef.dataset.microtipPosition;
            if (typeof pos === 'undefined') pos = 'top';
       
            // TOP
            //
            if (pos.indexOf('top') >= 0) {
                _tableTooltipModalRef.style.left = x + (width/2) + 'px';
                _tableTooltipModalRef.style.top = y - height - CELL_TOOLTIP_POS_OFFSET + 'px';
            }

       
            // BOTTOM
            //
            if (pos.indexOf('bottom') >= 0) {
                _tableTooltipModalRef.style.left = x + (width/2) + 'px';
                _tableTooltipModalRef.style.top = y + height + CELL_TOOLTIP_POS_OFFSET + 'px';
            }



            // Determine whether it exceeds the far right or left side of the screen
            const _modalContent = _tableTooltipModalRef.querySelector('.e-cal-tl-table__cell-tooltipcontent');
            const _modalBox = _modalContent.getBoundingClientRect();
            if (typeof _modalContent.dataset.offset === 'undefined') {

                if (_modalBox.right > window.innerWidth) {
                    const _modalOffsetPosition = _modalBox.right - window.innerWidth + CELL_TOOLTIP_POS_OFFSET;
                    _modalContent.dataset.offset = _modalOffsetPosition;
                    _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                    // console.log('_modalPosition: ', _modalOffsetPosition)
                }


                if (_modalBox.left < 0) {
                    const _modalOffsetPosition = Math.abs(_modalBox.left) + CELL_TOOLTIP_POS_OFFSET;
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

    function handleTableTooltipTouchStart(e: any) {
        hideTableTooltip();
    }




    // ================================================================
    // Calendar
    // ================================================================

    function getCalendarDate(v: string, padZeroEnabled: boolean = true) {
        if (typeof v === 'undefined') return '';


        // YYYY-MM-DD
        const date = typeof v === 'string' ? new Date(v) : v;
        const padZero = (num: number): string => {
            if (padZeroEnabled) {
                return num < 10 ? '0' + num : num.toString();
            } else {
                return num.toString();
            }

        };
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1);
        const day = padZero(date.getDate());
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        const res = `${year}-${month}-${day}`;
        return res;
    }


    function setTodayDate(inputDate: Date) {
        setDay(inputDate.getDate());
        setMonth(inputDate.getMonth());
        setYear(inputDate.getFullYear());
        setStartDay(getStartDayOfMonth(inputDate));

        // update selector
        setSelectedMonth(inputDate.getMonth());
        setSelectedYear(inputDate.getFullYear());

        // table grid
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


            // reset scroll position
            resetTableScrollPosition();

            return _date;
        });


    }

    function handleNextChange() {
        setDate((prevState) => {
            const _date = new Date(year, month + 1, day);

            // update
            setSelectedMonth(_date.getMonth());
            setSelectedYear(_date.getFullYear());


            // reset scroll position
            resetTableScrollPosition();


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

        // reset scroll position
        resetTableScrollPosition();

    }


    function handleMonthChange(currentIndex: number) {
        setSelectedMonth(currentIndex);
        setMonth(currentIndex);
        setDate(new Date(year, currentIndex, day));

        // close win
        setWinMonth(false);

        // reset scroll position
        resetTableScrollPosition();
        
    }


    function handleTodayChange() {
        setSelectedMonth(now.getMonth());
        setSelectedYear(now.getFullYear());
        setTodayDate(now);

        // reset scroll position
        resetTableScrollPosition();

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
                <tr key={i} role="row">
                    <td role="gridcell" data-resource-index={i} className="e-cal-tl-table__datagrid-cell">
                        <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-title" dangerouslySetInnerHTML={{
                            __html: item.listSection
                        }} />
                    </td>
                </tr>
            )

        });
    }


    function generateDaysUi(eventSourcesData: any[] = [], listSectionData: any = '', showEvents: boolean = false) {

        if (forwardAndBackFillDisabled) {
            //#######################
               
            // colIndex
            let colIndex = 0;

            return getCells().map((item: any, j: number) => {

                return item.col.map((dayIndex: number | null, i: number) => {

                    colIndex++;

                    const d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
                    const _currentData = eventSourcesData.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${d}`));
                    const isLastCol = colIndex === 7 * getCells().length;

                    // date
                    let _dateShow = d > 0 ? `${year}-${month+1}-${d}` : '';

                    // days
                    //------
                    if (!showEvents) {

                        return d > 0 && d <= days[month] ? (
                            <th
                                className={`e-cal-tl-table__cell-cushion-headercontent__container ${d > 0 ? '' : 'empty'} ${d === now.getDate() ? 'today' : ''} ${d === day ? 'selected' : ''} ${isLastCol ? 'last-cell' : ''}`}
                                key={"col" + i}
                                data-index={colIndex-1}
                                data-datagrid-col={colIndex-1}
                                colSpan={1}
                                data-date={getCalendarDate(_dateShow)}
                                data-week={i}
                                style={{minWidth: CELL_MIN_W + 'px'}}
                                onClick={(e: React.MouseEvent) => {


                                    if (_currentData.length > 0) {
                                        _currentData[0].rowData = listSectionData;
                                    }
    
        
                                    if (d > 0) {
                                        handleDayChange(e, d);

                                        onChangeDate?.(e, _currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                        } : _currentData[0]);
        
                                        if (EVENTS_ENABLED) {
                                            setShowEdit(true);
                                            onModalEditOpen?.(_currentData.length === 0 ? {
                                                rowData: listSectionData,
                                                id: 0,
                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                            } : _currentData[0]);
                                        }
                                    }
                                }}
                            >
        
        
                                {/* day */}
                                {d > 0 ? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent" style={{width: (CELL_MIN_W - 1) + 'px'}}>
                                        {d}
                                        {SHOW_WEEK ? <span dangerouslySetInnerHTML={{
                                            __html: WEEK[i]
                                        }} />: null}
                                    </div>
                                </> : null}
        
                            
                            </th>
                        ) : null;
                    }
                    

                    // events
                    //------
                    if (showEvents) {

                        const _eventContentTooltip = _currentData.length > 0 ? (
                            typeof _currentData[0] !== 'undefined' ? (typeof _currentData[0].dataTooltip === 'undefined' ? '' : <>
                                <div
                                    className="e-cal-tl__day__event-tooltipcontent"
                                    dangerouslySetInnerHTML={{
                                        __html: _currentData[0].dataTooltip 
                                    }}
                                ></div>
                            </>) : ''
                        ) : '';

                        const _eventContent = _currentData.length > 0 ? <>
                            <div
                                className="e-cal-tl__day__event"
                                style={typeof _currentData[0] !== 'undefined' && (_currentData[0] as any).eventStyles !== 'undefined' ? _currentData[0].eventStyles : {}}
                                dangerouslySetInnerHTML={{
                                    __html: _currentData[0].data
                                }}
                            ></div>

                            <div
                                className={`e-cal-tl__day__eventdel ${cellCloseBtnClassName || ''}`}
                            >
                                <a href="#" tabIndex={-1} className="align-middle" onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowDelete(true);

                                    onModalDeleteOpen?.(_currentData.length === 0 ? {
                                        rowData: listSectionData,
                                        id: 0,
                                        date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                    } : _currentData[0]);
                                }}>
                                    {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                                    {cellCloseBtnLabel || ''}
                                </a>

                            </div>


                        </> : '';

                        



                        return d > 0 && d <= days[month] ? (
                            <td
                                className={`e-cal-tl-table__cell-cushion-content__container ${eventSourcesData && _currentData.length > 0 ? 'has-event' : ''} ${d > 0 ? '' : 'empty'} ${d === now.getDate() ? 'today' : ''} ${d === day ? 'selected' : ''} ${isLastCol ? 'last-cell' : ''}`}
                                key={"col" + i}
                                data-index={colIndex-1}
                                colSpan={1}
                                data-date={getCalendarDate(_dateShow)}
                                data-week={i}
                                onClick={(e: React.MouseEvent) => {

                                    if (_currentData.length > 0) {
                                        _currentData[0].rowData = listSectionData;
                                    }
    
        
                                    if (d > 0) {
                                        handleDayChange(e, d);
                                        
                
                                        onChangeDate?.(e, _currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                        } : _currentData[0]);
        
                                        if (EVENTS_ENABLED) {
                                            setShowEdit(true);
                                            onModalEditOpen?.(_currentData.length === 0 ? {
                                                rowData: listSectionData,
                                                id: 0,
                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                            } : _currentData[0]);
                                        }
                                    }
                                }}
                            >
        
                                {/* day */}
                                {d > 0 ? <>
                                    <div 
                                        className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content e-cal-tl-table__cell-tooltiptrigger"                 
                                        onMouseEnter={_eventContentTooltip === '' ? () => {} : ( tableTooltipDisabled ? () => {} :  (_eventContent !== '' ? (e: React.MouseEvent) => {handleTableTooltipMouseEnter(e, _eventContentTooltip)} : () => {}) )}
                                        onMouseLeave={_eventContentTooltip === '' ? () => {} : ( tableTooltipDisabled ? () => {} :  (_eventContent !== '' ? handleTableTooltipMouseLeave : () => {}) )}
                                    >
                                        {_eventContent}
                                    </div>
                                </> : null}
        
                            </td>
                        ) : null;

                    }     

                
                });

            })

            //#######################
            

        } else {
            //#######################
                
            // colIndex
            let colIndex = 0;

            return getCells().map((item: any, j: number) => {

                const isFirstRow = j === 0;
                const isLastRow = j === getCells().length-1;
    
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
                    let _dateShow = d > 0 ? `${year}-${month+1}-${d}` : '';

                    if (isFirstRow && __forwardFillNum && _dateShow === '') {
                        if (month + 1 === 1) {
                            _dateShow = `${year-1}-12-${__forwardFillNum[i]}`;
                        } else {
                            _dateShow = `${year}-${month}-${__forwardFillNum[i]}`;
                        }
                    }

                    if (isLastRow && __backFillNum && _dateShow === '') {
                        if (month + 1 === 12) {
                            _dateShow = `${year+1}-1-${__backFillNum[i-item.col.filter(Boolean).length]}`;
                        } else {
                            _dateShow = `${year}-${month + 2}-${__backFillNum[i-item.col.filter(Boolean).length]}`;
                        }
                    }                   
                    

                    // days
                    //------
                    if (!showEvents) {

                        return (
                            <th
                                className={`e-cal-tl-table__cell-cushion-headercontent__container ${d > 0 ? '' : 'empty'} ${d === now.getDate() ? 'today' : ''} ${d === day ? 'selected' : ''} ${isLastCol ? 'last-cell' : ''}`}
                                key={"col" + i}
                                data-index={colIndex-1}
                                data-datagrid-col={colIndex-1}
                                colSpan={1}
                                data-date={getCalendarDate(_dateShow)}
                                data-week={i}
                                style={{minWidth: CELL_MIN_W + 'px'}}
                                onClick={(e: React.MouseEvent) => {

                                    if (_currentData.length > 0) {
                                        _currentData[0].rowData = listSectionData;
                                    }
    
        
                                    if (d > 0) {
                                        handleDayChange(e, d);
        
                                        onChangeDate?.(e, _currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                        } : _currentData[0]);
        
                                        if (EVENTS_ENABLED) {
                                            setShowEdit(true);
                                            onModalEditOpen?.(_currentData.length === 0 ? {
                                                rowData: listSectionData,
                                                id: 0,
                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                            } : _currentData[0]);
                                        }
                                    }
                                }}
                            >
        
                                {/* forward fill */}
                                {isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent disabled"  style={{width: (CELL_MIN_W - 1) + 'px'}}>
                                        {__forwardFillNum[i]}
                                    </div>
                                </> : null}
                            
        
                                {/* day */}
                                {d > 0 ? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent"  style={{width: (CELL_MIN_W - 1) + 'px'}}>
                                        {d}
                                    </div>
                                </> : null}
        
                                {/* back fill */}
                                {isLastRow && __backFillNum  && typeof __backFillNum[i-item.col.filter(Boolean).length] !== 'undefined'? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent disabled"  style={{width: (CELL_MIN_W - 1) + 'px'}}>
                                        {__backFillNum[i-item.col.filter(Boolean).length]}
                                    </div>
                                </> : null}
                            
                            </th>
                        );
                    }


                    // events
                    //------
                    if (showEvents) {


                        const _eventContentTooltip = _currentData.length > 0 ? (
                            typeof _currentData[0] !== 'undefined' ? (typeof _currentData[0].dataTooltip === 'undefined' ? '' : <>
                                <div
                                    className="e-cal-tl__day__event-tooltipcontent"
                                    dangerouslySetInnerHTML={{
                                        __html: _currentData[0].dataTooltip
                                    }}
                                ></div>
                            </>) : ''
                        ) : '';

                        const _eventContent = _currentData.length > 0 ? <>
                            <div
                                className="e-cal-tl__day__event"
                                style={typeof _currentData[0] !== 'undefined' && (_currentData[0] as any).eventStyles !== 'undefined' ? _currentData[0].eventStyles : {}}
                                dangerouslySetInnerHTML={{
                                    __html: _currentData[0].data
                                }}
                            ></div>

                            <div
                                className={`e-cal-tl__day__eventdel ${cellCloseBtnClassName || ''}`}
                            >
                                <a href="#" tabIndex={-1} className="align-middle" onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowDelete(true);

                                    onModalDeleteOpen?.(_currentData.length === 0 ? {
                                        rowData: listSectionData,
                                        id: 0,
                                        date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                    } : _currentData[0]);
                                }}>
                                    {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                                    {cellCloseBtnLabel || ''}
                                </a>

                            </div>


                        </> : '';



                        return (
                            <td
                                className={`e-cal-tl-table__cell-cushion-content__container ${_currentData.length > 0 ? 'has-event' : ''} ${d > 0 ? '' : 'empty'} ${d === now.getDate() ? 'today' : ''} ${d === day ? 'selected' : ''} ${isLastCol ? 'last-cell' : ''}`}
                                key={"col" + i}
                                data-index={colIndex-1}
                                colSpan={1}
                                data-date={getCalendarDate(_dateShow)}
                                data-week={i}
                                onClick={(e: React.MouseEvent) => {

                                    if (_currentData.length > 0) {
                                        _currentData[0].rowData = listSectionData;
                                    }
    
        
                                    if (d > 0) {
                                        handleDayChange(e, d);
        
                                        onChangeDate?.(e, _currentData.length === 0 ? {
                                            rowData: listSectionData,
                                            id: 0,
                                            date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                        } : _currentData[0]);
        
                                        if (EVENTS_ENABLED) {
                                            setShowEdit(true);
                                            onModalEditOpen?.(_currentData.length === 0 ? {
                                                rowData: listSectionData,
                                                id: 0,
                                                date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                            } : _currentData[0]);
                                        }
                                    }
                                }}
                            >
        
                                {/* forward fill */}
                                {isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content disabled">
                                        &nbsp;
                                    </div>
                                </> : null}
                                
        
                                {/* day */}
                                {d > 0 ? <>
                                    <div 
                                        className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content e-cal-tl-table__cell-tooltiptrigger"                 
                                        onMouseEnter={_eventContentTooltip === '' ? () => {} : ( tableTooltipDisabled ? () => {} :  (_eventContent !== '' ? (e: React.MouseEvent) => {handleTableTooltipMouseEnter(e, _eventContentTooltip)} : () => {}) )}
                                        onMouseLeave={_eventContentTooltip === '' ? () => {} : ( tableTooltipDisabled ? () => {} :  (_eventContent !== '' ? handleTableTooltipMouseLeave : () => {}) )}
                                    >
                                        {_eventContent}
                                    </div>
                                </> : null}
        
                                {/* back fill */}
                                {isLastRow && __backFillNum  && typeof __backFillNum[i-item.col.filter(Boolean).length] !== 'undefined'? <>
                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content disabled">
                                        &nbsp;
                                    </div>
                                </> : null}
                                
        
                            </td>
                        );

                    }     

                
                });

            })

            //#######################
        }



    }

    function generateColUi() {

        if (forwardAndBackFillDisabled) {

            //#######################
            return Array.from({length: days[month]}).fill(0).map((item: any, i: number) => {
                return (
                    <col
                        key={"col-placeholder-" + i}
                        data-index={i}
                        data-datagrid-col={i}
                        style={{minWidth: CELL_MIN_W + 'px'}}
                        
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
                            data-index={colIndex-1}
                            data-datagrid-col={colIndex-1}
                            style={{minWidth: CELL_MIN_W + 'px'}}
                            
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


 
    function resetTableScrollPosition() {

        if (scrollListRef.current) (scrollListRef.current as any).scrollTop = 0;
        if (scrollBodyRef.current) (scrollBodyRef.current as any).scrollLeft = 0;

    }


    function tableGridInit() {
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;

       // calculate min width
        //--------------
        const cellMinWidth = CELL_MIN_W;
        const colCount = forwardAndBackFillDisabled ? days[month] : 7 * getCells().length;
        const scrollableMinWidth = cellMinWidth * colCount;


        // initialize scrollable wrapper
        //--------------
        const _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-tl-table__scroller-harness');
        [].slice.call(_scrollableWrapper).forEach((el: any) => {
            const scrollType = el.dataset.scroll;
            const oldHeight = el.clientHeight;

            if (scrollType !== 'list') {
                const _content = el.querySelector('.e-cal-tl-table__scroller');
                const tableMaxWidth = tableGridEl.clientWidth;
                const tableHeaderTitleWidth = tableGridEl.querySelector('.e-cal-tl-table__cell-cushion-headertitle').clientWidth;
                const tableDividerWidth = tableGridEl.querySelector('.e-cal-tl-table__timeline-divider').clientWidth;
                const tableBorderWidth = 4;
                const scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;

                
                el.dataset.width = scrollMaxWidth;
                el.style.maxWidth = el.dataset.width + 'px';
                _content.style.minWidth = scrollableMinWidth + 'px';

            }

            // initialize cell width
            const colElements: any = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content colgroup').getElementsByTagName('col')
            const tdElements: any = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content tbody').getElementsByTagName('td');


            if (tdElements.length > 0) {
                for (let i = 0; i < colElements.length; i++) {
                    const widerElement = colElements[i].offsetWidth > tdElements[i].offsetWidth ? colElements[i] : tdElements[i];
                    const tdOwidth = window.getComputedStyle(widerElement as HTMLElement).width;

                    [].slice.call(tableGridEl.querySelectorAll(`[data-datagrid-col="${i}"]`)).forEach((el: any) => {
                        el.style.minWidth = tdOwidth;
                    });

                }
            }


            // initialize table height
            if (scrollType !== 'header') {
                const tableMaxHeight = window.getComputedStyle(tableGridEl as HTMLElement).height;
                if (oldHeight > parseFloat(tableMaxHeight)) {
                    el.style.height = tableMaxHeight;
                }
            }

        });


        // display wrapper
        tableGridEl.classList.remove('invisible');

    }


    function tableGridReset() {
        if (tableGridRef.current === null) return;

        const tableGridEl: any = tableGridRef.current;
        const _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-tl-table__scroller-harness');
        [].slice.call(_scrollableWrapper).forEach((el: any) => {
            const _content = el.querySelector('.e-cal-tl-table__scroller');
            el.removeAttribute('data-width');
            el.removeAttribute('style');
            _content.removeAttribute('style');
        });

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

        // update events value
        if (Array.isArray(eventsValue)) setVal(eventsValue);
        
        // update current today
        if (typeof customTodayDate !== 'undefined') {
            const _customNow = new Date(customTodayDate);
            setTodayDate(_customNow);
        }




        // tooltip
        if (document.body !== null) {
            document.body.appendChild(tableTooltipModalRef.current);
        }



        window.removeEventListener('touchstart', handleTableTooltipTouchStart);
		window.addEventListener( 'touchstart', handleTableTooltipTouchStart);

        return () => {

            // table grid
            tableGridReset();
            
            // tooltip
            document.querySelector(`#e-cal-tl-table__cell-tooltipwrapper-${idRes}`)?.remove();
            window.removeEventListener('touchstart', handleTableTooltipTouchStart);
        }

    }, [eventsValue, customTodayDate]);



    return (
        <>
            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Calendar //////////////////// */}
            {/*////////////////////////////////////////////////// */}

            <div className="e-cal-tl__wrapper">

                {/*++++++++++++++++ MAIN ++++++++++++++++*/}
                <div className="e-cal-tl__header bg-body-tertiary">
                    <button tabIndex={-1} type="button" className="e-cal-tl__btn e-cal-tl__btn--prev" onClick={handlePrevChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#000" />
                        </svg>
                    </button>
                    <div className="e-cal-tl__header__btns">
                        <button tabIndex={-1} type="button" className={`e-cal-tl__btn ${winMonth ? 'active' : ''}`} onClick={handleShowWinMonth}>
                            {MONTHS[month]}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                        <button tabIndex={-1} type="button" className={`e-cal-tl__btn ${winYear ? 'active' : ''}`} onClick={handleShowWinYear}>
                            {year}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                    </div>
                    <button tabIndex={-1} type="button" className="e-cal-tl__btn e-cal-tl__btn--next" onClick={handleNextChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#000" />
                        </svg>
                    </button>
                </div>


                
                <div className="e-cal-tl__body">


                    <div className="e-cal-tl__row">

                     {/* day */}
                    {}

                     {/* /day */}
                     </div>
                    
                </div>
                {/*++++++++++++++++ /MAIN ++++++++++++++++*/}


                {/*++++++++++++++++ MONTH SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-tl__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winMonth ? 'active' : ''}`}>
                    <div className="e-cal-tl__month-container">
                        {MONTHS_FULL.map((month, index) => {
                            return <div className={`e-cal-tl__month ${selectedMonth === index ? ' selected' : ''}`} key={month + index} onClick={() => { handleMonthChange(index) }}>{month}</div>
                        })}
                    </div>
                </div>
                {/*++++++++++++++++ /MONTH SELECTION TAB ++++++++++++++++*/}

                {/*++++++++++++++++ YEAR SELECTION TAB ++++++++++++++++*/}
                <div className={`e-cal-tl__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ${winYear ? 'active' : ''}`}>
                    <div className="e-cal-tl__year-container bg-body-tertiary">
                        {yearsArray.map((year, index) => {
                            return <div className={`e-cal-tl__year ${selectedYear === year ? ' selected' : ''}`} key={year + index} onClick={() => { handleYearChange(year) }}>{year}</div>
                        })}
                    </div>

                </div>
                {/*++++++++++++++++ /YEAR SELECTION TAB ++++++++++++++++*/}



                {/*++++++++++++++++ TODAY SELECTION TAB ++++++++++++++++*/}
                <div className="e-cal-tl__today-wrapper p-2">
                    <button tabIndex={-1} type="button" className="e-cal-tl__btn e-cal-tl__btn--today" onClick={handleTodayChange}>
                        {langToday || 'Today'}
                    </button>
                </div>
                {/*++++++++++++++++ /TODAY SELECTION TAB ++++++++++++++++*/}


            </div>{/* /.e-cal-tl__wrapper */}



            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Table Grid //////////////////// */}
            {/*////////////////////////////////////////////////// */}
            <div ref={tableGridRef} className="e-cal-tl-table__timeline-table__wrapper invisible">
                <table role="grid" className="e-cal-tl-table__timeline-table">
                    <colgroup>
                        <col className="e-cal-tl-table__datagrid-header" />
                        <col />
                        <col />
                    </colgroup>
                    <thead role="rowgroup">
                        <tr role="presentation">
                            <th role="presentation">
                                {/*<!--///// HEADER LEFT //////-->*/}
                                <div className="e-cal-tl-table__timeline-header">

                                    <table role="presentation" className="e-cal-tl-table__datagrid-header__title">
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <thead role="presentation">
                                            <tr role="row">
                                                <th role="columnheader">
                                                    <div className="e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headertitle">
                                                        {tableListSectionTitle || ''}
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>

                                </div>
                                {/*<!--///// /HEADER LEFT //////-->*/}



                            </th>
                            <td role="presentation" className="e-cal-tl-table__timeline-divider"><div></div></td>
                            <th role="presentation">
                                <div ref={scrollHeaderRef} className="e-cal-tl-table__scroller-harness e-cal-tl-table__scroller-harness--hide" data-scroll="header" onScroll={syncTableScrollHeader}>
                                    <div className="e-cal-tl-table__scroller">

                                        {/*<!--///// HEADER RIGHT //////-->*/}
                                        <div className="e-cal-tl-table__timeline-header">

                                            <table className="e-cal-tl-table__datagrid-header__content e-cal-tl-table__scrollgrid-sync-table" >
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



                    <tbody role="rowgroup">
                        <tr role="presentation" className="e-cal-tl-table__list-section">
                            <td role="presentation">

                                <div ref={scrollListRef} className={`e-cal-tl-table__scroller-harness ${AUTO_SCROLL ? 'autoscroll' : ''}`} data-scroll="list" onScroll={syncTableScrollList}>
                                    <div className="e-cal-tl-table__scroller">

                                        {/*<!--///// RESOURCE LEFT //////-->*/}
                                        <table role="presentation" className="e-cal-tl-table__datagrid-body__title e-cal-tl-table__scrollgrid-sync-table">
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
                            <td role="presentation" className="e-cal-tl-table__timeline-divider"><div></div></td>
                            <td role="presentation">
 

                                <div ref={scrollBodyRef} className={`e-cal-tl-table__scroller-harness ${AUTO_SCROLL ? 'autoscroll' : ''}`} data-scroll="body" onScroll={syncTableScrollBody} onMouseMove={BODY_DRAG ? handleTableMove : () =>{}} onMouseDown={BODY_DRAG ? handleTableDragStart : () =>{}} onMouseUp={BODY_DRAG ? handleTableDragEnd : () =>{}} onMouseLeave={BODY_DRAG ? handleTableDragEnd : () =>{}}>
                                    <div className="e-cal-tl-table__scroller">
                                        {/*<!--///// RESOURCE RIGHT //////-->*/}
                                        <div className="e-cal-tl-table__timeline-body">
                                            <table className="e-cal-tl-table__datagrid-body__content e-cal-tl-table__scrollgrid-sync-table">
                                                <colgroup>
                                                    {generateColUi()}
                                                </colgroup>
                                                <tbody>
                                                    {/*<!-- per row -->*/}
                                                    {val.map((item: any, i: number) => {

                                                        return (
                                                            <tr key={i}>
                                                                {generateDaysUi(item.eventSources, item.listSection, true)}
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

            </div>{/* /.e-cal-tl-table__timeline-table__wrapper */}



            {/*/////////////////////////////////////////////////// */}
            {/*//////////////////// Modal //////////////////// */}
            {/*////////////////////////////////////////////////// */}

            {/*++++++++++++++++ MODAL ++++++++++++++++*/}
            {EVENTS_ENABLED ? <>

                {/*<!-- DELETE -->*/}
                <ModalDialog
                    show={showDelete}
                    maskOpacity={modalMaskOpacity}
                    protectFixedViewport={false}
                    triggerClassName=""
                    triggerContent=""
                    closeBtnClassName={modalCloseBtnClassName || 'btn btn-secondary'}
                    closeBtnLabel={modalCloseBtnLabel || 'Close'}
                    submitBtnClassName={modalSubmitDeleteBtnClassName || 'btn btn-danger'}
                    submitBtnLabel={modalSubmitDeleteBtnLabel || <>Delete</>}
                    onClose={(e) => {

                        setTimeout(() => {
                            setShowDelete(false);

                            const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));
                            onModalDeleteClose?.(_currentData.length === 0 ? {
                                id: 0,
                                date: getCalendarDate(`${year}-${month + 1}-${day}`)
                            } : _currentData[0]);
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {

                        const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));
                        onModalDeleteEvent?.(_currentData.length === 0 ? {
                            id: 0,
                            date: getCalendarDate(`${year}-${month + 1}-${day}`)
                        } : _currentData[0], closewin);

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
                    protectFixedViewport={false}
                    triggerClassName=""
                    triggerContent=""
                    closeBtnClassName={modalCloseBtnClassName || 'btn btn-secondary'}
                    closeBtnLabel={modalCloseBtnLabel || 'Close'}
                    submitBtnClassName={modalSubmitBtnClassName || 'btn btn-primary'}
                    submitBtnLabel={modalSubmitBtnLabel || <>Save</>}
                    onClose={(e) => {

                        setTimeout(() => {
                            setShowEdit(false);

                            const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));
                            onModalEditClose?.(_currentData.length === 0 ? {
                                id: 0,
                                date: getCalendarDate(`${year}-${month + 1}-${day}`)
                            } : _currentData[0]);
                        }, 350);
                    }}
                    onSubmit={async (e: any, closewin: Function, data: any) => {

                        const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${day}`));
                        onModalEditEvent?.(_currentData.length === 0 ? {
                            id: 0,
                            date: getCalendarDate(`${year}-${month + 1}-${day}`)
                        } : _currentData[0], closewin);

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
            {/* FIX: "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node" when using remove() */}
            <div>
                <div
                    ref={tableTooltipModalRef}
                    id={`e-cal-tl-table__cell-tooltipwrapper-${idRes}`}
                    className={`e-cal-tl-table__cell-tooltipwrapper d-inline-block ${isShowTableTooltip ? 'active' : ''}`}
                    role="tooltip"
                    data-microtip-position={tableTooltipDirection || 'bottom'}
                    data-microtip-size={tableTooltipSize || 'auto'}
                >
                    <div className="e-cal-tl-table__cell-tooltipcontent">
                        {tableTooltipContent}
                    </div>
                </div>

            </div>



        </>
    )
};


export default EventCalendarTimeline;