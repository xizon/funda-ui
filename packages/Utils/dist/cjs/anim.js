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
/******/ 	var __webpack_modules__ = ({

/***/ 357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easeInOutQuad": () => (/* binding */ easeInOutQuad),
/* harmony export */   "easeInQuad": () => (/* binding */ easeInQuad),
/* harmony export */   "easeLinear": () => (/* binding */ easeLinear),
/* harmony export */   "easeOutQuad": () => (/* binding */ easeOutQuad)
/* harmony export */ });
/* unused harmony exports easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack */
/*
 * All easing functions
 * @link: https://easings.net
 * @param {Number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
 * @param {Number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
 * @param {Number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
 * @param {Number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
 * @return {number}
 */
function easeLinear(t, b, c, d) {
  return c * t / d + b;
}
function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}
function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
}
function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}
function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
function easeInExpo(t, b, c, d) {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
function easeOutExpo(t, b, c, d) {
  return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function easeInOutExpo(t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
function easeOutCirc(t, b, c, d) {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function easeInOutCirc(t, b, c, d) {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
function easeInCubic(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
}
function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
}
function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}
function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
function easeInElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}
function easeOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}
function easeInOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  if (!p) p = d * (.3 * 1.5);
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
}
function easeInBack(t, b, c, d) {
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
function easeOutBack(t, b, c, d) {
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
function easeInOutBack(t, b, c, d) {
  var s = 1.70158;
  if (s == undefined) s = 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}


/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
 */
function setDefaultOptions(props, options) {
  if (_typeof(options) === ( true ? "undefined" : 0) || options === null || options === false) options = {};
  //Set a default configuration
  if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(props)) {
    var defaultConfigValues = Object.values(props);
    Object.keys(props).forEach(function (prop, index) {
      // Well-formed string type
      Object.keys(options).forEach(function (prop2, index2) {
        if (prop2 === prop) {
          var _v = options[prop2];
          if (_v == 'true') _v = true;
          if (_v == 'false') _v = false;
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isValidNumeric)(_v)) _v = parseFloat(_v);
          if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isJSON)(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);
          options[prop2] = _v;
        }
      });

      //
      if (_typeof(options[prop]) === ( true ? "undefined" : 0) || options[prop] === null) options[prop] = defaultConfigValues[index];
    });
  }
  return options;
}


/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "isValidNumeric": () => (/* binding */ isValidNumeric)
/* harmony export */ });
/* unused harmony exports isEmpty, isNumber, isInt, isEmail, isTel, isMobile */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Fix And Parse JSON (Support for handling complex escape JSON strings)
 * @desc recursively fix top-level key/value (recursively handles when encountering top-level values that are objects/arrays)
 * @private
 */
