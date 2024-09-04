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

/***/ 213:
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
        /* harmony export */"easeInBack": function easeInBack() {
          return (/* binding */_easeInBack
          );
        },
        /* harmony export */"easeInCirc": function easeInCirc() {
          return (/* binding */_easeInCirc
          );
        },
        /* harmony export */"easeInCubic": function easeInCubic() {
          return (/* binding */_easeInCubic
          );
        },
        /* harmony export */"easeInElastic": function easeInElastic() {
          return (/* binding */_easeInElastic
          );
        },
        /* harmony export */"easeInExpo": function easeInExpo() {
          return (/* binding */_easeInExpo
          );
        },
        /* harmony export */"easeInOutBack": function easeInOutBack() {
          return (/* binding */_easeInOutBack
          );
        },
        /* harmony export */"easeInOutCirc": function easeInOutCirc() {
          return (/* binding */_easeInOutCirc
          );
        },
        /* harmony export */"easeInOutCubic": function easeInOutCubic() {
          return (/* binding */_easeInOutCubic
          );
        },
        /* harmony export */"easeInOutElastic": function easeInOutElastic() {
          return (/* binding */_easeInOutElastic
          );
        },
        /* harmony export */"easeInOutExpo": function easeInOutExpo() {
          return (/* binding */_easeInOutExpo
          );
        },
        /* harmony export */"easeInOutQuad": function easeInOutQuad() {
          return (/* binding */_easeInOutQuad
          );
        },
        /* harmony export */"easeInOutQuart": function easeInOutQuart() {
          return (/* binding */_easeInOutQuart
          );
        },
        /* harmony export */"easeInOutQuint": function easeInOutQuint() {
          return (/* binding */_easeInOutQuint
          );
        },
        /* harmony export */"easeInOutSine": function easeInOutSine() {
          return (/* binding */_easeInOutSine
          );
        },
        /* harmony export */"easeInQuad": function easeInQuad() {
          return (/* binding */_easeInQuad
          );
        },
        /* harmony export */"easeInQuart": function easeInQuart() {
          return (/* binding */_easeInQuart
          );
        },
        /* harmony export */"easeInQuint": function easeInQuint() {
          return (/* binding */_easeInQuint
          );
        },
        /* harmony export */"easeInSine": function easeInSine() {
          return (/* binding */_easeInSine
          );
        },
        /* harmony export */"easeLinear": function easeLinear() {
          return (/* binding */_easeLinear
          );
        },
        /* harmony export */"easeOutBack": function easeOutBack() {
          return (/* binding */_easeOutBack
          );
        },
        /* harmony export */"easeOutCirc": function easeOutCirc() {
          return (/* binding */_easeOutCirc
          );
        },
        /* harmony export */"easeOutCubic": function easeOutCubic() {
          return (/* binding */_easeOutCubic
          );
        },
        /* harmony export */"easeOutElastic": function easeOutElastic() {
          return (/* binding */_easeOutElastic
          );
        },
        /* harmony export */"easeOutExpo": function easeOutExpo() {
          return (/* binding */_easeOutExpo
          );
        },
        /* harmony export */"easeOutQuad": function easeOutQuad() {
          return (/* binding */_easeOutQuad
          );
        },
        /* harmony export */"easeOutQuart": function easeOutQuart() {
          return (/* binding */_easeOutQuart
          );
        },
        /* harmony export */"easeOutQuint": function easeOutQuint() {
          return (/* binding */_easeOutQuint
          );
        },
        /* harmony export */"easeOutSine": function easeOutSine() {
          return (/* binding */_easeOutSine
          );
        }
        /* harmony export */
      });
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
/* harmony export */   "EasingList": () => (/* binding */ EasingList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(499);
/* harmony import */ var funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(213);
/* harmony import */ var funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// Adapt the easing parameters of TweenMax
var EasingList = /*#__PURE__*/function (EasingList) {
  EasingList["linear"] = "linear";
  EasingList["easeIn"] = "ease-in";
  EasingList["easeOut"] = "ease-out";
  EasingList["easeInOut"] = "ease-in-out";
  return EasingList;
}({});
var BackToTop = function BackToTop(props) {
  var btnIcon = props.btnIcon;
  var easeType = EasingList[props.easing];
  var speed = props.speed ? props.speed : 500;
  var btnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAtRange = _useState2[0],
    setIsAtRange = _useState2[1];

  // Add function to the element that should be used as the scrollable area.
  var _useWindowScroll = funda_utils_dist_cjs_useWindowScroll__WEBPACK_IMPORTED_MODULE_1___default()({
      performance: ['throttle', 5],
      // "['debounce', 500]" or "['throttle', 500]"
      handle: function handle(scrollData) {
        var scrollTop = scrollData.y;
        if (scrollTop < window.innerHeight / 2) {
          setIsAtRange(false);
        } else {
          setIsAtRange(true);
        }
      }
    }),
    _useWindowScroll2 = _slicedToArray(_useWindowScroll, 2),
    scrollData = _useWindowScroll2[0],
    windowScrollUpdate = _useWindowScroll2[1];
  function moveToTop() {
    var duration = speed;
    var scrollToTarget = function scrollToTarget(target) {
      var top = target.getBoundingClientRect().top;
      var startPos = window.pageYOffset;
      var diff = top;
      var start = new Date().getTime();
      var from = 0;
      var to = 100;
      var requestId;
      var loop = function loop() {
        //easing
        var time = new Date().getTime() - start;
        var val;
        switch (easeType) {
          case "linear":
            val = (0,funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__.easeLinear)(time, from, to - from, duration);
            break;
          case "ease-in":
            val = (0,funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__.easeInQuad)(time, from, to - from, duration);
            break;
          case "ease-out":
            val = (0,funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__.easeOutQuad)(time, from, to - from, duration);
            break;
          case "ease-in-out":
            val = (0,funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__.easeInOutQuad)(time, from, to - from, duration);
            break;
          default:
            val = (0,funda_utils_dist_cjs_easing__WEBPACK_IMPORTED_MODULE_2__.easeLinear)(time, from, to - from, duration);
        }

        // Elapsed time in miliseconds
        var percent = val / 100;
        window.scrollTo(0, startPos + diff * percent);
        if (time < duration) {
          // Continue moving
          requestId = window.requestAnimationFrame(loop);
        } else {
          window.cancelAnimationFrame(requestId);
        }
      };
      requestId = window.requestAnimationFrame(loop);
    };
    scrollToTarget(document.body);
  }
  function handleClick(e) {
    e.preventDefault();
    moveToTop();
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _btnRef$current, _btnRef$current2, _btnRef$current3;
    //Hide other pages button of back-to-top
    (_btnRef$current = btnRef.current) === null || _btnRef$current === void 0 ? void 0 : _btnRef$current.classList.remove('active');

    //
    (_btnRef$current2 = btnRef.current) === null || _btnRef$current2 === void 0 ? void 0 : _btnRef$current2.removeEventListener('pointerdown', handleClick);
    (_btnRef$current3 = btnRef.current) === null || _btnRef$current3 === void 0 ? void 0 : _btnRef$current3.addEventListener('pointerdown', handleClick);
    return function () {
      var _btnRef$current4, _btnRef$current5;
      (_btnRef$current4 = btnRef.current) === null || _btnRef$current4 === void 0 ? void 0 : _btnRef$current4.removeEventListener('pointerdown', handleClick);

      //Hide other pages button of back-to-top
      (_btnRef$current5 = btnRef.current) === null || _btnRef$current5 === void 0 ? void 0 : _btnRef$current5.classList.remove('active');
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "back-to-top",
    ref: btnRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: isAtRange ? 'active' : ''
  }, btnIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "40px",
    fill: "#000000",
    viewBox: "0 0 96.522 96.522"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M74.692,65.181l-9.044-7.321c1.319-5.557,1.988-11.532,1.988-17.761c0-19.963-14.052-38.367-18.719-39.988 c-0.426-0.147-0.887-0.147-1.313,0c-4.667,1.621-18.719,20.025-18.719,39.988c0,6.229,0.669,12.205,1.99,17.761l-9.045,7.321 c-0.541,0.438-0.815,1.127-0.724,1.817l3.69,27.787c0.104,0.787,0.663,1.438,1.425,1.658c0.765,0.22,1.582-0.029,2.092-0.638 l14.413-17.225c3.543,2.163,7.527,2.163,11.07,0l14.411,17.225c0.387,0.461,0.951,0.717,1.534,0.717 c0.186,0,0.373-0.026,0.558-0.079c0.762-0.221,1.32-0.871,1.425-1.658l3.69-27.787C75.507,66.309,75.233,65.619,74.692,65.181z M48.262,39.619c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S52.68,39.619,48.262,39.619z"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackToTop);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});