# Scroll Reveal



## General

Scroll the screen to see the transition effect of background color and border.


`styles.scss`:
```css
.demo-sr-bg1 > div {
    background-color: rgb(198, 247, 237);
}
.demo-sr-bg1-active > div {
    animation: demo-sr-bg1-anim 1s linear forwards;
}

.demo-sr-bg2 > div {
    background-color: rgb(198, 247, 208);
}
.demo-sr-bg2-active > div {
    animation: demo-sr-bg2-anim 1s linear forwards;
}

.demo-sr-bg3 > div {
    background-color: rgb(198, 247, 208);
}
.demo-sr-bg3-active > div {
    animation:demo-sr-bg3-anim 1s linear forwards;
}


@keyframes demo-sr-bg1-anim {
    from {
        background-color: rgb(198, 247, 237);
    }

    to {
        background-color: rgb(250, 181, 212);
    }
}

@keyframes demo-sr-bg2-anim {
    from {
        background-color: rgb(198, 247, 208);
    }

    to {
        background-color: rgb(212, 181, 250);
    }
}

@keyframes demo-sr-bg3-anim {
    from {
        border: 5px solid #000;
    }

    to {
        border: 15px solid rgb(47, 50, 237)
    }
}
```


`index.tsx`:
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
                defaultClassName="demo-sr-bg1"
                showClassName="demo-sr-bg1-active"
            >
                <div style={{height: '80vh'}}>Box</div>
            </ScrollReveal>




            <ScrollReveal 
                defaultClassName="demo-sr-bg2"
                onChange={(box, visiblePct) => {
                    if (parseFloat(visiblePct) === 100 ) {
                        box.classList.add('demo-sr-bg2-active');
                    }
                    if (parseFloat(visiblePct) === 0 ) {
                        box.classList.remove('demo-sr-bg2-active');
                    }
                }}
                infinite
            >
                <div style={{height: '80vh'}}>Box</div>
            </ScrollReveal>





            <ScrollReveal 
                showClassName={['shadow-lg', 'demo-sr-bg3', 'demo-sr-bg3-active']}
                onChange={(box, visiblePct) => {
                    console.log(box, visiblePct);
                }}
                onIntersect={(box, isIntersecting) => {
                    console.log(isIntersecting);
                }}
                infinite 
            >
                <div style={{height: '300px'}}>Box</div>
            </ScrollReveal>             
        </>
    );
}
```


## ❤️ API

### Scroll Reveal
```js
import ScrollReveal from 'funda-ui/ScrollReveal';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `root` | Element | document | The Intersection Observer interface's read-only root property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. | - |
| `infinite` | boolean | false | Animate repeat infinite. | - |
| `defaultClassName` | string \| string[]  | - | The name of the class by default. | - |
| `showClassName` | string \| string[]  | - | The name of the class added after the collision, to control the hiding or displaying effect of the element. | - |
| `viewOffset` | JSON Object  | `{y:'0px',x:'0px'}` | This attribute expands/contracts the active boundaries of the viewport when calculating element visibility. | - |
| `delay` | number | - | A number indicating the minimum delay in milliseconds between notifications from this observer for a given target. | - |
| `threshold` | number \| number[] | `[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]` | Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points. <blockquote>It is usually used with `viewOffset`</blockquote> | - |
| `onChange` | function  | - | Call this function whenever the in view state changes. It returns two callback values. <br /> <ol><li>The first is the element in the viewport (**HTMLElement**)</li><li>The second is a string of visible percentage (**String**)</li></ol> | - |
| `onIntersect` | function  | - | Call this function when elements intersect. It returns two callback values. <br /> <ol><li>The first is the element in the viewport (**HTML Element**)</li><li>The second is intersecting state (**Boolean**)</li></ol> | - |


