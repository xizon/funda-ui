/**
 * Drag & Drop Element
 * 
 * @usage:


const App = () => {
    const [dragContentHandle, dragHandle] = useDraggable(true);  // or Disable drag and drop: `useDraggable(false)`
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

const useDraggable = (enabled: boolean | undefined) => {

    if (typeof enabled === 'undefined' || enabled === false) return [null, null];


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

    const handleMouseDown = useCallback((e: MouseEvent) => {
        const startPos = {
            x: e.clientX - dx,
            y: e.clientY - dy,
        };

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            setOffset({ dx, dy });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove as any);
            document.removeEventListener('mouseup', handleMouseUp as any);
        };

        document.addEventListener('mousemove', handleMouseMove as any);
        document.addEventListener('mouseup', handleMouseUp as any);
    }, [dx, dy]);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        const touch = e.touches[0];

        const startPos = {
            x: touch.clientX - dx,
            y: touch.clientY - dy,
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const dx = touch.clientX - startPos.x;
            const dy = touch.clientY - startPos.y;
            setOffset({ dx, dy });
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove as any);
            document.removeEventListener('touchend', handleTouchEnd as any);
        };

        document.addEventListener('touchmove', handleTouchMove as any);
        document.addEventListener('touchend', handleTouchEnd as any);
    }, [dx, dy]);

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

    return [ref, targetRef];
};

export default useDraggable;

