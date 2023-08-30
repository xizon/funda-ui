import React, { useEffect, useRef, useCallback } from 'react';

import Checkbox from 'rpb-checkbox';


import { getNextSiblings, getParents, getChildren } from './utils/dom'; 

interface fetchConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
}


/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
type TreeListProps = {
    rootNode: React.RefObject<HTMLDivElement>;
    checkboxNamePrefix?: string;
    alternateCollapse?: boolean;
    first?: boolean;
    disableArrow?: boolean;
    disableCollapse?: boolean;
    arrow?: React.ReactNode;
    arrowIcons?: React.ReactNode[];
    childClassName?: string;
	data: any[any];
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    updateCollapseData?: any;
    onSelect?: (e: any, val: any, func: Function) => void;
    onCollapse?: (e: any, val: any, func: Function) => void;
    onCheck?: (val: any) => void;
    evInitValue?: (key: React.Key | null, fetch: fetchConfig | null, firstRender: boolean) => void;
};

export default function TreeList(props: TreeListProps) {

    const {
        rootNode,
        checkboxNamePrefix,
        alternateCollapse,
        first,
        disableArrow,
        disableCollapse,
        arrow,
        arrowIcons,
        childClassName,
        data,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        updateCollapseData,
        onSelect,
        onCollapse,
        onCheck,
        evInitValue
        
    } = props;

    const rootRef = useRef<any>(null);

    const customIcon: React.ReactNode = <var className="default-icon"><svg width="0.75em" height="0.75em" viewBox="0 0 20 20" fill="none"><path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="currentColor"/></svg></var>;

    const loadingIcon: React.ReactNode = <var className="loading-icon"><svg width="1em" height="1em" viewBox="0 0 512 512"><g><path fill="currentColor" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"/><path fill="currentColor" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"/><path fill="currentColor" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"/><path fill="currentColor" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"/><path fill="currentColor" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"/><path fill="currentColor" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"/><path fill="currentColor" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"/><path fill="currentColor" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"/></g></svg></var>;


    const removeItemOnce = (arr: any[], key: string) => {
        return arr.filter((item: any) => {
            return item.key !== key;
        });
    };
      

    const formatCheckboxControlVal = (el: HTMLFormElement) => {
        return {
            name: el.dataset.name?.replace(/-label$/, ''),
            key: el.dataset.key,
            slug: el.value,
            link: el.dataset.link
        }
    };

    const setCheckboxCheckedData = (arr: any[], key: string, val: boolean) => {
        arr.forEach((item: any, index: number) => {
            if (item.key === key) arr[index].checked = val;
        });
    };

    const setCheckboxIndeterminateData = (arr: any[], key: string, val: boolean) => {
        arr.forEach((item: any, index: number) => {
            if (item.key === key) arr[index].indeterminate = val;
        });
    };


    
    const setCheckboxIndeterminateStatus = (checkedData: any[], printData: any[], el: HTMLFormElement | null) => {
        let _parentsLi: any = [];

        if ( el !== null ) {
            _parentsLi = [].slice.call(getParents(el,'li'));
            _parentsLi.splice(0, 1);
        } else {
            _parentsLi = [].slice.call(document.querySelectorAll(`#${checkboxNamePrefix} li`));
        }


        //---
        _parentsLi.forEach((node: any) => {
            const _checkboxes = getChildren(node, '[type="checkbox"]');
            const parentKey = _checkboxes[0].dataset.key;


            //
            let _checkedLengthCalcArr: any[] = [];
            checkedData.forEach((oitem: any, oindex: number) => {
                _checkboxes.forEach((el: any) => {
                    if (el.dataset.key === oitem.key) _checkedLengthCalcArr.push(oitem);
                });
            });
            _checkedLengthCalcArr = _checkedLengthCalcArr.filter((el: any) => {
                return el.key !== parentKey;
            })

            //
            const _checkedLength = _checkedLengthCalcArr.filter((el: any) => {
                return el.checked === true;
            }).length;

            if ( _checkedLength === 0 ) {
                setCheckboxIndeterminateData(checkedData, parentKey, false);
            } else {

                if ( _checkedLength === _checkboxes.length-1 )  {
                    setCheckboxIndeterminateData(checkedData, parentKey, false);
                    setCheckboxCheckedData(checkedData, parentKey, true);
                    printData.push(formatCheckboxControlVal(_checkboxes[0])); 
                }
                
                if ( _checkedLength < _checkboxes.length-1 )  {
                    setCheckboxIndeterminateData(checkedData, parentKey, true);
                    setCheckboxCheckedData(checkedData, parentKey, false);
                    printData = removeItemOnce(printData, parentKey);  
                }

            }

        });

        return [checkedData, printData];

    };

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
        initUlHeight(ul);

    };

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

    function handleCollapse(e: any) {
        if ( disableCollapse ) return;

        
        e.preventDefault();
        const hyperlink = e.currentTarget;
        const url = hyperlink.getAttribute('href');
        const subElement = getNextSiblings(hyperlink, 'ul');

        // loading
        //=====================       
        if ( hyperlink.classList.contains('async-ready') ) {
            activeClass(hyperlink, 'add', 'loading');
        }


        // calback
        //=====================
        const fetchFunc: Function = hyperlink.classList.contains('async-ready') ? (typeof evInitValue !== 'function' ? ()=>void(0) : evInitValue) : ()=>void(0);
        onCollapse?.(e, {
            key: hyperlink.dataset.key,
            slug: hyperlink.dataset.slug,
            link: hyperlink.dataset.link
        }, fetchFunc);



        // hide child if expandedLink doesn't exist, on the contrary
        //=====================
        if ( hyperlink.classList.contains('loading') ) return;

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
            

            // update collapse data
            updateCollapseData(data, hyperlink.dataset.key, true);
            

        } else {

            //close current
            closeChild(hyperlink, subElement as never);

            // update collapse data
            updateCollapseData(data, hyperlink.dataset.key, false);

        }


    }

    function handleSelect(e: any) {
        e.preventDefault();
        const hyperlink = e.currentTarget;

        if ( hyperlink.classList.contains('selected') ) {
            activeClass(hyperlink, 'remove', 'selected');
        } else {
            [].slice.call(hyperlink.closest('.tree-diagram__wrapper').querySelectorAll('li > a')).forEach((node: any) => {
                activeClass(node, 'remove', 'selected');
            });
            activeClass(hyperlink, 'add', 'selected');
        }

     
        // Note: that component re-rendering (such as routing changes) will cause collapsing problems 
        // with `onSelect()`, please use `useMemo()` to wrap `<Tree />`, like this:
        /*
        function TreeMemo(props: any) {
            const {t, callback, data} = props;
            const dependencies = props.data !== null && props.data.length === 0 ? props.data : '';
            return useMemo(() => {
                return    <Tree
                            data={data}
                            showLine={true}
                            onSelect={callback}
                        />
            }, [dependencies]);
        }
        */
        onSelect?.(e, {
            key: hyperlink.dataset.key,
            slug: hyperlink.dataset.slug,
            link: hyperlink.dataset.link
        }, typeof evInitValue !== 'function' ? ()=>void(0) : evInitValue);

        if ( disableArrow ) {
            handleCollapse(e);
        }
    }
    

    function titleArrowGenerator() {
        return disableArrow ? loadingIcon : null;
    }


    function arrowGenerator() {
        if ( arrowIcons && Array.isArray(arrowIcons) ) {
            return arrowIcons.length > 1 ? <><var className="default-icon"><span>{arrowIcons[0]}</span><span>{arrowIcons[1]}</span></var>{loadingIcon}</> : <><var className="default-icon"><span>{arrowIcons[0]}</span><span>{arrowIcons[0]}</span></var>{loadingIcon}</>;
        } else {
            return arrow ? arrow : <>{customIcon}{loadingIcon}</>;
        }

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
                const ul: any = getNextSiblings(hyperlink.el, 'ul');
                initUlHeight(ul);
            }

        });


        // Initialize indeterminate status of all checkboxes 
        //=====================
        setCheckboxIndeterminateStatus(getCheckedData as never, getCheckedPrint as never, null);
                                

    }, [data]);


    if ( data ) {
        
        return (
            <>
            <ul className={childClassName}  ref={rootRef} style={!first ? {maxHeight: '0px'} : {}}>
                
                {data.map((item: any, i: number) => {

                    const _async = item.childrenAsync ? 'async-ready' : '';
                    const _cusIcons = arrowIcons ? 'custom-icons' : '';
              
                    
                    if ( item.heading ) return (
                        <li className="nav-item" key={item.key}>
                            <a tabIndex={-1} className="nav-link disabled" href="#" aria-disabled="true" data-link={item.link} data-slug={item.slug} data-key={item.key}>
                                <span>{item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}<i dangerouslySetInnerHTML={{ __html: `${item.title}` }}></i></span>
                            </a>
                        </li>
                    );
                    return (
                        <li className={item.active ? 'nav-item active' : 'nav-item'} key={item.key} >

                            {(item.children && item.children.length) || item.childrenAsync ? <span aria-expanded={item.active ? 'true' : 'false'} className={item.active ? `arrow active ${_async} ${_cusIcons}` : `arrow ${_async} ${_cusIcons}`} onClick={handleCollapse} data-link={item.link} data-slug={item.slug} data-key={item.key}>{arrowGenerator()}</span> : ''}

                            <span className="checkbox-trigger">
                                <Checkbox
                                    wrapperClassName=""
                                    name={`checkbox-${checkboxNamePrefix}-${item.key}`}
                                    tabIndex={-1}
                                    data-key={item.key}
                                    data-link={item.link}
                                    value={item.slug}
                                    indeterminate={getCheckedData!.filter((cur: any) => cur.key === item.key)[0]?.indeterminate}
                                    checked={getCheckedData!.filter((cur: any) => cur.key === item.key)[0]?.checked}
                                    onChange={(e: any, val: any) => {
                                      
                                        const _curKey: string = e.target.dataset.key;
                                        const _checkedData: any = getCheckedData;

                                        let _res: any = getCheckedPrint;

                                        // STEP 1:
                                        // Current checkbox
                                        //-----------
                                        if ( val === true ) {
                                            _res.push(formatCheckboxControlVal(e.target));
                                            setCheckboxIndeterminateData(_checkedData, _curKey, false);
                                            setCheckboxCheckedData(_checkedData, _curKey, true);

                                        } else {
                                            setCheckboxCheckedData(_checkedData, _curKey, false);
                                            _res = removeItemOnce(_res, _curKey);
                                            
                                        }


                                        // STEP 2:
                                        // All child checkboxes
                                        //-----------
                                        [].slice.call(getChildren(e.target.closest('li'), '[type="checkbox"]')).forEach((node: any) => {
                                            if ( val === true ) {
                                                if ( node.dataset.key !== _curKey ) {
                                                    setCheckboxIndeterminateData(_checkedData, node.dataset.key, false);
                                                    setCheckboxCheckedData(_checkedData, node.dataset.key, true);
                                                    _res.push(formatCheckboxControlVal(node));
                                                }
                                            } else {
                                                setCheckboxCheckedData(_checkedData, node.dataset.key, false);
                                                _res = removeItemOnce(_res, node.dataset.key);

                                            }

                                        });


                                        // STEP 3:
                                        // ALl parent checkboxes
                                        //-----------
                                        const [updatedCheckedData, updatedPrintData] = setCheckboxIndeterminateStatus(_checkedData, _res, e.target);
                                        let _updatedCheckedData: any[] = updatedCheckedData;
                                        let _updatedPrintData: any[] = updatedPrintData;


                                        // STEP 4:
                                        // Update checked data
                                        //-----------
                                        updategetCheckedData(_updatedCheckedData);
                                        
                                        
                                        // STEP 5:
                                        // Array deduplication
                                        //-----------
                                        _updatedPrintData = _updatedPrintData.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.key === item.key)))

                                        
                                        // STEP 6:
                                        // Update checked print
                                        //-----------
                                        updateCheckedPrint(_updatedPrintData);


                                        // STEP 7:
                                        // callback
                                        //----------- 
                                        onCheck?.(_updatedPrintData);
                                    }}
                                />
                            </span>
                            
                            <a tabIndex={-1} className={item.active ? `nav-link active ${_async}` : `nav-link ${_async}`} href={item.link === '#' ? `${item.link}-${i}` : item.link} aria-expanded="false" onClick={handleSelect} data-link={item.link} data-slug={item.slug} data-key={item.key}>
                                <span>{item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}<i dangerouslySetInnerHTML={{ __html: `${item.title}` }}></i>{titleArrowGenerator()}</span>
                            </a>
                            {item.children && item.children.length > 0 && <TreeList 
                                                rootNode={rootNode}
                                                checkboxNamePrefix={checkboxNamePrefix}
                                                data={item.children} 
                                                first={false} 
                                                arrow={arrow} 
                                                onSelect={onSelect} 
                                                onCollapse={onCollapse} 
                                                onCheck={onCheck}
                                                disableArrow={disableArrow} 
                                                disableCollapse={disableCollapse}
                                                arrowIcons={arrowIcons} 
                                                evInitValue={evInitValue} 
                                                getCheckedPrint={getCheckedPrint}
                                                updateCheckedPrint={updateCheckedPrint}
                                                getCheckedData={getCheckedData}
                                                updategetCheckedData={updategetCheckedData}
                                                updateCollapseData={updateCollapseData}

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

