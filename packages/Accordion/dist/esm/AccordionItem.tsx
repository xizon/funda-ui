import React from 'react';


type AccordionItemProps = {
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
                <div className={`custom-accordion-content__wrapper ${itemContentWrapperClassName || itemContentWrapperClassName === '' ? itemContentWrapperClassName : "accordion-collapse"}`}
                    role="tabpanel" style={{
                        height: defaultActive ? 'auto' : '0px',
                        overflow: 'hidden'
                    }}>
                    <div className={`custom-accordion-content ${itemContentClassName || itemContentClassName === '' ? itemContentClassName : "accordion-body"}`}>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
    
}

export default AccordionItem;