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
  "Table": () => (/* reexport */ src_Table),
  "TableBody": () => (/* reexport */ src_TableBody),
  "TableCaption": () => (/* reexport */ src_TableCaption),
  "TableCell": () => (/* reexport */ src_TableCell),
  "TableColgroup": () => (/* reexport */ src_TableColgroup),
  "TableFoot": () => (/* reexport */ src_TableFoot),
  "TableHead": () => (/* reexport */ src_TableHead),
  "TableRow": () => (/* reexport */ src_TableRow)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/TableContext.tsx

var TableContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(undefined);
var TableProvider = function TableProvider(props) {
  var children = props.children,
    value = props.value;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableContext.Provider, {
    value: value
  }, children);
};

;// CONCATENATED MODULE: ./src/table-utils/TableFilter.tsx


var TableFilter = function TableFilter(props) {
  var className = props.className,
    placeholder = props.placeholder,
    label = props.label,
    _onChange = props.onChange;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    filterFields = _useContext.filterFields,
    setInstance = _useContext.setInstance;
  var filterFieldsData = filterFields || [];
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, label || null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "text",
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
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(originData);
      } else {
        setInstance(filteredData);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(filteredData);
      }
    },
    placeholder: placeholder || ''
  }));
};
/* harmony default export */ const table_utils_TableFilter = (TableFilter);
;// CONCATENATED MODULE: ./src/Table.tsx
var _excluded = ["children", "wrapperClassName", "tableClassName", "responsive", "bordered", "colGroup", "cellAutoWidth", "data", "filterFields", "filterRow", "filterControlClassName", "filterControlPlaceholder", "filterLabel", "onChangeFilter"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Table = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    wrapperClassName = _ref.wrapperClassName,
    tableClassName = _ref.tableClassName,
    responsive = _ref.responsive,
    bordered = _ref.bordered,
    colGroup = _ref.colGroup,
    cellAutoWidth = _ref.cellAutoWidth,
    data = _ref.data,
    filterFields = _ref.filterFields,
    filterRow = _ref.filterRow,
    filterControlClassName = _ref.filterControlClassName,
    filterControlPlaceholder = _ref.filterControlPlaceholder,
    filterLabel = _ref.filterLabel,
    onChangeFilter = _ref.onChangeFilter,
    attributes = _objectWithoutProperties(_ref, _excluded);
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // context
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1];

  //
  var responsiveClasses = typeof responsive === 'undefined' || responsive === true ? 'table-responsive' : '';

  //Set the class names of different styles
  //
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setInstance(data);
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableProvider, {
    value: {
      originData: data,
      filterFields: filterFields,
      instance: instance,
      setInstance: setInstance
    }
  }, filterRow ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(table_utils_TableFilter, {
    className: filterControlClassName || '',
    placeholder: filterControlPlaceholder || '',
    onChange: onChangeFilter,
    label: filterLabel
  }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({}, attributes, {
    id: uniqueID,
    ref: function ref(node) {
      rootRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    className: "syntable__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative", " ").concat(responsiveClasses)
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
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", TableBody_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableBody = (TableBody);
;// CONCATENATED MODULE: ./src/TableCell.tsx
var TableCell_excluded = ["children", "active", "activeClassName", "className", "colSpan", "scope"];
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
    attributes = TableCell_objectWithoutProperties(_ref, TableCell_excluded);
  var CellComponent = scope ? 'th' : 'td';
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(CellComponent, TableCell_extends({}, attributes, {
    ref: externalRef,
    colSpan: colSpan,
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
    instance = _useContext.instance;
  var filteredData = instance || [];
  var filterFieldsData = filterFields || [];
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", TableRow_extends({}, attributes, {
    ref: externalRef,
    className: "\n                    ".concat(className || '', " \n                    ").concat(active ? activeClassName || 'active' : '', " \n                    ").concat(itemData && originData ? filteredData.every(function (item) {
      return filterFieldsData.some(function (s) {
        var _item$s, _itemData$s;
        return !((_item$s = item[s]) !== null && _item$s !== void 0 && _item$s.toLowerCase().includes((_itemData$s = itemData[s]) === null || _itemData$s === void 0 ? void 0 : _itemData$s.toLowerCase()));
      });
    }) ? 'd-none' : '' : '', "\n                ")
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
var TableCaption_excluded = ["children", "className"];
function TableCaption_extends() { TableCaption_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCaption_extends.apply(this, arguments); }
function TableCaption_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCaption_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCaption_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCaption = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableCaption_objectWithoutProperties(_ref, TableCaption_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("caption", TableCaption_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableCaption = (TableCaption);
;// CONCATENATED MODULE: ./src/index.tsx








})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});