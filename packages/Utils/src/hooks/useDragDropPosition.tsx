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

import { useCallback, useEffect, useRef } from "react";

interface Position {
    left: number;
    top: number;
}

interface ContainerDimensions {
    width: number;
    height: number;
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

const useDragDropPosition = (settings: DragDropSettings) => {
    const {
        container = null,
        onPointerDown,
        onPointerUp,
        onDragStart,
        onDragEnd,
        onMove,
        dimension = 0,
        onInit,
        pin,
        moveDelay = 150,
        usePercentage = false
    } = settings;

    const ref = useRef<HTMLElement | null>(null);
    const isClicked = useRef<boolean>(false);
    const isDragged = useRef<boolean>(false);
    const keyPressed = useRef<boolean>(false);

    const convertToPercentage = useCallback((position: Position): PositionResult => {
        if (usePercentage) {
            if (!container) return {
                position,
                hasContainer: Boolean(container)
            };

            const containerDim = getContainerDimensions();
            return {
                position: {
                    left: (position.left / containerDim.width) * 100,
                    top: (position.top / containerDim.height) * 100
                },
                hasContainer: Boolean(container)
            };
        } else {
            return {
                position,
                hasContainer: false
            };
        }
    }, [container, usePercentage]);

    const getContainerDimensions = (): ContainerDimensions => {
        if (!container) {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                left: 0,
                top: 0
            };
        }

        const rect = container.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            left: rect.left,
            top: rect.top
        };
    };

    const getLeft = (left: number, dimension: number): number => {
        const containerDim = getContainerDimensions();
        const minLeft = container ? 0 : containerDim.left;
        const maxLeft = containerDim.width - dimension;

        if (left < minLeft) {
            return minLeft;
        } else if (left > maxLeft) {
            return maxLeft;
        }
        return left;
    };

    const getTop = (top: number, dimension: number): number => {
        const containerDim = getContainerDimensions();
        const minTop = container ? 0 : containerDim.top;
        const maxTop = containerDim.height - dimension;

        if (top < minTop) {
            return minTop;
        } else if (top > maxTop) {
            return maxTop;
        }
        return top;
    };

    const moveTimeout = useRef<NodeJS.Timeout>();
    const moveDisabled = useRef<boolean>(true);
    
    const moveDelayInit = useCallback(() => {
        moveTimeout.current = setTimeout(() => {
            moveDisabled.current = false;
        }, moveDelay);
    }, [moveDelay]);

    const moveDelayInitClear = useCallback(() => {
        moveDisabled.current = true;
        if (moveTimeout.current) {
            clearTimeout(moveTimeout.current);
        }
    }, []);

    const positionRef = useRef<Position>({
        left: 0,
        top: 0,
    });

    const calculateRelativePosition = (clientX: number, clientY: number) => {
        const containerDim = getContainerDimensions();
        const halfWidth = Math.round(dimension / 2);

        let x = clientX;
        let y = clientY;

        if (container) {
            x = clientX - containerDim.left;
            y = clientY - containerDim.top;
        }

        return {
            x: x - halfWidth,
            y: y - halfWidth
        };
    };

    const handlePointerDown = (ev: PointerEvent | KeyboardEvent) => {
        moveDelayInit();
        isClicked.current = true;
        const ele = ev.target as HTMLElement;
        ev.stopPropagation();

        if (ev instanceof PointerEvent) {
            keyPressed.current = false;
            ele.setPointerCapture(ev.pointerId);
        } else if (ev instanceof KeyboardEvent) {
            keyPressed.current = true;
        }

        onPointerDown?.();
    };

    const handlePointerUp = (ev: PointerEvent | KeyboardEvent) => {
        moveDelayInitClear();
        isClicked.current = false;

        if (ev instanceof PointerEvent) {
            const ele = ev.target as HTMLElement;
            ele.releasePointerCapture(ev.pointerId);
        }

        if (onDragEnd) {
            const finalPosition = convertToPercentage(positionRef.current);
            onDragEnd(finalPosition);
        }
        
        if (!isDragged.current) {
            onPointerUp?.();
        } else {
            isDragged.current = false;
        }
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (moveDisabled.current || !isClicked.current || !ref.current || keyPressed.current) {
            return;
        }

        const touches = 'touches' in e ? e.touches : null;
        const clientX = touches && touches.length ? touches[0].clientX : (e as MouseEvent).clientX;
        const clientY = touches && touches.length ? touches[0].clientY : (e as MouseEvent).clientY;

        const { x, y } = calculateRelativePosition(clientX, clientY);

        const position: Position = {
            left: getLeft(x, dimension),
            top: getTop(y, dimension),
        };

        if (!isDragged.current) {
            isDragged.current = true;
            if (onDragStart) {
                const startPosition = convertToPercentage(position);
                onDragStart(startPosition);
            }
        }

        positionRef.current = position;
        ref.current.style.cssText += `top: ${position.top}px;left: ${position.left}px;`;

        if (onMove) {
            const movePosition = convertToPercentage(position);
            onMove(movePosition);
        }
    };

    const setup = useCallback((node: HTMLElement | null) => {
        if (node) {
            ref.current = node;
            node.addEventListener("pointerdown", handlePointerDown as EventListener);
            node.addEventListener("keydown", handlePointerDown as EventListener);
            node.addEventListener("mouseup", handlePointerUp as EventListener);
            node.style.touchAction = "none";

            const rect = node.getBoundingClientRect();
            const containerDim = getContainerDimensions();
            const initialPosition: Position = {
                left: container ? rect.left - containerDim.left : rect.left,
                top: container ? rect.top - containerDim.top : rect.top,
            };

            if (onInit) {
                const initPosition = convertToPercentage(initialPosition);
                onInit(initPosition);
            }
        }
    }, [container, onInit, convertToPercentage]);

    useEffect(() => {
        if (!pin) {
            document.addEventListener("mousemove", onPointerMove as EventListener);
            document.addEventListener("touchmove", onPointerMove as EventListener);

            return () => {
                document.removeEventListener("mousemove", onPointerMove as EventListener);
                document.removeEventListener("touchmove", onPointerMove as EventListener);
            };
        }
    }, [container, pin]);

    useEffect(() => {
        return () => {
            moveDelayInitClear();
        };
    }, [moveDelayInitClear]);

    return {
        ref,
        setup,
    };
};

export { useDragDropPosition };
export type { DragDropSettings, Position, PositionResult };