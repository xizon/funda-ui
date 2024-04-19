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
// EXTERNAL MODULE: ./src/utils/get-element-property.js
var get_element_property = __webpack_require__(378);
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
var _excluded = ["contentRef", "popupRef", "wrapperClassName", "controlClassName", "controlExClassName", "exceededSidePosOffset", "multiSelect", "multiSelectSelectedItemOnlyStatus", "disabled", "required", "value", "label", "name", "readOnly", "placeholder", "id", "options", "cleanTrigger", "lockBodyScroll", "hierarchical", "indentation", "doubleIndent", "style", "depth", "controlArrow", "winWidth", "tabIndex", "fetchTrigger", "fetchTriggerForDefaultData", "fetchNoneInfo", "fetchUpdate", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "data", "extractValueByBrackets", "fetchCallback", "onFetch", "onLoad", "onSelect", "onChange", "onBlur", "onFocus"];
function src_toConsumableArray(arr) { return src_arrayWithoutHoles(arr) || src_iterableToArray(arr) || src_unsupportedIterableToArray(arr) || src_nonIterableSpread(); }
function src_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function src_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }
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
  var contentRef = props.contentRef,
    popupRef = props.popupRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlExClassName = props.controlExClassName,
    exceededSidePosOffset = props.exceededSidePosOffset,
    multiSelect = props.multiSelect,
    multiSelectSelectedItemOnlyStatus = props.multiSelectSelectedItemOnlyStatus,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    name = props.name,
    readOnly = props.readOnly,
    placeholder = props.placeholder,
    id = props.id,
    options = props.options,
    cleanTrigger = props.cleanTrigger,
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
  var DEPTH = depth || 1055; // the default value same as bootstrap
  var LIVE_SEARCH_OK = typeof fetchTrigger !== 'undefined' && fetchTrigger === true ? true : false;
  var LIVE_SEARCH_DISABLED = (typeof fetchTrigger === 'undefined' || fetchTrigger === false) && typeof window !== 'undefined' && typeof window['funda-ui__MultiFuncSelect-disable-livesearch'] !== 'undefined' ? true : false; // Globally disable real-time search functionality (only valid for non-dynamic requests)

  var INPUT_READONLY = LIVE_SEARCH_DISABLED ? true : typeof readOnly === 'undefined' ? null : readOnly;
  var VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
  var LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? true : lockBodyScroll;
  var WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
  var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
  var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
  var POS_OFFSET = 0;
  var EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
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

  // keyboard
  var keyboardSelectedItem = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // return a array of options
  var staticOptionsData = optionsRes;

  //
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(staticOptionsData),
    _useState2 = _slicedToArray(_useState, 2),
    orginalData = _useState2[0],
    setOrginalData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(staticOptionsData),
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
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    incomingData = _useState16[0],
    setIncomingData = _useState16[1];
  var selectedSign = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  var MULTI_SEL_VALID = multiSelect ? multiSelect.valid : false;
  var MULTI_SEL_LABEL = multiSelect ? multiSelect.selectAllLabel : 'Select all options';
  var MULTI_SEL_SELECTED_STATUS = {
    itemsLabel: '{num} Selected',
    allItemsLabel: 'All Content',
    noneLabel: 'No items selected'
  };
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
      labels: [],
      values: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    controlArr = _useState18[0],
    setControlArr = _useState18[1];
  var multiSelControlOptionExist = function multiSelControlOptionExist(arr, val) {
    var _data = arr.filter(Boolean);
    return _data.map(function (v) {
      return v.toString();
    }).includes(val.toString());
  };

  // clean trigger
  var CLEAN_TRIGGER_VALID = typeof cleanTrigger === 'undefined' ? false : cleanTrigger ? cleanTrigger.valid : false;
  var CLEAN_TRIGGER_LABEL = cleanTrigger ? cleanTrigger.cleanValueLabel : 'Clean';

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(popupRef, function () {
    return {
      close: function close() {
        cancel();
        if (MULTI_SEL_VALID) popwinPosHide();
      }
    };
  }, [popupRef]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      clear: function clear(cb) {
        if (MULTI_SEL_VALID) {
          updateOptionCheckboxes('remove');
        } else {
          handleCleanValue();
        }
        cb === null || cb === void 0 ? void 0 : cb();
      },
      /*
      set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}, () => { console.log('callback') }])
      */
      set: function set(value, cb) {
        if (MULTI_SEL_VALID) {
          updateOptionCheckboxesViaAddSingleItem({
            labels: value.map(function (v) {
              return v.label;
            }),
            values: value.map(function (v) {
              return v.value;
            })
          });
        } else {
          var _val = value[0];
          handleSelect(null, _typeof(_val) === 'object' ? JSON.stringify(_val) : _val, ["".concat(_val.value)], ["".concat(_val.label)]);
        }
        cb === null || cb === void 0 ? void 0 : cb();
      }
    };
  }, [contentRef]);

  //performance
  var handleChangeFetchSafe = utils_useDebounce(function (val) {
    var _orginalData = [];
    var update = function update(inputData) {
      var filterRes = function filterRes() {
        return inputData.filter(function (item) {
          // Avoid fatal errors causing page crashes
          var _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';
          var _val = typeof val !== 'undefined' && val !== null ? val : '';
          if ((_queryString.split(',').some(function (l) {
            return l.charAt(0) === _val.toLowerCase();
          }) || _queryString.split(',').some(function (l) {
            return l.replace(/ /g, '').indexOf(_val.toLowerCase()) >= 0;
          }) || item.label.toLowerCase().indexOf(_val.toLowerCase()) >= 0) && _val != '') {
            return true;
          } else {
            return false;
          }
        });
      };
      return filterRes();
    };
    if (fetchUpdate) {
      handleFetch(val).then(function (response) {
        _orginalData = response;
        var _filterRes = update(_orginalData);

        // pop win initalization
        setTimeout(function () {
          popwinPosInit();
          popwinFilterItems(val);
        }, 0);
      });
    } else {
      _orginalData = orginalData;
      var _filterRes = update(_orginalData);

      // pop win initalization
      setTimeout(function () {
        popwinPosInit();
        popwinFilterItems(val);
      }, 0);
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
        return String(s).replace(reVar, '').replace(/\&nbsp;/ig, '');
      });
    } else {
      var _txt = typeof inputData === 'string' ? inputData : inputData.toString();
      return _txt.replace(reVar, '').replace(/\&nbsp;/ig, '');
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
   * @param {string | number} str 
   * @returns {string}
   */
  function stripHTML(str) {
    return String(str).replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
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
    // remove data-* attibutes
    popwinContainerHeightReset();
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
        _filterRes3,
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
              // If the default value is label, match value
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
                    var _filterRes2 = [];
                    _filterRes2 = [{
                      value: _currentData.values[_index],
                      label: _currentData.labels[_index],
                      queryString: _currentData.queryStrings[_index]
                    }];
                    setControlArr(function (prevState) {
                      return {
                        labels: unique([].concat(src_toConsumableArray(prevState.labels), [typeof _filterRes2[0] !== 'undefined' ? _filterRes2[0].label : '']).filter(function (v) {
                          return v !== '';
                        })),
                        values: unique([].concat(src_toConsumableArray(prevState.values), [typeof _filterRes2[0] !== 'undefined' ? _filterRes2[0].value : '']).filter(function (v) {
                          return v !== '';
                        }))
                      };
                    });
                  }
                });
              }

              // Appropriate multi-item container height
              adjustMultiControlContainerHeight();

              // hide disabled item
              _ORGIN_DATA = _ORGIN_DATA.filter(function (v) {
                return typeof v.disabled !== 'undefined' && v.disabled == true ? false : true;
              });
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
              staticOptionsData = JSON.parse(incomingOptionsData);

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;
            }

            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              staticOptionsData = (0,tree.addTreeDepth)(staticOptionsData);
              (0,tree.addTreeIndent)(staticOptionsData, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // STEP 3: ===========
            // value & label must be initialized

            // If the default value is label, match value
            _filterRes3 = [];
            _filterResQueryValue = staticOptionsData.filter(function (item) {
              return item.value == defaultValue;
            });
            _filterResQueryLabel = staticOptionsData.filter(function (item) {
              return item.label == defaultValue;
            });
            _filterRes3 = _filterResQueryValue;
            if (_filterResQueryValue.length === 0) _filterRes3 = _filterResQueryLabel;

            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof defaultValue === 'undefined' || defaultValue === '') {
              // Do not use `init`, otherwise the query will revert to the default value if there is no value
              setControlValue('');
              setControlLabel('');
            } else {
              if (_filterRes3.length > 0) {
                setControlValue(_filterRes3[0].value);
                setControlLabel(formatIndentVal(_filterRes3[0].label));
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
                    var _filterRes4 = [];
                    _filterRes4 = [{
                      value: _currentData2.values[_index],
                      label: _currentData2.labels[_index],
                      queryString: _currentData2.queryStrings[_index]
                    }];
                    setControlArr(function (prevState) {
                      return {
                        labels: unique([].concat(src_toConsumableArray(prevState.labels), [typeof _filterRes4[0] !== 'undefined' ? _filterRes4[0].label : '']).filter(function (v) {
                          return v !== '';
                        })),
                        values: unique([].concat(src_toConsumableArray(prevState.values), [typeof _filterRes4[0] !== 'undefined' ? _filterRes4[0].value : '']).filter(function (v) {
                          return v !== '';
                        }))
                      };
                    });
                  }
                });
              }

              // Appropriate multi-item container height
              adjustMultiControlContainerHeight();

              // hide disabled item
              staticOptionsData = staticOptionsData.filter(function (v) {
                return typeof v.disabled !== 'undefined' && v.disabled == true ? false : true;
              });
            }

            // STEP 5: ===========
            //
            setOptionsData(staticOptionsData); // data must be initialized

            //
            setOrginalData(staticOptionsData);

            // STEP 6: ===========
            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(selectInputRef.current, valueInputRef.current, defaultValue, staticOptionsData, incomingData);

            //
            return _context2.abrupt("return", staticOptionsData);
          case 35:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchData.apply(this, arguments);
  }
  function adjustMultiControlContainerHeight() {
    setTimeout(function () {
      // Sometimes you may get 0, you need to judge
      if (rootMultiRef.current.clientHeight > 0) {
        rootSingleRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
        selectInputRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
      }

      // popwin position update
      var _modalRef = document.querySelector("#mf-select__options-wrapper-".concat(idRes));
      if (MULTI_SEL_VALID && _modalRef !== null && _modalRef.classList.contains('active')) {
        popwinPosInit();
      }
    }, 0);
  }
  function popwinPosInit() {
    if (listContentRef.current === null || selectInputRef.current === null) return;
    var contentHeightOffset = 80;
    var contentMaxHeight = 0;

    // update modal position
    var _modalRef = document.querySelector("#mf-select__options-wrapper-".concat(idRes));
    var _triggerRef = selectInputRef.current;

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
    _modalRef.classList.add('active');

    // STEP 2:
    //-----------
    // Detect position
    if (window.innerHeight - _triggerBox.top > 100) {
      targetPos = 'bottom';
    } else {
      targetPos = 'top';
    }
    if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;

    // STEP 3:
    //-----------
    // Detect content height
    var _contentBox = listContentRef.current.getBoundingClientRect();
    var _contentOldHeight = listContentRef.current.clientHeight;
    if (targetPos === 'top') {
      contentMaxHeight = _triggerBox.top;
      if (_contentBox.height > contentMaxHeight) {
        listContentRef.current.style.height = contentMaxHeight - contentHeightOffset + 'px';
        if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = contentMaxHeight - contentHeightOffset;

        // has scrollbar
        listContentRef.current.dataset.hasScrollbar = 'true';
      } else {
        if (_contentOldHeight > 50) {
          listContentRef.current.style.height = _contentOldHeight + 'px';
          if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = _contentOldHeight;
        }

        // has scrollbar
        listContentRef.current.dataset.hasScrollbar = 'false';
      }
    }
    if (targetPos === 'bottom') {
      contentMaxHeight = window.innerHeight - _triggerBox.bottom;
      if (_contentBox.height > contentMaxHeight) {
        listContentRef.current.style.height = contentMaxHeight - 10 + 'px';
        if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = contentMaxHeight - 10;

        // has scrollbar
        listContentRef.current.dataset.hasScrollbar = 'true';
      } else {
        if (_contentOldHeight > 50) {
          listContentRef.current.style.height = _contentOldHeight + 'px';
          if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = _contentOldHeight;
        }

        // has scrollbar
        listContentRef.current.dataset.hasScrollbar = 'false';
      }
    }

    // STEP 4:
    //-----------
    // Adjust position
    if (targetPos === 'top') {
      _modalRef.style.left = x + 'px';
      //_modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
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

    // STEP 5:
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

    // STEP 6:
    //-----------
    // no data label
    popwinNoMatchInit();
  }
  function popwinPosHide() {
    var _modalRef = document.querySelector("#mf-select__options-wrapper-".concat(idRes));
    if (_modalRef !== null && listContentRef.current !== null) {
      // remove classnames and styles
      _modalRef.classList.remove('active');
      listContentRef.current.style.removeProperty('height');

      // remove data-* attibutes
      popwinContainerHeightReset();

      // display all filtered items
      var _items = [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item'));
      _items.forEach(function (node) {
        node.classList.remove('hide');
      });

      // nomatch & button of select all 
      var _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
      var _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
      _nodataDiv.classList.add('hide');
      if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
    }
  }
  function popwinFilterItems(val) {
    if (listContentRef.current === null) return;
    [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).forEach(function (node) {
      // Avoid fatal errors causing page crashes
      var _queryString = typeof node.dataset.querystring !== 'undefined' && node.dataset.querystring !== null ? node.dataset.querystring : '';
      var _val = typeof val !== 'undefined' && val !== null ? val : '';
      if ((_queryString.split(',').some(function (l) {
        return l.charAt(0) === _val.toLowerCase();
      }) || _queryString.split(',').some(function (l) {
        return l.replace(/ /g, '').indexOf(_val.toLowerCase()) >= 0;
      }) || node.dataset.label.toLowerCase().indexOf(_val.toLowerCase()) >= 0) && _val != '') {
        node.classList.remove('hide');
      } else {
        node.classList.add('hide');
      }
    });

    // no data label
    popwinNoMatchInit();

    // display all filtered items
    var _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
    var _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
    if ((val === null ? '' : val).replace(/\s/g, "") === '') {
      [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).forEach(function (node) {
        node.classList.remove('hide');
      });
      _nodataDiv.classList.add('hide');
      if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
    }

    // Appropriate list container height
    popwinContainerHeightAdjust();
  }
  function popwinContainerHeightAdjust() {
    if (listContentRef.current === null) return;
    var oldHeight = listContentRef.current.dataset.height;
    var pos = listContentRef.current.dataset.pos;
    var filteredHeight = listContentRef.current.firstChild.clientHeight;
    if (parseFloat(oldHeight) > filteredHeight) {
      listContentRef.current.style.height = filteredHeight + 'px';
    } else {
      listContentRef.current.style.height = oldHeight + 'px';
    }
  }
  function popwinNoMatchInit() {
    if (listContentRef.current === null) return;
    var _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
    var _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
    var emptyFieldsCheck = [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).every(function (node) {
      if (!node.classList.contains('hide')) {
        return false;
      }
      return true;
    });
    if (emptyFieldsCheck) {
      _nodataDiv.classList.remove('hide');
      if (_btnSelectAll !== null) _btnSelectAll.classList.add('hide');
    } else {
      _nodataDiv.classList.add('hide');
      if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
    }
  }
  function popwinContainerHeightReset() {
    if (listContentRef.current === null) return;

    // remove data-* attibutes
    listContentRef.current.removeAttribute('data-height');
    listContentRef.current.removeAttribute('data-pos');
  }
  function cancel() {
    // hide list
    setIsOpen(false);
    if (!MULTI_SEL_VALID) popwinPosHide();
    if (LIVE_SEARCH_OK) {
      // clean data
      setOptionsData([]);
    } else {
      // restore data
      setOptionsData(orginalData);
    }

    // update temporary value
    setControlTempValue(null);

    // Unlocks the page
    if (LOCK_BODY_SCROLL) enableBodyScroll(document.querySelector('body'));
  }
  function activate() {
    // show list
    setIsOpen(true);

    // pop win initalization
    setTimeout(function () {
      popwinPosInit();
    }, 0);

    // make sure the event handler is registered
    if (orginalData.length === 0) {
      setTimeout(function () {
        // no data label
        popwinNoMatchInit();
      }, 500);
    }
    if (LIVE_SEARCH_OK) {
      // clean data
      setOptionsData([]);
    } else {
      // restore data
      setOptionsData(orginalData);
    }

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
    var _rootRef$current;
    // remove active styles from the root container and activate current wrapper
    [].slice.call(document.querySelectorAll('.mf-select__wrapper')).forEach(function (node) {
      node.classList.remove('active', 'focus');
    });
    (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.add('active', 'focus');
  }
  function handleSelect(_x4) {
    return _handleSelect.apply(this, arguments);
  }
  function _handleSelect() {
    _handleSelect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el) {
      var dataInput,
        valueArr,
        labelArr,
        curItem,
        incominggetOptionsData,
        _rootRef$current3,
        options,
        curBtn,
        _data,
        _value,
        _label,
        currentControlValueArr,
        currentControlLabelArr,
        $el,
        _selected,
        _selectedVal,
        _value2,
        _label2,
        _currentControlValueArr,
        _currentControlLabelArr,
        _$el,
        _selected2,
        _selectedVal2,
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
            curItem = el === null ? JSON.parse(dataInput) : JSON.parse(el.currentTarget.dataset.itemdata); // get incoming options from `data-options` of component
            // It is usually used for complex cascading `<MultiFuncSelect />` components
            incominggetOptionsData = valueInputRef.current.dataset.options; // cancel
            if (!MULTI_SEL_VALID) {
              cancel();
            }

            //remove focus style
            if (!MULTI_SEL_VALID) {
              (_rootRef$current3 = rootRef.current) === null || _rootRef$current3 === void 0 ? void 0 : _rootRef$current3.classList.remove('focus');
            }

            // get options
            options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)')); // current control of some option
            curBtn = options.filter(function (node) {
              return node.dataset.itemdata == JSON.stringify(curItem);
            })[0]; // update value * label
            if (dataInput) {
              // using keyboard
              _data = JSON.parse(dataInput);
              _value = _data.value;
              _label = _data.label; // ++++++++++++++++++++
              // Single selection
              // ++++++++++++++++++++
              // clear all active classes of options 
              // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
              options.forEach(function (node) {
                node.classList.remove('active');
              });

              //
              setControlValue(_value);
              setControlLabel(formatIndentVal(_label));

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof incominggetOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value;
              }

              // ++++++++++++++++++++
              // Multiple selection
              // ++++++++++++++++++++
              currentControlValueArr = JSON.parse(JSON.stringify(valueArr));
              currentControlLabelArr = JSON.parse(JSON.stringify(labelArr));
              if (MULTI_SEL_VALID) {
                $el = el === null ? curBtn : el.currentTarget; // update option checkboxes
                _selected = $el.dataset.selected;
                _selectedVal = _selected == 'true' ? true : false;
                if (_selectedVal) {
                  //#########
                  // remove item
                  //#########
                  $el.dataset.selected = 'false';
                  $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
                  $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

                  //
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
                  //#########
                  // add item
                  //#########
                  $el.dataset.selected = 'true';
                  $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                  $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

                  //
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

                // active current option
                setTimeout(function () {
                  $el.classList.add('active');
                }, 0);
              }

              //
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, !MULTI_SEL_VALID ? curItem : {
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
              _value2 = typeof curItem !== 'undefined' ? curItem.value : '';
              _label2 = typeof curItem !== 'undefined' ? curItem.label : ''; // ++++++++++++++++++++
              // Single selection
              // ++++++++++++++++++++
              // clear all active classes of options
              // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
              options.forEach(function (node) {
                node.classList.remove('active');
              });

              //
              setControlValue(_value2);
              setControlLabel(formatIndentVal(_label2));

              // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
              if (typeof incominggetOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value2;
              }

              // ++++++++++++++++++++
              // Multiple selection
              // ++++++++++++++++++++
              _currentControlValueArr = JSON.parse(JSON.stringify(controlArr.values));
              _currentControlLabelArr = JSON.parse(JSON.stringify(controlArr.labels));
              if (MULTI_SEL_VALID) {
                _$el = el === null ? curBtn : el.currentTarget; // update option checkboxes
                _selected2 = _$el.dataset.selected;
                _selectedVal2 = _selected2 == 'true' ? true : false;
                if (_selectedVal2) {
                  //#########
                  // remove item
                  //#########
                  _$el.dataset.selected = 'false';
                  _$el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
                  _$el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

                  //
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
                  //#########
                  // add item
                  //#########

                  _$el.dataset.selected = 'true';
                  _$el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                  _$el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

                  //
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

                // active current option
                setTimeout(function () {
                  _$el.classList.add('active');
                }, 0);
              }

              //
              if (typeof onChange === 'function') {
                onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, !MULTI_SEL_VALID ? curItem : {
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
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _handleSelect.apply(this, arguments);
  }
  function updateOptionCheckboxes(type) {
    var _labels = [];
    var _values = [];
    [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item:not(.hide)')).forEach(function (node) {
      var _label = node.dataset.label;
      var _value = node.dataset.value;
      if (type === 'remove') {
        //#########
        // remove item
        //#########
        node.dataset.selected = 'false';
        node.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
        node.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

        //
        var _indexLable = _labels.findIndex(function (item) {
          return item == _label;
        });
        var _indexValue = _values.findIndex(function (item) {
          return item == _value;
        });
        if (_indexLable !== -1) _labels.splice(_indexLable, 1);
        if (_indexValue !== -1) _values.splice(_indexValue, 1);
      } else {
        //#########
        // add item
        //#########
        node.dataset.selected = 'true';
        node.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
        node.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

        //
        _labels.push(_label);
        _values.push(_value);
      }
    });
    setControlArr({
      labels: _labels,
      values: _values
    });

    // Appropriate multi-item container height
    adjustMultiControlContainerHeight();
  }
  ;
  function updateOptionCheckboxesViaAddSingleItem(data) {
    var _labels = data.labels || [];
    var _values = data.values || [];
    setControlArr({
      labels: _labels,
      values: _values
    });

    // Appropriate multi-item container height
    adjustMultiControlContainerHeight();
  }
  ;
  function handleSelectAll(event) {
    event.preventDefault();
    if (selectedSign.current) {
      updateOptionCheckboxes('remove');
    } else {
      updateOptionCheckboxes('add');
    }
    selectedSign.current = !selectedSign.current;
  }
  function handleCleanValue(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    // It is valid when a single selection
    var emptyValue = {
      label: '',
      value: '',
      queryString: ''
    };
    handleSelect(null, JSON.stringify(emptyValue), [], []);
    if (typeof onChange === 'function') {
      onChange === null || onChange === void 0 ? void 0 : onChange(selectInputRef.current, valueInputRef.current, emptyValue);
    }

    // update temporary value
    setControlTempValue('');
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
            });
            _context4.next = 6;
            return fetchData(_params.join(','), value, false);
          case 6:
            res = _context4.sent;
            return _context4.abrupt("return", res);
          case 8:
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
    handleChangeFetchSafe(val);
  }

  //
  function handleFocus(event) {
    var _rootRef$current2;
    (_rootRef$current2 = rootRef.current) === null || _rootRef$current2 === void 0 ? void 0 : _rootRef$current2.classList.add('focus');

    // update temporary value
    setControlTempValue('');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleBlur(event) {
    setTimeout(function () {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, 300);
  }
  function handleClose(event) {
    if (event.target.closest(".mf-select__wrapper") === null && event.target.closest(".mf-select__options-wrapper") === null) {
      // cancel
      cancel();
      if (MULTI_SEL_VALID) popwinPosHide();
    }
  }
  function generateInputFocusStr() {
    return controlTempValue || controlTempValue === '' ? controlTempValue.length === 0 ? '|' : controlTempValue : placeholder || '';
  }
  function optionFocus(type) {
    return new Promise(function (resolve) {
      // Determine the "active" class name to avoid listening to other unused components of the same type
      if (listRef.current === null || !rootRef.current.classList.contains('active')) return;

      // Avoid selecting options that are disabled
      var options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.mf-select-multi__control-option-item--select-all):not(.mf-select-multi__control-option-item--clean)'));
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
          keyboardSelectedItem.current = targetOption;
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
        var res, currentData, currentControlValueArr, currentControlLabelArr, htmlOptions;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              res = null;
              if (!(event.code === "Enter" || event.code === "NumpadEnter")) {
                _context.next = 12;
                break;
              }
              if (!(listRef.current === null || !rootRef.current.classList.contains('active'))) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              if (!(keyboardSelectedItem.current !== null && keyboardSelectedItem.current.classList.contains('disabled'))) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              if (!(listRef.current !== null)) {
                _context.next = 11;
                break;
              }
              _context.next = 9;
              return listRef.current.dataset.data;
            case 9:
              currentData = _context.sent;
              if (typeof currentData !== 'undefined') {
                currentControlValueArr = [];
                currentControlLabelArr = [];
                htmlOptions = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)'));
                htmlOptions.forEach(function (node) {
                  node.classList.remove('active');

                  // multiple options
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
            case 11:
              return _context.abrupt("return");
            case 12:
              _context.t0 = event.code;
              _context.next = _context.t0 === "ArrowLeft" ? 15 : _context.t0 === "ArrowRight" ? 16 : _context.t0 === "ArrowUp" ? 17 : _context.t0 === "ArrowDown" ? 21 : 25;
              break;
            case 15:
              return _context.abrupt("break", 25);
            case 16:
              return _context.abrupt("break", 25);
            case 17:
              _context.next = 19;
              return optionFocus('decrease');
            case 19:
              res = _context.sent;
              return _context.abrupt("break", 25);
            case 21:
              _context.next = 23;
              return optionFocus('increase');
            case 23:
              res = _context.sent;
              return _context.abrupt("break", 25);
            case 25:
              // temporary data
              if (res !== null) listRef.current.dataset.data = res.dataset.itemdata;
            case 26:
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
    document.addEventListener('touchstart', handleClose);

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
    className: "mf-select__label"
  }, typeof label === 'string' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: "label-".concat(idRes),
    className: "form-label"
  }, label))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    "data-overlay-id": "mf-select__options-wrapper-".concat(idRes),
    id: "mf-select__wrapper-".concat(idRes),
    className: "mf-select__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative', " ").concat(MULTI_SEL_VALID ? 'multiple-selection' : '', " ").concat(isOpen ? 'active focus' : ''),
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
    "data-overlay-id": "mf-select__options-wrapper-".concat(idRes),
    id: "label-".concat(idRes)

    // Don't use "name", it's just a container to display the label
    ,
    "data-name": name !== null && name !== void 0 && name.match(/(\[.*?\])/gi) ? "".concat(name.split('[')[0], "-label[]") : "".concat(name, "-label"),
    "data-select": true,
    placeholder: placeholder || '',
    className: "".concat(controlClassName || controlClassName === '' ? controlClassName : "form-control", " ").concat(controlExClassName || ''),
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
  }, attributes))), !MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "mf-select-single__inputplaceholder-wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "mf-select-single__inputplaceholder-inner"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    tabIndex: tabIndex || 0,
    type: "text",
    className: "".concat(controlClassName || controlClassName === '' ? controlClassName : "form-control", " ").concat(controlExClassName || '')
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "mf-select-multi__control-blinking-cursor ".concat(generateInputFocusStr() === '|' ? 'animated' : '')
  }, controlTempValue || controlTempValue === '' ? controlTempValue.length === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "".concat(generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined' ? 'control-placeholder' : '')
  }, generateInputFocusStr()) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, controlTempValue) : stripHTML(controlLabel).length === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "".concat(generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined' ? 'control-placeholder' : '')
  }, generateInputFocusStr()) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, stripHTML(controlLabel)))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
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
    className: "mf-select-multi__control-searchbtn position-absolute top-0 end-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "btn border-end-0 rounded-pill",
    onClick: function onClick(e) {
      handleFetch().then(function (response) {
        // pop win initalization
        setTimeout(function () {
          popwinPosInit();
          popwinFilterItems(controlTempValue);
        }, 0);
      });
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "#a5a5a5",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  }))))) : null) : null, MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootMultiRef,
    className: "mf-select-multi__inputplaceholder-wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "mf-select-multi__inputplaceholder-inner"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: "mf-select-multi__list"
  }, typeof multiSelectSelectedItemOnlyStatus !== 'undefined' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: "mf-select-multi__list-item-statusstring"
  }, typeof multiSelectSelectedItemOnlyStatus.itemsLabel === 'string' && controlArr.labels.length > 0 && controlArr.labels.length < optionsData.length ? multiSelectSelectedItemOnlyStatus.itemsLabel.replace('{num}', controlArr.labels.length) : null, typeof multiSelectSelectedItemOnlyStatus.noneLabel === 'string' && controlArr.labels.length === 0 ? multiSelectSelectedItemOnlyStatus.noneLabel : null, typeof multiSelectSelectedItemOnlyStatus.allItemsLabel === 'string' && controlArr.labels.length === optionsData.length ? multiSelectSelectedItemOnlyStatus.allItemsLabel : null, typeof multiSelectSelectedItemOnlyStatus.itemsLabel !== 'string' && controlArr.labels.length > 0 ? MULTI_SEL_SELECTED_STATUS.itemsLabel.replace('{num}', controlArr.labels.length) : null, typeof multiSelectSelectedItemOnlyStatus.noneLabel !== 'string' && controlArr.labels.length === 0 ? MULTI_SEL_SELECTED_STATUS.noneLabel : null, typeof multiSelectSelectedItemOnlyStatus.allItemsLabel !== 'string' && controlArr.labels.length === optionsData.length ? MULTI_SEL_SELECTED_STATUS.allItemsLabel : null)) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, controlArr.labels.map(function (item, index) {
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
    className: "mf-select-multi__list-item-placeholder ".concat(typeof placeholder === 'undefined' || placeholder === '' ? 'hide' : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "mf-select-multi__control-blinking-cursor ".concat(generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined' ? 'control-placeholder' : '', " ").concat(generateInputFocusStr() === '|' ? 'animated' : '')
  }, generateInputFocusStr())))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
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
    className: "mf-select-multi__control-searchbtn position-absolute top-0 end-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "btn border-end-0 rounded-pill",
    onClick: function onClick(e) {
      handleFetch().then(function (response) {
        // pop win initalization
        setTimeout(function () {
          popwinPosInit();
          popwinFilterItems(controlTempValue);
        }, 0);
      });
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "#a5a5a5",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  }))))) : null) : null, optionsData && !hasErr ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    show: true,
    containerClassName: "MultiFuncSelect"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listRef,
    id: "mf-select__options-wrapper-".concat(idRes),
    className: "mf-select__options-wrapper list-group position-absolute border shadow small ".concat(winWidth ? '' : ''),
    style: {
      zIndex: DEPTH,
      width: WIN_WIDTH,
      display: 'none'
    },
    role: "tablist"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "mf-select__options-contentlist rounded",
    style: {
      backgroundColor: 'var(--bs-list-group-bg)'
    },
    ref: listContentRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "mf-select__options-contentlist-inner"
  }, MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    tabIndex: -1,
    className: "list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light mf-select-multi__control-option-item--select-all position-sticky top-0 z-3",
    role: "tab",
    style: {
      display: multiSelect !== null && multiSelect !== void 0 && multiSelect.selectAll ? 'block' : 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    tabIndex: -1,
    className: "btn btn-secondary",
    dangerouslySetInnerHTML: {
      __html: "".concat(MULTI_SEL_LABEL)
    },
    onClick: handleSelectAll
  }))) : null, !MULTI_SEL_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, CLEAN_TRIGGER_VALID ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    tabIndex: -1,
    className: "list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light mf-select-multi__control-option-item--clean position-sticky top-0 z-3",
    role: "tab"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    tabIndex: -1,
    className: "btn btn-secondary",
    dangerouslySetInnerHTML: {
      __html: "".concat(CLEAN_TRIGGER_LABEL)
    },
    onClick: handleCleanValue
  }))) : null) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    type: "button",
    className: "list-group-item list-group-item-action no-match border-0 mf-select-multi__control-option-item--nomatch hide",
    disabled: true
  }, fetchNoneInfo || 'No match yet'), optionsData ? optionsData.map(function (item, index) {
    var startItemBorder = index === 0 ? 'border-top-0' : '';
    var endItemBorder = index === optionsData.length - 1 ? 'border-bottom-0' : '';

    // disable selected options (only single selection)
    var disabledCurrentOption = false;
    if (typeof controlValue !== 'undefined' && controlValue !== null && controlValue !== '' && typeof item.value !== 'undefined' && item.value !== null && item.value !== '') {
      if (!MULTI_SEL_VALID) {
        var _defaultValue = controlValue.toString();
        var filterRes = [];
        var filterResQueryValue = optionsData.filter(function (item) {
          return item.value == _defaultValue;
        });
        var filterResQueryLabel = optionsData.filter(function (item) {
          return item.label == _defaultValue;
        });
        if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
          filterRes = filterResQueryValue;
          if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
        }
        var _targetValue = filterRes.length > 0 ? filterRes[0].value : _defaultValue;
        var _realValue = item.value.toString();
        if (_realValue === _targetValue && _targetValue !== '') {
          disabledCurrentOption = true;
        }
      }
    }
    if (!MULTI_SEL_VALID) {
      // ++++++++++++++++++++
      // Single selection
      // ++++++++++++++++++++
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
        tabIndex: -1,
        type: "button",
        "data-index": index,
        key: index,
        className: "list-group-item list-group-item-action border-start-0 border-end-0 mf-select-multi__control-option-item ".concat(startItemBorder, " ").concat(endItemBorder, " border-bottom-0 ").concat(typeof item.disabled === 'undefined' ? '' : item.disabled == true ? 'disabled' : '', " ").concat(disabledCurrentOption ? 'active disabled' : ''),
        "data-value": "".concat(item.value),
        "data-label": "".concat(item.label),
        "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
        "data-itemdata": JSON.stringify(item),
        "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
        role: "tab",
        dangerouslySetInnerHTML: {
          __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
        },
        onClick: handleSelect
      });
    } else {
      // ++++++++++++++++++++
      // Multiple selection
      // ++++++++++++++++++++
      var itemSelected = multiSelControlOptionExist(controlArr.values, item.value) ? true : false;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
        tabIndex: -1,
        type: "button",
        "data-selected": "".concat(itemSelected ? 'true' : 'false'),
        "data-index": index,
        key: index,
        className: "list-group-item list-group-item-action border-start-0 border-end-0 mf-select-multi__control-option-item ".concat(startItemBorder, " ").concat(endItemBorder, " border-bottom-0 ").concat(itemSelected ? 'list-group-item-secondary item-selected' : '', " ").concat(typeof item.disabled === 'undefined' ? '' : item.disabled == true ? 'disabled' : ''),
        "data-value": "".concat(item.value),
        "data-label": "".concat(item.label),
        "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
        "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
        "data-itemdata": JSON.stringify(item),
        role: "tab",
        onClick: handleSelect
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        className: "me-1 mf-select-multi__control-option-checkbox-selected ".concat(itemSelected ? '' : 'd-none')
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "1.2em",
        height: "1.2em",
        fill: "#000000",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        className: "me-1 mf-select-multi__control-option-checkbox-placeholder ".concat(itemSelected ? 'd-none' : '')
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "1.2em",
        height: "1.2em",
        fill: "#000000",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z"
      }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
        }
      }));
    }
  }) : null))))) : null));
});
/* harmony default export */ const src = (MultiFuncSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});