# MultilevelDropdownMenu


## API

### MultilevelDropdownMenu
```js
import MultilevelDropdownMenu from 'react-pure-bootstrap/MultilevelDropdownMenu';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `navbarClassName` | string | `navbar` | The class name of the navbar. |
| `childClassName` | string | `navbar-nav` | The class name of the child on `<ul>`. |
| `data` | array | - | Specify data of Cascading DropDown List as a JSON string format. Such as: <br />`[{"heading":false,"slug":"pageslug1","title":"Top level 1",icon: "fa fa-window-restore","link":"#","children":[{"heading":false,"slug":"pageslug2","title":"Sub level 1","link":"#","children":[{"heading":false,"slug":"pageslug3","title":"Sub Sub Level 1","link":"#"}]}]},{"heading":false,"slug":"pageslug4","title":"Top level 2",icon: false,"link":"https://example.com"}]` |
| `routerPath` | string  | - | Pass the current routing path into. It is used to determine whether to activate |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the current item and the other is the path status of route that do not contain `#` or `http` (a boolean) |


Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string | - | The title attribute is used to provide the label text of the hyperlink |
| `link` | string | - | Specify a URL address. |
| `heading` | string | - | Is it just plain text. Usually used as a separator. |
| `icon` | string | - | Specify an icon string, which can be svg or classname. |
| `slug` | string | - | specify a slug |
| `children` | array | - | Specify a set of sub-navigation, the key value of each item still uses `title` and `link` Eg. `[{"title":"Sub Sub Level 1","link":"#"},{"title":"Sub Sub Level 2","link":"#"}]` |



## Examples

```js
import React from "react";
import MultilevelDropdownMenu from 'react-pure-bootstrap/MultilevelDropdownMenu';


const menuListData = [
    {
        title: "Top level 1",
        link: "#",
        children: [
            {
                title: "Sub level 1_1",
                link: "#",
                children: [{
                    title: "Sub Sub Level 1_1",
                    link: "#",
                    children: [{
                        title: "Sub Sub Sub Level 1_1",
                        link: "#"
                    }]
                }]
            },
            {
                title: "Sub level 1_2",
                link: "#"
            }]
    },
    {
        title: "Top level 2",
        heading: true,
        link: "https://example.com"
    },
    {
        title: "Top level 3",
        icon: `<svg fill="#000" height="20px" width="20px" viewBox="0 0 207.628 207.628"><circle cx="103.814" cy="103.814" r="45.868"></circle><path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368 S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368 s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z"></path><path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385 C111.314,36.027,107.956,39.385,103.814,39.385z"></path><path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385 C111.314,204.271,107.956,207.628,103.814,207.628z"></path><path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5 S204.271,111.314,200.128,111.314z"></path><path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5 S36.027,111.314,31.885,111.314z"></path><path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242 c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z"></path><path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243 c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z "></path><path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606 c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606 C175.757,178.687,173.838,179.419,171.918,179.419z"></path><path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606 c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z"></path></svg>`,
        link: "https://www.bing.com",
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
        link: "/k"
    },
    {
        title: "Top level 6",
        link: "#"
    }
];

export default () => {

  function handleChange(e, isRouter) {
    console.log(e, isRouter);
  }

  return (
    <>

        <MultilevelDropdownMenu 
            data={menuListData} 
            onChange={handleChange} 
            routerPath={`/s`}
            navbarClassName="navbar"
            childClassName="navbar-nav"
        />
    </>
  );
}

```