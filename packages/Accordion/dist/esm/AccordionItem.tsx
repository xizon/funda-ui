import React, { useEffect, useRef, useState } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';

export type AccordionItemProps = {
    heightObserver?: number[];
    index?: number;
    arrowOnly?: boolean;
    animSpeed?: number;
    easing?: string;
    /** Class of items */
    itemClassName?: string;
    itemContentWrapperClassName?: string;
    itemContentClassName?: string;
    itemTriggerClassName?: string;
    itemHeaderClassName?: string;
    itemStyle?: React.CSSProperties;
    itemTriggerIcon?: React.ReactNode;
	/** Set an item to activate by default */
	activeItem?: string | boolean | undefined;
	/** Specify a title */
	title?: React.ReactNode;
	/** Handling events for collapsing item */
	onToggleEv?: React.MouseEventHandler<HTMLElement>;
	/** Handling events when the animation execution is complete */
	onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
    /** Callback when trigger state changes, provides trigger element and expanded state */
    onItemCollapse?: (trigger: HTMLElement,  icon: HTMLElement, isExpanded: boolean) => void;
	/** Control expanded state from parent */
	isExpanded?: boolean;
	/** Force expanded state, takes priority over isExpanded from parent */
	forceExpanded?: boolean;
	/** -- */
	children: React.ReactNode;
};




