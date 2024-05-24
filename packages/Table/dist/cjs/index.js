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

/***/ 456:
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
      function __nested_webpack_require_1471__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1471__);
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
        /******/__nested_webpack_require_1471__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1471__.o(definition, key) && !__nested_webpack_require_1471__.o(exports, key)) {
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
        /******/__nested_webpack_require_1471__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1471__.r = function (exports) {
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
        // ESM COMPAT FLAG
        __nested_webpack_require_1471__.r(__webpack_exports__);

        // EXPORTS
        __nested_webpack_require_1471__.d(__webpack_exports__, {
          "addTreeDepth": function addTreeDepth() {
            return (/* reexport */_addTreeDepth
            );
          },
          "addTreeIndent": function addTreeIndent() {
            return (/* reexport */_addTreeIndent
            );
          },
          "animateStyles": function animateStyles() {
            return (/* reexport */anim
            );
          },
          "arrayBufferToUint8Array": function arrayBufferToUint8Array() {
            return (/* reexport */_arrayBufferToUint8Array
            );
          },
          "arrayToBlob": function arrayToBlob() {
            return (/* reexport */_arrayToBlob
            );
          },
          "arrayToStream": function arrayToStream() {
            return (/* reexport */_arrayToStream
            );
          },
          "arrayToUint8array": function arrayToUint8array() {
            return (/* reexport */_arrayToUint8array
            );
          },
          "base64ToArrayBuffer": function base64ToArrayBuffer() {
            return (/* reexport */_base64ToArrayBuffer
            );
          },
          "blobToUint8array": function blobToUint8array() {
            return (/* reexport */_blobToUint8array
            );
          },
          "convertArrToValByBraces": function convertArrToValByBraces() {
            return (/* reexport */_convertArrToValByBraces
            );
          },
          "convertArrToValByBrackets": function convertArrToValByBrackets() {
            return (/* reexport */_convertArrToValByBrackets
            );
          },
          "convertStringByCommaToValByBraces": function convertStringByCommaToValByBraces() {
            return (/* reexport */_convertStringByCommaToValByBraces
            );
          },
          "convertStringByCommaToValByBrackets": function convertStringByCommaToValByBrackets() {
            return (/* reexport */_convertStringByCommaToValByBrackets
            );
          },
          "convertTree": function convertTree() {
            return (/* reexport */_convertTree
            );
          },
          "dateFormat": function dateFormat() {
            return (/* reexport */_dateFormat
            );
          },
          "debounce": function debounce() {
            return (/* reexport */_debounce
            );
          },
          "decodeBase64Str": function decodeBase64Str() {
            return (/* reexport */_decodeBase64Str
            );
          },
          "deepClone": function deepClone() {
            return (/* reexport */_deepClone
            );
          },
          "easeInBack": function easeInBack() {
            return (/* reexport */_easeInBack
            );
          },
          "easeInCirc": function easeInCirc() {
            return (/* reexport */_easeInCirc
            );
          },
          "easeInCubic": function easeInCubic() {
            return (/* reexport */_easeInCubic
            );
          },
          "easeInElastic": function easeInElastic() {
            return (/* reexport */_easeInElastic
            );
          },
          "easeInExpo": function easeInExpo() {
            return (/* reexport */_easeInExpo
            );
          },
          "easeInOutBack": function easeInOutBack() {
            return (/* reexport */_easeInOutBack
            );
          },
          "easeInOutCirc": function easeInOutCirc() {
            return (/* reexport */_easeInOutCirc
            );
          },
          "easeInOutCubic": function easeInOutCubic() {
            return (/* reexport */_easeInOutCubic
            );
          },
          "easeInOutElastic": function easeInOutElastic() {
            return (/* reexport */_easeInOutElastic
            );
          },
          "easeInOutExpo": function easeInOutExpo() {
            return (/* reexport */_easeInOutExpo
            );
          },
          "easeInOutQuad": function easeInOutQuad() {
            return (/* reexport */_easeInOutQuad
            );
          },
          "easeInOutQuart": function easeInOutQuart() {
            return (/* reexport */_easeInOutQuart
            );
          },
          "easeInOutQuint": function easeInOutQuint() {
            return (/* reexport */_easeInOutQuint
            );
          },
          "easeInOutSine": function easeInOutSine() {
            return (/* reexport */_easeInOutSine
            );
          },
          "easeInQuad": function easeInQuad() {
            return (/* reexport */_easeInQuad
            );
          },
          "easeInQuart": function easeInQuart() {
            return (/* reexport */_easeInQuart
            );
          },
          "easeInQuint": function easeInQuint() {
            return (/* reexport */_easeInQuint
            );
          },
          "easeInSine": function easeInSine() {
            return (/* reexport */_easeInSine
            );
          },
          "easeLinear": function easeLinear() {
            return (/* reexport */_easeLinear
            );
          },
          "easeOutBack": function easeOutBack() {
            return (/* reexport */_easeOutBack
            );
          },
          "easeOutCirc": function easeOutCirc() {
            return (/* reexport */_easeOutCirc
            );
          },
          "easeOutCubic": function easeOutCubic() {
            return (/* reexport */_easeOutCubic
            );
          },
          "easeOutElastic": function easeOutElastic() {
            return (/* reexport */_easeOutElastic
            );
          },
          "easeOutExpo": function easeOutExpo() {
            return (/* reexport */_easeOutExpo
            );
          },
          "easeOutQuad": function easeOutQuad() {
            return (/* reexport */_easeOutQuad
            );
          },
          "easeOutQuart": function easeOutQuart() {
            return (/* reexport */_easeOutQuart
            );
          },
          "easeOutQuint": function easeOutQuint() {
            return (/* reexport */_easeOutQuint
            );
          },
          "easeOutSine": function easeOutSine() {
            return (/* reexport */_easeOutSine
            );
          },
          "extractContentsOfBraces": function extractContentsOfBraces() {
            return (/* reexport */_extractContentsOfBraces
            );
          },
          "extractContentsOfBrackets": function extractContentsOfBrackets() {
            return (/* reexport */_extractContentsOfBrackets
            );
          },
          "extractContentsOfParentheses": function extractContentsOfParentheses() {
            return (/* reexport */_extractContentsOfParentheses
            );
          },
          "flatData": function flatData() {
            return (/* reexport */_flatData
            );
          },
          "flatTree": function flatTree() {
            return (/* reexport */_flatTree
            );
          },
          "getAbsoluteCoordinates": function getAbsoluteCoordinates() {
            return (/* reexport */_getAbsoluteCoordinates
            );
          },
          "getAbsolutePositionOfStage": function getAbsolutePositionOfStage() {
            return (/* reexport */_getAbsolutePositionOfStage
            );
          },
          "getAllDepth": function getAllDepth() {
            return (/* reexport */_getAllDepth
            );
          },
          "getAllSiblings": function getAllSiblings() {
            return (/* reexport */_getAllSiblings
            );
          },
          "getCalendarDate": function getCalendarDate() {
            return (/* reexport */_getCalendarDate
            );
          },
          "getChildren": function getChildren() {
            return (/* reexport */_getChildren
            );
          },
          "getCurrentDate": function getCurrentDate() {
            return (/* reexport */_getCurrentDate
            );
          },
          "getCurrentDay": function getCurrentDay() {
            return (/* reexport */_getCurrentDay
            );
          },
          "getCurrentMonth": function getCurrentMonth() {
            return (/* reexport */_getCurrentMonth
            );
          },
          "getCurrentYear": function getCurrentYear() {
            return (/* reexport */_getCurrentYear
            );
          },
          "getDocument": function getDocument() {
            return (/* reexport */_getDocument
            );
          },
          "getFirstAndLastMonthDay": function getFirstAndLastMonthDay() {
            return (/* reexport */_getFirstAndLastMonthDay
            );
          },
          "getFullTime": function getFullTime() {
            return (/* reexport */_getFullTime
            );
          },
          "getLastDayInMonth": function getLastDayInMonth() {
            return (/* reexport */_getLastDayInMonth
            );
          },
          "getNextMonthDate": function getNextMonthDate() {
            return (/* reexport */_getNextMonthDate
            );
          },
          "getNextSiblings": function getNextSiblings() {
            return (/* reexport */_getNextSiblings
            );
          },
          "getNextYearDate": function getNextYearDate() {
            return (/* reexport */_getNextYearDate
            );
          },
          "getNow": function getNow() {
            return (/* reexport */_getNow
            );
          },
          "getOffset": function getOffset() {
            return (/* reexport */_getOffset
            );
          },
          "getParents": function getParents() {
            return (/* reexport */_getParents
            );
          },
          "getPosition": function getPosition() {
            return (/* reexport */_getPosition
            );
          },
          "getPrevMonthDate": function getPrevMonthDate() {
            return (/* reexport */_getPrevMonthDate
            );
          },
          "getPrevYearDate": function getPrevYearDate() {
            return (/* reexport */_getPrevYearDate
            );
          },
          "getPreviousSiblings": function getPreviousSiblings() {
            return (/* reexport */_getPreviousSiblings
            );
          },
          "getSpecifiedDate": function getSpecifiedDate() {
            return (/* reexport */_getSpecifiedDate
            );
          },
          "getTextWidth": function getTextWidth() {
            return (/* reexport */_getTextWidth
            );
          },
          "getTodayDate": function getTodayDate() {
            return (/* reexport */_getTodayDate
            );
          },
          "getTomorrowDate": function getTomorrowDate() {
            return (/* reexport */_getTomorrowDate
            );
          },
          "getTransitionDuration": function getTransitionDuration() {
            return (/* reexport */_getTransitionDuration
            );
          },
          "getYesterdayDate": function getYesterdayDate() {
            return (/* reexport */_getYesterdayDate
            );
          },
          "isElement": function isElement() {
            return (/* reexport */_isElement
            );
          },
          "isHTMLElement": function isHTMLElement() {
            return (/* reexport */_isHTMLElement
            );
          },
          "isInViewport": function isInViewport() {
            return (/* reexport */_isInViewport
            );
          },
          "isJSON": function isJSON() {
            return (/* reexport */_isJSON
            );
          },
          "isNode": function isNode() {
            return (/* reexport */_isNode
            );
          },
          "isNumeric": function isNumeric() {
            return (/* reexport */_isNumeric
            );
          },
          "isRootElement": function isRootElement() {
            return (/* reexport */_isRootElement
            );
          },
          "isShadowRoot": function isShadowRoot() {
            return (/* reexport */_isShadowRoot
            );
          },
          "isValidDate": function isValidDate() {
            return (/* reexport */_isValidDate
            );
          },
          "isValidDay": function isValidDay() {
            return (/* reexport */_isValidDay
            );
          },
          "isValidHours": function isValidHours() {
            return (/* reexport */_isValidHours
            );
          },
          "isValidMinutesAndSeconds": function isValidMinutesAndSeconds() {
            return (/* reexport */_isValidMinutesAndSeconds
            );
          },
          "isValidMonth": function isValidMonth() {
            return (/* reexport */_isValidMonth
            );
          },
          "isValidNumeric": function isValidNumeric() {
            return (/* reexport */_isValidNumeric
            );
          },
          "isValidYear": function isValidYear() {
            return (/* reexport */_isValidYear
            );
          },
          "nodeContains": function nodeContains() {
            return (/* reexport */_nodeContains
            );
          },
          "padZero": function padZero() {
            return (/* reexport */_padZero
            );
          },
          "readStream": function readStream() {
            return (/* reexport */_readStream2
            );
          },
          "setDateDays": function setDateDays() {
            return (/* reexport */_setDateDays
            );
          },
          "setDateHours": function setDateHours() {
            return (/* reexport */_setDateHours
            );
          },
          "setDateMinutes": function setDateMinutes() {
            return (/* reexport */_setDateMinutes
            );
          },
          "setDefaultOptions": function setDefaultOptions() {
            return (/* reexport */_setDefaultOptions
            );
          },
          "throttle": function throttle() {
            return (/* reexport */_throttle
            );
          },
          "timestampToDate": function timestampToDate() {
            return (/* reexport */_timestampToDate
            );
          },
          "toBinary": function toBinary() {
            return (/* reexport */_toBinary
            );
          },
          "uint8arrayToArr": function uint8arrayToArr() {
            return (/* reexport */_uint8arrayToArr
            );
          },
          "uint8arrayToBase64Str": function uint8arrayToBase64Str() {
            return (/* reexport */_uint8arrayToBase64Str
            );
          },
          "useAutosizeTextArea": function useAutosizeTextArea() {
            return (/* reexport */hooks_useAutosizeTextArea
            );
          },
          "useClickOutside": function useClickOutside() {
            return (/* reexport */hooks_useClickOutside
            );
          },
          "useDebounce": function useDebounce() {
            return (/* reexport */hooks_useDebounce
            );
          },
          "useDraggable": function useDraggable() {
            return (/* reexport */hooks_useDraggable
            );
          },
          "useInterval": function useInterval() {
            return (/* reexport */hooks_useInterval
            );
          },
          "useKeyPress": function useKeyPress() {
            return (/* reexport */hooks_useKeyPress
            );
          },
          "useThrottle": function useThrottle() {
            return (/* reexport */hooks_useThrottle
            );
          },
          "useWindowScroll": function useWindowScroll() {
            return (/* reexport */hooks_useWindowScroll
            );
          }
        });
        ; // CONCATENATED MODULE: ./src/libs/easing.ts
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
        ; // CONCATENATED MODULE: ./src/libs/init-default-options.ts
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
        ; // CONCATENATED MODULE: ./src/libs/anim.ts
        function anim_typeof(obj) {
          "@babel/helpers - typeof";

          return anim_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, anim_typeof(obj);
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
          if (anim_typeof(curElement) === ( true ? "undefined" : 0)) return;

          // Set a default configuration
          config = _setDefaultOptions({
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
                val = _easeLinear(time, from, to - from, duration);
                break;
              case "ease-in":
                val = _easeInQuad(time, from, to - from, duration);
                break;
              case "ease-out":
                val = _easeOutQuad(time, from, to - from, duration);
                break;
              case "ease-in-out":
                val = _easeInOutQuad(time, from, to - from, duration);
                break;
              default:
                val = _easeLinear(time, from, to - from, duration);
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
        var anim = animateStyles;
        ; // CONCATENATED MODULE: ./src/libs/performance.ts
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
        ; // CONCATENATED MODULE: ./src/libs/dom.ts
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }
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
         * Dom Utilities
         * @param {HTMLElement} el      - Element
         * @param  {?String} filter      - A filter string
         * @returns HtmlElementCollection
         */
        function matches(el, filter) {
          if (el && el.nodeType === 1) {
            if (filter) {
              return el.matches(filter);
            }
            return true;
          }
          return false;
        }

        // the next siblings
        function _getNextSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          while (el = el.nextSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // previous siblings
        function _getPreviousSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          while (el = el.previousSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // parent and get all the siblings
        function _getAllSiblings(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sibs = [];
          el = el.parentNode.firstChild;
          while (el = el.nextSibling) {
            if (matches(el, filter)) {
              sibs.push(el);
            }
          }
          return sibs;
        }

        // all parent nodes
        function _getParents(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var parents = [];
          while (el = el.parentNode) {
            if (matches(el, filter)) {
              parents.push(el);
            }
          }
          return parents;
        }

        // all child nodes
        function _getChildren(el) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          all.push.apply(all, _toConsumableArray(el.childNodes));
          var _iterator = _createForOfIteratorHelper(el.childNodes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              _getChildren(child, filter, all);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var res = all.filter(function (item) {
            return matches(item, filter);
          });
          return res;
        }
        function _isRootElement(element) {
          return element.matches('html,body');
        }
        function _getDocument(node) {
          if (typeof node === 'undefined') {
            return document;
          } else {
            return node.ownerDocument;
          }
        }
        function _isNode(value) {
          return value instanceof Node;
        }
        function _isElement(value) {
          return value instanceof Element;
        }
        function _isHTMLElement(value) {
          return value instanceof HTMLElement;
        }
        function _isShadowRoot(value) {
          // Browsers without `ShadowRoot` support.
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          return value instanceof ShadowRoot;
        }

        /* console.log(nodeContains(document.body, document.getElementById('obj'))) */
        function _nodeContains(parent, child) {
          var _child$getRootNode;
          if (!parent || !child) {
            return false;
          }
          var rootNode = (_child$getRootNode = child.getRootNode) === null || _child$getRootNode === void 0 ? void 0 : _child$getRootNode.call(child);

          // First, attempt with faster native method
          if (parent.contains(child)) {
            return true;
          }

          // then fallback to custom implementation with Shadow DOM support
          if (rootNode && _isShadowRoot(rootNode)) {
            var next = child;
            while (next) {
              if (parent === next) {
                return true;
              }
              // @ts-ignore
              next = next.parentNode || next.host;
            }
          }

          // Give up, the result is false
          return false;
        }
        ; // CONCATENATED MODULE: ./src/libs/get-element-property.ts
        function get_element_property_typeof(obj) {
          "@babel/helpers - typeof";

          return get_element_property_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, get_element_property_typeof(obj);
        }
        /**
         * Get the -webkit-transition-duration property
         *
         * @param {HTMLElement} el - A DOM node containing one selector to match against.
         * @return {number}    - Returns a pure number.
         */
        function _getTransitionDuration(el) {
          if (get_element_property_typeof(el) === ( true ? "undefined" : 0)) {
            return 0;
          }
          var style = window.getComputedStyle(el),
            duration = style.webkitTransitionDuration,
            delay = style.webkitTransitionDelay;
          if (get_element_property_typeof(duration) != ( true ? "undefined" : 0)) {
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
        ; // CONCATENATED MODULE: ./src/libs/tree.ts
        function tree_typeof(obj) {
          "@babel/helpers - typeof";

          return tree_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, tree_typeof(obj);
        }
        var _excluded = ["children"];
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
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return tree_typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (tree_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (tree_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function tree_toConsumableArray(arr) {
          return tree_arrayWithoutHoles(arr) || tree_iterableToArray(arr) || tree_unsupportedIterableToArray(arr) || tree_nonIterableSpread();
        }
        function tree_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function tree_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return tree_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tree_arrayLikeToArray(o, minLen);
        }
        function tree_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function tree_arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return tree_arrayLikeToArray(arr);
        }
        function tree_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _objectDestructuringEmpty(obj) {
          if (obj == null) throw new TypeError("Cannot destructure " + obj);
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
        /**
         * Convert Tree
         * @param {Array} arr                    - Flat array
         * @param  {?string | ?number} parentId  - Parent id
         * @param  {?string} keyId               - Key value of id.
         * @param  {?string} keyParentId         - Key value of parent id.
         * @returns Array
         */
        function _convertTree(arr) {
          var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var keyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
          var keyParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent_id';
          if (!parentId) {
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(function (item) {
              return !item[keyParentId];
            }).map(function (item) {
              // Query all child nodes by parent node ID
              item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
              return item;
            });
          } else {
            return arr.filter(function (item) {
              return item[keyParentId] === parentId;
            }).map(function (item) {
              // Query all child nodes by parent node ID
              item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
              return item;
            });
          }
        }

        /**
         * Flat tree
         * @param {Array} arr                    - Hierarchical array
         * @returns Array
         */
        function _flatTree(arr) {
          var flatData = function flatData(_ref) {
            var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
            var _rest$children = rest.children,
              children = _rest$children === void 0 ? [] : _rest$children;
            return [_objectSpread({}, rest)].concat(tree_toConsumableArray(children.flatMap(flatData)));
          };
          var result = arr.flatMap(flatData);

          //remove children from item
          result = result.map(function (item) {
            delete item.children;
            return item;
          });
          return result;
        }

        /**
         * Get all depth
         * @param {Object} node 
         * @returns Number
         */
        function _getAllDepth(arr) {
          var count = function count(children) {
            return children.reduce(function (depth, child) {
              return Math.max(depth, 1 + count(child.children)); // increment depth of children by 1, and compare it with accumulated depth of other children within the same element
            }, 0); //default value 0 that's returned if there are no children
          };

          return count(arr);
        }

        /**
        * Add depth to each item in the tree
        * @param {Array} arr       - Hierarchical array
        * @param  {?string} keyId               - Key value of id.
        * @param  {?string} keyParentId         - Key value of parent id.
        * @param  {?number} depth               - Depth of the item.
        * @returns Number
        */
        function _addTreeDepth(arr) {
          var keyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
          var parentItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          return arr.reduce(function (acc, el) {
            var children = el.children,
              otherProps = _objectWithoutProperties(el, _excluded);
            acc.push(_objectSpread(_objectSpread({}, otherProps), {}, {
              parentItem: parentItem,
              depth: depth
            }));
            if (children) {
              return acc.concat(_addTreeDepth(children, keyId, el[keyId], depth + 1));
            }
            return acc;
          }, []);
        }

        /**
         * Add indent placeholder
         * @param {Array} arr                    - Flat array
         * @param  {?string} placeholder         - String of placeholder
         * @param  {?string} lastPlaceholder     - Last String of placeholder
         * @param  {?string} keyName             - Key value of name.
         * @returns Array
         */
        function _addTreeIndent(arr) {
          var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;&nbsp;&nbsp;&nbsp;';
          var lastPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var keyName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'label';
          arr.forEach(function (item) {
            var indent = '';
            if (item.depth) {
              Array(item.depth).fill(0).forEach(function (k, i) {
                indent += placeholder;
                if (i === item.depth - 1) {
                  item[keyName] = indent + lastPlaceholder + item[keyName];
                }
              });
            }
          });
        }
        ; // CONCATENATED MODULE: ./src/libs/buffer.ts
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
                return value && "object" == buffer_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
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
        function buffer_typeof(obj) {
          "@babel/helpers - typeof";

          return buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, buffer_typeof(obj);
        }
        /**
         * base64 to ArrayBuffer
         * @param {String} data 
         * @returns {ArrayBuffer}
         */
        /*
        @returns:
        
        ArrayBuffer(522240)
        
            byteLength: 522240
            detached: false
            maxByteLength: 522240
            resizable: false
            [[Prototype]]: ArrayBuffer
            [[Int8Array]]: Int8Array(522240)
            [[Uint8Array]]: Uint8Array(522240)
            [[Int16Array]]: Int16Array(261120)
            [[Int32Array]]: Int32Array(130560)
            [[ArrayBufferByteLength]]: 522240
            [[ArrayBufferData]]: 673
        */
        function _base64ToArrayBuffer(data) {
          var res = data;
          if (data.indexOf('base64,') >= 0) {
            res = data.split('base64,')[1];
          }
          var binaryString = atob(res);
          var bytes = new Uint8Array(binaryString.length);
          for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          return bytes.buffer;
        }

        /**
         * ArrayBuffer to Uint8Array
         * @param {ArrayBuffer} data 
         * @returns {Uint8Array}
         */
        /*
        @returns:
        
        Uint8Array(522240) [208, 207, 17, 224, 161, 177, 26, 225, 0, 0, ......]
        */
        function _arrayBufferToUint8Array(data) {
          return new Uint8Array(data);
        }

        /**
         * uint8array to array
         * @param {Uint8Array} data 
         * @returns {Array}
         */
        function _uint8arrayToArr(data) {
          return Array.from(data);
        }

        /**
         * array to uint8array
         * @param {Array} data 
         * @returns {Uint8Array}
         */
        /* Example:
        
        axios({
            method: 'get',
            url: 'http://xxxx',
            responseType: 'arraybuffer'
        })
        .then(function (res) {
            //res.data ==>  ArrayBuffer(xxxx)
            const b64string = uint8arrayToBase64Str(res.data);
            const uint8ArrayData = arrayToUint8array(res.data);
            
            // do something
        
        });
        */
        function _arrayToUint8array(data) {
          return new Uint8Array(data);
        }

        /**
         * uint8array to base64 string
         * @param {Uint8Array|Array} data 
         * @returns {String}
         */
        function _uint8arrayToBase64Str(data) {
          if ((typeof Buffer === "undefined" ? "undefined" : buffer_typeof(Buffer)) !== ( true ? "undefined" : 0)) {
            return Buffer.from(data, 'binary').toString('base64'); // node.js too
          } else {
            var binary = '';
            var bytes = new Uint8Array(data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
          }
        }

        /**
         * decode base64 string
         * @param {String} data 
         * @returns {String}
         */
        function _decodeBase64Str(data) {
          // avoid messy code
          // especially for Chinese, avoid using encodeURIComponent() and encodeURI()
          var decoded = decodeURIComponent(escape(atob(data)));
          return decoded;
        }

        /**
         * integer to binary
         * @param {Number} data 
         * @returns {String}
         */
        function _toBinary(data) {
          if (!Number.isSafeInteger(data)) {
            throw new TypeError('value must be a safe integer');
          }
          return (data >>> 0).toString(2);
        }

        /**
         * array to blob
         * @param {Uint8Array} uint8ArrayData 
         * @returns {Blob}
         */
        function _arrayToBlob(uint8ArrayData) {
          return new Blob([uint8ArrayData], {
            type: "text/plain"
          });
        }

        /**
         * blob to uint8array
         * @param {Blob} data 
         * @returns {Uint8Array}
         */
        function _blobToUint8array(data) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.addEventListener("loadend", function () {
              resolve(reader.result);
            });
            reader.readAsArrayBuffer(data);
          });
        }

        /**
         * array to stream
         * @param {Array<Uint8Array>} data 
         * @returns {ReadableStream }
         */
        /* Example:
        
        const uint8ArrayDataArr = [
            [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,30,0,0,0,30,8,6,0,0,0,59,48,174,162,0,0,0,220,73,68,65,84,72,199,237,214,81,14,194,32,12,0,80,60,128,215,219,49,28,91,118,10,55,216,53,188,132,137,39,19,71,130,75,69,42,148,194,76,116,31,253,89,40,111,233,104,153,48,198,136,111,132,216,225,255,134,143,151,166,84,28,150,152,151,24,158,207,182,130,45,106,92,12,91,193,16,93,241,218,112,8,181,113,174,9,163,232,90,234,130,223,50,134,142,47,135,11,36,216,183,57,49,81,29,67,125,120,116,11,238,12,60,9,133,240,228,45,180,120,91,11,133,112,31,72,176,184,100,162,19,150,3,75,157,139,147,209,208,225,234,136,184,202,65,177,118,146,200,102,178,20,250,169,143,49,188,43,129,198,6,136,116,101,246,55,191,33,168,162,116,65,108,114,97,56,11,77,29,153,109,4,87,57,195,38,117,86,95,75,162,20,56,84,114,205,153,233,148,219,9,226,154,123,131,81,175,69,201,41,239,27,188,255,222,254,52,252,0,234,253,186,89,222,225,73,252,0,0,0,0,73,69,78,68,174,66,96,130]
        ];
        const readableStream = arrayToStream(uint8ArrayDataArr);  
        
        */
        function _arrayToStream(data) {
          // @return --> ReadableStream {locked: false}
          return new ReadableStream({
            start: function start(controller) {
              // push a chunk
              data.forEach(function (chunk) {
                controller.enqueue(new Uint8Array(chunk));
              });
            },
            pull: function pull(controller) {
              // Called `read()` when the controller's queue is empty.
              //controller.enqueue(...);
              controller.close();
            },
            cancel: function cancel(reason) {
              // Called when the stream is canceled.
            }
          });
        }

        /**
         * read stream
         * @param {ReadableStream } data 
         * @returns {Promise}
         */
        /* Example:
        
        readStream(readableStream).then((value) => {
            console.log(value);
            // iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA3ElEQVRIx+3WUQ7CIAwAUDyA19sxHFt2CjfYNbyEiScTR4JLRSqUwkx0H/1ZKG/paJkwxohvhNjh/4aPl6ZUHJaYlxiez7aCLWpcDFvBEF3x2nAItXGuCaPoWuqC3zKGji+HCyTYtzkxUR1DfXh0C+4MPAmF8OQttHhbC4VwH0iwuGSiE5YDS52Lk9HQ4eqIuMpBsXaSyGayFPqpjzG8K4HGBoh0ZfY3vyGoonRBbHJhOAtNHZltBFc5wyZ1Vl9LohQ4VHLNmemU2wnimnuDUa9FySnvG7z/3v40/ADq/bpZ3uFJ/AAAAABJRU5ErkJggg==
            
            // test: <img src="data:image/png;base64,iVBORw0KGgo..." >
             
        });
        */
        function _readStream2(_x) {
          return _readStream.apply(this, arguments);
        }
        function _readStream() {
          _readStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var resReceived, stream, readInto;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  resReceived = '';
                  stream = data; // ReadableStream {locked: false}
                  readInto = /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
                      var reader, pump, _pump;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _pump = function _pump3() {
                              _pump = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                                var _yield$reader$read, done, value, base64String;
                                return _regeneratorRuntime().wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return reader.read();
                                    case 2:
                                      _yield$reader$read = _context.sent;
                                      done = _yield$reader$read.done;
                                      value = _yield$reader$read.value;
                                      if (!done) {
                                        _context.next = 7;
                                        break;
                                      }
                                      return _context.abrupt("return");
                                    case 7:
                                      // value for fetch streams is a Uint8Array
                                      base64String = _uint8arrayToBase64Str(value);
                                      resReceived += base64String;
                                      return _context.abrupt("return", pump());
                                    case 10:
                                    case "end":
                                      return _context.stop();
                                  }
                                }, _callee);
                              }));
                              return _pump.apply(this, arguments);
                            };
                            pump = function _pump2() {
                              return _pump.apply(this, arguments);
                            };
                            reader = stream.getReader();
                            return _context2.abrupt("return", pump());
                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    return function readInto(_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                  _context3.next = 5;
                  return readInto(stream);
                case 5:
                  return _context3.abrupt("return", resReceived);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _readStream.apply(this, arguments);
        }
        ; // CONCATENATED MODULE: ./src/libs/convert.ts
        /**
         * Convert value to string separated by square brackets 
         * @param {string} str  such as: 1,2,3
         * @returns {string} such as: [1][2][3]
         */
        function _convertStringByCommaToValByBrackets(str) {
          if (typeof str === 'undefined' || str === null || str === '') {
            return '';
          }
          return str.split(',').map(function (v) {
            return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
          }).join('');
        }

        /**
         * Convert array value to string  separated by square brackets 
         * @param {string[]} arr  such as: ['1','2','3']
         * @returns {string} such as: [1][2][3]
         */
        function _convertArrToValByBrackets(arr) {
          if (!Array.isArray(arr)) return '';
          return arr.map(function (v) {
            return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
          }).join('');
        }

        /**
         * Convert value to string separated by curly braces
         * @param {string} str  such as: 1,2,3
         * @returns {string} such as: {1}{2}{3}
         */
        function _convertStringByCommaToValByBraces(str) {
          if (typeof str === 'undefined' || str === null || str === '') {
            return '';
          }
          return str.split(',').map(function (v) {
            return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
          }).join('');
        }

        /**
         * Convert array value to string  separated by curly braces
         * @param {string[]} arr  such as: ['1','2','3']
         * @returns {string} such as: {1}{2}{3}
         */
        function _convertArrToValByBraces(arr) {
          if (!Array.isArray(arr)) return '';
          return arr.map(function (v) {
            return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
          }).join('');
        }
        ; // CONCATENATED MODULE: ./src/libs/extract.ts
        /**
         * Extract the contents of square brackets
         * @param {string} str    =>  input string. such as '[1,2] [f][c]'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfBrackets(str) {
          var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (typeof str === 'undefined' || str === null || str === '') {
            return !commaSeparated ? [] : '';
          }
          var res = str.match(/[^\[]+(?=(\[ \])|\])/g);
          if (commaSeparated) {
            return res === null ? '' : res.join(',').replace(/\,+$/, '');
          } else {
            return res === null ? '' : res;
          }
        }

        /**
         * Extract the contents of curly braces
         * @param {string} str    =>  input string. such as '{1,2} {f}{c}'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfBraces(str) {
          var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (typeof str === 'undefined' || str === null || str === '') {
            return !commaSeparated ? [] : '';
          }
          var res = str.match(/[^\{]+(?=(\{ \})|\})/g);
          if (commaSeparated) {
            return res === null ? '' : res.join(',').replace(/\,+$/, '');
          } else {
            return res === null ? '' : res;
          }
        }

        /**
         * Extract the contents of parentheses
         * @param {string} str    =>  input string. such as '(1,2) (f)(c)'
         * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
         * @returns {Array<string>|string} such as: ['1,2','f','c']
         */
        function _extractContentsOfParentheses(str) {
          var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (typeof str === 'undefined' || str === null || str === '') {
            return !commaSeparated ? [] : '';
          }
          var res = str.match(/[^\(]+(?=(\( \))|\))/g);
          if (commaSeparated) {
            return res === null ? '' : res.join(',').replace(/\,+$/, '');
          } else {
            return res === null ? '' : res;
          }
        }
        ; // CONCATENATED MODULE: ./src/libs/date.ts
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
         * Number validation
         * @param {*} v 
         * @returns {Boolean}  
         */
        var _isNumeric = function isNumeric(v) {
          return !isNaN(parseFloat(v)) && isFinite(v);
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
        ; // CONCATENATED MODULE: ./src/libs/object.ts
        function object_typeof(obj) {
          "@babel/helpers - typeof";

          return object_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, object_typeof(obj);
        }
        /**
         * Deep clone
         * @param {*} obj 
         */
        function _deepClone(obj) {
          if (Array.isArray(obj)) {
            return obj.map(function (item) {
              return _deepClone(item);
            });
          } else if (object_typeof(obj) === 'object' && obj !== null) {
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
        ;

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
        ;
        ; // CONCATENATED MODULE: ./src/libs/viewport.ts
        /**
         * Check if an element is in the viewport
         * @param {HTMLElement} elem 
         * @returns {boolean}
         */
        function _isInViewport(elem) {
          var bounding = elem.getBoundingClientRect();
          return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
        ; // CONCATENATED MODULE: ./src/libs/inputs-calculation.ts
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
        function actualPropertyValue(el, prop) {
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
        function getElCSS(input, prop, isNumber) {
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
              var propertyValue = getElCSS(_fauxContainer, listOfModifiers[i], false);
              _faux.style.setProperty(listOfModifiers[i], propertyValue);
            }
            _faux.textContent = input.value.substring(0, _off).replace(/\s/g, "\xA0");
            return actualPropertyValue(_faux, 'outerWidth');
          }
        }

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_1471__(787);
        ; // CONCATENATED MODULE: ./src/hooks/useThrottle.tsx
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
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
            lastTime: 0
          });
          return (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
            var now = Date.now();
            if (now - ref.current.lastTime >= delay) {
              fn.apply(void 0, arguments);
              ref.current.lastTime = now;
            }
          }, dependence);
        };
        /* harmony default export */
        var hooks_useThrottle = useThrottle;
        ; // CONCATENATED MODULE: ./src/hooks/useDebounce.tsx
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
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          return (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
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
        var hooks_useDebounce = useDebounce;
        ; // CONCATENATED MODULE: ./src/hooks/useAutosizeTextArea.tsx
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useAutosizeTextArea_unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useAutosizeTextArea_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useAutosizeTextArea_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAutosizeTextArea_arrayLikeToArray(o, minLen);
        }
        function useAutosizeTextArea_arrayLikeToArray(arr, len) {
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
        
            useAutosizeTextArea({
                el: el.current, 
                value: value,
                cb: (res) => {
                    console.log('dimensions: ', res);
                }
            });
        
            const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                const val = evt.target?.value;
                setValue(val);
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
            cb = _ref.cb;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
            _useState2 = _slicedToArray(_useState, 2),
            defaultRowHeight = _useState2[0],
            setDefaultRowHeight = _useState2[1];
          var _useState3 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState4 = _slicedToArray(_useState3, 2),
            defaultRowHeightInit = _useState4[0],
            setDefaultRowHeightInit = _useState4[1];
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            if (el) {
              var style = el.currentStyle || window.getComputedStyle(el);
              var _controlWidth = el.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);

              // initialize default row height
              if (el.scrollHeight > 0 && !defaultRowHeightInit) {
                setDefaultRowHeight(el.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth));
                setDefaultRowHeightInit(true);
              }

              // restore default row height
              if (defaultRowHeight > 0) {
                el.style.height = defaultRowHeight + "px";
              }

              // reset the height momentarily to get the correct scrollHeight for the textarea
              var scrollHeight = el.scrollHeight;

              // then set the height directly, outside of the render loop
              // Trying to set this with state or a ref will product an incorrect value.

              // !!! Compare initial height and changed height
              if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
                el.style.height = scrollHeight + "px";
              }
              cb === null || cb === void 0 ? void 0 : cb([_controlWidth, scrollHeight]);
            }
          }, [el, value]);
        };
        /* harmony default export */
        var hooks_useAutosizeTextArea = useAutosizeTextArea;
        ; // CONCATENATED MODULE: ./src/hooks/useInterval.tsx
        /**
         * Provides a convenient way to create and manage intervals
         * 
         * @usage:
        
        const App = () => {
            const [count, setCount] = useState(0);
        
            useInterval(() => {
                setCount(count + 1);
            }, 1000);
        
            return (
                <div className="app"></div>
            );
        };
        
         */

        var useInterval = function useInterval(fn, delay) {
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            ref.current = fn;
          }, [fn]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            function tick() {
              ref.current && ref.current();
            }
            if (delay !== null && delay > 0) {
              var id = setInterval(tick, delay);
              return function () {
                return clearInterval(id);
              };
            } else {
              tick();
            }
          }, [delay]);
        };
        /* harmony default export */
        var hooks_useInterval = useInterval;
        ; // CONCATENATED MODULE: ./src/hooks/useClickOutside.tsx
        function useClickOutside_toConsumableArray(arr) {
          return useClickOutside_arrayWithoutHoles(arr) || useClickOutside_iterableToArray(arr) || useClickOutside_unsupportedIterableToArray(arr) || useClickOutside_nonIterableSpread();
        }
        function useClickOutside_nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useClickOutside_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useClickOutside_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useClickOutside_arrayLikeToArray(o, minLen);
        }
        function useClickOutside_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function useClickOutside_arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return useClickOutside_arrayLikeToArray(arr);
        }
        function useClickOutside_arrayLikeToArray(arr, len) {
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
          var isOutsideRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(isOutside);
          var handleRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(handle);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            isOutsideRef.current = isOutside;

            // fix possible issue if clicking on a focusable element
            handleRef.current = handle;
          }, [isOutside, handle]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
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
          }, [enabled].concat(useClickOutside_toConsumableArray(deps)));
        }
        /* harmony default export */
        var hooks_useClickOutside = useClickOutside;
        ; // CONCATENATED MODULE: ./src/hooks/useKeyPress.tsx
        function useKeyPress_slicedToArray(arr, i) {
          return useKeyPress_arrayWithHoles(arr) || useKeyPress_iterableToArrayLimit(arr, i) || useKeyPress_unsupportedIterableToArray(arr, i) || useKeyPress_nonIterableRest();
        }
        function useKeyPress_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useKeyPress_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useKeyPress_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useKeyPress_arrayLikeToArray(o, minLen);
        }
        function useKeyPress_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function useKeyPress_iterableToArrayLimit(arr, i) {
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
        function useKeyPress_arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        /**
         * Listens for changes in the pressed state of a given key
         * 
         * @usage:
        
        const App = () => {
            const escPressed = useKeyPress({
                keyCode: 'Escape',
                handleUp: (key, event) => { },
                handleDown: async (key, event) => {
                    // do something
                    event.preventDefault();
                    // await xxxxx();
                    console.log(key);
                },
                spyElement: window,
            }, []);
        
            const multiplePressed = useKeyPress({
                keyCode: ['ArrowUp', 'ArrowDown', 'Enter', 'NumpadEnter'],
                handleUp: (key, event) => { },
                handleDown: (key, event) => {
                    // do something
                    event.preventDefault();
                    console.log(key);
                },
                spyElement: window
            }, [myDep1, myDep2]);
        
        
            return (
                <div className="app">{escPressed ? 'Escape' : null}</div>
            );
        };
        
         */

        var useKeyPress = function useKeyPress(_ref, deps) {
          var keyCode = _ref.keyCode,
            handleDown = _ref.handleDown,
            handleUp = _ref.handleUp,
            _ref$spyElement = _ref.spyElement,
            spyElement = _ref$spyElement === void 0 ? typeof window === 'undefined' ? null : window : _ref$spyElement;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState2 = useKeyPress_slicedToArray(_useState, 2),
            keyPressed = _useState2[0],
            setKeyPressed = _useState2[1];
          var multipleKeys = Array.isArray(keyCode);

          // `Escape`, `Enter`, `Alt`, `Control`, `CapsLock`, `Shift`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` `w`, `e`, ...
          var eventHandlerDown = function eventHandlerDown(event) {
            var key = event.code;
            if (multipleKeys) {
              if (keyCode.includes(key)) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
              }
            } else {
              if (key === keyCode) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
              }
            }
          };
          var eventHandlerUp = function eventHandlerUp(event) {
            var key = event.code;
            if (multipleKeys) {
              if (keyCode.includes(key)) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
              }
            } else {
              if (key === keyCode) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
              }
            }
          };
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keydown', eventHandlerDown);
            spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keyup', eventHandlerUp);
            return function () {
              spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keydown', eventHandlerDown);
              spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keyup', eventHandlerUp);
            };
          }, deps);
          return keyPressed;
        };
        /* harmony default export */
        var hooks_useKeyPress = useKeyPress;
        ; // CONCATENATED MODULE: ./src/hooks/useWindowScroll.tsx
        function useWindowScroll_slicedToArray(arr, i) {
          return useWindowScroll_arrayWithHoles(arr) || useWindowScroll_iterableToArrayLimit(arr, i) || useWindowScroll_unsupportedIterableToArray(arr, i) || useWindowScroll_nonIterableRest();
        }
        function useWindowScroll_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useWindowScroll_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useWindowScroll_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWindowScroll_arrayLikeToArray(o, minLen);
        }
        function useWindowScroll_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function useWindowScroll_iterableToArrayLimit(arr, i) {
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
        function useWindowScroll_arrayWithHoles(arr) {
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
          var performance = _ref.performance,
            handle = _ref.handle;
          var windowScrollUpdate;
          var _performance = useWindowScroll_slicedToArray(performance, 2),
            performanceName = _performance[0],
            performanceLimit = _performance[1];
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
              x: 0,
              y: 0
            }),
            _useState2 = useWindowScroll_slicedToArray(_useState, 2),
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
          if (performanceName === "debounce") windowScrollUpdate = _debounce(eventHandlerScroll, parseFloat(performanceLimit));
          if (performanceName === "throttle") windowScrollUpdate = _throttle(eventHandlerScroll, parseFloat(performanceLimit));
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
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
        var hooks_useWindowScroll = useWindowScroll;
        ; // CONCATENATED MODULE: ./src/hooks/useDraggable.tsx
        function useDraggable_slicedToArray(arr, i) {
          return useDraggable_arrayWithHoles(arr) || useDraggable_iterableToArrayLimit(arr, i) || useDraggable_unsupportedIterableToArray(arr, i) || useDraggable_nonIterableRest();
        }
        function useDraggable_nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function useDraggable_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return useDraggable_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDraggable_arrayLikeToArray(o, minLen);
        }
        function useDraggable_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function useDraggable_iterableToArrayLimit(arr, i) {
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
        function useDraggable_arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        /**
         * Drag & Drop Element
         * 
         * @usage:
        
        
        const App = () => {
            const [dragContentHandle, dragHandle] = useDraggable(true);  // or Disable drag and drop: `useDraggable(false)`
            return (
                <div className="container" ref={dragContentHandle}>
                    <div ref={dragHandle} className="handle">Drag me</div>
                    <div className="content">
                        content...
                    </div>
                </div>
            );
        };
        
        
         */

        var useDraggable = function useDraggable(enabled) {
          if (typeof enabled === 'undefined' || enabled === false) return [null, null];
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
            _useState2 = useDraggable_slicedToArray(_useState, 2),
            node = _useState2[0],
            setNode = _useState2[1];
          var _useState3 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
            _useState4 = useDraggable_slicedToArray(_useState3, 2),
            targetNode = _useState4[0],
            setTargetNode = _useState4[1];
          var _useState5 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
              dx: 0,
              dy: 0
            }),
            _useState6 = useDraggable_slicedToArray(_useState5, 2),
            _useState6$ = _useState6[0],
            dx = _useState6$.dx,
            dy = _useState6$.dy,
            setOffset = _useState6[1];
          var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (nodeEle) {
            setNode(nodeEle);
          }, []);
          var targetRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (nodeEle) {
            setTargetNode(nodeEle);
          }, []);
          var handleMouseDown = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
            var startPos = {
              x: e.clientX - dx,
              y: e.clientY - dy
            };
            var handleMouseMove = function handleMouseMove(e) {
              var dx = e.clientX - startPos.x;
              var dy = e.clientY - startPos.y;
              setOffset({
                dx: dx,
                dy: dy
              });
            };
            var handleMouseUp = function handleMouseUp() {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }, [dx, dy]);
          var handleTouchStart = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
            var touch = e.touches[0];
            var startPos = {
              x: touch.clientX - dx,
              y: touch.clientY - dy
            };
            var handleTouchMove = function handleTouchMove(e) {
              var touch = e.touches[0];
              var dx = touch.clientX - startPos.x;
              var dy = touch.clientY - startPos.y;
              setOffset({
                dx: dx,
                dy: dy
              });
            };
            var handleTouchEnd = function handleTouchEnd() {
              document.removeEventListener('touchmove', handleTouchMove);
              document.removeEventListener('touchend', handleTouchEnd);
            };
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
          }, [dx, dy]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            if (node) {
              node.style.transform = "translate3d(".concat(dx, "px, ").concat(dy, "px, 0)");
            }
          }, [node, dx, dy]);
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            if (!targetNode) {
              return;
            }
            targetNode.addEventListener("mousedown", handleMouseDown);
            targetNode.addEventListener("touchstart", handleTouchStart);
            return function () {
              targetNode.removeEventListener("mousedown", handleMouseDown);
              targetNode.removeEventListener("touchstart", handleTouchStart);
            };
          }, [targetNode, dx, dy]);
          return [ref, targetRef];
        };
        /* harmony default export */
        var hooks_useDraggable = useDraggable;
        ; // CONCATENATED MODULE: ./src/index.tsx

        // hooks
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/index.js
var cjs = __webpack_require__(456);
;// CONCATENATED MODULE: ./src/table-utils.ts

