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
;// CONCATENATED MODULE: ./src/MenuList.tsx


/* Recursively nested components to traverse nodes
-------------------------------------------------*/

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
function MenuList(props) {
  var arrow = props.arrow,
    childClassName = props.childClassName,
    menuListData = props.menuListData,
    routerPath = props.routerPath,
    onChange = props.onChange;
  var vmenuRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var currentPath = routerPath ? routerPath : '';
  var activeClass = function activeClass(el, mode) {
    if (mode === 'add') {
      el.classList.add('active', 'active');
    } else {
      el.classList.remove('active', 'active');
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
      var calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;
      el.style.maxHeight = "".concat(calcH, "px");
    });
  };
  function handleClick(e) {
    e.preventDefault();
    var hyperlink = e.currentTarget;
    var url = hyperlink.getAttribute('href');
    var subElement = getNextSiblings(hyperlink, 'ul');

    // route switching
    //=====================
    var isRouter = typeof hyperlink.parentNode.dataset.router !== 'undefined' ? true : false;
    onChange === null || onChange === void 0 ? void 0 : onChange(e.currentTarget, isRouter);

    // hide child if expandedLink doesn't exist, on the contrary
    //=====================
    if (hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null) {
      //Hide all other siblings of the selected <ul>
      [].slice.call(vmenuRef.current.children).forEach(function (li) {
        activeClass(li, 'remove');
        var _li = li.firstChild;
        activeClass(_li, 'remove');
        _li.setAttribute('aria-expanded', false);
        [].slice.call(getNextSiblings(_li, 'ul')).forEach(function (element) {
          element.style.maxHeight = 0;
        });
      });

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
      width: "8"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var allItems = vmenuRef.current ? [].slice.call(document.querySelectorAll(".".concat(childClassName, " a"))).map(function (item) {
      var _item$parentNode$clas;
      return {
        href: item.getAttribute('href'),
        el: item,
        actived: (_item$parentNode$clas = item.parentNode.classList) !== null && _item$parentNode$clas !== void 0 && _item$parentNode$clas.contains('active') ? true : false,
        expandedLink: document.body.contains(item.parentNode.parentNode.previousSibling) ? item.parentNode.parentNode.previousSibling : false
      };
    }) : [];

    // Activate current item
    //=====================
    allItems.forEach(function (hyperlink) {
      if (hyperlink.actived && hyperlink.expandedLink) {
        var expandedLink = hyperlink.expandedLink; // <a>
        activeClass(expandedLink.parentNode, 'add');
        expandedLink.setAttribute('aria-expanded', true);

        // init <ul> height
        var child = expandedLink.parentNode.querySelector('ul');
        var calcH = child.scrollHeight + 1;
        child.style.maxHeight = "".concat(calcH, "px");
      }
    });
  }, []);
  if (menuListData) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
      className: childClassName,
      ref: vmenuRef
    }, menuListData.map(function (item, i) {
      if (item.heading) return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        className: "nav-item",
        key: i
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        className: "nav-link disabled",
        href: "#",
        tabIndex: -1,
        "aria-disabled": "true"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: item.icon
      }), " ", item.title));
      if (item.link.indexOf('#') >= 0 || item.link.indexOf('http') >= 0) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
          "data-index": i,
          key: i,
          className: currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/' ? "nav-item active" : 'nav-item'
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
          title: item.title,
          className: currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/' ? "nav-link active" : 'nav-link',
          href: item.link === '#' ? "".concat(item.link, "-").concat(i) : item.link,
          "aria-expanded": "false",
          onClick: handleClick,
          "data-slug": item.slug
        }, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          className: item.icon
        }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
          dangerouslySetInnerHTML: {
            __html: "".concat(item.icon)
          }
        }) : null, item.title, item.children ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "arrow"
        }, arrowGenerator()) : ''), item.children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MenuList, {
          menuListData: item.children
        }));
      } else {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
          "data-index": i,
          "data-router": "true",
          key: i,
          className: currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/' ? "nav-item active" : 'nav-item'
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
          title: item.title,
          className: currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/' ? "nav-link active" : 'nav-link',
          href: item.link === '#' ? "".concat(item.link, "-").concat(i) : item.link,
          onClick: handleClick,
          "data-slug": item.slug
        }, item.icon ? item.icon.indexOf('</svg>') < 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          className: item.icon
        }), " ") : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("var", {
          dangerouslySetInnerHTML: {
            __html: "".concat(item.icon)
          }
        }) : null, item.title, item.children ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "arrow"
        }, arrowGenerator()) : ''), item.children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MenuList, {
          menuListData: item.children
        }));
      }
    })));
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null);
  }
}
;// CONCATENATED MODULE: ./src/index.tsx


var MultilevelDropdownMenu = function MultilevelDropdownMenu(props) {
  var arrow = props.arrow,
    navbarClassName = props.navbarClassName,
    childClassName = props.childClassName,
    routerPath = props.routerPath,
    data = props.data,
    id = props.id,
    onChange = props.onChange;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();
  var idRes = id || uniqueID;
  function handleChange(event, isRouter) {
    onChange === null || onChange === void 0 ? void 0 : onChange(event, isRouter);
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("nav", {
    id: idRes,
    className: navbarClassName ? navbarClassName : "navbar"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MenuList, {
    arrow: arrow,
    menuListData: data,
    childClassName: childClassName || 'navbar-nav',
    onChange: handleChange,
    routerPath: routerPath
  }))));
};
/* harmony default export */ const src = (/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.memo)(MultilevelDropdownMenu));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});