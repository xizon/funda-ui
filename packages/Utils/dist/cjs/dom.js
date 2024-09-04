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
/* harmony export */   "getAllSiblings": () => (/* binding */ getAllSiblings),
/* harmony export */   "getChildren": () => (/* binding */ getChildren),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getNextSiblings": () => (/* binding */ getNextSiblings),
/* harmony export */   "getParents": () => (/* binding */ getParents),
/* harmony export */   "getPreviousSiblings": () => (/* binding */ getPreviousSiblings),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isRootElement": () => (/* binding */ isRootElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot),
/* harmony export */   "nodeContains": () => (/* binding */ nodeContains)
/* harmony export */ });
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

/******/ 	return __webpack_exports__;
/******/ })()
;
});