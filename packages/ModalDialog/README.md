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
| `triggerClassName` | string  | - | Specify a class for your trigger |
| `triggerContent` | ReactNode  | - | Set a piece of text or HTML code for the trigger |
| `autoClose` | number \| boolean  | false | Specify auto-close time. This function is not enabled when this value is false. If the value is `2000`, it will automatically close after 2 seconds. |
| `autoOpen` | boolean  | false | Automatically open the component, you can use it with the `autoClose` property at the same time |
| `closeBtnClassName` | string  | - | Specify a class for close button |
| `closeBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button |
| `submitBtnClassName` | string  | - | Specify a class for submit button |
| `submitBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the submit button |
| `enableVideo` | boolean  | false | Adapt the video to the window. For example, the content of the component can be written as: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>` <br /> or <br />`<video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"></video>` |
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


        </>
    );
}
```