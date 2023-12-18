# Scroll Reveal


## API

### Scroll Reveal
```js
import ScrollReveal from 'funda-ui/ScrollReveal';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `root` | Element | document | The Intersection Observer interface's read-only root property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. |
| `infinite` | boolean | false | Animate repeat infinite. |
| `defaultClassName` | string \| string[]  | - | The name of the class by default. |
| `showClassName` | string \| string[]  | - | The name of the class added after the collision, to control the hiding or displaying effect of the element. |
| `viewOffset` | JSON Object  | `{y:'0px',x:'0px'}` | This attribute expands/contracts the active boundaries of the viewport when calculating element visibility. |
| `delay` | number | - | A number indicating the minimum delay in milliseconds between notifications from this observer for a given target. |
| `threshold` | number \| number[] | `[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]` | Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points. <blockquote>It is usually used with `viewOffset`</blockquote> |
| `onChange` | function  | - | Call this function whenever the in view state changes. It returns two callback values. <br /> <ol><li>The first is the element in the viewport</li><li>The second is a string of visible percentage</li></ol> |
| `onIntersect` | function  | - | Call this function when elements intersect. It returns two callback values. <br /> <ol><li>The first is the element in the viewport</li><li>The second is intersecting state (**Boolean**)</li></ol> |




## Examples

```js
import React from "react";
import ScrollReveal from 'funda-ui/ScrollReveal';


export default () => {

    return (
        <>
          
            <ScrollReveal 
                viewOffset={{
                    y: '-50%',
                    x: '0px'
                }}
                defaultClassName="opacity-0"
                showClassName="opacity-100"
            >
                <div style={{bavkground: 'orange', height: '300px'}}>Box</div>
            </ScrollReveal>




            <ScrollReveal 
                defaultClassName="opacity-0"
                onChange={(box: any, visiblePct: string) => {
                    if (parseFloat(visiblePct) === 100 ) {
                        box.classList.add('opacity-100');
                    }
                    if (parseFloat(visiblePct) === 0 ) {
                        box.classList.remove('opacity-100');
                    }
                }}
                infinite
            >
                <div style={{bavkground: 'orange', height: '300px'}}>Box</div>
            </ScrollReveal>





            <ScrollReveal 
                showClassName={['shadow-lg', 'active']}
                onChange={(box, visiblePct) => {
                    console.log(box, visiblePct);
                }}
                onIntersect={(box, isIntersecting) => {
                    console.log(isIntersecting);
                }}
                infinite 
            >
                <div style={{bavkground: 'orange', height: '300px'}}>Box</div>
            </ScrollReveal>          
        </>
    );
}
```