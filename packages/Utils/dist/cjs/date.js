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
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat),
/* harmony export */   "getCalendarDate": () => (/* binding */ getCalendarDate),
/* harmony export */   "getCurrentDate": () => (/* binding */ getCurrentDate),
/* harmony export */   "getCurrentDay": () => (/* binding */ getCurrentDay),
/* harmony export */   "getCurrentMonth": () => (/* binding */ getCurrentMonth),
/* harmony export */   "getCurrentYear": () => (/* binding */ getCurrentYear),
/* harmony export */   "getDateDetails": () => (/* binding */ getDateDetails),
/* harmony export */   "getDaysInLastMonths": () => (/* binding */ getDaysInLastMonths),
/* harmony export */   "getFirstAndLastMonthDay": () => (/* binding */ getFirstAndLastMonthDay),
/* harmony export */   "getFullTime": () => (/* binding */ getFullTime),
/* harmony export */   "getLastDayInMonth": () => (/* binding */ getLastDayInMonth),
/* harmony export */   "getMonthDates": () => (/* binding */ getMonthDates),
/* harmony export */   "getNextMonthDate": () => (/* binding */ getNextMonthDate),
/* harmony export */   "getNextYearDate": () => (/* binding */ getNextYearDate),
/* harmony export */   "getNow": () => (/* binding */ getNow),
/* harmony export */   "getPrevMonthDate": () => (/* binding */ getPrevMonthDate),
/* harmony export */   "getPrevYearDate": () => (/* binding */ getPrevYearDate),
/* harmony export */   "getSpecifiedDate": () => (/* binding */ getSpecifiedDate),
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
/* harmony export */   "getTomorrowDate": () => (/* binding */ getTomorrowDate),
/* harmony export */   "getWeekDatesFromMon": () => (/* binding */ getWeekDatesFromMon),
/* harmony export */   "getWeekDatesFromSun": () => (/* binding */ getWeekDatesFromSun),
/* harmony export */   "getYesterdayDate": () => (/* binding */ getYesterdayDate),
/* harmony export */   "isTimeString": () => (/* binding */ isTimeString),
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "isValidDay": () => (/* binding */ isValidDay),
/* harmony export */   "isValidHours": () => (/* binding */ isValidHours),
/* harmony export */   "isValidMinutesAndSeconds": () => (/* binding */ isValidMinutesAndSeconds),
/* harmony export */   "isValidMonth": () => (/* binding */ isValidMonth),
/* harmony export */   "isValidYear": () => (/* binding */ isValidYear),
/* harmony export */   "padZero": () => (/* binding */ padZero),
/* harmony export */   "setDateDays": () => (/* binding */ setDateDays),
/* harmony export */   "setDateHours": () => (/* binding */ setDateHours),
/* harmony export */   "setDateMinutes": () => (/* binding */ setDateMinutes),
/* harmony export */   "timestampToDate": () => (/* binding */ timestampToDate)
/* harmony export */ });
/**
 * The check string contains only hours, minutes, and seconds
 * @returns {Boolean}  
 */
function isTimeString(str) {
  // match "HH:mm:ss"
  var timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return timePattern.test(str);
}

/**
 * Get now
 * @returns {Date}  // Wed Apr 17 2024 14:31:36 GMT+0800 (China Standard Time)
 */
var getNow = function getNow() {
  return new Date(Date.now());
};

/**
 * Zero Padding
 * @param {Number} num
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  '01', '05', '12'
 */
var padZero = function padZero(num) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
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
var isValidHours = function isValidHours(v) {
  return /^([01]?[0-9]|2[0-3])$/.test(v); //  0～23, 00～23
};

