const initUlHeight = (inputUl: HTMLAllCollection) => {
    [].slice.call(inputUl).forEach(function(el: HTMLUListElement){
        if (typeof el.dataset.maxwidth === 'undefined') {
            const _li = [].slice.call(el.querySelectorAll('li'));
            let _allHeight: number = 0;
            _li.forEach(function(li: HTMLLIElement){
                _allHeight += li.scrollHeight;   
            });
            el.dataset.maxwidth = `${_allHeight}px`;
            el.style.maxHeight = `${_allHeight}px`;
        } else {
            el.style.maxHeight = el.dataset.maxwidth;
        }

    });
};

const initAsyncItems = async (inputUl: HTMLAllCollection) => {
    [].slice.call(inputUl).forEach(function(el: HTMLUListElement){
        el.removeAttribute('data-maxwidth');
    });
};

export {
    initUlHeight,
    initAsyncItems
};