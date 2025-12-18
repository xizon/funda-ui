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

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof3(obj) { "@babel/helpers - typeof"; return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof3(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof3(exports)) === 'object' && ( false ? 0 : _typeof3(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      var __webpack_modules__ = {
        /***/188: /***/function _(module, exports, __nested_webpack_require_1080__) {
          /* module decorator */module = __nested_webpack_require_1080__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof2(obj) {
            "@babel/helpers - typeof";

            return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof2(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/438: /***/function _(module, exports, __nested_webpack_require_11464__) {
          /* module decorator */module = __nested_webpack_require_11464__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof2(obj) {
            "@babel/helpers - typeof";

            return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof2(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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

          /***/
        },

        /***/759: /***/function _(module, exports, __nested_webpack_require_29526__) {
          /* module decorator */module = __nested_webpack_require_29526__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
              return typeof obj;
            } : function (obj) {
              return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__nested_webpack_require_29526__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__nested_webpack_require_29526__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
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
                      onDragUpdate = options.onDragUpdate,
                      onDragEnd = options.onDragEnd;
                    var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
                      _useState2 = _slicedToArray(_useState, 2),
                      isDragging = _useState2[0],
                      setIsDragging = _useState2[1];
                    var dragItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var dragOverItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var dragNode = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var draggedElement = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var boundaryElement = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var touchOffset = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                      x: 0,
                      y: 0
                    });
                    var currentHoverItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var rafId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var lastUpdateDragIndex = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    var lastUpdateDropIndex = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

                    /**
                     * Performance Note:
                     *
                     * Drag-over events can fire at a very high frequency, especially on touch devices
                     * or when dragging quickly. Directly performing DOM read/write operations in the
                     * event handler (e.g. `getBoundingClientRect`, `classList` changes, style updates)
                     * can easily cause layout thrashing and frame drops when there are many items.
                     *
                     * To mitigate this, we:
                     * - Collect the pointer coordinates synchronously in the event handler.
                     * - Schedule all DOM-intensive work inside `requestAnimationFrame`, so the browser
                     *   batches these operations before the next paint.
                     * - Cancel any pending frame (`cancelAnimationFrame`) before scheduling a new one,
                     *   ensuring there is at most one pending DOM update per frame.
                     *
                     * This keeps drag interactions smooth even with large lists.
                     */

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

                        // Keep track of the original element (acts as a placeholder inside the list)
                        draggedElement.current = listItem;
                        boundaryElement.current = boundary;
                        setIsDragging(true);
                        listItem.classList.add('dragging-placeholder');
                      } else {
                        // Desktop: use native drag image, but still record dragged element / boundary
                        draggedElement.current = listItem;
                        boundaryElement.current = boundary;
                        setIsDragging(true);
                        var dragEvent = e;
                        if (dragEvent.dataTransfer) {
                          dragEvent.dataTransfer.effectAllowed = 'move';
                          // Optional: customize drag preview if needed
                          dragEvent.dataTransfer.setData('text/plain', '');
                        }
                        listItem.classList.add('dragging-placeholder');
                      }
                    };
                    var handleDragOver = function handleDragOver(e) {
                      // Always prevent default synchronously
                      e.preventDefault();
                      var isTouch = ('touches' in e);
                      if (!isTouch) {
                        e.dataTransfer.dropEffect = 'move';
                      }

                      // Extract primitive coordinates synchronously to avoid using pooled events in async callbacks
                      var clientX;
                      var clientY;
                      if (isTouch) {
                        var touch = e.touches[0];
                        clientX = touch.clientX;
                        clientY = touch.clientY;
                      } else {
                        clientX = e.clientX;
                        clientY = e.clientY;
                      }

                      // Cancel any pending frame to avoid stacking DOM operations
                      if (rafId.current !== null) {
                        cancelAnimationFrame(rafId.current);
                      }
                      rafId.current = requestAnimationFrame(function () {
                        // Update dragged element position for touch events
                        if (isTouch && isDragging && dragNode.current) {
                          dragNode.current.style.left = "".concat(clientX - touchOffset.current.x, "px");
                          dragNode.current.style.top = "".concat(clientY - touchOffset.current.y, "px");
                        }

                        // Find the element below the pointer/touch
                        var elemBelow = document.elementFromPoint(clientX, clientY);
                        if (!elemBelow) return;

                        // Find the closest list item
                        var listItem = elemBelow.closest(itemSelector);
                        if (!listItem) return;

                        // Check boundary
                        var boundary = boundaryElement.current || listItem.closest(boundarySelector);
                        if (!boundary) return;

                        // Update hover states
                        if (currentHoverItem.current && currentHoverItem.current !== listItem) {
                          currentHoverItem.current.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
                        }
                        currentHoverItem.current = listItem;
                        listItem.classList.add('drag-over');
                        var dragEl = draggedElement.current;
                        if (!dragEl || !dragEl.parentNode) return;
                        var container = boundary;

                        // Collect current ordered items in the container
                        var children = Array.from(container.querySelectorAll(itemSelector));
                        var currentIndex = children.indexOf(dragEl);
                        var targetIndex = children.indexOf(listItem);
                        if (currentIndex === -1 || targetIndex === -1) return;

                        // Determine drop position (top/bottom)
                        var rect = listItem.getBoundingClientRect();
                        var middleY = rect.top + rect.height / 2;
                        listItem.classList.remove('drag-over-top', 'drag-over-bottom');
                        var insertBefore = clientY < middleY ? listItem : listItem.nextElementSibling;
                        if (clientY < middleY) {
                          listItem.classList.add('drag-over-top');
                        } else {
                          listItem.classList.add('drag-over-bottom');
                        }

                        // Only move in DOM when the effective position changes
                        if (insertBefore !== dragEl && container.contains(dragEl)) {
                          container.insertBefore(dragEl, insertBefore);
                        }

                        // Recompute index after DOM move
                        var reorderedChildren = Array.from(container.querySelectorAll(itemSelector));
                        var newIndex = reorderedChildren.indexOf(dragEl);
                        dragOverItem.current = newIndex;
                        onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(dragItem.current, dragOverItem.current);

                        // Only fire onDragUpdate when the (dragIndex, dropIndex) pair actually changes.
                        if (onDragUpdate && (dragItem.current !== lastUpdateDragIndex.current || dragOverItem.current !== lastUpdateDropIndex.current)) {
                          lastUpdateDragIndex.current = dragItem.current;
                          lastUpdateDropIndex.current = dragOverItem.current;
                          onDragUpdate(dragItem.current, dragOverItem.current);
                        }
                        rafId.current = null;
                      });
                    };
                    var handleDragEnd = function handleDragEnd(e) {
                      var isTouch = ('touches' in e);
                      if (isTouch && !isDragging) return;
                      onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(dragItem.current, dragOverItem.current);

                      // Cancel any pending animation frame
                      if (rafId.current !== null) {
                        cancelAnimationFrame(rafId.current);
                        rafId.current = null;
                      }

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
                      draggedElement.current = null;
                      boundaryElement.current = null;
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

          /***/
        },

        /***/787: /***/function _(module) {
          "use strict";

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
      function __nested_webpack_require_59897__(moduleId) {
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
          /******/id: moduleId,
          /******/loaded: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_59897__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
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
        /******/__nested_webpack_require_59897__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_59897__.d(getter, {
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
        /******/__nested_webpack_require_59897__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_59897__.o(definition, key) && !__nested_webpack_require_59897__.o(exports, key)) {
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
        /******/__nested_webpack_require_59897__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_59897__.r = function (exports) {
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
      /******/ /* webpack/runtime/node module decorator */
      /******/
      (function () {
        /******/__nested_webpack_require_59897__.nmd = function (module) {
          /******/module.paths = [];
          /******/
          if (!module.children) module.children = [];
          /******/
          return module;
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be in strict mode.
      (function () {
        "use strict";

        __nested_webpack_require_59897__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_59897__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59897__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_59897__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_59897__(438);
        /* harmony import */
        var funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_59897__.n(funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_59897__(188);
        /* harmony import */
        var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_59897__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_59897__(759);
        /* harmony import */
        var funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_59897__.n(funda_utils_dist_cjs_useBoundedDrag__WEBPACK_IMPORTED_MODULE_3__);
        var _excluded = ["wrapperClassName", "prefix", "data", "draggable", "handleHide", "handleIcon", "handlePos", "dragMode", "editable", "itemStyle", "hierarchical", "indentation", "doubleIndent", "alternateCollapse", "arrow", "renderOption", "onUpdate"];
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
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
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
        var DragDropList = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
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
            arrow = _props$arrow === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
              viewBox: "0 0 22 22",
              width: "8px"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
              d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
              transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
              fill: "#a5a5a5"
            }))) : _props$arrow,
            renderOption = props.renderOption,
            onUpdate = props.onUpdate,
            attributes = _objectWithoutProperties(props, _excluded);
          var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
          var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
            _useState2 = _slicedToArray(_useState, 2),
            items = _useState2[0],
            setItems = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
            _useState4 = _slicedToArray(_useState3, 2),
            editingItem = _useState4[0],
            setEditingItem = _useState4[1];

          // Edit
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
            _useState6 = _slicedToArray(_useState5, 2),
            editValue = _useState6[0],
            setEditValue = _useState6[1];

          // Collapse/Expand
          var _useState7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set()),
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
              onDragUpdate: function onDragUpdate(dragIndex, dropIndex) {
                // console.log(dragIndex, dropIndex);
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
                  // Directly use dropIndex as the insertion position to avoid items snapping back
                  // when dragging an item from above to directly below its neighbor.
                  var insertIndex = dropIndex;

                  // Insert all items (remove first, then insert at the target index;
                  // JavaScript's splice will handle index shifting automatically).
                  newItems.splice.apply(newItems, [insertIndex, 0].concat(_toConsumableArray(itemsBeingMoved)));

                  // Rebuild tree structure
                  var tree = hierarchical ? (0, funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.convertTree)(newItems, '', 'id', 'parentId') : newItems;
                  var updatedItems = hierarchical ? (0, funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeDepth)(tree) : tree;
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
            if (e.key === 'Enter' || e.key === 'NumpadEnter') {
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
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // data init
            //--------------
            if (typeof data !== 'undefined' && Array.isArray(data)) {
              var tree = hierarchical ? (0, funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.convertTree)(data, '', 'id', 'parentId') : data;
              var _ORGIN_DATA = hierarchical ? (0, funda_utils_dist_cjs_tree__WEBPACK_IMPORTED_MODULE_1__.addTreeDepth)(tree) : tree;
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
            className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("".concat(prefix, "-draggable-list"), (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(wrapperClassName, 'mb-3'), (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(dragMode, 'handle'), "handle-pos-".concat(handlePos !== null && handlePos !== void 0 ? handlePos : 'left'), {
              'draggable': draggable,
              'icon-hide': handleHide,
              'alternate-collapse': alternateCollapse
            })
          }), items.map(function (item, index) {
            // If the item should be hidden, the rendering is skipped
            if (!shouldShowItem(item)) return null;

            // Item level draggable control, default true when not specified
            var isItemDraggable = draggable && item.itemDraggable !== false;

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
              className: (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.combinedCls)("".concat(prefix, "-draggable-list__item"), (0, funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_2__.clsWrite)(dragMode, 'handle'), {
                'disabled': item.disabled,
                'draggable': isItemDraggable,
                'editing': editingItem === item.id,
                // collapse
                'has-children': hasChildItems,
                'collapsed': isCollapsed
              }),
              draggable: !isItemDraggable ? undefined : editingItem !== item.id && "true",
              onDragStart: !isItemDraggable ? undefined : function (e) {
                return dragHandlers.handleDragStart(e, index);
              },
              onDragOver: !isItemDraggable ? undefined : dragHandlers.handleDragOver,
              onDragEnd: !isItemDraggable ? undefined : dragHandlers.handleDragEnd,
              onTouchStart: !isItemDraggable ? undefined : function (e) {
                return dragHandlers.handleDragStart(e, index);
              },
              onTouchMove: !isItemDraggable ? undefined : dragHandlers.handleDragOver,
              onTouchEnd: !isItemDraggable ? undefined : dragHandlers.handleDragEnd,
              style: itemStyle,
              onDoubleClick: function onDoubleClick() {
                return handleDoubleClick(item);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "".concat(prefix, "-draggable-list__itemcontent")
            }, renderOption ? renderOption(item, isItemDraggable ? "".concat(prefix, "-draggable-list__handle") : '', index) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, isItemDraggable && !handleHide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
            }, arrow || (isCollapsed ? '▶' : '▼'))), item.appendControl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "".concat(prefix, "-draggable-list__itemext"),
              id: "".concat(prefix, "-draggable-list__itemext-").concat(item.value)
            }, item.appendControl)) : null))));
          }));
        });
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = DragDropList;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      var __nested_webpack_require_987__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_987__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_987__.o(definition, key) && !__nested_webpack_require_987__.o(exports, key)) {
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
        /******/__nested_webpack_require_987__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_987__.r = function (exports) {
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
      __nested_webpack_require_987__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_987__.d(__webpack_exports__, {
        /* harmony export */"convertArrToValByBraces": function convertArrToValByBraces() {
          return (/* binding */_convertArrToValByBraces
          );
        },
        /* harmony export */"convertArrToValByBrackets": function convertArrToValByBrackets() {
          return (/* binding */_convertArrToValByBrackets
          );
        },
        /* harmony export */"convertStringByCommaToValByBraces": function convertStringByCommaToValByBraces() {
          return (/* binding */_convertStringByCommaToValByBraces
          );
        },
        /* harmony export */"convertStringByCommaToValByBrackets": function convertStringByCommaToValByBrackets() {
          return (/* binding */_convertStringByCommaToValByBrackets
          );
        }
        /* harmony export */
      });
      /**
       * Convert value to string separated by square brackets 
       * @param {String} str  such as: 1,2,3
       * @returns {String} such as: [1][2][3]
       */
      function _convertStringByCommaToValByBrackets(str) {
        if (typeof str === 'undefined' || str === null || str === '') {
          return '';
        }
        return str.split(',').map(function (v) {
          return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
        }).join('');
      }

      /**
       * Convert array value to string  separated by square brackets 
       * @param {String[]} arr  such as: ['1','2','3']
       * @returns {String} such as: [1][2][3]
       */
      function _convertArrToValByBrackets(arr) {
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
      function _convertStringByCommaToValByBraces(str) {
        if (typeof str === 'undefined' || str === null || str === '') {
          return '';
        }
        return str.split(',').map(function (v) {
          return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
        }).join('');
      }

      /**
       * Convert array value to string  separated by curly braces
       * @param {String[]} arr  such as: ['1','2','3']
       * @returns {String} such as: {1}{2}{3}
       */
      function _convertArrToValByBraces(arr) {
        if (!Array.isArray(arr)) return '';
        return arr.map(function (v) {
          return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
        }).join('');
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      var __nested_webpack_require_987__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_987__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_987__.o(definition, key) && !__nested_webpack_require_987__.o(exports, key)) {
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
        /******/__nested_webpack_require_987__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_987__.r = function (exports) {
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
      __nested_webpack_require_987__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_987__.d(__webpack_exports__, {
        /* harmony export */"extractContentsOfBraces": function extractContentsOfBraces() {
          return (/* binding */_extractContentsOfBraces
          );
        },
        /* harmony export */"extractContentsOfBrackets": function extractContentsOfBrackets() {
          return (/* binding */_extractContentsOfBrackets
          );
        },
        /* harmony export */"extractContentsOfMixedCharactersWithBraces": function extractContentsOfMixedCharactersWithBraces() {
          return (/* binding */_extractContentsOfMixedCharactersWithBraces
          );
        },
        /* harmony export */"extractContentsOfMixedCharactersWithComma": function extractContentsOfMixedCharactersWithComma() {
          return (/* binding */_extractContentsOfMixedCharactersWithComma
          );
        },
        /* harmony export */"extractContentsOfParentheses": function extractContentsOfParentheses() {
          return (/* binding */_extractContentsOfParentheses
          );
        },
        /* harmony export */"extractorExist": function extractorExist() {
          return (/* binding */_extractorExist
          );
        }
        /* harmony export */
      });
      /**
       * Determine whether an extractor is included
       * @param {String} str    =>  input string. such as 'a[1], b[2]', '{a[1]}'
       * @returns {Boolean} 
       */
      function _extractorExist(str) {
        if (typeof str === 'undefined' || str === null || str === '') {
          return false;
        }
        var res = false;
        if (str !== null && str !== void 0 && str.match(/(\[.*?\])/gi)) {
          res = true;
        }
        return res;
      }

      /**
       * Extract the contents of square brackets
       * @param {String} str    =>  input string. such as '[1,2] [f][c]'
       * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
       * @returns {Array<string>|string} such as: ['1,2','f','c']
       */
      function _extractContentsOfBrackets(str) {
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
       * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
       * @returns {Array<string>|string} such as: ['1,2','f','c']
       */
      function _extractContentsOfBraces(str) {
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
       * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
       * @returns {Array<string>|string} such as: ['1,2','f','c']
       */
      function _extractContentsOfParentheses(str) {
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

      /**
       * Parses a braces-separated string of `{label[value]}` pairs into an array of objects.
       *
       * Example:
       *   Input: "{Poor[c]}{Sub-option 4[c-2]}{Empty[]}"
       *   Input: "{{Poor[c]}{Sub-option 4[c-2]}{Empty[]}[]}"
       * 
       *   Output: [
       *     { label: "Poor", value: "c" },
       *     { label: "Sub-option 4", value: "c-2" },
       *     { label: "Empty", value: "" }
       *   ]
       *
       * @param {string} str - The input string containing one or more `{label[value]}` segments.
       * @returns {Array<{label: string, value: string}>} - An array of extracted label-value objects.
       */
      function _extractContentsOfMixedCharactersWithBraces(str) {
        // Fix the extra '{' at the beginning
        var cleaned = str.replace(/^{{/, '{');

        // Remove empty {} or {[]} tail
        var trimmed = cleaned.replace(/\{\[\]\}$/, '');

        // The match is like {label[value]}
        var pattern = /\{(.*?)\[(.*?)\]\}/g;
        var matches = Array.from(trimmed.matchAll(pattern));
        return matches.map(function (match) {
          return {
            label: match[1],
            value: match[2]
          };
        });
      }

      /**
       * Parses a comma-separated string of `label[value]` pairs into an array of objects.
       *
       * Example:
       *   Input: "Poor[c],Sub-option 4[c-2],Empty[]"
       *   Output: [
       *     { label: "Poor", value: "c" },
       *     { label: "Sub-option 4", value: "c-2" },
       *     { label: "Empty", value: "" }
       *   ]
       *
       * @param {string} str - A string containing label-value pairs in the format `label[value]`, separated by commas.
       * @returns {Array<{ label: string, value: string }>} - An array of parsed objects.
       */
      function _extractContentsOfMixedCharactersWithComma(str) {
        return str.split(",").map(function (item) {
          return item.trim();
        }).map(function (item) {
          var match = item.match(/^(.*?)\[(.*?)\]$/);
          if (match) {
            return {
              label: match[1],
              value: match[2]
            };
          }
          return null;
        }).filter(Boolean);
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 575:
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
        /* harmony export */"deepClone": function deepClone() {
          return (/* binding */_deepClone
          );
        },
        /* harmony export */"flatData": function flatData() {
          return (/* binding */_flatData
          );
        },
        /* harmony export */"removeArrDuplicateItems": function removeArrDuplicateItems() {
          return (/* binding */_removeArrDuplicateItems
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
      /**
       * Remove Duplicate objects from JSON Array
       * @param {Array} obj 
       * @param {String} fieldName 
       */
      function _removeArrDuplicateItems(obj, fieldName) {
        if (!Array.isArray(obj)) return [];
        var clean = obj.filter(function (item, index, self) {
          return index === self.findIndex(function (t) {
            return t[fieldName] === item[fieldName];
          });
        });
        return clean;
      }
      ;

      /**
       * Deep clone
       * @param {*} obj 
       */
      function _deepClone(obj) {
        if (Array.isArray(obj)) {
          return obj.map(function (item) {
            return _deepClone(item);
          });
        } else if (_typeof(obj) === 'object' && obj !== null) {
          var clone = {};
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              clone[key] = _deepClone(obj[key]);
            }
          }
          return clone;
        } else {
          return obj;
        }
      }

      /**
       * Flat Data
       * @param {*} data 
       * @returns 
       */
      function _flatData(data) {
        var result = [];
        var iterate = function iterate(obj) {
          if (!obj) {
            return;
          }
          obj.forEach(function (item) {
            result.push(item);
            if (item.children) {
              iterate(item.children);
            }

            // delete current item children
            delete item.children;
          });
        };
        iterate(data);
        return result;
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 85:
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
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1465__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1465__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * Create an available ID
         * 
        */

        var useComId = function useComId() {
          return "ID-".concat((0, react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-"));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useComId;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 455:
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
        /* harmony export */"isEmail": function isEmail() {
          return (/* binding */_isEmail
          );
        },
        /* harmony export */"isEmpty": function isEmpty() {
          return (/* binding */_isEmpty
          );
        },
        /* harmony export */"isInt": function isInt() {
          return (/* binding */_isInt
          );
        },
        /* harmony export */"isJSON": function isJSON() {
          return (/* binding */_isJSON
          );
        },
        /* harmony export */"isMobile": function isMobile() {
          return (/* binding */_isMobile
          );
        },
        /* harmony export */"isNumber": function isNumber() {
          return (/* binding */_isNumber
          );
        },
        /* harmony export */"isTel": function isTel() {
          return (/* binding */_isTel
          );
        },
        /* harmony export */"isValidNumeric": function isValidNumeric() {
          return (/* binding */_isValidNumeric
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
      /**
       * Fix And Parse JSON (Support for handling complex escape JSON strings)
       * @desc recursively fix top-level key/value (recursively handles when encountering top-level values that are objects/arrays)
       * @private
       */
      /*
       - Still prioritize JSON.parse first;
       - After parse fails, do unescaping (\\" → ");
       - Then process the outermost layer (object or array) key by key, value by value;
       - If a top-level value is an unquoted object or array (e.g., messages: [ {...} ]), recursively treat that value as a new outermost layer for fixing;
       - For strings wrapped in quotes ('...' or "..."), only extract the outer layer and re-encode with JSON.stringify (ensuring internal single/double quotes won't be mistakenly changed);
       - Set MAX_DEPTH to prevent infinite recursion.
      */
      /*
      @Examples:
      
      // ✅ Valid JSON (contains svg and single quote content)
      const okJson = `{
        "label":"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
        "value":"new",
        "onClick":"method.setVal(''); method.clearData();"
      }`;
      
      const okJson2 = `{
        label:"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
        value:"new",
        onClick:"method.setVal(''); method.clearData();"
      }`;
      
      // ⚠️ Single quote JSON
      const badJson = "{'model':'{model}','messages':[{'role':'user','content':'{message}'}],'stream': true}";
      
      // ⚠️ Escaped JSON
      const badJson2 = "{\\\"label\\\":\\\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\\\",\\\"value\\\":\\\"new\\\",\\\"onClick\\\":\\\"method.setVal(''); method.clearData();\\\"}";
      
      const badJson3 = "{\"label\":\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\",\"value\":\"new\",\"onClick\":\"method.setVal(''); method.clearData();\"}";
      
      const badJson4 = "[{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M20.5 9a3.49 3.49 0 0 0-3.45 3h-1.1a2.49 2.49 0 0 0-4.396-1.052L8.878 9.731l3.143-4.225a2.458 2.458 0 0 0 2.98-.019L17.339 8H16v1h3V6h-1v1.243l-2.336-2.512A2.473 2.473 0 0 0 16 3.5a2.5 2.5 0 0 0-5 0 2.474 2.474 0 0 0 .343 1.243L7.947 9.308 4.955 7.947a2.404 2.404 0 0 0-.161-1.438l3.704-1.385-.44 1.371.942.333L10 4 7.172 3l-.334.943 1.01.357-3.659 1.368a2.498 2.498 0 1 0-.682 4.117l2.085 2.688-2.053 2.76a2.5 2.5 0 1 0 .87 3.864l3.484 1.587-1.055.373.334.943L10 21l-1-2.828-.943.333.435 1.354-3.608-1.645A2.471 2.471 0 0 0 5 17.5a2.5 2.5 0 0 0-.058-.527l3.053-1.405 3.476 4.48a2.498 2.498 0 1 0 4.113.075L18 17.707V19h1v-3h-3v1h1.293l-2.416 2.416a2.466 2.466 0 0 0-2.667-.047l-3.283-4.23 2.554-1.176A2.494 2.494 0 0 0 15.95 13h1.1a3.493 3.493 0 1 0 3.45-4zm-7-7A1.5 1.5 0 1 1 12 3.5 1.502 1.502 0 0 1 13.5 2zm0 18a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5zM1 7.5a1.5 1.5 0 1 1 2.457 1.145l-.144.112A1.496 1.496 0 0 1 1 7.5zm3.32 1.703a2.507 2.507 0 0 0 .264-.326l2.752 1.251-1.124 1.512zM2.5 19A1.5 1.5 0 1 1 4 17.5 1.502 1.502 0 0 1 2.5 19zm2.037-2.941a2.518 2.518 0 0 0-.193-.234l1.885-2.532 1.136 1.464zm3.76-1.731L6.849 12.46l1.42-1.908L11.1 11.84a2.29 2.29 0 0 0-.033 1.213zM13.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zm7 1a2.5 2.5 0 1 1 2.5-2.5 2.502 2.502 0 0 1-2.5 2.5zm1.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z'/><path fill='none' d='M0 0h24v24H0z'/></svg> 深度思考\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.executeCustomMethod('changeModel', true)}else{method.executeCustomMethod('changeModel', false)}\"},{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z'/></svg> 精简回答\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.setContextData({systemPrompt:'请精简回答，字数控制在150个字左右, 思考过程请简洁简短',mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}else{method.setContextData({mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}\"},{\"label\":\"<svg fill='none' width='12' height='12' viewBox='0 0 16 16'><path d='M7 0.0618896V9H15.9381C15.446 12.9463 12.0796 16 8 16C3.58172 16 0 12.4183 0 8C0 3.92038 3.05369 0.553988 7 0.0618896Z' fill='currentColor'/><path d='M9 0.0618897V7H15.9381C15.4869 3.38128 12.6187 0.513137 9 0.0618897Z' fill='currentColor'/></svg> 指标分析\",\"value\":\"lab\",\"onClick\":\"return method.executeCustomMethod('getLibList')\",\"isSelect\":true,\"dynamicOptions\":true}]";
      
      
      // ❌ Invalid JSON with missing } or ]
      const errorJson001 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'";
      
      const errorJson002 = "[{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'}";
      
      // ❌ Invalid JSON with missing quotes
      const errorJson003 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': {chatId}', 'token': '{token}'}";
      
      
      
      console.log('okJson =>', fixAndParseJSON(okJson));   // Can parse normally  success = true
      console.log('okJson =>', fixAndParseJSON(okJson2));   // Can parse normally  success = true
      console.log('badJson =>', fixAndParseJSON(badJson)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson2)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson3)); // Can parse after fixing success = true
      console.log('badJson =>', fixAndParseJSON(badJson4)); // Can parse after fixing success = true
      console.log('errorJson =>', fixAndParseJSON(errorJson001)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
      console.log('errorJson =>', fixAndParseJSON(errorJson002)); // {success: false, error: 'Invalid JSON format', details: "Expected property name or '}' in JSON at position 2 (line 1 column 3)"}
      console.log('errorJson =>', fixAndParseJSON(errorJson003)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
      
      */

      // Type definitions

      function fixAndParseJSON(input) {
        var MAX_DEPTH = 6;

        // 1. Quick attempt
        try {
          return {
            success: true,
            data: JSON.parse(input)
          };
        } catch (e) {
          // Continue with fixing
        }

        // 2. Simple unescaping of escaped \" (common case from pasted JS literals)
        var s = input;
        if (s.includes('\\"')) s = s.replace(/\\"/g, '"');
        s = s.trim();
        try {
          if (s.startsWith('{')) {
            s = processTopObject(s, 0, MAX_DEPTH);
          } else if (s.startsWith('[')) {
            s = processTopArray(s, 0, MAX_DEPTH);
          } else {
            throw new Error('Input is not an object or array');
          }
          return {
            success: true,
            data: JSON.parse(s)
          };
        } catch (err) {
          var error = err instanceof Error ? err : new Error('Unknown error');
          return {
            success: false,
            error: 'Invalid JSON format',
            details: error.message
          };
        }
      }

      /* ---------- Helper (Recursive) Functions ---------- */

      function processTopObject(str, depth, MAX_DEPTH) {
        if (depth > MAX_DEPTH) return str;
        str = str.trim();

        // First check if braces match
        var braceCount = 0;
        var inString = false;
        var escapeNext = false;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (escapeNext) {
            escapeNext = false;
            continue;
          }
          if (ch === '\\') {
            escapeNext = true;
            continue;
          }
          if ((ch === '"' || ch === "'") && !escapeNext) {
            inString = !inString;
            continue;
          }
          if (!inString) {
            if (ch === '{') braceCount++;else if (ch === '}') braceCount--;
          }
        }
        if (braceCount !== 0) {
          throw new Error('Invalid object: mismatched braces');
        }

        // Ensure both ends are { ... }
        if (!(str.startsWith('{') && str.endsWith('}'))) {
          var f = str.indexOf('{'),
            l = str.lastIndexOf('}');
          if (f === -1 || l === -1 || l <= f) {
            throw new Error('Invalid object format: missing or mismatched braces');
          }
          str = str.slice(f, l + 1);
        }
        var inner = str.slice(1, -1);
        var pairs = splitTopLevel(inner);
        var repairedPairs = pairs.map(function (pair) {
          if (!pair || pair.trim() === '') return '';
          var idx = findTopLevelColon(pair);
          if (idx === -1) {
            return pair; // Non key:value fragment, keep as is (rare case)
          }

          var rawKey = pair.slice(0, idx).trim();
          var rawVal = pair.slice(idx + 1);
          var keyContent = extractKeyContent(rawKey);
          var keyJson = JSON.stringify(keyContent);
          var repairedValue = repairPossiblyQuotedValue(rawVal, depth + 1, MAX_DEPTH);
          return keyJson + ':' + repairedValue;
        });
        return '{' + repairedPairs.join(',') + '}';
      }
      function processTopArray(str, depth, MAX_DEPTH) {
        if (depth > MAX_DEPTH) return str;
        str = str.trim();
        if (!(str.startsWith('[') && str.endsWith(']'))) {
          var f = str.indexOf('['),
            l = str.lastIndexOf(']');
          if (f === -1 || l === -1 || l <= f) return str;
          str = str.slice(f, l + 1);
        }
        var inner = str.slice(1, -1);
        var elements = splitTopLevel(inner);
        var processed = elements.map(function (el) {
          var t = el.trim();
          if (t === '') return '';
          if (t.startsWith('{')) return processTopObject(t, depth + 1, MAX_DEPTH);
          if (t.startsWith('[')) return processTopArray(t, depth + 1, MAX_DEPTH);
          return repairPossiblyQuotedValue(t, depth + 1, MAX_DEPTH);
        });
        return '[' + processed.join(',') + ']';
      }

      // If it's a string wrapped in quotes, extract the inner content and JSON.stringify (safe escaping)
      // If it's an object/array literal (not wrapped in quotes), recursively process (treat as new outermost layer)
      // Otherwise return the original fragment directly (numbers/true/false/null or JS expressions)
      function repairPossiblyQuotedValue(rawVal, depth, MAX_DEPTH) {
        var v = rawVal.trim();
        if (v === '') return v;
        if (v[0] === '"' || v[0] === "'") {
          var quote = v[0];
          // Find the last unescaped same quote
          var lastPos = -1;
          for (var i = v.length - 1; i >= 0; i--) {
            if (v[i] === quote) {
              // check escaped
              var bs = 0,
                k = i - 1;
              while (k >= 0 && v[k] === '\\') {
                bs++;
                k--;
              }
              if (bs % 2 === 0) {
                lastPos = i;
                break;
              }
            }
          }
          var inner = lastPos > 0 ? v.slice(1, lastPos) : v.slice(1);
          return JSON.stringify(inner); // Use JSON.stringify to generate valid JSON string (automatically escape internal quotes, etc.)
        }

        // If it's an object or array literal (not wrapped in quotes) -> recursively treat as new outermost layer
        if (v.startsWith('{')) {
          return processTopObject(v, depth, MAX_DEPTH);
        }
        if (v.startsWith('[')) {
          return processTopArray(v, depth, MAX_DEPTH);
        }

        // Others (numbers, boolean, null, or JS expressions): return as-is
        return v;
      }

      /* --------- Utilities: Split by top-level commas, find top-level colon, extract key --------- */

      // Split by top-level commas (ignore strings, sub-objects, sub-arrays, commas inside parentheses)
      function splitTopLevel(str) {
        var parts = [];
        var buf = '';
        var depthCurly = 0,
          depthSquare = 0,
          depthParen = 0;
        var inSingle = false,
          inDouble = false,
          esc = false;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (esc) {
            buf += ch;
            esc = false;
            continue;
          }
          if (ch === '\\') {
            buf += ch;
            esc = true;
            continue;
          }
          if (ch === "'" && !inDouble) {
            inSingle = !inSingle;
            buf += ch;
            continue;
          }
          if (ch === '"' && !inSingle) {
            inDouble = !inDouble;
            buf += ch;
            continue;
          }
          if (!inSingle && !inDouble) {
            if (ch === '{') {
              depthCurly++;
              buf += ch;
              continue;
            }
            if (ch === '}') {
              depthCurly--;
              buf += ch;
              continue;
            }
            if (ch === '[') {
              depthSquare++;
              buf += ch;
              continue;
            }
            if (ch === ']') {
              depthSquare--;
              buf += ch;
              continue;
            }
            if (ch === '(') {
              depthParen++;
              buf += ch;
              continue;
            }
            if (ch === ')') {
              depthParen--;
              buf += ch;
              continue;
            }
            if (ch === ',' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
              parts.push(buf);
              buf = '';
              continue;
            }
          }
          buf += ch;
        }

        // Check for unclosed brackets or quotes
        if (depthCurly !== 0 || depthSquare !== 0 || depthParen !== 0 || inSingle || inDouble) {
          throw new Error('Invalid JSON: unclosed brackets or quotes');
        }
        if (buf.trim() !== '') parts.push(buf);
        return parts;
      }

      // Find the first "top-level" colon index (ignore inside strings & sub-levels)
      function findTopLevelColon(str) {
        var inSingle = false,
          inDouble = false,
          esc = false;
        var depthCurly = 0,
          depthSquare = 0,
          depthParen = 0;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          if (esc) {
            esc = false;
            continue;
          }
          if (ch === '\\') {
            esc = true;
            continue;
          }
          if (ch === "'" && !inDouble) {
            inSingle = !inSingle;
            continue;
          }
          if (ch === '"' && !inSingle) {
            inDouble = !inDouble;
            continue;
          }
          if (!inSingle && !inDouble) {
            if (ch === '{') {
              depthCurly++;
              continue;
            }
            if (ch === '}') {
              depthCurly--;
              continue;
            }
            if (ch === '[') {
              depthSquare++;
              continue;
            }
            if (ch === ']') {
              depthSquare--;
              continue;
            }
            if (ch === '(') {
              depthParen++;
              continue;
            }
            if (ch === ')') {
              depthParen--;
              continue;
            }
            if (ch === ':' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
              return i;
            }
          }
        }
        return -1;
      }

      // Extract key content (supports "key", 'key', key), returns pure key string
      function extractKeyContent(rawKey) {
        var r = rawKey.trim();
        if (r.startsWith('"') && r.endsWith('"') || r.startsWith("'") && r.endsWith("'")) {
          var inner = r.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
          return inner;
        }
        return r;
      }

      /**
       * Determine whether it is in JSON format
       * @private
       */
      function _isJSON(input) {
        if (typeof input === 'string' && input.length > 0) {
          return fixAndParseJSON(input).success;
        } else {
          if (_typeof(input) === 'object' && Object.prototype.toString.call(input) === '[object Object]' && !input.length) {
            return true;
          } else {
            return false;
          }
        }
      }

      /**
       * Check if a string is a valid number
       * @param str - The string to check
       * @returns boolean indicating if the string is a valid number
       */
      function _isValidNumeric(str) {
        if (typeof str !== "string") return false; // we only process strings!
        if (!isNaN(Number(str)) &&
        // use type coercion to parse the _entirety_ of the string
        !isNaN(parseFloat(str)) // ensure strings of whitespace fail
        ) {
          return true;
        }
        return false;
      }

      /**
       * Check if input is empty
       * @param input - The input to check (string or array of strings)
       * @returns boolean indicating if the input is empty
       */
      function _isEmpty(input) {
        if (Array.isArray(input)) {
          return input.some(function (str) {
            return !str.replace(/\s/g, '').length === true;
          });
        }
        return !input.replace(/\s/g, '').length === true;
      }

      /**
       * Check if input is a valid number
       * @param input - The input to check
       * @returns boolean indicating if the input is a valid number
       */
      function _isNumber(input) {
        var reg = /^[\d|\.|,]+$/;
        return reg.test(input);
      }

      /**
       * Check if input is a valid integer
       * @param input - The input to check
       * @returns boolean indicating if the input is a valid integer
       */
      function _isInt(input) {
        if (input === "") {
          return false;
        }
        var reg = /\D+/;
        return !reg.test(input);
      }

      /**
       * Check if input is a valid email address
       * @param input - The input to check
       * @returns boolean indicating if the input is a valid email
       */
      function _isEmail(input) {
        var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
        return reg.test(input);
      }

      /**
       * Check if input is a valid telephone number
       * @param input - The input to check
       * @returns boolean indicating if the input is a valid telephone number
       */
      function _isTel(input) {
        var reg = /^[0-9- ]{7,20}$/;
        return reg.test(input);
      }

      /**
       * Check if input is a valid mobile number
       * @param input - The input to check
       * @returns boolean indicating if the input is a valid mobile number
       */
      function _isMobile(input) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(input);
      }

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../DragDropList/dist/cjs/index.js
var cjs = __webpack_require__(954);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/validate.js
var validate = __webpack_require__(455);
// EXTERNAL MODULE: ../Utils/dist/cjs/extract.js
var extract = __webpack_require__(135);
// EXTERNAL MODULE: ../Utils/dist/cjs/convert.js
var convert = __webpack_require__(79);
// EXTERNAL MODULE: ../Utils/dist/cjs/object.js
var object = __webpack_require__(575);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/utils/func.ts
/**
 * Format indent value
 * @param {String|Array} inputData 
 * @param {String} placeholder 
 * @returns {String|Array}
 */
function formatIndentVal(inputData, placeholder) {
  var reVar = new RegExp(placeholder, 'g');
  if (Array.isArray(inputData)) {
    return inputData.map(function (s) {
      return String(s).replace(reVar, '').replace(/\&nbsp;/ig, '');
    });
  } else {
    if (inputData === null) return '';
    var _txt = typeof inputData === 'string' ? inputData : inputData.toString();
    return _txt.replace(reVar, '').replace(/\&nbsp;/ig, '');
  }
}

/**
 * Determine whether the option exists
 * @param val 
 * @returns 
 */
function multiSelControlOptionExist(arr, val) {
  var _data = arr.filter(Boolean);
  return _data.map(function (v) {
    return v.toString();
  }).includes(val.toString());
}

/**
 * Remove Duplicate objects from JSON Array
 * @param {Array} arr 
 * @returns 
 */
function uniqueArr(arr) {
  return arr.filter(function (item, index, self) {
    return index === self.findIndex(function (t) {
      return t.id == item.id;
    });
  });
}

/**
 * Remove Duplicate objects from Options
 * @param {Array} arr 
 * @returns 
 */
function uniqueOpt(arr) {
  return arr.flat().filter(function (item, index, self) {
    return index === self.findIndex(function (t) {
      return t.id === item.id;
    });
  });
}

/**
 * Sort JSON arrays according to the order of the numeric arrays
 * @param {Array<Number>|Array<String>} orderArray 
 * @param {Array<*>} arr 
 * @param {String} field 
 * @returns 
 */
function sortedJsonArray(orderArray, arr) {
  var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  return orderArray.map(function (orderId) {
    return arr.find(function (item) {
      return item[field] === orderId;
    });
  });
}
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["contentRef", "wrapperClassName", "childClassName", "wrapperMinHeight", "wrapperMinWidth", "availableHeaderTitle", "selectedHeaderTitle", "selectedHeaderNote", "selectedResultReverse", "removeAllBtnLabel", "addAllBtnLabel", "iconAdd", "iconRemove", "unattachedSelect", "options", "disabled", "required", "defaultValue", "value", "label", "name", "id", "draggable", "handleHide", "handleIcon", "handlePos", "dragMode", "indentation", "doubleIndent", "alternateCollapse", "arrow", "extractValueByBrackets", "style", "data", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onAddAll", "onRemoveAll", "onChange"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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









var MultipleSelect = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    wrapperClassName = props.wrapperClassName,
    childClassName = props.childClassName,
    wrapperMinHeight = props.wrapperMinHeight,
    wrapperMinWidth = props.wrapperMinWidth,
    availableHeaderTitle = props.availableHeaderTitle,
    selectedHeaderTitle = props.selectedHeaderTitle,
    selectedHeaderNote = props.selectedHeaderNote,
    _props$selectedResult = props.selectedResultReverse,
    selectedResultReverse = _props$selectedResult === void 0 ? false : _props$selectedResult,
    removeAllBtnLabel = props.removeAllBtnLabel,
    addAllBtnLabel = props.addAllBtnLabel,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    unattachedSelect = props.unattachedSelect,
    options = props.options,
    disabled = props.disabled,
    required = props.required,
    defaultValue = props.defaultValue,
    value = props.value,
    label = props.label,
    name = props.name,
    id = props.id,
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
    indentation = props.indentation,
    doubleIndent = props.doubleIndent,
    alternateCollapse = props.alternateCollapse,
    _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8px"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }))) : _props$arrow,
    extractValueByBrackets = props.extractValueByBrackets,
    style = props.style,
    data = props.data,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    fetchCallback = props.fetchCallback,
    onFetch = props.onFetch,
    onAddAll = props.onAddAll,
    onRemoveAll = props.onRemoveAll,
    onChange = props.onChange,
    attributes = _objectWithoutProperties(props, _excluded);
  var UNATTACHED_SELECT = typeof unattachedSelect === 'undefined' || unattachedSelect === false ? false : true;
  var WRAPPER_MIN_H = typeof wrapperMinHeight === 'undefined' ? '' : wrapperMinHeight;
  var WRAPPER_MIN_W = typeof wrapperMinWidth === 'undefined' ? '' : wrapperMinWidth;
  var VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
  var uniqueID = useComId_default()();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var availableListRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var optionsRes = options ? (0,validate.isJSON)(options) ? JSON.parse(options) : options : [];
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    valSelectedData = _useState2[0],
    setValSelectedData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    valSelected = _useState4[0],
    setValSelected = _useState4[1];

  // temp default value
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    tempDefaultValue = _useState6[0],
    setTempDefaultValue = _useState6[1];

  // return a array of options
  var optionsDataInit = optionsRes;

  //
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    changedSearchVal = _useState8[0],
    setChangedSearchVal = _useState8[1];

  //
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(optionsDataInit),
    _useState10 = _slicedToArray(_useState9, 2),
    dataInit = _useState10[0],
    setDataInit = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    hasErr = _useState12[0],
    setHasErr = _useState12[1];

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      clear: function clear(cb) {
        var _params = fetchFuncMethodParams || [];
        fetchData(_params.join(','), '');
        cb === null || cb === void 0 ? void 0 : cb();
      },
      set: function set(inputData, cb) {
        if (!Array.isArray(inputData)) return;
        var _params = fetchFuncMethodParams || [];
        fetchData(_params.join(','), inputData.map(function (v) {
          return "[".concat(v.value, "]");
        }).join(''));
        cb === null || cb === void 0 ? void 0 : cb();
      }
    };
  }, [contentRef]);
  var getExtControll = function getExtControll(index, id, value, extendedContent, defaultValue) {
    var forceItemSelected = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
    var itemSelected = false;
    if (typeof defaultValue !== 'undefined' && defaultValue !== '') {
      var _val = VALUE_BY_BRACKETS ? (0,extract.extractContentsOfBrackets)(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
      if (Array.isArray(_val) && _val.includes(String(value))) {
        itemSelected = true;
      }
    }
    if (typeof forceItemSelected !== 'undefined') itemSelected = forceItemSelected;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      style: {
        paddingLeft: '1rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
      }
    }, extendedContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "m-select-v2__ext",
      id: "m-select-v2__ext-".concat(id).concat(itemSelected ? '-selected' : '')
    }, extendedContent)) : null, itemSelected ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        // remove
        removeItem(id);
      }
    }, iconRemove ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconRemove) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      width: "15px",
      height: "15px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
      fill: "#000"
    }))))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        // add
        selectItem(id);
      }
    }, iconAdd ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconAdd) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      width: "15px",
      height: "15px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",
      fill: "#000"
    })))))));
  };
  var dragdropListDataInit = function dragdropListDataInit(data) {
    // Add appendControl to list
    data.forEach(function (item, index) {
      var _extendedContent = typeof item.extendedContent === 'function' ? item.extendedContent(true) : item.extendedContent;
      item.appendControl = getExtControll(index, item.id, item.value, _extendedContent, tempDefaultValue);
    });
    return data;
  };
  var dragdropListDefaultDataInit = function dragdropListDefaultDataInit(data) {
    // Update appendControl to list
    data.forEach(function (item, index) {
      var _extendedContent = typeof item.extendedContent === 'function' ? item.extendedContent(false) : item.extendedContent;
      item.appendControl = getExtControll(index, item.id, item.value, item.extendedContent, tempDefaultValue, false);
    });
    return data;
  };
  function fetchData(_x2, _x3) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, inputDefault) {
      var response, _ORGIN_DATA;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // set default value
            if (typeof inputDefault !== 'undefined' && inputDefault !== '') inputRef.current.dataset.value = inputDefault;

            //
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context.next = 16;
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

            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = (0,object.removeArrDuplicateItems)(_ORGIN_DATA, 'value');

            // save temporary default value
            setTempDefaultValue(inputDefault);

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(inputDefault, _ORGIN_DATA); // value must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);
            return _context.abrupt("return", _ORGIN_DATA);
          case 16:
            // remove Duplicate objects from JSON Array
            optionsDataInit = (0,object.removeArrDuplicateItems)(optionsDataInit, 'value');

            // save temporary default value
            setTempDefaultValue(inputDefault);

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            initDefaultValue(inputDefault, optionsDataInit); // value must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(optionsDataInit);
            return _context.abrupt("return", optionsDataInit);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
  function initDefaultValue(defaultValue, options) {
    // change the value to trigger component rendering
    if (typeof defaultValue === 'undefined' || defaultValue === '') {
      setValSelected([]);
      setValSelectedData([]);
    } else {
      var _val = VALUE_BY_BRACKETS ? (0,extract.extractContentsOfBrackets)(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
      if (Array.isArray(_val)) {
        var _initVal = _val.filter(function (v) {
          return v !== '';
        });
        setValSelected(_initVal);

        // Initialize selected options
        if (UNATTACHED_SELECT) {
          setValSelectedData(function (prevState) {
            var _data = [].concat(_toConsumableArray(prevState), _toConsumableArray(options.filter(function (item) {
              return multiSelControlOptionExist(_initVal, item.value);
            })));
            return uniqueArr(_data);
          });
        } else {
          setValSelectedData(options.filter(function (item) {
            return multiSelControlOptionExist(_initVal, item.value);
          }));
        }

        // Initialize default options
        setDataInit(options.filter(function (item) {
          return !multiSelControlOptionExist(_initVal, item.value);
        }));
      } else {
        setValSelected([]);
        setValSelectedData([]);
      }
    }
  }
  function selectItem(curId) {
    // update default options
    setDataInit(function (prevState) {
      var newDefaultData = prevState.filter(function (item) {
        return item.id != curId;
      });
      var targetData = prevState.find(function (v) {
        return v.id == curId;
      }); // !!!from old "dataInit"
      var _data = typeof targetData !== 'undefined' ? targetData : {};

      // update selected data
      setValSelectedData(function (prevState2) {
        var newSelectedData = dragdropListDataInit([].concat(_toConsumableArray(prevState2), [_data]));

        // update selected items
        setValSelected(function (prevState3) {
          var newValueData = newSelectedData.map(function (v) {
            return v.value;
          });
          var newValueStr = VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(newValueData) : newValueData.join(',');
          onChange === null || onChange === void 0 ? void 0 : onChange(document.querySelector("[data-id=\"".concat(curId, "\"]")), newValueData, newValueStr, _data, 'add', newSelectedData);

          // update temporary default value
          setTempDefaultValue(newValueStr);
          return newValueData;
        });
        return uniqueArr(newSelectedData);
      });
      return uniqueArr(newDefaultData);
    });
  }
  function removeItem(curId) {
    // update selected data
    setValSelectedData(function (prevState) {
      var newSelectedData = prevState.filter(function (item) {
        return item.id != curId;
      });
      var targetData = prevState.find(function (v) {
        return v.id == curId;
      }); // !!!from old "valSelectedData"
      var _data = typeof targetData !== 'undefined' ? targetData : {};

      // update default options
      setDataInit(function (prevState2) {
        var newDefaultData = dragdropListDefaultDataInit([].concat(_toConsumableArray(prevState2), [_data]));
        return uniqueArr(newDefaultData);
      });

      // update selected items
      setValSelected(function (prevState3) {
        var newValueData = newSelectedData.map(function (v) {
          return v.value;
        });
        var newValueStr = VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(newValueData) : newValueData.join(',');
        onChange === null || onChange === void 0 ? void 0 : onChange(document.querySelector("[data-id=\"".concat(curId, "\"]")), newValueData, newValueStr, _data, 'remove', newSelectedData);

        // update temporary default value
        setTempDefaultValue(newValueStr);
        return newValueData;
      });
      return uniqueArr(newSelectedData);
    });
  }
  function handleSelectAll(event) {
    event.preventDefault();
    event.stopPropagation();

    // update default options
    setDataInit(function (prevState) {
      var newDefaultData = [];

      // filter the "disabled" option
      var disabledData = prevState.filter(function (v) {
        return v.disabled === true;
      }); // !!!from old "dataInit"
      var targetData = prevState.filter(function (v) {
        return typeof v.disabled === 'undefined' || v.disabled === false;
      }); // !!!from old "dataInit"

      // update selected data
      setValSelectedData(function (prevState2) {
        var newSelectedData = dragdropListDataInit([].concat(_toConsumableArray(prevState2), _toConsumableArray(targetData)));

        // update selected items
        setValSelected(function (prevState3) {
          var newValueData = newSelectedData.map(function (v) {
            return v.value;
          });
          var newValueStr = VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(newValueData) : newValueData.join(',');
          onChange === null || onChange === void 0 ? void 0 : onChange(null, newValueData, newValueStr, null, 'add-all', newSelectedData);

          // update temporary default value
          setTempDefaultValue(newValueStr);
          return newValueData;
        });
        return uniqueArr(newSelectedData);
      });
      return uniqueArr([].concat(newDefaultData, _toConsumableArray(disabledData)));
    });
  }
  function handleRemoveAll(event) {
    event.preventDefault();
    event.stopPropagation();

    // update selected data
    setValSelectedData(function (prevState) {
      var newSelectedData = [];
      var targetData = prevState; // !!!from old "valSelectedData"

      // update default options
      setDataInit(function (prevState2) {
        var newDefaultData = dragdropListDefaultDataInit([].concat(_toConsumableArray(prevState2), _toConsumableArray(targetData)));
        return uniqueArr(newDefaultData);
      });

      // update selected items
      setValSelected(function (prevState3) {
        var newValueData = newSelectedData.map(function (v) {
          return v.value;
        });
        var newValueStr = VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(newValueData) : newValueData.join(',');
        onChange === null || onChange === void 0 ? void 0 : onChange(null, newValueData, newValueStr, null, 'remove-all', newSelectedData);
        onRemoveAll === null || onRemoveAll === void 0 ? void 0 : onRemoveAll(event, newValueData, newValueStr, newSelectedData);

        // update temporary default value
        setTempDefaultValue(newValueStr);
        return newValueData;
      });
      return uniqueArr(newSelectedData);
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
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // data init
    //--------------
    var _params = fetchFuncMethodParams || [];
    fetchData(_params.join(','), value);
  }, [value, options, data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update default value (It does not re-render the component because the incoming value changes.)
    //--------------
    if (typeof defaultValue !== 'undefined') {
      //REQUIRED
      var _params = fetchFuncMethodParams || [];
      fetchData(_params.join(','), defaultValue);
    }
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('m-select-v2__wrapper', (0,cls.clsWrite)(wrapperClassName, 'mb-3')),
    ref: rootRef,
    style: {
      minWidth: WRAPPER_MIN_W === '' ? 'var(--m-select-v2-wrapper-min-w)' : WRAPPER_MIN_W,
      minHeight: WRAPPER_MIN_H === '' ? 'var(--m-select-v2-wrapper-min-h)' : WRAPPER_MIN_H
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2-diving-line"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
    ref: function ref(node) {
      inputRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    tabIndex: -1,
    type: "hidden",
    id: idRes,
    name: name,
    value: VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(valSelected) : valSelected.join(',') // do not use `defaultValue`
    ,
    onChange: function onChange() {
      return void 0;
    },
    required: required || null
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2-inner"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2__available__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2__m-select-v2__item-actions m-select-v2__header"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2__search__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "text",
    value: changedSearchVal,
    className: "m-select-v2__search",
    onChange: handleChangeSearch
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "0.8em",
    height: "0.8em",
    fill: "#ddd",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z",
    fillRule: "evenodd"
  })))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "m-select-v2__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(availableHeaderTitle || '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    href: "#",
    className: "m-select-v2__btn--add-all",
    onClick: handleSelectAll
  }, addAllBtnLabel || 'Add all')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    data: dragdropListDefaultDataInit(dataInit),
    wrapperClassName: "",
    ref: availableListRef,
    prefix: "m-select-v2",
    draggable: false,
    handleHide: handleHide,
    handleIcon: handleIcon,
    handlePos: handlePos,
    dragMode: dragMode,
    indentation: indentation,
    doubleIndent: doubleIndent,
    alternateCollapse: alternateCollapse,
    arrow: arrow
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2__selected__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-v2__m-select-v2__item-actions m-select-v2__header"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "m-select-v2__count",
    dangerouslySetInnerHTML: {
      __html: "".concat(typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length) : '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "m-select-v2__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(selectedHeaderTitle || '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    href: "#",
    className: "m-select-v2__btn--remove-all",
    onClick: handleRemoveAll
  }, removeAllBtnLabel || 'Remove all')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    data: dragdropListDataInit(selectedResultReverse ? valSelectedData.reverse() : valSelectedData),
    onUpdate: function onUpdate(newData, curId) {
      setValSelectedData(newData);
      var newValueData = newData.map(function (v) {
        return v.value;
      });
      var newValueStr = VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(newValueData) : newValueData.join(',');
      var targetData = newData.find(function (v) {
        return v.id == curId;
      }); // !!!from old "dataInit"
      var _data = typeof targetData !== 'undefined' ? targetData : {};
      setValSelected(newData.map(function (v) {
        return v.value;
      }));
      onChange === null || onChange === void 0 ? void 0 : onChange(document.querySelector("[data-id=\"".concat(curId, "\"]")), newValueData, newValueStr, _data, 'update', newData);
    },
    wrapperClassName: "",
    prefix: "m-select-v2",
    draggable: draggable,
    handleHide: handleHide,
    handleIcon: handleIcon,
    handlePos: handlePos,
    dragMode: dragMode,
    indentation: indentation,
    doubleIndent: doubleIndent,
    alternateCollapse: false,
    arrow: arrow,
    hierarchical: false
  })))));
});
/* harmony default export */ const src = (MultipleSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});