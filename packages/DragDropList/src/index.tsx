import React, { useState, useRef, useEffect, forwardRef } from 'react';

import {
    convertTree,
    addTreeDepth,
} from 'funda-utils/dist/cjs/tree';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import useBoundedDrag from 'funda-utils/dist/cjs/useBoundedDrag';


export interface ListItem {
    id: number;
    parentId?: number;
    label: string;
    listItemLabel: string;
    value: string;
    queryString: string;
    depth?: number;
    children?: ListItem[];
    disabled?: boolean;
    appendControl?: React.ReactNode;
}


export interface DragDropListProps {
    wrapperClassName?: string;
    prefix?: string;
    data?: ListItem[];
    draggable?: boolean;
    handleHide?: boolean;
    handleIcon?: string;
    handlePos?: 'left' | 'right';
    dragMode?: 'handle' | 'block';
    editable?: boolean;
    itemStyle?: React.CSSProperties;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    onUpdate?: (items: ListItem[], curId: number) => void;
}

export interface EditValue {
    [propName: string]: string | number;
}

export interface TouchOffset {
    x: number;
    y: number;
}
export interface OptionConfig {
    [propName: string]: string | number | boolean | Function | any[];
}

const DragDropList = forwardRef((props: DragDropListProps, externalRef: any) => {
    const {
        wrapperClassName,
        prefix = 'custom',
        data,
        draggable = true,
        handleHide = false,
        handleIcon = '☰',
        handlePos = 'left',
        dragMode = 'handle',
        editable = false,
        itemStyle,
        hierarchical = true,
        indentation,
        doubleIndent,
        alternateCollapse,
        arrow = <><svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg></>,
        onUpdate,
        ...attributes
    } = props;


    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;

    const rootRef = useRef<any>(null);
    const [items, setItems] = useState<ListItem[]>([]);
    const [editingItem, setEditingItem] = useState<number | null>(null);

    const dragHandle = useRef<HTMLSpanElement | null>(null);


    // Edit
    const [editValue, setEditValue] = useState<Record<string, string | number>>({});

    // Collapse/Expand
    const [collapsedItems, setCollapsedItems] = useState<Set<number>>(new Set());


    // Get editable field list
    const getEditableFields = (item: ListItem): string[] => {
        // Exclude fields that don't need to be edited
        const excludeFields = ['id', 'parentId', 'depth', 'children', 'disabled', 'appendControl', 'parentItem'];
        return Object.keys(item).filter(key => !excludeFields.includes(key));
    };


    // ================================================================
    // General
    // ================================================================
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


    const getIndentStr = (item: ListItem): number | string => {

        // Add indent placeholder
        let indent = '';
        const depthData = item.depth;
        if (depthData) {
            Array(depthData).fill(0).forEach((k, i) => {
                indent += INDENT_PLACEHOLDER;
                if (i === depthData - 1) {
                    indent += INDENT_LAST_PLACEHOLDER;
                }
            });
        }

        return indent;
    };



    // ================================================================
    // Collapse/Expand
    // ================================================================
    // Add collapse/expand handler function
    const handleCollapse = (itemId: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setCollapsedItems(prev => {
            const newCollapsed = new Set(prev);
            if (newCollapsed.has(itemId)) {
                newCollapsed.delete(itemId);
            } else {
                newCollapsed.add(itemId);
            }
            return newCollapsed;
        });
    };

    // Helper function to determine if an item should be displayed
    const shouldShowItem = (item: ListItem): boolean => {
        if (!alternateCollapse) return true;

        let currentId = item.parentId;
        while (currentId) {
            if (collapsedItems.has(currentId)) {
                return false;
            }
            const parentItem = items.find(i => i.id === currentId);
            currentId = parentItem?.parentId;
        }
        return true;
    };

    const hasChildren = (itemId: number): boolean => {
        return items.some(item => item.parentId === itemId);
    };




    // ================================================================
    // Drag & Drop Handlers (Desktop & Touch)
    // ================================================================
    const { isDragging, dragHandlers } = useBoundedDrag({
        dragMode,
        boundarySelector: `.${prefix}-draggable-list`,
        itemSelector: `.${prefix}-draggable-list__item`,
        dragHandleSelector: `.${prefix}-draggable-list__handle`,
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

                const _targetId = newItems[dragIndex]?.id;

                // Calculate depth difference
                const draggedDepth = newItems[dragIndex]?.depth || 0;
                const dropDepth = newItems[dropIndex]?.depth || 0;
                const depthDiff = dropDepth - draggedDepth;

                // Adjust depth for all moving items
                itemsBeingMoved.forEach(item => {
                    if (item.depth !== undefined) {
                        item.depth += depthDiff;
                    }
                });

                // Remove all items from their original location (from back to front to keep indexing correct)
                itemsToMove.reverse().forEach(index => {
                    newItems.splice(index, 1);
                });

                // Calculate new insert position
                let insertIndex = dropIndex;
                if (dropIndex > dragIndex) {
                    insertIndex -= itemsToMove.length;
                }

                // Insert all items
                newItems.splice(insertIndex, 0, ...itemsBeingMoved);

                // Rebuild tree structure
                const tree = hierarchical ? convertTree(newItems, '', 'id', 'parentId') : newItems;
                const updatedItems = hierarchical ? addTreeDepth(tree) : tree;

                setItems(updatedItems);
                onUpdate?.(updatedItems, _targetId);
            }
        }
    });



    // ================================================================
    // Editable
    // ================================================================

    const handleDoubleClick = (item: ListItem) => {
        if (!editable) return;

        setEditingItem(item.id);
        // Only editable fields are copied
        const editableFields = getEditableFields(item);
        const editableValues = editableFields.reduce((acc, field) => ({
            ...acc,
            [field]: item[field as keyof ListItem]
        }), {});

        setEditValue(editableValues);
    };

    const handleEditCancel = () => {
        setEditingItem(null);
        setEditValue({});
    };

    const handleEditSave = (itemId: number) => {
        const newItems: ListItem[] = items.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    ...editValue
                };
            }
            return item;
        });

        setItems(newItems);
        onUpdate?.(newItems, itemId);
        setEditingItem(null);
        setEditValue({});
    };

    const handleInputChange = (field: string, value: any) => {
        setEditValue(prev => ({
            ...prev,
            [field]: value
        }));
    };


    const handleKeyDown = (e: any, itemId: number) => {
        if (e.key === 'Enter') {
            handleEditSave(itemId);
        } else if (e.key === 'Escape') {
            handleEditCancel();
        }
    };



    const renderEditForm = (item: ListItem) => {
        const editableFields = getEditableFields(item);

        return (
            <div className={`${prefix}-draggable-list__edit-form`}>
                {editableFields.map((field) => (
                    <div key={field} className={`${prefix}-draggable-list__edit-field`}>
                        <label>{field}:</label>
                        <input
                            type="text"
                            value={editValue[field] || ''}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                            placeholder={field}
                            autoFocus={field === editableFields[0]}
                        />
                    </div>
                ))}

                <div className={`${prefix}-draggable-list__edit-buttons`}>
                    <button onClick={() => handleEditSave(item.id)}>✓</button>
                    <button onClick={handleEditCancel}>✕</button>
                </div>
            </div>
        );
    };

    useEffect(() => {

        // data init
        //--------------
        if (typeof data !== 'undefined' && Array.isArray(data)) {
            const tree = hierarchical ? convertTree(data, '', 'id', 'parentId') : data;
            const _ORGIN_DATA = hierarchical ? addTreeDepth(tree) : tree;
            setItems(_ORGIN_DATA);
        }
    }, [data]);



    return (
        <ul 
            {...attributes}
            ref={(node) => {
                rootRef.current = node;
                if (typeof externalRef === 'function') {
                    externalRef(node);
                } else if (externalRef) {
                    externalRef.current = node;
                }
            }}
            className={combinedCls(
                `${prefix}-draggable-list`,
                clsWrite(wrapperClassName, 'mb-3'),
                clsWrite(dragMode, 'handle'),
                `handle-pos-${handlePos ?? 'left'}`,
                {
                    'draggable': draggable,
                    'icon-hide': handleHide,
                    'alternate-collapse': alternateCollapse
                }
            )}
        >
            {items.map((item: ListItem, index: number) => {

                // If the item should be hidden, the rendering is skipped
                if (!shouldShowItem(item)) return null;

                // collapse
                const hasChildItems = hasChildren(item.id);
                const isCollapsed = collapsedItems.has(item.id);


                return <li
                    key={item.id}
                    data-index={index}
                    data-id={item.id}
                    data-parent-id={item.parentId}
                    data-value={item.value}
                    data-label={item.label}
                    data-listitemlabel={item.listItemLabel}
                    className={combinedCls(
                        `${prefix}-draggable-list__item`,
                        clsWrite(dragMode, 'handle'),
                        {
                            'disabled': item.disabled,
                            'draggable': draggable,
                            'editing': editingItem === item.id,

                            // collapse
                            'has-children': hasChildItems,
                            'collapsed': isCollapsed
                        }
                    )}
                    draggable={!draggable ? undefined : editingItem !== item.id && "true"}
                    onDragStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                    onDragOver={!draggable ? undefined : dragHandlers.handleDragOver}
                    onDragEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                    onTouchStart={!draggable ? undefined : (e) => dragHandlers.handleDragStart(e, index)}
                    onTouchMove={!draggable ? undefined : dragHandlers.handleDragOver}
                    onTouchEnd={!draggable ? undefined : dragHandlers.handleDragEnd}
                    style={itemStyle}
                    onDoubleClick={() => handleDoubleClick(item)}
                >
                    <div className={`${prefix}-draggable-list__itemcontent`}>

                        {/** DRAG HANDLE */}
                        {/* Fix the problem that mobile terminals cannot be touched, DO NOT USE "<svg>" */}
                        {draggable && !handleHide ? <span ref={dragHandle} className={`${prefix}-draggable-list__handle ${handlePos ?? 'left'}`} draggable={dragMode === 'handle'} dangerouslySetInnerHTML={{
                            __html: `${handleIcon}`
                        }}></span> : null}
                        {/** /DRAG HANDLE */}

                        {editingItem === item.id ? (
                            renderEditForm(item)
                        ) : (
                            <div className={`${prefix}-draggable-list__itemcontent-inner`}>

                                <div className={`${prefix}-draggable-list__itemlabel`}>


                                    {/** LABEL */}

                                    <span dangerouslySetInnerHTML={{
                                        __html: `${getIndentStr(item)}${typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel}`
                                    }} />
                                    {/** /LABEL */}




                                    {/** COLLOPSE */}
                                    {alternateCollapse && hasChildItems && (
                                        <span
                                            className={`${prefix}-draggable-list__collapse-arrow`}
                                            onClick={(e) => handleCollapse(item.id, e)}
                                        >
                                            {arrow || (isCollapsed ? '▶' : '▼')}
                                        </span>
                                    )}
                                    {/** /COLLOPSE */}

                                </div>


                                {/** EXTENDS */}
                                {item.appendControl ? <>
                                    <div className={`${prefix}-draggable-list__itemext`} id={`${prefix}-draggable-list__itemext-${item.value}`}>
                                        {item.appendControl}
                                    </div>
                                </> : null}
                                {/** /EXTENDS */}

                            </div>
                        )}
                    </div>
                </li>
            })}
        </ul>
    );
});


export default DragDropList;
