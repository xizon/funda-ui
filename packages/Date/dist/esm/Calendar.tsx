import React, { useState, useEffect, useMemo } from 'react';


import {
    padZero,
    dateFormat,
    isValidDate,
    getTodayDate
} from 'funda-utils/dist/cjs/date';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


export interface EventsValueConfig {
    id: string | number;
    date: string,
    time: string,
    data: string,
    eventStyles?: React.CSSProperties;
}


export type CalendarProps = {
    min?: string;
    max?: string;
    customTodayDate?: string;
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
    iconRemove?: React.ReactNode | string;
    cellCloseBtnClassName?: string;
    cellCloseBtnLabel?: string | React.ReactNode;
    onChangeDate?: (e: any, currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
}


const Calendar = (props: CalendarProps) => {
    const {
        min,
        max,
        customTodayDate,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,
        iconRemove,
        onChangeDate,
        onChangeMonth,
        onChangeYear,
        onChangeToday,
    } = props;


    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [val, setVal] = useState<EventsValueConfig[]>([]);

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



    const getFullTimeData = (v: Date | String, padZeroEnabled: boolean = true) => {

        if (typeof v === 'string' && !isValidDate(v)) {
            return {
                res: '0000-00-00 00:00:00',
                resNoSeconds: '0000-00-00 00:00',
                date: `0000-00-00`,
                year: `0000`,
                month: `00`,
                day: `00`,
                hours: `00`,
                minutes: `00`,
                seconds: `00`
            }
        }

        const date: any = dateFormat(v as any);

        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1, padZeroEnabled);
        const day = padZero(date.getDate(), padZeroEnabled);
        const hours = padZero(date.getHours(), padZeroEnabled);
        const minutes = padZero(date.getMinutes(), padZeroEnabled);
        const seconds = padZero(date.getSeconds(), padZeroEnabled);
        const res = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        const res2 = `${year}-${month}-${day} ${hours}:${minutes}`;

        return {
            res: res,
            resNoSeconds: res2,
            date: `${year}-${month}-${day}`,
            year: `${year}`,
            month: `${month}`,
            day: `${day}`,
            hours: `${hours}`,
            minutes: `${minutes}`,
            seconds: `${seconds}`
        }
    };


    // 
    const MIN: any = typeof min !== 'undefined' && min !== '' && min !== null && isValidDate(min) ? getFullTimeData(min) : '';
    const MAX: any = typeof max !== 'undefined' && max !== '' && max !== null && isValidDate(max) ? getFullTimeData(max) : '';
    const currentMinDateDisabled = MIN !== '' ? (Number(new window.Date().getTime()) < Number(new window.Date(MIN.res).getTime()) ? true : false) : false;
    const currentMaxDateDisabled = MAX !== '' ? (Number(new window.Date().getTime()) > Number(new window.Date(MAX.res).getTime()) ? true : false) : false;
    


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


    function getCalendarDate(v: string, padZeroEnabled: boolean = true) {
        if (typeof v === 'undefined') return '';
        
        // yyyy-MM-dd
        const date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v;  // fix "Invalid date in safari"
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
                month: padZero(_date.getMonth()+1),
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
                month: padZero(_date.getMonth()+1),
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

        //
        onChangeYear?.({
            day: padZero(day),
            month: padZero(month+1),
            year: currentValue.toString()
        });

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
            month: padZero(currentIndex+1),
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


    function checkDisabledDay(curYear: number | string, curMonth: number, curDay: number | string) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) > Number(MAX.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) < Number(MIN.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
                res = true;
            }
        }


        return res;
    }

    function checkDisabledMonth(curYear: number | string, curMonth: number) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) > Number(MAX.month)) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) < Number(MIN.month)) {
                res = true;
            }
        }

        return res;
    }
    function checkDisabledYear(curYear: number | string) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }
        }


        return res;
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
        setTodayDate(date);
    }, [date]);


    useEffect(() => {

  
        // update current today
        if (typeof customTodayDate === 'string' && customTodayDate !== '' && isValidDate(customTodayDate)) {
            const _customNow = new Date(customTodayDate);
            setTodayDate(_customNow);
        } else {

            if (currentMaxDateDisabled) {
                setTodayDate(new Date(MAX.res))
            }
            if (currentMinDateDisabled) {
                setTodayDate(new Date(MIN.res))
            }

        }
    }, [customTodayDate]);


    return (
        <>
            <div className="date2d-cal__wrapper">

                {/*++++++++++++++++ MAIN ++++++++++++++++*/}
                <div className="date2d-cal__header bg-body-tertiary">
                    <button tabIndex={-1} type="button" className="date2d-cal__btn date2d-cal__btn--prev" onClick={handlePrevChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#000" />
                        </svg>
                    </button>
                    <div className="date2d-cal__header__btns">
                        <button tabIndex={-1} type="button" className={combinedCls(
                            'date2d-cal__btn',
                            {
                                'active': winMonth
                            }
                        )} onClick={handleShowWinMonth}>
                            {MONTHS[month]}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                        <button tabIndex={-1} type="button" className={combinedCls(
                            'date2d-cal__btn',
                            {
                                'active': winYear
                            }

                        )} onClick={handleShowWinYear}>
                            {year}
                            <svg width="12px" height="12px" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill="#000000" /></svg>
                        </button>
                    </div>
                    <button tabIndex={-1} type="button" className="date2d-cal__btn date2d-cal__btn--next" onClick={handleNextChange}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#000" />
                        </svg>
                    </button>
                </div>
                <div className="date2d-cal__body">

                     {/* week */}
                     <div className="date2d-cal__row">
                        {WEEK.map((s: string, i: number) => (
                            <div className={combinedCls(
                                'date2d-cal__cell date2d-cal__day date2d-cal__day--week date2d-cal__day--disabled bg-secondary-subtle empty',
                                {
                                    'last-cell': i === WEEK.length-1
                                }
                            )} key={i} data-week={i} dangerouslySetInnerHTML={{
                                __html: s
                            }} />
                        ))}
                     </div>
                     {/* /week */}

                     {/* day */}
                    {getCells().map((item: any, j: number) => {

                        const isFirstRow = j === 0;
                        const isLastRow = j === getCells().length-1;
             
                        // forward fill
                        const __forwardFillNum: number[] = getForwardFill();

                        // back fill
                        const __backFillNum: number[] = getBackFill();


                        return <div key={'row' + item.row} className="date2d-cal__row">
                            {item.col.map((dayIndex: number | null, i: number) => {
                                const d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
                                const _currentData = val.filter((item: any) => getCalendarDate(item.date as string) === getCalendarDate(`${year}-${month + 1}-${d}`));
                                const isLastCol = i === item.col.length-1;


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

                           
                                return (
                                    <div
                                        className={combinedCls(
                                            'date2d-cal__cell date2d-cal__day',
                                            {
                                                'empty': d <= 0,
                                                'today': d === now.getDate(),
                                                'selected': d === day,
                                                'last-cell': isLastCol,
                                                'last-row': isLastRow,
                                                'disabled': checkDisabledDay(year, month, d)

                                            }
                                        )}
                                        key={"col" + i}
                                        data-date={getCalendarDate(_dateShow)}
                                        data-day={padZero(d)}
                                        data-week={i}
                                        onClick={(e: React.MouseEvent) => {

                                            if (d > 0) {
                                                handleDayChange(e, d);

                                                onChangeDate?.(e, _currentData.length === 0 ? {
                                                    id: 0,
                                                    date: getCalendarDate(`${year}-${month + 1}-${d}`)
                                                } : _currentData[0]);

                                            }
                                        }}
                                    >
                                    
                                        {/* forward fill */}
                                        {isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? <><span className="disabled">{__forwardFillNum[i]}</span></> : null}

                                        {/* day */}
                                        {d > 0 ? <span>{d}</span> : null}

                                        {/* back fill */}
                                        {isLastRow && __backFillNum  && typeof __backFillNum[i-item.col.filter(Boolean).length] !== 'undefined'? <span className="disabled">{__backFillNum[i-item.col.filter(Boolean).length]}</span> : null}

                                    </div>
                                );
                            })}
                        </div>;

                    })}

                     {/* /day */}
                    
                </div>
                {/*++++++++++++++++ /MAIN ++++++++++++++++*/}


                {/*++++++++++++++++ MONTH SELECTION TAB ++++++++++++++++*/}
                <div className={combinedCls(
                    'date2d-cal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded',
                    {
                        'active': winMonth
                    }
                )}>
                    <div className="date2d-cal__month-container">
                        {MONTHS_FULL.map((month, index) => {
                            return <div 
                                data-month={padZero(index+1)}
                                className={combinedCls(
                                    'date2d-cal__month',
                                    {
                                        'selected': selectedMonth === index,
                                        'disabled': checkDisabledMonth(year, index)
                                    }
                                )} 
                                key={month + index} 
                                onClick={() => { handleMonthChange(index) }}
                            >{month}</div>
                        })}
                    </div>
                </div>
                {/*++++++++++++++++ /MONTH SELECTION TAB ++++++++++++++++*/}

                {/*++++++++++++++++ YEAR SELECTION TAB ++++++++++++++++*/}
                <div className={combinedCls(
                    'date2d-cal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded',
                    {
                        'active': winYear
                    }
                )}>
                    <div className="date2d-cal__year-container bg-body-tertiary">
                        {yearsArray.map((year, index) => {
                            return <div 
                                data-year={year}
                                className={combinedCls(
                                    'date2d-cal__year',
                                    {
                                        'selected': selectedYear === year,
                                        'disabled': checkDisabledYear(year)
                                    }
                                )} 
                                key={year + index} onClick={() => { handleYearChange(year) }}
                            >{year}</div>
                        })}
                    </div>

                </div>
                {/*++++++++++++++++ /YEAR SELECTION TAB ++++++++++++++++*/}


                {/*++++++++++++++++ TODAY SELECTION TAB ++++++++++++++++*/}
                <div className="date2d-cal__today-wrapper p-2 bg-body-tertiary">
                    <button 
                        tabIndex={-1} 
                        type="button" 
                        className={combinedCls(
                            'date2d-cal__btn date2d-cal__btn--today',
                            {
                                'disabled': currentMaxDateDisabled || currentMinDateDisabled
                            }
                        )} 
                        onClick={handleTodayChange}
                    >
                        {langToday || 'Today'}
                    </button>
                </div>
                {/*++++++++++++++++ /TODAY SELECTION TAB ++++++++++++++++*/}



            </div>




        </>
    )
};


export default Calendar;