/*
 - Still prioritize JSON.parse first;
 - After parse fails, do unescaping (\\" → ");
 - Then process the outermost layer (object or array) key by key, value by value;
 - If a top-level value is an unquoted object or array (e.g., messages: [ {...} ]), recursively treat that value as a new outermost layer for fixing;
 - For strings wrapped in quotes ('...' or "..."), only extract the outer layer and re-encode with JSON.stringify (ensuring internal single/double quotes won't be mistakenly changed);
 - Set MAX_DEPTH to prevent infinite recursion.
*/
/*
@Examples:

// ✅ Valid JSON (contains svg and single quote content)
const okJson = `{
  "label":"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
  "value":"new",
  "onClick":"method.setVal(''); method.clearData();"
}`;

const okJson2 = `{
  label:"<svg width='16' height='16'><path fill='currentColor' d='M19 13h-6'/></svg> 新建会话",
  value:"new",
  onClick:"method.setVal(''); method.clearData();"
}`;

// ⚠️ Single quote JSON
const badJson = "{'model':'{model}','messages':[{'role':'user','content':'{message}'}],'stream': true}";

// ⚠️ Escaped JSON
const badJson2 = "{\\\"label\\\":\\\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\\\",\\\"value\\\":\\\"new\\\",\\\"onClick\\\":\\\"method.setVal(''); method.clearData();\\\"}";

const badJson3 = "{\"label\":\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> 新建会话\",\"value\":\"new\",\"onClick\":\"method.setVal(''); method.clearData();\"}";

const badJson4 = "[{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M20.5 9a3.49 3.49 0 0 0-3.45 3h-1.1a2.49 2.49 0 0 0-4.396-1.052L8.878 9.731l3.143-4.225a2.458 2.458 0 0 0 2.98-.019L17.339 8H16v1h3V6h-1v1.243l-2.336-2.512A2.473 2.473 0 0 0 16 3.5a2.5 2.5 0 0 0-5 0 2.474 2.474 0 0 0 .343 1.243L7.947 9.308 4.955 7.947a2.404 2.404 0 0 0-.161-1.438l3.704-1.385-.44 1.371.942.333L10 4 7.172 3l-.334.943 1.01.357-3.659 1.368a2.498 2.498 0 1 0-.682 4.117l2.085 2.688-2.053 2.76a2.5 2.5 0 1 0 .87 3.864l3.484 1.587-1.055.373.334.943L10 21l-1-2.828-.943.333.435 1.354-3.608-1.645A2.471 2.471 0 0 0 5 17.5a2.5 2.5 0 0 0-.058-.527l3.053-1.405 3.476 4.48a2.498 2.498 0 1 0 4.113.075L18 17.707V19h1v-3h-3v1h1.293l-2.416 2.416a2.466 2.466 0 0 0-2.667-.047l-3.283-4.23 2.554-1.176A2.494 2.494 0 0 0 15.95 13h1.1a3.493 3.493 0 1 0 3.45-4zm-7-7A1.5 1.5 0 1 1 12 3.5 1.502 1.502 0 0 1 13.5 2zm0 18a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5zM1 7.5a1.5 1.5 0 1 1 2.457 1.145l-.144.112A1.496 1.496 0 0 1 1 7.5zm3.32 1.703a2.507 2.507 0 0 0 .264-.326l2.752 1.251-1.124 1.512zM2.5 19A1.5 1.5 0 1 1 4 17.5 1.502 1.502 0 0 1 2.5 19zm2.037-2.941a2.518 2.518 0 0 0-.193-.234l1.885-2.532 1.136 1.464zm3.76-1.731L6.849 12.46l1.42-1.908L11.1 11.84a2.29 2.29 0 0 0-.033 1.213zM13.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zm7 1a2.5 2.5 0 1 1 2.5-2.5 2.502 2.502 0 0 1-2.5 2.5zm1.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z'/><path fill='none' d='M0 0h24v24H0z'/></svg> 深度思考\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.executeCustomMethod('changeModel', true)}else{method.executeCustomMethod('changeModel', false)}\"},{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z'/></svg> 精简回答\",\"value\":\"brief\",\"onClick\":\"if(isActive){method.setContextData({systemPrompt:'请精简回答，字数控制在150个字左右, 思考过程请简洁简短',mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}else{method.setContextData({mergedText:method.getContextData().mergedText,analyzeMetrics:method.getContextData().analyzeMetrics});}\"},{\"label\":\"<svg fill='none' width='12' height='12' viewBox='0 0 16 16'><path d='M7 0.0618896V9H15.9381C15.446 12.9463 12.0796 16 8 16C3.58172 16 0 12.4183 0 8C0 3.92038 3.05369 0.553988 7 0.0618896Z' fill='currentColor'/><path d='M9 0.0618897V7H15.9381C15.4869 3.38128 12.6187 0.513137 9 0.0618897Z' fill='currentColor'/></svg> 指标分析\",\"value\":\"lab\",\"onClick\":\"return method.executeCustomMethod('getLibList')\",\"isSelect\":true,\"dynamicOptions\":true}]";


// ❌ Invalid JSON with missing } or ]
const errorJson001 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'";

const errorJson002 = "[{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': '{chatId}', 'token': '{token}'}";

// ❌ Invalid JSON with missing quotes
const errorJson003 = "{'model':'qwen-plus','base_url':'https://dashscope.aliyuncs.com/compatible-mode/v1/','api_key':'sk-0989fb9baab8450682af4d000f5b7cba','message':'{message}','stream':'true','chatId': {chatId}', 'token': '{token}'}";



console.log('okJson =>', fixAndParseJSON(okJson));   // Can parse normally  success = true
console.log('okJson =>', fixAndParseJSON(okJson2));   // Can parse normally  success = true
console.log('badJson =>', fixAndParseJSON(badJson)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson2)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson3)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson4)); // Can parse after fixing success = true
console.log('errorJson =>', fixAndParseJSON(errorJson001)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
console.log('errorJson =>', fixAndParseJSON(errorJson002)); // {success: false, error: 'Invalid JSON format', details: "Expected property name or '}' in JSON at position 2 (line 1 column 3)"}
console.log('errorJson =>', fixAndParseJSON(errorJson003)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}

*/

