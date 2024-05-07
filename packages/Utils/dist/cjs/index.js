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
  "addTreeDepth": () => (/* reexport */ addTreeDepth),
  "addTreeIndent": () => (/* reexport */ addTreeIndent),
  "animateStyles": () => (/* reexport */ anim),
  "arrayBufferToUint8Array": () => (/* reexport */ arrayBufferToUint8Array),
  "arrayToBlob": () => (/* reexport */ arrayToBlob),
  "arrayToStream": () => (/* reexport */ arrayToStream),
  "arrayToUint8array": () => (/* reexport */ arrayToUint8array),
  "base64ToArrayBuffer": () => (/* reexport */ base64ToArrayBuffer),
  "blobToUint8array": () => (/* reexport */ blobToUint8array),
  "convertArrToValByBraces": () => (/* reexport */ convertArrToValByBraces),
  "convertArrToValByBrackets": () => (/* reexport */ convertArrToValByBrackets),
  "convertStringByCommaToValByBraces": () => (/* reexport */ convertStringByCommaToValByBraces),
  "convertStringByCommaToValByBrackets": () => (/* reexport */ convertStringByCommaToValByBrackets),
  "convertTree": () => (/* reexport */ convertTree),
  "dateFormat": () => (/* reexport */ dateFormat),
  "debounce": () => (/* reexport */ debounce),
  "decodeBase64Str": () => (/* reexport */ decodeBase64Str),
  "deepClone": () => (/* reexport */ deepClone),
  "easeInBack": () => (/* reexport */ easeInBack),
  "easeInCirc": () => (/* reexport */ easeInCirc),
  "easeInCubic": () => (/* reexport */ easeInCubic),
  "easeInElastic": () => (/* reexport */ easeInElastic),
  "easeInExpo": () => (/* reexport */ easeInExpo),
  "easeInOutBack": () => (/* reexport */ easeInOutBack),
  "easeInOutCirc": () => (/* reexport */ easeInOutCirc),
  "easeInOutCubic": () => (/* reexport */ easeInOutCubic),
  "easeInOutElastic": () => (/* reexport */ easeInOutElastic),
  "easeInOutExpo": () => (/* reexport */ easeInOutExpo),
  "easeInOutQuad": () => (/* reexport */ easeInOutQuad),
  "easeInOutQuart": () => (/* reexport */ easeInOutQuart),
  "easeInOutQuint": () => (/* reexport */ easeInOutQuint),
  "easeInOutSine": () => (/* reexport */ easeInOutSine),
  "easeInQuad": () => (/* reexport */ easeInQuad),
  "easeInQuart": () => (/* reexport */ easeInQuart),
  "easeInQuint": () => (/* reexport */ easeInQuint),
  "easeInSine": () => (/* reexport */ easeInSine),
  "easeLinear": () => (/* reexport */ easeLinear),
  "easeOutBack": () => (/* reexport */ easeOutBack),
  "easeOutCirc": () => (/* reexport */ easeOutCirc),
  "easeOutCubic": () => (/* reexport */ easeOutCubic),
  "easeOutElastic": () => (/* reexport */ easeOutElastic),
  "easeOutExpo": () => (/* reexport */ easeOutExpo),
  "easeOutQuad": () => (/* reexport */ easeOutQuad),
  "easeOutQuart": () => (/* reexport */ easeOutQuart),
  "easeOutQuint": () => (/* reexport */ easeOutQuint),
  "easeOutSine": () => (/* reexport */ easeOutSine),
  "extractContentsOfBraces": () => (/* reexport */ extractContentsOfBraces),
  "extractContentsOfBrackets": () => (/* reexport */ extractContentsOfBrackets),
  "extractContentsOfParentheses": () => (/* reexport */ extractContentsOfParentheses),
  "flatData": () => (/* reexport */ flatData),
  "flatTree": () => (/* reexport */ flatTree),
  "getAbsoluteCoordinates": () => (/* reexport */ getAbsoluteCoordinates),
  "getAbsolutePositionOfStage": () => (/* reexport */ getAbsolutePositionOfStage),
  "getAllDepth": () => (/* reexport */ getAllDepth),
  "getAllSiblings": () => (/* reexport */ getAllSiblings),
  "getCalendarDate": () => (/* reexport */ getCalendarDate),
  "getChildren": () => (/* reexport */ getChildren),
  "getCurrentDate": () => (/* reexport */ getCurrentDate),
  "getCurrentDay": () => (/* reexport */ getCurrentDay),
  "getCurrentMonth": () => (/* reexport */ getCurrentMonth),
  "getCurrentYear": () => (/* reexport */ getCurrentYear),
  "getDocument": () => (/* reexport */ getDocument),
  "getFirstAndLastMonthDay": () => (/* reexport */ getFirstAndLastMonthDay),
  "getFullTime": () => (/* reexport */ getFullTime),
  "getLastDayInMonth": () => (/* reexport */ getLastDayInMonth),
  "getNextMonthDate": () => (/* reexport */ getNextMonthDate),
  "getNextSiblings": () => (/* reexport */ getNextSiblings),
  "getNextYearDate": () => (/* reexport */ getNextYearDate),
  "getNow": () => (/* reexport */ getNow),
  "getOffset": () => (/* reexport */ getOffset),
  "getParents": () => (/* reexport */ getParents),
  "getPosition": () => (/* reexport */ getPosition),
  "getPrevMonthDate": () => (/* reexport */ getPrevMonthDate),
  "getPrevYearDate": () => (/* reexport */ getPrevYearDate),
  "getPreviousSiblings": () => (/* reexport */ getPreviousSiblings),
  "getSpecifiedDate": () => (/* reexport */ getSpecifiedDate),
  "getTodayDate": () => (/* reexport */ getTodayDate),
  "getTomorrowDate": () => (/* reexport */ getTomorrowDate),
  "getTransitionDuration": () => (/* reexport */ getTransitionDuration),
  "getYesterdayDate": () => (/* reexport */ getYesterdayDate),
  "isElement": () => (/* reexport */ isElement),
  "isHTMLElement": () => (/* reexport */ isHTMLElement),
  "isJSON": () => (/* reexport */ isJSON),
  "isNode": () => (/* reexport */ isNode),
  "isNumeric": () => (/* reexport */ isNumeric),
  "isRootElement": () => (/* reexport */ isRootElement),
  "isShadowRoot": () => (/* reexport */ isShadowRoot),
  "isValidDate": () => (/* reexport */ isValidDate),
  "isValidDay": () => (/* reexport */ isValidDay),
  "isValidHours": () => (/* reexport */ isValidHours),
  "isValidMinutesAndSeconds": () => (/* reexport */ isValidMinutesAndSeconds),
  "isValidMonth": () => (/* reexport */ isValidMonth),
  "isValidNumeric": () => (/* reexport */ isValidNumeric),
  "isValidYear": () => (/* reexport */ isValidYear),
  "nodeContains": () => (/* reexport */ nodeContains),
  "padZero": () => (/* reexport */ padZero),
  "readStream": () => (/* reexport */ readStream),
  "setDateDays": () => (/* reexport */ setDateDays),
  "setDateHours": () => (/* reexport */ setDateHours),
  "setDateMinutes": () => (/* reexport */ setDateMinutes),
  "setDefaultOptions": () => (/* reexport */ setDefaultOptions),
  "throttle": () => (/* reexport */ throttle),
  "timestampToDate": () => (/* reexport */ timestampToDate),
  "toBinary": () => (/* reexport */ toBinary),
  "uint8arrayToArr": () => (/* reexport */ uint8arrayToArr),
  "uint8arrayToBase64Str": () => (/* reexport */ uint8arrayToBase64Str),
  "useAutosizeTextArea": () => (/* reexport */ hooks_useAutosizeTextArea),
  "useClickOutside": () => (/* reexport */ hooks_useClickOutside),
  "useDebounce": () => (/* reexport */ hooks_useDebounce),
  "useInterval": () => (/* reexport */ hooks_useInterval),
  "useKeyPress": () => (/* reexport */ hooks_useKeyPress),
  "useThrottle": () => (/* reexport */ hooks_useThrottle),
  "useWindowScroll": () => (/* reexport */ hooks_useWindowScroll)
});

