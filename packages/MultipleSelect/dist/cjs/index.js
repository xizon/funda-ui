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

/***/ 498:
/***/ ((module) => {

/**
 * Convert value to string separated by square brackets 
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: [1][2][3]
 */
function convertStringByCommaToValByBrackets(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return '';
  }
  return str.split(',').map(function (v) {
    return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
  }).join('');
}

/**
 * Convert array value to string  separated by square brackets 
 * @param {Array} arr  such as: ['1','2','3']
 * @returns {String} such as: [1][2][3]
 */
function convertArrToValByBrackets(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(function (v) {
    return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
  }).join('');
}

/**
 * Convert value to string separated by curly braces
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: {1}{2}{3}
 */
function convertStringByCommaToValByBraces(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return '';
  }
  return str.split(',').map(function (v) {
    return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
  }).join('');
}

/**
 * Convert array value to string  separated by curly braces
 * @param {Array} arr  such as: ['1','2','3']
 * @returns {String} such as: {1}{2}{3}
 */
function convertArrToValByBraces(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(function (v) {
    return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
  }).join('');
}
module.exports = {
  convertStringByCommaToValByBrackets: convertStringByCommaToValByBrackets,
  convertArrToValByBrackets: convertArrToValByBrackets,
  convertStringByCommaToValByBraces: convertStringByCommaToValByBraces,
  convertArrToValByBraces: convertArrToValByBraces
};

/***/ }),

/***/ 368:
/***/ ((module) => {

/**
 * Extract the contents of square brackets
 * @param {String} str    =>  input string. such as '[1,2] [f][c]'
 * @returns {Array|String} such as: ['1,2','f','c']
 */
function extractContentsOfBrackets(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\[]+(?=(\[ \])|\])/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of curly braces
 * @param {String} str    =>  input string. such as '{1,2} {f}{c}'
 * @returns {Array|String} such as: ['1,2','f','c']
 */
function extractContentsOfBraces(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\{]+(?=(\{ \})|\})/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of parentheses
 * @param {String} str    =>  input string. such as '(1,2) (f)(c)'
 * @returns {Array|String} such as: ['1,2','f','c']
 */
function extractContentsOfParentheses(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\(]+(?=(\( \))|\))/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}
module.exports = {
  extractContentsOfBrackets: extractContentsOfBrackets,
  extractContentsOfBraces: extractContentsOfBraces,
  extractContentsOfParentheses: extractContentsOfParentheses
};

/***/ }),

/***/ 602:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Convert Tree
 * @param {Array} arr                    - Flat array
 * @param  {?String | ?Number} parentId  - Parent id
 * @param  {?String} keyId               - Key value of id.
 * @param  {?String} keyParentId         - Key value of parent id.
 * @returns Array
 */
function convertTree(arr) {
  var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var keyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var keyParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent_id';
  if (!parentId) {
    // If there is no parent id (when recursing for the first time), all parents will be queried
    return arr.filter(function (item) {
      return !item[keyParentId];
    }).map(function (item) {
      // Query all child nodes by parent node ID
      item.children = convertTree(arr, item[keyId], keyId, keyParentId);
      return item;
    });
  } else {
    return arr.filter(function (item) {
      return item[keyParentId] === parentId;
    }).map(function (item) {
      // Query all child nodes by parent node ID
      item.children = convertTree(arr, item[keyId], keyId, keyParentId);
      return item;
    });
  }
}

/**
 * Flat tree
 * @param {Array} arr                    - Hierarchical array
 * @returns Array
 */
function flatTree(arr) {
  var flatData = function flatData(_ref) {
    var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    var _rest$children = rest.children,
      children = _rest$children === void 0 ? [] : _rest$children;
    return [_objectSpread({}, rest)].concat(_toConsumableArray(children.flatMap(flatData)));
  };
  var result = arr.flatMap(flatData);

  //remove children from item
  result = result.map(function (item) {
    delete item.children;
    return item;
  });
  return result;
}

/**
 * Get all depth
 * @param {Object} node 
 * @returns Number
 */
function getAllDepth(arr) {
  var count = function count(children) {
    return children.reduce(function (depth, child) {
      return Math.max(depth, 1 + count(child.children)); // increment depth of children by 1, and compare it with accumulated depth of other children within the same element
    }, 0); //default value 0 that's returned if there are no children
  };

  return count(arr);
}

