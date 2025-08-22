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
            children = props.children,
            _props$usePortal = props.usePortal,
            usePortal = _props$usePortal === void 0 ? true : _props$usePortal;
          var containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

          // Move HTML templates to tag end body </body>
          // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
          // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
          // ###
          // ###
          // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (usePortal) {
              containerRef.current = document.createElement('div');
              containerRef.current.className = "root-portal-container ".concat(containerClassName || '');
              document.body.appendChild(containerRef.current);
            }
            return function () {
              if (usePortal && containerRef.current) {
                containerRef.current.remove();
              }
            };
          }, [usePortal]);
          if (!usePortal) {
            return show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, children) : null;
          }
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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof3(obj) { "@babel/helpers - typeof"; return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof3(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof3(exports)) === 'object' && ( false ? 0 : _typeof3(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      var __webpack_modules__ = {
        /***/188: /***/function _(module, exports, __nested_webpack_require_1080__) {
          /* module decorator */module = __nested_webpack_require_1080__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof2(obj) {
            "@babel/helpers - typeof";

            return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof2(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/954: /***/function _(module, exports, __nested_webpack_require_11464__) {
          /* module decorator */module = __nested_webpack_require_11464__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/372: /***/function _(module, exports, __nested_webpack_require_23664__) {
          /* module decorator */module = __nested_webpack_require_23664__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_23664__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_23664__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/85: /***/function _(module, exports, __nested_webpack_require_39270__) {
          /* module decorator */module = __nested_webpack_require_39270__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_39270__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_39270__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/702: /***/function _(module, exports, __nested_webpack_require_47358__) {
          /* module decorator */module = __nested_webpack_require_47358__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_47358__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_47358__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/787: /***/function _(module) {
          "use strict";

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
      function __nested_webpack_require_56979__(moduleId) {
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
          /******/id: moduleId,
          /******/loaded: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_56979__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
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
        /******/__nested_webpack_require_56979__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_56979__.d(getter, {
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
        /******/__nested_webpack_require_56979__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_56979__.o(definition, key) && !__nested_webpack_require_56979__.o(exports, key)) {
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
        /******/__nested_webpack_require_56979__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_56979__.r = function (exports) {
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
      /******/ /* webpack/runtime/node module decorator */
      /******/
      (function () {
        /******/__nested_webpack_require_56979__.nmd = function (module) {
          /******/module.paths = [];
          /******/
          if (!module.children) module.children = [];
          /******/
          return module;
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be in strict mode.
      (function () {
        "use strict";

        __nested_webpack_require_56979__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_56979__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56979__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_56979__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_56979__(85);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_56979__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_56979__(372);
        /* harmony import */
        var funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_56979__.n(funda_utils_dist_cjs_useAutosizeTextArea__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_56979__(188);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_56979__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_56979__(954);
        /* harmony import */
        var funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_56979__.n(funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_56979__(702);
        /* harmony import */
        var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_56979__.n(funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_5__);
        var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "cols", "rows", "disabled", "required", "placeholder", "autoSize", "autoSizeMaxHeight", "iconLeft", "iconRight", "aiPredict", "aiPredictRemainingTextRGB", "aiPredictConfirmKey", "aiPredictFetchFuncAsync", "aiPredictFetchFuncMethod", "aiPredictFetchFuncMethodParams", "aiPredictFetchCallback", "readOnly", "defaultValue", "value", "requiredLabel", "label", "name", "id", "minLength", "maxLength", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus", "onPressEnter", "onKeyDown", "onKeyUp", "onResize"];
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
                return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
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
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
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
        var Textarea = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
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
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var valRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
            _useState2 = _slicedToArray(_useState, 2),
            changedVal = _useState2[0],
            setChangedVal = _useState2[1];

          //================================================================
          // AI Predict
          //================================================================    
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
            _useState4 = _slicedToArray(_useState3, 2),
            currentSuggestion = _useState4[0],
            setCurrentSuggestion = _useState4[1];
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState6 = _slicedToArray(_useState5, 2),
            tempMatchedSuggestion = _useState6[0],
            setTempMatchedSuggestion = _useState6[1];
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            _useState8 = _slicedToArray(_useState7, 2),
            textWidth = _useState8[0],
            setTextWidth = _useState8[1];
          var aiInputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var originInputComputedStyle = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
            fontSize: 16,
            fontFamily: 'inherit',
            letterSpacing: 'normal',
            textTop: 10
          });
          var _useState9 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState10 = _slicedToArray(_useState9, 2),
            hasErr = _useState10[0],
            setHasErr = _useState10[1];
          var currentSuggestionIndex = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

          // A list of suggestions
          //----------------
          var _useState11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
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
                    if (!(_typeof(aiPredictFetchFuncAsync) === 'object' && aiPredictFetchFuncMethod)) {
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
              if (context) {
                context.font = "".concat(originInputComputedStyle.current.fontSize, "px ").concat(originInputComputedStyle.current.fontFamily);
                return context.measureText(text).width;
              }
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
            if (!input) return [];
            var filtered = suggestions.filter(function (s) {
              return s.toLowerCase().startsWith(input.toLowerCase());
            });
            setTempMatchedSuggestion(filtered);
            return filtered;
          };

          // Fuzzy matching
          //----------------
          var fuzzyMatch = function fuzzyMatch(input, suggestions) {
            if (!input) return [];

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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
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
            if (typeof onInputCallback === 'function' && event) {
              var newData = onInputCallback(event, valRef.current);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }
          }

          function handleBlur(event) {
            var el = event.target;
            var val = el.value;

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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
                fontSize: (0, funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'fontSize'),
                fontFamily: (0, funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'fontFamily'),
                letterSpacing: (0, funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.actualPropertyValue)(valRef.current, 'letterSpacing'),
                textTop: (0, funda_utils_dist_cjs_inputsCalculation__WEBPACK_IMPORTED_MODULE_4__.getTextTop)(valRef.current)
              };
            }
          }, []);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)('position-relative z-1', (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupWrapperClassName, 'input-group'), {
              'has-left-content': propExist(iconLeft),
              'has-right-content': propExist(iconRight)
            })
          }, propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupTextClassName, 'input-group-text')
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)((0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlClassName, 'form-control'), controlExClassName, {
              'rounded': !propExist(iconLeft) && !propExist(iconRight),
              'rounded-start-0': propExist(iconLeft),
              'rounded-end-0': propExist(iconRight)
            }),
            id: idRes,
            name: name,
            placeholder: placeholder || '',
            defaultValue: defaultValue,
            value: changedVal,
            minLength: minLength || undefined,
            maxLength: maxLength || undefined,
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
            disabled: disabled || undefined,
            required: required || undefined,
            readOnly: readOnly || undefined,
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
          }, remainingText), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, requiredLabel || requiredLabel === '' ? requiredLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "position-absolute end-0 top-0 my-2 mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "text-danger"
          }, "*"))) : ''), propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, iconRight)) : null)));
        });
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = Textarea;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 959:
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
        /* harmony export */"htmlDecode": function htmlDecode() {
          return (/* binding */_htmlDecode
          );
        },
        /* harmony export */"htmlEncode": function htmlEncode() {
          return (/* binding */_htmlEncode
          );
        }
        /* harmony export */
      });
      /**
       * HTML entities encode
       *
       * @param {String} str Input text
       * @return {String} Filtered text
       */
      function _htmlEncode(str) {
        return str.replace(/[&<>'"]/g, function (tag) {
          return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
          }[tag];
        });
      }

      /**
       * HTML entities decode
       *
       * @param {String} str Input text
       * @return {String} Filtered text
       */
      function _htmlDecode() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var entities = [['amp', '&'], ['apos', '\''], ['#x27', '\''], ['#x2F', '/'], ['#39', '\''], ['#47', '/'], ['lt', '<'], ['gt', '>'], ['nbsp', ' '], ['quot', '"'], ['#60', '<'], ['#62', '>']];
        for (var i = 0, max = entities.length; i < max; i++) {
          str = str.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
        }
        return str;
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 761:
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
          var isOutsideRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isOutside);
          var handleRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handle);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            isOutsideRef.current = isOutside;

            // fix possible issue if clicking on a focusable element
            handleRef.current = handle;
          }, [isOutside, handle]);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
          }, [enabled].concat(_toConsumableArray(deps)));
        }
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useClickOutside;
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

/***/ 195:
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
          var ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
            lastTime: 0
          });
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
            var now = Date.now();
            if (now - ref.current.lastTime >= delay) {
              fn.apply(void 0, arguments);
              ref.current.lastTime = now;
            }
          }, dependence);
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useThrottle;
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
// EXTERNAL MODULE: ../Textarea/dist/cjs/index.js
var cjs = __webpack_require__(395);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
var dist_cjs = __webpack_require__(909);
var dist_cjs_default = /*#__PURE__*/__webpack_require__.n(dist_cjs);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/useDebounce.js
var useDebounce = __webpack_require__(702);
var useDebounce_default = /*#__PURE__*/__webpack_require__.n(useDebounce);
// EXTERNAL MODULE: ../Utils/dist/cjs/useThrottle.js
var useThrottle = __webpack_require__(195);
var useThrottle_default = /*#__PURE__*/__webpack_require__.n(useThrottle);
// EXTERNAL MODULE: ../Utils/dist/cjs/useClickOutside.js
var useClickOutside = __webpack_require__(761);
var useClickOutside_default = /*#__PURE__*/__webpack_require__.n(useClickOutside);
// EXTERNAL MODULE: ../Utils/dist/cjs/sanitize.js
var sanitize = __webpack_require__(959);
;// CONCATENATED MODULE: ./src/PureLoader.tsx

