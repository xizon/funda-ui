# Tabs


## API


### Tabs
```js
import { Tabs } from 'react-pure-bootstrap/Tabs';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the tabs wrapper. |
| `tabsClassName` | string | `nav nav-tabs mb-3` | The class name of the tabs. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values, one is the trigger, the second is the target ID of each panel, and the last is the currently active index. |


### Tab List
```js
import { TabList } from 'react-pure-bootstrap/Tabs';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | string \| `tab-list-*` | - |  A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string `tab-list` |
| `defaultActive` | boolean | false | Set an item to activate by default |


### Tab Panel
```js
import { TabPanel } from 'react-pure-bootstrap/Tabs';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | string \| `tab-panel-*` | - |  A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string `tab-panel` |
| `defaultActive` | boolean | false | Set an item to activate by default |
| `tabpanelClass` | string | - | Additional style name, such as `shadow` |


It accepts all props(include data-* attributes) which native div support.




## Examples

```js
import React from "react";
import { Tabs, TabList, TabPanel } from 'react-pure-bootstrap/Tabs';


export default () => {

    function handleChange(nav, targetId, index) {
        console.log(nav, targetId, index);
    }

  return (
    <>

		<Tabs tabsClassName="nav nav-tabs mb-3" onChange={handleChange} style={{fontSize: '0.875rem'}}>
			<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
			<TabList key="tab-list-2">Tab 2</TabList>
			<TabList key="tab-list-3">Tab 3</TabList>

			<TabPanel key="tab-panel-1" tabpanelClass="fs-6" defaultActive>
				<p>Hi, this is the first tab.</p>
			</TabPanel>
			<TabPanel key="tab-panel-2" tabpanelClass="fs-6">
				<p>This is the 2nd tab.</p>
				<p>This is the 2nd tab.</p>
				<p>This is the 2nd tab.</p>
			</TabPanel>
			<TabPanel key="tab-panel-3" tabpanelClass="fs-6">
				<p>And this is the 3rd tab.</p>
			</TabPanel>    
		</Tabs>	



        <Tabs tabsClassName="nav nav-tabs mb-3" onChange={handleChange} style={{fontSize: '0.875rem'}}>
            {[1,2,3].map((item: any, i: number) =>{
                return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}>{item}</TabList>
            })}

            {[1,2,3].map((item: any, i: number) =>{
                return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}>{item}</TabPanel>
            })}                  
        </Tabs>



    </>
  );
}

```