(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"), require("react-dom"));
	else
		root["RPB"] = factory(root["React"], root["ReactDOM"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787), __webpack_require__(156));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787), __webpack_require__(156)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        },

        /***/156: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1708__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1708__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      (function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_1708__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1708__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_1708__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1708__.o(definition, key) && !__nested_webpack_require_1708__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_1708__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1708__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (function () {
        __nested_webpack_require_1708__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1708__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1708__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1708__(156);
        /* harmony import */
        var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1708__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
        var RootPortal = function RootPortal(props) {
          var containerClassName = props.containerClassName,
            show = props.show,
            children = props.children;
          var containerRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

          // Move HTML templates to tag end body </body>
          // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
          // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
          // ###
          // ###
          // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            containerRef.current = document.createElement('div');
            containerRef.current.className = "root-portal-container ".concat(containerClassName || '');
            document.body.appendChild(containerRef.current);
            return function () {
              if (containerRef.current) {
                containerRef.current.remove();
              }
            };
          }, []);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment, null, containerRef.current && show && /*#__PURE__*/(0, react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, containerRef.current));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = RootPortal;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../RootPortal/dist/cjs/index.js
var cjs = __webpack_require__(909);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/Item.tsx

;
var Item = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
  var onlyOne = props.onlyOne,
    index = props.index,
    title = props.title,
    note = props.note,
    theme = props.theme,
    message = props.message,
    depth = props.depth,
    lock = props.lock,
    cascading = props.cascading,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeDisabled = props.closeDisabled,
    autoCloseTime = props.autoCloseTime,
    evStart = props.evStart,
    evPause = props.evPause,
    evClose = props.evClose;
  var containerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: containerRef,
    className: "toast-container ".concat(onlyOne ? 'only-one' : ''),
    "data-index": index,
    style: cascading ? {
      transform: "perspective(100px) translateZ(-".concat(2 * index, "px) translateY(").concat(35 * index, "px)"),
      zIndex: depth
    } : {
      zIndex: depth
    },
    onMouseEnter: evPause,
    onMouseLeave: evStart
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toast fade show ".concat(schemeBody ? schemeBody : '', " ").concat(theme ? "bg-".concat(theme) : ''),
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
    className: "btn-close",
    onClick: function onClick(e) {
      evClose === null || evClose === void 0 ? void 0 : evClose(e, index, containerRef.current);
    }
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
    className: "btn-close position-absolute top-0 end-0 me-2 mt-2",
    onClick: function onClick(e) {
      evClose === null || evClose === void 0 ? void 0 : evClose(e, index, containerRef.current);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "12px",
    height: "12px",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    fill: "".concat(closeBtnColor ? closeBtnColor : '#000000'),
    d: "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    fillRule: "evenodd"
  }))) : null) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: ref,
    "data-progress-index": index,
    className: "progress active toast-progress ".concat(autoCloseTime === false ? 'd-none' : ''),
    role: "progressbar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "progress-bar"
  }))))));
});
/* harmony default export */ const src_Item = (Item);
;// CONCATENATED MODULE: ./src/index.tsx



