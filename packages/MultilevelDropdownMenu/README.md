# Multi-level Dropdown Menu


## API

### Multi-level Dropdown Menu
```js
import MultilevelDropdownMenu from 'funda-ui/MultilevelDropdownMenu';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `navbarClassName` | string | `navbar` | The class name of the navbar. |
| `childClassName` | string | `navbar-nav` | The class name of the child on `<ul>`. |
| `alternateCollapse` | boolean | false | Mutually exclusive alternate expansion between the first levels. |
| `arrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of control |
| `data` | array | - | Specify data of Cascading DropDown List as a JSON string format. Such as: <br />`[{title:"Top level 1",link:"#",slug:'level-1'},{title:"Top level 2",link:"/s",slug:'level-2',},{title:"Top level 3",link:"https://example.com",slug:'level-3',active:true,children:[{title:"Sub level 3_1",link:"#3-1",slug:'level-3_1'},{title:"Sub level 3_2",link:"#3-2",slug:'level-3_2'},{title:"Sub level 3_3",link:"#3-3",slug:'level-3_3'}]},{title:"Top level 4 (heading)",link:"#",slug:'level-4',}]` |
| `routerPath` | string  | - | Pass the current routing path into. It is used to determine whether to activate |
| `onSelect` | function  | - | Call a function when clicking an item. It returns two callback values, one is the current item and the other is the data (JSON Object) |


Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string | - | The title attribute is used to provide the label text of the hyperlink. <blockquote>Support html tags</blockquote> |
| `link` | string | - | Specify a URL address. |
| `active` | boolean | - | Activate current item. |
| `heading` | string | - | Is it just plain text. Usually used as a separator. |
| `icon` | string | - | Specify an icon string, which can be svg or classname. |
| `slug` | string | - | specify a slug. It can be used for data query parameters |
| `children` | array | - | Specify a set of sub-navigation, Eg. `[{"title":"Sub Sub Level 1","link":"#","slug":"level-1_0","active":true},{"title":"Sub Sub Level 2","link":"#","slug":"level-2_0"}]` |



## Examples

```js
import React from "react";
import MultilevelDropdownMenu from 'funda-ui/MultilevelDropdownMenu';

// component styles
import 'funda-ui/MultilevelDropdownMenu/index.css';

const menuListData = [
    {
        title: "Top level 1",
        link: "#",
        children: [
            {
                title: "Sub level 1_1",
                link: "#1-1",
                children: [{
                    title: "Sub Sub Level 1_1",
                    link: "#1-1-1",
                    children: [{
                        title: "Sub Sub Sub Level 1_1",
                        link: "#1-1-1-1"
                    }]
                }]
            },
            {
                title: "Sub level 1_2",
                link: "#1-2"
            }]
    },
    {
        title: "Top level 2 (heading)",
        heading: true,
        link: "https://example.com"
    },
    {
        title: "Top level 3",
        icon: `<svg height="15px" width="15px" viewBox="0 0 32 32"><path fill="#000" d="M16,1C9.925,1,5,5.925,5,12c0,10,10,19,11,19s11-9,11-19C27,5.925,22.075,1,16,1z M16,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C20,14.209,18.209,16,16,16z"/></svg>`,
        link: "#",
        children: [
            {
                title: "Sub level 3_1",
                link: "#"
            },
            {
                title: "Sub level 3_2",
                link: "#"
            },
            {
                title: "Sub level 3_3",
                link: "#"
            }]
    },
    {
        title: "Top level 4 (route)",
        link: "/s"
    },
    {
        title: "Top level 5 (route)",
        link: "/k",
        active: true,
        children: [
            {
                title: "Sub level 5_1",
                link: "/u"
            }]
    },
    {
        title: "Top level 6",
        link: "#"
    }
];

export default () => {


  return (
    <>

        <MultilevelDropdownMenu 
            data={menuListData} 
            onSelect={(e, val) => {
                console.log(val);
            }}  
            routerPath={`/s`}
            navbarClassName="navbar"
            childClassName="navbar-nav"
            alternateCollapse
        />
    </>
  );
}

```






## Asynchronous Usage


```js
import React, { useState } from "react";
import MultilevelDropdownMenu from 'funda-ui/MultilevelDropdownMenu';

// component styles
import 'funda-ui/MultilevelDropdownMenu/index.css';

const menuListData = [
    {
        title: "Top level 1",
        link: "#"
    },
    {
        title: "Top level 2 (route)",
        link: "/s"
    },
    {
        title: "Top level 3 (route)",
        link: "/k",
        children: [
            {
                title: "Sub level 3_1",
                link: "#3-1"
            },
            {
                title: "Sub level 3_2",
                link: "#3-2"
            },
            {
                title: "Sub level 3_3",
                link: "#3-3"
            }]
    }
];


export default () => {

    const [data, setData] = useState<any>(menuListData);
   
    function handleClick(e: any) {
        e.preventDefault();
        setData([
            {
                title: "(new) Top level 1",
                link: "#",
                children: [
            {
                title: "Sub level 1_1",
                link: "#"
            }]
            },
            {
                title: "(new)  Top level 2 (route)",
                link: "/u"
            }
        ]);
    }


    return (
        <>

            <a href="#" onClick={handleClick}>change data</a>
            
            <MultilevelDropdownMenu 
                data={data} 
                routerPath={`/s`}
                navbarClassName="navbar"
                childClassName="navbar-nav"
                alternateCollapse
            />


        </>
    )
}
```