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

import { useState, useEffect } from 'react';

interface UseKeyPressProps {
    keyCode: string | string[];
    handleDown?: (key: string, event: KeyboardEvent) => void;
    handleUp?: (key: string, event: KeyboardEvent) => void;
    spyElement?: any;
}

const useKeyPress = ({ 
    keyCode, 
    handleDown, 
    handleUp,
    spyElement = typeof window === 'undefined' ? null : window,
}: UseKeyPressProps, deps: any[]): boolean => {
    const [keyPressed, setKeyPressed] = useState(false);
    const multipleKeys = Array.isArray(keyCode);

    const eventHandlerDown = (event: KeyboardEvent) => {
        const key = event.code;

        if (multipleKeys) {
            if (keyCode.includes(key)) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
            }
        } else {
            if (key === keyCode) {
                setKeyPressed(true);
                if (typeof handleDown === 'function') handleDown(key, event);
            }
        }
    };

    const eventHandlerUp = (event: KeyboardEvent) => {
        const key = event.code;

        if (multipleKeys) {
            if (keyCode.includes(key)) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
            }
        } else {
            if (key === keyCode) {
                setKeyPressed(false);
                if (typeof handleUp === 'function') handleUp(key, event);
            }
        }
    };

    useEffect(() => {
        spyElement?.addEventListener('keydown', eventHandlerDown);
        spyElement?.addEventListener('keyup', eventHandlerUp);

        return () => {
            spyElement?.removeEventListener('keydown', eventHandlerDown);
            spyElement?.removeEventListener('keyup', eventHandlerUp);
        };
    }, deps);

    return keyPressed;
};


export default useKeyPress;