var PureLoader = function PureLoader(props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'custom-' : _props$prefix,
    txt = props.txt,
    center = props.center,
    customClassName = props.customClassName;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "".concat(prefix, "chatbox-loader-container ").concat(customClassName || '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "row g-0 align-items-center"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: center ? 'text-center' : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("small", null, txt || txt === '' ? txt : 'Loading...')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "${prefix}chatbox-loader"
  })))));
};
/* harmony default export */ const src_PureLoader = (PureLoader);
;// CONCATENATED MODULE: ./src/utils/func.ts
// app.ts

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}
function formatLatestDisplayContent(str) {
  // Regular expression to match <details> tags and their content
  var output = str.replace(/<details class="think"[^>]*>([\s\S]*?)<\/details>/g, function (match, content) {
    // Use regex to match the content inside the "div.think-content"
    var thinkContentMatch = content.match(/<div class="think-content">([\s\S]*?)<\/div>/);
    if (thinkContentMatch) {
      var thinkContent = thinkContentMatch[1].trim(); // Get the content inside "div.think-content" and trim whitespace

      // Check if "div.think-content" is empty
      if (thinkContent === '') {
        return ''; // If empty, return an empty string to replace the entire <details> tag
      }
    }

    return match; // If not empty, return the original matched content
  });

  // Then handle tables without is-init class
  output = output.replace(/<table(?![^>]*\bis-init\b)([^>]*)>([\s\S]*?)<\/table>/g, function (match, attributes, content) {
    // Add is-init class to table and wrap it in container div
    return "<div class=\"table-container\"><table class=\"is-init\"".concat(attributes, ">").concat(content, "</table></div>");
  });
  return output;
}
function formatName(str, isAnswer, props) {
  if (typeof str !== "string") return str;
  var questionNameIcon = props.questionNameIcon,
    answerNameIcon = props.answerNameIcon,
    nameFormatter = props.nameFormatter;
  var res = str.replace(/\{icon\}/g, "".concat(isAnswer ? answerNameIcon : questionNameIcon));
  if (typeof nameFormatter === 'function') {
    var newVal = nameFormatter(res);
    return newVal;
  }
  return res;
}
function typewriterEffect(messagesDiv, element, str) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  if (!element) return;
  var originalHTML = str;
  element.innerHTML = '';
  var cursor = 0;
  var tempHTML = '';
  var tagStack = [];
  function type() {
    if (cursor >= originalHTML.length) {
      // Clear the cursor after typing is complete
      element.innerHTML = tempHTML; // Set the final content without the cursor
      return;
    }
    var currentChar = originalHTML[cursor];
    if (currentChar === '<') {
      var closeTagIndex = originalHTML.indexOf('>', cursor);
      var tagContent = originalHTML.slice(cursor, closeTagIndex + 1);
      tempHTML += tagContent;

      // Handle opening and closing tags
      if (/^<\/?\w+/.test(tagContent)) {
        if (!/^<\//.test(tagContent)) {
          // Opening tag
          tagStack.push(tagContent);
        } else {
          // Closing tag
          tagStack.pop();
        }
      }
      cursor = closeTagIndex + 1;
    } else {
      tempHTML += currentChar;
      cursor++;
    }
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    element.innerHTML = tempHTML + '<span class="cursor">|</span>'; // Show cursor
    setTimeout(type, speed);
  }
  type();
}
function fixHtmlTags(html, withReasoning, reasoningSwitchLabel) {
  // Replace with a valid label
  return html.replace('<think>', "<details class=\"think\" ".concat(withReasoning ? 'open' : '', "><summary>").concat(reasoningSwitchLabel, "</summary><div class=\"think-content\">")).replace('</think>', '</div></details> ');
}
function isStreamResponse(response) {
  // Method 1: Check Content-Type
  var contentType = response.headers.get('Content-Type');
  if (contentType) {
    return contentType.includes('text/event-stream') || contentType.includes('application/x-ndjson') || contentType.includes('application/stream+json');
  }

  // Method 2: Check Transfer-Encoding
  var transferEncoding = response.headers.get('Transfer-Encoding');
  if (transferEncoding) {
    return transferEncoding.includes('chunked');
  }

  // Method 3: Check if response.body is ReadableStream
  return response.body instanceof ReadableStream;
}
;
function extractHtmlTags(html) {
  var placeholders = [];
  var processedHtml = html;

  // <table>
  processedHtml = processedHtml.replace(/<table[^>]*>[\s\S]*?<\/table>/g, function (match) {
    var placeholder = "[TABLE_".concat(placeholders.length, "]");
    placeholders.push({
      original: "<div class=\"table-container\">".concat(match === null || match === void 0 ? void 0 : match.replace('<table', '<table class="is-init"'), "</div>"),
      placeholder: placeholder,
      type: 'table'
    });
    return placeholder;
  });

  // <img>
  processedHtml = processedHtml.replace(/<img[^>]*>/g, function (match) {
    var placeholder = "[IMG_".concat(placeholders.length, "]");
    placeholders.push({
      original: match,
      placeholder: placeholder,
      type: 'img'
    });
    return placeholder;
  });

  // <svg>
  processedHtml = processedHtml.replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, function (match) {
    var placeholder = "[SVG_".concat(placeholders.length, "]");
    placeholders.push({
      original: match,
      placeholder: placeholder,
      type: 'svg'
    });
    return placeholder;
  });
  return {
    processedHtml: processedHtml,
    placeholders: placeholders
  };
}
;
;// CONCATENATED MODULE: ./src/TypingEffect.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// extract

var TypingEffect = function TypingEffect(_ref) {
  var content = _ref.content,
    speed = _ref.speed,
    onComplete = _ref.onComplete,
    onUpdate = _ref.onUpdate;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    displayedContent = _useState2[0],
    setDisplayedContent = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    htmlTagPlaceholder = _useState6[0],
    setHtmlTagPlaceholders = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    processedContent = _useState8[0],
    setProcessedContent = _useState8[1];

  // Extract and replace image tags
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var _extractHtmlTags = extractHtmlTags(content),
      processedHtml = _extractHtmlTags.processedHtml,
      placeholders = _extractHtmlTags.placeholders;
    setProcessedContent(processedHtml);
    setHtmlTagPlaceholders(placeholders);
  }, [content]);

  // Handle typing effects
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var timer = setInterval(function () {
      if (index < processedContent.length) {
        var newContent = processedContent.substring(0, index + 1);

        // Replace the completed placeholder
        htmlTagPlaceholder.forEach(function (_ref2) {
          var original = _ref2.original,
            placeholder = _ref2.placeholder;
          if (newContent.includes(placeholder)) {
            newContent = newContent.replace(placeholder, original);
          }
        });
        setDisplayedContent(newContent);
        setIndex(function (prev) {
          return prev + 1;
        });
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate();
      } else {
        clearInterval(timer);
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
      }
    }, speed);
    return function () {
      return clearInterval(timer);
    };
  }, [processedContent, index, speed, onComplete, onUpdate, htmlTagPlaceholder]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: displayedContent
    }
  });
};
/* harmony default export */ const src_TypingEffect = (TypingEffect);
;// CONCATENATED MODULE: ./src/useStreamController.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Stream Controller
 * 
 * @usage:

// Use in component
const streamController = useStreamController({
    onChunk: async (chunk: string, index: number) => {
        // start (Execute it only once)
        if (index === 0) {
            
        }
        
        // Streaming data is JSON split by rows
        const lines = chunk.split("\n").filter(line => line.trim() !== "");

        // Process each data chunk
        console.log('Received chunk:', chunk);
    },
    onComplete: async (lastContent: string) => {
        // Process when stream is completed
        console.log('Stream completed');
        
        // Display AI reply
        console.log('AI reply:', lastContent);

    },
    onError: (error) => {
        // Error handling
        console.error('Stream error:', error);
    },
    onAbort: () => {
        // Abort processing
        console.log('Stream aborted');
    }
});

// Start stream
const response = await fetch(url);
await streamController.start(response);

// Pause stream
streamController.pause();

// Resume stream
streamController.resume();

// Abort stream
streamController.abort();

// Check status
const isActive = streamController.isActive();
const isPaused = streamController.isPaused();

 */


