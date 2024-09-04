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
  "DragHandleSprite": () => (/* reexport */ table_utils_DragHandleSprite),
  "SortSprite": () => (/* reexport */ table_utils_SortSprite),
  "Table": () => (/* reexport */ src_Table),
  "TableBody": () => (/* reexport */ src_TableBody),
  "TableCaption": () => (/* reexport */ src_TableCaption),
  "TableCell": () => (/* reexport */ src_TableCell),
  "TableColgroup": () => (/* reexport */ src_TableColgroup),
  "TableFilter": () => (/* reexport */ table_utils_TableFilter),
  "TableFoot": () => (/* reexport */ src_TableFoot),
  "TableHead": () => (/* reexport */ src_TableHead),
  "TableRow": () => (/* reexport */ src_TableRow),
  "ToggleSelection": () => (/* reexport */ table_utils_ToggleSelection)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
;// CONCATENATED MODULE: ./src/TableContext.tsx

var TableContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(undefined);
var TableProvider = function TableProvider(props) {
  var children = props.children,
    value = props.value;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableContext.Provider, {
    value: value
  }, children);
};

;// CONCATENATED MODULE: ./src/table-utils/func.ts
function convertMapToArr(setData) {
  var res = [];
  var s = setData;
  for (var it = s.values(), val = null; val = it.next().value;) {
    res.push(val);
  }
  return res;
}
function htmlToPlain(input) {
  return input.replace(/(<([^>]+)>)/ig, '');
}
function sortDataByIndex(orderArr, data) {
  return Array.isArray(data) ? orderArr.map(function (index) {
    return data[index];
  }) : data;
}
function getTbody(root) {
  if (root === null) return null;
  var tbodyRef = root.querySelector('table tbody');
  return tbodyRef;
}
function getThead(root) {
  if (root === null) return null;
  var tbodyRef = root.querySelector('table thead');
  return tbodyRef;
}
function allRows(root) {
  var tbodyRef = getTbody(root);
  if (tbodyRef === null) return [];
  return [].slice.call(tbodyRef.children);
}
function allHeadRows(root) {
  var tbodyRef = getThead(root);
  if (tbodyRef === null) return [];
  return [].slice.call(tbodyRef.children);
}
function initOrderProps(rootElem) {
  if (rootElem === null) return;

  // !!! Execute it only once
  if (typeof rootElem.dataset.customPropsInit !== 'undefined') return;
  rootElem.dataset.customPropsInit = 1;
  var _allRows = allRows(rootElem);

  // key
  _allRows.forEach(function (node, i) {
    node.dataset.order = "".concat(i);
  });
}
function initRowColProps(rootElem) {
  if (rootElem === null) return;
  var _allRows = allRows(rootElem);
  var _allHeadRows = allHeadRows(rootElem);

  // key
  _allRows.forEach(function (node, i) {
    node.dataset.tableRow = "".concat(i);

    // columns
    var perCol = [].slice.call(node.children);
    perCol.forEach(function (col, j) {
      col.dataset.tableRow = "".concat(i);
      col.dataset.tableCol = "".concat(j);
      col.classList.add(cellMark(i, j));
    });
  });
  _allHeadRows.forEach(function (node, i) {
    node.dataset.tableRow = "-1";

    // columns
    var perCol = [].slice.call(node.children);
    perCol.forEach(function (col, j) {
      col.dataset.tableRow = "-1";
      col.dataset.tableCol = "".concat(j);
      col.classList.add(cellMark(-1, j));
    });
  });
}
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
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
function tableElemScrolledInit(root, w) {
  var tbodyRef = getTbody(root);
  if (tbodyRef === null) return;
  if (w <= 768 && tbodyRef.querySelector('tr') !== null) {
    var _loop = function _loop() {
      var tbodyRows = root.querySelectorAll("tbody tr [data-table-col=\"".concat(i, "\"]"));
      var maxHeight = maxDimension(tbodyRows).height;
      if (maxHeight > 0) {
        [].slice.call(tbodyRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });

        //
        var theadRows = root.querySelectorAll("thead tr [data-table-col=\"".concat(i, "\"]"));
        [].slice.call(theadRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });
      }
    };
    //get maxHeight of per row
    for (var i = 0; i < tbodyRef.querySelector('tr').children.length; i++) {
      _loop();
    }
  } else {
    [].slice.call(root.querySelectorAll('tbody td, tbody th, thead th')).forEach(function (node, i) {
      node.style.removeProperty('height');
    });
  }
}
function cellMark(col, row) {
  return "cell-".concat(col, "-").concat(row);
}
function removeCellFocusClassName(root) {
  if (root) {
    [].slice.call(root.querySelectorAll('td, th')).forEach(function (el) {
      el.classList.remove('cell-focus');
    });
  }
}
;// CONCATENATED MODULE: ./src/table-utils/hooks/useTableResponsive.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Handles the event of responsive table
 * 
 * @usage:

