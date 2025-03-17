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
/* harmony export */   "htmlToPlain": () => (/* binding */ htmlToPlain),
/* harmony export */   "multiSpacesToSingle": () => (/* binding */ multiSpacesToSingle),
/* harmony export */   "onlyNumAndLetter": () => (/* binding */ onlyNumAndLetter),
/* harmony export */   "removeFirstLastSlash": () => (/* binding */ removeFirstLastSlash),
/* harmony export */   "removeFirstSlash": () => (/* binding */ removeFirstSlash),
/* harmony export */   "removeTrailingSlash": () => (/* binding */ removeTrailingSlash),
/* harmony export */   "rmAllSpace": () => (/* binding */ rmAllSpace),
/* harmony export */   "rmSpec": () => (/* binding */ rmSpec),
/* harmony export */   "stripTagsAndContent": () => (/* binding */ stripTagsAndContent),
/* harmony export */   "trimAll": () => (/* binding */ trimAll)
/* harmony export */ });
/**
 * String formatting utility functions
 */

/**
 * Remove all special characters except space from a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function rmSpec(input) {
  return input.replace(/[^a-zA-Z0-9 \u4E00-\u9FFF]/g, "");
}

/**
 * Allow only numbers and letters in a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function onlyNumAndLetter(input) {
  return input.replace(/[^a-zA-Z0-9 ]/g, "");
}

/**
 * Remove all spaces including those in the middle
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function rmAllSpace(input) {
  return input.replace(/\s/g, "");
}

/**
 * Remove whitespace from both sides of a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function trimAll(input) {
  return input.replace(/(^\s+)|(\s+$)/g, "");
}

/**
 * Replace multiple spaces with a single space
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function multiSpacesToSingle(input) {
  return input.replace(/\s+(\W)/g, ' ');
}

/**
 * Convert HTML text to plain text
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function htmlToPlain(input) {
  return input.replace(/(<([^>]+)>)/ig, '');
}

/**
 * Strip HTML tags and their content
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
function stripTagsAndContent(input) {
  return input.replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
}

/**
 * Remove first and last slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
function removeFirstLastSlash(input) {
  return input.replace(/^\/|\/$/g, '');
}

/**
 * Remove trailing slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
function removeTrailingSlash(input) {
  return input.replace(/\/+$/, '');
}

/**
 * Remove first slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
function removeFirstSlash(input) {
  return input.replace(/\//, '');
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});