
const {
    easeLinear,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad
}  = require('./easing');


/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 * @param  {?string} easeType              - Types of easing animation.
 */
function animateStyles(curElement, config, easeType = 'linear') {
    if (typeof curElement === typeof undefined) return;

    // Set a default configuration
    config = setDefaultOptions({
        "startHeight": 0,    // node.scrollHeight
        "endHeight": 0,
        "speed": 200, //ms
    }, config);

    //
    const _endHeight = config.endHeight,
          _speed = config.speed

    let _startHeight = config.startHeight;
 
    const duration = _speed;
    const start = new Date().getTime();
    const from = 0;
    const to = 100;
    let requestId;
    const loop = function () {

        //easing
        const time = new Date().getTime() - start; //Work out the elapsed time
        let val;

        switch (easeType) {
            case "linear":
                val = easeLinear(time, from, to - from, duration);
                break;
            case "ease-in":
                val = easeInQuad(time, from, to - from, duration);
                break;
            case "ease-out":
                val = easeOutQuad(time, from, to - from, duration);
                break;
            case "ease-in-out":
                val = easeInOutQuad(time, from, to - from, duration);
                break;

            default:
                val = easeLinear(time, from, to - from, duration);
        }

        // Elapsed time in miliseconds
        const percent = val / 100;

        
        // change height
        if (curElement.clientHeight < _endHeight) {
            curElement.style.height = _endHeight * percent + 'px';
        } else {
            if (_startHeight > 0) curElement.style.height = _startHeight - (_startHeight * percent) + 'px';
        }

        
        //If the elapsed time is less than the speed (ms)
        if (time < duration) {
            //
            requestId = window.requestAnimationFrame(loop);
        } else {
            // change height
            curElement.style.height = _endHeight + 'px';
            
            //
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);

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