const App = () => {

    const responsiveTable = true;
    const rootRef = useRef<any>(null);

    useTableResponsive({
        enabled: responsiveTable && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */



function useTableResponsive(_ref, deps) {
  var enabled = _ref.enabled,
    spyElement = _ref.spyElement;
  var debounce = function debounce(fn) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(this, arguments);
      }, limit);
    };
  };
  var windowResizeUpdate = debounce(handleWindowUpdate, 50);
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  function handleWindowUpdate() {
    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerWidth != windowWidth) {
      // Update the window width for next time
      windowWidth = window.innerWidth;

      // Do stuff here
      tableElemScrolledInit(spyElement, windowWidth);
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      // Initialize custom props of table elements
      initOrderProps(spyElement);
      initRowColProps(spyElement);

      // With scroll bars
      var _windowWidth = window.innerWidth;
      tableElemScrolledInit(spyElement, _windowWidth);

      // Add function to the element that should be used as the scrollable area.
      window.removeEventListener('resize', windowResizeUpdate);
      window.addEventListener('resize', windowResizeUpdate);

      // Remove the global list of events, especially as scroll and interval.
      return function () {
        window.removeEventListener('resize', windowResizeUpdate);
      };
    }
  }, [enabled, spyElement].concat(_toConsumableArray(deps)));
}
/* harmony default export */ const hooks_useTableResponsive = (useTableResponsive);
;// CONCATENATED MODULE: ./src/table-utils/hooks/useTableDraggable.tsx
function useTableDraggable_toConsumableArray(arr) { return useTableDraggable_arrayWithoutHoles(arr) || useTableDraggable_iterableToArray(arr) || useTableDraggable_unsupportedIterableToArray(arr) || useTableDraggable_nonIterableSpread(); }
function useTableDraggable_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableDraggable_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableDraggable_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableDraggable_arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useTableDraggable_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableDraggable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableDraggable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableDraggable_arrayLikeToArray(o, minLen); }
function useTableDraggable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Handles the event of drag-and-drop sorting
 * 
 * @usage:

