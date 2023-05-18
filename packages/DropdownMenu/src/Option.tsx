import React from 'react';

interface OptionConfig {
	value?: string | undefined;
	label?: string | undefined;
}

type OptionProps = {
    option?: OptionConfig;
    hyperlinkClassName?: string;
    onSelect?: (option: any) => void | undefined;
};

export default function Option(props: OptionProps) {

    function handleSelect(e) {
        e.preventDefault();

        const fn: any = props.onSelect;
        fn(props.option);
    }

    return (
        <li><a className={props.hyperlinkClassName} data-value={props.option?.value} href="#" onClick={handleSelect} dangerouslySetInnerHTML={{__html: `${props.option?.label}`}}></a></li>
    );
}

