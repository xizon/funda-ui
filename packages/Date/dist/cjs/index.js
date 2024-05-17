(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"), require("react-dom"));
	else
		root["RPB"] = factory(root["React"], root["ReactDOM"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 870:
/***/ ((module) => {

var config = {
  hoursTitle: "Hours",
  minutesTitle: "Minutes",
  secondsTitle: "Seconds",
  week: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  weekFull: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
  months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  monthsFull: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  today: "Today"
};
module.exports = config;

/***/ }),

/***/ 357:
/***/ ((module) => {

var config = {
  hoursTitle: "时",
  minutesTitle: "分",
  secondsTitle: "秒",
  week: ["一", "二", "三", "四", "五", "六", "日"],
  weekFull: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthsFull: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  today: "今天"
};
module.exports = config;

/***/ }),

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
        var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "type", "disabled", "required", "placeholder", "pattern", "readOnly", "value", "label", "units", "name", "step", "min", "max", "src", "size", "minLength", "maxLength", "alt", "inputMode", "id", "appendControl", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus", "onPressEnter"];
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
          var contentRef = props.contentRef,
            wrapperClassName = props.wrapperClassName,
            controlClassName = props.controlClassName,
            controlExClassName = props.controlExClassName,
            controlGroupWrapperClassName = props.controlGroupWrapperClassName,
            controlGroupTextClassName = props.controlGroupTextClassName,
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
            inputMode = props.inputMode,
            id = props.id,
            appendControl = props.appendControl,
            iconLeft = props.iconLeft,
            iconRight = props.iconRight,
            autoComplete = props.autoComplete,
            style = props.style,
            tabIndex = props.tabIndex,
            onChangeCallback = props.onChangeCallback,
            onInputCallback = props.onInputCallback,
            onKeyPressedCallback = props.onKeyPressedCallback,
            onChange = props.onChange,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            onPressEnter = props.onPressEnter,
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

          // exposes the following methods
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
            return {
              clear: function clear(cb) {
                setChangedVal('');
                cb === null || cb === void 0 ? void 0 : cb();
              },
              set: function set(value, cb) {
                setChangedVal("".concat(value));
                cb === null || cb === void 0 ? void 0 : cb();
              }
            };
          }, [contentRef]);
          var propExist = function propExist(p) {
            return typeof p !== 'undefined' && p !== null && p !== '';
          };
          function handleComposition(event) {
            if (event.type === 'compositionstart') {
              setOnComposition(true);
            }
            if (event.type === 'compositionend') {
              setOnComposition(false);
            }
          }
          function handleFocus(event) {
            var _rootRef$current;
            (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('focus');

            //
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(event, onComposition, valRef.current);
          }
          function handleChange(event) {
            var val = event.target.value;
            setChangedVal(val);

            //----
            //remove focus style
            if (val === '') {
              var _rootRef$current2;
              (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.remove('focus');
            }

            //
            onChange === null || onChange === void 0 ? void 0 : onChange(event, onComposition, valRef.current);

            // It fires in real time as the user enters
            if (typeof onInputCallback === 'function') {
              var newData = onInputCallback(event, valRef.current);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }
          }

          function handleBlur(event) {
            var el = event.target;
            var val = event.target.value;

            //----
            //remove focus style
            if (val === '') {
              var _rootRef$current3;
              (_rootRef$current3 = rootRef.current) === null || _rootRef$current3 === void 0 ? void 0 : _rootRef$current3.classList.remove('focus');
            }

            //
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event, onComposition, valRef.current);

            // It fires when focus is lost
            if (typeof onChangeCallback === 'function') {
              var newData = onChangeCallback(event, valRef.current);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }
          }

          function handleKeyPressed(event) {
            if (typeof onKeyPressedCallback === 'function') {
              var newData = onKeyPressedCallback(event, valRef.current);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }

            if (event.code == "Enter") {
              // DO NOT USE "preventDefault()"
              onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event, valRef.current);
            }
          }
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // update default value
            //--------------
            if (typeof value !== 'undefined') {
              setChangedVal("".concat(value)); // Avoid displaying the number 0
            }
          }, [value]);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
            ref: rootRef
          }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: idRes,
            className: "form-label",
            dangerouslySetInnerHTML: {
              __html: "".concat(label)
            }
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: idRes,
            className: "form-label"
          }, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "".concat(controlGroupWrapperClassName || "input-group", " position-relative ").concat(propExist(iconLeft) ? 'has-left-content' : '', " ").concat(propExist(iconRight) || propExist(units) ? 'has-right-content' : '')
          }, propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, iconLeft)) : null, appendControl && propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "input-group-control-container w-100 position-relative"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
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
            className: controlClassName || controlClassName === '' ? "".concat(controlClassName, " ").concat(propExist(iconLeft) ? 'rounded-start-0' : 'rounded') : "form-control ".concat(propExist(iconLeft) ? 'rounded-start-0' : 'rounded'),
            id: idRes,
            name: name,
            step: step || null,
            min: min || null,
            max: max || null,
            src: src || null,
            size: size || null,
            alt: alt || null,
            inputMode: inputMode || 'text',
            pattern: pattern || null,
            placeholder: placeholder || '',
            value: changedVal,
            minLength: minLength || null,
            maxLength: maxLength || null,
            autoComplete: typeof autoComplete === 'undefined' ? 'off' : autoComplete,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeyDown: handleKeyPressed,
            onCompositionStart: handleComposition,
            onCompositionUpdate: handleComposition,
            onCompositionEnd: handleComposition,
            disabled: disabled || null,
            required: required || null,
            readOnly: readOnly || null,
            style: style
          }, attributes)), appendControl || '', propExist(units) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, units)) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, iconRight)) : null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
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
            className: "".concat(controlClassName || controlClassName === '' ? "".concat(controlClassName, " ").concat(propExist(iconLeft) || propExist(iconRight) || propExist(units) ? '' : 'rounded') : "form-control ".concat(propExist(iconLeft) || propExist(iconRight) || propExist(units) ? '' : 'rounded'), " ").concat(controlExClassName || ''),
            id: idRes,
            name: name,
            step: step || null,
            min: min || null,
            max: max || null,
            src: src || null,
            size: size || null,
            alt: alt || null,
            inputMode: inputMode || 'text',
            pattern: pattern || null,
            placeholder: placeholder || '',
            value: changedVal,
            minLength: minLength || null,
            maxLength: maxLength || null,
            autoComplete: typeof autoComplete === 'undefined' ? 'off' : autoComplete,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeyDown: handleKeyPressed,
            onCompositionStart: handleComposition,
            onCompositionUpdate: handleComposition,
            onCompositionEnd: handleComposition,
            disabled: disabled || null,
            required: required || null,
            readOnly: readOnly || null,
            style: style
          }, attributes)), appendControl || '', propExist(units) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, units)) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, iconRight)) : null)), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787), __webpack_require__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        },

        /***/156: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

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
      function __nested_webpack_require_1708__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1708__);
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
        /******/__nested_webpack_require_1708__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1708__.d(getter, {
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
        /******/__nested_webpack_require_1708__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1708__.o(definition, key) && !__nested_webpack_require_1708__.o(exports, key)) {
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
        /******/__nested_webpack_require_1708__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1708__.r = function (exports) {
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
        __nested_webpack_require_1708__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1708__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1708__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1708__(156);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
        var RootPortal = function RootPortal(props) {
          var containerClassName = props.containerClassName,
            show = props.show,
            children = props.children;
          var containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

          // Move HTML templates to tag end body </body>
          // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
          // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
          // ###
          // ###
          // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            containerRef.current = document.createElement('div');
            containerRef.current.className = "root-portal-container ".concat(containerClassName || '');
            document.body.appendChild(containerRef.current);
            return function () {
              if (containerRef.current) {
                containerRef.current.remove();
              }
            };
          }, []);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, containerRef.current && show && /*#__PURE__*/(0, react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, containerRef.current));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = RootPortal;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      function __nested_webpack_require_1471__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1471__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_1471__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1471__.o(definition, key) && !__nested_webpack_require_1471__.o(exports, key)) {
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
        /******/__nested_webpack_require_1471__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1471__.r = function (exports) {
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
        // ESM COMPAT FLAG
        __nested_webpack_require_1471__.r(__webpack_exports__);

        // EXPORTS
        __nested_webpack_require_1471__.d(__webpack_exports__, {
          "addTreeDepth": function addTreeDepth() {
            return (/* reexport */_addTreeDepth
            );
          },
          "addTreeIndent": function addTreeIndent() {
            return (/* reexport */_addTreeIndent
            );
          },
          "animateStyles": function animateStyles() {
            return (/* reexport */anim
            );
          },
          "arrayBufferToUint8Array": function arrayBufferToUint8Array() {
            return (/* reexport */_arrayBufferToUint8Array
            );
          },
          "arrayToBlob": function arrayToBlob() {
            return (/* reexport */_arrayToBlob
            );
          },
          "arrayToStream": function arrayToStream() {
            return (/* reexport */_arrayToStream
            );
          },
          "arrayToUint8array": function arrayToUint8array() {
            return (/* reexport */_arrayToUint8array
            );
          },
          "base64ToArrayBuffer": function base64ToArrayBuffer() {
            return (/* reexport */_base64ToArrayBuffer
            );
          },
          "blobToUint8array": function blobToUint8array() {
            return (/* reexport */_blobToUint8array
            );
          },
          "convertArrToValByBraces": function convertArrToValByBraces() {
            return (/* reexport */_convertArrToValByBraces
            );
          },
          "convertArrToValByBrackets": function convertArrToValByBrackets() {
            return (/* reexport */_convertArrToValByBrackets
            );
          },
          "convertStringByCommaToValByBraces": function convertStringByCommaToValByBraces() {
            return (/* reexport */_convertStringByCommaToValByBraces
            );
          },
          "convertStringByCommaToValByBrackets": function convertStringByCommaToValByBrackets() {
            return (/* reexport */_convertStringByCommaToValByBrackets
            );
          },
          "convertTree": function convertTree() {
            return (/* reexport */_convertTree
            );
          },
          "dateFormat": function dateFormat() {
            return (/* reexport */_dateFormat
            );
          },
          "debounce": function debounce() {
            return (/* reexport */_debounce
            );
          },
          "decodeBase64Str": function decodeBase64Str() {
            return (/* reexport */_decodeBase64Str
            );
          },
          "deepClone": function deepClone() {
            return (/* reexport */_deepClone
            );
          },
          "easeInBack": function easeInBack() {
            return (/* reexport */_easeInBack
            );
          },
          "easeInCirc": function easeInCirc() {
            return (/* reexport */_easeInCirc
            );
          },
          "easeInCubic": function easeInCubic() {
            return (/* reexport */_easeInCubic
            );
          },
          "easeInElastic": function easeInElastic() {
            return (/* reexport */_easeInElastic
            );
          },
          "easeInExpo": function easeInExpo() {
            return (/* reexport */_easeInExpo
            );
          },
          "easeInOutBack": function easeInOutBack() {
            return (/* reexport */_easeInOutBack
            );
          },
          "easeInOutCirc": function easeInOutCirc() {
            return (/* reexport */_easeInOutCirc
            );
          },
          "easeInOutCubic": function easeInOutCubic() {
            return (/* reexport */_easeInOutCubic
            );
          },
          "easeInOutElastic": function easeInOutElastic() {
            return (/* reexport */_easeInOutElastic
            );
          },
          "easeInOutExpo": function easeInOutExpo() {
            return (/* reexport */_easeInOutExpo
            );
          },
          "easeInOutQuad": function easeInOutQuad() {
            return (/* reexport */_easeInOutQuad
            );
          },
          "easeInOutQuart": function easeInOutQuart() {
            return (/* reexport */_easeInOutQuart
            );
          },
          "easeInOutQuint": function easeInOutQuint() {
            return (/* reexport */_easeInOutQuint
            );
          },
          "easeInOutSine": function easeInOutSine() {
            return (/* reexport */_easeInOutSine
            );
          },
          "easeInQuad": function easeInQuad() {
            return (/* reexport */_easeInQuad
            );
          },
          "easeInQuart": function easeInQuart() {
            return (/* reexport */_easeInQuart
            );
          },
          "easeInQuint": function easeInQuint() {
            return (/* reexport */_easeInQuint
            );
          },
          "easeInSine": function easeInSine() {
            return (/* reexport */_easeInSine
            );
          },
          "easeLinear": function easeLinear() {
            return (/* reexport */_easeLinear
            );
          },
          "easeOutBack": function easeOutBack() {
            return (/* reexport */_easeOutBack
            );
          },
          "easeOutCirc": function easeOutCirc() {
            return (/* reexport */_easeOutCirc
            );
          },
          "easeOutCubic": function easeOutCubic() {
            return (/* reexport */_easeOutCubic
            );
          },
          "easeOutElastic": function easeOutElastic() {
            return (/* reexport */_easeOutElastic
            );
          },
          "easeOutExpo": function easeOutExpo() {
            return (/* reexport */_easeOutExpo
            );
          },
          "easeOutQuad": function easeOutQuad() {
            return (/* reexport */_easeOutQuad
            );
          },
          "easeOutQuart": function easeOutQuart() {
            return (/* reexport */_easeOutQuart
            );
          },
          "easeOutQuint": function easeOutQuint() {
            return (/* reexport */_easeOutQuint
            );
          },
          "easeOutSine": function easeOutSine() {
            return (/* reexport */_easeOutSine
            );
          },
          "extractContentsOfBraces": function extractContentsOfBraces() {
            return (/* reexport */_extractContentsOfBraces
            );
          },
          "extractContentsOfBrackets": function extractContentsOfBrackets() {
            return (/* reexport */_extractContentsOfBrackets
            );
          },
          "extractContentsOfParentheses": function extractContentsOfParentheses() {
            return (/* reexport */_extractContentsOfParentheses
            );
          },
          "flatData": function flatData() {
            return (/* reexport */_flatData
            );
          },
          "flatTree": function flatTree() {
            return (/* reexport */_flatTree
            );
          },
          "getAbsoluteCoordinates": function getAbsoluteCoordinates() {
            return (/* reexport */_getAbsoluteCoordinates
            );
          },
          "getAbsolutePositionOfStage": function getAbsolutePositionOfStage() {
            return (/* reexport */_getAbsolutePositionOfStage
            );
          },
          "getAllDepth": function getAllDepth() {
            return (/* reexport */_getAllDepth
            );
          },
          "getAllSiblings": function getAllSiblings() {
            return (/* reexport */_getAllSiblings
            );
          },
          "getCalendarDate": function getCalendarDate() {
            return (/* reexport */_getCalendarDate
            );
          },
          "getChildren": function getChildren() {
            return (/* reexport */_getChildren
            );
          },
          "getCurrentDate": function getCurrentDate() {
            return (/* reexport */_getCurrentDate
            );
          },
          "getCurrentDay": function getCurrentDay() {
            return (/* reexport */_getCurrentDay
            );
          },
          "getCurrentMonth": function getCurrentMonth() {
            return (/* reexport */_getCurrentMonth
            );
          },
          "getCurrentYear": function getCurrentYear() {
            return (/* reexport */_getCurrentYear
            );
          },
          "getDocument": function getDocument() {
            return (/* reexport */_getDocument
            );
          },
          "getFirstAndLastMonthDay": function getFirstAndLastMonthDay() {
            return (/* reexport */_getFirstAndLastMonthDay
            );
          },
          "getFullTime": function getFullTime() {
            return (/* reexport */_getFullTime
            );
          },
          "getLastDayInMonth": function getLastDayInMonth() {
            return (/* reexport */_getLastDayInMonth
            );
          },
          "getNextMonthDate": function getNextMonthDate() {
            return (/* reexport */_getNextMonthDate
            );
          },
          "getNextSiblings": function getNextSiblings() {
            return (/* reexport */_getNextSiblings
            );
          },
          "getNextYearDate": function getNextYearDate() {
            return (/* reexport */_getNextYearDate
            );
          },
          "getNow": function getNow() {
            return (/* reexport */_getNow
            );
          },
          "getOffset": function getOffset() {
            return (/* reexport */_getOffset
            );
          },
          "getParents": function getParents() {
            return (/* reexport */_getParents
            );
          },
          "getPosition": function getPosition() {
            return (/* reexport */_getPosition
            );
          },
          "getPrevMonthDate": function getPrevMonthDate() {
            return (/* reexport */_getPrevMonthDate
            );
          },
          "getPrevYearDate": function getPrevYearDate() {
            return (/* reexport */_getPrevYearDate
            );
          },
          "getPreviousSiblings": function getPreviousSiblings() {
            return (/* reexport */_getPreviousSiblings
            );
          },
          "getSpecifiedDate": function getSpecifiedDate() {
            return (/* reexport */_getSpecifiedDate
            );
          },
          "getTextBoundingRect": function getTextBoundingRect() {
            return (/* reexport */_getTextBoundingRect
            );
          },
          "getTodayDate": function getTodayDate() {
            return (/* reexport */_getTodayDate
            );
          },
          "getTomorrowDate": function getTomorrowDate() {
            return (/* reexport */_getTomorrowDate
            );
          },
          "getTransitionDuration": function getTransitionDuration() {
            return (/* reexport */_getTransitionDuration
            );
          },
          "getYesterdayDate": function getYesterdayDate() {
            return (/* reexport */_getYesterdayDate
            );
          },
          "isElement": function isElement() {
            return (/* reexport */_isElement
            );
          },
          "isHTMLElement": function isHTMLElement() {
            return (/* reexport */_isHTMLElement
            );
          },
          "isInViewport": function isInViewport() {
            return (/* reexport */_isInViewport
            );
          },
          "isJSON": function isJSON() {
            return (/* reexport */_isJSON
            );
          },
          "isNode": function isNode() {
            return (/* reexport */_isNode
            );
          },
          "isNumeric": function isNumeric() {
            return (/* reexport */_isNumeric
            );
          },
          "isRootElement": function isRootElement() {
            return (/* reexport */_isRootElement
            );
          },
          "isShadowRoot": function isShadowRoot() {
            return (/* reexport */_isShadowRoot
            );
          },
          "isValidDate": function isValidDate() {
            return (/* reexport */_isValidDate
            );
          },
          "isValidDay": function isValidDay() {
            return (/* reexport */_isValidDay
            );
          },
          "isValidHours": function isValidHours() {
            return (/* reexport */_isValidHours
            );
          },
          "isValidMinutesAndSeconds": function isValidMinutesAndSeconds() {
            return (/* reexport */_isValidMinutesAndSeconds
            );
          },
          "isValidMonth": function isValidMonth() {
            return (/* reexport */_isValidMonth
            );
          },
          "isValidNumeric": function isValidNumeric() {
            return (/* reexport */_isValidNumeric
            );
          },
          "isValidYear": function isValidYear() {
            return (/* reexport */_isValidYear
            );
          },
          "nodeContains": function nodeContains() {
            return (/* reexport */_nodeContains
            );
          },
          "padZero": function padZero() {
            return (/* reexport */_padZero
            );
          },
          "readStream": function readStream() {
            return (/* reexport */_readStream2
            );
          },
          "setDateDays": function setDateDays() {
            return (/* reexport */_setDateDays
            );
          },
          "setDateHours": function setDateHours() {
            return (/* reexport */_setDateHours
            );
          },
          "setDateMinutes": function setDateMinutes() {
            return (/* reexport */_setDateMinutes
            );
          },
          "setDefaultOptions": function setDefaultOptions() {
            return (/* reexport */_setDefaultOptions
            );
          },
          "throttle": function throttle() {
            return (/* reexport */_throttle
            );
          },
          "timestampToDate": function timestampToDate() {
            return (/* reexport */_timestampToDate
            );
          },
          "toBinary": function toBinary() {
            return (/* reexport */_toBinary
            );
          },
          "uint8arrayToArr": function uint8arrayToArr() {
            return (/* reexport */_uint8arrayToArr
            );
          },
          "uint8arrayToBase64Str": function uint8arrayToBase64Str() {
            return (/* reexport */_uint8arrayToBase64Str
            );
          },
          "useAutosizeTextArea": function useAutosizeTextArea() {
            return (/* reexport */hooks_useAutosizeTextArea
            );
          },
          "useClickOutside": function useClickOutside() {
            return (/* reexport */hooks_useClickOutside
            );
          },
          "useDebounce": function useDebounce() {
            return (/* reexport */hooks_useDebounce
            );
          },
          "useInterval": function useInterval() {
            return (/* reexport */hooks_useInterval
            );
          },
          "useKeyPress": function useKeyPress() {
            return (/* reexport */hooks_useKeyPress
            );
          },
          "useThrottle": function useThrottle() {
            return (/* reexport */hooks_useThrottle
            );
          },
          "useWindowScroll": function useWindowScroll() {
            return (/* reexport */hooks_useWindowScroll
            );
          }
        });
        ; // CONCATENATED MODULE: ./src/libs/easing.ts
        /*
         * All easing functions
         * @link: https://easings.net
         * @param {number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
         * @param {number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
         * @param {number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
         * @param {number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
         * @return {number}
         */
        function _easeLinear(t, b, c, d) {
          return c * t / d + b;
        }
        function _easeInQuad(t, b, c, d) {
          return c * (t /= d) * t + b;
        }
        function _easeOutQuad(t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        }
        function _easeInOutQuad(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t + b;
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
        function _easeInSine(t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        }
        function _easeOutSine(t, b, c, d) {
          return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }
        function _easeInOutSine(t, b, c, d) {
          return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
        function _easeInExpo(t, b, c, d) {
          return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
        function _easeOutExpo(t, b, c, d) {
          return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
        function _easeInOutExpo(t, b, c, d) {
          if (t == 0) return b;
          if (t == d) return b + c;
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
        function _easeInCirc(t, b, c, d) {
          return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        }
        function _easeOutCirc(t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }
        function _easeInOutCirc(t, b, c, d) {
          if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
        function _easeInCubic(t, b, c, d) {
          return c * (t /= d) * t * t + b;
        }
        function _easeOutCubic(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
        }
        function _easeInOutCubic(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
        function _easeInQuart(t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
        }
        function _easeOutQuart(t, b, c, d) {
          return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
        function _easeInOutQuart(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
        function _easeInQuint(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        }
        function _easeOutQuint(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
        function _easeInOutQuint(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
        function _easeInElastic(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0) return b;
          if ((t /= d) == 1) return b + c;
          if (!p) p = d * .3;
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else var s = p / (2 * Math.PI) * Math.asin(c / a);
          return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        function _easeOutElastic(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0) return b;
          if ((t /= d) == 1) return b + c;
          if (!p) p = d * .3;
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else var s = p / (2 * Math.PI) * Math.asin(c / a);
          return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        }
        function _easeInOutElastic(t, b, c, d) {
          var s = 1.70158;
          var p = 0;
          var a = c;
          if (t == 0) return b;
          if ((t /= d / 2) == 2) return b + c;
          if (!p) p = d * (.3 * 1.5);
          if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
          } else var s = p / (2 * Math.PI) * Math.asin(c / a);
          if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
        function _easeInBack(t, b, c, d) {
          var s = 1.70158;
          if (s == undefined) s = 1.70158;
          return c * (t /= d) * t * ((s + 1) * t - s) + b;
        }
        function _easeOutBack(t, b, c, d) {
          var s = 1.70158;
          if (s == undefined) s = 1.70158;
          return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
        function _easeInOutBack(t, b, c, d) {
          var s = 1.70158;
          if (s == undefined) s = 1.70158;
          if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
        ; // CONCATENATED MODULE: ./src/libs/init-default-options.ts
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
        /**
         *  Set a default JSON format configuration
         *
         * @param  {*} props         - Set some default keys and values.
         * @param  {*} options       - A JSON variable passed in from outside, including key and value.
         * @return {JSON}            - Merge the new and old values.
         */
        function _setDefaultOptions(props, options) {
          if (_typeof(options) === ( true ? "undefined" : 0) || options === null || options === false) options = {};
          //Set a default configuration
          if (_isJSON(props)) {
            var defaultConfigValues = Object.values(props);
            Object.keys(props).forEach(function (prop, index) {
              // Well-formed string type
              Object.keys(options).forEach(function (prop2, index2) {
                if (prop2 === prop) {
                  var _v = options[prop2];
                  if (_v == 'true') _v = true;
                  if (_v == 'false') _v = false;
                  if (_isValidNumeric(_v)) _v = parseFloat(_v);
                  if (_isJSON(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
                  options[prop2] = _v;
                }
              });

              //
              if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
            });
          }
          return options;
        }

        /**
        * Check if a string is a valid number
         * @param {*} str 
         * @returns 
        */
        function _isValidNumeric(str) {
          if (typeof str != "string") return false; // we only process strings!  
          if (!isNaN(Number(str)) &&
          // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)
          !isNaN(parseFloat(str)) // ensure strings of whitespace fail
          ) {
            return true;
          } else {
            return false;
          }
        }

        /**
         * Determine whether it is in JSON format
         * @param {*} str 
         * @returns 
         */
        function _isJSON(str) {
          if (typeof str === 'string' && str.length > 0) {
            if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
              return false;
            } else {
              if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                return true;
              } else {
                return false;
              }
            }
          } else {
            if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
              return true;
            } else {
              return false;
            }
          }
        }
        ; // CONCATENATED MODULE: ./src/libs/anim.ts
        function anim_typeof(obj) {
          "@babel/helpers - typeof";

          return anim_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, anim_typeof(obj);
        }

        /**
         * Element Animate
         * @public
         * 
         * @param  {HTMLElement} curElement      - Element of animation.
         * @param  {?JSON} config                - Configuration of animation
         * @param  {?string} easeType            - Types of easing animation.
        * @param  {?Function} callback           - Callback after animation ends
         */
        function animateStyles(curElement, config) {
          var easeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
          var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
          if (anim_typeof(curElement) === ( true ? "undefined" : 0)) return;

          // Set a default configuration
          config = _setDefaultOptions({
            "startHeight": 0,
            // node.scrollHeight
            "endHeight": 0,
            "speed": 200 //ms
          }, config);
          var _endHeight = config.endHeight;
          var _speed = config.speed;
          var _startHeight = config.startHeight;
          var duration = _speed;
          var start = new Date().getTime();
          var from = 0;
          var to = 100;
          var requestId;
          var loop = function loop() {
            //easing
            var time = new Date().getTime() - start; //Work out the elapsed time
            var val;
            switch (easeType) {
              case "linear":
                val = _easeLinear(time, from, to - from, duration);
                break;
              case "ease-in":
                val = _easeInQuad(time, from, to - from, duration);
                break;
              case "ease-out":
                val = _easeOutQuad(time, from, to - from, duration);
                break;
              case "ease-in-out":
                val = _easeInOutQuad(time, from, to - from, duration);
                break;
              default:
                val = _easeLinear(time, from, to - from, duration);
            }

            // Elapsed time in miliseconds
            var percent = val / 100;

            // change height
            if (curElement.clientHeight < _endHeight) {
              curElement.style.height = _endHeight * percent + 'px';
            } else {
              if (_startHeight > 0) curElement.style.height = _startHeight - _startHeight * percent + 'px';
            }

            //If the elapsed time is less than the speed (ms)
            if (time < duration) {
              requestId = window.requestAnimationFrame(loop);
            } else {
              // change height
              curElement.style.height = _endHeight + 'px';
              if (typeof callback === 'function') callback();
              window.cancelAnimationFrame(requestId);
            }
          };
          requestId = window.requestAnimationFrame(loop);
        }
        /* harmony default export */
        var anim = animateStyles;
        ; // CONCATENATED MODULE: ./src/libs/performance.ts
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
        ; // CONCATENATED MODULE: ./src/libs/dom.ts
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        /**
         * Dom Utilities
         * @param {HTMLElement} el      - Element
         * @param  {?String} filter      - A filter string
         * @returns HtmlElementCollection
         */
        function matches(el, filter) {
          if (el && el.nodeType === 1) {
            if (filter) {
              return el.matches(filter);
            }
            return true;
          }
          return false;
        }

        // the next siblings
        function _getNextSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          while (el = el.nextSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // previous siblings
        function _getPreviousSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          while (el = el.previousSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // parent and get all the siblings
        function _getAllSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          el = el.parentNode.firstChild;
          while (el = el.nextSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // all parent nodes
        function _getParents(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var parents = [];
          while (el = el.parentNode) {
            if (matches(el, filter)) {
              parents.push(el);
            }
          }
          return parents;
        }

        // all child nodes
        function _getChildren(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          all.push.apply(all, _toConsumableArray(el.childNodes));
          var _iterator = _createForOfIteratorHelper(el.childNodes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              _getChildren(child, filter, all);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var res = all.filter(function (item) {
            return matches(item, filter);
          });
          return res;
        }
        function _isRootElement(element) {
          return element.matches('html,body');
        }
        function _getDocument(node) {
          if (typeof node === 'undefined') {
            return document;
          } else {
            return node.ownerDocument;
          }
        }
        function _isNode(value) {
          return value instanceof Node;
        }
        function _isElement(value) {
          return value instanceof Element;
        }
        function _isHTMLElement(value) {
          return value instanceof HTMLElement;
        }
        function _isShadowRoot(value) {
          // Browsers without `ShadowRoot` support.
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          return value instanceof ShadowRoot;
        }

        /* console.log(nodeContains(document.body, document.getElementById('obj'))) */
        function _nodeContains(parent, child) {
          var _child$getRootNode;
          if (!parent || !child) {
            return false;
          }
          var rootNode = (_child$getRootNode = child.getRootNode) === null || _child$getRootNode === void 0 ? void 0 : _child$getRootNode.call(child);

          // First, attempt with faster native method
          if (parent.contains(child)) {
            return true;
          }

          // then fallback to custom implementation with Shadow DOM support
          if (rootNode && _isShadowRoot(rootNode)) {
            var next = child;
            while (next) {
              if (parent === next) {
                return true;
              }
              // @ts-ignore
              next = next.parentNode || next.host;
            }
          }

          // Give up, the result is false
          return false;
        }
        ; // CONCATENATED MODULE: ./src/libs/get-element-property.ts
        function get_element_property_typeof(obj) {
          "@babel/helpers - typeof";

          return get_element_property_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, get_element_property_typeof(obj);
        }
        /**
         * Get the -webkit-transition-duration property
         *
         * @param {HTMLElement} el - A DOM node containing one selector to match against.
         * @return {number}    - Returns a pure number.
         */
        function _getTransitionDuration(el) {
          if (get_element_property_typeof(el) === ( true ? "undefined" : 0)) {
            return 0;
          }
          var style = window.getComputedStyle(el),
            duration = style.webkitTransitionDuration,
            delay = style.webkitTransitionDelay;
          if (get_element_property_typeof(duration) != ( true ? "undefined" : 0)) {
            // fix miliseconds vs seconds
            duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
            delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
            return duration;
          } else {
            return 0;
          }
        }

        /**
         * Get an object's absolute position on the page
         *
         * @param {HTMLElement} el - A DOM node containing one selector to match against.
         * @return {Json}    - An object containing the properties top and left. 
         */
        function _getAbsoluteCoordinates(el) {
          var windowWidth = window.innerWidth,
            leftPos = null,
            topPos = null;
          var pEl = el.parentElement;
          if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
            leftPos = el.offsetLeft == 0 ? pEl.offsetLeft : el.offsetLeft;
            topPos = el.offsetTop == 0 ? pEl.offsetTop : el.offsetTop;
          } else {
            // width and height in pixels, including padding and border
            // Corresponds to outerWidth(), outerHeight()
            leftPos = el.offsetLeft == 0 ? windowWidth - (pEl.offsetLeft + pEl.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
            topPos = el.offsetTop == 0 ? windowWidth - (pEl.offsetTop + pEl.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
          }
          return {
            'left': leftPos,
            'top': topPos
          };
        }

        /**
         * Get the current coordinates of the first element in the set of matched elements, relative to the document.
         *
         * @param {Element} el - A DOM node containing one selector to match against.
         * @return {Json}      - An object containing the properties top and left. 
         */
        function _getOffset(el) {
          var res = {
            top: 0,
            left: 0
          };
          var box = el.getBoundingClientRect();
          var top = 0,
            left = 0;

          //Include scrollbar and border
          top = box.top + window.pageYOffset - document.documentElement.clientTop;
          left = box.left + window.pageXOffset - document.documentElement.clientLeft;
          res = {
            top: top,
            left: left
          };
          return res;
        }

        /**
         * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
         *
         * @param {HTMLElement} el - A DOM node containing one selector to match against.
         * @return {Json}      - An object containing the properties top and left.
         */
        function _getPosition(el) {
          var res = {
            top: 0,
            left: 0
          };
          var top = el.offsetTop ? el.offsetTop : 0,
            left = el.offsetLeft ? el.offsetLeft : 0;
          res = {
            top: top,
            left: left
          };
          return res;
        }

        /**
         * Get the absolute position of the stage element
         * 
         * @param {HTMLElement} domElement  - A DOM node
         * @param {number | string} left     - left offset
         * @param {number | string} top      - top offset
         * @returns 
         */
        function _getAbsolutePositionOfStage(domElement) {
          var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          if (!parseInt(left)) {
            left = 0;
          } else {
            left = parseInt(left);
          }
          if (!parseInt(top)) {
            top = 0;
          } else {
            top = parseInt(top);
          }
          var box = domElement.getBoundingClientRect();
          var body = document.body;
          var docElem = document.documentElement;
          var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
          var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
          var clientTop = docElem.clientTop || body.clientTop || 0;
          var clientLeft = docElem.clientLeft || body.clientLeft || 0;
          var attr = {};
          attr.y = box.top + scrollTop - clientTop + top;
          attr.x = box.left + scrollLeft - clientLeft + left;
          attr.width = box.width;
          attr.height = box.height;
          return attr;
        }
        ; // CONCATENATED MODULE: ./src/libs/tree.ts
        function tree_typeof(obj) {
          "@babel/helpers - typeof";

          return tree_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, tree_typeof(obj);
        }
        var _excluded = ["children"];
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
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return tree_typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (tree_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (tree_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function tree_toConsumableArray(arr) {
          return tree_arrayWithoutHoles(arr) || tree_iterableToArray(arr) || tree_unsupportedIterableToArray(arr) || tree_nonIterableSpread();
        }
        function tree_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function tree_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return tree_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tree_arrayLikeToArray(o, minLen);
        }
        function tree_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function tree_arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return tree_arrayLikeToArray(arr);
        }
        function tree_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _objectDestructuringEmpty(obj) {
          if (obj == null) throw new TypeError("Cannot destructure " + obj);
        }
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
        /**
         * Convert Tree
         * @param {Array} arr                    - Flat array
         * @param  {?string | ?number} parentId  - Parent id
         * @param  {?string} keyId               - Key value of id.
         * @param  {?string} keyParentId         - Key value of parent id.
         * @returns Array
         */
        function _convertTree(arr) {
          var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var keyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
          var keyParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent_id';
          if (!parentId) {
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(function (item) {
              return !item[keyParentId];
            }).map(function (item) {
              // Query all child nodes by parent node ID
              item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
              return item;
            });
          } else {
            return arr.filter(function (item) {
              return item[keyParentId] === parentId;
            }).map(function (item) {
              // Query all child nodes by parent node ID
              item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
              return item;
            });
          }
        }

        /**
         * Flat tree
         * @param {Array} arr                    - Hierarchical array
         * @returns Array
         */
        function _flatTree(arr) {
          var flatData = function flatData(_ref) {
            var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
            var _rest$children = rest.children,
              children = _rest$children === void 0 ? [] : _rest$children;
            return [_objectSpread({}, rest)].concat(tree_toConsumableArray(children.flatMap(flatData)));
          };
          var result = arr.flatMap(flatData);

          //remove children from item
          result = result.map(function (item) {
            delete item.children;
            return item;
          });
          return result;
        }

        /**
         * Get all depth
         * @param {Object} node 
         * @returns Number
         */
        function _getAllDepth(arr) {
          var count = function count(children) {
            return children.reduce(function (depth, child) {
              return Math.max(depth, 1 + count(child.children)); // increment depth of children by 1, and compare it with accumulated depth of other children within the same element
            }, 0); //default value 0 that's returned if there are no children
          };

          return count(arr);
        }

        /**
        * Add depth to each item in the tree
        * @param {Array} arr       - Hierarchical array
        * @param  {?string} keyId               - Key value of id.
        * @param  {?string} keyParentId         - Key value of parent id.
        * @param  {?number} depth               - Depth of the item.
        * @returns Number
        */
        function _addTreeDepth(arr) {
          var keyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
          var parentItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          return arr.reduce(function (acc, el) {
            var children = el.children,
              otherProps = _objectWithoutProperties(el, _excluded);
            acc.push(_objectSpread(_objectSpread({}, otherProps), {}, {
              parentItem: parentItem,
              depth: depth
            }));
            if (children) {
              return acc.concat(_addTreeDepth(children, keyId, el[keyId], depth + 1));
            }
            return acc;
          }, []);
        }

        /**
         * Add indent placeholder
         * @param {Array} arr                    - Flat array
         * @param  {?string} placeholder         - String of placeholder
         * @param  {?string} lastPlaceholder     - Last String of placeholder
         * @param  {?string} keyName             - Key value of name.
         * @returns Array
         */
        function _addTreeIndent(arr) {
          var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;&nbsp;&nbsp;&nbsp;';
          var lastPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var keyName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'label';
          arr.forEach(function (item) {
            var indent = '';
            if (item.depth) {
              Array(item.depth).fill(0).forEach(function (k, i) {
                indent += placeholder;
                if (i === item.depth - 1) {
                  item[keyName] = indent + lastPlaceholder + item[keyName];
                }
              });
            }
          });
        }
        ; // CONCATENATED MODULE: ./src/libs/buffer.ts
        function _regeneratorRuntime() {
          "use strict";

          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          _regeneratorRuntime = function _regeneratorRuntime() {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty = Object.defineProperty || function (obj, key, desc) {
              obj[key] = desc.value;
            },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context)
            }), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && "object" == buffer_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
              }
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = "suspendedStart";
            return function (method, arg) {
              if ("executing" === state) throw new Error("Generator is already running");
              if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg;;) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                  if ("suspendedStart" === state) throw state = "completed", context.arg;
                  context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                  if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                  return {
                    value: record.arg,
                    done: context.done
                  };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                  };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0
          }), defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0
          }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports.awrap = function (arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
            return this;
          }), define(Gp, "toString", function () {
            return "[object Generator]";
          }), exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
              for (; keys.length;) {
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
              }
              return next.done = !0, next;
            };
          }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
          }, exports;
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
            });
          };
        }
        function buffer_typeof(obj) {
          "@babel/helpers - typeof";

          return buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, buffer_typeof(obj);
        }
        /**
         * base64 to ArrayBuffer
         * @param {String} data 
         * @returns {ArrayBuffer}
         */
        /*
        @returns:
        
        ArrayBuffer(522240)
        
            byteLength: 522240
            detached: false
            maxByteLength: 522240
            resizable: false
            [[Prototype]]: ArrayBuffer
            [[Int8Array]]: Int8Array(522240)
            [[Uint8Array]]: Uint8Array(522240)
            [[Int16Array]]: Int16Array(261120)
            [[Int32Array]]: Int32Array(130560)
            [[ArrayBufferByteLength]]: 522240
            [[ArrayBufferData]]: 673
        */
        function _base64ToArrayBuffer(data) {
          var res = data;
          if (data.indexOf('base64,') >= 0) {
            res = data.split('base64,')[1];
          }
          var binaryString = atob(res);
          var bytes = new Uint8Array(binaryString.length);
          for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          return bytes.buffer;
        }

        /**
         * ArrayBuffer to Uint8Array
         * @param {ArrayBuffer} data 
         * @returns {Uint8Array}
         */
        /*
        @returns:
        
        Uint8Array(522240) [208, 207, 17, 224, 161, 177, 26, 225, 0, 0, ......]
        */
        function _arrayBufferToUint8Array(data) {
          return new Uint8Array(data);
        }

        /**
         * uint8array to array
         * @param {Uint8Array} data 
         * @returns {Array}
         */
        function _uint8arrayToArr(data) {
          return Array.from(data);
        }

        /**
         * array to uint8array
         * @param {Array} data 
         * @returns {Uint8Array}
         */
        /* Example:
        
        axios({
            method: 'get',
            url: 'http://xxxx',
            responseType: 'arraybuffer'
        })
        .then(function (res) {
            //res.data ==>  ArrayBuffer(xxxx)
            const b64string = uint8arrayToBase64Str(res.data);
            const uint8ArrayData = arrayToUint8array(res.data);
            
            // do something
        
        });
        */
        function _arrayToUint8array(data) {
          return new Uint8Array(data);
        }

        /**
         * uint8array to base64 string
         * @param {Uint8Array|Array} data 
         * @returns {String}
         */
        function _uint8arrayToBase64Str(data) {
          if ((typeof Buffer === "undefined" ? "undefined" : buffer_typeof(Buffer)) !== ( true ? "undefined" : 0)) {
            return Buffer.from(data, 'binary').toString('base64'); // node.js too
          } else {
            var binary = '';
            var bytes = new Uint8Array(data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
          }
        }

        /**
         * decode base64 string
         * @param {String} data 
         * @returns {String}
         */
        function _decodeBase64Str(data) {
          // avoid messy code
          // especially for Chinese, avoid using encodeURIComponent() and encodeURI()
          var decoded = decodeURIComponent(escape(atob(data)));
          return decoded;
        }

        /**
         * integer to binary
         * @param {Number} data 
         * @returns {String}
         */
        function _toBinary(data) {
          if (!Number.isSafeInteger(data)) {
            throw new TypeError('value must be a safe integer');
          }
          return (data >>> 0).toString(2);
        }

        /**
         * array to blob
         * @param {Uint8Array} uint8ArrayData 
         * @returns {Blob}
         */
        function _arrayToBlob(uint8ArrayData) {
          return new Blob([uint8ArrayData], {
            type: "text/plain"
          });
        }

        /**
         * blob to uint8array
         * @param {Blob} data 
         * @returns {Uint8Array}
         */
        function _blobToUint8array(data) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.addEventListener("loadend", function () {
              resolve(reader.result);
            });
            reader.readAsArrayBuffer(data);
          });
        }

        /**
         * array to stream
         * @param {Array<Uint8Array>} data 
         * @returns {ReadableStream }
         */
        /* Example:
        
        const uint8ArrayDataArr = [
            [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,30,0,0,0,30,8,6,0,0,0,59,48,174,162,0,0,0,220,73,68,65,84,72,199,237,214,81,14,194,32,12,0,80,60,128,215,219,49,28,91,118,10,55,216,53,188,132,137,39,19,71,130,75,69,42,148,194,76,116,31,253,89,40,111,233,104,153,48,198,136,111,132,216,225,255,134,143,151,166,84,28,150,152,151,24,158,207,182,130,45,106,92,12,91,193,16,93,241,218,112,8,181,113,174,9,163,232,90,234,130,223,50,134,142,47,135,11,36,216,183,57,49,81,29,67,125,120,116,11,238,12,60,9,133,240,228,45,180,120,91,11,133,112,31,72,176,184,100,162,19,150,3,75,157,139,147,209,208,225,234,136,184,202,65,177,118,146,200,102,178,20,250,169,143,49,188,43,129,198,6,136,116,101,246,55,191,33,168,162,116,65,108,114,97,56,11,77,29,153,109,4,87,57,195,38,117,86,95,75,162,20,56,84,114,205,153,233,148,219,9,226,154,123,131,81,175,69,201,41,239,27,188,255,222,254,52,252,0,234,253,186,89,222,225,73,252,0,0,0,0,73,69,78,68,174,66,96,130]
        ];
        const readableStream = arrayToStream(uint8ArrayDataArr);  
        
        */
        function _arrayToStream(data) {
          // @return --> ReadableStream {locked: false}
          return new ReadableStream({
            start: function start(controller) {
              // push a chunk
              data.forEach(function (chunk) {
                controller.enqueue(new Uint8Array(chunk));
              });
            },
            pull: function pull(controller) {
              // Called `read()` when the controller's queue is empty.
              //controller.enqueue(...);
              controller.close();
            },
            cancel: function cancel(reason) {
              // Called when the stream is canceled.
            }
          });
        }

        /**
         * read stream
         * @param {ReadableStream } data 
         * @returns {Promise}
         */
        /* Example:
        
        readStream(readableStream).then((value) => {
            console.log(value);
            // iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA3ElEQVRIx+3WUQ7CIAwAUDyA19sxHFt2CjfYNbyEiScTR4JLRSqUwkx0H/1ZKG/paJkwxohvhNjh/4aPl6ZUHJaYlxiez7aCLWpcDFvBEF3x2nAItXGuCaPoWuqC3zKGji+HCyTYtzkxUR1DfXh0C+4MPAmF8OQttHhbC4VwH0iwuGSiE5YDS52Lk9HQ4eqIuMpBsXaSyGayFPqpjzG8K4HGBoh0ZfY3vyGoonRBbHJhOAtNHZltBFc5wyZ1Vl9LohQ4VHLNmemU2wnimnuDUa9FySnvG7z/3v40/ADq/bpZ3uFJ/AAAAABJRU5ErkJggg==
            
            // test: <img src="data:image/png;base64,iVBORw0KGgo..." >
             
        });
        */
        function _readStream2(_x) {
          return _readStream.apply(this, arguments);
        }
        function _readStream() {
          _readStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var resReceived, stream, readInto;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  resReceived = '';
                  stream = data; // ReadableStream {locked: false}
                  readInto = /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
                      var reader, pump, _pump;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _pump = function _pump3() {
                              _pump = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                                var _yield$reader$read, done, value, base64String;
                                return _regeneratorRuntime().wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return reader.read();
                                    case 2:
                                      _yield$reader$read = _context.sent;
                                      done = _yield$reader$read.done;
                                      value = _yield$reader$read.value;
                                      if (!done) {
                                        _context.next = 7;
                                        break;
                                      }
                                      return _context.abrupt("return");
                                    case 7:
                                      // value for fetch streams is a Uint8Array
                                      base64String = _uint8arrayToBase64Str(value);
                                      resReceived += base64String;
                                      return _context.abrupt("return", pump());
                                    case 10:
                                    case "end":
                                      return _context.stop();
                                  }
                                }, _callee);
                              }));
                              return _pump.apply(this, arguments);
                            };
                            pump = function _pump2() {
                              return _pump.apply(this, arguments);
                            };
                            reader = stream.getReader();
                            return _context2.abrupt("return", pump());
                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function readInto(_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                  _context3.next = 5;
                  return readInto(stream);
                case 5:
                  return _context3.abrupt("return", resReceived);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _readStream.apply(this, arguments);
        }
        ; // CONCATENATED MODULE: ./src/libs/convert.ts
        /**
         * Convert value to string separated by square brackets 
         * @param {string} str  such as: 1,2,3
         * @returns {string} such as: [1][2][3]
         */
        function _convertStringByCommaToValByBrackets(str) {
          if (typeof str === 'undefined' || str === null || str === '') {
            return '';
          }
          return str.split(',').map(function (v) {
            return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
          }).join('');
        }

        /**
         * Convert array value to string  separated by square brackets 
         * @param {string[]} arr  such as: ['1','2','3']
         * @returns {string} such as: [1][2][3]
         */
        function _convertArrToValByBrackets(arr) {
          if (!Array.isArray(arr)) return '';
          return arr.map(function (v) {
            return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
          }).join('');
        }

        /**
         * Convert value to string separated by curly braces
         * @param {string} str  such as: 1,2,3
         * @returns {string} such as: {1}{2}{3}
         */
        function _convertStringByCommaToValByBraces(str) {
          if (typeof str === 'undefined' || str === null || str === '') {
            return '';
          }
          return str.split(',').map(function (v) {
            return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
          }).join('');
        }

        /**
         * Convert array value to string  separated by curly braces
         * @param {string[]} arr  such as: ['1','2','3']
         * @returns {string} such as: {1}{2}{3}
         */
        function _convertArrToValByBraces(arr) {
          if (!Array.isArray(arr)) return '';
          return arr.map(function (v) {
            return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
          }).join('');
        }
        ; // CONCATENATED MODULE: ./src/libs/extract.ts
        /**
         * Extract the contents of square brackets
         * @param {string} str    =>  input string. such as '[1,2] [f][c]'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfBrackets(str) {
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
         * @param {string} str    =>  input string. such as '{1,2} {f}{c}'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfBraces(str) {
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
         * @param {string} str    =>  input string. such as '(1,2) (f)(c)'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfParentheses(str) {
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
        ; // CONCATENATED MODULE: ./src/libs/date.ts
        /**
         * Get now
         * @returns {Date}  // Wed Apr 17 2024 14:31:36 GMT+0800 (China Standard Time)
         */
        var _getNow = function getNow() {
          return new Date(Date.now());
        };

        /**
         * Zero Padding
         * @param {Number} num
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  '01', '05', '12'
         */
        var _padZero = function padZero(num) {
          var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (padZeroEnabled) {
            return num < 10 ? '0' + num : num.toString();
          } else {
            return num.toString();
          }
        };

        /**
         * Number validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isNumeric = function isNumeric(v) {
          return !isNaN(parseFloat(v)) && isFinite(v);
        };

        /**
         * Hours validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isValidHours = function isValidHours(v) {
          return /^([01]?[0-9]|2[0-3])$/.test(v); //  0～23, 00～23
        };

        /**
         * Minutes and Seconds validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isValidMinutesAndSeconds = function isValidMinutesAndSeconds(v) {
          return /^([01]?[0-9]|[0-5][0-9])$/.test(v); //  0~59, 00~59
        };

        /**
         * Year validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isValidYear = function isValidYear(v) {
          return /^([1-9][0-9])\d{2}$/.test(v); //  1000 ～ 9999
        };

        /**
         * Month validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isValidMonth = function isValidMonth(v) {
          return /^(0?[1-9]|1[0-2])$/.test(v); //  01～12, 1~12
        };

        /**
         * Day validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isValidDay = function isValidDay(v) {
          return /^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(v); //  01～31, 1~31
        };

        /**
         * Check if the string is legitimate
         * @param {String} v 
         * @returns {Boolean}  
         */
        var _isValidDate = function isValidDate(v) {
          return !(String(new Date(v)).toLowerCase() === 'invalid date');
        };

        /**
         * Get calendar date
         * @param {Date | String} v 
         * @returns {Date | String}  yyyy-MM-dd
         */
        function _dateFormat(v) {
          var date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
          return date;
        }

        /**
         * Get calendar date
         * @param {Date | String} v 
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  yyyy-MM-dd
         */
        function _getCalendarDate(v) {
          var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var date = _dateFormat(v);
          var year = date.getFullYear();
          var month = _padZero(date.getMonth() + 1, padZeroEnabled);
          var day = _padZero(date.getDate(), padZeroEnabled);
          var hours = _padZero(date.getHours(), padZeroEnabled);
          var minutes = _padZero(date.getMinutes(), padZeroEnabled);
          var seconds = _padZero(date.getSeconds(), padZeroEnabled);
          var res = "".concat(year, "-").concat(month, "-").concat(day);
          return res;
        }

        /**
         * Get today date
         * @returns {String}  yyyy-MM-dd
         */
        function _getTodayDate() {
          return _getCalendarDate(new Date());
        }

        /**
         * Get tomorrow date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getTomorrowDate(v) {
          var today = _dateFormat(v);
          var _tomorrow = today;
          _tomorrow.setDate(_tomorrow.getDate() + 1);
          var tomorrow = _getCalendarDate(_tomorrow);
          return tomorrow;
        }

        /**
         * Get yesterday date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getYesterdayDate(v) {
          var today = _dateFormat(v);
          var _yesterday = today;
          _yesterday.setDate(_yesterday.getDate() - 1);
          var yesterday = _getCalendarDate(_yesterday);
          return yesterday;
        }

        /**
         * Get specified date
         * @param {Date | String} v 
         * @param {Number} days  The number of days forward or backward, which can be a negative number
         * @returns {String}  yyyy-MM-dd
         */
        /* console.log(getSpecifiedDate(getTodayDate(), -180)); // 2023-08-27 (180 days before February 23, 202) */
        function _getSpecifiedDate(v, days) {
          var today = _dateFormat(v);
          var _specifiedDay = today;
          _specifiedDay.setDate(_specifiedDay.getDate() + days);
          var specifiedDay = _getCalendarDate(_specifiedDay);
          return specifiedDay;
        }

        /**
         * Get next month date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getNextMonthDate(v) {
          var today = _dateFormat(v);
          today.setMonth(today.getMonth() + 1);
          return _getCalendarDate(today);
        }

        /**
         * Get previous month date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getPrevMonthDate(v) {
          var today = _dateFormat(v);
          today.setMonth(today.getMonth() - 1);
          return _getCalendarDate(today);
        }

        /**
         * Get next year date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getNextYearDate(v) {
          var today = _dateFormat(v);
          var current = new Date(today);
          current.setFullYear(current.getFullYear() + 1);
          return _getCalendarDate(current);
        }

        /**
         * Get previous year date
         * @param {Date | String} v 
         * @returns {String}  yyyy-MM-dd
         */
        function _getPrevYearDate(v) {
          var today = _dateFormat(v);
          var current = new Date(today);
          current.setFullYear(current.getFullYear() - 1);
          return _getCalendarDate(current);
        }

        /**
         * Get last day in month
         * @param {Date | String} v 
         * @param {?Number}  targetMonth 
         * @returns {String | Number}  yyyy-MM-dd
         */
        /*
        Example: Get last day in  next month 
        
        const _day = '2024-01-01';
        const y = new Date(getNextMonthDate(_day)).getFullYear();
        const m = String(new Date(getNextMonthDate(_day)).getMonth() + 1).padStart(2, '0');
        const d = getLastDayInMonth(getNextMonthDate(_day), new Date(getNextMonthDate(_day)).getMonth() + 1);
        
        const lastDayOfNextMonth = `${y}-${m}-${d}`; // 2024-02-29
        
        */
        function _getLastDayInMonth(v) {
          var targetMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var date = _dateFormat(v);
          return new Date(date.getFullYear(), typeof targetMonth !== 'undefined' ? targetMonth : date.getMonth() - 1, 0).getDate();
        }

        /**
         * Get current year
         * @returns {Number}
         */
        function _getCurrentYear() {
          return new Date().getFullYear();
        }

        /**
         * Get current month
         * @param {Boolean} padZeroEnabled 
         * @returns {Number}
         */
        function _getCurrentMonth() {
          var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var m = new Date().getMonth() + 1;
          return padZeroEnabled ? String(m).padStart(2, '0') : m;
        }

        /**
         * Get current day
         * @param {Boolean} padZeroEnabled 
         * @returns {Number}
         */
        function _getCurrentDay() {
          var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var d = new Date().getDate();
          return padZeroEnabled ? String(d).padStart(2, '0') : d;
        }

        /**
         * Get first and last month day
         * @param {Number} v 
         * @param {Boolean} padZeroEnabled 
         * @returns  {Array}
         */
        function _getFirstAndLastMonthDay(year) {
          var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var theFirst = new Date(year, 0, 1).getDate();
          var theLast = new Date(year, 11, 31).getDate();
          var padZero = function padZero(num) {
            if (padZeroEnabled) {
              return num < 10 ? '0' + num : num.toString();
            } else {
              return num.toString();
            }
          };
          return [padZero(theFirst), padZero(theLast)];
        }

        /**
         * Get current date
         * @param {Boolean} padZeroEnabled 
         * @typedef {String} JSON
         */
        function _getCurrentDate() {
          var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var date = new Date();
          var padZero = function padZero(num) {
            if (padZeroEnabled) {
              return num < 10 ? '0' + num : num.toString();
            } else {
              return num.toString();
            }
          };
          var year = date.getFullYear();
          var month = padZero(date.getMonth() + 1);
          var day = padZero(date.getDate());
          var hours = padZero(date.getHours());
          var minutes = padZero(date.getMinutes());
          return {
            today: "".concat(year, "-").concat(month, "-").concat(day),
            yearStart: "".concat(year, "-01-01"),
            yearEnd: "".concat(year, "-12-").concat(_getLastDayInMonth(date, 12))
          };
        }

        /**
         * Get full time
         * @param {Date | String} v 
         * @param {Boolean} padZeroEnabled 
         * @param {Boolean} hasSeconds 
         * @returns {String}  yyyy-MM-dd HH:mm:ss
         */
        function _getFullTime(v) {
          var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var hasSeconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var date = _dateFormat(v);
          var padZero = function padZero(num) {
            if (padZeroEnabled) {
              return num < 10 ? '0' + num : num.toString();
            } else {
              return num.toString();
            }
          };
          var year = date.getFullYear();
          var month = padZero(date.getMonth() + 1);
          var day = padZero(date.getDate());
          var hours = padZero(date.getHours());
          var minutes = padZero(date.getMinutes());
          var seconds = padZero(date.getSeconds());
          var res = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
          var res2 = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
          return hasSeconds ? res : res2;
        }

        /**
         * Add hours
         * @param {Date | String} v 
         * @param {Number} offset
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  yyyy-MM-dd HH:mm:ss
         */
        function _setDateHours(v, offset) {
          var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var date = _dateFormat(v);
          var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 60 * 1000);
          return _getFullTime(new Date(_cur), padZeroEnabled);
        }

        /**
         * Add minutes
         * @param {Date | String} v 
         * @param {Number} offset
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  yyyy-MM-dd HH:mm:ss
         */
        function _setDateMinutes(v, offset) {
          var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var date = _dateFormat(v);
          var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 1000);
          return _getFullTime(new Date(_cur), padZeroEnabled);
        }
        /**
         * Add days
         * @param {Date | String} v 
         * @param {Number} offset
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  yyyy-MM-dd HH:mm:ss
         */
        function _setDateDays(v, offset) {
          var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var date = _dateFormat(v);
          var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 24 * 60 * 60 * 1000);
          return _getFullTime(new Date(_cur), padZeroEnabled);
        }

        /**
         * Convert timestamp to date
         * @param {Number} v 
         * @param {Boolean} padZeroEnabled 
         * @returns {String}  yyyy-MM-dd HH:mm:ss
         */
        function _timestampToDate(v) {
          var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return _getFullTime(new Date(v), padZeroEnabled);
        }
        ; // CONCATENATED MODULE: ./src/libs/object.ts
        function object_typeof(obj) {
          "@babel/helpers - typeof";

          return object_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, object_typeof(obj);
        }
        /**
         * Deep clone
         * @param {*} obj 
         */
        function _deepClone(obj) {
          if (Array.isArray(obj)) {
            return obj.map(function (item) {
              return _deepClone(item);
            });
          } else if (object_typeof(obj) === 'object' && obj !== null) {
            var clone = {};
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                clone[key] = _deepClone(obj[key]);
              }
            }
            return clone;
          } else {
            return obj;
          }
        }
        ;

        /**
         * Flat Data
         * @param {*} data 
         * @returns 
         */
        function _flatData(data) {
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
        ;
        ; // CONCATENATED MODULE: ./src/libs/viewport.ts
        /**
         * Check if an element is in the viewport
         * @param {HTMLElement} elem 
         * @returns {boolean}
         */
        function _isInViewport(elem) {
          var bounding = elem.getBoundingClientRect();
          return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
        ; // CONCATENATED MODULE: ./src/libs/inputs-calculation.ts
        /**
         * Get cursor or text position in pixels for input element
         * 
         * @param {HTMLElement} input  Required HTMLElement with `value` attribute
         * @param {Number} selectionStart   Optional number: Start offset. Default 0
         * @param {Number} selectionEnd Optional number: End offset. Default selectionStart
         * @param {Boolean} debug Optional boolean. If true, the created test layer will not be removed.
         * @returns {JSON}
         * such as: 
        {"x":14,"y":42.5,"width":36.1875,"height":19,"top":42.5,"right":50.1875,"bottom":61.5,"left":14}
         */

        // Local functions for readability of the previous code
        function appendPart(text, cssDefaultStyles, fakeClone, start, end) {
          var span = document.createElement("span"),
            tmpText = text.substring(start, end);
          span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
          // add a space if it ends in a newline
          if (/[\n\r]$/.test(tmpText)) {
            tmpText += ' ';
          }
          span.textContent = tmpText;
          fakeClone.appendChild(span);
          return span;
        }
        // Computing offset position
        function getInputOffset(input) {
          var body = document.body,
            win = document.defaultView,
            docElem = document.documentElement,
            box = document.createElement('div');
          box.style.paddingLeft = box.style.width = "1px";
          body.appendChild(box);
          var isBoxModel = box.offsetWidth == 2;
          body.removeChild(box);
          box = input.getBoundingClientRect();
          var clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            scrollTop = win.pageYOffset || isBoxModel && docElem.scrollTop || body.scrollTop,
            scrollLeft = win.pageXOffset || isBoxModel && docElem.scrollLeft || body.scrollLeft;
          return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
          };
        }
        function getInputCSS(input, prop, isnumber) {
          var _document$defaultView;
          var val = (_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.getComputedStyle(input, null).getPropertyValue(prop);
          return isnumber ? parseFloat(val) : val;
        }
        function _getTextBoundingRect(input, selectionStart, selectionEnd) {
          var _fakeClone$parentNode;
          var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          if (input === null) return 0;

          // Basic parameter validation
          if (!input || !('value' in input)) return input;
          if (typeof selectionStart == "string") selectionStart = parseFloat(selectionStart);
          if (typeof selectionStart != "number" || isNaN(selectionStart)) {
            selectionStart = 0;
          }
          if (selectionStart < 0) selectionStart = 0;else selectionStart = Math.min(input.value.length, selectionStart);
          if (typeof selectionEnd == "string") selectionEnd = parseFloat(selectionEnd);
          if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
            selectionEnd = selectionStart;
          }
          if (selectionEnd < 0) selectionEnd = 0;else selectionEnd = Math.min(input.value.length, selectionEnd);

          // If available (thus IE), use the createTextRange method
          if (typeof input.createTextRange == "function") {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveStart('character', selectionStart);
            range.moveEnd('character', selectionEnd - selectionStart);
            return range.getBoundingClientRect();
          }
          // createTextRange is not supported, create a fake text range
          var offset = getInputOffset(input),
            topPos = offset.top,
            leftPos = offset.left,
            width = getInputCSS(input, 'width', true),
            height = getInputCSS(input, 'height', true);

          // Styles to simulate a node in an input field
          // use pre-wrap instead of wrap for white-space to support wrapping in textareas
          var cssDefaultStyles = "white-space:pre-wrap;padding:0;margin:0;",
            listOfModifiers = ['direction', 'font-family', 'font-size', 'font-size-adjust', 'font-variant', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-align', 'text-indent', 'text-transform', 'word-wrap', 'word-spacing'];
          topPos += getInputCSS(input, 'padding-top', true);
          topPos += getInputCSS(input, 'border-top-width', true);
          leftPos += getInputCSS(input, 'padding-left', true);
          leftPos += getInputCSS(input, 'border-left-width', true);
          leftPos += 1; //Seems to be necessary

          for (var i = 0; i < listOfModifiers.length; i++) {
            var property = listOfModifiers[i];
            cssDefaultStyles += property + ':' + getInputCSS(input, property, false) + ';';
          }
          // End of CSS variable checks

          var text = input.value,
            textLen = text.length,
            fakeClone = document.createElement("div");
          if (selectionStart > 0) appendPart(text, cssDefaultStyles, fakeClone, 0, selectionStart);
          var fakeRange = appendPart(text, cssDefaultStyles, fakeClone, selectionStart, selectionEnd);
          if (textLen > selectionEnd) appendPart(text, cssDefaultStyles, fakeClone, selectionEnd, textLen);

          // Styles to inherit the font styles of the element
          fakeClone.style.cssText = cssDefaultStyles;

          // Styles to position the text node at the desired position
          fakeClone.style.position = "absolute";
          fakeClone.style.top = topPos + "px";
          fakeClone.style.left = leftPos + "px";
          fakeClone.style.width = width + "px";
          fakeClone.style.height = height + "px";
          document.body.appendChild(fakeClone);
          var returnValue = fakeRange.getBoundingClientRect(); //Get rect

          if (!debug) (_fakeClone$parentNode = fakeClone.parentNode) === null || _fakeClone$parentNode === void 0 ? void 0 : _fakeClone$parentNode.removeChild(fakeClone); //Remove temp
          return returnValue;
        }

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_1471__(787);
        ; // CONCATENATED MODULE: ./src/hooks/useThrottle.tsx
        /**
         * Limiting the rate of execution
         * 
         * @usage:
        
        const App = () => {
            const [count, setCount] = useState(0);
            const handleClick = useThrottle(() => setCount(count + 1), 500, [count]);
        
            return (
                <div className="app">
                    <button onClick={handleClick}>click</button>
                    <p>click {count} time</p>
                </div>
            );
        };
        
         */

        var useThrottle = function useThrottle(fn, delay, dependence) {
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
            lastTime: 0
          });
          return (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
            var now = Date.now();
            if (now - ref.current.lastTime >= delay) {
              fn.apply(void 0, arguments);
              ref.current.lastTime = now;
            }
          }, dependence);
        };
        /* harmony default export */
        var hooks_useThrottle = useThrottle;
        ; // CONCATENATED MODULE: ./src/hooks/useDebounce.tsx
        /**
         * Delay the execution of function or state update
         * 
         * @usage:
        
        const App = () => {
            const [count, setCount] = useState(0);
            const handleClick = useDebounce(() => setCount(count + 1), 500, [count]);
        
            return (
                <div className="app">
                    <button onClick={handleClick}>click</button>
                    <p>click {count} time</p>
                </div>
            );
        };
        
         */

        var useDebounce = function useDebounce(fn, delay, dependence) {
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          return (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            clearTimeout(ref.current);
            ref.current = null;
            ref.current = setTimeout(function () {
              fn.apply(void 0, args);
            }, delay);
          }, dependence);
        };
        /* harmony default export */
        var hooks_useDebounce = useDebounce;
        ; // CONCATENATED MODULE: ./src/hooks/useAutosizeTextArea.tsx
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useAutosizeTextArea_unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useAutosizeTextArea_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useAutosizeTextArea_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAutosizeTextArea_arrayLikeToArray(o, minLen);
        }
        function useAutosizeTextArea_arrayLikeToArray(arr, len) {
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
        /**
         * Creating a Textarea with dynamic height
         * 
         * @usage:
        
        
        const App = () => {
            const [value, setValue] = useState("");
            const el = useRef<HTMLTextAreaElement>(null);
        
            useAutosizeTextArea({
                el: el.current, 
                value: value,
                cb: (res) => {
                    console.log('dimensions: ', res);
                }
            });
        
            const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                const val = evt.target?.value;
                setValue(val);
            };
        
            return (
                <div className="App">
                    <textarea
                        onChange={handleChange}
                        ref={el}
                        rows={3}
                        value={value}
                    />
                </div>
            );
        };
        
        
        
         */

        var useAutosizeTextArea = function useAutosizeTextArea(_ref) {
          var el = _ref.el,
            value = _ref.value,
            cb = _ref.cb;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
            _useState2 = _slicedToArray(_useState, 2),
            defaultRowHeight = _useState2[0],
            setDefaultRowHeight = _useState2[1];
          var _useState3 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState4 = _slicedToArray(_useState3, 2),
            defaultRowHeightInit = _useState4[0],
            setDefaultRowHeightInit = _useState4[1];
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            if (el) {
              var style = el.currentStyle || window.getComputedStyle(el);
              var _controlWidth = el.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);

              // initialize default row height
              if (el.scrollHeight > 0 && !defaultRowHeightInit) {
                setDefaultRowHeight(el.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth));
                setDefaultRowHeightInit(true);
              }

              // restore default row height
              if (defaultRowHeight > 0) {
                el.style.height = defaultRowHeight + "px";
              }

              // reset the height momentarily to get the correct scrollHeight for the textarea
              var scrollHeight = el.scrollHeight;

              // then set the height directly, outside of the render loop
              // Trying to set this with state or a ref will product an incorrect value.

              // !!! Compare initial height and changed height
              if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
                el.style.height = scrollHeight + "px";
              }
              cb === null || cb === void 0 ? void 0 : cb([_controlWidth, scrollHeight]);
            }
          }, [el, value]);
        };
        /* harmony default export */
        var hooks_useAutosizeTextArea = useAutosizeTextArea;
        ; // CONCATENATED MODULE: ./src/hooks/useInterval.tsx
        /**
         * Provides a convenient way to create and manage intervals
         * 
         * @usage:
        
        const App = () => {
            const [count, setCount] = useState(0);
        
            useInterval(() => {
                setCount(count + 1);
            }, 1000);
        
            return (
                <div className="app"></div>
            );
        };
        
         */

        var useInterval = function useInterval(fn, delay) {
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            ref.current = fn;
          }, [fn]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            function tick() {
              ref.current && ref.current();
            }
            if (delay !== null && delay > 0) {
              var id = setInterval(tick, delay);
              return function () {
                return clearInterval(id);
              };
            } else {
              tick();
            }
          }, [delay]);
        };
        /* harmony default export */
        var hooks_useInterval = useInterval;
        ; // CONCATENATED MODULE: ./src/hooks/useClickOutside.tsx
        function useClickOutside_toConsumableArray(arr) {
          return useClickOutside_arrayWithoutHoles(arr) || useClickOutside_iterableToArray(arr) || useClickOutside_unsupportedIterableToArray(arr) || useClickOutside_nonIterableSpread();
        }
        function useClickOutside_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useClickOutside_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useClickOutside_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useClickOutside_arrayLikeToArray(o, minLen);
        }
        function useClickOutside_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function useClickOutside_arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return useClickOutside_arrayLikeToArray(arr);
        }
        function useClickOutside_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        /**
         * Handles the event of clicking outside of the wrapped component
         * 
         * @usage:
        
        const App = () => {
        
            const [show, setShow] = useState<boolean>(false);
            const dropdownRef = useRef<HTMLDivElement>(null);
        
            useClickOutside({
                enabled: show && dropdownRef.current,
                isOutside: (event: any) => {
                    return event.target.closest(`.test__wrapper`) === null && event.target.closest(`.test__wrapper2`) === null;
                },
                handle: (event: any) => {
                    // do something
                    //...
                },
                spyElement: document
            }, [show, dropdownRef]);
        };
        
         */

        function useClickOutside(_ref, deps) {
          var enabled = _ref.enabled,
            isOutside = _ref.isOutside,
            handle = _ref.handle,
            _ref$spyElement = _ref.spyElement,
            spyElement = _ref$spyElement === void 0 ? typeof document === 'undefined' ? null : document : _ref$spyElement;
          var isOutsideRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(isOutside);
          var handleRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(handle);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            isOutsideRef.current = isOutside;

            // fix possible issue if clicking on a focusable element
            handleRef.current = handle;
          }, [isOutside, handle]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            if (enabled) {
              var eventHandler = function eventHandler(event) {
                var _isOutsideRef$current;
                if ((_isOutsideRef$current = isOutsideRef.current) !== null && _isOutsideRef$current !== void 0 && _isOutsideRef$current.call(isOutsideRef, event)) {
                  var _handleRef$current;
                  (_handleRef$current = handleRef.current) === null || _handleRef$current === void 0 ? void 0 : _handleRef$current.call(handleRef, event);
                }
              };
              spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('pointerdown', eventHandler);
              return function () {
                spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('pointerdown', eventHandler);
              };
            }
          }, [enabled].concat(useClickOutside_toConsumableArray(deps)));
        }
        /* harmony default export */
        var hooks_useClickOutside = useClickOutside;
        ; // CONCATENATED MODULE: ./src/hooks/useKeyPress.tsx
        function useKeyPress_slicedToArray(arr, i) {
          return useKeyPress_arrayWithHoles(arr) || useKeyPress_iterableToArrayLimit(arr, i) || useKeyPress_unsupportedIterableToArray(arr, i) || useKeyPress_nonIterableRest();
        }
        function useKeyPress_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useKeyPress_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useKeyPress_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useKeyPress_arrayLikeToArray(o, minLen);
        }
        function useKeyPress_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function useKeyPress_iterableToArrayLimit(arr, i) {
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
        function useKeyPress_arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        /**
         * Listens for changes in the pressed state of a given key
         * 
         * @usage:
        
        const App = () => {
            const escPressed = useKeyPress({
                keyCode: 'Escape',
                handleUp: (key, event) => { },
                handleDown: async (key, event) => {
                    // do something
                    event.preventDefault();
                    // await xxxxx();
                    console.log(key);
                },
                spyElement: window,
            }, []);
        
            const multiplePressed = useKeyPress({
                keyCode: ['ArrowUp', 'ArrowDown', 'Enter', 'NumpadEnter'],
                handleUp: (key, event) => { },
                handleDown: (key, event) => {
                    // do something
                    event.preventDefault();
                    console.log(key);
                },
                spyElement: window
            }, [myDep1, myDep2]);
        
        
            return (
                <div className="app">{escPressed ? 'Escape' : null}</div>
            );
        };
        
         */

        var useKeyPress = function useKeyPress(_ref, deps) {
          var keyCode = _ref.keyCode,
            handleDown = _ref.handleDown,
            handleUp = _ref.handleUp,
            _ref$spyElement = _ref.spyElement,
            spyElement = _ref$spyElement === void 0 ? typeof window === 'undefined' ? null : window : _ref$spyElement;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState2 = useKeyPress_slicedToArray(_useState, 2),
            keyPressed = _useState2[0],
            setKeyPressed = _useState2[1];
          var multipleKeys = Array.isArray(keyCode);

          // `Escape`, `Enter`, `Alt`, `Control`, `CapsLock`, `Shift`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` `w`, `e`, ...
          var eventHandlerDown = function eventHandlerDown(event) {
            var key = event.code;
            if (multipleKeys) {
              if (keyCode.includes(key)) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
              }
            } else {
              if (key === keyCode) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
              }
            }
          };
          var eventHandlerUp = function eventHandlerUp(event) {
            var key = event.code;
            if (multipleKeys) {
              if (keyCode.includes(key)) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
              }
            } else {
              if (key === keyCode) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
              }
            }
          };
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keydown', eventHandlerDown);
            spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keyup', eventHandlerUp);
            return function () {
              spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keydown', eventHandlerDown);
              spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keyup', eventHandlerUp);
            };
          }, deps);
          return keyPressed;
        };
        /* harmony default export */
        var hooks_useKeyPress = useKeyPress;
        ; // CONCATENATED MODULE: ./src/hooks/useWindowScroll.tsx
        function useWindowScroll_slicedToArray(arr, i) {
          return useWindowScroll_arrayWithHoles(arr) || useWindowScroll_iterableToArrayLimit(arr, i) || useWindowScroll_unsupportedIterableToArray(arr, i) || useWindowScroll_nonIterableRest();
        }
        function useWindowScroll_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useWindowScroll_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useWindowScroll_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWindowScroll_arrayLikeToArray(o, minLen);
        }
        function useWindowScroll_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function useWindowScroll_iterableToArrayLimit(arr, i) {
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
        function useWindowScroll_arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        /**
         * Listens for scrolls the window to a particular place in the document
         * 
         * @usage:
        
        const App = () => {
            const [scrollData, windowScrollUpdate] = useWindowScroll({
                performance: ['debounce', 500],   // "['debounce', 500]" or "['throttle', 500]"
                handle: (scrollData) => {
                    // do something
                    console.log(scrollData);
                }
            });
        };
        
         */

        var useWindowScroll = function useWindowScroll(_ref) {
          var performance = _ref.performance,
            handle = _ref.handle;
          var windowScrollUpdate;
          var _performance = useWindowScroll_slicedToArray(performance, 2),
            performanceName = _performance[0],
            performanceLimit = _performance[1];
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
              x: 0,
              y: 0
            }),
            _useState2 = useWindowScroll_slicedToArray(_useState, 2),
            scrollData = _useState2[0],
            setScrollData = _useState2[1];
          var eventHandlerScroll = function eventHandlerScroll(e) {
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            var res = {
              x: left,
              y: top
            };
            setScrollData(res);
            if (typeof handle === "function") handle(res);
          };
          if (performanceName === "debounce") windowScrollUpdate = _debounce(eventHandlerScroll, parseFloat(performanceLimit));
          if (performanceName === "throttle") windowScrollUpdate = _throttle(eventHandlerScroll, parseFloat(performanceLimit));
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            window.addEventListener("scroll", windowScrollUpdate);
            window.addEventListener("touchmove", windowScrollUpdate);
            return function () {
              window.removeEventListener("scroll", windowScrollUpdate);
              window.removeEventListener("touchmove", windowScrollUpdate);
            };
          }, []);
          return [scrollData, windowScrollUpdate];
        };
        /* harmony default export */
        var hooks_useWindowScroll = useWindowScroll;
        ; // CONCATENATED MODULE: ./src/index.tsx

        // hooks
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

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

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
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Input/dist/cjs/index.js
var cjs = __webpack_require__(390);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
var dist_cjs = __webpack_require__(909);
var dist_cjs_default = /*#__PURE__*/__webpack_require__.n(dist_cjs);
// EXTERNAL MODULE: ../Utils/dist/cjs/index.js
var Utils_dist_cjs = __webpack_require__(456);
;// CONCATENATED MODULE: ./src/Calendar.tsx
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


