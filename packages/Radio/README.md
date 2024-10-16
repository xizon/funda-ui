# Radio


## General

```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, currentData, currentIndex);
    }

    return (
        <>

            <Radio
                value="value-2"
                name="name1"
                options={[
                    {"label": "Option 1","value": "value-1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                    {"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}
                ]}
                onChange={handleChange}
            />

            <hr />



            <Radio
                inline={true}
                value="Option 3"  // default value is label value
                name="name2"
                options={[
                    {"label": "Option 1","value": "value-1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                    {"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}
                ]}
                onChange={handleChange}
            />


            <Radio
                inline={true}
                value="value-2"
                name="name3"
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={handleChange}
            />

                          
        </>
    );
}
```



## No spacing

```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {


    return (
        <>

            <Radio
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Radio
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Use the object as the default 

You can specify an object as the default.


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    return (
        <>         
           
            <Radio
                value={{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"}}
                name="name1"
                options={[
                    {"label": "Option 1","value": "value-1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                    {"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}
                ]}
            />
        </>
    );
}
```



## Use table to display options

The options will be displayed using \<table\> tag.

`styles.scss`:
```css
.app-table-nested {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    td {
        display: table-cell !important;
        border: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: .5rem .5rem !important;

        label,
        .d-inline-block {
            display: contents !important;
        }

        [type="checkbox"],
        [type="radio"] {
            float: none;
            margin-left: 0;
            margin-right: .5rem;
        }

    }
    tr td:last-child {
        border-color: transparent !important;
    }
}
```


`index.tsx`:
```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {


    return (
        <>

            <Radio
                ...
                tableLayout
                tableLayoutClassName="table table-bordered mb-0 app-table-nested"
                tableLayoutCellClassName=""
                ...
            />

        </>
    );
}
```



## The Option Group element

Specify the content in the `optgroup` attribute of `options`.


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, currentData, currentIndex);
    }

    return (
        <>         

            <Radio
                inline={true}
                value="value-2"
                name="name"
                groupWrapperClassName="border rounded p-2 mb-2"
                groupLabelClassName="fw-bold mb-2"
                options={[
                    { "label": "Option 0", "value": "value-0" },
                    {
                        "label": "Group 1", "value": "", "optgroup": [
                            { "label": "Option 1", "value": "value-1" },
                            { "label": "Option 2", "value": "value-2" }
                        ]
                    },
                    {
                        "label": "Group 2", "value": "", "optgroup": [
                            { "label": "Option 3", "value": "value-3" },
                            { "label": "Option 4", "value": "value-4" },
                            { "label": "Option 5", "value": "value-5" }
                        ]
                    }
                ]}
                onChange={handleChange}
            />

        </>
    );
}
```



## Append additional controls

Specify the content in the `extends` attribute of `options`.


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, currentData, currentIndex);
    }

    return (
        <>           

            <Radio
                inline={true}
                value="value-2"
                name="name"
                label="String"
                options={[
                    {"label": "Option 1","value": "value-1","extends":<><div className="ms-3" id={`radio-1`}></div></>},
                    {"label": "Option 2","value": "value-2","extends":<><div className="ms-3" id={`radio-2`}><input type="color" /></div></>},
                ]}
                onChange={handleChange}
            />


        </>
    );
}
```



## Asynchronous Usage


```js
import React, { useState } from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    const [val, setVal] = useState<string>('value-2');
    const [opt, setOpt] = useState<any>([
        {"label": "Option 1","value": "value-1"},
        {"label": "Option 2","value": "value-2"},
        {"label": "Option 3","value": "value-3"}
    ]);

    
   
    function handleClick1(e: any) {
        e.preventDefault();
        setVal('value-3');
    }

    function handleClick2(e: any) {
        e.preventDefault();
        setOpt([
            {"label": "Custom Option 1","value": "value-1_1"},
            {"label": "Custom Option 2","value": "value-2_1"}
        ]);
    }

    return (
        <>

            <a href="#" onClick={handleClick1}>change value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#" onClick={handleClick2}>change options</a>
            

            <Radio
                inline={true}
                value={val}
                name="name"
                options={JSON.stringify(opt)}
            />
                   
            
        </>
    )
}
```




## Asynchronous Usage via HTTP Request

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import Radio from 'funda-ui/Radio';
import axios from 'axios';