/**
 * Minutes and Seconds validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidMinutesAndSeconds = function isValidMinutesAndSeconds(v) {
  return /^([01]?[0-9]|[0-5][0-9])$/.test(v); //  0~59, 00~59
};

/**
 * Year validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidYear = function isValidYear(v) {
  return /^([1-9][0-9])\d{2}$/.test(v); //  1000 ～ 9999
};

/**
 * Month validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidMonth = function isValidMonth(v) {
  return /^(0?[1-9]|1[0-2])$/.test(v); //  01～12, 1~12
};

/**
 * Day validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidDay = function isValidDay(v) {
  return /^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(v); //  01～31, 1~31
};

/**
 * Check if the string is legitimate
 * @param {String} v 
 * @returns {Boolean}  
 */
var isValidDate = function isValidDate(v) {
  return !(String(new Date(v)).toLowerCase() === 'invalid date');
};

/**
 * Get calendar date
 * @param {Date | String} v 
 * @returns {Date | String}  yyyy-MM-dd
 */
function dateFormat(v) {
  var date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
  return date;
}

/**
 * Get date details
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @typedef {Object} JSON
 */
function getDateDetails(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = dateFormat(v);
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1, padZeroEnabled);
  var day = padZero(date.getDate(), padZeroEnabled);
  var hours = padZero(date.getHours(), padZeroEnabled);
  var minutes = padZero(date.getMinutes(), padZeroEnabled);
  var seconds = padZero(date.getSeconds(), padZeroEnabled);
  return {
    year: String(year),
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/**
 * Get calendar date
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd
 */
function getCalendarDate(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = dateFormat(v);
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1, padZeroEnabled);
  var day = padZero(date.getDate(), padZeroEnabled);
  var hours = padZero(date.getHours(), padZeroEnabled);
  var minutes = padZero(date.getMinutes(), padZeroEnabled);
  var seconds = padZero(date.getSeconds(), padZeroEnabled);
  var res = "".concat(year, "-").concat(month, "-").concat(day);
  return res;
}

/**
 * Get today date
 * @returns {String}  yyyy-MM-dd
 */
function getTodayDate() {
  return getCalendarDate(new Date());
}

/**
 * Get tomorrow date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getTomorrowDate(v) {
  var today = dateFormat(v);
  var _tomorrow = today;
  _tomorrow.setDate(_tomorrow.getDate() + 1);
  var tomorrow = getCalendarDate(_tomorrow);
  return tomorrow;
}

/**
 * Get yesterday date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getYesterdayDate(v) {
  var today = dateFormat(v);
  var _yesterday = today;
  _yesterday.setDate(_yesterday.getDate() - 1);
  var yesterday = getCalendarDate(_yesterday);
  return yesterday;
}

/**
 * Get specified date
 * @param {Date | String} v 
 * @param {Number} days  The number of days forward or backward, which can be a negative number
 * @returns {String}  yyyy-MM-dd
 */
/* console.log(getSpecifiedDate(getTodayDate(), -180)); // 2023-08-27 (180 days before February 23, 202) */
function getSpecifiedDate(v, days) {
  var today = dateFormat(v);
  var _specifiedDay = today;
  _specifiedDay.setDate(_specifiedDay.getDate() + days);
  var specifiedDay = getCalendarDate(_specifiedDay);
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
function getDaysInLastMonths() {
  var monthsAgo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var today = new Date();
  var pastDate = new Date();
  pastDate.setMonth(today.getMonth() - monthsAgo);
  var diffInMs = today.getTime() - pastDate.getTime();
  var diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}

/**
 * Get next month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextMonthDate(v) {
  var today = dateFormat(v);
  today.setMonth(today.getMonth() + 1);
  return getCalendarDate(today);
}

/**
 * Get previous month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevMonthDate(v) {
  var today = dateFormat(v);
  today.setMonth(today.getMonth() - 1);
  return getCalendarDate(today);
}

/**
 * Get next year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextYearDate(v) {
  var today = dateFormat(v);
  var current = new Date(today);
  current.setFullYear(current.getFullYear() + 1);
  return getCalendarDate(current);
}

/**
 * Get previous year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevYearDate(v) {
  var today = dateFormat(v);
  var current = new Date(today);
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
function getLastDayInMonth(v) {
  var targetMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var date = dateFormat(v);
  return new Date(date.getFullYear(), typeof targetMonth !== 'undefined' ? targetMonth : date.getMonth() - 1, 0).getDate();
}

/**
 * Get current year
 * @returns {Number}
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Get current month
 * @param {Boolean} padZeroEnabled 
 * @returns {Number|String}
 */
function getCurrentMonth() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var m = new Date().getMonth() + 1;
  return padZeroEnabled ? String(m).padStart(2, '0') : m;
}

