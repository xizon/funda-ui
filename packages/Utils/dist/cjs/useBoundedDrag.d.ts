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
};


 */
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
    onDragEnd?: (dragIndex: number | null, dropIndex: number | null) => void;
}
export declare const useBoundedDrag: (options?: BoundedDragOptions) => {
    isDragging: boolean;
    dragHandlers: {
        handleDragStart: (e: React.DragEvent | React.TouchEvent, position: number) => false | undefined;
        handleDragOver: (e: React.DragEvent | React.TouchEvent) => void;
        handleDragEnd: (e: React.DragEvent | React.TouchEvent) => void;
    };
};
export default useBoundedDrag;
