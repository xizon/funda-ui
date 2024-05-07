/**
 * Creating a Textarea with dynamic height
 * 
 * @usage:


const App = () => {
    const [value, setValue] = useState("");
    const el = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(
        el.current, 
        value,
        (res) => {
            onResize?.(event, valRef.current, res);
        }
    );

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



 */
import { useEffect, useState, RefObject } from "react";

interface AutosizeTextAreaProps {
    el: RefObject<HTMLTextAreaElement>;
    value: string;
    cb?: (dimensions: [number, number]) => void;
}

const useAutosizeTextArea = (
    props: AutosizeTextAreaProps
): void => {
    const { el, value, cb } = props;

    const [defaultRowHeight, setDefaultRowHeight] = useState(0);
    const [defaultRowHeightInit, setDefaultRowHeightInit] = useState(false);

    useEffect(() => {
        if (el.current) {
            const style = (el.current as any).currentStyle || window.getComputedStyle(el.current);
            const _controlWidth = el.current.scrollWidth + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth);

            // initialize default row height
            if (el.current.scrollHeight > 0 && !defaultRowHeightInit) {
                setDefaultRowHeight(el.current.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth));
                setDefaultRowHeightInit(true);
            }

            // restore default row height
            if (defaultRowHeight > 0) {
                el.current.style.height = defaultRowHeight + "px";
            }

            // reset the height momentarily to get the correct scrollHeight for the textarea
            const scrollHeight = el.current.scrollHeight;


            // then set the height directly, outside of the render loop
            // Trying to set this with state or a ref will product an incorrect value.

            // !!! Compare initial height and changed height
            if (scrollHeight > defaultRowHeight && defaultRowHeight > 0) {
                el.current.style.height = scrollHeight + "px";
            }

            cb?.([_controlWidth, scrollHeight]);
        }
    }, [el, value]);
};

export default useAutosizeTextArea;

