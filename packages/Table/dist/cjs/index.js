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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
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
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
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
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"clsWrite": function clsWrite() {
          return (/* binding */_clsWrite
          );
        },
        /* harmony export */"combinedCls": function combinedCls() {
          return (/* binding */_combinedCls
          );
        }
        /* harmony export */
      });
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * Output of class name
       * @param {*} s      - Any
       * @param  {String} defaultCls      - Default string
       * @param  {?*} targetCls      - Any
       * @returns {*} 
       */
      function _clsWrite(s, defaultCls) {
        var targetCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        return s || s === '' ? typeof targetCls === 'undefined' ? s : targetCls : defaultCls;
      }

      /**
       * Combined classnames
       * @param {*} args 
       * @returns {String|undefined}
       */
      /* Usage:
      
      console.log(combinedCls('a-1', 'a-2', 'a-3', {
          'p-1': null,
          'p-2': undefined,
          'p-3': true,
          'p-4': false,
          'p-5': 'kkk',
          'p-6': 0,
          'p-7': 1,
          'p-8': '',
          undefined
      })); // a-1 a-2 a-3 p-3 p-5 p-7
      */
      function _combinedCls() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (args) {
          var classes = [];
          for (var i = 0; i < args.length; i++) {
            var className = args[i];
            if (!className) {
              continue;
            }
            var type = _typeof(className);
            if (type === 'string' || type === 'number') {
              classes.push(className);
            } else if (type === 'object') {
              var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return value ? key : null;
              });
              classes = _classes.length ? classes.concat(_classes.filter(function (c) {
                return !!c;
              })) : classes;
            }
          }
          return classes.join(' ').trim();
        }
        return undefined;
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

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
      function __nested_webpack_require_1465__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1465__);
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
        /******/__nested_webpack_require_1465__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1465__.d(getter, {
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
        /******/__nested_webpack_require_1465__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1465__.o(definition, key) && !__nested_webpack_require_1465__.o(exports, key)) {
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
        /******/__nested_webpack_require_1465__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1465__.r = function (exports) {
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
        __nested_webpack_require_1465__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1465__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1465__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1465__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * Create an available ID
         * 
        */

        var useComId = function useComId() {
          return "ID-".concat((0, react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-"));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useComId;
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
  "DragHandleSprite": () => (/* reexport */ utils_DragHandleSprite),
  "SortSprite": () => (/* reexport */ utils_SortSprite),
  "Table": () => (/* reexport */ src_Table),
  "TableBody": () => (/* reexport */ src_TableBody),
  "TableCaption": () => (/* reexport */ src_TableCaption),
  "TableCell": () => (/* reexport */ src_TableCell),
  "TableColgroup": () => (/* reexport */ src_TableColgroup),
  "TableFilter": () => (/* reexport */ utils_TableFilter),
  "TableFoot": () => (/* reexport */ src_TableFoot),
  "TableHead": () => (/* reexport */ src_TableHead),
  "TableRow": () => (/* reexport */ src_TableRow),
  "ToggleSelection": () => (/* reexport */ utils_ToggleSelection)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../Utils/dist/cjs/useComId.js
var useComId = __webpack_require__(85);
var useComId_default = /*#__PURE__*/__webpack_require__.n(useComId);
// EXTERNAL MODULE: ../Utils/dist/cjs/cls.js
var cls = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/TableContext.tsx

var TableContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(undefined);
var TableProvider = function TableProvider(props) {
  var children = props.children,
    value = props.value;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableContext.Provider, {
    value: value
  }, children);
};

;// CONCATENATED MODULE: ./src/utils/func.ts
function convertMapToArr(setData) {
  var res = [];
  var s = setData;
  for (var it = s.values(), val = null; val = it.next().value;) {
    res.push(val);
  }
  return res;
}
function htmlToPlain(input) {
  return input.replace(/(<([^>]+)>)/ig, '');
}
function sortDataByIndex(orderArr, data) {
  return Array.isArray(data) ? orderArr.map(function (index) {
    return data[index];
  }) : data;
}
function getTbody(root) {
  if (root === null) return null;
  var tbodyRef = root.querySelector('table tbody');
  return tbodyRef;
}
function getThead(root) {
  if (root === null) return null;
  var tbodyRef = root.querySelector('table thead');
  return tbodyRef;
}
function allRows(root) {
  var tbodyRef = getTbody(root);
  if (tbodyRef === null) return [];
  return [].slice.call(tbodyRef.children);
}
function allHeadRows(root) {
  var tbodyRef = getThead(root);
  if (tbodyRef === null) return [];
  return [].slice.call(tbodyRef.children);
}
function initOrderProps(rootElem) {
  if (rootElem === null) return;

  // !!! Execute it only once
  if (typeof rootElem.dataset.customPropsInit !== 'undefined') return;
  rootElem.dataset.customPropsInit = 1;
  var _allRows = allRows(rootElem);

  // key
  _allRows.forEach(function (node, i) {
    node.dataset.order = "".concat(i);
  });
}
function initRowColProps(rootElem) {
  if (rootElem === null) return;

  // !!! Important, performance optimization for large data renderings
  // With this protection, it is only performed once
  if (typeof rootElem.dataset.rowColPropsInit !== 'undefined') return;
  rootElem.dataset.rowColPropsInit = '1';

  //
  var _allRows = allRows(rootElem);
  var _allHeadRows = allHeadRows(rootElem);

  // key
  _allRows.forEach(function (node, i) {
    node.dataset.tableRow = "".concat(i);

    // columns
    var perCol = [].slice.call(node.children);
    perCol.forEach(function (col, j) {
      col.dataset.tableRow = "".concat(i);
      col.dataset.tableCol = "".concat(j);
      col.classList.add(cellMark(i, j));
    });
  });
  _allHeadRows.forEach(function (node, i) {
    node.dataset.tableRow = "-1";

    // columns
    var perCol = [].slice.call(node.children);
    perCol.forEach(function (col, j) {
      col.dataset.tableRow = "-1";
      col.dataset.tableCol = "".concat(j);
      col.classList.add(cellMark(-1, j));
    });
  });
}
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function maxDimension(elements) {
  var res = {
    'height': 0,
    'width': 0
  };
  var elementHeights = Array.prototype.map.call(elements, function (el) {
    return el.clientHeight;
  });
  var elementWidths = Array.prototype.map.call(elements, function (el) {
    return el.clientWidth;
  });
  var maxHeight = Math.max.apply(null, elementHeights);
  var maxWidth = Math.max.apply(null, elementWidths);
  res = {
    'height': maxHeight,
    'width': maxWidth
  };
  return res;
}
;
function tableElemScrolledInit(root, w) {
  var tbodyRef = getTbody(root);
  if (tbodyRef === null) return;
  if (w <= 768 && tbodyRef.querySelector('tr') !== null) {
    var _loop = function _loop() {
      var tbodyRows = root.querySelectorAll("tbody tr [data-table-col=\"".concat(i, "\"]"));
      var maxHeight = maxDimension(tbodyRows).height;
      if (maxHeight > 0) {
        [].slice.call(tbodyRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });

        //
        var theadRows = root.querySelectorAll("thead tr [data-table-col=\"".concat(i, "\"]"));
        [].slice.call(theadRows).forEach(function (row) {
          row.style.height = maxHeight + 'px';
        });
      }
    };
    //get maxHeight of per row
    for (var i = 0; i < tbodyRef.querySelector('tr').children.length; i++) {
      _loop();
    }
  } else {
    [].slice.call(root.querySelectorAll('tbody td, tbody th, thead th')).forEach(function (node, i) {
      node.style.removeProperty('height');
    });
  }
}
function cellMark(row, col) {
  var isNegative = function isNegative(num) {
    return num < 0;
  };
  return "cell-".concat(isNegative(row) ? 0 : row, "-").concat(isNegative(col) ? 0 : col);
}
function removeCellFocusClassName(root) {
  if (root) {
    // !!! Important, performance optimization for large data renderings
    // Only query elements with cell-focus classes
    var focusedCells = root.querySelectorAll('td.cell-focus, th.cell-focus');
    focusedCells.forEach(function (el) {
      el.classList.remove('cell-focus');
    });
  }
}
function getTableRowsColCount(root) {
  var rows = allRows(root);
  return rows.map(function (row, i) {
    return {
      row: i,
      colCount: row.children.length
    };
  });
}
;// CONCATENATED MODULE: ./src/utils/hooks/useTableResponsive.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Handles the event of responsive table
 * 
 * @usage:

const App = () => {

    const responsiveTable = true;
    const rootRef = useRef<any>(null);

    useTableResponsive({
        enabled: responsiveTable && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */



function useTableResponsive(_ref, deps) {
  var enabled = _ref.enabled,
    spyElement = _ref.spyElement;
  var debounce = function debounce(fn) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(this, arguments);
      }, limit);
    };
  };
  var windowResizeUpdate = debounce(handleWindowUpdate, 50);
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  function handleWindowUpdate() {
    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerWidth != windowWidth) {
      // Update the window width for next time
      windowWidth = window.innerWidth;

      // Do stuff here
      tableElemScrolledInit(spyElement, windowWidth);
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      // Initialize custom props of table elements
      initOrderProps(spyElement);
      initRowColProps(spyElement);

      // With scroll bars
      var _windowWidth = window.innerWidth;
      tableElemScrolledInit(spyElement, _windowWidth);

      // Add function to the element that should be used as the scrollable area.
      window.removeEventListener('resize', windowResizeUpdate);
      window.addEventListener('resize', windowResizeUpdate);

      // Remove the global list of events, especially as scroll and interval.
      return function () {
        window.removeEventListener('resize', windowResizeUpdate);
      };
    }
  }, [enabled, spyElement].concat(_toConsumableArray(deps)));
}
/* harmony default export */ const hooks_useTableResponsive = (useTableResponsive);
;// CONCATENATED MODULE: ./src/utils/hooks/useTableDraggable.tsx
function useTableDraggable_toConsumableArray(arr) { return useTableDraggable_arrayWithoutHoles(arr) || useTableDraggable_iterableToArray(arr) || useTableDraggable_unsupportedIterableToArray(arr) || useTableDraggable_nonIterableSpread(); }
function useTableDraggable_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableDraggable_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableDraggable_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableDraggable_arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || useTableDraggable_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableDraggable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableDraggable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableDraggable_arrayLikeToArray(o, minLen); }
function useTableDraggable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Handles the event of drag-and-drop sorting
 * 
 * @usage:

