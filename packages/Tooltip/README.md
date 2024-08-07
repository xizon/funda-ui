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
                content={<><div className="text-center">Hi, there. I am here.</div></>}
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



## API

### Tooltip
```js
import Tooltip from 'funda-ui/Tooltip';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `d-inline-block` | The class name of the control wrapper. | - |
| `direction` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | top | The direction of the tip. Defaults to `top`. | - |
| `offset` | number  | 10 | Position offset of top and bottom. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `size` | `auto` \| `large` \| `medium` \| `small`  | auto | The size of the content area. Defaults to `auto`. | - |
| `hoverDelay` | number  | 200 | The number of milliseconds to determine hover intent | - |
| `mouseOutDelay` | number  | - | The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value | - |
| `content` | ReactNode  | - | Set a piece of text or HTML code | - |


