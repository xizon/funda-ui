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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Drag & Drop Element
 * 
 * @usage:


const App = () => {
    const {
        dragContentHandle, 
        dragHandle,
        resetPosition
    }: any = useDraggable({
        enabled: true,   // if `false`, drag and drop is disabled
        preventOutsideScreen: {
            xAxis: true,
            yAxis: true
        },
        onStart: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            
        },
        onDrag: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            console.log(coordinates); // {dx: -164, dy: -37}

        },
        onStop: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {

        }
    });

    const resetModal = () => {
        resetPosition?.();
    };

    return (
        <div className="container" ref={dragContentHandle}>
            <div ref={dragHandle} className="handle">Drag me</div>
            <div className="content">
                content...
            </div>
        </div>
    );
};


 */


var useDraggable = function useDraggable(_ref) {
  var enabled = _ref.enabled,
    preventOutsideScreen = _ref.preventOutsideScreen,
    onStart = _ref.onStart,
    onStop = _ref.onStop,
    onDrag = _ref.onDrag;
  var DRAG_DISABLED = typeof enabled === "undefined" || enabled === false;
  var dragging = false; // DO NOT USE 'useState()'
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    node = _useState2[0],
    setNode = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    targetNode = _useState4[0],
    setTargetNode = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      dx: 0,
      dy: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    _useState6$ = _useState6[0],
    dx = _useState6$.dx,
    dy = _useState6$.dy,
    setOffset = _useState6[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nodeEle) {
    setNode(nodeEle);
  }, []);
  var targetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nodeEle) {
    setTargetNode(nodeEle);
  }, []);
  var withoutViewport = function withoutViewport(startPos, e, targetEl) {
    if (!targetEl || typeof preventOutsideScreen === 'undefined') return null;

    // latest mouse coordinates
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // the size of the parent element
    var parentWidth = window.innerWidth;
    var parentHeight = window.innerHeight;

    // the size of the child element
    var childrenWidth = targetEl.clientWidth;
    var childrenHight = targetEl.clientHeight;
    var minLeft = -(parentWidth - childrenWidth) / 2;
    var maxLeft = (parentWidth - childrenWidth) / 2;
    var minTop = -(parentHeight - childrenHight) / 2;
    var maxTop = (parentHeight - childrenHight) / 2;

    // calculates the left and top offsets after the move
    var nLeft = mouseX - startPos.x;
    var nTop = mouseY - startPos.y;

    // Determine whether the left or right distance is out of bounds
    if (preventOutsideScreen.xAxis) {
      nLeft = nLeft <= minLeft ? minLeft : nLeft;
      nLeft = nLeft >= maxLeft ? maxLeft : nLeft;
    }
    if (preventOutsideScreen.yAxis) {
      nTop = nTop <= minTop ? minTop : nTop;
      nTop = nTop >= maxTop ? maxTop : nTop;
    }
    return [nLeft, nTop];
  };
  var handleMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    dragging = true;
    onStart === null || onStart === void 0 ? void 0 : onStart({
      dx: dx,
      dy: dy
    }, targetNode, node);
    var startPos = {
      x: e.clientX - dx,
      y: e.clientY - dy
    };
    var handleMouseMove = function handleMouseMove(e) {
      if (!dragging) return;
      var dx = e.clientX - startPos.x;
      var dy = e.clientY - startPos.y;

      // prevent dragged item to be dragged outside of screen
      if (preventOutsideScreen && node) {
        var _data = withoutViewport(startPos, e, node);
        if (_data !== null) {
          dx = _data[0];
          dy = _data[1];
        }
      }
      setOffset({
        dx: dx,
        dy: dy
      });
      onDrag === null || onDrag === void 0 ? void 0 : onDrag({
        dx: dx,
        dy: dy
      }, targetNode, node);
      e.stopPropagation();
      e.preventDefault();
    };
    var handleMouseUp = function handleMouseUp() {
      dragging = false;
      onStop === null || onStop === void 0 ? void 0 : onStop({
        dx: dx,
        dy: dy
      }, targetNode, node);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [dx, dy, node]);
  var handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    dragging = true;
    onStart === null || onStart === void 0 ? void 0 : onStart({
      dx: dx,
      dy: dy
    }, targetNode, node);
    var touch = e.touches[0];
    var startPos = {
      x: touch.clientX - dx,
      y: touch.clientY - dy
    };
    var handleTouchMove = function handleTouchMove(e) {
      if (!dragging) return;
      var touch = e.touches[0];
      var dx = touch.clientX - startPos.x;
      var dy = touch.clientY - startPos.y;

      // prevent dragged item to be dragged outside of screen
      if (preventOutsideScreen && node) {
        var _data = withoutViewport(startPos, touch, node);
        if (_data !== null) {
          dx = _data[0];
          dy = _data[1];
        }
      }
      setOffset({
        dx: dx,
        dy: dy
      });
      onDrag === null || onDrag === void 0 ? void 0 : onDrag({
        dx: dx,
        dy: dy
      }, targetNode, node);
      e.stopPropagation();
      e.preventDefault();
    };
    var handleTouchEnd = function handleTouchEnd() {
      dragging = false;
      onStop === null || onStop === void 0 ? void 0 : onStop({
        dx: dx,
        dy: dy
      }, targetNode, node);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, [dx, dy, node]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (node) {
      node.style.transform = "translate3d(".concat(dx, "px, ").concat(dy, "px, 0)");
    }
  }, [node, dx, dy]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (DRAG_DISABLED) {
      return;
    }
    if (!targetNode) {
      return;
    }
    targetNode.addEventListener("mousedown", handleMouseDown);
    targetNode.addEventListener("touchstart", handleTouchStart);
    return function () {
      targetNode.removeEventListener("mousedown", handleMouseDown);
      targetNode.removeEventListener("touchstart", handleTouchStart);
    };
  }, [targetNode, dx, dy]);
  return {
    dragContentHandle: ref,
    dragHandle: targetRef,
    resetPosition: function resetPosition() {
      // reset position
      setOffset({
        dx: 0,
        dy: 0
      });
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDraggable);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});