// Type definitions

function fixAndParseJSON(input) {
  var MAX_DEPTH = 6;

  // 1. Quick attempt
  try {
    return {
      success: true,
      data: JSON.parse(input)
    };
  } catch (e) {
    // Continue with fixing
  }

  // 2. Simple unescaping of escaped \" (common case from pasted JS literals)
  var s = input;
  if (s.includes('\\"')) s = s.replace(/\\"/g, '"');
  s = s.trim();
  try {
    if (s.startsWith('{')) {
      s = processTopObject(s, 0, MAX_DEPTH);
    } else if (s.startsWith('[')) {
      s = processTopArray(s, 0, MAX_DEPTH);
    } else {
      throw new Error('Input is not an object or array');
    }
    return {
      success: true,
      data: JSON.parse(s)
    };
  } catch (err) {
    var error = err instanceof Error ? err : new Error('Unknown error');
    return {
      success: false,
      error: 'Invalid JSON format',
      details: error.message
    };
  }
}

/* ---------- Helper (Recursive) Functions ---------- */

function processTopObject(str, depth, MAX_DEPTH) {
  if (depth > MAX_DEPTH) return str;
  str = str.trim();

  // First check if braces match
  var braceCount = 0;
  var inString = false;
  var escapeNext = false;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    if (ch === '\\') {
      escapeNext = true;
      continue;
    }
    if ((ch === '"' || ch === "'") && !escapeNext) {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (ch === '{') braceCount++;else if (ch === '}') braceCount--;
    }
  }
  if (braceCount !== 0) {
    throw new Error('Invalid object: mismatched braces');
  }

  // Ensure both ends are { ... }
  if (!(str.startsWith('{') && str.endsWith('}'))) {
    var f = str.indexOf('{'),
      l = str.lastIndexOf('}');
    if (f === -1 || l === -1 || l <= f) {
      throw new Error('Invalid object format: missing or mismatched braces');
    }
    str = str.slice(f, l + 1);
  }
  var inner = str.slice(1, -1);
  var pairs = splitTopLevel(inner);
  var repairedPairs = pairs.map(function (pair) {
    if (!pair || pair.trim() === '') return '';
    var idx = findTopLevelColon(pair);
    if (idx === -1) {
      return pair; // Non key:value fragment, keep as is (rare case)
    }

    var rawKey = pair.slice(0, idx).trim();
    var rawVal = pair.slice(idx + 1);
    var keyContent = extractKeyContent(rawKey);
    var keyJson = JSON.stringify(keyContent);
    var repairedValue = repairPossiblyQuotedValue(rawVal, depth + 1, MAX_DEPTH);
    return keyJson + ':' + repairedValue;
  });
  return '{' + repairedPairs.join(',') + '}';
}
function processTopArray(str, depth, MAX_DEPTH) {
  if (depth > MAX_DEPTH) return str;
  str = str.trim();
  if (!(str.startsWith('[') && str.endsWith(']'))) {
    var f = str.indexOf('['),
      l = str.lastIndexOf(']');
    if (f === -1 || l === -1 || l <= f) return str;
    str = str.slice(f, l + 1);
  }
  var inner = str.slice(1, -1);
  var elements = splitTopLevel(inner);
  var processed = elements.map(function (el) {
    var t = el.trim();
    if (t === '') return '';
    if (t.startsWith('{')) return processTopObject(t, depth + 1, MAX_DEPTH);
    if (t.startsWith('[')) return processTopArray(t, depth + 1, MAX_DEPTH);
    return repairPossiblyQuotedValue(t, depth + 1, MAX_DEPTH);
  });
  return '[' + processed.join(',') + ']';
}

