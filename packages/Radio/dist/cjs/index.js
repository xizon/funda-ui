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

/***/ 575:
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
        /* harmony export */"deepClone": function deepClone() {
          return (/* binding */_deepClone
          );
        },
        /* harmony export */"flatData": function flatData() {
          return (/* binding */_flatData
          );
        },
        /* harmony export */"removeArrDuplicateItems": function removeArrDuplicateItems() {
          return (/* binding */_removeArrDuplicateItems
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
       * Remove Duplicate objects from JSON Array
       * @param {Array} obj 
       * @param {String} fieldName 
       */
      function _removeArrDuplicateItems(obj, fieldName) {
        if (!Array.isArray(obj)) return [];
        var clean = obj.filter(function (item, index, self) {
          return index === self.findIndex(function (t) {
            return t[fieldName] === item[fieldName];
          });
        });
        return clean;
      }
      ;

      /**
       * Deep clone
       * @param {*} obj 
       */
      function _deepClone(obj) {
        if (Array.isArray(obj)) {
          return obj.map(function (item) {
            return _deepClone(item);
          });
        } else if (_typeof(obj) === 'object' && obj !== null) {
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

/***/ 455:
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
        /* harmony export */"fixAndParseJSON": function fixAndParseJSON() {
          return (/* binding */_fixAndParseJSON
          );
        },
        /* harmony export */"isEmail": function isEmail() {
          return (/* binding */_isEmail
          );
        },
        /* harmony export */"isEmpty": function isEmpty() {
          return (/* binding */_isEmpty
          );
        },
        /* harmony export */"isInt": function isInt() {
          return (/* binding */_isInt
          );
        },
        /* harmony export */"isJSON": function isJSON() {
          return (/* binding */_isJSON
          );
        },
        /* harmony export */"isMobile": function isMobile() {
          return (/* binding */_isMobile
          );
        },
        /* harmony export */"isNumber": function isNumber() {
          return (/* binding */_isNumber
          );
        },
        /* harmony export */"isTel": function isTel() {
          return (/* binding */_isTel
          );
        },
        /* harmony export */"isValidNumeric": function isValidNumeric() {
          return (/* binding */_isValidNumeric
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
       * Fix And Parse JSON (Support for handling complex escape JSON strings)
       * @desc recursively fix top-level key/value (recursively handles when encountering top-level values that are objects/arrays)
       * @private
       */
      /*
       - Still prioritize JSON.parse first;
       - After parse fails, do unescaping (\\" → ");
       - Then process the outermost layer (object or array) key by key, value by value;
       - If a top-level value is an unquoted object or array (e.g., messages: [ {...} ]), recursively treat that value as a new outermost layer for fixing;
       - For strings wrapped in quotes ('...' or "..."), only extract the outer layer and re-encode with JSON.stringify (ensuring internal single/double quotes won't be mistakenly changed);
       - Set MAX_DEPTH to prevent infinite recursion.
      */
      /*
      @Examples:
      
      // ✅ Valid JSON (contains svg and single quote content)
      const okJson = `{
        "label":"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
        "value":"new",
        "onClick":"method.setVal(''); method.clearData();"
      }`;
      
      const okJson2 = `{
        label:"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
        value:"new",
        onClick:"method.setVal(''); method.clearData();"
      }`;
      
      // ⚠️ Single quote JSON
      const badJson = "{'model':'{model}','messages':[{'role':'user','content':'{message}'}],'stream': true}";
      
      // ⚠️ Escaped JSON
      const badJson2 = "{\\\"label\\\":\\\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\\\",\\\"value\\\":\\\"new\\\",\\\"onClick\\\":\\\"method.setVal(''); method.clearData();\\\"}";
      
      const badJson3 = "{\"label\":\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\",\"value\":\"new\",\"onClick\":\"method.setVal(''); method.clearData();\"}";
      
      const badJson4 = "[{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M20.5 9a3.49 3.49 0 0 0-3.45 3h-1.1a2.49 2.49 0 0 0-4.396-1.052L8.878 9.731l3.143-4.225a2.458 2.458 0 0 0 2.98-.019L17.339 8H16v1h3V6h-1v1.243l-2.336-2.512A2.473 2.473 0 0 0 16 3.5a2.5 2.5 0 0 0-5 0 2.474 2.474 0 0 0 .343 1.243L7.947 9.308 4.955 7.947a2.404 2.404 0 0 0-.161-1.438l3.704-1.385-.44 1.371.942.333L10 4 7.172 3l-.334.943 1.01.357-3.659 1.368a2.498 2.498 0 1 0-.682 4.117l2.085 2.688-2.053 2.76a2.5 2.5 0 1 0 .87 3.864l3.484 1.587-1.055.373.334.943L10 21l-1-2.828-.943.333.435 1.354-3.608-1.645A2.471 2.471 0 0 0 5 17.5a2.5 2.5 0 0 0-.058-.527l3.053-1.405 3.476 4.48a2.498 2.498 0 1 0 4.113.075L18 17.707V19h1v-3h-3v1h1.293l-2.416 2.416a2.466 2.466 0 0 0-2.667-.047l-3.283-4.23 2.554-1.176A2.494 2.494 0 0 0 15.95 13h1.1a3.493 3.493 0 1 0 3.45-4zm-7-7A1.5 1.5 0 1 1 12 3.5 1.502 1.502 0 0 1 13.5 2zm0 18a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5zM1 7.5a1.5 1.5 0 1 1 2.457 1.145l-.144.112A1.496 1.496 0 0 1 1 7.5zm3.32 1.703a2.507 2.507 0 0 0 .264-.326l2.752 1.251-1.124 1.512zM2.5 19A1.5 1.5 0 1 1 4 17.5 1.502 1.502 0 0 1 2.5 19zm2.037-2.941a2.518 2.518 0 0 0-.193-.234l1.885-2.532 1.136 1.464zm3.76-1.731L6.849 12.46l1.42-1.908L11.1 11.84a2.29 2.29 0 0 0-.033 1.213zM13.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zm7 1a2.5 2.5 0 1 1 2.5-2.5 2.502 2.502 0 0 1-2.5 2.5zm1.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z'/><path fill='none' d='M0 0h24v24H0z'/></svg> 深度思考\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.executeCustomMethod('changeModel', true)}else{method.executeCustomMethod('changeModel', false)}\"},{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z'/></svg> 精简回答\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.setContextData({systemPrompt:'请精简回答，字数控制在150个字左右, 思考过程请简洁简短',mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}else{method.setContextData({mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}\"},{\"label\":\"<svg fill='none' width='12' height='12' viewBox='0 0 16 16'><path d='M7 0.0618896V9H15.9381C15.446 12.9463 12.0796 16 8 16C3.58172 16 0 12.4183 0 8C0 3.92038 3.05369 0.553988 7 0.0618896Z' fill='currentColor'/><path d='M9 0.0618897V7H15.9381C15.4869 3.38128 12.6187 0.513137 9 0.0618897Z' fill='currentColor'/></svg> 指标分析\",\"value\":\"lab\",\"onClick\":\"return method.executeCustomMethod('getLibList')\",\"isSelect\":true,\"dynamicOptions\":true}]";
      
      
      // ❌ Invalid JSON with missing } or ]
      const errorJson001 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'";
      
      const errorJson002 = "[{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'}";
      
      // ❌ Invalid JSON with missing quotes
      const errorJson003 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': {chatId}', 'token': '{token}'}";
      
      // ❌ Invalid JSON with extra commas
      const errorJson004 = `{
          "common": { "app_id": "de805836" },
          "business": {
              "language": "zh_cn",
              "domain": "iat",
              "accent": "mandarin",
              "dwa": "wpgs",
          },
          "data": { "status": 0 }
      }`;
      
      
      console.log('okJson =>', fixAndParseJSON(okJson));   // Can parse normally  success = true
      console.log('okJson =>', fixAndParseJSON(okJson2));   // Can parse normally  success = true
      console.log('badJson =>', fixAndParseJSON(badJson)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson2)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson3)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson4)); // Can parse after fixing success = true
      console.log('errorJson =>', fixAndParseJSON(errorJson001)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
      console.log('errorJson =>', fixAndParseJSON(errorJson002)); // {success: false, error: 'Invalid JSON format', details: "Expected property name or '}' in JSON at position 2 (line 1 column 3)"}
      console.log('errorJson =>', fixAndParseJSON(errorJson003)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
      console.log('errorJson =>', fixAndParseJSON(errorJson004)); // {success: false, error: 'Invalid JSON format', details: 'Trailing comma detected in object'}
      
      */
      /**
       * Fix And Parse JSON (Support for handling complex escape JSON strings)
       * @desc recursively fix top-level key/value (recursively handles when encountering top-level values that are objects/arrays)
       * @private
       */

      // Type definitions

      function _fixAndParseJSON(input) {
        var MAX_DEPTH = 6;

        // 1. Quick attempt
        try {
          return {
            success: true,
            data: JSON.parse(input)
          };
        } catch (e) {
          // Continue with fixing
        }

        // 2. Simple unescaping of escaped \" (common case from pasted JS literals)
        var s = input;
        if (s.includes('\\"')) s = s.replace(/\\"/g, '"');
        s = s.trim();
        try {
          if (s.startsWith('{')) {
            s = processTopObject(s, 0, MAX_DEPTH);
          } else if (s.startsWith('[')) {
            s = processTopArray(s, 0, MAX_DEPTH);
          } else {
            throw new Error('Input is not an object or array');
          }
          return {
            success: true,
            data: JSON.parse(s)
          };
        } catch (err) {
          var error = err instanceof Error ? err : new Error('Unknown error');
          return {
            success: false,
            error: 'Invalid JSON format',
            details: error.message
          };
        }
      }

      /* ---------- Helper (Recursive) Functions ---------- */

      function processTopObject(str, depth, MAX_DEPTH) {
        if (depth > MAX_DEPTH) return str;
        str = str.trim();

        // First check if braces match
        var braceCount = 0;
        var inString = false;
        var escapeNext = false;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (escapeNext) {
            escapeNext = false;
            continue;
          }
          if (ch === '\\') {
            escapeNext = true;
            continue;
          }
          if ((ch === '"' || ch === "'") && !escapeNext) {
            inString = !inString;
            continue;
          }
          if (!inString) {
            if (ch === '{') braceCount++;else if (ch === '}') braceCount--;
          }
        }
        if (braceCount !== 0) {
          throw new Error('Invalid object: mismatched braces');
        }

        // Ensure both ends are { ... }
        if (!(str.startsWith('{') && str.endsWith('}'))) {
          var f = str.indexOf('{'),
            l = str.lastIndexOf('}');
          if (f === -1 || l === -1 || l <= f) {
            throw new Error('Invalid object format: missing or mismatched braces');
          }
          str = str.slice(f, l + 1);
        }
        var inner = str.slice(1, -1);
        var pairs = splitTopLevel(inner);
        var repairedPairs = pairs.map(function (pair) {
          var p = pair.trim();
          // If the split fragment is empty, there are extra commas (e.g. {"a":1, })
          if (p === '') throw new Error('Trailing comma detected in object');
          var idx = findTopLevelColon(p);
          if (idx === -1) throw new Error('Invalid key-value pair');
          var rawKey = p.slice(0, idx).trim();
          var rawVal = p.slice(idx + 1);
          var keyContent = extractKeyContent(rawKey);
          var keyJson = JSON.stringify(keyContent);
          var repairedValue = repairPossiblyQuotedValue(rawVal, depth + 1, MAX_DEPTH);
          return keyJson + ':' + repairedValue;
        });
        return '{' + repairedPairs.join(',') + '}';
      }
      function processTopArray(str, depth, MAX_DEPTH) {
        if (depth > MAX_DEPTH) return str;
        str = str.trim();
        if (!(str.startsWith('[') && str.endsWith(']'))) {
          var f = str.indexOf('['),
            l = str.lastIndexOf(']');
          if (f === -1 || l === -1 || l <= f) return str;
          str = str.slice(f, l + 1);
        }
        var inner = str.slice(1, -1);
        var elements = splitTopLevel(inner);
        var processed = elements.map(function (el) {
          var t = el.trim();
          // If the split fragment is empty, there are extra commas (e.g. [1, 2, ])
          if (t === '') throw new Error('Trailing comma detected in array');
          if (t.startsWith('{')) return processTopObject(t, depth + 1, MAX_DEPTH);
          if (t.startsWith('[')) return processTopArray(t, depth + 1, MAX_DEPTH);
          return repairPossiblyQuotedValue(t, depth + 1, MAX_DEPTH);
        });
        return '[' + processed.join(',') + ']';
      }
      function repairPossiblyQuotedValue(rawVal, depth, MAX_DEPTH) {
        var v = rawVal.trim();
        if (v === '') return v;
        if (v[0] === '"' || v[0] === "'") {
          var quote = v[0];
          // Find the last unescaped same quote
          var lastPos = -1;
          for (var i = v.length - 1; i >= 0; i--) {
            if (v[i] === quote) {
              // check escaped
              var bs = 0,
                k = i - 1;
              while (k >= 0 && v[k] === '\\') {
                bs++;
                k--;
              }
              if (bs % 2 === 0) {
                lastPos = i;
                break;
              }
            }
          }
          var inner = lastPos > 0 ? v.slice(1, lastPos) : v.slice(1);
          return JSON.stringify(inner);
        }

        // If it's an object or array literal (not wrapped in quotes) -> recursively treat as new outermost layer
        if (v.startsWith('{')) {
          return processTopObject(v, depth, MAX_DEPTH);
        }
        if (v.startsWith('[')) {
          return processTopArray(v, depth, MAX_DEPTH);
        }

        // Others (numbers, boolean, null, or JS expressions): return as-is
        return v;
      }

      /* --------- Utilities: Split by top-level commas, find top-level colon, extract key --------- */

      function splitTopLevel(str) {
        var parts = [];
        var buf = '';
        var depthCurly = 0,
          depthSquare = 0,
          depthParen = 0;
        var inSingle = false,
          inDouble = false,
          esc = false;
        var lastCharWasComma = false;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (esc) {
            buf += ch;
            esc = false;
            continue;
          }
          if (ch === '\\') {
            buf += ch;
            esc = true;
            continue;
          }
          if (ch === "'" && !inDouble) {
            inSingle = !inSingle;
            buf += ch;
            continue;
          }
          if (ch === '"' && !inSingle) {
            inDouble = !inDouble;
            buf += ch;
            continue;
          }
          if (!inSingle && !inDouble) {
            if (ch === '{') depthCurly++;else if (ch === '}') depthCurly--;else if (ch === '[') depthSquare++;else if (ch === ']') depthSquare--;else if (ch === '(') depthParen++;else if (ch === ')') depthParen--;
            if (ch === ',' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
              parts.push(buf);
              buf = '';
              lastCharWasComma = true;
              continue;
            }
          }
          if (!/\s/.test(ch)) lastCharWasComma = false;
          buf += ch;
        }
        if (lastCharWasComma || parts.length > 0 && buf.trim() === '') {
          parts.push("");
        } else if (buf.trim() !== '' || parts.length === 0) {
          parts.push(buf);
        }
        if (depthCurly !== 0 || depthSquare !== 0 || depthParen !== 0) throw new Error('Mismatched structure');
        return parts;
      }
      function findTopLevelColon(str) {
        var inSingle = false,
          inDouble = false,
          esc = false;
        var depthCurly = 0,
          depthSquare = 0,
          depthParen = 0;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (esc) {
            esc = false;
            continue;
          }
          if (ch === '\\') {
            esc = true;
            continue;
          }
          if (ch === "'" && !inDouble) {
            inSingle = !inSingle;
            continue;
          }
          if (ch === '"' && !inSingle) {
            inDouble = !inDouble;
            continue;
          }
          if (!inSingle && !inDouble) {
            if (ch === '{') {
              depthCurly++;
              continue;
            }
            if (ch === '}') {
              depthCurly--;
              continue;
            }
            if (ch === '[') {
              depthSquare++;
              continue;
            }
            if (ch === ']') {
              depthSquare--;
              continue;
            }
            if (ch === '(') {
              depthParen++;
              continue;
            }
            if (ch === ')') {
              depthParen--;
              continue;
            }
            if (ch === ':' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
              return i;
            }
          }
        }
        return -1;
      }
      function extractKeyContent(rawKey) {
        var r = rawKey.trim();
        if (r.startsWith('"') && r.endsWith('"') || r.startsWith("'") && r.endsWith("'")) {
          return r.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
        }
        return r;
      }

      /* ---------- Exported Validation Functions ---------- */

      function _isJSON(input) {
        if (typeof input === 'string' && input.length > 0) {
          return _fixAndParseJSON(input).success;
        } else {
          return _typeof(input) === 'object' && input !== null && Object.prototype.toString.call(input) === '[object Object]' && !Array.isArray(input);
        }
      }
      function _isValidNumeric(str) {
        if (typeof str !== "string") return false;
        return !isNaN(Number(str)) && !isNaN(parseFloat(str));
      }
      function _isEmpty(input) {
        if (Array.isArray(input)) {
          return input.some(function (str) {
            return !str.replace(/\s/g, '').length;
          });
        }
        return !input.replace(/\s/g, '').length;
      }
      function _isNumber(input) {
        var reg = /^[\d|\.|,]+$/;
        return reg.test(input);
      }
      function _isInt(input) {
        if (input === "") return false;
        var reg = /\D+/;
        return !reg.test(input);
      }
      function _isEmail(input) {
        var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
        return reg.test(input);
      }
      function _isTel(input) {
        var reg = /^[0-9- ]{7,20}$/;
        return reg.test(input);
      }
      function _isMobile(input) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(input);
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(455);
/* harmony import */ var funda_utils_dist_cjs_validate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_validate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(575);
/* harmony import */ var funda_utils_dist_cjs_object__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_object__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__);
var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "groupWrapperClassName", "groupLabelClassName", "itemSelectedClassName", "tableLayout", "tableLayoutClassName", "tableLayoutCellClassName", "disabled", "required", "defaultValue", "value", "label", "name", "id", "options", "inline", "style", "tabIndex", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onLoad", "onClick", "onChange", "onBlur", "onFocus", "onCallbackListItem"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x5) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x6) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Radio = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    groupWrapperClassName = props.groupWrapperClassName,
    groupLabelClassName = props.groupLabelClassName,
    itemSelectedClassName = props.itemSelectedClassName,
    tableLayout = props.tableLayout,
    tableLayoutClassName = props.tableLayoutClassName,
    tableLayoutCellClassName = props.tableLayoutCellClassName,
    disabled = props.disabled,
    required = props.required,
    defaultValue = props.defaultValue,
    value = props.value,
    label = props.label,
    name = props.name,
    id = props.id,
    options = props.options,
    inline = props.inline,
    style = props.style,
    tabIndex = props.tabIndex,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    fetchCallback = props.fetchCallback,
    onFetch = props.onFetch,
    onLoad = props.onLoad,
    onClick = props.onClick,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onCallbackListItem = props.onCallbackListItem,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var optionsRes = options ? (0,funda_utils_dist_cjs_validate__WEBPACK_IMPORTED_MODULE_2__.isJSON)(options) ? JSON.parse(options) : options : '';

  // return a array of options
  var optionsDataInit = optionsRes;
  var optionsFormatGroupOpt = function optionsFormatGroupOpt(allData) {
    allData.forEach(function (item) {
      if (typeof item.optgroup !== 'undefined') {
        item.value = String(Math.random());
      }
    });
  };
  var isObject = function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  };
  var optionsFlat = function optionsFlat(allData) {
    var flatItems = [];
    allData.forEach(function (item) {
      if (typeof item.optgroup !== 'undefined') {
        item.optgroup.forEach(function (opt) {
          flatItems.push(opt);
        });
      } else {
        flatItems.push(item);
      }
    });
    return flatItems;
  };
  var finalRes = function finalRes(val) {
    return isObject(val) ? val.value : val;
  };

  //
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsDataInit),
    _useState2 = _slicedToArray(_useState, 2),
    dataInit = _useState2[0],
    setDataInit = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasErr = _useState4[0],
    setHasErr = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    controlValue = _useState6[0],
    setControlValue = _useState6[1];
  var labelRes = function labelRes(label, id) {
    return label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: id,
      className: "form-check-label",
      dangerouslySetInnerHTML: {
        __html: "".concat(label)
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: id,
      className: "form-check-label"
    }, label)) : null;
  };
  var getAllControls = function getAllControls() {
    if (rootRef.current === null) return [];
    return [].slice.call(rootRef.current.querySelectorAll("[type=\"radio\"]"));
  };

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
    return {
      control: function control() {
        return getAllControls();
      },
      getLatestVal: function getLatestVal() {
        return controlValue || '';
      },
      clear: function clear(cb) {
        setControlValue('');
        cb === null || cb === void 0 ? void 0 : cb();
        if (typeof onChange === 'function') {
          var curData = optionsFlat(dataInit).find(function (v) {
            return v.value == value;
          });
          var _currentIndex = optionsFlat(dataInit).findIndex(function (v) {
            return v.value == value;
          });
          var targetInput = getAllControls().find(function (input) {
            return input.checked;
          });
          onChange(null, '', null, null, typeof targetInput !== 'undefined' ? targetInput : getAllControls()[0]);
        }
      },
      set: function set(value, cb) {
        setControlValue("".concat(value));
        cb === null || cb === void 0 ? void 0 : cb();
        if (typeof onChange === 'function') {
          var curData = optionsFlat(dataInit).find(function (v) {
            return v.value == value;
          });
          var _currentIndex2 = optionsFlat(dataInit).findIndex(function (v) {
            return v.value == value;
          });
          var targetInput = getAllControls().find(function (input) {
            return input.value === value;
          });
          onChange(null, "".concat(value), curData, _currentIndex2, typeof targetInput !== 'undefined' ? targetInput : getAllControls()[0]);
        }
      }
    };
  }, [dataInit, contentRef, controlValue]);
  function stringlineToHump(str) {
    if (typeof str === 'string' && str.length > 0) {
      var re = /-(\w)/g;
      str = str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
      });
      return str;
    } else {
      return str;
    }
  }
  function getDataAttributes(node) {
    if (node === null) return [];
    var res = {};
    var _iterator = _createForOfIteratorHelper(node.attributes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var attr = _step.value;
        if (/^data-/.test(attr.name)) {
          res[stringlineToHump(attr.name)] = attr.value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return res;
  }
  function fetchData(_x2, _x3, _x4) {
    return _fetchData.apply(this, arguments);
  } //
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, valueToInputDefault, inputDefault) {
      var allControlsData, response, _ORGIN_DATA, _realValue, filterRes, filterResQueryValue, filterResQueryLabel, _realValue2, _filterRes, _filterResQueryValue, _filterResQueryLabel;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // set default value
            if (typeof valueToInputDefault !== 'undefined' && valueToInputDefault !== '') rootRef.current.dataset.value = valueToInputDefault;
            if (rootRef.current) {
              allControlsData = [];
              getAllControls().forEach(function (el, i) {
                allControlsData.push(getDataAttributes(el));
              });
              rootRef.current.setAttribute('data-controls-cus-attrs', JSON.stringify(allControlsData));
            }

            //
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context.next = 23;
              break;
            }
            _context.next = 5;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 5:
            response = _context.sent;
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

            // If the default value is label, match value
            _realValue = valueToInputDefault;
            filterRes = [];
            filterResQueryValue = _ORGIN_DATA.filter(function (item) {
              return item.value == valueToInputDefault;
            });
            filterResQueryLabel = _ORGIN_DATA.filter(function (item) {
              return item.label == valueToInputDefault;
            });
            if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
              filterRes = filterResQueryValue;
              if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
              if (filterRes.length > 0) _realValue = filterRes[0].value;

              // if the default value is Object
              if (isObject(inputDefault) && filterRes.length === 0) {
                filterRes = [inputDefault];
              }
            }

            // set "<input type="radio">" value
            setControlValue(_realValue); // value must be initialized

            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(_ORGIN_DATA); // prevent the value from being filtered out
            _ORGIN_DATA = (0,funda_utils_dist_cjs_object__WEBPACK_IMPORTED_MODULE_3__.removeArrDuplicateItems)(_ORGIN_DATA, 'value');

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);

            //
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(_ORGIN_DATA, _realValue, rootRef.current);
            return _context.abrupt("return", _ORGIN_DATA);
          case 23:
            // If the default value is label, match value
            _realValue2 = valueToInputDefault;
            _filterRes = [];
            _filterResQueryValue = optionsDataInit.filter(function (item) {
              return item.value == valueToInputDefault;
            });
            _filterResQueryLabel = optionsDataInit.filter(function (item) {
              return item.label == valueToInputDefault;
            });
            if (_filterResQueryValue.length === 0 && _filterResQueryLabel.length > 0) {
              _filterRes = _filterResQueryValue;
              if (_filterResQueryValue.length === 0) _filterRes = _filterResQueryLabel;
              if (_filterRes.length > 0) _realValue2 = _filterRes[0].value;

              // if the default value is Object
              if (isObject(inputDefault) && _filterRes.length === 0) {
                _filterRes = [inputDefault];
              }
            }

            // set "<input type="radio">" value
            setControlValue(_realValue2); // value must be initialized

            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(optionsDataInit); // prevent the value from being filtered out
            optionsDataInit = (0,funda_utils_dist_cjs_object__WEBPACK_IMPORTED_MODULE_3__.removeArrDuplicateItems)(optionsDataInit, 'value');

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(optionsDataInit);

            //
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(optionsDataInit, _realValue2, rootRef.current);
            return _context.abrupt("return", optionsDataInit);
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
  function handleFocus(event) {
    var _rootRef$current;
    (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('focus-floating');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleChange(event) {
    var _rootRef$current2;
    var val = event.target.value;
    var curData = optionsFlat(dataInit).find(function (v) {
      return v.value == val;
    });
    var currentIndex = event.target.dataset.index;

    //----
    // update value
    setControlValue(val);

    //----
    //remove focus style
    (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.remove('focus-floating');

    //
    if (typeof onChange === 'function') {
      onChange(event, val, curData, currentIndex, event.target);
    }
    if (typeof onClick === 'function') {
      onClick(event, val, curData, currentIndex, event.target);
    }
  }
  function handleBlur(event) {
    var _rootRef$current3;
    //----
    //remove focus style
    (_rootRef$current3 = rootRef.current) === null || _rootRef$current3 === void 0 ? void 0 : _rootRef$current3.classList.remove('focus-floating');

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  }

  // Generate list of options
  var itemsList = function itemsList(fn) {
    if (typeof fn === 'function') {
      return fn === null || fn === void 0 ? void 0 : fn({
        name: name,
        dataInit: dataInit,
        required: required,
        groupLabelClassName: groupLabelClassName,
        inline: inline,
        controlValue: controlValue,
        itemSelectedClassName: itemSelectedClassName,
        tabIndex: tabIndex,
        uniqueID: uniqueID,
        disabled: disabled,
        handleChange: handleChange,
        onClick: onClick,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
        attributes: attributes,
        style: style,
        labelRes: labelRes,
        groupWrapperClassName: groupWrapperClassName,
        tableLayout: tableLayout,
        tableLayoutClassName: tableLayoutClassName,
        tableLayoutCellClassName: tableLayoutCellClassName
      });
    }
    return Array.isArray(dataInit) ? dataInit.map(function (item, index) {
      var requiredVal = index === 0 ? required || null : null;
      var _formatItem = {};
      Object.keys(item).forEach(function (key) {
        if (key !== 'extends') _formatItem[key] = item[key];
      });
      var _groupEl = function _groupEl() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('radio-group__label', groupLabelClassName)
        }, item.label), item.optgroup.map(function (opt, optIndex) {
          var _formatOpt = {};
          Object.keys(item).forEach(function (key) {
            if (key !== 'extends') _formatOpt[key] = item[key];
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            key: 'option-' + optIndex,
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('form-check', controlValue == opt.value ? (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(itemSelectedClassName, 'item-selected') : undefined, {
              'form-check-inline': inline
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "d-inline-block"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: function ref(node) {
              if (externalRef) externalRef.current = getAllControls();
            },
            tabIndex: tabIndex || 0,
            type: "radio",
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(controlClassName, 'form-check-input'),
            id: "field-".concat(uniqueID, "-").concat(index, "-").concat(optIndex),
            name: name,
            "data-index": "".concat(index, "-").concat(optIndex),
            "data-label": opt.label,
            "data-list-item-label": "".concat(typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel),
            "data-value": opt.value,
            "data-disabled": disabled || (typeof opt.disabled !== 'undefined' ? "".concat(opt.disabled) : 'false'),
            "data-optiondata": JSON.stringify(_formatOpt),
            value: "".concat(opt.value),
            required: requiredVal,
            disabled: disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null),
            onChange: handleChange,
            onClick: typeof onClick === 'function' ? handleChange : function () {
              return void 0;
            },
            onFocus: handleFocus,
            onBlur: handleBlur,
            checked: controlValue == opt.value // component status will not change if defaultChecked is used
            ,
            style: style
          }, attributes)), labelRes(typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel, "field-".concat(uniqueID, "-").concat(index, "-").concat(optIndex))), typeof opt["extends"] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "d-inline-block"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "form-control-extends__wrapper"
          }, opt["extends"]))) : null);
        }));
      };
      var _normalEl = function _normalEl() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-inline-block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
          ref: function ref(node) {
            if (externalRef) externalRef.current = getAllControls();
          },
          tabIndex: tabIndex || 0,
          type: "radio",
          className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(controlClassName, 'form-check-input'),
          id: "field-".concat(uniqueID, "-").concat(index),
          name: name,
          "data-index": index,
          "data-label": item.label,
          "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
          "data-value": item.value,
          "data-disabled": disabled || (typeof item.disabled !== 'undefined' ? "".concat(item.disabled) : 'false'),
          "data-optiondata": JSON.stringify(_formatItem),
          value: "".concat(item.value),
          required: requiredVal,
          disabled: disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null),
          onChange: handleChange,
          onClick: typeof onClick === 'function' ? handleChange : function () {
            return void 0;
          },
          onFocus: handleFocus,
          onBlur: handleBlur,
          checked: controlValue == item.value // component status will not change if defaultChecked is used
          ,
          style: style
        }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "form-check-label",
          htmlFor: "field-".concat(uniqueID, "-").concat(index),
          dangerouslySetInnerHTML: {
            __html: "".concat(typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel)
          }
        })), typeof item["extends"] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-inline-block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "form-control-extends__wrapper"
        }, item["extends"]))) : null);
      };
      if (tableLayout) {
        /* TABLE LAYOUT */
        if (typeof item.optgroup !== 'undefined') {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
            colSpan: 1,
            className: "radio-group__wrapper ".concat(groupWrapperClassName || '', " ").concat(tableLayoutCellClassName || ''),
            key: 'optgroup-' + index,
            "data-optiondata": JSON.stringify(_formatItem)
          }, _groupEl());
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
            colSpan: 1,
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('form-check', controlValue == item.value ? (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(itemSelectedClassName, 'item-selected') : undefined, tableLayoutCellClassName, {
              'form-check-inline': inline
            }),
            key: 'option-' + index,
            "data-optiondata": JSON.stringify(_formatItem)
          }, _normalEl());
        }
        /* /TABLE LAYOUT */
      } else {
        if (typeof item.optgroup !== 'undefined') {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('radio-group__wrapper', groupWrapperClassName),
            key: 'optgroup-' + index,
            "data-optiondata": JSON.stringify(_formatItem)
          }, _groupEl());
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('form-check', controlValue == item.value ? (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(itemSelectedClassName, 'item-selected') : undefined, {
              'form-check-inline': inline
            }),
            key: 'option-' + index,
            "data-optiondata": JSON.stringify(_formatItem)
          }, _normalEl());
        }
      }
    }) : null;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // data init
    //--------------
    var _params = fetchFuncMethodParams || [];
    fetchData(_params.join(','), finalRes(value), value);
  }, [value, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value (It does not re-render the component because the incoming value changes.)
    //--------------
    if (typeof defaultValue !== 'undefined') {
      //REQUIRED
      var _params = fetchFuncMethodParams || [];
      fetchData(_params.join(','), finalRes(defaultValue), defaultValue);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tableLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    id: "radio-tablelayout__wrapper-".concat(idRes),
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('radio-tablelayout__wrapper', tableLayoutClassName),
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("caption", {
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("caption", null, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, !hasErr ? itemsList(onCallbackListItem) : null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "radio__wrapper-".concat(idRes),
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.combinedCls)('radio__wrapper', (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_4__.clsWrite)(wrapperClassName, 'mb-3 position-relative')),
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
    id: idRes
  }, !hasErr ? itemsList(onCallbackListItem) : null))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});