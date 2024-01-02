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

/***/ 378:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Get the -webkit-transition-duration property
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Number}    - Returns a pure number.
 */
function getTransitionDuration(el) {
  if (_typeof(el) === ( true ? "undefined" : 0)) {
    return 0;
  }
  var style = window.getComputedStyle(el),
    duration = style.webkitTransitionDuration,
    delay = style.webkitTransitionDelay;
  if (_typeof(duration) != ( true ? "undefined" : 0)) {
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
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el) {
  var windowWidth = window.innerWidth,
    leftPos = null,
    topPos = null;
  if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
    leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
    topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
  } else {
    // width and height in pixels, including padding and border
    // Corresponds to outerWidth(), outerHeight()
    leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
    topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
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
function getOffset(el) {
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
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el) {
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
 * @param {Element} domElement  - A DOM node
 * @param {Number | String} left     - left offset
 * @param {Number | String} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement) {
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
module.exports = {
  getTransitionDuration: getTransitionDuration,
  getAbsoluteCoordinates: getAbsoluteCoordinates,
  getOffset: getOffset,
  getPosition: getPosition,
  getAbsolutePositionOfStage: getAbsolutePositionOfStage
};

/***/ }),

/***/ 483:
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
        // ESM COMPAT FLAG
        __nested_webpack_require_1465__.r(__webpack_exports__);

        // EXPORTS
        __nested_webpack_require_1465__.d(__webpack_exports__, {
          "default": function _default() {
            return (/* binding */src
            );
          }
        });

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_1465__(787);
        var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_1465__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
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

        var ModalDialog = function ModalDialog(props) {
          var show = props.show,
            protectFixedViewport = props.protectFixedViewport,
            maxWidth = props.maxWidth,
            minHeight = props.minHeight,
            enableVideo = props.enableVideo,
            heading = props.heading,
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
          var uniqueID = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
          var modalRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          var triggerRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
          var idRes = id || uniqueID;
          var PROTECT_FIXED_VIEWPORT = typeof protectFixedViewport === 'undefined' ? true : protectFixedViewport;
          var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            winShow = _useState2[0],
            setWinShow = _useState2[1];
          var _useState3 = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
            _useState4 = _slicedToArray(_useState3, 2),
            incomingData = _useState4[0],
            setIncomingData = _useState4[1];
          function handleCloseWin(e) {
            if (typeof e !== 'undefined' && e !== null) e.preventDefault();
            closeAction();

            //
            onClose === null || onClose === void 0 ? void 0 : onClose(e);
          }
          function handleOpenWin(e) {
            if (typeof e !== 'undefined' && e !== null) e.preventDefault();
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
            setWinShow(false);
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
              setWinShow(true);
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

            // Move HTML templates to tag end body </body>
            // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
            // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
            //--------------
            if (PROTECT_FIXED_VIEWPORT) {
              if (document.body !== null) {
                document.body.appendChild(modalRef.current);
                [].slice.call(modalRef.current.querySelectorAll('[data-close]')).forEach(function (node) {
                  if (typeof node.dataset.ev === 'undefined') {
                    node.dataset.ev = 'true';
                    node.addEventListener('pointerdown', function (e) {
                      handleCloseWin(e);
                    });
                  }
                });
                [].slice.call(modalRef.current.querySelectorAll('[data-confirm]')).forEach(function (node) {
                  if (typeof node.dataset.ev === 'undefined') {
                    node.dataset.ev = 'true';
                    node.addEventListener('pointerdown', function (e) {
                      var callback = function callback(e) {
                        return function () {
                          handleCloseWin(e);
                        };
                      };
                      var _incomingData = node.dataset.incomingData;
                      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(e, callback(e), _incomingData);
                    });
                  }
                });
              }
            }

            // add mask
            //--------------
            if (document.getElementById("mask-".concat(idRes)) === null && !maskDisabled && document.body !== null) {
              var maskDiv = document.createElement('div');
              maskDiv.id = "mask-".concat(idRes);
              maskDiv.innerHTML = "<div class=\"".concat(winShow ? 'modal-backdrop fade show' : 'modal-backdrop fade', "\" style=\"display:none;").concat(maskOpacity ? "opacity:".concat(maskOpacity, ";") : '', "\"></div>");
              document.body.appendChild(maskDiv);
              if (!closeOnlyBtn) {
                var $mask = document.querySelector("#mask-".concat(idRes, " > .modal-backdrop"));
                if ($mask !== null) $mask.addEventListener('pointerdown', function (e) {
                  handleCloseWin(e);
                });
              }
            }

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

              // Remove all masks and modals
              Array.prototype.forEach.call(document.querySelectorAll('.modal'), function (node) {
                if (PROTECT_FIXED_VIEWPORT) {
                  // for current actived modal
                  if (node.classList.contains('protect-fixed-viewport') && node.classList.contains('show')) {
                    node.remove();
                  }
                }
              });

              // If there is no active modal, hide all masks
              var existingModal = [].slice.call(document.querySelectorAll('.modal')).filter(function (node) {
                return node.classList.contains('show');
              }).length > 0;
              if (!existingModal) {
                Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop'), function (mask) {
                  mask.classList.remove('show');
                  mask.style.display = 'none';
                });
              }
            };
          }, [show, data]);
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: triggerClassName ? triggerClassName : 'd-inline w-auto',
            ref: triggerRef,
            onClick: handleOpenWin
          }, triggerContent)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            ref: modalRef,
            className: enableVideo ? "modal ".concat(PROTECT_FIXED_VIEWPORT ? 'protect-fixed-viewport' : '', " fade is-video ").concat(winShow ? 'show' : '') : "modal ".concat(PROTECT_FIXED_VIEWPORT ? 'protect-fixed-viewport' : '', " fade ").concat(winShow ? 'show' : ''),
            tabIndex: -1,
            "aria-hidden": "true",
            style: {
              pointerEvents: 'none'
            },
            "data-mask": "mask-".concat(idRes)
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            style: maxWidth ? {
              maxWidth: "".concat(maxWidth)
            } : {}
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content',
            style: {
              overflow: 'inherit',
              minHeight: minHeight ? minHeight : 'auto'
            }
          }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: enableVideo ? 'modal-header border-0 px-0' : 'modal-header'
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h5", {
            className: "modal-title"
          }, heading || ''), !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
            type: "button",
            className: enableVideo ? 'btn-close btn-close-white' : 'btn-close',
            "data-close": "1",
            onClick: handleCloseWin
          }) : null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: enableVideo ? 'modal-body m-0 p-0' : 'modal-body'
          }, enableVideo ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-dialog__video"
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "ratio ratio-16x9"
          }, children))) : children), closeBtnLabel || submitBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "modal-footer"
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
          }, submitBtnLabel) : null)) : null))));
        };
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
/* harmony import */ var _utils_get_element_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(378);
/* harmony import */ var _utils_get_element_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_get_element_property__WEBPACK_IMPORTED_MODULE_2__);
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