const App = () => {

    const rowDraggable = true;
    const data = [{a: 1}, {b: 2}]
    const rootRef = useRef<any>(null);

    const {
        handleDragStart,
        handleDragEnd,
        handledragOver,
        handleTbodyEnter
    } = useTableDraggable({
        enabled: rowDraggable && spyElement,
        data: data,
        spyElement: spyElement
        onRowDrag: (dragStart: any, dragEnd: any) => void(0)
    }, [data, rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );

};

 */

/**
 * Performance Optimizations for Large Data Sets:
 * 
 * This hook has been optimized to handle large datasets (1000+ rows) efficiently.
 * Key optimizations include:
 * 
 * 1. RequestAnimationFrame for DOM Updates
 *    - DOM operations are batched within requestAnimationFrame callbacks
 *    - Browser executes updates before next frame render, reducing visual lag
 *    - Pending RAF callbacks are cancelled to prevent accumulation
 * 
 * 2. Caching Strategy
 *    - tbodyRef: Cached to avoid repeated DOM queries
 *    - colCount: Cached to eliminate repeated queries in placeholderGenerator
 *    - allRowsCache: Cached with time-based invalidation (100ms)
 * 
 * 3. Redundant Operation Prevention
 *    - Tracks last hovered row order (lastOverOrder)
 *    - Skips placeholder operations when hovering over the same row
 *    - Reduces unnecessary DOM manipulations during drag
 * 
 * 4. Batch DOM Operations
 *    - removePlaceholder: Uses cached tbodyRef and batch removal
 *    - handleDragEnd: Uses DocumentFragment for batch DOM updates
 *    - Map-based lookups instead of repeated querySelector calls
 */


function useTableDraggable(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    onRowDrag = _ref.onRowDrag;
  // drag & drop
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    sortData = _useState2[0],
    setSortData = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDragging = _useState4[0],
    setIsDragging = _useState4[1];

  // Performance optimization: cache for drag operations
  var dragCacheRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    draggedObj: null,
    overObj: null,
    allRowsCache: null,
    lastUpdateTime: 0,
    tbodyRef: null,
    colCount: 0,
    lastOverOrder: null,
    rafId: null
  });

  // ================================================================
  // drag & drop
  // ================================================================
  var draggedObj = null;
  var overObj = null;

  // Helper function to filter out cloned elements and get only real rows
  var getRealRows = function getRealRows(rows) {
    return rows.filter(function (row) {
      return !row.classList.contains('row-obj-clonelast') && !row.classList.contains('row-obj-lastplaceholder');
    });
  };
  var placeholderGenerator = function placeholderGenerator(trHeight) {
    // Use cached tbodyRef and colCount for better performance
    var tbodyRef = dragCacheRef.current.tbodyRef;
    if (!tbodyRef) {
      tbodyRef = getTbody(spyElement);
      dragCacheRef.current.tbodyRef = tbodyRef;
    }
    if (tbodyRef === null) return null;

    // Cache colCount to avoid repeated queries
    var colCount = dragCacheRef.current.colCount;
    if (colCount === 0) {
      var firstRow = tbodyRef.querySelector('tr');
      if (firstRow === null) return null;
      colCount = firstRow.children.length;
      dragCacheRef.current.colCount = colCount;
    }

    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-placeholder';
    newRow.dataset.placeholder = 'true';
    newRow.style.height = trHeight + 'px';
    newRow.style.minHeight = trHeight + 'px'; // Ensure minimum height

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = colCount;
    newCell.style.minHeight = trHeight + 'px'; // Ensure cell has minimum height

    // Use non-breaking space to ensure proper height rendering
    // Multiple spaces or a placeholder element helps maintain consistent height
    newCell.innerHTML = '&nbsp;'; // Use &nbsp; instead of regular space for better height consistency

    return newRow;
  };
  var lastPlaceholderGenerator = function lastPlaceholderGenerator(trHeight) {
    // Use cached tbodyRef and colCount for better performance
    var tbodyRef = dragCacheRef.current.tbodyRef;
    if (!tbodyRef) {
      tbodyRef = getTbody(spyElement);
      dragCacheRef.current.tbodyRef = tbodyRef;
    }
    if (tbodyRef === null) return null;
    var curEl = tbodyRef.querySelector('.row-obj-lastplaceholder');
    if (curEl !== null) return;

    // Cache colCount to avoid repeated queries
    var colCount = dragCacheRef.current.colCount;
    if (colCount === 0) {
      var firstRow = tbodyRef.querySelector('tr');
      if (firstRow === null) return null;
      colCount = firstRow.children.length;
      dragCacheRef.current.colCount = colCount;
    }

    // Create a dedicated last placeholder row that is kept in DOM but hidden by default
    var newRow = document.createElement('tr');
    newRow.className = 'row-obj row-obj-lastplaceholder';
    // NOTE: Do NOT set data-placeholder here, otherwise it will be removed by removePlaceholder
    newRow.style.height = trHeight + 'px';
    newRow.style.minHeight = trHeight + 'px';
    newRow.style.display = 'none';
    var newCell = newRow.insertCell(0);
    newCell.colSpan = colCount;
    newCell.style.minHeight = trHeight + 'px';
    newCell.innerHTML = '&nbsp;';

    // Insert after the last real row (excluding cloned rows)
    var rows = getRealRows(allRows(spyElement));
    var lastRealRow = rows.length > 0 ? rows[rows.length - 1] : null;
    if (lastRealRow && lastRealRow.parentNode === tbodyRef) {
      insertAfter(newRow, lastRealRow);
    } else {
      tbodyRef.appendChild(newRow);
    }
    return newRow;
  };

  // An invisible HELPER element used to trigger the touch of the last element
  var lastRowGenerator = function lastRowGenerator(trHeight) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null || tbodyRef.querySelector('tr') === null) return;
    var curEl = tbodyRef.querySelector('.row-obj-clonelast');
    if (curEl !== null) return;

    // Insert a row at the "index" of the table
    var newRow = document.createElement('tr');
    newRow.className = 'row-obj row-obj-clonelast';
    newRow.dataset.order = allRows(spyElement).length.toString();
    newRow.style.height = trHeight + 'px';

    // Insert a cell in the row at index
    var newCell = newRow.insertCell(0);
    newCell.colSpan = tbodyRef.querySelector('tr').children.length;

    // Append a text node to the cell
    var newText = document.createTextNode(' ');
    newCell.appendChild(newText);

    //
    lastPlaceholderGenerator(trHeight);
    return newRow;
  };
  var removePlaceholder = function removePlaceholder() {
    // Use cached tbodyRef
    var tbodyRef = dragCacheRef.current.tbodyRef;
    if (!tbodyRef) {
      tbodyRef = getTbody(spyElement);
      dragCacheRef.current.tbodyRef = tbodyRef;
    }
    if (tbodyRef === null) return;

    // Optimize: use querySelectorAll and remove in batch
    var placeholders = tbodyRef.querySelectorAll("[data-placeholder]");
    if (placeholders.length > 0) {
      // Use DocumentFragment for batch removal (though in this case direct removal is fine)
      placeholders.forEach(function (node) {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });
    }
  };

  // Initialize drag & drop data
  // !!! Execute it only once
  var initDragDropData = function initDragDropData() {
    if (spyElement === null) return;
    if (typeof spyElement.dataset.dragdropDataInit !== 'undefined') return;
    spyElement.dataset.dragdropDataInit = 1;
    var _allRows = allRows(spyElement);

    // sort list data
    var listIndexes = _allRows.map(function (node, i) {
      return i;
    });
    setSortData(listIndexes);

    //last placeholder
    if (_allRows.length > 0) {
      var lastEl = lastRowGenerator(_allRows.at(-1).clientHeight);
      if (typeof _allRows.at(-1) !== 'undefined') {
        insertAfter(lastEl, _allRows.at(-1));
      }
    }
  };
  var handleTbodyEnter = function handleTbodyEnter(e) {
    var _table = e.currentTarget.closest('table');
    if (_table === null) return;
    _table.querySelector('tbody').classList.add('drag-trigger-mousedown');
  };
  var handleTbodyLeave = function handleTbodyLeave(e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    tbodyRef === null || tbodyRef === void 0 ? void 0 : tbodyRef.classList.remove('drag-trigger-mousedown');
  };

  // events fired on the drop targets
  // Optimized with requestAnimationFrame, throttling and caching
  var handledragOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    // Always prevent default in sync code
    e.preventDefault();

    // Use cached draggedObj and tbodyRef
    var currentDraggedObj = dragCacheRef.current.draggedObj || draggedObj;
    if (currentDraggedObj === null) return;
    var tbodyRef = dragCacheRef.current.tbodyRef;
    if (!tbodyRef) {
      tbodyRef = getTbody(spyElement);
      if (tbodyRef === null) return;
      dragCacheRef.current.tbodyRef = tbodyRef;
    }

    // Early return for placeholder targets
    if (e.target.classList.contains('row-placeholder')) return;
    var itemsWrapper = e.target.parentNode;
    if (!itemsWrapper || !itemsWrapper.classList || !itemsWrapper.classList.contains('row-obj')) {
      return;
    }

    // Skip cloned elements - they should not be valid drop targets
    if (itemsWrapper.classList.contains('row-obj-lastplaceholder')) {
      return;
    }

    // Check if we're still over the same row (avoid unnecessary operations)
    var currentOrder = Number(itemsWrapper.dataset.order);
    if (dragCacheRef.current.lastOverOrder === currentOrder) {
      return; // Same target, skip
    }

    // console.log(' --> overObj: ', itemsWrapper);

    // Use requestAnimationFrame for smoother DOM updates
    // Cancel previous frame if pending
    if (dragCacheRef.current.rafId !== null) {
      cancelAnimationFrame(dragCacheRef.current.rafId);
    }

    // Store references for use in RAF callback
    var targetWrapper = itemsWrapper;
    var targetOrder = currentOrder;
    dragCacheRef.current.rafId = requestAnimationFrame(function () {
      overObj = targetWrapper;
      dragCacheRef.current.overObj = targetWrapper;
      dragCacheRef.current.lastOverOrder = targetOrder;
      currentDraggedObj.style.display = 'none';
      removePlaceholder();

      // Cache allRows result to avoid multiple queries
      var cachedRows = dragCacheRef.current.allRowsCache;
      var now = Date.now();
      if (!cachedRows || now - dragCacheRef.current.lastUpdateTime > 100) {
        cachedRows = allRows(spyElement);
        dragCacheRef.current.allRowsCache = cachedRows;
        dragCacheRef.current.lastUpdateTime = now;
      }

      // Filter out cloned elements to get real rows count
      var realRows = getRealRows(cachedRows);
      var totalRows = realRows.length;
      var overOrder = Number(overObj.dataset.order);

      // When hovering over the last real row, use its height for placeholder
      // Otherwise use the overObj's height
      var isOverLastRow = overOrder === totalRows - 1 && realRows.length > 0 && realRows[totalRows - 1];
      var placeholderHeight = isOverLastRow ? realRows[totalRows - 1].clientHeight : overObj.clientHeight;
      var placeholder = placeholderGenerator(placeholderHeight);
      if (placeholder) {
        var draggedOrder = Number(currentDraggedObj.dataset.order);
        //console.log(' --> drag index list: ', draggedOrder, overOrder, totalRows - 1);
        tbodyRef.insertBefore(placeholder, overObj);
      }
      dragCacheRef.current.rafId = null;
    });
  }, [sortData, spyElement]);
  var handleDragStart = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    setIsDragging(true);
    draggedObj = e.currentTarget;
    // Cache draggedObj and tbodyRef for performance
    dragCacheRef.current.draggedObj = draggedObj;
    dragCacheRef.current.tbodyRef = tbodyRef;
    dragCacheRef.current.lastOverOrder = null; // Reset

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedObj);
    draggedObj.classList.add('dragging');

    // Cache allRows and use cached result
    var cachedRows = allRows(spyElement);
    dragCacheRef.current.allRowsCache = cachedRows;
    dragCacheRef.current.lastUpdateTime = Date.now();

    // Cache colCount if not already cached
    if (dragCacheRef.current.colCount === 0) {
      var firstRow = tbodyRef.querySelector('tr');
      if (firstRow) {
        dragCacheRef.current.colCount = firstRow.children.length;
      }
    }
    var lastRow = cachedRows[cachedRows.length - 1];
    if (lastRow && !lastRow.classList.contains('row-obj-lastplaceholder')) {
      lastRow.style.setProperty('display', 'table-row', "important");
    }

    // callback
    var dragStart = function dragStart(callback) {
      callback.call(null, draggedObj, sortData, sortDataByIndex(sortData, data));
    };
    onRowDrag === null || onRowDrag === void 0 ? void 0 : onRowDrag(dragStart, null);
  }, [handledragOver, sortData, data, spyElement, onRowDrag]);
  var handleDragEnd = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (e) {
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    setIsDragging(false);

    // Use cached draggedObj if available
    var currentDraggedObj = dragCacheRef.current.draggedObj || draggedObj;
    var currentOverObj = dragCacheRef.current.overObj || overObj;
    if (currentDraggedObj) {
      currentDraggedObj.style.display = 'table-row';
      currentDraggedObj.classList.remove('dragging');
    }
    removePlaceholder();
    tbodyRef === null || tbodyRef === void 0 ? void 0 : tbodyRef.classList.remove('drag-trigger-mousedown');

    // Cancel any pending animation frame
    if (dragCacheRef.current.rafId !== null) {
      cancelAnimationFrame(dragCacheRef.current.rafId);
      dragCacheRef.current.rafId = null;
    }
    if (currentOverObj === null) {
      // Reset cache
      dragCacheRef.current.draggedObj = null;
      dragCacheRef.current.overObj = null;
      dragCacheRef.current.allRowsCache = null;
      dragCacheRef.current.lastOverOrder = null;
      return;
    }

    // update state
    var curData = [];
    curData = JSON.parse(JSON.stringify(sortData));
    var from = Number(currentDraggedObj.dataset.order);
    var to = Number(currentOverObj.dataset.order);

    // Get real rows to determine the actual last row index
    var allRowsForLastIndex = allRows(spyElement);
    var realRows = getRealRows(allRowsForLastIndex);
    var actualLastRowIndex = realRows.length - 1;

    // Standard drag-and-drop logic:
    // When dragging from a lower index to a higher index, we need to decrement 'to'
    // because removing the element at 'from' causes all subsequent elements to shift left by 1
    // However, when dragging to the last position, we want to swap with the last element
    // After removing 'from', if we want to swap with the last element, we should insert
    // at the position that will result in the dragged element being at the last position
    if (from < to) {
      // Special case: dragging to the last position
      // We want to swap with the last element, so after removing 'from',
      // we should insert at the new last position (which is curData.length - 1)
      // Since 'to' is the original last index, and we're removing 'from' (which is < 'to'),
      // the new last position after removal is still 'to' (no shift because 'from' is before 'to')
      // Wait, that's not right. If we remove 'from', elements from 'from+1' to 'to' shift left by 1
      // So 'to' becomes 'to-1'. But we want to insert at the last position, which is 'to-1'
      // So we should decrement 'to' as normal. But then the element will be at 'to-1', not 'to'
      // 
      // Actually, the issue is: when dragging to the last element, we want to SWAP with it
      // So the dragged element should end up at the last position, and the last element should
      // end up at the dragged element's original position
      // 
      // Let's think step by step with an example: [A, B, C, D, E], from=1 (B), to=4 (E)
      // We want result: [A, C, D, E, B] (B and E swapped)
      // Step 1: Remove B -> [A, C, D, E] (indices 0-3)
      // Step 2: Insert B at position 4 -> [A, C, D, E, B] ✓
      // So 'to' should be 4 (not decremented) to get the correct result
      if (to === actualLastRowIndex) {
        // Don't decrement 'to' when dragging to the last position
        // This ensures the element is inserted at the last position after removal
      } else {
        // Normal case: dragging forward but not to the last position
        to--;
      }
    }
    // If from >= to, no adjustment needed (dragging backward)

    // Optimize: simplify the sorting logic (the nested loop was inefficient)
    curData.splice(to, 0, curData.splice(from, 1)[0]);
    var newData = useTableDraggable_toConsumableArray(curData); // Direct copy instead of nested loop

    setSortData(newData);

    // Performance optimization: batch DOM updates using a map
    var table = spyElement.querySelector('table');
    if (!table) return;
    var tbody = table.querySelector('tbody');
    if (!tbody) return;

    // Get all rows once and create a map for faster lookups
    // Support both data-key attribute (user-provided) and data-order fallback
    var allRowsElements = Array.from(allRows(spyElement));

    // Create a map: original index (from sortData) -> row element
    var rowMap = new Map();
    allRowsElements.forEach(function (row) {
      // First try to use data-key attribute (if user provided it)
      var dataKey = row.getAttribute('data-key');
      if (dataKey) {
        var match = dataKey.match(/row-(\d+)/);
        if (match) {
          var index = Number(match[1]);
          rowMap.set(index, row);
          return;
        }
      }

      // Fallback: use data-order to match with sortData indices
      var currentOrder = Number(row.dataset.order);
      if (sortData && !isNaN(currentOrder) && currentOrder >= 0 && currentOrder < sortData.length) {
        var originalIndex = sortData[currentOrder];
        if (originalIndex !== undefined) {
          rowMap.set(originalIndex, row);
        }
      }
    });

    // Update order attributes using the map (batch operation)
    newData.forEach(function (curId, order) {
      var _el = rowMap.get(curId);
      if (_el !== null && _el !== undefined) {
        _el.dataset.order = order.toString();
      }
    });

    // Performance optimization: Use DocumentFragment to batch DOM updates
    // NOTE: Keep the special last placeholder row (`row-obj-lastplaceholder`)
    // out of the main sort, otherwise it may jump to the top after each drag.
    var lastPlaceholderRow = allRowsElements.find(function (row) {
      return row.classList && row.classList.contains('row-obj-lastplaceholder');
    });
    var rowsToSort = lastPlaceholderRow ? allRowsElements.filter(function (row) {
      return row !== lastPlaceholderRow;
    }) : allRowsElements;
    var sorter = function sorter(a, b) {
      var txt1 = Number(a.dataset.order);
      var txt2 = Number(b.dataset.order);
      return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
    };
    var sorted = useTableDraggable_toConsumableArray(rowsToSort).sort(sorter).reverse();

    // Ensure the last placeholder row always stays at the bottom
    if (lastPlaceholderRow) {
      sorted.push(lastPlaceholderRow);
    }

    // Use DocumentFragment to minimize reflows
    var fragment = document.createDocumentFragment();
    sorted.forEach(function (e) {
      return fragment.appendChild(e);
    });
    tbody.appendChild(fragment);

    // callback
    var dragEnd = function dragEnd(callback) {
      callback.call(null, currentDraggedObj, newData, sortDataByIndex(newData, data));
    };
    onRowDrag === null || onRowDrag === void 0 ? void 0 : onRowDrag(null, dragEnd);

    // init clone <tr>
    // !!! It needs to be put at the end of the code to fix the location of the clone element
    var _allRows = allRows(spyElement);
    dragCacheRef.current.allRowsCache = _allRows;
    dragCacheRef.current.lastUpdateTime = Date.now();

    // Reset cache
    dragCacheRef.current.draggedObj = null;
    dragCacheRef.current.overObj = null;
    dragCacheRef.current.lastOverOrder = null;
  }, [sortData, spyElement, data, onRowDrag]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      if (Array.isArray(data) && data.length > 0) {
        // !!! REQUIRED "data.length > 0" to avoid data-order cannot be assigned when asynchronous data is empty
        data.forEach(function (item, i) {
          item.order = i;
        });

        // Initialize custom props of table elements
        initOrderProps(spyElement);
        initRowColProps(spyElement);

        // Initialize drag & drop data
        initDragDropData();
      }
    }
  }, [data, enabled, spyElement].concat(useTableDraggable_toConsumableArray(deps)));
  return {
    isDragging: isDragging,
    dragHandlers: {
      handleDragStart: handleDragStart,
      handleDragOver: handledragOver,
      handleDragEnd: handleDragEnd
    },
    handleTbodyEnter: handleTbodyEnter,
    handleTbodyLeave: handleTbodyLeave
  };
}
/* harmony default export */ const hooks_useTableDraggable = (useTableDraggable);
;// CONCATENATED MODULE: ./src/utils/hooks/useTableKeyPress.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function useTableKeyPress_toConsumableArray(arr) { return useTableKeyPress_arrayWithoutHoles(arr) || useTableKeyPress_iterableToArray(arr) || useTableKeyPress_unsupportedIterableToArray(arr) || useTableKeyPress_nonIterableSpread(); }
function useTableKeyPress_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableKeyPress_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableKeyPress_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableKeyPress_arrayLikeToArray(o, minLen); }
function useTableKeyPress_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableKeyPress_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableKeyPress_arrayLikeToArray(arr); }
function useTableKeyPress_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Listens for changes in the pressed state of a given key
 * 
 * @usage:
 *
 const App = () => {
     const keyboardFocusable = true;
     const rootRef = useRef<any>(null);
     // Effective element movement on keystroke
 
     const refNode = useRef(new Map<string, HTMLTableElement>());
     const [focusableCellId, setFocusableCellId] = useState<string>('');
 
     // Count the number of columns per row
     const rootDataInfo = {"totalRow":2,"totalCol":[{"row":0,"colCount":6},{"row":1,"colCount":6},{"row":2,"colCount":6}]};

     // Example: handle cell key press with edge detection
     const handleCellKeyPressed = (
         classname: string,
         elem: HTMLTableCellElement,
         event: React.KeyboardEvent<Element>,
         isLeftEdge: boolean,
         isRightEdge: boolean,
         isTopEdge: boolean,
         isBottomEdge: boolean
     ) => {
         if (isLeftEdge) {
             // Handle when at the leftmost cell
         }
         if (isRightEdge) {
             // Handle when at the rightmost cell
         }
         if (isTopEdge) {
             // Handle when at the topmost cell
         }
         if (isBottomEdge) {
             // Handle when at the bottommost cell
         }
         // Your business logic here
     };

     const { handleKeyPressed } = useTableKeyPress({
         enabled: keyboardFocusable,
         data: [{ a: 1, b: 2, c: 3 }],
         spyElement: rootRef.current,
         rootDataInfo,
         refNode,
         focusableCellId,
         setFocusableCellId,
         onCellKeyPressed: handleCellKeyPressed,
         onCellPressEnter: () => {},
     }, [rootRef]);

     return (
         <div
             ref={rootRef}
             tabIndex={-1}
             onKeyDown={handleKeyPressed} // require "tabIndex" attribute
         >Test</div>
     );
 };
 */


