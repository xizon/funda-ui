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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
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
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
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
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"clsWrite": function clsWrite() {
          return (/* binding */_clsWrite
          );
        },
        /* harmony export */"combinedCls": function combinedCls() {
          return (/* binding */_combinedCls
          );
        }
        /* harmony export */
      });
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * Output of class name
       * @param {*} s      - Any
       * @param  {String} defaultCls      - Default string
       * @param  {?*} targetCls      - Any
       * @returns {*} 
       */
      function _clsWrite(s, defaultCls) {
        var targetCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        return s || s === '' ? typeof targetCls === 'undefined' ? s : targetCls : defaultCls;
      }

      /**
       * Combined classnames
       * @param {*} args 
       * @returns {String|undefined}
       */
      /* Usage:
      
      console.log(combinedCls('a-1', 'a-2', 'a-3', {
          'p-1': null,
          'p-2': undefined,
          'p-3': true,
          'p-4': false,
          'p-5': 'kkk',
          'p-6': 0,
          'p-7': 1,
          'p-8': '',
          undefined
      })); // a-1 a-2 a-3 p-3 p-5 p-7
      */
      function _combinedCls() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (args) {
          var classes = [];
          for (var i = 0; i < args.length; i++) {
            var className = args[i];
            if (!className) {
              continue;
            }
            var type = _typeof(className);
            if (type === 'string' || type === 'number') {
              classes.push(className);
            } else if (type === 'object') {
              var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return value ? key : null;
              });
              classes = _classes.length ? classes.concat(_classes.filter(function (c) {
                return !!c;
              })) : classes;
            }
          }
          return classes.join(' ').trim();
        }
        return undefined;
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
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["wrapperClassName", "btnAddWrapperClassName", "btnRemoveWrapperClassName", "label", "data", "maxFields", "iconAddBefore", "iconAddAfter", "iconAdd", "iconAddPosition", "iconRemove", "doNotRemoveDom", "id", "confirmText", "innerAppendClassName", "innerAppendCellClassName", "innerAppendLastCellClassName", "innerAppendHideClassName", "innerAppendBodyClassName", "innerAppendHeadData", "innerAppendHeadRowShowFirst", "innerAppendHeadRowClassName", "innerAppendHeadCellClassName", "innerAppendHeadCellStyles", "innerAppendEmptyContent", "onAdd", "onRemove", "onLoad"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var DynamicFields = function DynamicFields(props) {
  var wrapperClassName = props.wrapperClassName,
    btnAddWrapperClassName = props.btnAddWrapperClassName,
    btnRemoveWrapperClassName = props.btnRemoveWrapperClassName,
    label = props.label,
    data = props.data,
    maxFields = props.maxFields,
    iconAddBefore = props.iconAddBefore,
    iconAddAfter = props.iconAddAfter,
    iconAdd = props.iconAdd,
    iconAddPosition = props.iconAddPosition,
    iconRemove = props.iconRemove,
    doNotRemoveDom = props.doNotRemoveDom,
    id = props.id,
    confirmText = props.confirmText,
    innerAppendClassName = props.innerAppendClassName,
    innerAppendCellClassName = props.innerAppendCellClassName,
    innerAppendLastCellClassName = props.innerAppendLastCellClassName,
    innerAppendHideClassName = props.innerAppendHideClassName,
    innerAppendBodyClassName = props.innerAppendBodyClassName,
    innerAppendHeadData = props.innerAppendHeadData,
    innerAppendHeadRowShowFirst = props.innerAppendHeadRowShowFirst,
    innerAppendHeadRowClassName = props.innerAppendHeadRowClassName,
    innerAppendHeadCellClassName = props.innerAppendHeadCellClassName,
    innerAppendHeadCellStyles = props.innerAppendHeadCellStyles,
    innerAppendEmptyContent = props.innerAppendEmptyContent,
    onAdd = props.onAdd,
    onRemove = props.onRemove,
    onLoad = props.onLoad,
    attributes = _objectWithoutProperties(props, _excluded);
  var ITEM_LAST_CLASSNAME = innerAppendLastCellClassName || 'last';
  var ITEM_HIDE_CLASSNAME = innerAppendHideClassName || 'd-none';
  var PER_ROW_DOM_STRING = '.dynamic-fields__append .dynamic-fields__data__wrapper';
  var PER_INNER_BODY_DOM_STRING = '.dynamic-fields__append .dynamic-fields__inner__body';
  var DO_NOT_REMOVE_DOM = typeof doNotRemoveDom === 'undefined' || doNotRemoveDom === false ? false : true;
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var addBtnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var emptyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tmpl = _useState4[0],
    setTmpl = _useState4[1];
  var addBtnIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  addBtnIdRef.current = "dynamic-fields-add-".concat(idRes);
  function updateLastItemCls(el, type) {
    if (typeof el === 'undefined') return;
    if (type === 'add') {
      var _el$parentElement;
      var perInnerBody = [].slice.call(rootRef.current.querySelectorAll(PER_INNER_BODY_DOM_STRING));
      perInnerBody.forEach(function (el, i) {
        var _el$firstChild;
        el.classList.remove(ITEM_LAST_CLASSNAME);
        (_el$firstChild = el.firstChild) === null || _el$firstChild === void 0 ? void 0 : _el$firstChild.classList.remove(ITEM_LAST_CLASSNAME);
      });
      el.classList.add(ITEM_LAST_CLASSNAME);
      (_el$parentElement = el.parentElement) === null || _el$parentElement === void 0 ? void 0 : _el$parentElement.classList.add(ITEM_LAST_CLASSNAME);
    } else {
      var _el$parentElement2;
      el.classList.remove(ITEM_LAST_CLASSNAME);
      (_el$parentElement2 = el.parentElement) === null || _el$parentElement2 === void 0 ? void 0 : _el$parentElement2.classList.remove(ITEM_LAST_CLASSNAME);
    }
  }
  function updateHeadCls(type) {
    var el = rootRef.current.querySelector('.dynamic-fields__inner__head');
    if (el === null) return;
    if (type === 'add') {
      el.classList.add(ITEM_HIDE_CLASSNAME);
    } else {
      el.classList.remove(ITEM_HIDE_CLASSNAME);
    }
  }
  function emptyContentEnabled(type) {
    if (innerAppendEmptyContent === '' || typeof innerAppendEmptyContent === 'undefined') return false;
    if (type === 'add') {
      var _emptyRef$current;
      (_emptyRef$current = emptyRef.current) === null || _emptyRef$current === void 0 ? void 0 : _emptyRef$current.classList.add(ITEM_HIDE_CLASSNAME);
    } else {
      var _emptyRef$current2;
      (_emptyRef$current2 = emptyRef.current) === null || _emptyRef$current2 === void 0 ? void 0 : _emptyRef$current2.classList.remove(ITEM_HIDE_CLASSNAME);
    }
    return true;
  }
  function checkMaxStatus() {
    //button status
    if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length + 1 >= parseFloat(maxFields)) {
      addBtnRef.current.style.setProperty('display', 'none', 'important');
    }
  }
  function handleClickAdd(event) {
    if (event !== null && typeof event !== 'undefined') event.preventDefault();

    //button status
    checkMaxStatus();

    //
    setVal(function (prevState) {
      return [].concat(_toConsumableArray(prevState), _toConsumableArray(generateGroup(tmpl)));
    });

    //
    setTimeout(function () {
      var perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));

      // update index
      perRow.forEach(function (el, i) {
        el.dataset.index = i.toString();
      });

      // update last element
      if (perRow.length > 1) {
        updateLastItemCls(perRow[0], 'remove');
        updateLastItemCls(perRow[perRow.length - 1], 'add');
      }

      // update inner elements
      if (perRow.length > 0) {
        if (!emptyContentEnabled('add')) updateHeadCls('remove');
      }

      //
      onAdd === null || onAdd === void 0 ? void 0 : onAdd(perRow, rootRef.current, addBtnRef.current, PER_ROW_DOM_STRING);
    }, 0);
  }
  function handleClickRemove(e) {
    if (e !== null && typeof e !== 'undefined') e.preventDefault();
    var $target = e.currentTarget.closest('.dynamic-fields__data__wrapper');
    if ($target === null) return;
    var curKey = $target.dataset.key;
    if (window.confirm(confirmText || '')) {
      if (rootRef.current && addBtnRef.current) {
        //button status
        if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length <= parseFloat(maxFields)) {
          addBtnRef.current.style.setProperty('display', 'inline', 'important');
        }
        var curItem = rootRef.current.querySelector(".dynamic-fields__append [data-key=\"".concat(curKey, "\"]"));
        if (curItem !== null) {
          var curIndex = curItem.dataset.index;

          // Do not delete the parent node `innerAppendBodyClassName`, otherwise an error may be reported when 
          // using routing: DOMException: Failed to execute 'removeChild' on 'Node'
          if (!DO_NOT_REMOVE_DOM) {
            curItem.remove();
          }

          //
          setTimeout(function () {
            var perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));

            // update index
            perRow.forEach(function (el, i) {
              el.dataset.index = i.toString();
            });

            // update last element
            if (perRow.length === 1) {
              updateLastItemCls(perRow[0], 'add');
            } else {
              updateLastItemCls(perRow[perRow.length - 1], 'add');
            }

            // update inner elements
            if (perRow.length === 0) {
              if (!emptyContentEnabled('remove')) updateHeadCls('add');
            }

            //
            onRemove === null || onRemove === void 0 ? void 0 : onRemove(perRow, curKey, curIndex, rootRef.current, e.currentTarget, PER_ROW_DOM_STRING);
          }, 0);
        }
      }
    }
  }
  function generateGroup(inputData) {
    var isNew = !Array.isArray(inputData);
    var _data = Array.isArray(inputData) ? inputData : [inputData];
    return _data.map(function (item, i) {
      var removeBtyn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        tabIndex: -1,
        className: "dynamic-fields__removebtn ".concat(btnRemoveWrapperClassName || 'align-middle'),
        onClick: handleClickRemove
      }, iconRemove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        width: "20px",
        height: "20px",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
        fill: "#000"
      })))));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        key: 'tmpl-' + i
      }, isNew ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: 'tmpl-' + i,
        className: "dynamic-fields__inner__body ".concat(innerAppendBodyClassName || '', " ").concat(i === _data.length - 1 ? ITEM_LAST_CLASSNAME : ''),
        "data-body-index": i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
        className: "dynamic-fields__data__wrapper position-relative ".concat(innerAppendCellClassName || '', " ").concat(i === _data.length - 1 ? ITEM_LAST_CLASSNAME : ''),
        "data-key": i,
        "data-index": i
      }, attributes), item, removeBtyn))));
    });
  }
  function addButton() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "dynamic-fields__btns dynamic-fields__btns--end"
    }, iconAddBefore ? iconAddBefore : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      ref: addBtnRef,
      id: addBtnIdRef.current,
      href: "#",
      tabIndex: -1,
      className: "dynamic-fields__addbtn ".concat(btnAddWrapperClassName || 'align-middle'),
      onClick: handleClickAdd
    }, iconAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconAdd) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "20px",
      height: "20px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",
      fill: "#000"
    })))), iconAddAfter ? iconAddAfter : null);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setVal(data ? data.init : []);
    setTmpl(data ? data.tmpl : null);

    //
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(addBtnIdRef.current, rootRef.current, PER_ROW_DOM_STRING);
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: fieldsRef,
    className: "dynamic-fields-container",
    "data-max-fields": maxFields || 10,
    id: idRes
  }, iconAddPosition === 'start' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, addButton()) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)('dynamic-fields__append', innerAppendClassName)
  }, innerAppendHeadData && Array.isArray(innerAppendHeadData) && (val.length > 0 || innerAppendHeadRowShowFirst) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dynamic-fields__inner__head ".concat(innerAppendHeadRowClassName || '')
  }, innerAppendHeadData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: 'inner-header-row' + i,
      className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)(innerAppendHeadCellClassName, Array.isArray(innerAppendHeadCellClassName) ? typeof innerAppendHeadCellClassName[i] !== 'undefined' ? innerAppendHeadCellClassName[i] : '' : undefined, i === innerAppendHeadData.length - 1 ? ITEM_LAST_CLASSNAME : undefined),
      style: innerAppendHeadCellStyles && typeof innerAppendHeadCellStyles[i] !== 'undefined' ? innerAppendHeadCellStyles[i] : {}
    }, item);
  }))) : null, generateGroup(val)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: emptyRef,
    className: "".concat(ITEM_HIDE_CLASSNAME)
  }, innerAppendEmptyContent || null), innerAppendHeadData && Array.isArray(innerAppendHeadData) && val.length === 0 && innerAppendHeadRowShowFirst ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, innerAppendEmptyContent || null)) : null, typeof iconAddPosition === 'undefined' || iconAddPosition === 'end' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, addButton()) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFields);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});