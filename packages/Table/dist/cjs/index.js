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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      function __nested_webpack_require_1471__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1471__);
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
        /******/__nested_webpack_require_1471__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1471__.d(getter, {
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
        /******/__nested_webpack_require_1471__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1471__.o(definition, key) && !__nested_webpack_require_1471__.o(exports, key)) {
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
        /******/__nested_webpack_require_1471__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1471__.r = function (exports) {
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
        __nested_webpack_require_1471__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1471__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1471__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1471__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
        var _excluded = ["wrapperClassName", "disabled", "required", "value", "label", "name", "id", "checked", "indeterminate", "style", "tabIndex", "onChange", "onBlur", "onFocus"];
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
        var Checkbox = /*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, _ref) {
          var wrapperClassName = props.wrapperClassName,
            disabled = props.disabled,
            required = props.required,
            value = props.value,
            label = props.label,
            name = props.name,
            id = props.id,
            checked = props.checked,
            indeterminate = props.indeterminate,
            style = props.style,
            tabIndex = props.tabIndex,
            onChange = props.onChange,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            attributes = _objectWithoutProperties(props, _excluded);
          var uniqueID = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)();
          var idRes = id || uniqueID;
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var valRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
            _useState2 = _slicedToArray(_useState, 2),
            val = _useState2[0],
            setVal = _useState2[1];
          function handleFocus(event) {
            rootRef.current.classList.add('focus');

            //
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
          }
          function handleChange(event) {
            var _val = event.target.checked;
            setVal(_val);

            //----
            //remove focus style
            rootRef.current.classList.remove('focus');

            //
            if (typeof onChange === 'function') {
              onChange(event, _val);
            }
          }
          function handleBlur(event) {
            //----
            //remove focus style
            rootRef.current.classList.remove('focus');

            //
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
          }
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // default value
            setVal(checked);

            // Set a checkbox to indeterminate state
            if (typeof indeterminate !== 'undefined') {
              valRef.current.indeterminate = indeterminate;
            }
          }, [checked, indeterminate]);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
            ref: rootRef
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "form-check"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            ref: function ref(node) {
              valRef.current = node;
              if (typeof _ref === 'function') {
                _ref(node);
              } else if (_ref) {
                _ref.current = node;
              }
            },
            tabIndex: tabIndex || 0,
            type: "checkbox",
            className: "form-check-input",
            id: "label-".concat(idRes)

            // Don't use "name", it's just a container to display the label
            ,

            "data-name": name !== null && name !== void 0 && name.match(/(\[.*?\])/gi) ? "".concat(name.split('[')[0], "-label[]") : "".concat(name, "-label"),
            "data-checkbox": true,
            disabled: disabled || null,
            required: required || null,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            defaultValue: value || '',
            checked: val // component status will not change if defaultChecked is used
            ,

            style: _objectSpread({
              cursor: 'pointer'
            }, style)
          }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
            type: "hidden",
            id: idRes,
            name: name,
            value: val ? value || '' : '' // do not use `defaultValue`
          }), label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: "label-".concat(idRes),
            className: "form-check-label"
          }, label)) : null)));
        });
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = Checkbox;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 426:
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function getNextSiblings(el) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
  var sibs = [];
  while (el = el.nextSibling) {
    if (matches(el, filter)) {
      sibs.push(el);
    }
  }
  return sibs;
}

// previous siblings
function getPreviousSiblings(el) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
  var sibs = [];
  while (el = el.previousSibling) {
    if (matches(el, filter)) {
      sibs.push(el);
    }
  }
  return sibs;
}

// parent and get all the siblings
function getAllSiblings(el) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
function getParents(el) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
  var parents = [];
  while (el = el.parentNode) {
    if (matches(el, filter)) {
      parents.push(el);
    }
  }
  return parents;
}

// all child nodes
function getChildren(el) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  all.push.apply(all, _toConsumableArray(el.childNodes));
  var _iterator = _createForOfIteratorHelper(el.childNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      getChildren(child, filter, all);
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
module.exports = {
  getNextSiblings: getNextSiblings,
  getPreviousSiblings: getPreviousSiblings,
  getAllSiblings: getAllSiblings,
  getParents: getParents,
  getChildren: getChildren
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
// EXTERNAL MODULE: ./src/utils/performance.js
var performance = __webpack_require__(342);
;// CONCATENATED MODULE: ./src/TableField.tsx


/* Table Field
-------------------------------------------------*/

var TableField = function TableField(props) {
  var cols = props.cols,
    columnHeader = props.columnHeader,
    index = props.index,
    content = props.content;
  function handleTbodyLeave(e) {
    e.target.closest('table').querySelector('tbody').classList.remove('drag-trigger-mousedown');
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index,
    onMouseEnter: handleTbodyLeave
  }, content));
};
/* harmony default export */ const src_TableField = (TableField);
// EXTERNAL MODULE: ../Checkbox/dist/cjs/index.js
var cjs = __webpack_require__(109);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ./src/utils/dom.js
var dom = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/table-utils.ts
var removeItemOnce = function removeItemOnce(arr, key) {
  return arr.filter(function (item) {
    return item.key !== key;
  });
};
var formatCheckboxControlVal = function formatCheckboxControlVal(el) {
  var _el$closest, _el$dataset$name;
  var _curContent = [].slice.call((_el$closest = el.closest('th')) === null || _el$closest === void 0 ? void 0 : _el$closest.children).at(-1).innerHTML;
  var $row = el.closest('tr[data-key]');
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    if (i > 0) return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  _restContent.unshift(_curContent);
  return {
    index: Number(el.dataset.index),
    key: el.dataset.key,
    name: (_el$dataset$name = el.dataset.name) === null || _el$dataset$name === void 0 ? void 0 : _el$dataset$name.replace(/-label$/, ''),
    content: _restContent
  };
};
var formatRowControlVal = function formatRowControlVal(el, checkboxNamePrefix) {
  var _el$querySelector;
  var _curContent = [].slice.call((_el$querySelector = el.querySelector('th')) === null || _el$querySelector === void 0 ? void 0 : _el$querySelector.children).at(-1).innerHTML;
  var $row = el.closest('tr[data-key]');
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    if (i > 0) return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  _restContent.unshift(_curContent);
  return {
    index: Number(el.dataset.id),
    key: el.dataset.key,
    name: "checkbox-".concat(checkboxNamePrefix, "-").concat(el.dataset.key),
    content: _restContent
  };
};
var setCheckboxCheckedData = function setCheckboxCheckedData(arr, key, val) {
  arr.forEach(function (item, index) {
    if (item.key === key) arr[index].checked = val;
  });
};
;// CONCATENATED MODULE: ./src/TableFieldRow.tsx





/* Table Field Row
-------------------------------------------------*/

var TableFieldRow = function TableFieldRow(props) {
  var _filter$;
  var draggable = props.draggable,
    cols = props.cols,
    columnHeader = props.columnHeader,
    index = props.index,
    content = props.content,
    checkboxNamePrefix = props.checkboxNamePrefix,
    rowKey = props.rowKey,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    onCheck = props.onCheck;
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var checkboxRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');
  function handleTbodyEnter(e) {
    e.target.closest('table').querySelector('tbody').classList.add('drag-trigger-mousedown');
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    scope: "row",
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index
  }, draggable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "drag-trigger",
    "data-id": rowIndex,
    onMouseEnter: handleTbodyEnter
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "checkbox-trigger"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    ref: checkboxRef,
    wrapperClassName: "",
    name: "checkbox-".concat(checkboxNamePrefix, "-").concat(rowIndex),
    tabIndex: -1,
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    value: "".concat(rowKey),
    checked: (_filter$ = getCheckedData.filter(function (cur) {
      return cur.key === rowKey;
    })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked,
    onChange: function onChange(e, val) {
      var _curKey = e.target.value;
      var _checkedData = getCheckedData;
      var _res = getCheckedPrint;

      // STEP 1:
      // Current checkbox
      //-----------
      if (val === true) {
        _res.push(formatCheckboxControlVal(e.target));
        setCheckboxCheckedData(_checkedData, _curKey, true);
      } else {
        setCheckboxCheckedData(_checkedData, _curKey, false);
        _res = removeItemOnce(_res, _curKey);
      }

      // STEP 2:
      // Array deduplication
      //-----------
      _res = _res.filter(function (item, index, self) {
        return index === self.findIndex(function (t) {
          return t.key === item.key;
        });
      });

      // STEP 3:
      // ALl parent checkboxes
      //-----------
      var _headRow = e.target.closest('table').querySelectorAll('thead th')[0];
      if (typeof _headRow !== 'undefined') {
        var _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
        var _checkboxes = (0,dom.getChildren)(e.target.closest('table').querySelector('tbody'), '[type="checkbox"]');
        var _checkedLength = _checkboxes.filter(function (el) {
          return el.checked === true;
        }).length;
        if (_checkedLength === 0) {
          _rootCheckbox.indeterminate = false;
          updategetCheckedRootData([{
            key: "row-all",
            checked: false
          }]);
        } else {
          if (_checkedLength === _checkboxes.length) {
            _rootCheckbox.indeterminate = false;
            updategetCheckedRootData([{
              key: "row-all",
              checked: true
            }]);
          }
          if (_checkedLength < _checkboxes.length) {
            updategetCheckedRootData([{
              key: "row-all",
              checked: false
            }]);
            _rootCheckbox.indeterminate = true;
          }
        }
      }

      // STEP 4:
      // Update checked data
      //-----------
      updategetCheckedData(_checkedData);

      // STEP 5:
      // Update checked print
      //-----------
      updateCheckedPrint(_res);

      // STEP 6:
      // callback
      //-----------
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(_res);
    }
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: contentRef
  }, content)));
};
/* harmony default export */ const src_TableFieldRow = (TableFieldRow);
;// CONCATENATED MODULE: ./src/TableRow.tsx




