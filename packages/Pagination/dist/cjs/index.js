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
;// CONCATENATED MODULE: ./src/pagination-navigators.tsx
/*
* Generate page navigators
*
* @param  {Number} visibleNavigators    - The range of pages displayed.
* @param  {Number} totalPages           - The total number of pages.
* @param  {Number} activePage           - The currently selected page number.
* @param  {Boolean} adjustmentEnabled   - Whether to complete the page number range.
* @param  {Boolean} symmetry            - The activation button is symmetrical on the left and right sides.
* @return {Array}                       - Return an array.
*/
function paginationNavigators(visibleNavigators, totalPages, activePage) {
  var adjustmentEnabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var symmetry = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // Generate a sequence of numbers
  // Since the array is initialized with `undefined` on each position,
  // the value of `v` below will be `undefined`

  var result = [];
  if (activePage + visibleNavigators - 1 < totalPages) {
    result = Array.from({
      length: visibleNavigators
    }, function (v, k) {
      return k + activePage;
    });
  } else {
    var diff = totalPages - activePage;
    if (diff >= 0) {
      result = Array.from({
        length: diff + 1
      }, function (v, k) {
        return k + activePage;
      });
    }
  }

  //Shift the elements forward to complete the display range
  var adjustmentResult = function adjustmentResult(arr) {
    if (arr.length < totalPages) {
      var adjustment = visibleNavigators - arr.length;
      for (var i = 1; i <= adjustment; i++) {
        arr.unshift(activePage - i);
      }
    }
    return arr;
  };
  if (adjustmentEnabled) result = adjustmentResult(result);

  // symmetrical on the left and right sides
  if (symmetry) {
    if (totalPages > activePage) {
      var totalDisplayedPages = visibleNavigators + (visibleNavigators - 1);
      var activedPageIndex = result.indexOf(activePage);
      var leftSideTotal = visibleNavigators - 1 - activedPageIndex;
      for (var i = 1; i <= leftSideTotal; i++) {
        result.unshift(activePage - i - activedPageIndex);
      }
    }
  }
  return result;
}
/* harmony default export */ const pagination_navigators = ((/* unused pure expression or super */ null && (paginationNavigators)));
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/index.tsx



