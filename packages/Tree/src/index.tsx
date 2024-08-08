import React, { useState, useEffect, useRef } from 'react';

import {
    useComId,
    deepClone,
    flatData
} from 'funda-utils';


import TreeList from './TreeList';
import { initUlHeight, initAsyncItems } from './init-height';



export interface ListSearchDataConfig {
    title: string | number;
}



export interface DataNode {
    key: React.Key;
    title: string;
    link?: string;
    active?: boolean;
    checked?: boolean;
    heading?: string;
    icon?: string;
    slug?: string;
    customContentToHyperlink?: React.ReactNode;
    customContentToLiTag?: React.ReactNode;
    itemMouseEnterCallback?: () => void;
    itemMouseLeaveCallback?: () => void;
    itemLinkMouseEnterCallback?: () => void;
    itemLinkMouseLeaveCallback?: () => void;
    childrenAsync?: boolean;
    children?: DataNode[];
}

export interface FetchConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
}



type TreeProps = {
    /** Set TreeNode display Checkbox or not */
    checkable?: boolean;
    /** Shows a connecting line */
    showLine?: boolean;
    /**  Specifies what kind of line to display */
    lineStyle?: string;
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** set an arrow */
    arrow?: React.ReactNode;
    /** Set collapse/expand icon */
    arrowIcons?: React.ReactNode[];
    /** Disable arrow */
    disableArrow?: boolean;
    /** Disable the collapse effect */
    disableCollapse?: boolean;
    /** The class name of the tree. */
    treeClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format. */
    data?: any[any];
    /** Retrieve data */
    retrieveData?: ListSearchDataConfig[];
    /** -- */
    id?: string;
    onSelect?: (e: any, val: any, func: Function) => void;
    onCollapse?: (e: any, val: any, func: Function) => void;
    onCheck?: (val: any) => void;
};

