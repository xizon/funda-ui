/**
 * Bounded Drag
 * 
 * @usage:


const App = () => {
    const [items, setItems] = useState<ListItem[]>([]);
    // ... other states and refs
      
    const deepCloneWithReactNode = (obj: any): any => {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        // Handle array
        if (Array.isArray(obj)) {
            return obj.map(item => deepCloneWithReactNode(item));
        }

        // Handle object
        const clonedObj: any = {};
        for (const key in obj) {
            if (key === 'appendControl') {
                clonedObj[key] = obj[key];
            } else {
                clonedObj[key] = deepCloneWithReactNode(obj[key]);
            }
        }
        return clonedObj;
    };


    const getItemWithChildrenIndices = (items: ListItem[], startIndex: number): number[] => {
        const indices = [startIndex];
        const startItem = items[startIndex];
        const startDepth = startItem.depth || 0;

        // Check if subsequent items are child items
        for (let i = startIndex + 1; i < items.length; i++) {
            const currentItem = items[i];
            const currentDepth = currentItem.depth || 0;
            if (currentDepth > startDepth) {
                indices.push(i);
            } else {
                break;
            }
        }

        return indices;
    };


    const { isDragging, dragHandlers } = useBoundedDrag({
        dragMode,
        boundarySelector: '.custom-draggable-list',
        itemSelector:'.custom-draggable-list__item',
        dragHandleSelector: '.custom-draggable-list__handle',
        onDragStart: (index: number) => {
            // Additional drag start logic if needed
        },
        onDragOver: (dragIndex: number | null, dropIndex: number | null) => {
            // Additional drag over logic if needed
        },
        onDragEnd: (dragIndex: number | null, dropIndex: number | null) => {
            if (dragIndex !== null && dropIndex !== null && dragIndex !== dropIndex) {
                // Handle item movement
                const newItems = deepCloneWithReactNode(items);
                const itemsToMove = getItemWithChildrenIndices(newItems, dragIndex);
                const itemsBeingMoved = itemsToMove.map(index => newItems[index]);

                // ... rest of your existing drag end logic ...

                setItems(updatedItems);

            }
        }
    });

    // Update your JSX to use the new handlers
    return (
        <ul className="custom-draggable-list">
        {items.map((item: any, index: number) => (
            <li
                // ... other props
                draggable={!draggable ? undefined : editingItem !== item.id && "true"}
                onDragStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                onDragOver={!draggable ? undefined : dragHandlers.handleDragOver}
                onDragEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                onTouchStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                onTouchMove={!draggable ? undefined : dragHandlers.handleDragOver}
                onTouchEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
            >
                <li className="custom-draggable-list__item">
                    <span className="custom-draggable-list__handle">☰</span>
                    <i>content {indec}<i>
                </li>
            </li>
        ))}
    </ul>
);

 */

import { useRef, useState } from 'react';

export interface TouchOffset {
    x: number;
    y: number;
}

export interface BoundedDragOptions {
    dragMode?: 'handle' | 'block';
    boundarySelector?: string;
    itemSelector?: string;
    dragHandleSelector?: string;
    onDragStart?: (index: number) => void;
    onDragOver?: (dragIndex: number | null, dropIndex: number | null) => void;
    onDragUpdate?: (dragIndex: number | null, dropIndex: number | null) => void;
    onDragEnd?: (dragIndex: number | null, dropIndex: number | null) => void;
}

