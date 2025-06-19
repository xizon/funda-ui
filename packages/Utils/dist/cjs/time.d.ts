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
console.log(getTimeslots("08:00:00", "08:02:00", 0.4));   // ['08:00:00', '08:00:24', '08:00:48', '08:01:12', '08:01:36', '08:02:00']

*/
declare function getTimeslots(startTime: string, endTime: string, timeInterval: number, formatRange?: boolean): string[];
/**
 * Get minutes between two dates
 * @param  {Date} startDate  -  start date
 * @param  {Date} endDate  -  ebd date
 * @returns Number
 */
declare function getMinutesBetweenDates(startDate: Date, endDate: Date): number;
/**
 * Get minutes between two time
 * @param  {String} startTime  -  start time
 * @param  {String} endTime  -  ebd time
 * @returns Number
 */
declare function getMinutesBetweenTime(startTime: string, endTime: string): string;
/**
 * Convert HH:MM:SS into minute
 * @param  {String} timeStr  -  time string
 * @returns Number
 */
declare function convertTimeToMin(timeStr: string): number;
export { getTimeslots, getMinutesBetweenDates, getMinutesBetweenTime, convertTimeToMin };
