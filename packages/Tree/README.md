# Tree


## API

### Tree
```js
import Tree from 'funda-ui/Tree';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `treeClassName` | string | `tree-diagram-default` | The class name of the tree. |
| `childClassName` | string | `tree-diagram` | The class name of the child on `<ul>`. |
| `checkable` | boolean | false | Set TreeNode display Checkbox or not. |
| `showLine` | boolean | false | Shows a connecting line. |
| `lineStyle` | string | `dotted` \| `dashed` \| `solid` \| `double`| Specifies what kind of line to display. By default it is "solid".|
| `alternateCollapse` | boolean | false | Mutually exclusive alternate expansion between the first levels. |
| `arrow` | ReactNode  | `<svg width="0.75em" height="0.75em" viewBox="0 0 20 20" fill="none"><path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="currentColor"/></svg>` | Set an arrow of control |
| `arrowIcons` | React.ReactNode[] | - | Set collapse/expand icon. Use an array to set two icons, if only one is set, the icon animation is activated, and if two are set, the animation is canceled. <br /> such as: `[<><svg width="1em" height="1em" viewBox="0 0 24 24">...</svg></>,<><svg width="1em" height="1em" viewBox="0 0 24 24">...</svg></>]` <blockquote>`arrow` will have no effect when using this attribute.</blockquote> |
| `disableArrow` | boolean | false | Disable arrow. |
| `disableCollapse` | boolean | false | Disable the collapse effect. |
| `data` | array | - | Specify data of Cascading DropDown List as a JSON string format. Such as: <br />`[{title:"Top level 1",link:"#",slug:'level-1'},{title:"Top level 2",link:"/s",slug:'level-2',},{title:"Top level 3",link:"https://example.com",slug:'level-3',active:true,children:[{title:"Sub level 3_1",link:"#3-1",slug:'level-3_1'},{title:"Sub level 3_2",link:"#3-2",slug:'level-3_2'},{title:"Sub level 3_3",link:"#3-3",slug:'level-3_3'}]},{title:"Top level 4 (heading)",link:"#",slug:'level-4',}]` |
| `onSelect` | function  | - | Call a function when clicking an item. It returns three callback values, one is the current hyperlink and the second is the data (JSON Object), the last is a callback function, which can initiate an asynchronous request to load children (usage: Please refer to the documentation example). |
| `onCollapse` | function  | - | Call a function when collapsing/expanding. The return value is same with `onSelect`. <blockquote>When `disableArrow` is "true", click on the content to trigger it</blockquote> |
| `onCheck` | function  | - | Call a function when changing the checkbox. It returns only one callback value (Array). <blockquote>Take effect when `checkable` is "true"</blockquote> |




Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string | - | The title attribute is used to provide the label text of the hyperlink. <blockquote>Support html tags</blockquote> |
| `link` | string | - | Specify a URL address. |
| `active` | boolean | - | Activate current item. |
| `checked` | boolean | - | Whether the checkbox of the current item is selected. |
| `heading` | string | - | Is it just plain text. Usually used as a separator. |
| `icon` | string | - | Specify an icon string, which can be svg or classname. |
| `slug` | string | - | specify a slug. It can be used for data query parameters |
| `childrenAsync` | boolean | - | Loading children asynchronously. Set to "true" to trigger loading event. |
| `children` | array | - | Specify a set of sub-navigation, Eg. `[{"title":"Sub Sub Level 1","link":"#","slug":"level-1_0","active":true},{"title":"Sub Sub Level 2","link":"#","slug":"level-2_0"}]` |


---

The property list of the last parameter (Function) in the return value of `onCollapse` and `onSelect`:


| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | React.Key \| null | null | Match the key value of item.  |
| `fetch` | JSON Object \| null | null | Set a request.  |
| `firstRender` | boolean | false | Is it the first render.  |


> 
> 
> 
> The object properties of `fetch`: 
> 
> | Property | Type | Default | Description |
> | --- | --- | --- | --- |
> | `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
> | `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
> | `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
> | `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
> 
> 


## Examples

```js
import React from "react";
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';

