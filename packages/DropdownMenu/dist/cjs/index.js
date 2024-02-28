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

/***/ 378:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Get the -webkit-transition-duration property
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Number}    - Returns a pure number.
 */
function getTransitionDuration(el) {
  if (_typeof(el) === ( true ? "undefined" : 0)) {
    return 0;
  }
  var style = window.getComputedStyle(el),
    duration = style.webkitTransitionDuration,
    delay = style.webkitTransitionDelay;
  if (_typeof(duration) != ( true ? "undefined" : 0)) {
    // fix miliseconds vs seconds
    duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
    delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
    return duration;
  } else {
    return 0;
  }
}

/**
 * Get an object's absolute position on the page
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el) {
  var windowWidth = window.innerWidth,
    leftPos = null,
    topPos = null;
  if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
    leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
    topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
  } else {
    // width and height in pixels, including padding and border
    // Corresponds to outerWidth(), outerHeight()
    leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
    topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
  }
  return {
    'left': leftPos,
    'top': topPos
  };
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left. 
 */
function getOffset(el) {
  var res = {
    top: 0,
    left: 0
  };
  var box = el.getBoundingClientRect();
  var top = 0,
    left = 0;

  //Include scrollbar and border
  top = box.top + window.pageYOffset - document.documentElement.clientTop;
  left = box.left + window.pageXOffset - document.documentElement.clientLeft;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el) {
  var res = {
    top: 0,
    left: 0
  };
  var top = el.offsetTop ? el.offsetTop : 0,
    left = el.offsetLeft ? el.offsetLeft : 0;
  res = {
    top: top,
    left: left
  };
  return res;
}

