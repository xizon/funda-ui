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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TabList": () => (/* reexport */ src_TabList),
  "TabPanel": () => (/* reexport */ src_TabPanel),
  "Tabs": () => (/* reexport */ src_Tabs)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/TabList.tsx

;
var TabList = function TabList(props) {
  var defaultActive = props.defaultActive,
    expandedActiveClassNameForNav = props.expandedActiveClassNameForNav,
    targetId = props.targetId,
    index = props.index,
    switchEv = props.switchEv,
    children = props.children;
  var _expandClassName = typeof expandedActiveClassNameForNav !== 'undefined' ? expandedActiveClassNameForNav : '';
  var activedClassName = typeof defaultActive !== 'undefined' && defaultActive !== false ? " active ".concat(_expandClassName) : " ".concat(_expandClassName);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    "data-index": index,
    "data-tablist-index": index,
    className: "position-relative nav-item ".concat(activedClassName),
    role: "presentation",
    onClick: switchEv,
    "data-tab": targetId
  }, children));
};
/* harmony default export */ const src_TabList = (TabList);
;// CONCATENATED MODULE: ./src/TabPanel.tsx
var _excluded = ["defaultActive", "expandedActiveClassNameForPanel", "tabpanelClass", "targetId", "index"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

;
var TabPanel = function TabPanel(props) {
  var defaultActive = props.defaultActive,
    expandedActiveClassNameForPanel = props.expandedActiveClassNameForPanel,
    tabpanelClass = props.tabpanelClass,
    targetId = props.targetId,
    index = props.index,
    attributes = _objectWithoutProperties(props, _excluded);
  var _expandClassName = typeof expandedActiveClassNameForPanel !== 'undefined' ? expandedActiveClassNameForPanel : '';
  var activedClassName = typeof defaultActive !== 'undefined' && defaultActive !== false ? " active ".concat(_expandClassName) : " ".concat(_expandClassName);
  var activedStyles = typeof defaultActive !== 'undefined' && defaultActive !== false ? {} : {
    height: '0',
    overflow: 'hidden'
  };
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({
    "data-index": index,
    "data-tabpanel-index": index,
    role: "tabpanel",
    id: targetId,
    className: tabpanelClass ? "tab-pane d-block ".concat(tabpanelClass, " ").concat(activedClassName) : "tab-pane d-block ".concat(activedClassName),
    style: activedStyles
  }, attributes)));
};
/* harmony default export */ const src_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ./src/Tabs.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Tabs_extends() { Tabs_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tabs_extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




//


var Tabs = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var wrapperClassName = props.wrapperClassName,
    navClassName = props.navClassName,
    panelClassName = props.panelClassName,
    expandedActiveClassNameForNav = props.expandedActiveClassNameForNav,
    expandedActiveClassNameForPanel = props.expandedActiveClassNameForPanel,
    animTransitionDuration = props.animTransitionDuration,
    style = props.style,
    onChange = props.onChange,
    onLoad = props.onLoad,
    children = props.children;
  var uniqueID = useComId_default()();
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var speed = animTransitionDuration ? animTransitionDuration : 150;

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(externalRef, function () {
    return {
      go: function go(index) {
        var reactDomWrapperEl = rootRef.current;
        var $li = [].slice.call(reactDomWrapperEl.querySelectorAll('ul > li'));
        itemInit($li[index], false);
      }
    };
  }, [externalRef]);
  var elDisplay = function elDisplay(type, node) {
    if (node === null) return;

    // !!!Special note:
    // If you want to hide the tab in advance, please use `{ height: 0; overflow: hidden; }`, do not use `{ display: none }`
    // Otherwise it will cause the scrollHeight of the element inside the child node to be 0
    if (type === 'hide') {
      node.style.setProperty('height', '0', 'important');
      node.style.setProperty('overflow', 'hidden', 'important');
    } else {
      node.style.removeProperty('height');
      node.style.removeProperty('overflow');
    }
  };
  function handleClickItem(e) {
    e.preventDefault();
    var el = e.currentTarget;
    var currentIndex = Array.prototype.slice.call(el.parentElement.children).indexOf(el);
    itemInit(el, false);

    //
    if (typeof onChange === 'function') {
      onChange(el, el.dataset.tab, currentIndex, Number(el.dataset.index));
    }
  }
  function itemInit(targetEl, itemsInit) {
    var reactDomWrapperEl = rootRef.current;
    var $li = targetEl.parentElement.children;
    var $allContent = [];
    var tabID = targetEl.dataset.tab;
    var _classNameNav = expandedActiveClassNameForNav ? expandedActiveClassNameForNav : '';
    var _classNamePanel = expandedActiveClassNameForPanel ? expandedActiveClassNameForPanel : '';
    var runExClassName = function runExClassName(node, str, type) {
      if (str && node !== null) {
        var _c = str.replace(/\s+(\W)/g, ' ').split(' ');
        _c.forEach(function (classname) {
          if (type === 'remove') node.classList.remove(classname);
          if (type === 'add') node.classList.add(classname);
        });
      }
    };

    //get all panels of this wrapper
    Array.prototype.forEach.call($li, function (node) {
      var panelId = node.dataset.tab;
      $allContent.push(reactDomWrapperEl.querySelector('#' + panelId));
    });

    //
    Array.prototype.forEach.call($li, function (node) {
      if (node !== null) {
        node.classList.remove('active');
        node.firstChild.classList.remove('active');
        runExClassName(node, _classNameNav, 'remove');
        runExClassName(node.firstChild, _classNameNav, 'remove');
      }
    });
    $allContent.forEach(function (node) {
      if (node !== null) {
        // 
        elDisplay('hide', node);
        setTimeout(function () {
          node.classList.remove('active');
          runExClassName(node, _classNamePanel, 'remove');
        }, speed);
      }
    });

    // currently active
    targetEl.classList.add('active');
    targetEl.firstChild.classList.add('active');
    runExClassName(targetEl, _classNameNav, 'add');
    runExClassName(targetEl.firstChild, _classNameNav, 'add');
    if (tabID !== undefined) {
      setTimeout(function () {
        var _panel = document.getElementById(tabID);
        if (_panel !== null) {
          elDisplay('show', _panel);
          _panel.classList.add('active');
          runExClassName(_panel, _classNamePanel, 'add');
        }
      }, speed);
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Initialize tabs
    //--------------
    var reactDomWrapperEl = rootRef.current;
    var $li = [].slice.call(reactDomWrapperEl.querySelectorAll('ul > li'));
    $li.forEach(function (el, i) {
      if (el.classList.contains('active')) {
        itemInit($li[i], true);
      }
    });
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(function () {
      return itemInit;
    });
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
    ref: rootRef,
    style: style
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: (0,cls.clsWrite)(navClassName, 'nav nav-tabs mb-3'),
    role: "tablist"
  }, function () {
    if (children != null) {
      var tabListIndex = 0;

      // If <TabList /> uses map to return, it will be wrapped into an array
      /*
      Such as:
           {[1,2,3].map((item: any, i: number) =>{
              return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}>{item}</TabList>
          })}
      */

      var elements = Array.isArray(children[0]) ? children[0] : children;
      return elements.map(function (item, i) {
        var childProps = _objectSpread({}, item.props);
        delete childProps.key;
        if (item.key.indexOf('tab-list') >= 0) {
          tabListIndex++;
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TabList, Tabs_extends({
            key: item.key,
            index: tabListIndex,
            expandedActiveClassNameForNav: expandedActiveClassNameForNav,
            switchEv: handleClickItem,
            targetId: "tabs-show-".concat(uniqueID, "-").concat(tabListIndex)
          }, childProps));
        }
      });
    }
  }()), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.clsWrite)(panelClassName, 'tab-content')
  }, function () {
    if (children != null) {
      var tabPanelIndex = 0;

      // If <TabPanel /> uses map to return, it will be wrapped into an array
      /*
      Such as:
           {[1,2,3].map((item: any, i: number) =>{
              return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}>{item}</TabPanel>
          })}    
      */
      var elements = Array.isArray(children[1]) ? children[1] : children;
      return elements.map(function (item, i) {
        var childProps = _objectSpread({}, item.props);
        delete childProps.key;
        if (item.key.indexOf('tab-panel') >= 0) {
          tabPanelIndex++;
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TabPanel, Tabs_extends({
            key: item.key,
            index: tabPanelIndex,
            expandedActiveClassNameForPanel: expandedActiveClassNameForPanel,
            targetId: "tabs-show-".concat(uniqueID, "-").concat(tabPanelIndex)
          }, childProps));
        }
      });
    }
  }())));
});
/* harmony default export */ const src_Tabs = (Tabs);
;// CONCATENATED MODULE: ./src/index.tsx



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});