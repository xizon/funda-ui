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
/* harmony export */   "extractContentsOfBraces": () => (/* binding */ extractContentsOfBraces),
/* harmony export */   "extractContentsOfBrackets": () => (/* binding */ extractContentsOfBrackets),
/* harmony export */   "extractContentsOfParentheses": () => (/* binding */ extractContentsOfParentheses),
/* harmony export */   "extractorExist": () => (/* binding */ extractorExist)
/* harmony export */ });
/**
 * Determine whether an extractor is included
 * @param {String} str    =>  input string. such as 'a[1], b[2]', '{a[1]}'
 * @returns {Boolean} 
 */
function extractorExist(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return false;
  }
  var res = false;
  if (str !== null && str !== void 0 && str.match(/(\[.*?\])/gi)) {
    res = true;
  }
  return res;
}

/**
 * Extract the contents of square brackets
 * @param {String} str    =>  input string. such as '[1,2] [f][c]'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBrackets(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\[]+(?=(\[ \])|\])/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of curly braces
 * @param {String} str    =>  input string. such as '{1,2} {f}{c}'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBraces(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\{]+(?=(\{ \})|\})/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of parentheses
 * @param {String} str    =>  input string. such as '(1,2) (f)(c)'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfParentheses(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\(]+(?=(\( \))|\))/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});