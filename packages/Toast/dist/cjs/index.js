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
  "ToastProvider": () => (/* reexport */ ToastProvider),
  "useToast": () => (/* reexport */ useToast)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
var cjs = __webpack_require__(909);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/Item.tsx


;
var Item = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var depth = props.depth,
    index = props.index,
    isNew = props.isNew,
    uniqueID = props.uniqueID,
    onlyOne = props.onlyOne,
    title = props.title,
    note = props.note,
    theme = props.theme,
    message = props.message,
    lock = props.lock,
    cascading = props.cascading,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeDisabled = props.closeDisabled,
    autoCloseTime = props.autoCloseTime,
    evStart = props.evStart,
    evPause = props.evPause,
    evClose = props.evClose;
  var containerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var hideTitle = (title === '' || title === false) && (note === '' || note === false);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: containerRef,
    id: "toast-".concat(uniqueID),
    "data-toast-id": uniqueID,
    "data-new": isNew,
    "data-index": index,
    className: (0,cls.combinedCls)('toast-container', {
      'only-one': onlyOne
    }),
    style: cascading ? {
      transform: "perspective(100px) translateZ(-".concat(2 * index, "px) translateY(").concat(35 * index, "px)"),
      zIndex: depth
    } : {
      zIndex: depth
    },
    onMouseEnter: evPause,
    onMouseLeave: evStart
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)("toast fade show ".concat(theme ? "bg-".concat(theme) : ''), (0,cls.clsWrite)(schemeBody, '')),
    role: "alert"
  }, hideTitle ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('toast-header', (0,cls.clsWrite)(schemeHeader, ''))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("strong", {
    className: "me-auto"
  }, title === '' || title === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, title)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("small", {
    className: "text-muted"
  }, note === '' || note === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, note)), !lock ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    "data-close": "1",
    "data-index": index,
    tabIndex: -1,
    type: "button",
    className: "btn-close",
    onClick: function onClick(e) {
      evClose === null || evClose === void 0 ? void 0 : evClose(e, index, containerRef.current);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  }))) : null) : null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-body"
  }, message, hideTitle ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    "data-close": "1",
    "data-index": index,
    tabIndex: -1,
    type: "button",
    className: "btn-close position-absolute top-0 end-0 me-2 mt-2",
    onClick: function onClick(e) {
      evClose === null || evClose === void 0 ? void 0 : evClose(e, index, containerRef.current);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  }))) : null) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: externalRef,
    "data-progress-index": index,
    className: (0,cls.combinedCls)('progress active toast-progress', {
      'd-none': autoCloseTime === false
    }),
    role: "progressbar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "progress-bar"
  }))))));
});
/* harmony default export */ const src_Item = (Item);
;// CONCATENATED MODULE: ./src/Toast.tsx
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





