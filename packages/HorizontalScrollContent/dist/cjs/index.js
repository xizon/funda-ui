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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HorizontalScrollContent = function HorizontalScrollContent(props) {
  var data = props.data,
    slideOffset = props.slideOffset,
    arrowIcons = props.arrowIcons,
    contentWrapperClassName = props.contentWrapperClassName,
    itemClassName = props.itemClassName,
    btnClassName = props.btnClassName,
    id = props.id,
    onMove = props.onMove;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var icons = typeof arrowIcons === 'undefined' || !arrowIcons ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "15px",
    height: "15px",
    viewBox: "0 0 24 24",
    fill: "inherit",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "15px",
    height: "15px",
    viewBox: "0 0 24 24",
    fill: "inherit",
    transform: "translate(0 -2)"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
  }), " "))] : arrowIcons;
  var SLIDE_OFFSET = typeof slideOffset === 'undefined' ? 50 : slideOffset;
  var scrollContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var btnPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var btnNextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollX = _useState2[0],
    setscrollX = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    scrolEnd = _useState4[0],
    setscrolEnd = _useState4[1];
  var observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 
  var resetNextBtn = function resetNextBtn() {
    var el = scrollContentRef.current;
    if (el) {
      var _contentWidth = Math.floor(el.scrollWidth - el.scrollLeft);
      var _realWidth = el.offsetWidth;
      if (_contentWidth > _realWidth) {
        if (btnNextRef.current) btnNextRef.current.classList.remove('invalid');
      }
    }
  };
  var update = function update() {
    var el = scrollContentRef.current;
    if (el === null) return;
    var _contentWidth = Math.floor(el.scrollWidth - el.scrollLeft);
    var _realWidth = el.offsetWidth;
    if (_contentWidth <= _realWidth) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
      resetNextBtn();
    }
    onMove === null || onMove === void 0 ? void 0 : onMove(_contentWidth <= _realWidth ? 1 : -1, _realWidth, _contentWidth, _contentWidth - _realWidth);
  };

  //Slide click
  var slide = function slide(shift) {
    var el = scrollContentRef.current;
    if (el === null) return;
    el.scrollLeft += shift;
    setscrollX(scrollX + shift);
    update();
  };
  var scrollCheck = function scrollCheck() {
    var el = scrollContentRef.current;
    if (el === null) return;
    setscrollX(el.scrollLeft);
    update();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // content width observer
    var el = scrollContentRef.current;
    if (el) {
      observer.current = new ResizeObserver(function (entries) {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach(function (entry) {
          resetNextBtn();
        });
      });
      observer.current.observe(el);
    }
    return function () {
      var _observer$current;
      if (el) (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(el);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: idRes,
    ref: rootRef,
    className: "horizontal-scroll-content__wrapper"
  }, scrollX !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: btnPrevRef,
    className: "horizontal-scroll-content__btn horizontal-scroll-content__prev ".concat(btnClassName || ''),
    tabIndex: -1,
    onClick: function onClick() {
      return slide(-SLIDE_OFFSET);
    }
  }, icons[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: contentWrapperClassName || '',
    ref: scrollContentRef,
    onScroll: scrollCheck
  }, data ? data.map(function (v, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: itemClassName || ''
    }, v);
  }) : null), !scrolEnd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: btnNextRef,
    className: "horizontal-scroll-content__btn horizontal-scroll-content__next invalid ".concat(btnClassName || ''),
    tabIndex: -1,
    onClick: function onClick() {
      return slide(+SLIDE_OFFSET);
    }
  }, icons[1]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalScrollContent);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});