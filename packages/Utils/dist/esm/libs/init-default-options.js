

/**
 *  Set a default JSON format configuration
 * @public
 *
 * @param  {JSON} props         - Set some default keys and values.
 * @param  {JSON} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}               - Merge the new and old values.
 */
function setDefaultOptions(props, options) {
    if (typeof options === typeof undefined || options === null || options === false) options = {};
    //Set a default configuration
    if (isJSON(props)) {

        const defaultConfigValues = Object.values(props);
        Object.keys(props).forEach(function (prop, index) {

            // Well-formed string type
            Object.keys(options).forEach(function (prop2, index2) {
                if (prop2 === prop) {
                    let _v = options[prop2];
                    if (_v == 'true') _v = true;
                    if (_v == 'false') _v = false;
                    if (isValidNumeric(_v)) _v = parseFloat(_v);
                    if (isJSON(_v)) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);

                    options[prop2] = _v;
                }

            });

            //
            if (typeof options[prop] === typeof undefined || options[prop] === null) options[prop] = defaultConfigValues[index];
        });
    }
    return options;
}


/**
* Check if a string is a valid number
* @private
*/
function isValidNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    if ( 
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)
        !isNaN(parseFloat(str)) // ensure strings of whitespace fail
    ) {
        return true;
    } else {
        return false;
    }
}


/**
 * Determine whether it is in JSON format
 * @private
 */
function isJSON(str) {

    if (typeof (str) === 'string' && str.length > 0) {

        if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
            return false;
        } else {

            if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
                replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                return true;

            } else {
                return false;
            }

        }

    } else {

        if (
            typeof (str) === 'object' &&
            Object.prototype.toString.call(str) === '[object Object]' &&
            !str.length
        ) {
            return true;
        } else {
            return false;
        }

    }

}
export {
    setDefaultOptions,
    isJSON,
    isValidNumeric
};