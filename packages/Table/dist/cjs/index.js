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
  var cols = props.cols,
    width = props.width,
    className = props.className,
    _props$dataUse = props.dataUse,
    dataUse = _props$dataUse === void 0 ? '' : _props$dataUse,
    style = props.style,
    columnHeader = props.columnHeader,
    index = props.index,
    content = props.content,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick;
  function handleTbodyLeave(e) {
    var _e$target$closest;
    (_e$target$closest = e.target.closest('table')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.querySelector('tbody').classList.remove('drag-trigger-mousedown');
    evCellMouseEnter === null || evCellMouseEnter === void 0 ? void 0 : evCellMouseEnter(e);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index,
    "data-use": dataUse,
    onMouseEnter: handleTbodyLeave,
    onMouseLeave: function onMouseLeave(e) {
      evCellMouseLeave === null || evCellMouseLeave === void 0 ? void 0 : evCellMouseLeave(e);
    },
    onClick: function onClick(e) {
      evCellClick === null || evCellClick === void 0 ? void 0 : evCellClick(e);
    },
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || ''
  }, content));
};
/* harmony default export */ const src_TableField = (TableField);
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
var getAllCheckboxInput = function getAllCheckboxInput(el) {
  if (el === null) return [];
  var _checkboxes = (0,dom.getChildren)(el.closest('table').querySelector('tbody'), '[type="checkbox"]');
  return [].slice.call(_checkboxes);
};
;// CONCATENATED MODULE: ./src/TableFieldRow.tsx
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


// HAS CHECKBOX




/* Table Field Row
-------------------------------------------------*/