var useTableKeyPress = function useTableKeyPress(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    rootDataInfo = _ref.rootDataInfo,
    refNode = _ref.refNode,
    focusableCellId = _ref.focusableCellId,
    setFocusableCellId = _ref.setFocusableCellId,
    onCellKeyPressed = _ref.onCellKeyPressed,
    onCellPressEnter = _ref.onCellPressEnter,
    onKeyDown = _ref.onKeyDown;
  var focusableCellIdRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(focusableCellId);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    focusableCellIdRef.current = focusableCellId;
  }, [focusableCellId]);
  var handleKeyPressed = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var _focusableCellIdRef$c;
      var key, isNumLockOn, currentCell, row, col, nextCellSignal, oldCellSignal, _row, _col, move, _nextCellSignal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            key = event.code;
            isNumLockOn = event.getModifierState && event.getModifierState('NumLock'); // If Enter is pressed and keyboard navigation is disabled, just trigger onCellPressEnter
            if (!((key === 'Enter' || key === 'NumpadEnter') && !enabled)) {
              _context.next = 9;
              break;
            }
            currentCell = event.target;
            row = Number(currentCell.getAttribute('data-table-row'));
            col = Number(currentCell.getAttribute('data-table-col'));
            nextCellSignal = cellMark(row, col);
            onCellPressEnter === null || onCellPressEnter === void 0 ? void 0 : onCellPressEnter(nextCellSignal, refNode.current.get(nextCellSignal), event);
            return _context.abrupt("return");
          case 9:
            if (!(!Array.isArray(data) || rootDataInfo === null || spyElement === null || typeof enabled === 'undefined' || enabled === false)) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("return");
          case 11:
            // Parse the current focused cell's row and column
            oldCellSignal = (_focusableCellIdRef$c = focusableCellIdRef.current) === null || _focusableCellIdRef$c === void 0 ? void 0 : _focusableCellIdRef$c.replace('cell-', '').split('-');
            _row = Number(oldCellSignal[0]);
            _col = Number(oldCellSignal[1]); // Move function to handle arrow key navigation
            move = function move(key) {
              var isLeftEdge = false;
              var isRightEdge = false;
              var isTopEdge = false;
              var isBottomEdge = false;
              var maxCol = 0;
              if (rootDataInfo && Array.isArray(rootDataInfo.totalCol)) {
                var rowInfo = rootDataInfo.totalCol.find(function (r) {
                  return r.row === _row;
                });
                if (rowInfo) {
                  maxCol = rowInfo.colCount;
                }
              }

              // Numpad2/4/6/8 trigger direction is allowed only when NumLock is off
              if (key === 'ArrowLeft' || key === 'Numpad4' && !isNumLockOn) {
                if (_col - 1 < 0) {
                  isLeftEdge = true;
                  _col = 0;
                } else {
                  _col = _col - 1;
                }
              }
              if (key === 'ArrowRight' || key === 'Numpad6' && !isNumLockOn) {
                if (_col + 1 > maxCol - 1) {
                  isRightEdge = true;
                  _col = maxCol - 1;
                } else {
                  _col = _col + 1;
                }
              }
              if (key === 'ArrowUp' || key === 'Numpad8' && !isNumLockOn) {
                if (_row - 1 < 0) {
                  isTopEdge = true;
                  _row = 0;
                } else {
                  _row = _row - 1;
                }
              }
              if (key === 'ArrowDown' || key === 'Numpad2' && !isNumLockOn) {
                if (_row + 1 > rootDataInfo.totalRow - 1) {
                  isBottomEdge = true;
                  _row = rootDataInfo.totalRow - 1;
                } else {
                  _row = _row + 1;
                }
              }
              var nextCellSignal = cellMark(_row, _col);
              // Focus the current cell
              removeCellFocusClassName(spyElement);
              var targetCell = refNode.current.get(nextCellSignal);
              if (typeof targetCell !== 'undefined') {
                targetCell.classList.add('cell-focus');
              }
              setFocusableCellId(nextCellSignal);
              // Callback with edge detection
              onCellKeyPressed === null || onCellKeyPressed === void 0 ? void 0 : onCellKeyPressed(nextCellSignal, refNode.current.get(nextCellSignal), event, isLeftEdge, isRightEdge, isTopEdge, isBottomEdge);
              onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
            }; // Handle arrow key navigation
            // Numpad2/4/6/8 trigger direction is allowed only when NumLock is off
            if (key === 'ArrowLeft' || key === 'Numpad4' && !isNumLockOn) {
              move('ArrowLeft');
            }
            if (key === 'ArrowRight' || key === 'Numpad6' && !isNumLockOn) {
              move('ArrowRight');
            }
            if (key === 'ArrowUp' || key === 'Numpad8' && !isNumLockOn) {
              move('ArrowUp');
            }
            if (key === 'ArrowDown' || key === 'Numpad2' && !isNumLockOn) {
              move('ArrowDown');
            }

            // Handle Enter key
            if (key === 'Enter' || key === 'NumpadEnter') {
              _nextCellSignal = cellMark(_row, _col);
              onCellPressEnter === null || onCellPressEnter === void 0 ? void 0 : onCellPressEnter(_nextCellSignal, refNode.current.get(_nextCellSignal), event);
            }
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [focusableCellId, rootDataInfo, data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      // Initialize custom props of table elements (only once)
      initOrderProps(spyElement);
      initRowColProps(spyElement);
    }
  }, [enabled, spyElement].concat(useTableKeyPress_toConsumableArray(deps)));
  return {
    handleKeyPressed: handleKeyPressed,
    /**
     * Expose handleKeyPressed for external usage, e.g., via contentRef in Table component.
     * This allows calling handleKeyPressed programmatically from outside, such as with a custom onCellKeyPressed method.
     */
    triggerCellKeyPressed: handleKeyPressed
  };
};
/* harmony default export */ const hooks_useTableKeyPress = (useTableKeyPress);
;// CONCATENATED MODULE: ./src/Table.tsx
var _excluded = ["contentRef", "children", "wrapperClassName", "tableClassName", "bordered", "colGroup", "cellAutoWidth", "colSortable", "onColSort", "rowDraggable", "onRowDrag", "responsive", "enhancedResponsive", "enhancedResponsiveWithScrollBar", "data", "filterFields", "filterControlClassName", "filterControlPlaceholder", "filterLabel", "onChangeFilter", "dataSelected", "rowSelectable", "onChangeRowSelect", "keyboardFocusable", "onCellKeyPressed", "onCellPressEnter"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Table_slicedToArray(arr, i) { return Table_arrayWithHoles(arr) || Table_iterableToArrayLimit(arr, i) || Table_unsupportedIterableToArray(arr, i) || Table_nonIterableRest(); }
function Table_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Table_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Table_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Table_arrayLikeToArray(o, minLen); }
function Table_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Table_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Table_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Table = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var contentRef = _ref.contentRef,
    children = _ref.children,
    wrapperClassName = _ref.wrapperClassName,
    tableClassName = _ref.tableClassName,
    bordered = _ref.bordered,
    colGroup = _ref.colGroup,
    cellAutoWidth = _ref.cellAutoWidth,
    colSortable = _ref.colSortable,
    onColSort = _ref.onColSort,
    rowDraggable = _ref.rowDraggable,
    onRowDrag = _ref.onRowDrag,
    responsive = _ref.responsive,
    enhancedResponsive = _ref.enhancedResponsive,
    enhancedResponsiveWithScrollBar = _ref.enhancedResponsiveWithScrollBar,
    data = _ref.data,
    filterFields = _ref.filterFields,
    filterControlClassName = _ref.filterControlClassName,
    filterControlPlaceholder = _ref.filterControlPlaceholder,
    filterLabel = _ref.filterLabel,
    onChangeFilter = _ref.onChangeFilter,
    dataSelected = _ref.dataSelected,
    rowSelectable = _ref.rowSelectable,
    onChangeRowSelect = _ref.onChangeRowSelect,
    keyboardFocusable = _ref.keyboardFocusable,
    onCellKeyPressed = _ref.onCellKeyPressed,
    onCellPressEnter = _ref.onCellPressEnter,
    attributes = _objectWithoutProperties(_ref, _excluded);
  var uniqueID = useComId_default()();
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // context
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState2 = Table_slicedToArray(_useState, 2),
    instance = _useState2[0],
    setInstance = _useState2[1];

  // selection
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(new Set()),
    _useState4 = Table_slicedToArray(_useState3, 2),
    selectedItems = _useState4[0],
    setSelectedItems = _useState4[1];

  // effective element movement on keystroke
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState6 = Table_slicedToArray(_useState5, 2),
    rootDataInfo = _useState6[0],
    setRootDataInfo = _useState6[1];
  var refNode = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(new Map());
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(''),
    _useState8 = Table_slicedToArray(_useState7, 2),
    focusableCellId = _useState8[0],
    setFocusableCellId = _useState8[1];

  // responsive
  var responsiveClasses = typeof responsive === 'undefined' || responsive === true ? 'table-responsive' : '';
  var enhancedResponsiveClasses = '';
  if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
  if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';

  //Set the class names of different styles
  var tableClasses = '';
  if (bordered) tableClasses += ' table-bordered';
  if (colGroup) tableClasses += ' table-colgroup';

  // responsive table initialization
  hooks_useTableResponsive({
    enabled: enhancedResponsiveWithScrollBar && rootRef.current,
    spyElement: rootRef.current
  }, [rootRef]);

  // initialize drag & drop data
  var _useTableDraggable = hooks_useTableDraggable({
      enabled: rowDraggable && rootRef.current,
      data: data,
      spyElement: rootRef.current,
      onRowDrag: onRowDrag
    }, [data, rootRef]),
    isDragging = _useTableDraggable.isDragging,
    dragHandlers = _useTableDraggable.dragHandlers,
    handleTbodyEnter = _useTableDraggable.handleTbodyEnter,
    handleTbodyLeave = _useTableDraggable.handleTbodyLeave;
  var tableKeyPress = hooks_useTableKeyPress({
    enabled: keyboardFocusable,
    data: data,
    spyElement: rootRef.current,
    rootDataInfo: rootDataInfo,
    refNode: refNode,
    focusableCellId: focusableCellId,
    setFocusableCellId: setFocusableCellId,
    onCellKeyPressed: onCellKeyPressed,
    onCellPressEnter: onCellPressEnter
  }, [data, rootRef, rootDataInfo, refNode, focusableCellId]);
  var updateFocusableCell = function updateFocusableCell(row, col) {
    setFocusableCellId(cellMark(row, col));

    // Find and focus the cell element
    var targetCell = refNode.current.get(cellMark(row, col));
    if (typeof targetCell !== 'undefined') {
      removeCellFocusClassName(rootRef.current);
      targetCell.classList.add('cell-focus');
    }
  };

  // initialize context
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setInstance(data);
  }, [data]);

  // The items are selected by default
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (Array.isArray(data) && Array.isArray(dataSelected) && dataSelected.length > 0) {
      var newSelectedItems = new Set(selectedItems);
      dataSelected.forEach(function (s) {
        newSelectedItems.add(String(s));
      });
      setSelectedItems(newSelectedItems);
    }
  }, [data, dataSelected]);

  // Synchronous execution, which blocks rendering
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useLayoutEffect)(function () {
    if (rootRef.current) {
      // Initialize custom props of table elements
      initRowColProps(rootRef.current);

      // Count the number of columns per row
      var totalCol = getTableRowsColCount(rootRef.current);
      setRootDataInfo({
        totalRow: Array.isArray(data) ? data.length : 0,
        totalCol: totalCol
      });

      // Initialize the focused index
      if (keyboardFocusable) {
        updateFocusableCell(0, 0);
      }
    }
  }, [data]); // Re-run when data changes

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      setFocusableCell: updateFocusableCell,
      clearAllCellFocus: function clearAllCellFocus() {
        if (rootRef.current) {
          removeCellFocusClassName(rootRef.current);
          var focusedCells = rootRef.current.querySelectorAll('td.cell-focus, th.cell-focus');
          focusedCells.forEach(function (cell) {
            if (typeof cell.blur === 'function') cell.blur();
            if (cell.classList) cell.classList.remove('cell-focus');
          });
        }
      },
      getCellElement: function getCellElement(row, col) {
        // Find and focus the cell element
        var targetCell = refNode.current.get(cellMark(row, col));
        return typeof targetCell !== 'undefined' ? targetCell : null;
      },
      forceFocusCell: function forceFocusCell(row, col) {
        // Find and focus the cell element
        var targetCell = refNode.current.get(cellMark(row, col));
        if (typeof targetCell !== 'undefined') {
          // After forcing focus, you can use the keyboard to listen directly
          targetCell.focus();
        }
      },
      triggerCellKeyPressed: tableKeyPress.triggerCellKeyPressed
    };
  }, [rootRef, data, rootDataInfo]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TableProvider, {
    value: {
      originData: data,
      rootRef: rootRef,
      // sort
      colSortable: colSortable,
      onColSort: onColSort,
      // drag & drop
      rowDraggable: rowDraggable,
      isRowDragging: isDragging,
      handleDragStart: dragHandlers.handleDragStart,
      handleDragEnd: dragHandlers.handleDragEnd,
      handledragOver: dragHandlers.handleDragOver,
      handleTbodyEnter: handleTbodyEnter,
      // filter
      filterFields: filterFields,
      instance: instance,
      setInstance: setInstance,
      onChangeFilter: onChangeFilter,
      // selection
      dataSelected: dataSelected,
      rowSelectable: rowSelectable,
      selectedItems: selectedItems,
      setSelectedItems: setSelectedItems,
      onChangeRowSelect: onChangeRowSelect,
      // key press
      keyboardFocusable: keyboardFocusable,
      rootDataInfo: rootDataInfo,
      setRootDataInfo: setRootDataInfo,
      refNode: refNode,
      focusableCellId: focusableCellId,
      setFocusableCellId: setFocusableCellId,
      onCellKeyPressed: onCellKeyPressed,
      onCellPressEnter: onCellPressEnter
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({}, attributes, {
    id: uniqueID,
    ref: function ref(node) {
      rootRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    className: (0,cls.combinedCls)('syntable__wrapper', (0,cls.clsWrite)(wrapperClassName, 'mb-3 position-relative'), responsiveClasses, enhancedResponsiveClasses, {
      'has-checkbox': rowSelectable,
      'allow-dragdrop': rowDraggable,
      'allow-sort': colSortable
    })
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: (0,cls.combinedCls)((0,cls.clsWrite)(tableClassName, 'table'), tableClasses, {
      'cell-autowidth': cellAutoWidth
    })
  }, children))));
});
/* harmony default export */ const src_Table = (Table);
;// CONCATENATED MODULE: ./src/TableBody.tsx
var TableBody_excluded = ["children", "className"];
function TableBody_extends() { TableBody_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableBody_extends.apply(this, arguments); }
function TableBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var TableBody = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableBody_objectWithoutProperties(_ref, TableBody_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    rowDraggable = _useContext.rowDraggable,
    handledragOver = _useContext.handledragOver;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", TableBody_extends({}, attributes, {
    ref: externalRef,
    onDragOver: rowDraggable ? handledragOver : function () {
      return void 0;
    },
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableBody = (TableBody);
;// CONCATENATED MODULE: ./src/TableCell.tsx
function TableCell_typeof(obj) { "@babel/helpers - typeof"; return TableCell_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TableCell_typeof(obj); }
var TableCell_excluded = ["children", "active", "nowrap", "activeClassName", "className", "colSpan", "style", "scope", "onClick", "onKeyDown"];
function TableCell_extends() { TableCell_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCell_extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return TableCell_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (TableCell_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (TableCell_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TableCell_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCell_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCell_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TableCell = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    active = _ref.active,
    nowrap = _ref.nowrap,
    activeClassName = _ref.activeClassName,
    myClassName = _ref.className,
    colSpan = _ref.colSpan,
    style = _ref.style,
    scope = _ref.scope,
    _onClick = _ref.onClick,
    onKeyDown = _ref.onKeyDown,
    attributes = TableCell_objectWithoutProperties(_ref, TableCell_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rootRef = _useContext.rootRef,
    rootDataInfo = _useContext.rootDataInfo,
    setRootDataInfo = _useContext.setRootDataInfo,
    refNode = _useContext.refNode,
    focusableCellId = _useContext.focusableCellId,
    setFocusableCellId = _useContext.setFocusableCellId,
    keyboardFocusable = _useContext.keyboardFocusable,
    onCellKeyPressed = _useContext.onCellKeyPressed,
    onCellPressEnter = _useContext.onCellPressEnter;
  var CellComponent = scope ? 'th' : 'td';

  // key press initialization
  var _useTableKeyPress = hooks_useTableKeyPress({
      enabled: keyboardFocusable,
      data: originData,
      spyElement: rootRef.current,
      rootDataInfo: rootDataInfo,
      refNode: refNode,
      focusableCellId: focusableCellId,
      setFocusableCellId: setFocusableCellId,
      onCellKeyPressed: onCellKeyPressed,
      onCellPressEnter: onCellPressEnter,
      onKeyDown: onKeyDown
    }, [rootRef]),
    handleKeyPressed = _useTableKeyPress.handleKeyPressed;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(CellComponent, TableCell_extends({}, attributes, {
    style: typeof nowrap === 'undefined' ? style : _objectSpread({
      whiteSpace: (0,cls.clsWrite)(nowrap, 'normal', 'nowrap')
    }, style),
    ref: function ref(node) {
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
      if (node) {
        var _row = node.dataset.tableRow;
        var _col = node.dataset.tableCol;
        if (typeof _row !== 'undefined' && typeof _col !== 'undefined') {
          refNode.current.set(cellMark(_row, _col), node);
        }
      }
    },
    colSpan: colSpan,
    tabIndex: -1,
    onKeyDown: handleKeyPressed // require "tabIndex" attribute
    ,
    onClick: function onClick(e) {
      var _el = e.currentTarget;

      // key press initialization
      if (keyboardFocusable) {
        var _row = Number(_el.dataset.tableRow);
        var _col = Number(_el.dataset.tableCol);
        removeCellFocusClassName(rootRef.current);
        setFocusableCellId(cellMark(_row, _col));
        _el.classList.add('cell-focus');
      }

      // callback
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
    },
    className: (0,cls.combinedCls)(myClassName, active ? (0,cls.clsWrite)(activeClassName, 'active') : undefined)
  }), children));
});
/* harmony default export */ const src_TableCell = (TableCell);
;// CONCATENATED MODULE: ./src/TableHead.tsx
var TableHead_excluded = ["children", "className"];
function TableHead_extends() { TableHead_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableHead_extends.apply(this, arguments); }
function TableHead_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableHead_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableHead_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableHead = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableHead_objectWithoutProperties(_ref, TableHead_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", TableHead_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableHead = (TableHead);
;// CONCATENATED MODULE: ./src/TableFoot.tsx
var TableFoot_excluded = ["children", "className"];
function TableFoot_extends() { TableFoot_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableFoot_extends.apply(this, arguments); }
function TableFoot_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableFoot_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableFoot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableFoot = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    className = _ref.className,
    attributes = TableFoot_objectWithoutProperties(_ref, TableFoot_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tfoot", TableFoot_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), children));
});
/* harmony default export */ const src_TableFoot = (TableFoot);
;// CONCATENATED MODULE: ./src/TableRow.tsx
var TableRow_excluded = ["children", "active", "activeClassName", "className", "itemData"];
function TableRow_extends() { TableRow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableRow_extends.apply(this, arguments); }
function TableRow_typeof(obj) { "@babel/helpers - typeof"; return TableRow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TableRow_typeof(obj); }
function TableRow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableRow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableRow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var TableRow = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    active = _ref.active,
    activeClassName = _ref.activeClassName,
    className = _ref.className,
    itemData = _ref.itemData,
    attributes = TableRow_objectWithoutProperties(_ref, TableRow_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    filterFields = _useContext.filterFields,
    selectedItems = _useContext.selectedItems,
    instance = _useContext.instance,
    rowDraggable = _useContext.rowDraggable,
    handleDragStart = _useContext.handleDragStart,
    handleDragEnd = _useContext.handleDragEnd;

  // ================================================================
  // filter
  // ================================================================
  var filteredData = instance || [];
  var filterFieldsData = filterFields || [];

  // ================================================================
  // selection
  // ================================================================
  var _res = convertMapToArr(selectedItems);
  // Performance optimization: stringify itemData only once instead of N times
  var itemDataStr = itemData ? JSON.stringify(itemData) : '';
  var filteredSelectedItems = _res.map(function (v) {
    return Number(v);
  }).map(function (rowNum) {
    var originItem = originData === null || originData === void 0 ? void 0 : originData[rowNum];
    // Fast path: reference equality
    if (itemData === originItem) return originItem;
    // Fallback: JSON comparison (itemDataStr is cached)
    if (itemDataStr && itemDataStr === JSON.stringify(originItem)) {
      return originItem;
    }
  }).filter(Boolean);
  var selectedClassName = activeClassName || 'active';
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", TableRow_extends({}, attributes, {
    ref: externalRef,
    draggable: rowDraggable,
    onDragStart: rowDraggable ? handleDragStart : function () {
      return void 0;
    },
    onDragEnd: rowDraggable ? handleDragEnd : function () {
      return void 0;
    },
    "data-row-data": "".concat(itemData && TableRow_typeof(itemData) === 'object' ? JSON.stringify(itemData) : itemData),
    className: "row-obj ".concat(className || '', " ").concat(active ? selectedClassName : '', " ").concat(itemData && originData ? filteredData.every(function (item) {
      return filterFieldsData.some(function (s) {
        var _item$s, _itemData$s;
        return !((_item$s = item[s]) !== null && _item$s !== void 0 && _item$s.toLowerCase().includes((_itemData$s = itemData[s]) === null || _itemData$s === void 0 ? void 0 : _itemData$s.toLowerCase()));
      });
    }) ? 'd-none' : '' : '', " ").concat(itemData && originData && filteredSelectedItems.length > 0 ? selectedClassName : '')
  }), children));
});
/* harmony default export */ const src_TableRow = (TableRow);
;// CONCATENATED MODULE: ./src/TableColgroup.tsx
var TableColgroup_excluded = ["className", "length"];
function TableColgroup_extends() { TableColgroup_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableColgroup_extends.apply(this, arguments); }
function TableColgroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableColgroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableColgroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableColgroup = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var className = _ref.className,
    length = _ref.length,
    attributes = TableColgroup_objectWithoutProperties(_ref, TableColgroup_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("colgroup", TableColgroup_extends({}, attributes, {
    ref: externalRef,
    className: className || ''
  }), Array.from({
    length: length || 0
  }, function (v, k) {
    return k; // Return k(ey) as value for this index
  }).map(function (el, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("col", {
      key: i
    });
  })));
});
/* harmony default export */ const src_TableColgroup = (TableColgroup);
;// CONCATENATED MODULE: ./src/TableCaption.tsx
var TableCaption_excluded = ["children", "captionSide", "className"];
function TableCaption_extends() { TableCaption_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCaption_extends.apply(this, arguments); }
function TableCaption_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TableCaption_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function TableCaption_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCaption = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (_ref, externalRef) {
  var children = _ref.children,
    captionSide = _ref.captionSide,
    className = _ref.className,
    attributes = TableCaption_objectWithoutProperties(_ref, TableCaption_excluded);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("caption", TableCaption_extends({}, attributes, {
    ref: externalRef,
    className: "syntable__caption ".concat(className || '', " syntable__caption--").concat(captionSide || 'top')
  }), children));
});
/* harmony default export */ const src_TableCaption = (TableCaption);
;// CONCATENATED MODULE: ./src/utils/TableFilter.tsx