// If it's a string wrapped in quotes, extract the inner content and JSON.stringify (safe escaping)
// If it's an object/array literal (not wrapped in quotes), recursively process (treat as new outermost layer)
// Otherwise return the original fragment directly (numbers/true/false/null or JS expressions)
function repairPossiblyQuotedValue(rawVal, depth, MAX_DEPTH) {
  var v = rawVal.trim();
  if (v === '') return v;
  if (v[0] === '"' || v[0] === "'") {
    var quote = v[0];
    // Find the last unescaped same quote
    var lastPos = -1;
    for (var i = v.length - 1; i >= 0; i--) {
      if (v[i] === quote) {
        // check escaped
        var bs = 0,
          k = i - 1;
        while (k >= 0 && v[k] === '\\') {
          bs++;
          k--;
        }
        if (bs % 2 === 0) {
          lastPos = i;
          break;
        }
      }
    }
    var inner = lastPos > 0 ? v.slice(1, lastPos) : v.slice(1);
    return JSON.stringify(inner); // Use JSON.stringify to generate valid JSON string (automatically escape internal quotes, etc.)
  }

  // If it's an object or array literal (not wrapped in quotes) -> recursively treat as new outermost layer
  if (v.startsWith('{')) {
    return processTopObject(v, depth, MAX_DEPTH);
  }
  if (v.startsWith('[')) {
    return processTopArray(v, depth, MAX_DEPTH);
  }

  // Others (numbers, boolean, null, or JS expressions): return as-is
  return v;
}

/* --------- Utilities: Split by top-level commas, find top-level colon, extract key --------- */

// Split by top-level commas (ignore strings, sub-objects, sub-arrays, commas inside parentheses)
function splitTopLevel(str) {
  var parts = [];
  var buf = '';
  var depthCurly = 0,
    depthSquare = 0,
    depthParen = 0;
  var inSingle = false,
    inDouble = false,
    esc = false;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (esc) {
      buf += ch;
      esc = false;
      continue;
    }
    if (ch === '\\') {
      buf += ch;
      esc = true;
      continue;
    }
    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
      buf += ch;
      continue;
    }
    if (ch === '"' && !inSingle) {
      inDouble = !inDouble;
      buf += ch;
      continue;
    }
    if (!inSingle && !inDouble) {
      if (ch === '{') {
        depthCurly++;
        buf += ch;
        continue;
      }
      if (ch === '}') {
        depthCurly--;
        buf += ch;
        continue;
      }
      if (ch === '[') {
        depthSquare++;
        buf += ch;
        continue;
      }
      if (ch === ']') {
        depthSquare--;
        buf += ch;
        continue;
      }
      if (ch === '(') {
        depthParen++;
        buf += ch;
        continue;
      }
      if (ch === ')') {
        depthParen--;
        buf += ch;
        continue;
      }
      if (ch === ',' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
        parts.push(buf);
        buf = '';
        continue;
      }
    }
    buf += ch;
  }

  // Check for unclosed brackets or quotes
  if (depthCurly !== 0 || depthSquare !== 0 || depthParen !== 0 || inSingle || inDouble) {
    throw new Error('Invalid JSON: unclosed brackets or quotes');
  }
  if (buf.trim() !== '') parts.push(buf);
  return parts;
}

// Find the first "top-level" colon index (ignore inside strings & sub-levels)
function findTopLevelColon(str) {
  var inSingle = false,
    inDouble = false,
    esc = false;
  var depthCurly = 0,
    depthSquare = 0,
    depthParen = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (esc) {
      esc = false;
      continue;
    }
    if (ch === '\\') {
      esc = true;
      continue;
    }
    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
      continue;
    }
    if (ch === '"' && !inSingle) {
      inDouble = !inDouble;
      continue;
    }
    if (!inSingle && !inDouble) {
      if (ch === '{') {
        depthCurly++;
        continue;
      }
      if (ch === '}') {
        depthCurly--;
        continue;
      }
      if (ch === '[') {
        depthSquare++;
        continue;
      }
      if (ch === ']') {
        depthSquare--;
        continue;
      }
      if (ch === '(') {
        depthParen++;
        continue;
      }
      if (ch === ')') {
        depthParen--;
        continue;
      }
      if (ch === ':' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
        return i;
      }
    }
  }
  return -1;
}