const treeData = [
    {
        title: "Top level 1",
        link: "#",
        slug: 'level-1',
        active: true,
        children: [
            {
                title: "Sub level 1_1",
                link: "#1-1",
                slug: 'level-1_1',
                active: true,
                children: [{
                    title: "Sub Sub Level 1_1",
                    link: "#1-1-1",
                    slug: 'level-1_1_1',
                    children: [{
                        title: "Sub Sub Sub Level 1_1",
                        link: "#1-1-1-1"
                    }]
                }]
            },
            {
                title: "Sub level 1_2",
                link: "#1-2",
                slug: 'level-1_2',
            }]
    },
    {
        title: "Top level 2 (heading)",
        heading: true,
        link: "https://example.com",
        slug: 'level-2',
    },
    {
        title: "Top level 3",
        icon: `<svg height="15px" width="15px" viewBox="0 0 32 32"><path fill="#000" d="M16,1C9.925,1,5,5.925,5,12c0,10,10,19,11,19s11-9,11-19C27,5.925,22.075,1,16,1z M16,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C20,14.209,18.209,16,16,16z"/></svg>`,
        link: "#",
        slug: 'level-3',
        children: [
            {
                title: "Sub level 3_1",
                link: "#",
                slug: 'level-3_1'
            },
            {
                title: "Sub level 3_2",
                link: "#",
                slug: 'level-3_2'
            },
            {
                title: "Sub level 3_3",
                link: "#",
                slug: 'level-3_3'
            }]
    },
    {
        title: "Top level 4",
        link: "/s",
        slug: 'level-4'
    },
    {
        title: "Top level 5",
        link: "/k",
        slug: 'level-5',
        active: true,
        children: [
            {
                title: "Sub level 5_1",
                link: "/u",
                slug: 'level-5_1'
            }]
    },
    {
        title: "Top level 6",
        link: "/k",
        slug: 'level-6'
    },
    {
        title: "Top level 7",
        link: "#",
        slug: 'level-7'
    }
];

export default () => {


  return (
    <>

        <Tree 
            data={treeData} 
            showLine={true}
            onSelect={(e, val) => {
                console.log(val);
            }} 
        />

        <Tree 
            data={treeData} 
            showLine={false}
            disableArrow={true}
            onSelect={(e, val) => {
                console.log(val);
            }} 
        />

        <Tree 
            data={treeData} 
            showLine={false}
            disableArrow={true}
            disableCollapse={true}
            onSelect={(e, val) => {
                console.log(val);
            }} 
        />
        

        <Tree
            data={treeData}
            showLine={true}
            arrowIcons={[
                <><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M12 16V13M12 13V10M12 13H9M12 13H15M3 6V16.8C3 17.9201 3 18.4798 3.21799 18.9076C3.40973 19.2839 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8031C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2841 20.7822 18.9078C21.0002 18.48 21.0002 17.9199 21.0002 16.7998L21.0002 9.19978C21.0002 8.07967 21.0002 7.51962 20.7822 7.0918C20.5905 6.71547 20.2839 6.40973 19.9076 6.21799C19.4798 6 18.9201 6 17.8 6H12M3 6H12M3 6C3 4.89543 3.89543 4 5 4H8.67452C9.1637 4 9.40886 4 9.63904 4.05526C9.84311 4.10425 10.0379 4.18526 10.2168 4.29492C10.4186 4.41857 10.5918 4.59182 10.9375 4.9375L12 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></>,
                <><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <path d="M17.8031 20L19.793 20C20.2255 20 20.4419 20 20.6236 19.9258C20.784 19.8603 20.9251 19.7538 21.0322 19.6175C21.1535 19.4631 21.2132 19.2555 21.332 18.8395L22.4177 15.0396C22.6156 14.3472 22.714 14.0009 22.6363 13.7271C22.5682 13.4871 22.4131 13.2813 22.2011 13.15C21.9731 13.0087 21.64 13.0005 21.0002 13M17.8031 20H6.19691M17.8031 20C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2841 20.7822 18.9078C21.0002 18.48 21.0002 17.9199 21.0002 16.7998V13M6.19691 20H5.12109C4.40152 20 4.04075 20 3.79883 19.8501C3.58683 19.7187 3.43144 19.5129 3.36338 19.2729C3.34904 19.2224 3.34073 19.1694 3.33796 19.1122M6.19691 20C5.07899 20 4.5192 20 4.0918 19.7822C3.78624 19.6265 3.52721 19.3952 3.33796 19.1122M21.0002 13C20.9608 13 20.9203 13 20.8786 13H5.00028L3.58301 17.9604L3.58096 17.9674C3.42083 18.5278 3.32578 18.8605 3.33796 19.1122M21.0002 13L21.0002 9.19978C21.0002 8.07967 21.0002 7.51962 20.7822 7.0918C20.5905 6.71547 20.2839 6.40973 19.9076 6.21799C19.4798 6 18.9201 6 17.8 6H12M3.33796 19.1122C3.29413 19.0467 3.25404 18.9784 3.21799 18.9076C3 18.4798 3 17.9201 3 16.8V6M3 6H12M3 6C3 4.89543 3.89543 4 5 4H8.67452C9.1637 4 9.40886 4 9.63904 4.05526C9.84311 4.10425 10.0379 4.18526 10.2168 4.29492C10.4186 4.41857 10.5918 4.59182 10.9375 4.9375L12 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></>
            ]}
            onSelect={(e, val) => {
                console.log(val);
            }} 
        />


    </>
  );
}

