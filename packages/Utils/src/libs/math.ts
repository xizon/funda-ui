

/**
 * Evaluating a string as a mathematical expression
 * @param {String} s      - An input string
 * @returns {Number}   - New calculation result.
 */
function evaluate(s: string) {
    const chars: string[] = s.replace(/\s/g, '').split("");
    let n: string[] = [],
        op: string[] = [], 
        index: number = 0, 
        oplast: boolean = true;

    n[index] = "";

    // Parse the expression
    for (let c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    let resStr: number = parseFloat(n[0]);
    for (let o = 0; o < op.length; o++) {
        const num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                resStr = resStr + num;
                break;
            case "-":
                resStr = resStr - num;
                break;
            case "*":
                resStr = resStr * num;
                break;
            case "/":
                resStr = resStr / num;
                break;
        }
    }

    return resStr;
}


/**
 * Addition
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcAdd(num1: number, num2: number) {
    let baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * Subtraction
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcSub(num1: number, num2: number) {
    let baseNum, baseNum1, baseNum2;
    let precision;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

/**
 * Multiplication
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcMul(num1: number, num2: number) {
    let baseNum = 0;
    try {
        baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
};
/**
 * Division
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} 
 */
function calcDiv(num1: number, num2: number) {
    let baseNum1 = 0, baseNum2 = 0;
    let baseNum3, baseNum4;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace(".", ""));
    baseNum4 = Number(num2.toString().replace(".", ""));
    return (baseNum3 / baseNum4) * (Math.pow(10, baseNum2 - baseNum1));
}


/**
 * Determine if it's a number
 * @param {*} n
 * @returns {Boolean}
 */
function isNumeric(s: any) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}


/**
 * Determine if it's a decimal
 * @param {Number} num
 * @returns {Boolean}
 */
function isDecimal(num: number) {
    return num!== Math.floor(num);
}


/**
 * Truncate Decimals
 * @param {Number} num 
 * @param {Number} decimalPlaces 
 * @returns {Number}
 */
function truncateDecimals(num: number, decimalPlaces: number) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(num * factor) / factor;
}


/**
 * Zero Pad
 * @param {Number|String} n
 * @param {?Number} decimalPlaces 
 * @returns {String}
 */
function numZeroPad(n: number | string, decimalPlaces: number = 0) {
    return parseFloat(String(n)).toFixed(decimalPlaces);
}



/**
 * Check whether the number of decimal places exceeds the specified value
 * @param {Number|String} s
 * @param {Number} decimalPlaces 
 * @returns {Boolean}
 */
function exceedDecimalPlaces(s: string | number, decimalPlaces: number) {
    const parts = String(s).split(".");
    return parts[1] && parts[1].length > decimalPlaces;
}


/**
 * Format number
 * @param {*} inputValue 
 * @param {?Number} decimalPlaces 
 * @param {Number|undefined} inputMin 
 * @param {Number|undefined} inputMax 
 * @returns {String}
 */
function formatNumber(inputValue: any, decimalPlaces: number = 0, inputMin: number | undefined = undefined, inputMax: number | undefined = undefined) {
       
    // STEP 1
    // =================================================================
    // Determine whether the value is legitimate
    if (inputValue === '' || !isNumeric(inputValue)) {
        return '';
    }
   
    // STEP 2
    // =================================================================
    // check min or max value
    if (
        typeof inputMin !== 'undefined' && 
        typeof inputMax !== 'undefined' && 
        isNumeric(inputMin) && 
        isNumeric(inputMax)
    ) {
        inputValue = Math.min(Number(inputValue), inputMax);
        inputValue = Math.max(Number(inputValue), inputMin);
    }

   
    // STEP 3
    // =================================================================
    // Remove characters that are not numbers and decimal points
    let formattedValue = String(inputValue).replace(/[^0-9.\-]/g, "");

           
    // STEP 4
    // =================================================================
    // Prevent multiple decimal points
    const parts = formattedValue.split(".");
    if (parts.length > 2) {
        formattedValue = `${parts[0]}.${parts[1]}`;
    }

           
    // STEP 5
    // =================================================================
    // Limit the number of decimal places
    if (parts[1] && parts[1].length > decimalPlaces) {
        formattedValue = parseFloat(formattedValue).toFixed(decimalPlaces);
    }


    // STEP 6
    // =================================================================
    // Remove invalid zeros
    formattedValue = Number(formattedValue).toPrecision();
    

    return formattedValue;
}


export {
    evaluate,
    calcAdd,
    calcSub,
    calcMul,
    calcDiv,
    isNumeric,
    isDecimal,
    truncateDecimals,
    numZeroPad,
    exceedDecimalPlaces,
    formatNumber
}