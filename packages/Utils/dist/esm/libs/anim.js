
import {
    easeLinear,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad
} from './easing';
    
import {
    setDefaultOptions
} from './init-default-options';


/**
 * Element Animate
 * @public
 * 
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 * @param  {?string} easeType            - Types of easing animation.
* @param  {?Function} callback           - Callback after animation ends
 */
function animateStyles(curElement, config, easeType = 'linear', callback = () => {}) {
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
            
            if (typeof callback === 'function') callback();
            
            //
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);

}



export default animateStyles;

