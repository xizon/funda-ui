export interface AutosizeTextAreaProps {
    el: any;
    value: string;
    cb?: (dimensions: [number, number]) => void;
}
declare const useAutosizeTextArea: ({ el, value, cb }: AutosizeTextAreaProps) => void;
export default useAutosizeTextArea;