var removeItemOnce = function removeItemOnce(arr, key) {
  return arr.filter(function (item) {
    return item.key !== key;
  });
};
var formatCheckboxControlVal = function formatCheckboxControlVal(el) {
  var _el$closest, _el$dataset$name;
  var _curContent = [].slice.call((_el$closest = el.closest('th')) === null || _el$closest === void 0 ? void 0 : _el$closest.children).at(-1).innerHTML;
  var $row = el.closest('tr[data-key]');
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    if (i > 0) return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  _restContent.unshift(_curContent);
  return {
    index: Number(el.dataset.index),
    key: el.dataset.key,
    name: (_el$dataset$name = el.dataset.name) === null || _el$dataset$name === void 0 ? void 0 : _el$dataset$name.replace(/-label$/, ''),
    content: _restContent
  };
};
var formatRowControlVal = function formatRowControlVal(el, checkboxNamePrefix) {
  var _el$querySelector;
  var _curContent = [].slice.call((_el$querySelector = el.querySelector('th')) === null || _el$querySelector === void 0 ? void 0 : _el$querySelector.children).at(-1).innerHTML;
  var $row = el.closest('tr[data-key]');
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    if (i > 0) return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  _restContent.unshift(_curContent);
  return {
    index: Number(el.dataset.id),
    key: el.dataset.key,
    name: "checkbox-".concat(checkboxNamePrefix, "-").concat(el.dataset.key),
    content: _restContent
  };
};
var formatPerlineControlVal = function formatPerlineControlVal(el) {
  var $row = el;
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  return {
    index: Number(el.dataset.id),
    key: el.dataset.key,
    content: _restContent
  };
};
var setCheckboxCheckedData = function setCheckboxCheckedData(arr, key, val) {
  arr.forEach(function (item, index) {
    if (item.key === key) arr[index].checked = val;
  });
};
var getAllCheckboxInput = function getAllCheckboxInput(el) {
  if (el === null) return [];
  var _checkboxes = (0,cjs.getChildren)(el.closest('table').querySelector('tbody'), '[type="checkbox"]');
  return [].slice.call(_checkboxes);
};
var cellMark = function cellMark(col, row) {
  return "cell-".concat(col, "-").concat(row);
};
var removeCellFocusClassName = function removeCellFocusClassName(root) {
  if (root) {
    [].slice.call(root.querySelectorAll('td')).forEach(function (el) {
      el.classList.remove('cell-focus');
    });
  }
};
;// CONCATENATED MODULE: ./src/TableField.tsx



