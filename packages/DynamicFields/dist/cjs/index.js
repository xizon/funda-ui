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
    value = props.value,
    label = props.label,
    tempHtmlString = props.tempHtmlString,
    maxFields = props.maxFields,
    iconAdd = props.iconAdd,
    iconRemove = props.iconRemove,
    startFromZero = props.startFromZero,
    id = props.id,
    confirmText = props.confirmText,
    onAdd = props.onAdd,
    onRemove = props.onRemove;
  var uniqueID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var addBtnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  function groupByNum(arr, n) {
    if (n === 0 || n === Infinity) return false;
    var result = [];
    for (var i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n));
    return result;
  }
  function handleClickAdd(event) {
    event.preventDefault();

    //button status
    if (rootRef.current.querySelector('.dynamic-fields__append').children.length + 1 >= parseFloat(maxFields)) {
      addBtnRef.current.style.setProperty('display', 'none', 'important');
    }

    //
    setData(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [[""]]);
    });

    //
    onAdd === null || onAdd === void 0 ? void 0 : onAdd();
  }
  function handleClickRemove(param) {
    // param is the argument you passed to the function
    return function (e) {
      // e is the event object that returned
      e.preventDefault();
      if (confirm(confirmText || '')) {
        //button status
        if (rootRef.current.querySelector('.dynamic-fields__append').children.length <= parseFloat(maxFields)) {
          addBtnRef.current.style.setProperty('display', 'inline', 'important');
        }

        //
        var newData = _toConsumableArray(data);
        newData.splice(param, 1);
        //console.log(newData); //[[""],[""],[""],[""]]
        setData(newData);

        //
        onRemove === null || onRemove === void 0 ? void 0 : onRemove();
      }
    };
  }
  function updateDisplayedControls() {
    // update values for all displayed controls
    // You need to wait for the asynchronous component to render
    setTimeout(function () {
      if (fieldsRef.current !== null) {
        var _val = value ? JSON.parse('[' + value + ']') : [];
        var controls = [].slice.call(document.querySelectorAll("#".concat(fieldsRef.current.id, " > .dynamic-fields__append [name]")));
        var integratedControls = [];
        var hasRadio = false;
        controls.forEach(function (node) {
          var controlType = '';
          if (node.tagName == "INPUT" || node.tagName == "TEXTARTA") {
            //not `radio`, `checkbox`
            if (node.type != 'checkbox' && node.type != 'radio') {
              controlType = 'input-textarea';
            }

            //`checkbox`
            if (node.type == 'checkbox') {
              controlType = 'checkbox';
            }

            //`radio`
            if (node.type == 'radio') {
              controlType = 'radio';
            }
          }

          //`select`
          if (node.tagName == "SELECT") {
            controlType = 'select';
          }

          //
          if (controlType === 'radio') {
            hasRadio = true;
          }
          integratedControls.push({
            target: node,
            type: controlType
          });
        });
        if (hasRadio) {
          console.error('<DynamicFields /> cannot use the "radio" type, because it will have multiple duplicate names! \nThe following components are recommended: <Input />, <Textarea />, <Checkbox />, <Switch />, <MultiFuncSelect />, <Select />, <CascadingSelectE2E />, <CascadingSelect />, <TagInput />, <RangeSlider />.');
          return false;
        }
        var resControls = groupByNum(integratedControls, Math.floor(integratedControls.length / _val.length));
        _val.map(function (row, i) {
          row.map(function (val, j) {
            if (typeof resControls[i] !== 'undefined') {
              var _control = resControls[i][j];
              switch (_control.type) {
                case "input-textarea":
                  _control.target.value = val;

                  // if it is checkbox
                  if (val === true) {
                    var _checkbox = _control.target.parentElement.querySelector('[data-checkbox]');
                    _checkbox.checked = val == true ? true : false;
                    _control.target.value = _checkbox.value;
                  }
                  break;
                case "checkbox":
                  _control.target.checked = val == true ? true : false;
                  break;
                case "select":
                  _control.target.value = val;
                  _control.target.dispatchEvent(new Event('change'));
                  break;
                default:
                  _control.target.value = val;
              } //end switch  
            }
          });
        });
      }
    }, 250);
  }
  function generateList() {
    return data.map(function (el, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        className: "dynamic-fields__tmpl__wrapper position-relative"
      }, el.map(function (data, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          key: index
        }, tempHtmlString);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        tabIndex: -1,
        className: "dynamic-fields__removebtn align-middle",
        onClick: handleClickRemove(i)
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
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(value ? _toConsumableArray(Array(JSON.parse('[' + value + ']').length - (!startFromZero ? 1 : 0))).map(function () {
      return [""];
    }) : []);
    updateDisplayedControls();
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    ref: rootRef
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, label)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: fieldsRef,
    className: "dynamic-fields-container",
    "data-max-fields": maxFields || 10,
    id: idRes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dynamic-fields__append"
  }, !startFromZero ? tempHtmlString : null, generateList()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFields);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});