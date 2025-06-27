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

/***/ 993:
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

      /******/
      var __webpack_modules__ = {
        /***/357: /***/function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1061__) {
          /* harmony export */__nested_webpack_require_1061__.d(__webpack_exports__, {
            /* harmony export */"easeInOutQuad": function easeInOutQuad() {
              return (/* binding */_easeInOutQuad
              );
            },
            /* harmony export */"easeInQuad": function easeInQuad() {
              return (/* binding */_easeInQuad
              );
            },
            /* harmony export */"easeLinear": function easeLinear() {
              return (/* binding */_easeLinear
              );
            },
            /* harmony export */"easeOutQuad": function easeOutQuad() {
              return (/* binding */_easeOutQuad
              );
            }
            /* harmony export */
          });
          /* unused harmony exports easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack */
          /*
           * All easing functions
           * @link: https://easings.net
           * @param {Number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
           * @param {Number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
           * @param {Number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
           * @param {Number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
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
          function easeInSine(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
          }
          function easeOutSine(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
          }
          function easeInOutSine(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
          }
          function easeInExpo(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
          }
          function easeOutExpo(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
          }
          function easeInOutExpo(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
          function easeInCirc(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          }
          function easeOutCirc(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          }
          function easeInOutCirc(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          }
          function easeInCubic(t, b, c, d) {
            return c * (t /= d) * t * t + b;
          }
          function easeOutCubic(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          }
          function easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
          }
          function easeInQuart(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          }
          function easeOutQuart(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          }
          function easeInOutQuart(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          }
          function easeInQuint(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          }
          function easeOutQuint(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          }
          function easeInOutQuint(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          }
          function easeInElastic(t, b, c, d) {
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
          function easeOutElastic(t, b, c, d) {
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
          function easeInOutElastic(t, b, c, d) {
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
          function easeInBack(t, b, c, d) {
            var s = 1.70158;
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          }
          function easeOutBack(t, b, c, d) {
            var s = 1.70158;
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          }
          function easeInOutBack(t, b, c, d) {
            var s = 1.70158;
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          }

          /***/
        },

        /***/65: /***/function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_8432__) {
          /* harmony export */__nested_webpack_require_8432__.d(__webpack_exports__, {
            /* harmony export */"setDefaultOptions": function setDefaultOptions() {
              return (/* binding */_setDefaultOptions
              );
            }
            /* harmony export */
          });
          /* harmony import */
          var _validate__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_8432__(258);
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
            if ((0, _validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(props)) {
              var defaultConfigValues = Object.values(props);
              Object.keys(props).forEach(function (prop, index) {
                // Well-formed string type
                Object.keys(options).forEach(function (prop2, index2) {
                  if (prop2 === prop) {
                    var _v = options[prop2];
                    if (_v == 'true') _v = true;
                    if (_v == 'false') _v = false;
                    if ((0, _validate__WEBPACK_IMPORTED_MODULE_0__.isValidNumeric)(_v)) _v = parseFloat(_v);
                    if ((0, _validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
                    options[prop2] = _v;
                  }
                });

                //
                if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
              });
            }
            return options;
          }

          /***/
        },

        /***/258: /***/function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_11060__) {
          /* harmony export */__nested_webpack_require_11060__.d(__webpack_exports__, {
            /* harmony export */"isJSON": function isJSON() {
              return (/* binding */_isJSON
              );
            },
            /* harmony export */"isValidNumeric": function isValidNumeric() {
              return (/* binding */_isValidNumeric
              );
            }
            /* harmony export */
          });
          /* unused harmony exports isEmpty, isNumber, isInt, isEmail, isTel, isMobile */
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          /**
           * Check if a string is a valid number
           * @param str - The string to check
           * @returns boolean indicating if the string is a valid number
           */
          function _isValidNumeric(str) {
            if (typeof str !== "string") return false; // we only process strings!
            if (!isNaN(Number(str)) &&
            // use type coercion to parse the _entirety_ of the string
            !isNaN(parseFloat(str)) // ensure strings of whitespace fail
            ) {
              return true;
            }
            return false;
          }

          /**
           * Determine whether it is in JSON format
           * @param str - The value to check
           * @returns boolean indicating if the value is valid JSON
           */
          function _isJSON(str) {
            if (typeof str === 'string' && str.length > 0) {
              if (str.replace(/\"\"/g, '').replace(/\,/g, '') === '[{}]') {
                return false;
              }
              if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                return true;
              }
              return false;
            }
            if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
              return true;
            }
            return false;
          }

          /**
           * Check if input is empty
           * @param input - The input to check (string or array of strings)
           * @returns boolean indicating if the input is empty
           */
          function isEmpty(input) {
            if (Array.isArray(input)) {
              return input.some(function (str) {
                return !str.replace(/\s/g, '').length === true;
              });
            }
            return !input.replace(/\s/g, '').length === true;
          }

          /**
           * Check if input is a valid number
           * @param input - The input to check
           * @returns boolean indicating if the input is a valid number
           */
          function isNumber(input) {
            var reg = /^[\d|\.|,]+$/;
            return reg.test(input);
          }

          /**
           * Check if input is a valid integer
           * @param input - The input to check
           * @returns boolean indicating if the input is a valid integer
           */
          function isInt(input) {
            if (input === "") {
              return false;
            }
            var reg = /\D+/;
            return !reg.test(input);
          }

          /**
           * Check if input is a valid email address
           * @param input - The input to check
           * @returns boolean indicating if the input is a valid email
           */
          function isEmail(input) {
            var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
            return reg.test(input);
          }

          /**
           * Check if input is a valid telephone number
           * @param input - The input to check
           * @returns boolean indicating if the input is a valid telephone number
           */
          function isTel(input) {
            var reg = /^[0-9- ]{7,20}$/;
            return reg.test(input);
          }

          /**
           * Check if input is a valid mobile number
           * @param input - The input to check
           * @returns boolean indicating if the input is a valid mobile number
           */
          function isMobile(input) {
            var reg = /^1[0-9]{10}$/;
            return reg.test(input);
          }

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
      function __nested_webpack_require_16046__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_16046__);
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
        /******/__nested_webpack_require_16046__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_16046__.o(definition, key) && !__nested_webpack_require_16046__.o(exports, key)) {
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
        /******/__nested_webpack_require_16046__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_16046__.r = function (exports) {
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
        __nested_webpack_require_16046__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_16046__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var _easing__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16046__(357);
        /* harmony import */
        var _initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16046__(65);
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
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
          if (_typeof(curElement) === ( true ? "undefined" : 0)) return;

          // Set a default configuration
          config = (0, _initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__.setDefaultOptions)({
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
                val = (0, _easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
                break;
              case "ease-in":
                val = (0, _easing__WEBPACK_IMPORTED_MODULE_1__.easeInQuad)(time, from, to - from, duration);
                break;
              case "ease-out":
                val = (0, _easing__WEBPACK_IMPORTED_MODULE_1__.easeOutQuad)(time, from, to - from, duration);
                break;
              case "ease-in-out":
                val = (0, _easing__WEBPACK_IMPORTED_MODULE_1__.easeInOutQuad)(time, from, to - from, duration);
                break;
              default:
                val = (0, _easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
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
        var __WEBPACK_DEFAULT_EXPORT__ = animateStyles;
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accordion": () => (/* reexport */ src_Accordion),
  "AccordionItem": () => (/* reexport */ src_AccordionItem)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/AccordionItem.tsx
var _excluded = ["heightObserver", "index", "animSpeed", "easeType", "arrowOnly", "itemClassName", "itemContentWrapperClassName", "itemContentClassName", "itemTriggerClassName", "itemHeaderClassName", "itemTriggerIcon", "itemStyle", "activeItem", "title", "onToggleEv", "onTransitionEnd", "onItemCollapse", "isExpanded", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var AccordionItem = function AccordionItem(props) {
  var heightObserver = props.heightObserver,
    index = props.index,
    animSpeed = props.animSpeed,
    easeType = props.easeType,
    arrowOnly = props.arrowOnly,
    itemClassName = props.itemClassName,
    itemContentWrapperClassName = props.itemContentWrapperClassName,
    itemContentClassName = props.itemContentClassName,
    itemTriggerClassName = props.itemTriggerClassName,
    itemHeaderClassName = props.itemHeaderClassName,
    itemTriggerIcon = props.itemTriggerIcon,
    itemStyle = props.itemStyle,
    activeItem = props.activeItem,
    title = props.title,
    onToggleEv = props.onToggleEv,
    onTransitionEnd = props.onTransitionEnd,
    onItemCollapse = props.onItemCollapse,
    controlledExpanded = props.isExpanded,
    children = props.children,
    attributes = _objectWithoutProperties(props, _excluded);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    internalExpanded = _useState2[0],
    setInternalExpanded = _useState2[1];
  var isFirstRender = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  var initialHeightSet = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);

  // Use controlled or uncontrolled expanded state
  var isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  var observer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentWrapperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var iconRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var handleToggle = function handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (controlledExpanded === undefined) {
      setInternalExpanded(function (prev) {
        return !prev;
      });
    }
    onToggleEv === null || onToggleEv === void 0 ? void 0 : onToggleEv(e);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (triggerRef.current && typeof onItemCollapse === 'function') {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      onItemCollapse(triggerRef.current, iconRef.current, isExpanded);
    }
  }, [isExpanded, onItemCollapse]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (contentWrapperRef.current && !initialHeightSet.current) {
      initialHeightSet.current = true;
      var shouldBeExpanded = typeof activeItem !== 'undefined' && activeItem !== false;
      if (controlledExpanded === undefined) {
        setInternalExpanded(shouldBeExpanded);
      }

      // Set initial height when activeItem is true
      if (shouldBeExpanded && contentRef.current) {
        var contentHeight = contentRef.current.offsetHeight;
        contentWrapperRef.current.style.height = "".concat(contentHeight, "px");
      }
    }
  }, [activeItem, controlledExpanded]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (parseFloat(heightObserver) !== index) return;

    // When the content height changes dynamically, change the height of the wrapper
    if (contentRef.current && contentWrapperRef.current) {
      var _contentPadding = window.getComputedStyle(contentRef.current).getPropertyValue('padding-bottom');
      observer.current = new ResizeObserver(function (entries) {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach(function (entry) {
          if (contentWrapperRef.current !== null) contentWrapperRef.current.style.height = entry.contentRect.bottom + parseFloat(_contentPadding) + 'px';
        });
      });
      observer.current.observe(contentRef.current);
    }
    return function () {
      var _observer$current;
      if (contentRef.current) (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(contentRef.current);
    };
  }, [heightObserver]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({}, attributes, {
    "data-index": index,
    className: (0,cls.combinedCls)('custom-accordion-item', (0,cls.clsWrite)(itemClassName, 'accordion-item'), isExpanded ? ' active' : ''),
    onClick: arrowOnly ? undefined : handleToggle,
    onTransitionEnd: typeof onTransitionEnd === 'function' ? onTransitionEnd : undefined,
    "aria-expanded": isExpanded ? 'true' : 'false',
    style: typeof itemStyle !== 'undefined' ? itemStyle : {}
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-header', (0,cls.clsWrite)(itemHeaderClassName, 'accordion-header position-relative')),
    role: "presentation"
  }, arrowOnly ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: triggerRef,
    tabIndex: -1,
    className: (0,cls.combinedCls)('custom-accordion-trigger', (0,cls.clsWrite)(itemTriggerClassName, 'accordion-button'), isExpanded ? 'active' : 'collapsed')
  }, title) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    ref: triggerRef,
    tabIndex: -1,
    className: (0,cls.combinedCls)('custom-accordion-trigger', (0,cls.clsWrite)(itemTriggerClassName, 'accordion-button'), isExpanded ? 'active' : 'collapsed'),
    type: "button"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: iconRef,
    onClick: !arrowOnly ? undefined : handleToggle,
    className: "custom-accordion-trigger__icon",
    style: !arrowOnly ? {
      pointerEvents: 'none'
    } : {
      cursor: 'pointer'
    }
  }, itemTriggerIcon)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: contentWrapperRef,
    className: (0,cls.combinedCls)('custom-accordion-content__wrapper w-100', (0,cls.clsWrite)(itemContentWrapperClassName, 'accordion-collapse')),
    role: "tabpanel",
    style: {
      height: '0',
      overflow: 'hidden' // "overflow" affects the width, so add `w-100` to `custom-accordion-content__wrapper`
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-content', (0,cls.clsWrite)(itemContentClassName, 'accordion-body')),
    ref: contentRef
  }, children))));
};
/* harmony default export */ const src_AccordionItem = (AccordionItem);
// EXTERNAL MODULE: ../Utils/dist/cjs/anim.js
var anim = __webpack_require__(993);
var anim_default = /*#__PURE__*/__webpack_require__.n(anim);
;// CONCATENATED MODULE: ./src/Accordion.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Accordion_extends() { Accordion_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Accordion_extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Accordion_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Accordion_arrayLikeToArray(arr); }
function Accordion_slicedToArray(arr, i) { return Accordion_arrayWithHoles(arr) || Accordion_iterableToArrayLimit(arr, i) || Accordion_unsupportedIterableToArray(arr, i) || Accordion_nonIterableRest(); }
function Accordion_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Accordion_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Accordion_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Accordion_arrayLikeToArray(o, minLen); }
function Accordion_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Accordion_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Accordion_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





