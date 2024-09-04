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
/* harmony export */   "deepClone": () => (/* binding */ deepClone),
/* harmony export */   "flatData": () => (/* binding */ flatData),
/* harmony export */   "removeArrDuplicateItems": () => (/* binding */ removeArrDuplicateItems)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Remove Duplicate objects from JSON Array
 * @param {Array} obj 
 * @param {String} fieldName 
 */
function removeArrDuplicateItems(obj, fieldName) {
  if (!Array.isArray(obj)) return [];
  var clean = obj.filter(function (item, index, self) {
    return index === self.findIndex(function (t) {
      return t[fieldName] === item[fieldName];
    });
  });
  return clean;
}
;

/**
 * Deep clone
 * @param {*} obj 
 */
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (_typeof(obj) === 'object' && obj !== null) {
    var clone = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  } else {
    return obj;
  }
}

/**
 * Flat Data
 * @param {*} data 
 * @returns 
 */
function flatData(data) {
  var result = [];
  var iterate = function iterate(obj) {
    if (!obj) {
      return;
    }
    obj.forEach(function (item) {
      result.push(item);
      if (item.children) {
        iterate(item.children);
      }

      // delete current item children
      delete item.children;
    });
  };
  iterate(data);
  return result;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});