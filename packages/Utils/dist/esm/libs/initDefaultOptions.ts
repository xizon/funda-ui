import { isJSON, isValidNumeric } from "./validate";

/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
 */
function setDefaultOptions(props: any, options: any): any {
    if (typeof options === typeof undefined || options === null || options === false) options = {};
    //Set a default configuration
    if (isJSON(props)) {

        const defaultConfigValues = Object.values(props);
        Object.keys(props).forEach(function (prop: string, index: number) {

            // Well-formed string type
            Object.keys(options).forEach(function (prop2: string, index2: number) {
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

export {
    setDefaultOptions,
    isJSON,
    isValidNumeric
};