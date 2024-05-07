/**
 * Limiting the rate of execution
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useThrottle(() => setCount(count + 1), 500, [count]);

    return (
        <div className="app">
            <button onClick={handleClick}>click</button>
            <p>click {count} time</p>
        </div>
    );
};

 */
import { useRef, useCallback } from "react";

const useThrottle = <T extends (...args: any[]) => void>(
    fn: T,
    delay: number,
    dependence: any[]
): T => {
    const ref = useRef<{ lastTime: number }>({ lastTime: 0 });

    return useCallback((...args: any[]) => {
        const now = Date.now();

        if (now - ref.current.lastTime >= delay) {
            fn(...args);
            ref.current.lastTime = now;
        }
    }, dependence) as any;
};

export default useThrottle;

