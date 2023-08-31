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

/***/ 342:
/***/ ((module) => {

/*
* Debounce
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/
function debounce(fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    //Every time this returned function is called, the timer is cleared to ensure that fn is not executed
    clearTimeout(timer);

    // When the returned function is called for the last time (that is the user stops a continuous operation)
    // Execute fn after another delay milliseconds
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
* @return {Function}       - Returns a new function.
*/
function throttle(fn) {
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
module.exports = {
  debounce: debounce,
  throttle: throttle
};

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(342);
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_performance__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Scrollbar = function Scrollbar(props) {
  var onlyVerticle = props.onlyVerticle,
    onlyHorizontal = props.onlyHorizontal,
    arrowIcons = props.arrowIcons,
    disableArrow = props.disableArrow,
    horizontallyWithWheel = props.horizontallyWithWheel,
    data = props.data,
    onMove = props.onMove,
    id = props.id,
    children = props.children;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 5V19M12 5L6 11M12 5L18 11",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 6V18M12 18L7 13M12 18L17 13",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 12H18M6 12L11 7M6 12L11 17",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 12H18M18 12L13 7M18 12L13 17",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), " "))] : arrowIcons;
  var contentAreaScrollUpdate = (0,_utils_performance__WEBPACK_IMPORTED_MODULE_1__.throttle)(handleScrollEvent, 5);

  // Vertical (default)
  //========================================
  var scrollTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollThumbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState2 = _slicedToArray(_useState, 2),
    thumbHeight = _useState2[0],
    setThumbHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollStartPosition = _useState4[0],
    setScrollStartPosition = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    initialScrollTop = _useState6[0],
    setInitialScrollTop = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDragging = _useState8[0],
    setIsDragging = _useState8[1];

  // Horizontal
  //========================================
  var scrollTrackHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollThumbHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollBarHorizontalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var horizontalObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState10 = _slicedToArray(_useState9, 2),
    thumbWidth = _useState10[0],
    setThumbWidth = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    scrollHorizontalStartPosition = _useState12[0],
    setScrollHorizontalStartPosition = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    initialScrollLeft = _useState14[0],
    setInitialScrollLeft = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isHorizontalDragging = _useState16[0],
    setIsHorizontalDragging = _useState16[1];

  // common functions
  //========================================
  function handleScrollEvent(e) {
    var _contentRef$current, _contentRef$current2;
    if (typeof e === 'undefined') return;
    var scrollLeft = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.scrollLeft;
    var scrollTop = (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 ? void 0 : _contentRef$current2.scrollTop;
    if (onlyHorizontal && horizontallyWithWheel) {
      var direction = e.deltaY < 0 ? 'left' : 'right';
      horizontalContentScrollTo(direction, false); //do not use `smooth`
    }

    onMove === null || onMove === void 0 ? void 0 : onMove({
      scrollLeft: scrollLeft,
      scrolTop: scrollTop,
      data: e
    });
  }

  // Vertical --> functions
  //========================================

  function contentScrollTo(dir) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var current = contentRef.current;
    if (current) {
      var scrollAmount = dir === 'down' ? 200 : -200;
      current.scrollBy({
        top: scrollAmount,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  }
  function handleResize(ref, trackSize) {
    var clientHeight = ref.clientHeight,
      scrollHeight = ref.scrollHeight;
    if (clientHeight === 0 || scrollHeight === 0) return;
    setThumbHeight(Math.max(clientHeight / scrollHeight * trackSize, 20));

    // do not need scrolling
    if (clientHeight / scrollHeight === 1) {
      // hide scrollbar
      if (scrollBarRef.current !== null) scrollBarRef.current.classList.add('disabled');
    } else {
      if (scrollBarRef.current !== null) scrollBarRef.current.classList.remove('disabled');
    }
  }
  function handleScrollButton(direction) {
    contentScrollTo(direction);
  }
  var handleTrackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var trackCurrent = scrollTrackRef.current;
    var contentCurrent = contentRef.current;
    if (trackCurrent && contentCurrent) {
      var clientY = e.clientY;
      var target = e.target;
      var rect = target.getBoundingClientRect();
      var trackTop = rect.top;
      var thumbOffset = -(thumbHeight / 2);
      var clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
      var scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
      contentCurrent.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [thumbHeight]);
  var handleThumbPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
      return;
    }
    var _contentRef$current3 = contentRef.current,
      contentTop = _contentRef$current3.scrollTop,
      contentHeight = _contentRef$current3.scrollHeight;
    var trackHeight = scrollTrackRef.current.clientHeight;
    var newTop = +contentTop / +contentHeight * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    var thumb = scrollThumbRef.current;
    thumb.style.top = "".concat(newTop, "px");
  }, []);
  var handleThumbMousedown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);
  var handleThumbMouseup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);
  var handleThumbMousemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging && contentRef.current && scrollStartPosition) {
      var _contentRef$current4 = contentRef.current,
        contentScrollHeight = _contentRef$current4.scrollHeight,
        contentOffsetHeight = _contentRef$current4.offsetHeight;
      var deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);
      var newScrollTop = Math.min(initialScrollTop + deltaY, contentScrollHeight - contentOffsetHeight);
      contentRef.current.scrollTop = newScrollTop;
    }
  }, [isDragging, scrollStartPosition, thumbHeight]);

  // Horizontal  --> functions
  //========================================    

  function horizontalContentScrollTo(dir) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var current = contentRef.current;
    if (current) {
      var pivot = current.clientWidth / 10;
      var speed = pivot >= 200 ? 200 : pivot;
      var scrollAmount = dir === 'right' ? speed : -speed;
      current.scrollBy({
        left: scrollAmount,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  }
  function handleHorizontalResize(ref, trackSize) {
    var clientWidth = ref.clientWidth,
      scrollWidth = ref.scrollWidth;
    if (clientWidth === 0 || scrollWidth === 0) return;
    setThumbWidth(Math.max(clientWidth / scrollWidth * trackSize, 20));

    // do not need scrolling
    if (clientWidth / scrollWidth === 1) {
      // hide scrollbar
      if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.add('disabled');
    } else {
      if (scrollBarHorizontalRef.current) scrollBarHorizontalRef.current.classList.remove('disabled');
    }
  }
  function handleHorizontalScrollButton(direction) {
    horizontalContentScrollTo(direction);
  }
  var handleHorizontalTrackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var trackCurrent = scrollTrackHorizontalRef.current;
    var contentCurrent = contentRef.current;
    if (trackCurrent && contentCurrent) {
      var clientX = e.clientX;
      var target = e.target;
      var rect = target.getBoundingClientRect();
      var trackLeft = rect.left;
      var thumbOffset = -(thumbWidth / 2);
      var clickRatio = (clientX - trackLeft + thumbOffset) / trackCurrent.clientWidth;
      var scrollAmount = Math.floor(clickRatio * contentCurrent.scrollWidth);
      contentCurrent.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [thumbWidth]);
  var handleHorizontalThumbPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!contentRef.current || !scrollTrackHorizontalRef.current || !scrollThumbHorizontalRef.current) {
      return;
    }
    var _contentRef$current5 = contentRef.current,
      contentLeft = _contentRef$current5.scrollLeft,
      contentWidth = _contentRef$current5.scrollWidth;
    var trackWidth = scrollTrackHorizontalRef.current.clientWidth;
    var newLeft = +contentLeft / +contentWidth * trackWidth;
    newLeft = Math.min(newLeft, trackWidth - thumbWidth);
    var thumb = scrollThumbHorizontalRef.current;
    thumb.style.left = "".concat(newLeft, "px");
  }, []);
  var handleHorizontalThumbMousedown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setScrollHorizontalStartPosition(e.clientX);
    if (contentRef.current) setInitialScrollLeft(contentRef.current.scrollLeft);
    setIsHorizontalDragging(true);
  }, []);
  var handleHorizontalThumbMouseup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isHorizontalDragging) {
      setIsHorizontalDragging(false);
    }
  }, [isHorizontalDragging]);
  var handleHorizontalThumbMousemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isHorizontalDragging && contentRef.current && scrollHorizontalStartPosition) {
      var _contentRef$current6 = contentRef.current,
        contentScrollWidth = _contentRef$current6.scrollWidth,
        contentOffsetWidth = _contentRef$current6.offsetWidth;
      var deltaY = (e.clientX - scrollHorizontalStartPosition) * (contentOffsetWidth / thumbWidth);
      var newScrollLeft = Math.min(initialScrollLeft + deltaY, contentScrollWidth - contentOffsetWidth);
      contentRef.current.scrollLeft = newScrollLeft;
    }
  }, [isHorizontalDragging, scrollHorizontalStartPosition, thumbWidth]);

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (contentRef.current && scrollTrackRef.current && scrollTrackHorizontalRef.current) {
      // Vertical
      var ref = contentRef.current;
      var trackSize = scrollTrackRef.current.clientHeight;
      observer.current = new ResizeObserver(function () {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPosition);

      //Horizontal
      var horizontalRef = contentRef.current;
      var trackHorizontalSize = scrollTrackHorizontalRef.current.clientWidth;
      horizontalObserver.current = new ResizeObserver(function () {
        handleHorizontalResize(horizontalRef, trackHorizontalSize);
      });
      horizontalObserver.current.observe(horizontalRef);
      horizontalRef.addEventListener('scroll', handleHorizontalThumbPosition);
      return function () {
        var _observer$current, _horizontalObserver$c;
        (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPosition);
        (_horizontalObserver$c = horizontalObserver.current) === null || _horizontalObserver$c === void 0 ? void 0 : _horizontalObserver$c.unobserve(horizontalRef);
        horizontalRef.removeEventListener('scroll', handleHorizontalThumbPosition);
      };
    }
  }, [data]);

  // Listen for mouse events to handle scrolling by dragging the thumb
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    document.addEventListener('mouseleave', handleThumbMouseup);
    document.addEventListener('mousemove', handleHorizontalThumbMousemove);
    document.addEventListener('mouseup', handleHorizontalThumbMouseup);
    document.addEventListener('mouseleave', handleHorizontalThumbMouseup);

    // Add function to the element that should be used as the scrollable area.
    if (contentRef.current) {
      contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
      contentRef.current.addEventListener('wheel', contentAreaScrollUpdate);
      contentAreaScrollUpdate();
    }
    return function () {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
      document.removeEventListener('mouseleave', handleThumbMouseup);
      document.removeEventListener('mousemove', handleHorizontalThumbMousemove);
      document.removeEventListener('mouseup', handleHorizontalThumbMouseup);
      document.removeEventListener('mouseleave', handleHorizontalThumbMouseup);
      if (contentRef.current) {
        contentRef.current.removeEventListener('wheel', contentAreaScrollUpdate);
      }
    };
  }, [handleThumbMousemove, handleThumbMouseup, handleHorizontalThumbMousemove, handleHorizontalThumbMouseup]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: idRes,
    ref: rootRef,
    className: "custom-scrollbars__wrapper ".concat(onlyHorizontal ? 'custom-scrollbars__wrapper--horizontal' : '', " ").concat(disableArrow ? 'arrow-disabled' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__content",
    ref: contentRef
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollBarRef,
    className: "custom-scrollbars__scrollbar",
    style: onlyHorizontal ? {
      display: 'none'
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleScrollButton('up');
    }
  }, icons[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track-and-thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track",
    ref: scrollTrackRef,
    onClick: handleTrackClick,
    style: {
      cursor: isDragging ? 'grabbing' : 'pointer'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__thumb",
    ref: scrollThumbRef,
    onMouseDown: handleThumbMousedown,
    style: {
      height: "".concat(thumbHeight, "px"),
      cursor: isDragging ? 'grabbing' : 'grab'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleScrollButton('down');
    }
  }, icons[1])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollBarHorizontalRef,
    className: "custom-scrollbars__scrollbar-horizontal",
    style: onlyVerticle ? {
      display: 'none'
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleHorizontalScrollButton('left');
    }
  }, icons[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track-and-thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__track",
    ref: scrollTrackHorizontalRef,
    onClick: handleHorizontalTrackClick,
    style: {
      cursor: isHorizontalDragging ? 'grabbing' : 'pointer'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-scrollbars__thumb",
    ref: scrollThumbHorizontalRef,
    onMouseDown: handleHorizontalThumbMousedown,
    style: {
      width: "".concat(thumbWidth, "px"),
      cursor: isHorizontalDragging ? 'grabbing' : 'grab'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-scrollbars__button ".concat(disableArrow ? 'disabled' : ''),
    onClick: function onClick() {
      return handleHorizontalScrollButton('right');
    }
  }, icons[3]))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});