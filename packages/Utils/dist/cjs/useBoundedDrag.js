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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useBoundedDrag": () => (/* binding */ useBoundedDrag)
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
 * Bounded Drag
 * 
 * @usage:


const App = () => {
    const [items, setItems] = useState<ListItem[]>([]);
    // ... other states and refs
      
    const deepCloneWithReactNode = (obj: any): any => {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        // Handle array
        if (Array.isArray(obj)) {
            return obj.map(item => deepCloneWithReactNode(item));
        }

        // Handle object
        const clonedObj: any = {};
        for (const key in obj) {
            if (key === 'appendControl') {
                clonedObj[key] = obj[key];
            } else {
                clonedObj[key] = deepCloneWithReactNode(obj[key]);
            }
        }
        return clonedObj;
    };


    const getItemWithChildrenIndices = (items: ListItem[], startIndex: number): number[] => {
        const indices = [startIndex];
        const startItem = items[startIndex];
        const startDepth = startItem.depth || 0;

        // Check if subsequent items are child items
        for (let i = startIndex + 1; i < items.length; i++) {
            const currentItem = items[i];
            const currentDepth = currentItem.depth || 0;
            if (currentDepth > startDepth) {
                indices.push(i);
            } else {
                break;
            }
        }

        return indices;
    };


    const { isDragging, dragHandlers } = useBoundedDrag({
        dragMode,
        boundarySelector: '.custom-draggable-list',
        itemSelector:'.custom-draggable-list__item',
        dragHandleSelector: '.custom-draggable-list__handle',
        onDragStart: (index: number) => {
            // Additional drag start logic if needed
        },
        onDragOver: (dragIndex: number | null, dropIndex: number | null) => {
            // Additional drag over logic if needed
        },
        onDragEnd: (dragIndex: number | null, dropIndex: number | null) => {
            if (dragIndex !== null && dropIndex !== null && dragIndex !== dropIndex) {
                // Handle item movement
                const newItems = deepCloneWithReactNode(items);
                const itemsToMove = getItemWithChildrenIndices(newItems, dragIndex);
                const itemsBeingMoved = itemsToMove.map(index => newItems[index]);

                // ... rest of your existing drag end logic ...

                setItems(updatedItems);

            }
        }
    });

    // Update your JSX to use the new handlers
    return (
        <ul className="custom-draggable-list">
        {items.map((item: any, index: number) => (
            <li
                // ... other props
                draggable={!draggable ? undefined : editingItem !== item.id && "true"}
                onDragStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                onDragOver={!draggable ? undefined : dragHandlers.handleDragOver}
                onDragEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                onTouchStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                onTouchMove={!draggable ? undefined : dragHandlers.handleDragOver}
                onTouchEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
            >
                <li className="custom-draggable-list__item">
                    <span className="custom-draggable-list__handle">☰</span>
                    <i>content {indec}<i>
                </li>
            </li>
        ))}
    </ul>
);

 */


var useBoundedDrag = function useBoundedDrag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dragMode = options.dragMode,
    dragMode = _options$dragMode === void 0 ? 'handle' : _options$dragMode,
    _options$boundarySele = options.boundarySelector,
    boundarySelector = _options$boundarySele === void 0 ? '.custom-draggable-list' : _options$boundarySele,
    _options$itemSelector = options.itemSelector,
    itemSelector = _options$itemSelector === void 0 ? '.custom-draggable-list__item' : _options$itemSelector,
    _options$dragHandleSe = options.dragHandleSelector,
    dragHandleSelector = _options$dragHandleSe === void 0 ? '.custom-draggable-list__handle' : _options$dragHandleSe,
    onDragStart = options.onDragStart,
    onDragOver = options.onDragOver,
    onDragEnd = options.onDragEnd;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var dragItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dragOverItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dragNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var touchOffset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  var currentHoverItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handleDragStart = function handleDragStart(e, position) {
    var isTouch = ('touches' in e);
    var target = e.target;

    // For block mode or handle mode check
    if (dragMode === 'handle') {
      var handle = target.closest(dragHandleSelector);
      if (!handle) {
        if (!isTouch) e.preventDefault();
        return false;
      }
    }

    // Find the draggable item
    var listItem = target.closest(itemSelector);
    if (!listItem) return;

    // Check boundary
    var boundary = listItem.closest(boundarySelector);
    if (!boundary) return;
    dragItem.current = position;
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(position);
    if (isTouch) {
      e.preventDefault(); // Prevent scrolling
      var touch = e.touches[0];
      var rect = listItem.getBoundingClientRect();
      var boundaryRect = boundary.getBoundingClientRect();

      // Calculate offset relative to the boundary
      touchOffset.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };

      // Clone the item for dragging
      dragNode.current = listItem.cloneNode(true);
      dragNode.current.classList.add('dragging');

      // Style the clone
      Object.assign(dragNode.current.style, {
        position: 'fixed',
        width: "".concat(rect.width, "px"),
        height: "".concat(rect.height, "px"),
        left: "".concat(rect.left, "px"),
        top: "".concat(rect.top, "px"),
        zIndex: '1000',
        pointerEvents: 'none',
        transform: 'scale(1.05)',
        transition: 'transform 0.1s',
        opacity: '0.9'
      });
      document.body.appendChild(dragNode.current);
      setIsDragging(true);
      listItem.classList.add('dragging-placeholder');
    } else {
      // ... desktop drag logic remains the same ...
    }
  };
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    var isTouch = ('touches' in e);
    if (!isTouch) {
      e.dataTransfer.dropEffect = 'move';
    }

    // Get the current pointer/touch position
    var point = isTouch ? e.touches[0] : {
      clientX: e.clientX,
      clientY: e.clientY
    };

    // Update dragged element position for touch events
    if (isTouch && isDragging && dragNode.current) {
      dragNode.current.style.left = "".concat(point.clientX - touchOffset.current.x, "px");
      dragNode.current.style.top = "".concat(point.clientY - touchOffset.current.y, "px");
    }

    // Find the element below the pointer/touch
    var elemBelow = document.elementFromPoint(point.clientX, point.clientY);
    if (!elemBelow) return;

    // Find the closest list item
    var listItem = elemBelow.closest(itemSelector);
    if (!listItem || listItem === currentHoverItem.current) return;

    // Check boundary
    var boundary = listItem.closest(boundarySelector);
    if (!boundary) return;

    // Update hover states
    if (currentHoverItem.current) {
      currentHoverItem.current.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
    }
    currentHoverItem.current = listItem;
    listItem.classList.add('drag-over');

    // Calculate position in list
    var position = Array.from(listItem.parentNode.children).indexOf(listItem);
    dragOverItem.current = position;

    // Determine drop position (top/bottom)
    var rect = listItem.getBoundingClientRect();
    var middleY = rect.top + rect.height / 2;
    if (point.clientY < middleY) {
      listItem.classList.add('drag-over-top');
    } else {
      listItem.classList.add('drag-over-bottom');
    }
    onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(dragItem.current, dragOverItem.current);
  };
  var handleDragEnd = function handleDragEnd(e) {
    var isTouch = ('touches' in e);
    if (isTouch && !isDragging) return;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(dragItem.current, dragOverItem.current);

    // Cleanup
    if (dragNode.current) {
      dragNode.current.remove();
      dragNode.current = null;
    }
    document.querySelectorAll(itemSelector).forEach(function (item) {
      item.style.opacity = '1';
      item.classList.remove('dragging', 'dragging-placeholder', 'drag-over', 'drag-over-top', 'drag-over-bottom');
    });
    setIsDragging(false);
    currentHoverItem.current = null;
    dragItem.current = null;
    dragOverItem.current = null;
  };
  return {
    isDragging: isDragging,
    dragHandlers: {
      handleDragStart: handleDragStart,
      handleDragOver: handleDragOver,
      handleDragEnd: handleDragEnd
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBoundedDrag);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});