var TableFieldRow = function TableFieldRow(props) {
  var _latestCheckedData$fi;
  var tableRootRef = props.tableRootRef,
    tableCheckRef = props.tableCheckRef,
    _props$rowActiveClass = props.rowActiveClassName,
    rowActiveClassName = _props$rowActiveClass === void 0 ? 'active' : _props$rowActiveClass,
    fieldsChecked = props.fieldsChecked,
    fieldsCheckedAct = props.fieldsCheckedAct,
    updateFirstInitCheckboxesClassName = props.updateFirstInitCheckboxesClassName,
    draggable = props.draggable,
    useRadio = props.useRadio,
    cols = props.cols,
    width = props.width,
    className = props.className,
    _props$dataUse = props.dataUse,
    dataUse = _props$dataUse === void 0 ? '' : _props$dataUse,
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
    onCheck = props.onCheck,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick;
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var checkboxRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    firstInitCheckboxes = _useState2[0],
    setFirstInitCheckboxes = _useState2[1];

  //
  var _ref = fieldsCheckedAct || [null, null],
    _ref2 = _slicedToArray(_ref, 2),
    fieldsCheckedUpdateDataPrint = _ref2[0],
    setFieldsCheckedUpdateDataPrint = _ref2[1];
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(tableCheckRef, function () {
    return {
      check: function check(data, cb) {
        var _checkedData = getCheckedData;
        var _res = [];

        // STEP 1:
        // Update checked data
        //-----------
        data.forEach(function (v, i) {
          var _curKey = "row-".concat(v.index);
          if (v.value === true) {
            setCheckboxCheckedData(_checkedData, _curKey, true);
          } else {
            setCheckboxCheckedData(_checkedData, _curKey, false);
          }
        });
        updategetCheckedData(_checkedData);

        // STEP 2:
        // get per checkbox value
        //----------- 
        if (tableRootRef.current !== null) {
          _checkedData.forEach(function (item) {
            if (item.checked === true) {
              var _index = item.key.replace('row-', '');
              var curCheckbox = tableRootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(_index, "\"]"));
              _res.push(formatRowControlVal(curCheckbox, checkboxNamePrefix));
            } else {
              _res = removeItemOnce(_res, item.key);
            }
          });
        }

        // STEP 3:
        // Update checked print
        //-----------
        updateCheckedPrint(_res);

        // STEP 4:
        // Update root checkbox
        //-----------
        var _headRow = tableRootRef.current.querySelector('table').querySelectorAll('thead th')[0];
        var allChecked = _checkedData.every(function (item) {
          return item.checked === true;
        });
        if (allChecked) {
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
        if (typeof _headRow !== 'undefined') {
          var _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
          var hasAnyChecked = _checkedData.some(function (item) {
            return item.checked === true;
          });
          if (hasAnyChecked && !allChecked) {
            _rootCheckbox.indeterminate = true;
          } else {
            _rootCheckbox.indeterminate = false;
          }
        }

        // STEP 5:
        // callback
        //-----------
        cb === null || cb === void 0 ? void 0 : cb(_res);
      }
    };
  }, [tableCheckRef]);

  // initialize actived checkboxes
  var latestCheckedData = function latestCheckedData() {
    if (firstInitCheckboxes) return getCheckedData;
    if (Array.isArray(fieldsChecked)) {
      var _checkedData = getCheckedData;
      if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') setCheckboxCheckedData(getCheckedData, rowKey, fieldsChecked[Number(rowIndex)]);
      // Update checked data
      updategetCheckedData(_checkedData);
      setFirstInitCheckboxes(true);
      updateFirstInitCheckboxesClassName(true);
      return _checkedData;
    } else {
      return getCheckedData;
    }
  };
  function updateRootcheckbox(el) {
    if (el === null) return;
    var _headRow = el.closest('table').querySelectorAll('thead th')[0];
    if (typeof _headRow !== 'undefined') {
      var _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
      var _checkboxes = (0,dom.getChildren)(el.closest('table').querySelector('tbody'), '[type="checkbox"]');
      var _checkedLength = _checkboxes.filter(function (checkbox) {
        return checkbox.checked === true;
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
  }
  function checkedAct(el, val) {
    if (el === null) return;
    var _curKey = el.value;
    var _checkedData = getCheckedData;
    var _res = getCheckedPrint;

    // STEP 1:
    // Update checked print from "fieldsChecked"
    // !!! Only one time is allowed
    //-----------
    if (!fieldsCheckedUpdateDataPrint) {
      if (Array.isArray(fieldsChecked)) {
        var _checkboxes = getAllCheckboxInput(el);
        _checkboxes.forEach(function (node, rowIndex) {
          if (fieldsChecked[Number(rowIndex)] === true) {
            _res.push(formatCheckboxControlVal(node));
          }
        });
      }

      //
      setFieldsCheckedUpdateDataPrint(true);
    }

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
    updateRootcheckbox(el);

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
  function handleTbodyEnter(e) {
    var _e$target$closest;
    (_e$target$closest = e.target.closest('table')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.querySelector('tbody').classList.add('drag-trigger-mousedown');
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
    scope: "row",
    colSpan: cols,
    "data-table-text": columnHeader,
    "data-table-col": index,
    "data-use": dataUse,
    style: style ? style : width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
      width: width
    } : {} : {},
    className: className || '',
    onMouseEnter: function onMouseEnter(e) {
      evCellMouseEnter === null || evCellMouseEnter === void 0 ? void 0 : evCellMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      evCellMouseLeave === null || evCellMouseLeave === void 0 ? void 0 : evCellMouseLeave(e);
    },
    onClick: function onClick(e) {
      evCellClick === null || evCellClick === void 0 ? void 0 : evCellClick(e);
    }
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
  }, useRadio ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    ref: checkboxRef,
    href: "#",
    draggable: false /* required */,
    tabIndex: -1,
    className: "radio-svg-btn",
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    onClick: function onClick(e) {
      e.preventDefault();

      // STEP 1:
      // Active current row
      //-----------
      var _rows = [].slice.call(e.currentTarget.closest('tbody').querySelectorAll('.row-obj'));
      var _rowEl = e.currentTarget.closest('.row-obj');
      var activeClass = rowActiveClassName.split(' ');
      _rows.forEach(function (row) {
        var _row$classList;
        (_row$classList = row.classList).remove.apply(_row$classList, _toConsumableArray(activeClass));
      });
      if (_rowEl !== null) {
        var _rowEl$classList;
        (_rowEl$classList = _rowEl.classList).add.apply(_rowEl$classList, _toConsumableArray(activeClass));
      }

      // STEP 2:
      // callback
      //-----------
      onCheck === null || onCheck === void 0 ? void 0 : onCheck([formatCheckboxControlVal(e.currentTarget)]);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "radio-svg--default"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    className: "radio-svg",
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",
    fill: "currentColor"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "radio-svg--active"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    className: "radio-svg",
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",
    fill: "currentColor"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5.25",
    fill: "currentColor"
  }))))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "form-check__wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "form-check d-inline-block"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    name: "checkbox-".concat(checkboxNamePrefix, "-").concat(rowIndex),
    ref: checkboxRef,
    tabIndex: -1,
    "data-index": "".concat(rowIndex),
    "data-key": "".concat(rowKey),
    value: "".concat(rowKey),
    checked: (_latestCheckedData$fi = latestCheckedData().filter(function (cur) {
      return cur.key === rowKey;
    })[0]) === null || _latestCheckedData$fi === void 0 ? void 0 : _latestCheckedData$fi.checked,
    onChange: function onChange(e) {
      var _latestCheckedData$fi2;
      checkedAct(e.target, !((_latestCheckedData$fi2 = latestCheckedData().filter(function (cur) {
        return cur.key === rowKey;
      })[0]) !== null && _latestCheckedData$fi2 !== void 0 && _latestCheckedData$fi2.checked));
    }
  }))))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: contentRef
  }, content)));
};
/* harmony default export */ const src_TableFieldRow = (TableFieldRow);
;// CONCATENATED MODULE: ./src/TableRow.tsx
function TableRow_slicedToArray(arr, i) { return TableRow_arrayWithHoles(arr) || TableRow_iterableToArrayLimit(arr, i) || TableRow_unsupportedIterableToArray(arr, i) || TableRow_nonIterableRest(); }
function TableRow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TableRow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TableRow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TableRow_arrayLikeToArray(o, minLen); }
function TableRow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TableRow_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TableRow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* Table Row
-------------------------------------------------*/