/**
* Add depth to each item in the tree
* @param {Array} arr       - Hierarchical array
* @param  {?String} keyId               - Key value of id.
* @param  {?String} keyParentId         - Key value of parent id.
* @param  {?Number} depth               - Depth of the item.
* @returns Number
*/
function addTreeDepth(arr) {
  var keyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var parentItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return arr.reduce(function (acc, el) {
    var children = el.children,
      otherProps = _objectWithoutProperties(el, _excluded);
    acc.push(_objectSpread(_objectSpread({}, otherProps), {}, {
      parentItem: parentItem,
      depth: depth
    }));
    if (children) {
      return acc.concat(addTreeDepth(children, keyId, el[keyId], depth + 1));
    }
    return acc;
  }, []);
}

/**
 * Add indent placeholder
 * @param {Array} arr                    - Flat array
 * @param  {?String} placeholder         - String of placeholder
 * @param  {?String} lastPlaceholder     - Last String of placeholder
 * @param  {?String} keyName             - Key value of name.
 * @returns Array
 */
function addTreeIndent(arr) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;&nbsp;&nbsp;&nbsp;';
  var lastPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var keyName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'label';
  arr.forEach(function (item) {
    var indent = '';
    if (item.depth) {
      Array(item.depth).fill(0).forEach(function (k, i) {
        indent += placeholder;
        if (i === item.depth - 1) {
          item[keyName] = indent + lastPlaceholder + item[keyName];
        }
      });
    }
  });
}
module.exports = {
  getAllDepth: getAllDepth,
  convertTree: convertTree,
  flatTree: flatTree,
  addTreeDepth: addTreeDepth,
  addTreeIndent: addTreeIndent
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
/* harmony import */ var _utils_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(602);
/* harmony import */ var _utils_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_tree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_extract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(368);
/* harmony import */ var _utils_extract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_extract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(498);
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_convert__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["wrapperClassName", "wrapperMinHeight", "wrapperMinWidth", "availableHeaderTitle", "selectedHeaderTitle", "selectedHeaderNote", "removeAllBtnLabel", "addAllBtnLabel", "iconAdd", "iconRemove", "hierarchical", "indentation", "doubleIndent", "options", "disabled", "required", "value", "label", "name", "id", "extractValueByBrackets", "style", "data", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onChange"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MultipleSelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, _ref) {
  var wrapperClassName = props.wrapperClassName,
    wrapperMinHeight = props.wrapperMinHeight,
    wrapperMinWidth = props.wrapperMinWidth,
    availableHeaderTitle = props.availableHeaderTitle,
    selectedHeaderTitle = props.selectedHeaderTitle,
    selectedHeaderNote = props.selectedHeaderNote,
    removeAllBtnLabel = props.removeAllBtnLabel,
    addAllBtnLabel = props.addAllBtnLabel,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    hierarchical = props.hierarchical,
    indentation = props.indentation,
    doubleIndent = props.doubleIndent,
    options = props.options,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    name = props.name,
    id = props.id,
    extractValueByBrackets = props.extractValueByBrackets,
    style = props.style,
    data = props.data,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    fetchCallback = props.fetchCallback,
    onFetch = props.onFetch,
    onChange = props.onChange,
    attributes = _objectWithoutProperties(props, _excluded);
  var WRAPPER_MIN_H = typeof wrapperMinHeight === 'undefined' ? '' : wrapperMinHeight;
  var WRAPPER_MIN_W = typeof wrapperMinWidth === 'undefined' ? '' : wrapperMinWidth;
  var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
  var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
  var VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var availableListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var selectedListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var optionsRes = options ? isJSON(options) ? JSON.parse(options) : options : [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    valSelectedData = _useState2[0],
    setValSelectedData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    valSelected = _useState4[0],
    setValSelected = _useState4[1];

  // return a array of options
  var optionsDataInit = optionsRes;

  //
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    changedSearchVal = _useState6[0],
    setChangedSearchVal = _useState6[1];

  //
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsDataInit),
    _useState8 = _slicedToArray(_useState7, 2),
    dataInit = _useState8[0],
    setDataInit = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasErr = _useState10[0],
    setHasErr = _useState10[1];
  var multiSelControlOptionExist = function multiSelControlOptionExist(arr, val) {
    var _data = arr.filter(Boolean);
    return _data.map(function (v) {
      return v.toString();
    }).includes(val.toString());
  };
  function fetchData(_x2) {
    return _fetchData.apply(this, arguments);
  } // Determine whether it is in JSON format
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var response, _ORGIN_DATA;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // set default value
            if (typeof value !== 'undefined' && value !== '') inputRef.current.dataset.value = value;

            //
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context.next = 15;
              break;
            }
            _context.next = 4;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 4:
            response = _context.sent;
            _ORGIN_DATA = response.data; // reset data structure
            if (typeof fetchCallback === 'function') {
              _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              _ORGIN_DATA = (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeDepth)(_ORGIN_DATA);
              (0,_utils_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeIndent)(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(value, _ORGIN_DATA); // value must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);
            return _context.abrupt("return", _ORGIN_DATA);
          case 15:
            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            initDefaultValue(value, optionsDataInit); // value must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(optionsDataInit);
            return _context.abrupt("return", optionsDataInit);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
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
  function initDefaultValue(defaultValue, options) {
    // change the value to trigger component rendering
    if (typeof defaultValue === 'undefined' || defaultValue === '') {
      setValSelected([]);
      setValSelectedData([]);
    } else {
      var _val = VALUE_BY_BRACKETS ? (0,_utils_extract__WEBPACK_IMPORTED_MODULE_2__.extractContentsOfBrackets)(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
      if (Array.isArray(_val)) {
        var _initVal = _val.filter(function (v) {
          return v !== '';
        });
        setValSelected(_initVal);

        // Initialize selected options
        setValSelectedData(options.filter(function (item) {
          return multiSelControlOptionExist(_initVal, item.value);
        }));
      } else {
        setValSelected([]);
        setValSelectedData([]);
      }
    }
  }
  function selectItem(el) {
    if (el === null) return;
    var _li = el;
    var _val = _li.dataset.value;
    var _listItemLabel = _li.dataset.listItemLabel;
    var _label = _listItemLabel === '' ? _li.dataset.label : _listItemLabel;
    var _data = typeof _li.dataset.itemdata !== 'undefined' ? JSON.parse(_li.dataset.itemdata) : {};

    // set selected items
    setValSelected(function (prevState) {
      var newData = JSON.parse(JSON.stringify(prevState));
      var index = newData.findIndex(function (item) {
        return item == _val;
      });
      if (index !== -1) newData.splice(index, 1);
      var _res = _val ? Array.from(new Set([_val].concat(_toConsumableArray(newData)))) : newData;
      onChange === null || onChange === void 0 ? void 0 : onChange(_li, _res, VALUE_BY_BRACKETS ? (0,_utils_convert__WEBPACK_IMPORTED_MODULE_3__.convertArrToValByBrackets)(_res) : _res.join(','), _data, 'add');

      // hide current item
      _li.classList.add('hide');
      return _res;
    });

    // update selected data
    setValSelectedData(function (prevState) {
      var newData = JSON.parse(JSON.stringify(prevState));
      var index = newData.findIndex(function (item) {
        return item.value == _val;
      });
      if (index !== -1) newData.splice(index, 1);
      var _res = _val ? Array.from(new Set([_data].concat(_toConsumableArray(newData)))) : newData;
      return _res;
    });
  }
  function removeItem(el) {
    if (el === null) return;
    var _li = el;
    var _val = _li.dataset.value;
    var _data = typeof _li.dataset.itemdata !== 'undefined' ? JSON.parse(_li.dataset.itemdata) : {};

    // set selected items
    setValSelected(function (prevState) {
      var newData = JSON.parse(JSON.stringify(prevState));
      var index = newData.findIndex(function (item) {
        return item == _val;
      });
      if (index !== -1) newData.splice(index, 1);
      var _res = newData;
      onChange === null || onChange === void 0 ? void 0 : onChange(_li, _res, VALUE_BY_BRACKETS ? (0,_utils_convert__WEBPACK_IMPORTED_MODULE_3__.convertArrToValByBrackets)(_res) : _res.join(','), _data, 'remove');

      // show current item
      if (availableListRef.current) {
        var removedItem = availableListRef.current.querySelector("li[data-value=\"".concat(_val, "\"]"));
        if (removedItem !== null) removedItem.classList.remove('hide');
      }
      return _res;
    });

    // update selected data
    setValSelectedData(function (prevState) {
      var newData = JSON.parse(JSON.stringify(prevState));
      var index = newData.findIndex(function (item) {
        return item.value == _val;
      });
      if (index !== -1) newData.splice(index, 1);
      var _res = newData;
      return _res;
    });
  }
  function handleSelectAll(event) {
    event.preventDefault();
    if (availableListRef.current === null) return;
    var items = [].slice.call(availableListRef.current.querySelectorAll('li[data-value]'));
    items.forEach(function (item) {
      if (!item.classList.contains('disabled')) {
        selectItem(item);
      }
    });
  }
  function handleRemoveAll(event) {
    event.preventDefault();
    if (selectedListRef.current === null) return;
    var items = [].slice.call(selectedListRef.current.querySelectorAll('li[data-value]'));
    items.forEach(function (item) {
      removeItem(item);
    });
  }
  function handleChangeSearch(event) {
    var inputVal = event.target.value;
    if (availableListRef.current === null) return;
    setChangedSearchVal(inputVal);
    var items = [].slice.call(availableListRef.current.querySelectorAll('li[data-value]'));
    items.forEach(function (item) {
      // Avoid fatal errors causing page crashes
      var _label = typeof item.dataset.label !== 'undefined' && item.dataset.label !== null ? item.dataset.label : '';
      var _queryString = typeof item.dataset.querystring !== 'undefined' && item.dataset.querystring !== null ? item.dataset.querystring : '';
      if ((_queryString.split(',').some(function (l) {
        return l.charAt(0) === inputVal.toLowerCase();
      }) || _queryString.split(',').some(function (l) {
        return l.replace(/ /g, '').indexOf(inputVal.toLowerCase()) >= 0;
      }) || _label.toLowerCase().indexOf(inputVal.toLowerCase()) >= 0) && inputVal != '') {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
    items.forEach(function (item) {
      if (inputVal === '') {
        item.classList.remove('hide');
      }
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // data init
    //--------------
    var _params = fetchFuncMethodParams || [];
    fetchData(_params.join(','));
  }, [value, options, data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? "m-select__wrapper ".concat(wrapperClassName) : "m-select__wrapper mb-3",
    ref: rootRef,
    style: {
      minWidth: WRAPPER_MIN_W === '' ? 'var(--m-select-wrapper-min-w)' : WRAPPER_MIN_W,
      minHeight: WRAPPER_MIN_H === '' ? 'var(--m-select-wrapper-min-h)' : WRAPPER_MIN_H
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select-diving-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    ref: function ref(node) {
      inputRef.current = node;
      if (typeof _ref === 'function') {
        _ref(node);
      } else if (_ref) {
        _ref.current = node;
      }
    },
    tabIndex: -1,
    type: "hidden",
    id: idRes,
    name: name,
    value: VALUE_BY_BRACKETS ? (0,_utils_convert__WEBPACK_IMPORTED_MODULE_3__.convertArrToValByBrackets)(valSelected) : valSelected.join(','),
    required: required || null
  }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select__available__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select__m-select__item-actions m-select__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select__search__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: changedSearchVal,
    className: "m-select__search",
    onChange: handleChangeSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "0.8em",
    height: "0.8em",
    fill: "#ddd",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "m-select__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(availableHeaderTitle || '')
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "m-select__btn--add-all",
    onClick: handleSelectAll
  }, addAllBtnLabel || 'Add all')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "m-select__available m-select__options-contentlist",
    ref: availableListRef
  }, dataInit ? dataInit.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: 'item' + i,
      className: "".concat(item.disabled ? 'disabled' : '', " ").concat(multiSelControlOptionExist(valSelected, item.value) ? 'hide' : ''),
      "data-index": i,
      "data-value": "".concat(item.value),
      "data-label": "".concat(item.label),
      "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
      "data-disabled": item.disabled || 'false',
      "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
      "data-itemdata": JSON.stringify(item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
      dangerouslySetInnerHTML: {
        __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "m-select__item-action"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      onClick: function onClick(e) {
        selectItem(e.target.closest('li'));
      }
    }, iconAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconAdd) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "15px",
      height: "15px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",
      fill: "#000"
    })))));
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select__selected__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-select__m-select__item-actions m-select__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "m-select__count",
    dangerouslySetInnerHTML: {
      __html: "".concat(typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length) : '')
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "m-select__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(selectedHeaderTitle || '')
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "m-select__btn--remove-all",
    onClick: handleRemoveAll
  }, removeAllBtnLabel || 'Remove all')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "m-select__selected m-select__options-contentlist--sortable m-select__options-contentlist",
    ref: selectedListRef
  }, valSelectedData ? valSelectedData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: 'item-selected' + i,
      className: "selected",
      "data-index": i,
      "data-value": "".concat(item.value),
      "data-label": "".concat(item.label),
      "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
      "data-disabled": item.disabled || 'false',
      "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
      "data-itemdata": JSON.stringify(item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
      dangerouslySetInnerHTML: {
        __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "m-select__item-action"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      onClick: function onClick(e) {
        removeItem(e.target.closest('li'));
      }
    }, iconRemove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "15px",
      height: "15px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
      fill: "#000"
    })))));
  }) : null)))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});