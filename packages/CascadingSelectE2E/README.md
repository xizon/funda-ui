# Cascading Select End-to-end



## General

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.



```js
import React from "react";
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';
import axios from 'axios';

// component styles
import 'funda-ui/CascadingSelectE2E/index.css';


class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            },
            {
                "parent_id": 0,
                "item_code": 999,
                "item_name": "No item fetch",
                "item_type": "none"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }



    // `getListThird()` must be a Promise Object
    async getListThird(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 4,
                "item_code": 6,
                "item_name": "Title 6",
                "item_type": "web/ui"
            },
            {
                "parent_id": 4,
                "item_code": 7,
                "item_name": "Title 7",
                "item_type": "web/ui"
            },
            {
                "parent_id": 4,
                "item_code": 8,
                "item_name": "Title 8",
                "item_type": "web/ui"
            },
            {
                "parent_id": 4,
                "item_code": 9,
                "item_name": "Title 9",
                "item_type": "web/ui"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

   
        return {
            code: 0,
            message: 'OK',
            data: res
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

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>

            <CascadingSelectE2E
                value="{Title 2[2]}{Title 5[5]}"
                name="name"
                displayResult={true}
                valueType="label"
                columnTitle={['Heading 1','Heading 2','Heading 3']}
                triggerClassName="d-block w-100"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Select</a>
                </>}
                fetchArray={[
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListFirst",
                        "fetchFuncMethodParams": ['', 0, 1],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: Record<string, unknown[]> = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type, val.item_code];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    queryId: placesMap[key][2],
                                    name: placesMap[key][0],   // The "name" attribute supports HTML tags
                                    type: placesMap[key][1]
                                });
                            }

                            return data;

                        }
                    },
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListSecond",
                        "fetchFuncMethodParams": ['', 0, '$QUERY_ID'],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: Record<string, unknown[]> = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type, val.item_code];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    queryId: placesMap[key][2],
                                    name: placesMap[key][0], // The "name" attribute supports HTML tags
                                    type: placesMap[key][1]
                                });
                            }

                            return data;

                        }
                    },
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListThird",
                        "fetchFuncMethodParams": ['', 0, '$QUERY_ID'],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: Record<string, unknown[]> = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type, val.item_code];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    queryId: placesMap[key][2],
                                    name: placesMap[key][0], // The "name" attribute supports HTML tags
                                    type: placesMap[key][1]
                                });
                            }

                            return data;

                        }
                    }
                ]}
                onFetch={(res, children) => {
                    console.log('onFetch: ', res, children);
                }}
                onChange={(input, currentData, index, depth, value, closeFunc) => {
                    console.log('currentData: ', currentData, value);
                    // currentData ==> {id: '1', queryId: 1, name: 'Title 1', type: 'web', itemDepth: 0} 
                    // value       ==> {0: '{1[1]}', 1: '{Title 1[1]}'}

                    const $p = document.querySelector('[name="province"]'),
                          $c = document.querySelector('[name="city"]');

                
                    if ( depth < 1 ) $c.value = '';



                    if ( depth === 0 ) $p.value = currentData.name;
                    if ( depth === 1 ) $c.value = currentData.name;
                }}
            />

            <input name="province" type="hidden" defaultValue="" />
            <input name="city" type="hidden" defaultValue="" />



        </>
    );
}
```



## No spacing

```js
import React from "react";
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';

// component styles
import 'funda-ui/CascadingSelectE2E/index.css';

export default () => {


    return (
        <>

            <CascadingSelectE2E
                ...
                wrapperClassName="position-relative"
                ...
            />

             <CascadingSelectE2E
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Convert raw data into a tree structure

Set hierarchical categories ( with sub-categories ) to attribute `fetchArray`.

> [!NOTE]
> Since the data of response structures of the two requests are not directly related, the attribute `destroyParentIdMatch` needs to be set to *true*.


```js
import React from "react";
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';

// component styles
import 'funda-ui/CascadingSelectE2E/index.css';



class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        // console.log('searchStr: ', searchStr);
        // console.log("limit: ", limit);
        // console.log("otherParam: ", otherParam);

        const demoData = [
            {

                "parent_id": 0,
                "id": 1,
                "item_name": "Title 1",
                "item_code": 'title-1'
            },
            {
                "parent_id": 0,
                "id": 2,
                "item_name": "Title 2",
                "item_code": 'title-2'
            },
            {
                "parent_id": 0,
                "id": 999,
                "item_name": "No item fetch",
                "item_code": 'no-match'
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, searchId = 0) {

        console.log("searchId: ", searchId);

        let demoData1: any = [
            {
                "parent_id": 0,
                "id": 3,
                "item_name": "Title 3",
                "item_code": 'title-3'
            },
            {
                "parent_id": 0,
                "id": 4,
                "item_name": "Title 4",
                "item_code": 'title-4'
            },
            {
                "parent_id": 4,
                "id": 5,
                "item_name": "Title 5",
                "item_code": 'title-5'
            },
            {
                "parent_id": 5,
                "id": 6,
                "item_name": "Title 6",
                "item_code": 'title-6'
            },
            {
                "parent_id": 0,
                "id": 7,
                "item_name": "Title 7",
                "item_code": 'title-7'
            },
            {
                "parent_id": 5,
                "id": 8,
                "item_name": "Title 8",
                "item_code": 'title-8'
            } 
        ];   


        let demoData2: any = [
            {
                "parent_id": 0,
                "id": 11,
                "item_name": "Title 11",
                "item_code": 'title-11'
            },
            {
                "parent_id": 0,
                "id": 12,
                "item_name": "Title 12",
                "item_code": 'title-12'
            }
        ];   

        let res = [];

        if (searchId == 1) res = demoData1;
        if (searchId == 2) res = demoData2;


        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }

}

