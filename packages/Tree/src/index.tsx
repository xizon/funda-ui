import React, { useState, useEffect, useRef } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    deepClone,
    flatData
} from 'funda-utils/dist/cjs/object';
import {
    getNextSiblings
} from 'funda-utils/dist/cjs/dom';


import TreeList from './TreeList';
import { initUlHeight, initAsyncItems } from './init-height';
import { activeClass } from './utils/func';


export interface ListSearchDataConfig {
    title: string | number;
}

export interface ItemConfig {
    key: string;
    slug: string;
    link: string;
    optiondata: string;
}

export interface UpdateDataFunction {
    (key: React.Key | null, fetch: FetchConfig | null): Promise<void>;
}

export interface DataNode {
    key: React.Key;
    title: string;
    link?: string;
    active?: boolean;
    checked?: boolean;
    disabled?: boolean;
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



export type TreeProps = {
    /** Set TreeNode display Checkbox or not */
    checkable?: boolean;
    /** Shows a connecting line */
    showLine?: boolean;
    /**  Specifies what kind of line to display */
    lineStyle?: string;
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** A function to render content of the option, replaces the default content of the option. */
    renderOption?: (optionData: DataNode, key: React.Key) => React.ReactNode;
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
    onCollapse?: (
        e: React.MouseEvent<HTMLElement>, 
        val: ItemConfig, 
        updateData: UpdateDataFunction, 
        isExpanded: boolean
    ) => void;
    onCheck?: (val: any) => void;
};

const Tree = (props: TreeProps) => {
    const {
        id,
        checkable,
        showLine,
        lineStyle,
        alternateCollapse,
        renderOption,
        disableArrow,
        disableCollapse,
        arrow,
        arrowIcons,
        treeClassName,
        childClassName,
        data,
        retrieveData,
        onSelect,
        onDoubleSelect,
        onCollapse,
        onCheck
    } = props;
    

    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [orginalData, setOrginalData] = useState<DataNode[] | null>(null);
    const [list, setList] = useState<DataNode[] | null>(null);
    const [flatList, setFlatList] = useState<DataNode[]>([]);
    const [checkedPrint, setCheckedPrint] = useState<any[]>([]);
    const [checkedData, setCheckedData] = useState<any[]>([]);
    const expandClassName = `${showLine ? 'show-line' : ''} ${disableArrow ? 'hide-arrow' : ''} ${disableCollapse ? 'collapse-disabled' : ''} ${lineStyle ? `line--${lineStyle}` : ''} ${checkable ? 'has-checkbox' : ''}`;

    const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({}); // { [key]: true/false }


    // Handle DOM operations
    const handleDOMOperations = () => {
        // loading status
        [].slice.call(rootRef.current.querySelectorAll('.arrow.async-ready, .nav-link.async-ready')).forEach((node: any) => {
            node.classList.remove('loading');
            if (node.parentElement.querySelector('ul') !== null) {
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
    };

    const observeDOMChanges = () => {
        if (!rootRef.current) return;

        const observer = new MutationObserver((mutations) => {
            // Check whether any new ul elements have been added
            const hasNewUL = mutations.some(mutation => 
                Array.from(mutation.addedNodes).some(node => 
                    node.nodeName === 'UL'
                )
            );

            if (hasNewUL) {
                observer.disconnect();
                handleDOMOperations();
            }
        });

        observer.observe(rootRef.current, {
            childList: true,
            subtree: true
        });
    };


    const updateTreeData = async (list: DataNode[] | null, key: React.Key, children: DataNode[]): Promise<DataNode[]> => {
        if (!list) return [];
        
        const updatedList = await Promise.all(list.map(async (node) => {
            if (node.key === key) {
                return {
                    ...node,
                    children
                };
            }
            if (node.children) {
                return {
                    ...node,
                    children: await updateTreeData(node.children, key, children)
                };
            }
            return node;
        }));
        
        return updatedList;
    }

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

    function handleCollapse(e: React.MouseEvent<HTMLElement>) {

        if ( disableCollapse ) return;

        e.preventDefault();
        e.stopPropagation();
        
        const hyperlink = e.currentTarget;
        const url = hyperlink.dataset.href;
        const subElement = getNextSiblings(hyperlink, 'ul');
        const asyncReqReady = hyperlink.classList.contains('async-ready');

        // loading
        //=====================       
        if ( asyncReqReady ) {
            activeClass(hyperlink, 'add', 'loading');
        }

        
        // calback
        //=====================
        const fetchFunc: UpdateDataFunction = asyncReqReady ? (typeof initDefaultValue !== 'function' ? async () => void(0) : initDefaultValue) : async () => void(0);
      
        const optiondata = typeof hyperlink.dataset.optiondata !== 'undefined' ? hyperlink.dataset.optiondata : '{}';
        onCollapse?.(e, {
            key: hyperlink.dataset.key as string,
            slug: hyperlink.dataset.slug as string,
            link: hyperlink.dataset.link as string,
            optiondata: optiondata as string
        }, fetchFunc, JSON.parse(optiondata as string).isExpanded);


        // update expanded status
        //=====================
        const isExpanded = hyperlink.getAttribute('aria-expanded') === 'true';
        setExpandedMap(prev => ({
            ...prev,
            [hyperlink.dataset.key as string]: !isExpanded
        }));


        // hide child if expandedLink doesn't exist, on the contrary
        //=====================
        if ( hyperlink.classList.contains('loading') ) return;

        if ( hyperlink.getAttribute('aria-expanded') === 'false' || hyperlink.getAttribute('aria-expanded') === null ) {


            //Hide all other siblings of the selected <ul>
            if (alternateCollapse) {
                [].slice.call(rootRef.current.firstChild.children).forEach(function (li: any) {

                    activeClass(li, 'remove');

                    const _li = li.firstChild;
                    activeClass(_li, 'remove');
                    _li.setAttribute('aria-expanded', false);

                    [].slice.call(getNextSiblings(_li, 'ul')).forEach(function (element: any) {
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


    async function initDefaultValue(key: React.Key | null, fetch: FetchConfig | null = null, firstRender: boolean = false, retrieveData: ListSearchDataConfig[] = []) {
        
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

            return data;
        }

        if (fetch && typeof fetch.fetchFuncAsync === 'object') {

            let _newData: DataNode[] | null = list;

            //
            const _params: any[] = fetch.fetchFuncMethodParams || [];
            const response: any = await fetchData(fetch, (_params).join(','));
            const _childrenData: DataNode[] = response;

            
            if ( _childrenData.length > 0 ) {
                // add children to node
                _newData = await updateTreeData(list, key ? key : '', _childrenData);

                // set its childrenAsync property to false and active to true since we've successfully loaded its children
                if (key) {
                    const findAndUpdateNode = (nodes: DataNode[]) => {
                        for (let node of nodes) {
                            if (node.key === key) {
                                node.childrenAsync = false;
                                node.active = true;  // Add this line to set active to true
                                break;
                            }
                            if (node.children) {
                                findAndUpdateNode(node.children);
                            }
                        }
                    };
                    findAndUpdateNode(_newData);
                }

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

            // dom init
            observeDOMChanges();
            

            return _newData;
        }
        
    }



    function filterRetriveData(flatData: DataNode[], retrieveData: ListSearchDataConfig[]) {
        return flatData.filter((item: any) => {
            return retrieveData.map((v: any) => v.title?.toLowerCase()).includes(item.title?.toLowerCase())
        });
    }

    useEffect(() => {
        initDefaultValue(null, null, true, retrieveData);
        setOrginalData(data);
    }, [data, retrieveData]);


   
    return (
        <>

            <nav tabIndex={0} id={idRes} ref={rootRef} className={treeClassName ? `tree-diagram__wrapper ${treeClassName} ${expandClassName}` : `tree-diagram__wrapper tree-diagram-default ${expandClassName}`}>
                
                
                <TreeList
                    rootNode={rootRef}
                    checkboxNamePrefix={idRes}
                    alternateCollapse={alternateCollapse}
                    renderOption={renderOption}
                    first={true}
                    disableArrow={disableArrow}
                    disableCollapse={disableCollapse}
                    arrow={arrow}
                    arrowIcons={arrowIcons}
                    orginalData={orginalData}
                    data={Array.isArray(retrieveData) && retrieveData.length > 0 ? filterRetriveData(flatList, retrieveData) : list} 
                    childClassName={childClassName || 'tree-diagram-default-nav'} 
                    onSelect={onSelect} 
                    onDoubleSelect={onDoubleSelect}
                    onCheck={onCheck}
                    evInitValue={initDefaultValue}
                    updateCheckedPrint={setCheckedPrint}
                    getCheckedPrint={checkedPrint}
                    updategetCheckedData={setCheckedData}
                    getCheckedData={checkedData}

                    // Collapse
                    expandedMap={expandedMap}
                    onCollapse={handleCollapse}
                    
                />
                
            </nav>

        </>
    )
};

export default Tree;