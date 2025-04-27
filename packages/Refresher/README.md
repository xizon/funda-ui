# Refresher

## General

Please use your browser's mobile mode to preview.

```js
import React from "react";
import Refresher from 'funda-ui/Refresher';

export default () => {


    return (
        <Refresher 
            onRefresh={async () => {
                console.log('Start refreshing');
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log('The refresh is complete');
            }}
            pullingText="Pull down to refresh"
            readyToRefreshText="Release to refresh"
            refreshingText="Refreshing..."
            //scrollableElementClassName="body.app"
        >
            <div style={{ height: 1000, background: '#f0f0f0' }}>
                Here's the content area, just put the content, long enough to scroll.
            </div>
        </Refresher>
    );
}
```


## API

### Refresher
```js
import Refresher from 'funda-ui/Refresher';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `pullingText` | React.ReactNode | `'Pull down to refresh'` | Text shown while pulling down  | - |
| `readyToRefreshText` | React.ReactNode | `'Release to refresh'` | Text shown when threshold is reached  | - |
| `refreshingText` | React.ReactNode | `'Refreshing...'` | Text shown while refreshing | - |
| `threshold` | number | `100` | The pull distance (px) that triggers the refresh  | - |
| `triggerHeight` | number | `50` | Height (in px) of the trigger area | - |
| `triggerAreaStyle` | React.CSSProperties | - | Custom style for the trigger area | - |
| `scrollableElementClassName` | string | - | Class name of the scrollable element. Only allows pull-to-refresh when its scrollTop is 0  | - |
| `onRefresh` | `() => Promise<void>` | - | Refresh callback, must return a Promise | ✅ |
| `children` | React.ReactNode | - | Content area           | ✅ |

> You can add more usage notes or advanced examples below as needed.