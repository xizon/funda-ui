import React, { useState, useRef } from 'react';

import Item from './AccordionItem';

import animateStyles from './utils/anim';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type AccordionOptionChangeFnType = (arg1: any, arg2: any) => void;


type AccordionProps = {
    wrapperClassName?: string;
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
	/** Display the only first item of a list */
	displayTheFirstItem?: boolean;
	/** The number of milliseconds(ms) each iteration of the animation takes to complete */
	duration?: number;
    /**  Mutually exclusive alternate expansion between the levels */
    alternateCollapse?: boolean;
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
        triggerType,
        displayTheFirstItem,
        duration,
        alternateCollapse,
        onChange,
        children
    } = props;


    const ALTER = typeof alternateCollapse === 'undefined' ? true : alternateCollapse;
    const rootRef = useRef<any>(null);
    const [animOK, setAnimOK] = useState<boolean>(false);

   

    function handleClickItem(e: React.MouseEvent) {
		e.preventDefault();
		//Prevents further propagation of the current event in the capturing and bubbling phases(if use `e.target`).
		e.stopPropagation();

		if ( animOK ) return;

		//
        const reactDomEl: any = e.currentTarget;
        const curIndex: any = reactDomEl.dataset.index;
		const reactDomWrapperEl: HTMLElement = rootRef.current;
		const animSpeed = duration || 200;
		const $li = reactDomWrapperEl.querySelectorAll( '.custom-accordion-item' );
		const $allContent = reactDomWrapperEl.querySelectorAll( '.custom-accordion-content__wrapper' );
		const $curContent = reactDomEl.querySelector( '.custom-accordion-content__wrapper' );
		

		if ( reactDomEl.getAttribute( 'aria-expanded' ) === 'false' || reactDomEl.getAttribute( 'aria-expanded' ) === null  ) {

            setAnimOK(true);
			setTimeout( () => {
                setAnimOK(false);
			}, animSpeed);

            if (ALTER) {
                //Hide other all sibling <dt> of the selected element
                Array.prototype.forEach.call($allContent, (node) => {
                    if ( node.clientHeight > 0 ) {
                        animateStyles(node, {
                            startHeight  : node.scrollHeight,
                            endHeight    : 0,
                            speed        : animSpeed
                        } as  never);				
                    }

                });

                //to open
                Array.prototype.forEach.call($li, (node) => {
                    node.classList.remove('active');
                    node.querySelector('.custom-accordion-trigger')?.classList.remove('active');
                    node.querySelector('.custom-accordion-trigger')?.classList.add('collapsed');
                    node.setAttribute( 'aria-expanded', false );
                });


            }

			reactDomEl.classList.add('active');
            reactDomEl.querySelector('.custom-accordion-trigger')?.classList.add('active');
            reactDomEl.querySelector('.custom-accordion-trigger')?.classList.remove('collapsed');
			reactDomEl.setAttribute( 'aria-expanded', true );
			// When the height of the element is 0, the value of `offsetHeight` and `clientHeight` will be 0
			animateStyles($curContent, {
				startHeight  : 0,
				endHeight    : $curContent.scrollHeight,
				speed        : animSpeed
			} as  never);
			
		} else {
			
			if ( e.type == 'click' ) {

				//to close
				reactDomEl.classList.remove('active');
                reactDomEl.querySelector('.custom-accordion-trigger')?.classList.remove('active');
                reactDomEl.querySelector('.custom-accordion-trigger')?.classList.add('collapsed');
				reactDomEl.setAttribute( 'aria-expanded', false );
				animateStyles($curContent, {
					startHeight  : $curContent.scrollHeight,
					endHeight    : 0,
					speed        : animSpeed
				} as  never);
			}
			
		}

        if (typeof (onChange) === 'function') {
            onChange(reactDomEl, Number(curIndex));
        }


	}

    return (
        <>

            <div className={`custom-accordion-item ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : "accordion"}`} role="tablist" ref={rootRef}>
                {(children != null) ? (children as any[]).map((item, i) => {
                    const childProps = { ...item.props };
                    const _defaultActive = i === 0 && displayTheFirstItem ? true : false;
                    return <Item
                        key={"item" + i}
                        index={i}
                        defaultActive={_defaultActive}
                        triggerType={triggerType || 'click'}
                        onToggleEv={handleClickItem}
                        {...childProps}
                    />;

                }) : null}

            </div>


        </>
    )
};

export default Accordion;
