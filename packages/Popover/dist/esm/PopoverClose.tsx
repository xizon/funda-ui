import React, { forwardRef } from 'react';
import { combinedCls } from 'funda-utils/dist/cjs/cls';


import { usePopoverContext } from './Popover';

export type PopoverCloseProps = {
    asChild?: boolean;
    className?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const PopoverClose = forwardRef<HTMLElement, PopoverCloseProps>((props, ref) => {
    const { asChild, className, children, onClick, ...rest } = props;
    const { setIsOpen } = usePopoverContext();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (typeof onClick === 'function') {
            onClick(event);
        }

        if (!event.defaultPrevented) {
            setIsOpen(false);
        }
    };

    const closeProps: any = {
        ref,
        className: combinedCls('cus-popover__close', className),
        onClick: handleClick,
        ...rest
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            ...closeProps,
            ...(children.props || {})
        });
    }

    return (
        <button type="button" {...closeProps}>
            {children || 'Close'}
        </button>
    );
});

PopoverClose.displayName = 'PopoverClose';

export default PopoverClose;

