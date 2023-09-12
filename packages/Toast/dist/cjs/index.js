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
;// CONCATENATED MODULE: ./src/Item.tsx

;
var Item = function Item(props) {
  var index = props.index,
    title = props.title,
    note = props.note,
    message = props.message,
    depth = props.depth,
    lock = props.lock,
    cascading = props.cascading,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeDisabled = props.closeDisabled;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-container",
    "data-index": index,
    style: cascading ? {
      transform: "perspective(100px) translateZ(-".concat(2 * index, "px) translateY(").concat(35 * index, "px)"),
      zIndex: depth
    } : {
      zIndex: depth
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast fade show ".concat(schemeBody ? schemeBody : ''),
    role: "alert"
  }, (title === '' || title === false) && (note === '' || note === false) ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-header ".concat(schemeHeader ? schemeHeader : '')
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("strong", {
    className: "me-auto"
  }, title === '' || title === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, title)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("small", {
    className: "text-muted"
  }, note === '' || note === false ? '' : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, note)), !lock ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    "data-close": "1",
    "data-index": index,
    tabIndex: -1,
    type: "button",
    className: "btn-close"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  }))) : null) : null)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast-body"
  }, message, (title === '' || title === false) && (note === '' || note === false) ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, !closeDisabled ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    "data-close": "1",
    "data-index": index,
    tabIndex: -1,
    type: "button",
    className: "btn-close position-absolute top-0 end-0 me-2 mt-2"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  }))) : null) : null))));
};
/* harmony default export */ const src_Item = (Item);
;// CONCATENATED MODULE: ./src/index.tsx


var Toast = function Toast(props) {
  var async = props.async,
    direction = props.direction,
    autoCloseTime = props.autoCloseTime,
    autoCloseReverse = props.autoCloseReverse,
    lock = props.lock,
    cascading = props.cascading,
    data = props.data,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeDisabled = props.closeDisabled,
    id = props.id,
    onClose = props.onClose;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var depth = data.length + 1;
  var cascadingEnabled = typeof cascading === 'undefined' ? true : cascading;
  function init() {
    // Move HTML templates to tag end body </body>
    // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
    // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
    //------------------------------------------
    if (document.body !== null) {
      document.body.appendChild(rootRef.current);
      [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach(function (node) {
        node.addEventListener('pointerdown', function (e) {
          var index = node.dataset.index;
          var currentItem = node.closest('.toast-container');
          handleClose(index, currentItem);
        });
      });
    }

    // Initialize data
    //--------------
    var $toast = document.querySelector("#".concat(rootRef.current.id));
    if ($toast !== null) {
      if ($toast.dataset.async == 'true') {
        var _list = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
        _list.forEach(function (node, i) {
          node.classList.remove('hide-end');
          // rearrange
          if (cascadingEnabled) node.style.transform = "perspective(100px) translateZ(-".concat(2 * i, "px) translateY(").concat(35 * i, "px)");
        });
      }
    }

    // Auto hide
    //--------------
    var _autoCloseTime = typeof autoCloseTime === 'undefined' || autoCloseTime === false ? false : autoCloseTime;
    if (_autoCloseTime !== false) {
      var items = JSON.parse(JSON.stringify(data));
      autoClose(0, items, _autoCloseTime);
    }
  }
  function handleClose(index, currentItem) {
    var _list = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
    currentItem.classList.add('hide-start');

    //Let the removed animation show
    setTimeout(function () {
      _list.forEach(function (node, i) {
        node.classList.remove('hide-start');
      });

      // remove current
      currentItem.classList.add('hide-end');

      // rearrange
      if (cascadingEnabled) {
        _list.filter(function (node) {
          return !node.classList.contains('hide-end');
        }).forEach(function (node, index) {
          node.style.transform = "perspective(100px) translateZ(-".concat(2 * index, "px) translateY(").concat(35 * index, "px)");
        });
      }

      //
      onClose === null || onClose === void 0 ? void 0 : onClose(rootRef.current, Number(index), _list.filter(function (node) {
        return !node.classList.contains('hide-end');
      }));
    }, 300);
  }
  function autoClose(index, items) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
    if (items.length === index) {
      clearTimeout(window.setCloseToast);
      return;
    }
    window.setCloseToast = setTimeout(function () {
      var _list = [].slice.call(rootRef.current.querySelectorAll('.toast-container'));
      if (autoCloseReverse) {
        _list[items.length - index].classList.add('hide-start');
      } else {
        _list[index - 1].classList.add('hide-start');
      }

      //Let the removed animation show
      setTimeout(function () {
        _list.forEach(function (node) {
          node.classList.remove('hide-start');
        });

        // remove current
        if (autoCloseReverse) {
          _list[items.length - index].classList.add('hide-end');

          //
          onClose === null || onClose === void 0 ? void 0 : onClose(rootRef.current, Number(items.length - index), _list.filter(function (node) {
            return !node.classList.contains('hide-end');
          }));
        } else {
          _list[index - 1].classList.add('hide-end');
          //
          onClose === null || onClose === void 0 ? void 0 : onClose(rootRef.current, Number(index - 1), _list.filter(function (node) {
            return !node.classList.contains('hide-end');
          }));
        }

        // rearrange
        if (cascadingEnabled) {
          _list.filter(function (node) {
            return !node.classList.contains('hide-end');
          }).forEach(function (node, i) {
            node.style.transform = "perspective(100px) translateZ(-".concat(2 * i, "px) translateY(").concat(35 * i, "px)");
          });
        }

        //
        autoClose(index, items, delay);
      }, 300);
    }, delay);
    index++;
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Initialize 
    //------------------------------------------
    init();

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      // Cancels a timeout previously established by calling setTimeout().
      clearTimeout(window.setCloseToast);

      // Remove all toasts
      var _el = document.querySelector("#toasts__wrapper-".concat(idRes));
      if (_el !== null) _el.remove();

      // remove all events
      [].slice.call(rootRef.current.querySelectorAll('[data-close]')).forEach(function (node) {
        node.replaceWith(node.cloneNode(true));
      });
    };
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    id: "toasts__wrapper-".concat(idRes),
    "data-async": async ? async : false,
    className: "toasts__wrapper toasts__wrapper--".concat(direction ? direction : 'bottom-center', " ").concat(cascadingEnabled ? 'toasts__wrapper--cascading' : ''),
    ref: rootRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toasts"
  }, data.map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Item, {
      depth: depth - i,
      key: i,
      index: i,
      title: item.title,
      note: item.note,
      lock: lock,
      cascading: cascadingEnabled,
      schemeBody: schemeBody,
      schemeHeader: schemeHeader,
      closeBtnColor: closeBtnColor,
      closeDisabled: closeDisabled,
      message: item.message
    });
  }))));
};
/* harmony default export */ const src = (Toast);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});