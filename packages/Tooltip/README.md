# Tooltip


## API

### Tooltip
```js
import Tooltip from 'funda-ui/Tooltip';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `d-inline-block` | The class name of the control wrapper. |
| `direction` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` \| `left` \| `right`  | top | The direction of the tip. Defaults to `top`. |
| `size` | `auto` \| `large` \| `medium` \| `small`  | auto | The size of the content area. Defaults to `auto`. |
| `hoverDelay` | number  | 200 | The number of milliseconds to determine hover intent |
| `mouseOutDelay` | number  | - | The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value |
| `content` | ReactNode  | - | Set a piece of text or HTML code |



## Examples

```js
import React from "react";
import Tooltip from 'funda-ui/Tooltip';

// component styles
import 'funda-ui/Tooltip/index.css';

export default () => {

    return (
        <>
          
            
        <Tooltip
          hoverDelay={300}
          direction="top"
          size="auto"
          content={<><div className="text-center">Hi, there. I am here.</div></>}
        >
            Any Content
        </Tooltip>


          
        </>
    );
}
```