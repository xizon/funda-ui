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
            children = props.children,
            _props$usePortal = props.usePortal,
            usePortal = _props$usePortal === void 0 ? true : _props$usePortal;
          var containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

          // Move HTML templates to tag end body </body>
          // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
          // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
          // ###
          // ###
          // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (usePortal) {
              containerRef.current = document.createElement('div');
              containerRef.current.className = "root-portal-container ".concat(containerClassName || '');
              document.body.appendChild(containerRef.current);
            }
            return function () {
              if (usePortal && containerRef.current) {
                containerRef.current.remove();
              }
            };
          }, [usePortal]);
          if (!usePortal) {
            return show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, children) : null;
          }
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

/***/ 70:
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
        /* harmony export */"clearAllBodyScrollLocks": function clearAllBodyScrollLocks() {
          return (/* binding */_clearAllBodyScrollLocks
          );
        },
        /* harmony export */"disableBodyScroll": function disableBodyScroll() {
          return (/* binding */_disableBodyScroll
          );
        },
        /* harmony export */"enableBodyScroll": function enableBodyScroll() {
          return (/* binding */_enableBodyScroll
          );
        }
        /* harmony export */
      });
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
      // =================================================================
      // based on https://github.com/willmcpo/body-scroll-lock
      // =================================================================

      // @flow
      // Adopted and modified solution from Bohdan Didukh (2017)
      // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

      // Older browsers don't support event options, feature detect it.
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
                  document.body.style.top = "".concat(-(scrollY + bottomBarHeight));
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
      var _disableBodyScroll = function disableBodyScroll(targetElement, options) {
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
      var _clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
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
      var _enableBodyScroll = function enableBodyScroll(targetElement) {
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

/***/ 771:
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
         * Drag & Drop Element
         * 
         * @usage:
        
        
        const App = () => {
            const {
                dragContentHandle, 
                dragHandle,
                resetPosition
            }: any = useDraggable({
                enabled: true,   // if `false`, drag and drop is disabled
                preventOutsideScreen: {
                    xAxis: true,
                    yAxis: true
                },
                onStart: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
                    
                },
                onDrag: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
                    console.log(coordinates); // {dx: -164, dy: -37}
        
                },
                onStop: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
        
                }
            });
        
            const resetModal = () => {
                resetPosition?.();
            };
        
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

        var useDraggable = function useDraggable(_ref) {
          var enabled = _ref.enabled,
            preventOutsideScreen = _ref.preventOutsideScreen,
            onStart = _ref.onStart,
            onStop = _ref.onStop,
            onDrag = _ref.onDrag;
          var DRAG_DISABLED = typeof enabled === "undefined" || enabled === false;
          var dragging = false; // DO NOT USE 'useState()'
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
            _useState2 = _slicedToArray(_useState, 2),
            node = _useState2[0],
            setNode = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
            _useState4 = _slicedToArray(_useState3, 2),
            targetNode = _useState4[0],
            setTargetNode = _useState4[1];
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
              dx: 0,
              dy: 0
            }),
            _useState6 = _slicedToArray(_useState5, 2),
            _useState6$ = _useState6[0],
            dx = _useState6$.dx,
            dy = _useState6$.dy,
            setOffset = _useState6[1];
          var ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nodeEle) {
            setNode(nodeEle);
          }, []);
          var targetRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nodeEle) {
            setTargetNode(nodeEle);
          }, []);
          var withoutViewport = function withoutViewport(startPos, e, targetEl) {
            if (!targetEl || typeof preventOutsideScreen === 'undefined') return null;

            // latest mouse coordinates
            var mouseX = e.clientX;
            var mouseY = e.clientY;

            // the size of the parent element
            var parentWidth = window.innerWidth;
            var parentHeight = window.innerHeight;

            // the size of the child element
            var childrenWidth = targetEl.clientWidth;
            var childrenHight = targetEl.clientHeight;
            var minLeft = -(parentWidth - childrenWidth) / 2;
            var maxLeft = (parentWidth - childrenWidth) / 2;
            var minTop = -(parentHeight - childrenHight) / 2;
            var maxTop = (parentHeight - childrenHight) / 2;

            // calculates the left and top offsets after the move
            var nLeft = mouseX - startPos.x;
            var nTop = mouseY - startPos.y;

            // Determine whether the left or right distance is out of bounds
            if (preventOutsideScreen.xAxis) {
              nLeft = nLeft <= minLeft ? minLeft : nLeft;
              nLeft = nLeft >= maxLeft ? maxLeft : nLeft;
            }
            if (preventOutsideScreen.yAxis) {
              nTop = nTop <= minTop ? minTop : nTop;
              nTop = nTop >= maxTop ? maxTop : nTop;
            }
            return [nLeft, nTop];
          };
          var handleMouseDown = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
            dragging = true;
            onStart === null || onStart === void 0 ? void 0 : onStart({
              dx: dx,
              dy: dy
            }, targetNode, node);
            var startPos = {
              x: e.clientX - dx,
              y: e.clientY - dy
            };
            var handleMouseMove = function handleMouseMove(e) {
              if (!dragging) return;
              var dx = e.clientX - startPos.x;
              var dy = e.clientY - startPos.y;

              // prevent dragged item to be dragged outside of screen
              if (preventOutsideScreen && node) {
                var _data = withoutViewport(startPos, e, node);
                if (_data !== null) {
                  dx = _data[0];
                  dy = _data[1];
                }
              }
              setOffset({
                dx: dx,
                dy: dy
              });
              onDrag === null || onDrag === void 0 ? void 0 : onDrag({
                dx: dx,
                dy: dy
              }, targetNode, node);
              e.stopPropagation();
              e.preventDefault();
            };
            var handleMouseUp = function handleMouseUp() {
              dragging = false;
              onStop === null || onStop === void 0 ? void 0 : onStop({
                dx: dx,
                dy: dy
              }, targetNode, node);
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }, [dx, dy, node]);
          var handleTouchStart = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
            dragging = true;
            onStart === null || onStart === void 0 ? void 0 : onStart({
              dx: dx,
              dy: dy
            }, targetNode, node);
            var touch = e.touches[0];
            var startPos = {
              x: touch.clientX - dx,
              y: touch.clientY - dy
            };
            var handleTouchMove = function handleTouchMove(e) {
              if (!dragging) return;
              var touch = e.touches[0];
              var dx = touch.clientX - startPos.x;
              var dy = touch.clientY - startPos.y;

              // prevent dragged item to be dragged outside of screen
              if (preventOutsideScreen && node) {
                var _data = withoutViewport(startPos, touch, node);
                if (_data !== null) {
                  dx = _data[0];
                  dy = _data[1];
                }
              }
              setOffset({
                dx: dx,
                dy: dy
              });
              onDrag === null || onDrag === void 0 ? void 0 : onDrag({
                dx: dx,
                dy: dy
              }, targetNode, node);
              e.stopPropagation();
              e.preventDefault();
            };
            var handleTouchEnd = function handleTouchEnd() {
              dragging = false;
              onStop === null || onStop === void 0 ? void 0 : onStop({
                dx: dx,
                dy: dy
              }, targetNode, node);
              document.removeEventListener('touchmove', handleTouchMove);
              document.removeEventListener('touchend', handleTouchEnd);
            };
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
          }, [dx, dy, node]);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (node) {
              node.style.transform = "translate3d(".concat(dx, "px, ").concat(dy, "px, 0)");
            }
          }, [node, dx, dy]);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (DRAG_DISABLED) {
              return;
            }
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
          return {
            dragContentHandle: ref,
            dragHandle: targetRef,
            resetPosition: function resetPosition() {
              // reset position
              setOffset({
                dx: 0,
                dy: 0
              });
            }
          };
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useDraggable;
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
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(771);
/* harmony import */ var funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





