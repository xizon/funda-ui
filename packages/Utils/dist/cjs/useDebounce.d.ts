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
declare const useDebounce: <T extends (...args: any[]) => void>(fn: T, delay: number, dependence: any[]) => (...args: Parameters<T>) => void;
export default useDebounce;
