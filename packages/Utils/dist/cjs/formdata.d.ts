interface FormField {
    name: string;
    value: string | string[];
}
declare type FieldType = 'input' | 'textarea' | 'select' | 'checkbox' | 'progress' | 'datalist';
/**
 * Serialize form values
 * @param form - HTMLFormElement or HTMLDivElement to serialize
 * @param types - An array of field types to include in serialization
 * @returns Array of form fields with their values
 */
declare function serializeArray(form: HTMLFormElement | HTMLDivElement | null, types?: FieldType[]): FormField[];
export { serializeArray };
