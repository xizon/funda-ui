# Tooltip


## General

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
                content={<><div className="text-center">Hi, there. I am here.</div><div>Cool!!!!!!!</div></>}
            >
                Any Content [top]
            </Tooltip>

            <hr />



            <Tooltip
                hoverDelay={300}
                direction="top"
                size="auto"
                content={<><div className="text-center">Mario Tennis 64 ROM download is available to play for Nintendo 64. This Mario game is the US English version at EmulatorGames.net exclusively.</div></>}
            >
                Any Content [top & long text]
            </Tooltip>

            <hr />


            <Tooltip
                hoverDelay={300}
                direction="top-right"
                size="auto"
                content={<><div className="text-center">Hi, there. I am here.</div></>}
            >
                Any Content Any Content [top-right]
            </Tooltip>


            <hr />


            <Tooltip
                hoverDelay={300}
                direction="top-left"
                size="auto"
                content={<><div className="text-center">Hi, there. I am here.</div></>}
            >
                Any Content [top-left]
            </Tooltip>

            <hr />


            <Tooltip
                hoverDelay={300}
                direction="bottom"
                size="auto"
                content={<><div className="text-center">Hi, there. I am here.</div></>}
            >
                Any Content [bottom]
            </Tooltip>

            <hr />


            <Tooltip
                hoverDelay={300}
                direction="bottom-right"
                size="auto"
                content={<><div className="text-center">Hi, there. I am here.</div></>}
            >
                Any Content Any Content [bottom-right]
            </Tooltip>


            <hr />


            <Tooltip
                hoverDelay={300}
                direction="bottom-left"
                size="auto"
                content={<><div className="text-center">Hi, there. I am here.</div></>}
            >
                Any Content [bottom-left]
            </Tooltip>



            <hr />


            <div style={{marginLeft: 'calc(100% - 200px)'}}>
                <Tooltip
                    hoverDelay={300}
                    direction="top"
                    size="auto"
                    content={<><div className="text-center">Mario Tennis 64 ROM download is available to play for Nintendo 64. This Mario game is the US English version at EmulatorGames.net exclusively.</div></>}
                >
                    Any Content [top & long text]
                </Tooltip>
            </div>


          
        </>
    );
}
```


## Controlled Mode

Allowing the parent to open/close the tooltip via ref methods. 

```js
import React, { useRef } from 'react';
import Tooltip from './src';

export default () => {
    const tooltipRef = useRef<any>(null);

    return (
        {/* Tooltip in controlled mode: will not open/close on hover */}
        <Tooltip
            ref={tooltipRef}
            controlled
            content={<span>This tooltip is controlled by parent</span>}
            direction="top"
        >
            <strong>👉🏻 Hover does nothing, use buttons below</strong>
        </Tooltip>
        <div style={{ marginTop: 16 }}>
            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => tooltipRef.current?.show()}>Show Tooltip</button>
            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => tooltipRef.current?.hide()} style={{ marginLeft: 8 }}>Hide Tooltip</button>
        </div>
    );
}
```



## Custom Popup Style

Custom style for the popup container.

```js
import React from 'react';
import Tooltip from 'funda-ui/Tooltip';

// component styles
import 'funda-ui/Tooltip/index.css';

export default () => {
    return (
        <Tooltip
        content="Custom style tooltip"
        popupArrowColor={[255,0,0,0.9]} // red
        popupContentStyle={{ background: 'rgba(255,0,0,0.9)', color: '#fff', borderRadius: 8, padding: 12 }}
        >
           <strong>👉🏻 Show custom style tooltip</strong>
        </Tooltip>
    );
}
```



## Delayed Close

The mouse leave trigger has delay time.


```js
import React from 'react';
import Tooltip from 'funda-ui/Tooltip';

// component styles
import 'funda-ui/Tooltip/index.css';

export default () => {
    return (
        <Tooltip
        content={<>The mouse will be closed 3 seconds after leaving, and <br />the pop-up window will be unclosed during this period</>}
        delayedClose
        delayedCloseTimeout={3000}
        >
           <strong>👉🏻 Hover me</strong>
        </Tooltip>
    );
}
```


### Tooltip
```js
import Tooltip from 'funda-ui/Tooltip';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `triggerClassName` | string | `d-inline-block` | The class name of the trigger. The Trigger will wrap around your target object | - |
| `wrapperClassName` | string | - | The class name of the control wrapper. | - |
| `direction` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | top | The direction of the tip. Defaults to `top`. | - |
| `offset` | number  | 4 | Position offset of top and bottom. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `size` | `auto` \| `large` \| `medium` \| `small`  | auto | The size of the content area. Defaults to `auto`. | - |
| `hoverDelay` | number  | 200 | The number of milliseconds to determine hover intent | - |
| `mouseOutDelay` | number  | - | The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value | - |
| `delayedClose` | boolean  | - | f true, tooltip closes only if mouse does not enter wrapper within timeout after leaving trigger | - |
| `delayedCloseTimeout` | number  | 1500 | Timeout in ms for delayed close (ms) | - |
| `controlled` | boolean  | - | If true, Tooltip is controlled by parent via ref, not by mouse events | - |
| `popupArrowColor` | array | - | Custom color for the popup arrow (Use RGBA to express it), eg. `[255,0,0,0.9]` | - |
| `popupContentStyle` | React.CSSProperties | - | Custom style for the popup container (applied to the content div) | - |
| `content` | ReactNode  | - | Set a piece of text or HTML code | - |
| `onContentMouseEnter` | (event: React.MouseEvent\<HTMLDivElement\>) => void | - | Called when mouse enters the tooltip popup wrapper | - |
| `onContentMouseLeave` | (event: React.MouseEvent\<HTMLDivElement\>) => void | - | Called when mouse leaves the tooltip popup wrapper. | - |