;// CONCATENATED MODULE: ./src/libs/easing.ts
/*
 * All easing functions
 * @link: https://easings.net
 * @param {number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
 * @param {number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
 * @param {number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
 * @param {number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
 * @return {number}
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
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
function easeOutBack(t, b, c, d) {
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
function easeInOutBack(t, b, c, d) {
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}

;// CONCATENATED MODULE: ./src/libs/init-default-options.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
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
 * @param {*} str 
 * @returns 
*/
function isValidNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!  
  if (!isNaN(Number(str)) &&
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
 * @param {*} str 
 * @returns 
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

;// CONCATENATED MODULE: ./src/libs/anim.ts
function anim_typeof(obj) { "@babel/helpers - typeof"; return anim_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, anim_typeof(obj); }



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
  if (anim_typeof(curElement) === ( true ? "undefined" : 0)) return;

  // Set a default configuration
  config = setDefaultOptions({
    "startHeight": 0,
    // node.scrollHeight
    "endHeight": 0,
    "speed": 200 //ms
  }, config);
  var _endHeight = config.endHeight;
  var _speed = config.speed;
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
      requestId = window.requestAnimationFrame(loop);
    } else {
      // change height
      curElement.style.height = _endHeight + 'px';
      if (typeof callback === 'function') callback();
      window.cancelAnimationFrame(requestId);
    }
  };
  requestId = window.requestAnimationFrame(loop);
}
/* harmony default export */ const anim = (animateStyles);
;// CONCATENATED MODULE: ./src/libs/performance.ts
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
    clearTimeout(timer);
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

;// CONCATENATED MODULE: ./src/libs/dom.ts
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
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
function isRootElement(element) {
  return element.matches('html,body');
}
function getDocument(node) {
  if (typeof node === 'undefined') {
    return document;
  } else {
    return node.ownerDocument;
  }
}
function isNode(value) {
  return value instanceof Node;
}
function isElement(value) {
  return value instanceof Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot;
}

/* console.log(nodeContains(document.body, document.getElementById('obj'))) */
function nodeContains(parent, child) {
  var _child$getRootNode;
  if (!parent || !child) {
    return false;
  }
  var rootNode = (_child$getRootNode = child.getRootNode) === null || _child$getRootNode === void 0 ? void 0 : _child$getRootNode.call(child);

  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
  }

  // then fallback to custom implementation with Shadow DOM support
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      // @ts-ignore
      next = next.parentNode || next.host;
    }
  }

  // Give up, the result is false
  return false;
}

;// CONCATENATED MODULE: ./src/libs/get-element-property.ts
function get_element_property_typeof(obj) { "@babel/helpers - typeof"; return get_element_property_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, get_element_property_typeof(obj); }
/**
 * Get the -webkit-transition-duration property
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {number}    - Returns a pure number.
 */
function getTransitionDuration(el) {
  if (get_element_property_typeof(el) === ( true ? "undefined" : 0)) {
    return 0;
  }
  var style = window.getComputedStyle(el),
    duration = style.webkitTransitionDuration,
    delay = style.webkitTransitionDelay;
  if (get_element_property_typeof(duration) != ( true ? "undefined" : 0)) {
    // fix miliseconds vs seconds
    duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
    delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
    return duration;
  } else {
    return 0;
  }
}

/**
 * Get an object's absolute position on the page
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el) {
  var windowWidth = window.innerWidth,
    leftPos = null,
    topPos = null;
  var pEl = el.parentElement;
  if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
    leftPos = el.offsetLeft == 0 ? pEl.offsetLeft : el.offsetLeft;
    topPos = el.offsetTop == 0 ? pEl.offsetTop : el.offsetTop;
  } else {
    // width and height in pixels, including padding and border
    // Corresponds to outerWidth(), outerHeight()
    leftPos = el.offsetLeft == 0 ? windowWidth - (pEl.offsetLeft + pEl.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
    topPos = el.offsetTop == 0 ? windowWidth - (pEl.offsetTop + pEl.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
  }
  return {
    'left': leftPos,
    'top': topPos
  };
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left. 
 */
