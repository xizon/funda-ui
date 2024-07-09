# Modal Dialog


## API

### Modal Dialog
```js
import ModalDialog from 'funda-ui/ModalDialog';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It exposes the following methods of the component:  <br /> <ol><li>`ref.current.open()`</li><li>`ref.current.close()`</li></ol> | - |
| `modalContentClassName` | string  | - | The extended class name of content wrapper | - |
| `modalHeaderClassName` | string  | - | The extended class name of header | - |
| `modalTitleClassName` | string  | - | The extended class name of title | - |
| `modalBodyClassName` | string  | - | The extended class name of content area | - |
| `modalFooterClassName` | string  | - | The extended class name of footer area | - |
| `modalFooterExpandedContentClassName` | string  | - | The extended class name of footer content area | - |
| `draggable` | boolean  | false | Pop-ups that can be dragged | - |
| `draggedPreventOutsideScreen` | JSON Object  | - | Prevent dragged item to be dragged outside of screen. You can set the vertical or horizontal direction. such as `{xAxis: true, yAxis: true}` <blockquote>It is valid when `draggable` is "true"</blockquote> | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `show` | boolean  | false | Whether the modal dialog is visible or not, you can use it with the `autoClose` property at the same time | ✅ |
| `autoClose` | number \| boolean  | false | Specify auto-close time. This function is not enabled when this value is false. If the value is `2000`, it will automatically close after 2 seconds. | - |
| `heading` | ReactNode  | - | Set a window title | - |
| `footerExpandedContent` | ReactNode  | - | Set footer content expanded | - |
| `maskDisabled` | boolean  | false | Disable mask | - |
| `maskOpacity` | string \| number  | - | The mask opacity. The value is in the range *0.0* to *1.0*. Do not want the user to see but also do not want to disable, use `0.001` | - |
| `maxWidth` | number \| string \| function  | false | Custom modal max-width whick need a unit string. Such as: `500px` or `() => window.innerWidth >= 768 ? window.innerWidth - 100 + 'px' : undefined`| - |
| `minHeight` | number \| string \| function  | false | Custom modal max-height whick need a unit string. Such as: `auto` or `() => window.innerHeight - 150 + 'px'` | - |
| `closeOnlyBtn` | boolean  | false | Disable mask to close the window | - |
| `closeDisabled` | boolean  | false | Disable the close button & mask. | - |
| `triggerClassName` | string  | - | Specify a class for your trigger | - |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger | - |
| `closeBtnClassName` | string  | - | Specify a class for close button | - |
| `closeBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button | - |
| `submitBtnClassName` | string  | - | Specify a class for submit button | - |
| `submitBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the submit button | - |
| `fullscreen` | boolean  | false | Enable fullscreen modal. | - |
| `enableVideo` | boolean  | false | Adapt the video to the window. For example, the content of the component can be written as: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>` <br /> or <br />`<video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"></video>` | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onSubmit`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> | - |
| `onLoad` | function  | - | Call a function when the modal is rendered. It returns two callback values. <br /> <ol><li>The first is the function of open(**Function**)</li><li>The second is the function of close (**Function**)</li></ol>. | - |
| `onOpen` | function  | - | Call a function when the modal is opened. It returns two callback values, one is the trigger object and the other is the closing event (**Function**). | - |
| `onClose` | function  | - | Call a function when the modal is closed. It returns a callback value which is the trigger object. | - |
| `onSubmit` | function  | - | Call a function when the modal is submitted. It returns three callback values. <br /> <ol><li>The first is the trigger object</li><li>The second is the closing event (**Function**)</li><li> The third is a string passed by the `data` attribute</li></ol> | - |





## Examples

```js
import React from "react";
import ModalDialog from 'funda-ui/ModalDialog';

