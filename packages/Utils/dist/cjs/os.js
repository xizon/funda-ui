(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory();
	else
		root["RPB"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Determine whether it is a special platform
 *
 * @private
 */
function getOs() {
  if (typeof window === 'undefined') return {};
  var os;
  if (typeof window !== "undefined") {
    var _getOs = function _getOs() {
      var _navigator = window.navigator;
      var platform = function platform() {
        // 2022 way of detecting. Note : this userAgentData feature is available only in secure contexts (HTTPS)
        if (typeof _navigator.userAgentData !== 'undefined' && _navigator.userAgentData != null) {
          return _navigator.userAgentData.platform;
        }
        // Deprecated but still works for most of the browser
        if (typeof _navigator.platform !== 'undefined') {
          if (typeof _navigator.userAgent !== 'undefined' && /android/.test(_navigator.userAgent.toLowerCase())) {
            // android device’s _navigator.platform is often set as 'linux', so const’s use userAgent for them
            return 'android';
          }
          return _navigator.platform;
        }
        return 'unknown';
      };
      var _platform = platform().toLowerCase();
      var isOSX = /mac/.test(_platform); // Mac desktop
      var isIOS = ['iphone', 'ipad', 'ipod'].indexOf(_platform) === -1 ? false : true; // Mac iOs
      var isApple = isOSX || isIOS; // Apple device (desktop or iOS)
      var isWindows = /win/.test(_platform); // Windows
      var isAndroid = /android/.test(_platform); // Android
      var isLinux = /linux/.test(_platform); // Linux

      return {
        isOSX: isOSX,
        isIOS: isIOS,
        isApple: isApple,
        isWindows: isWindows,
        isAndroid: isAndroid,
        isLinux: isLinux
      };
    };
    os = _getOs();
  } else {
    os = {};
  }
  return os;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOs);
/******/ 	return __webpack_exports__;
/******/ })()
;
});