const App = () => {

    const rowDraggable = true;
    const data = [{a: 1}, {b: 2}]
    const rootRef = useRef<any>(null);

    const {
        handleDragStart,
        handleDragEnd,
        handledragOver,
        handleTbodyEnter
    } = useTableDraggable({
        enabled: rowDraggable && spyElement,
        data: data,
        spyElement: spyElement
        onRowDrag: (dragStart: any, dragEnd: any) => void(0)
    }, [data, rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );

};

 */



function useTableDraggable(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    onRowDrag = _ref.onRowDrag;
  // drag & drop
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    sortData = _useState2[0],
    setSortData = _useState2[1];

  // ================================================================
  // drag & drop
  // ================================================================
  var draggedObj = null;
  var overObj = null;
  var placeholderGenerator = function placeholderGenerator(trHeight) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;

    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-placeholder';
    newRow.dataset.placeholder = 'true';
    newRow.style.height = trHeight + 'px';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var lastRowGenerator = function lastRowGenerator(trHeight) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;

    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-obj row-obj-clonelast';
    newRow.dataset.order = allRows(spyElement).length.toString();
    newRow.style.height = trHeight + 'px';
    newRow.style.display = 'none';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);
    return newRow;
  };
  var removePlaceholder = function removePlaceholder() {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;

    // Delete row at the "index" of the table
    var placeholder = [].slice.call(tbodyRef.querySelectorAll("[data-placeholder]"));
    placeholder.forEach(function (node) {
      tbodyRef.removeChild(node);
    });
  };

  // Initialize drag & drop data
  // !!! Execute it only once
  var initDragDropData = function initDragDropData() {
    if (spyElement === null) return;
    if (typeof spyElement.dataset.dragdropDataInit !== 'undefined') return;
    spyElement.dataset.dragdropDataInit = 1;
    var _allRows = allRows(spyElement);

    // sort list data
    var listIndexes = _allRows.map(function (node, i) {
      return i;
    });
    setSortData(listIndexes);

    //last placeholder
    insertAfter(lastRowGenerator(_allRows.at(-1).clientHeight), _allRows.at(-1));
  };
  var handleTbodyEnter = function handleTbodyEnter(e) {
    var _table = e.currentTarget.closest('table');
    if (_table === null) return;
    _table.querySelector('tbody').classList.add('drag-trigger-mousedown');
  };
  var handleTbodyLeave = function handleTbodyLeave(e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    tbodyRef === null || tbodyRef === void 0 ? void 0 : tbodyRef.classList.remove('drag-trigger-mousedown');
  };

  // events fired on the drop targets
  var handledragOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    e.preventDefault();
    if (draggedObj === null) return;
    draggedObj.style.display = 'none';
    if (e.target.classList.contains('row-placeholder')) return;
    var itemsWrapper = e.target.parentNode;
    if (itemsWrapper.classList.contains('row-obj')) {
      overObj = itemsWrapper;
      removePlaceholder();
      if (Number(overObj.dataset.order) === allRows(spyElement).length - 1) {
        tbodyRef.insertBefore(placeholderGenerator(allRows(spyElement).at(-2).clientHeight), overObj);
      } else {
        tbodyRef.insertBefore(placeholderGenerator(overObj.clientHeight), overObj);
      }
    }
  }, [sortData]);
  var handleDragStart = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    draggedObj = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedObj);
    draggedObj.classList.add('dragging');
    allRows(spyElement).at(-1).style.setProperty('display', 'table-row', "important");

    // callback
    var dragStart = function dragStart(callback) {
      callback.call(null, draggedObj, sortData, sortDataByIndex(sortData, data));
    };
    onRowDrag === null || onRowDrag === void 0 ? void 0 : onRowDrag(dragStart, null);
  }, [handledragOver]);
  var handleDragEnd = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    draggedObj.style.display = 'table-row';
    removePlaceholder();
    draggedObj.classList.remove('dragging');
    tbodyRef === null || tbodyRef === void 0 ? void 0 : tbodyRef.classList.remove('drag-trigger-mousedown');
    if (overObj === null) return;

    // update state
    var curData = [];
    curData = JSON.parse(JSON.stringify(sortData));
    var from = Number(draggedObj.dataset.order);
    var to = Number(overObj.dataset.order);
    if (from < to) to--;

    //sort data
    var newData = [];

    // console.log('--> data1:', curData);

    curData.splice(to, 0, curData.splice(from, 1)[0]);
    for (var i = 0; i < curData.length; i++) {
      for (var j = 0; j < curData.length; j++) {
        if (curData[i] === curData[j]) {
          newData.push(curData[j]);
        }
      }
    }

    // console.log("--> data2: ", newData);
    setSortData(newData);

    // reset data-id in order to sort data
    newData.forEach(function (curId, order) {
      var _el = spyElement.querySelector('table').querySelector("tbody [data-key=\"row-".concat(curId, "\"]"));
      if (_el !== null) _el.dataset.order = order;
    });

    // sort elements
    var categoryItemsArray = allRows(spyElement);
    var sorter = function sorter(a, b) {
      return a.dataset.order.localeCompare(b.dataset.order); // sorts based on alphabetical order
    };

    var sorted = categoryItemsArray.sort(sorter);
    sorted.forEach(function (e) {
      return spyElement.querySelector('table').querySelector('tbody').appendChild(e);
    });

    // callback
    var dragEnd = function dragEnd(callback) {
      callback.call(null, draggedObj, newData, sortDataByIndex(newData, data));
    };
    onRowDrag === null || onRowDrag === void 0 ? void 0 : onRowDrag(null, dragEnd);
  }, [sortData]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      if (Array.isArray(data)) {
        data.forEach(function (item, i) {
          item.order = i;
        });

        // Initialize custom props of table elements
        initOrderProps(spyElement);
        initRowColProps(spyElement);

        // Initialize drag & drop data
        initDragDropData();
      }
    }
  }, [data, enabled, spyElement].concat(useTableDraggable_toConsumableArray(deps)));
  return {
    handleDragStart: handleDragStart,
    handleDragEnd: handleDragEnd,
    handledragOver: handledragOver,
    handleTbodyEnter: handleTbodyEnter,
    handleTbodyLeave: handleTbodyLeave
  };
}
/* harmony default export */ const hooks_useTableDraggable = (useTableDraggable);
;// CONCATENATED MODULE: ./src/Table.tsx
var _excluded = ["children", "wrapperClassName", "tableClassName", "bordered", "colGroup", "cellAutoWidth", "colSortable", "onColSort", "rowDraggable", "onRowDrag", "responsive", "enhancedResponsive", "enhancedResponsiveWithScrollBar", "data", "filterFields", "filterControlClassName", "filterControlPlaceholder", "filterLabel", "onChangeFilter", "dataSelected", "rowSelectable", "onChangeRowSelect", "keyboardFocusable", "onCellKeyPressed"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Table_slicedToArray(arr, i) { return Table_arrayWithHoles(arr) || Table_iterableToArrayLimit(arr, i) || Table_unsupportedIterableToArray(arr, i) || Table_nonIterableRest(); }
function Table_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Table_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Table_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Table_arrayLikeToArray(o, minLen); }
function Table_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Table_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Table_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Table = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    wrapperClassName = _ref.wrapperClassName,
    tableClassName = _ref.tableClassName,
    bordered = _ref.bordered,
    colGroup = _ref.colGroup,
    cellAutoWidth = _ref.cellAutoWidth,
    colSortable = _ref.colSortable,
    onColSort = _ref.onColSort,
    rowDraggable = _ref.rowDraggable,
    onRowDrag = _ref.onRowDrag,
    responsive = _ref.responsive,
    enhancedResponsive = _ref.enhancedResponsive,
    enhancedResponsiveWithScrollBar = _ref.enhancedResponsiveWithScrollBar,
    data = _ref.data,
    filterFields = _ref.filterFields,
    filterControlClassName = _ref.filterControlClassName,
    filterControlPlaceholder = _ref.filterControlPlaceholder,
    filterLabel = _ref.filterLabel,
    onChangeFilter = _ref.onChangeFilter,
    dataSelected = _ref.dataSelected,
    rowSelectable = _ref.rowSelectable,
    onChangeRowSelect = _ref.onChangeRowSelect,
    keyboardFocusable = _ref.keyboardFocusable,
    onCellKeyPressed = _ref.onCellKeyPressed,
    attributes = _objectWithoutProperties(_ref, _excluded);
  var uniqueID = useComId_default()();
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // context
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState2 = Table_slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1];

  // selection
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Set()),
    _useState4 = Table_slicedToArray(_useState3, 2),
    selectedItems = _useState4[0],
    setSelectedItems = _useState4[1];

  // effective element movement on keystroke
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState6 = Table_slicedToArray(_useState5, 2),
    rootDataInfo = _useState6[0],
    setRootDataInfo = _useState6[1];
  var refNode = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState8 = Table_slicedToArray(_useState7, 2),
    focusableCellId = _useState8[0],
    setFocusableCellId = _useState8[1];

  // responsive
  var responsiveClasses = typeof responsive === 'undefined' || responsive === true ? 'table-responsive' : '';
  var enhancedResponsiveClasses = '';
  if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
  if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';

  //Set the class names of different styles
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';

  // responsive table initialization
  hooks_useTableResponsive({
    enabled: enhancedResponsiveWithScrollBar && rootRef.current,
    spyElement: rootRef.current
  }, [rootRef]);

  // initialize drag & drop data
  var _useTableDraggable = hooks_useTableDraggable({
      enabled: rowDraggable && rootRef.current,
      data: data,
      spyElement: rootRef.current,
      onRowDrag: onRowDrag
    }, [data, rootRef]),
    handleDragStart = _useTableDraggable.handleDragStart,
    handleDragEnd = _useTableDraggable.handleDragEnd,
    handledragOver = _useTableDraggable.handledragOver,
    handleTbodyEnter = _useTableDraggable.handleTbodyEnter;

  // initialize context
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setInstance(data);
  }, [data]);

  // The items are selected by default
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (Array.isArray(data) && Array.isArray(dataSelected) && dataSelected.length > 0) {
      var newSelectedItems = new Set(selectedItems);
      dataSelected.forEach(function (s) {
        newSelectedItems.add(String(s));
      });
      setSelectedItems(newSelectedItems);
    }
  }, [data, dataSelected]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableProvider, {
    value: {
      originData: data,
      rootRef: rootRef,
      // sort
      colSortable: colSortable,
      onColSort: onColSort,
      // drag & drop
      rowDraggable: rowDraggable,
      handleDragStart: handleDragStart,
      handleDragEnd: handleDragEnd,
      handledragOver: handledragOver,
      handleTbodyEnter: handleTbodyEnter,
      // filter
      filterFields: filterFields,
      instance: instance,
      setInstance: setInstance,
      onChangeFilter: onChangeFilter,
      // selection
      dataSelected: dataSelected,
      rowSelectable: rowSelectable,
      selectedItems: selectedItems,
      setSelectedItems: setSelectedItems,
      onChangeRowSelect: onChangeRowSelect,
      // key press
      keyboardFocusable: keyboardFocusable,
      rootDataInfo: rootDataInfo,
      setRootDataInfo: setRootDataInfo,
      refNode: refNode,
      focusableCellId: focusableCellId,
      setFocusableCellId: setFocusableCellId,
      onCellKeyPressed: onCellKeyPressed
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({}, attributes, {
    id: uniqueID,
    ref: function ref(node) {
      rootRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    className: "syntable__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses, " ").concat(enhancedResponsiveClasses, " ").concat(rowSelectable ? 'has-checkbox' : '', " ").concat(rowDraggable ? 'allow-dragdrop' : '', " ").concat(colSortable ? 'allow-sort' : '')
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: "".concat(tableClassName || tableClassName === '' ? tableClassName : "table", " ").concat(tableClasses, " ").concat(typeof cellAutoWidth === 'undefined' || cellAutoWidth === false ? '' : 'cell-autowidth')
  }, children))));
});
/* harmony default export */ const src_Table = (Table);
;// CONCATENATED MODULE: ./src/TableBody.tsx
var TableBody_excluded = ["children", "className"];
function TableBody_extends() { TableBody_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableBody_extends.apply(this, arguments); }
function TableBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var TableBody = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableBody_objectWithoutProperties(_ref, TableBody_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    rowDraggable = _useContext.rowDraggable,
    handledragOver = _useContext.handledragOver;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", TableBody_extends({}, attributes, {
    ref: externalRef,
    onDragOver: rowDraggable ? handledragOver : function () {
      return void 0;
    },
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableBody = (TableBody);
;// CONCATENATED MODULE: ./src/table-utils/hooks/useTableKeyPress.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function useTableKeyPress_toConsumableArray(arr) { return useTableKeyPress_arrayWithoutHoles(arr) || useTableKeyPress_iterableToArray(arr) || useTableKeyPress_unsupportedIterableToArray(arr) || useTableKeyPress_nonIterableSpread(); }
function useTableKeyPress_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableKeyPress_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableKeyPress_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableKeyPress_arrayLikeToArray(o, minLen); }
function useTableKeyPress_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableKeyPress_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableKeyPress_arrayLikeToArray(arr); }
function useTableKeyPress_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Listens for changes in the pressed state of a given key
 * 
 * @usage:

