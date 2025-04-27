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
/**
 * Determine whether it is the mobile terminal of the specified breakpoint
 * * 
 * @usage:
 * 

const App = () => {

    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ? (
                <p>This content is hidden on mobile devices.</p>
            ) : (
                <p>This content is visible on larger screens.</p>
            )}
        </div>
    );
}


 */

var useIsMobile = function useIsMobile() {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMounted = _useState4[0],
    setIsMounted = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Set the mounted state to true after the component has mounted
    setIsMounted(true);
    var handleResize = function handleResize() {
      if (window) {
        var detectDeviceType = function detectDeviceType() {
          // 1. First check if window and navigator are available (SSR compatibility)
          if (typeof window === 'undefined' || !navigator) {
            return 'desktop'; // Default to desktop
          }

          // 2. Get user agent string
          var ua = navigator.userAgent.toLowerCase();

          // 3. Get platform info
          var platform = navigator.platform.toLowerCase();

          // 4. Check screen characteristics using window.matchMedia
          var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          var isPortrait = window.matchMedia('(orientation: portrait)').matches;
          var isLandscape = window.matchMedia('(orientation: landscape)').matches;

          // 5. Get screen dimensions
          var screenWidth = window.screen.width;
          var screenHeight = window.screen.height;
          var minScreenSize = Math.min(screenWidth, screenHeight);
          var maxScreenSize = Math.max(screenWidth, screenHeight);

          // Define device characteristics
          var isTablet =
          // Traditional UA detection
          /ipad/.test(ua) || /android/.test(ua) && !/mobile/.test(ua) || /tablet/.test(ua) || /playbook/.test(ua) || /nexus (7|9|10)/.test(ua) || /sm-t/.test(ua) || /huawei(.*)mediapad/.test(ua) ||
          // Special detection for iPad Pro and newer iPads
          navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 ||
          // Screen size characteristics (tablets typically fall within this range)
          minScreenSize >= breakpoint && maxScreenSize <= 1366 && isTouch ||
          // Specific device detection
          /kindle|silk|kftt|kfot|kfjwa|kfjwi|kfsowi|kfthwa|kfthwi|kfapwa|kfapwi/i.test(ua);
          var isMobile = !isTablet && (
          // Prevent tablets from being detected as phones
          // Traditional mobile device detection
          /iphone|ipod|android.*mobile|windows phone|mobi/.test(ua) ||
          // Screen size characteristics (phones typically smaller than 600px)
          minScreenSize < breakpoint && isTouch ||
          // Additional mobile device detection
          /blackberry|\bbb\d+|meego|webos|palm|phone|pocket|mobile|mini|iemobile/i.test(ua));

          // 6. Comprehensive decision logic
          if (isMobile) {
            // Additional check for small tablets
            if (maxScreenSize >= 1024 && isTouch) {
              return 'tablet';
            }
            return 'mobile';
          }
          if (isTablet) {
            // Additional check for touch-enabled laptops
            if (maxScreenSize > 1366 && /windows/.test(ua)) {
              return 'desktop';
            }
            return 'tablet';
          }

          // 7. Check for touch-enabled laptops
          if (isTouch && /windows/.test(ua) && maxScreenSize > 1366) {
            return 'desktop';
          }
          return 'desktop';
        };
        setIsMobile(detectDeviceType() === 'mobile');
      }
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    // Call the handler once to set the initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  // Only return the isMobile state if the component is mounted
  return isMounted ? isMobile : false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsMobile);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});