export default () => {

    return (
        <>

            <h3>Modal Dialog</h3>
            <p>Allows user to interact with it before they can go back to using the parent application.</p>
            {/* ================================================================== */}
            <ModalDialog
                show={false}
                data="mydata"
                heading="Title Here"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                closeBtnClassName="btn btn-secondary"
                closeBtnLabel="Close"
                submitBtnClassName="btn btn-primary"
                submitBtnLabel={<><i className="fa fa-paper-plane"></i> Save</>}
                onOpen={(e, closewin) => {
                    if (e === null) return;
                    
                    console.log('open: ', e.target);

                    const myAppBtn = document.querySelector('#app-mybtn');
                    
                    myAppBtn?.addEventListener('pointerdown', (e) => {
                        e.preventDefault();
                        console.log('click event');
                        closewin();
                    });



                }}
                onClose={(e) => {
                    if (e === null) return;

                    console.log('close: ', e.target);

                    // Remove all Event Listeners
                    const myAppBtn = document.querySelector('#app-mybtn');
                    myAppBtn?.replaceWith(myAppBtn?.cloneNode(true));   

                }}
                onSubmit={(e, closewin, data) => {
                    if (e === null) return;
                    
                    console.log('submit: ', e.target, data);
                    e.target.disabled = true;
                    e.target.innerHTML = '<i class="fa fa-spinner fa-spin fa-fw"></i> Loading...'

                    setTimeout(() => {
                        closewin();
                        e.target.disabled = false;
                        e.target.innerHTML = '<i class="fa fa-paper-plane"></i> Save</>'
                    },1000);
                }}
                closeOnlyBtn

            >
                <h4>click the button below!!</h4>
                <p><button type="button" id="app-mybtn">this is an event</button></p>
            </ModalDialog>


            <h3>Modal Dialog (Video)</h3>
            <p>Use the following HTML code to fire video.</p>
            {/* ================================================================== */}
            <ModalDialog
                show={false}
                enableVideo={true}
                maxWidth="1200px"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
            >
                <video playsInline controls poster="https://uiux.cc:3000/assets/videos/480x270/demo.jpg" src="https://uiux.cc:3000/assets/videos/480x270/demo.mp4"></video>
            </ModalDialog>
            

            <ModalDialog
                show={false}
                enableVideo={true}
                maxWidth="1200px"
                maskOpacity="0"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </ModalDialog>


            <h3>Adjust depth and matte visibility</h3>
            {/* ================================================================== */}

            <ModalDialog
                show={false}
                enableVideo={true}
                maxWidth="1200px"
                maskOpacity="0"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                maskOpacity={0.001}
                depth={1040}
            >
                <div>Text</div>
            </ModalDialog>




            <h3>Automatically open&close the pop-up window</h3>
            {/* ================================================================== */}
            <ModalDialog
                show={true}
                autoClose={3000}
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                maskDisabled
            >
                <h4>This window will automatically close after 3 seconds :)</h4>
                <p>You can click the button on the page to trigger the pop-up window.</p>
            </ModalDialog>


            <h3>Modal that cannot be closed</h3>
            {/* ================================================================== */}
            <ModalDialog
                show={true}
                closeOnlyBtn
                closeDisabled
            >
                <h4>This is a modal that cannot be closed</h4>
            </ModalDialog>




            <h3>Draggable</h3>
            {/* ================================================================== */}
            <ModalDialog
                draggable
                draggedPreventOutsideScreen={{
                    xAxis: true,
                    yAxis: true
                }}
                ...
            >
                ...
            </ModalDialog>



        </>
    );
}
```


## Display Number of CountDown

```js
import React, { useEffect, useState, useRef, useCallback  } from "react";
import ModalDialog from 'funda-ui/ModalDialog';

export default () => {

    const [autoCloseCount, setAutoCloseCount] = useState<number>(6);
    const intervalIdRef = useRef<any>(null);
    const startTimer = useCallback(() => {
        intervalIdRef.current = setInterval(() => {

        
            setAutoCloseCount((prevState: number) => {
                let _val = prevState;
                if ( _val > 0 ) {
                    _val = _val - 1;
                } else {
                    stopTimer();
                }
                console.log('***', _val)

                return _val;
            });



        }, 1000);
    }, []);
    

    const stopTimer = useCallback(() => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
    }, []);


    useEffect(() => {

        startTimer();

        return () => {
            stopTimer();
        }

    }, []);
    


    return (
        <>


            <ModalDialog
                show={true}
                autoClose={6000}
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                maskDisabled
            >
                <h4>This window will automatically close after {autoCloseCount} seconds :)</h4>
                <p>You can click the button on the page to trigger the pop-up window.</p>
            </ModalDialog>



        </>
    );
}
```




## Custom content area without spacing and sticky

```js
import React from "react";
import ModalDialog from 'funda-ui/ModalDialog';

