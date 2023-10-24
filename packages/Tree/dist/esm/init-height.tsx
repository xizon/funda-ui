const initUlHeight = (inputUl: HTMLAllCollection) => {
    [].slice.call(inputUl).forEach(function(el: HTMLUListElement){
        if (typeof el.dataset.maxheight === 'undefined') {
            const _li = [].slice.call(el.querySelectorAll('li'));
            let _allHeight: number = 0;
            _li.forEach(function(li: HTMLLIElement){
                _allHeight += li.scrollHeight;   
            });
            el.dataset.maxheight = `${_allHeight}px`;
            el.style.maxHeight = `${_allHeight}px`;
        } else {
            el.style.maxHeight = el.dataset.maxheight;
        }

    });
};

const initAsyncItems = async (inputUl: HTMLAllCollection) => {
    [].slice.call(inputUl).forEach(function(el: HTMLUListElement){
        el.removeAttribute('data-maxheight');
    });
};

export {
    initUlHeight,
    initAsyncItems
};