```



## Asynchronous Usage


```js
import React, { useState } from "react";
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';

const treeData = [
    {
        title: "Top level 1",
        link: "#",
        slug: 'level-1'
    },
    {
        title: "Top level 2",
        link: "/s",
        slug: 'level-2',
    },
    {
        title: "Top level 3",
        link: "/k",
        slug: 'level-3',
        active: true,
        children: [
            {
                title: "Sub level 3_1",
                link: "#3-1",
                slug: 'level-3_1'
            },
            {
                title: "Sub level 3_2",
                link: "#3-2",
                slug: 'level-3_2'
            },
            {
                title: "Sub level 3_3",
                link: "#3-3",
                slug: 'level-3_3'
            }]
    }
];


export default () => {

    const [data, setData] = useState<any>(treeData);
   
    function handleClick(e: any) {
        e.preventDefault();
        setData([
            {
                title: "(new) Top level 1",
                link: "#",
                slug: 'level-1-new'
                children: [
                            {
                                title: "Sub level 1_1",
                                link: "#",
                                slug: 'level-1_1-new'
                            }]
            },
            {
                title: "(new)  Top level 2",
                link: "/u",
                slug: 'level-2-new'
            }
        ]);
    }


    return (
        <>

            <a href="#" onClick={handleClick}>change data</a>
            
            <Tree 
                data={treeData} 
                showLine={true}
                onSelect={(e, val) => {
                    console.log(val);
                }}  
            />


        </>
    )
}
```




## Load Data Asynchronously

To load data asynchronously when click to expand a treeNode.


```js
import React from "react";
import axios from "axios";

import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';


class DataService {
    
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        let demoData = [];

        // query from "slug"
        if ( otherParam === 'level-2' ) {

            demoData = [
                {
                    "parent_id": 0,
                    "id": 1,
                    "item_name": "Title 1",
                    "item_type": "web"
                },
                {
                    "parent_id": 0,
                    "id": 2,
                    "item_name": "Title 2",
                    "item_type": "dev"
                }
            ];   

        }
        
        if ( otherParam === 'level-3_1' ) {

            demoData = [
                {
                    "parent_id": 0,
                    "id": 1,
                    "item_name": "Title 3",
                    "item_type": "web"
                },
                {
                    "parent_id": 0,
                    "id": 2,
                    "item_name": "Title 4",
                    "item_type": "dev"
                }
            ];   
            
        }


        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

    async getListUseAxios(searchStr = '', limit = 0) {
        const response = await axios.get(`https://api?s=${searchStr}&limit=${limit}`);
        return response;
    }

}


const treeData = [
    {
        title: "Top level 1",
        link: "#",
        slug: 'level-1',
        childrenAsync: true
    },
    {
        title: "Top level 2",
        link: "/s",
        slug: 'level-2',
        childrenAsync: true
    },
    {
        title: "Top level 3",
        link: "/k",
        slug: 'level-3',
        active: true,
        children: [
            {
                title: "Sub level 3_1",
                link: "#3-1",
                slug: 'level-3_1',
                childrenAsync: true
            },
            {
                title: "Sub level 3_2",
                link: "#3-2",
                slug: 'level-3_2'
            },
            {
                title: "Sub level 3_3",
                link: "#3-3",
                slug: 'level-3_3'
            }]
    }
];

