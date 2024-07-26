

/**
 * Determine whether an extractor is included
 * @param {string} str    =>  input string. such as 'a[1], b[2]', '{a[1]}'
 * @returns {boolean} 
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
 * @param {string} str    =>  input string. such as '[1,2] [f][c]'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
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
 * @param {string} str    =>  input string. such as '{1,2} {f}{c}'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
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
 * @param {string} str    =>  input string. such as '(1,2) (f)(c)'
 * @param {boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
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


export {
    extractorExist,
    extractContentsOfBrackets,
    extractContentsOfBraces,
    extractContentsOfParentheses
}