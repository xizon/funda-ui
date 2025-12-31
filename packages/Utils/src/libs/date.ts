
/**
 * Get the Sunday of the week of the specific date, and return to the 
 * end of January next year if it is New Year's Eve
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 *
 * @example
 * getSpecialDateEnd('2025-12-29'); // 2026-01-31
 * getSpecialDateEnd('2025-12-17'); // 2025-12-31
 */
/**
 * Calculates a special end date based on the week and month logic.
 * @param v - The input date (Date object, string, or timestamp)
 * @returns A formatted date string (YYYY-MM-DD)
 */
function getSpecialDateEnd(v: Date | string | number): string {
    // Assuming dateFormat returns a Date object based on your logic
    const date: Date = new Date(v); 
    
    // getWeekDatesByDate should return Date[]
    const weekDates: Date[] = getWeekDatesByDate(v); 
    const sunday: Date = weekDates[6]; // Sunday of that week
    
    // If Sunday of this week rolls into the next year
    if (sunday.getFullYear() > date.getFullYear()) {
        const year = sunday.getFullYear();
        
        // Get the last day of January of that new year
        // Note: month 1 in 'new Date' is February, day 0 gives the last day of Jan
        const lastDay = new Date(year, 1, 0).getDate();
        
        // Using template literals for the return string
        return `${year}-01-${lastDay.toString().padStart(2, '0')}`;
    }
    
    // Default: Return the last day of the current month
    // We create a date for the "0th" day of the next month to get the end of current month
    const endOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    return getCalendarDate(endOfCurrentMonth);
}


/**
 * The check string contains only hours, minutes, and seconds
 * @returns {Boolean}  
 */
function isTimeString(str: string): boolean {
    // match "HH:mm:ss"
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return timePattern.test(str);
}


/**
 * Get now
 * @returns {Date}  // Wed Apr 17 2024 14:31:36 GMT+0800 (China Standard Time)
 */
const getNow = (): Date => {
    return new Date(Date.now());
};

/**
 * Zero Padding
 * @param {Number} num
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  '01', '05', '12'
 */
const padZero = (num: number, padZeroEnabled: boolean = true): string => {
    if (padZeroEnabled) {
        return num < 10 ? '0' + num : num.toString();
    } else {
        return num.toString();
    }

};


/**
 * Hours validation
 * @param {*} v 
 * @returns {Boolean}  
 */
const isValidHours = (v: any): boolean => {
    return /^([01]?[0-9]|2[0-3])$/.test(v);//  0～23, 00～23
};

/**
 * Minutes and Seconds validation
 * @param {*} v 
 * @returns {Boolean}  
 */
const isValidMinutesAndSeconds = (v: any): boolean => {
    return /^([01]?[0-9]|[0-5][0-9])$/.test(v);//  0~59, 00~59
};

/**
 * Year validation
 * @param {*} v 
 * @returns {Boolean}  
 */
const isValidYear = (v: any): boolean => {
    return /^([1-9][0-9])\d{2}$/.test(v);//  1000 ～ 9999
};

/**
 * Month validation
 * @param {*} v 
 * @returns {Boolean}  
 */
const isValidMonth = (v: any): boolean => {
    return /^(0?[1-9]|1[0-2])$/.test(v);//  01～12, 1~12
};     

/**
 * Day validation
 * @param {*} v 
 * @returns {Boolean}  
 */
const isValidDay = (v: any): boolean => {
    return /^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(v);//  01～31, 1~31
}; 



/**
 * Check if the string is legitimate
 * @param {String} v 
 * @returns {Boolean}  
 */
const isValidDate = (v: string): boolean => {
    return !(String(new Date(v)).toLowerCase() === 'invalid date');
};


/**
 * Get calendar date
 * @param {Date | String} v 
 * @returns {Date | String}  yyyy-MM-dd
 */
function dateFormat(v: Date | string): Date | String {
    const date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v;  // fix "Invalid date in safari"
    return date;
}


/**
 * Get date details
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @typedef {Object} JSON
 */
function getDateDetails(v: Date | string, padZeroEnabled: boolean = true): Record<string, string | number> {

    const date: any = dateFormat(v);
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1, padZeroEnabled);
    const day = padZero(date.getDate(), padZeroEnabled);
    const hours = padZero(date.getHours(), padZeroEnabled);
    const minutes = padZero(date.getMinutes(), padZeroEnabled);
    const seconds = padZero(date.getSeconds(), padZeroEnabled);

    return {
        year: String(year),
        month,
        day,
        hours,
        minutes,
        seconds
    };
}


