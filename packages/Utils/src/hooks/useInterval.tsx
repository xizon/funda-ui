/**
 * Provides a convenient way to create and manage intervals
 * 
 * @usage:

const App = () => {
    const [count, setCount] = useState(0);

    const { startTimer, stopTimer } = useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div className="app">{count}</div>
    );
};

 */
import { useEffect, useRef, useCallback } from "react";

const useInterval = (fn: () => void, delay: number | null): {
    startTimer: any,
    stopTimer: any
} => {
    const ref = useRef<any>(null);
  
    const intervalIdRef = useRef<any>(null);
    const startTimer = useCallback(() => {
        intervalIdRef.current = setInterval(() => {
            ref.current && ref.current();
        }, delay as number);
    }, [ref]);

    const stopTimer = useCallback(() => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
    }, []);

    useEffect(() => {
        ref.current = fn;
    }, [fn]);

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, []);


    return {
        startTimer,
        stopTimer
    };

};

export default useInterval;

