import React from 'react';

interface OptionConfig {
    value?: string | undefined;
    label?: string | React.ReactNode | undefined;
}

type OptionProps = {
    option?: OptionConfig;
    hyperlinkClassName?: string;
    onSelect?: (option: any) => void | undefined;
};

export default function Option(props: OptionProps) {
    const {
        option
    } = props;

    const _label = option ? option.label : '';
    const _value = option ? option.value : '';

    function handleSelect(e: any) {
        e.preventDefault();

        const fn: any = props.onSelect;
        fn(props.option);
    }


    return (
        <>
            {typeof _label === 'string' ? <>
                <li><a className={props.hyperlinkClassName} data-value={_value} href="#" tabIndex={-1} onClick={handleSelect} dangerouslySetInnerHTML={{ __html: `${_label}` }}></a></li>
            </> : <>
            <li><a className={props.hyperlinkClassName} data-value={_value} href="#" tabIndex={-1} onClick={handleSelect}>{_label}</a></li>
            </>}
        </>

    );
}

