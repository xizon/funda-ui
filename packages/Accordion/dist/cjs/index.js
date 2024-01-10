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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _require = __webpack_require__(711),
  easeLinear = _require.easeLinear,
  easeInQuad = _require.easeInQuad,
  easeOutQuad = _require.easeOutQuad,
  easeInOutQuad = _require.easeInOutQuad;
var setDefaultOptions = __webpack_require__(337);

/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 * @param  {?string} easeType            - Types of easing animation.
* @param  {?Function} callback           - Callback after animation ends
 */
function animateStyles(curElement, config) {
  var easeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  if (_typeof(curElement) === ( true ? "undefined" : 0)) return;

  // Set a default configuration
  config = setDefaultOptions({
    "startHeight": 0,
    // node.scrollHeight
    "endHeight": 0,
    "speed": 200 //ms
  }, config);

  //
  var _endHeight = config.endHeight,
    _speed = config.speed;
  var _startHeight = config.startHeight;
  var duration = _speed;
  var start = new Date().getTime();
  var from = 0;
  var to = 100;
  var requestId;
  var loop = function loop() {
    //easing
    var time = new Date().getTime() - start; //Work out the elapsed time
    var val;
    switch (easeType) {
      case "linear":
        val = easeLinear(time, from, to - from, duration);
        break;
      case "ease-in":
        val = easeInQuad(time, from, to - from, duration);
        break;
      case "ease-out":
        val = easeOutQuad(time, from, to - from, duration);
        break;
      case "ease-in-out":
        val = easeInOutQuad(time, from, to - from, duration);
        break;
      default:
        val = easeLinear(time, from, to - from, duration);
    }

    // Elapsed time in miliseconds
    var percent = val / 100;

    // change height
    if (curElement.clientHeight < _endHeight) {
      curElement.style.height = _endHeight * percent + 'px';
    } else {
      if (_startHeight > 0) curElement.style.height = _startHeight - _startHeight * percent + 'px';
    }

    //If the elapsed time is less than the speed (ms)
    if (time < duration) {
      //
      requestId = window.requestAnimationFrame(loop);
    } else {
      // change height
      curElement.style.height = _endHeight + 'px';
      if (typeof callback === 'function') callback();

      //
      window.cancelAnimationFrame(requestId);
    }
  };
  requestId = window.requestAnimationFrame(loop);
}
module.exports = animateStyles;

/***/ }),

/***/ 711:
/***/ ((module) => {

/*
 * All easing functions
 * @link: https://easings.net
 * @param {Number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
 * @param {Number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
 * @param {Number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
 * @param {Number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
 * @return {Number}
 */
function easeLinear(t, b, c, d) {
  return c * t / d + b;
}
function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}
function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
}
function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}
function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
function easeInExpo(t, b, c, d) {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
function easeOutExpo(t, b, c, d) {
  return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function easeInOutExpo(t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
function easeOutCirc(t, b, c, d) {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function easeInOutCirc(t, b, c, d) {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
function easeInCubic(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
}
function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
}
function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}
function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
function easeInElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}
function easeOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}
function easeInOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  if (!p) p = d * (.3 * 1.5);
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
}
function easeInBack(t, b, c, d) {
  if (s == undefined) s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
function easeOutBack(t, b, c, d) {
  if (s == undefined) s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
function easeInOutBack(t, b, c, d) {
  if (s == undefined) s = 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}
module.exports = {
  easeLinear: easeLinear,
  easeInQuad: easeInQuad,
  easeOutQuad: easeOutQuad,
  easeInOutQuad: easeInOutQuad,
  easeInSine: easeInSine,
  easeOutSine: easeOutSine,
  easeInOutSine: easeInOutSine,
  easeInExpo: easeInExpo,
  easeOutExpo: easeOutExpo,
  easeInOutExpo: easeInOutExpo,
  easeInCirc: easeInCirc,
  easeOutCirc: easeOutCirc,
  easeInOutCirc: easeInOutCirc,
  easeInCubic: easeInCubic,
  easeOutCubic: easeOutCubic,
  easeInOutCubic: easeInOutCubic,
  easeInQuart: easeInQuart,
  easeOutQuart: easeOutQuart,
  easeInOutQuart: easeInOutQuart,
  easeInQuint: easeInQuint,
  easeOutQuint: easeOutQuint,
  easeInOutQuint: easeInOutQuint,
  easeInElastic: easeInElastic,
  easeOutElastic: easeOutElastic,
  easeInOutElastic: easeInOutElastic,
  easeInBack: easeInBack,
  easeOutBack: easeOutBack,
  easeInOutBack: easeInOutBack
};

/***/ }),

