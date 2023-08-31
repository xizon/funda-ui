# Tabs


## API


### Tabs
```js
import { Tabs } from 'funda-ui/Tabs';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the tabs wrapper. |
| `navClassName` | string | `nav nav-tabs mb-3` | The class name of the navigation wrapper. |
| `panelClassName` | string | `tab-content` | The class name of the content wrapper. |
| `expandedActiveClassNameForNav` | string | - | specify an active class name for `<TabList />` |
| `expandedActiveClassNameForPanel` | string | - | specify an active class name for `<TabPanel />` |
| `animTransitionDuration` | number | 150 | Transition duration for css activation animation. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values, one is the trigger, the second is the target ID of each panel, and the last is the currently active index. |


### Tab List
```js
import { TabList } from 'funda-ui/Tabs';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | string \| `tab-list-*` | - |  A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string `tab-list` |
| `defaultActive` | boolean | false | Set an item to activate by default |



### Tab Panel
```js
import { TabPanel } from 'funda-ui/Tabs';
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
import { Tabs, TabList, TabPanel } from 'funda-ui/Tabs';


export default () => {

    function handleChange(nav, targetId, index) {
        console.log(nav, targetId, index);
    }

  return (
    <>

		<Tabs 
            animTransitionDuration={150}
            navClassName="nav nav-tabs mb-3" 
            onChange={handleChange} 
            style={{fontSize: '0.875rem'}}
        >
            
			<TabList key="tab-list-1" defaultActive>
                <button className="nav-link active" type="button" role="tab">Tab 1</button>
            </TabList>
			<TabList key="tab-list-2">
                <button className="nav-link" type="button" role="tab">Tab 2</button>
            </TabList>
			<TabList key="tab-list-3">
                <button className="nav-link" type="button" role="tab">Tab 3</button>
            </TabList>

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



        <Tabs 
            expandedActiveClassNameForNav="border rounded-1 bg-light text-dark" 
            expandedActiveClassNameForPanel="bg-info" 
            wrapperClassName="mb-3 position-relative d-flex align-items-start" 
            navClassName="nav flex-column nav-pills me-3 border-end px-3" 
            panelClassName="tab-content flex-grow-1" 
            onChange={handleChange}
            >
            {[1,2,3].map((item: any, i: number) =>{
                return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}><button className={`btn btn-transparent btn-sm border-0 text-secondary ${i === 0 ? 'active border rounded-1 bg-light text-dark' : ''}`} type="button" role="tab">{item}</button></TabList>
            })}

            {[1,2,3].map((item: any, i: number) =>{
                return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}><p>{item}</p></TabPanel>
            })}    
        </Tabs>	



        <Tabs 
            navClassName="nav nav-tabs mb-3" 
            onChange={handleChange} 
        >
            {[1,2,3].map((item: any, i: number) =>{
                return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}><button className={`nav-link ${i === 0 ? 'active' : ''}`} type="button" role="tab">{item}</button></TabList>
            })}

            {[1,2,3].map((item: any, i: number) =>{
                return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}><p>{item}</p></TabPanel>
            })}                 
        </Tabs>



    </>
  );
}

```