/**
 * Get current day
 * @param {Boolean} padZeroEnabled 
 * @returns {Number|String}
 */
function getCurrentDay() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var d = new Date().getDate();
  return padZeroEnabled ? String(d).padStart(2, '0') : d;
}

/**
 * Get first and last month day
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns  {Array}
 */
function getFirstAndLastMonthDay(year) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var theFirst = new Date(year, 0, 1).getDate();
  var theLast = new Date(year, 11, 31).getDate();
  var padZero = function padZero(num) {
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
function getCurrentDate() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var date = new Date();
  var padZero = function padZero(num) {
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1);
  var day = padZero(date.getDate());
  var hours = padZero(date.getHours());
  var minutes = padZero(date.getMinutes());
  return {
    today: "".concat(year, "-").concat(month, "-").concat(day),
    yearStart: "".concat(year, "-01-01"),
    yearEnd: "".concat(year, "-12-").concat(getLastDayInMonth(date, 12))
  };
}

/**
 * Get full time
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @param {Boolean} hasSeconds 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function getFullTime(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasSeconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var padZero = function padZero(num) {
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1);
  var day = padZero(date.getDate());
  var hours = padZero(date.getHours());
  var minutes = padZero(date.getMinutes());
  var seconds = padZero(date.getSeconds());
  var res = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
  var res2 = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
  return hasSeconds ? res : res2;
}

/**
 * Add hours
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateHours(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Add minutes
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateMinutes(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}
/**
 * Add days
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateDays(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 24 * 60 * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Convert timestamp to date
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function timestampToDate(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return getFullTime(new Date(v), padZeroEnabled);
}

/**
 * Get the date of the specified month
 * @param {Number} year 
 * @param {Number} month 
 * @returns {Array<string>} 
 */
function getMonthDates(year, month) {
  var dates = [];

  // Get the total number of days in the month
  var daysInMonth = new Date(year, month, 0).getDate();
  for (var day = 1; day <= daysInMonth; day++) {
    dates.push("".concat(year, "-").concat(String(month).padStart(2, '0'), "-").concat(String(day).padStart(2, '0'))); // 'YYYY-MM-DD'
  }

  return dates;
}

/**
 * Get the date of the specified week (From Sunday)
 * @param {Number} weekOffset 
 * @returns {Array<Date>} 
 */
function getWeekDatesFromSun(weekOffset) {
  var dates = [];
  var currentDate = new Date();

  // Calculate the date of Sunday
  var dayOfWeek = currentDate.getDay(); // 0 is Sunday
  currentDate.setDate(currentDate.getDate() - dayOfWeek + weekOffset * 7);

  // Get the date of the week
  for (var i = 0; i < 7; i++) {
    var date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date);
  }
  return dates;
}

/**
 * Get the date of the specified week (From Monday)
 * @param {Number} weekOffset 
 * @returns {Array<Date>} 
 */
function getWeekDatesFromMon(weekOffset) {
  var dates = [];
  var currentDate = new Date();

  // Set the date to Monday
  var dayOfWeek = currentDate.getDay();
  var diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  currentDate.setDate(currentDate.getDate() + diffToMonday + weekOffset * 7);

  // Get the date of the week
  for (var i = 0; i < 7; i++) {
    var date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date);
  }
  return dates;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});