export default () => {

    return (
        <>

            <Tree 
                data={treeData} 
                showLine={true}
                onSelect={(e, val) => {
                    console.log(val);
                }} 
                onCollapse={(e, val, updateData) => {
                    console.log(val);

                    updateData(val.key, {
                        "fetchFuncAsync": new DataService,
                        "fetchFuncMethod": "getList",
                        "fetchFuncMethodParams": ['', 0, val.slug],
                        "fetchCallback": (res) => {

                            // prevent orginal data
                            let placesMap: any = {};
                            for (const val of res) {
                                placesMap[val.id] = [val.item_name, val.item_type, val.id];
                            }

                            //
                            const data = [];
                            for (const key in placesMap) {
                                data.push({
                                    title: placesMap[key][0],
                                    link: "#",
                                    slug: placesMap[key][1]
                                });
                            }

                            return data;

                        }
                    });
                }} 
            />



        </>
    )
}
```




## Using Checkbox

Add a Checkbox before the tree nodes.


```js
import React from "react";
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';


const treeData = [
    {
        title: "Top level 1",
        link: "#",
        slug: 'level-1',
        checked: true
    },
    {
        title: "Top level 2",
        link: "/s",
        slug: 'level-2',
        checked: false,
        children: [
            {
                title: "Sub level 2_1",
                link: "#2-1",
                slug: 'level-2_1',
                checked: false
            },
            {
                title: "Sub level 2_2",
                link: "#2-2",
                slug: 'level-2_2',
                checked: false
            }]
    },
    {
        title: "Top level 3",
        link: "/k",
        slug: 'level-3',
        checked: false,
        active: true,
        children: [
            {
                title: "Sub level 3_1",
                link: "#3-1",
                slug: 'level-3_1',
                checked: false
            },
            {
                title: "Sub level 3_2",
                link: "#3-2",
                slug: 'level-3_2',
                checked: false
            },
            {
                title: "Sub level 3_3",
                link: "#3-3",
                slug: 'level-3_3',
                checked: true
            }]
    }
];

export default () => {

    return (
        <>

            <Tree 
                data={treeData} 
                showLine={true}
                checkable={true}
                onCheck={(val) => {
                    console.log(val);
                }} 
                onSelect={(e, val) => {
                    console.log(val);
                }}  
            />



        </>
    )
}
```



## Convert raw data into a tree structure


```js
import React, { useEffect, useState } from "react";
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';


class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parent_id": 0,
                "id": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "id": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            },
            // level 2
            {
                "parent_id": 1,
                "id": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "id": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "id": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            },
            // level 3
            {
                "parent_id": 4,
                "id": 6,
                "item_name": "Title 6",
                "item_type": "web/ui/photoshop"
            },  
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const [data, setData] = useState<any[]>([]);

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

    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parent_id: item.parent_id,
                    active: false,
                    title: `${item.item_name}`,
                    link: "#",
                    slug: item.id
                }
            });
         

            const treeData = convertTree(_data);
            setData(treeData);
            
            // do something, such as update `<Scrollbar />`
            // ...

        });
    }, []);


    return (
        <>

            <Tree 
                data={data} 
                showLine={true}
                checkable={true}
                onCheck={(val) => {
                    console.log(val);
                }} 
                onSelect={(e, val) => {
                    console.log(val);
                }}  
            />



        </>
    )
}
```


## Complex State Problem Solving (1)

Prevent collapsing problems caused by re-rendering of sub-component. You need to use `useMemo()` hook to solve.

> The usual scenario is: the left side is a list of tree, and the right side is other content. `onSelect()` triggers a method to modify routing and update the data of Tree. Since the data is updated, the collapsing effect of the tree will be wrong.


> [!NOTE]
> Try not to use nested `<Tree />` in the child component in this scene where this route triggers re-rendering, but it is not absolute.



```js
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';