const Tree = (props: TreeProps) => {
    const {
        id,
        checkable,
        showLine,
        lineStyle,
        alternateCollapse,
        disableArrow,
        disableCollapse,
        arrow,
        arrowIcons,
        treeClassName,
        childClassName,
        data,
        retrieveData,
        onSelect,
        onCollapse,
        onCheck
    } = props;
    

    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [list, setList] = useState<DataNode[] | null>(null);
    const [flatList, setFlatList] = useState<DataNode[]>([]);
    const [checkedPrint, setCheckedPrint] = useState<any[]>([]);
    const [checkedData, setCheckedData] = useState<any[]>([]);
    const expandClassName = `${showLine ? 'show-line' : ''} ${disableArrow ? 'hide-arrow' : ''} ${disableCollapse ? 'collapse-disabled' : ''} ${lineStyle ? `line--${lineStyle}` : ''} ${checkable ? 'has-checkbox' : ''}`;



    const updateTreeData = (list: DataNode[] | null, key: React.Key, children: DataNode[]): DataNode[] => {
        
        return list ? list.map((node) => {
            if (node.key === key) {
                return {
                    ...node,
                    children
                };
            }
            if (node.children) {
                return {
                    ...node,
                    children: updateTreeData(node.children, key, children)
                };
            }
            return node;
        }) : [];
    }
        

    async function fetchData(fetch: FetchConfig, params: any) {

        if (typeof fetch.fetchFuncAsync === 'object') {
            const response: any = await fetch.fetchFuncAsync[`${fetch.fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

            if ( Array.isArray(_ORGIN_DATA) && _ORGIN_DATA.length > 0 ) {
                // reset data structure
                if (typeof (fetch.fetchCallback) === 'function') {
                    _ORGIN_DATA = fetch.fetchCallback(_ORGIN_DATA);
                }

                // Determine whether the data structure matches
                if ( _ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].title === 'undefined' ) {
                    console.warn( 'The data structure does not match, please refer to the example in the component documentation.' );
                    _ORGIN_DATA = [];
                }

        
                return _ORGIN_DATA;

            } else {
                return [];
            }


        } else {
            return [];
        }


    }


    function updateShowProp(obj: DataNode[], retrieveData: ListSearchDataConfig[], val: boolean | undefined = undefined) {
        obj.forEach((item: any, index: number) => {

            if (retrieveData.length === 0) {
                item.show = true;
            } else {
                if (typeof val !== 'undefined') {
                    item.show = val;
                } else {
                    if (retrieveData.map((v: any) => v.title?.toLowerCase()).includes(item.title?.toLowerCase())) {
                        item.show = true;
                    } else {
                        item.show = false;
                    }
                }
            }


            //
            if (item.children) {
                updateShowProp(item.children, retrieveData, val);
            }
        });
    }



    function addKey(obj: DataNode[], depth: string, init: number) {
        obj.forEach((item: any, index: number) => {
            item.key = `${depth}-${index}`.substring(1);
            if (item.children) {
                addKey(item.children, `${depth}-${index}`, init + 1);
            }
        });
    }


    function initCheckboxesVal(obj: DataNode[]) {
        obj.forEach((item: any) => {
            if ( item.checked === true ) setCheckedPrint((prevState) => [{
                name: `checkbox-${idRes}-${item.key}`,
                key: item.key,
                slug: item.slug,
                link: item.link
            }, ...prevState]);
            
            if (item.children) {
                initCheckboxesVal(item.children);
            }
        });
    }

    function initCheckboxesData(obj: DataNode[]) {
        obj.forEach((item: any) => {
            setCheckedData((prevState) => [{
                key: item.key,
                checked: item.checked === true,
                show: true,
                indeterminate: false
            }, ...prevState]);
            
            if (item.children) {
                initCheckboxesData(item.children);
            }
        });
    }


    function initDefaultValue(key: React.Key | null, fetch: FetchConfig | null = null, firstRender: boolean = false, retrieveData: ListSearchDataConfig[] = []) {

        if ( firstRender ) {
            addKey(data, '', 0);
            

            // filter showing items
            if (Array.isArray(retrieveData)) {
                updateShowProp(data, retrieveData);
            } else {
                updateShowProp(data, retrieveData, true);
            }

      

            // Initialize default value of checkboxes 
            if ( checkable ) {
                initCheckboxesVal(data);
                initCheckboxesData(data);
            }


            // update list
            setList(data);

            // update retrive list
            const _clone: any = deepClone(data);
            setFlatList(flatData(_clone));

            return;
        }

        if (fetch && typeof fetch.fetchFuncAsync === 'object') {
            //
            const _params: any[] = fetch.fetchFuncMethodParams || [];
            fetchData(fetch, (_params).join(',')).then( (response: any) => {

                const _childrenData: DataNode[] = response;

                if ( _childrenData.length > 0 ) {
                    // add children to node
                    const _newData: DataNode[] = updateTreeData(list, key ? key : '', _childrenData);

                    // update data
                    addKey(_newData, '', 0);
          
                    // filter showing items
                    if (Array.isArray(retrieveData)) {
                        updateShowProp(_newData, retrieveData);
                    } else {
                        updateShowProp(_newData, retrieveData, true);
                    }



                    // Initialize default value of checkboxes 
                    if ( checkable ) {
                        _childrenData.forEach((newitem: any) => {
                            setCheckedData((prevState) => [{
                                key: newitem.key,
                                checked: newitem.checked === true,
                                show: true,
                                indeterminate: false
                            }, ...prevState]);
                        });
                    }
                            
                    // update list
                    setList(_newData);

                    // update retrive list
                    const _clone: any = deepClone(_newData);
                    setFlatList(flatData(_clone));
                    

                }

                // loading status
                setTimeout(() => {
                    [].slice.call(rootRef.current.querySelectorAll('.arrow.async-ready, .nav-link.async-ready')).forEach( (node: any) => {
                        node.classList.remove('loading');
                        if ( node.parentElement.querySelector('ul') !== null ) {
                            node.classList.remove('async-ready');
                            node.click();
                        }
                    });

                
                    // init <ul> height
                    // Initialize async items
                    const ul: any = [].slice.call(rootRef.current.querySelectorAll('ul'));
                    initAsyncItems(ul as never).then(() => {
                        initUlHeight(ul);
                    });

                }, 500);

          

            });        
        }
        
    }





    function filterRetriveData(flatData: DataNode[], retrieveData: ListSearchDataConfig[]) {
        return flatData.filter((item: any) => {
            return retrieveData.map((v: any) => v.title?.toLowerCase()).includes(item.title?.toLowerCase())
        });
    }

    useEffect(() => {
        initDefaultValue(null, null, true, retrieveData);
    }, [data, retrieveData]);


   
    return (
        <>

            <nav tabIndex={0} id={idRes} ref={rootRef} className={treeClassName ? `tree-diagram__wrapper ${treeClassName} ${expandClassName}` : `tree-diagram__wrapper tree-diagram-default ${expandClassName}`}>
                
                
                <TreeList
                    rootNode={rootRef}
                    checkboxNamePrefix={idRes}
                    alternateCollapse={alternateCollapse}
                    first={true}
                    disableArrow={disableArrow}
                    disableCollapse={disableCollapse}
                    arrow={arrow}
                    arrowIcons={arrowIcons}
                    data={Array.isArray(retrieveData) && retrieveData.length > 0 ? filterRetriveData(flatList, retrieveData) : list} 
                    childClassName={childClassName || 'tree-diagram-default-nav'} 
                    onSelect={onSelect} 
                    onCollapse={onCollapse}
                    onCheck={onCheck}
                    evInitValue={initDefaultValue}
                    updateCheckedPrint={setCheckedPrint}
                    getCheckedPrint={checkedPrint}
                    updategetCheckedData={setCheckedData}
                    getCheckedData={checkedData}
                    
                />
                
            </nav>

        </>
    )
};

export default Tree;