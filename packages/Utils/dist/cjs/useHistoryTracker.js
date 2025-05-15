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
/**
 * History Tracker
 * @since 20250515
 * 
 * @usage:

const App = () => {
    const { 
        getReady,
        clearHistory,
        goBack,
        getFirstUrl,
        getCurrentUrl,
        getForwardHistory,
        getHistory,
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

    // useEffect(() => {
    //     console.log(getReady(), getFirstUrl(), getCurrentUrl(), getForwardHistory(), getHistory());
    // }, [getReady, getFirstUrl, getCurrentUrl]);

  
    // useEffect(() => {
    //     setTimeout(async () => {
    //         console.log('--> clean history within 2m');
    //         await clearHistory();
    //     }, 2000);
    // }, []);

  
    return (
        <div>

            <div>
                <h3>isReady:</h3>
                <p>{String(getReady())}</p>
            </div>

            <div>
                <h3>First URL:</h3>
                <p>{getFirstUrl()}</p>
            </div>

            <div>
                <h3>Current URL:</h3>
                <p>{getCurrentUrl()}</p>
            </div>

            <div>
                <h3>History ({getHistory().length}):</h3>
                <ul>
                    {getHistory().map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Forward History ({getForwardHistory().length}):</h3>
                <ul>
                    {getForwardHistory().map((url, index) => (
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
  var canGoBack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return historyRef.current.length > 1;
  }, []);
  var canGoForward = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return forwardHistoryRef.current.length > 0;
  }, []);
  var initialize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var ready = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (typeof window === 'undefined') return;
    var currentLocation = window.location.href;

    // If the history is empty, set the first record
    if (historyRef.current.length === 0) {
      firstUrlRef.current = currentLocation;
      historyRef.current = [currentLocation];
      setCurrentUrl(currentLocation);
      onChange === null || onChange === void 0 ? void 0 : onChange({
        isReady: ready,
        history: [currentLocation],
        forwardHistory: [],
        currentUrl: currentLocation,
        firstUrl: currentLocation,
        canGoBack: false,
        canGoForward: false
      });
    }
    setIsReady(true);
  }, [onChange]);
  useIsomorphicLayoutEffect(function () {
    initialize();
  }, [initialize]);
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
    if (historyRef.current.length <= 1) return Promise.reject('History does not meet the criteria (total records are less than 2), cannot go back');
    return new Promise(function (resolve) {
      // Moves the current URL into the forward history
      var removedUrl = historyRef.current.pop();
      if (removedUrl) {
        forwardHistoryRef.current.push(removedUrl);
      }
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
  }, [onChange, canGoBack, canGoForward]);
  var goForward = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (typeof window === 'undefined') return Promise.reject('Window is undefined');
    if (forwardHistoryRef.current.length === 0) return Promise.reject('Forward history does not meet the criteria (total 0 records), cannot go forward');
    return new Promise(function (resolve) {
      // Take the URL from the forward history and add it to the main history
      var nextUrl = forwardHistoryRef.current.pop();
      if (nextUrl) {
        historyRef.current.push(nextUrl);
        setCurrentUrl(nextUrl);
      }

      // Create initial data object
      var data = {
        isReady: true,
        history: _toConsumableArray(historyRef.current),
        forwardHistory: _toConsumableArray(forwardHistoryRef.current),
        currentUrl: nextUrl || '',
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
  }, [onChange, canGoBack, canGoForward]);
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
  }, [onChange, canGoBack, canGoForward]); // only "onChange"

  var getFirstUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return firstUrlRef.current;
  }, []);
  var getCurrentUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return currentUrl;
  }, [currentUrl]);
  var getForwardHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return forwardHistoryRef.current;
  }, []);
  var getHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return historyRef.current;
  }, []);
  var getReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isReady;
  }, [isReady]);
  var addHistoryToFirst = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window === 'undefined')) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", Promise.reject('Window is undefined'));
          case 2:
            if (url) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", Promise.reject('URL does not exist'));
          case 4:
            return _context.abrupt("return", new Promise(function (resolve) {
              if (historyRef.current.length === 0) {
                firstUrlRef.current = url;
                historyRef.current = [url];
                setCurrentUrl(url);
              } else {
                // Insert at the front
                historyRef.current = [url].concat(_toConsumableArray(historyRef.current));
                firstUrlRef.current = url;
              }
              var result = {
                isReady: true,
                history: _toConsumableArray(historyRef.current),
                forwardHistory: _toConsumableArray(forwardHistoryRef.current),
                currentUrl: currentUrl || url,
                firstUrl: firstUrlRef.current,
                canGoBack: canGoBack(),
                canGoForward: canGoForward()
              };
              onChange === null || onChange === void 0 ? void 0 : onChange(result);
              resolve(result);
            }));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }(), [onChange, currentUrl, canGoBack, canGoForward]);
  var clearHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(typeof window === 'undefined')) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", Promise.reject('Window is undefined'));
        case 2:
          return _context2.abrupt("return", new Promise(function (resolve) {
            historyRef.current = [];
            forwardHistoryRef.current = [];
            firstUrlRef.current = '';
            setCurrentUrl('');
            var result = {
              isReady: true,
              history: [],
              forwardHistory: [],
              currentUrl: '',
              firstUrl: '',
              canGoBack: false,
              canGoForward: false
            };
            onChange === null || onChange === void 0 ? void 0 : onChange(result);

            // After clearHistory(), immediately take the current url as the first history
            // !!!Fixed: "There is still only 1 record of goBack(), and there is no cumulative forward record"
            setTimeout(function () {
              initialize(true);
              resolve(result);
            }, 0);
          }));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [onChange, initialize]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof window === 'undefined') return;

    // Listen for popstate events (browser forward/back)
    window.addEventListener('popstate', handleUrlChange);

    // Listen for hashchange events
    window.addEventListener('hashchange', handleUrlChange);

    // !!!Fixed: "Reinitialize the history, but this will not cause the URL to change either"
    // hijack pushState/replaceState
    var rawPushState = window.history.pushState;
    var rawReplaceState = window.history.replaceState;
    window.history.pushState = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      rawPushState.apply(this, args);
      handleUrlChange();
    };
    window.history.replaceState = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      rawReplaceState.apply(this, args);
      handleUrlChange();
    };

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
      window.history.pushState = rawPushState;
      window.history.replaceState = rawReplaceState;
      observer.disconnect();
    };
  }, [handleUrlChange]);
  return {
    getReady: getReady,
    getHistory: getHistory,
    getForwardHistory: getForwardHistory,
    getCurrentUrl: getCurrentUrl,
    getFirstUrl: getFirstUrl,
    clearHistory: clearHistory,
    goToHistory: goToHistory,
    goBack: goBack,
    goForward: goForward,
    canGoBack: canGoBack,
    canGoForward: canGoForward,
    addHistoryToFirst: addHistoryToFirst
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHistoryTracker);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});