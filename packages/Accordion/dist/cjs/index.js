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
  "Accordion": () => (/* reexport */ src_Accordion),
  "AccordionItem": () => (/* reexport */ src_AccordionItem)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/AccordionItem.tsx
var _excluded = ["heightObserver", "index", "animSpeed", "easing", "arrowOnly", "itemClassName", "itemContentWrapperClassName", "itemContentClassName", "itemTriggerClassName", "itemHeaderClassName", "itemTriggerIcon", "itemStyle", "activeItem", "title", "onToggleEv", "onTransitionEnd", "onItemCollapse", "isExpanded", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var AccordionItem = function AccordionItem(props) {
  var heightObserver = props.heightObserver,
    index = props.index,
    animSpeed = props.animSpeed,
    easing = props.easing,
    arrowOnly = props.arrowOnly,
    itemClassName = props.itemClassName,
    itemContentWrapperClassName = props.itemContentWrapperClassName,
    itemContentClassName = props.itemContentClassName,
    itemTriggerClassName = props.itemTriggerClassName,
    itemHeaderClassName = props.itemHeaderClassName,
    itemTriggerIcon = props.itemTriggerIcon,
    itemStyle = props.itemStyle,
    activeItem = props.activeItem,
    title = props.title,
    onToggleEv = props.onToggleEv,
    onTransitionEnd = props.onTransitionEnd,
    onItemCollapse = props.onItemCollapse,
    controlledExpanded = props.isExpanded,
    children = props.children,
    attributes = _objectWithoutProperties(props, _excluded);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    internalExpanded = _useState2[0],
    setInternalExpanded = _useState2[1];
  var isFirstRender = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  var initialHeightSet = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);

  // Use controlled or uncontrolled expanded state
  var isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  var observer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentWrapperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var iconRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var handleToggle = function handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (controlledExpanded === undefined) {
      setInternalExpanded(function (prev) {
        return !prev;
      });
    }
    onToggleEv === null || onToggleEv === void 0 ? void 0 : onToggleEv(e);
  };

  // Generate CSS transition style
  var getTransitionStyle = function getTransitionStyle() {
    var transitionDuration = "".concat(animSpeed, "ms");
    var transitionTiming = easing;
    return {
      transition: "max-height ".concat(transitionDuration, " ").concat(transitionTiming),
      overflow: 'hidden'
    };
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (triggerRef.current && typeof onItemCollapse === 'function') {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      onItemCollapse(triggerRef.current, iconRef.current, isExpanded);
    }
  }, [isExpanded]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (contentWrapperRef.current && !initialHeightSet.current) {
      initialHeightSet.current = true;
      var shouldBeExpanded = typeof activeItem !== 'undefined' && activeItem !== false;
      if (controlledExpanded === undefined) {
        setInternalExpanded(shouldBeExpanded);
      }

      // Set initial maxHeight when activeItem is true
      if (shouldBeExpanded && contentRef.current) {
        var contentHeight = contentRef.current.offsetHeight;
        contentWrapperRef.current.style.maxHeight = "".concat(contentHeight, "px");
      }
    }
  }, [activeItem, controlledExpanded]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (!heightObserver || !Array.isArray(heightObserver) || !heightObserver.includes(index)) return;

    // When the content height changes dynamically, change the maxHeight of the wrapper
    if (contentRef.current && contentWrapperRef.current) {
      var _contentPadding = window.getComputedStyle(contentRef.current).getPropertyValue('padding-bottom');
      observer.current = new ResizeObserver(function (entries) {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach(function (entry) {
          if (contentWrapperRef.current !== null && isExpanded) {
            contentWrapperRef.current.style.maxHeight = entry.contentRect.bottom + parseFloat(_contentPadding) + 'px';
          }
        });
      });
      observer.current.observe(contentRef.current);
    }
    return function () {
      var _observer$current;
      if (contentRef.current) (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(contentRef.current);
    };
  }, [heightObserver, isExpanded]);

  // Update maxHeight when expanded state changes
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (contentWrapperRef.current && contentRef.current) {
      if (isExpanded) {
        var contentHeight = contentRef.current.scrollHeight;
        contentWrapperRef.current.style.maxHeight = "".concat(contentHeight, "px");
      } else {
        contentWrapperRef.current.style.maxHeight = '0px';
      }
    }
  }, [isExpanded]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({}, attributes, {
    "data-index": index,
    className: (0,cls.combinedCls)('custom-accordion-item', (0,cls.clsWrite)(itemClassName, 'accordion-item'), isExpanded ? ' active' : ''),
    onClick: arrowOnly ? undefined : handleToggle,
    onTransitionEnd: typeof onTransitionEnd === 'function' ? onTransitionEnd : undefined,
    "aria-expanded": isExpanded ? 'true' : 'false',
    style: typeof itemStyle !== 'undefined' ? itemStyle : {}
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-header', (0,cls.clsWrite)(itemHeaderClassName, 'accordion-header position-relative')),
    role: "presentation"
  }, arrowOnly ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: triggerRef,
    tabIndex: -1,
    className: (0,cls.combinedCls)('custom-accordion-trigger', (0,cls.clsWrite)(itemTriggerClassName, 'accordion-button'), isExpanded ? 'active' : 'collapsed')
  }, title) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    ref: triggerRef,
    tabIndex: -1,
    className: (0,cls.combinedCls)('custom-accordion-trigger', (0,cls.clsWrite)(itemTriggerClassName, 'accordion-button'), isExpanded ? 'active' : 'collapsed'),
    type: "button"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: iconRef,
    onClick: !arrowOnly ? undefined : handleToggle,
    className: "custom-accordion-trigger__icon",
    style: !arrowOnly ? {
      pointerEvents: 'none'
    } : {
      cursor: 'pointer'
    }
  }, itemTriggerIcon)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: contentWrapperRef,
    className: (0,cls.combinedCls)('custom-accordion-content__wrapper w-100', (0,cls.clsWrite)(itemContentWrapperClassName, 'accordion-collapse')),
    role: "tabpanel",
    style: getTransitionStyle()
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-content', (0,cls.clsWrite)(itemContentClassName, 'accordion-body')),
    ref: contentRef
  }, children))));
};
/* harmony default export */ const src_AccordionItem = (AccordionItem);
;// CONCATENATED MODULE: ./src/Accordion.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Accordion_extends() { Accordion_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Accordion_extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Accordion_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Accordion_arrayLikeToArray(arr); }
function Accordion_slicedToArray(arr, i) { return Accordion_arrayWithHoles(arr) || Accordion_iterableToArrayLimit(arr, i) || Accordion_unsupportedIterableToArray(arr, i) || Accordion_nonIterableRest(); }
function Accordion_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Accordion_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Accordion_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Accordion_arrayLikeToArray(o, minLen); }
function Accordion_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Accordion_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Accordion_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// Adapt the easing parameters of TweenMax
var EasingList = /*#__PURE__*/function (EasingList) {
  EasingList["linear"] = "linear";
  EasingList["ease"] = "ease";
  EasingList["easeIn"] = "ease-in";
  EasingList["easeOut"] = "ease-out";
  EasingList["easeInOut"] = "ease-in-out";
  return EasingList;
}({});
var Accordion = function Accordion(props) {
  var wrapperClassName = props.wrapperClassName,
    defaultActiveIndex = props.defaultActiveIndex,
    _props$defaultActiveA = props.defaultActiveAll,
    defaultActiveAll = _props$defaultActiveA === void 0 ? false : _props$defaultActiveA,
    duration = props.duration,
    _props$easing = props.easing,
    easing = _props$easing === void 0 ? 'ease' : _props$easing,
    _props$alternateColla = props.alternateCollapse,
    alternateCollapse = _props$alternateColla === void 0 ? true : _props$alternateColla,
    _props$arrowOnly = props.arrowOnly,
    arrowOnly = _props$arrowOnly === void 0 ? false : _props$arrowOnly,
    onChange = props.onChange,
    children = props.children;
  var animSpeed = duration || 200;
  var easeType = typeof alternateCollapse === 'undefined' ? EasingList['linear'] : EasingList[easing];
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = Accordion_slicedToArray(_useState, 2),
    heightObserver = _useState2[0],
    setHeightObserver = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Set()),
    _useState4 = Accordion_slicedToArray(_useState3, 2),
    expandedItems = _useState4[0],
    setExpandedItems = _useState4[1]; // Keep track of all expanded items
  var animationInProgress = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  var initExpanded = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  function handleClickItem(e) {
    if (animationInProgress.current) return;
    if (e.target.closest('.custom-accordion-header') === null) return;
    animationInProgress.current = true;
    var reactDomEl = arrowOnly ? e.currentTarget.closest('.custom-accordion-item') : e.currentTarget;
    var curIndex = parseInt(reactDomEl.dataset.index);
    var reactDomWrapperEl = rootRef.current;
    var $li = reactDomWrapperEl.querySelectorAll('.custom-accordion-item');
    if (reactDomEl.getAttribute('aria-expanded') === 'false' || reactDomEl.getAttribute('aria-expanded') === null) {
      if (alternateCollapse) {
        // Update expanded items state
        setExpandedItems(new Set([curIndex]));
      } else {
        // Add current item to expanded items
        setExpandedItems(function (prev) {
          return new Set([].concat(_toConsumableArray(prev), [curIndex]));
        });
      }
    } else {
      // Remove current item from expanded items
      setExpandedItems(function (prev) {
        var newSet = new Set(prev);
        newSet["delete"](curIndex);
        return newSet;
      });
    }

    // Reset animation flag after transition duration
    setTimeout(function () {
      animationInProgress.current = false;
    }, animSpeed);
    onChange === null || onChange === void 0 ? void 0 : onChange(reactDomEl, curIndex);
  }

  //Initialize expanded items based on defaultActiveIndex or defaultActiveAll
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Skip the default height initialization to prevent re-initialization. 
    // This method is useful when you want to manually control when the accordion should 
    // skip the automatic height initialization process, especially useful when `children` change frequently.
    if (initExpanded.current === true) return;
    if (defaultActiveAll && children && rootRef.current) {
      var allIndices = Array.from({
        length: children.length
      }, function (_, i) {
        return i;
      });
      setExpandedItems(new Set(allIndices));
      // Set heightObserver for all items to enable height monitoring
      setHeightObserver(allIndices);

      //
      initExpanded.current = true;
    } else if (defaultActiveIndex !== undefined) {
      var initialExpanded = new Set();
      var observerIndices = [];
      if (Array.isArray(defaultActiveIndex)) {
        defaultActiveIndex.forEach(function (index) {
          initialExpanded.add(index);
          observerIndices.push(index);
        });
      } else if (typeof defaultActiveIndex === 'number') {
        initialExpanded.add(defaultActiveIndex);
        observerIndices.push(defaultActiveIndex);
      }
      setExpandedItems(initialExpanded);
      // Set heightObserver for default active items to enable height monitoring
      if (observerIndices.length > 0) {
        setHeightObserver(observerIndices);
      }

      //
      initExpanded.current = true;
    }
  }, [defaultActiveIndex, defaultActiveAll, children]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-item', (0,cls.clsWrite)(wrapperClassName, 'accordion')),
    role: "tablist",
    ref: rootRef
  }, children != null ? children.map(function (item, i) {
    var childProps = _objectSpread({}, item.props);
    var _defaultActive = false;
    if (Array.isArray(defaultActiveIndex)) {
      _defaultActive = defaultActiveIndex.includes(i);
    } else if (typeof defaultActiveIndex === 'number') {
      _defaultActive = defaultActiveIndex === i;
    }
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_AccordionItem, Accordion_extends({
      key: "item" + i,
      index: i,
      defaultActiveAll: defaultActiveAll,
      animSpeed: animSpeed,
      easing: easeType,
      arrowOnly: arrowOnly,
      heightObserver: heightObserver,
      activeItem: _defaultActive,
      onToggleEv: handleClickItem,
      isExpanded: expandedItems.has(i) // Both controlled and uncontrolled modes are implemented
    }, childProps));
  }) : null));
};
/* harmony default export */ const src_Accordion = (Accordion);
;// CONCATENATED MODULE: ./src/index.tsx


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});