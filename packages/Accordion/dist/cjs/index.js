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

/***/ 710:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 */
function animateStyles(curElement, config) {
  if (_typeof(curElement) === ( true ? "undefined" : 0)) return;

  // Set a default configuration
  config = setDefaultOptions({
    "startHeight": 0,
    "endHeight": 0,
    "speed": 200,
    //ms
    "fps": 1000 / 60 // 60FPS
  }, config);

  //
  var _endHeight = config.endHeight,
    _speed = config.speed,
    _fps = config.fps;
  var _startHeight = config.startHeight;
  var timer = null;
  var startTime = Date.now();
  var deltaHeight = curElement.clientHeight < _endHeight ? _endHeight / _speed * _fps : _startHeight / _speed * _fps;
  timer = setInterval(function () {
    var elapsed = Date.now() - startTime; //Work out the elapsed time

    //If the elapsed time is less than the speed (ms)
    if (elapsed < _speed) {
      if (curElement.clientHeight < _endHeight) {
        _startHeight = _startHeight + deltaHeight;
      } else {
        _startHeight = _startHeight - deltaHeight;
      }
      curElement.style.height = _startHeight + 'px';
    } else {
      curElement.style.height = _endHeight + 'px';
      clearInterval(timer);
    }
  }, _fps);
}