var TableRow = function TableRow(props) {
  var _filter$, _filter$2;
  var tableRootRef = props.tableRootRef,
    tableCheckRef = props.tableCheckRef,
    _props$rowActiveClass = props.rowActiveClassName,
    rowActiveClassName = _props$rowActiveClass === void 0 ? 'active' : _props$rowActiveClass,
    fieldsChecked = props.fieldsChecked,
    fieldsCheckedAct = props.fieldsCheckedAct,
    index = props.index,
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
    evDragStart = props.evDragStart,
    evCellMouseEnter = props.evCellMouseEnter,
    evCellMouseLeave = props.evCellMouseLeave,
    evCellClick = props.evCellClick,
    evRowMouseEnter = props.evRowMouseEnter,
    evRowMouseLeave = props.evRowMouseLeave,
    evRowClick = props.evRowClick;
  var nonExistentRowKey = "row-null";
  var rowIndex = rowKey === null || rowKey === void 0 ? void 0 : rowKey.replace('row-', '');
  var _rowChecked = (_filter$ = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = TableRow_slicedToArray(_useState, 2),
    firstInitCheckboxesClassName = _useState2[0],
    setFirstInitCheckboxesClassName = _useState2[1];

  // initialize actived checkboxes
  var latestRowChecked = function latestRowChecked() {
    if (firstInitCheckboxesClassName) return _rowChecked;
    if (Array.isArray(fieldsChecked)) {
      if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') {
        return fieldsChecked[Number(rowIndex)];
      }
    }
    return _rowChecked;
  };
  var rowChecked = firstInitCheckboxesClassName ? (_filter$2 = getCheckedData.filter(function (cur) {
    return cur.key === rowKey;
  })[0]) === null || _filter$2 === void 0 ? void 0 : _filter$2.checked : latestRowChecked();
  function handleClick(event) {
    var curVal = formatPerlineControlVal(event.currentTarget);
    onClick === null || onClick === void 0 ? void 0 : onClick(event, curVal);
    evRowClick === null || evRowClick === void 0 ? void 0 : evRowClick(event);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
    draggable: draggable,
    onDragEnd: draggable ? evDragEnd : function () {
      return void 0;
    },
    onDragStart: draggable ? evDragStart : function () {
      return void 0;
    },
    "data-id": index,
    "data-key": rowKey,
    className: "row-obj ".concat(rowChecked ? rowActiveClassName : '', " ").concat(typeof onClick === 'undefined' ? '' : 'clickable'),
    onClick: handleClick,
    onMouseEnter: function onMouseEnter(e) {
      evRowMouseEnter === null || evRowMouseEnter === void 0 ? void 0 : evRowMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      evRowMouseLeave === null || evRowMouseLeave === void 0 ? void 0 : evRowMouseLeave(e);
    }
  }, data ? data.map(function (el, i) {
    var headerItem = headerLabel[i];
    if (headerItem === undefined) headerItem = {
      type: false,
      content: ''
    };
    if (i === 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableFieldRow, {
        key: 'th-row' + i,
        tableRootRef: tableRootRef,
        tableCheckRef: tableCheckRef,
        rowActiveClassName: rowActiveClassName,
        fieldsChecked: fieldsChecked,
        fieldsCheckedAct: fieldsCheckedAct,
        updateFirstInitCheckboxesClassName: setFirstInitCheckboxesClassName,
        useRadio: useRadio,
        columnHeader: typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content,
        className: el.className,
        dataUse: el.data,
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
        draggable: draggable,
        evCellMouseEnter: evCellMouseEnter,
        evCellMouseLeave: evCellMouseLeave,
        evCellClick: evCellClick
      });
    } else {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableField, {
        key: 'td-row' + i,
        columnHeader: typeof headerItem.content === 'string' ? headerItem.content.replace(/(<([^>]+)>)/ig, '') : headerItem.content,
        className: el.className,
        dataUse: el.data,
        cols: el.cols,
        content: el.content,
        width: el.width,
        style: el.style,
        index: i,
        evCellMouseEnter: evCellMouseEnter,
        evCellMouseLeave: evCellMouseLeave,
        evCellClick: evCellClick
      });
    }
  }) : null));
};
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableHeaders.tsx


