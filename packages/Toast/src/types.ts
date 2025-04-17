export interface ToastOptions {
    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    /** IDENTIFIER */
    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    actionId?: string | number | null | undefined;

    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    /** GENERIC */
    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    wrapperClassName?: string;
    /** Automatically hide multiple items */
    onlyShowOne?: boolean;
    /** Allow data to be reversed */
    reverseDisplay?: boolean; 
    /** The direction of the toast. */
    direction?: 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right' | 'vertical-center';
    /** Set an automatic closing time, multiple items will be accumulated in order. 
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** You can not close pop-win when it is enabled */
    lock?: boolean;
    /** Whether to use cascading styles */
    cascading?: boolean;
    /** Self-defined class name for body*/
    schemeBody?: string;
    /** Self-defined class name for header */
    schemeHeader?: string;
    /** Set the color of the close button */
    closeBtnColor?: string;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** -- */
    onClose?: (e: HTMLDivElement, currentIndex: number, displayedElements: HTMLDivElement[]) => void;


    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    /** ITEM */
    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    title?: string;
    note?: string;
    theme?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | undefined;
    message?: React.ReactNode;


    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    /** AUTO */
    /** +++++++++++++++++++++++++++++++++++++++++++++++++  */
    id?: string;
}


// Configure the interface globally
export interface ToastGlobalConfig {
    defaultWrapperClassName?: string;
    defaultOnlyShowOne?: boolean;
    defaultDirection?: ToastOptions['direction'];
    defaultCascading?: boolean;
    defaultReverseDisplay?: boolean;
}
