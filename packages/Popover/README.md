# Popover

A popover component that displays content in a floating overlay, triggered by clicking on a trigger element.

## General

```js
import React from "react";
import Popover, { PopoverTrigger, PopoverContent, PopoverClose } from 'funda-ui/Popover';

// component styles
import 'funda-ui/Popover/index.css';

export default () => {
    return (
        <>
            <Popover direction="top" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [top]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                    <div>Cool!!!!!!!</div>
                    <PopoverClose className="btn btn-outline-light btn-sm mt-2 p-0 px-2">
                        Close popover
                    </PopoverClose>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="top" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [top & long text]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Mario Tennis 64 ROM download is available to play for Nintendo 64. This Mario game is the US English version at EmulatorGames.net exclusively.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="top-right" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [top-right]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="top-left" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [top-left]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="bottom" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [bottom]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="bottom-right" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [bottom-right]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <Popover direction="bottom-left" size="auto">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">Open [bottom-left]</button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-center">Hi, there. I am here.</div>
                </PopoverContent>
            </Popover>

            <hr />

            <div style={{marginLeft: 'calc(100% - 200px)'}}>
                <Popover direction="top" size="auto">
                    <PopoverTrigger>
                        <button className="btn btn-secondary btn-sm">Open [top & long text]</button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="text-center">Mario Tennis 64 ROM download is available to play for Nintendo 64. This Mario game is the US English version at EmulatorGames.net exclusively.</div>
                    </PopoverContent>
                </Popover>
            </div>
        </>
    );
}
```

## Using asChild

You can use the `asChild` prop to merge the trigger props with your custom element:

```js
import React from "react";
import Popover, { PopoverTrigger, PopoverContent, PopoverClose } from 'funda-ui/Popover';

// component styles
import 'funda-ui/Popover/index.css';

export default () => {
    return (
        <Popover direction="top">
            <PopoverTrigger asChild>
                <button className="btn btn-secondary btn-sm">Click me</button>
            </PopoverTrigger>
            <PopoverContent>
                <div>This popover is triggered by a button</div>
                <PopoverClose asChild>
                    <button className="btn btn-outline-light btn-sm mt-2">Close</button>
                </PopoverClose>
            </PopoverContent>
        </Popover>
    );
}
```

## Close Action

Use `PopoverClose` to hide the popover programmatically from within the content. It respects `asChild`, so you can merge the close behavior into any custom element.

```js
import React from 'react';
import Popover, { PopoverTrigger, PopoverContent, PopoverClose } from 'funda-ui/Popover';

export default () => (
    <Popover direction="top">
        <PopoverTrigger>
            <button className="btn btn-secondary btn-sm">Open</button>
        </PopoverTrigger>
        <PopoverContent>
            <div className="mb-2">Custom popover body.</div>
            <PopoverClose className="btn btn-sm btn-outline-primary">
                Dismiss
            </PopoverClose>
        </PopoverContent>
    </Popover>
);
```

## Controlled Mode

### 1. Control via ref methods

Allowing the parent to open/close the popover via ref methods.

```js
import React, { useRef } from 'react';
import Popover, { PopoverTrigger, PopoverContent } from 'funda-ui/Popover';

// component styles
import 'funda-ui/Popover/index.css';

export default () => {
    const popoverRef = useRef<any>(null);

    return (
        <>
            <Popover ref={popoverRef} direction="top">
                <PopoverTrigger>
                    <button className="btn btn-secondary btn-sm">👉🏻 Click does nothing, use buttons below</button>
                </PopoverTrigger>
                <PopoverContent>
                    <span>This popover is controlled by parent</span>
                </PopoverContent>
            </Popover>
            <div style={{ marginTop: 16 }}>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-primary" 
                    onClick={() => popoverRef.current?.show()}
                >
                    Show Popover
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-primary" 
                    onClick={() => popoverRef.current?.hide()} 
                    style={{ marginLeft: 8 }}
                >
                    Hide Popover
                </button>
            </div>
        </>
    );
}
```

### 2. Control via `open` / `onOpenChange` props

