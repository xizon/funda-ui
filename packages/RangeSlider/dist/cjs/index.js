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

/***/ 390:
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
        var _excluded = ["wrapperClassName", "controlClassName", "type", "disabled", "required", "placeholder", "pattern", "readOnly", "value", "label", "units", "name", "step", "min", "max", "src", "size", "minLength", "maxLength", "alt", "id", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onChangeCallback", "onChange", "onBlur", "onFocus"];
        function _extends() {
          _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
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
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        var Input = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, _ref) {
          var wrapperClassName = props.wrapperClassName,
            controlClassName = props.controlClassName,
            type = props.type,
            disabled = props.disabled,
            required = props.required,
            placeholder = props.placeholder,
            pattern = props.pattern,
            readOnly = props.readOnly,
            value = props.value,
            label = props.label,
            units = props.units,
            name = props.name,
            step = props.step,
            min = props.min,
            max = props.max,
            src = props.src,
            size = props.size,
            minLength = props.minLength,
            maxLength = props.maxLength,
            alt = props.alt,
            id = props.id,
            iconLeft = props.iconLeft,
            iconRight = props.iconRight,
            autoComplete = props.autoComplete,
            style = props.style,
            tabIndex = props.tabIndex,
            onChangeCallback = props.onChangeCallback,
            onChange = props.onChange,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            attributes = _objectWithoutProperties(props, _excluded);
          var uniqueID = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)();
          var idRes = id || uniqueID;
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var valRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var typeRes = typeof type === 'undefined' ? 'text' : type;
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            onComposition = _useState2[0],
            setOnComposition = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
            _useState4 = _slicedToArray(_useState3, 2),
            changedVal = _useState4[0],
            setChangedVal = _useState4[1];
          function handleComposition(event) {
            if (event.type === 'compositionstart') {
              setOnComposition(true);
            }
            if (event.type === 'compositionend') {
              setOnComposition(false);
            }
          }
          function handleFocus(event) {
            rootRef.current.classList.add('focus');

            //
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(event, onComposition);
          }
          function handleChange(event) {
            var val = event.target.value;
            setChangedVal(val);

            //----
            //remove focus style
            if (val === '') {
              rootRef.current.classList.remove('focus');
            }

            //
            onChange === null || onChange === void 0 ? void 0 : onChange(event, onComposition);
          }
          function handleBlur(event) {
            var el = event.target;
            var val = event.target.value;

            //----
            //remove focus style
            if (val === '') {
              rootRef.current.classList.remove('focus');
            }

            //
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event, onComposition);

            //
            if (typeof onChangeCallback === 'function') {
              var newData = onChangeCallback(event);
              setChangedVal(newData);
            }
          }
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // update default value
            //--------------
            setChangedVal(value || '');
          }, [value]);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
            ref: rootRef
          }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: idRes,
            className: "form-label",
            dangerouslySetInnerHTML: {
              __html: "".concat(label)
            }
          })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "input-group"
          }, iconLeft ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "input-group-text"
          }, iconLeft)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: function ref(node) {
              valRef.current = node;
              if (typeof _ref === 'function') {
                _ref(node);
              } else if (_ref) {
                _ref.current = node;
              }
            },
            tabIndex: tabIndex || 0,
            type: typeRes,
            className: controlClassName || controlClassName === '' ? controlClassName : "form-control",
            id: idRes,
            name: name,
            step: step || null,
            min: min || null,
            max: max || null,
            src: src || null,
            size: size || null,
            alt: alt || null,
            pattern: pattern || null,
            placeholder: placeholder || '',
            value: changedVal,
            minLength: minLength || null,
            maxLength: maxLength || null,
            autoComplete: autoComplete ? 'on' : 'off',
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onCompositionStart: handleComposition,
            onCompositionUpdate: handleComposition,
            onCompositionEnd: handleComposition,
            disabled: disabled || null,
            required: required || null,
            readOnly: readOnly || null,
            style: style
          }, attributes)), units ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "input-group-text"
          }, units)) : null, iconRight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "input-group-text"
          }, iconRight)) : null), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "position-absolute end-0 top-0 my-2 mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "text-danger"
          }, "*"))) : ''));
        });
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = Input;
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
/* harmony import */ var funda_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var funda_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_input__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var RangeSlider = function RangeSlider(props) {
  var wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    minName = props.minName,
    maxName = props.maxName,
    onlyOne = props.onlyOne,
    step = props.step,
    min = props.min,
    max = props.max,
    id = props.id,
    tabIndex = props.tabIndex,
    onChange = props.onChange;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var valMinRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var valMaxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value ? value.min : min),
    _useState2 = _slicedToArray(_useState, 2),
    minValue = _useState2[0],
    setMinValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value ? value.max : max),
    _useState4 = _slicedToArray(_useState3, 2),
    maxValue = _useState4[0],
    setMaxValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    minActive = _useState6[0],
    setMinActive = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    maxActive = _useState8[0],
    setMaxActive = _useState8[1];
  var minPos = (minValue - min) / (max - min) * 100;
  var maxPos = (maxValue - min) / (max - min) * 100;
  function initDefaultValue(defaultValue) {
    // change the value to trigger component rendering
    if (typeof defaultValue === 'undefined' || defaultValue === '') {
      setMinValue(min);
      setMaxValue(max);
    } else {
      setMinValue(defaultValue.min);
      setMaxValue(defaultValue.max);
    }
  }
  function handleMinEnter(e) {
    setMinActive(true);
  }
  function handleMinLeave(e) {
    setMinActive(false);
  }
  function handleMaxEnter(e) {
    setMaxActive(true);
  }
  function handleMaxLeave(e) {
    setMaxActive(false);
  }
  function handleMinChange(e) {
    e.preventDefault();
    var newMinVal = Math.min(+e.target.value, onlyOne ? maxValue : maxValue - step);
    setMinValue(newMinVal);
    onChange === null || onChange === void 0 ? void 0 : onChange(e, {
      min: newMinVal,
      max: maxValue
    });
  }
  function handleMaxChange(e) {
    e.preventDefault();
    var newMaxVal = Math.max(+e.target.value, minValue + step);
    setMaxValue(newMaxVal);
    onChange === null || onChange === void 0 ? void 0 : onChange(e, {
      min: minValue,
      max: newMaxVal
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value
    //--------------
    initDefaultValue(value);
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? "range-slider__wrapper ".concat(onlyOne ? 'only-one' : '', " ").concat(wrapperClassName) : "range-slider__wrapper ".concat(onlyOne ? 'only-one' : '', " mb-3 position-relative"),
    ref: rootRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_input__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: valMinRef,
    wrapperClassName: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    controlClassName: controlClassName || controlClassName === '' ? controlClassName : "form-control",
    required: required || null,
    type: "text",
    id: idRes + '-min',
    name: minName,
    value: typeof minValue !== 'undefined' ? minValue.toString() : min //  Convert to a string to ensure that 0 can also be filled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_input__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: valMaxRef,
    wrapperClassName: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    controlClassName: controlClassName || controlClassName === '' ? controlClassName : "form-control",
    required: required || null,
    type: "text",
    id: idRes + '-max',
    name: maxName,
    value: typeof maxValue !== 'undefined' ? maxValue.toString() : max //  Convert to a string to ensure that 0 can also be filled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__control-wrapper ".concat(disabled ? 'disabled' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    value: minValue,
    min: min,
    max: max,
    step: step,
    tabIndex: tabIndex || 0,
    disabled: disabled || null,
    onMouseEnter: handleMinEnter,
    onMouseLeave: handleMinLeave,
    onChange: handleMinChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    value: maxValue,
    min: min,
    max: max,
    step: step,
    tabIndex: tabIndex || 0,
    disabled: onlyOne ? true : disabled || null,
    onMouseEnter: handleMaxEnter,
    onMouseLeave: handleMaxLeave,
    onChange: handleMaxChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__placeholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__placeholder-grab ".concat(minActive ? 'active' : ''),
    style: {
      left: "".concat(minPos, "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__placeholder-rail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__placeholder-inner-rail",
    style: {
      left: "".concat(minPos, "%"),
      right: "".concat(100 - maxPos, "%")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-slider__placeholder-grab ".concat(maxActive ? 'active' : '', " ").concat(onlyOne ? 'inactive' : ''),
    style: {
      left: "".concat(maxPos, "%")
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSlider);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});