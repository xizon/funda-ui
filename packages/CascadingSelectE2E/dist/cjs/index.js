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
___CSS_LOADER_EXPORT___.push([module.id, "/* ======================================================\n    <!-- Cascading Select -->\n/* ====================================================== */\n.cascading-select__wrapper .cascading-select__result {\n  position: absolute;\n  left: auto;\n  z-index: 1;\n  top: 0;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: inherit;\n}\n.cascading-select__wrapper .cascading-select__result div {\n  display: inline;\n}\n.cascading-select__wrapper .cascading-select__result span {\n  padding: 3px;\n}\n.cascading-select__wrapper .cascading-select__result svg {\n  margin: 0 0.3rem;\n}\n.cascading-select__wrapper .cascading-select__val {\n  position: relative;\n}\n.cascading-select__wrapper .cascading-select__val input {\n  cursor: pointer;\n  color: transparent;\n}\n.cascading-select__wrapper .cascading-select__val .arrow {\n  position: absolute;\n  top: 0;\n  margin-top: 0.3rem;\n  right: 0.5rem;\n}\n.cascading-select__wrapper .cascading-select {\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n.cascading-select__wrapper .cascading-select ul, .cascading-select__wrapper .cascading-select li {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__trigger {\n  position: relative;\n  z-index: 0;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__items {\n  box-shadow: 0 5px 15px 5px rgba(80, 102, 224, 0.08);\n  position: absolute;\n  left: auto;\n  max-height: 350px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n  padding: 10px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  z-index: 1;\n  top: 2.3rem;\n  border-radius: 5px;\n  /* each item */\n}\n.cascading-select__wrapper .cascading-select .cascading-select__items ul {\n  transition: 0.2s ease-out;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__items ul > li {\n  position: relative;\n  cursor: pointer;\n  float: left;\n  padding: 0 10px;\n  margin-right: 15px;\n  border-right: 1px dotted #eee;\n  transition: 0.2s ease-out;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__items ul > li:last-child {\n  margin-right: 0;\n  border-right: none;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt {\n  padding: 0.3rem 0.4rem;\n  font-size: 0.875rem;\n  border-radius: 2px;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt:hover {\n  background: #f7f7f7;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt.active {\n  background: #eeeeee;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt-header {\n  padding: 0.3rem 0.4rem;\n  font-size: 0.875rem;\n  opacity: 0.5;\n  border-bottom: 1px dotted rgba(1, 1, 1, 0.2);\n  border-radius: 2px;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt-header:hover {\n  background: #f7f7f7;\n}\n.cascading-select__wrapper .cascading-select .cascading-select__opt-header.active {\n  background: #eeeeee;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;;2DAAA;AAMI;EACI,kBAAA;EACA,UAAA;EACA,UAAA;EACA,MAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;AAFR;AAIQ;EACI,eAAA;AAFZ;AAKE;EACC,YAAA;AAHH;AAME;EACC,gBAAA;AAJH;AAQI;EACI,kBAAA;AANR;AASQ;EACI,eAAA;EACA,kBAAA;AAPZ;AAUQ;EACI,kBAAA;EACA,MAAA;EACA,kBAAA;EACA,aAAA;AARZ;AAYI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AAVR;AAYQ;EACI,gBAAA;EACA,SAAA;EACA,UAAA;AAVZ;AAeQ;EACI,kBAAA;EACA,UAAA;AAbZ;AAgBQ;EACI,mDAAA;EACA,kBAAA;EACA,UAAA;EACA,iBAAA;EACA,oCAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EAEA,cAAA;AAfZ;AAgBY;EACI,yBAAA;AAdhB;AAgBgB;EACI,kBAAA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;AAdpB;AAkBgB;EACI,eAAA;EACA,kBAAA;AAhBpB;AAuBQ;EACI,sBAAA;EACA,mBAAA;EACA,kBAAA;AArBZ;AAuBY;EACI,mBAAA;AArBhB;AAwBY;EACI,mBAAA;AAtBhB;AA0BQ;EACI,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,4CAAA;EACA,kBAAA;AAxBZ;AA0BY;EACI,mBAAA;AAxBhB;AA2BY;EACI,mBAAA;AAzBhB","sourcesContent":["/* ======================================================\n    <!-- Cascading Select -->\n/* ====================================================== */\n\n.cascading-select__wrapper {\n\n    .cascading-select__result {\n        position: absolute;\n        left: auto;\n        z-index: 1;\n        top: 0;\n        padding: 0.375rem 0.75rem;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: inherit;\n\n        div {\n            display: inline;\n        }\n\n\t\tspan {\n\t\t\tpadding: 3px;\n\t\t}\n\n\t\tsvg {\n\t\t\tmargin: 0 0.3rem;\n\t\t}\n\t}\n\n    .cascading-select__val {\n        position: relative;\n        \n\n        input {\n            cursor: pointer;\n            color: transparent;\n        }\n\n        .arrow {\n            position: absolute;\n            top: 0;\n            margin-top: .3rem;\n            right: .5rem;\n        }\n    }\n\n    .cascading-select {\n        display: flex;\n        align-items: center;\n        position: relative;\n        z-index: 1;\n\n        ul, li {\n            list-style: none;\n            margin: 0;\n            padding: 0;\n        }\n\n\n\n        .cascading-select__trigger {\n            position: relative;\n            z-index: 0;\n        }\n\n        .cascading-select__items {\n            box-shadow: 0 5px 15px 5px rgba(80, 102, 224, 0.08);\n            position: absolute;\n            left: auto;\n            max-height: 350px;\n            border: 1px solid rgba(0,0,0,.1);\n            background: #fff;\n            padding: 10px;\n            overflow-y: auto;\n            box-sizing: border-box;\n            z-index: 1;\n            top: 2.3rem;\n            border-radius: 5px;\n\n            /* each item */\n            ul {\n                transition: .2s ease-out;\n\n                > li {\n                    position: relative;\n                    cursor: pointer;\n                    float: left;\n                    padding: 0 10px;\n                    margin-right: 15px;\n                    border-right: 1px dotted #eee;\n                    transition: .2s ease-out;\n\n                }\n\n                > li:last-child {\n                    margin-right: 0;\n                    border-right: none;\n                }\n            }\n\n        }\n\n\n        .cascading-select__opt {\n            padding: .3rem .4rem;\n            font-size: 0.875rem;\n            border-radius: 2px;\n\n            &:hover {\n                background: #f7f7f7;\n            }\n\n            &.active {\n                background: #eeeeee;\n            }\n        }\n\n        .cascading-select__opt-header {\n            padding: .3rem .4rem;\n            font-size: 0.875rem;\n            opacity: .5;    \n            border-bottom: 1px dotted rgba(1,1,1,.2);\n            border-radius: 2px;\n\n            &:hover {\n                background: #f7f7f7;\n            }\n\n            &.active {\n                background: #eeeeee;\n            }   \n        }\n\n\n\n    }\n\n\n}\n"],"sourceRoot":""}]);
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
;// CONCATENATED MODULE: ./src/Group.tsx

