import React, { forwardRef, useEffect, useRef } from 'react';


import {
    getNextSiblings
} from 'funda-utils/dist/cjs/dom';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


import { formatIndentVal, multiSelControlOptionExist } from './multiple-select-utils/func';

/* Recursively nested components to traverse nodes
-------------------------------------------------*/
export type ItemListProps = {
    appendControl?: React.ReactNode;
    root: any;
    listContainerClassName: string;
    valSelected: any[];
    indentStr: string;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    selected?: boolean;
    onSelect: (v: any, cb?: () => void) => void;
    alternateCollapse?: boolean;
    first?: boolean;
    arrow?: React.ReactNode;
    childClassName: string;
    data: any[any];
};

const ItemList = forwardRef((props: ItemListProps, externalRef: any) => {

    const {
        appendControl,
        root,
        listContainerClassName,
        valSelected,
        indentStr,
        iconAdd,
        iconRemove,
        selected,
        onSelect,
        alternateCollapse,
        first,
        arrow,
        childClassName,
        data,
    } = props;

    const listContainerRef = useRef<any>(null);

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
        [].slice.call(ul).forEach(function (_curUl: any) {

            const allHeight = [].slice.call(_curUl.querySelectorAll('li')).map((_curLi: any) => _curLi.scrollHeight);

            // Prevent missing height, causing the last element to be clipped
            const maxHeight = Math.max(...allHeight);
            allHeight.push(maxHeight*3);

            //
            const totalHeight = allHeight.reduce(
                (accumulator: number, currentValue: number) => accumulator + currentValue,
                0,
            );

            // Prevent the use of iframe or other situations where the height is 0
            _curUl.style.maxHeight = `${totalHeight == 0 ? 999 : totalHeight}px`;
            
        });

    };



    function handleClick(e: any) {
        e.preventDefault();
        e.stopPropagation();
        const hyperlink = e.currentTarget.querySelector('div');
        const subElement = getNextSiblings(hyperlink, 'ul');

        // hide child if expandedLink doesn't exist, on the contrary
        //=====================
        if ( hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null ) {


            //Hide all other siblings of the selected <ul>
            if ( alternateCollapse ) {
                [].slice.call(listContainerRef.current.children).forEach(function(li: any){

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



    }

    
    function arrowGenerator() {
        return arrow ? arrow : <svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>;
    }

    useEffect(() => {

        if (root !== null && data.length > 0) {
            // Activate current item
             //=====================
             const allItems = listContainerRef.current ? [].slice.call(root.querySelectorAll(`.${childClassName} div`)).map( (item: any) => {
                 return {
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
                     
                     [].slice.call(ul).forEach(function (_curUl: any) {
 
                         const allHeight = [].slice.call(_curUl.querySelectorAll('li')).map((_curLi: any) => _curLi.scrollHeight);
 
                         // Prevent missing height, causing the last element to be clipped
                         const maxHeight = Math.max(...allHeight);
                         allHeight.push(maxHeight * 3);
 
 
                         // 
                         const totalHeight = allHeight.reduce(
                             (accumulator: number, currentValue: number) => accumulator + currentValue,
                             0,
                         );
             
                         // Prevent the use of iframe or other situations where the height is 0
                         _curUl.style.maxHeight = `${totalHeight == 0 ? 999 : totalHeight}px`;
                         
                     });
                     
                 }
 
             });
 
         }
 


    }, [data]);


    if (data) {

        return (
            <>
                <ul
                    className={`${listContainerClassName || ''} ${childClassName}`}
                    style={!first ? { maxHeight: '0px' } : {}}
                    ref={(node) => {
                        listContainerRef.current = node;
                        if (typeof externalRef === 'function') {
                            externalRef(node);
                        } else if (externalRef) {
                            externalRef.current = node;
                        }
                    }}
                >


                    {data ? data.map((item: any, i: number) => {

                        // callback from each option
                        if (typeof item.appendControlCallback === 'function') {
                            setTimeout(() => {
                                item.appendControlCallback?.();
                            }, 0);
                        }

            
                        return <li
                            key={selected ? 'item-selected' + i : 'item' + i}
                            className={selected ? 'selected' : combinedCls(
                                {
                                    'disabled': item.disabled,
                                    'hide': multiSelControlOptionExist(valSelected, item.value)
                                }
                            )}
                            data-index={i}
                            data-value={`${item.value}`}
                            data-label={`${item.label}`}
                            data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                            data-disabled={item.disabled || 'false'}
                            data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`}
                            data-itemdata={JSON.stringify(item)}
                            onClick={selected ? () => void(0) : handleClick}
                        >


                            <div>
                                <strong>
                                    <span dangerouslySetInnerHTML={{
                                        __html: selected ? (typeof item.listItemLabel === 'undefined' ? formatIndentVal(item.label, indentStr) : formatIndentVal(item.listItemLabel, indentStr)) : (typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel)
                                    }}></span>
                                    {item.children && item.children.length > 0 && !selected ? <span className="arrow">{arrowGenerator()}</span> : ''}
                                </strong>

                                {selected && appendControl ? <>
                                    <span className="m-select__ext" id={`m-select__ext-${item.value}${selected ? '-selected' : ''}`}>
                                        {appendControl}
                                    </span>
                                </> : null}


                                <i
                                    onClick={(e: React.MouseEvent) => {
                                        e.stopPropagation();
                                        onSelect((e.target as any).closest('li'),  undefined);
                                    }}>

                                    {selected ? <>
                                        {iconRemove ? <>{iconRemove}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                                    </> : <>
                                        {iconAdd ? <>{iconAdd}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}
                                    </>}
                                </i>


                            </div>

                            {item.children && <ItemList
                                root={root}
                                listContainerClassName={listContainerClassName}
                                ref={externalRef}
                                indentStr={indentStr}
                                valSelected={valSelected}
                                iconAdd={iconAdd}
                                iconRemove={iconRemove}
                                onSelect={onSelect}
                                first={false}
                                arrow={arrow}
                                data={item.children}
                                childClassName={childClassName}
                            />}

                        </li>;
                    }) : null}

                </ul>


            </>
        )
    } else {
        return (
            <></>
        )
    }


});

export default ItemList;