/* Table Field
-------------------------------------------------*/

var TableField = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
  var tableRootRef = props.tableRootRef,
    rowKey = props.rowKey,
    cols = props.cols,
    width = props.width,
    className = props.className,
    _props$dataUse = props.dataUse,
    dataUse = _props$dataUse === void 0 ? '' : _props$dataUse,
    style = props.style,
    columnHeader = props.columnHeader,
    index = props.index,
    content = props.content,
    updateCellFocusedId = props.updateCellFocusedId,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick,
    onKeyDown = props.onKeyDown;
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');
  function handleTbodyLeave(e) {
    var _e$target$closest;
    (_e$target$closest = e.target.closest('table')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.querySelector('tbody').classList.remove('drag-trigger-mousedown');
    evCellMouseEnter === null || evCellMouseEnter === void 0 ? void 0 : evCellMouseEnter(e);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
    ref: ref,
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index,
    "data-table-row": rowIndex,
    "data-use": dataUse,
    onMouseEnter: handleTbodyLeave,
    onMouseLeave: function onMouseLeave(e) {
      evCellMouseLeave === null || evCellMouseLeave === void 0 ? void 0 : evCellMouseLeave(e);
    },
    onClick: function onClick(e) {
      evCellClick === null || evCellClick === void 0 ? void 0 : evCellClick(e);
      var _row = Number(e.currentTarget.dataset.tableRow);
      var _col = Number(e.currentTarget.dataset.tableCol);
      removeCellFocusClassName(tableRootRef.current);
      updateCellFocusedId === null || updateCellFocusedId === void 0 ? void 0 : updateCellFocusedId(cellMark(_row, _col));
    },
    onKeyDown: onKeyDown,
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || ''
  }, content));
});
/* harmony default export */ const src_TableField = (TableField);
;// CONCATENATED MODULE: ./src/TableFieldRow.tsx
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


