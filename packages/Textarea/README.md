# Textarea



## General

```js
import React from "react";
import Textarea from 'funda-ui/Textarea';


/**
 * Text Auto Paragraph
 * 
 * @reference: https://developer.wordpress.org/reference/functions/wpautop/
 * @param {String} pee  - The text which has to be formatted. Characters entered, including "Enter" but not <p>, <br> tags
 * @param {?Boolean} br - If set, this will convert all remaining line breaks after paragraphing. 
 *                        Line breaks within <script>, <style>, and <svg> tags are not affected.
 * @return {String}     - Text which has been converted into correct paragraph tags.
 */
function autop(pee, br = true) {

    const pre_tags = {};
    if ( pee.trim() === '' ) {
        return '';
    }

    pee = pee + "\n"; // just to make things a little easier, pad the end
    if ( pee.indexOf( '<pre' ) > -1 ) {
        const pee_parts = pee.split( '</pre>' );
        const last_pee = pee_parts.pop();
        pee = '';
        pee_parts.forEach(function(pee_part, index) {
            const start = pee_part.indexOf( '<pre' );

            // Malformed html?
            if ( start === -1 ) {
                pee += pee_part;
                return;
            }

            const name = "<pre wp-pre-tag-" + index + "></pre>";
            pre_tags[name] = pee_part.substr( start ) + '</pre>';
            pee += pee_part.substr( 0, start ) + name;

        });

        pee += last_pee;
    }

    pee = pee.replace(/<br \/>\s*<br \/>/, "\n\n");

    // Space things out a little
    const allblocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)';
    pee = pee.replace( new RegExp('(<' + allblocks + '[^>]*>)', 'gmi'), "\n$1");
    pee = pee.replace( new RegExp('(</' + allblocks + '>)', 'gmi'), "$1\n\n");
    pee = pee.replace( /\r\n|\r/, "\n" ); // cross-platform newlines

    if ( pee.indexOf( '<option' ) > -1 ) {
        // no P/BR around option
        pee = pee.replace( /\s*<option'/gmi, '<option');
        pee = pee.replace( /<\/option>\s*/gmi, '</option>');
    }

    if ( pee.indexOf('</object>') > -1 ) {
        // no P/BR around param and embed
        pee = pee.replace( /(<object[^>]*>)\s*/gmi, '$1');
        pee = pee.replace( /\s*<\/object>/gmi, '</object>' );
        pee = pee.replace( /\s*(<\/?(?:param|embed)[^>]*>)\s*/gmi, '$1');
    }

    if ( pee.indexOf('<source') > -1 || pee.indexOf('<track') > -1 ) {
        // no P/BR around source and track
        pee = pee.replace( /([<\[](?:audio|video)[^>\]]*[>\]])\s*/gmi, '$1');
        pee = pee.replace( /\s*([<\[]\/(?:audio|video)[>\]])/gmi, '$1');
        pee = pee.replace( /\s*(<(?:source|track)[^>]*>)\s*/gmi, '$1');
    }

    pee = pee.replace(/\n\n+/gmi, "\n\n"); // take care of duplicates

    // make paragraphs, including one at the end
    const pees = pee.split(/\n\s*\n/);
    pee = '';
    pees.forEach(function(tinkle) {
        pee += '<p>' + tinkle.replace( /^\s+|\s+$/g, '' ) + "</p>\n";
    });

    pee = pee.replace(/<p>\s*<\/p>/gmi, ''); // under certain strange conditions it could create a P of entirely whitespace
    pee = pee.replace(/<p>([^<]+)<\/(div|address|form)>/gmi, "<p>$1</p></$2>");
    pee = pee.replace(new RegExp('<p>\s*(</?' + allblocks + '[^>]*>)\s*</p>', 'gmi'), "$1", pee); // don't pee all over a tag
    pee = pee.replace(/<p>(<li.+?)<\/p>/gmi, "$1"); // problem with nested lists
    pee = pee.replace(/<p><blockquote([^>]*)>/gmi, "<blockquote$1><p>");
    pee = pee.replace(/<\/blockquote><\/p>/gmi, '</p></blockquote>');
    pee = pee.replace(new RegExp('<p>\s*(</?' + allblocks + '[^>]*>)', 'gmi'), "$1");
    pee = pee.replace(new RegExp('(</?' + allblocks + '[^>]*>)\s*</p>', 'gmi'), "$1");

    if ( br ) {
        pee = pee.replace(/<(script|style)(?:.|\n)*?<\/\\1>/gmi, autopNewlinePreservationHelper); // /s modifier from php PCRE regexp replaced with (?:.|\n)
        pee = pee.replace(/(<br \/>)?\s*\n/gmi, "<br />\n"); // optionally make line breaks
        pee = pee.replace( '<PreserveNewline />', "\n" );
    }

    pee = pee.replace(new RegExp('(</?' + allblocks + '[^>]*>)\s*<br />', 'gmi'), "$1");
    pee = pee.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/gmi, '$1');
    pee = pee.replace(/\n<\/p>$/gmi, '</p>');

    if ( Object.keys(pre_tags).length ) {
        pee = pee.replace( new RegExp( Object.keys( pre_tags ).join( '|' ), "gi" ), function (matched) {
            return pre_tags[matched];
        });
    }

    return pee;
}


function autopNewlinePreservationHelper(matches) {
    return matches[0].replace( "\n", "<PreserveNewline />" );
}


/**
 * Undo autop
 * 
 * @param {String} str  - The text which has to be formatted. Characters entered, including "Enter" but not <p>, <br> tags
 */
function reverseAutop(str) {
    if (typeof str === 'undefined') return str;

    //remove any new lines already in there
    str = str.replace("\n", "");

    //remove all <p>
    str = str.replace("<p>", "");

    //replace <br /> with \n
    str = str.replace(/[<]br[^>]*[>]/gi, "\n");

    //replace </p> with \n\n
    str = str.replace("</p>", "\n\n");


    //remove last line from string
    str = str.replace(/(\r\n|\n|\r).*$/, "");

    return str;
}

export default () => {
    return (
        <>
            <Textarea
                label="Character interception"
                name="name1"
                placeholder="String"
                rows={4}
                onChangeCallback={(e) => {
                    if (e.target.value.length > 20) {
                        return e.target.value.slice(0, 20);
                    }
                }}
            />

            <Textarea
                label="Auto Size"
                name="name2"
                rows={1}
                autoSize
                onResize={(el: HTMLElement, dimensions: number[]) => {
                    console.log(el, dimensions);
                }}
                
            />


            <Textarea
                label="Paragraph Formatting"
                name="name3"
                rows={4}
                value={reverseAutop(`<p>a<br />\nb<br />\nc<br />\nd</p>\n`)}
                onChange={(e) => {
                    console.log(autop(e.target.value));
                }}
                
            />



        </>
    );
}
```




