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
/* harmony export */   "calcAdd": () => (/* binding */ calcAdd),
/* harmony export */   "calcDiv": () => (/* binding */ calcDiv),
/* harmony export */   "calcMul": () => (/* binding */ calcMul),
/* harmony export */   "calcSub": () => (/* binding */ calcSub),
/* harmony export */   "evaluate": () => (/* binding */ evaluate),
/* harmony export */   "exceedDecimalPlaces": () => (/* binding */ exceedDecimalPlaces),
/* harmony export */   "formatNumber": () => (/* binding */ formatNumber),
/* harmony export */   "isDecimal": () => (/* binding */ isDecimal),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric),
/* harmony export */   "numZeroPad": () => (/* binding */ numZeroPad),
/* harmony export */   "truncateDecimals": () => (/* binding */ truncateDecimals)
/* harmony export */ });
/**
 * Evaluating a string as a mathematical expression
 * @param {String} s      - An input string
 * @returns {Number}   - New calculation result.
 */
function evaluate(s) {
  var chars = s.replace(/\s/g, '').split("");
  var n = [],
    op = [],
    index = 0,
    oplast = true;
  n[index] = "";

  // Parse the expression
  for (var c = 0; c < chars.length; c++) {
    if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
      op[index] = chars[c];
      index++;
      n[index] = "";
      oplast = true;
    } else {
      n[index] += chars[c];
      oplast = false;
    }
  }

  // Calculate the expression
  var resStr = parseFloat(n[0]);
  for (var o = 0; o < op.length; o++) {
    var num = parseFloat(n[o + 1]);
    switch (op[o]) {
      case "+":
        resStr = resStr + num;
        break;
      case "-":
        resStr = resStr - num;
        break;
      case "*":
        resStr = resStr * num;
        break;
      case "/":
        resStr = resStr / num;
        break;
    }
  }
  return resStr;
}

/**
 * Addition
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcAdd(num1, num2) {
  var baseNum, baseNum1, baseNum2;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * Subtraction
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcSub(num1, num2) {
  var baseNum, baseNum1, baseNum2;
  var precision;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
  return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

/**
 * Multiplication
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcMul(num1, num2) {
  var baseNum = 0;
  try {
    baseNum += num1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    baseNum += num2.toString().split(".")[1].length;
  } catch (e) {}
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}
;
/**
 * Division
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcDiv(num1, num2) {
  var baseNum1 = 0,
    baseNum2 = 0;
  var baseNum3, baseNum4;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum3 = Number(num1.toString().replace(".", ""));
  baseNum4 = Number(num2.toString().replace(".", ""));
  return baseNum3 / baseNum4 * Math.pow(10, baseNum2 - baseNum1);
}

/**
 * Determine if it's a number
 * @param {*} n
 * @returns {Boolean}
 */
function isNumeric(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}

/**
 * Determine if it's a decimal
 * @param {Number} num
 * @returns {Boolean}
 */
function isDecimal(num) {
  return num !== Math.floor(num);
}

/**
 * Truncate Decimals
 * @param {Number} num 
 * @param {Number} decimalPlaces 
 * @returns {Number}
 */
function truncateDecimals(num, decimalPlaces) {
  var factor = Math.pow(10, decimalPlaces);
  return Math.floor(num * factor) / factor;
}

/**
 * Zero Pad
 * @param {Number|String} n
 * @param {?Number} decimalPlaces 
 * @returns {String}
 */
function numZeroPad(n) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return parseFloat(String(n)).toFixed(decimalPlaces);
}

/**
 * Check whether the number of decimal places exceeds the specified value
 * @param {Number|String} s
 * @param {Number} decimalPlaces 
 * @returns {Boolean}
 */
function exceedDecimalPlaces(s, decimalPlaces) {
  var parts = String(s).split(".");
  return parts[1] && parts[1].length > decimalPlaces;
}

/**
 * Format number
 * @param {*} inputValue 
 * @param {?Number} decimalPlaces 
 * @param {Number|undefined} inputMin 
 * @param {Number|undefined} inputMax 
 * @returns {String}
 */
function formatNumber(inputValue) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var inputMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var inputMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  // STEP 1
  // =================================================================
  // Determine whether the value is legitimate
  if (inputValue === '' || !isNumeric(inputValue)) {
    return '';
  }

  // STEP 2
  // =================================================================
  // check min or max value
  if (typeof inputMin !== 'undefined' && typeof inputMax !== 'undefined' && isNumeric(inputMin) && isNumeric(inputMax)) {
    inputValue = Math.min(Number(inputValue), inputMax);
    inputValue = Math.max(Number(inputValue), inputMin);
  }

  // STEP 3
  // =================================================================
  // Remove characters that are not numbers and decimal points
  var formattedValue = String(inputValue).replace(/[^0-9.\-]/g, "");

  // STEP 4
  // =================================================================
  // Prevent multiple decimal points
  var parts = formattedValue.split(".");
  if (parts.length > 2) {
    formattedValue = "".concat(parts[0], ".").concat(parts[1]);
  }

  // STEP 5
  // =================================================================
  // Limit the number of decimal places
  if (parts[1] && parts[1].length > decimalPlaces) {
    formattedValue = parseFloat(formattedValue).toFixed(decimalPlaces);
  }

  // STEP 6
  // =================================================================
  // Remove invalid zeros
  formattedValue = Number(formattedValue).toPrecision();
  return formattedValue;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});