// HAS CHECKBOX




/* Table Field Row
-------------------------------------------------*/

var TableFieldRow = function TableFieldRow(props) {
  var _latestCheckedData$fi;
  var tableRootRef = props.tableRootRef,
    tableCheckRef = props.tableCheckRef,
    _props$rowActiveClass = props.rowActiveClassName,
    rowActiveClassName = _props$rowActiveClass === void 0 ? 'active' : _props$rowActiveClass,
    fieldsChecked = props.fieldsChecked,
    fieldsCheckedAct = props.fieldsCheckedAct,
    updateFirstInitCheckboxesClassName = props.updateFirstInitCheckboxesClassName,
    draggable = props.draggable,
    useRadio = props.useRadio,
    cols = props.cols,
    width = props.width,
    className = props.className,
    _props$dataUse = props.dataUse,
    dataUse = _props$dataUse === void 0 ? '' : _props$dataUse,
    style = props.style,
    columnHeader = props.columnHeader,
    index = props.index,
    content = props.content,
    checkboxNamePrefix = props.checkboxNamePrefix,
    rowKey = props.rowKey,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    onCheck = props.onCheck,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick;
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var checkboxRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    firstInitCheckboxes = _useState2[0],
    setFirstInitCheckboxes = _useState2[1];

  //
  var _ref = fieldsCheckedAct || [null, null],
    _ref2 = _slicedToArray(_ref, 2),
    fieldsCheckedUpdateDataPrint = _ref2[0],
    setFieldsCheckedUpdateDataPrint = _ref2[1];
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(tableCheckRef, function () {
    return {
      check: function check(data, cb) {
        var _checkedData = getCheckedData;
        var _res = [];

        // STEP 1:
        // Update checked data
        //-----------
        data.forEach(function (v, i) {
          var _curKey = "row-".concat(v.index);
          if (v.value === true) {
            setCheckboxCheckedData(_checkedData, _curKey, true);
          } else {
            setCheckboxCheckedData(_checkedData, _curKey, false);
          }
        });
        updategetCheckedData(_checkedData);

        // STEP 2:
        // get per checkbox value
        //----------- 
        if (tableRootRef.current !== null) {
          _checkedData.forEach(function (item) {
            if (item.checked === true) {
              var _index = item.key.replace('row-', '');
              var curCheckbox = tableRootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(_index, "\"]"));
              _res.push(formatRowControlVal(curCheckbox, checkboxNamePrefix));
            } else {
              _res = removeItemOnce(_res, item.key);
            }
          });
        }

        // STEP 3:
        // Update checked print
        //-----------
        updateCheckedPrint(_res);

        // STEP 4:
        // Update root checkbox
        //-----------
        var _headRow = tableRootRef.current.querySelector('table').querySelectorAll('thead th')[0];
        var allChecked = _checkedData.every(function (item) {
          return item.checked === true;
        });
        if (allChecked) {
          updategetCheckedRootData([{
            key: "row-all",
            checked: true
          }]);
        } else {
          updategetCheckedRootData([{
            key: "row-all",
            checked: false
          }]);
        }
        if (typeof _headRow !== 'undefined') {
          var _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
          var hasAnyChecked = _checkedData.some(function (item) {
            return item.checked === true;
          });
          if (hasAnyChecked && !allChecked) {
            _rootCheckbox.indeterminate = true;
          } else {
            _rootCheckbox.indeterminate = false;
          }
        }

        // STEP 5:
        // callback
        //-----------
        cb === null || cb === void 0 ? void 0 : cb(_res);
      }
    };
  }, [tableCheckRef]);

  // initialize actived checkboxes
  var latestCheckedData = function latestCheckedData() {
    if (firstInitCheckboxes) return getCheckedData;
    if (Array.isArray(fieldsChecked)) {
      var _checkedData = getCheckedData;
      if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') setCheckboxCheckedData(getCheckedData, rowKey, fieldsChecked[Number(rowIndex)]);
      // Update checked data
      updategetCheckedData(_checkedData);
      setFirstInitCheckboxes(true);
      updateFirstInitCheckboxesClassName(true);
      return _checkedData;
    } else {
      return getCheckedData;
    }
  };
  function updateRootcheckbox(el) {
    if (el === null) return;
    var _headRow = el.closest('table').querySelectorAll('thead th')[0];
    if (typeof _headRow !== 'undefined') {
      var _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
      var _checkboxes = (0,cjs.getChildren)(el.closest('table').querySelector('tbody'), '[type="checkbox"]');
      var _checkedLength = _checkboxes.filter(function (checkbox) {
        return checkbox.checked === true;
      }).length;
      if (_checkedLength === 0) {
        _rootCheckbox.indeterminate = false;
        updategetCheckedRootData([{
          key: "row-all",
          checked: false
        }]);
      } else {
        if (_checkedLength === _checkboxes.length) {
          _rootCheckbox.indeterminate = false;
          updategetCheckedRootData([{
            key: "row-all",
            checked: true
          }]);
        }
        if (_checkedLength < _checkboxes.length) {
          updategetCheckedRootData([{
            key: "row-all",
            checked: false
          }]);
          _rootCheckbox.indeterminate = true;
        }
      }
    }
  }
  function checkedAct(el, val) {
    if (el === null) return;
    var _curKey = el.value;
    var _checkedData = getCheckedData;
    var _res = getCheckedPrint;

    // STEP 1:
    // Update checked print from "fieldsChecked"
    // !!! Only one time is allowed
    //-----------
    if (!fieldsCheckedUpdateDataPrint) {
      if (Array.isArray(fieldsChecked)) {
        var _checkboxes = getAllCheckboxInput(el);
        _checkboxes.forEach(function (node, rowIndex) {
          if (fieldsChecked[Number(rowIndex)] === true) {
            _res.push(formatCheckboxControlVal(node));
          }
        });
      }

      //
      setFieldsCheckedUpdateDataPrint(true);
    }

    // STEP 1:
    // Current checkbox
    //-----------
    if (val === true) {
      _res.push(formatCheckboxControlVal(el));
      setCheckboxCheckedData(_checkedData, _curKey, true);
    } else {
      setCheckboxCheckedData(_checkedData, _curKey, false);
      _res = removeItemOnce(_res, _curKey);
    }

    // STEP 2:
    // Array deduplication
    //-----------
    _res = _res.filter(function (item, index, self) {
      return index === self.findIndex(function (t) {
        return t.key === item.key;
      });
    });

    // STEP 3:
    // ALl parent checkboxes
    //-----------
    updateRootcheckbox(el);

    // STEP 4:
    // Update checked data
    //-----------
    updategetCheckedData(_checkedData);

    // STEP 5:
    // Update checked print
    //-----------
    updateCheckedPrint(_res);

    // STEP 6:
    // callback
    //-----------
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(_res, el, val);
  }
  function handleTbodyEnter(e) {
    var _e$target$closest;
    (_e$target$closest = e.target.closest('table')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.querySelector('tbody').classList.add('drag-trigger-mousedown');
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    scope: "row",
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index,
    "data-table-row": rowIndex,
    "data-use": dataUse,
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || '',
    onMouseEnter: function onMouseEnter(e) {
      evCellMouseEnter === null || evCellMouseEnter === void 0 ? void 0 : evCellMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      evCellMouseLeave === null || evCellMouseLeave === void 0 ? void 0 : evCellMouseLeave(e);
    },
    onClick: function onClick(e) {
      evCellClick === null || evCellClick === void 0 ? void 0 : evCellClick(e);
    }
  }, draggable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "drag-trigger",
    "data-id": rowIndex,
    onMouseEnter: handleTbodyEnter
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "checkbox-trigger"
  }, useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    ref: checkboxRef,
    href: "#",
    draggable: false /* required */,
    tabIndex: -1,
    className: "radio-svg-btn",
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    "data-use": dataUse,
    onClick: function onClick(e) {
      e.preventDefault();

      // STEP 1:
      // Active current row
      //-----------
      var _rows = [].slice.call(e.currentTarget.closest('tbody').querySelectorAll('.row-obj'));
      var _rowEl = e.currentTarget.closest('.row-obj');
      var activeClass = rowActiveClassName.split(' ');
      _rows.forEach(function (row) {
        var _row$classList;
        (_row$classList = row.classList).remove.apply(_row$classList, _toConsumableArray(activeClass));
      });
      if (_rowEl !== null) {
        var _rowEl$classList;
        (_rowEl$classList = _rowEl.classList).add.apply(_rowEl$classList, _toConsumableArray(activeClass));
      }

      // STEP 2:
      // callback
      //-----------
      onCheck === null || onCheck === void 0 ? void 0 : onCheck([formatCheckboxControlVal(e.currentTarget)], e.currentTarget, true);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "radio-svg--default"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    className: "radio-svg",
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",
    fill: "currentColor"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "radio-svg--active"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    className: "radio-svg",
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",
    fill: "currentColor"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5.25",
    fill: "currentColor"
  }))))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "form-check__wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "form-check d-inline-block"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    name: "checkbox-".concat(checkboxNamePrefix, "-").concat(rowIndex),
    ref: checkboxRef,
    tabIndex: -1,
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    "data-use": dataUse,
    value: "".concat(rowKey),
    checked: (_latestCheckedData$fi = latestCheckedData().filter(function (cur) {
      return cur.key === rowKey;
    })[0]) === null || _latestCheckedData$fi === void 0 ? void 0 : _latestCheckedData$fi.checked,
    onChange: function onChange(e) {
      var _latestCheckedData$fi2;
      checkedAct(e.target, !((_latestCheckedData$fi2 = latestCheckedData().filter(function (cur) {
        return cur.key === rowKey;
      })[0]) !== null && _latestCheckedData$fi2 !== void 0 && _latestCheckedData$fi2.checked));
    }
  }))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: contentRef
  }, content)));
};
/* harmony default export */ const src_TableFieldRow = (TableFieldRow);
;// CONCATENATED MODULE: ./src/TableRow.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function TableRow_slicedToArray(arr, i) { return TableRow_arrayWithHoles(arr) || TableRow_iterableToArrayLimit(arr, i) || TableRow_unsupportedIterableToArray(arr, i) || TableRow_nonIterableRest(); }
function TableRow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TableRow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TableRow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TableRow_arrayLikeToArray(o, minLen); }
function TableRow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TableRow_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TableRow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* Table Row
-------------------------------------------------*/