const treeData = [
    {
        title: "Top level 1",
        link: "/0",
        slug: 'level-1',
        checked: true
    },
    {
        title: "Top level 2",
        link: "/s",
        slug: 'level-2',
        checked: false,
        children: [
            {
                title: "Sub level 2_1",
                link: "/2-1",
                slug: 'level-2_1',
                checked: false
            },
            {
                title: "Sub level 2_2",
                link: "/2-2",
                slug: 'level-2_2',
                checked: false
            }]
    },
    {
        title: "Top level 3",
        link: "/k",
        slug: 'level-3',
        checked: false,
        active: true,
        children: [
            {
                title: "Sub level 3_1",
                link: "/3-1",
                slug: 'level-3_1',
                checked: false
            },
            {
                title: "Sub level 3_2",
                link: "/3-2",
                slug: 'level-3_2',
                checked: false
            },
            {
                title: "Sub level 3_3",
                link: "/3-3",
                slug: 'level-3_3',
                checked: true
            }]
    }
];


// DO NOT move `useMemo` to component
function TreeMemo(props: any) {
    const {callback, data} = props;
    const dependencies = props.data !== null && props.data.length === 0 ? props.data : '';
    return useMemo(() => {
        return    <Tree
                    checkable={true}
                    data={data}
                    showLine={true}
                    onSelect={callback}
                    onCheck={(val) => {
                        console.log(val);
                    }} 
                />
    }, [dependencies]);
}


export default () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        console.log(count);
        setData(treeData);
    }, [location, count]);


    return (
        <>

            <TreeMemo
                data={data}
                callback={(e: any, val: any) => {
                    console.log(val);

                    // execute on location change
                    navigate(val.link);
                    setCount((prevState: number) => prevState + 1);
                    console.log('Location changed!', location.pathname);

                }} />


        </>
    )
}
```




## Complex State Problem Solving (2)

Based on `Complex State Problem Solving (1)`, update the `<TreeMemo />` component.


```js
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Tree from 'funda-ui/Tree';

// component styles
import 'funda-ui/Tree/index.css';


const treeData = [
    {
        title: "Top level 1",
        link: "/0",
        slug: 'level-1',
        checked: true
    },
    {
        title: "Top level 2",
        link: "/s",
        slug: 'level-2',
        checked: false,
        children: [
            {
                title: "Sub level 2_1",
                link: "/2-1",
                slug: 'level-2_1',
                checked: false
            },
            {
                title: "Sub level 2_2",
                link: "/2-2",
                slug: 'level-2_2',
                checked: false
            }]
    },
    {
        title: "Top level 3",
        link: "/k",
        slug: 'level-3',
        checked: false,
        active: true,
        children: [
            {
                title: "Sub level 3_1",
                link: "/3-1",
                slug: 'level-3_1',
                checked: false
            },
            {
                title: "Sub level 3_2",
                link: "/3-2",
                slug: 'level-3_2',
                checked: false
            },
            {
                title: "Sub level 3_3",
                link: "/3-3",
                slug: 'level-3_3',
                checked: true
            }]
    }
];


const treeDataNew = [
    {
        title: "(new) Title 1",
        link: "/new1",
        slug: 'new-title-1',
        checked: false
    },
    {
        title: "(new) Title 2",
        link: "/new2",
        slug: 'new-title-2',
        checked: true
    },
];
function TreeMemo(props: any) {
    const {callback, data, update} = props;
    console.log(update.cache); // Every time <a> is clicked, the cache will change
    const dependencies = props.data !== null && props.data.length === 0 ? props.data : '';
    return useMemo(() => {
        return    <Tree
                    checkable={true}
                    data={update.cache === 0 ? data : update.data}
                    showLine={true}
                    onSelect={callback}
                    onCheck={(val) => {
                        console.log(val);
                    }} 
                />
    }, [dependencies, update]);
}

export default () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<any[]>([]);
    const [updateTreeMemo, setUpdateTreeMemo] = useState<any>({
        cache: 0,
        data: []
    });


    useEffect(() => {
        console.log(count);
        setData(treeData);
    }, [location, count]);

                                                            
    return (
        <>

            <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();

                setUpdateTreeMemo({
                    cache: Math.random(),
                    data: treeDataNew
                });
            }}>update {`<TreeMemo />`}</a>

            <TreeMemo
                update={updateTreeMemo}
                data={data}
                callback={(e: any, val: any) => {
                    console.log(val);

                    // execute on location change
                    navigate(val.link);
                    setCount((prevState: number) => prevState + 1);
                    console.log('Location changed!', location.pathname);

                }} />


        </>
    )
}
```


