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

        /***/85: /***/function _(module, exports, __nested_webpack_require_11463__) {
          /* module decorator */module = __nested_webpack_require_11463__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_11463__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_11463__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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
      function __nested_webpack_require_19931__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_19931__);
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
        /******/__nested_webpack_require_19931__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_19931__.d(getter, {
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
        /******/__nested_webpack_require_19931__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_19931__.o(definition, key) && !__nested_webpack_require_19931__.o(exports, key)) {
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
        /******/__nested_webpack_require_19931__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_19931__.r = function (exports) {
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
        /******/__nested_webpack_require_19931__.nmd = function (module) {
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

        __nested_webpack_require_19931__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_19931__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19931__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_19931__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_19931__(85);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_19931__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_19931__(188);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_19931__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
        var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "type", "disabled", "required", "placeholder", "pattern", "readOnly", "defaultValue", "value", "requiredLabel", "label", "units", "name", "step", "min", "max", "src", "size", "minLength", "maxLength", "alt", "inputMode", "id", "appendControl", "iconLeft", "iconRight", "autoComplete", "autoCapitalize", "spellCheck", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus", "onPressEnter"];
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
        var Input = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
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
            defaultValue = props.defaultValue,
            value = props.value,
            requiredLabel = props.requiredLabel,
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
            autoCapitalize = props.autoCapitalize,
            spellCheck = props.spellCheck,
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
          var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
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
              control: function control() {
                return valRef.current;
              },
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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // update default value (It does not re-render the component because the incoming value changes.)
            //--------------
            if (typeof defaultValue !== 'undefined') {
              //REQUIRED
              setChangedVal("".concat(defaultValue)); // Avoid displaying the number 0
            }
          }, []);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)('position-relative', (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupWrapperClassName, 'input-group'), {
              'has-left-content': propExist(iconLeft),
              'has-right-content': propExist(iconRight) || propExist(units)
            })
          }, propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, iconLeft)) : null, appendControl && propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "input-group-control-container w-100 position-relative"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: function ref(node) {
              valRef.current = node;
              if (typeof externalRef === 'function') {
                externalRef(node);
              } else if (externalRef) {
                externalRef.current = node;
              }
            },
            tabIndex: tabIndex || 0,
            type: typeRes,
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)(propExist(iconLeft) ? 'rounded-start-0' : 'rounded', (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlClassName, 'form-control ')),
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
            defaultValue: defaultValue,
            value: changedVal,
            minLength: minLength || null,
            maxLength: maxLength || null,
            autoComplete: typeof autoComplete === 'undefined' ? 'on' : autoComplete,
            autoCapitalize: typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize,
            spellCheck: typeof spellCheck === 'undefined' ? false : spellCheck,
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, units)) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, iconRight)) : null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: function ref(node) {
              valRef.current = node;
              if (typeof externalRef === 'function') {
                externalRef(node);
              } else if (externalRef) {
                externalRef.current = node;
              }
            },
            tabIndex: tabIndex || 0,
            type: typeRes,
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)((0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlClassName, 'form-control'), controlExClassName, {
              'rounded': !propExist(iconLeft) && !propExist(iconRight) && !propExist(units)
            }),
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
            autoComplete: typeof autoComplete === 'undefined' ? 'on' : autoComplete,
            autoCapitalize: typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize,
            spellCheck: typeof spellCheck === 'undefined' ? false : spellCheck,
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, units)) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text')
          }, iconRight)) : null)), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, requiredLabel || requiredLabel === '' ? requiredLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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

