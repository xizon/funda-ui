import React, { useEffect, useRef, useState } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';

export type AccordionItemProps = {
    heightObserver?: number;
    index?: number;
    arrowOnly?: boolean;
    animSpeed?: number;
    easeType?: string;
    /** Class of items */
    itemClassName?: string;
    itemContentWrapperClassName?: string;
    itemContentClassName?: string;
    itemTriggerClassName?: string;
    itemHeaderClassName?: string;
    itemStyle?: React.CSSProperties;
    itemTriggerIcon?: React.ReactNode;
	/** Set an item to activate by default */
	defaultActive?: string | boolean | undefined;
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
	/** -- */
	children: React.ReactNode;
};




const AccordionItem = (props: AccordionItemProps) => {
    const { 
        heightObserver,
        index,
        animSpeed,
        easeType,
        arrowOnly,
        itemClassName,
        itemContentWrapperClassName,
        itemContentClassName,
        itemTriggerClassName,
        itemHeaderClassName,
        itemTriggerIcon,
        itemStyle,
        defaultActive,
        title,
        onToggleEv,
        onTransitionEnd,
        onItemCollapse,
        isExpanded: controlledExpanded,
        children,
        ...attributes
    } = props;
    
    const [internalExpanded, setInternalExpanded] = useState<boolean>(false);
    const isFirstRender = useRef<boolean>(true);
    const initialHeightSet = useRef<boolean>(false);

    // Use controlled or uncontrolled expanded state
    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

    const observer = useRef<ResizeObserver | null>(null);
    const contentWrapperRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (controlledExpanded === undefined) {
            setInternalExpanded(prev => !prev);
        }
        onToggleEv?.(e);
    };

    useEffect(() => {
        if (triggerRef.current && typeof onItemCollapse === 'function') {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            onItemCollapse(triggerRef.current, iconRef.current as HTMLElement, isExpanded);
        }
    }, [isExpanded, onItemCollapse]);

    useEffect(() => {
        if (contentWrapperRef.current && !initialHeightSet.current) {
            initialHeightSet.current = true;
            const shouldBeExpanded = typeof defaultActive !== 'undefined' && defaultActive !== false;
            if (controlledExpanded === undefined) {
                setInternalExpanded(shouldBeExpanded);
            }
            
            // Set initial height when defaultActive is true
            if (shouldBeExpanded && contentRef.current) {
                const contentHeight = contentRef.current.offsetHeight;
                contentWrapperRef.current.style.height = `${contentHeight}px`;
            }
        }
    }, [defaultActive, controlledExpanded]);

    useEffect(() => {

        if (parseFloat(heightObserver as never) !== index) return;

        // When the content height changes dynamically, change the height of the wrapper
        if (contentRef.current && contentWrapperRef.current) {
            const _contentPadding = window.getComputedStyle(contentRef.current as HTMLDivElement).getPropertyValue('padding-bottom');
       
            observer.current = new ResizeObserver(entries => {

                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }

                entries.forEach(entry => {
                    if (contentWrapperRef.current !== null) (contentWrapperRef.current as HTMLDivElement).style.height = entry.contentRect.bottom + parseFloat(_contentPadding) + 'px';
                });
            });
            observer.current.observe(contentRef.current);

        }

        return () => {
            if (contentRef.current) observer.current?.unobserve(contentRef.current);
        };


    }, [heightObserver]);


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
                    style={{
                        height: '0',
                        overflow: 'hidden'   // "overflow" affects the width, so add `w-100` to `custom-accordion-content__wrapper`
                    }}>
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