var Pagination = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var wrapperClassName = props.wrapperClassName,
    navClassName = props.navClassName,
    navItemClassName = props.navItemClassName,
    apiUrl = props.apiUrl,
    pageRangeDisplayed = props.pageRangeDisplayed,
    activePage = props.activePage,
    totalPages = props.totalPages,
    previousLabel = props.previousLabel,
    nextLabel = props.nextLabel,
    firstLabel = props.firstLabel,
    lastLabel = props.lastLabel,
    breakLabel = props.breakLabel,
    align = props.align,
    onlyPrevNext = props.onlyPrevNext,
    activeClassName = props.activeClassName,
    previousClassName = props.previousClassName,
    nextClassName = props.nextClassName,
    firstClassName = props.firstClassName,
    lastClassName = props.lastClassName,
    disabledClassName = props.disabledClassName,
    symmetry = props.symmetry,
    style = props.style,
    onChange = props.onChange;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var visibleNavigators = pageRangeDisplayed ? pageRangeDisplayed : 3;

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(externalRef, function () {
    return {
      next: function next(cb) {
        handleClick('next', function (p) {
          cb === null || cb === void 0 ? void 0 : cb(p);
        });
      },
      prev: function prev(cb) {
        handleClick('prev', function (p) {
          cb === null || cb === void 0 ? void 0 : cb(p);
        });
      },
      first: function first(cb) {
        handleClick('first', function (p) {
          cb === null || cb === void 0 ? void 0 : cb(p);
        });
      },
      last: function last(cb) {
        handleClick('last', function (p) {
          cb === null || cb === void 0 ? void 0 : cb(p);
        });
      }
    };
  }, [externalRef, totalPages, activePage]);
  var alignClassName = '';
  switch (align) {
    case 'left':
      alignClassName = ' justify-content-start';
      break;
    case 'right':
      alignClassName = ' justify-content-end';
      break;
    case 'center':
      alignClassName = ' justify-content-center';
      break;
  }
  var _activeClassName = activeClassName || 'active',
    _previousClassName = previousClassName || 'prev',
    _nextClassName = nextClassName || 'next',
    _firstClassName = firstClassName || 'first',
    _lastClassName = lastClassName || 'last',
    _disabledClassName = disabledClassName || 'disabled',
    _itemClassName = navItemClassName || 'page-item',
    _onlyPrevNextButtons = typeof onlyPrevNext === 'undefined' ? false : onlyPrevNext,
    _symmetry = typeof symmetry === 'undefined' ? false : symmetry;

  //get navigation array
  //------------------------------------------
  var navArr = paginationNavigators(visibleNavigators, totalPages, activePage, true, _symmetry);

  // Use ellipsis to extend page numbers
  //------------------------------------------
  var _ellipsis = breakLabel ? breakLabel : '';
  var _ellipsisArr = [];
  var _ellipsisEnabled = false;
  if (_ellipsis !== '') _ellipsisArr = [totalPages - 1, totalPages];
  if (activePage + 2 >= totalPages) {
    _ellipsisArr = [];
    _ellipsis = '';
  }
  var _ellipsisElements = _ellipsisArr.map(function (item, i) {
    if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
      //Delete values whose display range is more than the total
      if (navArr.indexOf(item) === -1) {
        _ellipsisEnabled = true;
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
          key: i,
          className: activePage === item ? "".concat(_itemClassName, " ").concat(_activeClassName) : "".concat(_itemClassName)
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
          className: "page-link",
          "data-page": item,
          href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', item),
          onClick: function onClick(e) {
            e.preventDefault();
            onChange === null || onChange === void 0 ? void 0 : onChange(Number(item), Number(totalPages));
          }
        }, item));
      }
    }
  });
  function handleClick(parameter, cb) {
    switch (parameter) {
      case "prev":
        onChange === null || onChange === void 0 ? void 0 : onChange(activePage - 1, Number(totalPages));
        cb === null || cb === void 0 ? void 0 : cb(activePage - 1);
        break;
      case "next":
        onChange === null || onChange === void 0 ? void 0 : onChange(activePage + 1, Number(totalPages));
        cb === null || cb === void 0 ? void 0 : cb(activePage + 1);
        break;
      case "first":
        onChange === null || onChange === void 0 ? void 0 : onChange(1, Number(totalPages));
        cb === null || cb === void 0 ? void 0 : cb(1);
        break;
      case "last":
        onChange === null || onChange === void 0 ? void 0 : onChange(totalPages, Number(totalPages));
        cb === null || cb === void 0 ? void 0 : cb(totalPages);
        break;
      default:
        onChange === null || onChange === void 0 ? void 0 : onChange(1, Number(totalPages));
        cb === null || cb === void 0 ? void 0 : cb(1);
        break;
    }
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("nav", {
    ref: rootRef,
    className: (0,cls.clsWrite)(wrapperClassName, 'mb-3 position-relative'),
    style: style
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: (0,cls.combinedCls)(alignClassName, (0,cls.clsWrite)(navClassName, 'pagination'))
  }, firstLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage > 1 ? "".concat(_itemClassName, " ").concat(_firstClassName) : "".concat(_itemClassName, " ").concat(_firstClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage > 1 ? 0 : -1,
    "aria-disabled": activePage > 1 ? 'false' : 'true',
    className: "page-link",
    "data-page": 1,
    href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', '1'),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('first');
    }
  }, firstLabel || null)) : '', previousLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage > 1 ? "".concat(_itemClassName, " ").concat(_previousClassName) : "".concat(_itemClassName, " ").concat(_previousClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage > 1 ? 0 : -1,
    "aria-disabled": activePage > 1 ? 'false' : 'true',
    className: "page-link",
    "data-page": activePage - 1,
    href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', activePage - 1),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('prev');
    }
  }, previousLabel || null)) : '', navArr.map(function (item, i) {
    if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: i,
        className: activePage === item ? "".concat(_itemClassName, " ").concat(_activeClassName) : "".concat(_itemClassName)
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        className: "page-link",
        "data-page": item,
        href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', item),
        onClick: function onClick(e) {
          e.preventDefault();
          onChange === null || onChange === void 0 ? void 0 : onChange(Number(item), Number(totalPages));
        }
      }, item));
    }
  }), _ellipsis !== '' && _ellipsisEnabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: _itemClassName
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "page-link"
  }, _ellipsis))) : '', _ellipsisElements, nextLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage < totalPages ? "".concat(_itemClassName, " ").concat(_nextClassName) : "".concat(_itemClassName, " ").concat(_nextClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage < totalPages ? 0 : -1,
    "aria-disabled": activePage < totalPages ? 'false' : 'true',
    className: "page-link",
    "data-page": activePage + 1,
    href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', activePage + 1),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('next');
    }
  }, nextLabel || null)) : '', lastLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage < totalPages ? "".concat(_itemClassName, " ").concat(_lastClassName) : "".concat(_itemClassName, " ").concat(_lastClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage < totalPages ? 0 : -1,
    "aria-disabled": activePage < totalPages ? 'false' : 'true',
    className: "page-link",
    "data-page": totalPages,
    href: apiUrl === null || apiUrl === void 0 ? void 0 : apiUrl.replace('{page}', totalPages),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('last');
    }
  }, lastLabel || null)) : '')));
});
/* harmony default export */ const src = (Pagination);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});