# Multiple Checkboxes



## General

```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('[value-1][value-3]');
    // const [val, setVal] = useState('[Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                    /*
                    <input type="checkbox" ... value="value-1">,
                    ['value-3', 'value-2'],
                    '[value-3][value-2]',
                     ['Option 3', '<del style=color:red>deprecate</del>Option 2'],
                    '[Option 3][<del style=color:red>deprecate</del>Option 2]',
                    {"label": "Option 1","value": "value-1"}
                    */
                }}
            />



    
        </>
    );
}
```



## No spacing

```js
import React from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {


    return (
        <>

            <MultipleCheckboxes
                ...
                wrapperClassName="position-relative"
                ...
            />

             <MultipleCheckboxes
                ...
                wrapperClassName=""
                ...
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
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {


    return (
        <>

            <MultipleCheckboxes
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

## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.



```js
import React, { useState, useMemo } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


// DO NOT move `useMemo` to component
function MemoMultipleCheckboxes(props: any) {
    const {val, callback} = props;
    return useMemo(() => {
        return <MultipleCheckboxes
                wrapperClassName=""
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    callback(valueStr);
                }}
            />
    }, []);
}

export default () => {

    const [myCheckboxes, setMyCheckboxes] = useState('[Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MemoMultipleCheckboxes 
                val={myCheckboxes}
                name="name"
                callback={setMyCheckboxes} 
            />
            <p>{myCheckboxes}</p>
            
            

    
        </>
    );
}

```



## The Option Group element

Specify the content in the `optgroup` attribute of `options`.


```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('[value-1][value-3]');

    return (
        <>
          
            <MultipleCheckboxes 
                groupWrapperClassName="border rounded p-2 mb-2"
                groupLabelClassName="fw-bold mb-2"
                name="name"
                value={val}
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
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                }}
            />

    
        </>
    );
}
```





## Asynchronous Usage via HTTP Request

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
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

    const [val, setVal] = useState('[bar2]');

    return (
        <>

            <MultipleCheckboxes 
                name="name"
                value={val}
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
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                }}
            />


        </>
    );
}
```




## Do some actions when Radio rendering is complete


