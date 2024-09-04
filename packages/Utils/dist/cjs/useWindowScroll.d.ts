export declare type PerformanceType = ["debounce" | "throttle", number];
export declare type ScrollData = {
    x: number;
    y: number;
};
export declare type UseWindowScrollProps = {
    enabled?: boolean;
    performance: PerformanceType;
    handle?: (scrollData: ScrollData) => void;
};
declare const useWindowScroll: ({ enabled, performance, handle }: UseWindowScrollProps) => [ScrollData, () => void];
export default useWindowScroll;
