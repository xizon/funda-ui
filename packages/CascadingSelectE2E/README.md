# Cascading Select End-to-end


## API

### Cascading Select End-to-end
```js
import CascadingSelectE2E from 'react-pure-bootstrap/CascadingSelectE2E';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. |
| `columnTitle` | Array  | - | Set headers for each column group. Such as <br /> `['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4']` |
| `triggerClassName` | string  | - | Specify a class for your trigger |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |
| `depth` | number  | 100 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. |
| `displayResult` | boolean  | false | Whether to show breadcrumb result. |
| `displayResultArrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of breadcrumb result |
| `controlArrow` | ReactNode  | `<svg width="10px" height="10px" viewBox="0 -4.5 20 20"><g stroke="none" stroke-width="1" fill="none"><g transform="translate(-180.000000, -6684.000000)" fill="#a5a5a5"><g transform="translate(56.000000, 160.000000)"><path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39" id="arrow_down-[#339]"></path></g></g></g></svg>` | Set an arrow of control |
| `loader` | ReactNode  | - | Set a loader component to show while the component waits for the next load of data. e.g. `<span>Loading...</span>` |
| `valueType` | `label` \| `value` | `label` | Set whether to use "label" or "value" for the value of this form, they will be separated by commas, such as <br />`Text 1,Text 1_1,Text 1_1_1` or `1,1_1,1_1_1` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (an array) |
| `fetchArray` | Array  | - | Set multiple requests, it should be an array |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns five callback values. <br /> <ol><li>The one is the input control</li><li>The second parameter is the current option data (a JSON object)</li><li>The third parameter is the index of the current column group</li><li>The fourth parameter indicates the current column depth</li><li>The last is value of the current control.</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |



Array configuration properties of the `fetchArray`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',0,'$AUTO']` <br /><blockquote>There should be at least one parameter which is the query string. <br />`$AUTO` identifies the ID of the automatic query, and its value depends on the `id` attribute of the item.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |



## Examples

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.



```js
import React from "react";
import CascadingSelectE2E from 'react-pure-bootstrap/CascadingSelectE2E';
import axios from 'axios';


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
                "item_name": "Title 2",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 4",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id === parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }


    async getListUseAxios(searchStr = '', limit = 0) {
        const response = await axios.get(`https://api?s=${searchStr}&limit=${limit}`);
        return response;
    }

}

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>

            <CascadingSelectE2E
                value=""
                name="name"
                label="String"
                depth={100}
                displayResult={true}
                valueType="label"
                loader={<><span className="position-absolute top-0 start-0 mt-2 mx-2">>Loading...</span></>}
                triggerClassName="d-block w-100"
                triggerContent={<>
                    <a href="#">Select</a>
                </>}
                fetchArray={[
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListFirst",
                        "fetchFuncMethodParams": ['', 0, 1],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: any = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    name: placesMap[key][0],
                                    type: placesMap[key][1]
                                });
                            }

                            return data;

                        }
                    },
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListSecond",
                        "fetchFuncMethodParams": ['', 0, '$AUTO'],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: any = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    name: placesMap[key][0],
                                    type: placesMap[key][1]
                                });
                            }


                            return data;
                        }
                    },
                    {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getListSecond",
                        "fetchFuncMethodParams": ['', 0, '$AUTO'],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: any = {};
                            for (const val of res) {
                                placesMap[val.item_code] = [val.item_name, val.item_type];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    id: key,
                                    name: placesMap[key][0],
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
                onChange={(input, currentData, index, depth, value) => {
                    console.log('currentData: ', currentData);

                    const $p = document.querySelector('[name="province"]'),
                          $c = document.querySelector('[name="city"]'),
                          $d = document.querySelector('[name="district"]'),
                          $s = document.querySelector('[name="street"]');

                
                    if ( depth < 1 ) $c.value = '';
                    if ( depth < 2 ) $d.value = '';
                    if ( depth < 3 ) $s.value = '';



                    if ( depth === 0 ) $p.value = currentData.name;
                    if ( depth === 1 ) $c.value = currentData.name;
                    if ( depth === 2 ) $d.value = currentData.name;
                    if ( depth === 3 ) $s.value = currentData.name;
                }}
            />

            <input name="province" type="hidden" value="" />
            <input name="city" type="hidden" value="" />
            <input name="district" type="hidden" value="" />
            <input name="street" type="hidden" value="" />





        </>
    );
}
```