// HAS CHECKBOX



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
    evSort = props.evSort,
    evHeadCellMouseEnter = props.evHeadCellMouseEnter,
    evHeadCellMouseLeave = props.evHeadCellMouseLeave,
    evHeadCellClick = props.evHeadCellClick;
  function checkedAct(el, val) {
    if (el === null) return;
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
    var _checkboxes = getAllCheckboxInput(el);
    _checkboxes.forEach(function (node) {
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
  return data ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
    className: headClassName ? headClassName : ''
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, data.map(function (item, i) {
    var _item$type, _item$type2, _filter$;
    var itemSortable = item.type === false || ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.toString()) === 'false' || ((_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.toString()) === '0' || typeof item.type === 'undefined' ? false : true;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      key: i,
      scope: "col",
      "data-sort-type": item.type,
      "data-table-text": typeof item.content === 'string' ? item.content.replace(/(<([^>]+)>)/ig, '') : item.content,
      "data-table-col": i,
      "data-use": item.data || '',
      style: item.style ? item.style : item.width ? typeof window !== 'undefined' && window.innerWidth > 768 ? {
        width: item.width
      } : {} : {},
      className: item.className || '',
      onMouseEnter: function onMouseEnter(e) {
        evHeadCellMouseEnter === null || evHeadCellMouseEnter === void 0 ? void 0 : evHeadCellMouseEnter(e);
      },
      onMouseLeave: function onMouseLeave(e) {
        evHeadCellMouseLeave === null || evHeadCellMouseLeave === void 0 ? void 0 : evHeadCellMouseLeave(e);
      },
      onClick: function onClick(e) {
        evHeadCellClick === null || evHeadCellClick === void 0 ? void 0 : evHeadCellClick(e);
      }
    }, i === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "checkbox-trigger",
      style: {
        visibility: useRadio ? 'hidden' : 'visible'
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "form-check__wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "form-check d-inline-block"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      type: "checkbox",
      className: "form-check-input",
      name: "checkbox-".concat(checkboxNamePrefix, "-all"),
      tabIndex: -1,
      value: "row-all",
      checked: (_filter$ = getCheckedRootData.filter(function (cur) {
        return cur.key === 'row-all';
      })[0]) === null || _filter$ === void 0 ? void 0 : _filter$.checked,
      onChange: function onChange(e) {
        var _filter$2;
        checkedAct(e.target, !((_filter$2 = getCheckedRootData.filter(function (cur) {
          return cur.key === 'row-all';
        })[0]) !== null && _filter$2 !== void 0 && _filter$2.checked));
      }
    })))) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "".concat(item.content)
      }
    }), sortable && itemSortable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
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
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Table = function Table(props) {
  var tableCheckRef = props.tableCheckRef,
    wrapperClassName = props.wrapperClassName,
    tableClassName = props.tableClassName,
    bodyClassName = props.bodyClassName,
    headClassName = props.headClassName,
    footClassName = props.footClassName,
    rowActiveClassName = props.rowActiveClassName,
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
    onCellMouseEnter = props.onCellMouseEnter,
    onCellMouseLeave = props.onCellMouseLeave,
    onCellClick = props.onCellClick,
    onRowMouseEnter = props.onRowMouseEnter,
    onRowMouseLeave = props.onRowMouseLeave,
    onRowClick = props.onRowClick,
    onHeadCellMouseEnter = props.onHeadCellMouseEnter,
    onHeadCellMouseLeave = props.onHeadCellMouseLeave,
    onHeadCellClick = props.onHeadCellClick,
    onClick = props.onClick,
    onCheck = props.onCheck,
    onDrag = props.onDrag,
    onRenderFinished = props.onRenderFinished;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var tbodyRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = src_slicedToArray(_useState, 2),
    checkedPrint = _useState2[0],
    setCheckedPrint = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = src_slicedToArray(_useState3, 2),
    checkedData = _useState4[0],
    setCheckedData = _useState4[1];
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = src_slicedToArray(_useState5, 2),
    checkedRootData = _useState6[0],
    setCheckedRootData = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState8 = src_slicedToArray(_useState7, 2),
    sortData = _useState8[0],
    setSortData = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = src_slicedToArray(_useState9, 2),
    mainUpdate = _useState10[0],
    setMainUpdate = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState12 = src_slicedToArray(_useState11, 2),
    fieldsCheckedUpdateDataPrint = _useState12[0],
    setFieldsCheckedUpdateDataPrint = _useState12[1];
  var windowResizeUpdate = (0,performance.debounce)(handleWindowUpdate, 50);
  var _headers = data.hasOwnProperty('headers') ? data.headers : false;
  var _summaries = data.hasOwnProperty('summaries') ? data.summaries : false;
  var _fieldsChecked = data.hasOwnProperty('fieldsChecked') ? data.fieldsChecked : false;
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  //

  //Set the class names of different styles
  //
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';

  //
  var responsiveClasses = '';
  if (typeof responsive === 'undefined' || responsive === true) responsiveClasses += ' table-responsive';

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
    if (w <= 768 && tbodyRef.current.querySelector('tr') !== null) {
      var _loop = function _loop() {
        var tbodyRows = rootRef.current.querySelectorAll("tbody tr [data-table-col=\"".concat(i, "\"]"));
        var curColDisplay = window.getComputedStyle(tbodyRows, null).display;

        // default display attribute
        var curColDisplayVal = curColDisplay;
        if (typeof tbodyRows.dataset.show === 'undefined') {
          tbodyRows.dataset.show = curColDisplay;
        } else {
          curColDisplayVal = tbodyRows.dataset.show;
        }
        tbodyRows.style.display = curColDisplayVal;

        //
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
        var curColDisplay = window.getComputedStyle(node, null).display;

        // default display attribute
        var curColDisplayVal = curColDisplay;
        if (typeof node.dataset.show === 'undefined') {
          node.dataset.show = curColDisplay;
        } else {
          curColDisplayVal = node.dataset.show;
        }
        node.style.display = curColDisplayVal;

        //
        node.style.removeProperty('height');
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
    if (filterType === 'false' || filterType === '0') return false;

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
    var _tbodyRef$current;
    (_tbodyRef$current = tbodyRef.current) === null || _tbodyRef$current === void 0 ? void 0 : _tbodyRef$current.classList.remove('drag-trigger-mousedown');
  }

  // events fired on the drop targets
  var handledragOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    e.preventDefault();
    if (draggedObj === null) return;
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
    var _tbodyRef$current2;
    draggedObj.style.display = 'table-row';
    removePlaceholder();
    draggedObj.classList.remove('dragging');
    (_tbodyRef$current2 = tbodyRef.current) === null || _tbodyRef$current2 === void 0 ? void 0 : _tbodyRef$current2.classList.remove('drag-trigger-mousedown');
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
      var _el = rootRef.current.querySelector('table').querySelector("tbody [data-key=\"row-".concat(curId, "\"]"));
      if (_el !== null) _el.dataset.id = order;
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
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // display after render finished
    onRenderFinished === null || onRenderFinished === void 0 ? void 0 : onRenderFinished(true);
  }, []);
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
    evSort: handleSortList,
    evHeadCellMouseEnter: onHeadCellMouseEnter,
    evHeadCellMouseLeave: onHeadCellMouseLeave,
    evHeadCellClick: onHeadCellClick
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
      tableRootRef: rootRef,
      tableCheckRef: tableCheckRef,
      rowActiveClassName: rowActiveClassName,
      fieldsChecked: _fieldsChecked,
      fieldsCheckedAct: [fieldsCheckedUpdateDataPrint, setFieldsCheckedUpdateDataPrint],
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
      evDragStart: handleDragStart,
      evCellMouseEnter: onCellMouseEnter,
      evCellMouseLeave: onCellMouseLeave,
      evCellClick: onCellClick,
      evRowMouseEnter: onRowMouseEnter,
      evRowMouseLeave: onRowMouseLeave,
      evRowClick: onRowClick
    });
  }) : ""))));
};
/* harmony default export */ const src = (Table);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});