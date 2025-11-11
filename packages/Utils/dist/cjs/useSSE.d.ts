declare const useSSE: (url: string | null | undefined, retryDelay?: number) => {
    readonly connected: boolean;
    readonly messages: string[];
    readonly disconnect: () => void;
    readonly reconnect: () => void;
    readonly resetMessages: () => void;
};
export default useSSE;
export { useSSE };