export const useBoundedDrag = (options: BoundedDragOptions = {}) => {
    const {
        dragMode = 'handle',
        boundarySelector = '.custom-draggable-list',
        itemSelector = '.custom-draggable-list__item',
        dragHandleSelector = '.custom-draggable-list__handle',
        onDragStart,
        onDragOver,
        onDragUpdate,
        onDragEnd
    } = options;

    const [isDragging, setIsDragging] = useState(false);
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);
    const dragNode = useRef<HTMLElement | null>(null);
    const draggedElement = useRef<HTMLElement | null>(null);
    const boundaryElement = useRef<HTMLElement | null>(null);
    const touchOffset = useRef<TouchOffset>({ x: 0, y: 0 });
    const currentHoverItem = useRef<HTMLElement | null>(null);
    const rafId = useRef<number | null>(null);
    const lastUpdateDragIndex = useRef<number | null>(null);
    const lastUpdateDropIndex = useRef<number | null>(null);

    /**
     * Performance Note:
     *
     * Drag-over events can fire at a very high frequency, especially on touch devices
     * or when dragging quickly. Directly performing DOM read/write operations in the
     * event handler (e.g. `getBoundingClientRect`, `classList` changes, style updates)
     * can easily cause layout thrashing and frame drops when there are many items.
     *
     * To mitigate this, we:
     * - Collect the pointer coordinates synchronously in the event handler.
     * - Schedule all DOM-intensive work inside `requestAnimationFrame`, so the browser
     *   batches these operations before the next paint.
     * - Cancel any pending frame (`cancelAnimationFrame`) before scheduling a new one,
     *   ensuring there is at most one pending DOM update per frame.
     *
     * This keeps drag interactions smooth even with large lists.
     */

    const handleDragStart = (e: React.DragEvent | React.TouchEvent, position: number) => {
        const isTouch = 'touches' in e;
        const target = e.target as HTMLElement;
        
        // For block mode or handle mode check
        if (dragMode === 'handle') {
            const handle = target.closest(dragHandleSelector);
            if (!handle) {
                if (!isTouch) e.preventDefault();
                return false;
            }
        }

        // Find the draggable item
        const listItem = target.closest(itemSelector) as HTMLElement;
        if (!listItem) return;

        // Check boundary
        const boundary = listItem.closest(boundarySelector);
        if (!boundary) return;

        dragItem.current = position;
        onDragStart?.(position);

        if (isTouch) {
            e.preventDefault(); // Prevent scrolling
            const touch = (e as React.TouchEvent).touches[0];
            const rect = listItem.getBoundingClientRect();
            const boundaryRect = boundary.getBoundingClientRect();

            // Calculate offset relative to the boundary
            touchOffset.current = {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            };

            // Clone the item for dragging
            dragNode.current = listItem.cloneNode(true) as HTMLElement;
            dragNode.current.classList.add('dragging');
            
            // Style the clone
            Object.assign(dragNode.current.style, {
                position: 'fixed',
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                left: `${rect.left}px`,
                top: `${rect.top}px`,
                zIndex: '1000',
                pointerEvents: 'none',
                transform: 'scale(1.05)',
                transition: 'transform 0.1s',
                opacity: '0.9'
            });

            document.body.appendChild(dragNode.current);

            // Keep track of the original element (acts as a placeholder inside the list)
            draggedElement.current = listItem;
            boundaryElement.current = boundary as HTMLElement;
            setIsDragging(true);
            listItem.classList.add('dragging-placeholder');
        } else {
            // Desktop: use native drag image, but still record dragged element / boundary
            draggedElement.current = listItem;
            boundaryElement.current = boundary as HTMLElement;
            setIsDragging(true);

            const dragEvent = e as React.DragEvent;
            if (dragEvent.dataTransfer) {
                dragEvent.dataTransfer.effectAllowed = 'move';
                // Optional: customize drag preview if needed
                dragEvent.dataTransfer.setData('text/plain', '');
            }

            listItem.classList.add('dragging-placeholder');
        }
    };

    const handleDragOver = (e: React.DragEvent | React.TouchEvent) => {
        // Always prevent default synchronously
        e.preventDefault();
        const isTouch = 'touches' in e;

        if (!isTouch) {
            (e as React.DragEvent).dataTransfer.dropEffect = 'move';
        }

        // Extract primitive coordinates synchronously to avoid using pooled events in async callbacks
        let clientX: number;
        let clientY: number;

        if (isTouch) {
            const touch = (e as React.TouchEvent).touches[0];
            clientX = touch.clientX;
            clientY = touch.clientY;
        } else {
            clientX = (e as React.DragEvent).clientX;
            clientY = (e as React.DragEvent).clientY;
        }

        // Cancel any pending frame to avoid stacking DOM operations
        if (rafId.current !== null) {
            cancelAnimationFrame(rafId.current);
        }

        rafId.current = requestAnimationFrame(() => {
            // Update dragged element position for touch events
            if (isTouch && isDragging && dragNode.current) {
                dragNode.current.style.left = `${clientX - touchOffset.current.x}px`;
                dragNode.current.style.top = `${clientY - touchOffset.current.y}px`;
            }

            // Find the element below the pointer/touch
            const elemBelow = document.elementFromPoint(clientX, clientY);

            if (!elemBelow) return;

            // Find the closest list item
            const listItem = elemBelow.closest(itemSelector) as HTMLElement;
            if (!listItem) return;

            // Check boundary
            const boundary =
                (boundaryElement.current as HTMLElement | null) ||
                (listItem.closest(boundarySelector) as HTMLElement | null);
            if (!boundary) return;

            // Update hover states
            if (currentHoverItem.current && currentHoverItem.current !== listItem) {
                currentHoverItem.current.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
            }

            currentHoverItem.current = listItem;
            listItem.classList.add('drag-over');

            const dragEl = draggedElement.current;
            if (!dragEl || !dragEl.parentNode) return;

            const container = boundary;

            // Collect current ordered items in the container
            const children = Array.from(container.querySelectorAll<HTMLElement>(itemSelector));

            const currentIndex = children.indexOf(dragEl);
            let targetIndex = children.indexOf(listItem);

            if (currentIndex === -1 || targetIndex === -1) return;

            // Determine drop position (top/bottom)
            const rect = listItem.getBoundingClientRect();
            const middleY = rect.top + rect.height / 2;

            listItem.classList.remove('drag-over-top', 'drag-over-bottom');

            const insertBefore =
                clientY < middleY
                    ? listItem
                    : (listItem.nextElementSibling as HTMLElement | null);

            if (clientY < middleY) {
                listItem.classList.add('drag-over-top');
            } else {
                listItem.classList.add('drag-over-bottom');
            }

            // Only move in DOM when the effective position changes
            if (insertBefore !== dragEl && container.contains(dragEl)) {
                container.insertBefore(dragEl, insertBefore);
            }

            // Recompute index after DOM move
            const reorderedChildren = Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
            const newIndex = reorderedChildren.indexOf(dragEl);
            dragOverItem.current = newIndex;

            onDragOver?.(dragItem.current, dragOverItem.current);

            // Only fire onDragUpdate when the (dragIndex, dropIndex) pair actually changes.
            if (
                onDragUpdate &&
                (dragItem.current !== lastUpdateDragIndex.current ||
                    dragOverItem.current !== lastUpdateDropIndex.current)
            ) {
                lastUpdateDragIndex.current = dragItem.current;
                lastUpdateDropIndex.current = dragOverItem.current;
                onDragUpdate(dragItem.current, dragOverItem.current);
            }

            rafId.current = null;
        });
    };

    const handleDragEnd = (e: React.DragEvent | React.TouchEvent) => {
        const isTouch = 'touches' in e;
        if (isTouch && !isDragging) return;

        onDragEnd?.(dragItem.current, dragOverItem.current);

        // Cancel any pending animation frame
        if (rafId.current !== null) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }

        // Cleanup
        if (dragNode.current) {
            dragNode.current.remove();
            dragNode.current = null;
        }

        document.querySelectorAll(itemSelector).forEach(item => {
            (item as HTMLElement).style.opacity = '1';
            item.classList.remove(
                'dragging',
                'dragging-placeholder',
                'drag-over',
                'drag-over-top',
                'drag-over-bottom'
            );
        });

        setIsDragging(false);
        currentHoverItem.current = null;
        dragItem.current = null;
        dragOverItem.current = null;
        draggedElement.current = null;
        boundaryElement.current = null;
    };

    return {
        isDragging,
        dragHandlers: {
            handleDragStart,
            handleDragOver,
            handleDragEnd
        }
    };
};

export default useBoundedDrag;