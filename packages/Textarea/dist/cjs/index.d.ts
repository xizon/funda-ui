/// <reference types="react" />
declare module 'react' {
    interface HTMLAttributes<T> {
        children?: any;
    }
}
declare type TextareaProps = {
    wrapperClassName?: string;
    value?: string;
    label?: string | object;
    name?: string;
    maxLength?: any;
    cols?: number;
    rows?: number;
    disabled?: any;
    required?: any;
    placeholder?: string;
    /** -- */
    id?: string;
};
export default function Textarea(props: TextareaProps): JSX.Element;
export {};