You can also fully control the popover state using `open` and `onOpenChange`:

```js
import React, { useState } from 'react';
import Popover, { PopoverTrigger, PopoverContent } from 'funda-ui/Popover';

// component styles
import 'funda-ui/Popover/index.css';

export default () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Popover open={open} onOpenChange={setOpen} direction="top">
            <PopoverTrigger asChild>
                <button className="btn btn-secondary btn-sm">
                    {open ? 'Close popover' : 'Open popover'}
                </button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="mb-2">This popover is controlled by props.</div>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => setOpen(false)}
                >
                    Close from content
                </button>
            </PopoverContent>
        </Popover>
    );
}
```

## Custom Popup Style

Custom style for the popup container.

```js
import React from 'react';
import Popover, { PopoverTrigger, PopoverContent } from 'funda-ui/Popover';

// component styles
import 'funda-ui/Popover/index.css';

export default () => {
    return (
        <Popover
            direction="top"
            popupArrowColor={[255,0,0,0.9]} // red
            popupContentStyle={{ background: 'rgba(255,0,0,0.9)', color: '#fff', borderRadius: 8, padding: 12 }}
        >
            <PopoverTrigger>
                <button className="btn btn-secondary btn-sm">
                    <strong>👉🏻 Show custom style popover</strong>
                </button>
            </PopoverTrigger>
            <PopoverContent>
                Custom style popover
                <PopoverClose className="btn btn-outline-light btn-sm mt-2 p-0 px-2 ms-2">Close</PopoverClose>
            </PopoverContent>
        </Popover>
    );
}
```


## API


* [`<Popover />`](#popover)
* [`<PopoverTrigger />`](#popover-trigger)
* [`<PopoverContent />`](#popover-content)
* [`<PopoverClose />`](#popover-close)



### Popover
```js
import Popover from 'funda-ui/Popover';
```

The main container component that manages the popover state.

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It exposes the following methods of the component: <br /> <ol><li>`ref.current.show()`</li><li>`ref.current.hide()`</li></ol> | - |
| `wrapperClassName` | string | - | The class name of the control wrapper. | - |
| `direction` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | top | The direction of the tip. Defaults to `top`. | - |
| `offset` | number  | 4 | Position offset of top and bottom. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `size` | `auto` \| `large` \| `medium` \| `small`  | auto | The size of the content area. Defaults to `auto`. | - |
| `popupArrowColor` | array | - | Custom color for the popup arrow (Use RGBA to express it), eg. `[255,0,0,0.9]` | - |
| `popupContentStyle` | React.CSSProperties | - | Custom style for the popup container (applied to the content div) | - |
| `id` | string | - | Custom id for the popover (auto-generated if not provided) | - |
| `open` | boolean | - | Controls whether the popover is open (controlled mode) | - |
| `onOpenChange` | (open: boolean) => void | - | Callback fired when the open state changes (controlled mode) | - |
| `children` | ReactNode  | - | Must contain `PopoverTrigger` and `PopoverContent` components | Yes |

### Popover Trigger
```js
import { PopoverTrigger } from 'funda-ui/Popover';
```

The trigger element that opens/closes the popover when clicked.

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `asChild` | boolean | false | If true, merges props with the child element instead of wrapping it in a div | - |
| `className` | string | `d-inline-block` | The class name of the trigger | - |
| `children` | ReactNode  | - | The trigger content | Yes |

### Popover Content
```js
import { PopoverContent } from 'funda-ui/Popover';
```

The content that is displayed in the popover overlay.

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | Additional class name for the content div | - |
| `children` | ReactNode  | - | The content to display | Yes |

### Popover Close
```js
import { PopoverClose } from 'funda-ui/Popover';
```

The helper component that closes the popover from inside the content area.

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `asChild` | boolean | false | If true, merges props with the child element instead of rendering a `button`. | - |
| `className` | string | - | Additional class for the close control. | - |
| `children` | ReactNode | `Close` | The content of the close control. | - |
| `onClick` | (event) => void | - | Optional click handler; prevent default to stop auto-closing. | - |