/***/ 322:
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
        /* harmony export */"dateFormat": function dateFormat() {
          return (/* binding */_dateFormat
          );
        },
        /* harmony export */"getCalendarDate": function getCalendarDate() {
          return (/* binding */_getCalendarDate
          );
        },
        /* harmony export */"getCurrentDate": function getCurrentDate() {
          return (/* binding */_getCurrentDate
          );
        },
        /* harmony export */"getCurrentDay": function getCurrentDay() {
          return (/* binding */_getCurrentDay
          );
        },
        /* harmony export */"getCurrentMonth": function getCurrentMonth() {
          return (/* binding */_getCurrentMonth
          );
        },
        /* harmony export */"getCurrentYear": function getCurrentYear() {
          return (/* binding */_getCurrentYear
          );
        },
        /* harmony export */"getFirstAndLastMonthDay": function getFirstAndLastMonthDay() {
          return (/* binding */_getFirstAndLastMonthDay
          );
        },
        /* harmony export */"getFullTime": function getFullTime() {
          return (/* binding */_getFullTime
          );
        },
        /* harmony export */"getLastDayInMonth": function getLastDayInMonth() {
          return (/* binding */_getLastDayInMonth
          );
        },
        /* harmony export */"getNextMonthDate": function getNextMonthDate() {
          return (/* binding */_getNextMonthDate
          );
        },
        /* harmony export */"getNextYearDate": function getNextYearDate() {
          return (/* binding */_getNextYearDate
          );
        },
        /* harmony export */"getNow": function getNow() {
          return (/* binding */_getNow
          );
        },
        /* harmony export */"getPrevMonthDate": function getPrevMonthDate() {
          return (/* binding */_getPrevMonthDate
          );
        },
        /* harmony export */"getPrevYearDate": function getPrevYearDate() {
          return (/* binding */_getPrevYearDate
          );
        },
        /* harmony export */"getSpecifiedDate": function getSpecifiedDate() {
          return (/* binding */_getSpecifiedDate
          );
        },
        /* harmony export */"getTodayDate": function getTodayDate() {
          return (/* binding */_getTodayDate
          );
        },
        /* harmony export */"getTomorrowDate": function getTomorrowDate() {
          return (/* binding */_getTomorrowDate
          );
        },
        /* harmony export */"getYesterdayDate": function getYesterdayDate() {
          return (/* binding */_getYesterdayDate
          );
        },
        /* harmony export */"isTimeString": function isTimeString() {
          return (/* binding */_isTimeString
          );
        },
        /* harmony export */"isValidDate": function isValidDate() {
          return (/* binding */_isValidDate
          );
        },
        /* harmony export */"isValidDay": function isValidDay() {
          return (/* binding */_isValidDay
          );
        },
        /* harmony export */"isValidHours": function isValidHours() {
          return (/* binding */_isValidHours
          );
        },
        /* harmony export */"isValidMinutesAndSeconds": function isValidMinutesAndSeconds() {
          return (/* binding */_isValidMinutesAndSeconds
          );
        },
        /* harmony export */"isValidMonth": function isValidMonth() {
          return (/* binding */_isValidMonth
          );
        },
        /* harmony export */"isValidYear": function isValidYear() {
          return (/* binding */_isValidYear
          );
        },
        /* harmony export */"padZero": function padZero() {
          return (/* binding */_padZero
          );
        },
        /* harmony export */"setDateDays": function setDateDays() {
          return (/* binding */_setDateDays
          );
        },
        /* harmony export */"setDateHours": function setDateHours() {
          return (/* binding */_setDateHours
          );
        },
        /* harmony export */"setDateMinutes": function setDateMinutes() {
          return (/* binding */_setDateMinutes
          );
        },
        /* harmony export */"timestampToDate": function timestampToDate() {
          return (/* binding */_timestampToDate
          );
        }
        /* harmony export */
      });
      /**
       * The check string contains only hours, minutes, and seconds
       * @returns {Boolean}  
       */
      function _isTimeString(str) {
        // match "HH:mm:ss"
        var timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        return timePattern.test(str);
      }

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

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 767:
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
        /* harmony export */"getAbsoluteCoordinates": function getAbsoluteCoordinates() {
          return (/* binding */_getAbsoluteCoordinates
          );
        },
        /* harmony export */"getAbsolutePositionOfStage": function getAbsolutePositionOfStage() {
          return (/* binding */_getAbsolutePositionOfStage
          );
        },
        /* harmony export */"getOffset": function getOffset() {
          return (/* binding */_getOffset
          );
        },
        /* harmony export */"getPosition": function getPosition() {
          return (/* binding */_getPosition
          );
        },
        /* harmony export */"getTransitionDuration": function getTransitionDuration() {
          return (/* binding */_getTransitionDuration
          );
        }
        /* harmony export */
      });
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * Get the -webkit-transition-duration property
       *
       * @param {HTMLElement} el - A DOM node containing one selector to match against.
       * @return {number}    - Returns a pure number.
       */
      function _getTransitionDuration(el) {
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
       * @param {Number | string} left     - left offset
       * @param {Number | string} top      - top offset
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

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

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
        /* harmony export */"calcAdd": function calcAdd() {
          return (/* binding */_calcAdd
          );
        },
        /* harmony export */"calcDiv": function calcDiv() {
          return (/* binding */_calcDiv
          );
        },
        /* harmony export */"calcMul": function calcMul() {
          return (/* binding */_calcMul
          );
        },
        /* harmony export */"calcSub": function calcSub() {
          return (/* binding */_calcSub
          );
        },
        /* harmony export */"evaluate": function evaluate() {
          return (/* binding */_evaluate
          );
        },
        /* harmony export */"exceedDecimalPlaces": function exceedDecimalPlaces() {
          return (/* binding */_exceedDecimalPlaces
          );
        },
        /* harmony export */"formatNumber": function formatNumber() {
          return (/* binding */_formatNumber
          );
        },
        /* harmony export */"isDecimal": function isDecimal() {
          return (/* binding */_isDecimal
          );
        },
        /* harmony export */"isNumeric": function isNumeric() {
          return (/* binding */_isNumeric
          );
        },
        /* harmony export */"numZeroPad": function numZeroPad() {
          return (/* binding */_numZeroPad
          );
        },
        /* harmony export */"truncateDecimals": function truncateDecimals() {
          return (/* binding */_truncateDecimals
          );
        }
        /* harmony export */
      });
      /**
       * Evaluating a string as a mathematical expression
       * @param {String} s      - An input string
       * @returns {Number}   - New calculation result.
       */
      function _evaluate(s) {
        var chars = s.replace(/\s/g, '').split("");
        var n = [],
          op = [],
          index = 0,
          oplast = true;
        n[index] = "";

        // Parse the expression
        for (var c = 0; c < chars.length; c++) {
          if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
          } else {
            n[index] += chars[c];
            oplast = false;
          }
        }

        // Calculate the expression
        var resStr = parseFloat(n[0]);
        for (var o = 0; o < op.length; o++) {
          var num = parseFloat(n[o + 1]);
          switch (op[o]) {
            case "+":
              resStr = resStr + num;
              break;
            case "-":
              resStr = resStr - num;
              break;
            case "*":
              resStr = resStr * num;
              break;
            case "/":
              resStr = resStr / num;
              break;
          }
        }
        return resStr;
      }

      /**
       * Addition
       * @param {Number} num1
       * @param {Number} num2
       * @return {Number} 
       */
      function _calcAdd(num1, num2) {
        var baseNum, baseNum1, baseNum2;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        return (num1 * baseNum + num2 * baseNum) / baseNum;
      }

      /**
       * Subtraction
       * @param {Number} num1
       * @param {Number} num2
       * @return {Number} 
       */
      function _calcSub(num1, num2) {
        var baseNum, baseNum1, baseNum2;
        var precision;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
      }

      /**
       * Multiplication
       * @param {Number} num1
       * @param {Number} num2
       * @return {Number} 
       */
      function _calcMul(num1, num2) {
        var baseNum = 0;
        try {
          baseNum += num1.toString().split(".")[1].length;
        } catch (e) {}
        try {
          baseNum += num2.toString().split(".")[1].length;
        } catch (e) {}
        return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
      }
      ;
      /**
       * Division
       * @param {Number} num1
       * @param {Number} num2
       * @return {Number} 
       */
      function _calcDiv(num1, num2) {
        var baseNum1 = 0,
          baseNum2 = 0;
        var baseNum3, baseNum4;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
          baseNum2 = 0;
        }
        baseNum3 = Number(num1.toString().replace(".", ""));
        baseNum4 = Number(num2.toString().replace(".", ""));
        return baseNum3 / baseNum4 * Math.pow(10, baseNum2 - baseNum1);
      }

      /**
       * Determine if it's a number
       * @param {*} n
       * @returns {Boolean}
       */
      function _isNumeric(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
      }

      /**
       * Determine if it's a decimal
       * @param {Number} num
       * @returns {Boolean}
       */
      function _isDecimal(num) {
        return num !== Math.floor(num);
      }

      /**
       * Truncate Decimals
       * @param {Number} num 
       * @param {Number} decimalPlaces 
       * @returns {Number}
       */
      function _truncateDecimals(num, decimalPlaces) {
        var factor = Math.pow(10, decimalPlaces);
        return Math.floor(num * factor) / factor;
      }

      /**
       * Zero Pad
       * @param {Number|String} n
       * @param {?Number} decimalPlaces 
       * @returns {String}
       */
      function _numZeroPad(n) {
        var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return parseFloat(String(n)).toFixed(decimalPlaces);
      }

      /**
       * Check whether the number of decimal places exceeds the specified value
       * @param {Number|String} s
       * @param {Number} decimalPlaces 
       * @returns {Boolean}
       */
      function _exceedDecimalPlaces(s, decimalPlaces) {
        var parts = String(s).split(".");
        return parts[1] && parts[1].length > decimalPlaces;
      }

      /**
       * Format number
       * @param {*} inputValue 
       * @param {?Number} decimalPlaces 
       * @param {Number|undefined} inputMin 
       * @param {Number|undefined} inputMax 
       * @returns {String}
       */
      function _formatNumber(inputValue) {
        var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var inputMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var inputMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        // STEP 1
        // =================================================================
        // Determine whether the value is legitimate
        if (inputValue === '' || !_isNumeric(inputValue)) {
          return '';
        }

        // STEP 2
        // =================================================================
        // check min or max value
        if (typeof inputMin !== 'undefined' && typeof inputMax !== 'undefined' && _isNumeric(inputMin) && _isNumeric(inputMax)) {
          inputValue = Math.min(Number(inputValue), inputMax);
          inputValue = Math.max(Number(inputValue), inputMin);
        }

        // STEP 3
        // =================================================================
        // Remove characters that are not numbers and decimal points
        var formattedValue = String(inputValue).replace(/[^0-9.\-]/g, "");

        // STEP 4
        // =================================================================
        // Prevent multiple decimal points
        var parts = formattedValue.split(".");
        if (parts.length > 2) {
          formattedValue = "".concat(parts[0], ".").concat(parts[1]);
        }

        // STEP 5
        // =================================================================
        // Limit the number of decimal places
        if (parts[1] && parts[1].length > decimalPlaces) {
          formattedValue = parseFloat(formattedValue).toFixed(decimalPlaces);
        }

        // STEP 6
        // =================================================================
        // Remove invalid zeros
        formattedValue = Number(formattedValue).toPrecision();
        return formattedValue;
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
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/date.js
var cjs_date = __webpack_require__(322);
// EXTERNAL MODULE: ../Utils/dist/cjs/useClickOutside.js
var useClickOutside = __webpack_require__(761);
var useClickOutside_default = /*#__PURE__*/__webpack_require__.n(useClickOutside);
// EXTERNAL MODULE: ../Utils/dist/cjs/getElementProperty.js
var getElementProperty = __webpack_require__(767);
// EXTERNAL MODULE: ../Utils/dist/cjs/math.js
var math = __webpack_require__(840);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
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
    if (typeof v === 'string' && !(0,cjs_date.isValidDate)(v)) {
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
    var date = (0,cjs_date.dateFormat)(v);
    var year = date.getFullYear();
    var month = (0,cjs_date.padZero)(date.getMonth() + 1, padZeroEnabled);
    var day = (0,cjs_date.padZero)(date.getDate(), padZeroEnabled);
    var hours = (0,cjs_date.padZero)(date.getHours(), padZeroEnabled);
    var minutes = (0,cjs_date.padZero)(date.getMinutes(), padZeroEnabled);
    var seconds = (0,cjs_date.padZero)(date.getSeconds(), padZeroEnabled);
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
  var MIN = typeof min !== 'undefined' && min !== '' && min !== null && (0,cjs_date.isValidDate)(min) ? getFullTimeData(min) : '';
  var MAX = typeof max !== 'undefined' && max !== '' && max !== null && (0,cjs_date.isValidDate)(max) ? getFullTimeData(max) : '';
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
        day: (0,cjs_date.padZero)(day),
        month: (0,cjs_date.padZero)(_date.getMonth() + 1),
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
        day: (0,cjs_date.padZero)(day),
        month: (0,cjs_date.padZero)(_date.getMonth() + 1),
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
      day: (0,cjs_date.padZero)(day),
      month: (0,cjs_date.padZero)(month + 1),
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
      day: (0,cjs_date.padZero)(day),
      month: (0,cjs_date.padZero)(currentIndex + 1),
      year: year.toString()
    });
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setTodayDate(now);

    //
    var _now = (0,cjs_date.getTodayDate)().split('-');
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
    if (typeof customTodayDate === 'string' && customTodayDate !== '' && (0,cjs_date.isValidDate)(customTodayDate)) {
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
    className: (0,cls.combinedCls)('date2d-cal__btn', {
      'active': winMonth
    }),
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
    className: (0,cls.combinedCls)('date2d-cal__btn', {
      'active': winYear
    }),
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
      className: (0,cls.combinedCls)('date2d-cal__cell date2d-cal__day date2d-cal__day--week date2d-cal__day--disabled bg-secondary-subtle empty', {
        'last-cell': i === WEEK.length - 1
      }),
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
        className: (0,cls.combinedCls)('date2d-cal__cell date2d-cal__day', {
          'empty': d <= 0,
          'today': d === now.getDate(),
          'selected': d === day,
          'last-cell': isLastCol,
          'last-row': isLastRow,
          'disabled': checkDisabledDay(year, month, d)
        }),
        key: "col" + i,
        "data-date": getCalendarDate(_dateShow),
        "data-day": (0,cjs_date.padZero)(d),
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
    className: (0,cls.combinedCls)('date2d-cal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded', {
      'active': winMonth
    })
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__month-container"
  }, MONTHS_FULL.map(function (month, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      "data-month": (0,cjs_date.padZero)(index + 1),
      className: (0,cls.combinedCls)('date2d-cal__month', {
        'selected': selectedMonth === index,
        'disabled': checkDisabledMonth(year, index)
      }),
      key: month + index,
      onClick: function onClick() {
        handleMonthChange(index);
      }
    }, month);
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('date2d-cal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded', {
      'active': winYear
    })
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d-cal__year-container bg-body-tertiary"
  }, yearsArray.map(function (year, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      "data-year": year,
      className: (0,cls.combinedCls)('date2d-cal__year', {
        'selected': selectedYear === year,
        'disabled': checkDisabledYear(year)
      }),
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
    className: (0,cls.combinedCls)('date2d-cal__btn date2d-cal__btn--today', {
      'disabled': currentMaxDateDisabled || currentMinDateDisabled
    }),
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
var _excluded = ["contentRef", "popupRef", "depth", "triggerClassName", "popupClassName", "wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "enableEntireAreaPopup", "delimiter", "hideClearButton", "showToolsWhenHover", "offset", "exceededSidePosOffset", "localization", "type", "onlyTime", "truncateSeconds", "valueUseSlash", "disabled", "required", "readOnly", "defaultValue", "value", "clickInitValue", "min", "max", "placeholder", "label", "units", "name", "alt", "id", "iconLeft", "iconRight", "autoComplete", "style", "tabIndex", "onLoad", "onChange", "onBlur", "onFocus", "onPressEnter", "onOpenPopup", "onClosePopup", "onChangeDate", "onChangeMonth", "onChangeYear", "onChangeToday", "onChangeHours", "onChangeMinutes", "onChangeSeconds", "onClear", "langHoursTitle", "langMinutesTitle", "langSecondsTitle", "langWeek", "langWeekFull", "langMonths", "langMonthsFull", "langToday"];
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


var src_Date = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    popupRef = props.popupRef,
    depth = props.depth,
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
    defaultValue = props.defaultValue,
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
    onClear = props.onClear,
    langHoursTitle = props.langHoursTitle,
    langMinutesTitle = props.langMinutesTitle,
    langSecondsTitle = props.langSecondsTitle,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    attributes = _objectWithoutProperties(props, _excluded);
  var DEPTH = depth || 1055; // the default value same as bootstrap
  var defaultValueIsEmpty = function defaultValueIsEmpty(s) {
    return typeof s === 'undefined' || s === null || s === 'null' || s === '';
  };

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
  var uniqueID = useComId_default()();
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
  var onlyHHmm = function onlyHHmm(str) {
    // match HH:mm
    var timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(str);
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
      control: function control() {
        return getAllSplittingInputs();
      },
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
        var _getActualDefaultValu = getActualDefaultValue(value, true),
          _getActualDefaultValu2 = src_slicedToArray(_getActualDefaultValu, 3),
          curInitSplitClickEvOk = _getActualDefaultValu2[0],
          curNoTargetVal = _getActualDefaultValu2[1],
          curTargetVal = _getActualDefaultValu2[2];
        setDateDefaultValueExist(defaultValueIsEmpty(value) ? false : true);
        initValue(curTargetVal);
        cb === null || cb === void 0 ? void 0 : cb();
      }
    };
  }, [contentRef]);

  // click outside
  useClickOutside_default()({
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
    if (typeof v === 'string' && !(0,cjs_date.isValidDate)(v)) {
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
    var date = (0,cjs_date.dateFormat)(v);
    var year = date.getFullYear();
    var month = (0,cjs_date.padZero)(date.getMonth() + 1, padZeroEnabled);
    var day = (0,cjs_date.padZero)(date.getDate(), padZeroEnabled);
    var hours = (0,cjs_date.padZero)(date.getHours(), padZeroEnabled);
    var minutes = (0,cjs_date.padZero)(date.getMinutes(), padZeroEnabled);
    var seconds = (0,cjs_date.padZero)(date.getSeconds(), padZeroEnabled);
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
  var MIN = typeof min !== 'undefined' && min !== '' && min !== null && (0,cjs_date.isValidDate)(min) ? getFullTimeData(min) : '';
  var MAX = typeof max !== 'undefined' && max !== '' && max !== null && (0,cjs_date.isValidDate)(max) ? getFullTimeData(max) : '';
  var getActualDefaultValue = function getActualDefaultValue(v) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _v = getFullTimeData((0,cjs_date.getNow)());
    var _nowVal = "".concat(_v.date, " ").concat(_v.hours, ":").concat(_v.minutes, ":").concat(_v.seconds);

    // expected default value (only HH:mm:ss)
    var _expectedValue = (0,cjs_date.isTimeString)(v) || onlyHHmm(v) ? "".concat(_v.date, " ").concat(onlyHHmm(v) ? v + ':00' : v) : v;
    if (!init) setInitSplitClickEvOk(true);
    if (!initSplitClickEvOk) {
      var noTargetVal = typeof clickInitValue === 'undefined' || clickInitValue === null || clickInitValue === 'null' || clickInitValue === '';
      if (!defaultValueIsEmpty(v)) {
        noTargetVal = true;
      }

      //
      var targetVal = noTargetVal ? defaultValueIsEmpty(v) ? _nowVal : _expectedValue : clickInitValue;
      if (typeof v === 'undefined') {
        targetVal = noTargetVal ? _nowVal : clickInitValue;
      }

      //
      return [false, noTargetVal, targetVal];
    } else {
      var _targetVal = defaultValueIsEmpty(v) ? _nowVal : _expectedValue;
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
    var _getAbsolutePositionO = (0,getElementProperty.getAbsolutePositionOfStage)(_triggerRef),
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
    if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {
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
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, val, (0,cjs_date.isValidDate)(val), getAllSplittingInputs());
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
    _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
    var v = (0,cjs_date.isValidDate)(inputData) ? inputData : "".concat(getFullTimeData((0,cjs_date.getNow)()).date, " ").concat(inputData);
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
    if ((0,cjs_date.isValidDate)(v)) {
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
    var _getActualDefaultValu3 = getActualDefaultValue(value, true),
      _getActualDefaultValu4 = src_slicedToArray(_getActualDefaultValu3, 3),
      curInitSplitClickEvOk = _getActualDefaultValu4[0],
      curNoTargetVal = _getActualDefaultValu4[1],
      curTargetVal = _getActualDefaultValu4[2];
    setDateDefaultValueExist(defaultValueIsEmpty(value) ? false : true);
    var _initValue = initValue(curTargetVal),
      _initValue2 = src_slicedToArray(_initValue, 2),
      a = _initValue2[0],
      b = _initValue2[1];
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(a, getFullTimeData(b), getAllSplittingInputs());
  }, [value]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update default value (It does not re-render the component because the incoming value changes.)
    //--------------
    if (typeof defaultValue !== 'undefined') {
      //REQUIRED
      var _getActualDefaultValu5 = getActualDefaultValue(defaultValue, true),
        _getActualDefaultValu6 = src_slicedToArray(_getActualDefaultValu5, 3),
        curInitSplitClickEvOk = _getActualDefaultValu6[0],
        curNoTargetVal = _getActualDefaultValu6[1],
        curTargetVal = _getActualDefaultValu6[2];
      setDateDefaultValueExist(defaultValueIsEmpty(defaultValue) ? false : true);
      var _initValue3 = initValue(curTargetVal),
        _initValue4 = src_slicedToArray(_initValue3, 2),
        a = _initValue4[0],
        b = _initValue4[1];
      onLoad === null || onLoad === void 0 ? void 0 : onLoad(a, getFullTimeData(b), getAllSplittingInputs());
    }
  }, []);
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
    className: (0,cls.combinedCls)('date2d__trigger d-inline-block', "is-".concat(type), triggerClassName, {
      'date2d__trigger--hover-show-tools': SHOW_TOOLS_ENABLED
    }),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyPressed,
    onClick: enableEntireAreaPopup ? handleShow : function () {}
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "date2d__control"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), _extends({
    ref: function ref(node) {
      inputRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
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
        if (_val !== '' && !(0,cjs_date.isValidYear)(_val) && (0,math.isNumeric)(_val) && Number(_val) > 9999) _val = '9999';
        if (_val !== '' && !(0,cjs_date.isValidYear)(_val) && !(0,math.isNumeric)(_val)) _val = "".concat((0,cjs_date.getCurrentYear)());
        var _date = "".concat(_val, "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
        if (_val !== '' && !(0,cjs_date.isValidMonth)(_val) && (0,math.isNumeric)(_val)) {
          if (Number(_val) > 12) _val = '12';
          if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
        }
        if (_val !== '' && !(0,cjs_date.isValidMonth)(_val) && !(0,math.isNumeric)(_val)) _val = "".concat((0,cjs_date.getCurrentMonth)());
        var _date = "".concat(splitVals[0], "-").concat(_val, "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
        var d = (0,cjs_date.getLastDayInMonth)(_day, new window.Date(_day).getMonth() + 1);
        if (_val !== '' && (0,cjs_date.isValidDay)(_val) && (0,math.isNumeric)(_val)) {
          if (Number(_val) > Number(d)) _val = "".concat(d);
        }
        if (_val !== '' && !(0,cjs_date.isValidDay)(_val) && (0,math.isNumeric)(_val)) {
          if (Number(_val) > Number(d)) _val = "".concat(d);
          if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
        }
        if (_val !== '' && !(0,cjs_date.isValidDay)(_val) && !(0,math.isNumeric)(_val)) _val = "".concat((0,cjs_date.getCurrentDay)());
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(_val);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
        if (_val !== '' && !(0,cjs_date.isValidHours)(_val) && (0,math.isNumeric)(_val) && Number(_val) > 23) _val = '23';
        if (_val !== '' && !(0,cjs_date.isValidHours)(_val) && !(0,math.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(_val, ":").concat(splitVals[4], ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
        if (_val !== '' && !(0,cjs_date.isValidMinutesAndSeconds)(_val) && (0,math.isNumeric)(_val) && Number(_val) > 59) _val = '59';
        if (_val !== '' && !(0,cjs_date.isValidMinutesAndSeconds)(_val) && !(0,math.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(_val, ":").concat(splitVals[5]);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
        if (_val !== '' && !(0,cjs_date.isValidMinutesAndSeconds)(_val) && (0,math.isNumeric)(_val) && Number(_val) > 59) _val = '59';
        if (_val !== '' && !(0,cjs_date.isValidMinutesAndSeconds)(_val) && !(0,math.isNumeric)(_val)) _val = '00';
        var _date = "".concat(splitVals[0], "-").concat(splitVals[1], "-").concat(splitVals[2]);
        var _full = "".concat(_date, " ").concat(splitVals[3], ":").concat(splitVals[4], ":").concat(_val);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(inputRef.current, valueResConverter(_full), (0,cjs_date.isValidDate)(_full), getAllSplittingInputs());
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
    className: (0,cls.combinedCls)('date2d__control-tools', {
      'date2d__control-tools--hover-show-tools': SHOW_TOOLS_ENABLED
    })
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: -1,
    href: "#",
    className: (0,cls.combinedCls)('date2d__control-tools__close', {
      'd-none': HIDE_CLEAR_BTN_ENABLED || !dateDefaultValueExist
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation(); // Avoid triggering pop-ups

      clearAll();
      onClear === null || onClear === void 0 ? void 0 : onClear(getFullTimeData(''));
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
    containerClassName: (0,cls.combinedCls)('Date', "Date--".concat(type))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({
    ref: modalRef,
    id: "date2d__wrapper-".concat(idRes),
    className: (0,cls.combinedCls)('date2d__wrapper', "is-".concat(type), popupClassName, 'active'),
    style: {
      display: 'none',
      zIndex: DEPTH
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
      className: (0,cls.combinedCls)({
        'selected': timeVal[0] == hour,
        'disabled': checkDisabledHours(_curVal.year, Number(_curVal.month) - 1, _curVal.day, hour)
      })
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
      className: (0,cls.combinedCls)({
        'selected': timeVal[1] == v,
        'disabled': checkDisabledMinutes(_curVal.year, Number(_curVal.month) - 1, _curVal.day, _curVal.hours, v)
      })
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
      className: (0,cls.combinedCls)({
        'selected': timeVal[2] == v,
        'disabled': checkDisabledSeconds(_curVal.year, Number(_curVal.month) - 1, _curVal.day, _curVal.hours, _curVal.minutes, v)
      })
    }, v));
  })))) : null) : null))));
});
/* harmony default export */ const src = (src_Date);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});