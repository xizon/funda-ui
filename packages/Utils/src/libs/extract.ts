/**
 * Determine whether an extractor is included
 * @param {String} str    =>  input string. such as 'a[1], b[2]', '{a[1]}'
 * @returns {Boolean} 
 */
function extractorExist(str: string | undefined | null): boolean {
    if (typeof str === 'undefined' || str === null || str === '') {
        return false;
    }

    let res: boolean = false;
    if ( str?.match(/(\[.*?\])/gi) ) {
        res = true;
    }
    return res;
}

/**
 * Extract the contents of square brackets
 * @param {String} str    =>  input string. such as '[1,2] [f][c]'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBrackets(str: string, commaSeparated: boolean = false): Array<string> | string {
    if (typeof str === 'undefined' || str === null || str === '') {
        return !commaSeparated ? [] : '';
    }

    const res = str.match(/[^\[]+(?=(\[ \])|\])/g);
    if (commaSeparated) {
        return res === null ? '' : res.join(',').replace(/\,+$/, '');
    } else {
        return res === null ? '' : res;
    }
    
}

/**
 * Extract the contents of curly braces
 * @param {String} str    =>  input string. such as '{1,2} {f}{c}'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfBraces(str: string, commaSeparated: boolean = false): Array<string> | string {
    if (typeof str === 'undefined' || str === null || str === '') {
        return !commaSeparated ? [] : '';
    }

    const res = str.match(/[^\{]+(?=(\{ \})|\})/g);
    if (commaSeparated) {
        return res === null ? '' : res.join(',').replace(/\,+$/, '');
    } else {
        return res === null ? '' : res;
    }
    
}

/**
 * Extract the contents of parentheses
 * @param {String} str    =>  input string. such as '(1,2) (f)(c)'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
function extractContentsOfParentheses(str: string, commaSeparated: boolean = false): Array<string> | string {
    if (typeof str === 'undefined' || str === null || str === '') {
        return !commaSeparated ? [] : '';
    }

    const res = str.match(/[^\(]+(?=(\( \))|\))/g);
    if (commaSeparated) {
        return res === null ? '' : res.join(',').replace(/\,+$/, '');
    } else {
        return res === null ? '' : res;
    }
    
}


/**
 * Parses a braces-separated string of `{label[value]}` pairs into an array of objects.
 *
 * Example:
 *   Input: "{Poor[c]}{Sub-option 4[c-2]}{Empty[]}"
 *   Input: "{{Poor[c]}{Sub-option 4[c-2]}{Empty[]}[]}"
 * 
 *   Output: [
 *     { label: "Poor", value: "c" },
 *     { label: "Sub-option 4", value: "c-2" },
 *     { label: "Empty", value: "" }
 *   ]
 *
 * @param {string} str - The input string containing one or more `{label[value]}` segments.
 * @returns {Array<{label: string, value: string}>} - An array of extracted label-value objects.
 */
function extractContentsOfMixedCharactersWithBraces(str: string): {
    label: string;
    value: string | number;
}[] {
    // Fix the extra '{' at the beginning
    const cleaned = str.replace(/^{{/, '{');

    // Remove empty {} or {[]} tail
    const trimmed = cleaned.replace(/\{\[\]\}$/, '');

    // The match is like {label[value]}
    const pattern = /\{(.*?)\[(.*?)\]\}/g;
    const matches = Array.from(trimmed.matchAll(pattern));

    return matches.map(match => ({
        label: match[1],
        value: match[2]
    }));
}




/**
 * Parses a comma-separated string of `label[value]` pairs into an array of objects.
 *
 * Example:
 *   Input: "Poor[c],Sub-option 4[c-2],Empty[]"
 *   Output: [
 *     { label: "Poor", value: "c" },
 *     { label: "Sub-option 4", value: "c-2" },
 *     { label: "Empty", value: "" }
 *   ]
 *
 * @param {string} str - A string containing label-value pairs in the format `label[value]`, separated by commas.
 * @returns {Array<{ label: string, value: string }>} - An array of parsed objects.
 */
function extractContentsOfMixedCharactersWithComma(str: string): {
    label: string;
    value: string | number;
}[] {
    return str
        .split(",")
        .map(item => item.trim())
        .map(item => {
            const match = item.match(/^(.*?)\[(.*?)\]$/);
            if (match) {
                return {
                    label: match[1],
                    value: match[2]
                };
            }
            return null;
        })
        .filter(Boolean) as { label: string; value: string | number }[];
}


export {
    extractorExist,
    extractContentsOfBrackets,
    extractContentsOfBraces,
    extractContentsOfParentheses,
    extractContentsOfMixedCharactersWithBraces,
    extractContentsOfMixedCharactersWithComma
}