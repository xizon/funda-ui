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

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof3(obj) { "@babel/helpers - typeof"; return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof3(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof3(exports)) === 'object' && ( false ? 0 : _typeof3(module)) === 'object') module.exports = factory(__webpack_require__(787), __webpack_require__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      var __webpack_modules__ = {
        /***/909: /***/function _(module, exports, __nested_webpack_require_1189__) {
          /* module decorator */module = __nested_webpack_require_1189__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_1189__(787), __nested_webpack_require_1189__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_1189__(787), __nested_webpack_require_1189__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/456: /***/function _(module, exports, __nested_webpack_require_11297__) {
          /* module decorator */module = __nested_webpack_require_11297__.nmd(module);
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
            if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory(__nested_webpack_require_11297__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_11297__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/787: /***/function _(module) {
          "use strict";

          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        },

        /***/156: /***/function _(module) {
          "use strict";

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
      function __nested_webpack_require_192675__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_192675__);
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
        /******/__nested_webpack_require_192675__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_192675__.d(getter, {
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
        /******/__nested_webpack_require_192675__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_192675__.o(definition, key) && !__nested_webpack_require_192675__.o(exports, key)) {
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
        /******/__nested_webpack_require_192675__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_192675__.r = function (exports) {
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
        /******/__nested_webpack_require_192675__.nmd = function (module) {
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

        // ESM COMPAT FLAG
        __nested_webpack_require_192675__.r(__webpack_exports__);

        // EXPORTS
        __nested_webpack_require_192675__.d(__webpack_exports__, {
          "default": function _default() {
            return (/* binding */src
            );
          }
        });

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_192675__(787);
        var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_192675__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
        // EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
        var cjs = __nested_webpack_require_192675__(909);
        var cjs_default = /*#__PURE__*/__nested_webpack_require_192675__.n(cjs);
        // EXTERNAL MODULE: ../Utils/dist/cjs/index.js
        var dist_cjs = __nested_webpack_require_192675__(456);
        ; // CONCATENATED MODULE: ./src/plugins/BSL/bodyScrollLock.es6.js
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
        // Older browsers don't support event options, feature detect it.

        // Adopted and modified solution from Bohdan Didukh (2017)
        // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

        var hasPassiveEvents = false;
        if (typeof window !== 'undefined') {
          var passiveTestOptions = {
            get passive() {
              hasPassiveEvents = true;
              return undefined;
            }
          };
          window.addEventListener('testPassive', null, passiveTestOptions);
          window.removeEventListener('testPassive', null, passiveTestOptions);
        }
        var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
        var locks = [];
        var documentListenerAdded = false;
        var initialClientY = -1;
        var previousBodyOverflowSetting;
        var previousBodyPosition;
        var previousBodyPaddingRight;

        // returns true if `el` should be allowed to receive touchmove events.
        var allowTouchMove = function allowTouchMove(el) {
          return locks.some(function (lock) {
            if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
              return true;
            }
            return false;
          });
        };
        var preventDefault = function preventDefault(rawEvent) {
          var e = rawEvent || window.event;

          // For the case whereby consumers adds a touchmove event listener to document.
          // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
          // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
          // the touchmove event on document will break.
          if (allowTouchMove(e.target)) {
            return true;
          }

          // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
          if (e.touches.length > 1) return true;
          if (e.preventDefault) e.preventDefault();
          return false;
        };
        var setOverflowHidden = function setOverflowHidden(options) {
          // If previousBodyPaddingRight is already set, don't set it again.
          if (previousBodyPaddingRight === undefined) {
            var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
            var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
            if (reserveScrollBarGap && scrollBarGap > 0) {
              var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
              previousBodyPaddingRight = document.body.style.paddingRight;
              document.body.style.paddingRight = "".concat(computedBodyPaddingRight + scrollBarGap, "px");
            }
          }

          // If previousBodyOverflowSetting is already set, don't set it again.
          if (previousBodyOverflowSetting === undefined) {
            previousBodyOverflowSetting = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
          }
        };
        var restoreOverflowSetting = function restoreOverflowSetting() {
          if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;

            // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
            // can be set again.
            previousBodyPaddingRight = undefined;
          }
          if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;

            // Restore previousBodyOverflowSetting to undefined
            // so setOverflowHidden knows it can be set again.
            previousBodyOverflowSetting = undefined;
          }
        };
        var setPositionFixed = function setPositionFixed() {
          return window.requestAnimationFrame(function () {
            // If previousBodyPosition is already set, don't set it again.
            if (previousBodyPosition === undefined) {
              previousBodyPosition = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left
              };

              // Update the dom inside an animation frame
              var _window = window,
                scrollY = _window.scrollY,
                scrollX = _window.scrollX,
                innerHeight = _window.innerHeight;
              document.body.style.position = 'fixed';
              document.body.style.top = "".concat(-scrollY, "px");
              document.body.style.left = "".concat(-scrollX, "px");
              setTimeout(function () {
                return window.requestAnimationFrame(function () {
                  // Attempt to check if the bottom bar appeared due to the position change
                  var bottomBarHeight = innerHeight - window.innerHeight;
                  if (bottomBarHeight && scrollY >= innerHeight) {
                    // Move the content further up so that the bottom bar doesn't hide it
                    document.body.style.top = -(scrollY + bottomBarHeight);
                  }
                });
              }, 300);
            }
          });
        };
        var restorePositionSetting = function restorePositionSetting() {
          if (previousBodyPosition !== undefined) {
            // Convert the position from "px" to Int
            var y = -parseInt(document.body.style.top, 10);
            var x = -parseInt(document.body.style.left, 10);

            // Restore styles
            document.body.style.position = previousBodyPosition.position;
            document.body.style.top = previousBodyPosition.top;
            document.body.style.left = previousBodyPosition.left;

            // Restore scroll
            window.scrollTo(x, y);
            previousBodyPosition = undefined;
          }
        };

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
          return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
        };
        var handleScroll = function handleScroll(event, targetElement) {
          var clientY = event.targetTouches[0].clientY - initialClientY;
          if (allowTouchMove(event.target)) {
            return false;
          }
          if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
            // element is at the top of its scroll.
            return preventDefault(event);
          }
          if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
            // element is at the bottom of its scroll.
            return preventDefault(event);
          }
          event.stopPropagation();
          return true;
        };
        var disableBodyScroll = function disableBodyScroll(targetElement, options) {
          // targetElement must be provided
          if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
            return;
          }

          // disableBodyScroll must not have been called on this targetElement before
          if (locks.some(function (lock) {
            return lock.targetElement === targetElement;
          })) {
            return;
          }
          var lock = {
            targetElement: targetElement,
            options: options || {}
          };
          locks = [].concat(_toConsumableArray(locks), [lock]);
          if (isIosDevice) {
            setPositionFixed();
          } else {
            setOverflowHidden(options);
          }
          if (isIosDevice) {
            targetElement.ontouchstart = function (event) {
              if (event.targetTouches.length === 1) {
                // detect single touch.
                initialClientY = event.targetTouches[0].clientY;
              }
            };
            targetElement.ontouchmove = function (event) {
              if (event.targetTouches.length === 1) {
                // detect single touch.
                handleScroll(event, targetElement);
              }
            };
            if (!documentListenerAdded) {
              document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
                passive: false
              } : undefined);
              documentListenerAdded = true;
            }
          }
        };
        var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
          if (isIosDevice) {
            // Clear all locks ontouchstart/ontouchmove handlers, and the references.
            locks.forEach(function (lock) {
              lock.targetElement.ontouchstart = null;
              lock.targetElement.ontouchmove = null;
            });
            if (documentListenerAdded) {
              document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
                passive: false
              } : undefined);
              documentListenerAdded = false;
            }

            // Reset initial clientY.
            initialClientY = -1;
          }
          if (isIosDevice) {
            restorePositionSetting();
          } else {
            restoreOverflowSetting();
          }
          locks = [];
        };
        var enableBodyScroll = function enableBodyScroll(targetElement) {
          if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
            return;
          }
          locks = locks.filter(function (lock) {
            return lock.targetElement !== targetElement;
          });
          if (isIosDevice) {
            targetElement.ontouchstart = null;
            targetElement.ontouchmove = null;
            if (documentListenerAdded && locks.length === 0) {
              document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
                passive: false
              } : undefined);
              documentListenerAdded = false;
            }
          }
          if (isIosDevice) {
            restorePositionSetting();
          } else {
            restoreOverflowSetting();
          }
        };
        ; // CONCATENATED MODULE: ./src/plugins/BSL/index.ts

        ; // CONCATENATED MODULE: ./src/index.tsx
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function src_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return src_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen);
        }
        function src_arrayLikeToArray(arr, len) {
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

        //Destroys body scroll locking

        var ModalDialog = /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
          var modalContentClassName = props.modalContentClassName,
            modalHeaderClassName = props.modalHeaderClassName,
            modalTitleClassName = props.modalTitleClassName,
            modalBodyClassName = props.modalBodyClassName,
            modalFooterClassName = props.modalFooterClassName,
            modalFooterExpandedContentClassName = props.modalFooterExpandedContentClassName,
            draggable = props.draggable,
            depth = props.depth,
            show = props.show,
            maxWidth = props.maxWidth,
            minHeight = props.minHeight,
            enableVideo = props.enableVideo,
            heading = props.heading,
            footerExpandedContent = props.footerExpandedContent,
            triggerClassName = props.triggerClassName,
            triggerContent = props.triggerContent,
            closeBtnClassName = props.closeBtnClassName,
            closeBtnLabel = props.closeBtnLabel,
            submitBtnClassName = props.submitBtnClassName,
            submitBtnLabel = props.submitBtnLabel,
            autoClose = props.autoClose,
            maskDisabled = props.maskDisabled,
            maskOpacity = props.maskOpacity,
            closeOnlyBtn = props.closeOnlyBtn,
            closeDisabled = props.closeDisabled,
            data = props.data,
            onLoad = props.onLoad,
            onOpen = props.onOpen,
            onClose = props.onClose,
            onSubmit = props.onSubmit,
            id = props.id,
            children = props.children;
          var DEPTH = depth || 1055; // the default value same as bootstrap
          var M_WIDTH = typeof maxWidth === 'function' ? maxWidth() : maxWidth ? maxWidth : undefined;
          var M_HEIGHT = typeof minHeight === 'function' ? minHeight() : minHeight ? minHeight : undefined;
          var uniqueID = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
          var modalRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          var triggerRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          var idRes = id || uniqueID;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            modalShow = _useState2[0],
            setModalShow = _useState2[1];
          var _useState3 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
            _useState4 = _slicedToArray(_useState3, 2),
            incomingData = _useState4[0],
            setIncomingData = _useState4[1];

          // drag and drop
          var _useDraggable = (0, dist_cjs.useDraggable)(draggable),
            _useDraggable2 = _slicedToArray(_useDraggable, 2),
            dragContentHandle = _useDraggable2[0],
            dragHandle = _useDraggable2[1];

          // exposes the following methods
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, function () {
            return {
              open: function open() {
                handleOpenWin(null);
              },
              close: function close() {
                handleCloseWin(null);
              }
            };
          }, [ref]);

          //
          function handleCloseWin(e) {
            if (typeof e !== 'undefined' && e !== null) {
              e.preventDefault();

              // Prevent click events of parent nested Modal
              e.stopPropagation();
            }
            closeAction();

            //
            onClose === null || onClose === void 0 ? void 0 : onClose(e);
          }
          function handleOpenWin(e) {
            if (typeof e !== 'undefined' && e !== null) {
              e.preventDefault();

              // Prevent click events of parent nested Modal
              e.stopPropagation();
            }
            openAction();

            //
            var callback = function callback(e) {
              return function () {
                handleCloseWin(e);
              };
            };
            onOpen === null || onOpen === void 0 ? void 0 : onOpen(e, callback(e));
          }
          function closeAction() {
            // pause video without controls
            //------------------------------------------
            if (window.curVideo !== null && typeof window.curVideo !== 'undefined') window.curVideo.pause();

            // close Modal Dialog
            //------------------------------------------
            var $mask = document.querySelector("#mask-".concat(idRes, " > .modal-backdrop"));
            setModalShow(false);
            if ($mask !== null) $mask.classList.remove('show');
            setTimeout(function () {
              if (modalRef.current !== null) modalRef.current.style.display = 'none';
              if ($mask !== null) $mask.style.display = 'none';
            }, 300);

            // Unlocks the page
            //------------------------------------------
            enableBodyScroll(document.querySelector('body'));

            // Cancels a timeout previously established by calling setTimeout().
            //------------------------------------------
            clearTimeout(window.setCloseModalDialog);
          }
          function openAction() {
            if (modalRef.current === null) return;

            // Video PopUp Interaction
            //------------------------------------------
            var hasVideo = modalRef.current.classList.contains('is-video') ? true : false;
            if (hasVideo) {
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var $videoWrapper = modalRef.current.querySelector('.modal-dialog__video');
              var isIframe = $videoWrapper.getElementsByTagName('iframe').length > 0 ? true : false;
              var $video = isIframe ? $videoWrapper.getElementsByTagName('iframe')[0] : $videoWrapper.getElementsByTagName('video')[0];

              //
              var setVideo = function setVideo(currentWidth, currentHeight, obj) {
                var newMaxW = windowWidth - 80,
                  newMaxH = windowHeight - 80;
                var newW = currentWidth,
                  newH = currentHeight;
                if (currentHeight > newMaxH) {
                  newH = newMaxH;

                  //Scaled/Proportional Content 
                  newW = currentWidth * (newH / currentHeight);
                }
                if (newW > newMaxW) {
                  newW = newMaxW;

                  //Scaled/Proportional Content 
                  newH = currentHeight * (newW / currentWidth);
                }
                obj.height = newH + 'px';
                obj.width = newW + 'px';

                //
                modalRef.current.querySelector('.modal-dialog').style.width = newW + 'px';
              };
              if (isIframe) {
                var _w = parseFloat(modalRef.current.querySelector('.modal-dialog').style.maxWidth);
                if (isNaN(_w)) _w = 500;
                var _h = _w * 0.5625;
                setVideo(_w, _h, $video);
              } else {
                var _sources = $video.getElementsByTagName('source');
                var _src = _sources.length > 0 ? _sources[0].src : $video.src;
                getVideoDimensions(_src).then(function (res) {
                  setVideo(res.width, res.height, $video);
                });
              }

              //Set current video when the tag is <video>
              window.curVideo = $video.tagName === 'VIDEO' ? $video : null;
            }

            // fire Modal Dialog
            //------------------------------------------
            var $mask = document.querySelector("#mask-".concat(idRes, " > .modal-backdrop"));
            modalRef.current.style.display = 'block';
            if ($mask !== null) $mask.style.display = 'block';
            setTimeout(function () {
              setModalShow(true);
              if ($mask !== null) $mask.classList.add('show');
            }, 0);

            // Locks the page
            //------------------------------------------
            //
            // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
            // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
            // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
            disableBodyScroll(document.querySelector('body'));

            //auto close
            //------------------------------------------
            if (autoClose && !isNaN(autoClose)) {
              //
              window.setCloseModalDialog = setTimeout(function () {
                closeAction();
                //
                onClose === null || onClose === void 0 ? void 0 : onClose(null);
              }, autoClose);
            }
          }

          //Returns the dimensions of a video asynchrounsly.
          function getVideoDimensions(url) {
            return new Promise(function (resolve) {
              // create the video element
              var video = document.createElement('video');

              // place a listener on it
              video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                var height = this.videoHeight;
                var width = this.videoWidth;
                // send back result
                resolve({
                  height: height,
                  width: width
                });
              }, false);

              // start download meta-datas
              video.src = url;
            });
          }
          (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
            // update incoming data
            //--------------
            setIncomingData(data);

            // show
            //--------------
            if (show) {
              openAction();

              //
              var _callback = function _callback(e) {
                return function () {
                  handleCloseWin(e);
                };
              };
              onOpen === null || onOpen === void 0 ? void 0 : onOpen(null, _callback(null));
            }

            // Pass the function to be called
            //--------------
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(function () {
              return handleOpenWin;
            }, function () {
              return handleCloseWin;
            });

            // Remove the global list of events, especially as scroll and interval.
            //--------------
            return function () {
              clearAllBodyScrollLocks();

              // Cancels a timeout previously established by calling setTimeout().
              clearTimeout(window.setCloseModalDialog);
            };
          }, [show, data, modalRef.current]); // When show`` defaults to true, `modalRef.current` will be null

          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: triggerClassName ? triggerClassName : 'd-inline w-auto',
            ref: triggerRef,
            onClick: handleOpenWin
          }, triggerContent)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(cjs_default(), {
            show: true,
            containerClassName: "ModalDialog"
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            ref: modalRef,
            className: enableVideo ? "modal fade is-video ".concat(modalShow ? 'show' : '') : "modal fade ".concat(modalShow ? 'show' : ''),
            tabIndex: -1,
            "aria-hidden": "true",
            style: {
              pointerEvents: 'none',
              zIndex: DEPTH
            },
            "data-mask": "mask-".concat(idRes)
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            style: M_WIDTH ? {
              maxWidth: "".concat(M_WIDTH)
            } : {}
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            ref: dragContentHandle,
            className: "".concat(enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content', " ").concat(modalContentClassName || ''),
            style: {
              overflow: 'inherit',
              minHeight: M_HEIGHT ? M_HEIGHT : 'auto'
            }
          }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            ref: dragHandle,
            className: "".concat(enableVideo ? 'modal-header border-0 px-0' : 'modal-header', " ").concat(modalHeaderClassName || '')
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h5", {
            className: "modal-title ".concat(modalTitleClassName || '')
          }, heading || ''), !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
            type: "button",
            className: enableVideo ? 'btn-close btn-close-white' : 'btn-close',
            "data-close": "1",
            onClick: handleCloseWin
          }) : null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "".concat(enableVideo ? 'modal-body m-0 p-0' : 'modal-body', " ").concat(modalBodyClassName || '')
          }, enableVideo ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-dialog__video"
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "ratio ratio-16x9"
          }, children))) : children), footerExpandedContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-footer modal-expanded-footer ".concat(modalFooterExpandedContentClassName || '')
          }, footerExpandedContent)) : null, closeBtnLabel || submitBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-footer ".concat(modalFooterClassName || '')
          }, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, closeBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
            "data-close": "1",
            onClick: handleCloseWin,
            type: "button",
            className: closeBtnClassName ? closeBtnClassName : 'btn btn-secondary'
          }, closeBtnLabel) : null) : null, submitBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
            "data-confirm": "1",
            "data-incoming-data": "".concat(incomingData),
            onClick: function onClick(e) {
              var callback = function callback(e) {
                return function () {
                  handleCloseWin(e);
                };
              };
              onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(e, callback(e), incomingData);
            },
            type: "button",
            className: submitBtnClassName ? submitBtnClassName : 'btn btn-primary'
          }, submitBtnLabel) : null)) : null))), !maskDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            id: "mask-".concat(idRes)
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            id: "mask-".concat(idRes),
            className: modalShow ? 'modal-backdrop fade show' : 'modal-backdrop fade',
            style: maskOpacity ? {
              display: modalShow ? 'block' : 'none',
              opacity: maskOpacity,
              zIndex: DEPTH - 5
            } : {
              display: modalShow ? 'block' : 'none',
              zIndex: DEPTH - 5
            },
            onClick: function onClick(e) {
              if ((typeof closeDisabled === 'undefined' || closeDisabled === false) && (typeof closeOnlyBtn === 'undefined' || closeOnlyBtn === false)) {
                handleCloseWin(null);
              }
            }
          })) : null));
        });
        /* harmony default export */
        var src = ModalDialog;
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
/* harmony import */ var funda_modaldialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(483);
/* harmony import */ var funda_modaldialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_modaldialog__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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


