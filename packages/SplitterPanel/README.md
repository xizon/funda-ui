# Splitter Panel

The left and right columns with customizable widths that can be dragged.


## General

```js
import React from "react";
import SplitterPanel from 'funda-ui/SplitterPanel';

// component styles
import 'funda-ui/SplitterPanel/index.css';


export default () => {

    return (
        <>
    
            <SplitterPanel
                initialWidth={250}
                onDrag={(type: 'dragStart' | 'dragEnd' | 'drag', leftWidth: number) => {
                    if (type === 'dragStart') {
                        console.log('dragStart:', leftWidth);
                    } else if (type === 'drag') {
                        console.log('dragMove:', leftWidth);
                    } else if (type === 'dragEnd') {
                        console.log('dragEnd:', leftWidth);
                    }
                }}
            >
                <SplitterPanel.Left>
                    <div style={{background: 'rgba(0,0,0,.01)', height: '300px'}}>Left</div>
                </SplitterPanel.Left>
                <SplitterPanel.Right>
                    <div style={{background: 'rgba(0,0,0,.01)', height: '300px'}}>Right</div>
                </SplitterPanel.Right>
            </SplitterPanel>


        </>
    );
}
```




## API

### Splitter Panel
```js
import SplitterPanel from 'funda-ui/SplitterPanel';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | - | The class name of the control wrapper. | - |
| `draggable` | boolean | true | Whether the divider is draggable to resize the panels. | - |
| `initialWidth` | number | 200 | The initial width (in pixels) of the left panel. | - |
| `minWidth` | number | 100 | The minimum width (in pixels) of the left panel. | - |
| `maxWidth` | number | window.innerWidth / 2 | The maximum width (in pixels) of the left panel. | - |
| `onDrag` | (type: 'dragStart' \| 'dragEnd' \| 'drag', leftWidth: number) => void | - | Callback triggered during divider drag events. type indicates the drag phase, leftWidth is the current left panel width. For example: `onDrag={(type:'dragStart'\|'dragEnd'\|'drag',leftWidth:number)=>{if(type==='dragStart'){console.log('dragStart:',leftWidth);}else if(type==='drag'){console.log('dragMove:',leftWidth);}else if(type==='dragEnd'){console.log('dragEnd:',leftWidth);}}}`.  | - |
| `children` | React.ReactNode | - | Use SplitterPanel.Left and SplitterPanel.Right as children to provide content for each panel. | - |



### Subcomponents

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| SplitterPanel.Left | React.ReactNode | - | Container for the left panel content. | ✅ |
| SplitterPanel.Right | React.ReactNode | - | Container for the right panel content. | ✅ |
