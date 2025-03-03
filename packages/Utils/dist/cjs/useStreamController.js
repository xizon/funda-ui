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
/* harmony export */   "useStreamController": () => (/* binding */ useStreamController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Stream Controller
 * 
 * @usage:

// Use in component
const streamController = useStreamController({
    onChunk: async (chunk: string, index: number) => {
        // start (Execute it only once)
        if (index === 0) {
            
        }
        
        // Streaming data is JSON split by rows
        const lines = chunk.split("\n").filter(line => line.trim() !== "");

        // Process each data chunk
        console.log('Received chunk:', chunk);
    },
    onComplete: async (lastContent: string) => {
        // Process when stream is completed
        console.log('Stream completed');
        
        // Display AI reply
        console.log('AI reply:', lastContent);

    },
    onError: (error) => {
        // Error handling
        console.error('Stream error:', error);
    },
    onAbort: () => {
        // Abort processing
        console.log('Stream aborted');
    }
});

// Start stream
const response = await fetch(url);
await streamController.start(response);

// Pause stream
streamController.pause();

// Resume stream
streamController.resume();

// Abort stream
streamController.abort();

// Check status
const isActive = streamController.isActive();
const isPaused = streamController.isPaused();

 */


var useStreamController = function useStreamController() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var streamController = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var reader = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var activeStream = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var responseReader = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var paused = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var abortController = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new AbortController());
  var textDecoder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new TextDecoder("utf-8")); // Get the decoding of UTF8

  // To avoid the "Uncaught (in promise) TypeError: Failed to execute 'cancel' on 'ReadableStream': Cannot cancel a locked stream" error, 
  // (1) you need to safely release the reader.
  // (2) cleanup() also requires asynchronous state
  var releaseReader = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(readerRef) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!readerRef.current) {
              _context.next = 11;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return readerRef.current.cancel();
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.warn('Error cancelling reader:', _context.t0);
          case 9:
            try {
              readerRef.current.releaseLock();
            } catch (e) {
              console.warn('Error releasing reader lock:', e);
            }
            readerRef.current = null;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var cleanup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return releaseReader(reader);
        case 2:
          _context2.next = 4;
          return releaseReader(responseReader);
        case 4:
          if (!activeStream.current) {
            _context2.next = 14;
            break;
          }
          _context2.prev = 5;
          _context2.next = 8;
          return activeStream.current.cancel();
        case 8:
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](5);
          console.warn('Error cancelling stream:', _context2.t0);
        case 13:
          activeStream.current = null;
        case 14:
          streamController.current = null;
          active.current = false;
          paused.current = false;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 10]]);
  })), [releaseReader]);

  // Process chunks of data
  var processChunk = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(chunk, index) {
      var _options$onChunk, _options$onError;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            try {
              (_options$onChunk = options.onChunk) === null || _options$onChunk === void 0 ? void 0 : _options$onChunk.call(options, chunk, index);
            } catch (error) {
              (_options$onError = options.onError) === null || _options$onError === void 0 ? void 0 : _options$onError.call(options, error);
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [options]);

  // Start processing the stream
  var startProcessing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var counter, lastContent, _yield$reader$current, done, value, _options$onComplete, chunkStr, _options$onAbort, _options$onError2;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(!reader.current || !active.current)) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          //
          counter = 0; // Store the final content and bind it to loading
          lastContent = '';
        case 4:
          if (!active.current) {
            _context4.next = 35;
            break;
          }
          _context4.prev = 5;
          if (!paused.current) {
            _context4.next = 10;
            break;
          }
          _context4.next = 9;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 100);
          });
        case 9:
          return _context4.abrupt("continue", 4);
        case 10:
          _context4.next = 12;
          return reader.current.read();
        case 12:
          _yield$reader$current = _context4.sent;
          done = _yield$reader$current.done;
          value = _yield$reader$current.value;
          if (!done) {
            _context4.next = 20;
            break;
          }
          (_options$onComplete = options.onComplete) === null || _options$onComplete === void 0 ? void 0 : _options$onComplete.call(options, lastContent);
          _context4.next = 19;
          return cleanup();
        case 19:
          return _context4.abrupt("break", 35);
        case 20:
          // Decode the content
          chunkStr = textDecoder.current.decode(value, {
            stream: true
          });
          lastContent += chunkStr;
          _context4.next = 24;
          return processChunk(chunkStr, counter);
        case 24:
          counter++;
          _context4.next = 33;
          break;
        case 27:
          _context4.prev = 27;
          _context4.t0 = _context4["catch"](5);
          if (_context4.t0.name === 'AbortError') {
            (_options$onAbort = options.onAbort) === null || _options$onAbort === void 0 ? void 0 : _options$onAbort.call(options);
          } else {
            (_options$onError2 = options.onError) === null || _options$onError2 === void 0 ? void 0 : _options$onError2.call(options, _context4.t0);
          }
          _context4.next = 32;
          return cleanup();
        case 32:
          return _context4.abrupt("break", 35);
        case 33:
          _context4.next = 4;
          break;
        case 35:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 27]]);
  })), [options, cleanup, processChunk]);

  // Start streaming
  var start = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(response) {
      var stream, _options$onError3;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return cleanup();
          case 2:
            // Get Reader
            reader.current = response.body.getReader();
            _context6.prev = 3;
            stream = new ReadableStream({
              start: function start(controller) {
                streamController.current = controller;
              },
              pull: function pull(controller) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  var _yield$read, done, value, chunkStr;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return reader.current.read();
                      case 3:
                        _yield$read = _context5.sent;
                        done = _yield$read.done;
                        value = _yield$read.value;
                        if (!done) {
                          _context5.next = 9;
                          break;
                        }
                        controller.close();
                        return _context5.abrupt("return");
                      case 9:
                        // Decode the content
                        chunkStr = textDecoder.current.decode(value, {
                          stream: true
                        });
                        controller.enqueue(chunkStr);
                        _context5.next = 16;
                        break;
                      case 13:
                        _context5.prev = 13;
                        _context5.t0 = _context5["catch"](0);
                        controller.error(_context5.t0);
                      case 16:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, null, [[0, 13]]);
                }))();
              },
              cancel: function cancel() {
                var _response$body;
                (_response$body = response.body) === null || _response$body === void 0 ? void 0 : _response$body.cancel();
              }
            });
            activeStream.current = stream;
            active.current = true;
            paused.current = false;

            // Start processing immediately
            _context6.next = 10;
            return startProcessing();
          case 10:
            _context6.next = 16;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            (_options$onError3 = options.onError) === null || _options$onError3 === void 0 ? void 0 : _options$onError3.call(options, _context6.t0);
            cleanup();
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[3, 12]]);
    }));
    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }(), [options, cleanup, startProcessing]);

  // Pause streaming
  var pause = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    paused.current = true;
  }, []);

  // Resume streaming
  var resume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    paused.current = false;
  }, []);

  // Abort streaming
  var abort = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          abortController.current.abort();
          _context7.next = 3;
          return cleanup();
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })), [cleanup]);

  // Check if stream is active
  var isActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return active.current;
  }, []);

  // Check if stream is paused
  var isPaused = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return paused.current;
  }, []);

  // Cleanup on unmount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      cleanup()["catch"](console.error);
    };
  }, [cleanup]);
  return {
    start: start,
    pause: pause,
    resume: resume,
    abort: abort,
    isActive: isActive,
    isPaused: isPaused
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStreamController);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});