var TableFilter = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var className = props.className,
    placeholder = props.placeholder,
    label = props.label,
    _onChange = props.onChange;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    filterFields = _useContext.filterFields,
    setInstance = _useContext.setInstance,
    onChangeFilter = _useContext.onChangeFilter;
  var filterFieldsData = filterFields || [];
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "syntable__filter-container"
  }, label || null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "text",
    ref: externalRef,
    className: className || '',
    onChange: function onChange(e) {
      var filteredData = originData === null || originData === void 0 ? void 0 : originData.filter(function (item) {
        return filterFieldsData.some(function (s) {
          var _item$s;
          return (_item$s = item[s]) === null || _item$s === void 0 ? void 0 : _item$s.toLowerCase().includes(e.target.value.toLowerCase());
        });
      });
      if (e.target.value.trim() === '') {
        setInstance(originData);
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter(originData);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e, originData);
      } else {
        setInstance(filteredData);
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter(filteredData);
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e, filteredData);
      }
    },
    placeholder: placeholder || ''
  }));
});
/* harmony default export */ const utils_TableFilter = (TableFilter);
;// CONCATENATED MODULE: ./src/utils/ToggleSelection.tsx
var ToggleSelection_excluded = ["contentRef", "row", "useRadio", "className", "indeterminate", "disabled", "name", "value", "onChange", "checked"];
function ToggleSelection_extends() { ToggleSelection_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ToggleSelection_extends.apply(this, arguments); }
function ToggleSelection_slicedToArray(arr, i) { return ToggleSelection_arrayWithHoles(arr) || ToggleSelection_iterableToArrayLimit(arr, i) || ToggleSelection_unsupportedIterableToArray(arr, i) || ToggleSelection_nonIterableRest(); }
function ToggleSelection_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ToggleSelection_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ToggleSelection_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ToggleSelection_arrayLikeToArray(o, minLen); }
function ToggleSelection_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ToggleSelection_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ToggleSelection_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ToggleSelection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ToggleSelection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ToggleSelection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ToggleSelection = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, ref) {
  var contentRef = props.contentRef,
    row = props.row,
    useRadio = props.useRadio,
    className = props.className,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    disabled = props.disabled,
    name = props.name,
    value = props.value,
    onChange = props.onChange,
    checked = props.checked,
    attributes = ToggleSelection_objectWithoutProperties(props, ToggleSelection_excluded);
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rowSelectable = _useContext.rowSelectable,
    selectedItems = _useContext.selectedItems,
    setSelectedItems = _useContext.setSelectedItems,
    onChangeRowSelect = _useContext.onChangeRowSelect;
  var totalSize = originData.length;
  var defaultRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  var resolvedRef = ref || defaultRef;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = ToggleSelection_slicedToArray(_useState, 2),
    allChecked = _useState2[0],
    setAllChecked = _useState2[1];

  // exposes the following methods
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(contentRef, function () {
    return {
      indeterminate: function indeterminate(value) {
        resolvedRef.current.indeterminate = value;
      },
      setSelectAll: function setSelectAll(value) {
        setAllChecked(value);
      },
      set: function set(check) {
        var _resolvedRef$current;
        var s = String((_resolvedRef$current = resolvedRef.current) === null || _resolvedRef$current === void 0 ? void 0 : _resolvedRef$current.dataset.row);
        setSelectedItems(function (prev) {
          var _data = new Set(prev);
          if (check) {
            _data.add(s);
          } else {
            _data["delete"](s);
          }
          return _data;
        });
      },
      control: function control() {
        return resolvedRef.current;
      }
    };
  }, [contentRef, resolvedRef, selectedItems]);
  function selectTarget(rowIndex) {
    var _val = String(rowIndex);

    // filter
    // =================================================================
    var _selectedIndex = [];
    var filteredData = [];
    if (!isNaN(row) && Array.isArray(originData)) {
      // all
      if (row === -1) {
        var _target = Array.from({
          length: totalSize
        }, function (v, k) {
          return String(k);
        });
        if (selectedItems.size === 0 || selectedItems.size < totalSize) {
          _selectedIndex = convertMapToArr(checkedSpecItems(_target, true)).map(function (v) {
            return Number(v);
          });
          setAllChecked(true);
        } else {
          _selectedIndex = convertMapToArr(checkedSpecItems(_target, false)).map(function (v) {
            return Number(v);
          });
          setAllChecked(false);
        }
      } else {
        var _newSelectedItems = checkedOneItem(_val);
        var _res = convertMapToArr(_newSelectedItems);
        _selectedIndex = _res.map(function (v) {
          return Number(v);
        });
      }
      filteredData = originData.filter(function (v, i) {
        return _selectedIndex.includes(i);
      });
    }
    return filteredData;
  }
  function selectTargetExclusive(rowIndex) {
    var _val = String(rowIndex);

    // filter
    // =================================================================
    var filteredData = [];
    if (!isNaN(row) && Array.isArray(originData)) {
      var newSelectedItems = new Set();
      newSelectedItems.add(_val);
      setSelectedItems(newSelectedItems);
      filteredData = originData.filter(function (v, i) {
        return Number(_val) === i;
      });
    }
    return filteredData;
  }
  function checkedSpecItems(itemKey, check) {
    // first, make a copy of the original set rather than mutating the original
    var newSelectedItems = new Set(selectedItems);
    itemKey.forEach(function (s) {
      if (check) {
        newSelectedItems.add(s);
      } else {
        newSelectedItems["delete"](s);
      }
    });
    setSelectedItems(newSelectedItems);
    return newSelectedItems;
  }
  function checkedOneItem(itemKey) {
    // first, make a copy of the original set rather than mutating the original
    var newSelectedItems = new Set(selectedItems);
    if (!newSelectedItems.has(itemKey)) {
      newSelectedItems.add(itemKey);
    } else {
      newSelectedItems["delete"](itemKey);
    }
    setSelectedItems(newSelectedItems);
    return newSelectedItems;
  }
  function handleChange(event) {
    var _val = event.target.value;
    var filteredData = useRadio ? selectTargetExclusive(_val) : selectTarget(_val);
    onChange === null || onChange === void 0 ? void 0 : onChange(event, event.target.checked, filteredData);
    onChangeRowSelect === null || onChangeRowSelect === void 0 ? void 0 : onChangeRowSelect(filteredData);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  // Handle checked prop - use setSelectedItems to manage selection state
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (checked !== undefined && row !== -1) {
      var rowKey = String(row);
      var nextSelectedItems;
      setSelectedItems(function (prev) {
        var newSelectedItems = new Set(prev);
        if (checked) {
          newSelectedItems.add(rowKey);
        } else {
          newSelectedItems["delete"](rowKey);
        }
        nextSelectedItems = newSelectedItems;

        // 
        var selectedIndex = nextSelectedItems ? Array.from(nextSelectedItems).map(function (v) {
          return Number(v);
        }) : [];
        var filteredData = Array.isArray(originData) ? originData.filter(function (v, i) {
          return selectedIndex.includes(i);
        }) : [];
        var syntheticEvent = {
          target: {
            value: rowKey,
            checked: checked
          }
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(syntheticEvent, checked, filteredData);
        onChangeRowSelect === null || onChangeRowSelect === void 0 ? void 0 : onChangeRowSelect(filteredData);
        return newSelectedItems;
      });
    }
  }, [checked, row, setSelectedItems]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, rowSelectable && row === -1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", ToggleSelection_extends({
    type: useRadio ? 'radio' : 'checkbox',
    ref: resolvedRef,
    className: className || '',
    name: name,
    value: "".concat(row),
    checked: allChecked,
    onChange: handleChange
  }, attributes)) : null, rowSelectable && row != -1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", ToggleSelection_extends({
    type: useRadio ? 'radio' : 'checkbox',
    ref: resolvedRef,
    className: className || '',
    name: name,
    value: "".concat(row),
    "data-row": row,
    "data-value": originData[row] ? JSON.stringify(originData[row]) : null,
    checked: selectedItems.has("".concat(row)),
    onChange: handleChange
  }, attributes)) : null);
});
/* harmony default export */ const utils_ToggleSelection = (ToggleSelection);
;// CONCATENATED MODULE: ./src/utils/DragHandleSprite.tsx