// Destroys body scroll locking

var ModalDialog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var modalContentClassName = props.modalContentClassName,
    modalHeaderClassName = props.modalHeaderClassName,
    modalTitleClassName = props.modalTitleClassName,
    modalBodyClassName = props.modalBodyClassName,
    modalFooterClassName = props.modalFooterClassName,
    modalFooterExpandedContentClassName = props.modalFooterExpandedContentClassName,
    lockBodyScroll = props.lockBodyScroll,
    draggable = props.draggable,
    draggedPreventOutsideScreen = props.draggedPreventOutsideScreen,
    depth = props.depth,
    show = props.show,
    maxWidth = props.maxWidth,
    minHeight = props.minHeight,
    fullscreen = props.fullscreen,
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
    children = props.children,
    onPressEnter = props.onPressEnter;
  var DEPTH = depth || 1055; // the default value same as bootstrap
  var M_WIDTH = fullscreen ? undefined : typeof maxWidth === 'function' ? maxWidth() : maxWidth ? maxWidth : undefined;
  var M_HEIGHT = typeof minHeight === 'function' ? minHeight() : minHeight ? minHeight : undefined;
  var LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? false : lockBodyScroll;
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2___default()();
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var idRes = id || uniqueID;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalShow = _useState2[0],
    setModalShow = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    incomingData = _useState4[0],
    setIncomingData = _useState4[1];

  // drag and drop
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isDragging = _useState6[0],
    setIsDragging = _useState6[1];
  var _useDraggable = funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3___default()({
      enabled: draggable,
      preventOutsideScreen: draggedPreventOutsideScreen,
      onStart: function onStart(coordinates, handleEl, contentEl) {
        setIsDragging(true);
      },
      onDrag: function onDrag(coordinates, handleEl, contentEl) {},
      onStop: function onStop(coordinates, handleEl, contentEl) {
        setIsDragging(false);
      }
    }),
    dragContentHandle = _useDraggable.dragContentHandle,
    dragHandle = _useDraggable.dragHandle,
    resetPosition = _useDraggable.resetPosition;

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(externalRef, function () {
    return {
      open: function open() {
        handleOpenWin(null);
      },
      close: function close() {
        handleCloseWin(null);
      }
    };
  }, [externalRef]);

  //
  function handleCloseWin(e) {
    if (typeof e !== 'undefined' && e !== null) {
      e.preventDefault();

      // Prevent click events of parent nested Modal
      e.stopPropagation();
    }
    closeAction();

    // reset modal coordinates
    setTimeout(function () {
      resetPosition === null || resetPosition === void 0 ? void 0 : resetPosition();
    }, 300);

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
    var callback = function callback() {
      handleCloseWin(e);
    };
    onOpen === null || onOpen === void 0 ? void 0 : onOpen(e, callback);
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
    if (LOCK_BODY_SCROLL) (0,funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.enableBodyScroll)(document.querySelector('body'));

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
    if (LOCK_BODY_SCROLL) (0,funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.disableBodyScroll)(document.querySelector('body'));

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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update incoming data
    //--------------
    setIncomingData(data);

    // show (ONLY, DO NOT USE `if ... else ...`)
    //--------------
    if (show) {
      handleOpenWin(null);
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
      if (LOCK_BODY_SCROLL) (0,funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.clearAllBodyScrollLocks)();

      // Cancels a timeout previously established by calling setTimeout().
      clearTimeout(window.setCloseModalDialog);
    };
  }, [show, data, modalRef.current]); // When show`` defaults to true, `modalRef.current` will be null

  // 监听回车键
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!modalShow || !onPressEnter) return;
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        var _callback = function _callback() {
          handleCloseWin(null);
        };
        onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(_callback);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalShow, onPressEnter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, triggerContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: triggerClassName ? triggerClassName : 'd-inline w-auto',
    ref: triggerRef,
    onClick: handleOpenWin
  }, triggerContent)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_root_portal__WEBPACK_IMPORTED_MODULE_1___default()), {
    show: true,
    containerClassName: "ModalDialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: modalRef,
    className: enableVideo ? "modal fade is-video ".concat(modalShow ? 'show' : '') : "modal fade ".concat(modalShow ? 'show' : ''),
    tabIndex: -1,
    "aria-hidden": "true",
    style: {
      pointerEvents: 'none',
      zIndex: DEPTH
    },
    "data-mask": "mask-".concat(idRes)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog modal-dialog-centered modal-dialog-scrollable ".concat(fullscreen ? 'modal-fullscreen' : ''),
    style: M_WIDTH ? {
      maxWidth: "".concat(M_WIDTH)
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: dragContentHandle,
    className: "".concat(enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content', " ").concat(modalContentClassName || '', " ").concat(isDragging ? 'dragging' : ''),
    style: {
      overflow: 'inherit',
      minHeight: M_HEIGHT ? M_HEIGHT : 'auto'
    }
  }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: dragHandle,
    className: "".concat(enableVideo ? 'modal-header border-0 px-0' : 'modal-header', " ").concat(modalHeaderClassName || ''),
    style: {
      cursor: draggable ? 'move' : 'default'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "modal-title ".concat(modalTitleClassName || '')
  }, heading || ''), !closeDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: enableVideo ? 'btn-close btn-close-white' : 'btn-close',
    "data-close": "1",
    onClick: function onClick(e) {
      return handleCloseWin(e);
    }
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(enableVideo ? 'modal-body m-0 p-0' : 'modal-body', " ").concat(modalBodyClassName || '')
  }, enableVideo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog__video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ratio ratio-16x9"
  }, children))) : children), footerExpandedContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer modal-expanded-footer ".concat(modalFooterExpandedContentClassName || '')
  }, footerExpandedContent)) : null, closeBtnLabel || submitBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer ".concat(modalFooterClassName || '')
  }, !closeDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, closeBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-close": "1",
    onClick: function onClick(e) {
      return handleCloseWin(e);
    },
    type: "button",
    className: closeBtnClassName ? closeBtnClassName : 'btn btn-secondary'
  }, closeBtnLabel) : null) : null, submitBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-confirm": "1",
    "data-incoming-data": "".concat(incomingData),
    onClick: function onClick(e) {
      var callback = function callback() {
        handleCloseWin(e);
      };
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(e, callback, incomingData);
    },
    type: "button",
    className: submitBtnClassName ? submitBtnClassName : 'btn btn-primary'
  }, submitBtnLabel) : null)) : null))), !maskDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "mask-".concat(idRes)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDialog);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});