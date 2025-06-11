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
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isTel": () => (/* binding */ isTel),
/* harmony export */   "isValidNumeric": () => (/* binding */ isValidNumeric)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Check if a string is a valid number
 * @param str - The string to check
 * @returns boolean indicating if the string is a valid number
 */
function isValidNumeric(str) {
  if (typeof str !== "string") return false; // we only process strings!
  if (!isNaN(Number(str)) &&
  // use type coercion to parse the _entirety_ of the string
  !isNaN(parseFloat(str)) // ensure strings of whitespace fail
  ) {
    return true;
  }
  return false;
}

/**
 * Determine whether it is in JSON format
 * @param str - The value to check
 * @returns boolean indicating if the value is valid JSON
 */
function isJSON(str) {
  if (typeof str === 'string' && str.length > 0) {
    if (str.replace(/\"\"/g, '').replace(/\,/g, '') === '[{}]') {
      return false;
    }
    if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    }
    return false;
  }
  if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
    return true;
  }
  return false;
}

/**
 * Check if input is empty
 * @param input - The input to check (string or array of strings)
 * @returns boolean indicating if the input is empty
 */
function isEmpty(input) {
  if (Array.isArray(input)) {
    return input.some(function (str) {
      return !str.replace(/\s/g, '').length === true;
    });
  }
  return !input.replace(/\s/g, '').length === true;
}

/**
 * Check if input is a valid number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid number
 */
function isNumber(input) {
  var reg = /^[\d|\.|,]+$/;
  return reg.test(input);
}

/**
 * Check if input is a valid integer
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid integer
 */
function isInt(input) {
  if (input === "") {
    return false;
  }
  var reg = /\D+/;
  return !reg.test(input);
}

/**
 * Check if input is a valid email address
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid email
 */
function isEmail(input) {
  var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
  return reg.test(input);
}

/**
 * Check if input is a valid telephone number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid telephone number
 */
function isTel(input) {
  var reg = /^[0-9- ]{7,20}$/;
  return reg.test(input);
}

/**
 * Check if input is a valid mobile number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid mobile number
 */
function isMobile(input) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(input);
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});