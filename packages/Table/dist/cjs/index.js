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
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
    colSpan: props.cols,
    "data-table": props.columnHeader,
    "data-table-row": props.index
  }, props.content));
};
/* harmony default export */ const src_TableField = (TableField);
;// CONCATENATED MODULE: ./src/TableFieldRow.tsx


/* Table Field Row
-------------------------------------------------*/

var TableFieldRow = function TableFieldRow(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    scope: "row",
    colSpan: props.cols,
    "data-table": props.columnHeader,
    "data-table-row": props.index
  }, props.content));
};
/* harmony default export */ const src_TableFieldRow = (TableFieldRow);
;// CONCATENATED MODULE: ./src/TableRow.tsx




/* Table Row
-------------------------------------------------*/

var TableRow = function TableRow(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, props.data ? props.data.map(function (el, i) {
    var label = props.headerLabel[i];
    if (label === undefined) label = '';
    if (i === 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableFieldRow, {
        key: "field" + i,
        columnHeader: label.replace(/<span[^>]*>[\s\S]+<\/span>/g, ''),
        cols: el.cols,
        content: el.content,
        index: i
      });
    } else {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableField, {
        key: "field" + i,
        columnHeader: label.replace(/<span[^>]*>[\s\S]+<\/span>/g, ''),
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
  return props.data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
    className: props.headClassName ? props.headClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, props.data.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: "header" + i,
      scope: "col",
      "data-table": item.replace(/<span[^>]*>[\s\S]+<\/span>/g, ''),
      "data-table-row": i
    }, item);
  })))) : null;
};
/* harmony default export */ const src_TableHeaders = (TableHeaders);
;// CONCATENATED MODULE: ./src/TableSummaries.tsx


/* Table Summaries
-------------------------------------------------*/

var TableSummaries = function TableSummaries(props) {
  return props.data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tfoot", {
    className: props.footClassName ? props.footClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, props.data.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: "summary" + i
    }, item);
  })))) : null;
};
/* harmony default export */ const src_TableSummaries = (TableSummaries);
;// CONCATENATED MODULE: ./src/TableColgroup.tsx


/* Table Colgroup
-------------------------------------------------*/

var TableColgroup = function TableColgroup(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("colgroup", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", null), props.data ? props.data.map(function (el, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", {
      key: "colgroup-placeholder" + i
    });
  }) : null));
};
/* harmony default export */ const src_TableColgroup = (TableColgroup);
;// CONCATENATED MODULE: ./src/index.tsx






var Table = function Table(props) {
  var wrapperClassName = props.wrapperClassName,
    tableClassName = props.tableClassName,
    bodyClassName = props.bodyClassName,
    headClassName = props.headClassName,
    footClassName = props.footClassName,
    data = props.data,
    bordered = props.bordered,
    colGroup = props.colGroup,
    responsive = props.responsive,
    enhancedResponsive = props.enhancedResponsive,
    enhancedResponsiveWithScrollBar = props.enhancedResponsiveWithScrollBar,
    id = props.id;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
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
  if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive js-table-enhanced-responsive';
  if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' js-table-enhanced-responsive-scrolled';
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
        var tbodyRows = rootRef.current.querySelectorAll("tbody tr [data-table-row=\"".concat(i, "\"]"));
        var maxHeight = maxDimension(tbodyRows).height;
        [].slice.call(tbodyRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });

        //
        var theadRows = rootRef.current.querySelectorAll("thead tr [data-table-row=\"".concat(i, "\"]"));
        [].slice.call(theadRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });
      };
      //get maxHeight of per row
      for (var i = 0; i < rootRef.current.querySelector('tbody tr').children.length; i++) {
        _loop();
      }
    } else {
      [].slice.call(rootRef.current.querySelectorAll('tbody td, tbody th, thead th')).forEach(function (node, i) {
        node.removeAttribute('style');
      });
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // With scroll bars
    //--------------
    if (enhancedResponsiveWithScrollBar) {
      var _windowWidth = window.innerWidth;
      tableDataScrolledInit(_windowWidth);
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
    className: "table__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses, " ").concat(enhancedResponsiveClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: "".concat(tableClassName || tableClassName === '' ? tableClassName : "table", " ").concat(tableClasses)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableHeaders, {
    data: _headers,
    headClassName: headClassName
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableSummaries, {
    data: _summaries,
    footClassName: footClassName
  }), data.hasOwnProperty('fields') && colGroup ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableColgroup, {
    data: data.fields
  }) : "", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
    className: bodyClassName ? bodyClassName : ''
  }, data.hasOwnProperty('fields') ? data.fields.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableRow, {
      key: "row" + i,
      headerLabel: _headers,
      data: item
    });
  }) : ""))));
};
/* harmony default export */ const src = (Table);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});