export default (props: any) => {


    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr, parentId = '', keyId = 'id', keyParentId = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(item => !item[keyParentId]).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter(item => item[keyParentId] === parentId).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }

    return (
        <>

            <CascadingSelectE2E
                destroyParentIdMatch={true}
                value="{Title 2[2]}{Title 11[11]}"
                name="name"
                displayResult={true}
                valueType="label"
                columnTitle={['Heading 1','Heading 2']}
                fetchArray={[
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListFirst",
                        "fetchFuncMethodParams": ['', 0, 1],
                        "fetchCallback": (res) => {

                            const formattedData = res.map((item: any, i: number) => {
                                return {
                                    id: item.id,
                                    queryId: item.id,
                                    name: item.item_name   // The "name" attribute supports HTML tags
                                }
                            });
                        
                            return formattedData;

                        }
                    },
                    {
                        "hierarchical": true,
                        "indentation": " ",
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListSecond",
                        "fetchFuncMethodParams": ['', 0, '$QUERY_ID'],
                        "fetchCallback": (res) => {

                            const formattedData = res.map((item: any, i: number) => {
                                return {
                                    id: item.id,
                                    parent_id: item.parent_id,
                                    label: item.item_name, // "label" usually uses hierarchical style
                                    value: item.item_code,
                                    queryString: '',

                                    //
                                    queryId: item.id,
                                    name: item.item_name   // The "name" attribute supports HTML tags
                                }
                            });
        
                            const treeData = convertTree(formattedData);
                        
                            return treeData;

                        }
                    }
                ]}
                onChange={(input, currentData, index, depth, value, closeFunc) => {
                    console.log('currentData: ', currentData);

                }}
            />


       
        </>
    );
}
```



## API

### Cascading Select End-to-end
```js
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `popupRef` | React.ForwardedRef | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `extractValueByBraces` | boolean  | true | Whether to use curly braces to save result and initialize default value. | - |
| `destroyParentIdMatch` | boolean  | false | Instead of using `parent_id` of response to match child and parent data (very useful for multiple fetch requests with no directly related fields), this operation will directly use the click event to modify the result. | - |
| `columnTitle` | array  | - | Set headers for each column group. Such as <br /> `['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4']` <blockquote>Support html tags</blockquote> | - |
| `triggerClassName` | string  | - | Specify a class for your trigger | - |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger | - |
| `cleanNodeBtnClassName` | string  | `btn btn-link p-0 m-0 text-decoration-none` | Specify a class for clean node button | - |
| `cleanNodeBtnContent` | ReactNode  | `<svg width="12px" height="12px" viewBox="0 0 16 16"><path fill="inherit" d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg>` | Set a piece of text or HTML code for the clean node button | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `displayResult` | boolean  | false | Whether to show breadcrumb result. | - |
| `displayResultArrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of breadcrumb result | - |
| `controlArrow` | ReactNode  | `<svg width="10px" height="10px" viewBox="0 -4.5 20 20"><g stroke="none" strokeWidth="1" fill="none"><g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5"><g transform="translate(56.000000, 160.000000)"><path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"></path></g></g></g></svg>` | Set an arrow of control | - |
| `loader` | ReactNode  | `<svg height="12px" width="12px" viewBox="0 0 512 512"><g><path fill="inherit" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"/><path fill="inherit" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"/><path fill="inherit" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"/><path fill="inherit" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"/><path fill="inherit" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"/><path fill="inherit" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"/><path fill="inherit" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"/><path fill="inherit" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"/></g></svg>` | Set a loader component to show while the component waits for the next load of data. e.g. `<span><i className="fa fa-spinner fa-spin fa-fw"></i></span>` | - |
| `valueType` | `label` \| `value` | `label` | Set whether to use "label" or "value" for the value of this form, they will be separated by curly braces, such as <br />`{Title 2[2]}{Title 5[5]}` <blockquote>If `extractValueByBraces` is false, the default value will be separated by comma, such as <br />`Title 2[2],Title 5[5]`</blockquote> | - |
| `showCloseBtn` | boolean | false | Whether to display the close button. | - |
| `value` | string | - | Set a default value for this control | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `fetchArray` | array  | - | Set multiple requests, it should be an array | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns six callback values. <br /> <ol><li>The one is the input control (**HTML Element**)</li><li>The second parameter is the current option data (**JSON Object**)</li><li>The third parameter is the index of the current column group (**Number**)</li><li>The fourth parameter indicates the current column depth (**Number**)</li><li>The fifth is value of the current control (**JSON Object**).</li><li>The last is the function of close (**Function**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves a form field. It returns only one callback value which is the Control Event (**Event**)| - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**)| - |



Array configuration properties of the `fetchArray`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',0,'$QUERY_ID']` <br /><blockquote>There should be at least one parameter which is the query string. <br />`$QUERY_ID` identifies the ID of the automatic query, and its value depends on the `id` attribute of the item.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `hierarchical` | boolean  | false | Set hierarchical categories ( with sub-categories ) to attribute `options`. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders, valid when the `hierarchical` is true. | - |
| `doubleIndent` | boolean  | false | Set double indent effect, valid when the `hierarchical` is true. | - |


### Create Callback via `fetchCallback` 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `id`, `queryId`, `name` and `label` are attributes used by the system, and other attributes can be added freely. 

> `label` usually uses hierarchical style. (Valid when the `hierarchical` attribute is configured in `fetchArray`)

> The "name" attribute supports HTML tags



```json
[
    {
        "id": 1,
        "queryId": 1,
        "name": "Text 1",
        "customAttr1": "a1"
    },
    {
        "id": 2,
        "queryId": 1,
        "name": "Text 1_2",
        "customAttr1": "a1"
    },
    ...
]
```