var TableRow = function TableRow(props) {
  var _filter$, _filter$2;
  var updateFocusableCellId = props.updateFocusableCellId,
    rootDataInfo = props.rootDataInfo,
    refNode = props.refNode,
    tableRootRef = props.tableRootRef,
    tableCheckRef = props.tableCheckRef,
    _props$rowActiveClass = props.rowActiveClassName,
    rowActiveClassName = _props$rowActiveClass === void 0 ? 'active' : _props$rowActiveClass,
    fieldsChecked = props.fieldsChecked,
    fieldsCheckedAct = props.fieldsCheckedAct,
    index = props.index,
    data = props.data,
    headerLabel = props.headerLabel,
    checkboxNamePrefix = props.checkboxNamePrefix,
    rowKey = props.rowKey,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    draggable = props.draggable,
    useRadio = props.useRadio,
    onClick = props.onClick,
    onCheck = props.onCheck,
    evDragEnd = props.evDragEnd,
    evDragStart = props.evDragStart,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick,
    evRowMouseEnter = props.evRowMouseEnter,
    evRowMouseLeave = props.evRowMouseLeave,
    evRowClick = props.evRowClick,
    evCellArrowKeys = props.evCellArrowKeys;
  var nonExistentRowKey = "row-null";
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');
  var _rowChecked = (_filter$ = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = TableRow_slicedToArray(_useState, 2),
    firstInitCheckboxesClassName = _useState2[0],
    setFirstInitCheckboxesClassName = _useState2[1];

  // effective element movement on keystroke
  var _updateFocusableCellI = TableRow_slicedToArray(updateFocusableCellId, 2),
    focusableCellId = _updateFocusableCellI[0],
    setFocusableCellId = _updateFocusableCellI[1];

  // initialize actived checkboxes
  var latestRowChecked = function latestRowChecked() {
    if (firstInitCheckboxesClassName) return _rowChecked;
    if (Array.isArray(fieldsChecked)) {
      if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') {
        return fieldsChecked[Number(rowIndex)];
      }
    }
    return _rowChecked;
  };
  var rowChecked = firstInitCheckboxesClassName ? (_filter$2 = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$2 === void 0 ? void 0 : _filter$2.checked : latestRowChecked();
  function handleClick(event) {
    var curVal = formatPerlineControlVal(event.currentTarget);
    onClick === null || onClick === void 0 ? void 0 : onClick(event, curVal);
    evRowClick === null || evRowClick === void 0 ? void 0 : evRowClick(event);
  }
  var handleKeyPressedForCell = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var key, oldCellSignal, _row, _col, move;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof data === 'undefined' || data === null || rootDataInfo === null || tableRootRef.current === null)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            key = event.code;
            oldCellSignal = focusableCellId === null || focusableCellId === void 0 ? void 0 : focusableCellId.replace('cell-', '').split('-');
            _row = Number(oldCellSignal[0]);
            _col = Number(oldCellSignal[1]);
            move = function move(key) {
              switch (key) {
                case 'ArrowLeft':
                  _col = _col - 1 < 0 ? 0 : _col - 1;
                  break;
                case 'ArrowRight':
                  _col = _col + 1 > data.length - 1 ? data.length - 1 : _col + 1;
                  break;
                case 'ArrowUp':
                  _row = _row - 1 < 0 ? 0 : _row - 1;
                  break;
                case 'ArrowDown':
                  _row = _row + 1 > rootDataInfo.totalRow - 1 ? rootDataInfo.totalRow - 1 : _row + 1;
                  break;
              }
              var nextCellSignal = cellMark(_row, _col);
              evCellArrowKeys === null || evCellArrowKeys === void 0 ? void 0 : evCellArrowKeys(nextCellSignal, refNode.current.get(nextCellSignal));

              // focus current cell
              // removeCellFocusClassName(tableRootRef.current);
              // tableRootRef.current.querySelector(`td.${nextCellSignal}`)?.classList.add('cell-focus');

              //
              setFocusableCellId(nextCellSignal);
            };
            if (key === 'ArrowLeft') {
              move('ArrowLeft');
            }
            if (key === 'ArrowRight') {
              move('ArrowRight');
            }
            if (key === 'ArrowUp') {
              move('ArrowUp');
            }
            if (key === 'ArrowDown') {
              move('ArrowDown');
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }(), [focusableCellId]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
    draggable: draggable,
    onDragEnd: draggable ? evDragEnd : function () {
      return void 0;
    },
    onDragStart: draggable ? evDragStart : function () {
      return void 0;
    },
    "data-id": index,
    "data-key": rowKey,
    className: "row-obj ".concat(rowChecked ? rowActiveClassName : '', " ").concat(typeof onClick === 'undefined' ? '' : 'clickable'),
    onClick: handleClick,
    onMouseEnter: function onMouseEnter(e) {
      evRowMouseEnter === null || evRowMouseEnter === void 0 ? void 0 : evRowMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      evRowMouseLeave === null || evRowMouseLeave === void 0 ? void 0 : evRowMouseLeave(e);
    }
  }, data ? data.map(function (el, i) {
    var headerItem = headerLabel[i];
    if (headerItem === undefined) headerItem = {
      type: false,
      content: ''
    };
    if (i === 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableFieldRow, {
        key: 'th-row' + i,
        tableRootRef: tableRootRef,
        tableCheckRef: tableCheckRef,
        rowActiveClassName: rowActiveClassName,
        fieldsChecked: fieldsChecked,
        fieldsCheckedAct: fieldsCheckedAct,
        updateFirstInitCheckboxesClassName: setFirstInitCheckboxesClassName,
        useRadio: useRadio,
        columnHeader: typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content,
        className: el.className,
        dataUse: el.data,
        cols: el.cols,
        content: el.content,
        width: el.width,
        style: el.style,
        index: i,
        checkboxNamePrefix: checkboxNamePrefix,
        rowKey: rowKey,
        updateCheckedPrint: updateCheckedPrint,
        getCheckedPrint: getCheckedPrint,
        updategetCheckedData: updategetCheckedData,
        getCheckedData: getCheckedData,
        updategetCheckedRootData: updategetCheckedRootData,
        getCheckedRootData: getCheckedRootData,
        onCheck: onCheck,
        draggable: draggable,
        evCellMouseEnter: evCellMouseEnter,
        evCellMouseLeave: evCellMouseLeave,
        evCellClick: evCellClick
      });
    } else {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableField, {
        key: 'td-row' + i,
        ref: function ref(node) {
          if (node) {
            refNode.current.set(cellMark(rowIndex, i), node);
          } else {
            refNode.current["delete"](cellMark(rowIndex, i));
          }
        },
        tableRootRef: tableRootRef,
        columnHeader: typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content,
        className: "".concat(el.className || '', " ").concat(focusableCellId === cellMark(rowIndex, i) ? 'cell-focus' : ''),
        dataUse: el.data,
        cols: el.cols,
        content: el.content,
        width: el.width,
        style: el.style,
        rowKey: rowKey,
        index: i,
        onKeyDown: handleKeyPressedForCell,
        updateCellFocusedId: setFocusableCellId,
        evCellMouseEnter: evCellMouseEnter,
        evCellMouseLeave: evCellMouseLeave,
        evCellClick: evCellClick
      });
    }
  }) : null));
};
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableHeaders.tsx