const App = () => {

    const keyboardFocusable = true;
    const rootRef = useRef<any>(null);
    
    // effective element movement on keystroke
    const [rootDataInfo, setRootDataInfo] = useState<null | {totalRow: number}>(null);
    const refNode = useRef(new Map<string, HTMLTableElement>());
    const [focusableCellId, setFocusableCellId] = useState<string>('');

    const { handleKeyPressed } = useTableKeyPress({
        enabled: keyboardFocusable,
        data: [{a: 1, b: 2, c: 3}],
        spyElement: rootRef.current,
        rootDataInfo,
        setRootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        onCellKeyPressed
    }, [rootRef]);
    

    return (
        <div 
            ref={rootRef} 
            tabIndex={-1}
            onKeyDown={handleKeyPressed}  // require "tabIndex" attribute
        >Test</div>
    );
};

 */


var useTableKeyPress = function useTableKeyPress(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    rootDataInfo = _ref.rootDataInfo,
    setRootDataInfo = _ref.setRootDataInfo,
    refNode = _ref.refNode,
    focusableCellId = _ref.focusableCellId,
    setFocusableCellId = _ref.setFocusableCellId,
    onCellKeyPressed = _ref.onCellKeyPressed,
    onKeyDown = _ref.onKeyDown;
  var handleKeyPressed = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var key, oldCellSignal, _row, _col, move;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!Array.isArray(data) || rootDataInfo === null || spyElement === null || typeof enabled === 'undefined' || enabled === false)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            key = event.code;
            oldCellSignal = focusableCellId === null || focusableCellId === void 0 ? void 0 : focusableCellId.replace('cell-', '').split('-');
            _row = Number(oldCellSignal[0]);
            _col = Number(oldCellSignal[1]);
            move = function move(key) {
              var _spyElement$querySele;
              switch (key) {
                case 'ArrowLeft':
                  _col = _col - 1 < 0 ? 0 : _col - 1;
                  break;
                case 'ArrowRight':
                  _col = _col + 1 > data.length - 1 ? data.length - 1 : _col + 1;
                  break;
                case 'ArrowUp':
                  _row = _row - 1 < 0 ? 0 : _row - 1;
                  break;
                case 'ArrowDown':
                  _row = _row + 1 > rootDataInfo.totalRow - 1 ? rootDataInfo.totalRow - 1 : _row + 1;
                  break;
              }
              var nextCellSignal = cellMark(_row, _col);

              // focus current cell
              removeCellFocusClassName(spyElement);
              (_spyElement$querySele = spyElement.querySelector(".".concat(nextCellSignal))) === null || _spyElement$querySele === void 0 ? void 0 : _spyElement$querySele.classList.add('cell-focus');

              //
              setFocusableCellId(nextCellSignal);

              // callback
              onCellKeyPressed === null || onCellKeyPressed === void 0 ? void 0 : onCellKeyPressed(nextCellSignal, refNode.current.get(nextCellSignal), event);
              onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
            };
            if (key === 'ArrowLeft') {
              move('ArrowLeft');
            }
            if (key === 'ArrowRight') {
              move('ArrowRight');
            }
            if (key === 'ArrowUp') {
              move('ArrowUp');
            }
            if (key === 'ArrowDown') {
              move('ArrowDown');
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [focusableCellId]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      // Initialize custom props of table elements
      initOrderProps(spyElement);
      initRowColProps(spyElement);

      // Update cell ids
      if (Array.isArray(data)) {
        setRootDataInfo({
          totalRow: data.length
        });
      }
    }
  }, [enabled, spyElement].concat(useTableKeyPress_toConsumableArray(deps)));
  return {
    handleKeyPressed: handleKeyPressed
  };
};
/* harmony default export */ const hooks_useTableKeyPress = (useTableKeyPress);
;// CONCATENATED MODULE: ./src/TableCell.tsx
var TableCell_excluded = ["children", "active", "activeClassName", "className", "colSpan", "scope", "onClick", "onKeyDown"];
function TableCell_extends() { TableCell_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCell_extends.apply(this, arguments); }
function TableCell_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCell_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCell_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var TableCell = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    active = _ref.active,
    activeClassName = _ref.activeClassName,
    className = _ref.className,
    colSpan = _ref.colSpan,
    scope = _ref.scope,
    _onClick = _ref.onClick,
    onKeyDown = _ref.onKeyDown,
    attributes = TableCell_objectWithoutProperties(_ref, TableCell_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rootRef = _useContext.rootRef,
    rootDataInfo = _useContext.rootDataInfo,
    setRootDataInfo = _useContext.setRootDataInfo,
    refNode = _useContext.refNode,
    focusableCellId = _useContext.focusableCellId,
    setFocusableCellId = _useContext.setFocusableCellId,
    keyboardFocusable = _useContext.keyboardFocusable,
    onCellKeyPressed = _useContext.onCellKeyPressed;
  var CellComponent = scope ? 'th' : 'td';

  // key press initialization
  var _useTableKeyPress = hooks_useTableKeyPress({
      enabled: keyboardFocusable,
      data: originData,
      spyElement: rootRef.current,
      rootDataInfo: rootDataInfo,
      setRootDataInfo: setRootDataInfo,
      refNode: refNode,
      focusableCellId: focusableCellId,
      setFocusableCellId: setFocusableCellId,
      onCellKeyPressed: onCellKeyPressed,
      onKeyDown: onKeyDown
    }, [rootRef]),
    handleKeyPressed = _useTableKeyPress.handleKeyPressed;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(CellComponent, TableCell_extends({}, attributes, {
    ref: function ref(node) {
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
      if (node) {
        var _row = node.dataset.tableRow;
        var _col = node.dataset.tableCol;
        refNode.current.set(cellMark(_row, _col), node);
      }
    },
    colSpan: colSpan,
    tabIndex: -1,
    onKeyDown: handleKeyPressed // require "tabIndex" attribute
    ,
    onClick: function onClick(e) {
      var _el = e.currentTarget;

      // key press initialization
      if (keyboardFocusable) {
        var _row = Number(_el.dataset.tableRow);
        var _col = Number(_el.dataset.tableCol);
        removeCellFocusClassName(rootRef.current);
        setFocusableCellId(cellMark(_row, _col));
        _el.classList.add('cell-focus');
      }

      // callback
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
    },
    className: "".concat(className || '', " ").concat(active ? activeClassName || 'active' : '')
  }), children));
});
/* harmony default export */ const src_TableCell = (TableCell);
;// CONCATENATED MODULE: ./src/TableHead.tsx
var TableHead_excluded = ["children", "className"];
function TableHead_extends() { TableHead_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableHead_extends.apply(this, arguments); }
function TableHead_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableHead_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableHead_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableHead = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableHead_objectWithoutProperties(_ref, TableHead_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", TableHead_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableHead = (TableHead);
;// CONCATENATED MODULE: ./src/TableFoot.tsx
var TableFoot_excluded = ["children", "className"];
function TableFoot_extends() { TableFoot_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableFoot_extends.apply(this, arguments); }
function TableFoot_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableFoot_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableFoot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableFoot = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableFoot_objectWithoutProperties(_ref, TableFoot_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tfoot", TableFoot_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableFoot = (TableFoot);
;// CONCATENATED MODULE: ./src/TableRow.tsx
var TableRow_excluded = ["children", "active", "activeClassName", "className", "itemData"];
function TableRow_extends() { TableRow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableRow_extends.apply(this, arguments); }
function TableRow_typeof(obj) { "@babel/helpers - typeof"; return TableRow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TableRow_typeof(obj); }
function TableRow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableRow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableRow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var TableRow = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    active = _ref.active,
    activeClassName = _ref.activeClassName,
    className = _ref.className,
    itemData = _ref.itemData,
    attributes = TableRow_objectWithoutProperties(_ref, TableRow_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    filterFields = _useContext.filterFields,
    selectedItems = _useContext.selectedItems,
    instance = _useContext.instance,
    rowDraggable = _useContext.rowDraggable,
    handleDragStart = _useContext.handleDragStart,
    handleDragEnd = _useContext.handleDragEnd;

  // ================================================================
  // filter
  // ================================================================
  var filteredData = instance || [];
  var filterFieldsData = filterFields || [];

  // ================================================================
  // selection
  // ================================================================
  var _res = convertMapToArr(selectedItems);
  var filteredSelectedItems = _res.map(function (v) {
    return Number(v);
  }).map(function (rowNum) {
    if (JSON.stringify(itemData) === JSON.stringify(originData[rowNum])) {
      return originData[rowNum];
    }
  }).filter(Boolean);
  var selectedClassName = activeClassName || 'active';
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", TableRow_extends({}, attributes, {
    ref: externalRef,
    draggable: rowDraggable,
    onDragStart: rowDraggable ? handleDragStart : function () {
      return void 0;
    },
    onDragEnd: rowDraggable ? handleDragEnd : function () {
      return void 0;
    },
    "data-row-data": "".concat(itemData && TableRow_typeof(itemData) === 'object' ? JSON.stringify(itemData) : itemData),
    className: "row-obj ".concat(className || '', " ").concat(active ? selectedClassName : '', " ").concat(itemData && originData ? filteredData.every(function (item) {
      return filterFieldsData.some(function (s) {
        var _item$s, _itemData$s;
        return !((_item$s = item[s]) !== null && _item$s !== void 0 && _item$s.toLowerCase().includes((_itemData$s = itemData[s]) === null || _itemData$s === void 0 ? void 0 : _itemData$s.toLowerCase()));
      });
    }) ? 'd-none' : '' : '', " ").concat(itemData && originData ? filteredSelectedItems.some(function (item) {
      return JSON.stringify(itemData) === JSON.stringify(item);
    }) ? selectedClassName : '' : '')
  }), children));
});
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableColgroup.tsx
var TableColgroup_excluded = ["className", "length"];
function TableColgroup_extends() { TableColgroup_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableColgroup_extends.apply(this, arguments); }
function TableColgroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableColgroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableColgroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableColgroup = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var className = _ref.className,
    length = _ref.length,
    attributes = TableColgroup_objectWithoutProperties(_ref, TableColgroup_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("colgroup", TableColgroup_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), Array.from({
    length: length || 0
  }, function (v, k) {
    return k; // Return k(ey) as value for this index
  }).map(function (el, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", {
      key: i
    });
  })));
});
/* harmony default export */ const src_TableColgroup = (TableColgroup);
;// CONCATENATED MODULE: ./src/TableCaption.tsx
var TableCaption_excluded = ["children", "captionSide", "className"];
function TableCaption_extends() { TableCaption_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCaption_extends.apply(this, arguments); }
function TableCaption_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCaption_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCaption_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCaption = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    captionSide = _ref.captionSide,
    className = _ref.className,
    attributes = TableCaption_objectWithoutProperties(_ref, TableCaption_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("caption", TableCaption_extends({}, attributes, {
    ref: externalRef,
    className: "syntable__caption ".concat(className || '', " syntable__caption--").concat(captionSide || 'top')
  }), children));
});
/* harmony default export */ const src_TableCaption = (TableCaption);
;// CONCATENATED MODULE: ./src/table-utils/TableFilter.tsx


