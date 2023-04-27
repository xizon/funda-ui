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

/***/ 361:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 152:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(361);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar-nav a {\n  position: relative;\n}\n.navbar-nav .arrow {\n  transition: 0.1s ease-in-out;\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  right: 0.5em;\n  top: 1.5em;\n  transform: translateY(-50%) rotate(0deg);\n}\n.navbar-nav li {\n  position: relative;\n}\n.navbar-nav li > a.active > .arrow {\n  transform: translateY(-50%) rotate(90deg);\n}\n.navbar-nav > li ul {\n  transition: max-height 0.25s ease;\n  overflow: hidden;\n  position: relative;\n}\n.navbar-nav > li:not(.active) ul {\n  max-height: 0;\n}\n.navbar-nav > li ul ul {\n  margin-top: auto;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAEI;EACI,kBAAA;AADR;AAIC;EACO,4BAAA;EACN,qBAAA;EACA,kBAAA;EACA,kBAAA;EACM,YAAA;EACA,UAAA;EACA,wCAAA;AAFR;AAKC;EAEC,kBAAA;AAJF;AAcK;EACA,yCAAA;AAZL;AA6BE;EACU,iCAAA;EACT,gBAAA;EACA,kBAAA;AA3BH;AAiCE;EACC,aAAA;AA/BH;AAoCC;EACO,gBAAA;AAlCR","sourcesContent":[".navbar-nav {\n\n    a {\n        position: relative;\n    }\n\n\t.arrow {\n        transition: .1s ease-in-out;\n\t\tdisplay: inline-block;\n\t\ttext-align: center;\n\t\tposition: absolute;\n        right: 0.5em;\n        top: 1.5em;\n        transform: translateY(-50%) rotate(0deg);\n\t}\n\n\tli {\n\n\t\tposition: relative;\n\n\t\t> a {\n\t\n\t\t\t&:hover {\n\t\t\t\t\n\t\t\t}\n\n\t\t\t&.active {\n\n\t\t\t\t > .arrow {\n\t\t\t\t\ttransform: translateY(-50%) rotate(90deg);\n\t\t\t\t}\n\n\n\t\t\t}\n\n\t\t}\n\n        &.active > a {\n\n        }        \n\n\n\t}\n\n\t> li {\n\n\t\tul {\n            transition: max-height 0.25s ease;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t}\n\t}\n\n\t> li:not(.active) {\n\n\t\tul {\n\t\t\tmax-height: 0;\n\t\t}\n\t}\n\n\n\t> li ul ul {\n        margin-top: auto;\n\t}\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 793:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 173:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 36:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 464:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
  "default": () => (/* binding */ src_0)
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
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(62);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(36);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
var cjs_ruleSet_1_rules_1_use_2_src = __webpack_require__(542);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src/* default */.Z, options);




       /* harmony default export */ const src = (cjs_ruleSet_1_rules_1_use_2_src/* default */.Z && cjs_ruleSet_1_rules_1_use_2_src/* default.locals */.Z.locals ? cjs_ruleSet_1_rules_1_use_2_src/* default.locals */.Z.locals : undefined);

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
/* harmony default export */ const src_0 = (/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.memo)(MultilevelDropdownMenu));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});