/* Table Row
-------------------------------------------------*/

var TableRow = function TableRow(props) {
  var _filter$;
  var index = props.index,
    data = props.data,
    headerLabel = props.headerLabel,
    checkboxNamePrefix = props.checkboxNamePrefix,
    rowKey = props.rowKey,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    draggable = props.draggable,
    onCheck = props.onCheck,
    evDragEnd = props.evDragEnd,
    evDragStart = props.evDragStart;
  var rowChecked = (_filter$ = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
    draggable: draggable,
    onDragEnd: evDragEnd,
    onDragStart: evDragStart,
    "data-id": index,
    "data-key": rowKey,
    className: rowChecked ? 'row-obj active' : 'row-obj'
  }, data ? data.map(function (el, i) {
    var headerItem = headerLabel[i];
    if (headerItem === undefined) headerItem = {
      type: false,
      content: ''
    };
    if (i === 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableFieldRow, {
        key: i,
        columnHeader: headerItem.content.replace(/(<([^>]+)>)/ig, ''),
        cols: el.cols,
        content: el.content,
        index: i,
        checkboxNamePrefix: checkboxNamePrefix,
        rowKey: rowKey,
        updateCheckedPrint: updateCheckedPrint,
        getCheckedPrint: getCheckedPrint,
        updategetCheckedData: updategetCheckedData,
        getCheckedData: getCheckedData,
        updategetCheckedRootData: updategetCheckedRootData,
        getCheckedRootData: getCheckedRootData,
        onCheck: onCheck,
        draggable: draggable
      });
    } else {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableField, {
        key: i,
        columnHeader: headerItem.content.replace(/(<([^>]+)>)/ig, ''),
        cols: el.cols,
        content: el.content,
        index: i
      });
    }
  }) : null));
};
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableHeaders.tsx





