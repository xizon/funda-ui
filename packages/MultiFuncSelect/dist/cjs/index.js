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
var _excluded = ["wrapperClassName", "controlClassName", "disabled", "required", "value", "label", "name", "readOnly", "placeholder", "id", "options", "style", "depth", "controlArrow", "tabIndex", "fetchNoneInfo", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onSelect", "onChange", "onBlur", "onFocus"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var MultiFuncSelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, _ref2) {
  var wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    name = props.name,
    readOnly = props.readOnly,
    placeholder = props.placeholder,
    id = props.id,
    options = props.options,
    style = props.style,
    depth = props.depth,
    controlArrow = props.controlArrow,
    tabIndex = props.tabIndex,
    fetchNoneInfo = props.fetchNoneInfo,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    fetchCallback = props.fetchCallback,
    onFetch = props.onFetch,
    onSelect = props.onSelect,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var selectInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var valueInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var listContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var optionsRes = options ? isJSON(options) ? JSON.parse(options) : options : [];
  var windowScrollUpdate = (0,_utils_performance__WEBPACK_IMPORTED_MODULE_1__.throttle)(handleScrollEvent, 5);

  // return a array of options
  var optionsDataInit = optionsRes;

  //
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsDataInit),
    _useState2 = _slicedToArray(_useState, 2),
    orginalData = _useState2[0],
    setOrginalData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsDataInit),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasErr = _useState6[0],
    setHasErr = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    controlLabel = _useState8[0],
    setControlLabel = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    controlValue = _useState10[0],
    setControlValue = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    controlTempValue = _useState12[0],
    setControlTempValue = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isOpen = _useState14[0],
    setIsOpen = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    listContentHeight = _useState16[0],
    setListContentHeight = _useState16[1];

  /**
   * Check if an element is in the viewport
   * @param {HTMLElement} elem 
   * @returns {boolean}
   */
  function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  function handleScrollEvent() {
    getPlacement(listRef.current, true);
  }

  //
  function getPlacement(el) {
    var restorePos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (el === null) return;
    var PLACEMENT_TOP = 'top-0';
    var PLACEMENT_BOTTOMEND = 'bottom-0';
    var PLACEMENT_RIGHT = 'end-0';
    var PLACEMENT_LEFT = 'start-0';
    var elTop = el.getBoundingClientRect().top;
    var elSpacing = 50 + selectInputRef.current.clientHeight * 3;
    var elMinWindowSpacing = selectInputRef.current.clientHeight * 2;

    //restore position
    if (restorePos) {
      if (isInViewport(el)) {
        el.classList.remove(PLACEMENT_BOTTOMEND);
        el.style.removeProperty('bottom');
      }
      return;
    }
    if (listContentRef.current === null) return;

    // STEP 0:
    // save content height (Suitable for initial data with unchanged open options)
    var _contentHeight = el.offsetHeight;
    if (listContentHeight === 0) {
      setListContentHeight(el.offsetHeight);
    } else {
      _contentHeight = listContentHeight;
    }

    // STEP 1:
    // If the content exceeds the height of the window, first limit height and add scrollbar
    var maxHeight = window.innerHeight - elSpacing;
    if (maxHeight < selectInputRef.current.clientHeight) maxHeight = elMinWindowSpacing;
    if (_contentHeight > 0 && _contentHeight > maxHeight) {
      var newH = maxHeight - (elTop > window.innerHeight / 2 ? 0 : elTop) + elMinWindowSpacing;

      // default position
      listContentRef.current.style.height = newH + 'px';

      // if it's on top
      if (newH > maxHeight) {
        listContentRef.current.style.height = elTop - elMinWindowSpacing + 'px';
      }

      // Adjust the overall height to fit the wrapper
      var _displayedItems = listContentRef.current.querySelectorAll('.list-group-item');
      var _displayedHeight = _displayedItems[0].clientHeight * _displayedItems.length;
      if (_displayedHeight < listRef.current.clientHeight) {
        listContentRef.current.style.height = _displayedHeight + 'px';
      }

      //
      listContentRef.current.style.overflowY = 'auto';
    } else {
      listContentRef.current.style.height = 'auto';
      listContentRef.current.style.overflowY = 'inherit';
    }

    // STEP 2:
    // Adjust position
    if (!isInViewport(el)) {
      el.classList.add(PLACEMENT_BOTTOMEND);
      el.style.setProperty('bottom', selectInputRef.current.clientHeight + 5 + 'px', "important");
    }

    // STEP 3:
    // It is on top when no scrollbars have been added
    if (!isInViewport(el)) {
      if (el.getBoundingClientRect().top < 0) {
        listContentRef.current.style.height = _contentHeight + el.getBoundingClientRect().top - elMinWindowSpacing + 'px';
        listContentRef.current.style.overflowY = 'auto';
      }
    }
  }

  // Determine whether it is in JSON format
  function isJSON(str) {
    if (typeof str === 'string' && str.length > 0) {
      if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
        return false;
      } else {
        if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
        return true;
      } else {
        return false;
      }
    }
  }
  function fetchData(_x2, _x3) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, defaultValue) {
      var response, _ORGIN_DATA, filterRes, filterResQueryValue, filterResQueryLabel, _filterRes, _filterResQueryValue, _filterResQueryLabel;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context2.next = 20;
              break;
            }
            _context2.next = 3;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 3:
            response = _context2.sent;
            _ORGIN_DATA = response.data; // reset data structure
            if (typeof fetchCallback === 'function') {
              _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (typeof _ORGIN_DATA[0].value === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            // value & label must be initialized
            setControlValue(defaultValue);
            filterRes = [];
            filterResQueryValue = _ORGIN_DATA.filter(function (item) {
              return item.value == defaultValue;
            });
            filterResQueryLabel = _ORGIN_DATA.filter(function (item) {
              return item.label == defaultValue;
            });
            filterRes = filterResQueryValue;
            if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
            setControlLabel(typeof filterRes[0] !== 'undefined' ? filterRes[0].label : '');

            //
            setData(_ORGIN_DATA); // data must be initialized

            //
            setOrginalData(_ORGIN_DATA);

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);
            return _context2.abrupt("return", _ORGIN_DATA);
          case 20:
            // value & label must be initialized
            setControlValue(defaultValue);
            _filterRes = [];
            _filterResQueryValue = optionsDataInit.filter(function (item) {
              return item.value == defaultValue;
            });
            _filterResQueryLabel = optionsDataInit.filter(function (item) {
              return item.label == defaultValue;
            });
            _filterRes = _filterResQueryValue;
            if (_filterResQueryValue.length === 0) _filterRes = _filterResQueryLabel;
            setControlLabel(typeof _filterRes[0] !== 'undefined' ? _filterRes[0].label : '');

            //
            setData(optionsDataInit); // data must be initialized

            //
            setOrginalData(optionsDataInit);
            return _context2.abrupt("return", optionsDataInit);
          case 30:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchData.apply(this, arguments);
  }
  function cancel() {
    // hide list
    setIsOpen(false);

    // restore data
    setData(orginalData);

    // update temporary value
    setControlTempValue(null);
  }
  function activate() {
    // show list
    setIsOpen(true);

    // restore data
    setData(orginalData);

    // update temporary value
    setControlTempValue('');
  }
  function handleSelect(_x4) {
    return _handleSelect.apply(this, arguments);
  }
  function _handleSelect() {
    _handleSelect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el) {
      var dataInput,
        index,
        _data,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dataInput = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
            if (!(typeof el === 'undefined')) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            // cancel
            cancel();

            // update value * label
            if (dataInput) {
              _data = JSON.parse(dataInput);
              setControlValue(_data.value);
              setControlLabel(_data.label);
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, _data);
                selectInputRef.current.blur();
              }
            } else {
              index = typeof el.target !== 'undefined' ? el.target.dataset.index : el.dataset.index;
              setControlValue(data[index].value);
              setControlLabel(data[index].label);
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, data[index]);
                selectInputRef.current.blur();
              }
            }

            //remove focus style
            rootRef.current.classList.remove('focus');
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _handleSelect.apply(this, arguments);
  }
  function handleSearch(event) {
    if (isOpen) return;
    activate();

    // window position
    setTimeout(function () {
      getPlacement(listRef.current);
    }, 0);
  }
  function handleComposition(event) {
    if (event.type === 'compositionstart' || event.type === 'compositionend') {
      //fire change method to update for Chrome v53
      handleChange(event);
    }
  }
  function handleChange(event) {
    var val = event.target.value;

    // update temporary value
    setControlTempValue(val);

    //
    if (val === '') {
      // No elements found. Consider changing the search query.
      // restore data
      setData(orginalData);
    } else {
      var filterRes = function filterRes(data) {
        return orginalData.filter(function (item) {
          if ((item.letter.split(',').some(function (l) {
            return l.charAt(0) === val.toLowerCase();
          }) || item.letter.split(',').some(function (l) {
            return l.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0;
          }) || item.label.indexOf(val) >= 0) && val != '') {
            return true;
          } else {
            return false;
          }
        });
      };
      setData(filterRes);
    }

    // window position
    setTimeout(function () {
      getPlacement(listRef.current);
    }, 0);
  }

  //
  function handleFocus(event) {
    rootRef.current.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleBlur(event) {
    //remove focus style
    rootRef.current.classList.remove('focus');
    setTimeout(function () {
      // cancel
      cancel();
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, 300);
  }
  function handleClose(event) {
    if (event.target.closest(".".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'multifunc-select__wrapper')) === null) {
      // cancel
      cancel();
    }
  }
  function optionFocus(type) {
    return new Promise(function (resolve) {
      // Determine the "active" class name to avoid listening to other unused components of the same type
      if (listRef.current === null || !rootRef.current.classList.contains('active')) return;
      var options = [].slice.call(listRef.current.querySelectorAll('.list-group-item'));
      var currentIndex = options.findIndex(function (e) {
        return e === listRef.current.querySelector('.list-group-item.active');
      });

      // get the next element in the list, "%" will loop around to 0
      var nextIndex;
      if (type === 'increase') {
        nextIndex = currentIndex + 1 % options.length;
      } else {
        nextIndex = (currentIndex < 0 ? options.length : currentIndex) - 1 % options.length;
      }

      //only one
      if (options.length === 1) nextIndex = 0;
      if (!isNaN(nextIndex)) {
        options.forEach(function (node, index) {
          node === null || node === void 0 ? void 0 : node.classList.remove('active');
        });
        var targetOption = options[nextIndex];
        if (typeof targetOption !== 'undefined' && !targetOption.classList.contains('no-match')) {
          targetOption.classList.add('active');
          resolve(targetOption);
        }
      }
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // data init
    //--------------
    var _params = fetchFuncMethodParams || [];
    fetchData(_params.join(','), value);

    // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
    // you need to judge the value of the input obtained by using the macrotask("setTimeout()")
    setTimeout(function () {
      if (valueInputRef.current !== null && valueInputRef.current.value !== '' && (typeof value === 'undefined' || value === '')) {
        fetchData(_params.join(','), valueInputRef.current.value);
      }
    }, 500);

    // keyboard listener
    //--------------
    var listener = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var res, currentData, _options;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              res = null;
              if (!(event.code === "Enter" || event.code === "NumpadEnter")) {
                _context.next = 8;
                break;
              }
              if (!(listRef.current !== null)) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return listRef.current.dataset.data;
            case 5:
              currentData = _context.sent;
              if (typeof currentData !== 'undefined') {
                handleSelect(null, currentData);
                _options = [].slice.call(listRef.current.querySelectorAll('.list-group-item'));
                _options.forEach(function (node) {
                  node.classList.remove('active');
                });
              }
            case 7:
              return _context.abrupt("return");
            case 8:
              _context.t0 = event.code;
              _context.next = _context.t0 === "ArrowLeft" ? 11 : _context.t0 === "ArrowRight" ? 12 : _context.t0 === "ArrowUp" ? 13 : _context.t0 === "ArrowDown" ? 17 : 21;
              break;
            case 11:
              return _context.abrupt("break", 21);
            case 12:
              return _context.abrupt("break", 21);
            case 13:
              _context.next = 15;
              return optionFocus('decrease');
            case 15:
              res = _context.sent;
              return _context.abrupt("break", 21);
            case 17:
              _context.next = 19;
              return optionFocus('increase');
            case 19:
              res = _context.sent;
              return _context.abrupt("break", 21);
            case 21:
              // temporary data
              if (res !== null) listRef.current.dataset.data = JSON.stringify({
                value: res.dataset.value,
                label: res.dataset.label,
                letter: res.dataset.letter
              });
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function listener(_x5) {
        return _ref.apply(this, arguments);
      };
    }();
    document.removeEventListener("keydown", listener);
    document.addEventListener("keydown", listener);

    //--------------
    document.removeEventListener('pointerdown', handleClose);
    document.addEventListener('pointerdown', handleClose);

    // Add function to the element that should be used as the scrollable area.
    //--------------
    window.removeEventListener('scroll', windowScrollUpdate);
    window.removeEventListener('touchmove', windowScrollUpdate);
    window.addEventListener('scroll', windowScrollUpdate);
    window.addEventListener('touchmove', windowScrollUpdate);
    windowScrollUpdate();
    return function () {
      document.removeEventListener("keydown", listener);
      document.removeEventListener('pointerdown', handleClose);
      window.removeEventListener('scroll', windowScrollUpdate);
      window.removeEventListener('touchmove', windowScrollUpdate);
    };
  }, [value, options]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "multifunc-select__wrapper-".concat(idRes),
    className: isOpen ? "multifunc-select__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative', " active") : "multifunc-select__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'),
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label"
  }, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    ref: function ref(node) {
      selectInputRef.current = node;
      if (typeof _ref2 === 'function') {
        _ref2(node);
      } else if (_ref2) {
        _ref2.current = node;
      }
    },
    tabIndex: tabIndex || 0,
    type: "text",
    id: "label-".concat(idRes)

    // Don't use "name", it's just a container to display the label
    ,
    "data-name": name !== null && name !== void 0 && name.match(/(\[.*?\])/gi) ? "".concat(name.split('[')[0], "-label[]") : "".concat(name, "-label"),
    "data-select": true,
    placeholder: placeholder || '',
    className: controlClassName || controlClassName === '' ? controlClassName : "form-control",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleSearch,
    onChange: handleChange,
    onCompositionStart: handleComposition,
    onCompositionUpdate: handleComposition,
    onCompositionEnd: handleComposition,
    disabled: disabled || null,
    required: required || null,
    readOnly: readOnly || null,
    value: controlTempValue || controlTempValue === '' ? controlTempValue : controlLabel === null || controlLabel === void 0 ? void 0 : controlLabel.replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '') // do not use `defaultValue`
    ,
    style: _objectSpread({
      cursor: 'pointer'
    }, style),
    autoComplete: "off"
  }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: valueInputRef,
    type: "hidden",
    id: idRes,
    name: name,
    value: controlValue // do not use `defaultValue`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "arrow position-absolute top-0 end-0 me-2 mt-1",
    style: {
      translate: 'all .2s',
      transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)',
      pointerEvents: 'none'
    }
  }, controlArrow ? controlArrow : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 -4.5 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(-180.000000, -6684.000000)",
    fill: "#a5a5a5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(56.000000, 160.000000)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39",
    id: "arrow_down-[#339]"
  }))))))), data && !hasErr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: listRef,
    className: "list-group position-absolute w-100 border shadow small",
    style: {
      marginTop: '0.2rem',
      zIndex: depth ? depth : 100,
      display: isOpen ? 'block' : 'none'
    },
    role: "tablist"
  }, controlTempValue !== null && data.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "list-group-item list-group-item-action no-match",
    disabled: true
  }, fetchNoneInfo || 'No match yet')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded",
    style: {
      backgroundColor: 'var(--bs-list-group-bg)'
    },
    ref: listContentRef
  }, data ? data.map(function (item, index) {
    var startItemBorder = index === 0 ? 'border-top-0' : '';
    var endItemBorder = index === data.length - 1 ? 'border-bottom-0' : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      tabIndex: -1,
      onClick: handleSelect,
      type: "button",
      "data-index": index,
      key: index,
      className: "list-group-item list-group-item-action border-start-0 border-end-0 ".concat(startItemBorder, " ").concat(endItemBorder, " border-bottom-0"),
      "data-value": "".concat(item.value),
      "data-label": "".concat(item.label),
      "data-letter": "".concat(item.letter),
      role: "tab",
      dangerouslySetInnerHTML: {
        __html: item.label
      }
    });
  }) : null)))) : null));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiFuncSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});