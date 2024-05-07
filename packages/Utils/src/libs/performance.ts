
/*
* Debounce
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/  
function debounce(fn: Function, limit: number = 300): Function {
    let timer: any;
    return function(this: any) {
        clearTimeout(timer);
        timer = setTimeout(function(this: any) {
            fn.apply(this, arguments);
        }, limit);
    }
}





/*
* Throttle
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/  
function throttle(fn: Function, limit: number = 300): Function {
	let waiting: boolean = false;                     
	return function (this: any) {                     
		if (!waiting) {                 
			fn.apply(this, arguments);  
			waiting = true;                  
			setTimeout(function () {          
				waiting = false;           
			}, limit);
		}
	}
}


export {
    debounce,
    throttle
}