/**
 * Get calendar date
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd
 */
function getCalendarDate(v: Date | string, padZeroEnabled: boolean = true): string {

    const date: any = dateFormat(v);
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1, padZeroEnabled);
    const day = padZero(date.getDate(), padZeroEnabled);
    const hours = padZero(date.getHours(), padZeroEnabled);
    const minutes = padZero(date.getMinutes(), padZeroEnabled);
    const seconds = padZero(date.getSeconds(), padZeroEnabled);
    const res = `${year}-${month}-${day}`;
    return res;
}



/**
 * Get today date
 * @returns {String}  yyyy-MM-dd
 */
function getTodayDate(): string {

    return getCalendarDate(new Date());
}



/**
 * Get tomorrow date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getTomorrowDate(v: Date | string): string {

    const today: any = dateFormat(v);
    const _tomorrow = today;
    _tomorrow.setDate(_tomorrow.getDate() + 1);
    const tomorrow = getCalendarDate(_tomorrow);
    return tomorrow;
}


/**
 * Get yesterday date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getYesterdayDate(v: Date | string): string {

    const today: any = dateFormat(v);
    const _yesterday = today;
    _yesterday.setDate(_yesterday.getDate() - 1);
    const yesterday = getCalendarDate(_yesterday);
    return yesterday;
}

/**
 * Get specified date
 * @param {Date | String} v 
 * @param {Number} days  The number of days forward or backward, which can be a negative number
 * @returns {String}  yyyy-MM-dd
 */
/* console.log(getSpecifiedDate(getTodayDate(), -180)); // 2023-08-27 (180 days before February 23, 202) */
function getSpecifiedDate(v: Date | string, days: number): string {

    const today: any = dateFormat(v);
    const _specifiedDay = today;
    _specifiedDay.setDate(_specifiedDay.getDate() + days);
    const specifiedDay = getCalendarDate(_specifiedDay);
    return specifiedDay;
}

/**
 * Calculates the total number of days from today going back a specified number of months.
 *
 * @param {number} monthsAgo - The number of months to go back (e.g., 3 means the past 3 months).
 * @returns {number} The total number of days between the calculated past date and today.
 *
 * @example
 * getDaysInLastMonths(3); // Returns number of days in the past 3 months
 */
function getDaysInLastMonths(monthsAgo: number = 3): number {
    const today: Date = new Date();
    const pastDate: Date = new Date();
    pastDate.setMonth(today.getMonth() - monthsAgo);

    const diffInMs: number = today.getTime() - pastDate.getTime();
    const diffInDays: number = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
}


/**
 * Get next month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextMonthDate(v: Date | string): string {

    const today: any = dateFormat(v);
    today.setMonth(today.getMonth() + 1);

    return getCalendarDate(today);
}


/**
 * Get previous month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevMonthDate(v: Date | string): string {

    const today: any = dateFormat(v);
    today.setMonth(today.getMonth() - 1);

    return getCalendarDate(today);
}



/**
 * Get next year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextYearDate(v: Date | string): string {

    const today: any = dateFormat(v);
    const current = new Date(today);
    current.setFullYear(current.getFullYear() + 1);

    return getCalendarDate(current);
}


/**
 * Get previous year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevYearDate(v: Date | string): string {

    const today: any = dateFormat(v);
    const current = new Date(today);
    current.setFullYear(current.getFullYear() - 1);

    return getCalendarDate(current);
}




/**
 * Get last day in month
 * @param {Date | String} v 
 * @param {?Number}  targetMonth 
 * @returns {String | Number}  yyyy-MM-dd
 */
/*
Example: Get last day in  next month 

const _day = '2024-01-01';
const y = new Date(getNextMonthDate(_day)).getFullYear();
const m = String(new Date(getNextMonthDate(_day)).getMonth() + 1).padStart(2, '0');
const d = getLastDayInMonth(getNextMonthDate(_day), new Date(getNextMonthDate(_day)).getMonth() + 1);

const lastDayOfNextMonth = `${y}-${m}-${d}`; // 2024-02-29

*/
function getLastDayInMonth(v: Date | string, targetMonth: number | undefined = undefined): string | number {
    const date: any = dateFormat(v);
    return new Date(date.getFullYear(), typeof targetMonth !== 'undefined' ? targetMonth : date.getMonth() - 1, 0).getDate();
}




/**
 * Get current year
 * @returns {Number}
 */
function getCurrentYear(): number {
    return new Date().getFullYear();
}

/**
 * Get current month
 * @param {Boolean} padZeroEnabled 
 * @returns {Number|String}
 */
function getCurrentMonth(padZeroEnabled: boolean = true): string | number {
    const m: number = new Date().getMonth() + 1;
    return padZeroEnabled ? String(m).padStart(2, '0') : m;
}


/**
 * Get current day
 * @param {Boolean} padZeroEnabled 
 * @returns {Number|String}
 */
function getCurrentDay(padZeroEnabled: boolean = true): string | number {
    const d: number = new Date().getDate();
    return padZeroEnabled ? String(d).padStart(2, '0') : d;
}



/**
 * Get first and last month day
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns  {Array}
 */
function getFirstAndLastMonthDay(year: number, padZeroEnabled: boolean = true): string[] {
    const theFirst = new Date(year, 0, 1).getDate();
    const theLast = new Date(year, 11, 31).getDate();

    const padZero = (num: number): string => {
        if (padZeroEnabled) {
            return num < 10 ? '0' + num : num.toString();
        } else {
            return num.toString();
        }
    };

    return [padZero(theFirst), padZero(theLast)];
}


/**
 * Get current date
 * @param {Boolean} padZeroEnabled 
 * @typedef {String} JSON
 */
function getCurrentDate(padZeroEnabled: boolean = true): JSON {

    const date = new Date();
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


    return {
        today: `${year}-${month}-${day}`,
        yearStart: `${year}-01-01`,
        yearEnd: `${year}-12-${getLastDayInMonth(date, 12)}`
    } as any;
}



/**
 * Get full time
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @param {Boolean} hasSeconds 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function getFullTime(v: Date | string, padZeroEnabled: boolean = true, hasSeconds: boolean = true): string {

    const date: any = dateFormat(v);
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
    const seconds = padZero(date.getSeconds());
    const res = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const res2 = `${year}-${month}-${day} ${hours}:${minutes}`;

    return hasSeconds ? res : res2;
}



/**
 * Add hours
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateHours(v: Date | string, offset: number, padZeroEnabled: boolean = true): string {
    const date: any = dateFormat(v);
    const _cur = new Date(date).setTime(new Date(date).getTime() + (offset * 60 * 60 * 1000));
    return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Add minutes
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateMinutes(v: Date | string, offset: number, padZeroEnabled: boolean = true): string {
    const date: any = dateFormat(v);
    const _cur = new Date(date).setTime(new Date(date).getTime() + (offset * 60 * 1000));
    return getFullTime(new Date(_cur), padZeroEnabled);
}
/**
 * Add days
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateDays(v: Date | string, offset: number, padZeroEnabled: boolean = true): string {
    const date: any = dateFormat(v);
    const _cur = new Date(date).setTime(new Date(date).getTime() + (offset * 24 * 60 * 60 * 1000));
    return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Convert timestamp to date
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function timestampToDate(v: number, padZeroEnabled: boolean = true): string {
    return getFullTime(new Date(v), padZeroEnabled);
}


/**
 * Get the date of the specified month
 * @param {Number} year 
 * @param {Number} month 
 * @returns {Array<string>} 
 */
