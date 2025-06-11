(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory();
	else
		root["RPB"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeArray": () => (/* binding */ serializeArray)
/* harmony export */ });
/**
 * Serialize form values
 * @param form - HTMLFormElement or HTMLDivElement to serialize
 * @param types - An array of field types to include in serialization
 * @returns Array of form fields with their values
 */
function serializeArray(form) {
  var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'textarea', 'select', 'checkbox', 'progress', 'datalist'];
  if (form === null) return [];
  var objects = [];
  var fieldsTypes = types;
  fieldsTypes.forEach(function (item) {
    var fields = form.getElementsByTagName(item);
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var _name = field.getAttribute("name");
      var _value = '';

      // Get value based on element type
      if (field instanceof HTMLInputElement) {
        _value = field.value;
      } else if (field instanceof HTMLTextAreaElement) {
        _value = field.value;
      } else if (field instanceof HTMLSelectElement) {
        _value = field.value;
      } else if (field instanceof HTMLProgressElement) {
        _value = field.value.toString();
      } else if (field instanceof HTMLDataListElement) {
        _value = ''; // DataList elements don't have a value property
      }

      // if field is Array
      if (_name !== null && _name.match(/(\[.*?\])/gi)) {
        var inputs = form.querySelectorAll("[name='".concat(_name, "']"));
        var _arrFieldValue = [];
        for (var j = 0; j < inputs.length; j++) {
          var _arrField = inputs[j];
          //if checkbox or radio
          if (_arrField.type === "radio" || _arrField.type === "checkbox") {
            if (_arrField.checked === true) {
              _arrFieldValue.push(_arrField.value);
            } else {
              _arrFieldValue.push("");
            }
          } else {
            _arrFieldValue.push(_arrField.value);
          }
        }
        _value = _arrFieldValue;
      }

      //if checkbox or radio
      if (field instanceof HTMLInputElement && (field.type === 'radio' || field.type === 'checkbox')) {
        if (field.checked === true) {
          objects.push({
            name: _name || '',
            value: _value
          });
        }
      } else {
        objects.push({
          name: _name || '',
          value: _value
        });
      }
    }
  });

  // remove Duplicate objects from JSON Array
  var clean = objects.filter(function (item, index, self) {
    return index === self.findIndex(function (t) {
      return t.name === item.name;
    });
  });
  return clean;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});