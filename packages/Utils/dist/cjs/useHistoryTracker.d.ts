export declare type UseHistoryTrackerChangeFnType = (args: {
    isReady: boolean;
    history: string[];
    forwardHistory: string[];
    currentUrl: string;
    firstUrl: string;
    canGoBack: boolean;
    canGoForward: boolean;
}) => void;
export declare type UseHistoryTrackerProps = {
    onChange?: UseHistoryTrackerChangeFnType | null;
};
declare const useHistoryTracker: (props: UseHistoryTrackerProps) => {
    isReady: boolean;
    history: string[];
    forwardHistory: string[];
    currentUrl: string;
    firstUrl: string;
    clearHistory: () => void;
    goToHistory: (index: number) => void;
    goBack: () => Promise<unknown>;
    goForward: () => Promise<unknown>;
    canGoBack: () => boolean;
    canGoForward: () => boolean;
};
export default useHistoryTracker;
