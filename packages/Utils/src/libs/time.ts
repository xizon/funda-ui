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

function getTimeslots(
    startTime: string,
    endTime: string,
    timeInterval: number,
    formatRange: boolean = false
): string[] {
    const parseTime = (s: string): number => {
        const c = s.split(':');
        return parseInt(c[0]) * 60 + parseInt(c[1]);
    }

    const convertHours = (mins: number): string => {
        const hour = Math.floor(mins / 60);
        mins = Math.trunc(mins % 60);
        const converted = pad(hour, 2) + ':' + pad(mins, 2);
        return converted;
    }

    const pad = (str: string | number, max: number): string => {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    // calculate time slot
    const calculateTimeSlot = (_startTime: number, _endTime: number, _timeInterval: number): string[] => {
        const timeSlots: string[] = [];
        // Round start and end times to next 30 min interval
        _startTime = Math.ceil(_startTime / 30) * 30;
        _endTime = Math.ceil(_endTime / 30) * 30;

        // Start and end of interval in the loop
        let currentTime = _startTime;
        while (currentTime < _endTime) {
            if (formatRange) {
                const t = convertHours(currentTime) + ' - ' + convertHours(currentTime + _timeInterval);
                timeSlots.push(t);
            } else {
                timeSlots.push(convertHours(currentTime));
            }
            currentTime += _timeInterval;
        }
        return timeSlots;
    }

    const inputEndTime = parseTime(endTime);
    const inputStartTime = parseTime(startTime);
    const timeSegment = calculateTimeSlot(inputStartTime, inputEndTime, timeInterval);

    return timeSegment;
}


/**
 * Get minutes between two dates
 * @param  {Date} startDate  -  start date
 * @param  {Date} endDate  -  ebd date
 * @returns Number
 */
function getMinutesBetweenDates(startDate, endDate) {
    const diff = endDate.getTime() - startDate.getTime();
    return (diff / 60000);
}


/**
 * Get minutes between two time
 * @param  {String} startTime  -  start time
 * @param  {String} endTime  -  ebd time
 * @returns Number
 */
function getMinutesBetweenTime(startTime, endTime) {
    const pad = (num) => {
        return ("0" + num).slice(-2);
    };
    let s = startTime.split(":"), sMin = +s[1] + s[0] * 60,
        e = endTime.split(":"), eMin = +e[1] + e[0] * 60,
        diff = eMin - sMin;
        
    if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
    const h = Math.floor(diff / 60),
          m = diff % 60;
    return "" + pad(h) + ":" + pad(m);
}



/**
 * Convert HH:MM:SS into minute
 * @param  {String} timeStr  -  time string
 * @returns Number
 */
function convertTimeToMin(timeStr) {
    const _time = timeStr.split(':').length === 3 ?  `${timeStr}` : `${timeStr}:00`;

    const res = _time.split(':'); // split it at the colons

    // Hours are worth 60 minutes.
    const minutes = (+res[0]) * 60 + (+res[1]);
    return minutes;
}


export {
    getTimeslots,
    getMinutesBetweenDates,
    getMinutesBetweenTime,
    convertTimeToMin
};




