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
  week: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  weekFull: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthsFull: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  today: "今天"
};
module.exports = config;

/***/ }),

/***/ 378:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Get the -webkit-transition-duration property
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Number}    - Returns a pure number.
 */
function getTransitionDuration(el) {
  if (_typeof(el) === ( true ? "undefined" : 0)) {
    return 0;
  }
  var style = window.getComputedStyle(el),
    duration = style.webkitTransitionDuration,
    delay = style.webkitTransitionDelay;
  if (_typeof(duration) != ( true ? "undefined" : 0)) {
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
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el) {
  var windowWidth = window.innerWidth,
    leftPos = null,
    topPos = null;
  if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
    leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
    topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
  } else {
    // width and height in pixels, including padding and border
    // Corresponds to outerWidth(), outerHeight()
    leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
    topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
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
function getOffset(el) {
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
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el) {
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
 * @param {Element} domElement  - A DOM node
 * @param {Number | String} left     - left offset
 * @param {Number | String} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement) {
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
module.exports = {
  getTransitionDuration: getTransitionDuration,
  getAbsoluteCoordinates: getAbsoluteCoordinates,
  getOffset: getOffset,
  getPosition: getPosition,
  getAbsolutePositionOfStage: getAbsolutePositionOfStage
};

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
        var _excluded = ["wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "type", "disabled", "required", "placeholder", "pattern", "readOnly", "value", "label", "units", "name", "step", "min", "max", "src", "size", "minLength", "maxLength", "alt", "id", "appendControl", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus"];
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

            // It fires in real time as the user enters
            if (typeof onInputCallback === 'function') {
              var newData = onInputCallback(event);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }
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

            // It fires when focus is lost
            if (typeof onChangeCallback === 'function') {
              var newData = onChangeCallback(event);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }
          }

          function handleKeyPressed(event) {
            if (typeof onKeyPressedCallback === 'function') {
              var newData = onKeyPressedCallback(event);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
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
            className: "".concat(controlGroupWrapperClassName || "input-group", " position-relative ").concat(typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? 'has-left-content' : '', " ").concat(typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? 'has-right-content' : '')
          }, typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, iconLeft)) : null, appendControl && typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "input-group-control-container position-relative"
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
            className: controlClassName || controlClassName === '' ? "".concat(controlClassName, " ").concat(typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? 'rounded-start-0' : 'rounded') : "form-control ".concat(typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? 'rounded-start-0' : 'rounded'),
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
          }, attributes)), appendControl || '', units ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, units)) : null, typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
            className: controlClassName || controlClassName === '' ? "".concat(controlClassName) : "form-control rounded",
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
          }, attributes)), appendControl || '', units ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, units)) : null, typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  var customTodayDate = props.customTodayDate,
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
  var padZero = function padZero(num) {
    return num < 10 ? '0' + num : num.toString();
  };
  var isValidDate = function isValidDate(v) {
    return !(String(new window.Date(v)).toLowerCase() === 'invalid date');
  };
  var dateFormat = function dateFormat(v) {
    var date = typeof v === 'string' ? new window.Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
    return date;
  };
  var getTodayDate = function getTodayDate() {
    return getCalendarDate(new Date());
  };

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

    // YYYY-MM-DD
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
        day: padZero(day),
        month: padZero(_date.getMonth() + 1),
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
        day: padZero(day),
        month: padZero(_date.getMonth() + 1),
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
      day: padZero(day),
      month: padZero(month + 1),
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
      day: padZero(day),
      month: padZero(currentIndex + 1),
      year: year.toString()
    });
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setTodayDate(now);

    //
    var _now = getTodayDate().split('-');
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
    if (typeof customTodayDate === 'string' && customTodayDate !== '' && isValidDate(customTodayDate)) {
      var _customNow = new Date(customTodayDate);
      setTodayDate(_customNow);
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
        className: "date2d-cal__cell date2d-cal__day ".concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : '', " ").concat(isLastRow ? 'last-row' : ''),
        key: "col" + i,
        "data-date": getCalendarDate(_dateShow),
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
      className: "date2d-cal__month ".concat(selectedMonth === index ? ' selected' : ''),
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
      className: "date2d-cal__year ".concat(selectedYear === year ? ' selected' : ''),
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
    className: "date2d-cal__btn date2d-cal__btn--today",
    onClick: handleTodayChange
  }, langToday || 'Today'))));
};
/* harmony default export */ const src_Calendar = (Calendar);
// EXTERNAL MODULE: ./src/utils/get-element-property.js
var get_element_property = __webpack_require__(378);
// EXTERNAL MODULE: ./src/localization/en_US.js
var en_US = __webpack_require__(870);
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US);
// EXTERNAL MODULE: ./src/localization/zh_CN.js
var zh_CN = __webpack_require__(357);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["popupClassName", "wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "offset", "exceededSidePosOffset", "localization", "type", "onlyTime", "truncateSeconds", "valueUseSlash", "disabled", "required", "readOnly", "value", "label", "units", "name", "alt", "id", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onLoad", "onChange", "onBlur", "onFocus", "langHoursTitle", "langMinutesTitle", "langSecondsTitle", "langWeek", "langWeekFull", "langMonths", "langMonthsFull", "langToday"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  var popupClassName = props.popupClassName,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
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
    langHoursTitle = props.langHoursTitle,
    langMinutesTitle = props.langMinutesTitle,
    langSecondsTitle = props.langSecondsTitle,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    attributes = _objectWithoutProperties(props, _excluded);

  // Localization
  var _langHoursTitle = langHoursTitle || 'Hours';
  var _langMinutesTitle = langMinutesTitle || 'Minutes';
  var _langSecondsTitle = langSecondsTitle || 'Seconds';
  var _langWeek = langWeek;
  var _langWeekFull = langWeekFull;
  var _langMonths = langMonths;
  var _langMonthsFull = langMonthsFull;
  var _langToday = langToday;
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
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = src_slicedToArray(_useState, 2),
    dateDefaultValueExist = _useState2[0],
    setDateDefaultValueExist = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(['0000', '00', '00', '00', '00', '00']),
    _useState4 = src_slicedToArray(_useState3, 2),
    splitVals = _useState4[0],
    setSplitVals = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ''),
    _useState6 = src_slicedToArray(_useState5, 2),
    changedVal = _useState6[0],
    setChangedVal = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState8 = src_slicedToArray(_useState7, 2),
    isShow = _useState8[0],
    setIsShow = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState10 = src_slicedToArray(_useState9, 2),
    dateVal = _useState10[0],
    setDateVal = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(['00', '00', '00']),
    _useState12 = src_slicedToArray(_useState11, 2),
    timeVal = _useState12[0],
    setTimeVal = _useState12[1];
  var hoursArr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];
  var msArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
  var isValidDate = function isValidDate(v) {
    return !(String(new window.Date(v)).toLowerCase() === 'invalid date');
  };
  var eventFire = function eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };
  var dateFormat = function dateFormat(v) {
    var date = typeof v === 'string' ? new window.Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
    return date;
  };
  var getNow = function getNow() {
    return new window.Date(window.Date.now());
  };
  var getFullTimeData = function getFullTimeData(v) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'string' && !isValidDate(v)) {
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
    var date = dateFormat(v);
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
  function popwinPosInit() {
    if (modalRef.current === null || listContentRef.current === null || inputRef.current === null) return;

    // update modal position
    var _modalRef = modalRef.current;
    var _triggerRef = inputRef.current;

    // console.log(getAbsolutePositionOfStage(_triggerRef));

    if (_modalRef === null) return;
    var _getAbsolutePositionO = (0,get_element_property.getAbsolutePositionOfStage)(_triggerRef),
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
      _modalRef.style.top = 'auto';
      _modalRef.style.bottom = window.innerHeight - _triggerBox.top + POS_OFFSET + 2 + 'px';
      _modalRef.style.setProperty('position', 'fixed', 'important');
      _modalRef.style.setProperty('position', 'fixed', 'important');
      _modalRef.classList.add('pos-top');
    }
    if (targetPos === 'bottom') {
      _modalRef.style.left = x + 'px';
      _modalRef.style.bottom = 'auto';
      _modalRef.style.top = y + height + POS_OFFSET + 'px';
      _modalRef.style.setProperty('position', 'absolute', 'important');
      _modalRef.classList.remove('pos-top');
    }

    // STEP 3:
    //-----------
    // Determine whether it exceeds the far right or left side of the screen
    var _modalContent = _modalRef;
    var _modalBox = _modalContent.getBoundingClientRect();
    if (typeof _modalContent.dataset.offset === 'undefined') {
      if (_modalBox.right > window.innerWidth) {
        var _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition;
        _modalContent.style.marginLeft = "-".concat(_modalOffsetPosition, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }

      if (_modalBox.left < 0) {
        var _modalOffsetPosition2 = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition2;
        _modalContent.style.marginLeft = "".concat(_modalOffsetPosition2, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }
    }
  }

  function popwinPosHide() {
    setIsShow(false);
  }
  function handleClose(event) {
    if (event.target.closest(".date2d__wrapper") === null && event.target.closest(".date2d-cal__wrapper") === null) {
      popwinPosHide();

      //remove focus style
      rootRef.current.classList.remove('focus');
    }
  }
  function handleShow() {
    setIsShow(true);
    setTimeout(function () {
      popwinPosInit();
    }, 0);
  }
  function handleFocus(event) {
    rootRef.current.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleChange(event) {
    var val = event.target.value;

    //
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, val);
  }
  function handleBlur(event) {
    //remove focus style
    rootRef.current.classList.remove('focus');

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(inputRef.current);
  }
  function handleInitSplitClickEv(e) {
    e.target.select();
    resetDefauleValueExist();
    if (!dateDefaultValueExist) {
      var _full = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2], " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
      setChangedVal(_full);
    }
  }
  function clearAll() {
    setDateDefaultValueExist(false);
    setChangedVal('');
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, '');
  }
  function resetDefauleValueExist() {
    if (!dateDefaultValueExist) setDateDefaultValueExist(true);
  }
  function valueResConverter(inputData) {
    var v = isValidDate(inputData) ? inputData : "".concat(getFullTimeData(getNow()).date, " ").concat(inputData);
    var _onlyTime = "".concat(getFullTimeData(v).hours, ":").concat(getFullTimeData(v).minutes).concat(truncateSeconds ? "" : ":".concat(getFullTimeData(v).seconds));
    var _date = "".concat(getFullTimeData(v).year).concat(valueUseSlash ? "/" : '-').concat(getFullTimeData(v).month).concat(valueUseSlash ? "/" : '-').concat(getFullTimeData(v).day);
    var _time = type === 'datetime-local' || type === 'time' ? " ".concat(getFullTimeData(v).hours, ":").concat(getFullTimeData(v).minutes).concat(truncateSeconds ? "" : ":".concat(getFullTimeData(v).seconds)) : '';
    return onlyTime ? _onlyTime : "".concat(_date).concat(_time);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update default value
    //--------------
    if (typeof value === 'undefined' || value === null || value === 'null' || value === '') {
      setDateDefaultValueExist(false);

      //
      var _getFullTimeData = getFullTimeData(getNow()),
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
    } else {
      setDateDefaultValueExist(true);

      //
      var _dVal = onlyTime ? "".concat(getFullTimeData(getNow()).date, " ").concat(value) : value;
      var _res = valueResConverter(_dVal);
      setChangedVal(_res);
      if (isValidDate(_dVal)) {
        var _getFullTimeData2 = getFullTimeData(_dVal),
          _date2 = _getFullTimeData2.date,
          _year = _getFullTimeData2.year,
          _month = _getFullTimeData2.month,
          _day = _getFullTimeData2.day,
          _hours = _getFullTimeData2.hours,
          _minutes = _getFullTimeData2.minutes,
          _seconds = _getFullTimeData2.seconds;
        setDateVal(_date2);
        setTimeVal([_hours, _minutes, _seconds]);
        setSplitVals([_year, _month, _day, _hours, _minutes, _seconds]);
      }
      onLoad === null || onLoad === void 0 ? void 0 : onLoad(_res, getFullTimeData(_dVal));
    }

    //--------------
    document.removeEventListener('pointerdown', handleClose);
    document.addEventListener('pointerdown', handleClose);
    return function () {
      document.removeEventListener('pointerdown', handleClose);
    };
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootRef,
    "data-overlay-id": "date2d__wrapper-".concat(idRes),
    className: "date2d__trigger d-inline-block is-".concat(type),
    onClick: handleShow,
    onFocus: handleFocus,
    onBlur: handleBlur
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
    "data-date-info": JSON.stringify(getFullTimeData(changedVal)),
    wrapperClassName: wrapperClassName,
    controlClassName: controlClassName,
    controlGroupWrapperClassName: controlGroupWrapperClassName,
    controlGroupTextClassName: controlGroupTextClassName,
    id: idRes,
    name: name,
    alt: alt,
    value: !dateDefaultValueExist ? "" : valueResConverter(changedVal),
    autoComplete: "off",
    onChange: handleChange,
    label: label,
    units: units,
    iconLeft: iconLeft,
    iconRight: iconRight,
    required: required,
    appendControl: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "date2d__control__inputplaceholder"
    }, typeof onlyTime === 'undefined' || onlyTime === false ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--year",
      value: !dateDefaultValueExist ? "" : splitVals[0] === '0000' ? '' : splitVals[0],
      maxLength: 4,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(_val, "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [_val, prevState[1], prevState[2], prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }), "-", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--month",
      value: !dateDefaultValueExist ? "" : splitVals[1] === '00' ? '' : splitVals[1],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(splitVals[0], "-").concat(_val, "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [prevState[0], _val, prevState[2], prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }), "-", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--day",
      value: !dateDefaultValueExist ? "" : splitVals[2] === '00' ? '' : splitVals[2],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(_val);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], _val, prevState[3], prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
      }
    }), "\xA0") : null, type === 'datetime-local' || type === 'time' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--hours",
      value: !dateDefaultValueExist ? "" : splitVals[3] === '00' ? '' : splitVals[3],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(_val, ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], _val, prevState[4], prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([_val, splitVals[4], splitVals[5]]);
      }
    }), ":", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--minutes",
      value: !dateDefaultValueExist ? "" : splitVals[4] === '00' ? '' : splitVals[4],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(_val, ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], _val, prevState[5]];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], _val, splitVals[5]]);
      }
    }), typeof truncateSeconds === 'undefined' || truncateSeconds === false ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, ":", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      tabIndex: tabIndex || 0,
      className: "date2d__control__inputplaceholder--seconds",
      value: !dateDefaultValueExist ? "" : splitVals[5] === '00' ? '' : splitVals[5],
      maxLength: 2,
      autoComplete: "off",
      disabled: disabled || null,
      readOnly: readOnly || null,
      onClick: handleInitSplitClickEv,
      onChange: function onChange(e) {
        var _val = e.target.value;
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(_val);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full));
        setSplitVals(function (prevState) {
          return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[4], _val];
        });

        // update other data
        setDateVal(_date);
        setChangedVal(_full);
        setTimeVal([splitVals[3], splitVals[4], _val]);
      }
    })) : null) : null)),
    style: style
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "date2d__control__icon"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: -1,
    href: "#",
    className: "date2d__control__icon__close ".concat(dateDefaultValueExist ? '' : 'd-none'),
    onClick: function onClick(e) {
      e.preventDefault();
      clearAll();
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "#000",
    d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
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
  }))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((dist_cjs_default()), {
    show: isShow,
    containerClassName: "Date Date--".concat(type)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: modalRef,
    id: "date2d__wrapper-".concat(idRes),
    className: "date2d__wrapper is-".concat(type, " ").concat(popupClassName || '', " active"),
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listContentRef,
    className: "date2d__tools-container d-flex flex-row"
  }, typeof onlyTime === 'undefined' || onlyTime === false ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__calendar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Calendar, {
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
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
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
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
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
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
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
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
    }
  }))) : null, type === 'datetime-local' || type === 'time' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__hourslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langHoursTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, hoursArr.map(function (hour, i) {
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
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
      },
      className: "".concat(timeVal[0] == hour ? 'selected' : '')
    }, hour));
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__minuteslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langMinutesTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, msArr.map(function (v, i) {
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
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
      },
      className: "".concat(timeVal[1] == v ? 'selected' : '')
    }, v));
  }))), typeof truncateSeconds === 'undefined' || truncateSeconds === false ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__secondslist border-end"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", null, _langSecondsTitle), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, msArr.map(function (v, i) {
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
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, _v);
      },
      className: "".concat(timeVal[2] == v ? 'selected' : '')
    }, v));
  })))) : null) : null))));
});
/* harmony default export */ const src = (src_Date);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});