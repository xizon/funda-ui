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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "usePageVisibility": () => (/* binding */ usePageVisibility)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Watch for to know when a document becomes visible or hidden
 * @param onVisible 
 * @param onHidden  
 * @param onPageInit executed once when the page first loads visibly
 */
/* 
@usage:

const App = () => {
    usePageVisibility(
        () => console.log("🍏 Page is now visible — current tab is active."),
        () => console.log("🍎 Page is hidden — switched to another tab or minimized."),
        () => console.log("🎬 Page initialized while visible.")
    );

    return <div>Try switching tabs to see the console output.</div>;
};

*/

var usePageVisibility = function usePageVisibility(onVisible, onHidden, onPageInit) {
  var visibleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(document.visibilityState === "visible");
  var onVisibleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onVisible);
  var onHiddenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onHidden);
  var initialVisibleTriggeredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var onPageInitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onPageInit);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onVisibleRef.current = onVisible;
  }, [onVisible]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onHiddenRef.current = onHidden;
  }, [onHidden]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onPageInitRef.current = onPageInit;
  }, [onPageInit]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleVisibilityChange = function handleVisibilityChange() {
      var isVisible = document.visibilityState === "visible";
      if (isVisible && !visibleRef.current) {
        onVisibleRef.current && onVisibleRef.current();
      }
      if (!isVisible && visibleRef.current) {
        onHiddenRef.current && onHiddenRef.current();
      }
      visibleRef.current = isVisible;
    };

    // It retains the original switching monitor, and can ensure that onPageInit will run when the first screen is loaded.
    if (visibleRef.current && !initialVisibleTriggeredRef.current) {
      initialVisibleTriggeredRef.current = true;
      onPageInitRef.current && onPageInitRef.current();
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return function () {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePageVisibility);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});