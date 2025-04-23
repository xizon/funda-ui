declare const useHistoryTracker: (props: any) => {
    isReady: boolean;
    history: string[];
    forwardHistory: string[];
    currentUrl: string;
    firstUrl: string;
    clearHistory: () => void;
    goToHistory: (index: any) => void;
    goBack: () => Promise<unknown>;
    goForward: () => Promise<unknown>;
    canGoBack: () => boolean;
    canGoForward: () => boolean;
};
export default useHistoryTracker;
