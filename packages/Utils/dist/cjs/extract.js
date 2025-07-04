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
/* harmony export */   "extractContentsOfMixedCharactersWithBraces": () => (/* binding */ extractContentsOfMixedCharactersWithBraces),
/* harmony export */   "extractContentsOfMixedCharactersWithComma": () => (/* binding */ extractContentsOfMixedCharactersWithComma),
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

/**
 * Parses a braces-separated string of `{label[value]}` pairs into an array of objects.
 *
 * Example:
 *   Input: "{Poor[c]}{Sub-option 4[c-2]}{Empty[]}"
 *   Input: "{{Poor[c]}{Sub-option 4[c-2]}{Empty[]}[]}"
 * 
 *   Output: [
 *     { label: "Poor", value: "c" },
 *     { label: "Sub-option 4", value: "c-2" },
 *     { label: "Empty", value: "" }
 *   ]
 *
 * @param {string} str - The input string containing one or more `{label[value]}` segments.
 * @returns {Array<{label: string, value: string}>} - An array of extracted label-value objects.
 */
function extractContentsOfMixedCharactersWithBraces(str) {
  // Fix the extra '{' at the beginning
  var cleaned = str.replace(/^{{/, '{');

  // Remove empty {} or {[]} tail
  var trimmed = cleaned.replace(/\{\[\]\}$/, '');

  // The match is like {label[value]}
  var pattern = /\{(.*?)\[(.*?)\]\}/g;
  var matches = Array.from(trimmed.matchAll(pattern));
  return matches.map(function (match) {
    return {
      label: match[1],
      value: match[2]
    };
  });
}

/**
 * Parses a comma-separated string of `label[value]` pairs into an array of objects.
 *
 * Example:
 *   Input: "Poor[c],Sub-option 4[c-2],Empty[]"
 *   Output: [
 *     { label: "Poor", value: "c" },
 *     { label: "Sub-option 4", value: "c-2" },
 *     { label: "Empty", value: "" }
 *   ]
 *
 * @param {string} str - A string containing label-value pairs in the format `label[value]`, separated by commas.
 * @returns {Array<{ label: string, value: string }>} - An array of parsed objects.
 */
function extractContentsOfMixedCharactersWithComma(str) {
  return str.split(",").map(function (item) {
    return item.trim();
  }).map(function (item) {
    var match = item.match(/^(.*?)\[(.*?)\]$/);
    if (match) {
      return {
        label: match[1],
        value: match[2]
      };
    }
    return null;
  }).filter(Boolean);
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});