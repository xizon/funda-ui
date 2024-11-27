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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actualPropertyValue": () => (/* binding */ actualPropertyValue),
/* harmony export */   "getTextWidth": () => (/* binding */ getTextWidth)
/* harmony export */ });
/**
* Get the actual value with user specific methed
* it can be 'width', 'height', 'outerWidth', 'outerHeight'
* @private
* @param {Element} el           - A DOM node containing one selector to match against.
* @param {String} prop          - A string naming the property of style.
* @param {?Json} config         - Whether or not margin is included. The key `includeMargin` 
                                    takes effect when set to true
* @return {Number}              - Returns a pure number.
*/
function actualPropertyValue(el, prop) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  if (el === null) return 0;
  var style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle,
    display = style.display,
    position = style.position,
    visibility = style.visibility;
  var marginWidth = 0;
  var marginHeight = 0;
  var maxVal;
  var actualVal;
  if (config && config.includeMargin === true) {
    marginWidth = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    marginHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  }
  if (prop === 'fontSize') {
    actualVal = parseFloat(style.fontSize);
  }
  if (prop === 'fontFamily') {
    actualVal = style.fontFamily;
  }
  if (prop === 'letterSpacing') {
    actualVal = style.letterSpacing;
  }
  if (prop === 'width') {
    maxVal = parseFloat(style.maxWidth);

    // if its not hidden we just return normal height
    if (display !== 'none' && maxVal !== 0) {
      return el.clientWidth;
    }
  }
  if (prop === 'height') {
    maxVal = parseFloat(style.maxHeight);
    if (display !== 'none' && maxVal !== 0) {
      return el.clientHeight;
    }
  }
  if (prop === 'outerWidth') {
    maxVal = parseFloat(style.maxWidth);
    if (display !== 'none' && maxVal !== 0) {
      return el.offsetWidth + marginWidth;
    }
  }
  if (prop === 'outerHeight') {
    maxVal = parseFloat(style.maxHeight);
    if (display !== 'none' && maxVal !== 0) {
      return el.offsetHeight + marginHeight;
    }
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.display = 'block';
  if (prop === 'width') actualVal = el.clientWidth;
  if (prop === 'height') actualVal = el.clientHeight;
  if (prop === 'outerWidth') actualVal = el.offsetWidth + marginWidth;
  if (prop === 'outerHeight') actualVal = el.offsetHeight + marginHeight;

  // reverting to the original values
  el.style.display = display;
  el.style.position = position;
  el.style.visibility = visibility;
  return actualVal;
}
function getElCSS(input, prop, isNumber) {
  var _document$defaultView;
  var val = (_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.getComputedStyle(input, null).getPropertyValue(prop);
  return isNumber ? isNaN(parseFloat(val)) ? 0 : parseFloat(val) : val;
}

/**
 * Get cursor or text position in pixels for input element
 * 
 * @param {HTMLInputElement} input  Required HTMLElement with `value` attribute
 * @param {HTMLSpanElement} fauxContainer  Container of faux.
     * @param {HTMLElement} rawTextContainer  The raw text container for the comparison
 * @returns {Number}
 */

function getTextWidth(input, fauxContainer, rawTextContainer) {
  if (input === null || fauxContainer === null || rawTextContainer === null) return 0;
  var _off = input.selectionStart;
  var _faux = fauxContainer;
  var _fauxContainer = rawTextContainer;
  if (_faux && _fauxContainer) {
    // Styles to simulate a node in an input field
    // use pre-wrap instead of wrap for white-space to support wrapping in textareas
    var listOfModifiers = ['direction', 'font-family', 'font-size', 'font-size-adjust', 'font-variant', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-align', 'text-indent', 'text-transform', 'word-wrap', 'word-spacing'];

    // default styles
    _faux.style.setProperty('white-space', 'pre-wrap');
    _faux.style.setProperty('padding', '0');
    _faux.style.setProperty('margin', '0');
    _faux.style.setProperty('display', 'none');
    for (var i = 0; i < listOfModifiers.length; i++) {
      var propertyValue = getElCSS(_fauxContainer, listOfModifiers[i], false);
      _faux.style.setProperty(listOfModifiers[i], propertyValue);
    }
    _faux.textContent = input.value.substring(0, _off).replace(/\s/g, "\xA0");
    return actualPropertyValue(_faux, 'outerWidth');
  }
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});