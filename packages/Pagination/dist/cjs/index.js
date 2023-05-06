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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 787:
/***/ ((module) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
;// CONCATENATED MODULE: ./src/index.tsx


var Pagination = function Pagination(props) {
  var wrapperClassName = props.wrapperClassName,
    navClassName = props.navClassName,
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
    activeClass = props.activeClass,
    previousClass = props.previousClass,
    nextClass = props.nextClass,
    firstClass = props.firstClass,
    lastClass = props.lastClass,
    disabledClass = props.disabledClass,
    symmetry = props.symmetry,
    style = props.style,
    onChange = props.onChange;
  function handleClick(parameter) {
    switch (parameter) {
      case "prev":
        onChange === null || onChange === void 0 ? void 0 : onChange(activePage - 1);
        break;
      case "next":
        onChange === null || onChange === void 0 ? void 0 : onChange(activePage + 1);
        break;
      case "first":
        onChange === null || onChange === void 0 ? void 0 : onChange(1);
        break;
      case "last":
        onChange === null || onChange === void 0 ? void 0 : onChange(totalPages);
        break;
      default:
        onChange === null || onChange === void 0 ? void 0 : onChange(1);
        break;
    }
  }
  var visibleNavigators = pageRangeDisplayed ? pageRangeDisplayed : 3;
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
  var _activeClassName = activeClass ? activeClass : 'active',
    _previousClassName = previousClass ? previousClass : 'prev',
    _nextClassName = nextClass ? nextClass : 'next',
    _firstClassName = firstClass ? firstClass : 'first',
    _lastClassName = lastClass ? lastClass : 'last',
    _disabledClassName = disabledClass ? disabledClass : 'disabled',
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
          className: activePage === item ? "page-item ".concat(_activeClassName) : "page-item"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
          className: "page-link",
          href: apiUrl.replace('{page}', item),
          onClick: function onClick(e) {
            e.preventDefault();
            onChange === null || onChange === void 0 ? void 0 : onChange(item);
          }
        }, item));
      }
    }
  });
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("nav", {
    className: wrapperClassName ? wrapperClassName : "mb-3 position-relative",
    style: style
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: navClassName ? "".concat(navClassName, " ").concat(alignClassName) : "pagination ".concat(alignClassName)
  }, firstLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage > 1 ? "page-item ".concat(_firstClassName) : "page-item ".concat(_firstClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage > 1 ? 0 : -1,
    "aria-disabled": activePage > 1 ? 'false' : 'true',
    className: "page-link",
    href: apiUrl.replace('{page}', '1'),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('first');
    }
  }, firstLabel || null)) : '', previousLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage > 1 ? "page-item ".concat(_previousClassName) : "page-item ".concat(_previousClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage > 1 ? 0 : -1,
    "aria-disabled": activePage > 1 ? 'false' : 'true',
    className: "page-link",
    href: apiUrl.replace('{page}', activePage - 1),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('prev');
    }
  }, previousLabel || null)) : '', navArr.map(function (item, i) {
    if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: i,
        className: activePage === item ? "page-item ".concat(_activeClassName) : "page-item"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        className: "page-link",
        href: apiUrl.replace('{page}', item),
        onClick: function onClick(e) {
          e.preventDefault();
          onChange === null || onChange === void 0 ? void 0 : onChange(item);
        }
      }, item));
    }
  }), _ellipsis !== '' && _ellipsisEnabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "page-link"
  }, _ellipsis))) : '', _ellipsisElements, nextLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage < totalPages ? "page-item ".concat(_nextClassName) : "page-item ".concat(_nextClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage < totalPages ? 0 : -1,
    "aria-disabled": activePage < totalPages ? 'false' : 'true',
    className: "page-link",
    href: apiUrl.replace('{page}', activePage + 1),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('next');
    }
  }, nextLabel || null)) : '', lastLabel ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: activePage < totalPages ? "page-item ".concat(_lastClassName) : "page-item ".concat(_lastClassName, " ").concat(_disabledClassName)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    tabIndex: activePage < totalPages ? 0 : -1,
    "aria-disabled": activePage < totalPages ? 'false' : 'true',
    className: "page-link",
    href: apiUrl.replace('{page}', totalPages),
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick('last');
    }
  }, lastLabel || null)) : '')));
};
/* harmony default export */ const src = (Pagination);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});