function getOffset(el) {
  var res = {
    top: 0,
    left: 0
  };
  var box = el.getBoundingClientRect();
  var top = 0,
    left = 0;

  //Include scrollbar and border
  top = box.top + window.pageYOffset - document.documentElement.clientTop;
  left = box.left + window.pageXOffset - document.documentElement.clientLeft;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el) {
  var res = {
    top: 0,
    left: 0
  };
  var top = el.offsetTop ? el.offsetTop : 0,
    left = el.offsetLeft ? el.offsetLeft : 0;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the absolute position of the stage element
 * 
 * @param {HTMLElement} domElement  - A DOM node
 * @param {number | string} left     - left offset
 * @param {number | string} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!parseInt(left)) {
    left = 0;
  } else {
    left = parseInt(left);
  }
  if (!parseInt(top)) {
    top = 0;
  } else {
    top = parseInt(top);
  }
  var box = domElement.getBoundingClientRect();
  var body = document.body;
  var docElem = document.documentElement;
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  var attr = {};
  attr.y = box.top + scrollTop - clientTop + top;
  attr.x = box.left + scrollLeft - clientLeft + left;
  attr.width = box.width;
  attr.height = box.height;
  return attr;
}

;// CONCATENATED MODULE: ./src/libs/tree.ts
function tree_typeof(obj) { "@babel/helpers - typeof"; return tree_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, tree_typeof(obj); }
var _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return tree_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (tree_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (tree_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function tree_toConsumableArray(arr) { return tree_arrayWithoutHoles(arr) || tree_iterableToArray(arr) || tree_unsupportedIterableToArray(arr) || tree_nonIterableSpread(); }
function tree_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tree_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tree_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tree_arrayLikeToArray(o, minLen); }
function tree_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function tree_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return tree_arrayLikeToArray(arr); }
function tree_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Convert Tree
 * @param {Array} arr                    - Flat array
 * @param  {?string | ?number} parentId  - Parent id
 * @param  {?string} keyId               - Key value of id.
 * @param  {?string} keyParentId         - Key value of parent id.
 * @returns Array
 */
function convertTree(arr) {
  var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var keyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var keyParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'parent_id';
  if (!parentId) {
    // If there is no parent id (when recursing for the first time), all parents will be queried
    return arr.filter(function (item) {
      return !item[keyParentId];
    }).map(function (item) {
      // Query all child nodes by parent node ID
      item.children = convertTree(arr, item[keyId], keyId, keyParentId);
      return item;
    });
  } else {
    return arr.filter(function (item) {
      return item[keyParentId] === parentId;
    }).map(function (item) {
      // Query all child nodes by parent node ID
      item.children = convertTree(arr, item[keyId], keyId, keyParentId);
      return item;
    });
  }
}

/**
 * Flat tree
 * @param {Array} arr                    - Hierarchical array
 * @returns Array
 */
function flatTree(arr) {
  var flatData = function flatData(_ref) {
    var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    var _rest$children = rest.children,
      children = _rest$children === void 0 ? [] : _rest$children;
    return [_objectSpread({}, rest)].concat(tree_toConsumableArray(children.flatMap(flatData)));
  };
  var result = arr.flatMap(flatData);

  //remove children from item
  result = result.map(function (item) {
    delete item.children;
    return item;
  });
  return result;
}

/**
 * Get all depth
 * @param {Object} node 
 * @returns Number
 */
function getAllDepth(arr) {
  var count = function count(children) {
    return children.reduce(function (depth, child) {
      return Math.max(depth, 1 + count(child.children)); // increment depth of children by 1, and compare it with accumulated depth of other children within the same element
    }, 0); //default value 0 that's returned if there are no children
  };

  return count(arr);
}

/**
* Add depth to each item in the tree
* @param {Array} arr       - Hierarchical array
* @param  {?string} keyId               - Key value of id.
* @param  {?string} keyParentId         - Key value of parent id.
* @param  {?number} depth               - Depth of the item.
* @returns Number
*/
function addTreeDepth(arr) {
  var keyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var parentItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return arr.reduce(function (acc, el) {
    var children = el.children,
      otherProps = _objectWithoutProperties(el, _excluded);
    acc.push(_objectSpread(_objectSpread({}, otherProps), {}, {
      parentItem: parentItem,
      depth: depth
    }));
    if (children) {
      return acc.concat(addTreeDepth(children, keyId, el[keyId], depth + 1));
    }
    return acc;
  }, []);
}

/**
 * Add indent placeholder
 * @param {Array} arr                    - Flat array
 * @param  {?string} placeholder         - String of placeholder
 * @param  {?string} lastPlaceholder     - Last String of placeholder
 * @param  {?string} keyName             - Key value of name.
 * @returns Array
 */
function addTreeIndent(arr) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&nbsp;&nbsp;&nbsp;&nbsp;';
  var lastPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var keyName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'label';
  arr.forEach(function (item) {
    var indent = '';
    if (item.depth) {
      Array(item.depth).fill(0).forEach(function (k, i) {
        indent += placeholder;
        if (i === item.depth - 1) {
          item[keyName] = indent + lastPlaceholder + item[keyName];
        }
      });
    }
  });
}

;// CONCATENATED MODULE: ./src/libs/buffer.ts
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == buffer_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function buffer_typeof(obj) { "@babel/helpers - typeof"; return buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, buffer_typeof(obj); }
/**
 * base64 to ArrayBuffer
 * @param {String} data 
 * @returns {ArrayBuffer}
 */
