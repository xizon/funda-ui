interface FormField {
    name: string;
    value: string | string[];
}

type FieldType = 'input' | 'textarea' | 'select' | 'checkbox' | 'progress' | 'datalist';

/**
 * Serialize form values
 * @param form - HTMLFormElement or HTMLDivElement to serialize
 * @param types - An array of field types to include in serialization
 * @returns Array of form fields with their values
 */
function serializeArray(
    form: HTMLFormElement | HTMLDivElement | null,
    types: FieldType[] = ['input', 'textarea', 'select', 'checkbox', 'progress', 'datalist']
): FormField[] {
    if (form === null) return [];


    const objects: FormField[] = [];
    const fieldsTypes = types;
    
    fieldsTypes.forEach((item) => {
        const fields = form.getElementsByTagName(item);
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLProgressElement | HTMLDataListElement;
            const _name = field.getAttribute("name");
            let _value: string | string[] = '';

            // Get value based on element type
            if (field instanceof HTMLInputElement) {
                _value = field.value;
            } else if (field instanceof HTMLTextAreaElement) {
                _value = field.value;
            } else if (field instanceof HTMLSelectElement) {
                _value = field.value;
            } else if (field instanceof HTMLProgressElement) {
                _value = field.value.toString();
            } else if (field instanceof HTMLDataListElement) {
                _value = ''; // DataList elements don't have a value property
            }

            // if field is Array
            if (_name !== null && _name.match(/(\[.*?\])/gi)) {
                const inputs = form.querySelectorAll<HTMLInputElement>(`[name='${_name}']`);
                const _arrFieldValue: string[] = [];
                
                for (let j = 0; j < inputs.length; j++) {
                    const _arrField = inputs[j];
                    //if checkbox or radio
                    if (_arrField.type === "radio" || _arrField.type === "checkbox") {
                        if (_arrField.checked === true) {
                            _arrFieldValue.push(_arrField.value);
                        } else {
                            _arrFieldValue.push("");
                        }
                    } else {
                        _arrFieldValue.push(_arrField.value);
                    }
                }

                _value = _arrFieldValue;
            }

            //if checkbox or radio
            if (field instanceof HTMLInputElement && (field.type === 'radio' || field.type === 'checkbox')) {
                if (field.checked === true) {
                    objects.push({
                        name: _name || '',
                        value: _value
                    });
                }
            } else {
                objects.push({
                    name: _name || '',
                    value: _value
                });
            }
        }
    });

    // remove Duplicate objects from JSON Array
    const clean = objects.filter((item, index, self) => 
        index === self.findIndex((t) => (t.name === item.name))
    );

    return clean;
}

export {
    serializeArray
};