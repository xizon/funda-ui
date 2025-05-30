import React, { useEffect, useRef } from 'react';

// HAS CHECKBOX


import {
    getNextSiblings,
    getChildren
} from 'funda-utils/dist/cjs/dom';
import { combinedCls } from 'funda-utils/dist/cjs/cls';



import { initUlHeight } from './init-height';
import { removeItemOnce, activeClass } from './utils/func';

import type {ItemConfig, UpdateDataFunction, DataNode} from './index';


/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
export type TreeListProps = {
    rootNode: React.RefObject<HTMLDivElement>;
    checkboxNamePrefix?: string;
    alternateCollapse?: boolean;
    first?: boolean;
    disableArrow?: boolean;
    disableCollapse?: boolean;
    renderOption?: (optionData: DataNode, key: React.Key) => React.ReactNode;
    arrow?: React.ReactNode;
    arrowIcons?: React.ReactNode[];
    childClassName?: string;
    orginalData: any[any];
	data: any[any];
    getCheckedPrint: any[];
    updateCheckedPrint: React.Dispatch<React.SetStateAction<any[]>>;
    getCheckedData: any[];
    updategetCheckedData: React.Dispatch<React.SetStateAction<any[]>>;
    expandedMap: Record<string, boolean>;
    onSelect?: (
        e: React.MouseEvent<HTMLElement>, 
        val: ItemConfig, 
        updateData: UpdateDataFunction
    ) => void;
    onDoubleSelect?: (
        e: React.MouseEvent<HTMLElement>, 
        val: ItemConfig, 
        updateData: UpdateDataFunction
    ) => void;
    onCheck?: (val: any) => void;
    evCollapse?: (e: React.MouseEvent<HTMLElement>) => void;
    evInitValue?: UpdateDataFunction;
};

