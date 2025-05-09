import React from 'react';
export declare type RootPortalProps = {
    containerClassName?: string;
    children?: React.ReactNode;
    show?: boolean;
    usePortal?: boolean;
};
declare const RootPortal: (props: RootPortalProps) => JSX.Element | null;
export default RootPortal;
