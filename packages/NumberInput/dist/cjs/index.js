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
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(840);
/* harmony import */ var funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "arrowBtnClassName", "arrowBtnContainerClassName", "increaseIcon", "decreaseIcon", "hideArrowButton", "requiredLabel", "disabled", "required", "placeholder", "readOnly", "defaultValue", "value", "label", "units", "name", "step", "min", "max", "decimalPlaces", "alt", "id", "iconLeft", "iconRight", "style", "tabIndex", "onChange", "onBlur", "onFocus"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var NumberInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
    arrowBtnClassName = props.arrowBtnClassName,
    arrowBtnContainerClassName = props.arrowBtnContainerClassName,
    increaseIcon = props.increaseIcon,
    decreaseIcon = props.decreaseIcon,
    _props$hideArrowButto = props.hideArrowButton,
    hideArrowButton = _props$hideArrowButto === void 0 ? false : _props$hideArrowButto,
    requiredLabel = props.requiredLabel,
    disabled = props.disabled,
    required = props.required,
    placeholder = props.placeholder,
    readOnly = props.readOnly,
    defaultValue = props.defaultValue,
    value = props.value,
    label = props.label,
    units = props.units,
    name = props.name,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    _props$min = props.min,
    min = _props$min === void 0 ? Number.MIN_SAFE_INTEGER : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? Number.MAX_SAFE_INTEGER : _props$max,
    _props$decimalPlaces = props.decimalPlaces,
    decimalPlaces = _props$decimalPlaces === void 0 ? 0 : _props$decimalPlaces,
    alt = props.alt,
    id = props.id,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    style = props.style,
    tabIndex = props.tabIndex,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var valRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    changedVal = _useState2[0],
    setChangedVal = _useState2[1];

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
        onChange === null || onChange === void 0 ? void 0 : onChange(null, valRef.current, Number(''));
      },
      set: function set(value, cb) {
        setChangedVal("".concat(value));
        cb === null || cb === void 0 ? void 0 : cb();
        onChange === null || onChange === void 0 ? void 0 : onChange(null, valRef.current, Number(formatValue("".concat(value))));
      },
      increment: function increment(cb) {
        handleIncrement(null);
        cb === null || cb === void 0 ? void 0 : cb();
      },
      decrement: function decrement(cb) {
        handleDecrement(null);
        cb === null || cb === void 0 ? void 0 : cb();
      }
    };
  }, [contentRef, changedVal]);
  var propExist = function propExist(p) {
    return typeof p !== 'undefined' && p !== null && p !== '';
  };

  // Formalized digits, supporting decimal places
  var formatValue = function formatValue(inputValue) {
    return (0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(inputValue, decimalPlaces, min, max);
  };
  var checkResValue = function checkResValue(inputValue) {
    // Check whether the number of decimal places exceeds the specified value
    if ((0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.exceedDecimalPlaces)(inputValue, decimalPlaces)) {
      inputValue = (0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.truncateDecimals)(Number(inputValue), decimalPlaces);
    }

    // check min or max value
    if (Number(inputValue) > max) inputValue = max;
    if (Number(inputValue) < min) inputValue = min;
    return inputValue;
  };
  var handleIncrement = function handleIncrement(e) {
    if (e) e.preventDefault();
    setChangedVal(function (prevValue) {
      var newValue = (0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.calcAdd)(parseFloat(prevValue), step);
      onChange === null || onChange === void 0 ? void 0 : onChange(e, valRef.current, Number(formatValue(newValue)));
      return formatValue(newValue);
    });
  };
  var handleDecrement = function handleDecrement(e) {
    if (e) e.preventDefault();
    setChangedVal(function (prevValue) {
      var newValue = (0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.calcSub)(parseFloat(prevValue), step);
      onChange === null || onChange === void 0 ? void 0 : onChange(e, valRef.current, Number(formatValue(newValue)));
      return formatValue(newValue);
    });
  };
  function handleFocus(event) {
    var _rootRef$current;
    (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event, valRef.current);
  }
  function handleChange(event) {
    var val = event.target.value;
    var newVal = parseFloat(event.target.value);
    if (!(0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.isNumeric)(newVal)) newVal = val;

    // Determine whether it is a null or negative symbol
    if (val === '-') {
      newVal = '-';

      // Determine whether to enter a decimal
    } else if (val.startsWith('-0') && decimalPlaces > 0) {
      newVal = val;

      //
    } else if (val.includes('.') && decimalPlaces > 0) {
      newVal = val;
    } else {
      newVal = formatValue(newVal);
    }

    // Check result
    newVal = checkResValue(newVal);

    //
    var resToInput = String(newVal) === 'NaN' ? '0' : String(newVal);
    setChangedVal(resToInput);

    //----
    //remove focus style
    if (val === '') {
      var _rootRef$current2;
      (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.remove('focus');
    }

    //
    onChange === null || onChange === void 0 ? void 0 : onChange(event, valRef.current, Number(!(0,funda_utils_dist_cjs_math__WEBPACK_IMPORTED_MODULE_3__.isNumeric)(newVal) ? '0' : resToInput));
  }
  function handleBlur(event) {
    var el = event.target;
    var val = event.target.value;

    // Determine whether to enter a decimal
    if (val.includes('.') && decimalPlaces > 0) {
      setChangedVal(formatValue(val));
    }

    // Determine whether it is a null or negative symbol
    if (val === '' || val === '-') {
      setChangedVal('0');
    }

    //----
    //remove focus style
    if (val === '') {
      var _rootRef$current3;
      (_rootRef$current3 = rootRef.current) === null || _rootRef$current3 === void 0 ? void 0 : _rootRef$current3.classList.remove('focus');
    }

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event, valRef.current);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value
    //--------------
    if (typeof value !== 'undefined') {
      setChangedVal("".concat(formatValue(value))); // Avoid displaying the number 0
    }
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update default value (It does not re-render the component because the incoming value changes.)
    //--------------
    if (typeof defaultValue !== 'undefined') {
      //REQUIRED
      setChangedVal("".concat(formatValue(defaultValue))); // Avoid displaying the number 0
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
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
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupWrapperClassName, 'input-group position-relative z-1 d-flex align-items-stretch'), {
      'has-left-content': propExist(iconLeft),
      'has-right-content': propExist(iconRight) || propExist(units)
    })
  }, propExist(iconLeft) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text d-flex align-items-center')
  }, iconLeft) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    ref: function ref(node) {
      valRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    tabIndex: tabIndex || 0,
    type: "text",
    inputMode: decimalPlaces > 0 ? 'decimal' : 'numeric' // numeric | decimal
    ,
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlClassName, 'form-control')),
    id: idRes,
    name: name,
    min: min || null,
    max: max || null,
    alt: alt || null,
    placeholder: placeholder || '',
    value: changedVal,
    autoComplete: 'off',
    spellCheck: false,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    disabled: disabled || null,
    required: required || null,
    readOnly: readOnly || null,
    style: style
  }, attributes)), propExist(units) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text d-flex align-items-center')
  }, units) : null, propExist(iconRight) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(controlGroupTextClassName, 'input-group-text d-flex align-items-center')
  }, iconRight) : null, hideArrowButton ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(arrowBtnContainerClassName, 'btn-group-vertical d-flex flex-column justify-content-center align-items-center border border-start-0 rounded-end'),
    role: "group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(Array(arrowBtnClassName) && arrowBtnClassName ? arrowBtnClassName[0] : undefined, 'btn btn-sm border-0 border-bottom py-0 lh-1 flex-fill')),
    tabIndex: -1,
    onClick: handleIncrement,
    disabled: disabled || null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, increaseIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: 13,
    fill: "#000000",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.5,15.5l-6-7l-6,7H18.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(Array(arrowBtnClassName) && arrowBtnClassName ? arrowBtnClassName[1] : undefined, 'btn btn-sm border-0 py-0 lh-1 flex-fill')),
    tabIndex: -1,
    onClick: handleDecrement,
    disabled: disabled || null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, decreaseIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: 13,
    fill: "#000000",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.5,8.5l6,7l6-7H6.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }))))))), required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, requiredLabel || requiredLabel === '' ? requiredLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "position-absolute end-0 top-0 my-2 mx-2 me-3 pe-3 z-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-danger"
  }, "*"))) : '')));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});