/**
 * Get timeslots from starting and ending time
 * @param  {string} startTime  -  start time in format "HH:mm"
 * @param  {string} endTime  -  end time in format "HH:mm"
 * @param  {number} timeInterval  -  time interval in minutes
 * @param  {boolean} formatRange  -  if true returns ranges like "10:00 - 11:00", if false returns single times like "10:00"
 * @returns {string[]} Array of time slots
 * @example

console.log(getTimeslots("10:00", "14:00", 60, true)); //['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00']
console.log(getTimeslots("10:00", "14:00", 60));   // ['10:00', '11:00', '12:00', '13:00']
*/
declare function getTimeslots(startTime: string, endTime: string, timeInterval: number, formatRange?: boolean): string[];
/**
 * Get minutes between two dates
 * @param  {Date} startDate  -  start date
 * @param  {Date} endDate  -  ebd date
 * @returns Number
 */
declare function getMinutesBetweenDates(startDate: any, endDate: any): number;
/**
 * Get minutes between two time
 * @param  {String} startTime  -  start time
 * @param  {String} endTime  -  ebd time
 * @returns Number
 */
declare function getMinutesBetweenTime(startTime: any, endTime: any): string;
/**
 * Convert HH:MM:SS into minute
 * @param  {String} timeStr  -  time string
 * @returns Number
 */
declare function convertTimeToMin(timeStr: any): number;
export { getTimeslots, getMinutesBetweenDates, getMinutesBetweenTime, convertTimeToMin };
