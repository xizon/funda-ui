import React, { forwardRef } from 'react';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


import { usePopoverContext } from './Popover';

// PopoverTrigger component
export type PopoverTriggerProps = {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
};

const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>((props, ref) => {
    const { asChild, className, children } = props;
    const { triggerRef, setIsOpen, isOpen, id, direction, size } = usePopoverContext();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const setRefs = (node: HTMLElement | null) => {
        if (node) {
            (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref && node) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
    };

    const triggerProps: any = {
        ref: setRefs,
        'data-overlay-id': `cus-popover__wrapper-${id}`,
        className: combinedCls(
            'cus-popover__trigger',
            clsWrite(className, 'd-inline-block')
        ),
        'data-microtip-position': direction || 'top',
        'data-microtip-size': size || 'auto',
        onClick: handleClick
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            ...triggerProps,
            ...(children.props || {})
        });
    }

    return (
        <div {...triggerProps}>
            {children}
        </div>
    );
});

PopoverTrigger.displayName = 'PopoverTrigger';

export default PopoverTrigger;
