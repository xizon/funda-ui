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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 787:
/***/ ((module) => {

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/plugins/BSL/bodyScrollLock.es6.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
;// CONCATENATED MODULE: ./src/plugins/BSL/index.ts

;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Destroys body scroll locking

var ModalDialog = function ModalDialog(props) {
  var show = props.show,
    protectFixedViewport = props.protectFixedViewport,
    maxWidth = props.maxWidth,
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
    closeOnlyBtn = props.closeOnlyBtn,
    closeDisabled = props.closeDisabled,
    data = props.data,
    onLoad = props.onLoad,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onSubmit = props.onSubmit,
    id = props.id,
    children = props.children;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var modalRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var idRes = id || uniqueID;
  var PROTECT_FIXED_VIEWPORT = typeof protectFixedViewport === 'undefined' ? true : protectFixedViewport;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    winShow = _useState2[0],
    setWinShow = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
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
      modalRef.current.style.display = 'none';
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
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update incoming data
    //------------------------------------------
    setIncomingData(data);

    // Move HTML templates to tag end body </body>
    // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
    // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
    //------------------------------------------
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
    //------------------------------------------
    if (document.getElementById("mask-".concat(idRes)) === null && !maskDisabled && document.body !== null) {
      var maskDiv = document.createElement('div');
      maskDiv.id = "mask-".concat(idRes);
      maskDiv.innerHTML = "<div class=\"".concat(winShow ? 'modal-backdrop fade show' : 'modal-backdrop fade', "\" style=\"display:none\"></div>");
      document.body.appendChild(maskDiv);
      if (!closeOnlyBtn) {
        var $mask = document.querySelector("#mask-".concat(idRes, " > .modal-backdrop"));
        if ($mask !== null) $mask.addEventListener('pointerdown', function (e) {
          handleCloseWin(e);
        });
      }
    }

    // show
    //------------------------------------------
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
    //------------------------------------------
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
      Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop, .modal'), function (node) {
        if (PROTECT_FIXED_VIEWPORT) {
          if (node.classList.contains('modal') && node.classList.contains('protect-fixed-viewport')) {
            node.remove();
          }
        }
        if (!node.classList.contains('modal')) {
          node.parentElement.remove();
        }
      });
    };
  }, [show, data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
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
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
    style: maxWidth ? {
      maxWidth: "".concat(maxWidth)
    } : {}
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content',
    style: {
      overflow: 'inherit'
    }
  }, (!heading || heading === '') && closeDisabled ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
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
  }, enableVideo ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "modal-dialog__video"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "ratio ratio-16x9"
  }, children))) : children), closeBtnLabel || submitBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "modal-footer"
  }, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, closeBtnLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
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
/* harmony default export */ const src = (ModalDialog);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});