/**
 * Get the absolute position of the stage element
 * 
 * @param {Element} domElement  - A DOM node
 * @param {Number | String} left     - left offset
 * @param {Number | String} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!parseInt(left)) {
    left = 0;
  } else {
    left = parseInt(left);
  }
  if (!parseInt(top)) {
    top = 0;
  } else {
    top = parseInt(top);
  }
  var box = domElement.getBoundingClientRect();
  var body = document.body;
  var docElem = document.documentElement;
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  var attr = {};
  attr.y = box.top + scrollTop - clientTop + top;
  attr.x = box.left + scrollLeft - clientLeft + left;
  attr.width = box.width;
  attr.height = box.height;
  return attr;
}
module.exports = {
  getTransitionDuration: getTransitionDuration,
  getAbsoluteCoordinates: getAbsoluteCoordinates,
  getOffset: getOffset,
  getPosition: getPosition,
  getAbsolutePositionOfStage: getAbsolutePositionOfStage
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
;// CONCATENATED MODULE: ./src/Option.tsx

function Option(props) {
  var option = props.option;
  var _label = option ? option.label : '';
  var _value = option ? option.value : '';
  var _listItemLabel = option ? typeof option.listItemLabel === 'undefined' ? undefined : option.listItemLabel : undefined;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
    className: props.hyperlinkClassName,
    "data-opt": "true",
    "data-value": _value,
    "data-label": _label,
    "data-list-item-label": _listItemLabel,
    "data-itemdata": option ? JSON.stringify(option) : '',
    href: "#",
    tabIndex: -1,
    dangerouslySetInnerHTML: {
      __html: typeof _listItemLabel === 'undefined' ? "".concat(_label) : "".concat(_listItemLabel)
    }
  })));
}
// EXTERNAL MODULE: ./src/utils/get-element-property.js
var get_element_property = __webpack_require__(378);
;// CONCATENATED MODULE: ./src/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var DropdownMenu = function DropdownMenu(props) {
  var wrapperClassName = props.wrapperClassName,
    listClassName = props.listClassName,
    hyperlinkClassName = props.hyperlinkClassName,
    showClassName = props.showClassName,
    exceededSidePosOffset = props.exceededSidePosOffset,
    hoverOn = props.hoverOn,
    hoverOff = props.hoverOff,
    hoverDelay = props.hoverDelay,
    iconLeft = props.iconLeft,
    iconRight = props.iconRight,
    name = props.name,
    triggerButton = props.triggerButton,
    triggerClassName = props.triggerClassName,
    triggerContent = props.triggerContent,
    triggerSwitchActive = props.triggerSwitchActive,
    options = props.options,
    tabIndex = props.tabIndex,
    id = props.id,
    onChange = props.onChange;
  var POS_OFFSET = 0;
  var EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
  var uniqueID = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)().replace(/\:/g, "-");
  var idRes = id || uniqueID;
  var modalRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var iconRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var listRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _hoverDelay = !isNaN(hoverDelay) && typeof hoverDelay !== 'undefined' ? hoverDelay : 150;
  var defaultLabel = triggerContent === undefined ? '' : triggerContent;
  var selectedLabel = triggerSwitchActive ? selected ? selected.label : defaultLabel : defaultLabel;
  var selectOptionsListPresentation = options === null || options === void 0 ? void 0 : options.map(function (selectOption, index) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Option, {
      key: index,
      option: selectOption,
      hyperlinkClassName: hyperlinkClassName ? hyperlinkClassName : 'dd-menu-default__item'
    });
  });
  function handleClick(event) {
    if (hoverOn) return;
    setIsOpen(!isOpen);
    popwinPosInit();
    popwinBtnEventsInit();
  }
  function handleHoverOn(event) {
    if (!hoverOn || typeof hoverOn === 'undefined') return;
    setTimeout(function () {
      setIsOpen(true);
      popwinPosInit();
      popwinBtnEventsInit();
    }, _hoverDelay);
  }
  function handleHoverOff(event) {
    if (!hoverOff || typeof hoverOff === 'undefined') return;
    setTimeout(function () {
      setIsOpen(false);
      popwinPosHide();
    }, _hoverDelay);
  }
  function handleClose(event) {
    if (event.target.closest(".dd-menu__wrapper") === null && event.target.closest(".dd-menu-list__wrapper") === null) {
      setIsOpen(false);
      popwinPosHide();
    }
  }
  function handleSelect(e, option, currentData) {
    e.preventDefault();
    setIsOpen(false);
    popwinPosHide();
    setSelected(option);

    // change display text of trigger
    setTimeout(function () {
      if (triggerRef.current !== null) {
        triggerRef.current.querySelector('.dd-menu__trigger').innerHTML = currentData.label;
      }
    }, 0);
    if (typeof onChange === 'function') {
      onChange(option, currentData);
    }
  }
  function popwinPosInit() {
    if (modalRef.current === null || triggerRef.current === null) return;
    setTimeout(function () {
      // update modal position
      var _modalRef = document.querySelector("#dd-menu-list__wrapper-".concat(idRes));
      var _triggerRef = triggerRef.current;

      // console.log(getAbsolutePositionOfStage(_triggerRef));

      var _getAbsolutePositionO = (0,get_element_property.getAbsolutePositionOfStage)(_triggerRef),
        x = _getAbsolutePositionO.x,
        y = _getAbsolutePositionO.y,
        width = _getAbsolutePositionO.width,
        height = _getAbsolutePositionO.height;
      var _triggerBox = _triggerRef.getBoundingClientRect();
      var targetPos = '';

      // STEP 1:
      //-----------
      // display wrapper
      _modalRef.classList.add('active');

      // STEP 2:
      //-----------
      // Detect position
      if (window.innerHeight - _triggerBox.top > 100) {
        targetPos = 'bottom';
      } else {
        targetPos = 'top';
      }

      // STEP 3:
      //-----------
      // Adjust position
      if (targetPos === 'top') {
        _modalRef.style.left = x + 'px';
        //_modalRef.style.top = y - POS_OFFSET - (listRef.current.clientHeight) - 2 + 'px';
        _modalRef.style.top = 'auto';
        _modalRef.style.bottom = window.innerHeight - _triggerBox.top + POS_OFFSET + 2 + 'px';
        _modalRef.style.setProperty('position', 'fixed', 'important');
        _modalRef.classList.add('pos-top');
      }
      if (targetPos === 'bottom') {
        _modalRef.style.left = x + 'px';
        _modalRef.style.bottom = 'auto';
        _modalRef.style.top = y + height + POS_OFFSET + 'px';
        _modalRef.style.setProperty('position', 'absolute', 'important');
        _modalRef.classList.remove('pos-top');
      }

      // STEP 4:
      //-----------            
      // Determine whether it exceeds the far right or left side of the screen
      var _modalContent = modalRef.current;
      var _modalListContent = modalRef.current.querySelector('.dd-menu-list__inner');
      var _modalBox = _modalListContent.getBoundingClientRect();
      var _iconRef = iconRef.current;
      if (_modalBox.right > window.innerWidth) {
        var _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.style.marginLeft = "-".concat(_modalOffsetPosition, "px");
        _iconRef.style.marginLeft = "".concat(_modalOffsetPosition, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }

      if (_modalBox.left < 0) {
        var _modalOffsetPosition2 = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
        _modalContent.style.marginLeft = "".concat(_modalOffsetPosition2, "px");
        _iconRef.style.marginLeft = "-".concat(_modalOffsetPosition2, "px");
        // console.log('_modalPosition: ', _modalOffsetPosition)
      }
    }, 0);
  }
  function popwinPosHide() {
    var _modalRef = document.querySelector("#dd-menu-list__wrapper-".concat(idRes));
    if (_modalRef !== null) {
      // remove classnames and styles
      _modalRef.classList.remove('active');
    }
  }
  function popwinBtnEventsInit() {
    if (listRef.current === null) return;

    // options event listener
    // !!! to prevent button mismatch when changing
    if (Array.isArray(options) && options.length > 0) {
      [].slice.call(listRef.current.querySelectorAll('[data-opt]')).forEach(function (node) {
        if (typeof node.dataset.ev === 'undefined') {
          node.dataset.ev = 'true';

          // Prevent touch screen from starting to click option, DO NOT USE "pointerdown"
          node.addEventListener('click', function (e) {
            var _value = e.currentTarget.dataset.value;
            var _itemdata = JSON.parse(e.currentTarget.dataset.itemdata);
            handleSelect(e, _value, _itemdata);
          });
        }
      });
    }
  }
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    // Move HTML templates to tag end body </body>
    // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
    // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
    //--------------
    if (document.body !== null && modalRef.current !== null) {
      document.body.appendChild(modalRef.current);
    }
    document.removeEventListener('pointerdown', handleClose);
    document.addEventListener('pointerdown', handleClose);
    return function () {
      var _document$querySelect;
      document.removeEventListener('pointerdown', handleClose);
      (_document$querySelect = document.querySelector("#dd-menu-list__wrapper-".concat(idRes))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
    };
  }, [options]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "dd-menu__wrapper ".concat(wrapperClassName || wrapperClassName === '' ? wrapperClassName : "dd-menu-default", " ").concat(isOpen ? 'active' : ''),
    onMouseLeave: handleHoverOff
  }, triggerButton ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    ref: triggerRef,
    tabIndex: tabIndex || -1,
    className: triggerClassName ? "".concat(triggerClassName) : "d-block-inline w-auto",
    type: "button",
    "data-overlay-id": "dd-menu-list__wrapper-".concat(idRes),
    onMouseEnter: handleHoverOn,
    onClick: handleClick
  }, iconLeft ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__icon"
  }, iconLeft)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__trigger",
    dangerouslySetInnerHTML: {
      __html: selectedLabel
    }
  }), iconRight ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__icon"
  }, iconRight)) : null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: triggerRef,
    className: triggerClassName ? "".concat(triggerClassName) : "d-block-inline w-auto",
    "data-overlay-id": "dd-menu-list__wrapper-".concat(idRes),
    onMouseEnter: handleHoverOn,
    onClick: handleClick
  }, iconLeft ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__icon"
  }, iconLeft)) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__trigger",
    dangerouslySetInnerHTML: {
      __html: selectedLabel
    }
  }), iconRight ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "dd-menu__icon"
  }, iconRight)) : null), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    name: name || '',
    type: "hidden",
    value: selected === null || selected === void 0 ? void 0 : selected.value
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: modalRef,
    className: "dd-menu-list__wrapper",
    id: "dd-menu-list__wrapper-".concat(idRes)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    ref: iconRef,
    className: "dd-menu-list__icon ".concat(isOpen ? 'active' : '')
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    ref: listRef,
    className: "dd-menu-list__inner ".concat(listClassName ? listClassName : 'dd-menu-default__inner', " ").concat(isOpen ? showClassName ? showClassName : 'show' : '')
  }, selectOptionsListPresentation))));
};
/* harmony default export */ const src = (DropdownMenu);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});