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

/***/ 962:
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
      var __webpack_modules__ = {
        /***/85: /***/function _(module, exports, __nested_webpack_require_1079__) {
          /* module decorator */module = __nested_webpack_require_1079__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_1079__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_1079__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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
      function __nested_webpack_require_9547__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_9547__);
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
        /******/__nested_webpack_require_9547__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_9547__.d(getter, {
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
        /******/__nested_webpack_require_9547__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_9547__.o(definition, key) && !__nested_webpack_require_9547__.o(exports, key)) {
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
        /******/__nested_webpack_require_9547__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_9547__.r = function (exports) {
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
        /******/__nested_webpack_require_9547__.nmd = function (module) {
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

        __nested_webpack_require_9547__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_9547__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_9547__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_9547__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_9547__(85);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_9547__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
        var _excluded = ["wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "appearance", "isSearchInput", "readOnly", "disabled", "required", "placeholder", "value", "label", "name", "units", "iconLeft", "iconRight", "minLength", "maxLength", "btnId", "id", "icon", "autoComplete", "autoCapitalize", "spellCheck", "style", "tabIndex", "onClick", "onKeyPressedCallback", "onSubmit", "onChange", "onBlur", "onFocus", "onPressEnter"];
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
        var SearchBar = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
          var wrapperClassName = props.wrapperClassName,
            controlClassName = props.controlClassName,
            controlExClassName = props.controlExClassName,
            controlGroupWrapperClassName = props.controlGroupWrapperClassName,
            controlGroupTextClassName = props.controlGroupTextClassName,
            appearance = props.appearance,
            isSearchInput = props.isSearchInput,
            readOnly = props.readOnly,
            disabled = props.disabled,
            required = props.required,
            placeholder = props.placeholder,
            value = props.value,
            label = props.label,
            name = props.name,
            units = props.units,
            iconLeft = props.iconLeft,
            iconRight = props.iconRight,
            minLength = props.minLength,
            maxLength = props.maxLength,
            btnId = props.btnId,
            id = props.id,
            icon = props.icon,
            autoComplete = props.autoComplete,
            autoCapitalize = props.autoCapitalize,
            spellCheck = props.spellCheck,
            style = props.style,
            tabIndex = props.tabIndex,
            onClick = props.onClick,
            onKeyPressedCallback = props.onKeyPressedCallback,
            onSubmit = props.onSubmit,
            onChange = props.onChange,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            onPressEnter = props.onPressEnter,
            attributes = _objectWithoutProperties(props, _excluded);
          var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
          var idRes = id || uniqueID;
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
            _useState2 = _slicedToArray(_useState, 2),
            changedVal = _useState2[0],
            setChangedVal = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState4 = _slicedToArray(_useState3, 2),
            onComposition = _useState4[0],
            setOnComposition = _useState4[1];
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
          function handleClick(event) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
          }
          function handleSubmit(event) {
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(event);
          }
          function handleFocus(event) {
            var _rootRef$current;
            (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('focus');

            //
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(event, onComposition);
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
            onChange === null || onChange === void 0 ? void 0 : onChange(event, onComposition);
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
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event, onComposition);
          }
          function handleKeyPressed(event) {
            if (typeof onKeyPressedCallback === 'function') {
              var newData = onKeyPressedCallback(event);
              if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
            }

            if (event.code == "Enter") {
              // DO NOT USE "preventDefault()"
              onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event, onComposition);
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
          }, iconLeft)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: externalRef,
            tabIndex: tabIndex || 0,
            type: isSearchInput ? 'search' : 'text',
            className: "".concat(appearance === 'pill' ? "".concat(controlClassName || controlClassName === '' ? controlClassName : "form-control", " border rounded-pill") : controlClassName || controlClassName === '' ? controlClassName : "form-control", " ").concat(controlExClassName || ''),
            id: idRes,
            name: name,
            placeholder: placeholder || '',
            value: changedVal,
            minLength: minLength || null,
            maxLength: maxLength || null,
            autoComplete: typeof autoComplete === 'undefined' ? 'off' : autoComplete,
            autoCapitalize: typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize,
            spellCheck: typeof spellCheck === 'undefined' ? false : spellCheck,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onClick: handleClick,
            onKeyDown: handleKeyPressed,
            onCompositionStart: handleComposition,
            onCompositionUpdate: handleComposition,
            onCompositionEnd: handleComposition,
            disabled: disabled || null,
            readOnly: readOnly || null,
            required: required || null,
            style: style
          }, attributes)), propExist(units) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, units)) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: controlGroupTextClassName || "input-group-text"
          }, iconRight)) : null, icon || icon !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: appearance === 'pill' ? 'position-absolute end-0' : 'input-group-text m-0 p-0 border-start-0',
            style: appearance === 'pill' ? {
              zIndex: 5
            } : {}
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
            id: btnId,
            type: "button",
            className: appearance === 'pill' ? 'btn border-end-0 rounded-pill' : 'btn btn-sm',
            onClick: handleSubmit
          }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, icon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
            width: "1.2em",
            height: "1.2em",
            fill: "#333",
            viewBox: "0 0 16 16"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
            d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
            fillRule: "evenodd"
          })))))) : null)));
        });
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = SearchBar;
      })();

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

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 186:
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
        /* harmony export */"isJSON": function isJSON() {
          return (/* binding */_isJSON
          );
        },
        /* harmony export */"isValidNumeric": function isValidNumeric() {
          return (/* binding */_isValidNumeric
          );
        },
        /* harmony export */"setDefaultOptions": function setDefaultOptions() {
          return (/* binding */_setDefaultOptions
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

/***/ 499:
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
        /***/318: /***/function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1139__) {
          /* harmony export */__nested_webpack_require_1139__.d(__webpack_exports__, {
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

          /***/
        },

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
      function __nested_webpack_require_3331__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_3331__);
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
        /******/__nested_webpack_require_3331__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_3331__.d(getter, {
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
        /******/__nested_webpack_require_3331__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_3331__.o(definition, key) && !__nested_webpack_require_3331__.o(exports, key)) {
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
        /******/__nested_webpack_require_3331__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_3331__.r = function (exports) {
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
        __nested_webpack_require_3331__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_3331__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3331__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_3331__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _libs_performance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3331__(318);
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
          var enabled = _ref.enabled,
            performance = _ref.performance,
            handle = _ref.handle;
          var windowScrollUpdate;
          var _performance = _slicedToArray(performance, 2),
            performanceName = _performance[0],
            performanceLimit = _performance[1];
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
              x: 0,
              y: 0
            }),
            _useState2 = _slicedToArray(_useState, 2),
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
          if (performanceName === "debounce") windowScrollUpdate = (0, _libs_performance__WEBPACK_IMPORTED_MODULE_1__.debounce)(eventHandlerScroll, parseFloat(performanceLimit));
          if (performanceName === "throttle") windowScrollUpdate = (0, _libs_performance__WEBPACK_IMPORTED_MODULE_1__.throttle)(eventHandlerScroll, parseFloat(performanceLimit));
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
        var __WEBPACK_DEFAULT_EXPORT__ = useWindowScroll;
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_root_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(909);
/* harmony import */ var funda_root_portal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_root_portal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(962);
/* harmony import */ var funda_searchbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_searchbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var funda_utils_dist_cjs_initDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony import */ var funda_utils_dist_cjs_initDefaultOptions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_initDefaultOptions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(499);
/* harmony import */ var funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var funda_utils_dist_cjs_useClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(761);
/* harmony import */ var funda_utils_dist_cjs_useClickOutside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useClickOutside__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var funda_utils_dist_cjs_getElementProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(767);
/* harmony import */ var funda_utils_dist_cjs_getElementProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_getElementProperty__WEBPACK_IMPORTED_MODULE_8__);
var _excluded = ["contentRef", "popupRef", "wrapperClassName", "controlClassName", "controlExClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "exceededSidePosOffset", "appearance", "isSearchInput", "allowSpacingRetrive", "readOnly", "disabled", "required", "placeholder", "noMatchPopup", "options", "value", "label", "name", "units", "iconLeft", "iconRight", "minLength", "maxLength", "id", "autoComplete", "autoCapitalize", "spellCheck", "icon", "btnId", "fetchTrigger", "hideIcon", "depth", "style", "winWidth", "tabIndex", "data", "autoShowOptions", "fetchNoneInfo", "fetchUpdate", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onClick", "onFetch", "onChange", "onKeyboardInput", "onBlur", "onPressEnter"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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









var LiveSearch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    popupRef = props.popupRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlExClassName = props.controlExClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
    exceededSidePosOffset = props.exceededSidePosOffset,
    appearance = props.appearance,
    isSearchInput = props.isSearchInput,
    allowSpacingRetrive = props.allowSpacingRetrive,
    readOnly = props.readOnly,
    disabled = props.disabled,
    required = props.required,
    placeholder = props.placeholder,
    noMatchPopup = props.noMatchPopup,
    options = props.options,
    value = props.value,
    label = props.label,
    name = props.name,
    units = props.units,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    minLength = props.minLength,
    maxLength = props.maxLength,
    id = props.id,
    autoComplete = props.autoComplete,
    autoCapitalize = props.autoCapitalize,
    spellCheck = props.spellCheck,
    icon = props.icon,
    btnId = props.btnId,
    fetchTrigger = props.fetchTrigger,
    hideIcon = props.hideIcon,
    depth = props.depth,
    style = props.style,
    winWidth = props.winWidth,
    tabIndex = props.tabIndex,
    data = props.data,
    autoShowOptions = props.autoShowOptions,
    fetchNoneInfo = props.fetchNoneInfo,
    fetchUpdate = props.fetchUpdate,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    fetchCallback = props.fetchCallback,
    onClick = props.onClick,
    onFetch = props.onFetch,
    onChange = props.onChange,
    onKeyboardInput = props.onKeyboardInput,
    onBlur = props.onBlur,
    _onPressEnter = props.onPressEnter,
    attributes = _objectWithoutProperties(props, _excluded);
  var DEPTH = depth || 1055; // the default value same as bootstrap
  var POS_OFFSET = 0;
  var EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
  var EMPTY_FOR_FETCH = typeof autoShowOptions === 'undefined' || autoShowOptions === false ? false : true;
  var NO_MATCH_POPUP = typeof noMatchPopup === 'undefined' ? true : noMatchPopup;
  var WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_3___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var listContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var optionsRes = options ? (0,funda_utils_dist_cjs_initDefaultOptions__WEBPACK_IMPORTED_MODULE_4__.isJSON)(options) ? JSON.parse(options) : options : [];

  // return a array of options
  var staticOptionsData = optionsRes;

  //
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    firstFetch = _useState2[0],
    setFirstFetch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(staticOptionsData),
    _useState4 = _slicedToArray(_useState3, 2),
    dataInit = _useState4[0],
    setOrginalDataInit = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    orginalData = _useState6[0],
    setOrginalData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
    _useState8 = _slicedToArray(_useState7, 2),
    changedVal = _useState8[0],
    setChangedVal = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isOpen = _useState10[0],
    setIsOpen = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    hasErr = _useState12[0],
    setHasErr = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    componentFirstLoad = _useState14[0],
    setComponentFirstLoad = _useState14[1];

  //performance
  var handleChangeFetchSafe = funda_utils_dist_cjs_useDebounce__WEBPACK_IMPORTED_MODULE_7___default()(function (e) {
    handleChange(e);
  }, 350, [dataInit]);

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(popupRef, function () {
    return {
      close: function close() {
        setIsOpen(false);
        cancel();
      }
    };
  }, [popupRef]);

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
    return {
      control: function control() {
        return inputRef.current;
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

  // click outside
  funda_utils_dist_cjs_useClickOutside__WEBPACK_IMPORTED_MODULE_6___default()({
    enabled: isOpen && rootRef.current && listRef.current,
    isOutside: function isOutside(event) {
      // close dropdown when other dropdown is opened
      return rootRef.current !== event.target && !rootRef.current.contains(event.target) && listRef.current !== event.target && !listRef.current.contains(event.target);
    },
    handle: function handle(event) {
      // cancel
      setIsOpen(false);
      cancel();
    }
  }, [isOpen, rootRef, listRef]);

  // Add function to the element that should be used as the scrollable area.
  var _useWindowScroll = funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_5___default()({
      performance: ['debounce', 500],
      // "['debounce', 500]" or "['throttle', 500]"
      handle: function handle(scrollData) {
        popwinPosInit(false);
      }
    }),
    _useWindowScroll2 = _slicedToArray(_useWindowScroll, 2),
    scrollData = _useWindowScroll2[0],
    windowScrollUpdate = _useWindowScroll2[1];
  function popwinPosInit() {
    var showAct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (listContentRef.current === null || rootRef.current === null || inputRef.current === null) return;
    var contentHeightOffset = 80;
    var contentMaxHeight = 0;

    // update modal position
    var _modalRef = document.querySelector("#livesearch__options-wrapper-".concat(idRes));
    var _triggerRef = inputRef.current;
    var _triggerXaxisRef = rootRef.current;

    // console.log(getAbsolutePositionOfStage(_triggerRef));

    if (_modalRef === null) return;
    var _getAbsolutePositionO = (0,funda_utils_dist_cjs_getElementProperty__WEBPACK_IMPORTED_MODULE_8__.getAbsolutePositionOfStage)(_triggerXaxisRef),
      x = _getAbsolutePositionO.x;
    var _getAbsolutePositionO2 = (0,funda_utils_dist_cjs_getElementProperty__WEBPACK_IMPORTED_MODULE_8__.getAbsolutePositionOfStage)(_triggerRef),
      y = _getAbsolutePositionO2.y,
      width = _getAbsolutePositionO2.width,
      height = _getAbsolutePositionO2.height;
    var _triggerBox = _triggerRef.getBoundingClientRect();
    var targetPos = '';

    // STEP 1:
    //-----------
    // display wrapper
    if (showAct) _modalRef.classList.add('active');

    // STEP 2:
    //-----------
    // Detect position
    if (window.innerHeight - _triggerBox.top > 100) {
      targetPos = 'bottom';
    } else {
      targetPos = 'top';
    }
    if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;

    // STEP 3:
    //-----------
    // Detect content MAX HEIGHT and ACTUAL HEIGHT
    var _contentBox = listContentRef.current.getBoundingClientRect();
    var _contentActualHeight = listContentRef.current.querySelector('.livesearch__options-contentlist-inner').clientHeight;
    if (targetPos === 'top') {
      contentMaxHeight = _triggerBox.top;
      if (_contentBox.height > _contentActualHeight) {
        if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
      } else {
        if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

        // recalculate the height
        _contentBox = listContentRef.current.getBoundingClientRect();
        if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = contentMaxHeight - contentHeightOffset + 'px';
      }
    }
    if (targetPos === 'bottom') {
      contentMaxHeight = window.innerHeight - _triggerBox.bottom;
      if (_contentBox.height > _contentActualHeight) {
        if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
      } else {
        if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

        // recalculate the height
        _contentBox = listContentRef.current.getBoundingClientRect();
        if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = contentMaxHeight - 10 + 'px';
      }
    }

    // STEP 4:
    //-----------
    // Adjust position
    if (targetPos === 'top') {
      _modalRef.style.left = x + 'px';
      //_modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
      _modalRef.style.top = 'auto';
      _modalRef.style.bottom = window.innerHeight - _triggerBox.top + POS_OFFSET + 2 + 'px';
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

    // STEP 5:
    //-----------
    // Determine whether it exceeds the far right or left side of the screen
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
    }
  }

  function popwinPosHide() {
    var _modalRef = document.querySelector("#livesearch__options-wrapper-".concat(idRes));
    if (_modalRef !== null && listContentRef.current !== null) {
      // remove classnames and styles
      _modalRef.classList.remove('active');
      listContentRef.current.style.removeProperty('height');

      // remove data-* attibutes
      popwinContainerHeightReset();
    }
  }
  function popwinContainerHeightReset() {
    if (listContentRef.current === null) return;

    // remove data-* attibutes
    listContentRef.current.removeAttribute('data-height');
    listContentRef.current.removeAttribute('data-pos');
  }

  //
  function matchData() {
    return _matchData.apply(this, arguments);
  }
  function _matchData() {
    _matchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var val,
        query,
        emptyValShowAll,
        res,
        filterRes,
        _oparams,
        _params,
        response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            val = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            query = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            emptyValShowAll = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            res = [];
            filterRes = function filterRes(data) {
              return data.filter(function (item) {
                // Avoid fatal errors causing page crashes
                var _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';
                var _val = typeof val !== 'undefined' && val !== null ? val : '';
                if (emptyValShowAll && val === '') {
                  return true;
                }
                if (allowSpacingRetrive && val == ' ') {
                  return true;
                }
                if ((_queryString.split(',').some(function (l) {
                  return l.charAt(0) === _val.toLowerCase();
                }) || _queryString.split(',').some(function (l) {
                  return l.replace(/ /g, '').indexOf(_val.toLowerCase()) >= 0;
                }) || item.label.toLowerCase().indexOf(_val.toLowerCase()) >= 0) && _val != '') {
                  return true;
                } else {
                  return false;
                }
              });
            };
            if (!query) {
              _context.next = 15;
              break;
            }
            _oparams = fetchFuncMethodParams || [];
            _params = _oparams.map(function (item) {
              return item !== '$QUERY_STRING' ? item : val;
            });
            _context.next = 10;
            return fetchData(_params.join(','));
          case 10:
            response = _context.sent;
            res = filterRes(response);
            return _context.abrupt("return", res);
          case 15:
            res = filterRes(dataInit);
            return _context.abrupt("return", res);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _matchData.apply(this, arguments);
  }
  function handleChange(e) {
    var val = e.target.value;
    setChangedVal(val);

    //
    if (!fetchTrigger) {
      matchData(val, fetchUpdate, EMPTY_FOR_FETCH).then(function (response) {
        setOrginalData(response);

        //
        onChange === null || onChange === void 0 ? void 0 : onChange(inputRef.current, response, '', listRef.current);

        //
        setIsOpen(true);

        // window position
        setTimeout(function () {
          popwinPosInit();
        }, 0);
      });
    } else {
      //
      onChange === null || onChange === void 0 ? void 0 : onChange(inputRef.current, orginalData, '', listRef.current);

      // window position
      setTimeout(function () {
        popwinPosInit();
      }, 0);
    }
  }
  function cancel() {
    setOrginalData([]);
    popwinPosHide();
  }
  function fetchData(_x2) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var response, _ORGIN_DATA;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context2.next = 13;
              break;
            }
            _context2.next = 3;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 3:
            response = _context2.sent;
            _ORGIN_DATA = response.data; // reset data structure
            if (typeof fetchCallback === 'function') {
              _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);

            //
            setOrginalDataInit(_ORGIN_DATA);

            //
            // window position
            if (componentFirstLoad) {
              setTimeout(function () {
                popwinPosInit();
              }, 500);
            }
            return _context2.abrupt("return", _ORGIN_DATA);
          case 13:
            return _context2.abrupt("return", []);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchData.apply(this, arguments);
  }
  function handleSelect(_x3) {
    return _handleSelect.apply(this, arguments);
  }
  function _handleSelect() {
    _handleSelect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el) {
      var dataInput,
        _data,
        _curData,
        _data2,
        res,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dataInput = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
            if (!(typeof el === 'undefined')) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            if (!dataInput) {
              _context3.next = 9;
              break;
            }
            _data = JSON.parse(dataInput);
            onChange === null || onChange === void 0 ? void 0 : onChange(inputRef.current, orginalData, _data, listRef.current);
            setChangedVal(_data.label);
            _context3.next = 21;
            break;
          case 9:
            _curData = typeof el.target !== 'undefined' ? el.target.dataset.itemdata : el.dataset.itemdata;
            _data2 = JSON.parse(_curData);
            res = [];
            if (EMPTY_FOR_FETCH) {
              _context3.next = 18;
              break;
            }
            _context3.next = 15;
            return matchData(inputRef.current.value, false, EMPTY_FOR_FETCH);
          case 15:
            res = _context3.sent;
            _context3.next = 19;
            break;
          case 18:
            res = dataInit;
          case 19:
            onChange === null || onChange === void 0 ? void 0 : onChange(inputRef.current, res, _data2, listRef.current);
            setChangedVal(_data2.label);
          case 21:
            // cancel
            setIsOpen(false);
            cancel();
          case 23:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _handleSelect.apply(this, arguments);
  }
  function handleFetch() {
    return _handleFetch.apply(this, arguments);
  }
  function _handleFetch() {
    _handleFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!fetchTrigger) {
              _context4.next = 7;
              break;
            }
            _context4.next = 3;
            return matchData(changedVal, fetchUpdate, EMPTY_FOR_FETCH);
          case 3:
            res = _context4.sent;
            setOrginalData(res);

            //
            setIsOpen(res.length === 0 ? true : false);

            // window position
            setTimeout(function () {
              popwinPosInit();
            }, 0);
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _handleFetch.apply(this, arguments);
  }
  function handleClick() {
    if (!isOpen) {
      if (EMPTY_FOR_FETCH) {
        setOrginalData(dataInit);
        setIsOpen(true);
      }

      // window position
      setTimeout(function () {
        popwinPosInit();
      }, 0);
    } else {
      // cancel
      setIsOpen(false);
      cancel();
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(inputRef.current, listRef.current);
  }
  function handleBlur(e) {
    setIsOpen(false);
    if (!fetchTrigger) {
      setTimeout(function () {
        //
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(inputRef.current, listRef.current);

        //
        cancel();
      }, 300);
    }
  }
  function handleMouseLeaveTrigger() {
    setIsOpen(false);
  }
  function optionFocus(type) {
    return new Promise(function (resolve) {
      // Determine the "active" class name to avoid listening to other unused components of the same type
      if (listRef.current === null || !rootRef.current.classList.contains('active')) return;
      var options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide)'));
      // Avoid selecting options that are disabled
      options = options.filter(function (options) {
        return !options.classList.contains('disabled');
      });
      var currentIndex = options.findIndex(function (e) {
        return e === listRef.current.querySelector('.list-group-item.active');
      });

      // get the next element in the list, "%" will loop around to 0
      var nextIndex;
      if (type === 'increase') {
        nextIndex = currentIndex + 1 % options.length;
      } else {
        nextIndex = (currentIndex < 0 ? options.length : currentIndex) - 1 % options.length;
      }

      //only one
      if (options.length === 1) nextIndex = 0;
      if (!isNaN(nextIndex)) {
        options.forEach(function (node, index) {
          node === null || node === void 0 ? void 0 : node.classList.remove('active');
        });
        var targetOption = options[nextIndex];
        if (typeof targetOption !== 'undefined' && !targetOption.classList.contains('no-match')) {
          targetOption.classList.add('active');
          resolve(targetOption);
        }
      }
    });
  }
  function handleKeyPressed(_x4) {
    return _handleKeyPressed.apply(this, arguments);
  }
  function _handleKeyPressed() {
    _handleKeyPressed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(event) {
      var key, res, currentData, _options;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            key = event.code;
            if (isOpen) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return");
          case 3:
            res = null;
            if (!(key === 'Enter' || key === 'NumpadEnter')) {
              _context5.next = 9;
              break;
            }
            event.preventDefault();

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if (!(listRef.current === null || !rootRef.current.classList.contains('active'))) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return");
          case 8:
            if (listRef.current !== null) {
              currentData = listRef.current.dataset.data;
              if (typeof currentData !== 'undefined') {
                handleSelect(null, currentData);

                //
                _options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.no-match)'));
                _options.forEach(function (node) {
                  node.classList.remove('active');
                });

                //
                onChange === null || onChange === void 0 ? void 0 : onChange(inputRef.current, _options.map(function (node) {
                  return JSON.parse(node.dataset.itemdata);
                }), JSON.parse(currentData), listRef.current);
              }
            }
          case 9:
            if (!(key === 'ArrowUp')) {
              _context5.next = 13;
              break;
            }
            _context5.next = 12;
            return optionFocus('decrease');
          case 12:
            res = _context5.sent;
          case 13:
            if (!(key === 'ArrowDown')) {
              _context5.next = 17;
              break;
            }
            _context5.next = 16;
            return optionFocus('increase');
          case 16:
            res = _context5.sent;
          case 17:
            // temporary data
            if (res !== null) listRef.current.dataset.data = JSON.stringify({
              value: res.dataset.value,
              label: res.dataset.label,
              queryString: res.dataset.querystring
            });
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _handleKeyPressed.apply(this, arguments);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Component first load
    //--------------
    if (!componentFirstLoad) {
      setComponentFirstLoad(true);
    }

    // update default value
    //--------------
    setChangedVal(value || '');

    // data init
    //--------------
    var _oparams = fetchFuncMethodParams || [];
    var _params = _oparams.map(function (item) {
      return item !== '$QUERY_STRING' ? item : fetchTrigger && !fetchUpdate ? '' : fetchUpdate ? '------' : fetchTrigger ? '------' : '';
    });
    if (!firstFetch) {
      fetchData(_params.join(','));
      setFirstFetch(true); // avoid triggering two data requests if the input value has not changed
    }
  }, [value, data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "livesearch__wrapper__label"
  }, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label"
  }, label))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: rootRef,
    className: "livesearch__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative', " ").concat(isOpen ? 'active' : ''),
    onMouseLeave: handleMouseLeaveTrigger,
    onKeyDown: handleKeyPressed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_searchbar__WEBPACK_IMPORTED_MODULE_2___default()), _extends({
    wrapperClassName: "",
    controlClassName: controlClassName,
    controlExClassName: controlExClassName,
    controlGroupWrapperClassName: controlGroupWrapperClassName,
    controlGroupTextClassName: controlGroupTextClassName,
    ref: function ref(node) {
      inputRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    value: changedVal,
    label: "",
    tabIndex: tabIndex,
    id: idRes,
    name: name,
    placeholder: placeholder,
    units: units,
    iconLeft: iconLeft,
    iconRight: iconRight,
    minLength: minLength,
    maxLength: maxLength,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    style: style,
    appearance: appearance,
    onChange: function onChange(e) {
      handleChangeFetchSafe(e);
    },
    onBlur: handleBlur,
    onSubmit: handleFetch,
    onClick: handleClick,
    icon: hideIcon ? '' : !fetchTrigger ? '' : icon,
    btnId: btnId,
    autoComplete: typeof autoComplete === 'undefined' ? 'off' : autoComplete,
    autoCapitalize: typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize,
    spellCheck: typeof spellCheck === 'undefined' ? false : spellCheck,
    isSearchInput: isSearchInput,
    onKeyPressedCallback: function onKeyPressedCallback(e) {
      onKeyboardInput === null || onKeyboardInput === void 0 ? void 0 : onKeyboardInput(e, inputRef.current, listRef.current);
    },
    onPressEnter: function onPressEnter(event, onComposition) {
      _onPressEnter === null || _onPressEnter === void 0 ? void 0 : _onPressEnter(event, onComposition);
    }
  }, attributes)), orginalData && !hasErr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_root_portal__WEBPACK_IMPORTED_MODULE_1___default()), {
    show: true,
    containerClassName: "LiveSearch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: listRef,
    id: "livesearch__options-wrapper-".concat(idRes),
    className: "livesearch__options-wrapper list-group position-absolute border shadow small ".concat(winWidth ? '' : '', " ").concat(orginalData && orginalData.length === 0 && !NO_MATCH_POPUP ? 'shadow-none border-0' : ''),
    style: {
      zIndex: DEPTH,
      width: WIN_WIDTH,
      display: 'none'
    },
    role: "tablist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "livesearch__options-contentlist rounded ".concat(orginalData && orginalData.length === 0 && !NO_MATCH_POPUP ? 'd-none' : ''),
    style: {
      backgroundColor: 'var(--bs-list-group-bg)'
    },
    ref: listContentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "livesearch__options-contentlist-inner"
  }, orginalData && orginalData.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "list-group-item list-group-item-action border-top-0 border-bottom-0 no-match livesearch__control-option-item--nomatch",
    disabled: true
  }, fetchNoneInfo || 'No match yet')) : null, orginalData ? orginalData.map(function (item, index) {
    var startItemBorder = index === 0 ? 'border-top-0' : '';
    var endItemBorder = index === orginalData.length - 1 ? 'border-bottom-0' : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      tabIndex: -1,
      type: "button",
      "data-index": index,
      key: index,
      className: "list-group-item list-group-item-action border-start-0 border-end-0 border-top-0 border-bottom-0 livesearch__control-option-item ".concat(startItemBorder, " ").concat(endItemBorder, " ").concat(typeof item.disabled === 'undefined' ? '' : item.disabled == true ? 'disabled' : ''),
      "data-value": "".concat(item.value),
      "data-label": "".concat(item.label),
      "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
      "data-itemdata": JSON.stringify(item),
      "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
      role: "tab",
      dangerouslySetInnerHTML: {
        __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
      },
      onClick: handleSelect
    });
  }) : null))))) : null, hideIcon ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !fetchTrigger ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "livesearch__wrapper-searchbtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "btn border-end-0 rounded-pill",
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "#a5a5a5",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  }))))) : null)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiveSearch);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});