/**
* Check if a string is a valid number
* @private
*/
function isValidNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!  
  if (!isNaN(str) &&
  // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)
  !isNaN(parseFloat(str)) // ensure strings of whitespace fail
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determine whether it is in JSON format
 * @private
 */
function isJSON(str) {
  if (typeof str === 'string' && str.length > 0) {
    if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
      return false;
    } else {
      if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 *  Set a default JSON format configuration
 * @private
 *
 * @param  {JSON} props         - Set some default keys and values.
 * @param  {JSON} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}               - Merge the new and old values.
 */
function setDefaultOptions(props, options) {
  if (_typeof(options) === ( true ? "undefined" : 0) || options === null || options === false) options = {};
  //Set a default configuration
  if (isJSON(props)) {
    var defaultConfigValues = Object.values(props);
    Object.keys(props).forEach(function (prop, index) {
      // Well-formed string type
      Object.keys(options).forEach(function (prop2, index2) {
        if (prop2 === prop) {
          var _v = options[prop2];
          if (_v == 'true') _v = true;
          if (_v == 'false') _v = false;
          if (isValidNumeric(_v)) _v = parseFloat(_v);
          if (isJSON(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
          options[prop2] = _v;
        }
      });

      //
      if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
    });
  }
  return options;
}
;
module.exports = animateStyles;

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
  "Accordion": () => (/* reexport */ src_Accordion),
  "AccordionItem": () => (/* reexport */ src_AccordionItem)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/AccordionItem.tsx

var AccordionItem = function AccordionItem(props) {
  var index = props.index,
    itemClassName = props.itemClassName,
    itemContentWrapperClassName = props.itemContentWrapperClassName,
    itemContentClassName = props.itemContentClassName,
    itemTriggerClassName = props.itemTriggerClassName,
    itemHeaderClassName = props.itemHeaderClassName,
    itemTriggerIcon = props.itemTriggerIcon,
    itemStyle = props.itemStyle,
    defaultActive = props.defaultActive,
    title = props.title,
    onToggleEv = props.onToggleEv,
    onTransitionEnd = props.onTransitionEnd,
    triggerType = props.triggerType,
    children = props.children;
  var activedClassName = typeof defaultActive !== 'undefined' && defaultActive !== false ? ' active' : '';
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    "data-index": index,
    className: "custom-accordion-item ".concat(itemClassName || itemClassName === '' ? itemClassName : "accordion-item", " ").concat(activedClassName),
    onClick: triggerType === 'click' ? onToggleEv : function () {},
    onMouseOver: triggerType === 'click' ? function () {} : onToggleEv,
    onTransitionEnd: typeof onTransitionEnd === 'function' ? onTransitionEnd : function () {},
    "aria-expanded": defaultActive ? 'true' : 'false',
    style: typeof itemStyle !== 'undefined' ? itemStyle : {}
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-header ".concat(itemHeaderClassName || itemHeaderClassName === '' ? itemHeaderClassName : "accordion-header position-relative"),
    role: "presentation"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    tabIndex: -1,
    className: "custom-accordion-trigger ".concat(itemTriggerClassName || itemTriggerClassName === '' ? itemTriggerClassName : "accordion-button", " ").concat(activedClassName === '' ? 'collapsed' : 'active'),
    type: "button"
  }, title), itemTriggerIcon), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-content__wrapper ".concat(itemContentWrapperClassName || itemContentWrapperClassName === '' ? itemContentWrapperClassName : "accordion-collapse"),
    role: "tabpanel",
    style: {
      height: defaultActive ? 'auto' : '0px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-content ".concat(itemContentClassName || itemContentClassName === '' ? itemContentClassName : "accordion-body")
  }, children))));
};
/* harmony default export */ const src_AccordionItem = (AccordionItem);
// EXTERNAL MODULE: ./src/utils/anim.js
var anim = __webpack_require__(710);
var anim_default = /*#__PURE__*/__webpack_require__.n(anim);
;// CONCATENATED MODULE: ./src/Accordion.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Accordion = function Accordion(props) {
  var wrapperClassName = props.wrapperClassName,
    triggerType = props.triggerType,
    displayTheFirstItem = props.displayTheFirstItem,
    duration = props.duration,
    alternateCollapse = props.alternateCollapse,
    onChange = props.onChange,
    children = props.children;
  var ALTER = typeof alternateCollapse === 'undefined' ? true : alternateCollapse;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    animOK = _useState2[0],
    setAnimOK = _useState2[1];
  function handleClickItem(e) {
    e.preventDefault();
    //Prevents further propagation of the current event in the capturing and bubbling phases(if use `e.target`).
    e.stopPropagation();
    if (animOK) return;

    //
    var reactDomEl = e.currentTarget;
    var curIndex = reactDomEl.dataset.index;
    var reactDomWrapperEl = rootRef.current;
    var animSpeed = duration || 200;
    var $li = reactDomWrapperEl.querySelectorAll('.custom-accordion-item');
    var $allContent = reactDomWrapperEl.querySelectorAll('.custom-accordion-content__wrapper');
    var $curContent = reactDomEl.querySelector('.custom-accordion-content__wrapper');
    if (reactDomEl.getAttribute('aria-expanded') === 'false' || reactDomEl.getAttribute('aria-expanded') === null) {
      var _reactDomEl$querySele, _reactDomEl$querySele2;
      setAnimOK(true);
      setTimeout(function () {
        setAnimOK(false);
      }, animSpeed);
      if (ALTER) {
        //Hide other all sibling <dt> of the selected element
        Array.prototype.forEach.call($allContent, function (node) {
          if (node.clientHeight > 0) {
            anim_default()(node, {
              startHeight: node.scrollHeight,
              endHeight: 0,
              speed: animSpeed
            });
          }
        });

        //to open
        Array.prototype.forEach.call($li, function (node) {
          var _node$querySelector, _node$querySelector2;
          node.classList.remove('active');
          (_node$querySelector = node.querySelector('.custom-accordion-trigger')) === null || _node$querySelector === void 0 ? void 0 : _node$querySelector.classList.remove('active');
          (_node$querySelector2 = node.querySelector('.custom-accordion-trigger')) === null || _node$querySelector2 === void 0 ? void 0 : _node$querySelector2.classList.add('collapsed');
          node.setAttribute('aria-expanded', false);
        });
      }
      reactDomEl.classList.add('active');
      (_reactDomEl$querySele = reactDomEl.querySelector('.custom-accordion-trigger')) === null || _reactDomEl$querySele === void 0 ? void 0 : _reactDomEl$querySele.classList.add('active');
      (_reactDomEl$querySele2 = reactDomEl.querySelector('.custom-accordion-trigger')) === null || _reactDomEl$querySele2 === void 0 ? void 0 : _reactDomEl$querySele2.classList.remove('collapsed');
      reactDomEl.setAttribute('aria-expanded', true);
      // When the height of the element is 0, the value of `offsetHeight` and `clientHeight` will be 0
      anim_default()($curContent, {
        startHeight: 0,
        endHeight: $curContent.scrollHeight,
        speed: animSpeed
      });
    } else {
      if (e.type == 'click') {
        var _reactDomEl$querySele3, _reactDomEl$querySele4;
        //to close
        reactDomEl.classList.remove('active');
        (_reactDomEl$querySele3 = reactDomEl.querySelector('.custom-accordion-trigger')) === null || _reactDomEl$querySele3 === void 0 ? void 0 : _reactDomEl$querySele3.classList.remove('active');
        (_reactDomEl$querySele4 = reactDomEl.querySelector('.custom-accordion-trigger')) === null || _reactDomEl$querySele4 === void 0 ? void 0 : _reactDomEl$querySele4.classList.add('collapsed');
        reactDomEl.setAttribute('aria-expanded', false);
        anim_default()($curContent, {
          startHeight: $curContent.scrollHeight,
          endHeight: 0,
          speed: animSpeed
        });
      }
    }
    if (typeof onChange === 'function') {
      onChange(reactDomEl, Number(curIndex));
    }
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-item ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "accordion"),
    role: "tablist",
    ref: rootRef
  }, children != null ? children.map(function (item, i) {
    var childProps = _objectSpread({}, item.props);
    var _defaultActive = i === 0 && displayTheFirstItem ? true : false;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_AccordionItem, _extends({
      key: "item" + i,
      index: i,
      defaultActive: _defaultActive,
      triggerType: triggerType || 'click',
      onToggleEv: handleClickItem
    }, childProps));
  }) : null));
};
/* harmony default export */ const src_Accordion = (Accordion);
;// CONCATENATED MODULE: ./src/index.tsx


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});