var Calendar = function Calendar(props) {
  var min = props.min,
    max = props.max,
    customTodayDate = props.customTodayDate,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    iconRemove = props.iconRemove,
    onChangeDate = props.onChangeDate,
    onChangeMonth = props.onChangeMonth,
    onChangeYear = props.onChangeYear,
    onChangeToday = props.onChangeToday;
  var DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  var WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  var MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var now = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
    return new Date();
  }, []);
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(now),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(date.getDate()),
    _useState6 = _slicedToArray(_useState5, 2),
    day = _useState6[0],
    setDay = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(date.getMonth()),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setMonth = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(date.getFullYear()),
    _useState10 = _slicedToArray(_useState9, 2),
    year = _useState10[0],
    setYear = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(getStartDayOfMonth(date)),
    _useState12 = _slicedToArray(_useState11, 2),
    startDay = _useState12[0],
    setStartDay = _useState12[1];

  // selection tab
  // gets the today date time object
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(now.getMonth()),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedMonth = _useState14[0],
    setSelectedMonth = _useState14[1];
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(now.getFullYear()),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedYear = _useState16[0],
    setSelectedYear = _useState16[1];
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    yearsArray = _useState18[0],
    setYearsCollection = _useState18[1];

  //
  var _useState19 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    winYear = _useState20[0],
    setWinYear = _useState20[1];
  var _useState21 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    winMonth = _useState22[0],
    setWinMonth = _useState22[1];
  var getFullTimeData = function getFullTimeData(v) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'string' && !(0,Utils_dist_cjs.isValidDate)(v)) {
      return {
        res: '0000-00-00 00:00:00',
        resNoSeconds: '0000-00-00 00:00',
        date: "0000-00-00",
        year: "0000",
        month: "00",
        day: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      };
    }
    var date = (0,Utils_dist_cjs.dateFormat)(v);
    var year = date.getFullYear();
    var month = (0,Utils_dist_cjs.padZero)(date.getMonth() + 1, padZeroEnabled);
    var day = (0,Utils_dist_cjs.padZero)(date.getDate(), padZeroEnabled);
    var hours = (0,Utils_dist_cjs.padZero)(date.getHours(), padZeroEnabled);
    var minutes = (0,Utils_dist_cjs.padZero)(date.getMinutes(), padZeroEnabled);
    var seconds = (0,Utils_dist_cjs.padZero)(date.getSeconds(), padZeroEnabled);
    var res = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    var res2 = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
    return {
      res: res,
      resNoSeconds: res2,
      date: "".concat(year, "-").concat(month, "-").concat(day),
      year: "".concat(year),
      month: "".concat(month),
      day: "".concat(day),
      hours: "".concat(hours),
      minutes: "".concat(minutes),
      seconds: "".concat(seconds)
    };
  };

  // 
  var MIN = typeof min !== 'undefined' && min !== '' && min !== null && (0,Utils_dist_cjs.isValidDate)(min) ? getFullTimeData(min) : '';
  var MAX = typeof max !== 'undefined' && max !== '' && max !== null && (0,Utils_dist_cjs.isValidDate)(max) ? getFullTimeData(max) : '';
  var currentMinDateDisabled = MIN !== '' ? Number(new window.Date().getTime()) < Number(new window.Date(MIN.res).getTime()) ? true : false : false;
  var currentMaxDateDisabled = MAX !== '' ? Number(new window.Date().getTime()) > Number(new window.Date(MAX.res).getTime()) ? true : false : false;

  // cell
  var getCells = function getCells() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
    var currentMonth = month;
    var currentStartDay = startDay;

    // previous month
    if (type === 'forward') {
      var _date = new Date(year, currentMonth - 1, day);
      currentMonth = _date.getMonth();
      currentStartDay = getStartDayOfMonth(_date);
    }

    // next month
    if (type === 'back') {
      var _date2 = new Date(year, currentMonth + 1, day);
      currentMonth = _date2.getMonth();
      currentStartDay = getStartDayOfMonth(_date2);
    }

    //
    var allDays = Array(days[currentMonth] + (currentStartDay - 1)).fill(null).map(function (_, i) {
      return i;
    }); // [0,1,..,30,31]
    var rows = Math.ceil(allDays.length / 7); // 5

    return Array.from({
      length: rows
    }).fill(null).map(function (_, i) {
      var _col = allDays.slice(i * 7, (i + 1) * 7);

      // back fill
      var backFillArr = [];
      for (var k = 0; k < 7 - _col.length; k++) {
        backFillArr.push(null);
      }
      _col.splice.apply(_col, [_col.length, 0].concat(_toConsumableArray(backFillArr)));
      return {
        month: currentMonth,
        startDay: currentStartDay,
        row: i,
        col: _col
      };
    });
  };
  var getForwardFill = function getForwardFill() {
    var _getCells$at, _getCells$at2;
    var prevMonthStartDay = (_getCells$at = getCells('forward').at(-1)) === null || _getCells$at === void 0 ? void 0 : _getCells$at.startDay;
    var prevMonthLastRowNums = (_getCells$at2 = getCells('forward').at(-1)) === null || _getCells$at2 === void 0 ? void 0 : _getCells$at2.col.filter(Boolean);
    if (prevMonthLastRowNums) {
      if (prevMonthLastRowNums.length === 7) return []; // no remaining

      return prevMonthLastRowNums.map(function (dayIndex) {
        var d = typeof dayIndex === 'number' ? dayIndex - (prevMonthStartDay - 2) : 0;
        return d;
      });
    } else {
      return [];
    }
  };
  var getBackFill = function getBackFill() {
    var _getCells$at3, _getCells$at4;
    var prevMonthStartDay = (_getCells$at3 = getCells('back').at(0)) === null || _getCells$at3 === void 0 ? void 0 : _getCells$at3.startDay;
    var prevMonthLastRowNums = (_getCells$at4 = getCells('back').at(0)) === null || _getCells$at4 === void 0 ? void 0 : _getCells$at4.col.filter(Boolean);
    if (prevMonthLastRowNums) {
      if (prevMonthLastRowNums.length === 7) return []; // no remaining

      return prevMonthLastRowNums.map(function (dayIndex) {
        var d = typeof dayIndex === 'number' ? dayIndex - (prevMonthStartDay - 2) : 0;
        return d;
      }).filter(function (n) {
        return n > 0;
      });
    } else {
      return [];
    }
  };
  function getCalendarDate(v) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'undefined') return '';

    // yyyy-MM-dd
    var date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
    var padZero = function padZero(num) {
      if (padZeroEnabled) {
        return num < 10 ? '0' + num : num.toString();
      } else {
        return num.toString();
      }
    };
    var year = date.getFullYear();
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var res = "".concat(year, "-").concat(month, "-").concat(day);
    return res;
  }
  function setTodayDate(inputDate) {
    setDay(inputDate.getDate());
    setMonth(inputDate.getMonth());
    setYear(inputDate.getFullYear());
    setStartDay(getStartDayOfMonth(inputDate));

    // update selector
    setSelectedMonth(inputDate.getMonth());
    setSelectedYear(inputDate.getFullYear());
  }
  function getStartDayOfMonth(date) {
    var startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  var days = isLeapYear(year) ? DAYS_LEAP : DAYS;
  function handlePrevChange() {
    setDate(function (prevState) {
      var _date = new Date(year, month - 1, day);

      // update
      setSelectedMonth(_date.getMonth());
      setSelectedYear(_date.getFullYear());

      //
      onChangeMonth === null || onChangeMonth === void 0 ? void 0 : onChangeMonth({
        day: (0,Utils_dist_cjs.padZero)(day),
        month: (0,Utils_dist_cjs.padZero)(_date.getMonth() + 1),
        year: _date.getFullYear().toString()
      });
      return _date;
    });
  }
  function handleNextChange() {
    setDate(function (prevState) {
      var _date = new Date(year, month + 1, day);

      // update
      setSelectedMonth(_date.getMonth());
      setSelectedYear(_date.getFullYear());

      //
      onChangeMonth === null || onChangeMonth === void 0 ? void 0 : onChangeMonth({
        day: (0,Utils_dist_cjs.padZero)(day),
        month: (0,Utils_dist_cjs.padZero)(_date.getMonth() + 1),
        year: _date.getFullYear().toString()
      });
      return _date;
    });
  }
  function handleDayChange(e, currentDay) {
    setDate(new Date(year, month, currentDay));
  }
  function handleYearChange(currentValue) {
    setSelectedYear(currentValue);
    setYear(currentValue);
    setDate(new Date(currentValue, month, day));

    // close win
    setWinYear(false);

    //
    onChangeYear === null || onChangeYear === void 0 ? void 0 : onChangeYear({
      day: (0,Utils_dist_cjs.padZero)(day),
      month: (0,Utils_dist_cjs.padZero)(month + 1),
      year: currentValue.toString()
    });
  }
  function handleMonthChange(currentIndex) {
    setSelectedMonth(currentIndex);
    setMonth(currentIndex);
    setDate(new Date(year, currentIndex, day));

    // close win
    setWinMonth(false);

    //
    onChangeMonth === null || onChangeMonth === void 0 ? void 0 : onChangeMonth({
      day: (0,Utils_dist_cjs.padZero)(day),
      month: (0,Utils_dist_cjs.padZero)(currentIndex + 1),
      year: year.toString()
    });
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setTodayDate(now);

    //
    var _now = (0,Utils_dist_cjs.getTodayDate)().split('-');
    onChangeToday === null || onChangeToday === void 0 ? void 0 : onChangeToday({
      day: _now[2],
      month: _now[1],
      year: _now[0]
    });
  }
  function handleShowWinYear() {
    setWinYear(function (prevState) {
      return !prevState;
    });
  }
  function handleShowWinMonth() {
    setWinMonth(function (prevState) {
      return !prevState;
    });
  }
  function checkDisabledDay(curYear, curMonth, curDay) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) > Number(MAX.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) < Number(MIN.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
        res = true;
      }
    }
    return res;
  }
  function checkDisabledMonth(curYear, curMonth) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) > Number(MAX.month)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) < Number(MIN.month)) {
        res = true;
      }
    }
    return res;
  }
  function checkDisabledYear(curYear) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
    }
    return res;
  }

  //if user change the selectedYear, then udate the years array that is displayed on year tab view
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var years = [];
    for (var y = selectedYear - 10; y < selectedYear + 10; y++) {
      years.push(y);
    }
    setYearsCollection(years);
  }, [selectedYear]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setTodayDate(date);
  }, [date]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update current today
    if (typeof customTodayDate === 'string' && customTodayDate !== '' && (0,Utils_dist_cjs.isValidDate)(customTodayDate)) {
      var _customNow = new Date(customTodayDate);
      setTodayDate(_customNow);
    } else {
      if (currentMaxDateDisabled) {
        setTodayDate(new Date(MAX.res));
      }
      if (currentMinDateDisabled) {
        setTodayDate(new Date(MIN.res));
      }
    }
  }, [customTodayDate]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__header bg-body-tertiary"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "date2d-cal__btn date2d-cal__btn--prev",
    onClick: handlePrevChange
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z",
    fill: "#000"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__header__btns"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "date2d-cal__btn ".concat(winMonth ? 'active' : ''),
    onClick: handleShowWinMonth
  }, MONTHS[month], /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z",
    fill: "#000000"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "date2d-cal__btn ".concat(winYear ? 'active' : ''),
    onClick: handleShowWinYear
  }, year, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z",
    fill: "#000000"
  })))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "date2d-cal__btn date2d-cal__btn--next",
    onClick: handleNextChange
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",
    fill: "#000"
  })))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__body"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__row"
  }, WEEK.map(function (s, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "date2d-cal__cell date2d-cal__day date2d-cal__day--week date2d-cal__day--disabled bg-secondary-subtle empty ".concat(i === WEEK.length - 1 ? 'last-cell' : ''),
      key: i,
      "data-week": i,
      dangerouslySetInnerHTML: {
        __html: s
      }
    });
  })), getCells().map(function (item, j) {
    var isFirstRow = j === 0;
    var isLastRow = j === getCells().length - 1;

    // forward fill
    var __forwardFillNum = getForwardFill();

    // back fill
    var __backFillNum = getBackFill();
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      key: 'row' + item.row,
      className: "date2d-cal__row"
    }, item.col.map(function (dayIndex, i) {
      var d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
      var _currentData = val.filter(function (item) {
        return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d));
      });
      var isLastCol = i === item.col.length - 1;

      // date
      var _dateShow = d > 0 ? "".concat(year, "-").concat(month + 1, "-").concat(d) : '';
      if (isFirstRow && __forwardFillNum && _dateShow === '') {
        if (month + 1 === 1) {
          _dateShow = "".concat(year - 1, "-12-").concat(__forwardFillNum[i]);
        } else {
          _dateShow = "".concat(year, "-").concat(month, "-").concat(__forwardFillNum[i]);
        }
      }
      if (isLastRow && __backFillNum && _dateShow === '') {
        if (month + 1 === 12) {
          _dateShow = "".concat(year + 1, "-1-").concat(__backFillNum[i - item.col.filter(Boolean).length]);
        } else {
          _dateShow = "".concat(year, "-").concat(month + 2, "-").concat(__backFillNum[i - item.col.filter(Boolean).length]);
        }
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "date2d-cal__cell date2d-cal__day ".concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : '', " ").concat(isLastRow ? 'last-row' : '', " ").concat(checkDisabledDay(year, month, d) ? 'disabled' : ''),
        key: "col" + i,
        "data-date": getCalendarDate(_dateShow),
        "data-day": (0,Utils_dist_cjs.padZero)(d),
        "data-week": i,
        onClick: function onClick(e) {
          if (d > 0) {
            handleDayChange(e, d);
            onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
              id: 0,
              date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
            } : _currentData[0]);
          }
        }
      }, isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "disabled"
      }, __forwardFillNum[i])) : null, d > 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, d) : null, isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "disabled"
      }, __backFillNum[i - item.col.filter(Boolean).length]) : null);
    }));
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winMonth ? 'active' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__month-container"
  }, MONTHS_FULL.map(function (month, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      "data-month": (0,Utils_dist_cjs.padZero)(index + 1),
      className: "date2d-cal__month ".concat(selectedMonth === index ? ' selected' : '', " ").concat(checkDisabledMonth(year, index) ? 'disabled' : ''),
      key: month + index,
      onClick: function onClick() {
        handleMonthChange(index);
      }
    }, month);
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winYear ? 'active' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__year-container bg-body-tertiary"
  }, yearsArray.map(function (year, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      "data-year": year,
      className: "date2d-cal__year ".concat(selectedYear === year ? ' selected' : '', " ").concat(checkDisabledYear(year) ? 'disabled' : ''),
      key: year + index,
      onClick: function onClick() {
        handleYearChange(year);
      }
    }, year);
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__today-wrapper p-2 bg-body-tertiary"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "date2d-cal__btn date2d-cal__btn--today ".concat(currentMaxDateDisabled || currentMinDateDisabled ? 'disabled' : ''),
    onClick: handleTodayChange
  }, langToday || 'Today'))));
};
/* harmony default export */ const src_Calendar = (Calendar);
// EXTERNAL MODULE: ./src/localization/en_US.js
var en_US = __webpack_require__(870);
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);
// EXTERNAL MODULE: ./src/localization/zh_CN.js
var zh_CN = __webpack_require__(357);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN);
;// CONCATENATED MODULE: ./src/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["contentRef", "popupRef", "triggerClassName", "popupClassName", "wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "enableEntireAreaPopup", "delimiter", "hideClearButton", "showToolsWhenHover", "offset", "exceededSidePosOffset", "localization", "type", "onlyTime", "truncateSeconds", "valueUseSlash", "disabled", "required", "readOnly", "value", "clickInitValue", "min", "max", "placeholder", "label", "units", "name", "alt", "id", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onLoad", "onChange", "onBlur", "onFocus", "onPressEnter", "onOpenPopup", "onClosePopup", "onChangeDate", "onChangeMonth", "onChangeYear", "onChangeToday", "onChangeHours", "onChangeMinutes", "onChangeSeconds", "langHoursTitle", "langMinutesTitle", "langSecondsTitle", "langWeek", "langWeekFull", "langMonths", "langMonthsFull", "langToday"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






