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

/***/ 954:
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
        /* harmony export */"actualPropertyValue": function actualPropertyValue() {
          return (/* binding */_actualPropertyValue
          );
        },
        /* harmony export */"getElCSS": function getElCSS() {
          return (/* binding */_getElCSS
          );
        },
        /* harmony export */"getTextTop": function getTextTop() {
          return (/* binding */_getTextTop
          );
        },
        /* harmony export */"getTextWidth": function getTextWidth() {
          return (/* binding */_getTextWidth
          );
        }
        /* harmony export */
      });
      /**
       * Gets the relative upside of the text
       * @param {Element} el    - A DOM node containing one selector to match against.
       * @returns {Number}      - Returns a pure number.
       */
      function _getTextTop(el) {
        var styles = window.getComputedStyle(el);
        var fontSize = parseFloat(styles.fontSize);
        var lineHeight = parseFloat(styles.lineHeight) || fontSize;
        var paddingTop = parseFloat(styles.paddingTop);
        var borderWidth = parseFloat(styles.borderWidth);
        var textTop = paddingTop + (lineHeight - fontSize) / 2 - borderWidth * 2;
        return textTop;
      }

      /**
      * Get the actual value with user specific methed
      * it can be 'width', 'height', 'outerWidth', 'outerHeight'
      * @private
      * @param {Element} el           - A DOM node containing one selector to match against.
      * @param {String} prop          - A string naming the property of style.
      * @param {?Json} config         - Whether or not margin is included. The key `includeMargin` 
                                          takes effect when set to true
      * @return {Number}              - Returns a pure number.
      */
      function _actualPropertyValue(el, prop) {
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (el === null) return 0;
        var style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle,
          display = style.display,
          position = style.position,
          visibility = style.visibility;
        var marginWidth = 0;
        var marginHeight = 0;
        var maxVal;
        var actualVal;
        if (config && config.includeMargin === true) {
          marginWidth = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
          marginHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        if (prop === 'fontSize') {
          actualVal = parseFloat(style.fontSize);
        }
        if (prop === 'fontFamily') {
          actualVal = style.fontFamily;
        }
        if (prop === 'letterSpacing') {
          actualVal = style.letterSpacing;
        }
        if (prop === 'width') {
          maxVal = parseFloat(style.maxWidth);

          // if its not hidden we just return normal height
          if (display !== 'none' && maxVal !== 0) {
            return el.clientWidth;
          }
        }
        if (prop === 'height') {
          maxVal = parseFloat(style.maxHeight);
          if (display !== 'none' && maxVal !== 0) {
            return el.clientHeight;
          }
        }
        if (prop === 'outerWidth') {
          maxVal = parseFloat(style.maxWidth);
          if (display !== 'none' && maxVal !== 0) {
            return el.offsetWidth + marginWidth;
          }
        }
        if (prop === 'outerHeight') {
          maxVal = parseFloat(style.maxHeight);
          if (display !== 'none' && maxVal !== 0) {
            return el.offsetHeight + marginHeight;
          }
        }

        // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden
        el.style.position = 'absolute';
        el.style.visibility = 'hidden';
        el.style.display = 'block';
        if (prop === 'width') actualVal = el.clientWidth;
        if (prop === 'height') actualVal = el.clientHeight;
        if (prop === 'outerWidth') actualVal = el.offsetWidth + marginWidth;
        if (prop === 'outerHeight') actualVal = el.offsetHeight + marginHeight;

        // reverting to the original values
        el.style.display = display;
        el.style.position = position;
        el.style.visibility = visibility;
        return actualVal;
      }
      function _getElCSS(input, prop, isNumber) {
        var _document$defaultView;
        var val = (_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.getComputedStyle(input, null).getPropertyValue(prop);
        return isNumber ? isNaN(parseFloat(val)) ? 0 : parseFloat(val) : val;
      }

      /**
       * Get cursor or text position in pixels for input element
       * 
       * @param {HTMLInputElement} input  Required HTMLElement with `value` attribute
       * @param {HTMLSpanElement} fauxContainer  Container of faux.
           * @param {HTMLElement} rawTextContainer  The raw text container for the comparison
       * @returns {Number}
       */

      function _getTextWidth(input, fauxContainer, rawTextContainer) {
        if (input === null || fauxContainer === null || rawTextContainer === null) return 0;
        var _off = input.selectionStart;
        var _faux = fauxContainer;
        var _fauxContainer = rawTextContainer;
        if (_faux && _fauxContainer) {
          // Styles to simulate a node in an input field
          // use pre-wrap instead of wrap for white-space to support wrapping in textareas
          var listOfModifiers = ['direction', 'font-family', 'font-size', 'font-size-adjust', 'font-variant', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-align', 'text-indent', 'text-transform', 'word-wrap', 'word-spacing'];

          // default styles
          _faux.style.setProperty('white-space', 'pre-wrap');
          _faux.style.setProperty('padding', '0');
          _faux.style.setProperty('margin', '0');
          _faux.style.setProperty('display', 'none');
          for (var i = 0; i < listOfModifiers.length; i++) {
            var propertyValue = _getElCSS(_fauxContainer, listOfModifiers[i], false);
            _faux.style.setProperty(listOfModifiers[i], propertyValue);
          }
          _faux.textContent = input.value.substring(0, _off).replace(/\s/g, "\xA0");
          return _actualPropertyValue(_faux, 'outerWidth');
        }
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 372:
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
        /**
         * Creating a Textarea with dynamic height
         * 
         * @usage:
        
        
        const App = () => {
            const [value, setValue] = useState("");
            const el = useRef<HTMLTextAreaElement>(null);
        
            const { reset } = useAutosizeTextArea({
                el: el.current, 
                value: value,
                cb: (res) => {
                    console.log('dimensions: ', res);
                }
            });
        
            useImperativeHandle(
                contentRef,
                () => ({
                    resetHeight: () => {
                        reset();
                    },
                }),
                [contentRef, reset]
            );
        
            const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                const val = evt.target?.value;
                setValue(val);
            };
        
            const handleReset = () => {
                reset();
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
            _ref$maxHeight = _ref.maxHeight,
            maxHeight = _ref$maxHeight === void 0 ? 0 : _ref$maxHeight,
            cb = _ref.cb;
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            defaultRowHeightInit = _useState2[0],
            setDefaultRowHeightInit = _useState2[1];

          // Reset function to restore default height
          var reset = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
            if (!el) return;
            var scrollHeight = el.scrollHeight;
            el.style.height = scrollHeight + "px";

            // Get current dimensions after reset
            var style = window.getComputedStyle(el);
            var _controlWidth = el.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);
            cb === null || cb === void 0 ? void 0 : cb([_controlWidth, scrollHeight]);
          }, [el, cb]);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (!el) return;

            // Initialize default height
            if (!defaultRowHeightInit) {
              el.style.height = 'auto';
              var initialHeight = el.scrollHeight;
              setDefaultRowHeightInit(true);

              // If the height is 0, set it to "auto"
              if (initialHeight === 0) {
                el.style.height = "auto";
              } else {
                el.style.height = initialHeight + "px";
              }
            }

            // Get dimensions
            var style = window.getComputedStyle(el);
            var _controlWidth = el.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);

            // Calculate height
            el.style.height = 'auto';
            var finalHeight = el.scrollHeight;

            // Apply max height limit if needed
            if (maxHeight > 0 && finalHeight > maxHeight) {
              finalHeight = maxHeight;
            }

            // Set final height
            // If the height is 0, set it to "auto"
            if (finalHeight === 0) {
              el.style.height = "auto";
            } else {
              el.style.height = finalHeight + "px";
            }

            // Callback
            cb === null || cb === void 0 ? void 0 : cb([_controlWidth, finalHeight]);
          }, [el, value, maxHeight, defaultRowHeightInit]);
          return {
            reset: reset
          };
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useAutosizeTextArea;
      })();

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

/***/ 702:
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
          var ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
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
        var __WEBPACK_DEFAULT_EXPORT__ = useDebounce;
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
/* harmony import */ var funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(372);
/* harmony import */ var funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(954);
/* harmony import */ var funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(702);
/* harmony import */ var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5__);
var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "cols", "rows", "disabled", "required", "placeholder", "autoSize", "autoSizeMaxHeight", "iconLeft", "iconRight", "aiPredict", "aiPredictRemainingTextRGB", "aiPredictConfirmKey", "aiPredictFetchFuncAsync", "aiPredictFetchFuncMethod", "aiPredictFetchFuncMethodParams", "aiPredictFetchCallback", "readOnly", "defaultValue", "value", "requiredLabel", "label", "name", "id", "minLength", "maxLength", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus", "onPressEnter", "onKeyDown", "onKeyUp", "onResize"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Textarea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlExClassName = props.controlExClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
    cols = props.cols,
    rows = props.rows,
    disabled = props.disabled,
    required = props.required,
    placeholder = props.placeholder,
    autoSize = props.autoSize,
    _props$autoSizeMaxHei = props.autoSizeMaxHeight,
    autoSizeMaxHeight = _props$autoSizeMaxHei === void 0 ? 0 : _props$autoSizeMaxHei,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    _props$aiPredict = props.aiPredict,
    aiPredict = _props$aiPredict === void 0 ? false : _props$aiPredict,
    _props$aiPredictRemai = props.aiPredictRemainingTextRGB,
    aiPredictRemainingTextRGB = _props$aiPredictRemai === void 0 ? [153, 153, 153] : _props$aiPredictRemai,
    _props$aiPredictConfi = props.aiPredictConfirmKey,
    aiPredictConfirmKey = _props$aiPredictConfi === void 0 ? [['Enter', 'NumpadEnter'], ['Tab'], ['Shift', ' ']] : _props$aiPredictConfi,
    aiPredictFetchFuncAsync = props.aiPredictFetchFuncAsync,
    aiPredictFetchFuncMethod = props.aiPredictFetchFuncMethod,
    aiPredictFetchFuncMethodParams = props.aiPredictFetchFuncMethodParams,
    aiPredictFetchCallback = props.aiPredictFetchCallback,
    readOnly = props.readOnly,
    defaultValue = props.defaultValue,
    value = props.value,
    requiredLabel = props.requiredLabel,
    label = props.label,
    name = props.name,
    id = props.id,
    minLength = props.minLength,
    maxLength = props.maxLength,
    style = props.style,
    tabIndex = props.tabIndex,
    onChangeCallback = props.onChangeCallback,
    onInputCallback = props.onInputCallback,
    onKeyPressedCallback = props.onKeyPressedCallback,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    onResize = props.onResize,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var valRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    changedVal = _useState2[0],
    setChangedVal = _useState2[1];

  //================================================================
  // AI Predict
  //================================================================    
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    currentSuggestion = _useState4[0],
    setCurrentSuggestion = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tempMatchedSuggestion = _useState6[0],
    setTempMatchedSuggestion = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    textWidth = _useState8[0],
    setTextWidth = _useState8[1];
  var aiInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var originInputComputedStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    fontSize: 16,
    fontFamily: 'inherit',
    letterSpacing: 'normal',
    textTop: 10
  });
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasErr = _useState10[0],
    setHasErr = _useState10[1];
  var currentSuggestionIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  // A list of suggestions
  //----------------
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    suggestions = _useState12[0],
    setSuggestions = _useState12[1];

  //performance
  var handleChangeSuggestionsFetchSafe = funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5___default()(function (e, curVal) {
    var _oparams = aiPredictFetchFuncMethodParams || [];
    var _params = _oparams.map(function (item) {
      return item !== '$QUERY_STRING' ? item : curVal;
    });
    fetchSuggestionsData(_params.join(',')).then(function (resSuggestions) {
      handleInputAiPredictChange(curVal, resSuggestions);
    });
  }, 350, []);
  function fetchSuggestionsData(_x2) {
    return _fetchSuggestionsData.apply(this, arguments);
  } // Calculates the width of the input text
  //----------------
  function _fetchSuggestionsData() {
    _fetchSuggestionsData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var response, _ORGIN_DATA;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(_typeof(aiPredictFetchFuncAsync) === 'object')) {
              _context.next = 11;
              break;
            }
            _context.next = 3;
            return aiPredictFetchFuncAsync["".concat(aiPredictFetchFuncMethod)].apply(aiPredictFetchFuncAsync, _toConsumableArray(params.split(',')));
          case 3:
            response = _context.sent;
            _ORGIN_DATA = response.data; // reset data structure
            if (typeof aiPredictFetchCallback === 'function') {
              _ORGIN_DATA = aiPredictFetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (!Array.isArray(_ORGIN_DATA)) {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            //
            setSuggestions(_ORGIN_DATA);
            return _context.abrupt("return", _ORGIN_DATA);
          case 11:
            return _context.abrupt("return", []);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchSuggestionsData.apply(this, arguments);
  }
  var calculateTextWidth = function calculateTextWidth(text) {
    if (valRef.current) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      context.font = "".concat(originInputComputedStyle.current.fontSize, "px ").concat(originInputComputedStyle.current.fontFamily);
      return context.measureText(text).width;
    }
    return 0;
  };

  // Get the rest of the suggested text
  //----------------
  var getRemainingText = function getRemainingText(fullSuggestion) {
    if (!changedVal || !fullSuggestion) return '';

    // Only the parts of the suggested text that were not entered are returned
    var lastInputChar = changedVal[changedVal.length - 1];
    var lastCharIndex = fullSuggestion.toLowerCase().lastIndexOf(lastInputChar.toLowerCase());
    return fullSuggestion.slice(lastCharIndex + 1);
  };

  // Match exactly from the start
  //----------------
  var preciseMatch = function preciseMatch(input, suggestions) {
    if (!input) return '';
    var filtered = suggestions.filter(function (s) {
      return s.toLowerCase().startsWith(input.toLowerCase());
    });
    setTempMatchedSuggestion(filtered);
    return filtered;
  };

  // Fuzzy matching
  //----------------
  var fuzzyMatch = function fuzzyMatch(input, suggestions) {
    if (!input) return '';

    // Convert input to a regular expression pattern with support for arbitrary position matching
    var pattern = input.split('').map(function (_char) {
      return _char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('.*');
    var regex = new RegExp(pattern, 'i');

    // Find the first matching suggestion (multiple matches)
    var filtered = suggestions.filter(function (suggestion) {
      return regex.test(suggestion);
    });
    setTempMatchedSuggestion(filtered);
    return filtered;
  };

  // Handle input variations
  //----------------
  var handleInputAiPredictChange = function handleInputAiPredictChange(newValue, curSuggestions) {
    setTextWidth(calculateTextWidth(newValue));

    // Match results
    var matchedSuggestion = fuzzyMatch(newValue, curSuggestions);
    setCurrentSuggestion(matchedSuggestion[0] || '');
  };

  // Calculate the color shade of the prompt text
  //----------------
  var calculateOpacity = function calculateOpacity() {
    // Transparency is calculated based on the input length
    var baseOpacity = 0.5;
    var inputLength = changedVal.length;
    return Math.max(0.2, baseOpacity - inputLength * 0.05);
  };

  // Confirm
  //----------------
  var handleAiPredictKeyDown = function handleAiPredictKeyDown(e) {
    // Prevents the default behavior of the enter key
    e.preventDefault();
    var remainingText = getRemainingText(currentSuggestion);
    if (remainingText) {
      // Only the second half of the text is added
      handleChange(e, changedVal + remainingText);
      setCurrentSuggestion('');
    }
  };

  //
  var remainingText = getRemainingText(currentSuggestion);

  // auto size
  var _useAutosizeTextArea = funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2___default()({
      el: autoSize ? valRef.current : null,
      value: autoSize ? changedVal : '',
      maxHeight: autoSizeMaxHeight,
      cb: function cb(res) {
        onResize === null || onResize === void 0 ? void 0 : onResize(valRef.current, res);
      }
    }),
    reset = _useAutosizeTextArea.reset;

  //================================================================
  // General
  //================================================================  
  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
    return {
      control: function control() {
        return valRef.current;
      },
      getLatestVal: function getLatestVal() {
        return changedVal || '';
      },
      clear: function clear(cb) {
        setChangedVal('');
        cb === null || cb === void 0 ? void 0 : cb();
        onChange === null || onChange === void 0 ? void 0 : onChange(null, valRef.current, '');
      },
      set: function set(value, cb) {
        setChangedVal("".concat(value));
        cb === null || cb === void 0 ? void 0 : cb();
        onChange === null || onChange === void 0 ? void 0 : onChange(null, valRef.current, "".concat(value));
      },
      resetHeight: function resetHeight() {
        reset();
      },
      aiPredictReset: function aiPredictReset() {
        setTimeout(function () {
          // Avoid conflicts with other asynchronous states, resulting in invalid clearing
          setCurrentSuggestion('');
        }, 0);
      }
    };
  }, [contentRef, reset, changedVal]);
  var propExist = function propExist(p) {
    return typeof p !== 'undefined' && p !== null && p !== '';
  };
  function handleFocus(event) {
    var _rootRef$current;
    var el = event.target;
    (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event, valRef.current);
  }
  function handleChange(event, curVal) {
    setChangedVal(curVal);

    //----
    //remove focus style
    if (curVal === '') {
      var _rootRef$current2;
      (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.remove('focus');
    }

    //
    onChange === null || onChange === void 0 ? void 0 : onChange(event, valRef.current, curVal);

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
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event, valRef.current);

    // It fires when focus is lost
    if (typeof onChangeCallback === 'function') {
      var newData = onChangeCallback(event, valRef.current);
      if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
    }
  }

  function handleKeyPressed(event) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event, valRef.current);
    if (typeof onKeyPressedCallback === 'function') {
      var newData = onKeyPressedCallback(event, valRef.current);
      if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
    }

    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      // DO NOT USE "preventDefault()"
      onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event, valRef.current);
    }

    // AI Predict
    //----
    if (aiPredict && currentSuggestion !== '') {
      var keyBindings = aiPredictConfirmKey;
      // The parameter 'registerKeyEvents' is an array, and each element is an object
      // eg. { keys: ["Control", "S"], action: () => { console.log("Ctrl+S"); } }
      var registerKeyEvents = keyBindings.map(function (s) {
        return {
          keys: s,
          action: function action() {
            handleAiPredictKeyDown(event);
          }
        };
      });
      registerKeyEvents.forEach(function (binding) {
        var keysPressed = binding.keys.every(function (key) {
          return key === "Shift" ? event.shiftKey : key === "Control" ? event.ctrlKey : key === "Alt" ? event.altKey : key === "Meta" ? event.metaKey : event.key === key;
        });
        if (keysPressed) {
          binding.action();
        }
      });

      // switch result of suggestions
      if (event.code === 'ArrowUp') {
        currentSuggestionIndex.current = (currentSuggestionIndex.current - 1 + tempMatchedSuggestion.length) % tempMatchedSuggestion.length;
      }
      if (event.code === 'ArrowDown') {
        currentSuggestionIndex.current = (currentSuggestionIndex.current + 1) % tempMatchedSuggestion.length;
      }
      setCurrentSuggestion(tempMatchedSuggestion[currentSuggestionIndex.current] || '');
    }
  }
  function handleKeyUp(event) {
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(event, valRef.current);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value
    //--------------
    if (typeof value !== 'undefined') {
      if (typeof value === 'string' && value.length > 0 && autoSize) {
        // The value may be NULL

        // Recalculate height if default value exceeds initial height
        setChangedVal("");
        setTimeout(function () {
          setChangedVal("".concat(value));
        }, 0);
      } else {
        setChangedVal("".concat(value)); // Avoid displaying the number 0
      }
    }
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value (It does not re-render the component because the incoming value changes.)
    //--------------
    if (typeof defaultValue !== 'undefined') {
      //REQUIRED

      if (typeof defaultValue === 'string' && defaultValue.length > 0 && autoSize) {
        // The value may be NULL

        // Recalculate height if default value exceeds initial height
        setChangedVal("");
        setTimeout(function () {
          setChangedVal("".concat(defaultValue));
        }, 0);
      } else {
        setChangedVal("".concat(defaultValue)); // Avoid displaying the number 0
      }
    }

    // AI Predict initalization
    //--------------
    if (aiPredict && valRef.current !== null) {
      originInputComputedStyle.current = {
        fontSize: (0,funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'fontSize'),
        fontFamily: (0,funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'fontFamily'),
        letterSpacing: (0,funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'letterSpacing'),
        textTop: (0,funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.getTextTop)(valRef.current)
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: idRes,
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: idRes,
    className: "form-label"
  }, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)('position-relative z-1', (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupWrapperClassName, 'input-group'), {
      'has-left-content': propExist(iconLeft),
      'has-right-content': propExist(iconRight)
    })
  }, propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupTextClassName, 'input-group-text')
  }, iconLeft)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-control-container flex-fill position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", _extends({
    ref: function ref(node) {
      valRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    tabIndex: tabIndex || 0,
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlClassName, 'form-control'), controlExClassName, {
      'rounded': !propExist(iconLeft) && !propExist(iconRight),
      'rounded-start-0': propExist(iconLeft),
      'rounded-end-0': propExist(iconRight)
    }),
    id: idRes,
    name: name,
    placeholder: placeholder || '',
    defaultValue: defaultValue,
    value: changedVal,
    minLength: minLength || null,
    maxLength: maxLength || null,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: function onChange(e) {
      handleChange(e, e.target.value);

      // AI Predict
      if (aiPredict) {
        handleChangeSuggestionsFetchSafe(e, e.target.value);
      }
    },
    onKeyDown: handleKeyPressed,
    onKeyUp: handleKeyUp,
    disabled: disabled || null,
    required: required || null,
    readOnly: readOnly || null,
    cols: cols || 20,
    rows: rows || 2,
    style: style
  }, attributes)), aiPredict && remainingText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: aiInputRef,
    className: "position-absolute z-1",
    "data-ai": "predict",
    style: {
      left: "".concat(originInputComputedStyle.current.fontSize + textWidth, "px"),
      top: originInputComputedStyle.current.textTop + 'px',
      color: "rgba(".concat(aiPredictRemainingTextRGB[0], ", ").concat(aiPredictRemainingTextRGB[1], ", ").concat(aiPredictRemainingTextRGB[2], ", ").concat(calculateOpacity(), ")"),
      pointerEvents: 'none',
      fontSize: originInputComputedStyle.current.fontSize + 'px',
      fontFamily: originInputComputedStyle.current.fontFamily,
      letterSpacing: originInputComputedStyle.current.letterSpacing
    }
  }, remainingText), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, requiredLabel || requiredLabel === '' ? requiredLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "position-absolute end-0 top-0 my-2 mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-danger"
  }, "*"))) : ''), propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupTextClassName, 'input-group-text')
  }, iconRight)) : null)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});