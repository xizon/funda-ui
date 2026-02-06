/**
 * Handles the event of responsive table
 * 
 * @usage:

const App = () => {

    const responsiveTable = true;
    const rootRef = useRef<any>(null);

    useTableResponsive({
        enabled: responsiveTable && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */

import { useEffect } from 'react';

import { tableElemScrolledInit, initOrderProps, initRowColProps } from '../func';

export interface UseTableResponsiveProps {
    enabled: boolean;
    spyElement?: HTMLElement | null;
}

function useTableResponsive({
    enabled,
    spyElement,
}: UseTableResponsiveProps, deps: any[]) {

    const debounce = (fn: Function, limit: number = 300): any => {
        let timer: any;
        return function(this: any) {
            clearTimeout(timer);
            timer = setTimeout(function(this: any) {
                fn.apply(this, arguments);
            }, limit);
        }
    };

    const windowResizeUpdate = debounce(handleWindowUpdate, 50);
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    function handleWindowUpdate() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if (window.innerWidth != windowWidth) {

            // Update the window width for next time
            windowWidth = window.innerWidth;

            // Do stuff here
            tableElemScrolledInit(spyElement as never, windowWidth);

        }
    }

    useEffect(() => {
        if (enabled && spyElement) {

            // 1. Remove the tag to allow initRowColProps to re-execute (!!!REQUIRED)
            delete spyElement.dataset.customPropsInit;
            delete spyElement.dataset.rowColPropsInit;

            // 2. Initialize custom props of table elements
            initOrderProps(spyElement);
            initRowColProps(spyElement);
  
            // 3. With scroll bars
            let windowWidth = window.innerWidth;
            tableElemScrolledInit(spyElement as never, windowWidth);


            // 4. Add function to the element that should be used as the scrollable area.
            window.removeEventListener('resize', windowResizeUpdate);
            window.addEventListener('resize', windowResizeUpdate);

            // Remove the global list of events, especially as scroll and interval.
            return () => {
                window.removeEventListener('resize', windowResizeUpdate);
            };
        }
    }, [enabled, spyElement, ...deps]);
}


export default useTableResponsive;

