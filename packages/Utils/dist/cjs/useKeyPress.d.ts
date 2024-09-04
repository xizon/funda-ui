/**
 * Listens for changes in the pressed state of a given key
 *
 * @usage:

const App = () => {
    const escPressed = useKeyPress({
        keyCode: 'Escape',
        handleUp: (key, event) => { },
        handleDown: async (key, event) => {
            // do something
            event.preventDefault();
            // await xxxxx();
            console.log(key);
        },
        spyElement: window,
    }, []);

    const multiplePressed = useKeyPress({
        keyCode: ['ArrowUp', 'ArrowDown', 'Enter', 'NumpadEnter'],
        handleUp: (key, event) => { },
        handleDown: (key, event) => {
            // do something
            event.preventDefault();
            console.log(key);
        },
        spyElement: window
    }, [myDep1, myDep2]);


    return (
        <div className="app">{escPressed ? 'Escape' : null}</div>
    );
};

 */
export interface UseKeyPressProps {
    keyCode: string | string[];
    handleDown?: (key: string, event: KeyboardEvent) => void;
    handleUp?: (key: string, event: KeyboardEvent) => void;
    spyElement?: any;
}
declare const useKeyPress: ({ keyCode, handleDown, handleUp, spyElement, }: UseKeyPressProps, deps: any[]) => boolean;
export default useKeyPress;
