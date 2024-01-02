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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ./src/utils/performance.js
var performance = __webpack_require__(342);
;// CONCATENATED MODULE: ./src/utils/useDebounce.js
/**
 * Delay the execution of function or state update
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useDebounce(() => setCount(count + 1), 500, [count]);

    return (
        <div className="app">
            <button onClick={handleClick}>click</button>
            <p>click {count} time</p>
        </div>
    );
};

 */


var useDebounce = function useDebounce(fn, delay, dependence) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    //Every time this returned function is called, the timer is cleared to ensure that fn is not executed
    clearTimeout(ref.current);
    ref.current = null;

    // When the returned function is called for the last time (that is the user stops a continuous operation)
    // Execute fn after another delay milliseconds
    ref.current = setTimeout(function () {
      fn.apply(void 0, args);
    }, delay);
  }, dependence);
};
/* harmony default export */ const utils_useDebounce = (useDebounce);
// EXTERNAL MODULE: ./src/utils/extract.js
var extract = __webpack_require__(368);
// EXTERNAL MODULE: ./src/utils/convert.js
var convert = __webpack_require__(498);
;// CONCATENATED MODULE: ./src/plugins/BSL/bodyScrollLock.es6.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}
var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting;
var previousBodyPosition;
var previousBodyPaddingRight;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = "".concat(computedBodyPaddingRight + scrollBarGap, "px");
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};
var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }
  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};
var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame
      var _window = window,
        scrollY = _window.scrollY,
        scrollX = _window.scrollX,
        innerHeight = _window.innerHeight;
      document.body.style.position = 'fixed';
      document.body.style.top = "".concat(-scrollY, "px");
      document.body.style.left = "".concat(-scrollX, "px");
      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);
    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement: targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = true;
    }
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }
  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};
;// CONCATENATED MODULE: ./src/plugins/BSL/index.ts

