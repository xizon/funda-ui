import React, { useState, useEffect, useMemo } from 'react';


type CalendarProps = {
    tmpl?: (date: any) => void;
    militaryTime?: boolean;
};


const Calendar = (props: CalendarProps) => {
    const {
        tmpl,
        militaryTime
    } = props;

    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const WEEK_FULL = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTHS_FULL = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

    function setTodayDate() {
        setDay(now.getDate());
        setMonth(now.getMonth());
        setYear(now.getFullYear());
        setStartDay(getStartDayOfMonth(now));
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

            return _date;
        });


    }

    function handleNextChange() {
        setDate((prevState) => {
            const _date = new Date(year, month + 1, day);

            // update
            setSelectedMonth(_date.getMonth());
            setSelectedYear(_date.getFullYear());

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
    }


    function handleMonthChange(currentIndex: number) {
        setSelectedMonth(currentIndex);
        setMonth(currentIndex);
        setDate(new Date(year, currentIndex, day));

    }


    function handleTodayChange() {
        setSelectedMonth(now.getMonth());
        setSelectedYear(now.getFullYear());
        setTodayDate();
    }




    //if user change the selectedYear, then udate the years array that is displayed on year tab view
    useEffect(() => {
        const years = [];
        for (let y = selectedYear - 10; y < selectedYear + 10; y++) {
            years.push(y as never)
        }
        setYearsCollection(years);
    }, [selectedYear]);


    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);


    return (
        <>
            <div className="custom-calendar">

                <div className="custom-calendar__wrapper">

                    {/* MAIN */}
                    <div className="custom-calendar__header">
                        <button type="button" className="custom-calendar__btn custom-calendar__btn--prev" onClick={handlePrevChange}>
                            <svg width="20px" height="20px" viewBox="0 0 29 29"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6" /></svg>
                        </button>
                        <div>
                            {MONTHS[month]} {year}
                        </div>
                        <button type="button" className="custom-calendar__btn custom-calendar__btn--next" onClick={handleNextChange}>
                            <svg width="20px" height="20px" viewBox="0 0 29 29"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6" /></svg>
                        </button>
                    </div>
                    <div className="custom-calendar__body">
                        {WEEK.map((d) => (
                            <div className="custom-calendar__day" key={d}>
                                <strong>{d}</strong>
                            </div>
                        ))}
                        {Array(days[month] + (startDay - 1))
                            .fill(null)
                            .map((_, index) => {
                                const d = index - (startDay - 2);
                                return (
                                    <div className={`custom-calendar__day ${d === now.getDate() ? 'today' : ''} ${d === day ? 'selected' : ''}`}
                                        key={index}
                                        onClick={(e) => {
                                            handleDayChange(e, d);
                                        }}
                                    >
                                        {d > 0 ? d : ''}
                                    </div>
                                );
                            })}
                    </div>
                    {/* /MAIN */}


                    {/* MONTH SELECTION TAB */}
                    <div className="custom-calendar__month-container">
                        {MONTHS_FULL.map((month, index) => {
                            return <div className={`custom-calendar__month ${selectedMonth === index ? ' selected' : ''}`} key={month + index} onClick={() => { handleMonthChange(index) }}>{month}</div>
                        })}
                    </div>
                    {/* /MONTH SELECTION TAB */}

                    <hr />


                    {/* YEAR SELECTION TAB */}
                    <div className="custom-calendar__year-container">
                        {yearsArray.map((year, index) => {
                            return <div className={`custom-calendar__year ${selectedYear === year ? ' selected' : ''}`} key={year + index} onClick={() => { handleYearChange(year) }}>{year}</div>
                        })}
                    </div>
                    {/* /YEAR SELECTION TAB */}



                    {/* TODAY SELECTION TAB */}
                    <div className="custom-calendar__today-container">
                        <button type="button" className="custom-calendar__btn custom-calendar__btn--today" onClick={handleTodayChange}>
                            Today
                        </button>
                    </div>
                    {/* /TODAY SELECTION TAB */}


                </div>

            </div>

        </>
    )
};


export default Calendar;