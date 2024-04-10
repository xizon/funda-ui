(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"), require("react-dom"));
	else
		root["RPB"] = factory(root["React"], root["ReactDOM"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) => {
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

/***/ 378:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Get the -webkit-transition-duration property
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Number}    - Returns a pure number.
 */
function getTransitionDuration(el) {
  if (_typeof(el) === ( true ? "undefined" : 0)) {
    return 0;
  }
  var style = window.getComputedStyle(el),
    duration = style.webkitTransitionDuration,
    delay = style.webkitTransitionDelay;
  if (_typeof(duration) != ( true ? "undefined" : 0)) {
    // fix miliseconds vs seconds
    duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
    delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
    return duration;
  } else {
    return 0;
  }
}

/**
 * Get an object's absolute position on the page
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el) {
  var windowWidth = window.innerWidth,
    leftPos = null,
    topPos = null;
  if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
    leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
    topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
  } else {
    // width and height in pixels, including padding and border
    // Corresponds to outerWidth(), outerHeight()
    leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
    topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
  }
  return {
    'left': leftPos,
    'top': topPos
  };
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left. 
 */
function getOffset(el) {
  var res = {
    top: 0,
    left: 0
  };
  var box = el.getBoundingClientRect();
  var top = 0,
    left = 0;

  //Include scrollbar and border
  top = box.top + window.pageYOffset - document.documentElement.clientTop;
  left = box.left + window.pageXOffset - document.documentElement.clientLeft;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el) {
  var res = {
    top: 0,
    left: 0
  };
  var top = el.offsetTop ? el.offsetTop : 0,
    left = el.offsetLeft ? el.offsetLeft : 0;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the absolute position of the stage element
 * 
 * @param {Element} domElement  - A DOM node
 * @param {Number | String} left     - left offset
 * @param {Number | String} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!parseInt(left)) {
    left = 0;
  } else {
    left = parseInt(left);
  }
  if (!parseInt(top)) {
    top = 0;
  } else {
    top = parseInt(top);
  }
  var box = domElement.getBoundingClientRect();
  var body = document.body;
  var docElem = document.documentElement;
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  var attr = {};
  attr.y = box.top + scrollTop - clientTop + top;
  attr.x = box.left + scrollLeft - clientLeft + left;
  attr.width = box.width;
  attr.height = box.height;
  return attr;
}
module.exports = {
  getTransitionDuration: getTransitionDuration,
  getAbsoluteCoordinates: getAbsoluteCoordinates,
  getOffset: getOffset,
  getPosition: getPosition,
  getAbsolutePositionOfStage: getAbsolutePositionOfStage
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

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787), __webpack_require__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        },

        /***/156: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1708__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1708__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      (function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_1708__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1708__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_1708__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1708__.o(definition, key) && !__nested_webpack_require_1708__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_1708__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1708__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (function () {
        __nested_webpack_require_1708__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1708__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1708__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1708__(156);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
        var RootPortal = function RootPortal(props) {
          var containerClassName = props.containerClassName,
            show = props.show,
            children = props.children;
          var containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

          // Move HTML templates to tag end body </body>
          // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
          // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
          // ###
          // ###
          // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            containerRef.current = document.createElement('div');
            containerRef.current.className = "root-portal-container ".concat(containerClassName || '');
            document.body.appendChild(containerRef.current);
            return function () {
              if (containerRef.current) {
                containerRef.current.remove();
              }
            };
          }, []);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, containerRef.current && show && /*#__PURE__*/(0, react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, containerRef.current));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = RootPortal;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
// EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
var cjs = __webpack_require__(909);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ./src/utils/performance.js
var performance = __webpack_require__(342);
;// CONCATENATED MODULE: ./src/Group.tsx

function Group(props) {
  var level = props.level,
    columnTitle = props.columnTitle,
    data = props.data,
    cleanNodeBtnClassName = props.cleanNodeBtnClassName,
    cleanNodeBtnContent = props.cleanNodeBtnContent,
    selectEv = props.selectEv;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, data.map(function (item, index) {
    if (item.id.toString().indexOf('$EMPTY_ID_') < 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        key: index,
        "data-opt": "true",
        "data-index": index,
        "data-id": item.id,
        "data-value": JSON.stringify(item),
        "data-level": level,
        "data-query": item.queryId,
        className: "cas-select-e2e__opt ".concat(item.current ? 'active' : ''),
        dangerouslySetInnerHTML: {
          __html: typeof item.label !== 'undefined' ? item.label : item.name // "item.label" usually uses hierarchical style
        },

        onClick: function onClick(e) {
          return selectEv === null || selectEv === void 0 ? void 0 : selectEv(e, item, index);
        }
      });
    } else {
      return columnTitle[level] === '' ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", {
        key: index,
        className: "cas-select-e2e__opt-header"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: columnTitle[level]
        }
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "cas-select-e2e__opt-header__clean"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        tabIndex: -1,
        href: "#",
        className: cleanNodeBtnClassName || 'btn btn-link p-0 m-0 text-decoration-none',
        "data-opt": "true",
        "data-opt-header": "true",
        "data-index": index,
        "data-id": item.id,
        "data-value": JSON.stringify(item),
        "data-level": level,
        "data-query": item.queryId,
        onClick: function onClick(e) {
          return selectEv === null || selectEv === void 0 ? void 0 : selectEv(e, item, index);
        }
      }, cleanNodeBtnContent || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "12px",
        height: "12px",
        viewBox: "0 0 16 16"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        fill: "inherit",
        d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
        fillRule: "evenodd"
      })))));
    }
  }));
}
// EXTERNAL MODULE: ./src/utils/extract.js
var extract = __webpack_require__(368);
// EXTERNAL MODULE: ./src/utils/convert.js
var convert = __webpack_require__(498);
// EXTERNAL MODULE: ./src/utils/get-element-property.js
var get_element_property = __webpack_require__(378);
// EXTERNAL MODULE: ./src/utils/tree.js
var tree = __webpack_require__(602);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["popupRef", "wrapperClassName", "controlClassName", "controlExClassName", "exceededSidePosOffset", "disabled", "required", "value", "label", "placeholder", "name", "id", "extractValueByBraces", "destroyParentIdMatch", "columnTitle", "depth", "loader", "displayResult", "displayResultArrow", "controlArrow", "valueType", "showCloseBtn", "style", "tabIndex", "triggerClassName", "triggerContent", "cleanNodeBtnClassName", "cleanNodeBtnContent", "fetchArray", "onFetch", "onChange", "onBlur", "onFocus"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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








var CascadingSelectE2E = function CascadingSelectE2E(props) {
  var popupRef = props.popupRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlExClassName = props.controlExClassName,
    exceededSidePosOffset = props.exceededSidePosOffset,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    placeholder = props.placeholder,
    name = props.name,
    id = props.id,
    extractValueByBraces = props.extractValueByBraces,
    destroyParentIdMatch = props.destroyParentIdMatch,
    columnTitle = props.columnTitle,
    depth = props.depth,
    loader = props.loader,
    displayResult = props.displayResult,
    displayResultArrow = props.displayResultArrow,
    controlArrow = props.controlArrow,
    valueType = props.valueType,
    showCloseBtn = props.showCloseBtn,
    style = props.style,
    tabIndex = props.tabIndex,
    triggerClassName = props.triggerClassName,
    triggerContent = props.triggerContent,
    cleanNodeBtnClassName = props.cleanNodeBtnClassName,
    cleanNodeBtnContent = props.cleanNodeBtnContent,
    fetchArray = props.fetchArray,
    onFetch = props.onFetch,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var POS_OFFSET = 0;
  var EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
  var VALUE_BY_BRACES = typeof extractValueByBraces === 'undefined' ? true : extractValueByBraces;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var valRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var listRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(popupRef, function () {
    return {
      close: function close() {
        cancel();
      }
    };
  }, [popupRef]);

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // DO NOT USE `useState()` for `allData`,, `optData`, `dictionaryData`, `listData`, `selectedData`, `selectedDataByClick`,  
  // because the list uses vanilla JS DOM events which will cause the results of useState not to be displayed in real time.
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // current data depth (GLOBAL)
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentDataDepth = _useState2[0],
    setCurrentDataDepth = _useState2[1];

  // all data from fetched data (GLOBAL)
  var allData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);

  // options data (GLOBAL)
  var optData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);

  // dictionary data
  var dictionaryData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    columnTitleData = _useState6[0],
    setColumnTitleData = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasErr = _useState8[0],
    setHasErr = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    firstDataFeched = _useState10[0],
    setFirstDataFeched = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ''),
    _useState12 = _slicedToArray(_useState11, 2),
    changedVal = _useState12[0],
    setChangedVal = _useState12[1];
  var windowScrollUpdate = (0,performance.debounce)(handleScrollEvent, 500);

  //for variable 
  var listData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var selectedData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    labels: [],
    values: [],
    queryIds: []
  });

  // destroy `parent_id` match
  var selectedDataByClick = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    labels: [],
    values: [],
    queryIds: []
  });
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isShow = _useState14[0],
    setIsShow = _useState14[1];

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
    popwinPosInit(false);
  }
  function popwinPosInit() {
    var showAct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (valRef.current === null) return;

    // update modal position
    var _modalRef = document.querySelector("#cas-select-e2e__items-wrapper-".concat(idRes));
    var _triggerRef = valRef.current;

    // console.log(getAbsolutePositionOfStage(_triggerRef));

    if (_modalRef === null) return;
    var _getAbsolutePositionO = (0,get_element_property.getAbsolutePositionOfStage)(_triggerRef),
      x = _getAbsolutePositionO.x,
      y = _getAbsolutePositionO.y,
      width = _getAbsolutePositionO.width,
      height = _getAbsolutePositionO.height;
    var _triggerBox = _triggerRef.getBoundingClientRect();
    var targetPos = '';

    // STEP 1:
    //-----------
    // display wrapper
    if (showAct) _modalRef.classList.add('active');

    // STEP 2:
    //-----------
    // Detect position
    if (window.innerHeight - _triggerBox.top > 100) {
      targetPos = 'bottom';
    } else {
      targetPos = 'top';
    }

    // STEP 3:
    //-----------
    // Adjust position
    if (targetPos === 'top') {
      _modalRef.style.left = x + 'px';
      //_modalRef.style.top = y - POS_OFFSET - (listRef.current.clientHeight) - 2 + 'px';
      _modalRef.style.top = 'auto';
      _modalRef.style.bottom = window.innerHeight - _triggerBox.top + POS_OFFSET + 2 + 'px';
      _modalRef.style.setProperty('position', 'fixed', 'important');
      _modalRef.classList.add('pos-top');
    }
    if (targetPos === 'bottom') {
      _modalRef.style.left = x + 'px';
      _modalRef.style.bottom = 'auto';
      _modalRef.style.top = y + height + POS_OFFSET + 'px';
      _modalRef.style.setProperty('position', 'absolute', 'important');
      _modalRef.classList.remove('pos-top');
    }

    // STEP 4:
    //-----------
    // Determine whether it exceeds the far right or left side of the screen
    var _modalContent = _modalRef;
    var _modalBox = _modalContent.getBoundingClientRect();
    if (typeof _modalContent.dataset.offset === 'undefined') {
      if (_modalBox.right > window.innerWidth) {
        var _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition;
        _modalContent.style.marginLeft = "-".concat(_modalOffsetPosition, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }

      if (_modalBox.left < 0) {
        var _modalOffsetPosition2 = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.dataset.offset = _modalOffsetPosition2;
        _modalContent.style.marginLeft = "".concat(_modalOffsetPosition2, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }
    }
  }

  function popwinPosHide() {
    var _modalRef = document.querySelector("#cas-select-e2e__items-wrapper-".concat(idRes));
    if (_modalRef !== null) {
      // remove classnames and styles
      _modalRef.classList.remove('active');
    }
  }
  function updateColDisplay(useFetch) {
    var emptyAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var level = arguments.length > 2 ? arguments[2] : undefined;
    if (listRef.current === null) return;
    var latestDisplayColIndex = 0;
    var currentItemsInner = listRef.current.querySelector('.cas-select-e2e__items-inner');
    if (currentItemsInner !== null) {
      var colItemsWrapper = [].slice.call(currentItemsInner.querySelectorAll('.cas-select-e2e__items-col'));
      colItemsWrapper.forEach(function (perCol) {
        perCol.classList.remove('hide-col');
      });
      colItemsWrapper.some(function (perCol, i) {
        var hasActive = [].slice.call(perCol.querySelectorAll('[data-opt]')).some(function (el) {
          return el.classList.contains('active');
        });
        if (!hasActive) {
          latestDisplayColIndex = i;
          return true;
        }
        return false;
      });

      // remove columns behind the current empty trigger
      colItemsWrapper.forEach(function (perCol, i) {
        if (!emptyAction) {
          if (useFetch) {
            if (i > latestDisplayColIndex && latestDisplayColIndex > 0) perCol.classList.add('hide-col');
          } else {
            if (i === latestDisplayColIndex && latestDisplayColIndex > 0) perCol.classList.add('hide-col');
          }
        } else {
          if (typeof level !== 'undefined' && Number.isInteger(level)) {
            if (i > level) perCol.classList.add('hide-col');
          }
        }
      });
    }
  }
  function cancel() {
    // hide list
    setIsShow(false);
    popwinPosHide();
  }
  function activate() {
    // show list
    setIsShow(true);

    // Execute the fetch task
    if (!firstDataFeched) {
      setLoading(true);
      setFirstDataFeched(true);
      doFetch(false, currentDataDepth, 0, false);
    }

    // window position
    setTimeout(function () {
      popwinPosInit();
    }, 0);
  }
  function fetchData(_x2, _x3, _x4) {
    return _fetchData.apply(this, arguments);
  } //
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_fetchArray, params, dataDepth) {
      var parentId,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchCallback,
        hierarchical,
        indentation,
        doubleIndent,
        INDENT_PLACEHOLDER,
        INDENT_LAST_PLACEHOLDER,
        response,
        _ORGIN_DATA,
        _TEMP_ALL_DATA,
        _EMPTY_SUPPORTED_DATA,
        _temp_optData,
        childList,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            parentId = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
            fetchFuncAsync = _fetchArray.fetchFuncAsync;
            fetchFuncMethod = _fetchArray.fetchFuncMethod;
            fetchCallback = _fetchArray.fetchCallback; //
            hierarchical = _fetchArray.hierarchical;
            indentation = _fetchArray.indentation;
            doubleIndent = _fetchArray.doubleIndent;
            INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
            INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context.next = 34;
              break;
            }
            //
            setLoading(true);
            _context.next = 13;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 13:
            response = _context.sent;
            _ORGIN_DATA = response.data;
            _TEMP_ALL_DATA = []; // loading 
            setLoading(false);
            if (!(typeof _ORGIN_DATA[0] === 'undefined')) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return");
          case 19:
            // reset data structure
            if (typeof fetchCallback === 'function') {
              _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].id === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            // STEP 0-1: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              _ORGIN_DATA = (0,tree.addTreeDepth)(_ORGIN_DATA);
              (0,tree.addTreeIndent)(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // STEP 0-2: ===========
            // add data depth
            _ORGIN_DATA.forEach(function (item) {
              item.itemDepth = dataDepth;
            });
            if (dataDepth === 0) {
              // STEP 1: ===========
              // all data from fetched data 
              _TEMP_ALL_DATA = JSON.parse(JSON.stringify(_ORGIN_DATA));
              allData.current = _TEMP_ALL_DATA;

              // STEP 2: ===========
              // dictionary data (orginal)
              dictionaryData.current = _TEMP_ALL_DATA;
            }
            if (dataDepth > 0) {
              // STEP 1: ===========
              // all data from fetched data  
              _TEMP_ALL_DATA = allData.current;
              addChildrenOpt(_TEMP_ALL_DATA, parentId, _ORGIN_DATA);

              // STEP 2: ===========
              // dictionary data (orginal)
              dictionaryData.current = _TEMP_ALL_DATA;
            }

            // STEP 3: ===========
            // Add an empty item to each list to support empty item selection
            _EMPTY_SUPPORTED_DATA = JSON.parse(JSON.stringify(_TEMP_ALL_DATA));
            addEmptyOpt(_EMPTY_SUPPORTED_DATA, 0);

            // STEP 4: ===========
            // Turn the data of each group into an array

            if (dataDepth === 0) {
              _temp_optData = [_EMPTY_SUPPORTED_DATA];
              optData.current = _temp_optData;
              listData.current = _temp_optData;
            }
            if (dataDepth > 0) {
              _temp_optData = listData.current;

              // Add an empty item to each list to support empty item selection
              addEmptyOpt(_ORGIN_DATA, 0);
              childList = _ORGIN_DATA;
              _temp_optData[dataDepth] = childList;
              optData.current = _temp_optData;
              listData.current = optData.current;
            }

            // STEP 5: ===========
            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_EMPTY_SUPPORTED_DATA, _ORGIN_DATA);

            // STEP 6: ===========
            // update column display with DOM
            updateColDisplay(true, false, undefined);
            return _context.abrupt("return", [_ORGIN_DATA, _EMPTY_SUPPORTED_DATA]);
          case 34:
            return _context.abrupt("return", []);
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
  function doFetch(dataDepthMax) {
    var dataDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var emptyAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // if empty selection is selected
    if (emptyAction) return;

    // If the depth is max, no more requests
    if (dataDepthMax) return;

    // other
    if (typeof fetchArray[dataDepth] === 'undefined') return new Promise(function (resolve, reject) {
      return resolve([[], []]);
    });

    // data fetch action
    var _oparams = fetchArray[dataDepth].fetchFuncMethodParams || [];
    var _params = _oparams.map(function (item) {
      return item !== '$QUERY_ID' ? item : parentId;
    });
    return fetchData(fetchArray[dataDepth], _params.join(','), dataDepth, parentId);
  }
  function handleFocus(event) {
    rootRef.current.classList.add('focus');

    //
    handleDisplayOptions(null);

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleBlur(event) {
    //----
    //remove focus style
    rootRef.current.classList.remove('focus');

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  }

  /**
   * If clicked on outside of element
   */
  function handleClickOutside(event) {
    // svg element
    if (_typeof(event.target.className) === 'object') return;
    if (event.target.className != '' && event.target.className.indexOf('cas-select-e2e__wrapper') < 0 && event.target.className.indexOf('form-control') < 0 && event.target.className.indexOf('cas-select-e2e__trigger') < 0 && event.target.className.indexOf('cas-select-e2e__items-wrapper') < 0 && event.target.className.indexOf('cas-select-e2e__opt') < 0) {
      cancel();
    }
  }
  function handleDisplayOptions(event) {
    if (event) event.preventDefault();

    //
    activate();
  }
  function handleClickItem(e, resValue, index, level, curData) {
    e.preventDefault();
    var dataDepthMax = resValue.itemDepth === fetchArray.length - 1;
    var parentId = e.currentTarget.dataset.query;
    var emptyAction = resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ? false : true;

    // update data depth
    //////////////////////////////////////////
    setCurrentDataDepth(function (prevState) {
      var _doFetch;
      var _currentDataDepth = resValue.itemDepth + 1;

      // update column display with DOM
      //////////////////////////////////////////
      updateColDisplay(false, emptyAction, level);

      // Execute the fetch task
      //////////////////////////////////////////
      (_doFetch = doFetch(dataDepthMax, _currentDataDepth, parentId, emptyAction)) === null || _doFetch === void 0 ? void 0 : _doFetch.then(function (res) {
        // if no data is available with request, close the modal
        if (typeof res === 'undefined') {
          updateColDisplay(false, true, level); // clean rest colums hardhanded 
          cancel();
        }
      });
      return _currentDataDepth;
    });

    //update selected data by clicked item
    //////////////////////////////////////////
    updateValueByClickedItem(resValue, level);

    // update value
    //////////////////////////////////////////
    var inputVal = updateValue(dictionaryData.current, resValue.id, level);

    // callback
    //////////////////////////////////////////
    if (typeof onChange === 'function') {
      onChange(valRef.current, resValue, index, level, inputVal, cancel);
    }

    // update data
    //////////////////////////////////////////
    var newData = curData; // such as: [Array(6), Array(3)]

    // remove Duplicate objects from JSON Array
    newData = newData.filter(function (item, index, self) {
      return index === self.findIndex(function (t) {
        return JSON.stringify(t) === JSON.stringify(item);
      });
    });

    // All the elements from start(array.length - start) to the end of the array will be deleted.
    newData.splice(level + 1);

    // active status
    if (resValue.children) {
      var childList = resValue.children;
      markAllItems(childList);
      newData[level + 1] = childList;
    }
    markCurrent(newData[level], index);

    // close modal
    //////////////////////////////////////////
    if (dataDepthMax && resValue.id.toString().indexOf('$EMPTY_ID_') < 0) {
      //
      cancel();

      // update data depth
      setCurrentDataDepth(0);
    }

    // active current option with DOM
    //////////////////////////////////////////
    var currentItemsInner = e.currentTarget.closest('.cas-select-e2e__items-inner');
    if (currentItemsInner !== null) {
      curData.forEach(function (v, col) {
        var colItemsWrapper = currentItemsInner.querySelectorAll('.cas-select-e2e__items-col');
        colItemsWrapper.forEach(function (perCol) {
          var _col = Number(perCol.dataset.col);
          if (_col >= level) {
            [].slice.call(perCol.querySelectorAll('[data-opt]')).forEach(function (node) {
              node.classList.remove('active');
            });
          }
        });
      });

      // not header option
      if (typeof e.currentTarget.dataset.optHeader === 'undefined') e.currentTarget.classList.add('active');
    }
  }

  /**
   * Active the selected item
  * @param arr 
  * @param index 
  * @returns 
  */
  function markCurrent(arr, index) {
    if (!Array.isArray(arr)) return;

    // click an item
    //////////////////////////////////////////
    for (var i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i].current = true;
      } else {
        arr[i].current = false;
      }
    }

    // return result
    //////////////////////////////////////////
    return arr;
  }

  /**
   * Deactivate all items
   * @param arr 
   * @returns 
   */
  function markAllItems(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].current = false;
      if (arr[i].children) markAllItems(arr[i].children);
    }
  }
  function updateValue(arr, targetVal) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var inputEl = valRef.current;
    var _valueData, _labelData, _queryIdsData;
    if (targetVal.toString().indexOf('$EMPTY_ID_') >= 0) {
      // If clearing the current column
      //////////////////////////////////////////
      _valueData = selectedData.current.values;
      _labelData = selectedData.current.labels;
      _queryIdsData = selectedData.current.queryIds;

      // update result to input
      _valueData.splice(level);
      _labelData.splice(level);
      _queryIdsData.splice(level);

      //
      selectedData.current = {
        labels: _labelData,
        values: _valueData,
        queryIds: _queryIdsData
      };
    } else {
      // click an item
      //////////////////////////////////////////
      //search JSON key that contains specific string
      var _labels = queryResultOfJSON(arr, targetVal, 'value');
      var _values = queryResultOfJSON(arr, targetVal, 'key');
      var _queryIds = queryResultOfJSON(arr, targetVal, 'query');

      // update result to input
      _valueData = _values ? _values.map(function (item) {
        return item;
      }) : [];
      _labelData = _labels ? _labels.map(function (item) {
        return item;
      }) : [];
      _queryIdsData = _queryIds ? _queryIds.map(function (item) {
        return item;
      }) : [];

      //
      selectedData.current = {
        labels: _labelData,
        values: _valueData,
        queryIds: _queryIdsData
      };
    }

    // update selected data 
    //////////////////////////////////////////
    if (destroyParentIdMatch) {
      _valueData = selectedDataByClick.current.values;
      _labelData = selectedDataByClick.current.labels;
      _queryIdsData = selectedDataByClick.current.queryIds;
    }
    var inputVal_0 = VALUE_BY_BRACES ? (0,convert.convertArrToValByBraces)(_valueData.map(function (item, i) {
      return "".concat(item, "[").concat(_queryIdsData[i], "]");
    })) : _valueData.map(function (item, i) {
      return "".concat(item, "[").concat(_queryIdsData[i], "]");
    }).join(',');
    var inputVal_1 = VALUE_BY_BRACES ? (0,convert.convertArrToValByBraces)(_labelData.map(function (item, i) {
      return "".concat(item, "[").concat(_queryIdsData[i], "]");
    })) : _labelData.map(function (item, i) {
      return "".concat(item, "[").concat(_queryIdsData[i], "]");
    }).join(',');
    if (valueType === 'value') {
      if (inputEl !== null) setChangedVal(inputVal_0);
    } else {
      if (inputEl !== null) setChangedVal(inputVal_1);
    }
    return {
      0: inputVal_0,
      1: inputVal_1
    };
  }
  function updateValueByClickedItem(targetData, level) {
    //update selected data by clicked item
    //////////////////////////////////////////
    var _valueData = selectedDataByClick.current.values.slice(0, level + 1);
    var _labelData = selectedDataByClick.current.labels.slice(0, level + 1);
    var _queryIdsData = selectedDataByClick.current.queryIds.slice(0, level + 1);
    _valueData.splice(level, 1, targetData.id);
    _labelData.splice(level, 1, targetData.name);
    if (Array.isArray(_queryIdsData)) _queryIdsData.splice(level, 1, targetData.queryId);
    selectedDataByClick.current = {
      labels: _labelData.filter(function (v) {
        return v != '';
      }),
      values: _valueData.filter(function (v) {
        return v.toString().indexOf('$EMPTY_ID_') < 0;
      }),
      queryIds: Array.isArray(_queryIdsData) ? _queryIdsData.filter(function (v) {
        return v != undefined;
      }) : _labelData.filter(function (v) {
        return v != '';
      })
    };
  }
  function cleanValue() {
    selectedData.current = {
      labels: [],
      values: [],
      queryIds: []
    };
    selectedDataByClick.current = {
      labels: [],
      values: [],
      queryIds: []
    };
    listData.current = [];
    allData.current = [];
    optData.current = [];
    dictionaryData.current = [];
    setChangedVal('');
    setFirstDataFeched(false);
  }
  function initDefaultValue(defaultValue) {
    var _doFetch2;
    // Determine whether the splicing value of the default value is empty
    if (typeof defaultValue !== 'undefined' && defaultValue !== '') {
      var formattedDefaultValue = VALUE_BY_BRACES ? (0,extract.extractContentsOfBraces)(defaultValue) : defaultValue.split(',');
      var emptyDefaultValueCheck = Array.isArray(formattedDefaultValue) ? formattedDefaultValue.every(function (item, index) {
        if (item !== '[]') {
          return false;
        }
        return true;
      }) : true;
      if (emptyDefaultValueCheck) {
        cleanValue();
        return; // required RETURN
      }
    }

    // change the value to trigger component rendering
    if (typeof defaultValue === 'undefined' || defaultValue === '') {
      cleanValue();
      return; // required RETURN
    } else {
      setChangedVal(defaultValue);
    }

    //
    setFirstDataFeched(true);

    //
    (_doFetch2 = doFetch(false, 0, 0, false)) === null || _doFetch2 === void 0 ? void 0 : _doFetch2.then(function (firstColResponse) {
      var _ORGIN_DATA = firstColResponse[0];
      var _CHILDREN_DATA = firstColResponse[1];
      var activedIndex;
      var allFetch = [];
      var rowQueryAttr = valueType === 'value' ? 'id' : 'name';
      var targetVal = defaultValue.match(/(\[.*?\])/gi).map(function (item, i) {
        return VALUE_BY_BRACES ? (0,extract.extractContentsOfBraces)(defaultValue)[i].replace(item, '') : defaultValue.split(',')[i].replace(item, '');
      });
      var queryIds = (0,extract.extractContentsOfBrackets)(defaultValue);

      //
      var _TEMP_ALL_DATA = [];

      //
      var _allColumnsData = [];
      var _allLables = [];
      var _allValues = [];

      // loop over each column
      //////////////////////////////////////////
      var _loop = function _loop(col) {
        if (col === 0) {
          // STEP 1: ===========
          //active item from current column
          var newData = JSON.parse(JSON.stringify(_CHILDREN_DATA));
          activedIndex = _CHILDREN_DATA.findIndex(function (item) {
            return item[rowQueryAttr].toString() === targetVal[col].toString();
          });
          markAllItems(newData);
          markCurrent(newData, activedIndex);

          // STEP 2: ===========
          // all data from fetched data 
          _TEMP_ALL_DATA = _ORGIN_DATA;

          // STEP 3: ===========
          // dictionary data (orginal)
          // Same as the `STEP 2`

          // STEP 4: ===========
          // update result data
          if (activedIndex !== -1) {
            _allLables.push(newData[activedIndex].name);
            _allValues.push(newData[activedIndex].id);
          }
          _allColumnsData.push(newData);
        }
        if (col > 0) {
          allFetch.push(doFetch(false, col, queryIds[col - 1], false));
        }
      };
      for (var col = 0; col <= targetVal.length; col++) {
        _loop(col);
      }

      // fetch all columns except the first
      //////////////////////////////////////////
      Promise.all(allFetch).then(function (values) {
        values.filter(function (v) {
          return typeof v !== 'undefined';
        }).forEach(function (colResponse, i) {
          var _CURRENT_COL_DATA = colResponse[0];
          var curDepth = i + 1;

          // STEP 1: ===========
          //active item from current column
          var newData = JSON.parse(JSON.stringify(_CURRENT_COL_DATA));
          activedIndex = newData.findIndex(function (item) {
            if (typeof targetVal[curDepth] !== 'undefined') {
              return item[rowQueryAttr].toString() === targetVal[curDepth].toString();
            }
          });
          markAllItems(newData);
          markCurrent(newData, activedIndex);

          // STEP 2: ===========
          // all data from fetched data 
          if (typeof values[curDepth] !== 'undefined') {
            var childList = values[curDepth][0];

            // if the value of some column is not fetched
            if (typeof newData[activedIndex] !== 'undefined') newData[activedIndex].children = childList;
          }
          _TEMP_ALL_DATA.forEach(function (item) {
            if (item.id === queryIds[i]) item.children = newData;
          });

          // STEP 3: ===========
          // dictionary data (orginal)
          dictionaryData.current = newData;

          // STEP 4: ===========
          // update result data
          if (activedIndex !== -1) {
            _allLables.push(newData[activedIndex].name);
            _allValues.push(newData[activedIndex].id);
          }
          _allColumnsData.push(newData);
          return true;
        });

        // STEP 5: ===========
        // all data from fetched data 
        allData.current = _TEMP_ALL_DATA;

        // STEP 6: ===========
        // dictionary data (orginal)
        dictionaryData.current = _TEMP_ALL_DATA;

        // STEP 7: ===========
        //update data
        optData.current = _allColumnsData;
        listData.current = _allColumnsData;

        // STEP 8: ===========
        //Set a default value
        selectedData.current = {
          labels: _allLables,
          values: _allValues,
          queryIds: queryIds
        };
        selectedDataByClick.current = {
          labels: _allLables,
          values: _allValues,
          queryIds: queryIds
        };
      });
    });
  }
  function fillColumnTitle() {
    var _Array;
    var dataDepth = fetchArray.length;
    var oldColumnTitleData = columnTitle ? columnTitle : [];
    var newColumnTitleData = (_Array = new Array(dataDepth)) === null || _Array === void 0 ? void 0 : _Array.fill('');
    oldColumnTitleData.forEach(function (item, index) {
      newColumnTitleData[index] = item;
    });

    //
    if (oldColumnTitleData.length > dataDepth) {
      newColumnTitleData.splice(dataDepth, oldColumnTitleData.length - dataDepth);
    }
    setColumnTitleData(newColumnTitleData);
  }
  function addChildrenOpt(obj, parentId, childrenData) {
    // Traverse the results obtained by all fetch
    obj.forEach(function (item) {
      // !!!IMPORTANT:
      // You need to put the contents of other columns after fetch into the "children" attribute
      if (item.id === parentId) item.children = childrenData;
      if (item.children) {
        addChildrenOpt(item.children, parentId, childrenData);
      }
    });
  }
  function addEmptyOpt(obj, index) {
    index++;
    obj.unshift({
      id: "$EMPTY_ID_" + index,
      name: "",
      itemDepth: obj.length === 0 ? 0 : obj[0].itemDepth
    });
    obj.forEach(function (item, depth) {
      if (item.children) {
        addEmptyOpt(item.children, index * (depth + 1));
      }
    });
  }
  function queryResultOfJSON(data, targetVal, returnType) {
    var callbackValueNested = [];
    var lastFirstLevelName = '';
    var loop = true;
    var resDepth = 0;
    var rowQueryAttr = 'id';
    var getIndexOf = function getIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][rowQueryAttr].toString() === val.toString()) return i;
      }
      return -1;
    };
    var searchJsonStr = function searchJsonStr(list, depth) {
      // `depth` is very important, it is used to accurately judge the final result
      if (typeof depth === 'undefined') {
        depth = 0;
      } else {
        depth++;
      }
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var callbackValue = void 0;
        if (returnType === 'key') callbackValue = row[rowQueryAttr].toString();
        if (returnType === 'value') callbackValue = row.name.toString();
        if (returnType === 'query') callbackValue = typeof row.queryId !== 'undefined' ? row.queryId.toString() : '';
        if (loop) {
          // get first-level item
          if (getIndexOf(data, row[rowQueryAttr]) !== -1) {
            callbackValueNested.push(callbackValue);
            lastFirstLevelName = callbackValue;
          }

          // get child-level item
          if (row.children) {
            callbackValueNested.push(callbackValue);
          }
        }

        //check the value
        if (row[rowQueryAttr].toString() === targetVal.toString()) {
          callbackValueNested.push(callbackValue);
          loop = false;
          resDepth = depth;
          break;
        }

        // Note: Recursion must be placed here
        if (loop) {
          if (row.children) {
            searchJsonStr(row.children, depth);
          }
        }
      }
    };
    searchJsonStr(data);

    // (1) Remove duplicate values
    //------------------------------------------
    callbackValueNested = callbackValueNested.filter(function (item, index, arr) {
      return arr.indexOf(item, 0) === index;
    });

    // (2) Delete needless first-level
    //------------------------------------------
    var resAll = callbackValueNested.slice(callbackValueNested.indexOf(lastFirstLevelName), callbackValueNested.length);

    // (3) Returns result
    //------------------------------------------
    if (resAll.length > 1) {
      // Get first-level item
      resAll.splice(1);

      // Get child-level item
      var resChild = callbackValueNested.slice(-resDepth); // Get the last elements in reverse

      // Combine
      resAll = resAll.concat(resChild);
    }
    return resAll;
  }
  function displayInfo(destroyParentId) {
    var _data = destroyParentId ? selectedDataByClick.current : selectedData.current;
    var formattedDefaultValue = changedVal !== '' ? VALUE_BY_BRACES ? (0,extract.extractContentsOfBraces)(changedVal) : changedVal.split(',') : [];
    var _labels = Array.isArray(_data.labels) && _data.labels.length > 0 ? _data.labels : [];

    // Sometimes the array may be empty due to rendering speed
    if (_labels.length === 0) {
      _labels = formattedDefaultValue.map(function (s) {
        return s.toString().replace(/[\w\s]/gi, '').replace(/\[\]/g, '');
      });
    }
    return _labels.length > 0 ? _labels.map(function (item, i, arr) {
      if (arr.length - 1 === i) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          key: i
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: item
          }
        }));
      } else {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          key: i
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          dangerouslySetInnerHTML: {
            __html: item
          }
        }), arrowGenerator());
      }
    }) : '';
  }
  function arrowGenerator() {
    return displayResultArrow ? displayResultArrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8px"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // column titles
    //--------------
    fillColumnTitle();

    // Initialize default value (request parameters for each level)
    //--------------
    initDefaultValue(value);

    //
    //--------------
    document.removeEventListener('pointerdown', handleClickOutside);
    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Add function to the element that should be used as the scrollable area.
    //--------------
    window.removeEventListener('scroll', windowScrollUpdate);
    window.removeEventListener('touchmove', windowScrollUpdate);
    window.addEventListener('scroll', windowScrollUpdate);
    window.addEventListener('touchmove', windowScrollUpdate);
    windowScrollUpdate();
    return function () {
      document.removeEventListener('pointerdown', handleClickOutside);
      window.removeEventListener('scroll', windowScrollUpdate);
      window.removeEventListener('touchmove', windowScrollUpdate);
    };
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? "cas-select-e2e__wrapper ".concat(wrapperClassName) : "cas-select-e2e__wrapper mb-3 position-relative",
    ref: rootRef,
    "data-overlay-id": "cas-select-e2e__items-wrapper-".concat(idRes)
  }, label ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, typeof label === 'string' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: "form-label"
  }, label)) : null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: triggerClassName ? "cas-select-e2e__trigger ".concat(triggerClassName) : "cas-select-e2e__trigger d-inline w-auto",
    onClick: handleDisplayOptions
  }, triggerContent)) : null, !hasErr ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    show: true,
    containerClassName: "CascadingSelectE2E"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listRef,
    id: "cas-select-e2e__items-wrapper-".concat(idRes),
    className: "cas-select-e2e__items-wrapper position-absolute border shadow small",
    style: {
      zIndex: depth ? depth : 1055,
      display: 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: "cas-select-e2e__items-inner"
  }, loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cas-select-e2e__items-loader"
  }, loader || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    height: "12px",
    width: "12px",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "inherit",
    d: "M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"
  }))))) : null, showCloseBtn ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    href: "#",
    tabIndex: -1,
    onClick: function onClick(e) {
      e.preventDefault();
      cancel();
    },
    className: "cas-select-e2e__close position-absolute top-0 end-0 mt-0 mx-1"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "#000",
    d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
  }))) : null, listData.current.map(function (item, level) {
    if (item.length > 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: level,
        "data-col": level,
        className: "cas-select-e2e__items-col"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Group, {
        level: level,
        columnTitle: columnTitleData,
        data: item,
        cleanNodeBtnClassName: cleanNodeBtnClassName,
        cleanNodeBtnContent: cleanNodeBtnContent,
        selectEv: function selectEv(e, value, index) {
          return handleClickItem(e, value, index, level, listData.current);
        }
      }));
    } else {
      return null;
    }
  })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cas-select-e2e__val",
    onClick: handleDisplayOptions
  }, destroyParentIdMatch ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, displayResult ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cas-select-e2e__result"
  }, displayInfo(true)) : null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, displayResult ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cas-select-e2e__result"
  }, displayInfo(false)) : null), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
    ref: valRef,
    id: idRes,
    "data-overlay-id": "cas-select-e2e__items-wrapper-".concat(idRes),
    name: name,
    className: "".concat(controlClassName || controlClassName === '' ? controlClassName : "form-control", " ").concat(controlExClassName || ''),
    placeholder: placeholder,
    value: destroyParentIdMatch ? valueType === 'value' ? VALUE_BY_BRACES ? (0,convert.convertArrToValByBraces)(selectedDataByClick.current.values.map(function (item, i) {
      return "".concat(item, "[").concat(selectedDataByClick.current.queryIds[i], "]");
    })) : selectedDataByClick.current.values.map(function (item, i) {
      return "".concat(item, "[").concat(selectedDataByClick.current.queryIds[i], "]");
    }).join(',') : VALUE_BY_BRACES ? (0,convert.convertArrToValByBraces)(selectedDataByClick.current.labels.map(function (item, i) {
      return "".concat(item, "[").concat(selectedDataByClick.current.queryIds[i], "]");
    })) : selectedDataByClick.current.labels.map(function (item, i) {
      return "".concat(item, "[").concat(selectedDataByClick.current.queryIds[i], "]");
    }).join(',') : changedVal // placeholder will not change if defaultValue is used
    ,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled || null,
    required: required || null,
    style: style,
    tabIndex: tabIndex || 0,
    readOnly: true
  }, attributes)), isShow ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cas-select-e2e__closemask",
    onClick: function onClick(e) {
      e.preventDefault();
      cancel();
    }
  }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "arrow",
    style: {
      pointerEvents: 'none'
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
  })))))))));
};
/* harmony default export */ const src = (CascadingSelectE2E);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});