var EventCalendarTimeline = function EventCalendarTimeline(props) {
  var customTodayDate = props.customTodayDate,
    eventsValue = props.eventsValue,
    langWeek = props.langWeek,
    langWeekFull = props.langWeekFull,
    langMonths = props.langMonths,
    langMonthsFull = props.langMonthsFull,
    langToday = props.langToday,
    iconRemove = props.iconRemove,
    cellCloseBtnClassName = props.cellCloseBtnClassName,
    cellCloseBtnLabel = props.cellCloseBtnLabel,
    forwardAndBackFillDisabled = props.forwardAndBackFillDisabled,
    draggable = props.draggable,
    showWeek = props.showWeek,
    autoScroll = props.autoScroll,
    onChangeDate = props.onChangeDate,
    onChangeMonth = props.onChangeMonth,
    onChangeYear = props.onChangeYear,
    onChangeToday = props.onChangeToday,
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
    tableListSectionTitle = props.tableListSectionTitle,
    tableCellMinWidth = props.tableCellMinWidth,
    tableTooltipDirection = props.tableTooltipDirection,
    tableTooltipOffset = props.tableTooltipOffset,
    tableTooltipSize = props.tableTooltipSize,
    tableTooltipDisabled = props.tableTooltipDisabled,
    id = props.id;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
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

  // table grid
  var AUTO_SCROLL = autoScroll || false;
  var SHOW_WEEK = showWeek || false;
  var BODY_DRAG = draggable || false;
  var CELL_MIN_W = typeof tableCellMinWidth === 'undefined' ? SHOW_WEEK ? 100 : 50 : tableCellMinWidth;
  var tableGridRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollHeaderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollBodyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState28 = _slicedToArray(_useState27, 2),
    tableRowNum = _useState28[0],
    setTableRowNum = _useState28[1];

  // table grid tooltip
  var CELL_TOOLTIP_POS_OFFSET = typeof tableTooltipOffset === 'undefined' ? 10 : tableTooltipOffset;
  var tableTooltipModalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isShowTableTooltip = _useState30[0],
    setIsShowTableTooltip = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    tableTooltipContent = _useState32[0],
    setTableTooltipContent = _useState32[1];

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

  // ================================================================
  // Table Grid drag & drop
  // ================================================================
  var draggedObj = null;
  var mouseDown = false;
  var startX = 0;
  var scrollLeft = 0;
  var handleTableDragStart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    draggedObj = e.currentTarget;
    mouseDown = true;
    draggedObj.classList.add('dragging');

    //
    startX = e.pageX - draggedObj.offsetLeft;
    scrollLeft = draggedObj.scrollLeft;
  }, []);
  var handleTableDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (draggedObj === null) return;
    mouseDown = false;
    draggedObj.classList.remove('dragging');
  }, []);
  var handleTableMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    var x = e.pageX - draggedObj.offsetLeft;
    var scroll = x - startX;
    draggedObj.scrollLeft = scrollLeft - scroll;
  }, []);

  // ================================================================
  // Table Grid Tooltip
  // ================================================================

  function handleTableTooltipMouseEnter(e, content) {
    setIsShowTableTooltip(true);

    // update tooltip content
    setTableTooltipContent(content);

    // update modal positiona
    var _tableTooltipModalRef = document.querySelector("#e-cal-tl-table__cell-tooltipwrapper-".concat(idRes));
    var _triggerRef = e.currentTarget;
    if (_tableTooltipModalRef !== null && _triggerRef !== null) {
      var _getAbsolutePositionO = (0,_utils_get_element_property__WEBPACK_IMPORTED_MODULE_2__.getAbsolutePositionOfStage)(_triggerRef),
        x = _getAbsolutePositionO.x,
        y = _getAbsolutePositionO.y,
        width = _getAbsolutePositionO.width,
        height = _getAbsolutePositionO.height;
      var pos = _tableTooltipModalRef.dataset.microtipPosition;
      if (typeof pos === 'undefined') pos = 'top';

      // TOP
      //
      if (pos.indexOf('top') >= 0) {
        _tableTooltipModalRef.style.left = x + width / 2 + 'px';
        _tableTooltipModalRef.style.top = y - height - CELL_TOOLTIP_POS_OFFSET + 'px';
      }

      // BOTTOM
      //
      if (pos.indexOf('bottom') >= 0) {
        _tableTooltipModalRef.style.left = x + width / 2 + 'px';
        _tableTooltipModalRef.style.top = y + height + CELL_TOOLTIP_POS_OFFSET + 'px';
      }

      // Determine whether it exceeds the far right or left side of the screen
      var _modalContent = _tableTooltipModalRef.querySelector('.e-cal-tl-table__cell-tooltipcontent');
      var _modalBox = _modalContent.getBoundingClientRect();
      if (typeof _modalContent.dataset.offset === 'undefined') {
        if (_modalBox.right > window.innerWidth) {
          var _modalOffsetPosition = _modalBox.right - window.innerWidth + CELL_TOOLTIP_POS_OFFSET;
          _modalContent.dataset.offset = _modalOffsetPosition;
          _modalContent.style.marginLeft = "-".concat(_modalOffsetPosition, "px");
          // console.log('_modalPosition: ', _modalOffsetPosition)
        }

        if (_modalBox.left < 0) {
          var _modalOffsetPosition2 = Math.abs(_modalBox.left) + CELL_TOOLTIP_POS_OFFSET;
          _modalContent.dataset.offset = _modalOffsetPosition2;
          _modalContent.style.marginLeft = "".concat(_modalOffsetPosition2, "px");
          // console.log('_modalPosition: ', _modalOffsetPosition)
        }
      }
    }
  }

  function handleTableTooltipMouseLeave() {
    hideTableTooltip();
  }
  function hideTableTooltip() {
    setIsShowTableTooltip(false);
  }
  function handleTableTooltipTouchStart(e) {
    hideTableTooltip();
  }

  // ================================================================
  // Calendar
  // ================================================================

  function getCalendarDate(v) {
    var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof v === 'undefined') return '';

    // YYYY-MM-DD
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

    // table grid
    setTimeout(function () {
      tableGridInit();
    }, 500);
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
        day: day,
        month: _date.getMonth(),
        year: _date.getFullYear()
      });

      // restore table grid init status
      restoreTableGridInitStatus();
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
        day: day,
        month: _date.getMonth(),
        year: _date.getFullYear()
      });

      // restore table grid init status
      restoreTableGridInitStatus();
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
      day: day,
      month: month,
      year: currentValue
    });

    // restore table grid init status
    restoreTableGridInitStatus();
  }
  function handleMonthChange(currentIndex) {
    setSelectedMonth(currentIndex);
    setMonth(currentIndex);
    setDate(new Date(year, currentIndex, day));

    // close win
    setWinMonth(false);

    //
    onChangeMonth === null || onChangeMonth === void 0 ? void 0 : onChangeMonth({
      day: day,
      month: currentIndex,
      year: year
    });

    // restore table grid init status
    restoreTableGridInitStatus();
  }
  function handleTodayChange() {
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
    setTodayDate(now);

    //
    onChangeToday === null || onChangeToday === void 0 ? void 0 : onChangeToday({
      day: now.getDay(),
      month: now.getMonth(),
      year: now.getFullYear()
    });

    // restore table grid init status
    restoreTableGridInitStatus();
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

  // ================================================================
  // Table Grid
  // ================================================================

  function generateListSectionUi() {
    return val.map(function (item, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: i,
        role: "row",
        "data-index": i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        role: "gridcell",
        "data-resource-index": i,
        className: "e-cal-tl-table__datagrid-cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-title",
        dangerouslySetInnerHTML: {
          __html: item.listSection
        }
      })));
    });
  }
  function generateDaysUi() {
    var eventSourcesData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var listSectionData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var showEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (forwardAndBackFillDisabled) {
      //#######################

      // colIndex
      var colIndex = 0;
      return getCells().map(function (item, j) {
        return item.col.map(function (dayIndex, i) {
          colIndex++;
          var d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
          var _currentData = eventSourcesData.filter(function (item) {
            return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d));
          });
          var isLastCol = colIndex === 7 * getCells().length;

          // date
          var _dateShow = d > 0 ? "".concat(year, "-").concat(month + 1, "-").concat(d) : '';

          // days
          //------
          if (!showEvents) {
            return d > 0 && d <= days[month] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
              className: "e-cal-tl-table__cell-cushion-headercontent__container ".concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : ''),
              key: "col" + i,
              "data-index": colIndex - 1,
              "data-datagrid-col": colIndex - 1,
              colSpan: 1,
              "data-date": getCalendarDate(_dateShow),
              "data-week": i,
              style: {
                minWidth: CELL_MIN_W + 'px'
              },
              onClick: function onClick(e) {
                // update row data
                setTableRowNum(-1);
                if (_currentData.length > 0) {
                  _currentData[0].rowData = listSectionData;
                }

                //
                if (d > 0) {
                  handleDayChange(e, d);
                  onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
                    rowData: listSectionData,
                    id: 0,
                    date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                  } : _currentData[0]);
                  if (EVENTS_ENABLED) {
                    setShowEdit(true);
                    onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(_currentData.length === 0 ? {
                      rowData: listSectionData,
                      id: 0,
                      date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                    } : _currentData[0]);
                  }
                }
              }
            }, d > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent",
              style: {
                width: CELL_MIN_W - 1 + 'px'
              }
            }, d, SHOW_WEEK ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
              dangerouslySetInnerHTML: {
                __html: WEEK[i]
              }
            }) : null)) : null) : null;
          }

          // events
          //------
          if (showEvents) {
            var _eventContentTooltip = _currentData.length > 0 ? typeof _currentData[0] !== 'undefined' ? typeof _currentData[0].dataTooltip === 'undefined' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__event-tooltipcontent",
              dangerouslySetInnerHTML: {
                __html: _currentData[0].dataTooltip
              }
            })) : '' : '';
            var _eventContent = _currentData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__event",
              style: typeof _currentData[0] !== 'undefined' && _currentData[0].eventStyles !== 'undefined' ? _currentData[0].eventStyles : {},
              dangerouslySetInnerHTML: {
                __html: _currentData[0].data
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__eventdel ".concat(cellCloseBtnClassName || '')
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
              href: "#",
              tabIndex: -1,
              className: "align-middle",
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
                setShowDelete(true);
                onModalDeleteOpen === null || onModalDeleteOpen === void 0 ? void 0 : onModalDeleteOpen(_currentData.length === 0 ? {
                  rowData: listSectionData,
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
            }))), cellCloseBtnLabel || ''))) : '';
            return d > 0 && d <= days[month] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
              className: "e-cal-tl-table__cell-cushion-content__container e-cal-tl-table__cell-tooltiptrigger ".concat(eventSourcesData && _currentData.length > 0 ? 'has-event' : '', " ").concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day && tableRowNum === rowIndex ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : ''),
              key: "col" + i,
              "data-index": colIndex - 1,
              colSpan: 1,
              "data-date": getCalendarDate(_dateShow),
              "data-week": i,
              "data-row": rowIndex,
              onMouseEnter: _eventContentTooltip === '' ? function () {} : tableTooltipDisabled ? function () {} : _eventContent !== '' ? function (e) {
                handleTableTooltipMouseEnter(e, _eventContentTooltip);
              } : function () {},
              onMouseLeave: _eventContentTooltip === '' ? function () {} : tableTooltipDisabled ? function () {} : _eventContent !== '' ? handleTableTooltipMouseLeave : function () {},
              onClick: function onClick(e) {
                // update row data
                setTableRowNum(rowIndex);
                if (_currentData.length > 0) {
                  _currentData[0].rowData = listSectionData;
                }

                //
                if (d > 0) {
                  handleDayChange(e, d);
                  onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
                    rowData: listSectionData,
                    id: 0,
                    date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                  } : _currentData[0]);
                  if (EVENTS_ENABLED) {
                    setShowEdit(true);
                    onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(_currentData.length === 0 ? {
                      rowData: listSectionData,
                      id: 0,
                      date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                    } : _currentData[0]);
                  }
                }
              }
            }, d > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content"
            }, _eventContent)) : null) : null;
          }
        });
      });

      //#######################
    } else {
      //#######################

      // colIndex
      var _colIndex = 0;
      return getCells().map(function (item, j) {
        var isFirstRow = j === 0;
        var isLastRow = j === getCells().length - 1;

        // forward fill
        var __forwardFillNum = getForwardFill();

        // back fill
        var __backFillNum = getBackFill();
        return item.col.map(function (dayIndex, i) {
          _colIndex++;
          var d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
          var _currentData = eventSourcesData.filter(function (item) {
            return getCalendarDate(item.date) === getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d));
          });
          var isLastCol = _colIndex === 7 * getCells().length;

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

          // days
          //------
          if (!showEvents) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
              className: "e-cal-tl-table__cell-cushion-headercontent__container ".concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : ''),
              key: "col" + i,
              "data-index": _colIndex - 1,
              "data-datagrid-col": _colIndex - 1,
              colSpan: 1,
              "data-date": getCalendarDate(_dateShow),
              "data-week": i,
              style: {
                minWidth: CELL_MIN_W + 'px'
              },
              onClick: function onClick(e) {
                // update row data
                setTableRowNum(-1);
                if (_currentData.length > 0) {
                  _currentData[0].rowData = listSectionData;
                }

                //
                if (d > 0) {
                  handleDayChange(e, d);
                  onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
                    rowData: listSectionData,
                    id: 0,
                    date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                  } : _currentData[0]);
                  if (EVENTS_ENABLED) {
                    setShowEdit(true);
                    onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(_currentData.length === 0 ? {
                      rowData: listSectionData,
                      id: 0,
                      date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                    } : _currentData[0]);
                  }
                }
              }
            }, isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent disabled",
              style: {
                width: CELL_MIN_W - 1 + 'px'
              }
            }, __forwardFillNum[i])) : null, d > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent",
              style: {
                width: CELL_MIN_W - 1 + 'px'
              }
            }, d)) : null, isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headercontent disabled",
              style: {
                width: CELL_MIN_W - 1 + 'px'
              }
            }, __backFillNum[i - item.col.filter(Boolean).length])) : null);
          }

          // events
          //------
          if (showEvents) {
            var _eventContentTooltip = _currentData.length > 0 ? typeof _currentData[0] !== 'undefined' ? typeof _currentData[0].dataTooltip === 'undefined' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__event-tooltipcontent",
              dangerouslySetInnerHTML: {
                __html: _currentData[0].dataTooltip
              }
            })) : '' : '';
            var _eventContent = _currentData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__event",
              style: typeof _currentData[0] !== 'undefined' && _currentData[0].eventStyles !== 'undefined' ? _currentData[0].eventStyles : {},
              dangerouslySetInnerHTML: {
                __html: _currentData[0].data
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl__day__eventdel ".concat(cellCloseBtnClassName || '')
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
              href: "#",
              tabIndex: -1,
              className: "align-middle",
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
                setShowDelete(true);
                onModalDeleteOpen === null || onModalDeleteOpen === void 0 ? void 0 : onModalDeleteOpen(_currentData.length === 0 ? {
                  rowData: listSectionData,
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
            }))), cellCloseBtnLabel || ''))) : '';
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
              className: "e-cal-tl-table__cell-cushion-content__container e-cal-tl-table__cell-tooltiptrigger ".concat(_currentData.length > 0 ? 'has-event' : '', " ").concat(d > 0 ? '' : 'empty', " ").concat(d === now.getDate() ? 'today' : '', " ").concat(d === day && tableRowNum === rowIndex ? 'selected' : '', " ").concat(isLastCol ? 'last-cell' : ''),
              key: "col" + i,
              "data-index": _colIndex - 1,
              colSpan: 1,
              "data-date": getCalendarDate(_dateShow),
              "data-week": i,
              "data-row": rowIndex,
              onMouseEnter: _eventContentTooltip === '' ? function () {} : tableTooltipDisabled ? function () {} : _eventContent !== '' ? function (e) {
                handleTableTooltipMouseEnter(e, _eventContentTooltip);
              } : function () {},
              onMouseLeave: _eventContentTooltip === '' ? function () {} : tableTooltipDisabled ? function () {} : _eventContent !== '' ? handleTableTooltipMouseLeave : function () {},
              onClick: function onClick(e) {
                // update row data
                setTableRowNum(rowIndex);
                if (_currentData.length > 0) {
                  _currentData[0].rowData = listSectionData;
                }

                // 
                if (d > 0) {
                  handleDayChange(e, d);
                  onChangeDate === null || onChangeDate === void 0 ? void 0 : onChangeDate(e, _currentData.length === 0 ? {
                    rowData: listSectionData,
                    id: 0,
                    date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                  } : _currentData[0]);
                  if (EVENTS_ENABLED) {
                    setShowEdit(true);
                    onModalEditOpen === null || onModalEditOpen === void 0 ? void 0 : onModalEditOpen(_currentData.length === 0 ? {
                      rowData: listSectionData,
                      id: 0,
                      date: getCalendarDate("".concat(year, "-").concat(month + 1, "-").concat(d))
                    } : _currentData[0]);
                  }
                }
              }
            }, isFirstRow && __forwardFillNum && typeof __forwardFillNum[i] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content disabled"
            }, "\xA0")) : null, d > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content"
            }, _eventContent)) : null, isLastRow && __backFillNum && typeof __backFillNum[i - item.col.filter(Boolean).length] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-content disabled"
            }, "\xA0")) : null);
          }
        });
      });

      //#######################
    }
  }

  function generateColUi() {
    if (forwardAndBackFillDisabled) {
      //#######################
      return Array.from({
        length: days[month]
      }).fill(0).map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", {
          key: "col-placeholder-" + i,
          "data-index": i,
          "data-datagrid-col": i,
          style: {
            minWidth: CELL_MIN_W + 'px'
          }
        });
      });
      //#######################
    } else {
      //#######################
      // colIndex
      var colIndex = 0;
      return getCells().map(function (item, j) {
        return item.col.map(function (dayIndex, i) {
          colIndex++;
          var d = typeof dayIndex === 'number' ? dayIndex - (startDay - 2) : 0;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", {
            className: "".concat(d > 0 ? '' : 'empty'),
            key: "col-placeholder-" + i,
            "data-index": colIndex - 1,
            "data-datagrid-col": colIndex - 1,
            style: {
              minWidth: CELL_MIN_W + 'px'
            }
          });
        });
      });
      //#######################
    }
  }

  function syncTableScrollHeader() {
    var el = scrollHeaderRef.current;
    if (el === null) return;
    var _latestScrollLeft = el.scrollLeft;
    if (scrollBodyRef.current) scrollBodyRef.current.scrollLeft = _latestScrollLeft;
  }
  function syncTableScrollBody() {
    var el = scrollBodyRef.current;
    if (el === null) return;
    var _latestScrollTop = el.scrollTop;
    var _latestScrollLeft = el.scrollLeft;
    if (scrollListRef.current) scrollListRef.current.scrollTop = _latestScrollTop;
    if (scrollHeaderRef.current) scrollHeaderRef.current.scrollLeft = _latestScrollLeft;
  }
  function syncTableScrollList() {
    var el = scrollListRef.current;
    if (el === null) return;
    var _latestScrollTop = el.scrollTop;
    if (scrollBodyRef.current) scrollBodyRef.current.scrollTop = _latestScrollTop;
  }
  function restoreTableGridInitStatus() {
    // restore table grid init status
    if (scrollListRef.current) scrollListRef.current.scrollTop = 0;
    if (scrollBodyRef.current) scrollBodyRef.current.scrollLeft = 0;
  }
  function tableGridInit() {
    //
    if (tableGridRef.current === null) return;
    var tableGridEl = tableGridRef.current;

    //****************
    // STEP 1: 
    //****************
    // calculate min width 
    //--------------
    var cellMinWidth = CELL_MIN_W;
    var colCount = forwardAndBackFillDisabled ? days[month] : 7 * getCells().length;
    var scrollableMinWidth = cellMinWidth * colCount;

    //****************
    // STEP 2: 
    //****************    
    // initialize scrollable wrapper (width)
    //--------------
    var _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-tl-table__scroller-harness');
    [].slice.call(_scrollableWrapper).forEach(function (el) {
      var scrollType = el.dataset.scroll;
      if (scrollType !== 'list') {
        var _content = el.querySelector('.e-cal-tl-table__scroller');
        var tableMaxWidth = tableGridEl.clientWidth;
        var tableHeaderTitleWidth = tableGridEl.querySelector('.e-cal-tl-table__cell-cushion-headertitle').clientWidth;
        var tableDividerWidth = tableGridEl.querySelector('.e-cal-tl-table__timeline-divider').clientWidth;
        var tableBorderWidth = 4;
        var scrollMaxWidth = tableMaxWidth - tableHeaderTitleWidth - tableDividerWidth - tableBorderWidth;
        el.dataset.width = scrollMaxWidth;
        el.style.maxWidth = el.dataset.width + 'px';
        _content.style.minWidth = scrollableMinWidth + 'px';
      }
    });

    //****************
    // STEP 3: 
    //****************
    // initialize cell width
    //--------------
    var headerThElements = tableGridEl.querySelector('.e-cal-tl-table__datagrid-header__content tbody').getElementsByTagName('th');
    var colElements = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content colgroup').getElementsByTagName('col');
    var tdElements = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content tbody').getElementsByTagName('td');
    var tdElementMaxWidth = typeof tdElements[0] === 'undefined' ? 0 : parseFloat(window.getComputedStyle(tdElements[0].querySelector('.e-cal-tl-table__cell-cushion-content')).maxWidth);
    for (var i = 0; i < headerThElements.length; i++) {
      var curHeaderThElementMaxWidth = parseFloat(window.getComputedStyle(headerThElements[i].querySelector('.e-cal-tl-table__cell-cushion-headercontent')).width);
      var targetElement = headerThElements[i].offsetWidth > tdElements[i].offsetWidth ? headerThElements[i] : tdElements[i];
      var tdOwidth = parseFloat(window.getComputedStyle(targetElement).width);

      // check td max width
      if (tdElementMaxWidth > 0 && tdOwidth > tdElementMaxWidth) {
        tdOwidth = tdElementMaxWidth;
      }

      // check header th max width
      if (tdElementMaxWidth > 0 && tdElementMaxWidth < curHeaderThElementMaxWidth) {
        tdOwidth = curHeaderThElementMaxWidth;
      }

      // Prevent the width from being +1 each time it is initialized
      tdOwidth = tdOwidth - 1;
      headerThElements[i].querySelector('.e-cal-tl-table__cell-cushion-headercontent').style.width = tdOwidth + 'px';
      tdElements[i].querySelector('.e-cal-tl-table__cell-cushion-content').style.minWidth = tdOwidth + 'px';
      colElements[i].style.minWidth = tdOwidth + 'px';
    }

    //****************
    // STEP 4: 
    //****************    
    // initialize max width of table content
    //--------------
    if (scrollBodyRef.current !== null && scrollHeaderRef.current !== null) {
      var tableContentWidth = window.getComputedStyle(tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content')).width;
      var scrollBodyEl = scrollBodyRef.current;
      var scrollHeaderEl = scrollHeaderRef.current;
      scrollBodyEl.style.width = tableContentWidth;
      scrollHeaderEl.style.width = tableContentWidth;
      scrollBodyEl.dataset.width = parseFloat(tableContentWidth);
      scrollHeaderEl.dataset.width = parseFloat(tableContentWidth);

      //
      var tableWrapperMaxWidthLatest = tableGridEl.clientWidth;
      if (tableWrapperMaxWidthLatest > parseFloat(tableContentWidth)) {
        tableGridEl.querySelector('.e-cal-tl-table__timeline-table').style.width = tableContentWidth;
      }
    }

    //****************
    // STEP 5: 
    //****************
    // initialize cell height
    //--------------
    var headerTitleTrElements = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__title tbody').getElementsByTagName('tr');
    var trElements = tableGridEl.querySelector('.e-cal-tl-table__datagrid-body__content tbody').getElementsByTagName('tr');
    for (var _i2 = 0; _i2 < headerTitleTrElements.length; _i2++) {
      var _targetElement = headerTitleTrElements[_i2].offsetHeight > trElements[_i2].offsetHeight ? headerTitleTrElements[_i2] : trElements[_i2];
      var tdOHeight = window.getComputedStyle(_targetElement).height;
      headerTitleTrElements[_i2].style.height = tdOHeight;
      trElements[_i2].style.height = tdOHeight;
    }

    //****************
    // STEP 6: 
    //****************
    //initialize scrollable wrapper (height)
    //--------------
    [].slice.call(_scrollableWrapper).forEach(function (el) {
      var scrollType = el.dataset.scroll;
      var oldHeight = el.clientHeight;
      if (scrollType !== 'header') {
        var tableWrapperMaxHeight = window.getComputedStyle(tableGridEl).height;
        if (oldHeight > parseFloat(tableWrapperMaxHeight)) {
          el.style.height = tableWrapperMaxHeight;
        }
      }
    });

    //****************
    // STEP 7: 
    //****************
    // display wrapper
    //--------------
    tableGridEl.classList.remove('invisible');
  }
  function tableGridReset() {
    if (tableGridRef.current === null) return;
    var tableGridEl = tableGridRef.current;

    // initialize scrollable wrapper (width & height)
    //--------------
    var _scrollableWrapper = tableGridEl.querySelectorAll('.e-cal-tl-table__scroller-harness');
    [].slice.call(_scrollableWrapper).forEach(function (el) {
      var _content = el.querySelector('.e-cal-tl-table__scroller');
      el.removeAttribute('data-width');
      el.removeAttribute('style');
      _content.removeAttribute('style');
    });
  }

  // ================================================================
  // 
  // ================================================================
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
    if (typeof customTodayDate !== 'undefined') {
      var _customNow = new Date(customTodayDate);
      setTodayDate(_customNow);
    }

    // tooltip
    if (document.body !== null) {
      document.body.appendChild(tableTooltipModalRef.current);
    }
    window.removeEventListener('touchstart', handleTableTooltipTouchStart);
    window.addEventListener('touchstart', handleTableTooltipTouchStart);
    return function () {
      var _document$querySelect;
      // table grid
      tableGridReset();

      // tooltip
      (_document$querySelect = document.querySelector("#e-cal-tl-table__cell-tooltipwrapper-".concat(idRes))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      window.removeEventListener('touchstart', handleTableTooltipTouchStart);
    };
  }, [eventsValue, customTodayDate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__header bg-body-tertiary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal-tl__btn e-cal-tl__btn--prev",
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
    className: "e-cal-tl__header__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal-tl__btn ".concat(winMonth ? 'active' : ''),
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
    className: "e-cal-tl__btn ".concat(winYear ? 'active' : ''),
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
    className: "e-cal-tl__btn e-cal-tl__btn--next",
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
    className: "e-cal-tl__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__row"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__month-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winMonth ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__month-container"
  }, MONTHS_FULL.map(function (month, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "e-cal-tl__month ".concat(selectedMonth === index ? ' selected' : ''),
      key: month + index,
      onClick: function onClick() {
        handleMonthChange(index);
      }
    }, month);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__year-wrapper shadow p-3 mb-5 bg-body-tertiary rounded ".concat(winYear ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__year-container bg-body-tertiary"
  }, yearsArray.map(function (year, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "e-cal-tl__year ".concat(selectedYear === year ? ' selected' : ''),
      key: year + index,
      onClick: function onClick() {
        handleYearChange(year);
      }
    }, year);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl__today-wrapper p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "e-cal-tl__btn e-cal-tl__btn--today",
    onClick: handleTodayChange
  }, langToday || 'Today'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: tableGridRef,
    className: "e-cal-tl-table__timeline-table__wrapper invisible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    role: "grid",
    className: "e-cal-tl-table__timeline-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("colgroup", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", {
    className: "e-cal-tl-table__datagrid-header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    role: "rowgroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__timeline-header e-cal-tl-table__timeline-headertitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    role: "presentation",
    className: "e-cal-tl-table__datagrid-header__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("colgroup", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    role: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    role: "columnheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__cell-cushion e-cal-tl-table__cell-cushion-headertitle"
  }, tableListSectionTitle || ''))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    role: "presentation",
    className: "e-cal-tl-table__timeline-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollHeaderRef,
    className: "e-cal-tl-table__scroller-harness e-cal-tl-table__scroller-harness--hide",
    "data-scroll": "header",
    onScroll: syncTableScrollHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__scroller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__timeline-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "e-cal-tl-table__datagrid-header__content e-cal-tl-table__scrollgrid-sync-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, generateDaysUi()))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    role: "rowgroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    role: "presentation",
    className: "e-cal-tl-table__list-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollListRef,
    className: "e-cal-tl-table__scroller-harness ".concat(AUTO_SCROLL ? 'autoscroll' : ''),
    "data-scroll": "list",
    onScroll: syncTableScrollList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__scroller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    role: "presentation",
    className: "e-cal-tl-table__datagrid-body__title e-cal-tl-table__scrollgrid-sync-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("colgroup", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    role: "presentation"
  }, generateListSectionUi()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    role: "presentation",
    className: "e-cal-tl-table__timeline-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollBodyRef,
    className: "e-cal-tl-table__scroller-harness ".concat(AUTO_SCROLL ? 'autoscroll' : ''),
    "data-scroll": "body",
    onScroll: syncTableScrollBody,
    onMouseMove: BODY_DRAG ? handleTableMove : function () {},
    onMouseDown: BODY_DRAG ? handleTableDragStart : function () {},
    onMouseUp: BODY_DRAG ? handleTableDragEnd : function () {},
    onMouseLeave: BODY_DRAG ? handleTableDragEnd : function () {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__scroller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__timeline-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "e-cal-tl-table__datagrid-body__content e-cal-tl-table__scrollgrid-sync-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("colgroup", null, generateColUi()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, val.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: i
    }, generateDaysUi(item.eventSources, item.listSection, i, true));
  }))))))))))), EVENTS_ENABLED ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((funda_modaldialog__WEBPACK_IMPORTED_MODULE_1___default()), {
    show: showDelete,
    maskOpacity: modalMaskOpacity,
    protectFixedViewport: false,
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
    protectFixedViewport: false,
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
  }, modalContent)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: tableTooltipModalRef,
    id: "e-cal-tl-table__cell-tooltipwrapper-".concat(idRes),
    className: "e-cal-tl-table__cell-tooltipwrapper d-inline-block ".concat(isShowTableTooltip ? 'active' : ''),
    role: "tooltip",
    "data-microtip-position": tableTooltipDirection || 'bottom',
    "data-microtip-size": tableTooltipSize || 'auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "e-cal-tl-table__cell-tooltipcontent"
  }, tableTooltipContent))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCalendarTimeline);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});