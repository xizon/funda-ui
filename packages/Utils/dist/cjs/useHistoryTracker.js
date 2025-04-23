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
/**
 * History Tracker
 * 
 * @usage:

const App = () => {
    const { 
        history, 
        forwardHistory,
        currentUrl, 
        firstUrl, 
        clearHistory,
        goBack
    } = useHistoryTracker({
        onChange: ({ 
            isReady,
            history, 
            forwardHistory,
            currentUrl, 
            firstUrl, 
            canGoBack,
            canGoForward
        } : { 
            isReady: boolean;
            history: string[];
            forwardHistory: string[];
            currentUrl: string;
            firstUrl: string;
            canGoBack: boolean;
            canGoForward: boolean;
        }) => {
            console.log('--> onChange: ',
                isReady,
                history, 
                forwardHistory,
                currentUrl, 
                firstUrl, 
                canGoBack,
                canGoForward
            );
        }
    });

    return (
        <div>

            <div>
                <h3>First URL:</h3>
                <p>{firstUrl}</p>
            </div>

            <div>
                <h3>Current URL:</h3>
                <p>{currentUrl}</p>
            </div>

            <div>
                <h3>History ({history.length}):</h3>
                <ul>
                    {history.map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Forward History ({forwardHistory.length}):</h3>
                <ul>
                    {forwardHistory.map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>


            
            <button onClick={clearHistory}>
                Clear History
            </button>

            <button onClick={async () => {
                try {
                    const { 
                        isReady,
                        history, 
                        forwardHistory,
                        canGoBack,
                        canGoForward
                    } : { 
                        isReady: boolean;
                        history: string[];
                        forwardHistory: string[];
                        canGoBack: boolean;
                        canGoForward: boolean;
                    } = await goBack();

                    console.log('--> goBack: ', 
                        isReady,
                        history, 
                        forwardHistory,
                        currentUrl, 
                        firstUrl, 
                        canGoBack,
                        canGoForward
                    );
                } catch (error) {
                    console.error('Navigation failed', error);
                }

            }}>
               Back
            </button>

        </div>
    );
};

 */