var Toast = function Toast(props) {
  var wrapperClassName = props.wrapperClassName,
    async = props.async,
    autoHideMultiple = props.autoHideMultiple,
    direction = props.direction,
    autoCloseTime = props.autoCloseTime,
    lock = props.lock,
    cascading = props.cascading,
    data = props.data,
    schemeBody = props.schemeBody,
    schemeHeader = props.schemeHeader,
    closeBtnColor = props.closeBtnColor,
    closeDisabled = props.closeDisabled,
    id = props.id,
    onClose = props.onClose;
  var ANIM_SPEED = 300;
  var DEFAULT_AUTO_CLOSE_TIME = 3000;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var depth = autoHideMultiple ? data.slice(-2).length + 1 : data.length + 1;
  var cascadingEnabled = typeof cascading === 'undefined' ? true : cascading;

  // auto close
  var AUTO_CLOSE_TIME = typeof autoCloseTime === 'undefined' || autoCloseTime === false ? false : autoCloseTime;

  // progress animation
  var PROGRESS_TRANSITION_TIME = typeof autoCloseTime === 'undefined' || autoCloseTime === false ? DEFAULT_AUTO_CLOSE_TIME : autoCloseTime;
  var progressPausedRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(data.map(function (v) {
    return false;
  }));
  var progressObjRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)([]);
  var progressIntervalRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(data.map(function (v) {
    return null;
  }));
  var startProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (el, i) {
    // init progress
    var progressCurrentChunk = 100 / (PROGRESS_TRANSITION_TIME / 100);
    el.firstChild.style.width = 100 + '%';
    el.firstChild.ariaValueNow = 100;

    // animation
    progressIntervalRef.current[i] = setInterval(function () {
      // console.log('toast setInterval');

      if (!progressPausedRef.current[i]) {
        var progPercent = 100 - progressCurrentChunk;
        el.firstChild.style.width = progPercent + '%';
        el.firstChild.ariaValueNow = progPercent;
        progressCurrentChunk++;

        //
        if (progPercent === 0 || progPercent < 1) {
          // may be 0.xxx
          el.classList.add('complete');

          // stop current animation
          stopProgressTimer(i);

          // hide toast item
          var currentItem = el.closest('.toast-container');
          handleClose(null, i, currentItem);
        }
      }
    }, PROGRESS_TRANSITION_TIME / 100);
  }, []);
  var clearAllProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    var curIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    if (typeof curIndex === 'undefined') {
      data.forEach(function (item, i) {
        clearInterval(progressIntervalRef.current[i]);
        progressIntervalRef.current[i] = null;
      });
    } else {
      data.forEach(function (item, i) {
        if (i === curIndex) {
          clearInterval(progressIntervalRef.current[i]);
          progressIntervalRef.current[i] = null;
        }
      });
    }
  }, [data]);
  var stopProgressTimer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (index) {
    clearInterval(progressIntervalRef.current[index]);
    progressIntervalRef.current[index] = null;
  }, [data]);
  function progressAnimBegin() {
    data.forEach(function (item, i) {
      var el = progressObjRef.current[i];
      if (el !== null && typeof el !== 'undefined') startProgressTimer(el, i);
    });
  }
  function handleProgressPaused(e) {
    var _currentIndex = e.currentTarget.dataset.index;
    progressPausedRef.current[_currentIndex] = true;
  }
  function handleProgressStart(e) {
    var _currentIndex = e.currentTarget.dataset.index;
    progressPausedRef.current[_currentIndex] = false;
  }

  //
  function init() {
    if (rootRef.current === null) return;
    var $toast = rootRef.current;

    // Automatically hide multiple items
    // It creates a transition animation effect with multiple records and only one displayed.
    //------------------------------------------
    if (autoHideMultiple) {
      var _list = [].slice.call($toast.querySelectorAll('.toast-container'));
      if (_list.length === 2) {
        _list.forEach(function (node, i) {
          node.classList.remove('auto-anim-switch', 'auto-anim-switch--initfirst', 'auto-anim-switch--first');
          if (i !== _list.length - 1) {
            node.classList.add('auto-anim-switch--initfirst'); // top element of source code
          } else {
            node.classList.add('auto-anim-switch--initfirst'); // bottom element of source code
          }
        });

        setTimeout(function () {
          _list.forEach(function (node, i) {
            if (i !== _list.length - 1) {
              node.classList.add('auto-anim-switch');
            } else {
              node.classList.add('auto-anim-switch--initfirst', 'auto-anim-switch--first');
            }
          });
        }, ANIM_SPEED / 2);
      } else {
        _list.forEach(function (node, i) {
          if (i !== _list.length - 1) {
            node.classList.add('auto-anim-switch');
          } else {
            node.classList.add('auto-anim-switch--initfirst', 'auto-anim-switch--first');
          }
        });
      }
    }

    // Initialize data
    //--------------
    if ($toast.dataset.async == 'true') {
      var _list2 = [].slice.call($toast.querySelectorAll('.toast-container'));
      _list2.forEach(function (node, i) {
        node.classList.remove('hide-end');
        // rearrange
        if (cascadingEnabled) node.style.transform = "perspective(100px) translateZ(-".concat(2 * i, "px) translateY(").concat(35 * i, "px)");
      });
    }
  }
  function autoClose() {
    // Auto hide
    //--------------
    if (AUTO_CLOSE_TIME !== false) {
      // start animation
      progressAnimBegin();
    }
  }
  function handleClose(e, index, currentItem) {
    if (typeof e !== 'undefined' && e !== null) e.preventDefault();
    if (rootRef.current === null) return;
    var curIndex = Number(index);
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
        }).forEach(function (node, k) {
          node.style.transform = "perspective(100px) translateZ(-".concat(2 * k, "px) translateY(").concat(35 * k, "px)");
        });
      }

      // stop all animations or current animation
      if (_list.length === 1 || autoHideMultiple) {
        clearAllProgressTimer();
      } else {
        clearAllProgressTimer(curIndex);
      }

      //
      onClose === null || onClose === void 0 ? void 0 : onClose(rootRef.current, curIndex, _list.filter(function (node) {
        return !node.classList.contains('hide-end');
      }));
    }, ANIM_SPEED);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Initialize Toast Item
    //------------------------------------------
    init();

    // Initialize Progress
    //------------------------------------------
    autoClose();

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      // Stop all animations
      clearAllProgressTimer();
    };
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    show: true,
    containerClassName: "Toast"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    id: "toasts__wrapper-".concat(idRes),
    "data-async": async ? async : false,
    className: "toasts__wrapper toasts__wrapper--".concat(direction ? direction : 'bottom-center', " ").concat(cascadingEnabled ? 'toasts__wrapper--cascading' : '', " ").concat(wrapperClassName || ''),
    ref: rootRef
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "toasts"
  }, (autoHideMultiple ? data.slice(-2) : data).map(function (item, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_Item, {
      ref: function ref(el) {
        return progressObjRef.current[i] = el;
      },
      onlyOne: data.length === 1 ? true : false,
      depth: depth - i,
      key: i,
      index: i,
      title: item.title,
      note: item.note,
      theme: item.theme,
      lock: lock,
      cascading: cascadingEnabled,
      schemeBody: schemeBody,
      schemeHeader: schemeHeader,
      closeBtnColor: closeBtnColor,
      closeDisabled: closeDisabled,
      message: item.message,
      autoCloseTime: AUTO_CLOSE_TIME,
      evStart: handleProgressStart,
      evPause: handleProgressPaused,
      evClose: handleClose
    });
  })))));
};
/* harmony default export */ const src = (Toast);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});