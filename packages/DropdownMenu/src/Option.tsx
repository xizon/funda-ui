import React from 'react';

interface OptionConfig {
    value?: string | undefined;
    label?: string | undefined;
    listItemLabel?: string | undefined;
}

type OptionProps = {
    option?: OptionConfig;
    hyperlinkClassName?: string;
};

export default function Option(props: OptionProps) {
    const {
        option
    } = props;

    const _label = option ? option.label : '';
    const _value = option ? option.value : '';
    const _listItemLabel = option ? (typeof option.listItemLabel === 'undefined' ? undefined : option.listItemLabel) : undefined;

    return (
        <>
            <li>
                <a
                    className={props.hyperlinkClassName}
                    data-opt="true"
                    data-value={_value}
                    data-label={_label}
                    data-list-item-label={_listItemLabel}
                    data-itemdata={option ? JSON.stringify(option) : ''}
                    href="#"
                    tabIndex={-1}
                    dangerouslySetInnerHTML={{ __html: typeof _listItemLabel === 'undefined' ? `${_label}` : `${_listItemLabel}` }}
                ></a>
            </li>
        </>

    );
}

