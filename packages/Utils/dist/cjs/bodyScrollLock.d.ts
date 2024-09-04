interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (el: any) => boolean;
}
export declare const disableBodyScroll: (targetElement: any, options?: BodyScrollOptions) => void;
export declare const clearAllBodyScrollLocks: () => void;
export declare const enableBodyScroll: (targetElement: any) => void;
export {};
