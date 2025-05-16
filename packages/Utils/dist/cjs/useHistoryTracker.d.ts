/**
 * History Tracker
 * @since 20250515
 *
 * @usage:

const App = () => {
    const {
        getReady,
        clearHistory,
        goBack,
        getFirstUrl,
        getCurrentUrl,
        getForwardHistory,
        getHistory,
    } = useHistoryTracker({
        onChange: ({
            isReady,
            history,
            forwardHistory,
            currentUrl,
            firstUrl,
            canGoBack,
            canGoForward
        } : {
            isReady: boolean;
            history: string[];
            forwardHistory: string[];
            currentUrl: string;
            firstUrl: string;
            canGoBack: boolean;
            canGoForward: boolean;
        }) => {
            console.log('--> onChange: ',
                isReady,
                history,
                forwardHistory,
                currentUrl,
                firstUrl,
                canGoBack,
                canGoForward
            );
        }
    });

    // useEffect(() => {
    //     console.log(getReady(), getFirstUrl(), getCurrentUrl(), getForwardHistory(), getHistory());
    // }, [getReady, getFirstUrl, getCurrentUrl]);

  
    // useEffect(() => {
    //     setTimeout(async () => {
    //         console.log('--> clean history within 2m');
    //         await clearHistory();
    //     }, 2000);
    // }, []);

  
    return (
        <div>

            <div>
                <h3>isReady:</h3>
                <p>{String(getReady())}</p>
            </div>

            <div>
                <h3>First URL:</h3>
                <p>{getFirstUrl()}</p>
            </div>

            <div>
                <h3>Current URL:</h3>
                <p>{getCurrentUrl()}</p>
            </div>

            <div>
                <h3>History ({getHistory().length}):</h3>
                <ul>
                    {getHistory().map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Forward History ({getForwardHistory().length}):</h3>
                <ul>
                    {getForwardHistory().map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>


            
            <button onClick={clearHistory}>
                Clear History
            </button>

            <button onClick={async () => {
                try {
                    const {
                        isReady,
                        history,
                        forwardHistory,
                        canGoBack,
                        canGoForward
                    } : {
                        isReady: boolean;
                        history: string[];
                        forwardHistory: string[];
                        canGoBack: boolean;
                        canGoForward: boolean;
                    } = await goBack();

                    console.log('--> goBack: ',
                        isReady,
                        history,
                        forwardHistory,
                        currentUrl,
                        firstUrl,
                        canGoBack,
                        canGoForward
                    );
                } catch (error) {
                    console.error('Navigation failed', error);
                }

            }}>
               Back
            </button>

        </div>
    );
};

 */
export interface HistoryTrackerChange {
    isReady: boolean;
    history: string[];
    forwardHistory: string[];
    currentUrl: string;
    firstUrl: string;
    canGoBack: boolean;
    canGoForward: boolean;
}
export interface UseHistoryTrackerProps {
    onChange?: (data: HistoryTrackerChange) => void;
}
export interface UseHistoryTrackerReturn {
    getReady: () => boolean;
    getHistory: () => string[];
    getForwardHistory: () => string[];
    getCurrentUrl: () => string;
    getFirstUrl: () => string;
    clearHistory: () => Promise<HistoryTrackerChange>;
    goToHistory: (index: number) => void;
    goBack: () => Promise<HistoryTrackerChange>;
    goForward: () => Promise<HistoryTrackerChange>;
    canGoBack: () => boolean;
    canGoForward: () => boolean;
    addHistoryToFirst: (url: string) => Promise<HistoryTrackerChange>;
}
declare const useHistoryTracker: (props?: UseHistoryTrackerProps) => UseHistoryTrackerReturn;
export default useHistoryTracker;
