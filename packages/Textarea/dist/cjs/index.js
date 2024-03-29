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
;// CONCATENATED MODULE: ./src/utils/useAutosizeTextArea.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Creating a Textarea with dynamic height
 * 
 * @usage:


const App = () => {
    const [value, setValue] = useState("");
    const el = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(el.current, value);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setValue(val);
    };

    return (
        <div className="App">
            <textarea
                onChange={handleChange}
                ref={el}
                rows={3}
                value={value}
            />
        </div>
    );
};



 */



// Updates the height of a <textarea> when the value changes.
var useAutosizeTextArea = function useAutosizeTextArea(el, value) {
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    defaultRowHeight = _useState2[0],
    setDefaultRowHeight = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultRowHeightInit = _useState4[0],
    setDefaultRowHeightInit = _useState4[1];
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (el) {
      // initialize default row height
      if (el.scrollHeight > 0 && !defaultRowHeightInit) {
        var style = el.currentStyle || window.getComputedStyle(el);
        setDefaultRowHeight(el.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth));
        setDefaultRowHeightInit(true);
      }

      // restore default row height
      if (defaultRowHeight > 0) {
        el.style.height = defaultRowHeight + "px";
      }

      // reset the height momentarily to get the correct scrollHeight for the textarea
      var scrollHeight = el.scrollHeight;

      // then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.

      // !!! Compare initial height and changed height
      if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
        el.style.height = scrollHeight + "px";
      }
    }
  }, [el, value]);
};
/* harmony default export */ const utils_useAutosizeTextArea = (useAutosizeTextArea);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded = ["wrapperClassName", "controlClassName", "controlGroupWrapperClassName", "controlGroupTextClassName", "cols", "rows", "disabled", "required", "placeholder", "autoSize", "iconLeft", "iconRight", "readOnly", "value", "label", "name", "id", "maxLength", "style", "tabIndex", "onChangeCallback", "onInputCallback", "onKeyPressedCallback", "onChange", "onBlur", "onFocus"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function src_slicedToArray(arr, i) { return src_arrayWithHoles(arr) || src_iterableToArrayLimit(arr, i) || src_unsupportedIterableToArray(arr, i) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function src_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function src_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


;
var Textarea = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, _ref) {
  var wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlGroupWrapperClassName = props.controlGroupWrapperClassName,
    controlGroupTextClassName = props.controlGroupTextClassName,
    cols = props.cols,
    rows = props.rows,
    disabled = props.disabled,
    required = props.required,
    placeholder = props.placeholder,
    autoSize = props.autoSize,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    readOnly = props.readOnly,
    value = props.value,
    label = props.label,
    name = props.name,
    id = props.id,
    maxLength = props.maxLength,
    style = props.style,
    tabIndex = props.tabIndex,
    onChangeCallback = props.onChangeCallback,
    onInputCallback = props.onInputCallback,
    onKeyPressedCallback = props.onKeyPressedCallback,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var valRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ''),
    _useState2 = src_slicedToArray(_useState, 2),
    changedVal = _useState2[0],
    setChangedVal = _useState2[1];

  // auto size
  utils_useAutosizeTextArea(autoSize ? valRef.current : null, autoSize ? changedVal : '');
  function handleFocus(event) {
    var el = event.target;
    rootRef.current.classList.add('focus');

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleChange(event) {
    var val = event.target.value;
    setChangedVal(val);

    //----
    //remove focus style
    if (val === '') {
      rootRef.current.classList.remove('focus');
    }

    //
    onChange === null || onChange === void 0 ? void 0 : onChange(event);

    // It fires in real time as the user enters
    if (typeof onInputCallback === 'function') {
      var newData = onInputCallback(event);
      if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
    }
  }

  function handleBlur(event) {
    var el = event.target;
    var val = event.target.value;

    //----
    //remove focus style
    if (val === '') {
      rootRef.current.classList.remove('focus');
    }

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);

    // It fires when focus is lost
    if (typeof onChangeCallback === 'function') {
      var newData = onChangeCallback(event);
      if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
    }
  }

  function handleKeyPressed(event) {
    if (typeof onKeyPressedCallback === 'function') {
      var newData = onKeyPressedCallback(event);
      if (newData) setChangedVal(newData); // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
    }
  }

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // update default value
    //--------------
    if (typeof value !== 'undefined' && value !== null) {
      if (value.length > 0 && autoSize) {
        // Recalculate height if default value exceeds initial height
        setChangedVal("");
        setTimeout(function () {
          setChangedVal("".concat(value));
        }, 0);
      } else {
        setChangedVal("".concat(value)); // Avoid displaying the number 0
      }
    }
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    ref: rootRef
  }, label ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, typeof label === 'string' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: controlGroupWrapperClassName || "form-label",
    dangerouslySetInnerHTML: {
      __html: "".concat(label)
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: controlGroupWrapperClassName || "form-label"
  }, label)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "input-group"
  }, typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: controlGroupTextClassName || "input-group-text"
  }, iconLeft)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("textarea", _extends({
    ref: function ref(node) {
      valRef.current = node;
      if (typeof _ref === 'function') {
        _ref(node);
      } else if (_ref) {
        _ref.current = node;
      }
    },
    tabIndex: tabIndex || 0,
    className: controlClassName || controlClassName === '' ? controlClassName : "form-control",
    id: idRes,
    name: name,
    placeholder: placeholder || '',
    value: changedVal,
    maxLength: maxLength || null,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    onKeyDown: handleKeyPressed,
    disabled: disabled || null,
    required: required || null,
    readOnly: readOnly || null,
    cols: cols || 20,
    rows: rows || 2,
    style: style
  }, attributes)), typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: controlGroupTextClassName || "input-group-text"
  }, iconRight)) : null), required ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "position-absolute end-0 top-0 my-2 mx-2"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "text-danger"
  }, "*"))) : ''));
});
/* harmony default export */ const src = (Textarea);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});