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
/******/ 	var __webpack_modules__ = ({

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "isValidNumeric": () => (/* binding */ isValidNumeric)
/* harmony export */ });
/* unused harmony exports isEmpty, isNumber, isInt, isEmail, isTel, isMobile */
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJSON": () => (/* reexport safe */ _validate__WEBPACK_IMPORTED_MODULE_0__.isJSON),
/* harmony export */   "isValidNumeric": () => (/* reexport safe */ _validate__WEBPACK_IMPORTED_MODULE_0__.isValidNumeric),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
 */
function setDefaultOptions(props, options) {
  if (_typeof(options) === ( true ? "undefined" : 0) || options === null || options === false) options = {};
  //Set a default configuration
  if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(props)) {
    var defaultConfigValues = Object.values(props);
    Object.keys(props).forEach(function (prop, index) {
      // Well-formed string type
      Object.keys(options).forEach(function (prop2, index2) {
        if (prop2 === prop) {
          var _v = options[prop2];
          if (_v == 'true') _v = true;
          if (_v == 'false') _v = false;
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isValidNumeric)(_v)) _v = parseFloat(_v);
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
          options[prop2] = _v;
        }
      });

      //
      if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
    });
  }
  return options;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});