/**
 * Creating a Textarea with dynamic height
 * 
 * @usage:


const App = () => {
    const [value, setValue] = useState("");
    const el = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(el.current, value, false);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setValue(val);
    };

    return (
        <div className="App">
            <textarea
                onChange={handleChange}
                ref={el}
                rows={3}
                value={value}
            />
        </div>
    );
};


//--------

const App = () => {
    const [value, setValue] = useState("");
    const el = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(el.current, value, true);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setValue(val);
    };

    return (
        <div className="App">
            <textarea
                onChange={handleChange}
                ref={el}
                rows={1}
                value={value}
            />
        </div>
    );
};



 */


import { useEffect, useState } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
    el,
    value,
    autoSizeBeginOneline
) => {

    const [defaultRowHeight, setDefaultRowHeight] = useState(0);
    const [dynamicDefaultRowHeight, setDynamicDefaultRowHeight] = useState(0);
    const [defaultRowHeightInit, setDefaultRowHeightInit] = useState(false);

    useEffect(() => {
        
        if (el) {

            if (autoSizeBeginOneline) {
                el.style.height = "0px";
                const beginOnelineScrollHeight = el.scrollHeight;
                el.style.height = beginOnelineScrollHeight + "px";
            }  else {
                
                // initialize default row height
                if (el.scrollHeight > 0 && !defaultRowHeightInit) {
                    setDefaultRowHeight(el.scrollHeight);
                    setDynamicDefaultRowHeight(el.scrollHeight);
                    setDefaultRowHeightInit(true);
                }

                // reset the height momentarily to get the correct scrollHeight for the textarea
                const scrollHeight = el.scrollHeight;

        
                // reset row height
                if (typeof value !== 'undefined' && value.length === 0) {
                    el.style.height = dynamicDefaultRowHeight + "px";

                    // update default row height
                    setDefaultRowHeight(dynamicDefaultRowHeight);
                }


                // then set the height directly, outside of the render loop
                // Trying to set this with state or a ref will product an incorrect value.

                // !!! Compare initial height and changed height
                if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
                    el.style.height = scrollHeight + "px";

                    // update default row height
                    setDefaultRowHeight(scrollHeight);
                }

            }



            
        }
    }, [el, value]);
};

export default useAutosizeTextArea;
