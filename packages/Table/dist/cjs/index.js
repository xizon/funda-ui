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
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)( false || false),
            _useState2 = _slicedToArray(_useState, 2),
            val = _useState2[0],
            setVal = _useState2[1]; // Avoid the error "react checkbox changing an uncontrolled input to be controlled"

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
          }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
            type: "hidden",
            id: idRes,
            name: name,
            value: val ? value || '' : '' // do not use `defaultValue`
          }, attributes)), label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: "label-".concat(idRes),
            className: "form-check-label",
            dangerouslySetInnerHTML: {
              __html: "".concat(label)
            }
          })) : null)));
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

/***/ 135:
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
        var _excluded = ["wrapperClassName", "disabled", "required", "value", "label", "name", "id", "options", "inline", "style", "tabIndex", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "fetchCallback", "onFetch", "onClick", "onChange", "onBlur", "onFocus"];
        function _regeneratorRuntime() {
          "use strict";

          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          _regeneratorRuntime = function _regeneratorRuntime() {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty = Object.defineProperty || function (obj, key, desc) {
              obj[key] = desc.value;
            },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context)
            }), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
              }
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = "suspendedStart";
            return function (method, arg) {
              if ("executing" === state) throw new Error("Generator is already running");
              if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg;;) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                  if ("suspendedStart" === state) throw state = "completed", context.arg;
                  context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                  if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                  return {
                    value: record.arg,
                    done: context.done
                  };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                  };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0
          }), defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0
          }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports.awrap = function (arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
            return this;
          }), define(Gp, "toString", function () {
            return "[object Generator]";
          }), exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
              for (; keys.length;) {
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
              }
              return next.done = !0, next;
            };
          }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
          }, exports;
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
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
            });
          };
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
        var Radio = function Radio(props) {
          var wrapperClassName = props.wrapperClassName,
            disabled = props.disabled,
            required = props.required,
            value = props.value,
            label = props.label,
            name = props.name,
            id = props.id,
            options = props.options,
            inline = props.inline,
            style = props.style,
            tabIndex = props.tabIndex,
            fetchFuncAsync = props.fetchFuncAsync,
            fetchFuncMethod = props.fetchFuncMethod,
            fetchFuncMethodParams = props.fetchFuncMethodParams,
            fetchCallback = props.fetchCallback,
            onFetch = props.onFetch,
            onClick = props.onClick,
            onChange = props.onChange,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            attributes = _objectWithoutProperties(props, _excluded);
          var uniqueID = (0, react__WEBPACK_IMPORTED_MODULE_0__.useId)();
          var idRes = id || uniqueID;
          var rootRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          var optionsRes = options ? isJSON(options) ? JSON.parse(options) : options : '';

          // return a array of options
          var optionsDataInit = optionsRes;

          //
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(optionsDataInit),
            _useState2 = _slicedToArray(_useState, 2),
            dataInit = _useState2[0],
            setDataInit = _useState2[1];
          var _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
            _useState4 = _slicedToArray(_useState3, 2),
            hasErr = _useState4[0],
            setHasErr = _useState4[1];
          var _useState5 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
            _useState6 = _slicedToArray(_useState5, 2),
            controlValue = _useState6[0],
            setControlValue = _useState6[1];
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
                    if (typeof value !== 'undefined' && value !== '') rootRef.current.dataset.value = value;

                    //
                    if (!(_typeof(fetchFuncAsync) === 'object')) {
                      _context.next = 14;
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

                    //
                    setControlValue(value); // value must be initialized

                    //
                    setDataInit(_ORGIN_DATA); // data must be initialized

                    //
                    onFetch === null || onFetch === void 0 ? void 0 : onFetch(_ORGIN_DATA);
                    return _context.abrupt("return", _ORGIN_DATA);
                  case 14:
                    //
                    setControlValue(value); // value must be initialized

                    //
                    setDataInit(optionsDataInit); // data must be initialized

                    //
                    onFetch === null || onFetch === void 0 ? void 0 : onFetch(optionsDataInit);
                    return _context.abrupt("return", optionsDataInit);
                  case 18:
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

          //
          function handleFocus(event) {
            rootRef.current.classList.add('focus');

            //
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
          }
          function handleChange(event) {
            var val = event.target.value;
            var currentIndex = event.target.dataset.index;

            //----
            // update value
            setControlValue(val);

            //----
            //remove focus style
            rootRef.current.classList.remove('focus');

            //
            if (typeof onChange === 'function') {
              onChange(event, val, dataInit[currentIndex], currentIndex);
            }
            if (typeof onClick === 'function') {
              onClick(event, val, dataInit[currentIndex], currentIndex);
            }
          }
          function handleBlur(event) {
            //----
            //remove focus style
            rootRef.current.classList.remove('focus');

            //
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
          }

          // Generate list of options
          var itemsList = Array.isArray(dataInit) ? dataInit.map(function (item, index) {
            var requiredVal = index === 0 ? required || null : null;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              key: index,
              className: inline ? "form-check form-check-inline" : "form-check"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "d-inline-block"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
              tabIndex: tabIndex || 0,
              type: "radio",
              className: "form-check-input",
              id: "field-".concat(uniqueID, "-").concat(index),
              name: name,
              "data-index": index,
              value: "".concat(item.value),
              required: requiredVal,
              disabled: disabled || null,
              onChange: handleChange,
              onClick: typeof onClick === 'function' ? handleChange : function () {
                return void 0;
              },
              onFocus: handleFocus,
              onBlur: handleBlur,
              checked: controlValue == item.value // component status will not change if defaultChecked is used
              ,

              style: style
            }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
              className: "form-check-label",
              htmlFor: "field-".concat(uniqueID, "-").concat(index),
              dangerouslySetInnerHTML: {
                __html: "".concat(item.label)
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "d-inline-block"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "form-control-extends__wrapper"
            }, typeof item["extends"] !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, item["extends"]) : null)));
          }) : null;
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            // data init
            //--------------
            var _params = fetchFuncMethodParams || [];
            fetchData(_params.join(','));
          }, [value, options]);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            id: "radio__wrapper-".concat(idRes),
            className: "radio__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'),
            ref: rootRef
          }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
            htmlFor: idRes,
            className: "form-label",
            dangerouslySetInnerHTML: {
              __html: "".concat(label)
            }
          })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            id: idRes
          }, !hasErr ? itemsList : null)));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = Radio;
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
// EXTERNAL MODULE: ../Radio/dist/cjs/index.js
var cjs = __webpack_require__(135);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/TableField.tsx