class DataService {
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'foo', item_code: 'bar'},
                {item_name: 'foo2', item_code: 'bar2'},
                {item_name: 'foo3', item_code: 'bar3'}
            ]
        };
    }



    async getListUseAxios(searchStr = '', limit = 0) {
        let _data = null;
        const res = await axios.get(`https://api`, {
            params: {
                s: searchStr,
                limit: limit
            },
            headers: {
                'Authorization': 'Bearer xxxx-xxxxxxxx-xxxxxxxx'
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if (res && res.status == 200) _data = res.data;


        // result
        if (_data === null) {
            return {
                code: 0,
                message: 'OK',
                data: []
            };
        } else {
            return {
                code: 0,
                message: 'OK',
                data: _data
            };
        }

    }

    	
}


export default () => {

    function handleChange(e, val, data) {
        console.log(e.target, val, data);
    }

    return (
        <>
            <Radio
                inline={true}
                value="bar2"
                name="name"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item, index) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            customArg1: index
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","customArg1": 0},
                        {"label": "foo2","value": "bar2","customArg1": 1},
                        {"label": "foo3","value": "bar3","customArg1": 2}
                    ]  
                    */

                    return formattedData;
                }}
                onFetch={(res) => {
                    console.log('onFetch: ', res);

                }}
            />
              


        </>
    );
}
```


## Do some actions when Radio rendering is complete


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {


    const optionsFlat = (allData: any[]) => {

        const flatItems: any[] = [];

        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.optgroup.forEach((opt: any) => {
                    flatItems.push(opt);
                });
            } else {
                flatItems.push(item);
            }
        });

        return flatItems;
    };


    return (
        <>           
            <Radio
                inline={true}
                value="value-2"
                name="name"
                data-custom-param="123"
                options={[
                    {"label": "Option 1","value": "value-1","attr1": false,"extends":<><div className="ms-3" id={`radio-1`}></div></>},
                    {"label": "Option 2","value": "value-2","attr1": true,"extends":<><div className="ms-3" id={`radio-2`}><input type="color" /></div></>},
                ]}
                onLoad={(comData: any, defaultVal: any, root: any) => {

                    const _flatData = optionsFlat(comData);
                    const _curVal = _flatData.filter((v: any) => v.value == defaultVal)[0];
                    const _curValIndex = _flatData.findIndex((v: any) => v.value == defaultVal);

                    const _allData = JSON.parse(root.dataset.controlsCusAttrs);
                    const _curItemData = _allData[_curValIndex];

                    if (typeof _curItemData !== 'undefined') {
                        console.log(_curItemData);
                    }

                    if (root) {
                        [].slice.call(root.querySelectorAll(`[type="radio"]`)).forEach((el: HTMLInputElement, i:number) => {
                            if (_flatData[i].value === defaultVal && _flatData[i].attr1) {
                                (el.closest('.form-check') as HTMLDivElement).style.backgroundColor = 'red';
                            } else {
                                (el.closest('.form-check') as HTMLDivElement).style.backgroundColor = 'yellow';
                            }
        
                        });
                    }
                    
                }}
            />

        </>
    );
}
```





## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.



```js
import React, { useState, useMemo } from "react";
import Radio from 'funda-ui/Radio';


// DO NOT move `useMemo` to component
function MemoRadio(props: any) {
    const {val, callback} = props;

    // !!! Please do not set "options" as dependent
    return useMemo(() => {
        return <Radio
                inline={true}
                value={val}
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={(e: any, val: string, currentData: any, currentIndex: number) => {
                    callback(val);
                }}
            />
    }, []);
}

export default () => {

    const [myRadio, setMyRadio] = useState('value-3');

    return (
        <>
          
            <MemoRadio 
                val={myRadio} 
                name="name"
                callback={setMyRadio} 
            />
            
            
        </>
    );
}

```





## Custom option list

Use `onCallbackListItem` to return the desired style of the list.