// Localization


var src_Date = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, _ref) {
  var contentRef = props.contentRef,
    popupRef = props.popupRef,
    triggerClassName = props.triggerClassName,
    popupClassName = props.popupClassName,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
    enableEntireAreaPopup = props.enableEntireAreaPopup,
    delimiter = props.delimiter,
    hideClearButton = props.hideClearButton,
    showToolsWhenHover = props.showToolsWhenHover,
    offset = props.offset,
    exceededSidePosOffset = props.exceededSidePosOffset,
    localization = props.localization,
    type = props.type,
    onlyTime = props.onlyTime,
    truncateSeconds = props.truncateSeconds,
    valueUseSlash = props.valueUseSlash,
    disabled = props.disabled,
    required = props.required,
    readOnly = props.readOnly,
    value = props.value,
    clickInitValue = props.clickInitValue,
    min = props.min,
    max = props.max,
    placeholder = props.placeholder,
    label = props.label,
    units = props.units,
    name = props.name,
    alt = props.alt,
    id = props.id,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    autoComplete = props.autoComplete,
    style = props.style,
    tabIndex = props.tabIndex,
    onLoad = props.onLoad,
    _onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onPressEnter = props.onPressEnter,
    onOpenPopup = props.onOpenPopup,
    onClosePopup = props.onClosePopup,
    _onChangeDate = props.onChangeDate,
    _onChangeMonth = props.onChangeMonth,
    _onChangeYear = props.onChangeYear,
    _onChangeToday = props.onChangeToday,
    onChangeHours = props.onChangeHours,
    onChangeMinutes = props.onChangeMinutes,
    onChangeSeconds = props.onChangeSeconds,
    langHoursTitle = props.langHoursTitle,
    langMinutesTitle = props.langMinutesTitle,
    langSecondsTitle = props.langSecondsTitle,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    attributes = _objectWithoutProperties(props, _excluded);
  var defaultValueIsEmpty = typeof value === 'undefined' || value === null || value === 'null' || value === '';

  // Localization
  var _langHoursTitle = langHoursTitle || 'Hours';
  var _langMinutesTitle = langMinutesTitle || 'Minutes';
  var _langSecondsTitle = langSecondsTitle || 'Seconds';
  var _langWeek = langWeek;
  var _langWeekFull = langWeekFull;
  var _langMonths = langMonths;
  var _langMonthsFull = langMonthsFull;
  var _langToday = langToday;

  // 
  var DELIMITER_DATE = delimiter || '/';
  var DELIMITER_TIME = ':';
  var SHOW_TOOLS_ENABLED = !(typeof showToolsWhenHover === 'undefined' || showToolsWhenHover === false);
  var HIDE_CLEAR_BTN_ENABLED = !(typeof hideClearButton === 'undefined' || hideClearButton === false);

  //
  var COM_HAS_DATE = typeof onlyTime === 'undefined' || onlyTime === false;
  var COM_HAS_TIME = type === 'datetime-local' || type === 'time';
  var COM_NO_SECONDS = typeof truncateSeconds === 'undefined' || truncateSeconds === false;

  // placeholder
  var datePlaceholder = placeholder || placeholder === '' ? placeholder : 'yyyy/MM/dd HH:mm:ss';
  if (typeof placeholder === 'undefined') {
    datePlaceholder = "".concat(COM_HAS_DATE ? 'yyyy/MM/dd ' : '').concat(COM_HAS_TIME ? "HH:mm".concat(COM_NO_SECONDS ? ':ss' : '') : '');
  }
  if (typeof localization === 'string') {
    switch (localization) {
      case 'en_US':
        _langHoursTitle = (en_US_default()).hoursTitle;
        _langMinutesTitle = (en_US_default()).minutesTitle;
        _langSecondsTitle = (en_US_default()).secondsTitle;
        _langWeek = (en_US_default()).week;
        _langWeekFull = (en_US_default()).weekFull;
        _langMonths = (en_US_default()).months;
        _langMonthsFull = (en_US_default()).monthsFull;
        _langToday = (en_US_default()).today;
        break;
      case 'zh_CN':
        _langHoursTitle = (zh_CN_default()).hoursTitle;
        _langMinutesTitle = (zh_CN_default()).minutesTitle;
        _langSecondsTitle = (zh_CN_default()).secondsTitle;
        _langWeek = (zh_CN_default()).week;
        _langWeekFull = (zh_CN_default()).weekFull;
        _langMonths = (zh_CN_default()).months;
        _langMonthsFull = (zh_CN_default()).monthsFull;
        _langToday = (zh_CN_default()).today;
        break;
    }
  }

  //
  var POS_OFFSET = Number(offset) || 10;
  var EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var modalRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var listContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputYear = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputMonth = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputDay = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputHours = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputMinutes = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var partedInputSeconds = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = src_slicedToArray(_useState, 2),
    dateDefaultValueExist = _useState2[0],
    setDateDefaultValueExist = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = src_slicedToArray(_useState3, 2),
    initSplitClickEvOk = _useState4[0],
    setInitSplitClickEvOk = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(['0000', '00', '00', '00', '00', '00']),
    _useState6 = src_slicedToArray(_useState5, 2),
    splitVals = _useState6[0],
    setSplitVals = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ''),
    _useState8 = src_slicedToArray(_useState7, 2),
    changedVal = _useState8[0],
    setChangedVal = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = src_slicedToArray(_useState9, 2),
    isShow = _useState10[0],
    setIsShow = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState12 = src_slicedToArray(_useState11, 2),
    dateVal = _useState12[0],
    setDateVal = _useState12[1];
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(['00', '00', '00']),
    _useState14 = src_slicedToArray(_useState13, 2),
    timeVal = _useState14[0],
    setTimeVal = _useState14[1];
  var hoursArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  var msArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

  // blur for popup window
  var popupBlurEnabled = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false); // DO NOT USE 'useState()'

  // effective element movement on keystroke
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(COM_HAS_DATE ? 'el-year' : 'el-hours'),
    _useState16 = src_slicedToArray(_useState15, 2),
    focusableSplitInputId = _useState16[0],
    setFocusableSplitInputId = _useState16[1];
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(['el-year', 'el-month', 'el-day', 'el-hours', 'el-minutes', 'el-seconds']),
    _useState18 = src_slicedToArray(_useState17, 1),
    splitInputsIds = _useState18[0];
  var splitInputs = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var splitInputsTabIndex = tabIndex || 0;

  //
  var getAllSplittingInputs = function getAllSplittingInputs() {
    return [partedInputYear.current, partedInputMonth.current, partedInputDay.current, partedInputHours.current, partedInputMinutes.current, partedInputSeconds.current];
  };

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(popupRef, function () {
    return {
      close: function close() {
        popwinPosHide();
        handleBlur(null);
      }
    };
  }, [popupRef]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      clear: function clear(cb) {
        clearAll();
        cb === null || cb === void 0 ? void 0 : cb();
      },
      blur: function blur(cb) {
        getAllSplittingInputs().forEach(function (el) {
          if (el !== null) el.blur();
        });
        handleBlur(null);
        cb === null || cb === void 0 ? void 0 : cb();
      },
      /*
      set('2024-04-18 21:54:09', () => { console.log('callback') }])
      */
      set: function set(value, cb) {
        var _defaultValueIsEmpty = typeof value === 'undefined' || value === null || value === 'null' || value === '';
        setDateDefaultValueExist(_defaultValueIsEmpty ? false : true);
        initValue(value);
        cb === null || cb === void 0 ? void 0 : cb();
      }
    };
  }, [contentRef]);

  // click outside
  (0,Utils_dist_cjs.useClickOutside)({
    enabled: isShow && rootRef.current,
    isOutside: function isOutside(event) {
      return event.target.closest(".date2d__wrapper") === null && event.target.closest(".date2d-cal__wrapper") === null;
    },
    handle: function handle(event) {
      var _rootRef$current;
      popwinPosHide();

      //remove focus style
      (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.remove('focus');

      // move out the popup window
      if (popupBlurEnabled.current) {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(inputRef.current, getAllSplittingInputs());
        popupBlurEnabled.current = false;
      }
    }
  }, [isShow, rootRef]);

  // Add function to the element that should be used as the scrollable area.
  // const [scrollData, windowScrollUpdate] = useWindowScroll({
  //     performance: ['debounce', 50],   // "['debounce', 500]" or "['throttle', 500]"
  //     handle: (scrollData: any) => {
  //         popwinPosHide();
  //     }
  // });

  var getFullTimeData = function getFullTimeData(v) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'string' && !(0,Utils_dist_cjs.isValidDate)(v)) {
      return {
        res: '0000-00-00 00:00:00',
        resNoSeconds: '0000-00-00 00:00',
        date: "0000-00-00",
        year: "0000",
        month: "00",
        day: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      };
    }
    var date = (0,Utils_dist_cjs.dateFormat)(v);
    var year = date.getFullYear();
    var month = (0,Utils_dist_cjs.padZero)(date.getMonth() + 1, padZeroEnabled);
    var day = (0,Utils_dist_cjs.padZero)(date.getDate(), padZeroEnabled);
    var hours = (0,Utils_dist_cjs.padZero)(date.getHours(), padZeroEnabled);
    var minutes = (0,Utils_dist_cjs.padZero)(date.getMinutes(), padZeroEnabled);
    var seconds = (0,Utils_dist_cjs.padZero)(date.getSeconds(), padZeroEnabled);
    var res = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    var res2 = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
    return {
      res: res,
      resNoSeconds: res2,
      date: "".concat(year, "-").concat(month, "-").concat(day),
      year: "".concat(year),
      month: "".concat(month),
      day: "".concat(day),
      hours: "".concat(hours),
      minutes: "".concat(minutes),
      seconds: "".concat(seconds)
    };
  };

  // 
  var MIN = typeof min !== 'undefined' && min !== '' && min !== null && (0,Utils_dist_cjs.isValidDate)(min) ? getFullTimeData(min) : '';
  var MAX = typeof max !== 'undefined' && max !== '' && max !== null && (0,Utils_dist_cjs.isValidDate)(max) ? getFullTimeData(max) : '';
  var getActualDefaultValue = function getActualDefaultValue(v) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _v = getFullTimeData((0,Utils_dist_cjs.getNow)());
    var _nowVal = "".concat(_v.date, " ").concat(_v.hours, ":").concat(_v.minutes, ":").concat(_v.seconds);
    if (!init) setInitSplitClickEvOk(true);
    if (!initSplitClickEvOk) {
      var noTargetVal = typeof clickInitValue === 'undefined' || clickInitValue === null || clickInitValue === 'null' || clickInitValue === '';
      if (!defaultValueIsEmpty) {
        noTargetVal = true;
      }

      //
      var targetVal = noTargetVal ? defaultValueIsEmpty ? _nowVal : v : clickInitValue;
      if (typeof v === 'undefined') {
        targetVal = noTargetVal ? _nowVal : clickInitValue;
      }

      //
      return [false, noTargetVal, targetVal];
    } else {
      var _targetVal = defaultValueIsEmpty ? _nowVal : v;
      if (typeof v === 'undefined') {
        _targetVal = _nowVal;
      }
      return [true, true, _targetVal];
    }
  };
  function popwinPosInit() {
    if (modalRef.current === null || listContentRef.current === null || inputRef.current === null) return;

    // update modal position
    var _modalRef = modalRef.current;
    var _triggerRef = inputRef.current;

    // console.log(getAbsolutePositionOfStage(_triggerRef));

    if (_modalRef === null) return;
    var _getAbsolutePositionO = (0,Utils_dist_cjs.getAbsolutePositionOfStage)(_triggerRef),
      x = _getAbsolutePositionO.x,
      y = _getAbsolutePositionO.y,
      width = _getAbsolutePositionO.width,
      height = _getAbsolutePositionO.height;
    var _triggerBox = _triggerRef.getBoundingClientRect();
    var targetPos = '';

    // STEP 1:
    //-----------
    // Detect position
    if (window.innerHeight - _triggerBox.top > 100) {
      targetPos = 'bottom';
    } else {
      targetPos = 'top';
    }

    // STEP 2:
    //-----------
    // Adjust position
    if (targetPos === 'top') {
      _modalRef.style.left = x + 'px';
      //_modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
      _modalRef.style.marginTop = 0;
      _modalRef.style.top = 'auto';
      _modalRef.style.bottom = window.innerHeight - _triggerBox.top + POS_OFFSET + 2 + 'px';
      _modalRef.style.setProperty('position', 'fixed', 'important');
      _modalRef.style.setProperty('position', 'fixed', 'important');
      _modalRef.classList.add('pos-top');
    }
    if (targetPos === 'bottom') {
      _modalRef.style.marginTop = 0;
      _modalRef.style.left = x + 'px';
      _modalRef.style.bottom = 'auto';
      _modalRef.style.top = y + height + POS_OFFSET + 'px';
      _modalRef.style.setProperty('position', 'absolute', 'important');
      _modalRef.classList.remove('pos-top');
    }

    // STEP 3:
    //-----------
    // Determine whether it exceeds the far right or left side of the screen
    // Determine whether it exceeds the max height of the popup
    var _modalContent = _modalRef;
    var _modalBox = _modalContent.getBoundingClientRect();
    if (typeof _modalContent.dataset.offset === 'undefined') {
      // 10 pixels is used to account for some bias in mobile devices
      if (_modalBox.right + 10 > window.innerWidth) {
        var _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition;
        _modalContent.style.marginLeft = "-".concat(_modalOffsetPosition, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }

      if (_modalBox.left - 10 < 0) {
        var _modalOffsetPosition2 = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition2;
        _modalContent.style.marginLeft = "".concat(_modalOffsetPosition2, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }

      if (window.innerHeight - _modalBox.bottom < 0) {
        _modalRef.style.marginTop = "".concat(window.innerHeight - _modalBox.bottom, "px");
      }
    }
  }
  function popwinPosHide() {
    setIsShow(false);
    onClosePopup === null || onClosePopup === void 0 ? void 0 : onClosePopup(getAllSplittingInputs());
  }
  function handleShow() {
    setIsShow(true);
    setTimeout(function () {
      popwinPosInit();
      onOpenPopup === null || onOpenPopup === void 0 ? void 0 : onOpenPopup(getAllSplittingInputs());
    }, 0);

    // focus
    handleFocus(null);
  }
  function handleFocus(event) {
    var _rootRef$current2;
    (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(inputRef.current, getAllSplittingInputs());
  }
  function handleChange(event) {
    var val = event.target.value;

    //
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, val, (0,Utils_dist_cjs.isValidDate)(val), getAllSplittingInputs());
  }
  function handleBlur(event) {
    var _rootRef$current3;
    //remove focus style
    (_rootRef$current3 = rootRef.current) === null || _rootRef$current3 === void 0 ? void 0 : _rootRef$current3.classList.remove('focus');

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(inputRef.current, getAllSplittingInputs());
  }
  function handleInitSplitClickEv(e) {
    e.preventDefault();
    e.stopPropagation(); // Avoid triggering other inputs

    e.target.select();
    resetDefauleValueExist();
    var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
    var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
  }
  function handleKeyPressed(_x2) {
    return _handleKeyPressed.apply(this, arguments);
  }
  function _handleKeyPressed() {
    _handleKeyPressed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var key;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            key = event.code;
            if (key === 'Enter' || key === 'NumpadEnter') {
              event.preventDefault();
              getAllSplittingInputs().forEach(function (el) {
                if (el !== null) el.blur();
              });
              handleBlur(null);

              //
              onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(inputRef.current, getAllSplittingInputs());
            }
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleKeyPressed.apply(this, arguments);
  }
  function handleKeyPressedForSplitInputs(_x3) {
    return _handleKeyPressedForSplitInputs.apply(this, arguments);
  }
  function _handleKeyPressedForSplitInputs() {
    _handleKeyPressedForSplitInputs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var key, btnMark, move;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            key = event.code;
            btnMark = event.target.dataset.mark;
            move = function move(key) {
              var currentIndex = splitInputsIds.findIndex(function (s) {
                return s === btnMark;
              });
              var nextIndex = key === 'ArrowLeft' ? currentIndex === splitInputsIds.length - 1 ? 0 : currentIndex - 1 : currentIndex === splitInputsIds.length - 1 ? 0 : currentIndex + 1;
              var nextOption = splitInputsIds.at(nextIndex);
              if (nextOption) {
                setTimeout(function () {
                  var _splitInputs$current$;
                  (_splitInputs$current$ = splitInputs.current.get(nextOption)) === null || _splitInputs$current$ === void 0 ? void 0 : _splitInputs$current$.select();
                }, 0);
                setFocusableSplitInputId(nextOption);
              }
            };
            if (key === 'ArrowLeft') {
              move('ArrowLeft');
            }
            if (key === 'ArrowRight') {
              move('ArrowRight');
            }
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _handleKeyPressedForSplitInputs.apply(this, arguments);
  }
  function clearAll() {
    setDateDefaultValueExist(false);
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, '', false, getAllSplittingInputs());
  }
  function resetDefauleValueExist() {
    if (!dateDefaultValueExist) setDateDefaultValueExist(true);
  }
  function resetPopupBlurStatus() {
    if (!popupBlurEnabled.current) popupBlurEnabled.current = true;
  }
  function valueResConverter(inputData) {
    var v = (0,Utils_dist_cjs.isValidDate)(inputData) ? inputData : "".concat(getFullTimeData((0,Utils_dist_cjs.getNow)()).date, " ").concat(inputData);
    var _onlyTime = "".concat(getFullTimeData(v).hours, ":").concat(getFullTimeData(v).minutes).concat(truncateSeconds ? "" : ":".concat(getFullTimeData(v).seconds));
    var _date = "".concat(getFullTimeData(v).year).concat(valueUseSlash ? "/" : '-').concat(getFullTimeData(v).month).concat(valueUseSlash ? "/" : '-').concat(getFullTimeData(v).day);
    var _time = COM_HAS_TIME ? " ".concat(getFullTimeData(v).hours, ":").concat(getFullTimeData(v).minutes).concat(truncateSeconds ? "" : ":".concat(getFullTimeData(v).seconds)) : '';
    return onlyTime ? _onlyTime : "".concat(_date).concat(_time);
  }
  function checkDisabledSeconds(curYear, curMonth, curDay, curHours, curMinutes, curSeconds) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) > Number(MAX.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) > Number(MAX.minutes)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) === Number(MAX.minutes) && Number(curSeconds) > Number(MAX.seconds)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) < Number(MIN.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) < Number(MIN.minutes)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) === Number(MIN.minutes) && Number(curSeconds) < Number(MIN.seconds)) {
        res = true;
      }
    }
    return res;
  }
  function checkDisabledMinutes(curYear, curMonth, curDay, curHours, curMinutes) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) > Number(MAX.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) > Number(MAX.minutes)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) < Number(MIN.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) < Number(MIN.minutes)) {
        res = true;
      }
    }
    return res;
  }
  function checkDisabledHours(curYear, curMonth, curDay, curHours) {
    var res = false;

    // maximum
    if (MAX !== '') {
      if (Number(curYear) > Number(MAX.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) > Number(MAX.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MAX.year) && Number(curMonth + 1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours)) {
        res = true;
      }
    }

    // minimum
    if (MIN !== '') {
      if (Number(curYear) < Number(MIN.year)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) < Number(MIN.month)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
        res = true;
      }
      if (Number(curYear) === Number(MIN.year) && Number(curMonth + 1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours)) {
        res = true;
      }
    }
    return res;
  }
  function initValue(v) {
    var _res = valueResConverter(v);
    setChangedVal(_res);
    if ((0,Utils_dist_cjs.isValidDate)(v)) {
      var _getFullTimeData = getFullTimeData(v),
        date = _getFullTimeData.date,
        year = _getFullTimeData.year,
        month = _getFullTimeData.month,
        day = _getFullTimeData.day,
        hours = _getFullTimeData.hours,
        minutes = _getFullTimeData.minutes,
        seconds = _getFullTimeData.seconds;
      setDateVal(date);
      setTimeVal([hours, minutes, seconds]);
      setSplitVals([year, month, day, hours, minutes, seconds]);
    }
    return [_res, v];
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update default value
    //--------------
    var _getActualDefaultValu = getActualDefaultValue(value, true),
      _getActualDefaultValu2 = src_slicedToArray(_getActualDefaultValu, 3),
      curInitSplitClickEvOk = _getActualDefaultValu2[0],
      curNoTargetVal = _getActualDefaultValu2[1],
      curTargetVal = _getActualDefaultValu2[2];
    setDateDefaultValueExist(defaultValueIsEmpty ? false : true);
    var _initValue = initValue(curTargetVal),
      _initValue2 = src_slicedToArray(_initValue, 2),
      a = _initValue2[0],
      b = _initValue2[1];
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(a, getFullTimeData(b), getAllSplittingInputs());
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, label ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, typeof label === 'string' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__label"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__label"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: "form-label"
  }, label))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootRef,
    "data-overlay-id": "date2d__wrapper-".concat(idRes),
    className: "date2d__trigger d-inline-block is-".concat(type, " ").concat(triggerClassName || '', " ").concat(SHOW_TOOLS_ENABLED ? 'date2d__trigger--hover-show-tools' : ''),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyPressed,
    onClick: enableEntireAreaPopup ? handleShow : function () {}
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__control"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), _extends({
    ref: function ref(node) {
      inputRef.current = node;
      if (typeof _ref === 'function') {
        _ref(node);
      } else if (_ref) {
        _ref.current = node;
      }
    },
    tabIndex: -1,
    type: "text",
    inputMode: "none",
    "data-date-info": JSON.stringify(getFullTimeData(changedVal)),
    wrapperClassName: wrapperClassName,
    controlClassName: controlClassName,
    controlExClassName: "",
    controlGroupWrapperClassName: controlGroupWrapperClassName,
    controlGroupTextClassName: controlGroupTextClassName,
    id: idRes,
    name: name,
    alt: alt,
    placeholder: datePlaceholder,
    value: !dateDefaultValueExist ? "" : valueResConverter(changedVal),
    autoComplete: "off",
    onChange: handleChange,
    label: "",
    units: units,
    iconLeft: iconLeft,
    iconRight: iconRight,
    required: required,
    appendControl: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "date2d__control__inputplaceholder"
    }, COM_HAS_DATE ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputYear.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[0], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[0]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[0]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--year",
      value: !dateDefaultValueExist ? "" : splitVals[0],
      maxLength: 4,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        if (_val !== '' && !(0,Utils_dist_cjs.isValidYear)(_val) && (0,Utils_dist_cjs.isNumeric)(_val) && Number(_val) > 9999) _val = '9999';
        if (_val !== '' && !(0,Utils_dist_cjs.isValidYear)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = "".concat((0,Utils_dist_cjs.getCurrentYear)());
        var _date = "".concat(_val, "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [_val, prevState[1], prevState[2], prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }, attributes)), dateDefaultValueExist ? DELIMITER_DATE : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputMonth.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[1], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[1]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[1]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--month",
      value: !dateDefaultValueExist ? "" : splitVals[1],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMonth)(_val) && (0,Utils_dist_cjs.isNumeric)(_val)) {
          if (Number(_val) > 12) _val = '12';
          if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
        }
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMonth)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = "".concat((0,Utils_dist_cjs.getCurrentMonth)());
        var _date = "".concat(splitVals[0], "-").concat(_val, "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [prevState[0], _val, prevState[2], prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }, attributes)), dateDefaultValueExist ? DELIMITER_DATE : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputDay.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[2], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[2]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[2]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--day",
      value: !dateDefaultValueExist ? "" : splitVals[2],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _day = "".concat(splitVals[0], "-").concat(splitVals[1], "-01");
        var d = (0,Utils_dist_cjs.getLastDayInMonth)(_day, new window.Date(_day).getMonth() + 1);
        if (_val !== '' && (0,Utils_dist_cjs.isValidDay)(_val) && (0,Utils_dist_cjs.isNumeric)(_val)) {
          if (Number(_val) > Number(d)) _val = "".concat(d);
        }
        if (_val !== '' && !(0,Utils_dist_cjs.isValidDay)(_val) && (0,Utils_dist_cjs.isNumeric)(_val)) {
          if (Number(_val) > Number(d)) _val = "".concat(d);
          if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
        }
        if (_val !== '' && !(0,Utils_dist_cjs.isValidDay)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = "".concat((0,Utils_dist_cjs.getCurrentDay)());
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(_val);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], _val, prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }, attributes)), "\xA0") : null, COM_HAS_TIME ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputHours.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[3], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[3]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[3]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--hours",
      value: !dateDefaultValueExist ? "" : splitVals[3],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        if (_val !== '' && !(0,Utils_dist_cjs.isValidHours)(_val) && (0,Utils_dist_cjs.isNumeric)(_val) && Number(_val) > 23) _val = '23';
        if (_val !== '' && !(0,Utils_dist_cjs.isValidHours)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(_val, ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], _val, prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([_val, splitVals[4], splitVals[5]]);
      }
    }, attributes)), dateDefaultValueExist ? DELIMITER_TIME : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputMinutes.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[4], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[4]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[4]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--minutes",
      value: !dateDefaultValueExist ? "" : splitVals[4],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMinutesAndSeconds)(_val) && (0,Utils_dist_cjs.isNumeric)(_val) && Number(_val) > 59) _val = '59';
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMinutesAndSeconds)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(_val, ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], _val, prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], _val, splitVals[5]]);
      }
    }, attributes)), COM_NO_SECONDS ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, dateDefaultValueExist ? DELIMITER_TIME : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
      ref: function ref(node) {
        partedInputSeconds.current = node;
        if (node) {
          splitInputs.current.set(splitInputsIds[5], node);
        } else {
          splitInputs.current["delete"](splitInputsIds[5]);
        }
      },
      tabIndex: splitInputsTabIndex,
      "data-mark": "".concat(splitInputsIds[5]),
      onKeyDown: handleKeyPressedForSplitInputs,
      inputMode: "numeric",
      className: "date2d__control__inputplaceholder--seconds",
      value: !dateDefaultValueExist ? "" : splitVals[5],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMinutesAndSeconds)(_val) && (0,Utils_dist_cjs.isNumeric)(_val) && Number(_val) > 59) _val = '59';
        if (_val !== '' && !(0,Utils_dist_cjs.isValidMinutesAndSeconds)(_val) && !(0,Utils_dist_cjs.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(_val);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,Utils_dist_cjs.isValidDate)(_full), getAllSplittingInputs());
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[4], _val];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], _val]);
      }
    }, attributes))) : null) : null)),
    style: style
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "date2d__control-tools ".concat(SHOW_TOOLS_ENABLED ? 'date2d__control-tools--hover-show-tools' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: -1,
    href: "#",
    className: "date2d__control-tools__close ".concat(HIDE_CLEAR_BTN_ENABLED ? 'd-none' : '', " ").concat(dateDefaultValueExist ? '' : 'd-none'),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation(); // Avoid triggering pop-ups

      clearAll();
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "#000",
    d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: -1,
    href: "#",
    className: "date2d__control-tools__trigger",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation(); // Avoid triggering pop-ups

      handleShow();
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "14px",
    height: "14px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((dist_cjs_default()), {
    show: isShow,
    containerClassName: "Date Date--".concat(type)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({
    ref: modalRef,
    id: "date2d__wrapper-".concat(idRes),
    className: "date2d__wrapper is-".concat(type, " ").concat(popupClassName || '', " active"),
    style: {
      display: 'none'
    }
  }, attributes), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listContentRef,
    className: "date2d__tools-container d-flex flex-row"
  }, COM_HAS_DATE ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__calendar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Calendar, {
    min: min,
    max: max,
    customTodayDate: changedVal,
    langWeek: _langWeek,
    langWeekFull: _langWeekFull,
    langMonths: _langMonths,
    langMonthsFull: _langMonthsFull,
    langToday: _langToday,
    onChangeDate: function onChangeDate(e, currentData) {
      resetDefauleValueExist();

      //
      var _v = getFullTimeData("".concat(currentData.date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setDateVal(currentData.date);
      setChangedVal("".concat(currentData.date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setSplitVals(function (prevState) {
        return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
      });
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

      // 
      _onChangeDate === null || _onChangeDate === void 0 ? void 0 : _onChangeDate(_v);

      //
      resetPopupBlurStatus();
    },
    onChangeToday: function onChangeToday(currentData) {
      resetDefauleValueExist();

      //
      var _date = "".concat(currentData.year, "-").concat(currentData.month, "-").concat(currentData.day);
      var _v = getFullTimeData("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setDateVal("".concat(_date));
      setChangedVal("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setSplitVals(function (prevState) {
        return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
      });
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

      // 
      _onChangeToday === null || _onChangeToday === void 0 ? void 0 : _onChangeToday(_v);

      //
      resetPopupBlurStatus();
    },
    onChangeMonth: function onChangeMonth(currentData) {
      resetDefauleValueExist();

      //
      var _date = "".concat(currentData.year, "-").concat(currentData.month, "-").concat(currentData.day);
      var _v = getFullTimeData("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setDateVal(_date);
      setChangedVal("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setSplitVals(function (prevState) {
        return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
      });
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

      // 
      _onChangeMonth === null || _onChangeMonth === void 0 ? void 0 : _onChangeMonth(_v);

      //
      resetPopupBlurStatus();
    },
    onChangeYear: function onChangeYear(currentData) {
      resetDefauleValueExist();

      //
      var _date = "".concat(currentData.year, "-").concat(currentData.month, "-").concat(currentData.day);
      var _v = getFullTimeData("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setDateVal(_date);
      setChangedVal("".concat(_date, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
      setSplitVals(function (prevState) {
        return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
      });
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

      // 
      _onChangeYear === null || _onChangeYear === void 0 ? void 0 : _onChangeYear(_v);

      //
      resetPopupBlurStatus();
    }
  }))) : null, COM_HAS_TIME ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__hourslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langHoursTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, hoursArr.map(function (hour, i) {
    var _curVal = getFullTimeData("".concat(dateVal, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      key: i
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      "data-value": hour,
      href: "#",
      tabIndex: -1,
      onClick: function onClick(e) {
        e.preventDefault();
        resetDefauleValueExist();

        //
        var _val = e.currentTarget.dataset.value;
        var _v = getFullTimeData("".concat(dateVal, " ").concat(_val, ":").concat(timeVal[1], ":").concat(timeVal[2]));
        setChangedVal("".concat(dateVal, " ").concat(_val, ":").concat(timeVal[1], ":").concat(timeVal[2]));
        setTimeVal(function (prevState) {
          return [_val, prevState[1], prevState[2]];
        });
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], _v.hours, prevState[4], prevState[5]];
        });
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

        // 
        onChangeHours === null || onChangeHours === void 0 ? void 0 : onChangeHours(_v);

        //
        resetPopupBlurStatus();
      },
      className: "".concat(timeVal[0] == hour ? 'selected' : '', " ").concat(checkDisabledHours(_curVal.year, Number(_curVal.month) - 1, _curVal.day, hour) ? 'disabled' : '')
    }, hour));
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__minuteslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langMinutesTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, msArr.map(function (v, i) {
    var _curVal = getFullTimeData("".concat(dateVal, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      key: i
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      "data-value": v,
      href: "#",
      tabIndex: -1,
      onClick: function onClick(e) {
        e.preventDefault();
        resetDefauleValueExist();

        //
        var _val = e.currentTarget.dataset.value;
        var _v = getFullTimeData("".concat(dateVal, " ").concat(timeVal[0], ":").concat(_val, ":").concat(timeVal[2]));
        setChangedVal("".concat(dateVal, " ").concat(timeVal[0], ":").concat(_val, ":").concat(timeVal[2]));
        setTimeVal(function (prevState) {
          return [prevState[0], _val, prevState[2]];
        });
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], _v.minutes, prevState[5]];
        });
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

        // 
        onChangeMinutes === null || onChangeMinutes === void 0 ? void 0 : onChangeMinutes(_v);

        //
        resetPopupBlurStatus();
      },
      className: "".concat(timeVal[1] == v ? 'selected' : '', " ").concat(checkDisabledMinutes(_curVal.year, Number(_curVal.month) - 1, _curVal.day, _curVal.hours, v) ? 'disabled' : '')
    }, v));
  }))), COM_NO_SECONDS ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__secondslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langSecondsTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, msArr.map(function (v, i) {
    var _curVal = getFullTimeData("".concat(dateVal, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(timeVal[2]));
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      key: i
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      "data-value": v,
      href: "#",
      tabIndex: -1,
      onClick: function onClick(e) {
        e.preventDefault();
        resetDefauleValueExist();

        //
        var _val = e.currentTarget.dataset.value;
        var _v = getFullTimeData("".concat(dateVal, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(_val));
        setChangedVal("".concat(dateVal, " ").concat(timeVal[0], ":").concat(timeVal[1], ":").concat(_val));
        setTimeVal(function (prevState) {
          return [prevState[0], prevState[1], _val];
        });
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[5], _v.seconds];
        });
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v, true, getAllSplittingInputs());

        // 
        onChangeSeconds === null || onChangeSeconds === void 0 ? void 0 : onChangeSeconds(_v);

        //
        resetPopupBlurStatus();
      },
      className: "".concat(timeVal[2] == v ? 'selected' : '', " ").concat(checkDisabledSeconds(_curVal.year, Number(_curVal.month) - 1, _curVal.day, _curVal.hours, _curVal.minutes, v) ? 'disabled' : '')
    }, v));
  })))) : null) : null))));
});
/* harmony default export */ const src = (src_Date);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});