var TableFilter = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var className = props.className,
    placeholder = props.placeholder,
    label = props.label,
    _onChange = props.onChange;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    filterFields = _useContext.filterFields,
    setInstance = _useContext.setInstance,
    onChangeFilter = _useContext.onChangeFilter;
  var filterFieldsData = filterFields || [];
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "syntable__filter-container"
  }, label || null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "text",
    ref: externalRef,
    className: className || '',
    onChange: function onChange(e) {
      var filteredData = originData === null || originData === void 0 ? void 0 : originData.filter(function (item) {
        return filterFieldsData.some(function (s) {
          var _item$s;
          return (_item$s = item[s]) === null || _item$s === void 0 ? void 0 : _item$s.toLowerCase().includes(e.target.value.toLowerCase());
        });
      });
      if (e.target.value.trim() === '') {
        setInstance(originData);
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter(originData);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e, originData);
      } else {
        setInstance(filteredData);
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter(filteredData);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e, filteredData);
      }
    },
    placeholder: placeholder || ''
  }));
});
/* harmony default export */ const table_utils_TableFilter = (TableFilter);
;// CONCATENATED MODULE: ./src/table-utils/ToggleSelection.tsx
var ToggleSelection_excluded = ["contentRef", "row", "useRadio", "className", "indeterminate", "disabled", "name", "value", "onChange", "checked"];
function ToggleSelection_extends() { ToggleSelection_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ToggleSelection_extends.apply(this, arguments); }
function ToggleSelection_slicedToArray(arr, i) { return ToggleSelection_arrayWithHoles(arr) || ToggleSelection_iterableToArrayLimit(arr, i) || ToggleSelection_unsupportedIterableToArray(arr, i) || ToggleSelection_nonIterableRest(); }
function ToggleSelection_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ToggleSelection_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ToggleSelection_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ToggleSelection_arrayLikeToArray(o, minLen); }
function ToggleSelection_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ToggleSelection_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ToggleSelection_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ToggleSelection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ToggleSelection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ToggleSelection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ToggleSelection = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
  var contentRef = props.contentRef,
    row = props.row,
    useRadio = props.useRadio,
    className = props.className,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    disabled = props.disabled,
    name = props.name,
    value = props.value,
    onChange = props.onChange,
    checked = props.checked,
    attributes = ToggleSelection_objectWithoutProperties(props, ToggleSelection_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rowSelectable = _useContext.rowSelectable,
    selectedItems = _useContext.selectedItems,
    setSelectedItems = _useContext.setSelectedItems,
    onChangeRowSelect = _useContext.onChangeRowSelect;
  var totalSize = originData.length;
  var defaultRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var resolvedRef = ref || defaultRef;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = ToggleSelection_slicedToArray(_useState, 2),
    allChecked = _useState2[0],
    setAllChecked = _useState2[1];

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      indeterminate: function indeterminate(value) {
        resolvedRef.current.indeterminate = value;
      },
      setSelectAll: function setSelectAll(value) {
        setAllChecked(value);
      },
      control: function control() {
        return resolvedRef.current;
      }
    };
  }, [contentRef, resolvedRef]);
  function selectTarget(rowIndex) {
    var _val = String(rowIndex);

    // filter
    // =================================================================
    var _selectedIndex = [];
    var filteredData = [];
    if (!isNaN(row) && Array.isArray(originData)) {
      // all
      if (row === -1) {
        var _target = Array.from({
          length: totalSize
        }, function (v, k) {
          return String(k);
        });
        if (selectedItems.size === 0 || selectedItems.size < totalSize) {
          _selectedIndex = convertMapToArr(checkedSpecItems(_target, true)).map(function (v) {
            return Number(v);
          });
          setAllChecked(true);
        } else {
          _selectedIndex = convertMapToArr(checkedSpecItems(_target, false)).map(function (v) {
            return Number(v);
          });
          setAllChecked(false);
        }
      } else {
        var _newSelectedItems = checkedOneItem(_val);
        var _res = convertMapToArr(_newSelectedItems);
        _selectedIndex = _res.map(function (v) {
          return Number(v);
        });
      }
      filteredData = originData.filter(function (v, i) {
        return _selectedIndex.includes(i);
      });
    }
    return filteredData;
  }
  function selectTargetExclusive(rowIndex) {
    var _val = String(rowIndex);

    // filter
    // =================================================================
    var filteredData = [];
    if (!isNaN(row) && Array.isArray(originData)) {
      var newSelectedItems = new Set(new Map());
      newSelectedItems.add(_val);
      setSelectedItems(newSelectedItems);
      filteredData = originData.filter(function (v, i) {
        return Number(_val) === i;
      });
    }
    return filteredData;
  }
  function checkedSpecItems(itemKey, check) {
    // first, make a copy of the original set rather than mutating the original
    var newSelectedItems = new Set(selectedItems);
    itemKey.forEach(function (s) {
      if (check) {
        newSelectedItems.add(s);
      } else {
        newSelectedItems["delete"](s);
      }
    });
    setSelectedItems(newSelectedItems);
    return newSelectedItems;
  }
  function checkedOneItem(itemKey) {
    // first, make a copy of the original set rather than mutating the original
    var newSelectedItems = new Set(selectedItems);
    if (!newSelectedItems.has(itemKey)) {
      newSelectedItems.add(itemKey);
    } else {
      newSelectedItems["delete"](itemKey);
    }
    setSelectedItems(newSelectedItems);
    return newSelectedItems;
  }
  function handleChange(event) {
    var _val = event.target.value;
    var filteredData = useRadio ? selectTargetExclusive(_val) : selectTarget(_val);
    onChange === null || onChange === void 0 ? void 0 : onChange(event, event.target.checked, filteredData);
    onChangeRowSelect === null || onChangeRowSelect === void 0 ? void 0 : onChangeRowSelect(filteredData);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, rowSelectable && row === -1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", ToggleSelection_extends({
    type: useRadio ? 'radio' : 'checkbox',
    ref: resolvedRef,
    className: className || '',
    name: name,
    value: "".concat(row),
    checked: allChecked,
    onChange: handleChange
  }, attributes)) : null, rowSelectable && row != -1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", ToggleSelection_extends({
    type: useRadio ? 'radio' : 'checkbox',
    ref: resolvedRef,
    className: className || '',
    name: name,
    value: "".concat(row),
    "data-row": row,
    "data-value": originData[row] ? JSON.stringify(originData[row]) : null,
    checked: selectedItems.has("".concat(row)),
    onChange: handleChange
  }, attributes)) : null);
});
/* harmony default export */ const table_utils_ToggleSelection = (ToggleSelection);
;// CONCATENATED MODULE: ./src/table-utils/DragHandleSprite.tsx