```js
import React, { useState, useMemo } from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    const [myRadio, setMyRadio] = useState('value-3');



    // Generate custom list of options
    const customRadioOptionsItemsList = ({
        name,
        groupLabelClassName,
        itemSelectedClassName,
        groupWrapperClassName,
        tableLayoutCellClassName,
        tableLayout,
        dataInit,
        required,
        inline,
        controlValue,
        tabIndex,
        uniqueID,
        disabled,
        labelRes,
        handleChange,
        onClick,
        handleFocus,
        handleBlur,
        attributes,
        style,
    }: {
        name: string | undefined;
        groupLabelClassName: string | undefined;
        itemSelectedClassName: string | undefined;
        groupWrapperClassName: string | undefined;
        tableLayoutCellClassName: string | undefined;
        tableLayout: boolean | undefined;
        dataInit: any[];
        required: boolean | undefined;
        inline: boolean | undefined;
        controlValue: string | undefined;
        tabIndex: number | undefined;
        uniqueID: string;
        disabled: boolean | undefined;
        labelRes: any;
        handleChange: any;
        onClick: any;
        handleFocus: any;
        handleBlur: any;
        attributes: any;
        style: React.CSSProperties | undefined;
    }) => {


        return Array.isArray(dataInit) ? dataInit.map((item: any, index: number) => {
            const requiredVal = index === 0 ? required || null : null;

            const _groupEl = () => {
                return <>
                    {/* GROUP LABEL */}
                    <div className={`radio-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                    {/* /GROUP LABEL */}

                    {item.optgroup.map((opt: any, optIndex: number) => {

                        return <div key={'option-' + optIndex} className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == opt.value ? (itemSelectedClassName || 'item-selected') : ''}`}>
                            <div className="d-inline-block">
                                <input
                                    tabIndex={tabIndex || 0}
                                    type="radio"
                                    className="form-check-input"
                                    id={`field-${uniqueID}-${index}-${optIndex}`}
                                    name={name}
                                    data-index={`${index}-${optIndex}`}
                                    data-label={opt.label}
                                    data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                                    data-value={opt.value}
                                    data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                    data-optiondata={JSON.stringify(opt)}
                                    value={`${opt.value}`}
                                    required={requiredVal}
                                    disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                    onChange={handleChange}
                                    onClick={typeof (onClick) === 'function' ? handleChange : () => void (0)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    checked={controlValue == opt.value}   // component status will not change if defaultChecked is used
                                    style={style}
                                    {...attributes}
                                />
                                {labelRes(typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel, `field-${uniqueID}-${index}-${optIndex}`)}

                            </div>
                            <div className="d-inline-block">
                                <div className="form-control-extends__wrapper">{typeof opt.extends !== 'undefined' ? <>{opt.extends}</> : null}</div>
                            </div>
                        </div>;

                    })}

                </>;
            };

            const _normalEl = () => {
                return <>
                    <div className="d-inline-block">
                        <input
                            tabIndex={tabIndex || 0}
                            type="radio"
                            className="form-check-input"
                            id={`field-${uniqueID}-${index}`}
                            name={name}
                            data-index={index}
                            data-label={item.label}
                            data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                            data-value={item.value}
                            data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                            data-optiondata={JSON.stringify(item)}
                            value={`${item.value}`}
                            required={requiredVal}
                            disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                            onChange={handleChange}
                            onClick={typeof (onClick) === 'function' ? handleChange : () => void (0)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            checked={controlValue == item.value}   // component status will not change if defaultChecked is used
                            style={style}
                            {...attributes}
                        />
                        <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`} dangerouslySetInnerHTML={{
                            __html: `${typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel}`
                        }}></label>
                    </div>
                    <div className="d-inline-block">
                        <div className="form-control-extends__wrapper">{typeof item.extends !== 'undefined' ? <>{item.extends}</> : null}</div>
                    </div>

                </>;
            };


            if (tableLayout) {

                /* TABLE LAYOUT */
                if (typeof item.optgroup !== 'undefined') {
                    return <td
                        colSpan={1}
                        className={`radio-group__wrapper ${groupWrapperClassName || ''} ${tableLayoutCellClassName || ''}`}
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </td>;
                } else {

                    return <td
                        colSpan={1}
                        className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == item.value ? (itemSelectedClassName || 'item-selected') : ''} ${tableLayoutCellClassName || ''}`}
                        key={'option-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </td>;
                }
                /* /TABLE LAYOUT */
            } else {
                if (typeof item.optgroup !== 'undefined') {
                    return <div
                        className={`radio-group__wrapper ${groupWrapperClassName || ''}`}
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </div>;
                } else {

                    return <div
                        className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == item.value ? (itemSelectedClassName || 'item-selected') : ''}`}
                        key={'option-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </div>;
                }

            }



        }) : null;
    };

    return (
        <>
  
            <Radio
                inline={true}
                val={myRadio}
                name="name"
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={(e: any, val: string, currentData: any, currentIndex: number) => {
                    console.log(val);
                }}
                onCallbackListItem={customRadioOptionsItemsList}
            />
            
            
        </>
    );
}