/*
@returns:

ArrayBuffer(522240)

    byteLength: 522240
    detached: false
    maxByteLength: 522240
    resizable: false
    [[Prototype]]: ArrayBuffer
    [[Int8Array]]: Int8Array(522240)
    [[Uint8Array]]: Uint8Array(522240)
    [[Int16Array]]: Int16Array(261120)
    [[Int32Array]]: Int32Array(130560)
    [[ArrayBufferByteLength]]: 522240
    [[ArrayBufferData]]: 673
*/
function base64ToArrayBuffer(data) {
  var res = data;
  if (data.indexOf('base64,') >= 0) {
    res = data.split('base64,')[1];
  }
  var binaryString = atob(res);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * ArrayBuffer to Uint8Array
 * @param {ArrayBuffer} data 
 * @returns {Uint8Array}
 */
/*
@returns:

Uint8Array(522240) [208, 207, 17, 224, 161, 177, 26, 225, 0, 0, ......]
*/
function arrayBufferToUint8Array(data) {
  return new Uint8Array(data);
}

/**
 * uint8array to array
 * @param {Uint8Array} data 
 * @returns {Array}
 */
function uint8arrayToArr(data) {
  return Array.from(data);
}

/**
 * array to uint8array
 * @param {Array} data 
 * @returns {Uint8Array}
 */
/* Example:

axios({
    method: 'get',
    url: 'http://xxxx',
    responseType: 'arraybuffer'
})
.then(function (res) {
    //res.data ==>  ArrayBuffer(xxxx)
    const b64string = uint8arrayToBase64Str(res.data);
    const uint8ArrayData = arrayToUint8array(res.data);
    
    // do something

});
*/
function arrayToUint8array(data) {
  return new Uint8Array(data);
}

/**
 * uint8array to base64 string
 * @param {Uint8Array|Array} data 
 * @returns {String}
 */
function uint8arrayToBase64Str(data) {
  if ((typeof Buffer === "undefined" ? "undefined" : buffer_typeof(Buffer)) !== ( true ? "undefined" : 0)) {
    return Buffer.from(data, 'binary').toString('base64'); // node.js too
  } else {
    var binary = '';
    var bytes = new Uint8Array(data);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}

/**
 * decode base64 string
 * @param {String} data 
 * @returns {String}
 */
function decodeBase64Str(data) {
  // avoid messy code
  // especially for Chinese, avoid using encodeURIComponent() and encodeURI()
  var decoded = decodeURIComponent(escape(atob(data)));
  return decoded;
}

/**
 * integer to binary
 * @param {Number} data 
 * @returns {String}
 */
function toBinary(data) {
  if (!Number.isSafeInteger(data)) {
    throw new TypeError('value must be a safe integer');
  }
  return (data >>> 0).toString(2);
}

/**
 * array to blob
 * @param {Uint8Array} uint8ArrayData 
 * @returns {Blob}
 */
function arrayToBlob(uint8ArrayData) {
  return new Blob([uint8ArrayData], {
    type: "text/plain"
  });
}

/**
 * blob to uint8array
 * @param {Blob} data 
 * @returns {Uint8Array}
 */
function blobToUint8array(data) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener("loadend", function () {
      resolve(reader.result);
    });
    reader.readAsArrayBuffer(data);
  });
}

/**
 * array to stream
 * @param {Array<Uint8Array>} data 
 * @returns {ReadableStream }
 */
/* Example:

const uint8ArrayDataArr = [
    [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,30,0,0,0,30,8,6,0,0,0,59,48,174,162,0,0,0,220,73,68,65,84,72,199,237,214,81,14,194,32,12,0,80,60,128,215,219,49,28,91,118,10,55,216,53,188,132,137,39,19,71,130,75,69,42,148,194,76,116,31,253,89,40,111,233,104,153,48,198,136,111,132,216,225,255,134,143,151,166,84,28,150,152,151,24,158,207,182,130,45,106,92,12,91,193,16,93,241,218,112,8,181,113,174,9,163,232,90,234,130,223,50,134,142,47,135,11,36,216,183,57,49,81,29,67,125,120,116,11,238,12,60,9,133,240,228,45,180,120,91,11,133,112,31,72,176,184,100,162,19,150,3,75,157,139,147,209,208,225,234,136,184,202,65,177,118,146,200,102,178,20,250,169,143,49,188,43,129,198,6,136,116,101,246,55,191,33,168,162,116,65,108,114,97,56,11,77,29,153,109,4,87,57,195,38,117,86,95,75,162,20,56,84,114,205,153,233,148,219,9,226,154,123,131,81,175,69,201,41,239,27,188,255,222,254,52,252,0,234,253,186,89,222,225,73,252,0,0,0,0,73,69,78,68,174,66,96,130]
];
const readableStream = arrayToStream(uint8ArrayDataArr);  

*/
function arrayToStream(data) {
  // @return --> ReadableStream {locked: false}
  return new ReadableStream({
    start: function start(controller) {
      // push a chunk
      data.forEach(function (chunk) {
        controller.enqueue(new Uint8Array(chunk));
      });
    },
    pull: function pull(controller) {
      // Called `read()` when the controller's queue is empty.
      //controller.enqueue(...);
      controller.close();
    },
    cancel: function cancel(reason) {
      // Called when the stream is canceled.
    }
  });
}

/**
 * read stream
 * @param {ReadableStream } data 
 * @returns {Promise}
 */
