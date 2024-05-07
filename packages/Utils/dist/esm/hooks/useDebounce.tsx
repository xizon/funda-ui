/**
 * Delay the execution of function or state update
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useDebounce(() => setCount(count + 1), 500, [count]);

    return (
        <div className="app">
            <button onClick={handleClick}>click</button>
            <p>click {count} time</p>
        </div>
    );
};

 */

import { useRef, useCallback } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
    fn: T,
    delay: number,
    dependence: any[]
) => {
    const ref = useRef<NodeJS.Timeout | null>(null);

    return useCallback((...args: Parameters<T>) => {
        clearTimeout(ref.current!);
        ref.current = null;

        ref.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, dependence);
};

export default useDebounce;