// Extract key content (supports "key", 'key', key), returns pure key string
function extractKeyContent(rawKey) {
  var r = rawKey.trim();
  if (r.startsWith('"') && r.endsWith('"') || r.startsWith("'") && r.endsWith("'")) {
    var inner = r.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
    return inner;
  }
  return r;
}

/**
 * Determine whether it is in JSON format
 * @private
 */
function isJSON(input) {
  if (typeof input === 'string' && input.length > 0) {
    return fixAndParseJSON(input).success;
  } else {
    if (_typeof(input) === 'object' && Object.prototype.toString.call(input) === '[object Object]' && !input.length) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Check if a string is a valid number
 * @param str - The string to check
 * @returns boolean indicating if the string is a valid number
 */
function isValidNumeric(str) {
  if (typeof str !== "string") return false; // we only process strings!
  if (!isNaN(Number(str)) &&
  // use type coercion to parse the _entirety_ of the string
  !isNaN(parseFloat(str)) // ensure strings of whitespace fail
  ) {
    return true;
  }
  return false;
}

/**
 * Check if input is empty
 * @param input - The input to check (string or array of strings)
 * @returns boolean indicating if the input is empty
 */
function isEmpty(input) {
  if (Array.isArray(input)) {
    return input.some(function (str) {
      return !str.replace(/\s/g, '').length === true;
    });
  }
  return !input.replace(/\s/g, '').length === true;
}

/**
 * Check if input is a valid number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid number
 */
function isNumber(input) {
  var reg = /^[\d|\.|,]+$/;
  return reg.test(input);
}

/**
 * Check if input is a valid integer
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid integer
 */
function isInt(input) {
  if (input === "") {
    return false;
  }
  var reg = /\D+/;
  return !reg.test(input);
}

/**
 * Check if input is a valid email address
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid email
 */
function isEmail(input) {
  var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
  return reg.test(input);
}

/**
 * Check if input is a valid telephone number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid telephone number
 */
function isTel(input) {
  var reg = /^[0-9- ]{7,20}$/;
  return reg.test(input);
}

/**
 * Check if input is a valid mobile number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid mobile number
 */
function isMobile(input) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(input);
}


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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(357);
/* harmony import */ var _initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 * @param  {?string} easeType            - Types of easing animation.
* @param  {?Function} callback           - Callback after animation ends
 */
function animateStyles(curElement, config) {
  var easeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  if (_typeof(curElement) === ( true ? "undefined" : 0)) return;

  // Set a default configuration
  config = (0,_initDefaultOptions__WEBPACK_IMPORTED_MODULE_0__.setDefaultOptions)({
    "startHeight": 0,
    // node.scrollHeight
    "endHeight": 0,
    "speed": 200 //ms
  }, config);
  var _endHeight = config.endHeight;
  var _speed = config.speed;
  var _startHeight = config.startHeight;
  var duration = _speed;
  var start = new Date().getTime();
  var from = 0;
  var to = 100;
  var requestId;
  var loop = function loop() {
    //easing
    var time = new Date().getTime() - start; //Work out the elapsed time
    var val;
    switch (easeType) {
      case "linear":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
        break;
      case "ease-in":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeInQuad)(time, from, to - from, duration);
        break;
      case "ease-out":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeOutQuad)(time, from, to - from, duration);
        break;
      case "ease-in-out":
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeInOutQuad)(time, from, to - from, duration);
        break;
      default:
        val = (0,_easing__WEBPACK_IMPORTED_MODULE_1__.easeLinear)(time, from, to - from, duration);
    }

    // Elapsed time in miliseconds
    var percent = val / 100;

    // change height
    if (curElement.clientHeight < _endHeight) {
      curElement.style.height = _endHeight * percent + 'px';
    } else {
      if (_startHeight > 0) curElement.style.height = _startHeight - _startHeight * percent + 'px';
    }

    //If the elapsed time is less than the speed (ms)
    if (time < duration) {
      requestId = window.requestAnimationFrame(loop);
    } else {
      // change height
      curElement.style.height = _endHeight + 'px';
      if (typeof callback === 'function') callback();
      window.cancelAnimationFrame(requestId);
    }
  };
  requestId = window.requestAnimationFrame(loop);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateStyles);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});