export default function TreeList(props: TreeListProps) {

    const {
        rootNode,
        checkboxNamePrefix,
        alternateCollapse,
        renderOption,
        first,
        disableArrow,
        disableCollapse,
        arrow,
        arrowIcons,
        childClassName,
        orginalData,
        data,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        expandedMap,
        onSelect,
        onDoubleSelect,
        onCheck,
        evCollapse,
        evInitValue
        
    } = props;

    const rootRef = useRef<any>(null);
        

    const mergedData = data === null ? [] : data.map((item: ItemConfig) => {
        const itemData = typeof item === 'string' ? JSON.parse(item) : item;

        return {
            ...itemData,
            isExpanded: expandedMap?.[itemData.key] ?? false
        };
    });

    const customIcon: React.ReactNode = <var className="default-icon"><svg width="0.75em" height="0.75em" viewBox="0 0 20 20" fill="none"><path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="currentColor"/></svg></var>;

    const loadingIcon: React.ReactNode = <var className="loading-icon"><svg width="1em" height="1em" viewBox="0 0 512 512"><g><path fill="currentColor" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"/><path fill="currentColor" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"/><path fill="currentColor" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"/><path fill="currentColor" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"/><path fill="currentColor" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"/><path fill="currentColor" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"/><path fill="currentColor" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"/><path fill="currentColor" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"/></g></svg></var>;


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

    // check whether the node is in the Indeterminate state
    const isIndeterminate = (node: any) => {
        if (!node.children || node.children.length === 0) {
            return false;
        }

        let hasChecked = false;
        let hasUnchecked = false;

        for (let child of node.children) {
            if (isIndeterminate(child)) {
                return true;
            }

            if (child.checked) {
                hasChecked = true;
            } else {
                hasUnchecked = true;
            }

            // If there are some selected and some unchecked, the node is Indeterminate
            if (hasChecked && hasUnchecked) {
                return true;
            }
        }

        // If all child nodes are the same, it is not Indeterminate
        return false;
    };


    const updateTreeCheckedItems = (arr: any[], flatArr: any[]) => {
        if (!Array.isArray(arr)) return;

        for (let i = 0; i < arr.length; i++) {
            const orginalDataKey: React.Key = arr[i].key;
            const targetItem = flatArr.find((v: any) => v.key === orginalDataKey);
            if (typeof targetItem !== 'undefined') {
                // update value of checked
                arr[i].checked = targetItem.checked;
            }
            
            if (arr[i].children) updateTreeCheckedItems(arr[i].children, flatArr);
        }
    }
        
    const updateIndeterminateData = (arr: any[], flatArr: any[]) => {
        if (!Array.isArray(arr)) return;

        for (let i = 0; i < arr.length; i++) {
            const orginalDataKey: React.Key = arr[i].key;
            const targetItem = flatArr.find((v: any) => v.key === orginalDataKey);
            if (typeof targetItem !== 'undefined') {
                // update indeterminate of item
                targetItem.indeterminate = isIndeterminate(arr[i]);
            }
           
            if (arr[i].children) updateIndeterminateData(arr[i].children, flatArr);
        }
    }
        
    const setCheckboxIndeterminateStatus = (checkedData: any[], printData: any[], el: HTMLFormElement | null) => {

        // update checked items from orginal data
        updateTreeCheckedItems(orginalData, checkedData);

        // check whether the node is in the Indeterminate state
        updateIndeterminateData(orginalData, checkedData);

        return [checkedData, printData];

    };


    function handleSelect(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        
        const hyperlink = e.currentTarget;
        

        if ( hyperlink.classList.contains('selected') ) {
            activeClass(hyperlink, 'remove', 'selected');
        } else {
            const wrapper = hyperlink.closest('.tree-diagram__wrapper');
            if (wrapper) {
                [].slice.call(wrapper.querySelectorAll('li > div.nav-link')).forEach((node: any) => {
                    activeClass(node, 'remove', 'selected');
                });
            }
            activeClass(hyperlink, 'add', 'selected');
        }

     
        
        onSelect?.(e, {
            key: hyperlink.dataset.key as string,
            slug: hyperlink.dataset.slug as string,
            link: hyperlink.dataset.link as string,
            optiondata: hyperlink.dataset.optiondata as string
        }, async () => {
            if (typeof evInitValue === 'function') {
                await evInitValue(hyperlink.dataset.key as string, null);
            }
        });

        if ( disableArrow ) {
            evCollapse?.(e);

        }
    }
    
    function handleDoubleSelect(e: any) {
        e.preventDefault();
        e.stopPropagation();
        
        const hyperlink = e.currentTarget;

        if ( hyperlink.classList.contains('selected') ) {
            activeClass(hyperlink, 'remove', 'selected');
        } else {
            [].slice.call(hyperlink.closest('.tree-diagram__wrapper').querySelectorAll('li > div.nav-link')).forEach((node: any) => {
                activeClass(node, 'remove', 'selected');
            });
            activeClass(hyperlink, 'add', 'selected');
        }

     
        onDoubleSelect?.(e, {
            key: hyperlink.dataset.key,
            slug: hyperlink.dataset.slug,
            link: hyperlink.dataset.link,
            optiondata: hyperlink.dataset.optiondata
        }, async () => {
            if (typeof evInitValue === 'function') {
                await evInitValue(hyperlink.dataset.key as string, null);
            }
        });

        if (disableArrow) {
            evCollapse?.(e);
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

    function checkedAct(el: any, val: any) {

        if (el === null) return;

        const _curKey: string = el.dataset.key;
        const _checkedData: any = getCheckedData;

        let _res: any = getCheckedPrint;

        // STEP 1:
        // Current checkbox
        //-----------
        if ( val === true ) {
            _res.push(formatCheckboxControlVal(el));
            setCheckboxCheckedData(_checkedData, _curKey, true);

        } else {
            setCheckboxCheckedData(_checkedData, _curKey, false);
            _res = removeItemOnce(_res, _curKey);
            
        }


        // STEP 2:
        // All child checkboxes
        //-----------
        [].slice.call(getChildren(el.closest('li'), '[type="checkbox"]')).forEach((node: any) => {
            if ( val === true ) {
                if ( node.dataset.key !== _curKey ) {
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
        const [updatedCheckedData, updatedPrintData] = setCheckboxIndeterminateStatus(_checkedData, _res, el);
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

     
    }
    


    useEffect(() => {

        // Activate current item
        //=====================
        const allItems = rootRef.current ? [].slice.call(document.querySelectorAll(`.${childClassName} div.nav-link`)).map( (item: any) => {
            return {
                href: item.dataset.href,
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
            <ul className={combinedCls(
                childClassName,
                {
                    'first': first
                }
            )}  ref={rootRef} style={!first ? {maxHeight: '0px'} : {}}>
                
                {mergedData.map((item: any, i: number) => {

                    const _async = item.childrenAsync ? 'async-ready' : '';
                    const _cusIcons = arrowIcons ? 'custom-icons' : '';
                
                    const optiondata = typeof item.optiondata !== 'undefined' ? item.optiondata : '{}';
                    
                    if ( item.heading ) return (
                        <li 
                            className={combinedCls(
                                'nav-item',
                                {
                                    'first': first
                                }
                            )} 
                            key={item.key}
                        >
                            <a 
                                tabIndex={-1} 
                                className="nav-link disabled" 
                                href="#" 
                                aria-disabled="true" 
                                data-link={item.link} 
                                data-slug={item.slug} 
                                data-key={item.key}
                                data-optiondata={JSON.stringify(item)}
                            >
                                <span>
                                    {/* ICON */}
                                    {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}

                                    {/* TITLE */}
                                    {typeof renderOption === 'function' ? <>
                                        {renderOption(item, item.key)}
                                    </> : <>
                                        <i dangerouslySetInnerHTML={{
                                            __html: `${item.title}`
                                        }}></i>
                                    </>}
                                </span>
                            </a>
                        </li>
                    );
                    return (
                        <li 
                            className={combinedCls(
                                'nav-item',
                                {
                                    'first': first,
                                    'active': item.active
                                }
                            )} 
                            key={item.key} 
                            onMouseEnter={typeof item.itemMouseEnterCallback !== 'undefined' ? item.itemMouseEnterCallback : () => void(0)} 
                            onMouseLeave={typeof item.itemMouseLeaveCallback !== 'undefined' ? item.itemMouseLeaveCallback : () => void(0)}
                        >

                            {(item.children && item.children.length) || item.childrenAsync ? <span 
                                aria-expanded={JSON.parse(optiondata as string).isExpanded || item.active ? 'true' : 'false'}
                                className={item.active ? `arrow active ${_async} ${_cusIcons}` : `arrow ${_async} ${_cusIcons}`} 
                                onClick={evCollapse} 
                                data-link={item.link} 
                                data-slug={item.slug} 
                                data-key={item.key} 
                                data-optiondata={JSON.stringify(item)}
                            >{arrowGenerator()}</span> : ''}

                            <span className="checkbox-trigger">

                                <div className="form-check__wrapper">
                                    <div className="form-check d-inline-block">
                                        <input
                                            type="checkbox"
                                            className={combinedCls(
                                                'form-check-input',
                                                {
                                                    'indeterminate': getCheckedData!.filter((cur: any) => cur.key === item.key)[0]?.indeterminate
                                                }
                                            )}
                                            name={`checkbox-${checkboxNamePrefix}-${item.key}`}
                                            tabIndex={-1}
                                            data-name={`checkbox-${checkboxNamePrefix}-${item.key}`}
                                            data-key={item.key}
                                            data-link={item.link}
                                            value={item.slug}
                                            checked={getCheckedData!.filter((cur: any) => cur.key === item.key)[0]?.checked}
                                            onChange={(e: any) => {
                                                checkedAct(e.target, !getCheckedData!.filter((cur: any) => cur.key === item.key)[0]?.checked);
                                            }}
                                        />

                                    </div>

                                </div>

                            </span>
              
                            <div 
                                tabIndex={-1} 
                                className={combinedCls(
                                    'nav-link',
                                    _async,
                                    {
                                        'selected': item.selected,
                                        'active': item.active,
                                        'disabled': item.disabled
                                    }
                                )}
                                data-href={item.link === '#' ? `${item.link}-${i}` : item.link} 
                                aria-expanded="false" 
                                onClick={handleSelect} 
                                onDoubleClick={handleDoubleSelect} 
                                data-link={item.link} 
                                data-slug={item.slug} 
                                data-key={item.key}
                                data-optiondata={JSON.stringify(item)}
                                onMouseEnter={typeof item.itemLinkMouseEnterCallback !== 'undefined' ? item.itemLinkMouseEnterCallback : () => void(0)} 
                                onMouseLeave={typeof item.itemLinkMouseLeaveCallback !== 'undefined' ? item.itemLinkMouseLeaveCallback : () => void(0)}
                            >
                                <span>
                                    
                                    {/* ICON */}
                                    {item.icon ? item.icon.indexOf('</svg>') < 0 ? <><i className={item.icon}></i> </> : <var dangerouslySetInnerHTML={{ __html: `${item.icon}` }} /> : null}

                                    {/* TITLE */}
                                    {typeof renderOption === 'function' ? <>
                                        {renderOption(item, item.key)}
                                    </> : <>
                                        <i dangerouslySetInnerHTML={{
                                            __html: `${item.title}`
                                        }}></i>
                                    </>}

                                    {/* ARROW */}
                                    {titleArrowGenerator()}
                                </span>


                                {/*<!-- CUSTOM CONTENT -->*/}
                                {/** Add custom content to `<a class="nav-link">...</a>` */}
                                {item.customContentToHyperlink}
                                {/*<!-- /CUSTOM CONTENT -->*/}

                            </div>


                            {/*<!-- CUSTOM CONTENT -->*/}
                            {/** Add custom content to `<li class="nav-item">...</li>` */}
                            {item.customContentToLiTag}
                            {/*<!-- /CUSTOM CONTENT -->*/}

                            {item.children && item.children.length > 0 && <TreeList 
                                                rootNode={rootNode}
                                                renderOption={renderOption}
                                                checkboxNamePrefix={checkboxNamePrefix}
                                                orginalData={orginalData}
                                                data={item.children} 
                                                first={false} 
                                                arrow={arrow} 
                                                onSelect={onSelect} 
                                                onDoubleSelect={onDoubleSelect}
                                                onCheck={onCheck}
                                                disableArrow={disableArrow} 
                                                disableCollapse={disableCollapse}
                                                arrowIcons={arrowIcons} 
                                                evInitValue={evInitValue} 
                                                getCheckedPrint={getCheckedPrint}
                                                updateCheckedPrint={updateCheckedPrint}
                                                getCheckedData={getCheckedData}
                                                updategetCheckedData={updategetCheckedData}

                                                // Collapse
                                                expandedMap={expandedMap}
                                                evCollapse={evCollapse} 
                                                                                                

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

