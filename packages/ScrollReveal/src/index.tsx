import React, { useState, useRef, useEffect } from 'react';

import useComId from 'funda-utils/dist/cjs/useComId';


export interface ViewOffsetConfig {
    x?: string | undefined;
    y?: string | undefined;
}


export type ScrollRevealProps = {
    root?: any;
    viewOffset?: ViewOffsetConfig;
    defaultClassName?: string | string[];
    showClassName?: string | string[];
    infinite?: boolean;
    delay?: number;
    threshold?: number | number[];
    onChange?: (e: any, data: any) => void;
    onIntersect?: (e: any, status: boolean) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};


const ScrollReveal = (props: ScrollRevealProps) => {
    const {
        root,
        viewOffset,
        defaultClassName,
        showClassName,
        infinite,
        delay,
        threshold,
        onChange,
        onIntersect,
        id,
        children
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const _viewOffset = viewOffset ? viewOffset : {
        y: '0px',
        x: '0px'
    };
    const [isIntersecting, setIsIntersecting] = useState(false);
    const rootRef = useRef(null);
    const options = {
        root: root ? root : (typeof document === 'undefined' ? null : document),  // Prevent document undefined from server-side rendering
        rootMargin: `${_viewOffset.y} ${_viewOffset.x}`,
        threshold: threshold ? threshold : [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    function intersectionCallback(entries: any[]) {
        // if has multiple intersect via `observer.observe(obj)`

        const [entry] = entries;
        /*
        IntersectionObserverEntry {
            time: 260.2000000476837, 
            intersectionRatio: 0,
            rootBounds: {x: 0, y: 0, width: 1680, height: 540, top: 0, …}, 
            boundingClientRect: {x: 0, y: 590, width: 1680, height: 540, top: 590, …}, 
            intersectionRect: {x: 0, y: 0, width: 0, height: 0, top: 0, …}, 
            isIntersecting: false,
            isVisible: false,
            target: main
        }

        IntersectionObserverEntry {
            time: 4681.599999964237, 
            intersectionRatio: 0,
            rootBounds: {x: 0, y: 0, width: 1680, height: 540, top: 0, …}, 
            boundingClientRect: {x: 0, y: 530, width: 1680, height: 540, top: 530, …}, 
            intersectionRect: {x: 0, y: 530, width: 1680, height: 10, top: 530, …}, 
            isIntersecting: true,
            isVisible: false,
            target: main
        }

        ...
        */
        setIsIntersecting(entry.isIntersecting);

        // interaction
        const box = entry.target;
        const visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

        //
        onChange?.(box, visiblePct);

    }


    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback, options);
        if ( rootRef.current ) observer.observe(rootRef.current);

        //default classes
        if ( rootRef.current ) {
            const _classesDefault = !Array.isArray(defaultClassName) ? [defaultClassName] : defaultClassName;
            if (typeof defaultClassName !== 'undefined') _classesDefault.map((item: any) => (rootRef.current as any).classList.add(item));
        }

        return () => observer.disconnect();
    }, [rootRef, options]);

    useEffect(() => {
        if ( rootRef.current ) {

            onIntersect?.(rootRef.current, isIntersecting);
            const _classes = !Array.isArray(showClassName) ? [showClassName] : showClassName;

            if (isIntersecting) {
                setTimeout(() => {
                    if (typeof showClassName !== 'undefined') _classes.map((item: any) => (rootRef.current as any).classList.add(item));
                }, delay ? Number(delay) : 0);
            } else {
                if ( infinite ) setTimeout(() => {
                    if (typeof showClassName !== 'undefined') _classes.map((item: any) => (rootRef.current as any).classList.remove(item));
                }, delay ? Number(delay) : 0);
            }
        }

    }, [isIntersecting]);


    return (
        <>

            <div
                ref={rootRef}
                id={idRes}
            >
                {children}

            </div>

        </>
    )
};


export default ScrollReveal;