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
/* harmony export */   "fixAndParseJSON": () => (/* binding */ fixAndParseJSON),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isTel": () => (/* binding */ isTel),
/* harmony export */   "isValidNumeric": () => (/* binding */ isValidNumeric)
/* harmony export */ });
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

// ❌ Invalid JSON with extra commas
const errorJson004 = `{
    "common": { "app_id": "de805836" },
    "business": {
        "language": "zh_cn",
        "domain": "iat",
        "accent": "mandarin",
        "dwa": "wpgs",
    },
    "data": { "status": 0 }
}`;


console.log('okJson =>', fixAndParseJSON(okJson));   // Can parse normally  success = true
console.log('okJson =>', fixAndParseJSON(okJson2));   // Can parse normally  success = true
console.log('badJson =>', fixAndParseJSON(badJson)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson2)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson3)); // Can parse after fixing success = true
console.log('badJson =>', fixAndParseJSON(badJson4)); // Can parse after fixing success = true
console.log('errorJson =>', fixAndParseJSON(errorJson001)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
console.log('errorJson =>', fixAndParseJSON(errorJson002)); // {success: false, error: 'Invalid JSON format', details: "Expected property name or '}' in JSON at position 2 (line 1 column 3)"}
console.log('errorJson =>', fixAndParseJSON(errorJson003)); // {success: false, error: 'Invalid JSON format', details: 'Invalid object: mismatched braces'}
console.log('errorJson =>', fixAndParseJSON(errorJson004)); // {success: false, error: 'Invalid JSON format', details: 'Trailing comma detected in object'}

*/
/**
 * Fix And Parse JSON (Support for handling complex escape JSON strings)
 * @desc recursively fix top-level key/value (recursively handles when encountering top-level values that are objects/arrays)
 * @private
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
    var p = pair.trim();
    // If the split fragment is empty, there are extra commas (e.g. {"a":1, })
    if (p === '') throw new Error('Trailing comma detected in object');
    var idx = findTopLevelColon(p);
    if (idx === -1) throw new Error('Invalid key-value pair');
    var rawKey = p.slice(0, idx).trim();
    var rawVal = p.slice(idx + 1);
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
    // If the split fragment is empty, there are extra commas (e.g. [1, 2, ])
    if (t === '') throw new Error('Trailing comma detected in array');
    if (t.startsWith('{')) return processTopObject(t, depth + 1, MAX_DEPTH);
    if (t.startsWith('[')) return processTopArray(t, depth + 1, MAX_DEPTH);
    return repairPossiblyQuotedValue(t, depth + 1, MAX_DEPTH);
  });
  return '[' + processed.join(',') + ']';
}
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
    return JSON.stringify(inner);
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

function splitTopLevel(str) {
  var parts = [];
  var buf = '';
  var depthCurly = 0,
    depthSquare = 0,
    depthParen = 0;
  var inSingle = false,
    inDouble = false,
    esc = false;
  var lastCharWasComma = false;
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
      if (ch === '{') depthCurly++;else if (ch === '}') depthCurly--;else if (ch === '[') depthSquare++;else if (ch === ']') depthSquare--;else if (ch === '(') depthParen++;else if (ch === ')') depthParen--;
      if (ch === ',' && depthCurly === 0 && depthSquare === 0 && depthParen === 0) {
        parts.push(buf);
        buf = '';
        lastCharWasComma = true;
        continue;
      }
    }
    if (!/\s/.test(ch)) lastCharWasComma = false;
    buf += ch;
  }
  if (lastCharWasComma || parts.length > 0 && buf.trim() === '') {
    parts.push("");
  } else if (buf.trim() !== '' || parts.length === 0) {
    parts.push(buf);
  }
  if (depthCurly !== 0 || depthSquare !== 0 || depthParen !== 0) throw new Error('Mismatched structure');
  return parts;
}
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
function extractKeyContent(rawKey) {
  var r = rawKey.trim();
  if (r.startsWith('"') && r.endsWith('"') || r.startsWith("'") && r.endsWith("'")) {
    return r.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  }
  return r;
}

/* ---------- Exported Validation Functions ---------- */

function isJSON(input) {
  if (typeof input === 'string' && input.length > 0) {
    return fixAndParseJSON(input).success;
  } else {
    return _typeof(input) === 'object' && input !== null && Object.prototype.toString.call(input) === '[object Object]' && !Array.isArray(input);
  }
}
function isValidNumeric(str) {
  if (typeof str !== "string") return false;
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
function isEmpty(input) {
  if (Array.isArray(input)) {
    return input.some(function (str) {
      return !str.replace(/\s/g, '').length;
    });
  }
  return !input.replace(/\s/g, '').length;
}
function isNumber(input) {
  var reg = /^[\d|\.|,]+$/;
  return reg.test(input);
}
function isInt(input) {
  if (input === "") return false;
  var reg = /\D+/;
  return !reg.test(input);
}
function isEmail(input) {
  var reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
  return reg.test(input);
}
function isTel(input) {
  var reg = /^[0-9- ]{7,20}$/;
  return reg.test(input);
}
function isMobile(input) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(input);
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});