/* Table Headers
-------------------------------------------------*/

var TableHeaders = function TableHeaders(props) {
  var data = props.data,
    headClassName = props.headClassName,
    checkboxNamePrefix = props.checkboxNamePrefix,
    sortable = props.sortable,
    getCheckedPrint = props.getCheckedPrint,
    updateCheckedPrint = props.updateCheckedPrint,
    getCheckedData = props.getCheckedData,
    updategetCheckedData = props.updategetCheckedData,
    getCheckedRootData = props.getCheckedRootData,
    updategetCheckedRootData = props.updategetCheckedRootData,
    onCheck = props.onCheck,
    evSort = props.evSort;
  return data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
    className: headClassName ? headClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, data.map(function (item, i) {
    var _filter$;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: i,
      scope: "col",
      "data-sort-type": item.type,
      "data-table-text": item.content.replace(/(<([^>]+)>)/ig, ''),
      "data-table-col": i
    }, i === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "checkbox-trigger"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
      wrapperClassName: "",
      name: "checkbox-".concat(checkboxNamePrefix, "-all"),
      tabIndex: -1,
      value: "row-all",
      checked: (_filter$ = getCheckedRootData.filter(function (cur) {
        return cur.key === 'row-all';
      })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked,
      onChange: function onChange(e, val) {
        var _checkedData = getCheckedData;
        var _res = getCheckedPrint;

        // STEP 1:
        // Current checkbox
        //-----------
        if (val === true) {
          updategetCheckedRootData([{
            key: "row-all",
            checked: true
          }]);
        } else {
          updategetCheckedRootData([{
            key: "row-all",
            checked: false
          }]);
        }

        // STEP 2:
        // All child checkboxes
        //-----------
        var _checkboxes = (0,dom.getChildren)(e.target.closest('table').querySelector('tbody'), '[type="checkbox"]');
        [].slice.call(_checkboxes).forEach(function (node) {
          if (val === true) {
            setCheckboxCheckedData(_checkedData, node.dataset.key, true);
            _res.push(formatCheckboxControlVal(node));
          } else {
            setCheckboxCheckedData(_checkedData, node.dataset.key, false);
            _res = [];
          }
        });

        // STEP 3:
        // Array deduplication
        //-----------
        _res = _res.filter(function (item, index, self) {
          return index === self.findIndex(function (t) {
            return t.key === item.key;
          });
        });

        // STEP 4:
        // Update checked data
        //-----------
        updategetCheckedData(_checkedData);

        // STEP 5:
        // Update checked print
        //-----------
        updateCheckedPrint(_res);

        // STEP 6:
        // callback
        //-----------
        onCheck === null || onCheck === void 0 ? void 0 : onCheck(_res);
      }
    })) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "".concat(item.content)
      }
    }), sortable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "sort-trigger",
      onClick: evSort
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      width: "1em",
      height: "1em",
      viewBox: "0 0 18 18"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z",
      id: "path",
      fill: "#000000"
    })))) : null);
  })))) : null;
};
/* harmony default export */ const src_TableHeaders = (TableHeaders);
;// CONCATENATED MODULE: ./src/TableSummaries.tsx