const AccordionItem = (props: AccordionItemProps) => {
    const { 
        heightObserver,
        index,
        animSpeed,
        easing,
        arrowOnly,
        itemClassName,
        itemContentWrapperClassName,
        itemContentClassName,
        itemTriggerClassName,
        itemHeaderClassName,
        itemTriggerIcon,
        itemStyle,
        activeItem,
        title,
        onToggleEv,
        onTransitionEnd,
        onItemCollapse,
        isExpanded: controlledExpanded,
        forceExpanded,
        children,
        ...attributes
    } = props;
    
    const [internalExpanded, setInternalExpanded] = useState<boolean>(false);
    const isFirstRender = useRef<boolean>(true);
    const initialHeightSet = useRef<boolean>(false);
    const hasUserInteracted = useRef<boolean>(false);

    // Use forceExpanded if provided and user hasn't interacted, otherwise use controlled or uncontrolled expanded state
    // forceExpanded takes priority over isExpanded from parent, but only before user interaction
    const actualExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
    const isExpanded = (forceExpanded !== undefined && !hasUserInteracted.current) ? forceExpanded : actualExpanded;

    const observer = useRef<ResizeObserver | null>(null);
    const contentWrapperRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();

        // Mark that user has interacted, so forceExpanded will be ignored
        hasUserInteracted.current = true;

        if (controlledExpanded === undefined) {
            setInternalExpanded(prev => !prev);
        }
        onToggleEv?.(e);
    };


    // Generate CSS transition style
    const getTransitionStyle = () => {
        const transitionDuration = `${animSpeed}ms`;
        const transitionTiming = easing;
        
        return {
            transition: `max-height ${transitionDuration} ${transitionTiming}`,
            overflow: 'hidden'
        };
    };


    // Reset user interaction flag when forceExpanded changes externally
    useEffect(() => {
        if (forceExpanded !== undefined) {
            hasUserInteracted.current = false;
        }
    }, [forceExpanded]);

    useEffect(() => {
        if (triggerRef.current && typeof onItemCollapse === 'function') {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            onItemCollapse(triggerRef.current, iconRef.current as HTMLElement, isExpanded);
        }
    }, [isExpanded]);

    useEffect(() => {
        if (contentWrapperRef.current && !initialHeightSet.current) {
            initialHeightSet.current = true;
            const shouldBeExpanded = typeof activeItem !== 'undefined' && activeItem !== false;
            if (controlledExpanded === undefined) {
                setInternalExpanded(shouldBeExpanded);
            }
            
            // Set initial maxHeight when activeItem is true
            if (shouldBeExpanded && contentRef.current) {
                const contentHeight = contentRef.current.offsetHeight;
                contentWrapperRef.current.style.maxHeight = `${contentHeight}px`;
            }
        }
    }, [activeItem, controlledExpanded]);

    useEffect(() => {
        if (!heightObserver || !Array.isArray(heightObserver) || !heightObserver.includes(index as number)) return;

        // When the content height changes dynamically, change the maxHeight of the wrapper
        if (contentRef.current && contentWrapperRef.current) {
            const _contentPadding = window.getComputedStyle(contentRef.current as HTMLDivElement).getPropertyValue('padding-bottom');
       
            observer.current = new ResizeObserver(entries => {
                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }

                entries.forEach(entry => {
                    if (contentWrapperRef.current !== null && isExpanded) {
                        (contentWrapperRef.current as HTMLDivElement).style.maxHeight = entry.contentRect.bottom + parseFloat(_contentPadding) + 'px';
                    }
                });
            });
            observer.current.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) observer.current?.unobserve(contentRef.current);
        };

    }, [heightObserver, isExpanded]);

    // Update maxHeight when expanded state changes
    useEffect(() => {
        if (contentWrapperRef.current && contentRef.current) {
            if (isExpanded) {
                const contentHeight = contentRef.current.scrollHeight;
                contentWrapperRef.current.style.maxHeight = `${contentHeight}px`;
            } else {
                contentWrapperRef.current.style.maxHeight = '0px';
            }
        }
    }, [isExpanded]);

    return (
        <>
            <div
                {...attributes}
                data-index={index}
                className={combinedCls(
                    'custom-accordion-item',
                    clsWrite(itemClassName, 'accordion-item'),
                    isExpanded ? ' active' : ''
                )}
                onClick={arrowOnly ? undefined : handleToggle}
                onTransitionEnd={typeof onTransitionEnd === 'function' ? onTransitionEnd : undefined}
                aria-expanded={isExpanded ? 'true' : 'false'}
                style={typeof itemStyle !== 'undefined' ? itemStyle : {}}
            >

                <div 
                    className={combinedCls(
                        'custom-accordion-header',
                        clsWrite(itemHeaderClassName, 'accordion-header position-relative')
                    )} 
                    role="presentation"
                >

                    {arrowOnly ? (
                        <div 
                            ref={triggerRef as React.RefObject<HTMLDivElement>}
                            tabIndex={-1} 
                            className={combinedCls(
                                'custom-accordion-trigger',
                                clsWrite(itemTriggerClassName, 'accordion-button'),
                                isExpanded ? 'active' : 'collapsed'
                            )}  
                        >
                            {title}
                        </div>
                    ) : (
                        <button 
                            ref={triggerRef as React.RefObject<HTMLButtonElement>}
                            tabIndex={-1} 
                            className={combinedCls(
                                'custom-accordion-trigger',
                                clsWrite(itemTriggerClassName, 'accordion-button'),
                                isExpanded ? 'active' : 'collapsed'
                            )}  
                            type="button"
                        >
                            {title}
                        </button>
                    )}
                    

                
                    <span 
                        ref={iconRef}
                        onClick={!arrowOnly ? undefined : handleToggle}
                        className="custom-accordion-trigger__icon"
                        style={!arrowOnly ? {pointerEvents: 'none'} : {cursor: 'pointer'}}
                    >
                        {itemTriggerIcon}
                    </span>
        
                    
                </div>
                <div 
                    ref={contentWrapperRef} 
                    className={combinedCls(
                        'custom-accordion-content__wrapper w-100',
                        clsWrite(itemContentWrapperClassName, 'accordion-collapse')
                    )}
                    role="tabpanel" 
                    style={getTransitionStyle()}>
                    <div className={combinedCls(
                        'custom-accordion-content',
                        clsWrite(itemContentClassName, 'accordion-body')
                    )} ref={contentRef} >
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionItem;