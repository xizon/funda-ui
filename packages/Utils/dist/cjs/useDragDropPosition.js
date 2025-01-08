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
/* harmony export */   "useDragDropPosition": () => (/* binding */ useDragDropPosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Drag Drop Object
 * 
 * @usage:

import { useState, useCallback } from 'react';
import { useDragDropPosition } from '@/utils/hooks/useDragDropPosition';

const App = () => {

    const [show, setShow] = useState<boolean>(false);

    // drag & drop
    //---------------、
    const moveDelay = 150;
    const pin = false;
    const dimension = 32; // onject with dimension
    const [objPosition, setObjPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);


    const { setup, ref } = useDragDropPosition({
        // usePercentage: true, // Enable percentage values
        dimension,
        onDragEnd: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
            setIsPressed(false);
            setIsDragged(false);

            // click event here (restore)
            setShow(false);
        },
        onDragStart: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
            setIsDragged(true);

            // click event here (restore)
            setShow(false);
        },
        onInit: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
        },
        onPointerDown: () => {
            setIsPressed(true);
        },
        onPointerUp: useCallback(() => {
            setIsPressed(false);

            // click event here
            setShow((prev) => !prev);
            
        }, []),
        onMove: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
        },
        pin,
        moveDelay
    });



    return (


        <>

            <div
                ref={setup}
                className="float-btn"
                style={{position: 'fixed', left: '50%', top: '50%', zIndex: 1000, background: 'red'}}
                
            >Move Here<small>{JSON.stringify(objPosition)}</small><br /><strong>{show ? 'Clicked' : 'None'}</strong></div>

        </>
    )
}




const App2 = () => {

    const dragdropContainerRef = useRef<HTMLDivElement>(null);
    ....

    const { setup, ref } = useDragDropPosition({
        container: dragdropContainerRef.current,  // If there is a container with a drag range
        ...
    });


    return (

        <>

            <div
                ref={dragdropContainerRef}
                style={{
                    width: '300px',
                    height: '300px',
                    border: '1px solid #ddd',
                    background: '#efefef',
                    position: 'relative'
                }}
            >
                <div
                    ref={setup}
                    className="float-btn"
                    style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 1000, background: 'red' }}

                >Move Here<small>{JSON.stringify(objPosition)}</small><br /><strong>{show ? 'Clicked' : 'None'}</strong></div>

            </div> 



        </>
    )
}

 */


