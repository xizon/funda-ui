/**
 * base64 to ArrayBuffer
 * @param {String} data
 * @returns {ArrayBuffer}
 */
declare function base64ToArrayBuffer(data: string): ArrayBufferLike;
/**
 * ArrayBuffer to Uint8Array
 * @param {ArrayBuffer} data
 * @returns {Uint8Array}
 */
declare function arrayBufferToUint8Array(data: ArrayBuffer): Uint8Array;
/**
 * uint8array to array
 * @param {Uint8Array} data
 * @returns {Array}
 */
declare function uint8arrayToArr(data: Uint8Array): number[];
/**
 * array to uint8array
 * @param {Array} data
 * @returns {Uint8Array}
 */
declare function arrayToUint8array(data: number[]): Uint8Array;
/**
 * uint8array to base64 string
 * @param {Uint8Array|Array} data
 * @returns {String}
 */
declare function uint8arrayToBase64Str(data: Uint8Array | number[]): string;
/**
 * decode base64 string
 * @param {String} data
 * @returns {String}
 */
declare function decodeBase64Str(data: string): string;
/**
 * integer to binary
 * @param {Number} data
 * @returns {String}
 */
declare function toBinary(data: number): string;
/**
 * array to blob
 * @param {Uint8Array} uint8ArrayData
 * @returns {Blob}
 */
declare function arrayToBlob(uint8ArrayData: Uint8Array): Blob;
/**
 * blob to uint8array
 * @param {Blob} data
 * @returns {Uint8Array}
 */
declare function blobToUint8array(data: Blob): Promise<ArrayBuffer>;
/**
 * array to stream
 * @param {Array<Uint8Array>} data
 * @returns {ReadableStream }
 */
declare function arrayToStream(data: Array<number>): ReadableStream<Uint8Array>;
/**
 * read stream
 * @param {ReadableStream } data
 * @returns {Promise}
 */
declare function readStream(data: ReadableStream): Promise<string>;
export { base64ToArrayBuffer, arrayBufferToUint8Array, uint8arrayToArr, arrayToUint8array, uint8arrayToBase64Str, decodeBase64Str, toBinary, arrayToBlob, blobToUint8array, arrayToStream, readStream };