## No spacing

```js
import React from "react";
import Textarea from 'funda-ui/Textarea';


export default () => {


    return (
        <>

            <Textarea
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Textarea
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```



## Asynchronous Usage


```js
import React, { useEffect, useState } from "react";
import Textarea from 'funda-ui/Textarea';


export default () => {

    const [textareaValue, setTextareaValue] = useState('');

    function handleChange(e) {
        setTextareaValue(e.target.value);
    }

    useEffect(() => {
       setTextareaValue('default');
    }, []);


    return (
        <>
            <Textarea
                value={textareaValue}   // Cannot be null
                onChange={handleChange}
                name="String"
                label="String"
                rows={4}
            />
            <p>{textareaValue}</p>

        </>
    );
}
```


## Complex use of popup and default value

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useState, useRef } from 'react';

// bootstrap components
import ModalDialog from 'funda-ui/ModalDialog';
import Textarea from 'funda-ui/Textarea';

export default () => {

    const conRef = useRef<any>(null);
    const [show, setShow] = useState<boolean>(false);
    const [userContent, setUserContent] = useState<string>('');

    return (


        <>
      
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setShow(true);
                }}
            >Open Textarea Popup</a>


         
            {/*<!-- EDIT INFO -->*/}
            <ModalDialog
                show={show}
                heading="TEST"
                triggerClassName=""
                triggerContent=""
                closeBtnClassName="btn btn-secondary"
                closeBtnLabel="Cancel"
                submitBtnClassName="btn btn-primary"
                submitBtnLabel="Confirm"
                onOpen={() => {
                    // if (conRef.current) conRef.current.set('my default value here', () => { console.log('callback') });
                }}
                onClose={(e) => {

                    // Modifying React State can ensure that the window content is updated in real time
                    setTimeout(() => {
                        setShow(false);
                    }, 350);

                }}
                onSubmit={(e, closewin, data) => {
                    if (e === null) return;

                    closewin();

                    setTimeout(() => {
                        setUserContent('');
                        if (conRef.current) conRef.current.clear();
                        setShow(false);
                    }, 350);


                    // do something 
                    alert(userContent);


                }}
            >

                <Textarea
                    contentRef={conRef}
                    name="name"
                    rows={3}
                    autoSize
                    onChange={(e) => {
                        setUserContent(e.target.value);
                    }}
                    
                />
                

            </ModalDialog>
            {/*<!-- /EDIT INFOD -->*/}




        </>
    )
}
```


## AI Predict

Set `aiPredict` to true, and you need to use a `aiPredictFetchCallback` property to format the data of the API callback, which will match the data structure of the component.



```js
import React from "react";
import Textarea from 'funda-ui/Textarea';