var Toast = function Toast(_ref) {
  var data = _ref.data,
    defaultWrapperClassName = _ref.defaultWrapperClassName,
    defaultOnlyShowOne = _ref.defaultOnlyShowOne,
    defaultDirection = _ref.defaultDirection,
    defaultCascading = _ref.defaultCascading,
    defaultReverseDisplay = _ref.defaultReverseDisplay,
    onUpdate = _ref.onUpdate;
  var ANIM_SPEED = 300;
  var DEFAULT_AUTO_CLOSE_TIME = 3000;
  var uniqueID = useComId_default()();
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // action id
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    currentActionId = _useState2[0],
    setCurrentActionId = _useState2[1];

  // 追踪每个 toast 的动画状态
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Set()),
    _useState4 = _slicedToArray(_useState3, 2),
    animatedToasts = _useState4[0],
    setAnimatedToasts = _useState4[1];

  // force display
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    initPopRoot = _useState6[0],
    setInitPopRoot = _useState6[1];

  // Get the global configuration from the first toast item (if it exists)
  var firstToast = data[0] || {};

  // Use default values but allow individual toast overrides
  var wrapperClassName = firstToast.wrapperClassName || defaultWrapperClassName;
  var direction = firstToast.direction || defaultDirection;
  var cascadingEnabled = typeof firstToast.cascading !== 'undefined' ? firstToast.cascading : defaultCascading;
  var onlyShowOne = typeof firstToast.onlyShowOne !== 'undefined' ? firstToast.onlyShowOne : defaultOnlyShowOne;
  var reverseDisplay = typeof firstToast.reverseDisplay !== 'undefined' ? firstToast.reverseDisplay : defaultReverseDisplay;
  var depth = data.length + 1;

  // Processes the order of data based on the "direction" and "reverseDisplay" parameters
  var getProcessedData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    var processedData = _toConsumableArray(data);
    if ((direction !== null && direction !== void 0 && direction.startsWith('top-') || direction !== null && direction !== void 0 && direction.startsWith('vertical-')) && reverseDisplay) {
      processedData.reverse();
    } else if (direction !== null && direction !== void 0 && direction.startsWith('bottom-') && !reverseDisplay) {
      processedData.reverse();
    }

    // If only one is displayed, only the last one is returned
    return onlyShowOne ? [processedData[processedData.length - 1]] : processedData;
  }, [data, direction, reverseDisplay, onlyShowOne]);

  // Store the status of each toast
  var progressPausedRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var progressObjRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var progressIntervalRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var startProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (el, toastId, i) {
    // If the toast already has a timer running, do not add it again
    if (progressIntervalRef.current.has(toastId)) {
      return;
    }
    var currentToast = data[i];

    // progress animation
    var PROGRESS_TRANSITION_TIME = typeof currentToast.autoCloseTime === 'undefined' || currentToast.autoCloseTime === false ? DEFAULT_AUTO_CLOSE_TIME : currentToast.autoCloseTime;

    // init progress
    var progressCurrentChunk = 100 / (PROGRESS_TRANSITION_TIME / 100);
    el.firstChild.style.width = 100 + '%';
    el.firstChild.ariaValueNow = 100;

    // animation
    var intervalId = setInterval(function () {
      // console.log('toast setInterval');

      if (!progressPausedRef.current.get(toastId)) {
        var progPercent = 100 - progressCurrentChunk;
        el.firstChild.style.width = progPercent + '%';
        el.firstChild.ariaValueNow = progPercent;
        progressCurrentChunk++;

        //
        if (progPercent === 0 || progPercent < 1) {
          // may be 0.xxx
          el.classList.add('complete');

          // stop current animation
          stopProgressTimer(toastId);

          // hide toast item
          var currentItem = el.closest('.toast-container');
          handleClose(null, i, currentItem);
        }
      }
    }, PROGRESS_TRANSITION_TIME / 100);

    // Save the timer ID
    progressIntervalRef.current.set(toastId, intervalId);
  }, [data]);
  var clearAllProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    progressIntervalRef.current.forEach(function (timer, id) {
      if (timer) {
        clearInterval(timer);
        progressIntervalRef.current.set(id, null);
      }
    });
    progressIntervalRef.current.clear();
  }, []);
  var stopProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (toastId) {
    var timer = progressIntervalRef.current.get(toastId);
    if (timer) {
      clearInterval(timer);
      progressIntervalRef.current["delete"](toastId);
    }
  }, []);
  function handleProgressPaused(e) {
    var toastId = e.currentTarget.dataset.toastId;
    progressPausedRef.current.set(toastId, true);
  }
  function handleProgressStart(e) {
    var toastId = e.currentTarget.dataset.toastId;
    progressPausedRef.current.set(toastId, false);
  }
  function handleClose(e, index, currentItem) {
    if (typeof e !== 'undefined' && e !== null) e.preventDefault();
    if (rootRef.current === null) return;
    var curIndex = Number(index);
    var currentToast = data[curIndex];
    var toastId = currentToast.id;
    var _list = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
    currentItem.classList.add('hide-start');

    //Let the removed animation show
    setTimeout(function () {
      _list.forEach(function (node) {
        node.classList.remove('hide-start');
      });

      // remove current
      currentItem.classList.add('hide-end');

      // rearrange
      if (cascadingEnabled) {
        _list.filter(function (node) {
          return !node.classList.contains('hide-end');
        }).forEach(function (node, k) {
          node.style.transform = "perspective(100px) translateZ(-".concat(2 * k, "px) translateY(").concat(35 * k, "px)");
        });
      }

      // stop all animations or current animation
      stopProgressTimer(toastId);

      // close callback
      var currentToast = data[curIndex];
      if (currentToast.onClose) {
        currentToast.onClose(rootRef.current, curIndex, _list.filter(function (node) {
          return !node.classList.contains('hide-end');
        }));
      }

      // After the animation ends, remove the item from the data source
      if (onUpdate) {
        var newData = _toConsumableArray(data);
        newData.splice(curIndex, 1);
        onUpdate(newData);
      }
    }, ANIM_SPEED);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (initPopRoot) {
      var $toast = rootRef.current;
      if (!$toast) return;

      // When "onlyShowOne" is true, only the latest toast is kept
      //--------------
      if (onlyShowOne && data.length > 1) {
        // Clear all old timers
        data.slice(0, -1).forEach(function (toast, index) {
          stopProgressTimer(toast.id);
        });

        //Only keep the latest toast
        if (onUpdate) {
          onUpdate([data[data.length - 1]]);
        }
        return;
      }

      // Auto hide
      //--------------
      data.forEach(function (toast, i) {
        // auto close
        var AUTO_CLOSE_TIME = typeof toast.autoCloseTime === 'undefined' || toast.autoCloseTime === false ? false : toast.autoCloseTime;
        if (AUTO_CLOSE_TIME !== false) {
          var el = progressObjRef.current.get(toast.id);
          if (el) {
            startProgressTimer(el, toast.id, i);
          }
        }
      });
    }
  }, [data, initPopRoot, onlyShowOne]);

  // Handling animation when data changes
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (initPopRoot && data.length > 0) {
      // Add animation to the new toast
      var newToasts = data.filter(function (toast) {
        return !animatedToasts.has(toast.id);
      });
      if (newToasts.length > 0) {
        // Keep the new toast hidden first
        newToasts.forEach(function (toast) {
          var progressEl = progressObjRef.current.get(toast.id);
          if (progressEl) {
            var currentItem = progressEl.closest('.toast-container');
            currentItem.classList.add('animate-ready');
          }
        });

        // Use "requestAnimationFrame" to ensure the DOM is updated before adding animation classes
        requestAnimationFrame(function () {
          setTimeout(function () {
            newToasts.forEach(function (toast) {
              var progressEl = progressObjRef.current.get(toast.id);
              if (progressEl) {
                var currentItem = progressEl.closest('.toast-container');
                currentItem.classList.remove('animate-ready');
                currentItem.classList.add('animate-in');
              }
            });

            // Update the animated toast list
            setAnimatedToasts(function (prev) {
              var newSet = new Set(prev);
              newToasts.forEach(function (toast) {
                return newSet.add(toast.id);
              });
              return newSet;
            });
          }, 50); // A small delay ensures that animate-ready styles are applied
        });
      }
    }
  }, [data, initPopRoot]);

  // Monitor the currently displayed toast id
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (onlyShowOne && data.length > 0) {
      var latestToast = data[data.length - 1];
      setCurrentActionId(latestToast.actionId);
    } else if (data.length > 0) {
      var currentIds = data.map(function (toast) {
        return toast.actionId;
      });
      setCurrentActionId(currentIds[currentIds.length - 1]);
    } else {
      setCurrentActionId(null);
    }
  }, [data, onlyShowOne]);

  // The timer and data are emptied each time "useToast().show()" is executed
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (currentActionId === null || typeof currentActionId === 'undefined') return;
    if (onUpdate) {
      onUpdate([data[data.length - 1]]);
    }

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      clearAllProgressTimer();
    };
  }, [currentActionId]);

  // init
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setInitPopRoot(true);

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      clearAllProgressTimer();
    };
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    show: initPopRoot,
    containerClassName: "Toast"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    id: "toasts__wrapper-".concat(uniqueID),
    className: (0,cls.combinedCls)('toasts__wrapper', "toasts__wrapper--".concat(direction), (0,cls.clsWrite)(wrapperClassName, ''), {
      'toasts__wrapper--cascading': cascadingEnabled,
      'toasts__wrapper--only-one"': onlyShowOne
    }),
    ref: rootRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toasts"
  }, getProcessedData().map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Item, {
      ref: function ref(el) {
        return progressObjRef.current.set(item.id, el);
      },
      key: item.id,
      uniqueID: item.id,
      isNew: !progressObjRef.current.has(item.id) // Mark the new toast
      ,
      onlyOne: data.length === 1,
      depth: depth - i,
      index: i,
      title: item.title,
      note: item.note,
      theme: item.theme,
      lock: item.lock,
      cascading: cascadingEnabled,
      schemeBody: item.schemeBody,
      schemeHeader: item.schemeHeader,
      closeBtnColor: item.closeBtnColor,
      closeDisabled: item.closeDisabled,
      message: item.message,
      autoCloseTime: item.autoCloseTime,
      evStart: handleProgressStart,
      evPause: handleProgressPaused,
      evClose: handleClose
    });
  }))));
};
/* harmony default export */ const src_Toast = ((/* unused pure expression or super */ null && (Toast)));
;// CONCATENATED MODULE: ./src/ToastContext.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ToastContext_slicedToArray(arr, i) { return ToastContext_arrayWithHoles(arr) || ToastContext_iterableToArrayLimit(arr, i) || ToastContext_unsupportedIterableToArray(arr, i) || ToastContext_nonIterableRest(); }
function ToastContext_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ToastContext_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ToastContext_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ToastContext_toConsumableArray(arr) { return ToastContext_arrayWithoutHoles(arr) || ToastContext_iterableToArray(arr) || ToastContext_unsupportedIterableToArray(arr) || ToastContext_nonIterableSpread(); }
function ToastContext_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ToastContext_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ToastContext_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ToastContext_arrayLikeToArray(o, minLen); }
function ToastContext_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ToastContext_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ToastContext_arrayLikeToArray(arr); }
function ToastContext_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var defaultConfig = {
  defaultWrapperClassName: '',
  defaultOnlyShowOne: false,
  defaultDirection: 'bottom-center',
  defaultCascading: false,
  defaultReverseDisplay: false
};
var ToastContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(undefined);
var toastReducer = function toastReducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: [].concat(ToastContext_toConsumableArray(state.toasts), [action.payload])
      });
    case 'REMOVE_TOAST':
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: state.toasts.filter(function (toast) {
          return toast.id !== action.payload;
        })
      });
    case 'REMOVE_ALL':
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: []
      });
    case 'UPDATE_CONFIG':
      return _objectSpread(_objectSpread({}, state), {}, {
        config: _objectSpread(_objectSpread({}, state.config), action.payload)
      });
    default:
      return state;
  }
};
var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children,
    _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config;
  var _useReducer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(toastReducer, {
      toasts: [],
      config: _objectSpread(_objectSpread({}, defaultConfig), config)
    }),
    _useReducer2 = ToastContext_slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Toast, {
    data: state.toasts

    // default props
    ,
    defaultWrapperClassName: state.config.defaultWrapperClassName,
    defaultDirection: state.config.defaultDirection,
    defaultOnlyShowOne: state.config.defaultOnlyShowOne,
    defaultCascading: state.config.defaultCascading,
    defaultReverseDisplay: state.config.defaultReverseDisplay

    //
    ,
    onUpdate: function onUpdate(updatedData) {
      // Iterate through the current toasts and remove the toasts that are not in the "updatedData"
      state.toasts.forEach(function (toast) {
        if (!updatedData.find(function (item) {
          return item.id === toast.id;
        })) {
          dispatch({
            type: 'REMOVE_TOAST',
            payload: toast.id
          });
        }
      });
    }
  }));
};
var useToastContext = function useToastContext() {
  var context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
;// CONCATENATED MODULE: ./src/useToast.tsx
function useToast_typeof(obj) { "@babel/helpers - typeof"; return useToast_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useToast_typeof(obj); }
function useToast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function useToast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useToast_ownKeys(Object(source), !0).forEach(function (key) { useToast_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useToast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useToast_defineProperty(obj, key, value) { key = useToast_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function useToast_toPropertyKey(arg) { var key = useToast_toPrimitive(arg, "string"); return useToast_typeof(key) === "symbol" ? key : String(key); }
function useToast_toPrimitive(input, hint) { if (useToast_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (useToast_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var useToast = function useToast() {
  var _useToastContext = useToastContext(),
    state = _useToastContext.state,
    dispatch = _useToastContext.dispatch;
  var show = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (options) {
    var id = Math.random().toString(36).substring(2, 9);
    var toast = useToast_objectSpread({
      id: id,
      // Configure the interface globally, but overrides are allowed to be overridden by the instance configuration.
      wrapperClassName: state.config.defaultWrapperClassName,
      direction: state.config.defaultDirection,
      onlyShowOne: state.config.defaultOnlyShowOne,
      cascading: state.config.defaultCascading,
      reverseDisplay: state.config.defaultReverseDisplay
    }, options);
    dispatch({
      type: 'ADD_TOAST',
      payload: toast
    });
    return toast; // Returns the full toast object
  }, [dispatch, state.config]);
  var updateConfig = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (config) {
    dispatch({
      type: 'UPDATE_CONFIG',
      payload: config
    });
  }, [dispatch]);
  var close = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (id) {
    dispatch({
      type: 'REMOVE_TOAST',
      payload: id
    });
  }, [dispatch]);
  var closeByIndex = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (index) {
    var toast = state.toasts[index];
    if (toast) {
      dispatch({
        type: 'REMOVE_TOAST',
        payload: toast.id
      });
    }
  }, [state.toasts, dispatch]);
  var closeAll = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    dispatch({
      type: 'REMOVE_ALL'
    });
  }, [dispatch]);

  // Get all current toasts
  var getToasts = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    return state.toasts;
  }, [state.toasts]);
  return {
    show: show,
    close: close,
    closeByIndex: closeByIndex,
    closeAll: closeAll,
    getToasts: getToasts,
    updateConfig: updateConfig
  };
};
;// CONCATENATED MODULE: ./src/index.tsx


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});