/* Example:

readStream(readableStream).then((value) => {
    console.log(value);
    // iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA3ElEQVRIx+3WUQ7CIAwAUDyA19sxHFt2CjfYNbyEiScTR4JLRSqUwkx0H/1ZKG/paJkwxohvhNjh/4aPl6ZUHJaYlxiez7aCLWpcDFvBEF3x2nAItXGuCaPoWuqC3zKGji+HCyTYtzkxUR1DfXh0C+4MPAmF8OQttHhbC4VwH0iwuGSiE5YDS52Lk9HQ4eqIuMpBsXaSyGayFPqpjzG8K4HGBoh0ZfY3vyGoonRBbHJhOAtNHZltBFc5wyZ1Vl9LohQ4VHLNmemU2wnimnuDUa9FySnvG7z/3v40/ADq/bpZ3uFJ/AAAAABJRU5ErkJggg==
    
    // test: <img src="data:image/png;base64,iVBORw0KGgo..." >
     
});
*/
function readStream(_x) {
  return _readStream.apply(this, arguments);
}
function _readStream() {
  _readStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
    var resReceived, stream, readInto;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          resReceived = '';
          stream = data; // ReadableStream {locked: false}
          readInto = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
              var reader, pump, _pump;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _pump = function _pump3() {
                      _pump = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var _yield$reader$read, done, value, base64String;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return reader.read();
                            case 2:
                              _yield$reader$read = _context.sent;
                              done = _yield$reader$read.done;
                              value = _yield$reader$read.value;
                              if (!done) {
                                _context.next = 7;
                                break;
                              }
                              return _context.abrupt("return");
                            case 7:
                              // value for fetch streams is a Uint8Array
                              base64String = uint8arrayToBase64Str(value);
                              resReceived += base64String;
                              return _context.abrupt("return", pump());
                            case 10:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                      return _pump.apply(this, arguments);
                    };
                    pump = function _pump2() {
                      return _pump.apply(this, arguments);
                    };
                    reader = stream.getReader();
                    return _context2.abrupt("return", pump());
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function readInto(_x2) {
              return _ref.apply(this, arguments);
            };
          }();
          _context3.next = 5;
          return readInto(stream);
        case 5:
          return _context3.abrupt("return", resReceived);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _readStream.apply(this, arguments);
}

;// CONCATENATED MODULE: ./src/libs/convert.ts
/**
 * Convert value to string separated by square brackets 
 * @param {string} str  such as: 1,2,3
 * @returns {string} such as: [1][2][3]
 */
function convertStringByCommaToValByBrackets(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return '';
  }
  return str.split(',').map(function (v) {
    return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
  }).join('');
}

/**
 * Convert array value to string  separated by square brackets 
 * @param {string[]} arr  such as: ['1','2','3']
 * @returns {string} such as: [1][2][3]
 */
function convertArrToValByBrackets(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(function (v) {
    return v.toString().includes('[') && v.toString().includes(']') ? "".concat(v) : "[".concat(v, "]");
  }).join('');
}

/**
 * Convert value to string separated by curly braces
 * @param {string} str  such as: 1,2,3
 * @returns {string} such as: {1}{2}{3}
 */
function convertStringByCommaToValByBraces(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return '';
  }
  return str.split(',').map(function (v) {
    return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
  }).join('');
}

/**
 * Convert array value to string  separated by curly braces
 * @param {string[]} arr  such as: ['1','2','3']
 * @returns {string} such as: {1}{2}{3}
 */
function convertArrToValByBraces(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(function (v) {
    return v.toString().includes('{') && v.toString().includes('}') ? "".concat(v) : "{".concat(v, "}");
  }).join('');
}

;// CONCATENATED MODULE: ./src/libs/extract.ts
/**
 * Extract the contents of square brackets
 * @param {string} str    =>  input string. such as '[1,2] [f][c]'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBrackets(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\[]+(?=(\[ \])|\])/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of curly braces
 * @param {string} str    =>  input string. such as '{1,2} {f}{c}'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBraces(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\{]+(?=(\{ \})|\})/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

/**
 * Extract the contents of parentheses
 * @param {string} str    =>  input string. such as '(1,2) (f)(c)'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfParentheses(str) {
  var commaSeparated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str === 'undefined' || str === null || str === '') {
    return !commaSeparated ? [] : '';
  }
  var res = str.match(/[^\(]+(?=(\( \))|\))/g);
  if (commaSeparated) {
    return res === null ? '' : res.join(',').replace(/\,+$/, '');
  } else {
    return res === null ? '' : res;
  }
}

;// CONCATENATED MODULE: ./src/libs/date.ts
/**
 * Get now
 * @returns {Date}  // Wed Apr 17 2024 14:31:36 GMT+0800 (China Standard Time)
 */
var getNow = function getNow() {
  return new Date(Date.now());
};

/**
 * Zero Padding
 * @param {Number} num
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  '01', '05', '12'
 */
var padZero = function padZero(num) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (padZeroEnabled) {
    return num < 10 ? '0' + num : num.toString();
  } else {
    return num.toString();
  }
};

/**
 * Number validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isNumeric = function isNumeric(v) {
  return !isNaN(parseFloat(v)) && isFinite(v);
};

/**
 * Hours validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidHours = function isValidHours(v) {
  return /^([01]?[0-9]|2[0-3])$/.test(v); //  0～23, 00～23
};

/**
 * Minutes and Seconds validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidMinutesAndSeconds = function isValidMinutesAndSeconds(v) {
  return /^([01]?[0-9]|[0-5][0-9])$/.test(v); //  0~59, 00~59
};

/**
 * Year validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidYear = function isValidYear(v) {
  return /^([1-9][0-9])\d{2}$/.test(v); //  1000 ～ 9999
};

/**
 * Month validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidMonth = function isValidMonth(v) {
  return /^(0?[1-9]|1[0-2])$/.test(v); //  01～12, 1~12
};

/**
 * Day validation
 * @param {*} v 
 * @returns {Boolean}  
 */
var isValidDay = function isValidDay(v) {
  return /^(0?[1-9]|[1-2][0-9]|3[0-1])$/.test(v); //  01～31, 1~31
};

/**
 * Check if the string is legitimate
 * @param {String} v 
 * @returns {Boolean}  
 */
var isValidDate = function isValidDate(v) {
  return !(String(new Date(v)).toLowerCase() === 'invalid date');
};

/**
 * Get calendar date
 * @param {Date | String} v 
 * @returns {Date | String}  yyyy-MM-dd
 */
function dateFormat(v) {
  var date = typeof v === 'string' ? new Date(v.replace(/-/g, "/")) : v; // fix "Invalid date in safari"
  return date;
}

/**
 * Get calendar date
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd
 */
function getCalendarDate(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = dateFormat(v);
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1, padZeroEnabled);
  var day = padZero(date.getDate(), padZeroEnabled);
  var hours = padZero(date.getHours(), padZeroEnabled);
  var minutes = padZero(date.getMinutes(), padZeroEnabled);
  var seconds = padZero(date.getSeconds(), padZeroEnabled);
  var res = "".concat(year, "-").concat(month, "-").concat(day);
  return res;
}