var DragHandleSprite = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var className = props.className,
    icon = props.icon;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    rowDraggable = _useContext.rowDraggable,
    handleTbodyEnter = _useContext.handleTbodyEnter;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, rowDraggable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: externalRef,
    className: className || 'drag-trigger',
    onMouseEnter: handleTbodyEnter
  }, icon || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
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
  })))) : null);
});
/* harmony default export */ const table_utils_DragHandleSprite = (DragHandleSprite);
;// CONCATENATED MODULE: ./src/table-utils/hooks/useTableSort.tsx
function useTableSort_toConsumableArray(arr) { return useTableSort_arrayWithoutHoles(arr) || useTableSort_iterableToArray(arr) || useTableSort_unsupportedIterableToArray(arr) || useTableSort_nonIterableSpread(); }
function useTableSort_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableSort_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableSort_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableSort_arrayLikeToArray(arr); }
function useTableSort_slicedToArray(arr, i) { return useTableSort_arrayWithHoles(arr) || useTableSort_iterableToArrayLimit(arr, i) || useTableSort_unsupportedIterableToArray(arr, i) || useTableSort_nonIterableRest(); }
function useTableSort_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableSort_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableSort_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableSort_arrayLikeToArray(o, minLen); }
function useTableSort_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useTableSort_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useTableSort_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Handles the event of sortable table
 * 
 * @usage:

