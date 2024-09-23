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

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 186:
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
        /* harmony export */"isJSON": function isJSON() {
          return (/* binding */_isJSON
          );
        },
        /* harmony export */"isValidNumeric": function isValidNumeric() {
          return (/* binding */_isValidNumeric
          );
        },
        /* harmony export */"setDefaultOptions": function setDefaultOptions() {
          return (/* binding */_setDefaultOptions
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
       *  Set a default JSON format configuration
       *
       * @param  {*} props         - Set some default keys and values.
       * @param  {*} options       - A JSON variable passed in from outside, including key and value.
       * @return {JSON}            - Merge the new and old values.
       */
      function _setDefaultOptions(props, options) {
        if (_typeof(options) === ( true ? "undefined" : 0) || options === null || options === false) options = {};
        //Set a default configuration
        if (_isJSON(props)) {
          var defaultConfigValues = Object.values(props);
          Object.keys(props).forEach(function (prop, index) {
            // Well-formed string type
            Object.keys(options).forEach(function (prop2, index2) {
              if (prop2 === prop) {
                var _v = options[prop2];
                if (_v == 'true') _v = true;
                if (_v == 'false') _v = false;
                if (_isValidNumeric(_v)) _v = parseFloat(_v);
                if (_isJSON(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
                options[prop2] = _v;
              }
            });

            //
            if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
          });
        }
        return options;
      }

      /**
      * Check if a string is a valid number
       * @param {*} str 
       * @returns 
      */
      function _isValidNumeric(str) {
        if (typeof str != "string") return false; // we only process strings!  
        if (!isNaN(Number(str)) &&
        // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)
        !isNaN(parseFloat(str)) // ensure strings of whitespace fail
        ) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * Determine whether it is in JSON format
       * @param {*} str 
       * @returns 
       */
      function _isJSON(str) {
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
// EXTERNAL MODULE: ../Utils/dist/cjs/initDefaultOptions.js
var initDefaultOptions = __webpack_require__(186);
// EXTERNAL MODULE: ../Utils/dist/cjs/tree.js
var tree = __webpack_require__(438);
// EXTERNAL MODULE: ../Utils/dist/cjs/extract.js
var extract = __webpack_require__(135);
// EXTERNAL MODULE: ../Utils/dist/cjs/convert.js
var convert = __webpack_require__(79);
// EXTERNAL MODULE: ../Utils/dist/cjs/object.js
var object = __webpack_require__(575);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/multiple-select-utils/func.ts
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
      return t.value === item.value;
    });
  });
}
// EXTERNAL MODULE: ../Utils/dist/cjs/dom.js
var dom = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/ItemList.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





/* Recursively nested components to traverse nodes
-------------------------------------------------*/

var ItemList = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var appendControl = props.appendControl,
    root = props.root,
    listContainerClassName = props.listContainerClassName,
    valSelected = props.valSelected,
    indentStr = props.indentStr,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    selected = props.selected,
    onSelect = props.onSelect,
    alternateCollapse = props.alternateCollapse,
    first = props.first,
    arrow = props.arrow,
    childClassName = props.childClassName,
    data = props.data;
  var listContainerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var activeClass = function activeClass(el, mode) {
    var classname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'active';
    if (mode === 'add') {
      el.classList.add(classname);
    } else {
      el.classList.remove(classname);
    }
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
    [].slice.call(ul).forEach(function (_curUl) {
      var allHeight = [].slice.call(_curUl.querySelectorAll('li')).map(function (_curLi) {
        return _curLi.scrollHeight;
      });

      // Prevent missing height, causing the last element to be clipped
      var maxHeight = Math.max.apply(Math, _toConsumableArray(allHeight));
      allHeight.push(maxHeight * 3);

      //
      var totalHeight = allHeight.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

      // Prevent the use of iframe or other situations where the height is 0
      _curUl.style.maxHeight = "".concat(totalHeight == 0 ? 999 : totalHeight, "px");
    });
  };
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var hyperlink = e.currentTarget.querySelector('div');
    var subElement = (0,dom.getNextSiblings)(hyperlink, 'ul');

    // hide child if expandedLink doesn't exist, on the contrary
    //=====================
    if (hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null) {
      //Hide all other siblings of the selected <ul>
      if (alternateCollapse) {
        [].slice.call(listContainerRef.current.children).forEach(function (li) {
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
  function arrowGenerator() {
    return arrow ? arrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8px"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (root !== null && data.length > 0) {
      // Activate current item
      //=====================
      var allItems = listContainerRef.current ? [].slice.call(root.querySelectorAll(".".concat(childClassName, " div"))).map(function (item) {
        var _item$parentNode$clas;
        return {
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
          [].slice.call(ul).forEach(function (_curUl) {
            var allHeight = [].slice.call(_curUl.querySelectorAll('li')).map(function (_curLi) {
              return _curLi.scrollHeight;
            });

            // Prevent missing height, causing the last element to be clipped
            var maxHeight = Math.max.apply(Math, _toConsumableArray(allHeight));
            allHeight.push(maxHeight * 3);

            // 
            var totalHeight = allHeight.reduce(function (accumulator, currentValue) {
              return accumulator + currentValue;
            }, 0);

            // Prevent the use of iframe or other situations where the height is 0
            _curUl.style.maxHeight = "".concat(totalHeight == 0 ? 999 : totalHeight, "px");
          });
        }
      });
    }
  }, [data]);
  if (data) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
      className: "".concat(listContainerClassName || '', " ").concat(childClassName),
      style: !first ? {
        maxHeight: '0px'
      } : {},
      ref: function ref(node) {
        listContainerRef.current = node;
        if (typeof externalRef === 'function') {
          externalRef(node);
        } else if (externalRef) {
          externalRef.current = node;
        }
      }
    }, data ? data.map(function (item, i) {
      // callback from each option
      if (typeof item.appendControlCallback === 'function') {
        setTimeout(function () {
          var _item$appendControlCa;
          (_item$appendControlCa = item.appendControlCallback) === null || _item$appendControlCa === void 0 ? void 0 : _item$appendControlCa.call(item);
        }, 0);
      }
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: selected ? 'item-selected' + i : 'item' + i,
        className: selected ? 'selected' : (0,cls.combinedCls)({
          'disabled': item.disabled,
          'hide': multiSelControlOptionExist(valSelected, item.value)
        }),
        "data-index": i,
        "data-value": "".concat(item.value),
        "data-label": "".concat(item.label),
        "data-list-item-label": "".concat(typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel),
        "data-disabled": item.disabled || 'false',
        "data-querystring": "".concat(typeof item.queryString === 'undefined' ? '' : item.queryString),
        "data-itemdata": JSON.stringify(item),
        onClick: selected ? function () {
          return void 0;
        } : handleClick
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("strong", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: selected ? typeof item.listItemLabel === 'undefined' ? formatIndentVal(item.label, indentStr) : formatIndentVal(item.listItemLabel, indentStr) : typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
        }
      }), item.children && item.children.length > 0 && !selected ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "arrow"
      }, arrowGenerator()) : ''), selected && appendControl ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "m-select__ext",
        id: "m-select__ext-".concat(item.value).concat(selected ? '-selected' : '')
      }, appendControl)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        onClick: function onClick(e) {
          e.stopPropagation();
          onSelect(e.target.closest('li'), undefined);
        }
      }, selected ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconRemove ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconRemove) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "15px",
        height: "15px",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
        fill: "#000"
      })))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconAdd ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, iconAdd) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
        width: "15px",
        height: "15px",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
        d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",
        fill: "#000"
      })))))), item.children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ItemList, {
        root: root,
        listContainerClassName: listContainerClassName,
        ref: externalRef,
        indentStr: indentStr,
        valSelected: valSelected,
        iconAdd: iconAdd,
        iconRemove: iconRemove,
        onSelect: onSelect,
        first: false,
        arrow: arrow,
        data: item.children,
        childClassName: childClassName
      }));
    }) : null));
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null);
  }
});
/* harmony default export */ const src_ItemList = (ItemList);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["wrapperClassName", "childClassName", "wrapperMinHeight", "wrapperMinWidth", "availableHeaderTitle", "selectedHeaderTitle", "selectedHeaderNote", "removeAllBtnLabel", "addAllBtnLabel", "iconAdd", "iconRemove", "unattachedSelect", "hierarchical", "indentation", "doubleIndent", "alternateCollapse", "arrow", "options", "disabled", "required", "appendControl", "value", "label", "name", "id", "extractValueByBrackets", "style", "data", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onChange"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function src_toConsumableArray(arr) { return src_arrayWithoutHoles(arr) || src_iterableToArray(arr) || src_unsupportedIterableToArray(arr) || src_nonIterableSpread(); }
function src_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function src_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return src_arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var MultipleSelect = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var wrapperClassName = props.wrapperClassName,
    childClassName = props.childClassName,
    wrapperMinHeight = props.wrapperMinHeight,
    wrapperMinWidth = props.wrapperMinWidth,
    availableHeaderTitle = props.availableHeaderTitle,
    selectedHeaderTitle = props.selectedHeaderTitle,
    selectedHeaderNote = props.selectedHeaderNote,
    removeAllBtnLabel = props.removeAllBtnLabel,
    addAllBtnLabel = props.addAllBtnLabel,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    unattachedSelect = props.unattachedSelect,
    hierarchical = props.hierarchical,
    indentation = props.indentation,
    doubleIndent = props.doubleIndent,
    alternateCollapse = props.alternateCollapse,
    arrow = props.arrow,
    options = props.options,
    disabled = props.disabled,
    required = props.required,
    appendControl = props.appendControl,
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
  var UN_ATTACHED_SELECT = typeof unattachedSelect === 'undefined' || unattachedSelect === false ? false : true;
  var WRAPPER_MIN_H = typeof wrapperMinHeight === 'undefined' ? '' : wrapperMinHeight;
  var WRAPPER_MIN_W = typeof wrapperMinWidth === 'undefined' ? '' : wrapperMinWidth;
  var INDENT_PLACEHOLDER = doubleIndent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";
  var INDENT_LAST_PLACEHOLDER = "".concat(typeof indentation !== 'undefined' && indentation !== '' ? "".concat(indentation, "&nbsp;&nbsp;") : '');
  var VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
  var uniqueID = useComId_default()();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var availableListRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var selectedListRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var optionsRes = options ? (0,initDefaultOptions.isJSON)(options) ? JSON.parse(options) : options : [];
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    valSelectedData = _useState2[0],
    setValSelectedData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    valSelected = _useState4[0],
    setValSelected = _useState4[1];

  // return a array of options
  var optionsDataInit = optionsRes;

  //
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    changedSearchVal = _useState6[0],
    setChangedSearchVal = _useState6[1];

  //
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(optionsDataInit),
    _useState8 = _slicedToArray(_useState7, 2),
    dataInit = _useState8[0],
    setDataInit = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasErr = _useState10[0],
    setHasErr = _useState10[1];
  function fetchData(_x2) {
    return _fetchData.apply(this, arguments);
  }
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
              _context.next = 16;
              break;
            }
            _context.next = 4;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, src_toConsumableArray(params.split(',')));
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
              _ORGIN_DATA = (0,tree.addTreeDepth)(_ORGIN_DATA);
              (0,tree.addTreeIndent)(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = (0,object.removeArrDuplicateItems)(_ORGIN_DATA, 'value');

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(value, _ORGIN_DATA); // value must be initialized

            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);
            return _context.abrupt("return", _ORGIN_DATA);
          case 16:
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
              optionsDataInit = (0,tree.addTreeDepth)(optionsDataInit);
              (0,tree.addTreeIndent)(optionsDataInit, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // remove Duplicate objects from JSON Array
            optionsDataInit = (0,object.removeArrDuplicateItems)(optionsDataInit, 'value');

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            initDefaultValue(value, optionsDataInit); // value must be initialized

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
        if (UN_ATTACHED_SELECT) {
          setValSelectedData(function (prevState) {
            var _data = [].concat(src_toConsumableArray(prevState), src_toConsumableArray(options.filter(function (item) {
              return multiSelControlOptionExist(_initVal, item.value);
            })));
            return uniqueArr(_data);
          });
        } else {
          setValSelectedData(options.filter(function (item) {
            return multiSelControlOptionExist(_initVal, item.value);
          }));
        }
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
      var _res = _val ? Array.from(new Set([_val].concat(src_toConsumableArray(newData)))) : newData;
      onChange === null || onChange === void 0 ? void 0 : onChange(_li, _res, VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(_res) : _res.join(','), _data, 'add');

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
      var _res = _val ? Array.from(new Set([_data].concat(src_toConsumableArray(newData)))) : newData;
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
      onChange === null || onChange === void 0 ? void 0 : onChange(_li, _res, VALUE_BY_BRACKETS ? (0,convert.convertArrToValByBrackets)(_res) : _res.join(','), _data, 'remove');

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
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // data init
    //--------------
    var _params = fetchFuncMethodParams || [];
    fetchData(_params.join(','));
  }, [value, options, data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: (0,cls.combinedCls)('m-select__wrapper', (0,cls.clsWrite)(wrapperClassName, 'mb-3')),
    ref: rootRef,
    style: {
      minWidth: WRAPPER_MIN_W === '' ? 'var(--m-select-wrapper-min-w)' : WRAPPER_MIN_W,
      minHeight: WRAPPER_MIN_H === '' ? 'var(--m-select-wrapper-min-h)' : WRAPPER_MIN_H
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select-diving-line"
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
    className: "m-select-inner"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select__available__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select__m-select__item-actions m-select__header"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select__search__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "text",
    value: changedSearchVal,
    className: "m-select__search",
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
    className: "m-select__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(availableHeaderTitle || '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    href: "#",
    className: "m-select__btn--add-all",
    onClick: handleSelectAll
  }, addAllBtnLabel || 'Add all')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ItemList, {
    appendControl: appendControl,
    root: rootRef.current,
    listContainerClassName: "m-select__available m-select__options-contentlist",
    ref: availableListRef,
    indentStr: INDENT_LAST_PLACEHOLDER,
    valSelected: valSelected,
    iconAdd: iconAdd,
    onSelect: selectItem,
    alternateCollapse: alternateCollapse,
    first: true,
    arrow: arrow,
    data: dataInit,
    childClassName: childClassName || 'm-select__options-contentlist-custom'
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select__selected__container"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "m-select__m-select__item-actions m-select__header"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "m-select__count",
    dangerouslySetInnerHTML: {
      __html: "".concat(typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length) : '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "m-select__title",
    dangerouslySetInnerHTML: {
      __html: "".concat(selectedHeaderTitle || '')
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    href: "#",
    className: "m-select__btn--remove-all",
    onClick: handleRemoveAll
  }, removeAllBtnLabel || 'Remove all')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ItemList, {
    appendControl: appendControl,
    root: rootRef.current,
    listContainerClassName: "m-select__selected m-select__options-contentlist--sortable m-select__options-contentlist",
    ref: selectedListRef,
    indentStr: INDENT_LAST_PLACEHOLDER,
    valSelected: valSelected,
    iconRemove: iconRemove,
    onSelect: removeItem,
    alternateCollapse: alternateCollapse,
    first: true,
    arrow: arrow,
    data: valSelectedData,
    childClassName: (0,cls.clsWrite)(childClassName, 'm-select__options-contentlist--custom'),
    selected: true
  })))));
});
/* harmony default export */ const src = (MultipleSelect);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});