```




## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useMemo, useState, useRef } from 'react';
import Radio from 'funda-ui/Radio';

// DO NOT move `useMemo` to component
function MemoRadio(props: any) {
    const {val, contentRef, callback} = props;

    // !!! Please do not set "options" as dependent
    return useMemo(() => {
        return <Radio
                contentRef={contentRef}
                inline={true}
                value={val}
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={(e: any, val: string, currentData: any, currentIndex: number) => {
                    callback(val);
                }}
            />
    }, []);
}

export default () => {


    const conRef = useRef<any>(null);
    const [userContent, setUserContent] = useState<string>('');

    return (


        <>
      
            <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (conRef.current) conRef.current.clear(() => {
                    setUserContent('')
                });
            }}>Clean</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (conRef.current) conRef.current.set('value-1', () => {
                    setUserContent('value-1');
                });
                
            }}>Change value</a>
            <p>{userContent}</p>



            <MemoRadio
                val={"value-3"}
                name="name"
                callback={setUserContent}
                contentRef={conRef}
            />


        </>
    )
}
```



## Deploy components using pop-ups for safe rendering

If you use the pop-up window, such as `funda-ui/ModalDialog`, the component may not be selected for the first time, and you need to use `useMemo()` to solve it.


```js
import React, { useMemo, useState, useRef } from 'react';
import Radio from 'funda-ui/Radio';
import ModalDialog from 'funda-ui/ModalDialog';

// DO NOT move `useMemo` to component
function MemoRadio(props: any) {
    const {val, contentRef, callback} = props;

    // !!! Please do not set "options" as dependent
    return useMemo(() => {
        return <Radio
                contentRef={contentRef}
                inline={true}
                value={val}
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={(e: any, val: string, currentData: any, currentIndex: number) => {
                    callback(val);
                }}
            />
    }, []);
}

export default () => {


    const conRef = useRef<any>(null);
    const [userContent, setUserContent] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    function handleClick(e: any) {
        e.preventDefault();
        setShow(true);
    }


    return (


        <>
      
           <a href="#" onClick={handleClick}>click here to open</a>
           <small>{userContent}</small>

            <ModalDialog
                show={show}
                heading="Choose a block"
                triggerClassName=""
                triggerContent=""
                onClose={(e) => {
                    setTimeout(() => {
                        setShow(false);
                    }, 350);
                }}
            >
                <MemoRadio
                    contentRef={conRef}
                    name="name"
                    callback={setUserContent}
                />

            </ModalDialog>

            

        </>
    )
}
```


## API

### Radio
```js
import Radio from 'funda-ui/Radio';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return the **Map** collection of all controls.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-check-input` | The class name of the control. | - |
| `groupWrapperClassName` | string | - | The class name of the radio group wrapper. | - |
| `groupLabelClassName` | string | - | The class name of the radio group label. | - |
| `itemSelectedClassName` | string | `item-selected` | The class name of the item selected. | - |
| `tableLayout` | boolean | false | Use **\<table\>** HTML tag to display options. | - |
| `tableLayoutClassName` | string | - | The class name of HTML tag `<table>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `tableLayoutCellClassName` | string | - | The class name of HTML tag `<td>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `inline` | boolean | false| If true the group checkboxes or radios are on the same horizontal row. | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}]`<blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote> <br /><blockquote>The label string supports html tags</blockquote>| - |
| `defaultValue` | string \| JSON Object | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. <blockquote>You can specify an object as the default. such as `{"label":"Option 0","value":"value-0","queryString":""}`</blockquote> | - |
| `value` | string \| JSON Object | - | Set a default value for this control. <blockquote>You can specify an object as the default. such as `{"label":"Option 0","value":"value-0","queryString":""}`</blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the passed data （**Array**）</li><li>The second is the default value (**String** \| **undefined**)</li><li> The third is the component wrapper (**HTMLDivElement**)</li></ol> | - |
| `onClick` | function  | - | Call a function when the value of an HTML element is clicked. It returns four callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the current value (**String**)</li><li>The third is the data (Exposes the JSON format data) about the option.  (**JSON Object**)</li><li>The last is the current index number  (**Number**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the current value (**String**)</li><li>The third is the data (Exposes the JSON format data) about the option.  (**JSON Object**)</li><li>The last is the current index number  (**Number**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns only one callback value which is the Control Event (**Event**) | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**) | - |
| `onCallbackListItem` | function  | - | This parameter allows developers to customize the options of ReactNode, which returns a JSON object containing system variables (**JSON Object**). Please refer to the [Custom option list](#custom-option-list) for how to use it. | - |



It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.



---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags.</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `optgroup` | array | - | Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0"},{"label":"Group 1","value":"","optgroup":[{"label":"Option 1","value":"value-1"},{"label":"Option 2","value":"value-2"}]}]` | - |
| `extends` | ReactNode | - | Append additional content to the end of the Control Event. | - |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |


### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `label`, `value`, `listItemLabel`, `extends` and `disabled`  are attributes used by the system, and other attributes can be added freely


