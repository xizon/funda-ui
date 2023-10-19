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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DynamicFields = function DynamicFields(props) {
  var wrapperClassName = props.wrapperClassName,
    label = props.label,
    data = props.data,
    maxFields = props.maxFields,
    iconAddBefore = props.iconAddBefore,
    iconAddAfter = props.iconAddAfter,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    doNotRemoveDom = props.doNotRemoveDom,
    id = props.id,
    confirmText = props.confirmText,
    innerAppendClassName = props.innerAppendClassName,
    innerAppendCellClassName = props.innerAppendCellClassName,
    innerAppendLastCellClassName = props.innerAppendLastCellClassName,
    innerAppendHideClassName = props.innerAppendHideClassName,
    innerAppendBodyClassName = props.innerAppendBodyClassName,
    innerAppendHeadData = props.innerAppendHeadData,
    innerAppendHeadRowClassName = props.innerAppendHeadRowClassName,
    innerAppendHeadCellClassName = props.innerAppendHeadCellClassName,
    innerAppendEmptyContent = props.innerAppendEmptyContent,
    onAdd = props.onAdd,
    onRemove = props.onRemove;
  var ITEM_LAST_CLASSNAME = innerAppendLastCellClassName || 'last';
  var ITEM_HIDE_CLASSNAME = innerAppendHideClassName || 'd-none';
  var PER_ROW_DOM_STRING = '.dynamic-fields__append .dynamic-fields__data__wrapper';
  var PER_INNER_BODY_DOM_STRING = '.dynamic-fields__append .dynamic-fields__inner__body';
  var DO_NOT_REMOVE_DOM = typeof doNotRemoveDom === 'undefined' ? false : true;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var addBtnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var emptyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tmpl = _useState4[0],
    setTmpl = _useState4[1];
  function updateLastItemCls(el, type) {
    if (typeof el === 'undefined') return;
    if (type === 'add') {
      var _el$parentElement;
      var perInnerBody = [].slice.call(rootRef.current.querySelectorAll(PER_INNER_BODY_DOM_STRING));
      perInnerBody.forEach(function (el, i) {
        var _el$firstChild;
        el.classList.remove(ITEM_LAST_CLASSNAME);
        (_el$firstChild = el.firstChild) === null || _el$firstChild === void 0 ? void 0 : _el$firstChild.classList.remove(ITEM_LAST_CLASSNAME);
      });
      el.classList.add(ITEM_LAST_CLASSNAME);
      (_el$parentElement = el.parentElement) === null || _el$parentElement === void 0 ? void 0 : _el$parentElement.classList.add(ITEM_LAST_CLASSNAME);
    } else {
      var _el$parentElement2;
      el.classList.remove(ITEM_LAST_CLASSNAME);
      (_el$parentElement2 = el.parentElement) === null || _el$parentElement2 === void 0 ? void 0 : _el$parentElement2.classList.remove(ITEM_LAST_CLASSNAME);
    }
  }
  function updateHeadCls(type) {
    var el = rootRef.current.querySelector('.dynamic-fields__inner__head');
    if (el === null) return;
    if (type === 'add') {
      el.classList.add(ITEM_HIDE_CLASSNAME);
    } else {
      el.classList.remove(ITEM_HIDE_CLASSNAME);
    }
  }
  function emptyContentEnabled(type) {
    if (innerAppendEmptyContent === '' || typeof innerAppendEmptyContent === 'undefined') return false;
    if (type === 'add') {
      emptyRef.current.classList.add(ITEM_HIDE_CLASSNAME);
    } else {
      emptyRef.current.classList.remove(ITEM_HIDE_CLASSNAME);
    }
    return true;
  }
  function checkMaxStatus() {
    //button status
    if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length + 1 >= parseFloat(maxFields)) {
      addBtnRef.current.style.setProperty('display', 'none', 'important');
    }
  }
  function handleClickAdd(event) {
    event.preventDefault();

    //button status
    checkMaxStatus();

    //
    setVal(function (prevState) {
      return [].concat(_toConsumableArray(prevState), _toConsumableArray(generateGroup(tmpl)));
    });

    //
    setTimeout(function () {
      var perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));

      // update index
      perRow.forEach(function (el, i) {
        el.dataset.index = i.toString();
      });

      // update last element
      if (perRow.length > 1) {
        updateLastItemCls(perRow[0], 'remove');
        updateLastItemCls(perRow[perRow.length - 1], 'add');
      }

      // update inner elements
      if (perRow.length > 0) {
        if (!emptyContentEnabled('add')) updateHeadCls('remove');
      }

      //
      onAdd === null || onAdd === void 0 ? void 0 : onAdd(perRow);
    }, 0);
  }
  function handleClickRemove(e) {
    e.preventDefault();
    var curKey = e.currentTarget.closest('.dynamic-fields__data__wrapper').dataset.key;
    if (confirm(confirmText || '')) {
      //button status
      if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length <= parseFloat(maxFields)) {
        addBtnRef.current.style.setProperty('display', 'inline', 'important');
      }
      var curItem = rootRef.current.querySelector(".dynamic-fields__append [data-key=\"".concat(curKey, "\"]"));
      var curIndex = curItem.dataset.index;

      // Do not delete the parent node `innerAppendBodyClassName`, otherwise an error may be reported when 
      // using routing: DOMException: Failed to execute 'removeChild' on 'Node'
      if (curItem !== null && !DO_NOT_REMOVE_DOM) {
        curItem.remove();
      }

      //
      setTimeout(function () {
        var perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));

        // update index
        perRow.forEach(function (el, i) {
          el.dataset.index = i.toString();
        });

        // update last element
        if (perRow.length === 1) {
          updateLastItemCls(perRow[0], 'add');
        } else {
          updateLastItemCls(perRow[perRow.length - 1], 'add');
        }

        // update inner elements
        if (perRow.length === 0) {
          if (!emptyContentEnabled('remove')) updateHeadCls('add');
        }

        //
        onRemove === null || onRemove === void 0 ? void 0 : onRemove(perRow, curKey, curIndex);
      }, 0);
    }
  }
  function generateGroup(inputData) {
    var isNew = !Array.isArray(inputData);
    var _data = Array.isArray(inputData) ? inputData : [inputData];
    return _data.map(function (item, i) {
      var removeBtyn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        tabIndex: -1,
        className: "dynamic-fields__removebtn align-middle",
        onClick: handleClickRemove
      }, iconRemove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconRemove) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        width: "20px",
        height: "20px",
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
        fill: "#000"
      })))));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        key: 'tmpl-' + i
      }, isNew ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: 'tmpl-' + i,
        className: "dynamic-fields__inner__body ".concat(innerAppendBodyClassName || '', " ").concat(i === _data.length - 1 ? ITEM_LAST_CLASSNAME : ''),
        "data-body-index": i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "dynamic-fields__data__wrapper position-relative ".concat(innerAppendCellClassName || '', " ").concat(i === _data.length - 1 ? ITEM_LAST_CLASSNAME : ''),
        "data-key": i,
        "data-index": i
      }, item, removeBtyn))));
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setVal(data ? data.init : []);
    setTmpl(data ? data.tmpl : null);
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: fieldsRef,
    className: "dynamic-fields-container",
    "data-max-fields": maxFields || 10,
    id: idRes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dynamic-fields__append ".concat(innerAppendClassName || '')
  }, innerAppendHeadData && Array.isArray(innerAppendHeadData) && val.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dynamic-fields__inner__head ".concat(innerAppendHeadRowClassName || '')
  }, innerAppendHeadData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: 'inner-header-row' + i,
      className: "".concat(innerAppendHeadCellClassName || '', " ").concat(i === innerAppendHeadData.length - 1 ? ITEM_LAST_CLASSNAME : '')
    }, item);
  }))) : null, generateGroup(val)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: emptyRef,
    className: "".concat(ITEM_HIDE_CLASSNAME)
  }, innerAppendEmptyContent || null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dynamic-fields__btns"
  }, iconAddBefore ? iconAddBefore : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    ref: addBtnRef,
    href: "#",
    tabIndex: -1,
    className: "dynamic-fields__addbtn align-middle",
    onClick: handleClickAdd
  }, iconAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, iconAdd) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z",
    fill: "#000"
  })))), iconAddAfter ? iconAddAfter : null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFields);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});