import React, { useState, useEffect, useRef, useId, memo } from 'react';

import TreeList from './TreeList';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}


interface DataNode {
    key: React.Key;
    title: string;
    link?: string;
    active?: boolean;
    checked?: boolean;
    heading?: string;
    icon?: string;
    slug?: string;
    childrenAsync?: boolean;
    children?: DataNode[];
}

interface fetchConfig {
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
    /** The class name of the tree. */
    treeClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format. */
    data?: any[any];
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
        arrow,
        arrowIcons,
        treeClassName,
        childClassName,
        data,
        onSelect,
        onCollapse,
        onCheck
    } = props;

    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [val, setVal] = useState<DataNode[] | null>(null);
    const [checkedPrint, setCheckedPrint] = useState<any[]>([]);
    const [checkedData, setCheckedData] = useState<any[]>([]);
    const expandClassName = `${showLine ? 'show-line' : ''} ${disableArrow ? 'hide-arrow' : ''} ${lineStyle ? `line--${lineStyle}` : ''} ${checkable ? 'has-checkbox' : ''}`;


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
        

    async function fetchData(fetch: fetchConfig, params: any) {

        if (typeof fetch.fetchFuncAsync === 'object') {
            const response: any = await fetch.fetchFuncAsync[`${fetch.fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

            if ( Array.isArray(_ORGIN_DATA) && _ORGIN_DATA.length > 0 ) {
                // reset data structure
                if (typeof (fetch.fetchCallback) === 'function') {
                    _ORGIN_DATA = fetch.fetchCallback(_ORGIN_DATA);
                }

                // Determine whether the data structure matches
                if ( typeof _ORGIN_DATA[0].title === 'undefined' ) {
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
                checked: item.checked === true
            }, ...prevState]);
            
            if (item.children) {
                initCheckboxesData(item.children);
            }
        });
    }


    function initDefaultValue(key: React.Key | null, fetch: fetchConfig | null = null, firstRender: boolean = false) {

        if ( firstRender ) {
            addKey(data, '', 0);
            setVal(data);

            // Initialize default value of checkboxes 
            if ( checkable ) {
                initCheckboxesVal(data);
                initCheckboxesData(data);
            }

            return;
        }

        if (fetch && typeof fetch.fetchFuncAsync === 'object') {
            //
            const _params: any[] = fetch.fetchFuncMethodParams || [];
            fetchData(fetch, (_params).join(',')).then( (response: any) => {

                const _childrenData: DataNode[] = response;

                if ( _childrenData.length > 0 ) {
                    // add children to node
                    const _newData: DataNode[] = updateTreeData(val, key ? key : '', _childrenData);

                    // update data
                    addKey(_newData, '', 0);
                    setVal(_newData);

                    // Initialize default value of checkboxes 
                    if ( checkable ) {
                        _childrenData.forEach((newitem: any) => {
                            setCheckedData((prevState) => [{
                                key: newitem.key,
                                checked: newitem.checked === true
                            }, ...prevState]);
                        });
                    }

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
                    
                }, 500);

          

            });        
        }
        
    }


    useEffect(() => {
        initDefaultValue(null, null, true);
    }, [data]);

   
    return (
        <>

            <nav tabIndex={0} id={idRes} ref={rootRef} className={treeClassName ? `tree-diagram__wrapper ${treeClassName} ${expandClassName}` : `tree-diagram__wrapper tree-diagram-default ${expandClassName}`}>
                <TreeList 
                    checkboxNamePrefix={idRes}
                    alternateCollapse={alternateCollapse}
                    first={true}
                    disableArrow={disableArrow}
                    arrow={arrow}
                    arrowIcons={arrowIcons}
                    data={val} 
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

export default memo(Tree);