// Create a secure version of useLayoutEffect that is downgraded to useEffect when SSR
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
var useHistoryTracker = function useHistoryTracker(props) {
  var onChange = props.onChange;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var forwardHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var firstUrlRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    currentUrl = _useState4[0],
    setCurrentUrl = _useState4[1];
  var initialize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return;
    var currentLocation = window.location.href;

    // If the history is empty, set the first record
    if (historyRef.current.length === 0) {
      firstUrlRef.current = currentLocation;
      historyRef.current = [currentLocation];
      setCurrentUrl(currentLocation);
      onChange === null || onChange === void 0 ? void 0 : onChange({
        isReady: false,
        history: [currentLocation],
        forwardHistory: [],
        currentUrl: currentLocation,
        firstUrl: currentLocation,
        canGoBack: false,
        canGoForward: false
      });
    }
    setIsReady(true);
  }, []);
  useIsomorphicLayoutEffect(function () {
    initialize();
  }, [initialize]);
  var clearHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return;
    historyRef.current = [];
    forwardHistoryRef.current = [];
    firstUrlRef.current = '';
    setCurrentUrl('');
    onChange === null || onChange === void 0 ? void 0 : onChange({
      isReady: true,
      history: [],
      forwardHistory: [],
      currentUrl: '',
      firstUrl: '',
      canGoBack: false,
      canGoForward: false
    });
  }, [onChange]); // only "onChange"

  var goToHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (typeof window === 'undefined') return;
    if (index < 0 || index >= historyRef.current.length) return;
    var targetUrl = historyRef.current[index];
    if (targetUrl && targetUrl !== window.location.href) {
      window.location.href = targetUrl;
    }
  }, []);
  var goBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return Promise.reject('Window is undefined');
    if (historyRef.current.length <= 1) return Promise.reject('Cannot go back');
    return new Promise(function (resolve) {
      // Moves the current URL into the forward history
      var removedUrl = historyRef.current.pop();
      forwardHistoryRef.current.push(removedUrl);
      var newCurrentUrl = historyRef.current[historyRef.current.length - 1];
      setCurrentUrl(newCurrentUrl);

      // Create initial data object
      var data = {
        isReady: true,
        history: _toConsumableArray(historyRef.current),
        forwardHistory: _toConsumableArray(forwardHistoryRef.current),
        currentUrl: newCurrentUrl,
        firstUrl: firstUrlRef.current,
        canGoBack: canGoBack(),
        canGoForward: canGoForward()
      };

      // Notify about the history change
      onChange === null || onChange === void 0 ? void 0 : onChange(data);

      // Create one-time listener for popstate
      var handlePopState = function handlePopState() {
        // Remove the listener after it's called
        window.removeEventListener('popstate', handlePopState);

        // Get the final data after URL has changed
        var finalData = {
          isReady: true,
          history: _toConsumableArray(historyRef.current),
          forwardHistory: _toConsumableArray(forwardHistoryRef.current),
          currentUrl: window.location.href,
          firstUrl: firstUrlRef.current,
          canGoBack: canGoBack(),
          canGoForward: canGoForward()
        };
        resolve(finalData);
      };

      // Add the listener
      window.addEventListener('popstate', handlePopState);

      // Trigger the navigation
      window.history.go(-1);
    });
  }, [onChange]);
  var goForward = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return Promise.reject('Window is undefined');
    if (forwardHistoryRef.current.length === 0) return Promise.reject('Cannot go forward');
    return new Promise(function (resolve) {
      // Take the URL from the forward history and add it to the main history
      var nextUrl = forwardHistoryRef.current.pop();
      historyRef.current.push(nextUrl);
      setCurrentUrl(nextUrl);

      // Create initial data object
      var data = {
        isReady: true,
        history: _toConsumableArray(historyRef.current),
        forwardHistory: _toConsumableArray(forwardHistoryRef.current),
        currentUrl: nextUrl,
        firstUrl: firstUrlRef.current,
        canGoBack: canGoBack(),
        canGoForward: canGoForward()
      };
      onChange === null || onChange === void 0 ? void 0 : onChange(data);

      // Create one-time listener for popstate
      var handlePopState = function handlePopState() {
        // Remove the listener after it's called
        window.removeEventListener('popstate', handlePopState);

        // Get the final data after URL has changed
        var finalData = {
          isReady: true,
          history: _toConsumableArray(historyRef.current),
          forwardHistory: _toConsumableArray(forwardHistoryRef.current),
          currentUrl: window.location.href,
          firstUrl: firstUrlRef.current,
          canGoBack: canGoBack(),
          canGoForward: canGoForward()
        };
        resolve(finalData);
      };

      // Add the listener
      window.addEventListener('popstate', handlePopState);

      // Trigger the navigation
      window.history.go(1);
    });
  }, [onChange]);
  var canGoBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return historyRef.current.length > 1;
  }, []);
  var canGoForward = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return forwardHistoryRef.current.length > 0;
  }, []);
  var handleUrlChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return;
    var newUrl = window.location.href;

    // If the history is empty, set to the first URL
    if (historyRef.current.length === 0) {
      firstUrlRef.current = newUrl;
    }

    // Avoid recording the same URL
    if (historyRef.current[historyRef.current.length - 1] !== newUrl) {
      historyRef.current.push(newUrl);

      // Clear the advance history, as new navigation invalidates the advance history
      forwardHistoryRef.current = [];
      setCurrentUrl(newUrl);
      onChange === null || onChange === void 0 ? void 0 : onChange({
        isReady: true,
        history: _toConsumableArray(historyRef.current),
        forwardHistory: _toConsumableArray(forwardHistoryRef.current),
        currentUrl: newUrl,
        firstUrl: firstUrlRef.current || newUrl,
        // Make sure there is always a value
        canGoBack: canGoBack(),
        canGoForward: canGoForward()
      });
    }
  }, [onChange]); // only "onChange"

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof window === 'undefined') return;

    // Listen for popstate events (browser forward/back)
    window.addEventListener('popstate', handleUrlChange);

    // Listen for hashchange events
    window.addEventListener('hashchange', handleUrlChange);

    // Listen for DOM and property changes
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          handleUrlChange();
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      // monitor the addition and deletion of child nodes
      subtree: true,
      // monitor all descendant nodes
      attributes: true,
      // monitor attribute changes
      attributeFilter: ['href'] // only monitor changes in the href attribute
    });

    return function () {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
      observer.disconnect();
    };
  }, [handleUrlChange]);
  return {
    isReady: isReady,
    history: historyRef.current,
    forwardHistory: forwardHistoryRef.current,
    currentUrl: currentUrl,
    firstUrl: firstUrlRef.current,
    clearHistory: clearHistory,
    goToHistory: goToHistory,
    goBack: goBack,
    goForward: goForward,
    canGoBack: canGoBack,
    canGoForward: canGoForward
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHistoryTracker);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});