```js
import React from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

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
            <MultipleCheckboxes
                name="name"
                value="[value-2]"
                options={[
                    {"label": "Option 1","value": "value-1","attr1": false},
                    {"label": "Option 2","value": "value-2","attr1": true},
                ]}
                onLoad={(data: any, defaultVal: any, root: any) => {
                              
                    const _flatData = optionsFlat(data);
                
                    if (root) {
                        [].slice.call(root.querySelectorAll(`[type="checkbox"]`)).forEach((el: HTMLInputElement, i:number) => {
                            if (defaultVal.includes(_flatData[i].value) && _flatData[i].attr1) {
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


## Filter results individually

Sometimes `onChange` requires a new result to satisfy the business. Please do not use `onChange` to modify the `value` in real time, because it may cause incorrect rendering.

```js
import React, { useId, useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const uniqueID = useId();
    const [val, setVal] = useState('[Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {


                    // Exclude the value of "Option 3"
                    const _input: any = document.getElementById(`checkboxes-res-${uniqueID}`);
                    if (_input !== null) {
                        _input.value = value.filter((v: any) => v != 'value-3').map((v: any) => `[${v}]`).join('');
                    }
                    
                }}
            />

            <input
                tabIndex={-1}
                type="text"
                id={`checkboxes-res-${uniqueID}`}
                name="name-here"
            />


    
        </>
    );
}
```




## Custom option list

Use `onCallbackListItem` to return the desired style of the list.

```js
import React, { useState, useMemo } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {

    const [val, setVal] = useState('[Option 2][Option 4]');  // default value is label value


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


    // Generate custom list of options
    const customMultipleCheckboxesOptionsItemsList = ({
        name,
        groupLabelClassName,
        groupWrapperClassName,
        tableLayoutCellClassName,
        tableLayout,
        dataInit,
        inline,
        selectedItems,
        uniqueID,
        valueBrackets,
        disabled,
        labelRes,
        valRes,
        handleCheckboxChange,
        onChange,
        convertArrToValByBrackets,
        attributes,
    }: {
        name: string | undefined;
        groupLabelClassName: string | undefined;
        groupWrapperClassName: string | undefined;
        tableLayoutCellClassName: string | undefined;
        tableLayout: boolean | undefined;
        dataInit: any[];
        required: boolean | undefined;
        inline: boolean | undefined;
        selectedItems: any;
        uniqueID: string;
        valueBrackets: boolean | undefined;
        disabled: boolean | undefined;
        labelRes: any;
        valRes: any;
        handleCheckboxChange: any;
        onChange: any;
        convertArrToValByBrackets: any;
        attributes: any;
    }) => {

        return Array.isArray(dataInit) ? dataInit.map((item: any, index: number) => {

            const _groupEl = () => {
                return <>
    
                    {/* GROUP LABEL */}
                    <div className={`rmultiple-checkboxes-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                    {/* /GROUP LABEL */}
    
                    {item.optgroup.map((opt: any, optIndex: number) => {
    
                        return <div
                            key={'checkbox' + optIndex}
                            className={`multiple-checkboxes__control form-check ${inline ? 'd-inline-block' : ''} pe-3`}
                            data-index={`${index}-${optIndex}`}
                            data-label={opt.label}
                            data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                            data-value={opt.value}
                            data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                        >
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name={`${name}-checkbox-item`}
                                id={`multiple-checkboxes__control-label-${index}-${optIndex}-${uniqueID}`}
                                data-index={`${index}-${optIndex}`}
                                data-label={opt.label}
                                data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                                data-value={opt.value}
                                data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                data-optiondata={JSON.stringify(opt)}
                                value={opt.value}
                                disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                checked={selectedItems.has(opt.value)}
                                onChange={(e: any) => {
    
                                    handleCheckboxChange(opt.value)
    
                                    const newSelectedItems = new Set(selectedItems);
                                    if (!selectedItems.has(opt.value)) {
                                        newSelectedItems.add(opt.value);
                                    } else {
                                        newSelectedItems.delete(opt.value);
                                    }
    
    
                                    //
                                    const _res = valRes(newSelectedItems);
                                    const _resLabel = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                                    const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);
    
    
                                    //
                                    let curData: any;
    
                                    // if group
                                    if (typeof item.optgroup !== 'undefined') {
                                        const groupItemIndex = optIndex;
                                        const groupOpts: any = item.optgroup;
    
                                        curData = groupOpts[groupItemIndex];
                                    } else {
                                        curData = item;
                                    }
    
                                    onChange?.(e.target, _res, valueBrackets ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, valueBrackets ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), curData, _resDataCollection);
    
    
                                }}
                                {...attributes}
    
                            />
    
                            {labelRes(typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel, `multiple-checkboxes__control-label-${index}-${optIndex}-${uniqueID}`)}
    
                        </div>;
    
                    })}
                </>;
            };
    
            const _normalEl = () => {
                return <>
    
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={`${name}-checkbox-item`}
                        id={`multiple-checkboxes__control-label-${index}-${uniqueID}`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        data-optiondata={JSON.stringify(item)}
                        value={item.value}
                        disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                        checked={selectedItems.has(item.value)}
                        onChange={(e: any) => {
    
    
                            handleCheckboxChange(item.value)
    
                            const newSelectedItems = new Set(selectedItems);
                            if (!selectedItems.has(item.value)) {
                                newSelectedItems.add(item.value);
                            } else {
                                newSelectedItems.delete(item.value);
                            }
    
    
                            //
                            const _res = valRes(newSelectedItems);
                            const _resLabel = dataInit.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                            const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);
    
    
                            onChange?.(e.target, _res, valueBrackets ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, valueBrackets ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), item, _resDataCollection);
    
    
                        }}
                        {...attributes}
    
                    />
    
                    {labelRes(typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel, `multiple-checkboxes__control-label-${index}-${uniqueID}`)}
                </>;
            };
    
            
            if (tableLayout) {
    
                /* TABLE LAYOUT */
                if (typeof item.optgroup !== 'undefined') {
                    return <td 
                        colSpan={1} 
                        className={`multiple-checkboxes-group__wrapper ${groupWrapperClassName || ''} ${tableLayoutCellClassName || ''}`} 
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </td>;
                } else {
    
                    return <td colSpan={1}
                        className={`multiple-checkboxes__control form-check ${inline ? 'd-inline-block' : ''} pe-3 ${tableLayoutCellClassName || ''}`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        key={'checkbox' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </td>;
    
                }
                /* /TABLE LAYOUT */
            } else {
    
                if (typeof item.optgroup !== 'undefined') {
                    return <div 
                        className={`multiple-checkboxes-group__wrapper ${groupWrapperClassName || ''}`} 
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </div>;
                } else {
    
                    return <div
                        className={`multiple-checkboxes__control form-check ${inline ? 'd-inline-block' : ''} pe-3`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        key={'checkbox' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </div>;
    
                }
    
            }
    
        }) : null

    };

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(value);
                }}
                onCallbackListItem={customMultipleCheckboxesOptionsItemsList}
            />
         
            
        </>
    );
}

```






## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useMemo, useState, useRef } from 'react';
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

// DO NOT move `useMemo` to component
function MemoMultipleCheckboxes(props: any) {
    const {val, callback, contentRef} = props;
    return useMemo(() => {
        return <MultipleCheckboxes
                contentRef={contentRef}
                wrapperClassName=""
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    callback(valueStr);
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
                if (conRef.current) conRef.current.set('[value-1][value-2]', () => {
                    setUserContent('[value-1][value-2]');
                });

            }}>Change value</a>
            <p>{userContent}</p>


            <MemoMultipleCheckboxes 
                contentRef={conRef}
                val="[value-3]"
                name="name"
                callback={setUserContent} 
            />
            
            

        </>
    )
}
```




## Deploy components using pop-ups for safe rendering

If you use the pop-up window, such as `funda-ui/ModalDialog`, the component may not be selected for the first time, and you need to use `useMemo()` to solve it.


```js
import React, { useMemo, useState, useRef } from 'react';
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
import ModalDialog from 'funda-ui/ModalDialog';

// DO NOT move `useMemo` to component
function MemoMultipleCheckboxes(props: any) {
    const {val, contentRef, callback} = props;

    // !!! Please do not set "options" as dependent
    return useMemo(() => {
        return <MultipleCheckboxes
                contentRef={contentRef}
                wrapperClassName=""
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    callback(valueStr);
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
                <MemoMultipleCheckboxes
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

### Multiple Checkboxes
```js
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-check-input` | The class name of the control. | - |
| `tableLayout` | boolean | false | Use **\<table\>** HTML tag to display options. | - |
| `tableLayoutClassName` | string | - | The class name of HTML tag `<table>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `tableLayoutCellClassName` | string | - | The class name of HTML tag `<td>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `groupWrapperClassName` | string | - | The class name of the radio group wrapper. | - |
| `groupLabelClassName` | string | - | The class name of the radio group label. | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `inline` | boolean | true | If true the group checkboxes or radios are on the same horizontal row. | - |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3"}]`| - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> | - |
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
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns seven callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The fourth is the current label text (**Array**)</li><li>The fifth is the current string label text (**String**)</li><li>The sixth is the current value (**JSON Object**)</li><li>The last is the value collection (**JSON Object Array**)</li></ol>  | - |
| `onCallbackListItem` | function  | - | This parameter allows developers to customize the options of ReactNode, which returns a JSON object containing system variables (**JSON Object**). Please refer to the [Custom option list](#custom-option-list) for how to use it. | - |




It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. | ✅ |
| `optgroup` | array | - | Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0"},{"label":"Group 1","value":"","optgroup":[{"label":"Option 1","value":"value-1"},{"label":"Option 2","value":"value-2"}]}]` | - |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |

