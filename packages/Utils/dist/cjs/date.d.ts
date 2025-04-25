/**
 * The check string contains only hours, minutes, and seconds
 * @returns {Boolean}
 */
declare function isTimeString(str: string): boolean;
/**
 * Get now
 * @returns {Date}  // Wed Apr 17 2024 14:31:36 GMT+0800 (China Standard Time)
 */
declare const getNow: () => Date;
/**
 * Zero Padding
 * @param {Number} num
 * @param {Boolean} padZeroEnabled
 * @returns {String}  '01', '05', '12'
 */
declare const padZero: (num: number, padZeroEnabled?: boolean) => string;
/**
 * Hours validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isValidHours: (v: any) => boolean;
/**
 * Minutes and Seconds validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isValidMinutesAndSeconds: (v: any) => boolean;
/**
 * Year validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isValidYear: (v: any) => boolean;
/**
 * Month validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isValidMonth: (v: any) => boolean;
/**
 * Day validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isValidDay: (v: any) => boolean;
/**
 * Check if the string is legitimate
 * @param {String} v
 * @returns {Boolean}
 */
declare const isValidDate: (v: string) => boolean;
/**
 * Get calendar date
 * @param {Date | String} v
 * @returns {Date | String}  yyyy-MM-dd
 */
declare function dateFormat(v: Date | string): Date | String;
/**
 * Get date details
 * @param {Date | String} v
 * @param {Boolean} padZeroEnabled
 * @typedef {Object} JSON
 */
declare function getDateDetails(v: Date | string, padZeroEnabled?: boolean): Record<string, string | number>;
/**
 * Get calendar date
 * @param {Date | String} v
 * @param {Boolean} padZeroEnabled
 * @returns {String}  yyyy-MM-dd
 */
declare function getCalendarDate(v: Date | string, padZeroEnabled?: boolean): string;
/**
 * Get today date
 * @returns {String}  yyyy-MM-dd
 */
declare function getTodayDate(): string;
/**
 * Get tomorrow date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getTomorrowDate(v: Date | string): string;
/**
 * Get yesterday date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getYesterdayDate(v: Date | string): string;
/**
 * Get specified date
 * @param {Date | String} v
 * @param {Number} days  The number of days forward or backward, which can be a negative number
 * @returns {String}  yyyy-MM-dd
 */
declare function getSpecifiedDate(v: Date | string, days: number): string;
/**
 * Calculates the total number of days from today going back a specified number of months.
 *
 * @param {number} monthsAgo - The number of months to go back (e.g., 3 means the past 3 months).
 * @returns {number} The total number of days between the calculated past date and today.
 *
 * @example
 * getDaysInLastMonths(3); // Returns number of days in the past 3 months
 */
declare function getDaysInLastMonths(monthsAgo?: number): number;
/**
 * Generates timeslots between a start and end time.
 *
 * @param {string} start - The start time in "HH:mm" format (24-hour).
 * @param {string} end - The end time in "HH:mm" format (24-hour).
 * @param {number} interval - The interval in minutes for each slot (e.g., 60).
 * @param {boolean} [formatRange=false] - If true, returns slots as time ranges like "10:00 - 11:00".
 * @returns {string[]} An array of timeslots, either as time strings or time ranges.
 *
 * @example
 * console.log(getTimeslots("10:00", "14:00", 60, true)); //['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00']
 * console.log(getTimeslots("10:00", "14:00", 60));   // ['10:00', '11:00', '12:00', '13:00']
 */
declare function getTimeslots(start: string, end: string, interval?: number, formatRange?: boolean): string[];
/**
 * Get next month date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getNextMonthDate(v: Date | string): string;
/**
 * Get previous month date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getPrevMonthDate(v: Date | string): string;
/**
 * Get next year date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getNextYearDate(v: Date | string): string;
/**
 * Get previous year date
 * @param {Date | String} v
 * @returns {String}  yyyy-MM-dd
 */
declare function getPrevYearDate(v: Date | string): string;
/**
 * Get last day in month
 * @param {Date | String} v
 * @param {?Number}  targetMonth
 * @returns {String | Number}  yyyy-MM-dd
 */
declare function getLastDayInMonth(v: Date | string, targetMonth?: number | undefined): string | number;
/**
 * Get current year
 * @returns {Number}
 */
declare function getCurrentYear(): number;
/**
 * Get current month
 * @param {Boolean} padZeroEnabled
 * @returns {Number|String}
 */
declare function getCurrentMonth(padZeroEnabled?: boolean): string | number;
/**
 * Get current day
 * @param {Boolean} padZeroEnabled
 * @returns {Number|String}
 */
declare function getCurrentDay(padZeroEnabled?: boolean): string | number;
/**
 * Get first and last month day
 * @param {Number} v
 * @param {Boolean} padZeroEnabled
 * @returns  {Array}
 */
declare function getFirstAndLastMonthDay(year: number, padZeroEnabled?: boolean): string[];
/**
 * Get current date
 * @param {Boolean} padZeroEnabled
 * @typedef {String} JSON
 */
declare function getCurrentDate(padZeroEnabled?: boolean): JSON;
/**
 * Get full time
 * @param {Date | String} v
 * @param {Boolean} padZeroEnabled
 * @param {Boolean} hasSeconds
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
declare function getFullTime(v: Date | string, padZeroEnabled?: boolean, hasSeconds?: boolean): string;
/**
 * Add hours
 * @param {Date | String} v
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
declare function setDateHours(v: Date | string, offset: number, padZeroEnabled?: boolean): string;
/**
 * Add minutes
 * @param {Date | String} v
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
declare function setDateMinutes(v: Date | string, offset: number, padZeroEnabled?: boolean): string;
/**
 * Add days
 * @param {Date | String} v
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
declare function setDateDays(v: Date | string, offset: number, padZeroEnabled?: boolean): string;
/**
 * Convert timestamp to date
 * @param {Number} v
 * @param {Boolean} padZeroEnabled
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
declare function timestampToDate(v: number, padZeroEnabled?: boolean): string;
/**
 * Get the date of the specified month
 * @param {Number} year
 * @param {Number} month
 * @returns {Array<string>}
 */
declare function getMonthDates(year: number, month: number): string[];
/**
 * Get the date of the specified week (From Sunday)
 * @param {Number} weekOffset
 * @returns {Array<Date>}
 */
declare function getWeekDatesFromSun(weekOffset: number): Date[];
/**
 * Get the date of the specified week (From Monday)
 * @param {Number} weekOffset
 * @returns {Array<Date>}
 */
declare function getWeekDatesFromMon(weekOffset: number): Date[];
export { isTimeString, getNow, padZero, dateFormat, getDateDetails, isValidDate, isValidHours, isValidMinutesAndSeconds, isValidYear, isValidMonth, isValidDay, getLastDayInMonth, getFirstAndLastMonthDay, getCalendarDate, getFullTime, getTodayDate, getCurrentMonth, getCurrentYear, getCurrentDay, getCurrentDate, getTomorrowDate, getYesterdayDate, getNextMonthDate, getPrevMonthDate, getNextYearDate, getPrevYearDate, getSpecifiedDate, getDaysInLastMonths, getTimeslots, setDateHours, setDateMinutes, setDateDays, timestampToDate, getMonthDates, getWeekDatesFromSun, getWeekDatesFromMon };
