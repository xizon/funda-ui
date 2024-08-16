# Live Search



## General

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import LiveSearch from 'funda-ui/LiveSearch';

// component styles
import 'funda-ui/LiveSearch/index.css';

export default () => {

    return (
        <>
            <LiveSearch
                name="app-livesearch-name"
                label="Food List (Enter the search character)"
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
            />



            <LiveSearch
                name="app-livesearch-name"
                label="Food List (Direct display)"
                hideIcon
                autoShowOptions
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
            />


        </>
    );
}
```


## No spacing

```js
import React from "react";
import LiveSearch from 'funda-ui/LiveSearch';

// component styles
import 'funda-ui/LiveSearch/index.css';

export default () => {


    return (
        <>

            <LiveSearch
                ...
                wrapperClassName="position-relative"
                ...
            />

             <LiveSearch
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```



## Asynchronous loading option

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import LiveSearch from 'funda-ui/LiveSearch';
import axios from 'axios';

// component styles
import 'funda-ui/LiveSearch/index.css';

class DataService {
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);


        if ( searchStr === '------') return {
            code: 0,
            message: 'OK',
            data: []
        };


        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'banana', item_code: 'b', kb_code: 'banana,xiangjiao,xj'},
                {item_name: 'apple', item_code: 'a', kb_code: 'apple,pingguo,pg'},
                {item_name: 'lemon', item_code: 'l', kb_code: 'lemon,ningmeng,nm'},
                {item_name: 'juice', item_code: 'j', kb_code: 'juice,guozhi,gz'},
                {item_name: 'coffee', item_code: 'c', kb_code: 'coffee,kafei,kf'}
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

    return (
        <>
            <LiveSearch
                btnId="app-livesearch-btn"
                name="app-livesearch-name"
                label="Food List (Enter a,b, or c)"
                fetchTrigger={false}
                fetchUpdate={false}
                fetchNoneInfo="No match yet"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item: any, i: number) => {
                        return {
                            label: item.item_name,
                            listItemLabel: `${item.item_name} (No. ${i})`,
                            value: item.item_code,
                            queryString: item.kb_code,
                            disabled: item.item_code === 'j' ? true : false
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {
                            "label": "banana",
                            "listItemLabel": "banana (No. 0)",
                            "value": "b",
                            "queryString": "banana,xiangjiao,xj",
                            "disabled": false
                        },
                        {
                            "label": "apple",
                            "listItemLabel": "apple (No. 1)",
                            "value": "a",
                            "queryString": "apple,pingguo,pg",
                            "disabled": false
                        },
                        {
                            "label": "lemon",
                            "listItemLabel": "lemon (No. 2)",
                            "value": "l",
                            "queryString": "lemon,ningmeng,nm",
                            "disabled": false
                        },
                        {
                            "label": "juice",
                            "listItemLabel": "juice (No. 3)",
                            "value": "j",
                            "queryString": "juice,guozhi,gz",
                            "disabled": true
                        },
                        {
                            "label": "coffee",
                            "listItemLabel": "coffee (No. 4)",
                            "value": "c",
                            "queryString": "coffee,kafei,kf",
                            "disabled": false
                        }
                    ]
                    */

                    return formattedData;
                }}
                onFetch={(res: any[]) => {
                    console.log('onFetch: ', res);

                }}
                onChange={(input: HTMLInputElement, data: any[], selectedData: any) => {
                    console.log('onChange: ', data, selectedData);

                    const changeValue = selectedData !== '' ? selectedData.value : input.value;
                    document.querySelector('[name="app-livesearch-name-v"]').value = changeValue;
                    
                }}
                onBlur={(input: HTMLInputElement) => {
                    console.log('onBlur: ', input);
                }}
            />
            <input
                type="text"
                name="app-livesearch-name-v"
            />
        </>
    );
}
```




## Create a non-retrieval `<input>` that can be input and selected

Proper use of `autoShowOptions` attribute.  `hideIcon` is optional.
                

```js
import React from "react";
import LiveSearch from 'funda-ui/LiveSearch';

// component styles
import 'funda-ui/LiveSearch/index.css';

class DataService {
    
    // `getList()` must be a Promise Object
    async getList() {

  
        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'banana', item_code: 'b', kb_code: 'banana,xiangjiao,xj'},
                {item_name: 'apple', item_code: 'a', kb_code: 'apple,pingguo,pg'},
                {item_name: 'lemon', item_code: 'l', kb_code: 'lemon,ningmeng,nm'},
                {item_name: 'juice', item_code: 'j', kb_code: 'juice,guozhi,gz'},
                {item_name: 'coffee', item_code: 'c', kb_code: 'coffee,kafei,kf'}
            ]
        };
    }

}

export default () => {

    return (
        <>
            <LiveSearch
                btnId="app-livesearch-btn"
                name="app-livesearch-name"
                label="Food List (Enter a,b, or c)"
                hideIcon
                autoShowOptions
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={[]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 

                    return formattedData;
                }}
                onFetch={(res: any[]) => {
                    console.log('onFetch: ', res);
                }}
                onChange={(input: HTMLInputElement, data: any[], selectedData: any) => {
                    console.log('onChange: ',input.value, data, selectedData);

                    const changeValue = selectedData !== '' ? selectedData.value : input.value;
                }}
            />
        </>
    );
}
```



## API

### Live Search
```js
import LiveSearch from 'funda-ui/LiveSearch';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `popupRef` | React.ForwardedRef | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"},{"label": "Option 4","value": "value-4","queryString": "option4","disabled":true}]` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote> <hr /> <blockquote>When the attribute `hierarchical` is true, you need to use a hierarchical structure to pass data, such as: `[{label:"Top level 1",value:'level-1',queryString:""},{label:"Top level 2",value:'level-2',queryString:""},{label:"Top level 3",value:'level-3',queryString:"",children:[{label:"Sub level 3_1",value:'level-3_1',queryString:""},{label:"Sub level 3_2",value:'level-3_2',queryString:"",children:[{label:"Sub level 3_2_1",value:'level-3_2_1',queryString:""}]},{label:"Sub level 3_3",value:'level-3_3',queryString:""}]}]`</blockquote>| - |
| `btnId` | string  | - | ID of the specified button. | - |
| `appearance` | string | - | The overlay style of the control. The optional values are:<br />**corners:**<br />`pill` | - |
| `isSearchInput` | boolean | false | Whether to enable the search input, it will have an clear button | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `value` | string | - | Set a default value for this control | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `autoComplete` | string  | `off` | The autocomplete attribute provides a hint to the user agent specifying how to, or indeed whether to, prefill a form control. | - |
| `autoCapitalize` | string  | `off` | The autocapitalize property of the HTMLElement interface represents the element's capitalization behavior for user input. | - |
| `spellCheck` | boolean  | false | The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors. | - |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `maxLength` | number | - | Defines the maximum number of characters | - |
| `maxLength` | number | - | Defines the maximum number of characters | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `noMatchPopup` | boolean  | true | Pop-up window is not displayed when there is no matching content. If **true**, it is displayed by default. | - |
| `hideIcon` | boolean  | false | Force hiding icons (including icon buttons) | - |
| `icon` | ReactNode  | - | Set the icon of search. <blockquote>Valid when `fetchTrigger` is true.</blockquote> | - |
| `winWidth` | number \| function  | `auto` | Set the container width of options. Such as: `500px` or `() => window.innerWidth/2 + 'px'`  | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> <hr /> <blockquote>!!!Note: Using `data` and `value` at the same time may cause two different parameter transfers, which will affect the final rendering. Please choose the appropriate usage based on your business. Generally speaking, if the `multiSelect` exists, it is not recommended to use the `data`.</blockquote>| - |
| `allowSpacingRetrive` | boolean | false | Allow Spaces to return all results. <blockquote>The condition is that the database interface can retrieve whitespace data. By default, using spaces will return no results.</blockquote> | - |
| `autoShowOptions` | boolean  | false | Force display of the option list. | - |
| `fetchTrigger` | boolean  | false | Use buttons to trigger data queries. | - |
| `fetchNoneInfo` | string  | - | The text of the data not fetched. <br />Only takes effect when `fetchTrigger` is *true*. | - |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string.  <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `onClick` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the pop-up element(**HTML Element**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the fetched data(**Array**)</li><li>The third is the selected data (**JSON Object**)</li><li>The last is the pop-up element(**HTML Element**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the pop-up element(**HTML Element**)</li></ol> | - |
| `onKeyboardInput` | function  | - | Call a function when the keyboard is pressed. It returns three callback values. <br /> <ol><li>The first is the Control Event (**KeyboardEvent**)</li><li>The second is the control (**HTML Element**)</li><li>The last is the pop-up element(**HTML Element**)</li></ol> | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the pop-up element(**HTML Element**)</li></ol> | - |



It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.



---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags.</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |



### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `label`, `listItemLabel`, `value`, `queryString` and `disabled` are attributes used by the system, and other attributes can be added freely.

