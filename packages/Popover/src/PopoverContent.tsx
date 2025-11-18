import React, { forwardRef } from 'react';
import RootPortal from 'funda-root-portal';
import { combinedCls } from 'funda-utils/dist/cjs/cls';


import { usePopoverContext } from './Popover';

// PopoverContent component
export type PopoverContentProps = {
    children: React.ReactNode;
    className?: string;
};

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
    const { children, className } = props;
    const {
        isOpen,
        contentRef,
        id,
        direction,
        size,
        popupArrowStyle,
        popupContentStyle,
        wrapperClassName,
        position
    } = usePopoverContext();

    const wrapperRef = (node: HTMLDivElement | null) => {
        if (node) {
            (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref && node) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
    };

    return (
        <RootPortal show={isOpen} containerClassName="Popover">
            <div
                ref={wrapperRef}
                id={`cus-popover__wrapper-${id}`}
                className={combinedCls(
                    'cus-popover__wrapper',
                    wrapperClassName,
                    'active'
                )}
                role="popover"
                data-microtip-position={direction || 'top'}
                data-microtip-size={size || 'auto'}
                style={{
                    left: position.x,
                    top: position.y,
                    display: 'none',
                    ...popupArrowStyle
                }}
            >
                <div 
                    className={combinedCls('cus-popover__content', className)} 
                    style={popupContentStyle}
                >
                    {children}
                </div>
            </div>
        </RootPortal>
    );
});

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
