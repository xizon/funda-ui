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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MasonryLayout = function MasonryLayout(props) {
  var columns = props.columns,
    gap = props.gap,
    breakPoints = props.breakPoints,
    _props$balanceColumnH = props.balanceColumnHeights,
    balanceColumnHeights = _props$balanceColumnH === void 0 ? true : _props$balanceColumnH,
    id = props.id,
    children = props.children,
    onResize = props.onResize;
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var itemWrapperKey = 'column-';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    orginalItems = _useState4[0],
    setOrginalItems = _useState4[1];
  var COLS = typeof columns !== 'undefined' ? parseFloat(columns) : 2;
  var GAP = typeof gap !== 'undefined' ? parseFloat(gap) : 15;
  var colsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
  var windowResizeUpdate = (0,funda_utils_dist_cjs_performance__WEBPACK_IMPORTED_MODULE_2__.debounce)(handleWindowUpdate, 50);
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  var calcInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (w) {
    var _rootRef$current;
    var minColIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var maxColIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var colCount = COLS;
    var columnWrapper = {};
    var result = [];

    // STEP 1:
    //=================
    // calculate responsive column number
    if (breakPoints) {
      var columnsCountBreakPoints = breakPoints;
      var _breakPoints = Object.keys(columnsCountBreakPoints).map(function (v) {
        return Number(v);
      }).sort(function (a, b) {
        return a - b;
      });
      colCount = _breakPoints.length > 0 ? columnsCountBreakPoints[_breakPoints[0]] : COLS;
      _breakPoints.forEach(function (num) {
        if (num < w) {
          colCount = columnsCountBreakPoints[num];
        }
      });

      // console.log(w, _breakPoints, colCount);
    }

    // STEP 2:
    //=================
    // create columns
    for (var i = 0; i < colCount; i++) {
      columnWrapper["".concat(itemWrapperKey).concat(i)] = [];
    }

    // STEP 3:
    //=================
    // Calculate the wrapper width based on the gap
    var wrapperTotalGap = 0;
    for (var _i2 = 0; _i2 < colCount; _i2++) {
      if (_i2 > 0) {
        wrapperTotalGap += GAP;
      }
    }
    if (rootRef.current) rootRef.current.style.width = "calc(100% - ".concat(wrapperTotalGap, "px)");

    // STEP 4:
    //=================
    // Divide the children into columns
    var items = [];
    if (children && !Array.isArray(children)) {
      items.push(children);
    }
    if (children && Array.isArray(children)) {
      items = children;
    }

    // get wrapper width
    var wrapperWidth = ((_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.offsetWidth) || 0;
    var perBrickWidth = wrapperWidth / colCount; // Prevent the width of the internal elements from overflowing

    // return wrapper width
    onResize === null || onResize === void 0 ? void 0 : onResize(wrapperWidth);

    //
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(children, function (child, i) {
      if (!child) return;
      var columnIndex = i % colCount;
      var itemRow = Math.floor(i / colCount);
      var itemIndex = itemRow * colCount + columnIndex;

      //
      columnWrapper["".concat(itemWrapperKey).concat(columnIndex)].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        "data-row": itemRow,
        "data-col": columnIndex,
        "data-index": itemIndex,
        style: {
          marginBottom: "".concat(GAP, "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: perBrickWidth > 0 ? {
          width: perBrickWidth + 'px'
        } : undefined
      }, child)));
    });

    // Add the item to the shortest column
    if (balanceColumnHeights && typeof minColIndex !== 'undefined' && typeof maxColIndex !== 'undefined' && items.length > COLS) {
      var maxColLastElement = columnWrapper["".concat(itemWrapperKey).concat(maxColIndex)].pop();
      columnWrapper["".concat(itemWrapperKey).concat(minColIndex)].push(maxColLastElement);
    }

    // STEP 5:
    //=================
    // Wrapping the items in each column with a div and pushing it into the result array
    var _loop = function _loop(_i3) {
      result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: _i3,
        className: "masonry-item",
        style: {
          marginLeft: "".concat(_i3 > 0 ? GAP : 0, "px"),
          flex: '0 1 auto'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "masonry-item-inner",
        "data-inner-col": _i3,
        ref: function ref(el) {
          if (el) {
            colsRef.current.set("col-".concat(_i3), el);
          } else {
            colsRef.current["delete"]("col-".concat(_i3));
          }
        }
      }, columnWrapper["".concat(itemWrapperKey).concat(_i3)])));
    };
    for (var _i3 = 0; _i3 < colCount; _i3++) {
      _loop(_i3);
    }

    // STEP 6:
    //=================
    // update items
    setItems(result);

    // update orginal items
    if (typeof minColIndex === 'undefined' && typeof maxColIndex === 'undefined') {
      setOrginalItems(result);
    }
  }, [children]);
  function handleWindowUpdate() {
    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerWidth != windowWidth) {
      // Update the window width for next time
      windowWidth = window.innerWidth;

      // Do stuff here
      calcInit(windowWidth);
    }
  }
  function adjustPosition() {
    if (rootRef.current === null) return;

    // Adjust the position of the element
    var initCols = function initCols() {
      var columnHeights = new Array(COLS).fill(0);
      react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(items, function (child, i) {
        if (!child) return;
        var columnIndex = i % COLS;

        // update column height
        var columnInner = colsRef.current.get("col-".concat(columnIndex));
        if (columnInner) {
          var height = columnInner.offsetHeight;
          columnHeights[columnIndex] = height;
        }
      });

      // Find the shortest height column
      var minHeight = Math.min.apply(Math, _toConsumableArray(columnHeights));
      var maxHeight = Math.max.apply(Math, _toConsumableArray(columnHeights));
      if (minHeight > 0 && maxHeight > 0 && maxHeight / 2 > minHeight) {
        var columnMinHeightIndex = columnHeights.indexOf(minHeight);
        var columnMaxHeightIndex = columnHeights.indexOf(maxHeight);
        calcInit(windowWidth, columnMinHeightIndex, columnMaxHeightIndex);
      }
    };
    var images = rootRef.current.querySelectorAll('img');
    var imagePromises = [];
    images.forEach(function (img) {
      var imgPromise = new Promise(function (resolve, reject) {
        if (img.complete) {
          resolve();
        } else {
          img.onload = function () {
            return resolve();
          };
          img.onerror = function () {
            return resolve();
          };
        }
      });
      imagePromises.push(imgPromise);
    });

    // Wait for all images to load
    if (images.length > 0) {
      Promise.all(imagePromises).then(function () {
        initCols();
      })["catch"](function (error) {
        console.error(error);
      });
    } else {
      initCols();
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    adjustPosition();
  }, [orginalItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Initialize items
    //--------------
    calcInit(windowWidth);
  }, [children]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Add function to the element that should be used as the scrollable area.
    //--------------
    window.removeEventListener('resize', windowResizeUpdate);
    window.addEventListener('resize', windowResizeUpdate);

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      window.removeEventListener('resize', windowResizeUpdate);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: rootRef,
    id: idRes,
    className: "masonry__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "masonry-innner",
    style: {
      display: 'flex'
    }
  }, items)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasonryLayout);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});