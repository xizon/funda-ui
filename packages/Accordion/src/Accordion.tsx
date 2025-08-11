import React, { useState, useRef, useEffect } from 'react';

import Item from './AccordionItem';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';

// Adapt the easing parameters of TweenMax
export enum EasingList {
    linear = 'linear',
    ease = 'ease',
    easeIn = 'ease-in',
    easeOut = 'ease-out',
    easeInOut = 'ease-in-out'
}


export type AccordionOptionChangeFnType = (element: HTMLDivElement, index: number) => void;



export type AccordionProps = {
    wrapperClassName?: string;
	/** The index of the item to be displayed by default. Set to -1 to display none, or an array of indices to display multiple items */
	defaultActiveIndex?: number | number[];
    /** Whether to expand all items by default */
    defaultActiveAll?: boolean;
	/** The number of milliseconds(ms) each iteration of the animation takes to complete */
	duration?: number;
    /** Types of easing animation */
    easing?: string;
    /**  Mutually exclusive alternate expansion between the levels */
    alternateCollapse?: boolean;
    /** Only allow arrow to trigger the accordion */
    arrowOnly?: boolean;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: AccordionOptionChangeFnType | null;
	/** -- */
	children: React.ReactNode;
};

const Accordion = (props: AccordionProps) => {
    const {
        wrapperClassName,
        defaultActiveIndex,
        defaultActiveAll = false,
        duration,
        easing = 'ease',
        alternateCollapse = true,
        arrowOnly = false,
        onChange,
        children
    } = props;

    const animSpeed = duration || 200;
    const easeType: string = typeof alternateCollapse === 'undefined' ? EasingList['linear'] : EasingList[easing as never];
    const rootRef = useRef<any>(null);
    const [heightObserver, setHeightObserver] = useState<number[]>([]);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());  // Keep track of all expanded items
    const animationInProgress = useRef<boolean>(false);
    const initExpanded = useRef<boolean>(false);
        

    
    function handleClickItem(e: React.MouseEvent) {
        if (animationInProgress.current) return;
        if ((e.target as any).closest('.custom-accordion-header') === null) return;
        
        animationInProgress.current = true;

        const reactDomEl: any = arrowOnly ? e.currentTarget.closest('.custom-accordion-item') : e.currentTarget;
        const curIndex: number = parseInt(reactDomEl.dataset.index);
        const reactDomWrapperEl: HTMLElement = rootRef.current;
        const $li = reactDomWrapperEl.querySelectorAll('.custom-accordion-item');

        if (reactDomEl.getAttribute('aria-expanded') === 'false' || reactDomEl.getAttribute('aria-expanded') === null) {
            if (alternateCollapse) {
    
                // Update expanded items state
                setExpandedItems(new Set([curIndex]));
            } else {
                // Add current item to expanded items
                setExpandedItems(prev => new Set([...(prev as never), curIndex]));
            }

        } else {
 
            // Remove current item from expanded items
            setExpandedItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(curIndex);
                return newSet;
            });
        }

        // Reset animation flag after transition duration
        setTimeout(() => {
            animationInProgress.current = false;
        }, animSpeed);

        onChange?.(reactDomEl, curIndex);
    }


    //Initialize expanded items based on defaultActiveIndex or defaultActiveAll
    useEffect(() => {

        // Skip the default height initialization to prevent re-initialization. 
        // This method is useful when you want to manually control when the accordion should 
        // skip the automatic height initialization process, especially useful when `children` change frequently.
        if (initExpanded.current === true) return;

        if (defaultActiveAll && children && rootRef.current) {
            const allIndices = Array.from({ length: (children as any[]).length }, (_, i) => i);
            setExpandedItems(new Set(allIndices));
            // Set heightObserver for all items to enable height monitoring
            setHeightObserver(allIndices);
            
            //
            initExpanded.current = true;
        } else if (defaultActiveIndex !== undefined) {
            const initialExpanded = new Set<number>();
            const observerIndices: number[] = [];
            
            if (Array.isArray(defaultActiveIndex)) {
                defaultActiveIndex.forEach(index => {
                    initialExpanded.add(index);
                    observerIndices.push(index);
                });
            } else if (typeof defaultActiveIndex === 'number') {
                initialExpanded.add(defaultActiveIndex);
                observerIndices.push(defaultActiveIndex);
            }
            
            setExpandedItems(initialExpanded);
            // Set heightObserver for default active items to enable height monitoring
            if (observerIndices.length > 0) {
                setHeightObserver(observerIndices);
            }

            //
            initExpanded.current = true;

        }
        
    }, [defaultActiveIndex, defaultActiveAll, children]);
    
    
    return (
        <>
            <div className={combinedCls(
                'custom-accordion-item',
                clsWrite(wrapperClassName, 'accordion')
            )} role="tablist" ref={rootRef}>
                {(children != null) ? (children as any[]).map((item, i) => {
                    const childProps = { ...item.props };
                    let _defaultActive = false;
                    
                    if (Array.isArray(defaultActiveIndex)) {
                        _defaultActive = defaultActiveIndex.includes(i);
                    } else if (typeof defaultActiveIndex === 'number') {
                        _defaultActive = defaultActiveIndex === i;
                    }
                    
                    return <Item
                        key={"item" + i}
                        index={i}
                        defaultActiveAll={defaultActiveAll}
                        animSpeed={animSpeed}
                        easing={easeType}
                        arrowOnly={arrowOnly}
                        heightObserver={heightObserver}
                        activeItem={_defaultActive}
                        onToggleEv={handleClickItem}
                        isExpanded={expandedItems.has(i)}   // Both controlled and uncontrolled modes are implemented
                        {...childProps}
                    />;
                }) : null}
            </div>
        </>
    );
};

export default Accordion;