/* Table Field
-------------------------------------------------*/

var TableField = function TableField(props) {
  var cols = props.cols,
    width = props.width,
    className = props.className,
    style = props.style,
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
    onMouseEnter: handleTbodyLeave,
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || ''
  }, content));
};
/* harmony default export */ const src_TableField = (TableField);
// EXTERNAL MODULE: ../Checkbox/dist/cjs/index.js
var dist_cjs = __webpack_require__(109);
var dist_cjs_default = /*#__PURE__*/__webpack_require__.n(dist_cjs);
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
var formatPerlineControlVal = function formatPerlineControlVal(el) {
  var $row = el;
  var _restContent = [].slice.call($row.children).map(function (node, i) {
    return node.innerHTML;
  }).filter(function (item) {
    return item !== undefined;
  });
  return {
    index: Number(el.dataset.id),
    key: el.dataset.key,
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
    useRadio = props.useRadio,
    cols = props.cols,
    width = props.width,
    className = props.className,
    style = props.style,
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
    "data-table-col": index,
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || ''
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
  }, useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    wrapperClassName: "",
    options: "[\n                                {\"label\": \"\",\"value\": \"".concat(rowKey, "\"}\n                            ]"),
    name: "checkbox-".concat(checkboxNamePrefix, "-0"),
    tabIndex: -1,
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    value: "".concat(rowKey),
    onClick: function onClick(e, val) {
      // callback
      //-----------
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(formatCheckboxControlVal(e.target));
    }
  })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((dist_cjs_default()), {
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
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
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
    useRadio = props.useRadio,
    onClick = props.onClick,
    onCheck = props.onCheck,
    evDragEnd = props.evDragEnd,
    evDragStart = props.evDragStart;
  var nonExistentRowKey = "row-null";
  var rowChecked = (_filter$ = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked;
  function handleClick(event) {
    var curVal = formatPerlineControlVal(event.currentTarget);
    onClick === null || onClick === void 0 ? void 0 : onClick(event, curVal);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
    draggable: draggable,
    onDragEnd: evDragEnd,
    onDragStart: evDragStart,
    "data-id": index,
    "data-key": rowKey,
    className: "row-obj ".concat(rowChecked ? 'active' : '', " ").concat(typeof onClick === 'undefined' ? '' : 'clickable'),
    onClick: handleClick
  }, data ? data.map(function (el, i) {
    var headerItem = headerLabel[i];
    if (headerItem === undefined) headerItem = {
      type: false,
      content: ''
    };
    if (i === 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableFieldRow, {
        key: 'th-row' + i,
        useRadio: useRadio,
        columnHeader: headerItem.content.replace(/(<([^>]+)>)/ig, ''),
        cols: el.cols,
        content: el.content,
        width: el.width,
        style: el.style,
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
        key: 'td-row' + i,
        columnHeader: headerItem.content.replace(/(<([^>]+)>)/ig, ''),
        cols: el.cols,
        content: el.content,
        width: el.width,
        style: el.style,
        index: i
      });
    }
  }) : null, useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    wrapperClassName: "",
    options: "[\n                                {\"label\": \"\",\"value\": \"".concat(nonExistentRowKey, "\"}\n                            ]"),
    name: "checkbox-".concat(checkboxNamePrefix, "-0"),
    tabIndex: -1,
    "data-index": "".concat(nonExistentRowKey === null || nonExistentRowKey === void 0 ? void 0 : nonExistentRowKey.replace('row-', '')),
    "data-key": "".concat(nonExistentRowKey),
    value: "".concat(nonExistentRowKey)
  }))) : null));
};
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableHeaders.tsx





