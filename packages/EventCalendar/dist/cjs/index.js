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

          /***/
        },

        /***/70: /***/function _(module, exports, __nested_webpack_require_11781__) {
          /* module decorator */module = __nested_webpack_require_11781__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/85: /***/function _(module, exports, __nested_webpack_require_31357__) {
          /* module decorator */module = __nested_webpack_require_31357__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_31357__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_31357__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

        /***/771: /***/function _(module, exports, __nested_webpack_require_39445__) {
          /* module decorator */module = __nested_webpack_require_39445__.nmd(module);
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
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_39445__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_39445__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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
      function __nested_webpack_require_61961__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_61961__);
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
        /******/__nested_webpack_require_61961__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_61961__.d(getter, {
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
        /******/__nested_webpack_require_61961__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_61961__.o(definition, key) && !__nested_webpack_require_61961__.o(exports, key)) {
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
        /******/__nested_webpack_require_61961__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_61961__.r = function (exports) {
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
        /******/__nested_webpack_require_61961__.nmd = function (module) {
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

        __nested_webpack_require_61961__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_61961__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61961__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_61961__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var funda_root_portal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61961__(909);
        /* harmony import */
        var funda_root_portal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_61961__.n(funda_root_portal__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_61961__(85);
        /* harmony import */
        var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_61961__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_61961__(771);
        /* harmony import */
        var funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_61961__.n(funda_utils_dist_cjs_useDraggable__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_61961__(70);
        /* harmony import */
        var funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_61961__.n(funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__);
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

        // Destroys body scroll locking

        var ModalDialog = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
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
          var modalRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var triggerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var idRes = id || uniqueID;
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            modalShow = _useState2[0],
            setModalShow = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
            _useState4 = _slicedToArray(_useState3, 2),
            incomingData = _useState4[0],
            setIncomingData = _useState4[1];

          // drag and drop
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(externalRef, function () {
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
            if (LOCK_BODY_SCROLL) (0, funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.enableBodyScroll)(document.querySelector('body'));

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
            if (LOCK_BODY_SCROLL) (0, funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.disableBodyScroll)(document.querySelector('body'));

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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
              if (LOCK_BODY_SCROLL) (0, funda_utils_dist_cjs_bodyScrollLock__WEBPACK_IMPORTED_MODULE_4__.clearAllBodyScrollLocks)();

              // Cancels a timeout previously established by calling setTimeout().
              clearTimeout(window.setCloseModalDialog);
            };
          }, [show, data, modalRef.current]); // When show`` defaults to true, `modalRef.current` will be null

          // 监听回车键
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, triggerContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: triggerClassName ? triggerClassName : 'd-inline w-auto',
            ref: triggerRef,
            onClick: handleOpenWin
          }, triggerContent)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(funda_root_portal__WEBPACK_IMPORTED_MODULE_1___default(), {
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
          }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
          }, enableVideo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "modal-dialog__video"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "ratio ratio-16x9"
          }, children))) : children), footerExpandedContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "modal-footer modal-expanded-footer ".concat(modalFooterExpandedContentClassName || '')
          }, footerExpandedContent)) : null, closeBtnLabel || submitBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "modal-footer ".concat(modalFooterClassName || '')
          }, !closeDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, closeBtnLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = ModalDialog;
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

