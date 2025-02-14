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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
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
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
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
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"clsWrite": function clsWrite() {
          return (/* binding */_clsWrite
          );
        },
        /* harmony export */"combinedCls": function combinedCls() {
          return (/* binding */_combinedCls
          );
        }
        /* harmony export */
      });
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * Output of class name
       * @param {*} s      - Any
       * @param  {String} defaultCls      - Default string
       * @param  {?*} targetCls      - Any
       * @returns {*} 
       */
      function _clsWrite(s, defaultCls) {
        var targetCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        return s || s === '' ? typeof targetCls === 'undefined' ? s : targetCls : defaultCls;
      }

      /**
       * Combined classnames
       * @param {*} args 
       * @returns {String|undefined}
       */
      /* Usage:
      
      console.log(combinedCls('a-1', 'a-2', 'a-3', {
          'p-1': null,
          'p-2': undefined,
          'p-3': true,
          'p-4': false,
          'p-5': 'kkk',
          'p-6': 0,
          'p-7': 1,
          'p-8': '',
          undefined
      })); // a-1 a-2 a-3 p-3 p-5 p-7
      */
      function _combinedCls() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (args) {
          var classes = [];
          for (var i = 0; i < args.length; i++) {
            var className = args[i];
            if (!className) {
              continue;
            }
            var type = _typeof(className);
            if (type === 'string' || type === 'number') {
              classes.push(className);
            } else if (type === 'object') {
              var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return value ? key : null;
              });
              classes = _classes.length ? classes.concat(_classes.filter(function (c) {
                return !!c;
              })) : classes;
            }
          }
          return classes.join(' ').trim();
        }
        return undefined;
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
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
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
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
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"addTreeDepth": function addTreeDepth() {
          return (/* binding */_addTreeDepth
          );
        },
        /* harmony export */"addTreeIndent": function addTreeIndent() {
          return (/* binding */_addTreeIndent
          );
        },
        /* harmony export */"convertTree": function convertTree() {
          return (/* binding */_convertTree
          );
        },
        /* harmony export */"flatTree": function flatTree() {
          return (/* binding */_flatTree
          );
        },
        /* harmony export */"getAllDepth": function getAllDepth() {
          return (/* binding */_getAllDepth
          );
        }
        /* harmony export */
      });
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      var _excluded = ["children"];
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return _typeof(key) === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectDestructuringEmpty(obj) {
        if (obj == null) throw new TypeError("Cannot destructure " + obj);
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      /**
       * Convert Tree
       * @param {Array} arr                    - Flat array
       * @param  {?string | ?number} parentId  - Parent id
       * @param  {?string} keyId               - Key value of id.
       * @param  {?string} keyParentId         - Key value of parent id.
       * @returns Array
       */
      function _convertTree(arr) {
        var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var keyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
        var keyParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent_id';
        if (!parentId) {
          // If there is no parent id (when recursing for the first time), all parents will be queried
          return arr.filter(function (item) {
            return !item[keyParentId];
          }).map(function (item) {
            // Query all child nodes by parent node ID
            item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
            return item;
          });
        } else {
          return arr.filter(function (item) {
            return item[keyParentId] === parentId;
          }).map(function (item) {
            // Query all child nodes by parent node ID
            item.children = _convertTree(arr, item[keyId], keyId, keyParentId);
            return item;
          });
        }
      }

      /**
       * Flat tree
       * @param {Array} arr                    - Hierarchical array
       * @returns Array
       */
      function _flatTree(arr) {
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
      function _getAllDepth(arr) {
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
      * @param  {?string} keyId               - Key value of id.
      * @param  {?string} keyParentId         - Key value of parent id.
      * @param  {?number} depth               - Depth of the item.
      * @returns Number
      */
      function _addTreeDepth(arr) {
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
            return acc.concat(_addTreeDepth(children, keyId, el[keyId], depth + 1));
          }
          return acc;
        }, []);
      }

      /**
       * Add indent placeholder
       * @param {Array} arr                    - Flat array
       * @param  {?string} placeholder         - String of placeholder
       * @param  {?string} lastPlaceholder     - Last String of placeholder
       * @param  {?string} keyName             - Key value of name.
       * @returns Array
       */
      function _addTreeIndent(arr) {
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

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

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
      function __nested_webpack_require_1465__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1465__);
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
        /******/__nested_webpack_require_1465__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1465__.d(getter, {
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
        /******/__nested_webpack_require_1465__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1465__.o(definition, key) && !__nested_webpack_require_1465__.o(exports, key)) {
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
        /******/__nested_webpack_require_1465__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1465__.r = function (exports) {
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
        __nested_webpack_require_1465__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1465__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          },
          /* harmony export */"useBoundedDrag": function useBoundedDrag() {
            return (/* binding */_useBoundedDrag
            );
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1465__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1465__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
          if (null != _i) {
            var _s,
              _e,
              _x,
              _r,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
              } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
            } catch (err) {
              _d = !0, _e = err;
            } finally {
              try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        /**
         * Bounded Drag
         * 
         * @usage:
        
        
        const App = () => {
            const [items, setItems] = useState<ListItem[]>([]);
            // ... other states and refs
              
            const deepCloneWithReactNode = (obj: any): any => {
                if (obj === null || typeof obj !== 'object') {
                    return obj;
                }
        
                // Handle array
                if (Array.isArray(obj)) {
                    return obj.map(item => deepCloneWithReactNode(item));
                }
        
                // Handle object
                const clonedObj: any = {};
                for (const key in obj) {
                    if (key === 'appendControl') {
                        clonedObj[key] = obj[key];
                    } else {
                        clonedObj[key] = deepCloneWithReactNode(obj[key]);
                    }
                }
                return clonedObj;
            };
        
        
            const getItemWithChildrenIndices = (items: ListItem[], startIndex: number): number[] => {
                const indices = [startIndex];
                const startItem = items[startIndex];
                const startDepth = startItem.depth || 0;
        
                // Check if subsequent items are child items
                for (let i = startIndex + 1; i < items.length; i++) {
                    const currentItem = items[i];
                    const currentDepth = currentItem.depth || 0;
                    if (currentDepth > startDepth) {
                        indices.push(i);
                    } else {
                        break;
                    }
                }
        
                return indices;
            };
        
        
            const { isDragging, dragHandlers } = useBoundedDrag({
                dragMode,
                boundarySelector: '.custom-draggable-list',
                itemSelector:'.custom-draggable-list__item',
                dragHandleSelector: '.custom-draggable-list__handle',
                onDragStart: (index: number) => {
                    // Additional drag start logic if needed
                },
                onDragOver: (dragIndex: number | null, dropIndex: number | null) => {
                    // Additional drag over logic if needed
                },
                onDragEnd: (dragIndex: number | null, dropIndex: number | null) => {
                    if (dragIndex !== null && dropIndex !== null && dragIndex !== dropIndex) {
                        // Handle item movement
                        const newItems = deepCloneWithReactNode(items);
                        const itemsToMove = getItemWithChildrenIndices(newItems, dragIndex);
                        const itemsBeingMoved = itemsToMove.map(index => newItems[index]);
        
                        // ... rest of your existing drag end logic ...
        
                        setItems(updatedItems);
        
                    }
                }
            });
        
            // Update your JSX to use the new handlers
            return (
                <ul className="custom-draggable-list">
                {items.map((item: any, index: number) => (
                    <li
                        // ... other props
                        draggable={!draggable ? undefined : editingItem !== item.id && "true"}
                        onDragStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                        onDragOver={!draggable ? undefined : dragHandlers.handleDragOver}
                        onDragEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                        onTouchStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                        onTouchMove={!draggable ? undefined : dragHandlers.handleDragOver}
                        onTouchEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                    >
                        <li className="custom-draggable-list__item">
                            <span className="custom-draggable-list__handle">☰</span>
                            <i>content {indec}<i>
                        </li>
                    </li>
                ))}
            </ul>
        );
        
         */

        var _useBoundedDrag = function useBoundedDrag() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$dragMode = options.dragMode,
            dragMode = _options$dragMode === void 0 ? 'handle' : _options$dragMode,
            _options$boundarySele = options.boundarySelector,
            boundarySelector = _options$boundarySele === void 0 ? '.custom-draggable-list' : _options$boundarySele,
            _options$itemSelector = options.itemSelector,
            itemSelector = _options$itemSelector === void 0 ? '.custom-draggable-list__item' : _options$itemSelector,
            _options$dragHandleSe = options.dragHandleSelector,
            dragHandleSelector = _options$dragHandleSe === void 0 ? '.custom-draggable-list__handle' : _options$dragHandleSe,
            onDragStart = options.onDragStart,
            onDragOver = options.onDragOver,
            onDragEnd = options.onDragEnd;
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            isDragging = _useState2[0],
            setIsDragging = _useState2[1];
          var dragItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var dragOverItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var dragNode = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var touchOffset = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
            x: 0,
            y: 0
          });
          var currentHoverItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var handleDragStart = function handleDragStart(e, position) {
            var isTouch = ('touches' in e);
            var target = e.target;

            // For block mode or handle mode check
            if (dragMode === 'handle') {
              var handle = target.closest(dragHandleSelector);
              if (!handle) {
                if (!isTouch) e.preventDefault();
                return false;
              }
            }

            // Find the draggable item
            var listItem = target.closest(itemSelector);
            if (!listItem) return;

            // Check boundary
            var boundary = listItem.closest(boundarySelector);
            if (!boundary) return;
            dragItem.current = position;
            onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(position);
            if (isTouch) {
              e.preventDefault(); // Prevent scrolling
              var touch = e.touches[0];
              var rect = listItem.getBoundingClientRect();
              var boundaryRect = boundary.getBoundingClientRect();

              // Calculate offset relative to the boundary
              touchOffset.current = {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              };

              // Clone the item for dragging
              dragNode.current = listItem.cloneNode(true);
              dragNode.current.classList.add('dragging');

              // Style the clone
              Object.assign(dragNode.current.style, {
                position: 'fixed',
                width: "".concat(rect.width, "px"),
                height: "".concat(rect.height, "px"),
                left: "".concat(rect.left, "px"),
                top: "".concat(rect.top, "px"),
                zIndex: '1000',
                pointerEvents: 'none',
                transform: 'scale(1.05)',
                transition: 'transform 0.1s',
                opacity: '0.9'
              });
              document.body.appendChild(dragNode.current);
              setIsDragging(true);
              listItem.classList.add('dragging-placeholder');
            } else {
              // ... desktop drag logic remains the same ...
            }
          };
          var handleDragOver = function handleDragOver(e) {
            e.preventDefault();
            var isTouch = ('touches' in e);
            if (!isTouch) {
              e.dataTransfer.dropEffect = 'move';
            }

            // Get the current pointer/touch position
            var point = isTouch ? e.touches[0] : {
              clientX: e.clientX,
              clientY: e.clientY
            };

            // Update dragged element position for touch events
            if (isTouch && isDragging && dragNode.current) {
              dragNode.current.style.left = "".concat(point.clientX - touchOffset.current.x, "px");
              dragNode.current.style.top = "".concat(point.clientY - touchOffset.current.y, "px");
            }

            // Find the element below the pointer/touch
            var elemBelow = document.elementFromPoint(point.clientX, point.clientY);
            if (!elemBelow) return;

            // Find the closest list item
            var listItem = elemBelow.closest(itemSelector);
            if (!listItem || listItem === currentHoverItem.current) return;

            // Check boundary
            var boundary = listItem.closest(boundarySelector);
            if (!boundary) return;

            // Update hover states
            if (currentHoverItem.current) {
              currentHoverItem.current.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
            }
            currentHoverItem.current = listItem;
            listItem.classList.add('drag-over');

            // Calculate position in list
            var position = Array.from(listItem.parentNode.children).indexOf(listItem);
            dragOverItem.current = position;

            // Determine drop position (top/bottom)
            var rect = listItem.getBoundingClientRect();
            var middleY = rect.top + rect.height / 2;
            if (point.clientY < middleY) {
              listItem.classList.add('drag-over-top');
            } else {
              listItem.classList.add('drag-over-bottom');
            }
            onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(dragItem.current, dragOverItem.current);
          };
          var handleDragEnd = function handleDragEnd(e) {
            var isTouch = ('touches' in e);
            if (isTouch && !isDragging) return;
            onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(dragItem.current, dragOverItem.current);

            // Cleanup
            if (dragNode.current) {
              dragNode.current.remove();
              dragNode.current = null;
            }
            document.querySelectorAll(itemSelector).forEach(function (item) {
              item.style.opacity = '1';
              item.classList.remove('dragging', 'dragging-placeholder', 'drag-over', 'drag-over-top', 'drag-over-bottom');
            });
            setIsDragging(false);
            currentHoverItem.current = null;
            dragItem.current = null;
            dragOverItem.current = null;
          };
          return {
            isDragging: isDragging,
            dragHandlers: {
              handleDragStart: handleDragStart,
              handleDragOver: handleDragOver,
              handleDragEnd: handleDragEnd
            }
          };
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = _useBoundedDrag;
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(759);
/* harmony import */ var funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["wrapperClassName", "prefix", "data", "draggable", "handleHide", "handleIcon", "handlePos", "dragMode", "editable", "itemStyle", "hierarchical", "indentation", "doubleIndent", "alternateCollapse", "arrow", "onUpdate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var DragDropList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var wrapperClassName = props.wrapperClassName,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'custom' : _props$prefix,
    data = props.data,
    _props$draggable = props.draggable,
    draggable = _props$draggable === void 0 ? true : _props$draggable,
    _props$handleHide = props.handleHide,
    handleHide = _props$handleHide === void 0 ? false : _props$handleHide,
    _props$handleIcon = props.handleIcon,
    handleIcon = _props$handleIcon === void 0 ? '☰' : _props$handleIcon,
    _props$handlePos = props.handlePos,
    handlePos = _props$handlePos === void 0 ? 'left' : _props$handlePos,
    _props$dragMode = props.dragMode,
    dragMode = _props$dragMode === void 0 ? 'handle' : _props$dragMode,
    _props$editable = props.editable,
    editable = _props$editable === void 0 ? false : _props$editable,
    itemStyle = props.itemStyle,
    _props$hierarchical = props.hierarchical,
    hierarchical = _props$hierarchical === void 0 ? true : _props$hierarchical,
    indentation = props.indentation,
    doubleIndent = props.doubleIndent,
    alternateCollapse = props.alternateCollapse,
    _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }))) : _props$arrow,
    onUpdate = props.onUpdate,
    attributes = _objectWithoutProperties(props, _excluded);
  var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
  var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editingItem = _useState4[0],
    setEditingItem = _useState4[1];
  var dragHandle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Edit
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    editValue = _useState6[0],
    setEditValue = _useState6[1];

  // Collapse/Expand
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    collapsedItems = _useState8[0],
    setCollapsedItems = _useState8[1];

  // Get editable field list
  var getEditableFields = function getEditableFields(item) {
    // Exclude fields that don't need to be edited
    var excludeFields = ['id', 'parentId', 'depth', 'children', 'disabled', 'appendControl', 'parentItem'];
    return Object.keys(item).filter(function (key) {
      return !excludeFields.includes(key);
    });
  };

  // ================================================================
  // General
  // ================================================================
  var deepCloneWithReactNode = function deepCloneWithReactNode(obj) {
    if (obj === null || _typeof(obj) !== 'object') {
      return obj;
    }

    // Handle array
    if (Array.isArray(obj)) {
      return obj.map(function (item) {
        return deepCloneWithReactNode(item);
      });
    }

    // Handle object
    var clonedObj = {};
    for (var _key in obj) {
      if (_key === 'appendControl') {
        clonedObj[_key] = obj[_key];
      } else {
        clonedObj[_key] = deepCloneWithReactNode(obj[_key]);
      }
    }
    return clonedObj;
  };
  var getItemWithChildrenIndices = function getItemWithChildrenIndices(items, startIndex) {
    var indices = [startIndex];
    var startItem = items[startIndex];
    var startDepth = startItem.depth || 0;

    // Check if subsequent items are child items
    for (var i = startIndex + 1; i < items.length; i++) {
      var currentItem = items[i];
      var currentDepth = currentItem.depth || 0;
      if (currentDepth > startDepth) {
        indices.push(i);
      } else {
        break;
      }
    }
    return indices;
  };
  var getIndentStr = function getIndentStr(item) {
    // Add indent placeholder
    var indent = '';
    var depthData = item.depth;
    if (depthData) {
      Array(depthData).fill(0).forEach(function (k, i) {
        indent += INDENT_PLACEHOLDER;
        if (i === depthData - 1) {
          indent += INDENT_LAST_PLACEHOLDER;
        }
      });
    }
    return indent;
  };

  // ================================================================
  // Collapse/Expand
  // ================================================================
  // Add collapse/expand handler function
  var handleCollapse = function handleCollapse(itemId, e) {
    e.preventDefault();
    e.stopPropagation();
    setCollapsedItems(function (prev) {
      var newCollapsed = new Set(prev);
      if (newCollapsed.has(itemId)) {
        newCollapsed["delete"](itemId);
      } else {
        newCollapsed.add(itemId);
      }
      return newCollapsed;
    });
  };

  // Helper function to determine if an item should be displayed
  var shouldShowItem = function shouldShowItem(item) {
    if (!alternateCollapse) return true;
    var currentId = item.parentId;
    while (currentId) {
      if (collapsedItems.has(currentId)) {
        return false;
      }
      var parentItem = items.find(function (i) {
        return i.id === currentId;
      });
      currentId = parentItem === null || parentItem === void 0 ? void 0 : parentItem.parentId;
    }
    return true;
  };
  var hasChildren = function hasChildren(itemId) {
    return items.some(function (item) {
      return item.parentId === itemId;
    });
  };

  // ================================================================
  // Drag & Drop Handlers (Desktop & Touch)
  // ================================================================
  var _useBoundedDrag = funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3___default()({
      dragMode: dragMode,
      boundarySelector: ".".concat(prefix, "-draggable-list"),
      itemSelector: ".".concat(prefix, "-draggable-list__item"),
      dragHandleSelector: ".".concat(prefix, "-draggable-list__handle"),
      onDragStart: function onDragStart(index) {
        // Additional drag start logic if needed
      },
      onDragOver: function onDragOver(dragIndex, dropIndex) {
        // Additional drag over logic if needed
      },
      onDragEnd: function onDragEnd(dragIndex, dropIndex) {
        if (dragIndex !== null && dropIndex !== null && dragIndex !== dropIndex) {
          var _newItems$dragIndex, _newItems$dragIndex2, _newItems$dropIndex;
          // Handle item movement
          var newItems = deepCloneWithReactNode(items);
          var itemsToMove = getItemWithChildrenIndices(newItems, dragIndex);
          var itemsBeingMoved = itemsToMove.map(function (index) {
            return newItems[index];
          });

          // ... rest of your existing drag end logic ...

          var _targetId = (_newItems$dragIndex = newItems[dragIndex]) === null || _newItems$dragIndex === void 0 ? void 0 : _newItems$dragIndex.id;

          // Calculate depth difference
          var draggedDepth = ((_newItems$dragIndex2 = newItems[dragIndex]) === null || _newItems$dragIndex2 === void 0 ? void 0 : _newItems$dragIndex2.depth) || 0;
          var dropDepth = ((_newItems$dropIndex = newItems[dropIndex]) === null || _newItems$dropIndex === void 0 ? void 0 : _newItems$dropIndex.depth) || 0;
          var depthDiff = dropDepth - draggedDepth;

          // Adjust depth for all moving items
          itemsBeingMoved.forEach(function (item) {
            if (item.depth !== undefined) {
              item.depth += depthDiff;
            }
          });

          // Remove all items from their original location (from back to front to keep indexing correct)
          itemsToMove.reverse().forEach(function (index) {
            newItems.splice(index, 1);
          });

          // Calculate new insert position
          var insertIndex = dropIndex;
          if (dropIndex > dragIndex) {
            insertIndex -= itemsToMove.length;
          }

          // Insert all items
          newItems.splice.apply(newItems, [insertIndex, 0].concat(_toConsumableArray(itemsBeingMoved)));

          // Rebuild tree structure
          var tree = hierarchical ? (0,funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.convertTree)(newItems, '', 'id', 'parentId') : newItems;
          var updatedItems = hierarchical ? (0,funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeDepth)(tree) : tree;
          setItems(updatedItems);
          onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(updatedItems, _targetId);
        }
      }
    }),
    isDragging = _useBoundedDrag.isDragging,
    dragHandlers = _useBoundedDrag.dragHandlers;

  // ================================================================
  // Editable
  // ================================================================

  var handleDoubleClick = function handleDoubleClick(item) {
    if (!editable) return;
    setEditingItem(item.id);
    // Only editable fields are copied
    var editableFields = getEditableFields(item);
    var editableValues = editableFields.reduce(function (acc, field) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, field, item[field]));
    }, {});
    setEditValue(editableValues);
  };
  var handleEditCancel = function handleEditCancel() {
    setEditingItem(null);
    setEditValue({});
  };
  var handleEditSave = function handleEditSave(itemId) {
    var newItems = items.map(function (item) {
      if (item.id === itemId) {
        return _objectSpread(_objectSpread({}, item), editValue);
      }
      return item;
    });
    setItems(newItems);
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(newItems, itemId);
    setEditingItem(null);
    setEditValue({});
  };
  var handleInputChange = function handleInputChange(field, value) {
    setEditValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };
  var handleKeyDown = function handleKeyDown(e, itemId) {
    if (e.key === 'Enter') {
      handleEditSave(itemId);
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  };
  var renderEditForm = function renderEditForm(item) {
    var editableFields = getEditableFields(item);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__edit-form")
    }, editableFields.map(function (field) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: field,
        className: "".concat(prefix, "-draggable-list__edit-field")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, field, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: editValue[field] || '',
        onChange: function onChange(e) {
          return handleInputChange(field, e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return handleKeyDown(e, item.id);
        },
        placeholder: field,
        autoFocus: field === editableFields[0]
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__edit-buttons")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleEditSave(item.id);
      }
    }, "\u2713"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleEditCancel
    }, "\u2715")));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // data init
    //--------------
    if (typeof data !== 'undefined' && Array.isArray(data)) {
      var tree = hierarchical ? (0,funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.convertTree)(data, '', 'id', 'parentId') : data;
      var _ORGIN_DATA = hierarchical ? (0,funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeDepth)(tree) : tree;
      setItems(_ORGIN_DATA);
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", _extends({}, attributes, {
    ref: function ref(node) {
      rootRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("".concat(prefix, "-draggable-list"), (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(wrapperClassName, 'mb-3'), (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(dragMode, 'handle'), "handle-pos-".concat(handlePos !== null && handlePos !== void 0 ? handlePos : 'left'), {
      'draggable': draggable,
      'icon-hide': handleHide,
      'alternate-collapse': alternateCollapse
    })
  }), items.map(function (item, index) {
    // If the item should be hidden, the rendering is skipped
    if (!shouldShowItem(item)) return null;

    // collapse
    var hasChildItems = hasChildren(item.id);
    var isCollapsed = collapsedItems.has(item.id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.id,
      "data-index": index,
      "data-id": item.id,
      "data-parent-id": item.parentId,
      "data-value": item.value,
      "data-label": item.label,
      "data-listitemlabel": item.listItemLabel,
      className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("".concat(prefix, "-draggable-list__item"), (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(dragMode, 'handle'), {
        'disabled': item.disabled,
        'draggable': draggable,
        'editing': editingItem === item.id,
        // collapse
        'has-children': hasChildItems,
        'collapsed': isCollapsed
      }),
      draggable: !draggable ? undefined : editingItem !== item.id && "true",
      onDragStart: !draggable ? undefined : function (e) {
        return dragHandlers.handleDragStart(e, index);
      },
      onDragOver: !draggable ? undefined : dragHandlers.handleDragOver,
      onDragEnd: !draggable ? undefined : dragHandlers.handleDragEnd,
      onTouchStart: !draggable ? undefined : function (e) {
        return dragHandlers.handleDragStart(e, index);
      },
      onTouchMove: !draggable ? undefined : dragHandlers.handleDragOver,
      onTouchEnd: !draggable ? undefined : dragHandlers.handleDragEnd,
      style: itemStyle,
      onDoubleClick: function onDoubleClick() {
        return handleDoubleClick(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__itemcontent")
    }, draggable && !handleHide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      ref: dragHandle,
      className: "".concat(prefix, "-draggable-list__handle ").concat(handlePos !== null && handlePos !== void 0 ? handlePos : 'left'),
      draggable: dragMode === 'handle',
      dangerouslySetInnerHTML: {
        __html: "".concat(handleIcon)
      }
    }) : null, editingItem === item.id ? renderEditForm(item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__itemcontent-inner")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__itemlabel")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "".concat(getIndentStr(item)).concat(typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel)
      }
    }), alternateCollapse && hasChildItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "".concat(prefix, "-draggable-list__collapse-arrow"),
      onClick: function onClick(e) {
        return handleCollapse(item.id, e);
      }
    }, arrow || (isCollapsed ? '▶' : '▼'))), item.appendControl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(prefix, "-draggable-list__itemext"),
      id: "".concat(prefix, "-draggable-list__itemext-").concat(item.value)
    }, item.appendControl)) : null)));
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragDropList);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});