const App = () => {

    const sortableTable = true;
    const rootRef = useRef<any>(null);

    useTableSort({
        enabled: sortableTable && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */


function useTableSort(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    fieldType = _ref.fieldType,
    onColSort = _ref.onColSort,
    onClick = _ref.onClick;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = useTableSort_slicedToArray(_useState, 2),
    inverse = _useState2[0],
    setInverse = _useState2[1];
  function handleSortList(e) {
    if (typeof enabled === 'undefined' || enabled === false) return;
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    var el = e.currentTarget.closest('[data-table-col]');
    if (el === null) return;
    var filterType = fieldType || 'text';
    var curIndex = el.dataset.tableCol;
    var targetComparator = [].slice.call(tbodyRef.querySelectorAll("[data-table-col=\"".concat(curIndex, "\"]")));

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
      allRows(spyElement).forEach(function (node) {
        node.classList.add('newsort');
      });
      setInverse(!inverse);
      return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
    };
    targetComparator.sort(sortBy);

    //console.log( 'targetComparator:', targetComparator );
    //console.log( 'inverse:', inverse );

    if (inverse) targetComparator.reverse();
    allRows(spyElement).forEach(function (node) {
      node.remove();
    });
    for (var i = 0; i < targetComparator.length; i++) {
      var curRow = targetComparator[i].parentNode;
      tbodyRef.appendChild(curRow);
    }

    // get latest order
    var sortData = [];
    allRows(spyElement).forEach(function (node) {
      sortData.push(Number(node.dataset.order));
    });

    // callback
    onColSort === null || onColSort === void 0 ? void 0 : onColSort(sortDataByIndex(sortData, data));
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      if (Array.isArray(data)) {
        data.forEach(function (item, i) {
          item.order = i;
        });

        // Initialize custom props of table elements
        initOrderProps(spyElement);
        initRowColProps(spyElement);
      }
    }
  }, [data, enabled, spyElement].concat(useTableSort_toConsumableArray(deps)));
  return {
    handleSortList: handleSortList
  };
}
/* harmony default export */ const hooks_useTableSort = (useTableSort);
;// CONCATENATED MODULE: ./src/table-utils/SortSprite.tsx



var SortSprite = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var fieldType = props.fieldType,
    className = props.className,
    icon = props.icon,
    onClick = props.onClick;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rootRef = _useContext.rootRef,
    colSortable = _useContext.colSortable,
    onColSort = _useContext.onColSort;

  // sortable table initialization
  var _useTableSort = hooks_useTableSort({
      enabled: colSortable && rootRef.current,
      data: originData,
      spyElement: rootRef.current,
      fieldType: fieldType,
      onColSort: onColSort,
      onClick: onClick
    }, [rootRef]),
    handleSortList = _useTableSort.handleSortList;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, colSortable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: className || 'sort-trigger',
    onClick: handleSortList
  }, icon || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
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
});
/* harmony default export */ const table_utils_SortSprite = (SortSprite);
;// CONCATENATED MODULE: ./src/index.tsx









// utils




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});