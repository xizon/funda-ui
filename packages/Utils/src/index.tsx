
import guid from './libs/guid';
import animateStyles from './libs/anim';

import { 
    setDefaultOptions,
    isJSON,
    isValidNumeric
} from './libs/init-default-options';

import { 
    debounce, 
    throttle 
} from './libs/performance';

import {
    easeLinear, 
    easeInQuad, 
    easeOutQuad, 
    easeInOutQuad, 
    easeInSine, 
    easeOutSine, 
    easeInOutSine, 
    easeInExpo, 
    easeOutExpo, 
    easeInOutExpo, 
    easeInCirc, 
    easeOutCirc, 
    easeInOutCirc, 
    easeInCubic, 
    easeOutCubic, 
    easeInOutCubic, 
    easeInQuart, 
    easeOutQuart, 
    easeInOutQuart, 
    easeInQuint, 
    easeOutQuint, 
    easeInOutQuint, 
    easeInElastic, 
    easeOutElastic, 
    easeInOutElastic, 
    easeInBack, 
    easeOutBack, 
    easeInOutBack
} from './libs/easing';

import { 
    getNextSiblings,
    getPreviousSiblings,
    getAllSiblings,
    getParents,
    getChildren,
    isRootElement,
    getDocument,
    isNode,
    isElement,
    isHTMLElement,
    isShadowRoot,
    nodeContains
} from './libs/dom';

import { 
    getTransitionDuration, 
    getAbsoluteCoordinates, 
    getOffset, 
    getPosition,
    getAbsolutePositionOfStage
} from './libs/get-element-property';


import {
    getAllDepth,
    convertTree,
    flatTree,
    addTreeDepth,
    addTreeIndent
} from './libs/tree';


import {
    base64ToArrayBuffer,
    arrayBufferToUint8Array,
    uint8arrayToArr,
    arrayToUint8array,
    uint8arrayToBase64Str,
    decodeBase64Str,
    toBinary,
    arrayToBlob,
    blobToUint8array,
    arrayToStream,
    readStream    
} from './libs/buffer';



import {
    convertStringByCommaToValByBrackets,
    convertArrToValByBrackets,
    convertStringByCommaToValByBraces,
    convertArrToValByBraces
} from './libs/convert';


import {
    extractorExist,
    extractContentsOfBrackets,
    extractContentsOfBraces,
    extractContentsOfParentheses
} from './libs/extract';


import {
    isTimeString,
    getNow,
    padZero,
    dateFormat,

    //
    isValidDate,
    isNumeric,
    isValidHours,
    isValidMinutesAndSeconds,
    isValidYear,
    isValidMonth,
    isValidDay,

    //
    getLastDayInMonth,
    getFirstAndLastMonthDay,
    getCalendarDate,
    getFullTime,

    // current
    getTodayDate,
    getCurrentMonth,
    getCurrentYear,
    getCurrentDay,
    getCurrentDate,

    // next & previous
    getTomorrowDate,
    getYesterdayDate,
    getNextMonthDate,
    getPrevMonthDate,
    getNextYearDate,
    getPrevYearDate,
    getSpecifiedDate,


    // convert
    setDateHours,
    setDateMinutes,
    setDateDays,
    timestampToDate
} from './libs/date';

import {
    deepClone,
    flatData
} from './libs/object';

import {
    isInViewport
} from './libs/viewport';

import {
    getTextWidth
} from './libs/inputs-calculation';



// hooks
import useComId from './hooks/useComId';
import useThrottle from './hooks/useThrottle';
import useDebounce from './hooks/useDebounce';
import useAutosizeTextArea from './hooks/useAutosizeTextArea';
import useInterval from './hooks/useInterval';
import useClickOutside from './hooks/useClickOutside';
import useKeyPress from './hooks/useKeyPress';
import useWindowScroll from './hooks/useWindowScroll';
import useDraggable from './hooks/useDraggable';



// plugins
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from './plugins/BSL/bodyScrollLock';


export { 
   guid,
   animateStyles,
   setDefaultOptions,
   isJSON,
   isValidNumeric,
   debounce, 
   throttle,
   getNextSiblings, 
   getPreviousSiblings, 
   getAllSiblings, 
   getParents, 
   getChildren,
   isRootElement,
   getDocument,
   isNode,
   isElement,
   isHTMLElement,
   isShadowRoot,
   nodeContains,
   getTransitionDuration, 
   getAbsoluteCoordinates, 
   getOffset, 
   getPosition,
   getAbsolutePositionOfStage,
   getAllDepth,
   convertTree,
   flatTree,
   addTreeDepth,
   addTreeIndent,
   base64ToArrayBuffer,
   arrayBufferToUint8Array,
   uint8arrayToArr,
   arrayToUint8array,
   uint8arrayToBase64Str,
   decodeBase64Str,
   toBinary,
   arrayToBlob,
   blobToUint8array,
   arrayToStream,
   readStream,
   convertStringByCommaToValByBrackets,
   convertArrToValByBrackets,
   convertStringByCommaToValByBraces,
   convertArrToValByBraces,
   extractorExist,
   extractContentsOfBrackets,
   extractContentsOfBraces,
   extractContentsOfParentheses,
   easeLinear, 
   easeInQuad, 
   easeOutQuad, 
   easeInOutQuad, 
   easeInSine, 
   easeOutSine, 
   easeInOutSine, 
   easeInExpo, 
   easeOutExpo, 
   easeInOutExpo, 
   easeInCirc, 
   easeOutCirc, 
   easeInOutCirc, 
   easeInCubic, 
   easeOutCubic, 
   easeInOutCubic, 
   easeInQuart, 
   easeOutQuart, 
   easeInOutQuart, 
   easeInQuint, 
   easeOutQuint, 
   easeInOutQuint, 
   easeInElastic, 
   easeOutElastic, 
   easeInOutElastic, 
   easeInBack, 
   easeOutBack, 
   easeInOutBack,
   deepClone,
   flatData,
   isTimeString,
   getNow,
   padZero,
   dateFormat,
   isValidDate,
   isNumeric,
   isValidHours,
   isValidMinutesAndSeconds,
   isValidYear,
   isValidMonth,
   isValidDay,
   getLastDayInMonth,
   getFirstAndLastMonthDay,
   getCalendarDate,
   getFullTime,
   getTodayDate,
   getCurrentMonth,
   getCurrentYear,
   getCurrentDay,
   getCurrentDate,
   getTomorrowDate,
   getYesterdayDate,
   getNextMonthDate,
   getPrevMonthDate,
   getNextYearDate,
   getPrevYearDate,
   getSpecifiedDate,
   setDateHours,
   setDateMinutes,
   setDateDays,
   timestampToDate,
   isInViewport,
   getTextWidth,
    
    // hooks
    useComId,
    useThrottle,
    useDebounce,
    useAutosizeTextArea,
    useInterval,
    useClickOutside,
    useKeyPress,
    useWindowScroll,
    useDraggable,

    //
    disableBodyScroll, 
    enableBodyScroll, 
    clearAllBodyScrollLocks
};