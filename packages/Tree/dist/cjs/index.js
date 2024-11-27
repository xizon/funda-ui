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

/***/ 997:
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
        /* harmony export */"getAllSiblings": function getAllSiblings() {
          return (/* binding */_getAllSiblings
          );
        },
        /* harmony export */"getChildren": function getChildren() {
          return (/* binding */_getChildren
          );
        },
        /* harmony export */"getDocument": function getDocument() {
          return (/* binding */_getDocument
          );
        },
        /* harmony export */"getNextSiblings": function getNextSiblings() {
          return (/* binding */_getNextSiblings
          );
        },
        /* harmony export */"getParents": function getParents() {
          return (/* binding */_getParents
          );
        },
        /* harmony export */"getPreviousSiblings": function getPreviousSiblings() {
          return (/* binding */_getPreviousSiblings
          );
        },
        /* harmony export */"isElement": function isElement() {
          return (/* binding */_isElement
          );
        },
        /* harmony export */"isHTMLElement": function isHTMLElement() {
          return (/* binding */_isHTMLElement
          );
        },
        /* harmony export */"isNode": function isNode() {
          return (/* binding */_isNode
          );
        },
        /* harmony export */"isRootElement": function isRootElement() {
          return (/* binding */_isRootElement
          );
        },
        /* harmony export */"isShadowRoot": function isShadowRoot() {
          return (/* binding */_isShadowRoot
          );
        },
        /* harmony export */"nodeContains": function nodeContains() {
          return (/* binding */_nodeContains
          );
        }
        /* harmony export */
      });
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it["return"] != null) it["return"]();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
      /**
       * Dom Utilities
       * @param {HTMLElement} el      - Element
       * @param  {?String} filter      - A filter string
       * @returns HtmlElementCollection
       */
      function matches(el, filter) {
        if (el && el.nodeType === 1) {
          if (filter) {
            return el.matches(filter);
          }
          return true;
        }
        return false;
      }

      // the next siblings
      function _getNextSiblings(el) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var sibs = [];
        while (el = el.nextSibling) {
          if (matches(el, filter)) {
            sibs.push(el);
          }
        }
        return sibs;
      }

      // previous siblings
      function _getPreviousSiblings(el) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var sibs = [];
        while (el = el.previousSibling) {
          if (matches(el, filter)) {
            sibs.push(el);
          }
        }
        return sibs;
      }

      // parent and get all the siblings
      function _getAllSiblings(el) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var sibs = [];
        el = el.parentNode.firstChild;
        while (el = el.nextSibling) {
          if (matches(el, filter)) {
            sibs.push(el);
          }
        }
        return sibs;
      }

      // all parent nodes
      function _getParents(el) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var parents = [];
        while (el = el.parentNode) {
          if (matches(el, filter)) {
            parents.push(el);
          }
        }
        return parents;
      }

      // all child nodes
      function _getChildren(el) {
        var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        all.push.apply(all, _toConsumableArray(el.childNodes));
        var _iterator = _createForOfIteratorHelper(el.childNodes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            _getChildren(child, filter, all);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var res = all.filter(function (item) {
          return matches(item, filter);
        });
        return res;
      }
      function _isRootElement(element) {
        return element.matches('html,body');
      }
      function _getDocument(node) {
        if (typeof node === 'undefined') {
          return document;
        } else {
          return node.ownerDocument;
        }
      }
      function _isNode(value) {
        return value instanceof Node;
      }
      function _isElement(value) {
        return value instanceof Element;
      }
      function _isHTMLElement(value) {
        return value instanceof HTMLElement;
      }
      function _isShadowRoot(value) {
        // Browsers without `ShadowRoot` support.
        if (typeof ShadowRoot === 'undefined') {
          return false;
        }
        return value instanceof ShadowRoot;
      }

      /* console.log(nodeContains(document.body, document.getElementById('obj'))) */
      function _nodeContains(parent, child) {
        var _child$getRootNode;
        if (!parent || !child) {
          return false;
        }
        var rootNode = (_child$getRootNode = child.getRootNode) === null || _child$getRootNode === void 0 ? void 0 : _child$getRootNode.call(child);

        // First, attempt with faster native method
        if (parent.contains(child)) {
          return true;
        }

        // then fallback to custom implementation with Shadow DOM support
        if (rootNode && _isShadowRoot(rootNode)) {
          var next = child;
          while (next) {
            if (parent === next) {
              return true;
            }
            // @ts-ignore
            next = next.parentNode || next.host;
          }
        }

        // Give up, the result is false
        return false;
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
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/object.js
var object = __webpack_require__(575);
// EXTERNAL MODULE: ../Utils/dist/cjs/dom.js
var dom = __webpack_require__(997);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/init-height.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var initUlHeight = function initUlHeight(inputUl) {
  [].slice.call(inputUl).forEach(function (el) {
    if (typeof el.dataset.maxheight === 'undefined') {
      var _li = [].slice.call(el.querySelectorAll('li'));
      var _allHeight = 0;
      _li.forEach(function (li) {
        _allHeight += li.scrollHeight;
      });
      el.dataset.maxheight = "".concat(_allHeight, "px");
      el.style.maxHeight = "".concat(_allHeight, "px");
    } else {
      el.style.maxHeight = el.dataset.maxheight;
    }
  });
};
var initAsyncItems = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(inputUl) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          [].slice.call(inputUl).forEach(function (el) {
            el.removeAttribute('data-maxheight');
          });
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initAsyncItems(_x) {
    return _ref.apply(this, arguments);
  };
}();

;// CONCATENATED MODULE: ./src/utils/func.ts
var removeItemOnce = function removeItemOnce(arr, key) {
  return arr.filter(function (item) {
    return item.key !== key;
  });
};
var activeClass = function activeClass(el, mode) {
  var classname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'active';
  if (mode === 'add') {
    el.classList.add(classname);
  } else {
    el.classList.remove(classname);
  }
};
;// CONCATENATED MODULE: ./src/TreeList.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x2) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x3) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// HAS CHECKBOX





function TreeList(props) {
  var rootNode = props.rootNode,
    checkboxNamePrefix = props.checkboxNamePrefix,
    alternateCollapse = props.alternateCollapse,
    first = props.first,
    disableArrow = props.disableArrow,
    disableCollapse = props.disableCollapse,
    arrow = props.arrow,
    arrowIcons = props.arrowIcons,
    childClassName = props.childClassName,
    orginalData = props.orginalData,
    data = props.data,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    onSelect = props.onSelect,
    onCollapse = props.onCollapse,
    onCheck = props.onCheck,
    evInitValue = props.evInitValue;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var customIcon = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
    className: "default-icon"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "0.75em",
    height: "0.75em",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z",
    fill: "currentColor"
  })));
  var loadingIcon = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
    className: "loading-icon"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "currentColor",
    d: "M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"
  }))));
  var formatCheckboxControlVal = function formatCheckboxControlVal(el) {
    var _el$dataset$name;
    return {
      name: (_el$dataset$name = el.dataset.name) === null || _el$dataset$name === void 0 ? void 0 : _el$dataset$name.replace(/-label$/, ''),
      key: el.dataset.key,
      slug: el.value,
      link: el.dataset.link
    };
  };
  var setCheckboxCheckedData = function setCheckboxCheckedData(arr, key, val) {
    arr.forEach(function (item, index) {
      if (item.key === key) arr[index].checked = val;
    });
  };

  // check whether the node is in the Indeterminate state
  var isIndeterminate = function isIndeterminate(node) {
    if (!node.children || node.children.length === 0) {
      return false;
    }
    var hasChecked = false;
    var hasUnchecked = false;
    var _iterator = _createForOfIteratorHelper(node.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        if (isIndeterminate(child)) {
          return true;
        }
        if (child.checked) {
          hasChecked = true;
        } else {
          hasUnchecked = true;
        }

        // If there are some selected and some unchecked, the node is Indeterminate
        if (hasChecked && hasUnchecked) {
          return true;
        }
      }

      // If all child nodes are the same, it is not Indeterminate
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  };
  var updateTreeCheckedItems = function updateTreeCheckedItems(arr, flatArr) {
    if (!Array.isArray(arr)) return;
    var _loop = function _loop() {
      var orginalDataKey = arr[i].key;
      var targetItem = flatArr.find(function (v) {
        return v.key === orginalDataKey;
      });
      if (typeof targetItem !== 'undefined') {
        // update value of checked
        arr[i].checked = targetItem.checked;
      }
      if (arr[i].children) updateTreeCheckedItems(arr[i].children, flatArr);
    };
    for (var i = 0; i < arr.length; i++) {
      _loop();
    }
  };
  var updateIndeterminateData = function updateIndeterminateData(arr, flatArr) {
    if (!Array.isArray(arr)) return;
    var _loop2 = function _loop2() {
      var orginalDataKey = arr[i].key;
      var targetItem = flatArr.find(function (v) {
        return v.key === orginalDataKey;
      });
      if (typeof targetItem !== 'undefined') {
        // update indeterminate of item
        targetItem.indeterminate = isIndeterminate(arr[i]);
      }
      if (arr[i].children) updateIndeterminateData(arr[i].children, flatArr);
    };
    for (var i = 0; i < arr.length; i++) {
      _loop2();
    }
  };
  var setCheckboxIndeterminateStatus = function setCheckboxIndeterminateStatus(checkedData, printData, el) {
    // update checked items from orginal data
    updateTreeCheckedItems(orginalData, checkedData);

    // check whether the node is in the Indeterminate state
    updateIndeterminateData(orginalData, checkedData);
    return [checkedData, printData];
  };
  var closeChild = function closeChild(hyperlink, ul) {
    if (ul.length === 0) return;
    activeClass(hyperlink, 'remove');
    hyperlink.setAttribute('aria-expanded', 'false');
    activeClass(hyperlink.parentNode, 'remove');

    //to close
    [].slice.call(ul).forEach(function (element) {
      element.style.maxHeight = 0;
    });
  };
  var openChild = function openChild(hyperlink, ul) {
    if (ul.length === 0) return;
    activeClass(hyperlink, 'add');
    hyperlink.setAttribute('aria-expanded', 'true');
    activeClass(hyperlink.parentNode, 'add');

    // init <ul> height
    initUlHeight(ul);
  };
  function handleCollapse(e) {
    if (disableCollapse) return;
    e.preventDefault();
    e.stopPropagation();
    var hyperlink = e.currentTarget;
    var url = hyperlink.getAttribute('href');
    var subElement = (0,dom.getNextSiblings)(hyperlink, 'ul');

    // loading
    //=====================       
    if (hyperlink.classList.contains('async-ready')) {
      activeClass(hyperlink, 'add', 'loading');
    }

    // calback
    //=====================
    var fetchFunc = hyperlink.classList.contains('async-ready') ? typeof evInitValue !== 'function' ? function () {
      return void 0;
    } : evInitValue : function () {
      return void 0;
    };
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(e, {
      key: hyperlink.dataset.key,
      slug: hyperlink.dataset.slug,
      link: hyperlink.dataset.link,
      optiondata: hyperlink.dataset.optiondata
    }, fetchFunc);

    // hide child if expandedLink doesn't exist, on the contrary
    //=====================
    if (hyperlink.classList.contains('loading')) return;
    if (hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null) {
      //Hide all other siblings of the selected <ul>
      if (alternateCollapse) {
        [].slice.call(rootRef.current.children).forEach(function (li) {
          activeClass(li, 'remove');
          var _li = li.firstChild;
          activeClass(_li, 'remove');
          _li.setAttribute('aria-expanded', false);
          [].slice.call((0,dom.getNextSiblings)(_li, 'ul')).forEach(function (element) {
            element.style.maxHeight = 0;
          });
        });
      }

      //open current
      openChild(hyperlink, subElement);
    } else {
      //close current
      closeChild(hyperlink, subElement);
    }
  }
  function handleSelect(e) {
    e.preventDefault();
    e.stopPropagation();
    var hyperlink = e.currentTarget;
    if (hyperlink.classList.contains('selected')) {
      activeClass(hyperlink, 'remove', 'selected');
    } else {
      [].slice.call(hyperlink.closest('.tree-diagram__wrapper').querySelectorAll('li > a')).forEach(function (node) {
        activeClass(node, 'remove', 'selected');
      });
      activeClass(hyperlink, 'add', 'selected');
    }
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(e, {
      key: hyperlink.dataset.key,
      slug: hyperlink.dataset.slug,
      link: hyperlink.dataset.link,
      optiondata: hyperlink.dataset.optiondata
    }, typeof evInitValue !== 'function' ? function () {
      return void 0;
    } : evInitValue);
    if (disableArrow) {
      handleCollapse(e);
    }
  }
  function titleArrowGenerator() {
    return disableArrow ? loadingIcon : null;
  }
  function arrowGenerator() {
    if (arrowIcons && Array.isArray(arrowIcons)) {
      return arrowIcons.length > 1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        className: "default-icon"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, arrowIcons[0]), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, arrowIcons[1])), loadingIcon) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        className: "default-icon"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, arrowIcons[0]), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, arrowIcons[0])), loadingIcon);
    } else {
      return arrow ? arrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, customIcon, loadingIcon);
    }
  }
  function checkedAct(el, val) {
    if (el === null) return;
    var _curKey = el.dataset.key;
    var _checkedData = getCheckedData;
    var _res = getCheckedPrint;

    // STEP 1:
    // Current checkbox
    //-----------
    if (val === true) {
      _res.push(formatCheckboxControlVal(el));
      setCheckboxCheckedData(_checkedData, _curKey, true);
    } else {
      setCheckboxCheckedData(_checkedData, _curKey, false);
      _res = removeItemOnce(_res, _curKey);
    }

    // STEP 2:
    // All child checkboxes
    //-----------
    [].slice.call((0,dom.getChildren)(el.closest('li'), '[type="checkbox"]')).forEach(function (node) {
      if (val === true) {
        if (node.dataset.key !== _curKey) {
          setCheckboxCheckedData(_checkedData, node.dataset.key, true);
          _res.push(formatCheckboxControlVal(node));
        }
      } else {
        setCheckboxCheckedData(_checkedData, node.dataset.key, false);
        _res = removeItemOnce(_res, node.dataset.key);
      }
    });

    // STEP 3:
    // ALl parent checkboxes
    //-----------
    var _setCheckboxIndetermi = setCheckboxIndeterminateStatus(_checkedData, _res, el),
      _setCheckboxIndetermi2 = _slicedToArray(_setCheckboxIndetermi, 2),
      updatedCheckedData = _setCheckboxIndetermi2[0],
      updatedPrintData = _setCheckboxIndetermi2[1];
    var _updatedCheckedData = updatedCheckedData;
    var _updatedPrintData = updatedPrintData;

    // STEP 4:
    // Update checked data
    //-----------
    updategetCheckedData(_updatedCheckedData);

    // STEP 5:
    // Array deduplication
    //-----------
    _updatedPrintData = _updatedPrintData.filter(function (item, index, self) {
      return index === self.findIndex(function (t) {
        return t.key === item.key;
      });
    });

    // STEP 6:
    // Update checked print
    //-----------
    updateCheckedPrint(_updatedPrintData);

    // STEP 7:
    // callback
    //----------- 
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(_updatedPrintData);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Activate current item
    //=====================
    var allItems = rootRef.current ? [].slice.call(document.querySelectorAll(".".concat(childClassName, " a"))).map(function (item) {
      var _item$parentNode$clas;
      return {
        href: item.getAttribute('href'),
        el: item,
        actived: (_item$parentNode$clas = item.parentNode.classList) !== null && _item$parentNode$clas !== void 0 && _item$parentNode$clas.contains('active') ? true : false,
        expandedLink: document.body.contains(item.parentNode.parentNode.previousSibling) ? item.parentNode.parentNode.previousSibling : false
      };
    }) : [];
    allItems.forEach(function (hyperlink) {
      // Expand the currently active item by default
      if (hyperlink.actived) {
        hyperlink.el.setAttribute('aria-expanded', 'true');
        if (hyperlink.expandedLink) {
          var expandedLink = hyperlink.expandedLink; // <a>
          activeClass(expandedLink.parentNode, 'add');
          expandedLink.setAttribute('aria-expanded', true);
        }

        // init <ul> height
        var ul = (0,dom.getNextSiblings)(hyperlink.el, 'ul');
        initUlHeight(ul);
      }
    });

    // Initialize indeterminate status of all checkboxes 
    //=====================
    setCheckboxIndeterminateStatus(getCheckedData, getCheckedPrint, null);
  }, [data]);
  if (data) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
      className: (0,cls.combinedCls)(childClassName, {
        'first': first
      }),
      ref: rootRef,
      style: !first ? {
        maxHeight: '0px'
      } : {}
    }, data.map(function (item, i) {
      var _filter$, _filter$2;
      var _async = item.childrenAsync ? 'async-ready' : '';
      var _cusIcons = arrowIcons ? 'custom-icons' : '';
      if (item.heading) return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        className: (0,cls.combinedCls)('nav-item', {
          'first': first
        }),
        key: item.key
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        tabIndex: -1,
        className: "nav-link disabled",
        href: "#",
        "aria-disabled": "true",
        "data-link": item.link,
        "data-slug": item.slug,
        "data-key": item.key,
        "data-optiondata": JSON.stringify(item)
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: item.icon
      }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.icon)
        }
      }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.title)
        }
      }))));
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        className: (0,cls.combinedCls)('nav-item', {
          'first': first,
          'active': item.active
        }),
        key: item.key,
        onMouseEnter: typeof item.itemMouseEnterCallback !== 'undefined' ? item.itemMouseEnterCallback : function () {
          return void 0;
        },
        onMouseLeave: typeof item.itemMouseLeaveCallback !== 'undefined' ? item.itemMouseLeaveCallback : function () {
          return void 0;
        }
      }, item.children && item.children.length || item.childrenAsync ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        "aria-expanded": item.active ? 'true' : 'false',
        className: item.active ? "arrow active ".concat(_async, " ").concat(_cusIcons) : "arrow ".concat(_async, " ").concat(_cusIcons),
        onClick: handleCollapse,
        "data-link": item.link,
        "data-slug": item.slug,
        "data-key": item.key,
        "data-optiondata": JSON.stringify(item)
      }, arrowGenerator()) : '', /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "checkbox-trigger"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "form-check__wrapper"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "form-check d-inline-block"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
        type: "checkbox",
        className: (0,cls.combinedCls)('form-check-input', {
          'indeterminate': (_filter$ = getCheckedData.filter(function (cur) {
            return cur.key === item.key;
          })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.indeterminate
        }),
        name: "checkbox-".concat(checkboxNamePrefix, "-").concat(item.key),
        tabIndex: -1,
        "data-name": "checkbox-".concat(checkboxNamePrefix, "-").concat(item.key),
        "data-key": item.key,
        "data-link": item.link,
        value: item.slug,
        checked: (_filter$2 = getCheckedData.filter(function (cur) {
          return cur.key === item.key;
        })[0]) === null || _filter$2 === void 0 ? void 0 : _filter$2.checked,
        onChange: function onChange(e) {
          var _filter$3;
          checkedAct(e.target, !((_filter$3 = getCheckedData.filter(function (cur) {
            return cur.key === item.key;
          })[0]) !== null && _filter$3 !== void 0 && _filter$3.checked));
        }
      })))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        tabIndex: -1,
        className: (0,cls.combinedCls)('nav-link', _async, {
          'selected': item.selected,
          'active': item.active
        }),
        href: item.link === '#' ? "".concat(item.link, "-").concat(i) : item.link,
        "aria-expanded": "false",
        onClick: handleSelect,
        "data-link": item.link,
        "data-slug": item.slug,
        "data-key": item.key,
        "data-optiondata": JSON.stringify(item),
        onMouseEnter: typeof item.itemLinkMouseEnterCallback !== 'undefined' ? item.itemLinkMouseEnterCallback : function () {
          return void 0;
        },
        onMouseLeave: typeof item.itemLinkMouseLeaveCallback !== 'undefined' ? item.itemLinkMouseLeaveCallback : function () {
          return void 0;
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: item.icon
      }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.icon)
        }
      }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.title)
        }
      }), titleArrowGenerator()), item.customContentToHyperlink), item.customContentToLiTag, item.children && item.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TreeList, {
        rootNode: rootNode,
        checkboxNamePrefix: checkboxNamePrefix,
        orginalData: orginalData,
        data: item.children,
        first: false,
        arrow: arrow,
        onSelect: onSelect,
        onCollapse: onCollapse,
        onCheck: onCheck,
        disableArrow: disableArrow,
        disableCollapse: disableCollapse,
        arrowIcons: arrowIcons,
        evInitValue: evInitValue,
        getCheckedPrint: getCheckedPrint,
        updateCheckedPrint: updateCheckedPrint,
        getCheckedData: getCheckedData,
        updategetCheckedData: updategetCheckedData
      }));
    })));
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null);
  }
}
;// CONCATENATED MODULE: ./src/index.tsx
function src_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ src_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == src_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function src_typeof(obj) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, src_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || src_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return src_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (src_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (src_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Tree = function Tree(props) {
  var id = props.id,
    checkable = props.checkable,
    showLine = props.showLine,
    lineStyle = props.lineStyle,
    alternateCollapse = props.alternateCollapse,
    disableArrow = props.disableArrow,
    disableCollapse = props.disableCollapse,
    arrow = props.arrow,
    arrowIcons = props.arrowIcons,
    treeClassName = props.treeClassName,
    childClassName = props.childClassName,
    data = props.data,
    retrieveData = props.retrieveData,
    onSelect = props.onSelect,
    onCollapse = props.onCollapse,
    onCheck = props.onCheck;
  var uniqueID = useComId_default()();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState2 = src_slicedToArray(_useState, 2),
    orginalData = _useState2[0],
    setOrginalData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState4 = src_slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = src_slicedToArray(_useState5, 2),
    flatList = _useState6[0],
    setFlatList = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState8 = src_slicedToArray(_useState7, 2),
    checkedPrint = _useState8[0],
    setCheckedPrint = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState10 = src_slicedToArray(_useState9, 2),
    checkedData = _useState10[0],
    setCheckedData = _useState10[1];
  var expandClassName = "".concat(showLine ? 'show-line' : '', " ").concat(disableArrow ? 'hide-arrow' : '', " ").concat(disableCollapse ? 'collapse-disabled' : '', " ").concat(lineStyle ? "line--".concat(lineStyle) : '', " ").concat(checkable ? 'has-checkbox' : '');
  var updateTreeData = function updateTreeData(list, key, children) {
    return list ? list.map(function (node) {
      if (node.key === key) {
        return _objectSpread(_objectSpread({}, node), {}, {
          children: children
        });
      }
      if (node.children) {
        return _objectSpread(_objectSpread({}, node), {}, {
          children: updateTreeData(node.children, key, children)
        });
      }
      return node;
    }) : [];
  };
  function fetchData(_x2, _x3) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = src_asyncToGenerator( /*#__PURE__*/src_regeneratorRuntime().mark(function _callee(fetch, params) {
      var _fetch$fetchFuncAsync, response, _ORGIN_DATA;
      return src_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(src_typeof(fetch.fetchFuncAsync) === 'object')) {
              _context.next = 14;
              break;
            }
            _context.next = 3;
            return (_fetch$fetchFuncAsync = fetch.fetchFuncAsync)["".concat(fetch.fetchFuncMethod)].apply(_fetch$fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 3:
            response = _context.sent;
            _ORGIN_DATA = response.data;
            if (!(Array.isArray(_ORGIN_DATA) && _ORGIN_DATA.length > 0)) {
              _context.next = 11;
              break;
            }
            // reset data structure
            if (typeof fetch.fetchCallback === 'function') {
              _ORGIN_DATA = fetch.fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].title === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              _ORGIN_DATA = [];
            }
            return _context.abrupt("return", _ORGIN_DATA);
          case 11:
            return _context.abrupt("return", []);
          case 12:
            _context.next = 15;
            break;
          case 14:
            return _context.abrupt("return", []);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
  function updateShowProp(obj, retrieveData) {
    var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    obj.forEach(function (item, index) {
      if (retrieveData.length === 0) {
        item.show = true;
      } else {
        if (typeof val !== 'undefined') {
          item.show = val;
        } else {
          var _item$title;
          if (retrieveData.map(function (v) {
            var _v$title;
            return (_v$title = v.title) === null || _v$title === void 0 ? void 0 : _v$title.toLowerCase();
          }).includes((_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title.toLowerCase())) {
            item.show = true;
          } else {
            item.show = false;
          }
        }
      }

      //
      if (item.children) {
        updateShowProp(item.children, retrieveData, val);
      }
    });
  }
  function addKey(obj, depth, init) {
    obj.forEach(function (item, index) {
      item.key = "".concat(depth, "-").concat(index).substring(1);
      if (item.children) {
        addKey(item.children, "".concat(depth, "-").concat(index), init + 1);
      }
    });
  }
  function initCheckboxesVal(obj) {
    obj.forEach(function (item) {
      if (item.checked === true) setCheckedPrint(function (prevState) {
        return [{
          name: "checkbox-".concat(idRes, "-").concat(item.key),
          key: item.key,
          slug: item.slug,
          link: item.link
        }].concat(_toConsumableArray(prevState));
      });
      if (item.children) {
        initCheckboxesVal(item.children);
      }
    });
  }
  function initCheckboxesData(obj) {
    obj.forEach(function (item) {
      setCheckedData(function (prevState) {
        return [{
          key: item.key,
          checked: item.checked === true,
          show: true,
          indeterminate: false
        }].concat(_toConsumableArray(prevState));
      });
      if (item.children) {
        initCheckboxesData(item.children);
      }
    });
  }
  function initDefaultValue(key) {
    var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var firstRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var retrieveData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (firstRender) {
      addKey(data, '', 0);

      // filter showing items
      if (Array.isArray(retrieveData)) {
        updateShowProp(data, retrieveData);
      } else {
        updateShowProp(data, retrieveData, true);
      }

      // Initialize default value of checkboxes 
      if (checkable) {
        initCheckboxesVal(data);
        initCheckboxesData(data);
      }

      // update list
      setList(data);

      // update retrive list
      var _clone = (0,object.deepClone)(data);
      setFlatList((0,object.flatData)(_clone));
      return;
    }
    if (fetch && src_typeof(fetch.fetchFuncAsync) === 'object') {
      //
      var _params = fetch.fetchFuncMethodParams || [];
      fetchData(fetch, _params.join(',')).then(function (response) {
        var _childrenData = response;
        if (_childrenData.length > 0) {
          // add children to node
          var _newData = updateTreeData(list, key ? key : '', _childrenData);

          // update data
          addKey(_newData, '', 0);

          // filter showing items
          if (Array.isArray(retrieveData)) {
            updateShowProp(_newData, retrieveData);
          } else {
            updateShowProp(_newData, retrieveData, true);
          }

          // Initialize default value of checkboxes 
          if (checkable) {
            _childrenData.forEach(function (newitem) {
              setCheckedData(function (prevState) {
                return [{
                  key: newitem.key,
                  checked: newitem.checked === true,
                  show: true,
                  indeterminate: false
                }].concat(_toConsumableArray(prevState));
              });
            });
          }

          // update list
          setList(_newData);

          // update retrive list
          var _clone2 = (0,object.deepClone)(_newData);
          setFlatList((0,object.flatData)(_clone2));
        }

        // loading status
        setTimeout(function () {
          [].slice.call(rootRef.current.querySelectorAll('.arrow.async-ready, .nav-link.async-ready')).forEach(function (node) {
            node.classList.remove('loading');
            if (node.parentElement.querySelector('ul') !== null) {
              node.classList.remove('async-ready');
              node.click();
            }
          });

          // init <ul> height
          // Initialize async items
          var ul = [].slice.call(rootRef.current.querySelectorAll('ul'));
          initAsyncItems(ul).then(function () {
            initUlHeight(ul);
          });
        }, 500);
      });
    }
  }
  function filterRetriveData(flatData, retrieveData) {
    return flatData.filter(function (item) {
      var _item$title2;
      return retrieveData.map(function (v) {
        var _v$title2;
        return (_v$title2 = v.title) === null || _v$title2 === void 0 ? void 0 : _v$title2.toLowerCase();
      }).includes((_item$title2 = item.title) === null || _item$title2 === void 0 ? void 0 : _item$title2.toLowerCase());
    });
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    initDefaultValue(null, null, true, retrieveData);
    setOrginalData(data);
  }, [data, retrieveData]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("nav", {
    tabIndex: 0,
    id: idRes,
    ref: rootRef,
    className: treeClassName ? "tree-diagram__wrapper ".concat(treeClassName, " ").concat(expandClassName) : "tree-diagram__wrapper tree-diagram-default ".concat(expandClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TreeList, {
    rootNode: rootRef,
    checkboxNamePrefix: idRes,
    alternateCollapse: alternateCollapse,
    first: true,
    disableArrow: disableArrow,
    disableCollapse: disableCollapse,
    arrow: arrow,
    arrowIcons: arrowIcons,
    orginalData: orginalData,
    data: Array.isArray(retrieveData) && retrieveData.length > 0 ? filterRetriveData(flatList, retrieveData) : list,
    childClassName: childClassName || 'tree-diagram-default-nav',
    onSelect: onSelect,
    onCollapse: onCollapse,
    onCheck: onCheck,
    evInitValue: initDefaultValue,
    updateCheckedPrint: setCheckedPrint,
    getCheckedPrint: checkedPrint,
    updategetCheckedData: setCheckedData,
    getCheckedData: checkedData
  })));
};
/* harmony default export */ const src = (Tree);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});