export default () => {

    const [closeModalFunc, setCloseModalFunc] = useState<Function | null>(null);

    return (
        <>

            <ModalDialog
                modalBodyClassName="p-0"
                show={false}
                maxWidth="850px"
                minHeight="175px"
                heading="Title Here"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                onOpen={(e, closewin) => {
                    setCloseModalFunc(() => closewin);
                }}
            >

                <div className="custom-content">

                    {/* NAV */}
                    <div className="position-sticky top-0 p-2 px-3 z-2 bg-body border-bottom">
                        <strong>Navigation</strong>
                    </div>
                    {/* /NAV */}



                    {/* CONTENT */}
                    <div className="p-3">
                        content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />content here...<br />
                    </div>
                    {/* /CONTENT */}

                
                    {/* TOOLBOX */}
                    <div className="border-top position-sticky bottom-0 px-3 z-2 bg-body pb-2">

                        <div className="text-start pt-2">

                            <div className="row g-3 align-items-center">
                                <div className="col-auto text-start">
                                    <button tabIndex={-1} type="button" className="btn btn-secondary my-1 btn-sm">Button 1</button>
                                    <button tabIndex={-1} type="button" className="btn mx-1 my-1 btn-sm ms-2 btn-outline-secondary"><small>Button 2</small></button>
                                    <button tabIndex={-1} type="button" className="btn mx-1 my-1 btn-sm ms-2 btn-outline-secondary"><small>Button 3</small></button>
                                </div>
                                <div className="col-auto gx-0">
                                    <input type="text" placeholder="Input" className="form-control form-control-sm" style={{ width: '100px' }} />
                                </div>
                                <div className="col text-end">
                                    <button tabIndex={-1} type="button" className="btn btn-outline-secondary btn-sm text-decoration-none" onClick={(e: React.MouseEvent) => {
                                        closeModalFunc?.();
                                    }}>Discard</button>
                                    <button tabIndex={-1} type="button" className="btn btn-primary btn-sm text-decoration-none ms-2" onClick={(e: React.MouseEvent) => {
                                        // do something...

                                        // close
                                        closeModalFunc?.();
                                    }}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /TOOLBOX */}

                </div>
            </ModalDialog>

        </>
    );
}
```





## Asynchronous Usage

Do not use trigger to bind Modal, and expose OPEN and CLOSE methods, which can be called in your code freely. It is usually used to process asynchronous data.


```js
import React, { useState, useEffect, useRef } from "react";
import ModalDialog from 'funda-ui/ModalDialog';

class DataService {

 
    // "Date.now()" is used to detect mutable asynchronous data
    async getList() {
        return {
            code: 0,
            message: 'OK',
            data: [
                { item_name: 'foo' + Date.now(), item_code: 'bar' },
                { item_name: 'foo2' + Date.now(), item_code: 'bar2' },
                { item_name: 'foo3' + Date.now(), item_code: 'bar3' }
            ]
        };
    }

}


