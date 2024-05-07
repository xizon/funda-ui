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
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(787), __webpack_require__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      function __nested_webpack_require_11836__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_11836__);
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
        /******/__nested_webpack_require_11836__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_11836__.d(getter, {
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
        /******/__nested_webpack_require_11836__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_11836__.o(definition, key) && !__nested_webpack_require_11836__.o(exports, key)) {
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
        /******/__nested_webpack_require_11836__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_11836__.r = function (exports) {
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
        /******/__nested_webpack_require_11836__.nmd = function (module) {
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
        __nested_webpack_require_11836__.r(__webpack_exports__);

        // EXPORTS
        __nested_webpack_require_11836__.d(__webpack_exports__, {
          "default": function _default() {
            return (/* binding */src
            );
          }
        });

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_11836__(787);
        var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_11836__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
        // EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
        var cjs = __nested_webpack_require_11836__(909);
        var cjs_default = /*#__PURE__*/__nested_webpack_require_11836__.n(cjs);
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

          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
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
            className: "".concat(enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content', " ").concat(modalContentClassName || ''),
            style: {
              overflow: 'inherit',
              minHeight: M_HEIGHT ? M_HEIGHT : 'auto'
            }
          }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
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