// EXTERNAL MODULE: ./src/utils/tree.js
var tree = __webpack_require__(602);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["wrapperClassName", "controlClassName", "multiSelect", "disabled", "required", "value", "label", "name", "readOnly", "placeholder", "id", "options", "lockBodyScroll", "hierarchical", "indentation", "doubleIndent", "style", "depth", "controlArrow", "winWidth", "tabIndex", "fetchTrigger", "fetchTriggerForDefaultData", "fetchNoneInfo", "fetchUpdate", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "data", "extractValueByBrackets", "fetchCallback", "onFetch", "onLoad", "onSelect", "onChange", "onBlur", "onFocus"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function src_toConsumableArray(arr) { return src_arrayWithoutHoles(arr) || src_iterableToArray(arr) || src_unsupportedIterableToArray(arr) || src_nonIterableSpread(); }
function src_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function src_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






//Destroys body scroll locking


var MultiFuncSelect = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, _ref2) {
  var wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    multiSelect = props.multiSelect,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    name = props.name,
    readOnly = props.readOnly,
    placeholder = props.placeholder,
    id = props.id,
    options = props.options,
    lockBodyScroll = props.lockBodyScroll,
    hierarchical = props.hierarchical,
    indentation = props.indentation,
    doubleIndent = props.doubleIndent,
    style = props.style,
    depth = props.depth,
    controlArrow = props.controlArrow,
    winWidth = props.winWidth,
    tabIndex = props.tabIndex,
    fetchTrigger = props.fetchTrigger,
    fetchTriggerForDefaultData = props.fetchTriggerForDefaultData,
    fetchNoneInfo = props.fetchNoneInfo,
    fetchUpdate = props.fetchUpdate,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    data = props.data,
    extractValueByBrackets = props.extractValueByBrackets,
    fetchCallback = props.fetchCallback,
    onFetch = props.onFetch,
    onLoad = props.onLoad,
    onSelect = props.onSelect,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var LIVE_SEARCH_DISABLED = (typeof fetchTrigger === 'undefined' || fetchTrigger === false) && typeof window !== 'undefined' && typeof window['funda-ui__MultiFuncSelect-disable-livesearch'] !== 'undefined' ? true : false; // Globally disable real-time search functionality (only valid for non-dynamic requests)

  var INPUT_READONLY = LIVE_SEARCH_DISABLED ? true : typeof readOnly === 'undefined' ? null : readOnly;
  var VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
  var LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? true : lockBodyScroll;
  var WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
  var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
  var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var rootSingleRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var rootMultiRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var selectInputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var valueInputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var listRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var listContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var optionsRes = options ? isJSON(options) ? JSON.parse(options) : options : [];
  var windowScrollUpdate = (0,performance.debounce)(handleScrollEvent, 500);

  // return a array of options
  var optionsDataInit = optionsRes;

  //
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(optionsDataInit),
    _useState2 = _slicedToArray(_useState, 2),
    orginalData = _useState2[0],
    setOrginalData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(optionsDataInit),
    _useState4 = _slicedToArray(_useState3, 2),
    optionsData = _useState4[0],
    setOptionsData = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasErr = _useState6[0],
    setHasErr = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    controlLabel = _useState8[0],
    setControlLabel = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    controlValue = _useState10[0],
    setControlValue = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    controlTempValue = _useState12[0],
    setControlTempValue = _useState12[1];
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isOpen = _useState14[0],
    setIsOpen = _useState14[1];
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    listContentHeight = _useState16[0],
    setListContentHeight = _useState16[1];
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    incomingData = _useState18[0],
    setIncomingData = _useState18[1];

  // Multiple selection
  var MULTI_SEL_VALID = multiSelect ? multiSelect.valid : false;
  var _useState19 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
      labels: [],
      values: []
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    controlArr = _useState20[0],
    setControlArr = _useState20[1];
  var _useState21 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    itemSelectedAll = _useState22[0],
    setItemSelectedAll = _useState22[1];
  var multiSelControlOptionExist = function multiSelControlOptionExist(arr, val) {
    return arr.map(function (v) {
      return v.toString();
    }).includes(val.toString());
  };

  //performance
  var handleChangeFetchSafe = utils_useDebounce(function (val) {
    var _orginalData = [];
    var update = function update(inputData) {
      var filterRes = function filterRes(data) {
        return inputData.filter(function (item) {
          // Avoid fatal errors causing page crashes
          var _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';
          if ((_queryString.split(',').some(function (l) {
            return l.charAt(0) === val.toLowerCase();
          }) || _queryString.split(',').some(function (l) {
            return l.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0;
          }) || item.label.toLowerCase().indexOf(val.toLowerCase()) >= 0) && val != '') {
            return true;
          } else {
            return false;
          }
        });
      };
      setOptionsData(filterRes);
    };
    if (fetchUpdate) {
      handleFetch(val).then(function (response) {
        _orginalData = response;
        update(_orginalData);

        // Adjust the overall height to fit the wrapper
        fixContentHeight();
      });
    } else {
      _orginalData = orginalData;
      update(_orginalData);

      // Adjust the overall height to fit the wrapper
      fixContentHeight();
    }
  }, 350, [optionsData]);

  /**
   * Format indent value
   * @param {String|Array} inputData 
   * @returns {String|Array}
   */
  function formatIndentVal(inputData) {
    var reVar = new RegExp(INDENT_LAST_PLACEHOLDER, 'g');
    if (Array.isArray(inputData)) {
      return inputData.map(function (s) {
        return s.replace(reVar, '').replace(/\&nbsp;/ig, '');
      });
    } else {
      return inputData.replace(reVar, '').replace(/\&nbsp;/ig, '');
    }
  }

  /**
   * Array unique
   * @param {Array} str 
   * @returns {Array}
   */
  function unique(arr) {
    return Array.from(new Set(arr));
  }

  /**
   * Remove html tag content
   * @param {string} str 
   * @returns {string}
   */
  function stripHTML(str) {
    return str.replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
  }

  /**
   * Remove a specific item from an array
   * @param {array} arr 
   * @param {string} value 
   * @returns {array}
   */
  function removeItemOnce(arr, value) {
    var arrFormat = arr.map(function (v) {
      return v.toString();
    });
    var index = arrFormat.indexOf(value.toString());
    if (index > -1) {
      arrFormat.splice(index, 1);
    }
    return arrFormat;
  }

  /**
   * Remove multiple items from an array
   * @param {array} arr 
   * @param {array} value 
   * @returns {array}
   */
  function removeItems(arr, value) {
    var arrFormat = arr.map(function (v) {
      return v.toString();
    });
    var valueFormat = value.map(function (v) {
      return v.toString();
    });
    return arrFormat.filter(function (v) {
      return !valueFormat.includes(v);
    });
  }

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
  function fixContentHeight() {
    setTimeout(function () {
      if (listContentRef.current !== null) {
        var _displayedItems = listContentRef.current.querySelectorAll('.list-group-item');
        if (typeof _displayedItems[0] !== 'undefined') {
          var _displayedHeight = _displayedItems[0].clientHeight * _displayedItems.length;
          listContentRef.current.style.height = _displayedHeight + 'px';
        }
      }
    }, 0);
  }
  function getPlacement(el) {
    var restorePos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (el === null) return;
    if (selectInputRef.current === null) return;
    var PLACEMENT_TOP = 'top-0';
    var PLACEMENT_BOTTOMEND = 'bottom-0';
    var PLACEMENT_RIGHT = 'end-0';
    var PLACEMENT_LEFT = 'start-0';
    var inputBox = selectInputRef.current.getBoundingClientRect();
    var elTop = inputBox.top;
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
    if (listContentRef.current === null || listRef.current === null) return;

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
        el.classList.remove(PLACEMENT_BOTTOMEND);
        el.style.removeProperty('bottom');
        //
        listContentRef.current.style.height = _contentHeight + el.getBoundingClientRect().top - elMinWindowSpacing + 'px';
        listContentRef.current.style.overflowY = 'auto';
      }
    }

    // STEP 4:
    // Detect content height
    var heightOffset = 80;
    var contentBox = listContentRef.current.getBoundingClientRect();
    if (contentBox.height - heightOffset > window.innerHeight / 2) {
      listContentRef.current.style.height = window.innerHeight - inputBox.height - inputBox.top - heightOffset + 'px';
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
  function adjustMultiControlContainerHeight() {
    setTimeout(function () {
      // Sometimes you may get 0, you need to judge
      if (rootMultiRef.current.clientHeight > 0) {
        rootSingleRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
        selectInputRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
      }
    }, 0);
  }
  function fetchData(_x2, _x3) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, inputDefaultValue) {
      var init,
        incomingOptionsData,
        defaultValue,
        response,
        _ORGIN_DATA,
        filterRes,
        filterResQueryValue,
        filterResQueryLabel,
        _currentData,
        _values,
        _filterRes2,
        _filterResQueryValue,
        _filterResQueryLabel,
        _currentData2,
        _values2,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            init = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
            // get incoming options from `data-options` of component
            // It is usually used for complex cascading `<MultiFuncSelect />` components
            incomingOptionsData = valueInputRef.current.dataset.options; // Determine whether the default value is user query input or default input
            defaultValue = init ? inputDefaultValue : '';
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context2.next = 22;
              break;
            }
            _context2.next = 6;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, src_toConsumableArray(params.split(',')));
          case 6:
            response = _context2.sent;
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

            // STEP 1: ===========
            // get incoming options from `data-options` of component
            if (typeof incomingOptionsData !== 'undefined') {
              _ORGIN_DATA = JSON.parse(incomingOptionsData);

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;
            }

            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              _ORGIN_DATA = (0,tree.addTreeDepth)(_ORGIN_DATA);
              (0,tree.addTreeIndent)(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // STEP 3: ===========
            // value & label must be initialized
            filterRes = [];
            if (fetchTrigger) {
              // If a manual action is used to trigger the request
              if (typeof fetchTriggerForDefaultData !== 'undefined' && fetchTriggerForDefaultData !== null && typeof (fetchTriggerForDefaultData === null || fetchTriggerForDefaultData === void 0 ? void 0 : fetchTriggerForDefaultData.values[0]) !== 'undefined') {
                filterRes = [{
                  value: fetchTriggerForDefaultData === null || fetchTriggerForDefaultData === void 0 ? void 0 : fetchTriggerForDefaultData.values[0],
                  label: fetchTriggerForDefaultData === null || fetchTriggerForDefaultData === void 0 ? void 0 : fetchTriggerForDefaultData.labels[0],
                  queryString: fetchTriggerForDefaultData === null || fetchTriggerForDefaultData === void 0 ? void 0 : fetchTriggerForDefaultData.queryStrings[0]
                }];
              }
            } else {
              filterResQueryValue = _ORGIN_DATA.filter(function (item) {
                return item.value == defaultValue;
              });
              filterResQueryLabel = _ORGIN_DATA.filter(function (item) {
                return item.label == defaultValue;
              });
              filterRes = filterResQueryValue;
              if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
            }

            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof defaultValue === 'undefined' || defaultValue === '') {
              // Do not use `init`, otherwise the query will revert to the default value if there is no value
              setControlValue('');
              setControlLabel('');
            } else {
              if (filterRes.length > 0) {
                setControlValue(filterRes[0].value);
                setControlLabel(formatIndentVal(filterRes[0].label));
              }
            }

            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {
              if ((typeof defaultValue === 'undefined' || defaultValue === '') && init) {
                setControlArr({
                  labels: [],
                  values: []
                });
                setItemSelectedAll(false);
              }
              if (typeof defaultValue !== 'undefined' && defaultValue !== '' && (multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.data) !== null) {
                // initialize default values of Multiple selection
                _currentData = multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.data;
                setControlArr({
                  labels: _currentData.labels,
                  values: _currentData.values
                });

                //
                _values = VALUE_BY_BRACKETS ? (0,extract.extractContentsOfBrackets)(defaultValue) : defaultValue.split(',');
                _values.forEach(function (_value, _index) {
                  if (!multiSelControlOptionExist(_currentData.values, _value) && typeof _currentData.values[_index] !== 'undefined') {
                    var _filterRes = [];
                    _filterRes = [{
                      value: _currentData.values[_index],
                      label: _currentData.labels[_index],
                      queryString: _currentData.queryStrings[_index]
                    }];
                    setControlArr(function (prevState) {
                      return {
                        labels: unique([].concat(src_toConsumableArray(prevState.labels), [typeof _filterRes[0] !== 'undefined' ? _filterRes[0].label : '']).filter(function (v) {
                          return v !== '';
                        })),
                        values: unique([].concat(src_toConsumableArray(prevState.values), [typeof _filterRes[0] !== 'undefined' ? _filterRes[0].value : '']).filter(function (v) {
                          return v !== '';
                        }))
                      };
                    });
                  }
                });

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();
              }
            }

            // STEP 5: ===========
            //
            setOptionsData(_ORGIN_DATA); // data must be initialized

            //
            setOrginalData(_ORGIN_DATA);

            // STEP 6: ===========
            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(selectInputRef.current, valueInputRef.current, defaultValue, _ORGIN_DATA, incomingData);

            //
            return _context2.abrupt("return", _ORGIN_DATA);
          case 22:
            // STEP 1: ===========
            // get incoming options from `data-options` of component
            if (typeof incomingOptionsData !== 'undefined') {
              optionsDataInit = JSON.parse(incomingOptionsData);

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;
            }

            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              optionsDataInit = (0,tree.addTreeDepth)(optionsDataInit);
              (0,tree.addTreeIndent)(optionsDataInit, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // STEP 3: ===========
            // value & label must be initialized
            _filterRes2 = [];
            _filterResQueryValue = optionsDataInit.filter(function (item) {
              return item.value == defaultValue;
            });
            _filterResQueryLabel = optionsDataInit.filter(function (item) {
              return item.label == defaultValue;
            });
            _filterRes2 = _filterResQueryValue;
            if (_filterResQueryValue.length === 0) _filterRes2 = _filterResQueryLabel;

            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof defaultValue === 'undefined' || defaultValue === '') {
              // Do not use `init`, otherwise the query will revert to the default value if there is no value
              setControlValue('');
              setControlLabel('');
            } else {
              if (_filterRes2.length > 0) {
                setControlValue(_filterRes2[0].value);
                setControlLabel(formatIndentVal(_filterRes2[0].label));
              }
            }

            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {
              if ((typeof defaultValue === 'undefined' || defaultValue === '') && init) {
                setControlArr({
                  labels: [],
                  values: []
                });
                setItemSelectedAll(false);
              }
              if (typeof defaultValue !== 'undefined' && defaultValue !== '' && (multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.data) !== null) {
                // initialize default values of Multiple selection
                _currentData2 = multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.data;
                setControlArr({
                  labels: _currentData2.labels,
                  values: _currentData2.values
                });

                //
                _values2 = typeof defaultValue !== 'undefined' ? VALUE_BY_BRACKETS ? (0,extract.extractContentsOfBrackets)(defaultValue) : defaultValue.split(',') : [];
                _values2.forEach(function (_value, _index) {
                  if (!multiSelControlOptionExist(_currentData2.values, _value) && typeof _currentData2.values[_index] !== 'undefined') {
                    var _filterRes3 = [];
                    _filterRes3 = [{
                      value: _currentData2.values[_index],
                      label: _currentData2.labels[_index],
                      queryString: _currentData2.queryStrings[_index]
                    }];
                    setControlArr(function (prevState) {
                      return {
                        labels: unique([].concat(src_toConsumableArray(prevState.labels), [typeof _filterRes3[0] !== 'undefined' ? _filterRes3[0].label : '']).filter(function (v) {
                          return v !== '';
                        })),
                        values: unique([].concat(src_toConsumableArray(prevState.values), [typeof _filterRes3[0] !== 'undefined' ? _filterRes3[0].value : '']).filter(function (v) {
                          return v !== '';
                        }))
                      };
                    });
                  }
                });

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();
              }
            }

            // STEP 5: ===========
            //
            setOptionsData(optionsDataInit); // data must be initialized

            //
            setOrginalData(optionsDataInit);

            // STEP 6: ===========
            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(selectInputRef.current, valueInputRef.current, defaultValue, optionsDataInit, incomingData);

            //
            return _context2.abrupt("return", optionsDataInit);
          case 35:
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
    setOptionsData(orginalData);

    // update temporary value
    setControlTempValue(null);

    // Unlocks the page
    if (LOCK_BODY_SCROLL) enableBodyScroll(document.querySelector('body'));
  }
  function activate() {
    // show list
    setIsOpen(true);

    // restore data
    setOptionsData(orginalData);

    // update temporary value
    setControlTempValue('');

    // Locks the page
    //
    // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    if (LOCK_BODY_SCROLL) disableBodyScroll(document.querySelector('body'));
  }
  function rootWrapperSwitch() {
    // remove active styles from the root container and activate current wrapper
    [].slice.call(document.querySelectorAll('.multifunc-select__wrapper')).forEach(function (node) {
      node.classList.remove('active', 'focus');
    });
    rootRef.current.classList.add('active', 'focus');
  }
  function handleSelect(_x4) {
    return _handleSelect.apply(this, arguments);
  }
  function _handleSelect() {
    _handleSelect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el) {
      var dataInput,
        valueArr,
        labelArr,
        index,
        incomingOptionsData,
        _data,
        _value,
        _label,
        currentControlValueArr,
        currentControlLabelArr,
        _value2,
        _label2,
        _currentControlValueArr,
        _currentControlLabelArr,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dataInput = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
            valueArr = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : [];
            labelArr = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : [];
            if (!(typeof el === 'undefined')) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return");
          case 5:
            // get incoming options from `data-options` of component
            // It is usually used for complex cascading `<MultiFuncSelect />` components
            incomingOptionsData = valueInputRef.current.dataset.options; // cancel
            if (!(MULTI_SEL_VALID && isOpen)) {
              cancel();
            }

            //remove focus style
            if (!(MULTI_SEL_VALID && isOpen)) {
              rootRef.current.classList.remove('focus');
            }

            // update value * label
            if (dataInput) {
              // using keyboard
              _data = JSON.parse(dataInput);
              _value = _data.value;
              _label = _data.label; // ++++++++++++++++++++
              // Single selection
              // ++++++++++++++++++++
              setControlValue(_value);
              setControlLabel(formatIndentVal(_label));

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof incomingOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value;
              }

              // ++++++++++++++++++++
              // Multiple selection
              // ++++++++++++++++++++
              currentControlValueArr = JSON.parse(JSON.stringify(valueArr));
              currentControlLabelArr = JSON.parse(JSON.stringify(labelArr));
              if (MULTI_SEL_VALID) {
                if (multiSelControlOptionExist(valueArr, _value)) {
                  setControlArr(function (prevState) {
                    // update temporary value
                    setControlTempValue(prevState.labels.length >= 0 ? null : VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(prevState.labels) : prevState.labels.join(','));
                    return {
                      labels: removeItemOnce(prevState.labels, formatIndentVal(_label)),
                      values: removeItemOnce(prevState.values, _value)
                    };
                  });
                  currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
                  currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label));
                } else {
                  setControlArr(function (prevState) {
                    // update temporary value
                    setControlTempValue(prevState.labels.length >= 0 ? null : VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(prevState.labels) : prevState.labels.join(','));
                    return {
                      labels: [].concat(src_toConsumableArray(prevState.labels), [formatIndentVal(_label)]),
                      values: [].concat(src_toConsumableArray(prevState.values), [_value])
                    };
                  });
                  currentControlValueArr.push(_value);
                  currentControlLabelArr.push(_label);
                }

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();
              }

              //
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, !MULTI_SEL_VALID ? optionsData[index] : {
                  labels: currentControlLabelArr.map(function (v) {
                    return v.toString();
                  }),
                  values: currentControlValueArr.map(function (v) {
                    return v.toString();
                  }),
                  labelsOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlLabelArr.map(function (v) {
                    return v.toString();
                  })) : currentControlLabelArr.map(function (v) {
                    return v.toString();
                  }).join(','),
                  valuesOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlValueArr.map(function (v) {
                    return v.toString();
                  })) : currentControlValueArr.map(function (v) {
                    return v.toString();
                  }).join(',')
                });

                //
                selectInputRef.current.blur();
              }
            } else {
              index = typeof el.currentTarget !== 'undefined' ? el.currentTarget.dataset.index : el.dataset.index;
              _value2 = optionsData[index].value;
              _label2 = optionsData[index].label; // ++++++++++++++++++++
              // Single selection
              // ++++++++++++++++++++
              setControlValue(_value2);
              setControlLabel(formatIndentVal(_label2));

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof incomingOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value2;
              }

              // ++++++++++++++++++++
              // Multiple selection
              // ++++++++++++++++++++
              _currentControlValueArr = JSON.parse(JSON.stringify(controlArr.values));
              _currentControlLabelArr = JSON.parse(JSON.stringify(controlArr.labels));
              if (MULTI_SEL_VALID) {
                if (multiSelControlOptionExist(controlArr.values, _value2)) {
                  setControlArr(function (prevState) {
                    // update temporary value
                    setControlTempValue(prevState.labels.length >= 0 ? null : VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(prevState.labels) : prevState.labels.join(','));
                    return {
                      labels: removeItemOnce(prevState.labels, formatIndentVal(_label2)),
                      values: removeItemOnce(prevState.values, _value2)
                    };
                  });
                  _currentControlValueArr = removeItemOnce(_currentControlValueArr, _value2);
                  _currentControlLabelArr = removeItemOnce(_currentControlLabelArr, formatIndentVal(_label2));
                } else {
                  setControlArr(function (prevState) {
                    // update temporary value
                    setControlTempValue(prevState.labels.length >= 0 ? null : VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(prevState.labels) : prevState.labels.join(','));
                    return {
                      labels: [].concat(src_toConsumableArray(prevState.labels), [formatIndentVal(_label2)]),
                      values: [].concat(src_toConsumableArray(prevState.values), [_value2])
                    };
                  });
                  _currentControlValueArr.push(_value2);
                  _currentControlLabelArr.push(_label2);
                }

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();
              }

              //
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, !MULTI_SEL_VALID ? optionsData[index] : {
                  labels: _currentControlLabelArr.map(function (v) {
                    return v.toString();
                  }),
                  values: _currentControlValueArr.map(function (v) {
                    return v.toString();
                  }),
                  labelsOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(_currentControlLabelArr.map(function (v) {
                    return v.toString();
                  })) : _currentControlLabelArr.map(function (v) {
                    return v.toString();
                  }).join(','),
                  valuesOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(_currentControlValueArr.map(function (v) {
                    return v.toString();
                  })) : _currentControlValueArr.map(function (v) {
                    return v.toString();
                  }).join(',')
                });

                //
                selectInputRef.current.blur();
              }
            }
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _handleSelect.apply(this, arguments);
  }
  function handleSelectAll(event) {
    event.preventDefault();
    var onChangeSelectAll = function onChangeSelectAll(labelsArr, valuesArr) {
      if (typeof onChange === 'function') {
        onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, {
          labels: labelsArr.map(function (v) {
            return v.toString();
          }),
          values: valuesArr.map(function (v) {
            return v.toString();
          }),
          labelsOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(labelsArr.map(function (v) {
            return v.toString();
          })) : labelsArr.map(function (v) {
            return v.toString();
          }).join(','),
          valuesOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(valuesArr.map(function (v) {
            return v.toString();
          })) : valuesArr.map(function (v) {
            return v.toString();
          }).join(',')
        });

        //
        selectInputRef.current.blur();
      }
    };
    setItemSelectedAll(function (prevState) {
      if (!prevState) {
        setControlArr(function (prevData) {
          var currentControlValueArr = [].concat(src_toConsumableArray(prevData.values), src_toConsumableArray(optionsData.map(function (v) {
            return v.value;
          }))).filter(function (item, index, arr) {
            return arr.indexOf(item, 0) === index;
          });
          var currentControlLabelArr = [].concat(src_toConsumableArray(formatIndentVal(prevData.labels)), src_toConsumableArray(formatIndentVal(optionsData.map(function (v) {
            return v.label;
          })))).filter(function (item, index, arr) {
            return arr.indexOf(item, 0) === index;
          });

          //
          onChangeSelectAll(currentControlLabelArr, currentControlValueArr);
          return {
            labels: currentControlLabelArr,
            values: currentControlValueArr
          };
        });
      } else {
        setControlArr(function (prevData) {
          var currentControlValueArr = removeItems(prevData.values, optionsData.map(function (v) {
            return v.value;
          }));
          var currentControlLabelArr = removeItems(formatIndentVal(prevData.labels), formatIndentVal(optionsData.map(function (v) {
            return v.label;
          })));

          //
          onChangeSelectAll(currentControlLabelArr, currentControlValueArr);
          return {
            labels: currentControlLabelArr,
            values: currentControlValueArr
          };
        });
      }
      return !prevState;
    });
  }
  function handleMultiControlItemRemove(event) {
    event.preventDefault();
    var valueToRemove = String(event.currentTarget.dataset.item);
    var getCurrentIndex = controlArr.values.findIndex(function (item) {
      return item.toString() === valueToRemove;
    });
    var currentControlValueArr = JSON.parse(JSON.stringify(controlArr.values));
    var currentControlLabelArr = JSON.parse(JSON.stringify(controlArr.labels));
    var _value = valueToRemove;
    var _label = controlArr.labels[getCurrentIndex];
    setControlArr(function (prevState) {
      // update temporary value
      setControlTempValue(prevState.labels.length >= 0 ? null : VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(prevState.labels) : prevState.labels.join(','));
      return {
        labels: removeItemOnce(prevState.labels, formatIndentVal(_label)),
        values: removeItemOnce(prevState.values, _value)
      };
    });
    currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
    currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label));

    // Appropriate multi-item container height
    adjustMultiControlContainerHeight();

    //
    if (typeof onChange === 'function') {
      onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, {
        labels: currentControlLabelArr.map(function (v) {
          return v.toString();
        }),
        values: currentControlValueArr.map(function (v) {
          return v.toString();
        }),
        labelsOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlLabelArr.map(function (v) {
          return v.toString();
        })) : currentControlLabelArr.map(function (v) {
          return v.toString();
        }).join(','),
        valuesOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlValueArr.map(function (v) {
          return v.toString();
        })) : currentControlValueArr.map(function (v) {
          return v.toString();
        }).join(',')
      });

      //
      selectInputRef.current.blur();
    }
  }
  function handleShowList() {
    //
    rootWrapperSwitch();

    //
    if (!isOpen) {
      activate();

      // window position
      setTimeout(function () {
        getPlacement(listRef.current);
      }, 0);
    }
  }
  function handleFetch() {
    return _handleFetch.apply(this, arguments);
  }
  function _handleFetch() {
    _handleFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var inputVal,
        searchStr,
        _oparams,
        _params,
        res,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            inputVal = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
            // data init
            searchStr = typeof inputVal === 'string' ? inputVal : controlTempValue || controlTempValue === '' ? controlTempValue : '';
            _oparams = fetchFuncMethodParams || [];
            _params = _oparams.map(function (item) {
              return item !== '$QUERY_STRING' ? item : searchStr;
            }); // if empty
            if (!(searchStr.replace(/\s/g, "") === '')) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return", []);
          case 6:
            _context4.next = 8;
            return fetchData(_params.join(','), value, false);
          case 8:
            res = _context4.sent;
            return _context4.abrupt("return", res);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _handleFetch.apply(this, arguments);
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
    if (val.replace(/\s/g, "") === '') {
      // No elements found. Consider changing the search query.
      // restore data
      setOptionsData(orginalData);
    } else {
      handleChangeFetchSafe(val);
    }

    // window position
    setTimeout(function () {
      getPlacement(listRef.current);
    }, 0);
  }

  //
  function handleFocus(event) {
    rootRef.current.classList.add('focus');

    // update temporary value
    setControlTempValue('');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleBlur(event) {
    //remove focus style
    if (!(MULTI_SEL_VALID && isOpen)) {
      rootRef.current.classList.remove('focus');
    }
    setTimeout(function () {
      // cancel
      if (!(MULTI_SEL_VALID && isOpen)) {
        cancel();
      }
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, 300);
  }
  function handleClose(event) {
    if (event.target.closest(".".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'multifunc-select__wrapper')) === null) {
      // cancel
      cancel();
    }
  }
  function generateInputFocusStr() {
    return controlTempValue || controlTempValue === '' ? controlTempValue.length === 0 ? '|' : controlTempValue : placeholder || '';
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
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Call a function when the component has been rendered completely
    //--------------
    onLoad === null || onLoad === void 0 ? void 0 : onLoad(selectInputRef.current, valueInputRef.current, value);

    // update incoming data
    //--------------
    setIncomingData(data);

    // data init
    //--------------
    var _oparams = fetchFuncMethodParams || [];
    var _params = _oparams.map(function (item) {
      return item !== '$QUERY_STRING' ? item : fetchTrigger ? '------' : '';
    });
    fetchData(_params.join(','), value);

    // keyboard listener
    //--------------
    var listener = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var res, currentData, currentControlValueArr, currentControlLabelArr, _options;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              res = null;
              if (!(event.code === "Enter" || event.code === "NumpadEnter")) {
                _context.next = 10;
                break;
              }
              if (!(listRef.current === null || !rootRef.current.classList.contains('active'))) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              if (!(listRef.current !== null)) {
                _context.next = 9;
                break;
              }
              _context.next = 7;
              return listRef.current.dataset.data;
            case 7:
              currentData = _context.sent;
              if (typeof currentData !== 'undefined') {
                currentControlValueArr = [];
                currentControlLabelArr = [];
                _options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.no-match)'));
                _options.forEach(function (node) {
                  node.classList.remove('active');
                  if (node.classList.contains('item-selected')) {
                    currentControlValueArr.push(node.dataset.value);
                    currentControlLabelArr.push(node.dataset.label);
                  }
                });
                handleSelect(null, currentData, currentControlValueArr, currentControlLabelArr);

                //
                if (typeof onChange === 'function') {
                  onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, !MULTI_SEL_VALID ? JSON.parse(currentData) : {
                    labels: currentControlLabelArr.map(function (v) {
                      return v.toString();
                    }),
                    values: currentControlValueArr.map(function (v) {
                      return v.toString();
                    }),
                    labelsOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlLabelArr.map(function (v) {
                      return v.toString();
                    })) : currentControlLabelArr.map(function (v) {
                      return v.toString();
                    }).join(','),
                    valuesOfString: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(currentControlValueArr.map(function (v) {
                      return v.toString();
                    })) : currentControlValueArr.map(function (v) {
                      return v.toString();
                    }).join(',')
                  });

                  //
                  selectInputRef.current.blur();
                }
              }
            case 9:
              return _context.abrupt("return");
            case 10:
              _context.t0 = event.code;
              _context.next = _context.t0 === "ArrowLeft" ? 13 : _context.t0 === "ArrowRight" ? 14 : _context.t0 === "ArrowUp" ? 15 : _context.t0 === "ArrowDown" ? 19 : 23;
              break;
            case 13:
              return _context.abrupt("break", 23);
            case 14:
              return _context.abrupt("break", 23);
            case 15:
              _context.next = 17;
              return optionFocus('decrease');
            case 17:
              res = _context.sent;
              return _context.abrupt("break", 23);
            case 19:
              _context.next = 21;
              return optionFocus('increase');
            case 21:
              res = _context.sent;
              return _context.abrupt("break", 23);
            case 23:
              // temporary data
              if (res !== null) listRef.current.dataset.data = res.dataset.itemdata;
            case 24:
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
    // windowScrollUpdate();

    return function () {
      if (LOCK_BODY_SCROLL) clearAllBodyScrollLocks();
      document.removeEventListener("keydown", listener);
      document.removeEventListener('pointerdown', handleClose);
      window.removeEventListener('scroll', windowScrollUpdate);
      window.removeEventListener('touchmove', windowScrollUpdate);
    };
  }, [value, options, data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, label ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "multifunc-select__label"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    id: "multifunc-select__wrapper-".concat(idRes),
    className: "multifunc-select__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative', " ").concat(MULTI_SEL_VALID ? 'multiple-selection' : '', " ").concat(isOpen ? 'active focus' : ''),
    ref: rootRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootSingleRef,
    className: "position-relative"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
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
    onClick: typeof readOnly === 'undefined' || !readOnly ? handleShowList : function () {
      return void 0;
    },
    onChange: handleChange,
    onCompositionStart: handleComposition,
    onCompositionUpdate: handleComposition,
    onCompositionEnd: handleComposition,
    disabled: disabled || null,
    required: required || null,
    readOnly: INPUT_READONLY,
    value: controlTempValue || controlTempValue === '' ? controlTempValue : MULTI_SEL_VALID ? VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(formatIndentVal(controlArr.labels).map(function (v) {
      return stripHTML(v);
    })) : formatIndentVal(controlArr.labels).map(function (v) {
      return stripHTML(v);
    }).join(',') : stripHTML(controlLabel) // do not use `defaultValue`
    ,

    style: _objectSpread({
      cursor: 'pointer',
      borderBottomWidth: MULTI_SEL_VALID ? '0' : '1px'
    }, style),
    autoComplete: "off"
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
    ref: valueInputRef,
    type: "hidden",
    id: idRes,
    name: name,
    value: MULTI_SEL_VALID ? VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(controlArr.values) : controlArr.values.join(',') : controlValue // do not use `defaultValue`
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "arrow position-absolute top-0 end-0 me-2 mt-1",
    style: {
      translate: 'all .2s',
      transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)',
      pointerEvents: 'none',
      display: fetchTrigger ? 'none' : 'inline-block'
    }
  }, controlArrow ? controlArrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 -4.5 20 20"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(-180.000000, -6684.000000)",
    className: "arrow-fill-g",
    fill: "#a5a5a5"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(56.000000, 160.000000)"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"
  })))))), fetchTrigger ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "multifunc-select-multi__control-searchbtn position-absolute top-0 end-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "btn border-end-0 rounded-pill",
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "#a5a5a5",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  }))))) : null), MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootMultiRef,
    className: "multifunc-select-multi__wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "multifunc-select-multi__control-wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: "multifunc-select-multi__list"
  }, controlArr.labels.map(function (item, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      key: index
    }, stripHTML(item), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      href: "#",
      tabIndex: -1,
      onClick: handleMultiControlItemRemove,
      "data-item": controlArr.values[index]
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      width: "10px",
      height: "10px",
      viewBox: "0 0 1024 1024"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      fill: "#000",
      d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
    }))));
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: "multifunc-select-multi__list-item-placeholder ".concat(typeof placeholder === 'undefined' || placeholder === '' ? 'hide' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "multifunc-select-multi__control-blinking-cursor ".concat(generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined' ? 'control-placeholder' : '', " ").concat(generateInputFocusStr() === '|' ? 'animated' : '')
  }, generateInputFocusStr()))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "arrow position-absolute top-0 end-0 me-2 mt-1",
    style: {
      translate: 'all .2s',
      transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)',
      pointerEvents: 'none',
      display: fetchTrigger ? 'none' : 'inline-block'
    }
  }, controlArrow ? controlArrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 -4.5 20 20"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(-180.000000, -6684.000000)",
    className: "arrow-fill-g",
    fill: "#a5a5a5"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(56.000000, 160.000000)"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"
  })))))), fetchTrigger ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "multifunc-select-multi__control-searchbtn position-absolute top-0 end-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "btn border-end-0 rounded-pill",
    onClick: handleFetch
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "#a5a5a5",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  }))))) : null) : null, optionsData && !hasErr ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listRef,
    className: "list-group position-absolute border shadow small ".concat(winWidth ? '' : 'w-100'),
    style: {
      marginTop: '0.2rem',
      zIndex: depth ? depth : 100,
      width: WIN_WIDTH
    },
    role: "tablist"
  }, controlTempValue !== null && optionsData.length === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "list-group-item list-group-item-action no-match",
    disabled: true
  }, fetchNoneInfo || 'No match yet')) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "rounded",
    style: {
      backgroundColor: 'var(--bs-list-group-bg)'
    },
    ref: listContentRef
  }, MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light multifunc-select-multi__control-select-all",
    role: "tab",
    style: {
      display: multiSelect !== null && multiSelect !== void 0 && multiSelect.selectAll ? 'block' : 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: -1,
    href: "#",
    onClick: handleSelectAll,
    className: "btn btn-secondary",
    dangerouslySetInnerHTML: {
      __html: "".concat((multiSelect === null || multiSelect === void 0 ? void 0 : multiSelect.selectAllLabel) || 'Select all options')
    }
  }))) : null, optionsData ? optionsData.map(function (item, index) {
    var startItemBorder = index === 0 ? 'border-top-0' : '';
    var endItemBorder = index === optionsData.length - 1 ? 'border-bottom-0' : '';
    if (!MULTI_SEL_VALID) {
      // ++++++++++++++++++++
      // Single selection
      // ++++++++++++++++++++
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
        tabIndex: -1,
        onClick: handleSelect,
        type: "button",
        "data-index": index,
        key: index,
        className: "list-group-item list-group-item-action border-start-0 border-end-0 ".concat(startItemBorder, " ").concat(endItemBorder, " border-bottom-0 ").concat(typeof item.disabled === 'undefined' ? '' : item.disabled == true ? 'disabled' : ''),
        "data-value": "".concat(item.value),
        "data-label": "".concat(item.label),
        "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
        "data-itemdata": JSON.stringify(item),
        role: "tab",
        dangerouslySetInnerHTML: {
          __html: item.label
        }
      });
    } else {
      // ++++++++++++++++++++
      // Multiple selection
      // ++++++++++++++++++++
      var itemSelected = multiSelControlOptionExist(controlArr.values, item.value) ? true : false;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
        tabIndex: -1,
        onClick: handleSelect,
        type: "button",
        "data-index": index,
        key: index,
        className: "list-group-item list-group-item-action border-start-0 border-end-0 ".concat(startItemBorder, " ").concat(endItemBorder, " border-bottom-0 ").concat(itemSelected ? 'list-group-item-secondary item-selected' : '', " ").concat(typeof item.disabled === 'undefined' ? '' : item.disabled == true ? 'disabled' : ''),
        "data-value": "".concat(item.value),
        "data-label": "".concat(item.label),
        "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
        "data-itemdata": JSON.stringify(item),
        role: "tab"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        className: "d-inline-block me-1 "
      }, !itemSelected ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "1.2em",
        height: "1.2em",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z",
        stroke: "#000000",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "1.2em",
        height: "1.2em",
        fill: "#000000",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: item.label
        }
      }));
    }
  }) : null)))) : null));
});
/* harmony default export */ const src = (MultiFuncSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});