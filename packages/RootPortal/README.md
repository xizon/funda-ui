# Root Portal

It is generally used to create a React element at the root node (`document.body`), and is usually used to create pop-up windows that are not affected by the "transform", "filter", and "perspective" attributes.

**As an abstract component, it is currently the same as the following plugins:**

 - ✅ Modal Dialog
 - ✅ Select
 - ✅ Cascading Select 
 - ✅ Cascading Select End-to-end
 - ✅ Dropdown Menu
 - ✅ Event Calendar Timeline
 - ✅ Live Search
 - ✅ Toast
 - ✅ Tooltip
 - ✅ Date
 - ✅ Chatbox


## General

```js
import React from "react";
import RootPortal from 'funda-ui/RootPortal';

export default () => {

    return (
        <>

            <RootPortal show={true}>
                <h4>This is a modal content</h4>
            </RootPortal>


        </>
    );
}
```




## API

### Root Portal
```js
import RootPortal from 'funda-ui/RootPortal';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `containerClassName` | string  | - | The class name of container | - |
| `show` | boolean  | false | Whether the container is visible or not | ✅ |
| `usePortal` | boolean | true | Whether to use Portal rendering. When set to false, content will be rendered directly at the component's position instead of being rendered to the end of body via Portal | - |
| `children` | ReactNode | - | Child elements to be rendered | - |