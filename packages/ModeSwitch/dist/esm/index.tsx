import React, { useEffect, useState, useRef } from 'react';


type ModeSwitchProps = {
    triggerClassName?: string;
    /** The name of the local storage */
    localStorageName?: string;
    /** Style name for dark mode */
    darkClassName?: string;
    /** Set the light icon */
    lightIcon?: React.ReactNode | string;
    /** Set the dark icon */
    darkIcon?: React.ReactNode | string;
    /** -- */
    tabIndex?: number;
    onChange?: (e: any, param: boolean) => void;
};


const ModeSwitch = (props: ModeSwitchProps) => {
    const {
        triggerClassName,
        localStorageName,
        darkClassName,
        lightIcon,
        darkIcon,
        tabIndex,
        onChange
    } = props;

    const darkBtnRef = useRef<any>(null);
    const lightBtnRef = useRef<any>(null);
    const [isDark, setIsDark] = useState<boolean>(false);
    const _darkClassName = darkClassName ? darkClassName : 'dark-mode';
    const _localStorageName = localStorageName ? localStorageName : 'SITE_THEME_MODE';

    function handleClick(e) {
        e.preventDefault();
        setIsDark(!isDark);

        if (!isDark) {
            document.body.classList.add(_darkClassName);
            localStorage.setItem(_localStorageName, _darkClassName);

        } else {
            document.body.classList.remove(_darkClassName);
            localStorage.removeItem(_localStorageName);
        }

        //
        onChange?.(e, !isDark);

    }

    useEffect(() => {

        const modeName = localStorage.getItem(_localStorageName);
        if (modeName !== null) {
            document.body.classList.add(modeName);
            setIsDark(true);
        }

    }, []);

    return (
        <>

            <a className={triggerClassName ? triggerClassName : ''} tabIndex={tabIndex || -1} href="#" onClick={handleClick} >
                <span ref={darkBtnRef} style={{ display: !isDark ? 'inline-block' : 'none' }}>{darkIcon || <>
                    <svg fill="#fff" width="26px" height="26px" viewBox="0 0 35 35"><path stroke="#000" strokeWidth="2" d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path></svg>
                </>}</span>
                <span ref={lightBtnRef} style={{ display: isDark ? 'inline-block' : 'none' }}>{lightIcon || <>
                    <svg fill="#fff" height="26px" width="26px" viewBox="0 0 207.628 207.628"><circle cx="103.814" cy="103.814" r="45.868"/><path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z"/><path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385C111.314,36.027,107.956,39.385,103.814,39.385z"/><path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385C111.314,204.271,107.956,207.628,103.814,207.628z"/><path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5S204.271,111.314,200.128,111.314z"/><path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5S36.027,111.314,31.885,111.314z"/><path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z"/><path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z"/><path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606C175.757,178.687,173.838,179.419,171.918,179.419z"/><path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z"/></svg>
                </>}</span>
            </a>

        </>
    )
};


export default ModeSwitch;