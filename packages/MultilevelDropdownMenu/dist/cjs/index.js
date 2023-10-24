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

/***/ 426:
/***/ ((module) => {

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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :  false || '';
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
module.exports = {
  getNextSiblings: getNextSiblings,
  getPreviousSiblings: getPreviousSiblings,
  getAllSiblings: getAllSiblings,
  getParents: getParents,
  getChildren: getChildren
};

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
// EXTERNAL MODULE: ./src/utils/dom.js
var dom = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/MenuList.tsx



/* Recursively nested components to traverse nodes
-------------------------------------------------*/

function MenuList(props) {
  var alternateCollapse = props.alternateCollapse,
    first = props.first,
    arrow = props.arrow,
    childClassName = props.childClassName,
    data = props.data,
    routerPath = props.routerPath,
    onSelect = props.onSelect;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var currentPath = routerPath ? routerPath : '';
  var activeClass = function activeClass(el, mode) {
    var classname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'active';
    if (mode === 'add') {
      el.classList.add(classname);
    } else {
      el.classList.remove(classname);
    }
  };
  var closeChild = function closeChild(hyperlink, ul) {
    if (ul.length === 0) return;
    activeClass(hyperlink, 'remove');
    hyperlink.setAttribute('aria-expanded', 'false');
    activeClass(hyperlink.parentNode, 'remove');

    //to close
    [].slice.call(ul).forEach(function (element) {
      element.style.maxHeight = 0;
    });
  };
  var openChild = function openChild(hyperlink, ul) {
    if (ul.length === 0) return;
    activeClass(hyperlink, 'add');
    hyperlink.setAttribute('aria-expanded', 'true');
    activeClass(hyperlink.parentNode, 'add');

    // init <ul> height
    [].slice.call(ul).forEach(function (el) {
      if (typeof el.querySelectorAll('li')[0] !== 'undefined') {
        var calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;
        el.style.maxHeight = "".concat(calcH, "px");
      }
    });
  };
  function handleClick(e) {
    e.preventDefault();
    var hyperlink = e.currentTarget;
    var url = hyperlink.getAttribute('href');
    var subElement = (0,dom.getNextSiblings)(hyperlink, 'ul');

    // route switching
    //=====================
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(e, {
      isRouter: hyperlink.dataset.router,
      slug: hyperlink.dataset.slug,
      link: hyperlink.dataset.link
    });

    // hide child if expandedLink doesn't exist, on the contrary
    //=====================
    if (hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null) {
      //Hide all other siblings of the selected <ul>
      if (alternateCollapse) {
        [].slice.call(rootRef.current.children).forEach(function (li) {
          activeClass(li, 'remove');
          var _li = li.firstChild;
          activeClass(_li, 'remove');
          _li.setAttribute('aria-expanded', false);
          [].slice.call((0,dom.getNextSiblings)(_li, 'ul')).forEach(function (element) {
            element.style.maxHeight = 0;
          });
        });
      }

      //open current
      openChild(hyperlink, subElement);
    } else {
      //close current
      closeChild(hyperlink, subElement);
    }

    // active current item
    //=====================
    if (currentPath === url || currentPath.indexOf(url.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && url !== '/') {
      activeClass(e.target, 'add');
      activeClass(e.target.parentElement, 'add');
    }
  }
  function arrowGenerator() {
    return arrow ? arrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8px"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Activate current item
    //=====================
    var allItems = rootRef.current ? [].slice.call(document.querySelectorAll(".".concat(childClassName, " a"))).map(function (item) {
      var _item$parentNode$clas;
      return {
        href: item.getAttribute('href'),
        el: item,
        actived: (_item$parentNode$clas = item.parentNode.classList) !== null && _item$parentNode$clas !== void 0 && _item$parentNode$clas.contains('active') ? true : false,
        expandedLink: document.body.contains(item.parentNode.parentNode.previousSibling) ? item.parentNode.parentNode.previousSibling : false
      };
    }) : [];
    allItems.forEach(function (hyperlink) {
      // Expand the currently active item by default
      if (hyperlink.actived) {
        hyperlink.el.setAttribute('aria-expanded', 'true');
        if (hyperlink.expandedLink) {
          var expandedLink = hyperlink.expandedLink; // <a>
          activeClass(expandedLink.parentNode, 'add');
          expandedLink.setAttribute('aria-expanded', true);
        }

        // init <ul> height
        var ul = (0,dom.getNextSiblings)(hyperlink.el, 'ul');
        [].slice.call(ul).forEach(function (el) {
          if (typeof el.querySelectorAll('li')[0] !== 'undefined') {
            var calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;

            // Prevent the use of iframe or other situations where the height is 0
            el.style.maxHeight = "".concat(calcH == 0 ? 999 : calcH, "px");
          }
        });
      }
    });
  }, [data]);
  if (data) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
      className: childClassName,
      ref: rootRef,
      style: !first ? {
        maxHeight: '0px'
      } : {}
    }, data.map(function (item, i) {
      var _matchPath = currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/';
      if (item.heading) return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        className: "nav-item",
        key: i
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        tabIndex: -1,
        className: "nav-link disabled",
        href: "#",
        "aria-disabled": "true",
        "data-router": "false",
        "data-link": item.link,
        "data-slug": item.slug
      }, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: item.icon
      }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.icon)
        }
      }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.title)
        }
      })));
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: i,
        className: item.active ? "nav-item active" : _matchPath ? "nav-item active" : 'nav-item'
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        tabIndex: -1,
        title: item.title,
        className: item.active ? "nav-link active" : _matchPath ? "nav-link active" : 'nav-link',
        href: item.link === '#' ? "".concat(item.link, "-").concat(i) : item.link,
        onClick: handleClick,
        "data-router": item.link.indexOf('#') >= 0 || item.link.indexOf('http') >= 0 ? 'false' : 'true',
        "data-link": item.link,
        "data-slug": item.slug
      }, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: item.icon
      }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.icon)
        }
      }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        dangerouslySetInnerHTML: {
          __html: "".concat(item.title)
        }
      }), item.children ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
        className: "arrow"
      }, arrowGenerator()) : ''), item.children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MenuList, {
        data: item.children,
        first: false,
        arrow: arrow,
        onSelect: onSelect,
        routerPath: routerPath
      }));
    })));
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null);
  }
}
;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var MultilevelDropdownMenu = function MultilevelDropdownMenu(props) {
  var alternateCollapse = props.alternateCollapse,
    arrow = props.arrow,
    navbarClassName = props.navbarClassName,
    childClassName = props.childClassName,
    routerPath = props.routerPath,
    data = props.data,
    id = props.id,
    onSelect = props.onSelect;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();
  var idRes = id || uniqueID;
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    setVal(data);
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("nav", {
    id: idRes,
    className: navbarClassName ? navbarClassName : "navbar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MenuList, {
    alternateCollapse: alternateCollapse,
    first: true,
    arrow: arrow,
    data: val,
    childClassName: childClassName || 'navbar-nav',
    onSelect: onSelect,
    routerPath: routerPath
  })));
};
/* harmony default export */ const src = (/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.memo)(MultilevelDropdownMenu));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});