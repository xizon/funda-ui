import React, { useEffect, useRef, useState } from 'react';


type AccordionItemProps = {
    heightObserver?: number;
    index?: number;
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
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
	/** -- */
	children: React.ReactNode;
};




const AccordionItem = (props: AccordionItemProps) => {
	
    const { 
        heightObserver,
        index,
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
        triggerType,
        children
    } = props;
    

    
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' active' : '';
    const observer = useRef<ResizeObserver | null>(null);
    const contentWrapperRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    

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
                data-index={index}
                className={`custom-accordion-item ${itemClassName || itemClassName === '' ? itemClassName : "accordion-item"} ${activedClassName}`}
                onClick={triggerType === 'click' ? onToggleEv : () => {}}
                onMouseOver={triggerType === 'click' ? () => {} : onToggleEv} 
                onTransitionEnd={typeof onTransitionEnd === 'function' ? onTransitionEnd : () => {}}
                aria-expanded={defaultActive ? 'true' : 'false'}
                style={typeof itemStyle !== 'undefined' ? itemStyle : {}}
                >

                <div className={`custom-accordion-header ${itemHeaderClassName || itemHeaderClassName === '' ? itemHeaderClassName : "accordion-header position-relative"}`} role="presentation">
                    <button tabIndex={-1} className={`custom-accordion-trigger ${itemTriggerClassName || itemTriggerClassName === '' ? itemTriggerClassName : "accordion-button"} ${activedClassName === '' ? 'collapsed' : 'active'}`}  type="button">
                        {title}
                    </button>

                    {itemTriggerIcon}
                </div>
                <div ref={contentWrapperRef} className={`custom-accordion-content__wrapper w-100 ${itemContentWrapperClassName || itemContentWrapperClassName === '' ? itemContentWrapperClassName : "accordion-collapse"}`}
                    role="tabpanel" style={{
                        height: defaultActive ? 'auto' : '0px',
                        overflow: 'hidden'   // “overflow” affects the width, so add `w-100` to `custom-accordion-content__wrapper`
                    }}>
                    <div className={`custom-accordion-content ${itemContentClassName || itemContentClassName === '' ? itemContentClassName : "accordion-body"}`} ref={contentRef} >
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
    
}

export default AccordionItem;