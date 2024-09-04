(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"));
	else
		root["RPB"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__787__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_987__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_987__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_987__.o(definition, key) && !__nested_webpack_require_987__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_987__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_987__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      __nested_webpack_require_987__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_987__.d(__webpack_exports__, {
        /* harmony export */"debounce": function debounce() {
          return (/* binding */_debounce
          );
        },
        /* harmony export */"throttle": function throttle() {
          return (/* binding */_throttle
          );
        }
        /* harmony export */
      });
      /*
      * Debounce
      *
      * @param  {Function} fn    - A function to be executed within the time limit.
      * @param  {Number} limit   - Waiting time.
      * @return {*}       - Returns a new function.
      */
      function _debounce(fn) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var timer;
        return function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(this, arguments);
          }, limit);
        };
      }

      /*
      * Throttle
      *
      * @param  {Function} fn    - A function to be executed within the time limit.
      * @param  {Number} limit   - Waiting time.
      * @return {*}       - Returns a new function.
      */
      function _throttle(fn) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var waiting = false;
        return function () {
          if (!waiting) {
            fn.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
              waiting = false;
            }, limit);
          }
        };
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1465__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1465__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      (function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_1465__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1465__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_1465__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1465__.o(definition, key) && !__nested_webpack_require_1465__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_1465__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1465__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (function () {
        __nested_webpack_require_1465__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1465__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1465__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1465__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * Create an available ID
         * 
        */

        var useComId = function useComId() {
          return "ID-".concat((0, react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-"));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useComId;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_performance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(840);
/* harmony import */ var funda_utils_dist_cjs_performance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_performance__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Scrollbar = function Scrollbar(props) {
  var onlyVerticle = props.onlyVerticle,
    onlyHorizontal = props.onlyHorizontal,
    arrowIcons = props.arrowIcons,
    disableArrow = props.disableArrow,
    horizontallyWithWheel = props.horizontallyWithWheel,
    autoScrollTo = props.autoScrollTo,
    data = props.data,
    onMove = props.onMove,
    id = props.id,
    children = props.children;
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var AUTO_SCROLL_TO_DIR = typeof autoScrollTo === 'undefined' ? false : autoScrollTo;
  var icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 0 24 24",
    fill: "none",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 0 24 24",
    fill: "none",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
  }), " "))] : arrowIcons;
  var contentAreaScrollUpdate = (0,funda_utils_dist_cjs_performance__WEBPACK_IMPORTED_MODULE_2__.throttle)(handleScrollEvent, 5);

  // Vertical (default)
  //========================================
  var scrollTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollThumbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState2 = _slicedToArray(_useState, 2),
    thumbHeight = _useState2[0],
    setThumbHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollStartPosition = _useState4[0],
    setScrollStartPosition = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    initialScrollTop = _useState6[0],
    setInitialScrollTop = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDragging = _useState8[0],
    setIsDragging = _useState8[1];

  // Horizontal
  //========================================
  var scrollTrackHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollThumbHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollBarHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var horizontalObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState10 = _slicedToArray(_useState9, 2),
    thumbWidth = _useState10[0],
    setThumbWidth = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    scrollHorizontalStartPosition = _useState12[0],
    setScrollHorizontalStartPosition = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    initialScrollLeft = _useState14[0],
    setInitialScrollLeft = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isHorizontalDragging = _useState16[0],
    setIsHorizontalDragging = _useState16[1];

  // common functions
  //========================================
  function handleScrollEvent(e) {
    var _contentRef$current, _contentRef$current2;
    if (typeof e === 'undefined') return;
    var scrollLeft = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.scrollLeft;
    var scrollTop = (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 ? void 0 : _contentRef$current2.scrollTop;
    if (onlyHorizontal && horizontallyWithWheel) {
      var direction = e.deltaY < 0 ? 'left' : 'right';
      horizontalContentScrollTo(direction, false); //do not use `smooth`
    }

    onMove === null || onMove === void 0 ? void 0 : onMove({
      scrollLeft: scrollLeft,
      scrolTop: scrollTop,
      data: e
    });
  }

  // Vertical --> functions
  //========================================

  function contentScrollTo(dir) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var current = contentRef.current;
    if (current) {
      var pivot = current.scrollHeight / 10;
      var speed = pivot >= 200 ? 200 : pivot;
      speed = !max ? speed : current.scrollHeight;
      var scrollAmount = dir === 'down' ? speed : -speed;
      current.scrollBy({
        top: scrollAmount,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  }
  function contentScrollToMax(dir) {
    contentScrollTo(dir, true, true);
  }
  function handleResize(ref, trackSize) {
    var clientHeight = ref.clientHeight,
      scrollHeight = ref.scrollHeight;
    if (clientHeight === 0 || scrollHeight === 0) return;
    setThumbHeight(Math.max(clientHeight / scrollHeight * trackSize, 20));

    // do not need scrolling
    if (clientHeight / scrollHeight === 1) {
      // hide scrollbar
      if (scrollBarRef.current !== null) scrollBarRef.current.classList.add('disabled');
    } else {
      if (scrollBarRef.current !== null) scrollBarRef.current.classList.remove('disabled');
    }
  }
  function handleScrollButton(direction) {
    contentScrollTo(direction);
  }
  var handleTrackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var trackCurrent = scrollTrackRef.current;
    var contentCurrent = contentRef.current;
    if (trackCurrent && contentCurrent) {
      var clientY = e.clientY;
      var target = e.target;
      var rect = target.getBoundingClientRect();
      var trackTop = rect.top;
      var thumbOffset = -(thumbHeight / 2);
      var clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
      var scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
      contentCurrent.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [thumbHeight]);
  var handleThumbPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
      return;
    }
    var _contentRef$current3 = contentRef.current,
      contentTop = _contentRef$current3.scrollTop,
      contentHeight = _contentRef$current3.scrollHeight;
    var trackHeight = scrollTrackRef.current.clientHeight;
    var newTop = +contentTop / +contentHeight * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    var thumb = scrollThumbRef.current;
    thumb.style.top = "".concat(newTop, "px");
  }, []);
  var handleThumbMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);
  var handleThumbMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging && contentRef.current && scrollStartPosition) {
      var _contentRef$current4 = contentRef.current,
        contentScrollHeight = _contentRef$current4.scrollHeight,
        contentOffsetHeight = _contentRef$current4.offsetHeight;
      var deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);
      var newScrollTop = Math.min(initialScrollTop + deltaY, contentScrollHeight - contentOffsetHeight);
      contentRef.current.scrollTop = newScrollTop;
    }
  }, [isDragging, scrollStartPosition, thumbHeight]);
  var handleThumbMouseUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  // Horizontal  --> functions
  //========================================    

  function horizontalContentScrollTo(dir) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var current = contentRef.current;
    if (current) {
      var pivot = current.scrollWidth / 10;
      var speed = pivot >= 200 ? 200 : pivot;
      speed = !max ? speed : current.scrollWidth;
      var scrollAmount = dir === 'right' ? speed : -speed;
      current.scrollBy({
        left: scrollAmount,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  }
  function horizontalContentScrollToMax(dir) {
    horizontalContentScrollTo(dir, true, true);
  }
  function handleHorizontalResize(ref, trackSize) {
    var clientWidth = ref.clientWidth,
      scrollWidth = ref.scrollWidth;
    if (clientWidth === 0 || scrollWidth === 0) return;
    setThumbWidth(Math.max(clientWidth / scrollWidth * trackSize, 20));

    // do not need scrolling
    if (clientWidth / scrollWidth === 1) {
      // hide scrollbar
      if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.add('disabled');
    } else {
      if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.remove('disabled');
    }
  }
  function handleHorizontalScrollButton(direction) {
    horizontalContentScrollTo(direction);
  }
  var handleHorizontalTrackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var trackCurrent = scrollTrackHorizontalRef.current;
    var contentCurrent = contentRef.current;
    if (trackCurrent && contentCurrent) {
      var clientX = e.clientX;
      var target = e.target;
      var rect = target.getBoundingClientRect();
      var trackLeft = rect.left;
      var thumbOffset = -(thumbWidth / 2);
      var clickRatio = (clientX - trackLeft + thumbOffset) / trackCurrent.clientWidth;
      var scrollAmount = Math.floor(clickRatio * contentCurrent.scrollWidth);
      contentCurrent.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [thumbWidth]);
  var handleHorizontalThumbPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!contentRef.current || !scrollTrackHorizontalRef.current || !scrollThumbHorizontalRef.current) {
      return;
    }
    var _contentRef$current5 = contentRef.current,
      contentLeft = _contentRef$current5.scrollLeft,
      contentWidth = _contentRef$current5.scrollWidth;
    var trackWidth = scrollTrackHorizontalRef.current.clientWidth;
    var newLeft = +contentLeft / +contentWidth * trackWidth;
    newLeft = Math.min(newLeft, trackWidth - thumbWidth);
    var thumb = scrollThumbHorizontalRef.current;
    thumb.style.left = "".concat(newLeft, "px");
  }, []);
  var handleHorizontalThumbMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setScrollHorizontalStartPosition(e.clientX);
    if (contentRef.current) setInitialScrollLeft(contentRef.current.scrollLeft);
    setIsHorizontalDragging(true);
  }, []);
  var handleHorizontalThumbMouseUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isHorizontalDragging) {
      setIsHorizontalDragging(false);
    }
  }, [isHorizontalDragging]);
  var handleHorizontalThumbMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isHorizontalDragging && contentRef.current && scrollHorizontalStartPosition) {
      var _contentRef$current6 = contentRef.current,
        contentScrollWidth = _contentRef$current6.scrollWidth,
        contentOffsetWidth = _contentRef$current6.offsetWidth;
      var deltaY = (e.clientX - scrollHorizontalStartPosition) * (contentOffsetWidth / thumbWidth);
      var newScrollLeft = Math.min(initialScrollLeft + deltaY, contentScrollWidth - contentOffsetWidth);
      contentRef.current.scrollLeft = newScrollLeft;
    }
  }, [isHorizontalDragging, scrollHorizontalStartPosition, thumbWidth]);

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //
    if (contentRef.current && scrollTrackRef.current && scrollTrackHorizontalRef.current) {
      // Vertical
      var ref = contentRef.current;
      var trackSize = scrollTrackRef.current.clientHeight;
      observer.current = new ResizeObserver(function () {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPosition);

      //Horizontal
      var horizontalRef = contentRef.current;
      var trackHorizontalSize = scrollTrackHorizontalRef.current.clientWidth;
      horizontalObserver.current = new ResizeObserver(function () {
        handleHorizontalResize(horizontalRef, trackHorizontalSize);
      });
      horizontalObserver.current.observe(horizontalRef);
      horizontalRef.addEventListener('scroll', handleHorizontalThumbPosition);

      // auto scroll to some position
      setTimeout(function () {
        if (AUTO_SCROLL_TO_DIR !== false && (AUTO_SCROLL_TO_DIR == 'down' || AUTO_SCROLL_TO_DIR == 'up')) {
          contentScrollToMax(AUTO_SCROLL_TO_DIR);
        }
        if (AUTO_SCROLL_TO_DIR !== false && (AUTO_SCROLL_TO_DIR == 'left' || AUTO_SCROLL_TO_DIR == 'right')) {
          horizontalContentScrollToMax(AUTO_SCROLL_TO_DIR);
        }
      }, 50);
      return function () {
        var _observer$current, _horizontalObserver$c;
        (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPosition);
        (_horizontalObserver$c = horizontalObserver.current) === null || _horizontalObserver$c === void 0 ? void 0 : _horizontalObserver$c.unobserve(horizontalRef);
        horizontalRef.removeEventListener('scroll', handleHorizontalThumbPosition);
      };
    }
  }, [data]);

  // Listen for mouse events to handle scrolling by dragging the thumb
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Add function to the element that should be used as the scrollable area.
    if (contentRef.current) {
      contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
      contentRef.current.addEventListener('wheel', contentAreaScrollUpdate);
      contentAreaScrollUpdate();
    }
    return function () {
      if (contentRef.current) {
        contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
      }
    };
  }, [handleThumbMouseMove, handleThumbMouseUp, handleHorizontalThumbMouseMove, handleHorizontalThumbMouseUp]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: idRes,
    ref: rootRef,
    className: "custom-scrollbars__wrapper ".concat(onlyHorizontal ? 'custom-scrollbars__wrapper--horizontal' : '', " ").concat(disableArrow ? 'arrow-disabled' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__content",
    ref: contentRef
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollBarRef,
    className: "custom-scrollbars__scrollbar",
    style: onlyHorizontal ? {
      display: 'none'
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleScrollButton('up');
    }
  }, icons[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track-and-thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track",
    ref: scrollTrackRef,
    onClick: handleTrackClick,
    style: {
      cursor: isDragging ? 'grabbing' : 'pointer'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__thumb",
    ref: scrollThumbRef,
    onMouseDown: handleThumbMouseDown,
    onMouseMove: handleThumbMouseMove,
    onMouseUp: handleThumbMouseUp,
    style: {
      height: "".concat(thumbHeight, "px"),
      cursor: isDragging ? 'grabbing' : 'grab'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleScrollButton('down');
    }
  }, icons[1])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollBarHorizontalRef,
    className: "custom-scrollbars__scrollbar-horizontal",
    style: onlyVerticle ? {
      display: 'none'
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleHorizontalScrollButton('left');
    }
  }, icons[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track-and-thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track",
    ref: scrollTrackHorizontalRef,
    onClick: handleHorizontalTrackClick,
    style: {
      cursor: isHorizontalDragging ? 'grabbing' : 'pointer'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__thumb",
    ref: scrollThumbHorizontalRef,
    onMouseDown: handleHorizontalThumbMouseDown,
    onMouseMove: handleHorizontalThumbMouseMove,
    onMouseUp: handleHorizontalThumbMouseUp,
    style: {
      width: "".concat(thumbWidth, "px"),
      cursor: isHorizontalDragging ? 'grabbing' : 'grab'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleHorizontalScrollButton('right');
    }
  }, icons[3]))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});