(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory();
	else
		root["RPB"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTimeToMin": () => (/* binding */ convertTimeToMin),
/* harmony export */   "getMinutesBetweenDates": () => (/* binding */ getMinutesBetweenDates),
/* harmony export */   "getMinutesBetweenTime": () => (/* binding */ getMinutesBetweenTime),
/* harmony export */   "getTimeslots": () => (/* binding */ getTimeslots)
/* harmony export */ });
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

function getTimeslots(startTime, endTime, timeInterval) {
  var formatRange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parseTime = function parseTime(s) {
    var c = s.split(':');
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  };
  var convertHours = function convertHours(mins) {
    var hour = Math.floor(mins / 60);
    mins = Math.trunc(mins % 60);
    var converted = pad(hour, 2) + ':' + pad(mins, 2);
    return converted;
  };
  var pad = function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  };

  // calculate time slot
  var calculateTimeSlot = function calculateTimeSlot(_startTime, _endTime, _timeInterval) {
    var timeSlots = [];
    // Round start and end times to next 30 min interval
    _startTime = Math.ceil(_startTime / 30) * 30;
    _endTime = Math.ceil(_endTime / 30) * 30;

    // Start and end of interval in the loop
    var currentTime = _startTime;
    while (currentTime < _endTime) {
      if (formatRange) {
        var t = convertHours(currentTime) + ' - ' + convertHours(currentTime + _timeInterval);
        timeSlots.push(t);
      } else {
        timeSlots.push(convertHours(currentTime));
      }
      currentTime += _timeInterval;
    }
    return timeSlots;
  };
  var inputEndTime = parseTime(endTime);
  var inputStartTime = parseTime(startTime);
  var timeSegment = calculateTimeSlot(inputStartTime, inputEndTime, timeInterval);
  return timeSegment;
}

/**
 * Get minutes between two dates
 * @param  {Date} startDate  -  start date
 * @param  {Date} endDate  -  ebd date
 * @returns Number
 */
function getMinutesBetweenDates(startDate, endDate) {
  var diff = endDate.getTime() - startDate.getTime();
  return diff / 60000;
}

/**
 * Get minutes between two time
 * @param  {String} startTime  -  start time
 * @param  {String} endTime  -  ebd time
 * @returns Number
 */
function getMinutesBetweenTime(startTime, endTime) {
  var pad = function pad(num) {
    return ("0" + num).slice(-2);
  };
  var s = startTime.split(":"),
    sMin = +s[1] + s[0] * 60,
    e = endTime.split(":"),
    eMin = +e[1] + e[0] * 60,
    diff = eMin - sMin;
  if (diff < 0) {
    sMin -= 12 * 60;
    diff = eMin - sMin;
  }
  var h = Math.floor(diff / 60),
    m = diff % 60;
  return "" + pad(h) + ":" + pad(m);
}

/**
 * Convert HH:MM:SS into minute
 * @param  {String} timeStr  -  time string
 * @returns Number
 */
function convertTimeToMin(timeStr) {
  var _time = timeStr.split(':').length === 3 ? "".concat(timeStr) : "".concat(timeStr, ":00");
  var res = _time.split(':'); // split it at the colons

  // Hours are worth 60 minutes.
  var minutes = +res[0] * 60 + +res[1];
  return minutes;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});