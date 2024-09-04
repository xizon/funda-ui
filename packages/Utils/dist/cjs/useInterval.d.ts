declare const useInterval: (fn: () => void, delay: number | null, enabled?: boolean) => {
    startTimer: any;
    stopTimer: any;
};
export default useInterval;
