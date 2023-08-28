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
  "TabList": () => (/* reexport */ src_TabList),
  "TabPanel": () => (/* reexport */ src_TabPanel),
  "Tabs": () => (/* reexport */ src_Tabs)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/TabList.tsx

;
var TabList = function TabList(props) {
  var defaultActive = props.defaultActive,
    expandedActiveClassNameForNav = props.expandedActiveClassNameForNav,
    targetId = props.targetId,
    index = props.index,
    switchEv = props.switchEv,
    children = props.children;
  var _expandClassName = typeof expandedActiveClassNameForNav !== 'undefined' ? expandedActiveClassNameForNav : '';
  var activedClassName = typeof defaultActive !== 'undefined' && defaultActive !== false ? " active ".concat(_expandClassName) : " ".concat(_expandClassName);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
    className: "nav-item ".concat(activedClassName),
    role: "presentation",
    onClick: switchEv,
    "data-tab": targetId
  }, children));
};
/* harmony default export */ const src_TabList = (TabList);
;// CONCATENATED MODULE: ./src/TabPanel.tsx
var _excluded = ["defaultActive", "expandedActiveClassNameForPanel", "tabpanelClass", "targetId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

;
var TabPanel = function TabPanel(props) {
  var defaultActive = props.defaultActive,
    expandedActiveClassNameForPanel = props.expandedActiveClassNameForPanel,
    tabpanelClass = props.tabpanelClass,
    targetId = props.targetId,
    attributes = _objectWithoutProperties(props, _excluded);
  var _expandClassName = typeof expandedActiveClassNameForPanel !== 'undefined' ? expandedActiveClassNameForPanel : '';
  var activedClassName = typeof defaultActive !== 'undefined' && defaultActive !== false ? " show active ".concat(_expandClassName) : " ".concat(_expandClassName);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", _extends({
    role: "tabpanel",
    id: targetId,
    className: tabpanelClass ? "tab-pane fade ".concat(tabpanelClass, " ").concat(activedClassName) : "tab-pane fade ".concat(activedClassName)
  }, attributes)));
};
/* harmony default export */ const src_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ./src/Tabs.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Tabs_extends() { Tabs_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tabs_extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


//


var Tabs = function Tabs(props) {
  var wrapperClassName = props.wrapperClassName,
    navClassName = props.navClassName,
    panelClassName = props.panelClassName,
    expandedActiveClassNameForNav = props.expandedActiveClassNameForNav,
    expandedActiveClassNameForPanel = props.expandedActiveClassNameForPanel,
    animTransitionDuration = props.animTransitionDuration,
    style = props.style,
    onChange = props.onChange,
    children = props.children;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var rootRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var speed = animTransitionDuration ? animTransitionDuration : 150;
  function handleClickItem(e) {
    e.preventDefault();
    var el = e.currentTarget;
    var currentIndex = Array.prototype.slice.call(el.parentElement.children).indexOf(el);
    itemInit(el, false);

    //
    if (typeof onChange === 'function') {
      onChange(el, el.dataset.tab, currentIndex);
    }
  }
  function itemInit(targetEl, itemsInit) {
    var reactDomWrapperEl = rootRef.current;
    var $li = targetEl.parentElement.children;
    var $allContent = [];
    var tabID = targetEl.dataset.tab;
    var _classNameNav = expandedActiveClassNameForNav ? expandedActiveClassNameForNav : '';
    var _classNamePanel = expandedActiveClassNameForPanel ? expandedActiveClassNameForPanel : '';
    var runExClassName = function runExClassName(node, str, type) {
      if (str && node !== null) {
        var _c = str.replace(/\s+(\W)/g, ' ').split(' ');
        _c.forEach(function (classname) {
          if (type === 'remove') node.classList.remove(classname);
          if (type === 'add') node.classList.add(classname);
        });
      }
    };

    //get all panels of this wrapper
    Array.prototype.forEach.call($li, function (node) {
      var panelId = node.dataset.tab;
      $allContent.push(reactDomWrapperEl.querySelector('#' + panelId));
    });

    //
    Array.prototype.forEach.call($li, function (node) {
      node.classList.remove('active');
      node.firstChild.classList.remove('active');
      runExClassName(node, _classNameNav, 'remove');
      runExClassName(node.firstChild, _classNameNav, 'remove');
    });
    $allContent.forEach(function (node) {
      node.classList.remove('show');
      setTimeout(function () {
        node.classList.remove('active');
        runExClassName(node, _classNamePanel, 'remove');
      }, speed);
    });

    // currently active
    targetEl.classList.add('active');
    targetEl.firstChild.classList.add('active');
    runExClassName(targetEl, _classNameNav, 'add');
    runExClassName(targetEl.firstChild, _classNameNav, 'add');
    if (tabID !== undefined) {
      setTimeout(function () {
        var _panel = document.getElementById(tabID);
        if (_panel !== null) {
          _panel.classList.add('active', 'show');
          runExClassName(_panel, _classNamePanel, 'add');
        }
      }, speed);
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Initialize tabs
    //--------------
    var reactDomWrapperEl = rootRef.current;
    var $li = [].slice.call(reactDomWrapperEl.querySelectorAll('ul > li'));
    $li.forEach(function (el, i) {
      if (el.classList.contains('active')) {
        itemInit($li[i], true);
      }
    });
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative",
    ref: rootRef,
    style: style
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: navClassName ? navClassName : "nav nav-tabs mb-3",
    role: "tablist"
  }, function () {
    if (children != null) {
      var tabListIndex = 0;

      // If <TabList /> uses map to return, it will be wrapped into an array
      /*
      Such as:
           {[1,2,3].map((item: any, i: number) =>{
              return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}>{item}</TabList>
          })}
      */

      var elements = Array.isArray(children[0]) ? children[0] : children;
      return elements.map(function (item, i) {
        var childProps = _objectSpread({}, item.props);
        delete childProps.key;
        if (item.key.indexOf('tab-list') >= 0) {
          tabListIndex++;
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TabList, Tabs_extends({
            key: item.key,
            index: tabListIndex,
            expandedActiveClassNameForNav: expandedActiveClassNameForNav,
            switchEv: handleClickItem,
            targetId: "tabs-show-".concat(uniqueID, "-").concat(tabListIndex)
          }, childProps));
        }
      });
    }
  }()), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: panelClassName ? panelClassName : "tab-content"
  }, function () {
    if (children != null) {
      var tabPanelIndex = 0;

      // If <TabPanel /> uses map to return, it will be wrapped into an array
      /*
      Such as:
           {[1,2,3].map((item: any, i: number) =>{
              return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}>{item}</TabPanel>
          })}    
      */
      var elements = Array.isArray(children[1]) ? children[1] : children;
      return elements.map(function (item, i) {
        var childProps = _objectSpread({}, item.props);
        delete childProps.key;
        if (item.key.indexOf('tab-panel') >= 0) {
          tabPanelIndex++;
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TabPanel, Tabs_extends({
            key: item.key,
            expandedActiveClassNameForPanel: expandedActiveClassNameForPanel,
            targetId: "tabs-show-".concat(uniqueID, "-").concat(tabPanelIndex)
          }, childProps));
        }
      });
    }
  }())));
};
/* harmony default export */ const src_Tabs = (Tabs);
;// CONCATENATED MODULE: ./src/index.tsx



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});