/* Table Summaries
-------------------------------------------------*/

var TableSummaries = function TableSummaries(props) {
  var data = props.data,
    footClassName = props.footClassName;
  return data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tfoot", {
    className: footClassName ? footClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, data.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: i
    }, item);
  })))) : null;
};
/* harmony default export */ const src_TableSummaries = (TableSummaries);
;// CONCATENATED MODULE: ./src/TableColgroup.tsx


/* Table Colgroup
-------------------------------------------------*/

var TableColgroup = function TableColgroup(props) {
  var data = props.data;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("colgroup", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", null), data ? data.map(function (el, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", {
      key: i
    });
  }) : null));
};
/* harmony default export */ const src_TableColgroup = (TableColgroup);
;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Table = function Table(props) {
  var wrapperClassName = props.wrapperClassName,
    tableClassName = props.tableClassName,
    bodyClassName = props.bodyClassName,
    headClassName = props.headClassName,
    footClassName = props.footClassName,
    checkable = props.checkable,
    draggable = props.draggable,
    sortable = props.sortable,
    data = props.data,
    bordered = props.bordered,
    colGroup = props.colGroup,
    responsive = props.responsive,
    enhancedResponsive = props.enhancedResponsive,
    enhancedResponsiveWithScrollBar = props.enhancedResponsiveWithScrollBar,
    id = props.id,
    onCheck = props.onCheck,
    onDrag = props.onDrag;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var tbodyRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedPrint = _useState2[0],
    setCheckedPrint = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedData = _useState4[0],
    setCheckedData = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedRootData = _useState6[0],
    setCheckedRootData = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    sortData = _useState8[0],
    setSortData = _useState8[1];
  var windowResizeUpdate = (0,performance.debounce)(handleWindowUpdate, 50);
  var _headers = data.hasOwnProperty('headers') ? data.headers : false;
  var _summaries = data.hasOwnProperty('summaries') ? data.summaries : false;
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  //Set the class names of different styles
  //
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';

  //
  var responsiveClasses = '';
  if (responsive) tableClasses += ' table-responsive';

  //
  var enhancedResponsiveClasses = '';
  if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
  if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';

  //
  var checkableClasses = '';
  if (checkable) checkableClasses += ' has-checkbox';

  //
  var draggableClasses = '';
  if (draggable) draggableClasses += ' allow-dragdrop';

  //
  var sortableClasses = '';
  if (sortable) sortableClasses += ' enable-sort';

  // ================================================================
  // generic
  // ================================================================
  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  };
  var allRows = function allRows() {
    return [].slice.call(tbodyRef.current.children);
  };
  var printData = function printData(data) {
    var _res = [];
    data.forEach(function (v) {
      _res.push(formatRowControlVal(rootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(v, "\"]")), idRes));
    });
    return _res;
  };

  // ================================================================
  // responsive table initialization
  // ================================================================
  function handleWindowUpdate() {
    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerWidth != windowWidth) {
      // Update the window width for next time
      windowWidth = window.innerWidth;

      // Do stuff here
      tableDataScrolledInit(windowWidth);
    }
  }
  function maxDimension(elements) {
    var res = {
      'height': 0,
      'width': 0
    };
    var elementHeights = Array.prototype.map.call(elements, function (el) {
      return el.clientHeight;
    });
    var elementWidths = Array.prototype.map.call(elements, function (el) {
      return el.clientWidth;
    });
    var maxHeight = Math.max.apply(null, elementHeights);
    var maxWidth = Math.max.apply(null, elementWidths);
    res = {
      'height': maxHeight,
      'width': maxWidth
    };
    return res;
  }
  ;
  function tableDataScrolledInit(w) {
    if (w <= 768) {
      var _loop = function _loop() {
        var tbodyRows = rootRef.current.querySelectorAll("tbody tr [data-table-col=\"".concat(i, "\"]"));
        var maxHeight = maxDimension(tbodyRows).height;
        [].slice.call(tbodyRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });

        //
        var theadRows = rootRef.current.querySelectorAll("thead tr [data-table-col=\"".concat(i, "\"]"));
        [].slice.call(theadRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });
      };
      //get maxHeight of per row
      for (var i = 0; i < tbodyRef.current.querySelector('tr').children.length; i++) {
        _loop();
      }
    } else {
      [].slice.call(rootRef.current.querySelectorAll('tbody td, tbody th, thead th')).forEach(function (node, i) {
        node.removeAttribute('style');
      });
    }
  }

  // ================================================================
  // checkboxes data
  // ================================================================
  function initCheckboxesData() {
    var _checkboxes = (0,dom.getChildren)(rootRef.current.querySelector('table').querySelector('tbody'), '[type="checkbox"]');
    var _data = [];
    [].slice.call(_checkboxes).forEach(function (node, i) {
      _data.push({
        key: "row-".concat(i),
        checked: false
      });
    });
    setCheckedData(_data);
    setCheckedRootData([{
      key: "row-all",
      checked: false
    }]);
  }

  // ================================================================
  // sort with headers
  // ================================================================
  var inverse = false;
  function handleSortList(e) {
    var el = e.currentTarget.parentNode;
    var filterType = el.dataset.sortType;
    var curIndex = el.dataset.tableCol;
    var targetComparator = [].slice.call(tbodyRef.current.querySelectorAll("[data-table-col=\"".concat(curIndex, "\"]")));
    if (filterType === false) return false;

    //sort of HTML elements
    var sortBy = function sortBy(a, b) {
      var txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
        txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();

      //type of number
      if (filterType == 'number') {
        txt1 = Number(txt1.replace(/[^0-9.-]+/g, ''));
        txt2 = Number(txt2.replace(/[^0-9.-]+/g, ''));
      }

      //type of date
      if (filterType == 'date') {
        txt1 = new Date(txt1);
        txt2 = new Date(txt2);
      }

      //add filter class
      allRows().forEach(function (node) {
        node.classList.add('newsort');
      });
      inverse = !inverse;
      return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
    };
    targetComparator.sort(sortBy);

    //console.log( 'targetComparator:', targetComparator );
    //console.log( 'inverse:', self.inverse );

    if (!inverse) targetComparator.reverse();
    allRows().forEach(function (node) {
      node.remove();
    });
    for (var i = 0; i < targetComparator.length; i++) {
      var curRow = targetComparator[i].parentNode;
      tbodyRef.current.appendChild(curRow);
    }
  }

  // ================================================================
  //drag & drop
  // ================================================================
  var draggedObj = null;
  var overObj = null;
  var placeholderGenerator = function placeholderGenerator(trHeight) {
    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-placeholder';
    newRow.dataset.placeholder = 'true';
    newRow.style.height = trHeight + 'px';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var lastRowGenerator = function lastRowGenerator(trHeight) {
    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-obj row-obj-clonelast';
    newRow.dataset.id = allRows().length.toString();
    newRow.style.height = trHeight + 'px';
    newRow.style.display = 'none';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var removePlaceholder = function removePlaceholder() {
    // Delete row at the "index" of the table
    var placeholder = [].slice.call(tbodyRef.current.querySelectorAll("[data-placeholder]"));
    placeholder.forEach(function (node) {
      tbodyRef.current.removeChild(node);
    });
  };
  function handleTbodyLeave(e) {
    tbodyRef.current.classList.remove('drag-trigger-mousedown');
  }

  // events fired on the drop targets
  var handledragOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    e.preventDefault();
    draggedObj.style.display = 'none';
    if (e.target.classList.contains('row-placeholder')) return;
    var itemsWrapper = e.target.parentNode;
    if (itemsWrapper.classList.contains('row-obj')) {
      overObj = itemsWrapper;
      removePlaceholder();
      if (Number(overObj.dataset.id) === allRows().length - 1) {
        tbodyRef.current.insertBefore(placeholderGenerator(allRows().at(-2).clientHeight), overObj);
      } else {
        tbodyRef.current.insertBefore(placeholderGenerator(overObj.clientHeight), overObj);
      }
    }
  }, [sortData]);
  var handleDragStart = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    draggedObj = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedObj);
    draggedObj.classList.add('dragging');
    allRows().at(-1).style.setProperty('display', 'table-row', "important");

    // callback
    var dragStart = function dragStart(callback) {
      callback.call(null, draggedObj, sortData, printData(sortData));
    };
    onDrag === null || onDrag === void 0 ? void 0 : onDrag(dragStart, null);
  }, [handledragOver]);
  var handleDragEnd = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    draggedObj.style.display = 'table-row';
    removePlaceholder();
    draggedObj.classList.remove('dragging');
    allRows().at(-1).style.setProperty('display', 'none', "important");
    tbodyRef.current.classList.remove('drag-trigger-mousedown');
    if (overObj === null) return;

    // update state
    var curData = [];
    curData = JSON.parse(JSON.stringify(sortData));
    var from = Number(draggedObj.dataset.id);
    var to = Number(overObj.dataset.id);
    if (from < to) to--;

    //sort data
    var newData = [];

    //console.log('--> data1:', curData);

    curData.splice(to, 0, curData.splice(from, 1)[0]);
    for (var i = 0; i < curData.length; i++) {
      for (var j = 0; j < curData.length; j++) {
        if (curData[i] === curData[j]) {
          newData.push(curData[j]);
        }
      }
    }

    //console.log("--> data2: ", newData);
    setSortData(newData);

    // reset data-id in order to sort data
    newData.forEach(function (curId, order) {
      rootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(curId, "\"]")).dataset.id = order;
    });

    // sort elements
    var categoryItemsArray = allRows();
    var sorter = function sorter(a, b) {
      return a.dataset.id.localeCompare(b.dataset.id); // sorts based on alphabetical order
    };

    var sorted = categoryItemsArray.sort(sorter);
    sorted.forEach(function (e) {
      return rootRef.current.querySelector('table').querySelector('tbody').appendChild(e);
    });

    // callback
    var dragEnd = function dragEnd(callback) {
      callback.call(null, draggedObj, newData, printData(newData));
    };
    onDrag === null || onDrag === void 0 ? void 0 : onDrag(null, dragEnd);
  }, [sortData]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Initialize sort list data
    //--------------
    var listIndexes = allRows().map(function (node, i) {
      return i;
    });
    setSortData(listIndexes);

    // Initialize checkboxes data
    //--------------
    initCheckboxesData();

    // With scroll bars
    //--------------
    if (enhancedResponsiveWithScrollBar) {
      var _windowWidth = window.innerWidth;
      tableDataScrolledInit(_windowWidth);
    }

    //drag & drop
    //--------------
    if (draggable) {
      insertAfter(lastRowGenerator(allRows().at(-1).clientHeight), allRows().at(-1));
    }

    // Add function to the element that should be used as the scrollable area.
    //--------------
    window.removeEventListener('resize', windowResizeUpdate);
    window.addEventListener('resize', windowResizeUpdate);

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      window.removeEventListener('resize', windowResizeUpdate);
    };
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: rootRef,
    id: idRes,
    className: "table__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses, " ").concat(enhancedResponsiveClasses, " ").concat(checkableClasses, " ").concat(draggableClasses, " ").concat(sortableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: "".concat(tableClassName || tableClassName === '' ? tableClassName : "table", " ").concat(tableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableHeaders, {
    data: _headers,
    headClassName: headClassName,
    checkboxNamePrefix: idRes,
    sortable: sortable,
    updateCheckedPrint: setCheckedPrint,
    getCheckedPrint: checkedPrint,
    updategetCheckedData: setCheckedData,
    getCheckedData: checkedData,
    updategetCheckedRootData: setCheckedRootData,
    getCheckedRootData: checkedRootData,
    onCheck: onCheck,
    evSort: handleSortList
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableSummaries, {
    data: _summaries,
    footClassName: footClassName
  }), data.hasOwnProperty('fields') && colGroup ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableColgroup, {
    data: data.fields
  }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
    ref: tbodyRef,
    className: bodyClassName ? bodyClassName : '',
    onDragOver: handledragOver,
    onMouseLeave: handleTbodyLeave
  }, data.hasOwnProperty('fields') ? data.fields.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableRow, {
      key: i,
      index: i,
      rowKey: "row-".concat(i),
      headerLabel: _headers,
      data: item,
      checkboxNamePrefix: idRes,
      updateCheckedPrint: setCheckedPrint,
      getCheckedPrint: checkedPrint,
      updategetCheckedData: setCheckedData,
      getCheckedData: checkedData,
      updategetCheckedRootData: setCheckedRootData,
      getCheckedRootData: checkedRootData,
      onCheck: onCheck,
      draggable: draggable || false,
      evDragEnd: handleDragEnd,
      evDragStart: handleDragStart
    });
  }) : ""))));
};
/* harmony default export */ const src = (Table);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});