import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


type RootPortalProps = {
    containerClassName?: string;
    children?: React.ReactNode;
    show?: boolean;
};

const RootPortal = (props: RootPortalProps) => {
    const {
        containerClassName,
        show,
        children
    } = props;

    const containerRef = useRef<HTMLElement>();

    // Move HTML templates to tag end body </body>
    // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
    // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
    // ###
    // ###
    // Use `containerRef.current` to ensure the correctness of the nextjs framework. It may report an error document as undefined

    useEffect(() => {

        containerRef.current = document.createElement('div');
        containerRef.current.className = `root-portal-container ${containerClassName || ''}`;
        document.body.appendChild(containerRef.current);
        

        return () => {
            if (containerRef.current) {
                containerRef.current.remove();
            }
        };
    }, []);

    return (
        <>
            {containerRef.current && show && createPortal(
                children,
                containerRef.current as HTMLElement
            )}
        </>
    );


};

export default RootPortal;
