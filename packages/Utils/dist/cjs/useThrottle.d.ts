declare const useThrottle: <T extends (...args: any[]) => void>(fn: T, delay: number, dependence: any[]) => T;
export default useThrottle;
