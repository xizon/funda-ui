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
 * Number validation
 * @param {*} v
 * @returns {Boolean}
 */
declare const isNumeric: (v: any) => boolean;
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
 * @returns {Number}
 */
declare function getCurrentMonth(padZeroEnabled?: boolean): number;
/**
 * Get current day
 * @param {Boolean} padZeroEnabled
 * @returns {Number}
 */
declare function getCurrentDay(padZeroEnabled?: boolean): number;
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
export { isTimeString, getNow, padZero, dateFormat, isValidDate, isNumeric, isValidHours, isValidMinutesAndSeconds, isValidYear, isValidMonth, isValidDay, getLastDayInMonth, getFirstAndLastMonthDay, getCalendarDate, getFullTime, getTodayDate, getCurrentMonth, getCurrentYear, getCurrentDay, getCurrentDate, getTomorrowDate, getYesterdayDate, getNextMonthDate, getPrevMonthDate, getNextYearDate, getPrevYearDate, getSpecifiedDate, setDateHours, setDateMinutes, setDateDays, timestampToDate };