// HAS CHECKBOX



/* Table Headers
-------------------------------------------------*/

var TableHeaders = function TableHeaders(props) {
  var data = props.data,
    useRadio = props.useRadio,
    headClassName = props.headClassName,
    checkboxNamePrefix = props.checkboxNamePrefix,
    sortable = props.sortable,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    onCheck = props.onCheck,
    evSort = props.evSort,
    evHeadCellMouseEnter = props.evHeadCellMouseEnter,
    evHeadCellMouseLeave = props.evHeadCellMouseLeave,
    evHeadCellClick = props.evHeadCellClick;
  function checkedAct(el, val) {
    if (el === null) return;
    var _checkedData = getCheckedData;
    var _res = getCheckedPrint;

    // STEP 1:
    // Current checkbox
    //-----------
    if (val === true) {
      updategetCheckedRootData([{
        key: "row-all",
        checked: true
      }]);
    } else {
      updategetCheckedRootData([{
        key: "row-all",
        checked: false
      }]);
    }

    // STEP 2:
    // All child checkboxes
    //-----------
    var _checkboxes = getAllCheckboxInput(el);
    _checkboxes.forEach(function (node) {
      if (val === true) {
        setCheckboxCheckedData(_checkedData, node.dataset.key, true);
        _res.push(formatCheckboxControlVal(node));
      } else {
        setCheckboxCheckedData(_checkedData, node.dataset.key, false);
        _res = [];
      }
    });

    // STEP 3:
    // Array deduplication
    //-----------
    _res = _res.filter(function (item, index, self) {
      return index === self.findIndex(function (t) {
        return t.key === item.key;
      });
    });

    // STEP 4:
    // Update checked data
    //-----------
    updategetCheckedData(_checkedData);

    // STEP 5:
    // Update checked print
    //-----------
    updateCheckedPrint(_res);

    // STEP 6:
    // callback
    //-----------
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(_res, el, val);
  }
  return data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
    className: headClassName ? headClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, data.map(function (item, i) {
    var _item$type, _item$type2, _filter$;
    var itemSortable = item.type === false || ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.toString()) === 'false' || ((_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.toString()) === '0' || typeof item.type === 'undefined' ? false : true;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: i,
      scope: "col",
      "data-sort-type": item.type,
      "data-table-text": typeof item.content === 'string' ? item.content.replace(/(<([^>]+)>)/ig, '') : item.content,
      "data-table-col": i,
      "data-use": item.data || '',
      style: item.style ? item.style : item.width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
        width: item.width
      } : {} : {},
      className: item.className || '',
      onMouseEnter: function onMouseEnter(e) {
        evHeadCellMouseEnter === null || evHeadCellMouseEnter === void 0 ? void 0 : evHeadCellMouseEnter(e);
      },
      onMouseLeave: function onMouseLeave(e) {
        evHeadCellMouseLeave === null || evHeadCellMouseLeave === void 0 ? void 0 : evHeadCellMouseLeave(e);
      },
      onClick: function onClick(e) {
        evHeadCellClick === null || evHeadCellClick === void 0 ? void 0 : evHeadCellClick(e);
      }
    }, i === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "checkbox-trigger",
      style: {
        visibility: useRadio ? 'hidden' : 'visible'
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "form-check__wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "form-check d-inline-block"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      type: "checkbox",
      className: "form-check-input",
      name: "checkbox-".concat(checkboxNamePrefix, "-all"),
      tabIndex: -1,
      "data-index": -1,
      "data-key": "row-all",
      "data-use": "",
      value: "row-all",
      checked: (_filter$ = getCheckedRootData.filter(function (cur) {
        return cur.key === 'row-all';
      })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked,
      onChange: function onChange(e) {
        var _filter$2;
        checkedAct(e.target, !((_filter$2 = getCheckedRootData.filter(function (cur) {
          return cur.key === 'row-all';
        })[0]) !== null && _filter$2 !== void 0 && _filter$2.checked));
      }
    })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "".concat(item.content)
      }
    }), sortable && itemSortable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "sort-trigger",
      onClick: evSort
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 18 18"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z",
      id: "path",
      fill: "#000000"
    })))) : null);
  }), useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    style: {
      display: 'none'
    }
  })) : null))) : null;
};
/* harmony default export */ const src_TableHeaders = (TableHeaders);
;// CONCATENATED MODULE: ./src/TableSummaries.tsx