/***/ 322:
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
        /* harmony export */"dateFormat": function dateFormat() {
          return (/* binding */_dateFormat
          );
        },
        /* harmony export */"getCalendarDate": function getCalendarDate() {
          return (/* binding */_getCalendarDate
          );
        },
        /* harmony export */"getCurrentDate": function getCurrentDate() {
          return (/* binding */_getCurrentDate
          );
        },
        /* harmony export */"getCurrentDay": function getCurrentDay() {
          return (/* binding */_getCurrentDay
          );
        },
        /* harmony export */"getCurrentMonth": function getCurrentMonth() {
          return (/* binding */_getCurrentMonth
          );
        },
        /* harmony export */"getCurrentYear": function getCurrentYear() {
          return (/* binding */_getCurrentYear
          );
        },
        /* harmony export */"getDateDetails": function getDateDetails() {
          return (/* binding */_getDateDetails
          );
        },
        /* harmony export */"getDaysInLastMonths": function getDaysInLastMonths() {
          return (/* binding */_getDaysInLastMonths
          );
        },
        /* harmony export */"getFirstAndLastMonthDay": function getFirstAndLastMonthDay() {
          return (/* binding */_getFirstAndLastMonthDay
          );
        },
        /* harmony export */"getFullTime": function getFullTime() {
          return (/* binding */_getFullTime
          );
        },
        /* harmony export */"getLastDayInMonth": function getLastDayInMonth() {
          return (/* binding */_getLastDayInMonth
          );
        },
        /* harmony export */"getMonthDates": function getMonthDates() {
          return (/* binding */_getMonthDates
          );
        },
        /* harmony export */"getNextMonthDate": function getNextMonthDate() {
          return (/* binding */_getNextMonthDate
          );
        },
        /* harmony export */"getNextYearDate": function getNextYearDate() {
          return (/* binding */_getNextYearDate
          );
        },
        /* harmony export */"getNow": function getNow() {
          return (/* binding */_getNow
          );
        },
        /* harmony export */"getPrevMonthDate": function getPrevMonthDate() {
          return (/* binding */_getPrevMonthDate
          );
        },
        /* harmony export */"getPrevYearDate": function getPrevYearDate() {
          return (/* binding */_getPrevYearDate
          );
        },
        /* harmony export */"getSpecifiedDate": function getSpecifiedDate() {
          return (/* binding */_getSpecifiedDate
          );
        },
        /* harmony export */"getTodayDate": function getTodayDate() {
          return (/* binding */_getTodayDate
          );
        },
        /* harmony export */"getTomorrowDate": function getTomorrowDate() {
          return (/* binding */_getTomorrowDate
          );
        },
        /* harmony export */"getWeekDatesFromMon": function getWeekDatesFromMon() {
          return (/* binding */_getWeekDatesFromMon
          );
        },
        /* harmony export */"getWeekDatesFromSun": function getWeekDatesFromSun() {
          return (/* binding */_getWeekDatesFromSun
          );
        },
        /* harmony export */"getYesterdayDate": function getYesterdayDate() {
          return (/* binding */_getYesterdayDate
          );
        },
        /* harmony export */"isTimeString": function isTimeString() {
          return (/* binding */_isTimeString
          );
        },
        /* harmony export */"isValidDate": function isValidDate() {
          return (/* binding */_isValidDate
          );
        },
        /* harmony export */"isValidDay": function isValidDay() {
          return (/* binding */_isValidDay
          );
        },
        /* harmony export */"isValidHours": function isValidHours() {
          return (/* binding */_isValidHours
          );
        },
        /* harmony export */"isValidMinutesAndSeconds": function isValidMinutesAndSeconds() {
          return (/* binding */_isValidMinutesAndSeconds
          );
        },
        /* harmony export */"isValidMonth": function isValidMonth() {
          return (/* binding */_isValidMonth
          );
        },
        /* harmony export */"isValidYear": function isValidYear() {
          return (/* binding */_isValidYear
          );
        },
        /* harmony export */"padZero": function padZero() {
          return (/* binding */_padZero
          );
        },
        /* harmony export */"setDateDays": function setDateDays() {
          return (/* binding */_setDateDays
          );
        },
        /* harmony export */"setDateHours": function setDateHours() {
          return (/* binding */_setDateHours
          );
        },
        /* harmony export */"setDateMinutes": function setDateMinutes() {
          return (/* binding */_setDateMinutes
          );
        },
        /* harmony export */"timestampToDate": function timestampToDate() {
          return (/* binding */_timestampToDate
          );
        }
        /* harmony export */
      });
      /**
       * The check string contains only hours, minutes, and seconds
       * @returns {Boolean}  
       */
      function _isTimeString(str) {
        // match "HH:mm:ss"
        var timePattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        return timePattern.test(str);
      }

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
       * Get date details
       * @param {Date | String} v 
       * @param {Boolean} padZeroEnabled 
       * @typedef {Object} JSON
       */
      function _getDateDetails(v) {
        var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var date = _dateFormat(v);
        var year = date.getFullYear();
        var month = _padZero(date.getMonth() + 1, padZeroEnabled);
        var day = _padZero(date.getDate(), padZeroEnabled);
        var hours = _padZero(date.getHours(), padZeroEnabled);
        var minutes = _padZero(date.getMinutes(), padZeroEnabled);
        var seconds = _padZero(date.getSeconds(), padZeroEnabled);
        return {
          year: String(year),
          month: month,
          day: day,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
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
       * Calculates the total number of days from today going back a specified number of months.
       *
       * @param {number} monthsAgo - The number of months to go back (e.g., 3 means the past 3 months).
       * @returns {number} The total number of days between the calculated past date and today.
       *
       * @example
       * getDaysInLastMonths(3); // Returns number of days in the past 3 months
       */
      function _getDaysInLastMonths() {
        var monthsAgo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var today = new Date();
        var pastDate = new Date();
        pastDate.setMonth(today.getMonth() - monthsAgo);
        var diffInMs = today.getTime() - pastDate.getTime();
        var diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
        return diffInDays;
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
       * @returns {Number|String}
       */
      function _getCurrentMonth() {
        var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var m = new Date().getMonth() + 1;
        return padZeroEnabled ? String(m).padStart(2, '0') : m;
      }

      /**
       * Get current day
       * @param {Boolean} padZeroEnabled 
       * @returns {Number|String}
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

      /**
       * Get the date of the specified month
       * @param {Number} year 
       * @param {Number} month 
       * @returns {Array<string>} 
       */
      function _getMonthDates(year, month) {
        var dates = [];

        // Get the total number of days in the month
        var daysInMonth = new Date(year, month, 0).getDate();
        for (var day = 1; day <= daysInMonth; day++) {
          dates.push("".concat(year, "-").concat(String(month).padStart(2, '0'), "-").concat(String(day).padStart(2, '0'))); // 'YYYY-MM-DD'
        }

        return dates;
      }

      /**
       * Get the date of the specified week (From Sunday)
       * @param {Number} weekOffset 
       * @returns {Array<Date>} 
       */
      function _getWeekDatesFromSun(weekOffset) {
        var dates = [];
        var currentDate = new Date();

        // Calculate the date of Sunday
        var dayOfWeek = currentDate.getDay(); // 0 is Sunday
        currentDate.setDate(currentDate.getDate() - dayOfWeek + weekOffset * 7);

        // Get the date of the week
        for (var i = 0; i < 7; i++) {
          var date = new Date(currentDate);
          date.setDate(currentDate.getDate() + i);
          dates.push(date);
        }
        return dates;
      }

      /**
       * Get the date of the specified week (From Monday)
       * @param {Number} weekOffset 
       * @returns {Array<Date>} 
       */
      function _getWeekDatesFromMon(weekOffset) {
        var dates = [];
        var currentDate = new Date();

        // Set the date to Monday
        var dayOfWeek = currentDate.getDay();
        var diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        currentDate.setDate(currentDate.getDate() + diffToMonday + weekOffset * 7);

        // Get the date of the week
        for (var i = 0; i < 7; i++) {
          var date = new Date(currentDate);
          date.setDate(currentDate.getDate() + i);
          dates.push(date);
        }
        return dates;
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
/* harmony import */ var funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
/* harmony import */ var funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_modaldialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(483);
/* harmony import */ var funda_modaldialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_modaldialog__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  var contentRef = props.contentRef,
    calendarWrapperClassName = props.calendarWrapperClassName,
    customTodayDate = props.customTodayDate,
    eventsValue = props.eventsValue,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    onChangeDate = props.onChangeDate,
    onChangeMonth = props.onChangeMonth,
    onChangeYear = props.onChangeYear,
    onChangeToday = props.onChangeToday,
    onListRenderComplete = props.onListRenderComplete,
    iconRemove = props.iconRemove,
    iconAdd = props.iconAdd,
    cellCloseBtnClassName = props.cellCloseBtnClassName,
    cellCloseBtnLabel = props.cellCloseBtnLabel,
    cellAddBtnClassName = props.cellAddBtnClassName,
    cellAddBtnLabel = props.cellAddBtnLabel,
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
    onModalDeleteEvent = props.onModalDeleteEvent,
    onCellMouseEnter = props.onCellMouseEnter,
    onCellMouseLeave = props.onCellMouseLeave,
    onCellClick = props.onCellClick,
    onCellDoubleClick = props.onCellDoubleClick,
    onCellMouseUp = props.onCellMouseUp,
    onKeyPressed = props.onKeyPressed;
  var DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var WEEK = langWeek || ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  var WEEK_FULL = langWeekFull || ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  var MONTHS = langMonths || ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  var MONTHS_FULL = langMonthsFull || ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var START_WEEK_ON = 1; // represents "Monday/1" in JavaScript

  // orginal data
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    orginalData = _useState2[0],
    setOrginalData = _useState2[1];
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
  var modalEditHandleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var modalDeleteHandleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var EVENTS_ENABLED = typeof modalContent !== 'undefined';
  var EVENTS_DELETE_ENABLED = typeof modalDeleteContent !== 'undefined';
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showEdit = _useState24[0],
    setShowEdit = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    showDelete = _useState26[0],
    setShowDelete = _useState26[1];

  // Open temporary storage for pop-ups
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState28 = _slicedToArray(_useState27, 2),
    tableCellId = _useState28[0],
    setTableCellId = _useState28[1];
  var findMondayAndTruncate = function findMondayAndTruncate(dates) {
    var _res = dates.map(function (s) {
      return new Date(s);
    });
    // Find the first Monday in the sequence
    for (var i = 0; i < _res.length; i++) {
      var _date2 = _res[i];
      if (_date2.getDay() === START_WEEK_ON) {
        // Return dates starting from Monday onwards
        return dates.slice(i);
      }
    }
    return []; // Return empty array if no Monday found
  };

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
    return {
      today: function today() {
        handleTodayChange();
      },
      next: function next() {
        handleNextChange();
      },
      prev: function prev() {
        handlePrevChange();
      },
      closeModal: function closeModal() {
        if (modalEditHandleRef.current) modalEditHandleRef.current.close();
        if (modalDeleteHandleRef.current) modalDeleteHandleRef.current.close();
      }
    };
  }, [contentRef]);

  // helper buttons
  var _delBtn = function _delBtn() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "20px",
      height: "20px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
      fill: "#000"
    }))), cellCloseBtnLabel || '');
  };
  var _addBtn = function _addBtn() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconAdd) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "20px",
      height: "20px",
      viewBox: "0 0 32 32"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
      transform: "translate(-102.000000, -1037.000000)",
      fill: "#000000"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z"
    }))))), cellAddBtnLabel || '');
  };
  var queryItemObj = function queryItemObj() {
    var _perData = orginalData.filter(function (item) {
      return (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(item.date) === (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(day));
    });
    var _currentData = undefined;
    if (_perData[0]) {
      var _items = _perData[0].list;
      if (tableCellId === -1) {
        // add new
        _currentData = {
          id: 0,
          date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(day))
        };
      } else {
        // edit or delete
        _currentData = _items.filter(function (item) {
          return item.id == tableCellId;
        })[0];
      }
    }
    return _perData[0] ? _currentData : {
      id: 0,
      date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(day))
    };
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
      var _date3 = new Date(year, currentMonth + 1, day);
      currentMonth = _date3.getMonth();
      currentStartDay = getStartDayOfMonth(_date3);
    }

    //
    var allDays = Array(days[currentMonth] + (currentStartDay - 1)).fill(null).map(function (_, i) {
      return i;
    }); // [0,1,..,30,31]
    var rows = Math.ceil(allDays.length / 7); // 5

    //
    var _tempCells = Array.from({
      length: rows
    }).fill(null);
    var _getForwardFill = function _getForwardFill(_year, _month) {
      // Get the last day of the previous month
      var lastDayOfLastMonth = new Date(_year, _month - 1, 0);
      var last7Days = [];

      // Rewind 7 days forward from the last day
      for (var i = 0; i < 7; i++) {
        last7Days.unshift(new Date(lastDayOfLastMonth));
        lastDayOfLastMonth.setDate(lastDayOfLastMonth.getDate() - 1);
      }
      return last7Days.map(function (v) {
        return (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(v);
      });
    };
    var _getBackFill = function _getBackFill(_year, _month) {
      // Get the first day of the next month
      var firstDayOfNextMonth = new Date(_year, _month, 1);
      var first7Days = [];

      // Rewind 7 days forward from the first day of the next month
      for (var i = 0; i < 7; i++) {
        first7Days.push(new Date(firstDayOfNextMonth));
        firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() + 1);
      }
      return first7Days.map(function (v) {
        return (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(v);
      });
    };

    // The remaining date of the previous month
    // If the number is 7, the calendar does not include the date of the previous month
    var remainPrevDate = findMondayAndTruncate(_getForwardFill(year, month + 1));
    var remainPrevDateTotal = remainPrevDate.length === 7 ? 0 : remainPrevDate.length;
    return {
      rowsTotal: orginalData.length,
      colsTotal: allDays.length,
      forwardFillTotal: remainPrevDateTotal,
      list: _tempCells.map(function (_, j) {
        var _col = allDays.slice(j * 7, (j + 1) * 7);

        // back fill
        var backFillArr = [];
        for (var k = 0; k < 7 - _col.length; k++) {
          backFillArr.push(null);
        }
        _col.splice.apply(_col, [_col.length, 0].concat(_toConsumableArray(backFillArr)));

        //
        var isFirstGroup = j === 0;
        var isLastGroup = j === _tempCells.length - 1;

        // forward fill
        var __forwardFillDate = _getForwardFill(year, month + 1);

        // back fill
        var __backFillDate = _getBackFill(year, month + 1);
        var _getDateShow = function _getDateShow(_dayIndex, _m, _startDay, _month) {
          var currentDay = typeof _dayIndex === 'number' ? _dayIndex - (_startDay - 2) : 0; // ..., -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, ...

          // date
          var _dateShow = currentDay > 0 ? "".concat(year, "-").concat(_month + 1, "-").concat(currentDay) : '';

          // forward & back
          if (isFirstGroup && _dateShow === '') {
            _dateShow = __forwardFillDate.at(currentDay - 1);
          }
          if (isLastGroup && _dateShow === '') {
            _dateShow = __backFillDate.at(_m);
          }
          return {
            date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(_dateShow),
            firstGroup: isFirstGroup,
            lastGroup: isLastGroup,
            validDisplayDate: currentDay > 0 && currentDay <= days[month]
          };
        };

        //
        return {
          month: currentMonth,
          startDay: currentStartDay,
          row: j,
          col: _col,
          dateInfo: _col.map(function (k, m) {
            var _lastWeekDays = _col.filter(Boolean).length;
            return _getDateShow(k, m - _lastWeekDays, currentStartDay, currentMonth);
          }),
          weekDisplay: _col.map(function (k, m) {
            return WEEK[m];
          }),
          week: _col.map(function (k, m) {
            return m;
          })
        };
      })
    };
  };
  function updateTodayDate(inputDate) {
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
        day: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(day),
        month: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(_date.getMonth() + 1),
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
        day: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(day),
        month: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(_date.getMonth() + 1),
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
  }
  function handleMonthChange(currentIndex) {
    setSelectedMonth(currentIndex);
    setMonth(currentIndex);
    setDate(new Date(year, currentIndex, day));

    // close win
    setWinMonth(false);

    //
    onChangeMonth === null || onChangeMonth === void 0 ? void 0 : onChangeMonth({
      day: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(day),
      month: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(currentIndex + 1),
      year: year.toString()
    });
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    updateTodayDate(now);

    //
    var _now = (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getTodayDate)().split('-');
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
    // Guaranteed year change triggered by the front and rear buttons
    onChangeYear === null || onChangeYear === void 0 ? void 0 : onChangeYear({
      day: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(day),
      month: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(month + 1),
      year: year.toString()
    });
  }, [year]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateTodayDate(date);
  }, [date]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update events value
    if (Array.isArray(eventsValue)) setOrginalData(eventsValue);

    // update current today
    if (typeof customTodayDate === 'string' && customTodayDate !== '' && (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.isValidDate)(customTodayDate)) {
      var _customNow = new Date(customTodayDate);
      updateTodayDate(_customNow);
    }

    // Call a function when the list has been rendered completely
    onListRenderComplete === null || onListRenderComplete === void 0 ? void 0 : onListRenderComplete();
  }, [eventsValue, customTodayDate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("custom-event-cal__wrapper", calendarWrapperClassName),
    onKeyDown: function onKeyDown(e) {
      onKeyPressed === null || onKeyPressed === void 0 ? void 0 : onKeyPressed(e);
    },
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__header bg-body-tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-event-cal__btn custom-event-cal__btn--prev",
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
    className: "custom-event-cal__header__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-event-cal__btn ".concat(winMonth ? 'active' : ''),
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
    className: "custom-event-cal__btn ".concat(winYear ? 'active' : ''),
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
    className: "custom-event-cal__btn custom-event-cal__btn--next",
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
    className: "custom-event-cal__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__row"
  }, WEEK.map(function (s, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)('custom-event-cal__cell custom-event-cal__day custom-event-cal__day--week custom-event-cal__day--disabled bg-secondary-subtle empty', {
        'last-cell': i === WEEK.length - 1
      }),
      key: i,
      "data-week": i,
      dangerouslySetInnerHTML: {
        __html: s
      }
    });
  })), getCells().list.map(function (item, j) {
    var isLastRow = j === getCells().list.length - 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: 'row' + item.row,
      className: "custom-event-cal__row"
    }, item.col.map(function (dayIndex, i) {
      var isLastCell = i === item.col.length - 1;

      // date
      var _dateShow = item.dateInfo[i].date;
      var _dateDayShow = _dateShow.split('-').at(-1);

      // week day
      var weekDay = item.week[i];

      // helper
      var d = parseFloat(_dateDayShow);
      var _currentData = orginalData.filter(function (item) {
        return (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(item.date) === _dateShow;
      });
      var isInteractive = item.dateInfo[i].validDisplayDate; // The date on which the user interaction can occur, e.g. click, modify
      var isForward = item.dateInfo[i].firstGroup && !isInteractive;
      var isBack = item.dateInfo[i].lastGroup && !isInteractive;
      var _eventContent = function _eventContent() {
        if (_currentData.length === 0 || !Array.isArray(_currentData) || typeof _currentData[0].list === 'undefined') {
          return null;
        }

        //
        var _items = _currentData[0].list;
        return _items.map(function (cellItem, cellItemIndex) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("custom-event-cal__cell-item custom-event-cal__cell-item-".concat(cellItemIndex), {
              'first': cellItemIndex === 0,
              'last': cellItemIndex === _items.length - 1
            }),
            key: "cell-item-".concat(cellItemIndex, "}"),
            "data-date": _dateShow,
            "data-day": _dateDayShow,
            "data-week": weekDay,
            onClick: function onClick(e) {
              var _cellItem$callback;
              e.stopPropagation();

              // update cell data
              setTableCellId(cellItem.id);

              // Callback
              (_cellItem$callback = cellItem.callback) === null || _cellItem$callback === void 0 ? void 0 : _cellItem$callback.call(cellItem);
              if (isInteractive) {
                handleDayChange(e, d); // update current day

                //
                var _now = cellItem.date.split('-');
                onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _objectSpread(_objectSpread({}, cellItem), {}, {
                  day: _now[2],
                  month: _now[1],
                  year: _now[0]
                }));
                if (EVENTS_ENABLED) {
                  onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(cellItem, function () {
                    return setShowEdit(true);
                  }, 'normal');
                }
              }
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "custom-event-cal__day__event",
            style: typeof cellItem !== 'undefined' && cellItem.eventStyles !== 'undefined' ? cellItem.eventStyles : {},
            dangerouslySetInnerHTML: typeof cellItem.data === 'string' ? {
              __html: cellItem.data
            } : undefined
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(cellItem.data) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, cellItem.data) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "custom-event-cal__day__eventdel ".concat(cellCloseBtnClassName || '')
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
            href: "#",
            tabIndex: -1,
            className: "align-middle",
            "data-date": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(_dateShow),
            "data-day": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(d),
            "data-week": i,
            onClick: function onClick(e) {
              e.preventDefault();
              e.stopPropagation();

              // update cell data
              setTableCellId(cellItem.id);
              var _existsContent = cellItem;

              //
              if (isInteractive) {
                handleDayChange(e, d); // update current day

                //
                var _now = (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(d)).split('-');
                onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, {
                  id: 0,
                  date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(d)),
                  day: _now[2],
                  month: _now[1],
                  year: _now[0]
                });
                if (EVENTS_DELETE_ENABLED) {
                  onModalDeleteOpen === null || onModalDeleteOpen === void 0 ? void 0 : onModalDeleteOpen(_existsContent, function () {
                    return setShowDelete(true);
                  });
                }
              }
            }
          }, _delBtn())));
        });
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)('custom-event-cal__cell custom-event-cal__day', {
          'empty': !isInteractive,
          'today': d === now.getDate(),
          'selected': d === day && isInteractive,
          'last-cell': isLastCell,
          'last-row': isLastRow,
          'disabled': !isInteractive,
          'has-events': _eventContent() !== null
        }),
        key: "col" + i,
        "data-date": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(_dateShow),
        "data-day": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(d),
        "data-week": i,
        onMouseEnter: function onMouseEnter(e) {
          onCellMouseEnter === null || onCellMouseEnter === void 0 ? void 0 : onCellMouseEnter(e);
        },
        onMouseDown: function onMouseDown(e) {
          //
          onCellClick === null || onCellClick === void 0 ? void 0 : onCellClick(e);
          if (isInteractive) {
            handleDayChange(e, d); // update current day
            onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, null);
          }
        },
        onDoubleClick: function onDoubleClick(e) {
          //
          onCellDoubleClick === null || onCellDoubleClick === void 0 ? void 0 : onCellDoubleClick(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          onCellMouseLeave === null || onCellMouseLeave === void 0 ? void 0 : onCellMouseLeave(e);
        },
        onMouseUp: function onMouseUp(e) {
          onCellMouseUp === null || onCellMouseUp === void 0 ? void 0 : onCellMouseUp(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)({
          'disabled': !isInteractive
        })
      }, d), _eventContent(), isForward || isBack ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "custom-event-cal__day__eventadd ".concat(cellAddBtnClassName || '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        tabIndex: -1,
        className: "align-middle",
        "data-date": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)(_dateShow),
        "data-day": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(d),
        "data-week": i,
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          // update cell data
          setTableCellId(-1);

          //
          if (isInteractive) {
            handleDayChange(e, d); // update current day

            //
            var _now = (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(d)).split('-');
            onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, {
              id: 0,
              date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(d)),
              day: _now[2],
              month: _now[1],
              year: _now[0]
            });
            if (EVENTS_ENABLED) {
              onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen({
                id: 0,
                date: (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.getCalendarDate)("".concat(year, "-").concat(month + 1, "-").concat(d))
              }, function () {
                return setShowEdit(true);
              }, 'new');
            }
          }
        }
      }, _addBtn()))));
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winMonth ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__month-container"
  }, MONTHS_FULL.map(function (month, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "data-month": (0,funda_utils_dist_cjs_date__WEBPACK_IMPORTED_MODULE_1__.padZero)(index + 1),
      className: "custom-event-cal__month ".concat(selectedMonth === index ? ' selected' : ''),
      key: month + index,
      onClick: function onClick() {
        handleMonthChange(index);
      }
    }, month);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winYear ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__year-container bg-body-tertiary"
  }, yearsArray.map(function (year, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "data-year": year,
      className: "custom-event-cal__year ".concat(selectedYear === year ? ' selected' : ''),
      key: year + index,
      onClick: function onClick() {
        handleYearChange(year);
      }
    }, year);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-event-cal__today-wrapper p-2 bg-body-tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "custom-event-cal__btn custom-event-cal__btn--today",
    onClick: handleTodayChange
  }, langToday || 'Today'))), EVENTS_ENABLED ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_modaldialog__WEBPACK_IMPORTED_MODULE_3___default()), {
    ref: modalDeleteHandleRef,
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
        onModalDeleteClose === null || onModalDeleteClose === void 0 ? void 0 : onModalDeleteClose(queryItemObj());
      }, 350);
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, closewin, data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              onModalDeleteEvent === null || onModalDeleteEvent === void 0 ? void 0 : onModalDeleteEvent(queryItemObj(), closewin);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }()
  }, modalDeleteContent || 'Are you sure?'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_modaldialog__WEBPACK_IMPORTED_MODULE_3___default()), {
    ref: modalEditHandleRef,
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
        onModalEditClose === null || onModalEditClose === void 0 ? void 0 : onModalEditClose(queryItemObj());
      }, 350);
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, closewin, data) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              onModalEditEvent === null || onModalEditEvent === void 0 ? void 0 : onModalEditEvent(queryItemObj(), closewin);
            case 1:
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