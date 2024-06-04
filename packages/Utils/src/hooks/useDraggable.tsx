/**
 * Drag & Drop Element
 * 
 * @usage:


const App = () => {
    const {
        dragContentHandle, 
        dragHandle,
        resetPosition
    }: any = useDraggable({
        enabled: true,   // if `false`, drag and drop is disabled
        preventOutsideScreen: {
            xAxis: true,
            yAxis: true
        },
        onStart: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            
        },
        onDrag: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            console.log(coordinates); // {dx: -164, dy: -37}

        },
        onStop: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {

        }
    });

    const resetModal = () => {
        resetPosition?.();
    };

    return (
        <div className="container" ref={dragContentHandle}>
            <div ref={dragHandle} className="handle">Drag me</div>
            <div className="content">
                content...
            </div>
        </div>
    );
};


 */

import { useEffect, useState, useCallback, MouseEvent } from "react";

interface PreventOutsideScreenProps {
    xAxis: boolean;
    yAxis: boolean;
}


interface UseDraggableProps {
    enabled?: boolean;
    preventOutsideScreen?: PreventOutsideScreenProps;
    onStart?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
    onStop?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
    onDrag?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
}
    

const useDraggable = ({ 
    enabled, 
    preventOutsideScreen, 
    onStart,
    onStop,
    onDrag,
}: UseDraggableProps) => {

    if (typeof enabled === 'undefined' || enabled === false) return [null, null];

    let dragging: boolean = false;  // DO NOT USE 'useState()'
    const [node, setNode] = useState<HTMLElement | null>(null);
    const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
    const [{ dx, dy }, setOffset] = useState({
        dx: 0,
        dy: 0,
    });

    const ref = useCallback((nodeEle: any) => {
        setNode(nodeEle);
    }, []);

    const targetRef = useCallback((nodeEle: any) => {
        setTargetNode(nodeEle);
    }, []);

    const withoutViewport = (startPos: any, e: any, targetEl: HTMLElement | null) => {

        if (!targetEl || typeof preventOutsideScreen === 'undefined') return null;

        // latest mouse coordinates
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        // the size of the parent element
        let parentWidth = window.innerWidth;
        let parentHeight = window.innerHeight;

        // the size of the child element
        let childrenWidth = targetEl.clientWidth;
        let childrenHight = targetEl.clientHeight;

        const minLeft = -(parentWidth - childrenWidth)/2;
        const maxLeft = (parentWidth - childrenWidth)/2;

        const minTop = -(parentHeight - childrenHight)/2;
        const maxTop = (parentHeight - childrenHight)/2;


        // calculates the left and top offsets after the move
        let nLeft = mouseX - (startPos.x);
        let nTop = mouseY - (startPos.y);

        // Determine whether the left or right distance is out of bounds
        if (preventOutsideScreen.xAxis) {
            nLeft = nLeft <= minLeft ? minLeft : nLeft;
            nLeft = nLeft >= maxLeft ? maxLeft : nLeft;
        }

        if (preventOutsideScreen.yAxis) {
            nTop = nTop <= minTop ? minTop : nTop;
            nTop = nTop >= maxTop ? maxTop : nTop;
        }

        return [nLeft, nTop];

    };

    const handleMouseDown = useCallback((e: MouseEvent) => {
        dragging = true;
        onStart?.({ dx, dy }, targetNode, node);

        const startPos = {
            x: e.clientX - dx,
            y: e.clientY - dy,
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!dragging) return;

            let dx = e.clientX - startPos.x;
            let dy = e.clientY - startPos.y;


            // prevent dragged item to be dragged outside of screen
            if (preventOutsideScreen && node) {
                const _data = withoutViewport(startPos, e, node);
                if (_data !== null) {
                    dx = _data[0];
                    dy = _data[1];
                }
            }

            setOffset({ dx, dy });
            onDrag?.({ dx, dy }, targetNode, node);

            e.stopPropagation();
            e.preventDefault();
        };

        const handleMouseUp = () => {
            dragging = false;
            onStop?.({ dx, dy }, targetNode, node);

            document.removeEventListener('mousemove', handleMouseMove as any);
            document.removeEventListener('mouseup', handleMouseUp as any);
        };

        document.addEventListener('mousemove', handleMouseMove as any);
        document.addEventListener('mouseup', handleMouseUp as any);
    }, [dx, dy, node]);


    const handleTouchStart = useCallback((e: TouchEvent) => {
        dragging = true;
        onStart?.({ dx, dy }, targetNode, node);


        const touch = e.touches[0];

        const startPos = {
            x: touch.clientX - dx,
            y: touch.clientY - dy,
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!dragging) return;


            const touch = e.touches[0];
            let dx = touch.clientX - startPos.x;
            let dy = touch.clientY - startPos.y;


            // prevent dragged item to be dragged outside of screen
            if (preventOutsideScreen && node) {
                const _data = withoutViewport(startPos, touch, node);
                if (_data !== null) {
                    dx = _data[0];
                    dy = _data[1];
                }
            }


            setOffset({ dx, dy });
            onDrag?.({ dx, dy }, targetNode, node);

            e.stopPropagation();
            e.preventDefault();

        };

        const handleTouchEnd = () => {
            dragging = false;
            onStop?.({ dx, dy }, targetNode, node);

            document.removeEventListener('touchmove', handleTouchMove as any);
            document.removeEventListener('touchend', handleTouchEnd as any);
        };

        document.addEventListener('touchmove', handleTouchMove as any);
        document.addEventListener('touchend', handleTouchEnd as any);
    }, [dx, dy, node]);

 

    useEffect(() => {
        if (node) {
            node.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        }
    }, [node, dx, dy]);

    useEffect(() => {
        if (!targetNode) {
            return;
        }
        targetNode.addEventListener("mousedown", handleMouseDown as any);
        targetNode.addEventListener("touchstart", handleTouchStart as any);
        return () => {
            targetNode.removeEventListener("mousedown", handleMouseDown as any);
            targetNode.removeEventListener("touchstart", handleTouchStart as any);
        };
    }, [targetNode, dx, dy]);

    return {
        dragContentHandle: ref,
        dragHandle: targetRef,
        resetPosition: () => {
            // reset position
            setOffset({ dx: 0, dy: 0 });
        }
    };
};

export default useDraggable;

