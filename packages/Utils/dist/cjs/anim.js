(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory();
	else
		root["RPB"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easeInOutQuad": () => (/* binding */ easeInOutQuad),
/* harmony export */   "easeInQuad": () => (/* binding */ easeInQuad),
/* harmony export */   "easeLinear": () => (/* binding */ easeLinear),
/* harmony export */   "easeOutQuad": () => (/* binding */ easeOutQuad)
/* harmony export */ });
/* unused harmony exports easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack */
/*
 * All easing functions
 * @link: https://easings.net
 * @param {Number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
 * @param {Number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
 * @param {Number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
 * @param {Number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
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


/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
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
  if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(props)) {
    var defaultConfigValues = Object.values(props);
    Object.keys(props).forEach(function (prop, index) {
      // Well-formed string type
      Object.keys(options).forEach(function (prop2, index2) {
        if (prop2 === prop) {
          var _v = options[prop2];
          if (_v == 'true') _v = true;
          if (_v == 'false') _v = false;
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isValidNumeric)(_v)) _v = parseFloat(_v);
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
          options[prop2] = _v;
        }
      });

      //
      if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
    });
  }
  return options;
}


/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "isValidNumeric": () => (/* binding */ isValidNumeric)
/* harmony export */ });
/* unused harmony exports isEmpty, isNumber, isInt, isEmail, isTel, isMobile */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Check if a string is a valid number
 * @param str - The string to check
 * @returns boolean indicating if the string is a valid number
 */
function isValidNumeric(str) {
  if (typeof str !== "string") return false; // we only process strings!
  if (!isNaN(Number(str)) &&
  // use type coercion to parse the _entirety_ of the string
  !isNaN(parseFloat(str)) // ensure strings of whitespace fail
  ) {
    return true;
  }
  return false;
}

/**
 * Determine whether it is in JSON format
 * @param str - The value to check
 * @returns boolean indicating if the value is valid JSON
 */
function isJSON(str) {
  if (typeof str === 'string' && str.length > 0) {
    if (str.replace(/\"\"/g, '').replace(/\,/g, '') === '[{}]') {
      return false;
    }
    if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    }
    return false;
  }
  if (_typeof(str) === 'object' && Object.prototype.toString.call(str) === '[object Object]' && !str.length) {
    return true;
  }
  return false;
}

/**
 * Check if input is empty
 * @param input - The input to check (string or array of strings)
 * @returns boolean indicating if the input is empty
 */
function isEmpty(input) {
  if (Array.isArray(input)) {
    return input.some(function (str) {
      return !str.replace(/\s/g, '').length === true;
    });
  }
  return !input.replace(/\s/g, '').length === true;
}

/**
 * Check if input is a valid number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid number
 */
function isNumber(input) {
  var reg = /^[\d|\.|,]+$/;
  return reg.test(input);
}

/**
 * Check if input is a valid integer
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid integer
 */
function isInt(input) {
  if (input === "") {
    return false;
  }
  var reg = /\D+/;
  return !reg.test(input);
}

/**
 * Check if input is a valid email address
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid email
 */
function isEmail(input) {
  var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
  return reg.test(input);
}

/**
 * Check if input is a valid telephone number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid telephone number
 */
function isTel(input) {
  var reg = /^[0-9- ]{7,20}$/;
  return reg.test(input);
}

/**
 * Check if input is a valid mobile number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid mobile number
 */
function isMobile(input) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(input);
}


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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(357);
/* harmony import */ var _initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



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
  config = (0,_initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__.setDefaultOptions)({
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
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
        break;
      case "ease-in":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeInQuad)(time, from, to - from, duration);
        break;
      case "ease-out":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeOutQuad)(time, from, to - from, duration);
        break;
      case "ease-in-out":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeInOutQuad)(time, from, to - from, duration);
        break;
      default:
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateStyles);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});