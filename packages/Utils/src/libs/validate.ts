/**
 * Check if a string is a valid number
 * @param str - The string to check
 * @returns boolean indicating if the string is a valid number
 */
function isValidNumeric(str: unknown): boolean {
    if (typeof str !== "string") return false; // we only process strings!
    if (
        !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string
        !isNaN(parseFloat(str)) // ensure strings of whitespace fail
    ) {
        return true;
    }
    return false;
}

/**
 * Determine whether it is in JSON format
 * @param str - The value to check
 * @returns boolean indicating if the value is valid JSON
 */
function isJSON(str: unknown): boolean {
    if (typeof str === 'string' && str.length > 0) {
        if (str.replace(/\"\"/g, '').replace(/\,/g, '') === '[{}]') {
            return false;
        }

        if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
        }
        return false;
    }

    if (
        typeof str === 'object' &&
        Object.prototype.toString.call(str) === '[object Object]' &&
        !(str as any).length
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
function isEmpty(input: string | string[]): boolean {
    if (Array.isArray(input)) {
        return input.some((str) => !str.replace(/\s/g, '').length === true);
    }
    return !input.replace(/\s/g, '').length === true;
}

/**
 * Check if input is a valid number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid number
 */
function isNumber(input: string): boolean {
    const reg = /^[\d|\.|,]+$/;
    return reg.test(input);
}

/**
 * Check if input is a valid integer
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid integer
 */
function isInt(input: string): boolean {
    if (input === "") {
        return false;
    }
    const reg = /\D+/;
    return !reg.test(input);
}

/**
 * Check if input is a valid email address
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid email
 */
function isEmail(input: string): boolean {
    const reg = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
    return reg.test(input);
}

/**
 * Check if input is a valid telephone number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid telephone number
 */
function isTel(input: string): boolean {
    const reg = /^[0-9- ]{7,20}$/;
    return reg.test(input);
}

/**
 * Check if input is a valid mobile number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid mobile number
 */
function isMobile(input: string): boolean {
    const reg = /^1[0-9]{10}$/;
    return reg.test(input);
}

export {
    isValidNumeric,
    isJSON,
    isEmpty,
    isNumber,
    isInt,
    isEmail,
    isTel,
    isMobile
};