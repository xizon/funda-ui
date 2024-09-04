import React from 'react';

export interface OptionConfig {
    value?: string | undefined;
    label?: string | undefined;
    listItemLabel?: string | undefined;
}

export type OptionProps = {
    option?: OptionConfig;
    hyperlinkClassName?: string;
    selectEv?: (value: any, option: any) => void | undefined;
};

export default function Option(props: OptionProps) {
    const {
        option,
        hyperlinkClassName,
        selectEv
    } = props;

    const _label = option ? option.label : '';
    const _value = option ? option.value : '';
    const _listItemLabel = option ? (typeof option.listItemLabel === 'undefined' ? undefined : option.listItemLabel) : undefined;

    function handleSelect(e: any) {
        e.preventDefault();

        const _value = e.currentTarget.dataset.value;

        selectEv?.(_value, option);
    }


    return (
        <>
            <li>
                <a
                    className={hyperlinkClassName}
                    data-opt="true"
                    data-value={_value}
                    data-label={_label}
                    data-list-item-label={_listItemLabel}
                    data-itemdata={option ? JSON.stringify(option) : ''}
                    href="#"
                    tabIndex={-1}
                    dangerouslySetInnerHTML={{ __html: typeof _listItemLabel === 'undefined' ? `${_label}` : `${_listItemLabel}` }}
                    onClick={handleSelect}
                ></a>
            </li>
        </>

    );
}

