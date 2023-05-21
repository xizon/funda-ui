# Modal Dialog


## API

### Modal Dialog
```js
import ModalDialog from 'react-pure-bootstrap/ModalDialog';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `heading` | ReactNode  | - | Set a window title |
| `maskDisabled` | boolean  | false | Disable mask |
| `maxWidth` | number \| string  | false | Custom modal max-width whick need a unit string. Such as: `200px` |
| `closeOnlyBtn` | boolean  | false | Disable mask to close the window |
| `closeDisabled` | boolean  | false | Disable the close button. |
| `triggerClassName` | string  | - | Specify a class for your trigger |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |
| `autoClose` | number \| boolean  | false | Specify auto-close time. This function is not enabled when this value is false. If the value is `2000`, it will automatically close after 2 seconds. |
| `autoOpen` | boolean  | false | Automatically open the component, you can use it with the `autoClose` property at the same time |
| `closeBtnClassName` | string  | - | Specify a class for close button |
| `closeBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button |
| `submitBtnClassName` | string  | - | Specify a class for submit button |
| `submitBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the submit button |
| `enableVideo` | boolean  | false | Adapt the video to the window. For example, the content of the component can be written as: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>` <br /> or <br />`<video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"></video>` |
| `onLoad` | function  | - | Call a function when the modal is rendered. It returns two callback values, One is the function of open, and the other is the function of close, they can be called separately. |
| `onOpen` | function  | - | Call a function when the modal is opened. It returns two callback values, one is the trigger object and the other is the closing event (a function). |
| `onClose` | function  | - | Call a function when the modal is closed. It returns a callback value which is the trigger object. |
| `onSubmit` | function  | - | Call a function when the modal is submitted. It returns two callback values, one is the trigger object and the other is the closing event (a function) |



## Examples

```js
import React from "react";
import ModalDialog from 'react-pure-bootstrap/ModalDialog';

export default () => {

    return (
        <>

            <h3>Modal Dialog</h3>
            <p>Allows user to interact with it before they can go back to using the parent application.</p>
            {/* ================================================================== */}
            <ModalDialog
                heading="Title Here"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#">Launch demo modal</a>
                </>}
                closeBtnClassName="btn btn-secondary"
                closeBtnLabel="Close"
                submitBtnClassName="btn btn-primary"
                submitBtnLabel={<><i className="fa fa-paper-plane"></i> Save</>}
                onOpen={(e, closewin) => {
                    console.log('open: ', e.target);

                    const myAppBtn = document.querySelector('#app-mybtn');
                    myAppBtn?.addEventListener('pointerdown', (e) => {
                        e.preventDefault();
                        console.log('click event');
                        closewin();
                    });



                }}
                onClose={(e) => {
                    console.log('close: ', e.target);

                    // Remove all Event Listeners
                    const myAppBtn = document.querySelector('#app-mybtn');
                    myAppBtn?.replaceWith(myAppBtn?.cloneNode(true));   

                    // Modifying React State can ensure that the window content is updated in real time
                    // setTimeout( ()=> {
                    //     setState(...);
                    // }, 350);

                }}
                onSubmit={(e, closewin) => {
                    console.log('submit: ', e.target);
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
                enableVideo={true}
                maxWidth="1200px"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#">Launch demo modal</a>
                </>}
            >
                <video playsInline controls poster="https://uiux.cc:3000/assets/videos/480x270/demo.jpg" src="https://uiux.cc:3000/assets/videos/480x270/demo.mp4"></video>
            </ModalDialog>
            

            <ModalDialog
                enableVideo={true}
                maxWidth="1200px"
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#">Launch demo modal</a>
                </>}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </ModalDialog>


            <h3>Automatically open&close the pop-up window</h3>
            {/* ================================================================== */}
            <ModalDialog
                autoOpen={true}
                autoClose={3000}
                triggerClassName="d-inline w-auto"
                triggerContent={<>
                    <a href="#">Launch demo modal</a>
                </>}
                maskDisabled
            >
                <h4>This window will automatically close after 3 seconds :)</h4>
                <p>You can click the button on the page to trigger the pop-up window.</p>
            </ModalDialog>


            <h3>Modal that cannot be closed</h3>
            {/* ================================================================== */}
            <ModalDialog
                autoOpen={true}
                closeOnlyBtn
                closeDisabled
            >
                <h4>This is a modal that cannot be closed</h4>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </ModalDialog>


        </>
    );
}
```


## Asynchronous Usage

Do not use trigger to bind Modal, and expose OPEN and CLOSE methods, which can be called in your code freely. It is usually used to process asynchronous data.


```js
import React, { useState, useEffect, useRef } from "react";
import ModalDialog from 'react-pure-bootstrap/ModalDialog';

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
    const [modalOpenFunc, setModalOpenFunc] = useState<any>(null);
    const [modalCloseFunc, setModalCloseFunc] = useState<any>(null);
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
        if (modalOpenFunc) modalOpenFunc();

        // auto close
        timer.current = setTimeout(() => {
            if (modalCloseFunc) modalCloseFunc();
        }, 3000);

    }

    useEffect(() => {

        if (!fetchOk) {
            fetchData();
        }

    }, []);


    return (
        <>

            <a href="#" onClick={handleClick}>click here to use external scripts to trigger Open and Close events</a>
            <ModalDialog
                heading="Choose a block"
                triggerClassName=""
                triggerContent=""
                onLoad={(openFunc, closeFunc) => {
                    // Using exposed OPEN and CLOSE methods
                    setModalOpenFunc(openFunc);
                    setModalCloseFunc(closeFunc);
                }}
                onOpen={(e, closewin) => {

                    // Use "setTimeout()" to ensure asynchronous data exists
                    setTimeout(() => {
                        const btns = document.querySelectorAll('#app-mydata-list > a');

                        [].slice.call(btns).forEach((node: any) => {
                            node?.addEventListener('click', (e: any) => {
                                e.preventDefault();

                                // do something
                                console.log(e.currentTarget.dataset.name);

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
                    }, 350);


                }}
            >
                {data.length > 0 ? <>

                    <div id="app-mydata-list">
                        {data ? data.map((item, i) => {
                            return <a href="#" key={i} data-name={`${item.item_code}`} style={{display: 'block'}}>{item.item_name}</a>;
                        }) : null}

                    </div>

                </> : null}

            </ModalDialog>

        </>
    )
}
```