/* Table Summaries
-------------------------------------------------*/

var TableSummaries = function TableSummaries(props) {
  var data = props.data,
    footClassName = props.footClassName;
  return data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tfoot", {
    className: footClassName ? footClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, data.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: i
    }, item);
  })))) : null;
};
/* harmony default export */ const src_TableSummaries = (TableSummaries);
;// CONCATENATED MODULE: ./src/TableColgroup.tsx


/* Table Colgroup
-------------------------------------------------*/

var TableColgroup = function TableColgroup(props) {
  var data = props.data;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("colgroup", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", null), data ? data.map(function (el, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", {
      key: i
    });
  }) : null));
};
/* harmony default export */ const src_TableColgroup = (TableColgroup);
;// CONCATENATED MODULE: ./src/index.tsx
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Table = function Table(props) {
  var tableCheckRef = props.tableCheckRef,
    wrapperClassName = props.wrapperClassName,
    tableClassName = props.tableClassName,
    bodyClassName = props.bodyClassName,
    headClassName = props.headClassName,
    footClassName = props.footClassName,
    rowActiveClassName = props.rowActiveClassName,
    checkable = props.checkable,
    useRadio = props.useRadio,
    draggable = props.draggable,
    sortable = props.sortable,
    data = props.data,
    bordered = props.bordered,
    colGroup = props.colGroup,
    responsive = props.responsive,
    enhancedResponsive = props.enhancedResponsive,
    enhancedResponsiveWithScrollBar = props.enhancedResponsiveWithScrollBar,
    cellAutoWidth = props.cellAutoWidth,
    id = props.id,
    onCellMouseEnter = props.onCellMouseEnter,
    onCellMouseLeave = props.onCellMouseLeave,
    onCellClick = props.onCellClick,
    onRowMouseEnter = props.onRowMouseEnter,
    onRowMouseLeave = props.onRowMouseLeave,
    onRowClick = props.onRowClick,
    onHeadCellMouseEnter = props.onHeadCellMouseEnter,
    onHeadCellMouseLeave = props.onHeadCellMouseLeave,
    onHeadCellClick = props.onHeadCellClick,
    onClick = props.onClick,
    onCheck = props.onCheck,
    onDrag = props.onDrag,
    onRenderFinished = props.onRenderFinished,
    onCellArrowKeys = props.onCellArrowKeys;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var tbodyRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = src_slicedToArray(_useState, 2),
    checkedPrint = _useState2[0],
    setCheckedPrint = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = src_slicedToArray(_useState3, 2),
    checkedData = _useState4[0],
    setCheckedData = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = src_slicedToArray(_useState5, 2),
    checkedRootData = _useState6[0],
    setCheckedRootData = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState8 = src_slicedToArray(_useState7, 2),
    sortData = _useState8[0],
    setSortData = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = src_slicedToArray(_useState9, 2),
    mainUpdate = _useState10[0],
    setMainUpdate = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState12 = src_slicedToArray(_useState11, 2),
    fieldsCheckedUpdateDataPrint = _useState12[0],
    setFieldsCheckedUpdateDataPrint = _useState12[1];
  var windowResizeUpdate = (0,cjs.debounce)(handleWindowUpdate, 50);
  var _headers = data.hasOwnProperty('headers') ? data.headers : false;
  var _summaries = data.hasOwnProperty('summaries') ? data.summaries : false;
  var _fieldsChecked = data.hasOwnProperty('fieldsChecked') ? data.fieldsChecked : false;
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  // effective element movement on keystroke
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState14 = src_slicedToArray(_useState13, 2),
    rootDataInfo = _useState14[0],
    setRootDataInfo = _useState14[1];
  var refNode = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState16 = src_slicedToArray(_useState15, 2),
    focusableCellId = _useState16[0],
    setFocusableCellId = _useState16[1];

  //

  //Set the class names of different styles
  //
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';

  //
  var responsiveClasses = '';
  if (typeof responsive === 'undefined' || responsive === true) responsiveClasses += ' table-responsive';

  //
  var enhancedResponsiveClasses = '';
  if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
  if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';

  //
  var checkableClasses = '';
  if (checkable) checkableClasses += ' has-checkbox';

  //
  var radioClasses = '';
  if (useRadio) radioClasses += ' use-radio';

  //
  var draggableClasses = '';
  if (draggable) draggableClasses += ' allow-dragdrop';

  //
  var sortableClasses = '';
  if (sortable) sortableClasses += ' enable-sort';

  // click outside
  (0,cjs.useClickOutside)({
    enabled: true,
    isOutside: function isOutside(event) {
      return event.target.closest(".table__wrapper") === null;
    },
    handle: function handle(event) {
      removeCellFocusClassName(rootRef.current);
    }
  }, []);

  // ================================================================
  // generic
  // ================================================================
  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  };
  var allRows = function allRows() {
    return [].slice.call(tbodyRef.current.children);
  };
  var printData = function printData(data) {
    var _res = [];
    data.forEach(function (v) {
      _res.push(formatRowControlVal(rootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(v, "\"]")), idRes));
    });
    return _res;
  };

  // ================================================================
  // responsive table initialization
  // ================================================================
  function handleWindowUpdate() {
    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerWidth != windowWidth) {
      // Update the window width for next time
      windowWidth = window.innerWidth;

      // Do stuff here
      tableDataScrolledInit(windowWidth);
    }
  }
  function maxDimension(elements) {
    var res = {
      'height': 0,
      'width': 0
    };
    var elementHeights = Array.prototype.map.call(elements, function (el) {
      return el.clientHeight;
    });
    var elementWidths = Array.prototype.map.call(elements, function (el) {
      return el.clientWidth;
    });
    var maxHeight = Math.max.apply(null, elementHeights);
    var maxWidth = Math.max.apply(null, elementWidths);
    res = {
      'height': maxHeight,
      'width': maxWidth
    };
    return res;
  }
  ;
  function tableDataScrolledInit(w) {
    if (w <= 768 && tbodyRef.current.querySelector('tr') !== null) {
      var _loop = function _loop() {
        var tbodyRows = rootRef.current.querySelectorAll("tbody tr [data-table-col=\"".concat(i, "\"]"));
        var maxHeight = maxDimension(tbodyRows).height;
        if (maxHeight > 0) {
          [].slice.call(tbodyRows).forEach(function (row) {
            row.style.height = maxHeight + 'px';
          });

          //
          var theadRows = rootRef.current.querySelectorAll("thead tr [data-table-col=\"".concat(i, "\"]"));
          [].slice.call(theadRows).forEach(function (row) {
            row.style.height = maxHeight + 'px';
          });
        }
      };
      //get maxHeight of per row
      for (var i = 0; i < tbodyRef.current.querySelector('tr').children.length; i++) {
        _loop();
      }
    } else {
      [].slice.call(rootRef.current.querySelectorAll('tbody td, tbody th, thead th')).forEach(function (node, i) {
        node.style.removeProperty('height');
      });
    }
  }

  // ================================================================
  // checkboxes data
  // ================================================================
  function initCheckboxesData() {
    var _checkboxes = (0,cjs.getChildren)(rootRef.current.querySelector('table').querySelector('tbody'), '[type="checkbox"]');
    var _data = [];
    [].slice.call(_checkboxes).forEach(function (node, i) {
      _data.push({
        key: "row-".concat(i),
        checked: false
      });
    });
    setCheckedData(_data);
    setCheckedRootData([{
      key: "row-all",
      checked: false
    }]);
  }

  // ================================================================
  // sort with headers
  // ================================================================
  var inverse = false;
  function handleSortList(e) {
    var el = e.currentTarget.parentNode;
    var filterType = el.dataset.sortType;
    var curIndex = el.dataset.tableCol;
    var targetComparator = [].slice.call(tbodyRef.current.querySelectorAll("[data-table-col=\"".concat(curIndex, "\"]")));
    if (filterType === 'false' || filterType === '0') return false;

    //sort of HTML elements
    var sortBy = function sortBy(a, b) {
      var txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
        txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();

      //type of number
      if (filterType == 'number') {
        txt1 = Number(txt1.replace(/[^0-9.-]+/g, ''));
        txt2 = Number(txt2.replace(/[^0-9.-]+/g, ''));
      }

      //type of date
      if (filterType == 'date') {
        txt1 = new Date(txt1);
        txt2 = new Date(txt2);
      }

      //add filter class
      allRows().forEach(function (node) {
        node.classList.add('newsort');
      });
      inverse = !inverse;
      return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
    };
    targetComparator.sort(sortBy);

    //console.log( 'targetComparator:', targetComparator );
    //console.log( 'inverse:', self.inverse );

    if (!inverse) targetComparator.reverse();
    allRows().forEach(function (node) {
      node.remove();
    });
    for (var i = 0; i < targetComparator.length; i++) {
      var curRow = targetComparator[i].parentNode;
      tbodyRef.current.appendChild(curRow);
    }
  }

  // ================================================================
  //drag & drop
  // ================================================================
  var draggedObj = null;
  var overObj = null;
  var placeholderGenerator = function placeholderGenerator(trHeight) {
    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-placeholder';
    newRow.dataset.placeholder = 'true';
    newRow.style.height = trHeight + 'px';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var lastRowGenerator = function lastRowGenerator(trHeight) {
    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-obj row-obj-clonelast';
    newRow.dataset.id = allRows().length.toString();
    newRow.style.height = trHeight + 'px';
    newRow.style.display = 'none';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var removePlaceholder = function removePlaceholder() {
    // Delete row at the "index" of the table
    var placeholder = [].slice.call(tbodyRef.current.querySelectorAll("[data-placeholder]"));
    placeholder.forEach(function (node) {
      tbodyRef.current.removeChild(node);
    });
  };
  function handleTbodyLeave(e) {
    var _tbodyRef$current;
    (_tbodyRef$current = tbodyRef.current) === null || _tbodyRef$current === void 0 ? void 0 : _tbodyRef$current.classList.remove('drag-trigger-mousedown');
  }

  // events fired on the drop targets
  var handledragOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    e.preventDefault();
    if (draggedObj === null) return;
    draggedObj.style.display = 'none';
    if (e.target.classList.contains('row-placeholder')) return;
    var itemsWrapper = e.target.parentNode;
    if (itemsWrapper.classList.contains('row-obj')) {
      overObj = itemsWrapper;
      removePlaceholder();
      if (Number(overObj.dataset.id) === allRows().length - 1) {
        tbodyRef.current.insertBefore(placeholderGenerator(allRows().at(-2).clientHeight), overObj);
      } else {
        tbodyRef.current.insertBefore(placeholderGenerator(overObj.clientHeight), overObj);
      }
    }
  }, [sortData]);
  var handleDragStart = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    draggedObj = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedObj);
    draggedObj.classList.add('dragging');
    allRows().at(-1).style.setProperty('display', 'table-row', "important");

    // callback
    var dragStart = function dragStart(callback) {
      callback.call(null, draggedObj, sortData, printData(sortData));
    };
    onDrag === null || onDrag === void 0 ? void 0 : onDrag(dragStart, null);
  }, [handledragOver]);
  var handleDragEnd = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    var _tbodyRef$current2;
    draggedObj.style.display = 'table-row';
    removePlaceholder();
    draggedObj.classList.remove('dragging');
    (_tbodyRef$current2 = tbodyRef.current) === null || _tbodyRef$current2 === void 0 ? void 0 : _tbodyRef$current2.classList.remove('drag-trigger-mousedown');
    if (overObj === null) return;

    // update state
    var curData = [];
    curData = JSON.parse(JSON.stringify(sortData));
    var from = Number(draggedObj.dataset.id);
    var to = Number(overObj.dataset.id);
    if (from < to) to--;

    //sort data
    var newData = [];

    //console.log('--> data1:', curData);

    curData.splice(to, 0, curData.splice(from, 1)[0]);
    for (var i = 0; i < curData.length; i++) {
      for (var j = 0; j < curData.length; j++) {
        if (curData[i] === curData[j]) {
          newData.push(curData[j]);
        }
      }
    }

    //console.log("--> data2: ", newData);
    setSortData(newData);

    // reset data-id in order to sort data
    newData.forEach(function (curId, order) {
      var _el = rootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(curId, "\"]"));
      if (_el !== null) _el.dataset.id = order;
    });

    // sort elements
    var categoryItemsArray = allRows();
    var sorter = function sorter(a, b) {
      return a.dataset.id.localeCompare(b.dataset.id); // sorts based on alphabetical order
    };

    var sorted = categoryItemsArray.sort(sorter);
    sorted.forEach(function (e) {
      return rootRef.current.querySelector('table').querySelector('tbody').appendChild(e);
    });

    // callback
    var dragEnd = function dragEnd(callback) {
      callback.call(null, draggedObj, newData, printData(newData));
    };
    onDrag === null || onDrag === void 0 ? void 0 : onDrag(null, dragEnd);
  }, [sortData]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Update cell ids
    //--------------
    if (data && data.fields) {
      setRootDataInfo({
        totalRow: data.fields.length
      });
    }

    // Update status of children components
    //--------------
    setMainUpdate(function (prevState) {
      return !prevState;
    });

    // Initialize sort list data
    //--------------
    var listIndexes = allRows().map(function (node, i) {
      return i;
    });
    setSortData(listIndexes);

    // Initialize checkboxes data
    //--------------
    initCheckboxesData();

    // With scroll bars
    //--------------
    if (enhancedResponsiveWithScrollBar) {
      var _windowWidth = window.innerWidth;
      tableDataScrolledInit(_windowWidth);
    }

    //drag & drop
    //--------------
    if (draggable) {
      insertAfter(lastRowGenerator(allRows().at(-1).clientHeight), allRows().at(-1));
    }

    // Add function to the element that should be used as the scrollable area.
    //--------------
    window.removeEventListener('resize', windowResizeUpdate);
    window.addEventListener('resize', windowResizeUpdate);

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      window.removeEventListener('resize', windowResizeUpdate);
    };
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // display after render finished
    onRenderFinished === null || onRenderFinished === void 0 ? void 0 : onRenderFinished(true);
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootRef,
    id: idRes,
    className: "table__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses, " ").concat(enhancedResponsiveClasses, " ").concat(checkableClasses, " ").concat(radioClasses, " ").concat(draggableClasses, " ").concat(sortableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: "".concat(tableClassName || tableClassName === '' ? tableClassName : "table", " ").concat(tableClasses, " ").concat(typeof cellAutoWidth === 'undefined' || cellAutoWidth === false ? '' : 'cell-autowidth')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableHeaders, {
    data: _headers,
    useRadio: useRadio || false,
    headClassName: headClassName,
    checkboxNamePrefix: idRes,
    sortable: sortable,
    updateCheckedPrint: setCheckedPrint,
    getCheckedPrint: checkedPrint,
    updategetCheckedData: setCheckedData,
    getCheckedData: checkedData,
    updategetCheckedRootData: setCheckedRootData,
    getCheckedRootData: checkedRootData,
    onCheck: onCheck,
    evSort: handleSortList,
    evHeadCellMouseEnter: onHeadCellMouseEnter,
    evHeadCellMouseLeave: onHeadCellMouseLeave,
    evHeadCellClick: onHeadCellClick
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableSummaries, {
    data: _summaries,
    footClassName: footClassName
  }), data.hasOwnProperty('fields') && colGroup ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableColgroup, {
    data: data.fields
  }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
    ref: tbodyRef,
    className: bodyClassName ? bodyClassName : '',
    onDragOver: handledragOver,
    onMouseLeave: handleTbodyLeave
  }, data.hasOwnProperty('fields') ? data.fields.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableRow, {
      key: i + String(mainUpdate) // Trigger child component update when prop of parent changes
      ,
      index: i,
      refNode: refNode,
      rootDataInfo: rootDataInfo,
      tableRootRef: rootRef,
      tableCheckRef: tableCheckRef,
      rowActiveClassName: rowActiveClassName,
      fieldsChecked: _fieldsChecked,
      fieldsCheckedAct: [fieldsCheckedUpdateDataPrint, setFieldsCheckedUpdateDataPrint],
      rowKey: "row-".concat(i),
      headerLabel: _headers,
      data: item,
      checkboxNamePrefix: idRes,
      updateCheckedPrint: setCheckedPrint,
      getCheckedPrint: checkedPrint,
      updategetCheckedData: setCheckedData,
      getCheckedData: checkedData,
      updategetCheckedRootData: setCheckedRootData,
      getCheckedRootData: checkedRootData,
      onClick: onClick,
      onCheck: onCheck,
      draggable: draggable || false,
      useRadio: useRadio || false,
      updateFocusableCellId: [focusableCellId, setFocusableCellId],
      evDragEnd: handleDragEnd,
      evDragStart: handleDragStart,
      evCellMouseEnter: onCellMouseEnter,
      evCellMouseLeave: onCellMouseLeave,
      evCellClick: onCellClick,
      evRowMouseEnter: onRowMouseEnter,
      evRowMouseLeave: onRowMouseLeave,
      evRowClick: onRowClick,
      evCellArrowKeys: onCellArrowKeys
    });
  }) : ""))));
};
/* harmony default export */ const src = (Table);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});