function getMonthDates(year: number, month: number) {
    const dates: string[] = [];

    // Get the total number of days in the month
    const daysInMonth = new Date(year, month, 0).getDate();

   
    for (let day = 1; day <= daysInMonth; day++) {
        dates.push(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`); // 'YYYY-MM-DD'
    }

    return dates;
}


/**
 * Get all 7 dates for a specific week starting from Sunday.
 * * @param {Number} weekOffset - The offset of weeks from the current week.
 * 0: Current week
 * -1: Previous week
 * 1: Next week
 * @returns {Array<Date>} - An array containing 7 Date objects from Sunday to Saturday.
 */
/*
// Demo 1: Get dates for the current week (Sunday Start)
const currentWeekSun = getWeekDatesFromSun(0);
console.log('Sunday (Start):', currentWeekSun[0].toLocaleDateString());
console.log('Saturday (End):', currentWeekSun[6].toLocaleDateString());

// Demo 2: Get the date range for the previous week
const lastWeek = getWeekDatesFromSun(-1);
const rangeStart = lastWeek[0].toISOString().split('T')[0];
const rangeEnd = lastWeek[6].toISOString().split('T')[0];
console.log(`Previous Week Range: ${rangeStart} to ${rangeEnd}`);

// Demo 3: Checking for Month/Year transitions
const transitionWeek = getWeekDatesFromSun(0).map(d => d.toDateString());
console.log('Transition Week Dates:', transitionWeek);

*/
function getWeekDatesFromSun(weekOffset: number): Date[] {
    const dates: Date[] = [];
    // Start with a clean date (midnight) to avoid timezone/DST shifts during calculation
    const currentDate: Date = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const dayOfWeek: number = currentDate.getDay(); 
    
    // Move to the Sunday of the current week, then apply the week offset
    // Formula: Current Date - Current Day Index + (Offset * 7)
    currentDate.setDate(currentDate.getDate() - dayOfWeek + (weekOffset * 7));

    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        dates.push(date);
    }

    return dates;
}


/**
 * Get all 7 dates for a specific week starting from Monday.
 * * @param {Number} weekOffset - The offset of weeks from the current week. 
 * 0: Current week
 * -1: Previous week
 * 1: Next week
 * @returns {Array<Date>} - An array containing 7 Date objects from Monday to Sunday.
 */
/*
// Demo 1: Get dates for the current week
const currentWeek = getWeekDatesFromMon(0);
console.log('Monday of this week:', currentWeek[0].toLocaleDateString());
console.log('Sunday of this week:', currentWeek[6].toLocaleDateString());

// Demo 2: Get dates for the next week
const nextWeek = getWeekDatesFromMon(1);
console.log('Monday of next week:', nextWeek[0].toLocaleDateString());

// Demo 3: Format the output as YYYY-MM-DD
const formattedWeek = getWeekDatesFromMon(0).map(date => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
});
console.log('Formatted Week Array:', formattedWeek);
// Result: ["2025-12-29", "2025-12-30", ..., "2026-01-04"]
*/
function getWeekDatesFromMon(weekOffset: number): Date[] {
    const dates: Date[] = [];
    const currentDate: Date = new Date();

    // Calculate the difference to get to Monday of the current week
    // If today is Sunday (0), we go back 6 days. Otherwise, go to (1 - currentDay).
    const dayOfWeek = currentDate.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    
    // Apply the Monday offset and the week offset (7 days per week)
    currentDate.setDate(currentDate.getDate() + diffToMonday + (weekOffset * 7));

    // Generate the 7 days of the week
    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        dates.push(date);
    }

    return dates;
}

/**
 * Get the date list of the week for the specified date (starting from Monday)
 * @param {Date | String} v - The specified date
 * @returns {Array<Date>} - An array containing 7 Date objects
 */
function getWeekDatesByDate(v: Date | string | number): Date[] {
    const dates: Date[] = [];
    
    // Ensure we are working with a Date object. 
    // If 'dateFormat' was a custom utility in your JS, replace 'new Date(v)' with that utility.
    const currentDate = new Date(v);

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = currentDate.getDay(); 
    
    // Calculate difference to Monday: if Sunday (0) subtract 6 days, otherwise subtract (day - 1)
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    
    // Create the Monday starting point
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() + diffToMonday);

    // Generate the 7 days of the week
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        dates.push(date);
    }
    
    return dates;
}

export {
    getSpecialDateEnd,

    //
    isTimeString,
    getNow,
    padZero,
    dateFormat,
    getDateDetails,

    //
    isValidDate,
    isValidHours,
    isValidMinutesAndSeconds,
    isValidYear,
    isValidMonth,
    isValidDay,

    //
    getLastDayInMonth,
    getFirstAndLastMonthDay,
    getCalendarDate,
    getFullTime,

    // current
    getTodayDate,
    getCurrentMonth,
    getCurrentYear,
    getCurrentDay,
    getCurrentDate,

    // next & previous
    getTomorrowDate,
    getYesterdayDate,
    getNextMonthDate,
    getPrevMonthDate,
    getNextYearDate,
    getPrevYearDate,

    //
    getSpecifiedDate,
    getDaysInLastMonths,


    // convert
    setDateHours,
    setDateMinutes,
    setDateDays,
    timestampToDate,

    // get dates list
    getMonthDates,
    getWeekDatesFromSun,
    getWeekDatesFromMon,
    getWeekDatesByDate
}