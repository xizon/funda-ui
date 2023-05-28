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
;// CONCATENATED MODULE: ./src/Option.tsx

function Option(props) {
  var _props$option, _props$option2;
  function handleSelect(e) {
    e.preventDefault();
    var fn = props.onSelect;
    fn(props.option);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    className: props.hyperlinkClassName,
    "data-value": (_props$option = props.option) === null || _props$option === void 0 ? void 0 : _props$option.value,
    href: "#",
    onClick: handleSelect,
    dangerouslySetInnerHTML: {
      __html: "".concat((_props$option2 = props.option) === null || _props$option2 === void 0 ? void 0 : _props$option2.label)
    }
  }));
}
;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var DropdownMenu = function DropdownMenu(props) {
  var wrapperClassName = props.wrapperClassName,
    listClassName = props.listClassName,
    hyperlinkClassName = props.hyperlinkClassName,
    showClassName = props.showClassName,
    name = props.name,
    triggerButton = props.triggerButton,
    triggerClassName = props.triggerClassName,
    triggerContent = props.triggerContent,
    options = props.options,
    tabIndex = props.tabIndex,
    onChange = props.onChange;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var selectedLabel = selected ? selected.label : triggerContent === undefined ? '' : triggerContent;
  var selectOptionsListPresentation = options === null || options === void 0 ? void 0 : options.map(function (selectOption, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Option, {
      key: index,
      option: selectOption,
      onSelect: handleSelect,
      hyperlinkClassName: hyperlinkClassName ? hyperlinkClassName : 'dropdown-item-default'
    });
  });
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  function handleClose(event) {
    if (event.target.closest(".".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'dropdown__wrapper')) === null) {
      setIsOpen(false);
    }
  }
  function handleSelect(option) {
    setIsOpen(false);
    setSelected(option);
    if (typeof onChange === 'function') {
      onChange({
        "value": option
      });
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    document.removeEventListener('pointerdown', handleClose);
    document.addEventListener('pointerdown', handleClose);
    return function () {
      document.removeEventListener('pointerdown', handleClose);
    };
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: isOpen ? "dropdown__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'dropdown-default', " active") : "dropdown__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'dropdown-default')
  }, triggerButton ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: tabIndex || -1,
    className: triggerClassName ? "".concat(triggerClassName) : "d-inline w-auto",
    type: "button",
    onClick: handleClick,
    dangerouslySetInnerHTML: {
      __html: selectedLabel
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: triggerClassName ? "".concat(triggerClassName) : "d-inline w-auto",
    onClick: handleClick,
    dangerouslySetInnerHTML: {
      __html: selectedLabel
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    name: name || '',
    type: "hidden",
    value: selected === null || selected === void 0 ? void 0 : selected.value
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: isOpen ? "".concat(listClassName ? listClassName : 'dropdown-menu-default', " ").concat(showClassName ? showClassName : 'show') : "".concat(listClassName ? listClassName : 'dropdown-menu-default')
  }, selectOptionsListPresentation)));
};
/* harmony default export */ const src = (DropdownMenu);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});