var useStreamController = function useStreamController() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var streamController = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var reader = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var activeStream = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var responseReader = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var paused = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  var active = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  var abortController = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new AbortController());
  var textDecoder = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new TextDecoder("utf-8")); // Get the decoding of UTF8

  // To avoid the "Uncaught (in promise) TypeError: Failed to execute 'cancel' on 'ReadableStream': Cannot cancel a locked stream" error, 
  // (1) you need to safely release the reader.
  // (2) cleanup() also requires asynchronous state
  var releaseReader = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(readerRef) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!readerRef.current) {
              _context.next = 11;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return readerRef.current.cancel();
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.warn('Error cancelling reader:', _context.t0);
          case 9:
            try {
              readerRef.current.releaseLock();
            } catch (e) {
              console.warn('Error releasing reader lock:', e);
            }
            readerRef.current = null;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var cleanup = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return releaseReader(reader);
        case 2:
          _context2.next = 4;
          return releaseReader(responseReader);
        case 4:
          if (!activeStream.current) {
            _context2.next = 14;
            break;
          }
          _context2.prev = 5;
          _context2.next = 8;
          return activeStream.current.cancel();
        case 8:
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](5);
          console.warn('Error cancelling stream:', _context2.t0);
        case 13:
          activeStream.current = null;
        case 14:
          streamController.current = null;
          active.current = false;
          paused.current = false;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 10]]);
  })), [releaseReader]);

  // Process chunks of data
  var processChunk = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(chunk, index) {
      var _options$onChunk, _options$onError;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            try {
              (_options$onChunk = options.onChunk) === null || _options$onChunk === void 0 ? void 0 : _options$onChunk.call(options, chunk, index);
            } catch (error) {
              (_options$onError = options.onError) === null || _options$onError === void 0 ? void 0 : _options$onError.call(options, error);
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [options]);

  // Start processing the stream
  var startProcessing = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var counter, lastContent, _yield$reader$current, done, value, _options$onComplete, chunkStr, _options$onAbort, _options$onError2;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(!reader.current || !active.current)) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          //
          counter = 0; // Store the final content and bind it to loading
          lastContent = '';
        case 4:
          if (!active.current) {
            _context4.next = 35;
            break;
          }
          _context4.prev = 5;
          if (!paused.current) {
            _context4.next = 10;
            break;
          }
          _context4.next = 9;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 100);
          });
        case 9:
          return _context4.abrupt("continue", 4);
        case 10:
          _context4.next = 12;
          return reader.current.read();
        case 12:
          _yield$reader$current = _context4.sent;
          done = _yield$reader$current.done;
          value = _yield$reader$current.value;
          if (!done) {
            _context4.next = 20;
            break;
          }
          (_options$onComplete = options.onComplete) === null || _options$onComplete === void 0 ? void 0 : _options$onComplete.call(options, lastContent);
          _context4.next = 19;
          return cleanup();
        case 19:
          return _context4.abrupt("break", 35);
        case 20:
          // Decode the content
          chunkStr = textDecoder.current.decode(value, {
            stream: true
          });
          lastContent += chunkStr;
          _context4.next = 24;
          return processChunk(chunkStr, counter);
        case 24:
          counter++;
          _context4.next = 33;
          break;
        case 27:
          _context4.prev = 27;
          _context4.t0 = _context4["catch"](5);
          if (_context4.t0.name === 'AbortError') {
            (_options$onAbort = options.onAbort) === null || _options$onAbort === void 0 ? void 0 : _options$onAbort.call(options);
          } else {
            (_options$onError2 = options.onError) === null || _options$onError2 === void 0 ? void 0 : _options$onError2.call(options, _context4.t0);
          }
          _context4.next = 32;
          return cleanup();
        case 32:
          return _context4.abrupt("break", 35);
        case 33:
          _context4.next = 4;
          break;
        case 35:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 27]]);
  })), [options, cleanup, processChunk]);

  // Start streaming
  var start = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(response) {
      var stream, _options$onError3;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return cleanup();
          case 2:
            // Get Reader
            reader.current = response.body.getReader();
            _context6.prev = 3;
            stream = new ReadableStream({
              start: function start(controller) {
                streamController.current = controller;
              },
              pull: function pull(controller) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var _yield$read, done, value, chunkStr;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return reader.current.read();
                      case 3:
                        _yield$read = _context5.sent;
                        done = _yield$read.done;
                        value = _yield$read.value;
                        if (!done) {
                          _context5.next = 9;
                          break;
                        }
                        controller.close();
                        return _context5.abrupt("return");
                      case 9:
                        // Decode the content
                        chunkStr = textDecoder.current.decode(value, {
                          stream: true
                        });
                        controller.enqueue(chunkStr);
                        _context5.next = 16;
                        break;
                      case 13:
                        _context5.prev = 13;
                        _context5.t0 = _context5["catch"](0);
                        controller.error(_context5.t0);
                      case 16:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, null, [[0, 13]]);
                }))();
              },
              cancel: function cancel() {
                var _response$body;
                (_response$body = response.body) === null || _response$body === void 0 ? void 0 : _response$body.cancel();
              }
            });
            activeStream.current = stream;
            active.current = true;
            paused.current = false;

            // Start processing immediately
            _context6.next = 10;
            return startProcessing();
          case 10:
            _context6.next = 16;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            (_options$onError3 = options.onError) === null || _options$onError3 === void 0 ? void 0 : _options$onError3.call(options, _context6.t0);
            cleanup();
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[3, 12]]);
    }));
    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }(), [options, cleanup, startProcessing]);

  // Pause streaming
  var pause = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    paused.current = true;
  }, []);

  // Resume streaming
  var resume = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    paused.current = false;
  }, []);

  // Abort streaming
  var abort = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          abortController.current.abort();
          _context7.next = 3;
          return cleanup();
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })), [cleanup]);

  // Check if stream is active
  var isActive = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    return active.current;
  }, []);

  // Check if stream is paused
  var isPaused = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    return paused.current;
  }, []);

  // Cleanup on unmount
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    return function () {
      cleanup()["catch"](console.error);
    };
  }, [cleanup]);
  return {
    start: start,
    pause: pause,
    resume: resume,
    abort: abort,
    isActive: isActive,
    isPaused: isPaused
  };
};
/* harmony default export */ const src_useStreamController = (useStreamController);
;// CONCATENATED MODULE: ./src/index.tsx
function src_typeof(obj) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, src_typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return src_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (src_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (src_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function src_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ src_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == src_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || src_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









// loader




var Chatbox = function Chatbox(props) {
  var _list, _args$newChatButton;
  var chatId = useComId_default()().replace(/\-/g, '_');

  // Store latest props in refs
  var propsRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(props);

  // Store context data in ref to get latest values
  var contextDataRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(props.contextData);

  // Store config in ref to get latest values
  var configRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    apiUrl: "{baseUrl}/v1/chat/completions",
    requestBody: "{\n    \"model\": \"{model}\",\n    \"messages\": [{\n        \"role\": \"user\",\n        \"content\": \"{message}\"\n    }],\n    \"stream\": true\n}",
    responseExtractor: "data.choices.0.delta.content"
  });

  //
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var msgContainerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var msInput = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var inputContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = src_slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = src_slicedToArray(_useState3, 2),
    loaderDisplay = _useState4[0],
    setLoaderDisplay = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState6 = src_slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState8 = src_slicedToArray(_useState7, 2),
    thinking = _useState8[0],
    setThinking = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = src_slicedToArray(_useState9, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState12 = src_slicedToArray(_useState11, 2),
    msgList = _useState12[0],
    setMsgList = _useState12[1];
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState14 = src_slicedToArray(_useState13, 2),
    elapsedTime = _useState14[0],
    setElapsedTime = _useState14[1];
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState16 = src_slicedToArray(_useState15, 2),
    tempAnimText = _useState16[0],
    setTempAnimText = _useState16[1];
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true),
    _useState18 = src_slicedToArray(_useState17, 2),
    enableStreamMode = _useState18[0],
    setEnableStreamMode = _useState18[1];
  var animatedMessagesRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Set()); // Add a ref to keep track of messages that have already been animated

  // Keep track of whether the default values have been initialized
  var _useState19 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({}),
    _useState20 = src_slicedToArray(_useState19, 2),
    initializedDefaults = _useState20[0],
    setInitializedDefaults = _useState20[1];

  //
  var timer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  //================================================================
  // helper
  //================================================================
  var customMethodsRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({});
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (props.customMethods && Array.isArray(props.customMethods)) {
      var methodsMap = {};
      props.customMethods.forEach(function (method) {
        if (typeof method.func === 'function') {
          methodsMap[method.name] = method.func;
        }
      });
      customMethodsRef.current = methodsMap;
    }
  }, [props.customMethods]);
  var exposedMethods = function exposedMethods() {
    return {
      chatOpen: function chatOpen() {
        setShow(true);
        setTimeout(function () {
          if (msInput.current) msInput.current.focus();
        }, 0);
      },
      chatClose: function chatClose() {
        setShow(false);
      },
      clearData: function clearData() {
        // Update both the conversation history and displayed messages
        conversationHistory.current = [];
        setMsgList([]);
      },
      sendMsg: function sendMsg() {
        handleClickSafe();
      },
      getHistory: function getHistory() {
        return conversationHistory.current;
      },
      trimHistory: function trimHistory(length) {
        var maxLength = length || args().maxHistoryLength || 20;
        if (conversationHistory.current.length > maxLength) {
          conversationHistory.current = conversationHistory.current.slice(-maxLength);
        }
      },
      setHistory: function setHistory(messages) {
        // Update both the conversation history and displayed messages
        conversationHistory.current = _toConsumableArray(messages);
        setMsgList(_toConsumableArray(messages));
      },
      setVal: function setVal(v) {
        if (inputContentRef.current) inputContentRef.current.set(v);
      },
      getContextData: function getContextData() {
        return contextDataRef.current;
      },
      setContextData: function setContextData(v) {
        contextDataRef.current = v;
      },
      getMessages: function getMessages() {
        return msgList;
      },
      setMessages: function setMessages(v) {
        setMsgList(v);
      },
      // 
      getCustomMethods: function getCustomMethods() {
        return Object.keys(customMethodsRef.current);
      },
      executeCustomMethod: function executeCustomMethod(methodName) {
        if (methodName in customMethodsRef.current) {
          try {
            var _customMethodsRef$cur;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            return (_customMethodsRef$cur = customMethodsRef.current)[methodName].apply(_customMethodsRef$cur, args);
          } catch (error) {
            console.error("Error executing custom method ".concat(methodName, ":"), error);
            return null;
          }
        } else {
          console.warn("Custom method ".concat(methodName, " not found"));
          return null;
        }
      }
    };
  };
  var scrollToBottom = useThrottle_default()(function () {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  }, 300, []);
  var args = function args() {
    var currentProps = propsRef.current;
    if (typeof currentProps.headerConfig === 'undefined' || typeof configRef.current.apiUrl === 'undefined') {
      return {};
    }
    var debug = currentProps.debug,
      defaultRows = currentProps.defaultRows,
      prefix = currentProps.prefix,
      contentRef = currentProps.contentRef,
      model = currentProps.model,
      baseUrl = currentProps.baseUrl,
      apiKey = currentProps.apiKey,
      verbose = currentProps.verbose,
      reasoningSwitchLabel = currentProps.reasoningSwitchLabel,
      stopLabel = currentProps.stopLabel,
      questionName = currentProps.questionName,
      answerName = currentProps.answerName,
      bubble = currentProps.bubble,
      bubbleLabel = currentProps.bubbleLabel,
      sendLabel = currentProps.sendLabel,
      sendLoading = currentProps.sendLoading,
      sendLoadingLabel = currentProps.sendLoadingLabel,
      copyLabel = currentProps.copyLabel,
      closeLabel = currentProps.closeLabel,
      placeholder = currentProps.placeholder,
      noDataPlaceholder = currentProps.noDataPlaceholder,
      requestConfig = currentProps.requestConfig,
      headerConfig = currentProps.headerConfig,
      toolkitButtons = currentProps.toolkitButtons,
      newChatButton = currentProps.newChatButton,
      maxHistoryLength = currentProps.maxHistoryLength,
      usePopUp = currentProps.usePopUp,
      customRequest = currentProps.customRequest,
      onQuestionClick = currentProps.onQuestionClick,
      onCopyCallback = currentProps.onCopyCallback,
      renderParser = currentProps.renderParser,
      requestBodyFormatter = currentProps.requestBodyFormatter,
      copiedContentFormatter = currentProps.copiedContentFormatter,
      nameFormatter = currentProps.nameFormatter,
      showCopyBtn = currentProps.showCopyBtn,
      autoCopyReply = currentProps.autoCopyReply,
      onInputChange = currentProps.onInputChange,
      onInputCallback = currentProps.onInputCallback,
      onChunk = currentProps.onChunk,
      onComplete = currentProps.onComplete;
    var _configRef$current = configRef.current,
      apiUrl = _configRef$current.apiUrl,
      requestBody = _configRef$current.requestBody,
      responseExtractor = _configRef$current.responseExtractor;
    var latestContextData = contextDataRef.current ? contextDataRef.current : undefined;
    var _requestBodyTmpl = requestBody.replace(/\'/g, '"'); //  !!! REQUIRED !!!
    var _isStream = true;

    // request API
    var requestApiUrl = apiUrl.replace(/\{baseUrl\}/g, baseUrl);

    // header config       
    var _headerConfig = headerConfig.replace(/\{apiKey\}/g, apiKey).replace(/\'/g, '"'); //  !!! REQUIRED !!!
    var headerConfigRes = typeof _headerConfig !== 'undefined' ? isValidJSON(_headerConfig) ? JSON.parse(_headerConfig) : undefined : {
      'Content-Type': 'application/json'
    };

    // Determine whether it is in JSON format
    if (!isValidJSON(_requestBodyTmpl)) {
      console.log('--> [ERROR] Wrong JSON format');
      _requestBodyTmpl = '{}';
      return {};
    } else {
      _isStream = JSON.parse(_requestBodyTmpl).hasOwnProperty('stream') && JSON.parse(_requestBodyTmpl).stream === true;
    }

    // Whether or not to show reasoning
    var withReasoning = typeof verbose === 'undefined' ? true : verbose;

    // Get latest name values
    var _answerName = formatName(answerName, true, currentProps);
    var _questionName = formatName(questionName, false, currentProps);

    // Responder deconstruction
    var responseExtractPath = responseExtractor.split('.');
    return {
      debug: debug,
      defaultRows: defaultRows,
      prefix: prefix,
      contentRef: contentRef,
      model: model,
      baseUrl: baseUrl,
      apiKey: apiKey,
      verbose: verbose,
      reasoningSwitchLabel: reasoningSwitchLabel,
      stopLabel: stopLabel,
      bubble: bubble,
      bubbleLabel: bubbleLabel,
      sendLabel: sendLabel,
      sendLoading: sendLoading,
      sendLoadingLabel: sendLoadingLabel,
      copyLabel: copyLabel,
      closeLabel: closeLabel,
      placeholder: placeholder,
      noDataPlaceholder: noDataPlaceholder,
      requestConfig: requestConfig,
      maxHistoryLength: maxHistoryLength,
      toolkitButtons: toolkitButtons,
      newChatButton: newChatButton,
      usePopUp: usePopUp,
      customRequest: customRequest,
      onQuestionClick: onQuestionClick,
      onCopyCallback: onCopyCallback,
      renderParser: renderParser,
      requestBodyFormatter: requestBodyFormatter,
      copiedContentFormatter: copiedContentFormatter,
      nameFormatter: nameFormatter,
      showCopyBtn: showCopyBtn,
      autoCopyReply: autoCopyReply,
      onInputChange: onInputChange,
      onInputCallback: onInputCallback,
      onChunk: onChunk,
      onComplete: onComplete,
      // 
      defaultQuestionsRes: questions,
      latestContextData: latestContextData,
      questionNameRes: _questionName,
      answerNameRes: _answerName,
      isStream: _isStream,
      headerConfigRes: headerConfigRes,
      requestApiUrl: requestApiUrl,
      requestBodyTmpl: _requestBodyTmpl,
      responseExtractPath: responseExtractPath,
      withReasoning: withReasoning
    };
  };

  //================================================================
  // Clipboard
  //================================================================
  var chatboxCopyToClipboard = /*#__PURE__*/function () {
    var _ref = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee(text) {
      var _content, _args$onCopyCallback, _args, textArea, _args$onCopyCallback2, _args2, _args$onCopyCallback3, _args3;
      return src_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _content = text;
            if (typeof args().copiedContentFormatter === 'function') {
              _content = args().copiedContentFormatter(text);
            }
            _context.prev = 2;
            if (!(navigator.clipboard && window.isSecureContext)) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return navigator.clipboard.writeText(_content);
          case 6:
            (_args$onCopyCallback = (_args = args()).onCopyCallback) === null || _args$onCopyCallback === void 0 ? void 0 : _args$onCopyCallback.call(_args, {
              success: true,
              message: 'Text copied to clipboard'
            });
            return _context.abrupt("return", true);
          case 8:
            // Fallback for older browsers
            textArea = document.createElement('textarea');
            textArea.value = _content;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            _context.prev = 16;
            document.execCommand('copy');
            textArea.remove();
            (_args$onCopyCallback2 = (_args2 = args()).onCopyCallback) === null || _args$onCopyCallback2 === void 0 ? void 0 : _args$onCopyCallback2.call(_args2, {
              success: true,
              message: 'Text copied to clipboard'
            });
            return _context.abrupt("return", true);
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](16);
            textArea.remove();
            return _context.abrupt("return", false);
          case 27:
            _context.next = 33;
            break;
          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](2);
            (_args$onCopyCallback3 = (_args3 = args()).onCopyCallback) === null || _args$onCopyCallback3 === void 0 ? void 0 : _args$onCopyCallback3.call(_args3, {
              success: false,
              message: "Failed to copy text: ".concat(_context.t1)
            });
            return _context.abrupt("return", false);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 29], [16, 23]]);
    }));
    return function chatboxCopyToClipboard(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  //================================================================
  // Custom Questions
  //================================================================
  var _useState21 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.defaultQuestions),
    _useState22 = src_slicedToArray(_useState21, 2),
    questions = _useState22[0],
    setQuestions = _useState22[1];
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (props.defaultQuestions) {
      setQuestions(props.defaultQuestions);
    }
  }, [props.defaultQuestions]);
  var hasQuestion = function hasQuestion() {
    return args().defaultQuestionsRes && args().defaultQuestionsRes.list.length > 0;
  };
  var handleQuestionClick = function handleQuestionClick(text) {
    var _args$onQuestionClick, _args5;
    if (inputContentRef.current) {
      inputContentRef.current.set(text);
    }
    (_args$onQuestionClick = (_args5 = args()).onQuestionClick) === null || _args$onQuestionClick === void 0 ? void 0 : _args$onQuestionClick.call(_args5, text, exposedMethods());
  };

  //================================================================
  // Custom buttons
  //================================================================
  var toolkitBtnsRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState23 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({}),
    _useState24 = src_slicedToArray(_useState23, 2),
    activeButtons = _useState24[0],
    setActiveButtons = _useState24[1];
  var closeDropdowns = function closeDropdowns() {
    setActiveButtons(function (prev) {
      var _args$toolkitButtons;
      var newState = _objectSpread({}, prev);
      // Turn off only buttons with "isSelect"
      (_args$toolkitButtons = args().toolkitButtons) === null || _args$toolkitButtons === void 0 ? void 0 : _args$toolkitButtons.forEach(function (btn, index) {
        if (btn.isSelect) {
          var _id = "".concat(args().prefix || 'custom-', "chatbox-btn-tools-").concat(chatId).concat(index);
          newState[_id] = false;
        }
      });
      return newState;
    });
  };

  // The onClick action specifically used to perform the default options
  var executeDefaultOptionAction = /*#__PURE__*/function () {
    var _ref2 = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee2(actionStr, buttonId) {
      var actionFn;
      return src_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            actionFn = new Function('method', 'isActive', 'button', actionStr); // To perform the action, pass false as the "isActive" parameter, as this is the default option
            _context2.next = 4;
            return actionFn(exposedMethods(), false, document.getElementById(buttonId));
          case 4:
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.error('Error executing default option action:', _context2.t0);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return function executeDefaultOptionAction(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var executeButtonAction = /*#__PURE__*/function () {
    var _ref3 = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee3(actionStr, buttonId, buttonElement) {
      var actionFn, result, options, newState;
      return src_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            actionFn = new Function('method', 'isActive', 'button', actionStr); // !!!REQUIRED "await"
            // "customMethods" may be asynchronous
            _context3.next = 4;
            return actionFn(exposedMethods(), !activeButtons[buttonId], buttonElement);
          case 4:
            result = _context3.sent;
            // If the returned result is an array, it is a dynamic option
            if (Array.isArray(result) && Object.keys(dynamicOptions).length === 0) {
              options = result.map(function (item) {
                var _Object$entries$ = src_slicedToArray(Object.entries(item)[0], 2),
                  key = _Object$entries$[0],
                  value = _Object$entries$[1];
                var _split$map = value.split('{#}').map(function (s) {
                    return s.trim();
                  }),
                  _split$map2 = src_slicedToArray(_split$map, 3),
                  label = _split$map2[0],
                  val = _split$map2[1],
                  onClick = _split$map2[2];
                return {
                  label: label,
                  value: val,
                  onClick: onClick
                };
              }); // Update dynamic options
              setDynamicOptions(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, buttonId, options));
              });
            }

            // Update the button status
            newState = !activeButtons[buttonId];
            setActiveButtons(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, buttonId, newState));
            });
            return _context3.abrupt("return", result);
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.error('Error executing button action:', _context3.t0);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function executeButtonAction(_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();

  // options
  var _useState25 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
      curIndex: -1,
      curValue: ''
    }),
    _useState26 = src_slicedToArray(_useState25, 2),
    selectedOpt = _useState26[0],
    setSelectedOpt = _useState26[1];

  // Store dynamic options
  var _useState27 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({}),
    _useState28 = src_slicedToArray(_useState27, 2),
    dynamicOptions = _useState28[0],
    setDynamicOptions = _useState28[1];
  var getButtonOptions = function getButtonOptions(btn, buttonId) {
    // If you are using the dynamic option and already have a cache, return the option for caching
    //---------
    if (btn.dynamicOptions && dynamicOptions[buttonId]) {
      return dynamicOptions[buttonId];
    }

    // Use the static option from "props"
    //---------
    var options = [];
    var index = 1;
    while (true) {
      var optionKey = "onSelect__".concat(index);
      if (!(optionKey in btn)) break;
      var _btn$optionKey$split$ = btn[optionKey].split('{#}').map(function (s) {
          return s.trim();
        }),
        _btn$optionKey$split$2 = src_slicedToArray(_btn$optionKey$split$, 3),
        label = _btn$optionKey$split$2[0],
        value = _btn$optionKey$split$2[1],
        onClick = _btn$optionKey$split$2[2];
      options.push({
        label: label,
        value: value,
        onClick: onClick
      });
      index++;
    }
    return options;
  };
  var handleExecuteButtonSelect = function handleExecuteButtonSelect(buttonId, option, index, value) {
    var isDefaultSelection = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    if (option.value === "cancel") {
      setSelectedOpt(function (prev) {
        var newLabels = _objectSpread({}, prev);
        delete newLabels[buttonId]; // Deletes the saved selected label, which displays the default label
        return _objectSpread(_objectSpread({}, newLabels), {}, {
          curIndex: index,
          curValue: value
        });
      });
    } else {
      setSelectedOpt(function (prev) {
        var _objectSpread4;
        return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, buttonId, option.label), _defineProperty(_objectSpread4, "curIndex", index), _defineProperty(_objectSpread4, "curValue", value), _objectSpread4));
      });
    }

    // The button action is performed and the drop-down menu is closed only when it is not the default selection
    if (!isDefaultSelection) {
      executeButtonAction(option.onClick, buttonId, document.getElementById(buttonId));

      // Close the drop-down
      closeDropdowns();
    }
  };

  // click outside
  useClickOutside_default()({
    enabled: Object.values(activeButtons).some(function (isActive) {
      return isActive;
    }),
    isOutside: function isOutside(event) {
      return event.target.closest('.toolkit-select-wrapper') === null;
    },
    handle: function handle(event) {
      closeDropdowns();
    }
  }, [toolkitBtnsRef, activeButtons]);

  //================================================================
  // Conversation History
  //================================================================
  var conversationHistory = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var updateConversationHistory = function updateConversationHistory(newMessage) {
    var maxLength = args().maxHistoryLength || 20;

    // Add new messages to your history
    conversationHistory.current.push(newMessage);

    // If the maximum length is exceeded, the oldest record is deleted
    if (conversationHistory.current.length > maxLength) {
      var removeCount = conversationHistory.current.length - maxLength;
      conversationHistory.current = conversationHistory.current.slice(removeCount);
    }
  };

  //================================================================
  // normal request
  //================================================================
  var abortController = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new AbortController()); // DO NOT USE "useState()"

  var abortNormalRequest = function abortNormalRequest() {
    console.log('--> Abort stream');
    abortController.current.abort();
  };
  var reconnectNormalRequest = function reconnectNormalRequest() {
    console.log('--> Reconnect stream');
    abortController.current = new AbortController();
  };

  //================================================================
  // stream controller
  //================================================================
  var abortStream = function abortStream() {
    console.log('--> Abort stream');
    streamController.abort();
  };

  // parse chunk data
  var parseChunkData = /*#__PURE__*/function () {
    var _ref4 = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee4(chunk, index, complete) {
      var lastContent, _args$responseExtract, extractPath, lines, _iterator, _step, line, _content, result, _iterator2, _step2, path, content, parsedContent, latestRes;
      return src_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            // Store the final content and bind it to loading
            lastContent = '';
            _context4.prev = 1;
            // Extract response using the path
            extractPath = (_args$responseExtract = args().responseExtractPath) === null || _args$responseExtract === void 0 ? void 0 : _args$responseExtract.slice(1); // Streaming data is JSON split by rows
            lines = chunk.split("\n").filter(function (line) {
              return line.trim() !== "";
            });
            _iterator = _createForOfIteratorHelper(lines);
            _context4.prev = 5;
            _iterator.s();
          case 7:
            if ((_step = _iterator.n()).done) {
              _context4.next = 45;
              break;
            }
            line = _step.value;
            // debug
            if (args().debug && index < 10 && !complete) {
              console.log("--> (".concat(index, ") ").concat(line));
            }

            // Send the streamed data to the front end
            if (!(line.indexOf('[DONE]') < 0)) {
              _context4.next = 40;
              break;
            }
            // STEP 1: 
            // ------
            // Create a JSON string
            _content = "".concat(line.replace(/^data:\s*/, '')); // Determine whether it is in JSON format
            if (isValidJSON(_content)) {
              _context4.next = 16;
              break;
            }
            console.log('--> [ERROR] Wrong JSON format');

            //reset SSE
            closeSSE();
            return _context4.abrupt("break", 45);
          case 16:
            // STEP 2: 
            // ------
            // Response body
            result = JSON.parse(_content); //*******
            // for Ollama API (STREAM END)
            //*******
            if (!(typeof result.done !== 'undefined')) {
              _context4.next = 22;
              break;
            }
            if (!(result.done === true)) {
              _context4.next = 22;
              break;
            }
            console.log('--> [DONE]');

            //reset SSE
            closeSSE();
            return _context4.abrupt("break", 45);
          case 22:
            //*******
            // for OpenAI API
            //*******
            if (extractPath) {
              _iterator2 = _createForOfIteratorHelper(extractPath);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  path = _step2.value;
                  result = result[path];
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            content = result; // STEP 3: 
            // ------
            // 🚀 !! IMPORTANT: Skip the error content
            if (!(typeof content === 'undefined')) {
              _context4.next = 26;
              break;
            }
            return _context4.abrupt("continue", 43);
          case 26:
            // STEP 4: 
            // ------
            // Update thinking state
            if (content.includes('<think>')) {
              setThinking(true);
            }
            if (content.includes('</think>')) {
              setThinking(false);
            }

            // STEP 5: 
            // ------
            // Replace with a valid label
            content = fixHtmlTags(content, args().withReasoning, args().reasoningSwitchLabel);

            // STEP 6: 
            // ------
            // By updating the stream text, you can update the UI
            tempLastContent.current += content;
            lastContent += content;

            // STEP 7: 
            // ------
            parsedContent = tempLastContent.current; // If a render parser exists, it is used to process the string
            if (!(typeof args().renderParser === 'function')) {
              _context4.next = 36;
              break;
            }
            _context4.next = 35;
            return args().renderParser(parsedContent);
          case 35:
            parsedContent = _context4.sent;
          case 36:
            // STEP 8: 
            // ------
            // Real-time output
            if (args().withReasoning) {
              setTempAnimText(formatLatestDisplayContent(parsedContent));
            } else {
              if (!thinking) {
                setTempAnimText(formatLatestDisplayContent(parsedContent));
              }
            }

            // STEP 9: 
            // ------
            // Scroll to the bottom
            scrollToBottom();
            _context4.next = 43;
            break;
          case 40:
            console.log('--> [DONE]');

            //reset SSE
            closeSSE();
            return _context4.abrupt("break", 45);
          case 43:
            _context4.next = 7;
            break;
          case 45:
            _context4.next = 50;
            break;
          case 47:
            _context4.prev = 47;
            _context4.t0 = _context4["catch"](5);
            _iterator.e(_context4.t0);
          case 50:
            _context4.prev = 50;
            _iterator.f();
            return _context4.finish(50);
          case 53:
            _context4.next = 58;
            break;
          case 55:
            _context4.prev = 55;
            _context4.t1 = _context4["catch"](1);
            console.error('--> Error processing chunk:', _context4.t1);
          case 58:
            latestRes = complete ? lastContent : tempLastContent.current; // If a render parser exists, it is used to process the string
            if (!(typeof args().renderParser === 'function')) {
              _context4.next = 63;
              break;
            }
            _context4.next = 62;
            return args().renderParser(latestRes);
          case 62:
            latestRes = _context4.sent;
          case 63:
            return _context4.abrupt("return", formatLatestDisplayContent(latestRes));
          case 64:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 55], [5, 47, 50, 53]]);
    }));
    return function parseChunkData(_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();

  // Store the final content and bind it to loading
  var tempLastContent = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)('');
  var streamController = src_useStreamController({
    onChunk: function () {
      var _onChunk = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee5(chunk, index) {
        var _args$onChunk, _args9;
        var res;
        return src_regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              // start (Execute it only once)
              if (index === 0) {
                // hide loader
                setLoaderDisplay(false);
              }

              //
              _context5.next = 3;
              return parseChunkData(chunk, index, false);
            case 3:
              res = _context5.sent;
              //
              (_args$onChunk = (_args9 = args()).onChunk) === null || _args$onChunk === void 0 ? void 0 : _args$onChunk.call(_args9, inputContentRef.current, res, conversationHistory.current);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function onChunk(_x11, _x12) {
        return _onChunk.apply(this, arguments);
      }
      return onChunk;
    }(),
    onComplete: function () {
      var _onComplete = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee6(lastContent) {
        var _args$onComplete, _args11;
        var res;
        return src_regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              console.log('--> Stream complete');
              _context6.next = 3;
              return parseChunkData(lastContent, 0, true);
            case 3:
              res = _context6.sent;
              // Display AI reply
              displayMessage(args().answerNameRes, res);

              //
              (_args$onComplete = (_args11 = args()).onComplete) === null || _args$onComplete === void 0 ? void 0 : _args$onComplete.call(_args11, inputContentRef.current, res, conversationHistory.current);

              //
              closeSSE();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function onComplete(_x13) {
        return _onComplete.apply(this, arguments);
      }
      return onComplete;
    }(),
    onError: function onError(error) {
      console.error('--> Stream error:', error);
      closeSSE();
    },
    onAbort: function onAbort() {
      console.log('--> Stream aborted');
      closeSSE();
    }
  });

  //================================================================
  // Core
  //================================================================
  var closeSSE = function closeSSE() {
    // reset 
    setTempAnimText('');
    tempLastContent.current = '';

    // Stop the timer
    clearInterval(timer.current);
    timer.current = null;

    // loading
    setLoading(false);
  };
  var displayMessage = function displayMessage(sender, content) {
    var timestamp = new Date().toLocaleTimeString(); // Get the current time
    var tag = sender === args().answerNameRes ? '[reply]' : '';
    var newMessage = {
      sender: sender || '',
      timestamp: timestamp,
      content: content,
      tag: tag
    };

    // update messages history
    updateConversationHistory(newMessage);

    // Update the message list state
    setMsgList(function (prevMessages) {
      return [].concat(_toConsumableArray(prevMessages), [newMessage]);
    });

    // Auto copy reply if enabled
    if (args().autoCopyReply && sender === args().answerNameRes) {
      chatboxCopyToClipboard(content);
    }
  };
  var sendMessage = /*#__PURE__*/function () {
    var _ref5 = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee7() {
      var messageInput, message, inputMsg, _res, _args$onChunk2, _args13, _args$onComplete2, _args14, reply, replyRes;
      return src_regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!(rootRef.current === null || msgContainerRef.current === null || msInput.current === null)) {
              _context7.next = 2;
              break;
            }
            return _context7.abrupt("return");
          case 2:
            messageInput = msInput.current;
            message = (0,sanitize.htmlEncode)(messageInput.value); // It fires in real time as the user enters
            // Sanitizing input is the process of securing/cleaning/filtering input data.
            if (!(typeof args().onInputCallback === 'function')) {
              _context7.next = 8;
              break;
            }
            _context7.next = 7;
            return args().onInputCallback(message);
          case 7:
            message = _context7.sent;
          case 8:
            if (!(message.trim() === '')) {
              _context7.next = 10;
              break;
            }
            return _context7.abrupt("return");
          case 10:
            // Start the timer
            setElapsedTime(0); // Reset elapsed time
            timer.current = setInterval(function () {
              setElapsedTime(function (prev) {
                return prev + 1;
              }); // Increment elapsed time every second
            }, 1000);

            // user message
            inputMsg = "".concat(message); // If a render parser exists, it is used to process the string
            if (!(typeof args().renderParser === 'function')) {
              _context7.next = 17;
              break;
            }
            _context7.next = 16;
            return args().renderParser(inputMsg);
          case 16:
            inputMsg = _context7.sent;
          case 17:
            displayMessage(args().questionNameRes, inputMsg); // Display user message

            // loading
            setLoading(true);

            // show loader
            setLoaderDisplay(true);

            // clear
            if (inputContentRef.current) inputContentRef.current.clear();
            _context7.prev = 21;
            _context7.next = 24;
            return mainRequest(message);
          case 24:
            _res = _context7.sent;
            if (_res.useStreamRender) {
              _context7.next = 36;
              break;
            }
            reply = _res.reply;
            replyRes = "".concat(reply); // If a render parser exists, it is used to process the string
            if (!(typeof args().renderParser === 'function')) {
              _context7.next = 32;
              break;
            }
            _context7.next = 31;
            return args().renderParser(replyRes);
          case 31:
            replyRes = _context7.sent;
          case 32:
            displayMessage(args().answerNameRes, replyRes); // Display AI reply

            //
            (_args$onChunk2 = (_args13 = args()).onChunk) === null || _args$onChunk2 === void 0 ? void 0 : _args$onChunk2.call(_args13, inputContentRef.current, replyRes, conversationHistory.current);
            (_args$onComplete2 = (_args14 = args()).onComplete) === null || _args$onComplete2 === void 0 ? void 0 : _args$onComplete2.call(_args14, inputContentRef.current, replyRes, conversationHistory.current);

            //reset SSE
            closeSSE();
          case 36:
            _context7.next = 45;
            break;
          case 38:
            _context7.prev = 38;
            _context7.t0 = _context7["catch"](21);
            // loading
            setLoading(false);

            // Stop the timer
            clearInterval(timer.current);
            timer.current = null;
            console.error('--> Error sending message:', _context7.t0);
            displayMessage(args().answerNameRes, "Error: Unable to send message: ".concat(String(_context7.t0))); // Display AI reply
          case 45:
            // clear
            messageInput.value = '';

            // reset textarea height
            if (inputContentRef.current) inputContentRef.current.resetHeight();

            // Scroll to the bottom
            scrollToBottom();
          case 48:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[21, 38]]);
    }));
    return function sendMessage() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleClickSafe = useDebounce_default()(function () {
    sendMessage();
  }, 300, []);
  var handleClose = function handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    setShow(false);
  };
  var mainRequest = /*#__PURE__*/function () {
    var _ref6 = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee8(msg) {
      var currentStreamMode, requestBodyRes, customResponse, content, isStream, contentRes, response, _errInfo, _args$responseExtract2, extractPath, _response, _errInfo2, jsonResponse, result, _iterator3, _step3, path, _content2, _err;
      return src_regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            currentStreamMode = args().isStream; // Update stream mode
            setEnableStreamMode(currentStreamMode);
            _context8.prev = 2;
            // Parse and interpolate request body template
            requestBodyRes = JSON.parse((args().requestBodyTmpl || '{}').replace(/\{model\}/g, args().model).replace(/\{message\}/g, msg).replace(/\{token\}/g, chatId)); // 
            // If a formatter function exists, it is used to process the request body
            if (!(typeof args().requestBodyFormatter === 'function')) {
              _context8.next = 8;
              break;
            }
            _context8.next = 7;
            return args().requestBodyFormatter(requestBodyRes, args().latestContextData, conversationHistory.current);
          case 7:
            requestBodyRes = _context8.sent;
          case 8:
            // Scroll to the bottom
            setTimeout(function () {
              // Scroll to the bottom
              scrollToBottom();
            }, 500);
            if (!(typeof args().customRequest === 'function')) {
              _context8.next = 25;
              break;
            }
            // Update stream mode
            setEnableStreamMode(false);
            _context8.next = 13;
            return args().customRequest(msg, {
              requestBody: requestBodyRes,
              apiUrl: args().requestApiUrl || '',
              headers: args().headerConfigRes
            }, customMethodsRef.current, conversationHistory.current);
          case 13:
            customResponse = _context8.sent;
            content = customResponse.content, isStream = customResponse.isStream;
            contentRes = content; // Update stream mode
            setEnableStreamMode(isStream);

            // NORMAL
            //++++++++++++++++++++++++++++++++++++++++++++++++
            if (!(!isStream && typeof contentRes === 'string' && contentRes.trim() !== '')) {
              _context8.next = 20;
              break;
            }
            // Replace with a valid label 
            contentRes = fixHtmlTags(contentRes, args().withReasoning, args().reasoningSwitchLabel);
            return _context8.abrupt("return", {
              reply: formatLatestDisplayContent(contentRes),
              useStreamRender: false
            });
          case 20:
            if (!(isStream && isStreamResponse(contentRes))) {
              _context8.next = 24;
              break;
            }
            _context8.next = 23;
            return streamController.start(contentRes);
          case 23:
            return _context8.abrupt("return", {
              reply: tempAnimText,
              // The final content will be in tempAnimText
              useStreamRender: true
            });
          case 24:
            // DEFAULT
            //++++++++++++++++++++++++++++++++++++++++++++++++
            if (contentRes === null) {
              // Update stream mode
              setEnableStreamMode(currentStreamMode);
            }
          case 25:
            if (!currentStreamMode) {
              _context8.next = 39;
              break;
            }
            _context8.next = 28;
            return fetch(args().requestApiUrl || '', {
              method: "POST",
              body: JSON.stringify(requestBodyRes),
              headers: args().headerConfigRes
            });
          case 28:
            response = _context8.sent;
            if (response.ok) {
              _context8.next = 34;
              break;
            }
            _errInfo = "[ERROR] HTTP Error ".concat(response.status, ": ").concat(response.statusText);
            setTempAnimText(_errInfo);

            // hide loader
            setLoaderDisplay(false);
            return _context8.abrupt("return", {
              reply: _errInfo,
              useStreamRender: false
            });
          case 34:
            _context8.next = 36;
            return streamController.start(response);
          case 36:
            return _context8.abrupt("return", {
              reply: tempAnimText,
              // The final content will be in tempAnimText
              useStreamRender: true
            });
          case 39:
            // Extract response using the path
            extractPath = (_args$responseExtract2 = args().responseExtractPath) === null || _args$responseExtract2 === void 0 ? void 0 : _args$responseExtract2.slice(1);
            _context8.next = 42;
            return fetch(args().requestApiUrl || '', {
              method: "POST",
              headers: args().headerConfigRes,
              body: JSON.stringify(requestBodyRes),
              signal: abortController.current.signal
            });
          case 42:
            _response = _context8.sent;
            if (_response.ok) {
              _context8.next = 47;
              break;
            }
            _errInfo2 = "[ERROR] HTTP Error ".concat(_response.status, ": ").concat(_response.statusText); // hide loader
            setLoaderDisplay(false);
            return _context8.abrupt("return", {
              reply: _errInfo2,
              useStreamRender: false
            });
          case 47:
            _context8.next = 49;
            return _response.json();
          case 49:
            jsonResponse = _context8.sent;
            // hide loader
            setLoaderDisplay(false);
            result = jsonResponse;
            if (extractPath) {
              _iterator3 = _createForOfIteratorHelper(extractPath);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  path = _step3.value;
                  result = result[path];
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
            _content2 = result; // Replace with a valid label
            _content2 = fixHtmlTags(_content2, args().withReasoning, args().reasoningSwitchLabel);
            return _context8.abrupt("return", {
              reply: formatLatestDisplayContent(_content2),
              useStreamRender: false
            });
          case 56:
            _context8.next = 64;
            break;
          case 58:
            _context8.prev = 58;
            _context8.t0 = _context8["catch"](2);
            _err = "--> Error in mainRequest: ".concat(_context8.t0);
            console.error(_err);

            //reset SSE
            closeSSE();
            return _context8.abrupt("return", {
              reply: _err,
              useStreamRender: false
            });
          case 64:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[2, 58]]);
    }));
    return function mainRequest(_x14) {
      return _ref6.apply(this, arguments);
    };
  }();

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(propsRef.current.contentRef, function () {
    return exposedMethods();
  }, [propsRef.current.contentRef, inputContentRef, msInput, msgList]);

  // Update ref when props change
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    propsRef.current = props;
  }, [props]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (props.requestConfig) {
      configRef.current = props.requestConfig;
    }
  }, [props.requestConfig]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    contextDataRef.current = props.contextData;
  }, [props.contextData]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (Array.isArray(props.defaultMessages) && props.defaultMessages.length > 0) {
      // Update the default messages
      setMsgList(props.defaultMessages);
    }
  }, [props.defaultMessages]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (Array.isArray(props.defaultMessages) && props.defaultMessages.length > 0) {
      // Update the default messages
      setMsgList(props.defaultMessages);
    }
  }, [props.defaultMessages]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Bind chatboxCopyToClipboard to window so it can be called in HTML code
    window.chatboxCopyToClipboard = chatboxCopyToClipboard;
  }, []);

  // Initialize the default value of toolkit buttons
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (args().toolkitButtons) {
      args().toolkitButtons.forEach(function (btn, index) {
        var _id = "".concat(args().prefix || 'custom-', "chatbox-btn-tools-").concat(chatId).concat(index);
        if (btn.isSelect) {
          if (!initializedDefaults[_id] && typeof btn.defaultSelected === 'number') {
            var options = getButtonOptions(btn, _id);

            // If there is a default selected item, initialize the selected state
            if (btn.defaultSelected >= 0 && btn.defaultSelected < options.length) {
              var defaultOption = options[btn.defaultSelected];
              if (defaultOption) {
                // Update the selected status
                // console.log('--> defaultOption: ', defaultOption);

                // Pass the "isDefaultSelection" parameter as true
                handleExecuteButtonSelect(_id, defaultOption, btn.defaultSelected, defaultOption.value, true);

                // Perform the onClick action alone
                executeDefaultOptionAction(defaultOption.onClick, _id);

                // Mark this button with the default value initialized
                setInitializedDefaults(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, _id, true));
                });
              }
            }
          }
        } else if (btn.active) {
          // For non-select buttons, if defaultActive is true, execute the onClick action
          executeButtonAction(btn.onClick, _id, document.getElementById(_id));
        }
      });
    }
  }, [chatId, args().toolkitButtons]); // It is only executed when the component is first rendered and when toolkitButtons changes

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((dist_cjs_default()), {
    show: true,
    usePortal: args().usePopUp,
    containerClassName: "Chatbox"
  }, args().bubble ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "".concat(args().prefix || 'custom-', "chatbox-circle"),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      setShow(true);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "".concat(args().bubbleLabel)
    }
  }))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    style: {
      display: show ? 'block' : 'none'
    },
    className: "".concat(args().prefix || 'custom-', "chatbox-close"),
    "aria-label": "".concat(args().closeLabel || 'Close'),
    "data-balloon-pos": "left",
    tabIndex: -1,
    onClick: handleClose
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "30px",
    height: "30px",
    viewBox: "0 0 1024 1024",
    fill: "#000000"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z",
    fill: "#000"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M328 340.8l32-31.2 348 348-32 32z",
    fill: "#000"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      display: show ? 'block' : 'none'
    },
    className: "".concat(args().prefix || 'custom-', "chatbox-container ").concat(typeof args().usePopUp !== 'undefined' && args().usePopUp === false ? 'popup-none' : ''),
    ref: rootRef
  }, msgList.length === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "d-flex flex-column align-items-center justify-content-center ".concat(hasQuestion() ? '' : 'h-50')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("p", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "70px",
    height: "70px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z",
    stroke: "#858297",
    strokeWidth: "1.5"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    opacity: "0.5",
    d: "M8 10.5H16",
    stroke: "#333",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    opacity: "0.5",
    d: "M8 14H13.5",
    stroke: "#333",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("p", {
    className: "text-primary",
    dangerouslySetInnerHTML: {
      __html: "".concat(args().noDataPlaceholder)
    }
  }), hasQuestion() && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "default-questions"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "default-questions-title",
    dangerouslySetInnerHTML: {
      __html: "".concat(args().defaultQuestionsRes.title)
    }
  }), (_list = args().defaultQuestionsRes.list) === null || _list === void 0 ? void 0 : _list.map(function (question, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      key: index,
      className: "default-question-item",
      onClick: function onClick() {
        return handleQuestionClick(question);
      },
      dangerouslySetInnerHTML: {
        __html: "".concat(question)
      }
    });
  })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "messages ".concat(msgList.length === 0 ? 'd-none' : ''),
    ref: msgContainerRef
  }, msgList.map(function (msg, index) {
    var _msg$tag, _msg$tag2;
    var copyTargetId = "".concat(args().prefix || 'custom-', "chatbox-content--").concat(chatId).concat(index);
    var isAnimProgress = tempAnimText !== '' && msg.sender !== args().questionNameRes && index === msgList.length - 1 && loading;
    var hasAnimated = animatedMessagesRef.current.has(index);

    // Mark the message as animated;
    animatedMessagesRef.current.add(index);
    var timeShow = "<span class=\"qa-timestamp\">".concat(msg.timestamp, "</span>").concat(args().showCopyBtn && ((_msg$tag = msg.tag) === null || _msg$tag === void 0 ? void 0 : _msg$tag.indexOf('[reply]')) >= 0 ? "<button class=\"copy-btn\" aria-label=\"".concat(args().copyLabel || 'Copy', "\" data-balloon-pos=\"up\" onclick=\"window.chatboxCopyToClipboard(document.querySelector('#").concat(copyTargetId, " .qa-content-inner').innerHTML)\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\"><path d=\"M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z\"/><path d=\"M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2\"/></svg></button>") : '');
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      key: index,
      className: ((_msg$tag2 = msg.tag) === null || _msg$tag2 === void 0 ? void 0 : _msg$tag2.indexOf('[reply]')) < 0 ? 'request' : 'reply',
      style: {
        display: isAnimProgress ? 'none' : ''
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "qa-name",
      dangerouslySetInnerHTML: {
        __html: "".concat(msg.sender)
      }
    }), msg.sender === args().questionNameRes ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "qa-content",
      id: copyTargetId,
      dangerouslySetInnerHTML: {
        __html: "<div class=\"qa-content-inner\">".concat(msg.content, "</div> ").concat(timeShow)
      }
    })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, enableStreamMode ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "qa-content",
      id: copyTargetId,
      dangerouslySetInnerHTML: {
        __html: "<div class=\"qa-content-inner\">".concat(msg.content, "</div> ").concat(timeShow)
      }
    })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "qa-content",
      id: copyTargetId
    }, hasAnimated ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      dangerouslySetInnerHTML: {
        __html: "<div class=\"qa-content-inner\">".concat(msg.content, "</div> ").concat(timeShow)
      }
    }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TypingEffect, {
      onUpdate: function onUpdate() {
        scrollToBottom();
      },
      content: "<div class=\"qa-content-inner\">".concat(msg.content, "</div> ").concat(timeShow),
      speed: 10
    })))));
  }), enableStreamMode ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, args().verbose ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, tempAnimText !== '' && loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "reply reply-waiting"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-name"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "".concat(args().answerNameRes)
    }
  }), loaderDisplay ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "msg-dotted-loader-container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader-text"
  }, args().sendLoadingLabel, " (", elapsedTime, "s)"))) : null), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content",
    dangerouslySetInnerHTML: {
      __html: "".concat(tempAnimText)
    }
  })))) : null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "reply reply-waiting"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-name"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "".concat(args().answerNameRes)
    }
  }), thinking ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "msg-dotted-loader-container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader-text"
  }, args().sendLoadingLabel, " (", elapsedTime, "s)"))) : null), tempAnimText !== '' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content",
    dangerouslySetInnerHTML: {
      __html: "".concat(tempAnimText)
    }
  }))) : null)) : null)) : null, !enableStreamMode ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "reply reply-waiting"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-name"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "".concat(args().answerNameRes)
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "msg-dotted-loader-container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "msg-dotted-loader-text"
  }, args().sendLoadingLabel, " (", elapsedTime, "s)"))), tempAnimText !== '' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "qa-content",
    dangerouslySetInnerHTML: {
      __html: "".concat(tempAnimText)
    }
  }))) : null)) : null) : null, args().newChatButton && msgList.length > 0 && !loading && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "newchat-btn"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    id: "".concat(args().prefix || 'custom-', "chatbox-btn-new-").concat(chatId),
    onClick: function onClick(e) {
      return executeButtonAction(args().newChatButton.onClick, "".concat(args().prefix || 'custom-', "chatbox-btn-new-").concat(chatId), e.currentTarget);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: ((_args$newChatButton = args().newChatButton) === null || _args$newChatButton === void 0 ? void 0 : _args$newChatButton.label) || ''
    }
  })))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "msgcontrol ".concat(focused ? 'focus' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    ref: msInput,
    contentRef: inputContentRef,
    controlClassName: "messageInput-control",
    wrapperClassName: "messageInput",
    placeholder: args().placeholder,
    disabled: loading ? true : false,
    onKeyDown: function onKeyDown(event) {
      // line breaks
      if ((event.key === 'Enter' || event.key === 'NumpadEnter') && (event.ctrlKey || event.metaKey)) {
        return;
      }
      if ((event.key === 'Enter' || event.key === 'NumpadEnter') && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
        event.preventDefault(); // Prevent line breaks
        handleClickSafe();
      }
    },
    onChange: function onChange(e, el, value) {
      var _args$onInputChange, _args17;
      (_args$onInputChange = (_args17 = args()).onInputChange) === null || _args$onInputChange === void 0 ? void 0 : _args$onInputChange.call(_args17, inputContentRef.current, value);
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    },
    rows: args().defaultRows || 2,
    autoSize: true,
    autoSizeMaxHeight: 200
  }), loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!enableStreamMode) {
        // normal request
        abortNormalRequest();
      } else {
        // stop stream
        abortStream();
      }

      //reset SSE
      closeSSE();
    },
    className: "is-suspended",
    dangerouslySetInnerHTML: {
      __html: "".concat(args().stopLabel || '<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/></svg>')
    }
  })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      // normal request
      if (!enableStreamMode) {
        if (abortController.current.signal.aborted) {
          reconnectNormalRequest();
        }
      }
      handleClickSafe();
    },
    dangerouslySetInnerHTML: {
      __html: "".concat(args().sendLabel)
    }
  }))), args().sendLoading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "loading"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      display: loading ? 'block' : 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_PureLoader, {
    prefix: args().prefix,
    customClassName: "w-100",
    txt: ""
  }))) : null, args().toolkitButtons && args().toolkitButtons.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toolkit-btns",
    ref: toolkitBtnsRef
  }, args().toolkitButtons.map(function (btn, index) {
    var _id = "".concat(args().prefix || 'custom-', "chatbox-btn-tools-").concat(chatId).concat(index);
    var isActive = activeButtons[_id];
    if (btn.isSelect) {
      var options = getButtonOptions(btn, _id);
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        key: index,
        className: "toolkit-select-wrapper"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
        id: _id,
        "data-value": btn.value || '',
        className: "toolkit-select-btn ".concat(isActive ? 'active' : '', " ").concat(selectedOpt.curValue !== 'cancel' && typeof selectedOpt.curValue !== 'undefined' && selectedOpt.curValue !== '' ? 'opt-active' : ''),
        onClick: function onClick(e) {
          e.preventDefault();
          setActiveButtons(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, _id, !prev[_id]));
          });

          //
          executeButtonAction(btn.onClick, _id, e.currentTarget);
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: selectedOpt[_id] || btn.label
        }
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "toolkit-select-arrow"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "5px",
        height: "5px",
        viewBox: "0 -4.5 20 20"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
        transform: "translate(-180.000000, -6684.000000)",
        className: "arrow-fill-g",
        fill: "currentColor"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
        transform: "translate(56.000000, 160.000000)"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"
      }))))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "toolkit-select-options ".concat(isActive ? 'active' : '')
      }, options.length > 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, options.map(function (option, optIndex) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          key: optIndex,
          "data-value": option.value || '',
          className: "toolkit-select-option ".concat(selectedOpt.curIndex === optIndex ? 'selected' : ''),
          onClick: function onClick() {
            return handleExecuteButtonSelect(_id, option, optIndex, option.value);
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: option.label
          }
        }));
      })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "".concat(args().prefix || 'custom-', "chatbox-mini-loader")
      }))));
    }

    // The rendering of the normal button
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
      key: index,
      id: _id,
      className: "".concat(btn.value || '', " ").concat(isActive ? 'active' : ''),
      onClick: function onClick(e) {
        return executeButtonAction(btn.onClick, _id, e.currentTarget);
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      dangerouslySetInnerHTML: {
        __html: btn.label
      }
    }));
  })))));
};
/* harmony default export */ const src = (Chatbox);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});