/**
 * Get today date
 * @returns {String}  yyyy-MM-dd
 */
function getTodayDate() {
  return getCalendarDate(new Date());
}

/**
 * Get tomorrow date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getTomorrowDate(v) {
  var today = dateFormat(v);
  var _tomorrow = today;
  _tomorrow.setDate(_tomorrow.getDate() + 1);
  var tomorrow = getCalendarDate(_tomorrow);
  return tomorrow;
}

/**
 * Get yesterday date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getYesterdayDate(v) {
  var today = dateFormat(v);
  var _yesterday = today;
  _yesterday.setDate(_yesterday.getDate() - 1);
  var yesterday = getCalendarDate(_yesterday);
  return yesterday;
}

/**
 * Get specified date
 * @param {Date | String} v 
 * @param {Number} days  The number of days forward or backward, which can be a negative number
 * @returns {String}  yyyy-MM-dd
 */
/* console.log(getSpecifiedDate(getTodayDate(), -180)); // 2023-08-27 (180 days before February 23, 202) */
function getSpecifiedDate(v, days) {
  var today = dateFormat(v);
  var _specifiedDay = today;
  _specifiedDay.setDate(_specifiedDay.getDate() + days);
  var specifiedDay = getCalendarDate(_specifiedDay);
  return specifiedDay;
}

/**
 * Get next month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextMonthDate(v) {
  var today = dateFormat(v);
  today.setMonth(today.getMonth() + 1);
  return getCalendarDate(today);
}

/**
 * Get previous month date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevMonthDate(v) {
  var today = dateFormat(v);
  today.setMonth(today.getMonth() - 1);
  return getCalendarDate(today);
}

/**
 * Get next year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getNextYearDate(v) {
  var today = dateFormat(v);
  var current = new Date(today);
  current.setFullYear(current.getFullYear() + 1);
  return getCalendarDate(current);
}

/**
 * Get previous year date
 * @param {Date | String} v 
 * @returns {String}  yyyy-MM-dd
 */
function getPrevYearDate(v) {
  var today = dateFormat(v);
  var current = new Date(today);
  current.setFullYear(current.getFullYear() - 1);
  return getCalendarDate(current);
}

/**
 * Get last day in month
 * @param {Date | String} v 
 * @param {?Number}  targetMonth 
 * @returns {String | Number}  yyyy-MM-dd
 */
/*
Example: Get last day in  next month 

const _day = '2024-01-01';
const y = new Date(getNextMonthDate(_day)).getFullYear();
const m = String(new Date(getNextMonthDate(_day)).getMonth() + 1).padStart(2, '0');
const d = getLastDayInMonth(getNextMonthDate(_day), new Date(getNextMonthDate(_day)).getMonth() + 1);

const lastDayOfNextMonth = `${y}-${m}-${d}`; // 2024-02-29

*/
function getLastDayInMonth(v) {
  var targetMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var date = dateFormat(v);
  return new Date(date.getFullYear(), typeof targetMonth !== 'undefined' ? targetMonth : date.getMonth() - 1, 0).getDate();
}

/**
 * Get current year
 * @returns {Number}
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Get current month
 * @param {Boolean} padZeroEnabled 
 * @returns {Number}
 */
function getCurrentMonth() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var m = new Date().getMonth() + 1;
  return padZeroEnabled ? String(m).padStart(2, '0') : m;
}

/**
 * Get current day
 * @param {Boolean} padZeroEnabled 
 * @returns {Number}
 */
function getCurrentDay() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var d = new Date().getDate();
  return padZeroEnabled ? String(d).padStart(2, '0') : d;
}

/**
 * Get first and last month day
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns  {Array}
 */
function getFirstAndLastMonthDay(year) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var theFirst = new Date(year, 0, 1).getDate();
  var theLast = new Date(year, 11, 31).getDate();
  var padZero = function padZero(num) {
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  return [padZero(theFirst), padZero(theLast)];
}

/**
 * Get current date
 * @param {Boolean} padZeroEnabled 
 * @typedef {String} JSON
 */
function getCurrentDate() {
  var padZeroEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var date = new Date();
  var padZero = function padZero(num) {
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1);
  var day = padZero(date.getDate());
  var hours = padZero(date.getHours());
  var minutes = padZero(date.getMinutes());
  return {
    today: "".concat(year, "-").concat(month, "-").concat(day),
    yearStart: "".concat(year, "-01-01"),
    yearEnd: "".concat(year, "-12-").concat(getLastDayInMonth(date, 12))
  };
}

/**
 * Get full time
 * @param {Date | String} v 
 * @param {Boolean} padZeroEnabled 
 * @param {Boolean} hasSeconds 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function getFullTime(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasSeconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var padZero = function padZero(num) {
    if (padZeroEnabled) {
      return num < 10 ? '0' + num : num.toString();
    } else {
      return num.toString();
    }
  };
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1);
  var day = padZero(date.getDate());
  var hours = padZero(date.getHours());
  var minutes = padZero(date.getMinutes());
  var seconds = padZero(date.getSeconds());
  var res = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
  var res2 = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
  return hasSeconds ? res : res2;
}

/**
 * Add hours
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateHours(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Add minutes
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateMinutes(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}
/**
 * Add days
 * @param {Date | String} v 
 * @param {Number} offset
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function setDateDays(v, offset) {
  var padZeroEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var date = dateFormat(v);
  var _cur = new Date(date).setTime(new Date(date).getTime() + offset * 24 * 60 * 60 * 1000);
  return getFullTime(new Date(_cur), padZeroEnabled);
}

/**
 * Convert timestamp to date
 * @param {Number} v 
 * @param {Boolean} padZeroEnabled 
 * @returns {String}  yyyy-MM-dd HH:mm:ss
 */
function timestampToDate(v) {
  var padZeroEnabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return getFullTime(new Date(v), padZeroEnabled);
}

