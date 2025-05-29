const initUlHeight = (inputUl: HTMLAllCollection) => {
    [].slice.call(inputUl).forEach(function(el: HTMLUListElement){
        // Check whether the parent node has "active"
        /*
        Fixed:
        
        1. After asynchronously loading child nodes (after "initDefaultValue()"), manually collapse the node
        2. When clicking other nodes, the child node ul height of the previously collapsed node is not correctly reset to 0
        3. It causes the visual display to be expanded, but the arrow is actually collapsed
        */
        const parentLi = el.parentElement;
        if (!parentLi || !parentLi.classList.contains('active')) {
            // If the parent node does not have an active class, keep maxHeight to 0
            return;
        }

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