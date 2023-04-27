import React, { useEffect, useRef } from 'react';

/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
type MenuListProps = {
    arrow?: React.ReactNode;
    childClassName?: string;
	menuListData: any[any];
    routerPath?: string;
    onChange?: (e: any, isRouter: boolean) => void;
};

function matches(el: any, filter: string) {
    if (el && el.nodeType === 1) {
        if (filter) {
            return el.matches(filter);
        }
        return true;
    }
    return false;
}

// the next siblings
function getNextSiblings(el: any, filter = false || '') {
    const sibs: any[] = [];
    while (el = el.nextSibling) {
        if (matches(el, filter)) {
            sibs.push(el as never);
        }
    }
    return sibs;
}

export default function MenuList(props: MenuListProps) {

    const {
        arrow,
        childClassName,
        menuListData,
        routerPath,
        onChange
    } = props;

    const vmenuRef = useRef<any>(null);
    const currentPath = routerPath ? routerPath : '';

    
    const activeClass = (el: any, mode: string) => {
        if ( mode === 'add' ) {
            el.classList.add('active', 'active');
        } else {
            el.classList.remove('active', 'active');
        }
        
    };

    const closeChild = (hyperlink: HTMLElement, ul: HTMLAllCollection) => {
        if ( ul.length === 0 ) return;

        activeClass(hyperlink, 'remove');
        hyperlink.setAttribute('aria-expanded', 'false');
        activeClass(hyperlink.parentNode, 'remove');

        //to close
        [].slice.call(ul).forEach(function(element: any){
            element.style.maxHeight = 0;
        });
    };

    const openChild = (hyperlink: HTMLElement, ul: HTMLAllCollection) => {
        if ( ul.length === 0 ) return;

        activeClass(hyperlink, 'add');
        hyperlink.setAttribute('aria-expanded', 'true');
        activeClass(hyperlink.parentNode, 'add');

        // init <ul> height
        [].slice.call(ul).forEach(function(el: any){
            const calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;
            el.style.maxHeight = `${calcH}px`;
        });

    };



    function handleClick(e: any) {
        e.preventDefault();
        const hyperlink = e.currentTarget;
        const url = hyperlink.getAttribute('href');
        const subElement = getNextSiblings(hyperlink, 'ul');


        // route switching
        //=====================
        const isRouter = typeof hyperlink.parentNode.dataset.router !== 'undefined' ? true : false;
        onChange?.(e.currentTarget, isRouter);

        // hide child if expandedLink doesn't exist, on the contrary
        //=====================
        if ( hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null ) {


            //Hide all other siblings of the selected <ul>
            [].slice.call(vmenuRef.current.children).forEach(function(li: any){

                activeClass(li, 'remove');
    
                const _li = li.firstChild;
                activeClass(_li, 'remove');
                _li.setAttribute('aria-expanded', false);
    
                [].slice.call(getNextSiblings(_li, 'ul')).forEach(function(element: any){
                    element.style.maxHeight = 0;
                });
            });

            //open current
            openChild(hyperlink, subElement as never);

        } else {

            //close current
            closeChild(hyperlink, subElement as never);
        }



        // active current item
        //=====================
        if ( (currentPath === url || currentPath.indexOf(url.replace(/\/[\d]+\.html|\.html/ig,'')) >= 0 && url !== '/') ) {
            activeClass(e.target, 'add');
            activeClass(e.target.parentElement, 'add');
        }
        

    }
    
    function arrowGenerator() {
        return arrow ? arrow : <svg viewBox="0 0 22 22" width="8"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>;
    }


    useEffect(() => {

        const allItems = vmenuRef.current ? [].slice.call(document.querySelectorAll(`.${childClassName} a`)).map( (item: any) => {
            return {
                href: item.getAttribute('href'),
                el: item,
                actived: item.parentNode.classList?.contains('active') ? true : false,
                expandedLink: document.body.contains(item.parentNode.parentNode.previousSibling) ? item.parentNode.parentNode.previousSibling : false
            }
        } ) : [];

   
        // Activate current item
        //=====================
        allItems.forEach( (hyperlink: any) => {
            if ( hyperlink.actived && hyperlink.expandedLink ) {
                const expandedLink: any = hyperlink.expandedLink;  // <a>
                activeClass(expandedLink.parentNode, 'add');
                expandedLink.setAttribute('aria-expanded', true);

                // init <ul> height
                const child = expandedLink.parentNode.querySelector('ul');
                const calcH = child.scrollHeight + 1;
                child.style.maxHeight = `${calcH}px`;
            }

        });

    }, []);


    if ( menuListData ) {
        
        return (
            <>
            <ul className={childClassName}  ref={vmenuRef}>
                
                {menuListData.map((item: any, i: number) => {

                    if ( item.heading ) return (
                        <li className="nav-item" key={i}>
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true"><i className={item.icon}></i> {item.title}</a>
                    </li>
                    );
                    if (item.link.indexOf('#') >= 0 || item.link.indexOf('http') >= 0 ) {
                        return (
                            <li data-index={i} key={i} className={ (currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig,'')) >= 0 && item.link !== '/') ?  `nav-item active` : 'nav-item'}>
                                <a title={item.title} className={ (currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig,'')) >= 0 && item.link !== '/') ?  `nav-link active` : 'nav-link'} href={item.link === '#' ? `${item.link}-${i}` : item.link} aria-expanded="false" onClick={handleClick} data-slug={item.slug}>
                                    {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{__html: `${item.icon}`}} /> : null}{item.title}
                                    {item.children ? <span className="arrow">{arrowGenerator()}</span> : ''}
                                </a>
                                {item.children && <MenuList menuListData={item.children}  />}
                            </li>
                            );
                    } else {
                        return (
                            <li  data-index={i} data-router="true" key={i} className={ (currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig,'')) >= 0 && item.link !== '/') ?  `nav-item active` : 'nav-item'}>
                                <a title={item.title} className={ (currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig,'')) >= 0 && item.link !== '/') ?  `nav-link active` : 'nav-link'} href={item.link === '#' ? `${item.link}-${i}` : item.link} onClick={handleClick} data-slug={item.slug}>
                                   {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{__html: `${item.icon}`}} /> : null}{item.title}
                                    {item.children ? <span className="arrow">{arrowGenerator()}</span> : ''}
                                </a>
                                {item.children && <MenuList menuListData={item.children}  />}
                            </li>
                            );
                    }

                })}
            </ul>

            </>
        )	
    } else {
        return (
            <></>
        )
    }

}

