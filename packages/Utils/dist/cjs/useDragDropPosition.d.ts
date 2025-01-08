/**
 * Drag Drop Object
 *
 * @usage:

import { useState, useCallback } from 'react';
import { useDragDropPosition } from '@/utils/hooks/useDragDropPosition';

const App = () => {

    const [show, setShow] = useState<boolean>(false);

    // drag & drop
    //---------------、
    const moveDelay = 150;
    const pin = false;
    const dimension = 32; // onject with dimension
    const [objPosition, setObjPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);


    const { setup, ref } = useDragDropPosition({
        // usePercentage: true, // Enable percentage values
        dimension,
        onDragEnd: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
            setIsPressed(false);
            setIsDragged(false);

            // click event here (restore)
            setShow(false);
        },
        onDragStart: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
            setIsDragged(true);

            // click event here (restore)
            setShow(false);
        },
        onInit: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
        },
        onPointerDown: () => {
            setIsPressed(true);
        },
        onPointerUp: useCallback(() => {
            setIsPressed(false);

            // click event here
            setShow((prev) => !prev);
            
        }, []),
        onMove: ({position, hasContainer}) => {
            const { left, top } = position;
            setObjPosition({
                x: left || 0,
                y: (top || 0),
            });
        },
        pin,
        moveDelay
    });



    return (


        <>

            <div
                ref={setup}
                className="float-btn"
                style={{position: 'fixed', left: '50%', top: '50%', zIndex: 1000, background: 'red'}}
                
            >Move Here<small>{JSON.stringify(objPosition)}</small><br /><strong>{show ? 'Clicked' : 'None'}</strong></div>

        </>
    )
}




const App2 = () => {

    const dragdropContainerRef = useRef<HTMLDivElement>(null);
    ....

    const { setup, ref } = useDragDropPosition({
        container: dragdropContainerRef.current,  // If there is a container with a drag range
        ...
    });


    return (

        <>

            <div
                ref={dragdropContainerRef}
                style={{
                    width: '300px',
                    height: '300px',
                    border: '1px solid #ddd',
                    background: '#efefef',
                    position: 'relative'
                }}
            >
                <div
                    ref={setup}
                    className="float-btn"
                    style={{ position: 'fixed', left: '50%', top: '50%', zIndex: 1000, background: 'red' }}

                >Move Here<small>{JSON.stringify(objPosition)}</small><br /><strong>{show ? 'Clicked' : 'None'}</strong></div>

            </div>



        </>
    )
}

 */
/// <reference types="react" />
interface Position {
    left: number;
    top: number;
}
interface PositionResult {
    position: Position;
    hasContainer: boolean;
}
interface DragDropSettings {
    container?: HTMLElement | null;
    onPointerDown?: () => void;
    onPointerUp?: () => void;
    onDragStart?: (position: PositionResult) => void;
    onDragEnd?: (position: PositionResult) => void;
    onMove?: (position: PositionResult) => void;
    onInit?: (position: PositionResult) => void;
    dimension?: number;
    pin?: boolean;
    moveDelay?: number;
    usePercentage?: boolean;
}
declare const useDragDropPosition: (settings: DragDropSettings) => {
    ref: import("react").MutableRefObject<HTMLElement | null>;
    setup: (node: HTMLElement | null) => void;
};
export { useDragDropPosition };
export type { DragDropSettings, Position, PositionResult };
