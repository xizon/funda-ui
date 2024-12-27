# Tabs


## General

```js
import React from "react";
import { Tabs, TabList, TabPanel } from 'funda-ui/Tabs';


export default () => {

    function handleChange(nav: HTMLElement, targetId: string, index: number, persistentIndex: number) {
        console.log(nav, targetId, index, persistentIndex);
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

## No spacing

```js
import React from "react";
import { Tabs, TabList, TabPanel } from 'funda-ui/Tabs';

export default () => {


    return (
        <>

            <Tabs
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Tabs
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```




## No delay

Set the `animTransitionDuration` of \<Tabs\> to **0**.



##  Delete and Jump a tab behavior

1. Use `onLoad` to assign the jump function
2. Use a custom svg icon to bind the delete event


```js
import React from "react";
import { Tabs, TabList, TabPanel } from 'funda-ui/Tabs';


export default () => {

    const tabsRef = useRef<HTMLDivElement>(null);
    const [appTabs, setAppTabs] = useState<any[]>([]);
    const [gotoItemFunc, setGotoItemFunc] = useState<any>(null);

    function handleRemoveTab(e) {
        e.preventDefault();
        e.stopPropagation();

        const targetIndex = e.target.closest('.nav-item').dataset.index;

        if (tabsRef.current) {
            const _el = tabsRef.current.querySelector(`[data-tablist-index="${targetIndex}"]`) as HTMLLIElement;
            if (_el !== null) _el.remove();

            const _el2 = tabsRef.current.querySelector(`[data-tabpanel-index="${targetIndex}"]`) as HTMLDivElement;
            if (_el2 !== null) _el2.remove();

            // goto item
            if (gotoItemFunc !== null) {
                gotoItemFunc(tabsRef.current.querySelector(`[data-tablist-index="1"]`) as HTMLLIElement);
            }
        }

    }

    return (
        <>

            <div ref={tabsRef}>
                <Tabs
                    animTransitionDuration={0}
                    navClassName="nav nav-tabs"
                    wrapperClassName="mb-3 position-relative h-100"
                    panelClassName="tab-content	h-100"
                    onLoad={(func) => {
                        setGotoItemFunc(func);
                    }}
                >

                    {[1, 2, 3, 4, 5, 6].map((item: any, i: number) => {
                        return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}>
                            <button className={`nav-link p-1 px-2 me-2 pe-3 ${item.disabled ? 'disabled d-none' : ''} ${i === 0 ? 'active nav-link p-1 px-2 me-2' : ''}`} type="button" role="tab" ref={(node) => {
                                if (node) {
                                    if (i > 0) node.style.setProperty("padding-right", "1.5rem", "important");

                                }
                            }}>{item}</button>

                            {i > 0 ? <>
                                <span tabIndex={-1} onClick={handleRemoveTab} className="d-inline-block position-absolute top-0 end-0 mt-1 mx-1 me-3" style={{ cursor: 'pointer', opacity: '.6' }}><svg width="12px" height="12px" viewBox="0 0 16 16"><path fill="inherit" d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg></span>
                            </> : null}

                        </TabList>
                    })}

                    {[1, 2, 3, 4, 5, 6].map((item: any, i: number) => {
                        return <TabPanel key={`tab-panel-${i}`} tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}>{item}</TabPanel>
                    })}

                </Tabs>

            </div>



        </>
    );
}

```



## Use the exposed method to jump target

Lets you callback the handle exposed as attribute `ref`.


```js
import React, { useRef } from 'react';
import { Tabs, TabList, TabPanel } from 'funda-ui/Tabs';


export default () => {

    const tabsRef = useRef<any>(null);

    return (

        <>

            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (tabsRef.current) tabsRef.current.go(0);
                }}
            >go to 1</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (tabsRef.current) tabsRef.current.go(2);
                }}
            >go to 3</a>


            <Tabs 
                ref={tabsRef}
                navClassName="nav nav-tabs mb-3" 
            >
                {[1,2,3].map((item: any, i: number) =>{
                    return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}><button className={`nav-link ${i === 0 ? 'active' : ''}`} type="button" role="tab">{item}</button></TabList>
                })}

                {[1,2,3].map((item: any, i: number) =>{
                    return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}><p>{item}</p></TabPanel>
                })}                 
            </Tabs>


        </>
    )
}
```



## API


* [`<Tabs />`](#tabs)
* [`<TabList />`](#tab-list)
* [`<TabPanel />`](#tab-panel)



### Tabs
```js
import { Tabs } from 'funda-ui/Tabs';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It exposes the following methods of the component (The function supports callback to return a value which is the currently activated tab index, like this: `ref.current.go(1)`):  <br /> <ol><li>`ref.current.go()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the tabs wrapper. | - |
| `navClassName` | string | `nav nav-tabs mb-3` | The class name of the navigation wrapper. | - |
| `panelClassName` | string | `tab-content` | The class name of the content wrapper. | - |
| `expandedActiveClassNameForNav` | string | - | specify an active class name for `<TabList />` | - |
| `expandedActiveClassNameForPanel` | string | - | specify an active class name for `<TabPanel />` | - |
| `animTransitionDuration` | number | 150 | Transition duration for css activation animation. | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the trigger object (**HTMLElement**)</li><li>The second is the target ID of each panel (**String**)</li><li> The third is the currently active index (**Number**)</li><li> The fourth is the persistent index of item. (**Number**)</li></ol> | - |
| `onLoad` | function  | - | Call a function when the component is rendered. It returns only one callback value which is the function of activating item(**Function**). | - |


### Tab List
```js
import { TabList } from 'funda-ui/Tabs';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `key` | string \| `tab-list-*` | - |  A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string `tab-list` | - |
| `defaultActive` | boolean | false | Set an item to activate by default | - |



### Tab Panel
```js
import { TabPanel } from 'funda-ui/Tabs';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `key` | string \| `tab-panel-*` | - |  A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string `tab-panel` | - |
| `defaultActive` | boolean | false | Set an item to activate by default | - |
| `tabpanelClass` | string | - | Additional style name, such as `shadow` | - |



It accepts all props(include data-* attributes) which native div support.