export default () => {

    const timer = useRef<any>(null); // we can save timer in useRef and pass it to child
    const [show, setShow] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [fetchOk, setFetchOk] = useState<boolean>(false);
    
    
    function fetchData() {
        const service = new DataService();
        service.getList().then(function (response: any) {
            setData(response.data);
            setFetchOk(true);
            
        });
    }

    function handleClick(e: any) {
        e.preventDefault();
        
        fetchData();
        setShow(true);

        // auto close
        timer.current = setTimeout(() => {
            setShow(false);
        }, 3000);

    }

    useEffect(() => {

        if (!fetchOk) {
            fetchData();
        }

    }, []);


    return (
        <>

            <a href="#" onClick={handleClick}>click here to open</a>
            <ModalDialog
                show={show}
                heading="Choose a block"
                triggerClassName=""
                triggerContent=""
                onOpen={(e, closewin) => {

                    // Use "setTimeout()" to ensure asynchronous data exists
                    setTimeout(() => {
                        const btns = document.querySelectorAll('#app-mydata-list > a');

                        [].slice.call(btns).forEach((node: any) => {

                            // Prevent touch screen from starting to click option, DO NOT USE "pointerdown"
                            node?.addEventListener('click', (e: any) => {
                                e.preventDefault();

                                // do something
                                console.log(e.currentTarget.dataset.name);
                                closewin();

                            });
                        });
                    }, 0);

                }}
                onClose={(e) => {

                    clearTimeout(timer.current);

                    // Remove all Event Listeners
                    const btns = document.querySelectorAll('#app-mydata-list > a');
                    [].slice.call(btns).forEach((node: any) => {
                        node?.replaceWith(node?.cloneNode(true));
                    });

                    // Modifying React State can ensure that the window content is updated in real time
                    setTimeout(() => {
                        setData([]);
                        setShow(false);
                    }, 350);


                }}
            >
                {data.length > 0 ? <>

                    <div id="app-mydata-list">
                        {data ? data.map((item, i) => {
                            return <a href="#" tabIndex={-1} key={i} data-name={`${item.item_code}`} style={{display: 'block'}}>{item.item_name}</a>;
                        }) : null}

                    </div>

                </> : null}

            </ModalDialog>

        </>
    )
}
```



## Using exposed OPEN and CLOSE methods


```js
import React, { useState } from "react";
import ModalDialog from 'funda-ui/ModalDialog';

export default () => {

    const [modalOpenFunc, setModalOpenFunc] = useState<any>(null);

    function handleClick(e: any) {
        e.preventDefault();
        if ( modalOpenFunc ) modalOpenFunc();
    }


    return (
        <>

            <a href="#" onClick={handleClick}>click here to use external scripts to trigger Open and Close events</a>
            <ModalDialog
                show={false}
                onLoad={(openFunc, closeFunc) => {
                    setModalOpenFunc(openFunc);
                }}
            >
                <h4>This is a modal</h4>
            </ModalDialog>



        </>
    );
}
```




## Using exposed OPEN and CLOSE methods

Lets you callback the handle exposed as attribute `ref`.


```js
import React, { useRef } from "react";
import ModalDialog from 'funda-ui/ModalDialog';

export default () => {

    const modalHandleRef = useRef<any>();

    function handleOpen(e: any) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();
        if (modalHandleRef.current) modalHandleRef.current.open();
      
    }

    function handleClose(e: any) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();
        if (modalHandleRef.current) modalHandleRef.current.close();
      
    }

    return (
        <>

            <a href="#" onClick={handleOpen}>open modal</a>
            <a href="#" onClick={handleClose}>close modal</a>
            <ModalDialog
                ref={modalHandleRef}
                show={false}
            >
                <h4>This is a modal</h4>
            </ModalDialog>


        </>
    );
}
```



## Custom close handler


```js
import React, { useState } from "react";
import ModalDialog from 'funda-ui/ModalDialog';
import Switch from 'funda-ui/Switch';


export default () => {

    const [closeModalFunc, setCloseModalFunc] = useState<Function | null>(null);

    function handleCloseModal() {
        closeModalFunc?.();
    }

    return (
        <>
            <ModalDialog
                show={false}
                heading="Title Here"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#" tabIndex={-1}>Launch demo modal</a>
                </>}
                onOpen={(e, closewin) => {
                    setCloseModalFunc(() => closewin);
                }}
            >

                xxx
            </ModalDialog>

        </>
    );
}
```




## Using child component


```js
import React, { useRef } from "react";
import ModalDialog from 'funda-ui/ModalDialog';


// child component
import Child from "./Child";

export default () => {

    const formRef = useRef<any>(null);

    return (
        <>

            <ModalDialog
                show={false}
                ...
            >
                <div ref={formRef}>
                    <Child id={xxx} key={Math.random()} /> {/* The child component in the Modal need to use [key] to ensure that they are updated at any time.*/}
                </div>
            </ModalDialog>


        </>
    );
}
```
