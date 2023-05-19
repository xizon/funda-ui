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
;// CONCATENATED MODULE: ./src/Item.tsx

;
var Item = function Item(props) {
  var index = props.index,
    title = props.title,
    note = props.note,
    message = props.message,
    depth = props.depth,
    lock = props.lock,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeEv = props.closeEv;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-container",
    "data-index": index,
    style: {
      transform: "perspective(100px) translateZ(-".concat(2 * index, "px) translateY(").concat(35 * index, "px)"),
      zIndex: depth
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast fade show ".concat(schemeBody ? schemeBody : ''),
    role: "alert"
  }, (title === '' || title === false) && (note === '' || note === false) ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-header ".concat(schemeHeader ? schemeHeader : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("strong", {
    className: "me-auto"
  }, title === '' || title === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, title)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("small", {
    className: "text-muted"
  }, note === '' || note === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, note)), !lock ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    "data-close": "1",
    "data-index": index,
    tabIndex: -1,
    type: "button",
    className: "btn-close",
    style: {
      background: 'none'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  })))) : null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-body"
  }, message))));
};
/* harmony default export */ const src_Item = (Item);
;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Toast = function Toast(props) {
  var direction = props.direction,
    autoCloseTime = props.autoCloseTime,
    autoCloseReverse = props.autoCloseReverse,
    lock = props.lock,
    data = props.data,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    id = props.id;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(data ? data : []),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  var depth = toasts.length + 1;
  var autoHideTimeout = null;
  function handleClose(index) {
    var items = JSON.parse(JSON.stringify(toasts));
    if (items[index] !== undefined) {
      var _list = rootRef.current.querySelectorAll('.toast-container');
      _list[index].classList.add('hide');

      //Let the removed animation show
      setTimeout(function () {
        [].slice.call(_list).forEach(function (node) {
          node.classList.remove('hide');
        });
        items.splice(index, 1); //delete one item
        setToasts(items);
      }, 300);
    }
  }
  function autoClose(index, items) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
    if (items.length === 0) return;
    autoHideTimeout = setTimeout(function () {
      var _list = rootRef.current.querySelectorAll('.toast-container');
      if (autoCloseReverse) {
        _list[items.length - 1].classList.add('hide');
      } else {
        _list[0].classList.add('hide');
      }

      //Let the removed animation show
      setTimeout(function () {
        [].slice.call(_list).forEach(function (node) {
          node.classList.remove('hide');
        });
        if (autoCloseReverse) {
          items.splice(items.length - 1, 1);
        } else {
          items.splice(0, 1);
        }
        setToasts(items);
        autoClose(index++, items, delay);
      }, 300);
    }, delay * (index + 1));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Move HTML templates to tag end body </body>
    // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
    //------------------------------------------
    document.body.appendChild(rootRef.current);
    [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach(function (node) {
      node.addEventListener('pointerdown', function (e) {
        var index = node.dataset.index;
        handleClose(index);
      });
    });

    // Auto hide
    //--------------
    var _autoCloseTime = typeof autoCloseTime === 'undefined' || autoCloseTime === false ? false : autoCloseTime;
    if (_autoCloseTime !== false) {
      var items = JSON.parse(JSON.stringify(toasts));
      autoClose(0, items, _autoCloseTime);
    }
    return function () {
      // Cancels a timeout previously established by calling setTimeout().
      //--------------
      clearTimeout(autoHideTimeout);
    };
  }, [toasts]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    id: "toaster-".concat(idRes),
    className: "toaster__container toaster__container--".concat(direction ? direction : 'bottom-center'),
    ref: rootRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toaster"
  }, toasts.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Item, {
      depth: depth - i,
      key: i,
      index: i,
      title: item.title,
      note: item.note,
      lock: lock,
      schemeBody: schemeBody,
      schemeHeader: schemeHeader,
      closeBtnColor: closeBtnColor,
      message: item.message,
      closeEv: handleClose
    });
  }))));
};
/* harmony default export */ const src = (Toast);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});