var EventCalendar = function EventCalendar(props) {
  var customTodayDate = props.customTodayDate,
    eventsValue = props.eventsValue,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    iconRemove = props.iconRemove,
    onChangeDate = props.onChangeDate,
    onChangeMonth = props.onChangeMonth,
    onChangeYear = props.onChangeYear,
    onChangeToday = props.onChangeToday,
    cellCloseBtnClassName = props.cellCloseBtnClassName,
    cellCloseBtnLabel = props.cellCloseBtnLabel,
    modalMaskOpacity = props.modalMaskOpacity,
    modalMaxWidth = props.modalMaxWidth,
    modalMinHeight = props.modalMinHeight,
    modalHeading = props.modalHeading,
    modalContent = props.modalContent,
    modalDeleteContent = props.modalDeleteContent,
    modalCloseBtnClassName = props.modalCloseBtnClassName,
    modalCloseBtnLabel = props.modalCloseBtnLabel,
    modalSubmitBtnClassName = props.modalSubmitBtnClassName,
    modalSubmitBtnLabel = props.modalSubmitBtnLabel,
    modalSubmitDeleteBtnClassName = props.modalSubmitDeleteBtnClassName,
    modalSubmitDeleteBtnLabel = props.modalSubmitDeleteBtnLabel,
    onModalEditOpen = props.onModalEditOpen,
    onModalEditClose = props.onModalEditClose,
    onModalDeleteOpen = props.onModalDeleteOpen,
    onModalDeleteClose = props.onModalDeleteClose,
    onModalEditEvent = props.onModalEditEvent,
    onModalDeleteEvent = props.onModalDeleteEvent;
  var DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  var WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  var MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var now = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new Date();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(now),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(date.getDate()),
    _useState6 = _slicedToArray(_useState5, 2),
    day = _useState6[0],
    setDay = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(date.getMonth()),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setMonth = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(date.getFullYear()),
    _useState10 = _slicedToArray(_useState9, 2),
    year = _useState10[0],
    setYear = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStartDayOfMonth(date)),
    _useState12 = _slicedToArray(_useState11, 2),
    startDay = _useState12[0],
    setStartDay = _useState12[1];

  // selection tab
  // gets the today date time object
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(now.getMonth()),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedMonth = _useState14[0],
    setSelectedMonth = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(now.getFullYear()),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedYear = _useState16[0],
    setSelectedYear = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    yearsArray = _useState18[0],
    setYearsCollection = _useState18[1];

  //
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    winYear = _useState20[0],
    setWinYear = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    winMonth = _useState22[0],
    setWinMonth = _useState22[1];

  // modal dialog
  var EVENTS_ENABLED = typeof modalContent !== 'undefined';
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showEdit = _useState24[0],
    setShowEdit = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    showDelete = _useState26[0],
    setShowDelete = _useState26[1];
  var padZero = function padZero(num) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  var isValidDate = function isValidDate(v) {
    return !(String(new window.Date(v)).toLowerCase() === 'invalid date');
  };
  var dateFormat = function dateFormat(v) {
    var date = typeof v === 'string' ? new window.Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
    return date;
  };
  var getTodayDate = function getTodayDate() {
    return getCalendarDate(new Date());
  };

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
        day: padZero(day),
        month: padZero(_date.getMonth() + 1),
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
        day: padZero(day),
        month: padZero(_date.getMonth() + 1),
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
      day: padZero(day),
      month: padZero(month + 1),
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
      day: padZero(day),
      month: padZero(currentIndex + 1),
      year: year.toString()
    });
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setTodayDate(now);

    //
    var _now = getTodayDate().split('-');
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

  //if user change the selectedYear, then udate the years array that is displayed on year tab view
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var years = [];
    for (var y = selectedYear - 10; y < selectedYear + 10; y++) {
      years.push(y);
    }
    setYearsCollection(years);
  }, [selectedYear]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTodayDate(date);
  }, [date]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update events value
    if (Array.isArray(eventsValue)) setVal(eventsValue);

    // update current today
    if (typeof customTodayDate === 'string' && customTodayDate !== '' && isValidDate(customTodayDate)) {
      var _customNow = new Date(customTodayDate);
      setTodayDate(_customNow);
    }
  }, [eventsValue, customTodayDate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__header bg-body-tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal__btn e-cal__btn--prev",
    onClick: handlePrevChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z",
    fill: "#000"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__header__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal__btn ".concat(winMonth ? 'active' : ''),
    onClick: handleShowWinMonth
  }, MONTHS[month], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z",
    fill: "#000000"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal__btn ".concat(winYear ? 'active' : ''),
    onClick: handleShowWinYear
  }, year, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z",
    fill: "#000000"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal__btn e-cal__btn--next",
    onClick: handleNextChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",
    fill: "#000"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__row"
  }, WEEK.map(function (s, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "e-cal__cell e-cal__day e-cal__day--week e-cal__day--disabled bg-secondary-subtle empty ".concat(i === WEEK.length - 1 ? 'last-cell' : ''),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: 'row' + item.row,
      className: "e-cal__row"
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "e-cal__cell e-cal__day ".concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : '', " ").concat(isLastRow ? 'last-row' : ''),
        key: "col" + i,
        "data-date": getCalendarDate(_dateShow),
        "data-day": padZero(d),
        "data-week": i,
        onClick: function onClick(e) {
          if (d > 0) {
            handleDayChange(e, d);
            onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
              id: 0,
              date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
            } : _currentData[0]);
            if (EVENTS_ENABLED) {
              setShowEdit(true);
              onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(_currentData.length === 0 ? {
                id: 0,
                date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
              } : _currentData[0]);
            }
          }
        }
      }, isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "disabled"
      }, __forwardFillNum[i])) : null, d > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, d) : null, isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "disabled"
      }, __backFillNum[i - item.col.filter(Boolean).length]) : null, _currentData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "e-cal__day__event",
        style: typeof _currentData[0] !== 'undefined' && _currentData[0].eventStyles !== 'undefined' ? _currentData[0].eventStyles : {},
        dangerouslySetInnerHTML: {
          __html: _currentData[0].data
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "e-cal__day__eventdel ".concat(cellCloseBtnClassName || '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        tabIndex: -1,
        className: "align-middle",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          setShowDelete(true);
          onModalDeleteOpen === null || onModalDeleteOpen === void 0 ? void 0 : onModalDeleteOpen(_currentData.length === 0 ? {
            id: 0,
            date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
          } : _currentData[0]);
        }
      }, iconRemove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        width: "20px",
        height: "20px",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
        fill: "#000"
      }))), cellCloseBtnLabel || ''))) : null);
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winMonth ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__month-container"
  }, MONTHS_FULL.map(function (month, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "data-month": padZero(index + 1),
      className: "e-cal__month ".concat(selectedMonth === index ? ' selected' : ''),
      key: month + index,
      onClick: function onClick() {
        handleMonthChange(index);
      }
    }, month);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winYear ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__year-container bg-body-tertiary"
  }, yearsArray.map(function (year, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "data-year": year,
      className: "e-cal__year ".concat(selectedYear === year ? ' selected' : ''),
      key: year + index,
      onClick: function onClick() {
        handleYearChange(year);
      }
    }, year);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal__today-wrapper p-2 bg-body-tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal__btn e-cal__btn--today",
    onClick: handleTodayChange
  }, langToday || 'Today'))), EVENTS_ENABLED ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_modaldialog__WEBPACK_IMPORTED_MODULE_1___default()), {
    show: showDelete,
    maskOpacity: modalMaskOpacity,
    triggerClassName: "",
    triggerContent: "",
    closeBtnClassName: modalCloseBtnClassName || 'btn btn-secondary',
    closeBtnLabel: modalCloseBtnLabel || 'Close',
    submitBtnClassName: modalSubmitDeleteBtnClassName || 'btn btn-danger',
    submitBtnLabel: modalSubmitDeleteBtnLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Delete"),
    onClose: function onClose(e) {
      setTimeout(function () {
        setShowDelete(false);
        var _currentData = val.filter(function (item) {
          return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day));
        });
        onModalDeleteClose === null || onModalDeleteClose === void 0 ? void 0 : onModalDeleteClose(_currentData.length === 0 ? {
          id: 0,
          date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day))
        } : _currentData[0]);
      }, 350);
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, closewin, data) {
        var _currentData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _currentData = val.filter(function (item) {
                return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day));
              });
              onModalDeleteEvent === null || onModalDeleteEvent === void 0 ? void 0 : onModalDeleteEvent(_currentData.length === 0 ? {
                id: 0,
                date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day))
              } : _currentData[0], closewin);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }()
  }, modalDeleteContent || 'Are you sure?'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_modaldialog__WEBPACK_IMPORTED_MODULE_1___default()), {
    show: showEdit,
    maskOpacity: modalMaskOpacity,
    heading: modalHeading,
    maxWidth: modalMaxWidth,
    minHeight: modalMinHeight,
    triggerClassName: "",
    triggerContent: "",
    closeBtnClassName: modalCloseBtnClassName || 'btn btn-secondary',
    closeBtnLabel: modalCloseBtnLabel || 'Close',
    submitBtnClassName: modalSubmitBtnClassName || 'btn btn-primary',
    submitBtnLabel: modalSubmitBtnLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Save"),
    onClose: function onClose(e) {
      setTimeout(function () {
        setShowEdit(false);
        var _currentData = val.filter(function (item) {
          return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day));
        });
        onModalEditClose === null || onModalEditClose === void 0 ? void 0 : onModalEditClose(_currentData.length === 0 ? {
          id: 0,
          date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day))
        } : _currentData[0]);
      }, 350);
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, closewin, data) {
        var _currentData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _currentData = val.filter(function (item) {
                return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day));
              });
              onModalEditEvent === null || onModalEditEvent === void 0 ? void 0 : onModalEditEvent(_currentData.length === 0 ? {
                id: 0,
                date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(day))
              } : _currentData[0], closewin);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, modalContent)) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCalendar);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});