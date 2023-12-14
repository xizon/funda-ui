
/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 */
function animateStyles(curElement, config) {
    if (typeof curElement === typeof undefined) return;

    // Set a default configuration
    config = setDefaultOptions({
        "startHeight": 0,
        "endHeight": 0,
        "speed": 200, //ms
        "fps": 1000 / 60 // 60FPS
    }, config);

    //
    const _endHeight = config.endHeight,
        _speed = config.speed,
        _fps = config.fps;

    let _startHeight = config.startHeight;
    let timer = null;
    const startTime = Date.now();
    const deltaHeight = curElement.clientHeight < _endHeight ? (_endHeight / _speed) * _fps : (_startHeight / _speed) * _fps;

    timer = setInterval(() => {
        const elapsed = Date.now() - startTime; //Work out the elapsed time

        //If the elapsed time is less than the speed (ms)
        if (elapsed < _speed) {
            if (curElement.clientHeight < _endHeight) {
                _startHeight = _startHeight + deltaHeight;
            } else {
                _startHeight = _startHeight - deltaHeight;
            }
            curElement.style.height = _startHeight + 'px';
        } else {
            curElement.style.height = _endHeight + 'px';
            clearInterval(timer);
        }
    }, _fps);

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

/**
 *  Set a default JSON format configuration
 * @private
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
};


module.exports = animateStyles;