var DragHandleSprite = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var className = props.className,
    icon = props.icon;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    rowDraggable = _useContext.rowDraggable,
    handleTbodyEnter = _useContext.handleTbodyEnter,
    handleTbodyLeave = _useContext.handleTbodyLeave;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, rowDraggable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: externalRef,
    className: className || 'drag-trigger'
    // Only when mousedown happens on this handle will we allow row dragging.
    ,
    onMouseDown: handleTbodyEnter,
    onMouseUp: handleTbodyLeave,
    onMouseLeave: handleTbodyLeave
  }, icon || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z",
    stroke: "#000000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))) : null);
});
/* harmony default export */ const utils_DragHandleSprite = (DragHandleSprite);
;// CONCATENATED MODULE: ./src/utils/hooks/useTableSort.tsx
function useTableSort_toConsumableArray(arr) { return useTableSort_arrayWithoutHoles(arr) || useTableSort_iterableToArray(arr) || useTableSort_unsupportedIterableToArray(arr) || useTableSort_nonIterableSpread(); }
function useTableSort_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableSort_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function useTableSort_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useTableSort_arrayLikeToArray(arr); }
function useTableSort_slicedToArray(arr, i) { return useTableSort_arrayWithHoles(arr) || useTableSort_iterableToArrayLimit(arr, i) || useTableSort_unsupportedIterableToArray(arr, i) || useTableSort_nonIterableRest(); }
function useTableSort_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useTableSort_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useTableSort_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useTableSort_arrayLikeToArray(o, minLen); }
function useTableSort_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useTableSort_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useTableSort_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Handles the event of sortable table
 * 
 * @usage:

