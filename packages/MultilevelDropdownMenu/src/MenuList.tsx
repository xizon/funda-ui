import React, { useEffect, useRef } from 'react';

import { getNextSiblings } from './utils/dom'; 

/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
type MenuListProps = {
    alternateCollapse?: boolean;
    first?: boolean;
    arrow?: React.ReactNode;
    childClassName?: string;
	data: any[any];
    routerPath?: string;
    onSelect?: (e: any, val: any) => void;
};

export default function MenuList(props: MenuListProps) {

    const {
        alternateCollapse,
        first,
        arrow,
        childClassName,
        data,
        routerPath,
        onSelect
    } = props;

    const rootRef = useRef<any>(null);
    const currentPath = routerPath ? routerPath : '';
    

    
    const activeClass = (el: any, mode: string, classname: string = 'active') => {
        if ( mode === 'add' ) {
            el.classList.add(classname);
        } else {
            el.classList.remove(classname);
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
            if ( typeof el.querySelectorAll('li')[0] !== 'undefined' ) {
                const calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;
                el.style.maxHeight = `${calcH}px`;
            }

        });

    };



    function handleClick(e: any) {
        e.preventDefault();
        const hyperlink = e.currentTarget;
        const url = hyperlink.getAttribute('href');
        const subElement = getNextSiblings(hyperlink, 'ul');


        // route switching
        //=====================
        onSelect?.(e, {
            isRouter: hyperlink.dataset.router,
            slug: hyperlink.dataset.slug,
            link: hyperlink.dataset.link
        });
        

        // hide child if expandedLink doesn't exist, on the contrary
        //=====================
        if ( hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null ) {


            //Hide all other siblings of the selected <ul>
            if ( alternateCollapse ) {
                [].slice.call(rootRef.current.children).forEach(function(li: any){

                    activeClass(li, 'remove');
        
                    const _li = li.firstChild;
                    activeClass(_li, 'remove');
                    _li.setAttribute('aria-expanded', false);
        
                    [].slice.call(getNextSiblings(_li, 'ul')).forEach(function(element: any){
                        element.style.maxHeight = 0;
                    });
                });
            }


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
        return arrow ? arrow : <svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>;
    }


    useEffect(() => {


        // Activate current item
        //=====================
        const allItems = rootRef.current ? [].slice.call(document.querySelectorAll(`.${childClassName} a`)).map( (item: any) => {
            return {
                href: item.getAttribute('href'),
                el: item,
                actived: item.parentNode.classList?.contains('active') ? true : false,
                expandedLink: document.body.contains(item.parentNode.parentNode.previousSibling) ? item.parentNode.parentNode.previousSibling : false
            }
        } ) : [];

        
        allItems.forEach( (hyperlink: any) => {

            // Expand the currently active item by default
            if ( hyperlink.actived ) {

                hyperlink.el.setAttribute('aria-expanded', 'true');

                if ( hyperlink.expandedLink ) {
                    const expandedLink: any = hyperlink.expandedLink;  // <a>
                    activeClass(expandedLink.parentNode, 'add');
                    expandedLink.setAttribute('aria-expanded', true);
                }


                // init <ul> height
                const ul = getNextSiblings(hyperlink.el, 'ul');
                [].slice.call(ul).forEach(function(el: any){
                    if ( typeof el.querySelectorAll('li')[0] !== 'undefined' ) {
                        const calcH = el.querySelectorAll('li').length * el.querySelectorAll('li')[0].scrollHeight;
                        
                        // Prevent the use of iframe or other situations where the height is 0
                        el.style.maxHeight = `${calcH == 0 ? 999 : calcH}px`;
                    }

                });
            }

        });

    }, [data]);


    if ( data ) {
        
        return (
            <>
            <ul className={childClassName}  ref={rootRef} style={!first ? {maxHeight: '0px'} : {}}>
                
                {data.map((item: any, i: number) => {

                    const _matchPath = currentPath === item.link || currentPath.indexOf(item.link.replace(/\/[\d]+\.html|\.html/ig, '')) >= 0 && item.link !== '/';

                    if (item.heading) return (
                        <li className="nav-item" key={i}>
                            <a tabIndex={-1} className="nav-link disabled" href="#" aria-disabled="true" data-router="false" data-link={item.link} data-slug={item.slug}>
                                {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}<i dangerouslySetInnerHTML={{ __html: `${item.title}` }}></i>
                            </a>
                        </li>
                    );

                    return (
                        <li key={i} className={item.active ? `nav-item active` : (_matchPath ? `nav-item active` : 'nav-item')}>
                            <a tabIndex={-1} title={item.title} className={item.active ? `nav-link active` : (_matchPath ? `nav-link active` : 'nav-link')} href={item.link === '#' ? `${item.link}-${i}` : item.link} onClick={handleClick} data-router={item.link.indexOf('#') >= 0 || item.link.indexOf('http') >= 0 ? 'false' : 'true'} data-link={item.link} data-slug={item.slug}>
                                {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}<i dangerouslySetInnerHTML={{ __html: `${item.title}` }}></i>
                                {item.children ? <span className="arrow">{arrowGenerator()}</span> : ''}
                            </a>
                            {item.children && <MenuList 
                                                data={item.children} 
                                                first={false} 
                                                arrow={arrow} 
                                                onSelect={onSelect} 
                                                routerPath={routerPath} 
                                            />}
                        </li>
                    );

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