/* Table Headers
-------------------------------------------------*/

var TableHeaders = function TableHeaders(props) {
  var data = props.data,
    useRadio = props.useRadio,
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
      "data-table-col": i,
      style: item.style ? item.style : item.width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
        width: item.width
      } : {} : {},
      className: item.className || ''
    }, i === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "checkbox-trigger",
      style: {
        visibility: useRadio ? 'hidden' : 'visible'
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((dist_cjs_default()), {
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
  }), useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    style: {
      display: 'none'
    }
  })) : null))) : null;
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
    useRadio = props.useRadio,
    draggable = props.draggable,
    sortable = props.sortable,
    data = props.data,
    bordered = props.bordered,
    colGroup = props.colGroup,
    responsive = props.responsive,
    enhancedResponsive = props.enhancedResponsive,
    enhancedResponsiveWithScrollBar = props.enhancedResponsiveWithScrollBar,
    id = props.id,
    onClick = props.onClick,
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
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    mainUpdate = _useState10[0],
    setMainUpdate = _useState10[1];
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
  var radioClasses = '';
  if (useRadio) radioClasses += ' use-radio';

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
    // Update status of children components
    //--------------
    setMainUpdate(function (prevState) {
      return !prevState;
    });

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
    className: "table__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses, " ").concat(enhancedResponsiveClasses, " ").concat(checkableClasses, " ").concat(radioClasses, " ").concat(draggableClasses, " ").concat(sortableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: "".concat(tableClassName || tableClassName === '' ? tableClassName : "table", " ").concat(tableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableHeaders, {
    data: _headers,
    useRadio: useRadio || false,
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
      key: i + String(mainUpdate) // Trigger child component update when prop of parent changes
      ,
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
      onClick: onClick,
      onCheck: onCheck,
      draggable: draggable || false,
      useRadio: useRadio || false,
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