// Adapt the easing parameters of TweenMax
var EasingList = /*#__PURE__*/function (EasingList) {
  EasingList["linear"] = "linear";
  EasingList["easeIn"] = "ease-in";
  EasingList["easeOut"] = "ease-out";
  EasingList["easeInOut"] = "ease-in-out";
  return EasingList;
}({});
var Accordion = function Accordion(props) {
  var wrapperClassName = props.wrapperClassName,
    defaultActiveIndex = props.defaultActiveIndex,
    _props$defaultActiveA = props.defaultActiveAll,
    defaultActiveAll = _props$defaultActiveA === void 0 ? false : _props$defaultActiveA,
    duration = props.duration,
    easing = props.easing,
    _props$alternateColla = props.alternateCollapse,
    alternateCollapse = _props$alternateColla === void 0 ? true : _props$alternateColla,
    _props$arrowOnly = props.arrowOnly,
    arrowOnly = _props$arrowOnly === void 0 ? false : _props$arrowOnly,
    onChange = props.onChange,
    children = props.children;
  var animSpeed = duration || 200;
  var easeType = typeof alternateCollapse === 'undefined' ? EasingList['linear'] : EasingList[easing];
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var animPlaceholderRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = Accordion_slicedToArray(_useState, 2),
    animOK = _useState2[0],
    setAnimOK = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(-1),
    _useState4 = Accordion_slicedToArray(_useState3, 2),
    heightObserver = _useState4[0],
    setHeightObserver = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Set()),
    _useState6 = Accordion_slicedToArray(_useState5, 2),
    expandedItems = _useState6[0],
    setExpandedItems = _useState6[1]; // Keep track of all expanded items
  var animationInProgress = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  function handleClickItem(e) {
    if (animationInProgress.current) return;
    if (e.target.closest('.custom-accordion-header') === null) return;
    if (animOK) return;
    animationInProgress.current = true;
    var reactDomEl = arrowOnly ? e.currentTarget.closest('.custom-accordion-item') : e.currentTarget;
    var curIndex = parseInt(reactDomEl.dataset.index);
    var reactDomWrapperEl = rootRef.current;
    var $li = reactDomWrapperEl.querySelectorAll('.custom-accordion-item');
    var $allContent = reactDomWrapperEl.querySelectorAll('.custom-accordion-content__wrapper');
    var $curContent = reactDomEl.querySelector('.custom-accordion-content__wrapper');
    if (reactDomEl.getAttribute('aria-expanded') === 'false' || reactDomEl.getAttribute('aria-expanded') === null) {
      setAnimOK(true);
      setTimeout(function () {
        setAnimOK(false);
      }, animSpeed);
      if (alternateCollapse) {
        // Hide other all sibling content
        Array.prototype.forEach.call($allContent, function (node) {
          if (node.clientHeight > 0) {
            anim_default()(node, {
              startHeight: node.scrollHeight,
              endHeight: 0,
              speed: animSpeed
            }, easeType, function () {
              animationInProgress.current = false;
            });
          }
        });

        // Update all items to collapsed state
        Array.prototype.forEach.call($li, function (node) {
          node.setAttribute('aria-expanded', 'false');
        });

        // Update expanded items state
        setExpandedItems(new Set([curIndex]));
      } else {
        // Add current item to expanded items
        setExpandedItems(function (prev) {
          return new Set([].concat(_toConsumableArray(prev), [curIndex]));
        });
      }
      reactDomEl.setAttribute('aria-expanded', 'true');
      anim_default()($curContent, {
        startHeight: 0,
        endHeight: $curContent.scrollHeight,
        speed: animSpeed
      }, easeType, function () {
        setHeightObserver(curIndex);
        animationInProgress.current = false;
      });
    } else {
      reactDomEl.setAttribute('aria-expanded', 'false');

      // Remove current item from expanded items
      setExpandedItems(function (prev) {
        var newSet = new Set(prev);
        newSet["delete"](curIndex);
        return newSet;
      });
      anim_default()($curContent, {
        startHeight: $curContent.scrollHeight,
        endHeight: 0,
        speed: animSpeed
      }, easeType, function () {
        animationInProgress.current = false;
      });
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(reactDomEl, curIndex);
  }

  // Initialize expanded items based on defaultActiveIndex or defaultActiveAll
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (defaultActiveAll && children && rootRef.current && animPlaceholderRef.current) {
      var allIndices = Array.from({
        length: children.length
      }, function (_, i) {
        return i;
      });
      setExpandedItems(new Set(allIndices));

      // Actually expand all items without animation
      var $allItems = rootRef.current.querySelectorAll('.custom-accordion-item');
      Array.prototype.forEach.call($allItems, function (node, index) {
        var $curContent = node.querySelector('.custom-accordion-content__wrapper');
        if ($curContent) {
          // !!! Don't use the .custom-accordion-contentwrapper height directly, it may be more than a dozen pixels
          $curContent.style.height = "".concat(node.querySelector('.custom-accordion-content__wrapper > .custom-accordion-content').scrollHeight, "px");
        }
      });
      anim_default()(animPlaceholderRef.current, {
        startHeight: 0,
        endHeight: 10,
        speed: animSpeed
      }, easeType, function () {
        setTimeout(function () {}, animSpeed);
      });
    } else if (defaultActiveIndex !== undefined) {
      var initialExpanded = new Set();
      if (Array.isArray(defaultActiveIndex)) {
        defaultActiveIndex.forEach(function (index) {
          return initialExpanded.add(index);
        });
      } else if (typeof defaultActiveIndex === 'number') {
        initialExpanded.add(defaultActiveIndex);
      }
      setExpandedItems(initialExpanded);
    }
  }, [defaultActiveIndex, defaultActiveAll, children]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-anim-placeholder",
    style: {
      display: 'none'
    },
    ref: animPlaceholderRef
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('custom-accordion-item', (0,cls.clsWrite)(wrapperClassName, 'accordion')),
    role: "tablist",
    ref: rootRef
  }, children != null ? children.map(function (item, i) {
    var childProps = _objectSpread({}, item.props);
    var _defaultActive = false;
    if (Array.isArray(defaultActiveIndex)) {
      _defaultActive = defaultActiveIndex.includes(i);
    } else if (typeof defaultActiveIndex === 'number') {
      _defaultActive = defaultActiveIndex === i;
    }
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_AccordionItem, Accordion_extends({
      key: "item" + i,
      index: i,
      defaultActiveAll: defaultActiveAll,
      animSpeed: animSpeed,
      arrowOnly: arrowOnly,
      heightObserver: heightObserver,
      activeItem: _defaultActive,
      onToggleEv: handleClickItem,
      isExpanded: expandedItems.has(i) // Both controlled and uncontrolled modes are implemented
    }, childProps));
  }) : null));
};
/* harmony default export */ const src_Accordion = (Accordion);
;// CONCATENATED MODULE: ./src/index.tsx


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});