import React, { useState, useRef, useEffect } from 'react';

import Item from './AccordionItem';

import animateStyles from 'funda-utils/dist/cjs/anim';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';

// Adapt the easing parameters of TweenMax
export enum EasingList {
    linear = 'linear',
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
        easing,
        alternateCollapse = true,
        arrowOnly = false,
        onChange,
        children
    } = props;

    const animSpeed = duration || 200;
    const easeType: string = typeof alternateCollapse === 'undefined' ? EasingList['linear'] : EasingList[easing as never];
    const rootRef = useRef<any>(null);
    const [animOK, setAnimOK] = useState<boolean>(false);
    const [heightObserver, setHeightObserver] = useState<number>(-1);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());  // Keep track of all expanded items
    const animationInProgress = useRef<boolean>(false);

    
    function handleClickItem(e: React.MouseEvent) {
        if (animationInProgress.current) return;
        if ((e.target as any).closest('.custom-accordion-header') === null) return;
        if (animOK) return;
        
        animationInProgress.current = true;

        const reactDomEl: any = arrowOnly ? e.currentTarget.closest('.custom-accordion-item') : e.currentTarget;
        const curIndex: number = parseInt(reactDomEl.dataset.index);
        const reactDomWrapperEl: HTMLElement = rootRef.current;
        const $li = reactDomWrapperEl.querySelectorAll('.custom-accordion-item');
        const $allContent = reactDomWrapperEl.querySelectorAll('.custom-accordion-content__wrapper');
        const $curContent = reactDomEl.querySelector('.custom-accordion-content__wrapper');
        const $trigger = reactDomEl.querySelector('.custom-accordion-trigger');

        if (reactDomEl.getAttribute('aria-expanded') === 'false' || reactDomEl.getAttribute('aria-expanded') === null) {
            setAnimOK(true);
            setTimeout(() => {
                setAnimOK(false);
            }, animSpeed);

            if (alternateCollapse) {
                // Hide other all sibling content
                Array.prototype.forEach.call($allContent, (node) => {
                    if (node.clientHeight > 0) {
                        animateStyles(node, {
                            startHeight: node.scrollHeight,
                            endHeight: 0,
                            speed: animSpeed
                        } as never, easeType, () => {
                            animationInProgress.current = false;
                        });
                    }
                });

                // Update all items to collapsed state
                Array.prototype.forEach.call($li, (node) => {
                    node.setAttribute('aria-expanded', 'false');
                });

                // Update expanded items state
                setExpandedItems(new Set([curIndex]));
            } else {
                // Add current item to expanded items
                setExpandedItems(prev => new Set([...(prev as never), curIndex]));
            }

            reactDomEl.setAttribute('aria-expanded', 'true');

            // Call onTriggerChange if it exists in the child props
            const childProps = (children as any[])[curIndex]?.props;
            if (typeof childProps?.onTriggerChange === 'function' && $trigger) {
                childProps.onTriggerChange($trigger, true);
            }

            animateStyles($curContent, {
                startHeight: 0,
                endHeight: $curContent.scrollHeight,
                speed: animSpeed
            } as never, easeType, () => {
                setHeightObserver(curIndex);
                animationInProgress.current = false;
            });
        } else {
            reactDomEl.setAttribute('aria-expanded', 'false');

            // Call onTriggerChange if it exists in the child props
            const childProps = (children as any[])[curIndex]?.props;
            if (typeof childProps?.onTriggerChange === 'function' && $trigger) {
                childProps.onTriggerChange($trigger, false);
            }

            // Remove current item from expanded items
            setExpandedItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(curIndex);
                return newSet;
            });

            animateStyles($curContent, {
                startHeight: $curContent.scrollHeight,
                endHeight: 0,
                speed: animSpeed
            } as never, easeType, () => {
                animationInProgress.current = false;
            });
        }

        onChange?.(reactDomEl, curIndex);
    }


    // Initialize expanded items based on defaultActiveIndex or defaultActiveAll
    useEffect(() => {
        if (defaultActiveAll && children && rootRef.current) {
            const allIndices = Array.from({ length: (children as any[]).length }, (_, i) => i);
            setExpandedItems(new Set(allIndices));
            
            // Actually expand all items without animation
            const $allItems = rootRef.current.querySelectorAll('.custom-accordion-item');
            
            Array.prototype.forEach.call($allItems, (node, index) => {
                node.setAttribute('aria-expanded', 'true');
                const $curContent = node.querySelector('.custom-accordion-content__wrapper');
                const $trigger = node.querySelector('.custom-accordion-trigger');
                
                // Call onTriggerChange if it exists in the child props
                const childProps = (children as any[])[index]?.props;
                if (typeof childProps?.onTriggerChange === 'function' && $trigger) {
                    childProps.onTriggerChange($trigger, true);
                }

                // Directly set height without animation
                if ($curContent) {
                    $curContent.style.height = `${$curContent.scrollHeight}px`;
                }
            });
        } else if (defaultActiveIndex !== undefined) {
            const initialExpanded = new Set<number>();
            if (Array.isArray(defaultActiveIndex)) {
                defaultActiveIndex.forEach(index => initialExpanded.add(index));
            } else if (typeof defaultActiveIndex === 'number') {
                initialExpanded.add(defaultActiveIndex);
            }
            setExpandedItems(initialExpanded);
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
                        animSpeed={animSpeed}
                        arrowOnly={arrowOnly}
                        heightObserver={heightObserver}
                        defaultActive={_defaultActive}
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