function Group(props) {
  var level = props.level,
    columnTitle = props.columnTitle,
    data = props.data,
    selectEv = props.selectEv;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, data.map(function (item, index) {
    if (item.id.toString().indexOf('$EMPTY_ID_') < 0) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        key: index,
        "data-index": index,
        "data-value": item.id,
        "data-query": item.queryId,
        className: item.current ? 'cascading-select__opt active' : 'cascading-select__opt',
        onClick: function onClick(e) {
          return selectEv(e, item, index);
        }
      }, item.name);
    } else {
      return columnTitle[level] === '' ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("h3", {
        key: index,
        "data-index": index,
        "data-value": item.id,
        "data-query": item.queryId,
        onClick: function onClick(e) {
          return selectEv(e, item, index);
        },
        className: item.current ? 'cascading-select__opt-header active' : 'cascading-select__opt-header'
      }, columnTitle[level]);
    }
  }));
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
var _excluded = ["wrapperClassName", "disabled", "required", "value", "label", "placeholder", "name", "id", "columnTitle", "depth", "loader", "displayResult", "displayResultArrow", "controlArrow", "valueType", "style", "tabIndex", "triggerClassName", "triggerContent", "fetchArray", "onFetch", "onChange", "onBlur", "onFocus"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var CascadingSelectE2E = function CascadingSelectE2E(props) {
  var wrapperClassName = props.wrapperClassName,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    label = props.label,
    placeholder = props.placeholder,
    name = props.name,
    id = props.id,
    columnTitle = props.columnTitle,
    depth = props.depth,
    loader = props.loader,
    displayResult = props.displayResult,
    displayResultArrow = props.displayResultArrow,
    controlArrow = props.controlArrow,
    valueType = props.valueType,
    style = props.style,
    tabIndex = props.tabIndex,
    triggerClassName = props.triggerClassName,
    triggerContent = props.triggerContent,
    fetchArray = props.fetchArray,
    onFetch = props.onFetch,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();
  var idRes = id || uniqueID;
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var valRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // current data depth (GLOBAL)
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentDataDepth = _useState2[0],
    setCurrentDataDepth = _useState2[1];

  // all data from fetched data (GLOBAL)
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    allData = _useState4[0],
    setAllData = _useState4[1];

  // options data (GLOBAL)
  var _useState5 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    optData = _useState6[0],
    setOptData = _useState6[1];
  var _useState7 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dictionaryData = _useState8[0],
    setDictionaryData = _useState8[1];
  var _useState9 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    columnTitleData = _useState12[0],
    setColumnTitleData = _useState12[1];
  var _useState13 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    hasErr = _useState14[0],
    setHasErr = _useState14[1];
  var _useState15 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    firstDataFeched = _useState16[0],
    setFirstDataFeched = _useState16[1];

  //for variable 
  var _useState17 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    setData = _useState18[1];
  var _useState19 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
      labels: [],
      values: []
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedData = _useState20[0],
    setSelectedData = _useState20[1];
  var _useState21 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isShow = _useState22[0],
    setIsShow = _useState22[1];
  function fetchData(_x2, _x3, _x4) {
    return _fetchData.apply(this, arguments);
  } //
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_fetchArray, params, dataDepth) {
      var parentId,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchCallback,
        response,
        _ORGIN_DATA,
        _temp_allData,
        _EMPTY_SUPPORTED_DATA,
        _temp_optData,
        childList,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            parentId = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
            fetchFuncAsync = _fetchArray.fetchFuncAsync;
            fetchFuncMethod = _fetchArray.fetchFuncMethod;
            fetchCallback = _fetchArray.fetchCallback;
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context.next = 27;
              break;
            }
            //
            setLoading(true);
            _context.next = 8;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')));
          case 8:
            response = _context.sent;
            _ORGIN_DATA = response.data; // loading 
            setLoading(false);
            if (!(typeof _ORGIN_DATA[0] === 'undefined')) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return");
          case 13:
            // reset data structure
            if (typeof fetchCallback === 'function') {
              _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (typeof _ORGIN_DATA[0].id === 'undefined') {
              console.warn('The data structure does not match, please refer to the example in the component documentation.');
              setHasErr(true);
              _ORGIN_DATA = [];
            }

            // add data depth
            _ORGIN_DATA.forEach(function (item) {
              item.depth = dataDepth;
            });
            if (dataDepth === 0) {
              // STEP 1: ===========
              // all data from fetched data 
              _temp_allData = JSON.parse(JSON.stringify(_ORGIN_DATA));
              setAllData(_temp_allData);

              // STEP 2: ===========
              // dictionary data (orginal)
              setDictionaryData(_temp_allData);
            }
            if (dataDepth > 0) {
              // STEP 1: ===========
              // all data from fetched data  
              _temp_allData = allData;
              addChildrenOpt(_temp_allData, parentId, _ORGIN_DATA);

              // STEP 2: ===========
              // dictionary data (orginal)
              setDictionaryData(_temp_allData);
            }

            // STEP 3: ===========
            // Add an empty item to each list to support empty item selection
            _EMPTY_SUPPORTED_DATA = JSON.parse(JSON.stringify(_temp_allData));
            addEmptyOpt(_EMPTY_SUPPORTED_DATA, 0);

            // STEP 4: ===========
            // Turn the data of each group into an array

            if (dataDepth === 0) {
              _temp_optData = [_EMPTY_SUPPORTED_DATA];
              setOptData(_temp_optData);
              setData(_temp_optData);
            }
            if (dataDepth > 0) {
              _temp_optData = data;

              // Add an empty item to each list to support empty item selection
              addEmptyOpt(_ORGIN_DATA, 0);
              childList = _ORGIN_DATA;
              _temp_optData[dataDepth] = childList;
              setOptData(_temp_optData);
              setData(optData);
            }

            // STEP 5: ===========
            //Set a default value
            if (value) updateValue(_EMPTY_SUPPORTED_DATA, value);

            // STEP 6: ===========
            //
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_EMPTY_SUPPORTED_DATA, _ORGIN_DATA);
            return _context.abrupt("return", _EMPTY_SUPPORTED_DATA);
          case 27:
            return _context.abrupt("return", []);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }
  function doFetch(dataDepthMax) {
    var dataDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var emptyAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // if empty selection is selected
    if (emptyAction) return;

    // If the depth is max, no more requests
    if (dataDepthMax) return;

    // data fetch action
    var _oparams = fetchArray[dataDepth].fetchFuncMethodParams || [];
    var _params = _oparams.map(function (item) {
      return item !== '$QUERY_ID' ? item : parentId;
    });
    fetchData(fetchArray[dataDepth], _params.join(','), dataDepth, parentId);
  }
  function handleFocus(event) {
    rootRef.current.classList.add('focus');

    //
    setIsShow(true);

    //
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }
  function handleBlur(event) {
    //----
    //remove focus style
    rootRef.current.classList.remove('focus');

    //
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  }

  /**
   * If clicked on outside of element
   */
  function handleClickOutside(event) {
    if (event.target.className != '' && event.target.className.indexOf('cascading-select__wrapper') < 0 && event.target.className.indexOf('form-control') < 0 && event.target.className.indexOf('cascading-select__trigger') < 0 && event.target.className.indexOf('cascading-select__items') < 0 && event.target.className.indexOf('cascading-select__opt') < 0) {
      setIsShow(false);
    }
  }
  function handleDisplayOptions(event) {
    event.preventDefault();
    setIsShow(true);

    // Execute the fetch task
    if (!firstDataFeched) {
      setLoading(true);
      doFetch(false, currentDataDepth, 0, false);
      setFirstDataFeched(true);
    }
  }
  function handleClickItem(e, resValue, index, level) {
    var dataDepthMax = resValue.depth === fetchArray.length - 1;
    var parentId = e.currentTarget.dataset.query;
    var emptyAction = resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ? false : true;

    // update data depth
    //////////////////////////////////////////
    setCurrentDataDepth(resValue.depth + 1);
    setCurrentDataDepth(function (prevState) {
      var _currentDataDepth = resValue.depth + 1;

      // Execute the fetch task
      //////////////////////////////////////////
      doFetch(dataDepthMax, _currentDataDepth, parentId, emptyAction);
      return _currentDataDepth;
    });

    // update value
    //////////////////////////////////////////
    var inputVal = updateValue(dictionaryData, resValue.id, level);

    // callback
    //////////////////////////////////////////
    if (typeof onChange === 'function') {
      onChange(valRef.current, resValue, index, level, inputVal);
    }

    // update data
    //////////////////////////////////////////
    var newData = data; // such as: [Array(6), Array(3)]

    // All the elements from start(array.length - start) to the end of the array will be deleted.
    newData.splice(level + 1);

    // active status
    if (resValue.children) {
      var childList = resValue.children;
      markAllItems(childList);
      newData[level + 1] = childList;
    }
    markCurrent(newData[level], index);

    // close modal
    //////////////////////////////////////////
    if (dataDepthMax && resValue.id.toString().indexOf('$EMPTY_ID_') < 0) {
      setIsShow(false);

      // update data depth
      setCurrentDataDepth(0);
    }
  }

  /**
   * Active the selected item
  * @param arr 
  * @param index 
  * @returns 
  */
  function markCurrent(arr, index) {
    // click an item
    //////////////////////////////////////////
    for (var i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i].current = true;
      } else {
        arr[i].current = false;
      }
    }

    // return result
    //////////////////////////////////////////
    return arr;
  }

  /**
   * Deactivate all items
   * @param arr 
   * @returns 
   */
  function markAllItems(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].current = false;
    }
    return arr;
  }
  function updateValue(arr, targetVal) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var inputEl = valRef.current;
    var valueTypeValue, valueTypeLabel;
    if (targetVal.toString().indexOf('$EMPTY_ID_') >= 0) {
      // If clearing the current column
      //////////////////////////////////////////
      valueTypeValue = selectedData.values;
      valueTypeLabel = selectedData.labels;

      // update result to input
      valueTypeValue.splice(level);
      valueTypeLabel.splice(level);

      //
      setSelectedData({
        labels: valueTypeLabel,
        values: valueTypeValue
      });
    } else {
      // click an item
      //////////////////////////////////////////
      //search JSON key that contains specific string
      var _labels = queryResultOfJSON(arr, targetVal, 'value');
      var _values = queryResultOfJSON(arr, targetVal, 'key');

      // update result to input
      valueTypeValue = _values ? _values.map(function (item) {
        return item;
      }) : [];
      valueTypeLabel = _labels ? _labels.map(function (item) {
        return item;
      }) : [];

      //
      setSelectedData({
        labels: _labels,
        values: _values
      });
    }

    // update selected data 
    //////////////////////////////////////////
    if (valueType === 'value') {
      if (inputEl !== null) inputEl.value = valueTypeValue.join(',');
    } else {
      if (inputEl !== null) inputEl.value = valueTypeLabel.join(',');
    }
    return {
      0: valueTypeValue.join(','),
      1: valueTypeLabel.join(',')
    };
  }
  function fillColumnTitle() {
    var _Array;
    var dataDepth = fetchArray.length;
    var oldColumnTitleData = columnTitle ? columnTitle : [];
    var newColumnTitleData = (_Array = new Array(dataDepth)) === null || _Array === void 0 ? void 0 : _Array.fill('');
    oldColumnTitleData.forEach(function (item, index) {
      newColumnTitleData[index] = item;
    });

    //
    if (oldColumnTitleData.length > dataDepth) {
      newColumnTitleData.splice(dataDepth, oldColumnTitleData.length - dataDepth);
    }
    setColumnTitleData(newColumnTitleData);
  }
  function addChildrenOpt(obj, parentId, childrenData) {
    obj.forEach(function (item) {
      if (item.id === parentId) item.children = childrenData;
      if (item.children) {
        addChildrenOpt(item.children, parentId, childrenData);
      }
    });
  }
  function addEmptyOpt(obj, index) {
    index++;
    obj.unshift({
      id: "$EMPTY_ID_" + index,
      name: "",
      depth: obj[0].depth
    });
    obj.forEach(function (item, depth) {
      if (item.children) {
        addEmptyOpt(item.children, index * (depth + 1));
      }
    });
  }
  function queryResultOfJSON(data, targetVal, returnType) {
    var callbackValueNested = [];
    var lastFirstLevelName = '';
    var loop = true;
    var resDepth = 0;
    var getIndexOf = function getIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id.toString() === val.toString()) {
          return i;
        }
      }
      return -1;
    };
    var searchJsonStr = function searchJsonStr(list, depth) {
      // `depth` is very important, it is used to accurately judge the final result
      if (typeof depth === 'undefined') {
        depth = 0;
      } else {
        depth++;
      }
      for (var i = 0; i < list.length; i++) {
        var row = list[i];
        var callbackValue = returnType === 'key' ? row.id.toString() : row.name.toString();
        if (loop) {
          // get first-level item
          if (getIndexOf(data, row.id) !== -1) {
            callbackValueNested.push(callbackValue);
            lastFirstLevelName = callbackValue;
          }

          // get child-level item
          if (row.children) {
            callbackValueNested.push(callbackValue);
          }
        }

        //check the value
        if (row.id.toString() === targetVal.toString()) {
          callbackValueNested.push(callbackValue);
          loop = false;
          resDepth = depth;
          break;
        }

        // Note: Recursion must be placed here
        if (loop) {
          if (row.children) {
            searchJsonStr(row.children, depth);
          }
        }
      }
    };
    searchJsonStr(data);

    // (1) Remove duplicate values
    //------------------------------------------
    callbackValueNested = callbackValueNested.filter(function (item, index, arr) {
      return arr.indexOf(item, 0) === index;
    });

    // (2) Delete needless first-level
    //------------------------------------------
    var resAll = callbackValueNested.slice(callbackValueNested.indexOf(lastFirstLevelName), callbackValueNested.length);

    // (3) Returns result
    //------------------------------------------
    if (resAll.length > 1) {
      // Get first-level item
      resAll.splice(1);

      // Get child-level item
      var resChild = callbackValueNested.slice(-resDepth); // Get the last elements in reverse

      // Combine
      resAll = resAll.concat(resChild);
    }
    return resAll;
  }
  function displayInfo() {
    return selectedData.labels ? selectedData.labels.map(function (item, i, arr) {
      if (arr.length - 1 === i) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          key: i
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, item));
      } else {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          key: i
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, item), arrowGenerator());
      }
    }) : '';
  }
  function arrowGenerator() {
    return displayResultArrow ? displayResultArrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
      viewBox: "0 0 22 22",
      width: "8"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
      d: "m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373",
      transform: "matrix(.03541-.00013.00013.03541 2.98 3.02)",
      fill: "#a5a5a5"
    }));
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // column titles
    //--------------
    fillColumnTitle();

    //
    //--------------
    document.removeEventListener('pointerdown', handleClickOutside);
    document.addEventListener('pointerdown', handleClickOutside);

    // Remove the global list of events, especially as scroll and interval.
    //--------------
    return function () {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: wrapperClassName ? "cascading-select__wrapper ".concat(wrapperClassName) : "cascading-select__wrapper mb-3 position-relative",
    ref: rootRef
  }, label ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
    htmlFor: idRes,
    className: "form-label"
  }, label)) : null, triggerContent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: triggerClassName ? "cascading-select__trigger ".concat(triggerClassName) : "cascading-select__trigger d-inline w-auto",
    onClick: handleDisplayOptions
  }, triggerContent)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cascading-select",
    style: {
      zIndex: depth ? depth : 100
    }
  }, isShow && !hasErr ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cascading-select__items"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", null, loading ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "position-absolute top-0 start-0 mt-1 mx-1"
  }, loader)) : null, data.map(function (item, level) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      key: level
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Group, {
      level: level,
      columnTitle: columnTitleData,
      data: item,
      selectEv: function selectEv(e, value, index) {
        return handleClickItem(e, value, index, level);
      }
    }));
  }))) : null), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cascading-select__val",
    onClick: handleDisplayOptions
  }, displayResult ? selectedData.labels && selectedData.labels.length > 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "cascading-select__result"
  }, displayInfo()) : null : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", _extends({
    ref: valRef,
    id: idRes,
    name: name,
    className: "form-control",
    placeholder: placeholder,
    defaultValue: value || '',
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled || null,
    required: required || null,
    style: style,
    tabIndex: tabIndex || 0,
    readOnly: true
  }, attributes)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "arrow"
  }, controlArrow ? controlArrow : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "10px",
    height: "10px",
    viewBox: "0 -4.5 20 20"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(-180.000000, -6684.000000)",
    fill: "#a5a5a5"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("g", {
    transform: "translate(56.000000, 160.000000)"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39",
    id: "arrow_down-[#339]"
  })))))))));
};
/* harmony default export */ const src_0 = (CascadingSelectE2E);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});