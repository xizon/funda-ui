export interface AutosizeTextAreaProps {
    el: any;
    value: string;
    maxHeight?: number;
    cb?: (dimensions: [number, number]) => void;
}
declare const useAutosizeTextArea: ({ el, value, maxHeight, cb }: AutosizeTextAreaProps) => {
    reset: () => void;
};
export default useAutosizeTextArea;