;// CONCATENATED MODULE: ./src/libs/object.ts
function object_typeof(obj) { "@babel/helpers - typeof"; return object_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, object_typeof(obj); }
/**
 * Deep clone
 * @param {*} obj 
 */
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (object_typeof(obj) === 'object' && obj !== null) {
    var clone = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  } else {
    return obj;
  }
}
;

/**
 * Flat Data
 * @param {*} data 
 * @returns 
 */
function flatData(data) {
  var result = [];
  var iterate = function iterate(obj) {
    if (!obj) {
      return;
    }
    obj.forEach(function (item) {
      result.push(item);
      if (item.children) {
        iterate(item.children);
      }

      // delete current item children
      delete item.children;
    });
  };
  iterate(data);
  return result;
}
;

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
;// CONCATENATED MODULE: ./src/hooks/useThrottle.tsx
/**
 * Limiting the rate of execution
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useThrottle(() => setCount(count + 1), 500, [count]);

    return (
        <div className="app">
            <button onClick={handleClick}>click</button>
            <p>click {count} time</p>
        </div>
    );
};

 */

var useThrottle = function useThrottle(fn, delay, dependence) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    lastTime: 0
  });
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    var now = Date.now();
    if (now - ref.current.lastTime >= delay) {
      fn.apply(void 0, arguments);
      ref.current.lastTime = now;
    }
  }, dependence);
};
/* harmony default export */ const hooks_useThrottle = (useThrottle);
;// CONCATENATED MODULE: ./src/hooks/useDebounce.tsx
/**
 * Delay the execution of function or state update
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useDebounce(() => setCount(count + 1), 500, [count]);

    return (
        <div className="app">
            <button onClick={handleClick}>click</button>
            <p>click {count} time</p>
        </div>
    );
};

 */


var useDebounce = function useDebounce(fn, delay, dependence) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(ref.current);
    ref.current = null;
    ref.current = setTimeout(function () {
      fn.apply(void 0, args);
    }, delay);
  }, dependence);
};
/* harmony default export */ const hooks_useDebounce = (useDebounce);
;// CONCATENATED MODULE: ./src/hooks/useAutosizeTextArea.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useAutosizeTextArea_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useAutosizeTextArea_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useAutosizeTextArea_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAutosizeTextArea_arrayLikeToArray(o, minLen); }
function useAutosizeTextArea_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Creating a Textarea with dynamic height
 * 
 * @usage:


const App = () => {
    const [value, setValue] = useState("");
    const el = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(
        el.current, 
        value,
        (res) => {
            onResize?.(event, valRef.current, res);
        }
    );

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

var useAutosizeTextArea = function useAutosizeTextArea(props) {
  var el = props.el,
    value = props.value,
    cb = props.cb;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    defaultRowHeight = _useState2[0],
    setDefaultRowHeight = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultRowHeightInit = _useState4[0],
    setDefaultRowHeightInit = _useState4[1];
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (el.current) {
      var style = el.current.currentStyle || window.getComputedStyle(el.current);
      var _controlWidth = el.current.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);

      // initialize default row height
      if (el.current.scrollHeight > 0 && !defaultRowHeightInit) {
        setDefaultRowHeight(el.current.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth));
        setDefaultRowHeightInit(true);
      }

      // restore default row height
      if (defaultRowHeight > 0) {
        el.current.style.height = defaultRowHeight + "px";
      }

      // reset the height momentarily to get the correct scrollHeight for the textarea
      var scrollHeight = el.current.scrollHeight;

      // then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.

      // !!! Compare initial height and changed height
      if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
        el.current.style.height = scrollHeight + "px";
      }
      cb === null || cb === void 0 ? void 0 : cb([_controlWidth, scrollHeight]);
    }
  }, [el, value]);
};
/* harmony default export */ const hooks_useAutosizeTextArea = (useAutosizeTextArea);
;// CONCATENATED MODULE: ./src/hooks/useInterval.tsx
/**
 * Provides a convenient way to create and manage intervals
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div className="app"></div>
    );
};

 */

var useInterval = function useInterval(fn, delay) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    ref.current = fn;
  }, [fn]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    function tick() {
      ref.current && ref.current();
    }
    if (delay !== null && delay > 0) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    } else {
      tick();
    }
  }, [delay]);
};
/* harmony default export */ const hooks_useInterval = (useInterval);
;// CONCATENATED MODULE: ./src/hooks/useClickOutside.tsx
function useClickOutside_toConsumableArray(arr) { return useClickOutside_arrayWithoutHoles(arr) || useClickOutside_iterableToArray(arr) || useClickOutside_unsupportedIterableToArray(arr) || useClickOutside_nonIterableSpread(); }
function useClickOutside_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useClickOutside_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useClickOutside_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useClickOutside_arrayLikeToArray(o, minLen); }
function useClickOutside_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useClickOutside_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useClickOutside_arrayLikeToArray(arr); }
function useClickOutside_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Handles the event of clicking outside of the wrapped component
 * 
 * @usage:

const App = () => {
    useClickOutside({
        enabled: true,
        isOutside: (event: any) => {
            return event.target.closest(`.test__wrapper`) === null && event.target.closest(`.test__wrapper2`) === null;
        },
        handle: (event: any) => {
            // do something
            //...
        },
        spyElement: document
    }, []);
};

 */