class DataService {
    
    // `getSuggestionsList()` must be a Promise Object
    async getSuggestionsList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const isNotPureWhitespace =(str: string): boolean  =>{
            return str.trim().length > 0;
        };

        return {
            code: 0,
            message: 'OK',
            data: isNotPureWhitespace(searchStr) ? [
                'Using React can simplify complex data operations! ',
                'What is the difference between front-end development and back-end development? ',
                'I don\'t know how to learn math, can you teach me?',
                'How can I upgrade my system to the latest version? '
            ]: []
        };
    }


    async getSuggestionsListUseAxios(searchStr = '', limit = 0) {
        let _data = null;
        const res = await axios.get(`https://api`, {
            params: {
                s: searchStr,
                limit: limit
            },
            headers: {
                'Authorization': 'Bearer xxxx-xxxxxxxx-xxxxxxxx'
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if (res && res.status == 200) _data = res.data;


        // result
        if (_data === null) {
            return {
                code: 0,
                message: 'OK',
                data: []
            };
        } else {
            return {
                code: 0,
                message: 'OK',
                data: _data
            };
        }

    }
    	
}


export default () => {

    return (
        <>

            <p><small>Type "React" or "learn" to see the effect</small></p>

            <Textarea
                name="name"

                // AI
                aiPredict
                aiPredictFetchFuncAsync={new DataService}
                aiPredictFetchFuncMethod="getSuggestionsList"
                aiPredictFetchFuncMethodParams={['$QUERY_STRING',0]}
                aiPredictFetchCallback={(res) => {
                    return res;
                }}
            />
      
        </>
    );
}
```


## API

### Textarea
```js
import Textarea from 'funda-ui/Textarea';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. | - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control | - |
| `autoSize` | boolean | false | Creating a Textarea with dynamic height. <blockquote>**Special note:** If you want to hide the textarea element in advance, please use `{ height: 0; overflow: hidden; }`, do not use `{ display: none }`, this can ensure that the `autoSize` initialization is valid. The parent container cannot also use `{ display: none }`, Otherwise it will cause the scrollHeight of the element inside the child node to be 0​</blockquote> | - |
| `requiredLabel` | string \| ReactNode | `<span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>` | It is used to specify a label for an element required. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `maxLength` | number | - | Defines the maximum string length that the user can enter into it. | - |
| `minLength` | number | - | Defines the minimum string length that the user can enter into it. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `cols` | number  | - | The cols attribute specifies the visible width of a text area. | - |
| `rows` | number  | - | The rows attribute specifies the visible height of a text area, in lines. | - |
| `aiPredict` | boolean | false | Whether to enable AI prediction | - |
| `aiPredictRemainingTextRGB` | Array | `[153, 153, 153]` | Define a color value for the remaining characters, passed using an RGB array. | - |
| `aiPredictConfirmKey` | Array | `[['Enter'],['Tab'],['Shift', ' ']]` | Confirm the value of the key pressed. check out [Key values for keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) | - |
| `aiPredictFetchFuncAsync` | Constructor | - | (**valid when the `aiPredict` is true**) A method as a string from the constructor. | - |
| `aiPredictFetchFuncMethod` | string  | - | (**valid when the `aiPredict` is true**) When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `aiPredictFetchFuncMethodParams` | array  | - | (**valid when the `aiPredict` is true**) The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string.  <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> | - |
| `aiPredictFetchCallback` | function  | - | (**valid when the `aiPredict` is true**) Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> <br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when focus is lost. If return is not set, it will not return.</blockquote> | - |
| `onInputCallback` | function  | - | Return value from `onInputCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires in real time as the user enters. If return is not set, it will not return.</blockquote> | - |
| `onKeyPressedCallback` | function  | - | Return value from `onKeyPressedCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when the keyboard is pressed. If return is not set, it will not return.</blockquote> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol>  | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean****)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onResize` | function  | - | The callback function that is triggered when resize. It is valid when the `autoSize` is true. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is an array of width and height (**Array**)</li></ol> | - |




It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.





### Create Callback via `aiPredictFetchCallback` 

A successful response returns the details of the callback such as Sample Request Body:

The return value is an array of strings. such as `[]`


```json
[
    "String 1",
    "String 2",
    ...
]
```