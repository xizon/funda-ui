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

var ScrollReveal = function ScrollReveal(props) {
  var root = props.root,
    viewOffset = props.viewOffset,
    defaultClassName = props.defaultClassName,
    showClassName = props.showClassName,
    infinite = props.infinite,
    delay = props.delay,
    threshold = props.threshold,
    onChange = props.onChange,
    onIntersect = props.onIntersect,
    id = props.id,
    children = props.children;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var idRes = id || uniqueID;
  var _viewOffset = viewOffset ? viewOffset : {
    y: '0px',
    x: '0px'
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isIntersecting = _useState2[0],
    setIsIntersecting = _useState2[1];
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var options = {
    root: root ? root : document,
    rootMargin: "".concat(_viewOffset.y, " ").concat(_viewOffset.x),
    threshold: threshold ? threshold : [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  };
  function intersectionCallback(entries) {
    // if has multiple intersect via `observer.observe(obj)`

    var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];
    /*
    IntersectionObserverEntry {
        time: 260.2000000476837, 
        intersectionRatio: 0,
        rootBounds: {x: 0, y: 0, width: 1680, height: 540, top: 0, …}, 
        boundingClientRect: {x: 0, y: 590, width: 1680, height: 540, top: 590, …}, 
        intersectionRect: {x: 0, y: 0, width: 0, height: 0, top: 0, …}, 
        isIntersecting: false,
        isVisible: false,
        target: main
    }
     IntersectionObserverEntry {
        time: 4681.599999964237, 
        intersectionRatio: 0,
        rootBounds: {x: 0, y: 0, width: 1680, height: 540, top: 0, …}, 
        boundingClientRect: {x: 0, y: 530, width: 1680, height: 540, top: 530, …}, 
        intersectionRect: {x: 0, y: 530, width: 1680, height: 10, top: 530, …}, 
        isIntersecting: true,
        isVisible: false,
        target: main
    }
     ...
    */
    setIsIntersecting(entry.isIntersecting);

    // interaction
    var box = entry.target;
    var visiblePct = Math.floor(entry.intersectionRatio * 100) + "%";

    //
    onChange === null || onChange === void 0 ? void 0 : onChange(box, visiblePct);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var observer = new IntersectionObserver(intersectionCallback, options);
    if (rootRef.current) observer.observe(rootRef.current);

    //default classes
    if (rootRef.current) {
      var _classesDefault = !Array.isArray(defaultClassName) ? [defaultClassName] : defaultClassName;
      if (typeof defaultClassName !== 'undefined') _classesDefault.map(function (item) {
        return rootRef.current.classList.add(item);
      });
    }
    return function () {
      return observer.disconnect();
    };
  }, [rootRef, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (rootRef.current) {
      onIntersect === null || onIntersect === void 0 ? void 0 : onIntersect(rootRef.current, isIntersecting);
      var _classes = !Array.isArray(showClassName) ? [showClassName] : showClassName;
      if (isIntersecting) {
        setTimeout(function () {
          if (typeof showClassName !== 'undefined') _classes.map(function (item) {
            return rootRef.current.classList.add(item);
          });
        }, delay ? Number(delay) : 0);
      } else {
        if (infinite) setTimeout(function () {
          if (typeof showClassName !== 'undefined') _classes.map(function (item) {
            return rootRef.current.classList.remove(item);
          });
        }, delay ? Number(delay) : 0);
      }
    }
  }, [isIntersecting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: rootRef,
    id: idRes
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReveal);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});