const App = () => {

    const sortableTable = true;
    const rootRef = useRef<any>(null);

    useTableSort({
        enabled: sortableTable && rootRef.current,
        spyElement: rootRef.current,
        sortBy: (handleProcess: Function, filterType: string, inverse: boolean) => (a: Element, b: Element) => {
        
            // Custom comparison logic
            let v1 = a.textContent, v2 = b.textContent;
            if (filterType === 'number') {
                v1 = parseFloat(v1);
                v2 = parseFloat(v2);
            }
        
            let result = 0;
            if (filterType === 'text') {
                result = v1.localeCompare(v2);
            } else {
                result = v1 - v2;
            }
        
            // Apply display animation and status updates
            handleProcess();
        
            return inverse ? -result : result;
        }
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */


function useTableSort(_ref, deps) {
  var enabled = _ref.enabled,
    data = _ref.data,
    spyElement = _ref.spyElement,
    fieldType = _ref.fieldType,
    _ref$isReverse = _ref.isReverse,
    isReverse = _ref$isReverse === void 0 ? false : _ref$isReverse,
    onColSort = _ref.onColSort,
    onClick = _ref.onClick,
    sortBy = _ref.sortBy;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = useTableSort_slicedToArray(_useState, 2),
    inverse = _useState2[0],
    setInverse = _useState2[1];
  function handleSortList(e) {
    if (typeof enabled === 'undefined' || enabled === false) return;
    var tbodyRef = getTbody(spyElement);
    if (tbodyRef === null) return;
    var el = e.currentTarget.closest('[data-table-col]');
    if (el === null) return;
    var filterType = fieldType || 'text';
    var curIndex = el.dataset.tableCol;
    var targetComparator = [].slice.call(tbodyRef.querySelectorAll("[data-table-col=\"".concat(curIndex, "\"]")));
    var handleProcess = function handleProcess() {
      allRows(spyElement).forEach(function (node) {
        node.classList.add('newsort');
      });
      setInverse(!inverse);
    };

    // 
    var defaultSortBy = function defaultSortBy(a, b) {
      var txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
        txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();

      //type of number
      if (filterType == 'number') {
        txt1 = parseFloat(txt1.replace(/[^0-9.+-]+/g, ''));
        txt2 = parseFloat(txt2.replace(/[^0-9.+-]+/g, ''));
      }

      //type of date
      if (filterType == 'date') {
        txt1 = new Date(txt1);
        txt2 = new Date(txt2);
      }

      //add filter class
      handleProcess();

      // result
      if (filterType == 'text') {
        return isReverse ? txt1.localeCompare(txt2, 'zh-CN', {
          sensitivity: 'base'
        }) : txt2.localeCompare(txt1, 'zh-CN', {
          sensitivity: 'base'
        });
      } else {
        return isReverse ? txt1 < txt2 ? -1 : txt1 > txt2 ? 1 : 0 : txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
      }
    };

    // Use a custom sort method if available, otherwise default is used
    var sortFn = typeof sortBy === 'function' ? sortBy(handleProcess, filterType, inverse) : defaultSortBy;
    targetComparator.sort(sortFn);

    //console.log( 'targetComparator:', targetComparator );
    //console.log( 'inverse:', inverse );

    if (inverse) targetComparator.reverse();
    allRows(spyElement).forEach(function (node) {
      node.remove();
    });
    for (var i = 0; i < targetComparator.length; i++) {
      var curRow = targetComparator[i].parentNode;
      tbodyRef.appendChild(curRow);
    }

    // get latest order
    var sortData = [];
    allRows(spyElement).forEach(function (node) {
      sortData.push(Number(node.dataset.order));
    });

    // callback
    onColSort === null || onColSort === void 0 ? void 0 : onColSort(sortDataByIndex(sortData, data));
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (enabled) {
      if (Array.isArray(data)) {
        data.forEach(function (item, i) {
          item.order = i;
        });

        // Initialize custom props of table elements
        initOrderProps(spyElement);
        initRowColProps(spyElement);
      }
    }
  }, [data, enabled, spyElement].concat(useTableSort_toConsumableArray(deps)));
  return {
    handleSortList: handleSortList
  };
}
/* harmony default export */ const hooks_useTableSort = (useTableSort);
;// CONCATENATED MODULE: ./src/utils/SortSprite.tsx



var SortSprite = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function (props, externalRef) {
  var fieldType = props.fieldType,
    className = props.className,
    icon = props.icon,
    _props$isReverse = props.isReverse,
    isReverse = _props$isReverse === void 0 ? false : _props$isReverse,
    onClick = props.onClick,
    sortBy = props.sortBy;
  var _useContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(TableContext),
    originData = _useContext.originData,
    rootRef = _useContext.rootRef,
    colSortable = _useContext.colSortable,
    onColSort = _useContext.onColSort;

  // sortable table initialization
  var _useTableSort = hooks_useTableSort({
      enabled: colSortable && rootRef.current,
      data: originData,
      spyElement: rootRef.current,
      fieldType: fieldType,
      onColSort: onColSort,
      isReverse: isReverse,
      onClick: onClick,
      sortBy: sortBy
    }, [rootRef]),
    handleSortList = _useTableSort.handleSortList;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, colSortable ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: className || 'sort-trigger',
    onClick: handleSortList
  }, icon || /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z",
    id: "path",
    fill: "#000000"
  })))) : null);
});
/* harmony default export */ const utils_SortSprite = (SortSprite);
;// CONCATENATED MODULE: ./src/index.tsx









// utils




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});