var useDragDropPosition = function useDragDropPosition(settings) {
  var _settings$container = settings.container,
    container = _settings$container === void 0 ? null : _settings$container,
    onPointerDown = settings.onPointerDown,
    onPointerUp = settings.onPointerUp,
    onDragStart = settings.onDragStart,
    onDragEnd = settings.onDragEnd,
    onMove = settings.onMove,
    _settings$dimension = settings.dimension,
    dimension = _settings$dimension === void 0 ? 0 : _settings$dimension,
    onInit = settings.onInit,
    pin = settings.pin,
    _settings$moveDelay = settings.moveDelay,
    moveDelay = _settings$moveDelay === void 0 ? 150 : _settings$moveDelay,
    _settings$usePercenta = settings.usePercentage,
    usePercentage = _settings$usePercenta === void 0 ? false : _settings$usePercenta;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isClicked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var isDragged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var keyPressed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var convertToPercentage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (position) {
    if (usePercentage) {
      if (!container) return {
        position: position,
        hasContainer: Boolean(container)
      };
      var containerDim = getContainerDimensions();
      return {
        position: {
          left: position.left / containerDim.width * 100,
          top: position.top / containerDim.height * 100
        },
        hasContainer: Boolean(container)
      };
    } else {
      return {
        position: position,
        hasContainer: false
      };
    }
  }, [container, usePercentage]);
  var getContainerDimensions = function getContainerDimensions() {
    if (!container) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0
      };
    }
    var rect = container.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top
    };
  };
  var getLeft = function getLeft(left, dimension) {
    var containerDim = getContainerDimensions();
    var minLeft = container ? 0 : containerDim.left;
    var maxLeft = containerDim.width - dimension;
    if (left < minLeft) {
      return minLeft;
    } else if (left > maxLeft) {
      return maxLeft;
    }
    return left;
  };
  var getTop = function getTop(top, dimension) {
    var containerDim = getContainerDimensions();
    var minTop = container ? 0 : containerDim.top;
    var maxTop = containerDim.height - dimension;
    if (top < minTop) {
      return minTop;
    } else if (top > maxTop) {
      return maxTop;
    }
    return top;
  };
  var moveTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var moveDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var moveDelayInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    moveTimeout.current = setTimeout(function () {
      moveDisabled.current = false;
    }, moveDelay);
  }, [moveDelay]);
  var moveDelayInitClear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    moveDisabled.current = true;
    if (moveTimeout.current) {
      clearTimeout(moveTimeout.current);
    }
  }, []);
  var positionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    left: 0,
    top: 0
  });
  var calculateRelativePosition = function calculateRelativePosition(clientX, clientY) {
    var containerDim = getContainerDimensions();
    var halfWidth = Math.round(dimension / 2);
    var x = clientX;
    var y = clientY;
    if (container) {
      x = clientX - containerDim.left;
      y = clientY - containerDim.top;
    }
    return {
      x: x - halfWidth,
      y: y - halfWidth
    };
  };
  var handlePointerDown = function handlePointerDown(ev) {
    moveDelayInit();
    isClicked.current = true;
    var ele = ev.target;
    ev.stopPropagation();
    if (ev instanceof PointerEvent) {
      keyPressed.current = false;
      ele.setPointerCapture(ev.pointerId);
    } else if (ev instanceof KeyboardEvent) {
      keyPressed.current = true;
    }
    onPointerDown === null || onPointerDown === void 0 ? void 0 : onPointerDown();
  };
  var handlePointerUp = function handlePointerUp(ev) {
    moveDelayInitClear();
    isClicked.current = false;
    if (ev instanceof PointerEvent) {
      var ele = ev.target;
      ele.releasePointerCapture(ev.pointerId);
    }
    if (onDragEnd) {
      var finalPosition = convertToPercentage(positionRef.current);
      onDragEnd(finalPosition);
    }
    if (!isDragged.current) {
      onPointerUp === null || onPointerUp === void 0 ? void 0 : onPointerUp();
    } else {
      isDragged.current = false;
    }
  };
  var onPointerMove = function onPointerMove(e) {
    if (moveDisabled.current || !isClicked.current || !ref.current || keyPressed.current) {
      return;
    }
    var touches = 'touches' in e ? e.touches : null;
    var clientX = touches && touches.length ? touches[0].clientX : e.clientX;
    var clientY = touches && touches.length ? touches[0].clientY : e.clientY;
    var _calculateRelativePos = calculateRelativePosition(clientX, clientY),
      x = _calculateRelativePos.x,
      y = _calculateRelativePos.y;
    var position = {
      left: getLeft(x, dimension),
      top: getTop(y, dimension)
    };
    if (!isDragged.current) {
      isDragged.current = true;
      if (onDragStart) {
        var startPosition = convertToPercentage(position);
        onDragStart(startPosition);
      }
    }
    positionRef.current = position;
    ref.current.style.cssText += "top: ".concat(position.top, "px;left: ").concat(position.left, "px;");
    if (onMove) {
      var movePosition = convertToPercentage(position);
      onMove(movePosition);
    }
  };
  var setup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    if (node) {
      ref.current = node;
      node.addEventListener("pointerdown", handlePointerDown);
      node.addEventListener("keydown", handlePointerDown);
      node.addEventListener("mouseup", handlePointerUp);
      node.style.touchAction = "none";
      var rect = node.getBoundingClientRect();
      var containerDim = getContainerDimensions();
      var initialPosition = {
        left: container ? rect.left - containerDim.left : rect.left,
        top: container ? rect.top - containerDim.top : rect.top
      };
      if (onInit) {
        var initPosition = convertToPercentage(initialPosition);
        onInit(initPosition);
      }
    }
  }, [container, onInit, convertToPercentage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!pin) {
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("touchmove", onPointerMove);
      return function () {
        document.removeEventListener("mousemove", onPointerMove);
        document.removeEventListener("touchmove", onPointerMove);
      };
    }
  }, [container, pin]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      moveDelayInitClear();
    };
  }, [moveDelayInitClear]);
  return {
    ref: ref,
    setup: setup
  };
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});