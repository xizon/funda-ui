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

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"arrayBufferToUint8Array": function arrayBufferToUint8Array() {
          return (/* binding */_arrayBufferToUint8Array
          );
        },
        /* harmony export */"arrayToBlob": function arrayToBlob() {
          return (/* binding */_arrayToBlob
          );
        },
        /* harmony export */"arrayToStream": function arrayToStream() {
          return (/* binding */_arrayToStream
          );
        },
        /* harmony export */"arrayToUint8array": function arrayToUint8array() {
          return (/* binding */_arrayToUint8array
          );
        },
        /* harmony export */"base64ToArrayBuffer": function base64ToArrayBuffer() {
          return (/* binding */_base64ToArrayBuffer
          );
        },
        /* harmony export */"blobToUint8array": function blobToUint8array() {
          return (/* binding */_blobToUint8array
          );
        },
        /* harmony export */"decodeBase64Str": function decodeBase64Str() {
          return (/* binding */_decodeBase64Str
          );
        },
        /* harmony export */"readStream": function readStream() {
          return (/* binding */_readStream2
          );
        },
        /* harmony export */"toBinary": function toBinary() {
          return (/* binding */_toBinary
          );
        },
        /* harmony export */"uint8arrayToArr": function uint8arrayToArr() {
          return (/* binding */_uint8arrayToArr
          );
        },
        /* harmony export */"uint8arrayToBase64Str": function uint8arrayToBase64Str() {
          return (/* binding */_uint8arrayToBase64Str
          );
        }
        /* harmony export */
      });
      function _regeneratorRuntime() {
        "use strict";

        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty = Object.defineProperty || function (obj, key, desc) {
            obj[key] = desc.value;
          },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), obj[key];
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
          }), generator;
        }
        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                result.value = unwrapped, resolve(result);
              }, function (error) {
                return invoke("throw", error, resolve, reject);
              });
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg;;) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                if ("suspendedStart" === state) throw state = "completed", context.arg;
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }
              "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
          var info = record.arg;
          return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal", delete record.arg, entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{
            tryLoc: "root"
          }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                  return next.value = undefined, next.done = !0, next;
                };
              return next.next = next;
            }
          }
          return {
            next: doneResult
          };
        }
        function doneResult() {
          return {
            value: undefined,
            done: !0
          };
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
          var ctor = "function" == typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function (genFun) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
        }, exports.awrap = function (arg) {
          return {
            __await: arg
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          void 0 === PromiseImpl && (PromiseImpl = Promise);
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
          return this;
        }), define(Gp, "toString", function () {
          return "[object Generator]";
        }), exports.keys = function (val) {
          var object = Object(val),
            keys = [];
          for (var key in object) keys.push(key);
          return keys.reverse(), function next() {
            for (; keys.length;) {
              var key = keys.pop();
              if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, exports.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
          },
          stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
              return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i],
                record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"),
                  hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                } else {
                  if (!hasFinally) throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
          }
        }, exports;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * base64 to ArrayBuffer
       * @param {String} data 
       * @returns {ArrayBuffer}
       */
      /*
      @returns:
      
      ArrayBuffer(522240)
      
          byteLength: 522240
          detached: false
          maxByteLength: 522240
          resizable: false
          [[Prototype]]: ArrayBuffer
          [[Int8Array]]: Int8Array(522240)
          [[Uint8Array]]: Uint8Array(522240)
          [[Int16Array]]: Int16Array(261120)
          [[Int32Array]]: Int32Array(130560)
          [[ArrayBufferByteLength]]: 522240
          [[ArrayBufferData]]: 673
      */
      function _base64ToArrayBuffer(data) {
        var res = data;
        if (data.indexOf('base64,') >= 0) {
          res = data.split('base64,')[1];
        }
        var binaryString = atob(res);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
      }

      /**
       * ArrayBuffer to Uint8Array
       * @param {ArrayBuffer} data 
       * @returns {Uint8Array}
       */
      /*
      @returns:
      
      Uint8Array(522240) [208, 207, 17, 224, 161, 177, 26, 225, 0, 0, ......]
      */
      function _arrayBufferToUint8Array(data) {
        return new Uint8Array(data);
      }

      /**
       * uint8array to array
       * @param {Uint8Array} data 
       * @returns {Array}
       */
      function _uint8arrayToArr(data) {
        return Array.from(data);
      }

      /**
       * array to uint8array
       * @param {Array} data 
       * @returns {Uint8Array}
       */
      /* Example:
      
      axios({
          method: 'get',
          url: 'http://xxxx',
          responseType: 'arraybuffer'
      })
      .then(function (res) {
          //res.data ==>  ArrayBuffer(xxxx)
          const b64string = uint8arrayToBase64Str(res.data);
          const uint8ArrayData = arrayToUint8array(res.data);
          
          // do something
      
      });
      */
      function _arrayToUint8array(data) {
        return new Uint8Array(data);
      }

      /**
       * uint8array to base64 string
       * @param {Uint8Array|Array} data 
       * @returns {String}
       */
      function _uint8arrayToBase64Str(data) {
        if ((typeof Buffer === "undefined" ? "undefined" : _typeof(Buffer)) !== ( true ? "undefined" : 0)) {
          return Buffer.from(data, 'binary').toString('base64'); // node.js too
        } else {
          var binary = '';
          var bytes = new Uint8Array(data);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        }
      }

      /**
       * decode base64 string
       * @param {String} data 
       * @returns {String}
       */
      function _decodeBase64Str(data) {
        // avoid messy code
        // especially for Chinese, avoid using encodeURIComponent() and encodeURI()
        var decoded = decodeURIComponent(escape(atob(data)));
        return decoded;
      }

      /**
       * integer to binary
       * @param {Number} data 
       * @returns {String}
       */
      function _toBinary(data) {
        if (!Number.isSafeInteger(data)) {
          throw new TypeError('value must be a safe integer');
        }
        return (data >>> 0).toString(2);
      }

      /**
       * array to blob
       * @param {Uint8Array} uint8ArrayData 
       * @returns {Blob}
       */
      function _arrayToBlob(uint8ArrayData) {
        return new Blob([uint8ArrayData], {
          type: "text/plain"
        });
      }

      /**
       * blob to uint8array
       * @param {Blob} data 
       * @returns {Uint8Array}
       */
      function _blobToUint8array(data) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.addEventListener("loadend", function () {
            resolve(reader.result);
          });
          reader.readAsArrayBuffer(data);
        });
      }

      /**
       * array to stream
       * @param {Array<Uint8Array>} data 
       * @returns {ReadableStream }
       */
      /* Example:
      
      const uint8ArrayDataArr = [
          [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,30,0,0,0,30,8,6,0,0,0,59,48,174,162,0,0,0,220,73,68,65,84,72,199,237,214,81,14,194,32,12,0,80,60,128,215,219,49,28,91,118,10,55,216,53,188,132,137,39,19,71,130,75,69,42,148,194,76,116,31,253,89,40,111,233,104,153,48,198,136,111,132,216,225,255,134,143,151,166,84,28,150,152,151,24,158,207,182,130,45,106,92,12,91,193,16,93,241,218,112,8,181,113,174,9,163,232,90,234,130,223,50,134,142,47,135,11,36,216,183,57,49,81,29,67,125,120,116,11,238,12,60,9,133,240,228,45,180,120,91,11,133,112,31,72,176,184,100,162,19,150,3,75,157,139,147,209,208,225,234,136,184,202,65,177,118,146,200,102,178,20,250,169,143,49,188,43,129,198,6,136,116,101,246,55,191,33,168,162,116,65,108,114,97,56,11,77,29,153,109,4,87,57,195,38,117,86,95,75,162,20,56,84,114,205,153,233,148,219,9,226,154,123,131,81,175,69,201,41,239,27,188,255,222,254,52,252,0,234,253,186,89,222,225,73,252,0,0,0,0,73,69,78,68,174,66,96,130]
      ];
      const readableStream = arrayToStream(uint8ArrayDataArr);  
      
      */
      function _arrayToStream(data) {
        // @return --> ReadableStream {locked: false}
        return new ReadableStream({
          start: function start(controller) {
            // push a chunk
            data.forEach(function (chunk) {
              controller.enqueue(new Uint8Array(chunk));
            });
          },
          pull: function pull(controller) {
            // Called `read()` when the controller's queue is empty.
            //controller.enqueue(...);
            controller.close();
          },
          cancel: function cancel(reason) {
            // Called when the stream is canceled.
          }
        });
      }

      /**
       * read stream
       * @param {ReadableStream } data 
       * @returns {Promise}
       */
      /* Example:
      
      readStream(readableStream).then((value) => {
          console.log(value);
          // iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA3ElEQVRIx+3WUQ7CIAwAUDyA19sxHFt2CjfYNbyEiScTR4JLRSqUwkx0H/1ZKG/paJkwxohvhNjh/4aPl6ZUHJaYlxiez7aCLWpcDFvBEF3x2nAItXGuCaPoWuqC3zKGji+HCyTYtzkxUR1DfXh0C+4MPAmF8OQttHhbC4VwH0iwuGSiE5YDS52Lk9HQ4eqIuMpBsXaSyGayFPqpjzG8K4HGBoh0ZfY3vyGoonRBbHJhOAtNHZltBFc5wyZ1Vl9LohQ4VHLNmemU2wnimnuDUa9FySnvG7z/3v40/ADq/bpZ3uFJ/AAAAABJRU5ErkJggg==
          
          // test: <img src="data:image/png;base64,iVBORw0KGgo..." >
           
      });
      */
      function _readStream2(_x) {
        return _readStream.apply(this, arguments);
      }
      function _readStream() {
        _readStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
          var resReceived, stream, readInto;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                resReceived = '';
                stream = data; // ReadableStream {locked: false}
                readInto = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream) {
                    var reader, pump, _pump;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _pump = function _pump3() {
                            _pump = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                              var _yield$reader$read, done, value, base64String;
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return reader.read();
                                  case 2:
                                    _yield$reader$read = _context.sent;
                                    done = _yield$reader$read.done;
                                    value = _yield$reader$read.value;
                                    if (!done) {
                                      _context.next = 7;
                                      break;
                                    }
                                    return _context.abrupt("return");
                                  case 7:
                                    // value for fetch streams is a Uint8Array
                                    base64String = _uint8arrayToBase64Str(value);
                                    resReceived += base64String;
                                    return _context.abrupt("return", pump());
                                  case 10:
                                  case "end":
                                    return _context.stop();
                                }
                              }, _callee);
                            }));
                            return _pump.apply(this, arguments);
                          };
                          pump = function _pump2() {
                            return _pump.apply(this, arguments);
                          };
                          reader = stream.getReader();
                          return _context2.abrupt("return", pump());
                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function readInto(_x2) {
                    return _ref.apply(this, arguments);
                  };
                }();
                _context3.next = 5;
                return readInto(stream);
              case 5:
                return _context3.abrupt("return", resReceived);
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return _readStream.apply(this, arguments);
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/ // The require scope
      /******/
      var __nested_webpack_require_993__ = {};
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_993__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_993__.o(definition, key) && !__nested_webpack_require_993__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_993__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_993__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      __nested_webpack_require_993__.r(__webpack_exports__);
      /* harmony export */
      __nested_webpack_require_993__.d(__webpack_exports__, {
        /* harmony export */"clsWrite": function clsWrite() {
          return (/* binding */_clsWrite
          );
        },
        /* harmony export */"combinedCls": function combinedCls() {
          return (/* binding */_combinedCls
          );
        }
        /* harmony export */
      });
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /**
       * Output of class name
       * @param {*} s      - Any
       * @param  {String} defaultCls      - Default string
       * @param  {?*} targetCls      - Any
       * @returns {*} 
       */
      function _clsWrite(s, defaultCls) {
        var targetCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        return s || s === '' ? typeof targetCls === 'undefined' ? s : targetCls : defaultCls;
      }

      /**
       * Combined classnames
       * @param {*} args 
       * @returns {String|undefined}
       */
      /* Usage:
      
      console.log(combinedCls('a-1', 'a-2', 'a-3', {
          'p-1': null,
          'p-2': undefined,
          'p-3': true,
          'p-4': false,
          'p-5': 'kkk',
          'p-6': 0,
          'p-7': 1,
          'p-8': '',
          undefined
      })); // a-1 a-2 a-3 p-3 p-5 p-7
      */
      function _combinedCls() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (args) {
          var classes = [];
          for (var i = 0; i < args.length; i++) {
            var className = args[i];
            if (!className) {
              continue;
            }
            var type = _typeof(className);
            if (type === 'string' || type === 'number') {
              classes.push(className);
            } else if (type === 'object') {
              var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return value ? key : null;
              });
              classes = _classes.length ? classes.concat(_classes.filter(function (c) {
                return !!c;
              })) : classes;
            }
          }
          return classes.join(' ').trim();
        }
        return undefined;
      }

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(787));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(787)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE__787__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      var __webpack_modules__ = {
        /***/787: /***/function _(module) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1465__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1465__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      (function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_1465__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_1465__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      (function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_1465__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_1465__.o(definition, key) && !__nested_webpack_require_1465__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      (function () {
        /******/__nested_webpack_require_1465__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      (function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_1465__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      (function () {
        __nested_webpack_require_1465__.r(__webpack_exports__);
        /* harmony export */
        __nested_webpack_require_1465__.d(__webpack_exports__, {
          /* harmony export */"default": function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          }
          /* harmony export */
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1465__(787);
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1465__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /**
         * Create an available ID
         * 
        */

        var useComId = function useComId() {
          return "ID-".concat((0, react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/\:/g, "-"));
        };
        /* harmony default export */
        var __WEBPACK_DEFAULT_EXPORT__ = useComId;
      })();

      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var funda_utils_dist_cjs_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
/* harmony import */ var funda_utils_dist_cjs_buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(188);
/* harmony import */ var funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["contentRef", "wrapperClassName", "controlClassName", "controlExClassName", "labelClassName", "labelHoverClassName", "accept", "inline", "autoSubmit", "fetchUrl", "fetchMethod", "fetchParams", "multiple", "submitLabel", "submitClassName", "disabled", "required", "value", "requiredLabel", "label", "name", "id", "data", "tabIndex", "fetchFuncAsync", "fetchFuncMethod", "fetchFuncMethodParams", "onChange", "onComplete", "onProgress"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x6) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x7) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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




var File = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, externalRef) {
  var contentRef = props.contentRef,
    wrapperClassName = props.wrapperClassName,
    controlClassName = props.controlClassName,
    controlExClassName = props.controlExClassName,
    labelClassName = props.labelClassName,
    labelHoverClassName = props.labelHoverClassName,
    accept = props.accept,
    inline = props.inline,
    autoSubmit = props.autoSubmit,
    fetchUrl = props.fetchUrl,
    fetchMethod = props.fetchMethod,
    fetchParams = props.fetchParams,
    multiple = props.multiple,
    submitLabel = props.submitLabel,
    submitClassName = props.submitClassName,
    disabled = props.disabled,
    required = props.required,
    value = props.value,
    requiredLabel = props.requiredLabel,
    label = props.label,
    name = props.name,
    id = props.id,
    data = props.data,
    tabIndex = props.tabIndex,
    fetchFuncAsync = props.fetchFuncAsync,
    fetchFuncMethod = props.fetchFuncMethod,
    fetchFuncMethodParams = props.fetchFuncMethodParams,
    onChange = props.onChange,
    onComplete = props.onComplete,
    onProgress = props.onProgress,
    attributes = _objectWithoutProperties(props, _excluded);
  var uniqueID = funda_utils_dist_cjs_useComId__WEBPACK_IMPORTED_MODULE_1___default()();
  var idRes = id || uniqueID;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var labelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var submitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[0],
    setForceUpdate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultValue = _useState4[0],
    setDefaultValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    incomingData = _useState6[0],
    setIncomingData = _useState6[1];

  // exposes the following methods
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(contentRef, function () {
    return {
      upload: function upload(val) {
        handleSubmit(null);
      }
    };
  }, [contentRef]);
  var getExt = function getExt(filename) {
    var ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];
  };
  function resetDefaultVal() {
    setDefaultValue(undefined);
    fileInputRef.current.value = '';
  }
  function handleFileInput(event) {
    if (fileInputRef.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (event.keyCode === 32) {
        fileInputRef.current.click();
      }
    }
  }
  function fetchData(_x2, _x3) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params, data) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(_typeof(fetchFuncAsync) === 'object')) {
              _context4.next = 7;
              break;
            }
            _context4.next = 3;
            return fetchFuncAsync["".concat(fetchFuncMethod)].apply(fetchFuncAsync, _toConsumableArray(params.split(',')).concat([data]));
          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response.data);
          case 7:
            return _context4.abrupt("return", null);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _fetchData.apply(this, arguments);
  }
  function fetchDataDefault(_x4) {
    return _fetchDataDefault.apply(this, arguments);
  }
  function _fetchDataDefault() {
    _fetchDataDefault = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
      var data,
        methord,
        res,
        _len,
        rest,
        _key,
        response,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            data = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            methord = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'GET';
            res = {};
            if (!(typeof window === 'undefined')) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return", res);
          case 5:
            _context5.prev = 5;
            for (_len = _args5.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              rest[_key - 3] = _args5[_key];
            }
            _context5.next = 9;
            return fetch(url + '?' + new URLSearchParams(fetchParams), _objectSpread({
              method: methord,
              body: data
            }, rest));
          case 9:
            response = _context5.sent;
            _context5.next = 12;
            return response.json();
          case 12:
            res = _context5.sent;
            _context5.next = 18;
            break;
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](5);
            res = {
              'error': _context5.t0
            };
          case 18:
            return _context5.abrupt("return", res);
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 15]]);
    }));
    return _fetchDataDefault.apply(this, arguments);
  }
  function handleLabelEnter(event) {
    event.currentTarget.getElementsByTagName('button')[0].className = labelHoverClassName ? labelHoverClassName : 'btn btn-primary';
  }
  function handleLabelLeave(event) {
    event.currentTarget.getElementsByTagName('button')[0].className = labelClassName ? labelClassName : 'btn btn-outline-secondary';
  }
  function handleSubmit(event) {
    if (event) event.preventDefault();
    var curFiles = fileInputRef.current.files;
    var interceptRequests = onProgress === null || onProgress === void 0 ? void 0 : onProgress(curFiles, fileInputRef.current, submitRef.current);

    // interceptor
    //----------------------------------------------------------------
    if (interceptRequests === false) return;
    if (fetchUrl) {
      var formData = new FormData();
      formData.append('action', 'upload_plug_action');
      for (var i = 0; i < curFiles.length; i++) {
        formData.append("clientFiles", curFiles[i]);
      }
      fetchDataDefault(fetchUrl, formData, fetchMethod ? fetchMethod : 'POST', {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        var jsonData = response.data;
        onComplete === null || onComplete === void 0 ? void 0 : onComplete(fileInputRef.current, submitRef.current, jsonData, incomingData);

        // update default value
        resetDefaultVal();
      });
    } else {
      if (_typeof(fetchFuncAsync) === 'object') {
        // Using custom request structure of class
        //----------------------------------------------------------------
        var streamToText = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
            var readableStream, chunk;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return blob.getReader();
                case 2:
                  readableStream = _context.sent;
                  _context.next = 5;
                  return readableStream.read();
                case 5:
                  chunk = _context.sent;
                  return _context.abrupt("return", new TextDecoder('utf-8').decode(chunk.value));
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function streamToText(_x5) {
            return _ref.apply(this, arguments);
          };
        }();
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var allFiles, _i2, file, fileSliceBlob, fileSliceBlobStream;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                allFiles = [];
                _i2 = 0;
              case 2:
                if (!(_i2 < curFiles.length)) {
                  _context2.next = 16;
                  break;
                }
                file = curFiles[_i2];
                fileSliceBlob = file.slice(0, file.length);
                _context2.next = 7;
                return fileSliceBlob.stream();
              case 7:
                fileSliceBlobStream = _context2.sent;
                _context2.t0 = allFiles;
                _context2.next = 11;
                return streamToText(fileSliceBlobStream);
              case 11:
                _context2.t1 = _context2.sent;
                _context2.t0.push.call(_context2.t0, _context2.t1);
              case 13:
                _i2++;
                _context2.next = 2;
                break;
              case 16:
                //send 
                Promise.all(allFiles).then(function (values) {
                  var _params = fetchFuncMethodParams || [];
                  fetchData(_params.join(','), values).then(function (res) {
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(fileInputRef.current, submitRef.current, res, incomingData);

                    // update default value
                    resetDefaultVal();
                  });
                });
              case 17:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      } else {
        // Using ReadableStream
        //----------------------------------------------------------------
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                // setFilesData
                [].slice.call(curFiles).forEach(function (file) {
                  var size = file.size;
                  var mimeType = file.type;
                  var name = file.name;
                  var ext = getExt(name);

                  // get file content
                  var reader = new FileReader();
                  reader.addEventListener('load', function (event) {
                    var b64string = event.currentTarget.result;
                    var arrayBufferData = (0,funda_utils_dist_cjs_buffer__WEBPACK_IMPORTED_MODULE_2__.base64ToArrayBuffer)(b64string);
                    var uint8ArrayData = (0,funda_utils_dist_cjs_buffer__WEBPACK_IMPORTED_MODULE_2__.arrayBufferToUint8Array)(arrayBufferData);

                    // console.log('b64string: ', b64string);
                    // console.log('arrayBufferData: ', arrayBufferData);
                    // console.log('uint8ArrayData: ', uint8ArrayData);

                    //send 
                    var jsonData = {
                      fileData: {
                        size: size,
                        mimeType: mimeType,
                        name: name,
                        ext: ext
                      },
                      b64string: b64string,
                      arrayBufferData: arrayBufferData,
                      uint8ArrayData: uint8ArrayData
                    };
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(fileInputRef.current, submitRef.current, jsonData, incomingData);

                    // update default value
                    resetDefaultVal();
                  });
                  reader.readAsDataURL(file);
                });
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    }
  }
  function handleChange(event) {
    var val = event.target.value;
    setForceUpdate(!forceUpdate);

    // update default value
    setDefaultValue(null);

    //----
    //remove focus style
    if (val === '') {
      var _rootRef$current;
      (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.classList.remove('focus');
    }

    //
    onChange === null || onChange === void 0 ? void 0 : onChange(fileInputRef.current, submitRef.current, fileInputRef.current.files);

    // Enable automatic upload
    if (autoSubmit) {
      handleSubmit(null);
    }
  }
  function fileNames() {
    var current = fileInputRef.current;
    if (current && current.files.length > 0) {
      var messages = [];
      var _iterator = _createForOfIteratorHelper(current.files),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          messages = messages.concat(file.name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return messages.join(',');
    }
    return null;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // update incoming data
    //------------------------------------------
    setIncomingData(data);

    // update default value
    //--------------
    setDefaultValue(value);
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(wrapperClassName, 'mb-3 position-relative upload-control'),
    ref: rootRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)('upload-control-group d-flex', typeof inline === 'undefined' || inline === false ? 'flex-column' : 'flex-row')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload-control-group__control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    ref: labelRef,
    onMouseEnter: handleLabelEnter,
    onMouseLeave: handleLabelLeave,
    style: {
      cursor: 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      opacity: disabled ? 0.5 : 1
    },
    htmlFor: idRes,
    "data-label": "1",
    "data-input-id": idRes,
    className: "form-label d-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(labelClassName, 'btn btn-outline-secondary'),
    type: "button",
    style: {
      pointerEvents: 'none'
    }
  }, label ? label : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "25px",
    height: "25px",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z",
    fill: "#000000",
    fillRule: "evenodd"
  })), " ", required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, requiredLabel || requiredLabel === '' ? requiredLabel : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-danger"
  }, "*")) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload-control-group__control-inner",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    ref: function ref(node) {
      fileInputRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef) {
        externalRef.current = node;
      }
    },
    tabIndex: tabIndex || 0,
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(controlClassName, 'form-control'), controlExClassName),
    id: idRes,
    type: "file",
    accept: accept
    // The onChange should trigger updates whenever
    // the value changes?
    // Try to select a file, then try selecting another one.
    ,
    multiple: multiple || false,
    name: name,
    onKeyUp: handleFileInput,
    onChange: handleChange,
    disabled: disabled || null,
    required: required || null
  }, attributes))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)('upload-control-group__btn', {
      'd-none': autoSubmit
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: submitRef,
    className: (0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.combinedCls)((0,funda_utils_dist_cjs_cls__WEBPACK_IMPORTED_MODULE_3__.clsWrite)(submitClassName, 'btn btn-primary mt-2'), {
      'disabled': disabled
    }),
    type: "button",
    onClick: handleSubmit
  }, submitLabel ? submitLabel : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pload-control-result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, typeof defaultValue !== 'undefined' ? fileNames() : null, defaultValue))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});