/***/ 337:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 *  Set a default JSON format configuration
 * @public
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
module.exports = setDefaultOptions;

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
  var heightObserver = props.heightObserver,
    index = props.index,
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
  var observer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentWrapperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (parseFloat(heightObserver) !== index) return;

    // When the content height changes dynamically, change the height of the wrapper
    if (contentRef.current && contentWrapperRef.current) {
      var _contentPadding = window.getComputedStyle(contentRef.current).getPropertyValue('padding-bottom');
      observer.current = new ResizeObserver(function (entries) {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach(function (entry) {
          if (contentWrapperRef.current !== null) contentWrapperRef.current.style.height = entry.contentRect.bottom + parseFloat(_contentPadding) + 'px';
        });
      });
      observer.current.observe(contentRef.current);
    }
    return function () {
      var _observer$current;
      if (contentRef.current) (_observer$current = observer.current) === null || _observer$current === void 0 ? void 0 : _observer$current.unobserve(contentRef.current);
    };
  }, [heightObserver]);
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
    ref: contentWrapperRef,
    className: "custom-accordion-content__wrapper ".concat(itemContentWrapperClassName || itemContentWrapperClassName === '' ? itemContentWrapperClassName : "accordion-collapse"),
    role: "tabpanel",
    style: {
      height: defaultActive ? 'auto' : '0px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "custom-accordion-content ".concat(itemContentClassName || itemContentClassName === '' ? itemContentClassName : "accordion-body"),
    ref: contentRef
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




// Adapt the easing parameters of TweenMax
var EasingList = /*#__PURE__*/function (EasingList) {
  EasingList["linear"] = "linear";
  EasingList["easeIn"] = "ease-in";
  EasingList["easeOut"] = "ease-out";
  EasingList["easeInOut"] = "ease-in-out";
  return EasingList;
}(EasingList || {});
var Accordion = function Accordion(props) {
  var wrapperClassName = props.wrapperClassName,
    triggerType = props.triggerType,
    displayTheFirstItem = props.displayTheFirstItem,
    displayAllItems = props.displayAllItems,
    duration = props.duration,
    easing = props.easing,
    alternateCollapse = props.alternateCollapse,
    onChange = props.onChange,
    children = props.children;
  var easeType = typeof alternateCollapse === 'undefined' ? EasingList['linear'] : EasingList[easing];
  var ALTER = typeof alternateCollapse === 'undefined' ? true : alternateCollapse;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    animOK = _useState2[0],
    setAnimOK = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    heightObserver = _useState4[0],
    setHeightObserver = _useState4[1];
  function handleClickItem(e) {
    if (e.target.closest('.custom-accordion-header') === null) return;
    if (animOK) return;

    // DO NOT place it before the above code, otherwise it will cause the checkbox and radio controls to fail.
    e.preventDefault();

    //Prevents further propagation of the current event in the capturing and bubbling phases(if use `e.target`).
    e.stopPropagation();

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
            }, easeType);
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
      }, easeType, function () {
        // content height observer
        setHeightObserver(curIndex);
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
        }, easeType);
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
      heightObserver: heightObserver,
      defaultActive: typeof displayAllItems === 'undefined' ? _defaultActive : displayAllItems,
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