function useClickOutside(_ref, deps) {
  var enabled = _ref.enabled,
    isOutside = _ref.isOutside,
    handle = _ref.handle,
    _ref$spyElement = _ref.spyElement,
    spyElement = _ref$spyElement === void 0 ? document : _ref$spyElement;
  var isOutsideRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(isOutside);
  var handleRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(handle);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    isOutsideRef.current = isOutside;

    // fix possible issue if clicking on a focusable element
    handleRef.current = handle;
  }, [isOutside, handle]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      var eventHandler = function eventHandler(event) {
        var _isOutsideRef$current;
        if ((_isOutsideRef$current = isOutsideRef.current) !== null && _isOutsideRef$current !== void 0 && _isOutsideRef$current.call(isOutsideRef, event)) {
          var _handleRef$current;
          (_handleRef$current = handleRef.current) === null || _handleRef$current === void 0 ? void 0 : _handleRef$current.call(handleRef, event);
        }
      };
      spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('pointerdown', eventHandler);
      return function () {
        spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('pointerdown', eventHandler);
      };
    }
  }, [enabled].concat(useClickOutside_toConsumableArray(deps)));
}
/* harmony default export */ const hooks_useClickOutside = (useClickOutside);
;// CONCATENATED MODULE: ./src/hooks/useKeyPress.tsx
function useKeyPress_slicedToArray(arr, i) { return useKeyPress_arrayWithHoles(arr) || useKeyPress_iterableToArrayLimit(arr, i) || useKeyPress_unsupportedIterableToArray(arr, i) || useKeyPress_nonIterableRest(); }
function useKeyPress_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useKeyPress_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useKeyPress_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useKeyPress_arrayLikeToArray(o, minLen); }
function useKeyPress_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useKeyPress_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useKeyPress_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Listens for changes in the pressed state of a given key
 * 
 * @usage:

const App = () => {
    const escPressed = useKeyPress({
        keyCode: 'Escape',
        handleUp: (key, event) => { },
        handleDown: async (key, event) => {
            // do something
            event.preventDefault();
            // await xxxxx();
            console.log(key);
        },
        spyElement: window,
    }, []);

    const multiplePressed = useKeyPress({
        keyCode: ['ArrowUp', 'ArrowDown', 'Enter', 'NumpadEnter'],
        handleUp: (key, event) => { },
        handleDown: (key, event) => {
            // do something
            event.preventDefault();
            console.log(key);
        },
        spyElement: window
    }, [myDep1, myDep2]);


    return (
        <div className="app">{escPressed ? 'Escape' : null}</div>
    );
};

 */


var useKeyPress = function useKeyPress(_ref, deps) {
  var keyCode = _ref.keyCode,
    handleDown = _ref.handleDown,
    handleUp = _ref.handleUp,
    _ref$spyElement = _ref.spyElement,
    spyElement = _ref$spyElement === void 0 ? window : _ref$spyElement;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = useKeyPress_slicedToArray(_useState, 2),
    keyPressed = _useState2[0],
    setKeyPressed = _useState2[1];
  var multipleKeys = Array.isArray(keyCode);
  var eventHandlerDown = function eventHandlerDown(event) {
    var key = event.code;
    if (multipleKeys) {
      if (keyCode.includes(key)) {
        setKeyPressed(true);
        if (typeof handleDown === 'function') handleDown(key, event);
      }
    } else {
      if (key === keyCode) {
        setKeyPressed(true);
        if (typeof handleDown === 'function') handleDown(key, event);
      }
    }
  };
  var eventHandlerUp = function eventHandlerUp(event) {
    var key = event.code;
    if (multipleKeys) {
      if (keyCode.includes(key)) {
        setKeyPressed(false);
        if (typeof handleUp === 'function') handleUp(key, event);
      }
    } else {
      if (key === keyCode) {
        setKeyPressed(false);
        if (typeof handleUp === 'function') handleUp(key, event);
      }
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keydown', eventHandlerDown);
    spyElement === null || spyElement === void 0 ? void 0 : spyElement.addEventListener('keyup', eventHandlerUp);
    return function () {
      spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keydown', eventHandlerDown);
      spyElement === null || spyElement === void 0 ? void 0 : spyElement.removeEventListener('keyup', eventHandlerUp);
    };
  }, deps);
  return keyPressed;
};
/* harmony default export */ const hooks_useKeyPress = (useKeyPress);
;// CONCATENATED MODULE: ./src/hooks/useWindowScroll.tsx
function useWindowScroll_slicedToArray(arr, i) { return useWindowScroll_arrayWithHoles(arr) || useWindowScroll_iterableToArrayLimit(arr, i) || useWindowScroll_unsupportedIterableToArray(arr, i) || useWindowScroll_nonIterableRest(); }
function useWindowScroll_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useWindowScroll_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useWindowScroll_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWindowScroll_arrayLikeToArray(o, minLen); }
function useWindowScroll_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useWindowScroll_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useWindowScroll_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Listens for scrolls the window to a particular place in the document
 * 
 * @usage:

const App = () => {
    const [scrollData, windowScrollUpdate] = useWindowScroll({
        performance: ['debounce', 500],   // "['debounce', 500]" or "['throttle', 500]"
        handle: (scrollData) => {
            // do something
            console.log(scrollData);
        }
    });
};

 */


var useWindowScroll = function useWindowScroll(_ref) {
  var performance = _ref.performance,
    handle = _ref.handle;
  var windowScrollUpdate;
  var _performance = useWindowScroll_slicedToArray(performance, 2),
    performanceName = _performance[0],
    performanceLimit = _performance[1];
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
      x: 0,
      y: 0
    }),
    _useState2 = useWindowScroll_slicedToArray(_useState, 2),
    scrollData = _useState2[0],
    setScrollData = _useState2[1];
  var eventHandlerScroll = function eventHandlerScroll(e) {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var res = {
      x: left,
      y: top
    };
    setScrollData(res);
    if (typeof handle === "function") handle(res);
  };
  if (performanceName === "debounce") windowScrollUpdate = debounce(eventHandlerScroll, parseFloat(performanceLimit));
  if (performanceName === "throttle") windowScrollUpdate = throttle(eventHandlerScroll, parseFloat(performanceLimit));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    window.addEventListener("scroll", windowScrollUpdate);
    window.addEventListener("touchmove", windowScrollUpdate);
    return function () {
      window.removeEventListener("scroll", windowScrollUpdate);
      window.removeEventListener("touchmove", windowScrollUpdate);
    };
  }, []);
  return [scrollData, windowScrollUpdate];
};
/* harmony default export */ const hooks_useWindowScroll = (useWindowScroll);
;// CONCATENATED MODULE: ./src/index.tsx













// hooks









})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});