import React, { useState, useRef, useEffect, forwardRef, KeyboardEvent, ChangeEvent, FocusEvent, useImperativeHandle } from 'react';

import Input from 'funda-input';
import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import {
    padZero,
    dateFormat,
    isTimeString,
    getNow,
    isValidDate,
    isValidHours,
    isValidMinutesAndSeconds,
    isValidYear,
    isValidMonth,
    isValidDay,
    getCurrentYear,
    getCurrentMonth,
    getCurrentDay,
    getLastDayInMonth
} from 'funda-utils/dist/cjs/date';
import useWindowScroll from 'funda-utils/dist/cjs/useWindowScroll';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { isNumeric } from 'funda-utils/dist/cjs/math';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


import Calendar from './Calendar';



// Localization
import i18n__en_US from './localization/en_US';
import i18n__zh_CN from './localization/zh_CN';





export type DateProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    popupRef?: React.ForwardedRef<any>; // could use "Array" on popupRef.current, such as popupRef.current[0], popupRef.current[1]
    depth?: number;
    popupClassName?: string;
    triggerClassName?: string;
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    enableEntireAreaPopup?: boolean;
    delimiter?: string;
    hideClearButton?: boolean;
    showToolsWhenHover?: boolean;
    offset?: number;
    exceededSidePosOffset?: number;
    localization?: 'en_US' | 'zh_CN';
    type?: 'date' | 'datetime-local' | 'time';
    onlyTime?: boolean;
    truncateSeconds?: boolean;
    valueUseSlash?: boolean;
    defaultValue?: string;
    value?: string;
    clickInitValue?: string;
    min?: string;
    max?: string;
    placeholder?: string;
    label?: React.ReactNode | string;
    units?: string;
    name?: string;
    alt?: any;
    disabled?: any;
    requiredLabel?: React.ReactNode | string;
    required?: any;
    readOnly?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;

    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onLoad?: (e: any, data: any, allSplittingInputs: any[]) => void;
    onChange?: (e: any, data: any, isValidDate: boolean, allSplittingInputs: any[]) => void;
    onBlur?: (e: any, allSplittingInputs: any[]) => void;
    onFocus?: (e: any, allSplittingInputs: any[]) => void;
    onPressEnter?: (e: any, allSplittingInputs: any[]) => void;
    onOpenPopup?: (allSplittingInputs: any[]) => void;
    onClosePopup?: (allSplittingInputs: any[]) => void;
    //
    onChangeDate?: (currentData: any) => void;
    onChangeMonth?: (currentData: any) => void;
    onChangeYear?: (currentData: any) => void;
    onChangeToday?: (currentData: any) => void;
    onChangeHours?: (currentData: any) => void;
    onChangeMinutes?: (currentData: any) => void;
    onChangeSeconds?: (currentData: any) => void;
    onClear?: (currentData: any) => void;



    // calendar
    langHoursTitle?: string;
    langMinutesTitle?: string;
    langSecondsTitle?: string;
    langWeek?: string[];
    langWeekFull?: string[];
    langMonths?: string[];
    langMonthsFull?: string[];
    langToday?: string;
};


const Date = forwardRef((props: DateProps, externalRef: any) => {
    const {
        contentRef,
        popupRef,
        depth,
        triggerClassName,
        popupClassName,
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        enableEntireAreaPopup,
        delimiter,
        hideClearButton,
        showToolsWhenHover,
        offset,
        exceededSidePosOffset,
        localization,
        type,
        onlyTime,
        truncateSeconds,
        valueUseSlash,
        disabled,
        requiredLabel,
        required,
        readOnly,
        defaultValue,
        value,
        clickInitValue,
        min,
        max,
        placeholder,
        label,
        units,
        name,
        alt,
        id,
        iconLeft,
        iconRight,
        autoComplete,
        style,
        tabIndex,
        onLoad,
        onChange,
        onBlur,
        onFocus,
        onPressEnter,
        onOpenPopup,
        onClosePopup,

        //
        onChangeDate,
        onChangeMonth,
        onChangeYear,
        onChangeToday,
        onChangeHours,
        onChangeMinutes,
        onChangeSeconds,
        onClear,


        //calendar
        langHoursTitle,
        langMinutesTitle,
        langSecondsTitle,
        langWeek,
        langWeekFull,
        langMonths,
        langMonthsFull,
        langToday,

        //
        ...attributes
    } = props;


    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const defaultValueIsEmpty = (s: any) => {
        return typeof s === 'undefined' || s === null || s === 'null' || s === '';
    };
    
    const propExist = (p: any) => {
        return typeof p !== 'undefined' && p !== null && p !== '';
    };



    // Localization
    let _langHoursTitle = langHoursTitle || 'Hours';
    let _langMinutesTitle = langMinutesTitle || 'Minutes';
    let _langSecondsTitle= langSecondsTitle || 'Seconds';
    let _langWeek = langWeek;
    let _langWeekFull = langWeekFull;
    let _langMonths = langMonths;
    let _langMonthsFull = langMonthsFull;
    let _langToday = langToday;

     // 
     const DELIMITER_DATE = delimiter || '/';
     const DELIMITER_TIME = ':';
     const SHOW_TOOLS_ENABLED = !(typeof showToolsWhenHover === 'undefined' || showToolsWhenHover === false);
     const HIDE_CLEAR_BTN_ENABLED = !(typeof hideClearButton === 'undefined' || hideClearButton === false);

    //
    const COM_HAS_DATE = typeof onlyTime === 'undefined' || onlyTime === false;
    const COM_HAS_TIME = type === 'datetime-local' || type === 'time';
    const COM_NO_SECONDS = typeof truncateSeconds === 'undefined' || truncateSeconds === false;



    // placeholder
    let datePlaceholder = placeholder || placeholder === '' ? placeholder : 'yyyy/MM/dd HH:mm:ss';

    if (typeof placeholder === 'undefined') {
        datePlaceholder = `${COM_HAS_DATE ? 'yyyy/MM/dd ' : ''}${COM_HAS_TIME ? `HH:mm${COM_NO_SECONDS ? ':ss' : ''}` : ''}`;
    }

    if (typeof localization === 'string') {

        switch (localization) {
            case 'en_US':
                _langHoursTitle = i18n__en_US.hoursTitle;
                _langMinutesTitle = i18n__en_US.minutesTitle;
                _langSecondsTitle = i18n__en_US.secondsTitle;
                _langWeek = i18n__en_US.week;
                _langWeekFull = i18n__en_US.weekFull;
                _langMonths = i18n__en_US.months;
                _langMonthsFull = i18n__en_US.monthsFull;
                _langToday = i18n__en_US.today;
            break;

            case 'zh_CN':
                _langHoursTitle = i18n__zh_CN.hoursTitle;
                _langMinutesTitle = i18n__zh_CN.minutesTitle;
                _langSecondsTitle = i18n__zh_CN.secondsTitle;
                _langWeek = i18n__zh_CN.week;
                _langWeekFull = i18n__zh_CN.weekFull;
                _langMonths = i18n__zh_CN.months;
                _langMonthsFull = i18n__zh_CN.monthsFull;
                _langToday = i18n__zh_CN.today;
            break;

        }

    }



    //
    const POS_OFFSET = Number(offset) || 10;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);

    const partedInputYear = useRef<HTMLInputElement | null>(null);
    const partedInputMonth = useRef<HTMLInputElement | null>(null);
    const partedInputDay = useRef<HTMLInputElement | null>(null);
    const partedInputHours = useRef<HTMLInputElement | null>(null);
    const partedInputMinutes = useRef<HTMLInputElement | null>(null);
    const partedInputSeconds = useRef<HTMLInputElement | null>(null);

    const [dateDefaultValueExist, setDateDefaultValueExist] = useState<boolean>(false);
    const [initSplitClickEvOk, setInitSplitClickEvOk] = useState<boolean>(false);
    const [splitVals, setSplitVals] = useState<any[]>(['0000','00','00','00','00','00']);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isShow, setIsShow] = useState<boolean>(false);
    const [dateVal, setDateVal] = useState<string>('');
    const [timeVal, setTimeVal] = useState<string[]>(['00', '00', '00']);

    const hoursArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const msArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

    // blur for popup window
    const popupBlurEnabled = useRef<boolean>(false);  // DO NOT USE 'useState()'


    // effective element movement on keystroke
    const [focusableSplitInputId, setFocusableSplitInputId] = useState<string>(COM_HAS_DATE ? 'el-year' : 'el-hours');
    const [splitInputsIds] = useState<string[]>(['el-year', 'el-month', 'el-day', 'el-hours', 'el-minutes', 'el-seconds']);
    const splitInputs = useRef(new Map<string, HTMLElement>());
    const splitInputsTabIndex = tabIndex || 0;

    

    //
    const getAllSplittingInputs = () => {
        return [
            partedInputYear.current, 
            partedInputMonth.current, 
            partedInputDay.current, 
            partedInputHours.current, 
            partedInputMinutes.current, 
            partedInputSeconds.current
        ];
    };

    const onlyHHmm = (str: string) => {
        // match HH:mm
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return timePattern.test(str);
    };


    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                popwinPosHide();
                handleBlur(null);
            }
        }),
        [popupRef],
    );

    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return getAllSplittingInputs();
            },
            getLatestVal: () => {
                return !dateDefaultValueExist ? `` : valueResConverter(changedVal);
            },
            clear: (cb?: any) => {
                clearAll();
                cb?.();

                onChange?.(inputRef.current, '', false, getAllSplittingInputs());
            },
            blur: (cb?: any) => {
                getAllSplittingInputs().forEach((el: any) => {
                    if (el !== null) el.blur();
                });
         
                handleBlur(null);
                cb?.();
            },
            /*
            set('2024-04-18 21:54:09', () => { console.log('callback') }])
            */
            set: (value: any, cb?: any) => {
                
                const [curInitSplitClickEvOk, curNoTargetVal, curTargetVal] = getActualDefaultValue(value, true);
                setDateDefaultValueExist(defaultValueIsEmpty(value) ? false : true);
                initValue(curTargetVal);
                
                cb?.();

                onChange?.(inputRef.current, value, isValidDate(value), getAllSplittingInputs());
            }
        }),
        [contentRef, dateDefaultValueExist, changedVal],
    );


    // click outside
    useClickOutside({
        enabled: isShow && rootRef.current,
        isOutside: (event: any) => {
            return event.target.closest(`.date2d__wrapper`) === null && event.target.closest(`.date2d-cal__wrapper`) === null;
        },
        handle: (event: any) => {
            popwinPosHide();
            
            //remove focus style
            rootRef.current?.classList.remove('focus');

            // move out the popup window
            if (popupBlurEnabled.current) {
                onBlur?.(inputRef.current, getAllSplittingInputs());
                popupBlurEnabled.current = false;
            }
        }
    }, [isShow, rootRef]);




    // Add function to the element that should be used as the scrollable area.
    // const [scrollData, windowScrollUpdate] = useWindowScroll({
    //     performance: ['debounce', 50],   // "['debounce', 500]" or "['throttle', 500]"
    //     handle: (scrollData: any) => {
    //         popwinPosHide();
    //     }
    // });



    const getFullTimeData = (v: Date | String, padZeroEnabled: boolean = true) => {

        if (typeof v === 'string' && !isValidDate(v)) {
            return {
                res: '0000-00-00 00:00:00',
                resNoSeconds: '0000-00-00 00:00',
                date: `0000-00-00`,
                year: `0000`,
                month: `00`,
                day: `00`,
                hours: `00`,
                minutes: `00`,
                seconds: `00`
            }
        }

        const date: any = dateFormat(v as any);

        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1, padZeroEnabled);
        const day = padZero(date.getDate(), padZeroEnabled);
        const hours = padZero(date.getHours(), padZeroEnabled);
        const minutes = padZero(date.getMinutes(), padZeroEnabled);
        const seconds = padZero(date.getSeconds(), padZeroEnabled);
        const res = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        const res2 = `${year}-${month}-${day} ${hours}:${minutes}`;

        return {
            res: res,
            resNoSeconds: res2,
            date: `${year}-${month}-${day}`,
            year: `${year}`,
            month: `${month}`,
            day: `${day}`,
            hours: `${hours}`,
            minutes: `${minutes}`,
            seconds: `${seconds}`
        }
    };


    // 
    const MIN: any = typeof min !== 'undefined' && min !== '' && min !== null && isValidDate(min) ? getFullTimeData(min) : '';
    const MAX: any = typeof max !== 'undefined' && max !== '' && max !== null && isValidDate(max) ? getFullTimeData(max) : '';

    const getActualDefaultValue = (v?: any, init: boolean = false) => {
        const _v = getFullTimeData(getNow());
        const _nowVal: any = `${_v.date} ${_v.hours}:${_v.minutes}:${_v.seconds}`;

        // expected default value (only HH:mm:ss)
        const _expectedValue = isTimeString(v) || onlyHHmm(v) ? `${_v.date} ${onlyHHmm(v) ? v + ':00' : v}` : v;
       
        
        if (!init) setInitSplitClickEvOk(true);


        if (!initSplitClickEvOk) {


            let noTargetVal = typeof clickInitValue === 'undefined' || clickInitValue === null || clickInitValue === 'null' || clickInitValue === '';
            if (!defaultValueIsEmpty(v)) {
                noTargetVal = true;
            }

            //
            let targetVal: any = noTargetVal ? (defaultValueIsEmpty(v) ? _nowVal : _expectedValue) : clickInitValue;

            if (typeof v === 'undefined') {
                targetVal = noTargetVal ? _nowVal : clickInitValue;
            }

            //
            return [false, noTargetVal, targetVal];
        } else {

        
            let targetVal: any = defaultValueIsEmpty(v) ? _nowVal : _expectedValue;

            if (typeof v === 'undefined') {
                targetVal = _nowVal;
            }

            return [true, true, targetVal]; 
        }


        
    };



    function popwinPosInit() {

        if (modalRef.current === null || listContentRef.current === null || inputRef.current === null) return;


        // update modal position
        const _modalRef: any = modalRef.current;
        const _triggerRef: any = inputRef.current;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef === null) return;

        const { x, y, width, height } = getAbsolutePositionOfStage(_triggerRef);
        const _triggerBox = _triggerRef.getBoundingClientRect();
        let targetPos = '';


        // STEP 1:
        //-----------
        // Detect position
        if (window.innerHeight - _triggerBox.top > 100) {
            targetPos = 'bottom';
        } else {
            targetPos = 'top';
        }

        // STEP 2:
        //-----------
        // Adjust position
        if (targetPos === 'top') {
            _modalRef.style.left = x + 'px';
            //_modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
            _modalRef.style.marginTop = 0;
            _modalRef.style.top = 'auto';
            _modalRef.style.bottom = (window.innerHeight - _triggerBox.top) + POS_OFFSET + 2 + 'px';
            _modalRef.style.setProperty('position', 'fixed', 'important');
            _modalRef.style.setProperty('position', 'fixed', 'important');
            _modalRef.classList.add('pos-top');
        }

        if (targetPos === 'bottom') {
            _modalRef.style.marginTop = 0;
            _modalRef.style.left = x + 'px';
            _modalRef.style.bottom = 'auto';
            _modalRef.style.top = y + height + POS_OFFSET + 'px';
            _modalRef.style.setProperty('position', 'absolute', 'important');
            _modalRef.classList.remove('pos-top');
        }
 
        // STEP 3:
        //-----------
        // Determine whether it exceeds the far right or left side of the screen
        // Determine whether it exceeds the max height of the popup
        const _modalContent = _modalRef;
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {

            // 10 pixels is used to account for some bias in mobile devices
            if ((_modalBox.right + 10) > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if ((_modalBox.left - 10) < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }

            if (window.innerHeight - _modalBox.bottom < 0) {
                _modalRef.style.marginTop = `${window.innerHeight - _modalBox.bottom}px`;
            }

        }

    }

    function popwinPosHide() {
        setIsShow(false);
        onClosePopup?.(getAllSplittingInputs());

    }



    function handleShow() {
        setIsShow(true);

        setTimeout(() => {
            popwinPosInit();

            onOpenPopup?.(getAllSplittingInputs());

        }, 0);

        // focus
        handleFocus(null);

    }


    function handleFocus(event: FocusEvent<HTMLElement> | null) {
        rootRef.current?.classList.add('focus');


        //
        onFocus?.(inputRef.current, getAllSplittingInputs());

    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        //
        onChange?.(inputRef.current, val, isValidDate(val), getAllSplittingInputs());

    }


    function handleBlur(event: FocusEvent<HTMLElement> | null) {

        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
        onBlur?.(inputRef.current, getAllSplittingInputs());
    }


    function handleInitSplitClickEv(e: any) {
        e.preventDefault();
        e.stopPropagation();  // Avoid triggering other inputs

        e.target.select();

        
        resetDefauleValueExist();

        // Automatically pop up a pop-up window
        if (enableEntireAreaPopup) {
            handleShow();
        }

        // If there is no valid default value in the input field, 
        // onChange should be triggered only after the resetDefauleValueExist() function is processed
        if (!dateDefaultValueExist) {
            const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
        }


    }

    async function handleKeyPressed(event: KeyboardEvent<HTMLDivElement>) {
        const key = event.code;
    
        if (key === 'Enter' || key === 'NumpadEnter') {
            event.preventDefault();

            getAllSplittingInputs().forEach((el: any) => {
                if (el !== null) el.blur();
            });
     
            handleBlur(null);

            //
            onPressEnter?.(inputRef.current, getAllSplittingInputs());
        }
    }

    async function handleKeyPressedForSplitInputs(event: KeyboardEvent<HTMLDivElement>) {
        const key = event.code;
        const btnMark = (event.target as any).dataset.mark;
        
        // Check for both regular arrow keys and numpad arrow keys
        const isLeftArrow = key === 'ArrowLeft' || key === 'Numpad4';
        const isRightArrow = key === 'ArrowRight' || key === 'Numpad6';
        
        const move = (direction: 'left' | 'right') => {
            const currentIndex = splitInputsIds.findIndex((s: string) => s === btnMark);
            const nextIndex = direction === 'left' 
                ? currentIndex === 0 ? splitInputsIds.length - 1 : currentIndex - 1 
                : currentIndex === splitInputsIds.length - 1 ? 0 : currentIndex + 1;
                
            const nextOption = splitInputsIds.at(nextIndex);
            if (nextOption) {
                setTimeout(() => {
                    (splitInputs.current.get(nextOption) as HTMLInputElement)?.select();
                }, 0);
                setFocusableSplitInputId(nextOption);
            }
        };

        if (isLeftArrow) {
            move('left');
        }

        if (isRightArrow) {
            move('right');
        }
    }


    function clearAll() {
        setDateDefaultValueExist(false);
        onChange?.(inputRef.current, '', false, getAllSplittingInputs());
    }



    function resetDefauleValueExist() {
        // Does the current input box have a "valid default value"?
        if (!dateDefaultValueExist) setDateDefaultValueExist(true);
    }

    function resetPopupBlurStatus() {
        if (!popupBlurEnabled.current) popupBlurEnabled.current = true;
    }


    function valueResConverter(inputData: any) {
        const v = isValidDate(inputData) ? inputData : `${getFullTimeData(getNow()).date} ${inputData}`;


        const _onlyTime = `${getFullTimeData(v).hours}:${getFullTimeData(v).minutes}${truncateSeconds ? `` : `:${getFullTimeData(v).seconds}`}`;
        const _date = `${getFullTimeData(v).year}${valueUseSlash ? `/` : '-'}${getFullTimeData(v).month}${valueUseSlash ? `/` : '-'}${getFullTimeData(v).day}`;
        const _time = COM_HAS_TIME ? ` ${getFullTimeData(v).hours}:${getFullTimeData(v).minutes}${truncateSeconds ? `` : `:${getFullTimeData(v).seconds}`}` : '';

        return onlyTime ? _onlyTime : `${_date}${_time}`;
    }


    
    function checkDisabledSeconds(curYear: number | string, curMonth: number, curDay: number | string, curHours: number | string, curMinutes: number | string, curSeconds: number | string) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) > Number(MAX.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
                res = true;
            }


            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours) ) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) > Number(MAX.minutes) ) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) === Number(MAX.minutes) && Number(curSeconds) > Number(MAX.seconds) ) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) < Number(MIN.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
                res = true;
            }


            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours) ) {
                res = true;
            }

            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) < Number(MIN.minutes) ) {
                res = true;
            }

            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) === Number(MIN.minutes) && Number(curSeconds) < Number(MIN.seconds) ) {
                res = true;
            }
        }

 
        return res;
    }


    function checkDisabledMinutes(curYear: number | string, curMonth: number, curDay: number | string, curHours: number | string, curMinutes: number | string) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) > Number(MAX.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
                res = true;
            }


            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours) ) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) === Number(MAX.hours) && Number(curMinutes) > Number(MAX.minutes) ) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) < Number(MIN.month)) {
                res = true;
            }
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
                res = true;
            }
            
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours) ) {
                res = true;
            }
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) === Number(MIN.hours) && Number(curMinutes) < Number(MIN.minutes) ) {
                res = true;
            }
        }

       
        return res;
    }


    function checkDisabledHours(curYear: number | string, curMonth: number, curDay: number | string, curHours: number | string) {
        let res: boolean = false;

        // maximum
        if (MAX !== '') {
            if (Number(curYear) > Number(MAX.year)) {
                res = true;
            }

            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) > Number(MAX.month)) {
                res = true;
            }
    
            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) > Number(MAX.day)) {
                res = true;
            }


            if (Number(curYear) === Number(MAX.year) && Number(curMonth+1) === Number(MAX.month) && Number(curDay) === Number(MAX.day) && Number(curHours) > Number(MAX.hours) ) {
                res = true;
            }
        }

        // minimum
        if (MIN !== '') {
            if (Number(curYear) < Number(MIN.year)) {
                res = true;
            }
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) < Number(MIN.month)) {
                res = true;
            }
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) < Number(MIN.day)) {
                res = true;
            }
            
            
            if (Number(curYear) === Number(MIN.year) && Number(curMonth+1) === Number(MIN.month) && Number(curDay) === Number(MIN.day) && Number(curHours) < Number(MIN.hours) ) {
                res = true;
            }
        }

        return res;
    }

    function initValue(v: any) {
        const _res = valueResConverter(v);

        setChangedVal(_res);
        
        if (isValidDate(v)) {

            const {
                date,
                year,
                month,
                day,
                hours,
                minutes,
                seconds
            } = getFullTimeData(v);


            setDateVal(date);
            setTimeVal([hours, minutes, seconds]);
            setSplitVals([year, month, day, hours, minutes, seconds]);
        }

        return [_res, v]

    }

    function tools() {
        return <span className={combinedCls(
            'date2d__control-tools',
            {
                'date2d__control-tools--hover-show-tools': SHOW_TOOLS_ENABLED
            }

        )}>

            <a
                tabIndex={-1}
                href="#"
                className={combinedCls(
                    'date2d__control-tools__close',
                    {
                        'd-none': HIDE_CLEAR_BTN_ENABLED || !dateDefaultValueExist
                    }
                )} onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();  // Avoid triggering pop-ups

                    clearAll();
                    onClear?.(getFullTimeData(''));
                }}
            ><svg width="12px" height="12px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>

            <a
                tabIndex={-1}
                href="#"
                className="date2d__control-tools__trigger"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();  // Avoid triggering pop-ups

                    handleShow();
                }}
            >
                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>

        </span>;
    }


    useEffect(() => {

   
        // update default value
        //--------------
        const [curInitSplitClickEvOk, curNoTargetVal, curTargetVal] = getActualDefaultValue(value, true);
        setDateDefaultValueExist(defaultValueIsEmpty(value) ? false : true);
        const [a, b] = initValue(curTargetVal);
        onLoad?.(a, getFullTimeData(b), getAllSplittingInputs());


    }, [value]);

    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            const [curInitSplitClickEvOk, curNoTargetVal, curTargetVal] = getActualDefaultValue(defaultValue, true);
            setDateDefaultValueExist(defaultValueIsEmpty(defaultValue) ? false : true);
            const [a, b] = initValue(curTargetVal);
            onLoad?.(a, getFullTimeData(b), getAllSplittingInputs());
        }

    }, []);


    return (
        <>

                {label ? <>{typeof label === 'string' ? <div className="date2d__label"><label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label></div> : <div className="date2d__label"><label htmlFor={idRes} className="form-label">{label}</label></div>}</> : null}
    
            
            <div
                ref={rootRef}
                data-overlay-id={`date2d__wrapper-${idRes}`}
                className={combinedCls(
                    'date2d__trigger d-inline-block',
                    `is-${type}`,
                    triggerClassName,
                    {
                        'date2d__trigger--hover-show-tools': SHOW_TOOLS_ENABLED
                    }
                )}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyPressed}
                onClick={enableEntireAreaPopup ? handleShow : () => {}}

            >


                <div className="date2d__control">
                    <Input
                        ref={(node) => {
                            inputRef.current = node;
                            if (typeof externalRef === 'function') {
                                externalRef(node);
                            } else if (externalRef) {
                                externalRef.current = node;
                            }
                        }}
                        tabIndex={-1}
                        type="text"
                        inputMode="none"
                        data-date-info={JSON.stringify(getFullTimeData(changedVal))}
                        wrapperClassName={wrapperClassName}
                        controlClassName={controlClassName}
                        controlExClassName=""
                        controlGroupWrapperClassName={controlGroupWrapperClassName}
                        controlGroupTextClassName={controlGroupTextClassName}
                        id={idRes}
                        name={name}
                        alt={alt}
                        placeholder={datePlaceholder}
                        value={!dateDefaultValueExist ? `` : valueResConverter(changedVal)}
                        autoComplete="off"
                        onChange={handleChange}
                        label=""
                        units={units}
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        requiredLabel={requiredLabel}
                        required={required}
                        appendControl={<>
                         <div className="date2d__control__inputplaceholder">


                                {/*
                                ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                +++++++++++++++++++ Split Inputs +++++++++++++++++++++++++++++
                                ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                */}
                                {COM_HAS_DATE ? <>
                                    <input
                                        ref={(node) => {
                                            partedInputYear.current = node;
                                            if (node) {
                                                splitInputs.current.set(splitInputsIds[0], node);
                                            } else {
                                                splitInputs.current.delete(splitInputsIds[0]);
                                            }
                                        }}
                                        tabIndex={splitInputsTabIndex}
                                        data-mark={`${splitInputsIds[0]}`}
                                        onKeyDown={handleKeyPressedForSplitInputs}
                                        inputMode="numeric"
                                        className="date2d__control__inputplaceholder--year"
                                        value={!dateDefaultValueExist ? `` : splitVals[0]}
                                        maxLength={4}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            let _val = e.target.value;
                                            if (_val !== '' && !isValidYear(_val) && isNumeric(_val) && Number(_val) > 9999) _val = '9999';
                                            if (_val !== '' && !isValidYear(_val) && !isNumeric(_val)) _val = `${getCurrentYear()}`;

                                            const _date = `${_val}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                            setSplitVals((prevState: string[]) => {
                                                return [_val, prevState[1], prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            // Auto focus to next input if year is 4 digits
                                            if (_val.length === 4) {
                                                const nextInput = splitInputs.current.get(splitInputsIds[1]);
                                                if (nextInput) {
                                                    (nextInput as HTMLInputElement).focus();
                                                    (nextInput as HTMLInputElement).select();
                                                }
                                            }
                                        }}
                                        {...attributes}
                                    />
                                    {dateDefaultValueExist ? DELIMITER_DATE : null}
                                    <input
                                        ref={(node) => {
                                            partedInputMonth.current = node;
                                            if (node) {
                                                splitInputs.current.set(splitInputsIds[1], node);
                                            } else {
                                                splitInputs.current.delete(splitInputsIds[1]);
                                            }
                                        }}
                                        tabIndex={splitInputsTabIndex}
                                        data-mark={`${splitInputsIds[1]}`}
                                        onKeyDown={handleKeyPressedForSplitInputs}
                                        inputMode="numeric"
                                        className="date2d__control__inputplaceholder--month"
                                        value={!dateDefaultValueExist ? `` : splitVals[1]}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            let _val = e.target.value;
                                            if (_val !== '' && !isValidMonth(_val) && isNumeric(_val)) {
                                                if (Number(_val) > 12) _val = '12';
                                                if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
                                            }
                                            if (_val !== '' && !isValidMonth(_val) && !isNumeric(_val)) _val = `${getCurrentMonth()}`;

                                            const _date = `${splitVals[0]}-${_val}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], _val, prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            // Auto focus to next input if month is 2 digits
                                            if (_val.length === 2) {
                                                const nextInput = splitInputs.current.get(splitInputsIds[2]);
                                                if (nextInput) {
                                                    (nextInput as HTMLInputElement).focus();
                                                    (nextInput as HTMLInputElement).select();
                                                }
                                            }
                                        }}
                                        {...attributes}
                                    />
                                    {dateDefaultValueExist ? DELIMITER_DATE : null}
                                    <input
                                        ref={(node) => {
                                            partedInputDay.current = node;
                                            if (node) {
                                                splitInputs.current.set(splitInputsIds[2], node);
                                            } else {
                                                splitInputs.current.delete(splitInputsIds[2]);
                                            }
                                        }}
                                        tabIndex={splitInputsTabIndex}
                                        data-mark={`${splitInputsIds[2]}`}
                                        onKeyDown={handleKeyPressedForSplitInputs}
                                        inputMode="numeric"
                                        className="date2d__control__inputplaceholder--day"
                                        value={!dateDefaultValueExist ? `` : splitVals[2]}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            let _val = e.target.value;

                                            const _day = `${splitVals[0]}-${splitVals[1]}-01`;
                                            const d = getLastDayInMonth(_day, new window.Date(_day).getMonth() + 1);

                                            if (_val !== '' && isValidDay(_val) && isNumeric(_val)) {
                                                if (Number(_val) > Number(d)) _val = `${d}`;
                                            }     
                                            
                                            if (_val !== '' && !isValidDay(_val) && isNumeric(_val)) {
                                                if (Number(_val) > Number(d)) _val = `${d}`;
                                                if (Number(_val) < 1 && Number(_val) > 0) _val = '01';
                                            }
                                            if (_val !== '' && !isValidDay(_val) && !isNumeric(_val)) _val = `${getCurrentDay()}`;

                                            const _date = `${splitVals[0]}-${splitVals[1]}-${_val}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], _val, prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            // Auto focus to next input if day is 2 digits
                                            if (_val.length === 2) {
                                                const nextInput = splitInputs.current.get(splitInputsIds[3]);
                                                if (nextInput) {
                                                    (nextInput as HTMLInputElement).focus();
                                                    (nextInput as HTMLInputElement).select();
                                                }
                                            }
                                        }}
                                        {...attributes}
                                    />
                                    &nbsp;

                                </> : null}

                                {COM_HAS_TIME ? <>
                                    {/* TIME CONTROL */}
                                    <input
                                        ref={(node) => {
                                            partedInputHours.current = node;
                                            if (node) {
                                                splitInputs.current.set(splitInputsIds[3], node);
                                            } else {
                                                splitInputs.current.delete(splitInputsIds[3]);
                                            }
                                        }}
                                        tabIndex={splitInputsTabIndex}
                                        data-mark={`${splitInputsIds[3]}`}
                                        onKeyDown={handleKeyPressedForSplitInputs}
                                        inputMode="numeric"
                                        className="date2d__control__inputplaceholder--hours"
                                        value={!dateDefaultValueExist ? `` : splitVals[3]}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            let _val = e.target.value;
                                            if (_val !== '' && !isValidHours(_val) && isNumeric(_val) && Number(_val) > 23) _val = '23';
                                            if (_val !== '' && !isValidHours(_val) && !isNumeric(_val)) _val = '00';
                                            

                                            const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${_val}:${splitVals[4]}:${splitVals[5]}`;
                                            

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], _val, prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([_val, splitVals[4], splitVals[5]]);

                                            // Auto focus to next input if hour is 2 digits
                                            if (_val.length === 2) {
                                                const nextInput = splitInputs.current.get(splitInputsIds[4]);
                                                if (nextInput) {
                                                    (nextInput as HTMLInputElement).focus();
                                                    (nextInput as HTMLInputElement).select();
                                                }
                                            }
                                        }}
                                        {...attributes}
                                    />
                                    {/* TIME CONTROL */}

                                    {/* TIME CONTROL */}
                                    {dateDefaultValueExist ? DELIMITER_TIME : null}
                                    <input
                                        ref={(node) => {
                                            partedInputMinutes.current = node;
                                            if (node) {
                                                splitInputs.current.set(splitInputsIds[4], node);
                                            } else {
                                                splitInputs.current.delete(splitInputsIds[4]);
                                            }
                                        }}
                                        tabIndex={splitInputsTabIndex}
                                        data-mark={`${splitInputsIds[4]}`}
                                        onKeyDown={handleKeyPressedForSplitInputs}
                                        inputMode="numeric"
                                        className="date2d__control__inputplaceholder--minutes"
                                        value={!dateDefaultValueExist ? `` : splitVals[4]}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            let _val = e.target.value;
                                            if (_val !== '' && !isValidMinutesAndSeconds(_val) && isNumeric(_val) && Number(_val) > 59) _val = '59';
                                            if (_val !== '' && !isValidMinutesAndSeconds(_val) && !isNumeric(_val)) _val = '00';
                                            

                                            const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${_val}:${splitVals[5]}`;


                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], prevState[3], _val, prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], _val, splitVals[5]]);

                                            // Auto focus to next input if minute is 2 digits
                                            if (_val.length === 2) {
                                                const nextInput = splitInputs.current.get(splitInputsIds[5]);
                                                if (nextInput) {
                                                    (nextInput as HTMLInputElement).focus();
                                                    (nextInput as HTMLInputElement).select();
                                                }
                                            }
                                        }}
                                        {...attributes}
                                    />
                                    {/* TIME CONTROL */}


                                    {/* TIME CONTROL */}
                                    {(COM_NO_SECONDS) ? <>
                                        {dateDefaultValueExist ? DELIMITER_TIME : null}
                                        <input
                                            ref={(node) => {
                                                partedInputSeconds.current = node;
                                                if (node) {
                                                    splitInputs.current.set(splitInputsIds[5], node);
                                                } else {
                                                    splitInputs.current.delete(splitInputsIds[5]);
                                                }
                                            }}
                                            tabIndex={splitInputsTabIndex}
                                            data-mark={`${splitInputsIds[5]}`}
                                            onKeyDown={handleKeyPressedForSplitInputs}
                                            inputMode="numeric"
                                            className="date2d__control__inputplaceholder--seconds"
                                            value={!dateDefaultValueExist ? `` : splitVals[5]}
                                            maxLength={2}
                                            autoComplete="off"
                                            disabled={disabled || null}
                                            readOnly={readOnly || null}
                                            onClick={handleInitSplitClickEv}
                                            onChange={(e: any) => {
                                                let _val = e.target.value;
                                                if (_val !== '' && !isValidMinutesAndSeconds(_val) && isNumeric(_val) && Number(_val) > 59) _val = '59';
                                                if (_val !== '' && !isValidMinutesAndSeconds(_val) && !isNumeric(_val)) _val = '00';


                                                const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                                const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${_val}`;


                                                onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full), getAllSplittingInputs());
                                                setSplitVals((prevState: string[]) => {
                                                    return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[4], _val];
                                                });


                                                // update other data
                                                setDateVal(_date);
                                                setChangedVal(_full);
                                                setTimeVal([splitVals[3], splitVals[4], _val]);
                                                // No auto focus for the last input (seconds)
                                            }}
                                            {...attributes}
                                        />
                                    </> : null}
                                    {/* TIME CONTROL */}
                                </> : null}


                                {/*
                                ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                +++++++++++++++++++ /Split Inputs +++++++++++++++++++++++++++++
                                ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                */}

                            </div>



                            {/* TOOLS */}
                            {propExist(iconRight) ? tools() : null}
                            {/* /TOOLS */}


                        </>}
                        style={style}
                        {...attributes}
                    />

                    {/* TOOLS */}
                    {!propExist(iconRight) ? tools() : null}
                    {/* /TOOLS */}

                   
                </div>

                

            </div>


            <RootPortal show={isShow} containerClassName={combinedCls(
                'Date',
                `Date--${type}`
            )}>
                <div
                    ref={modalRef}
                    id={`date2d__wrapper-${idRes}`}
                    className={combinedCls(
                        'date2d__wrapper',
                        `is-${type}`,
                        popupClassName,
                        'active'
                    )}
                    style={{
                        display: 'none',
                        zIndex: DEPTH
                    }}
                    {...attributes}
                >


                    <div
                        ref={listContentRef}
                        className="date2d__tools-container d-flex flex-row"
                    >
                        {/* CALENDAR */}
                        {COM_HAS_DATE ? <>
                            <div className="date2d__calendar">
                                <Calendar
                                    min={min}
                                    max={max}
                                    customTodayDate={changedVal}
                                    langWeek={_langWeek}
                                    langWeekFull={_langWeekFull}
                                    langMonths={_langMonths}
                                    langMonthsFull={_langMonthsFull}
                                    langToday={_langToday}
                                    onChangeDate={(e: any, currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _v = getFullTimeData(`${currentData.date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setDateVal(currentData.date);
                                        setChangedVal(`${currentData.date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setSplitVals((prevState: string[]) => {
                                            return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
                                        });
                                        onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                        // 
                                        onChangeDate?.(_v);

                                        //
                                        resetPopupBlurStatus();
                                        

                                    }}
                                    onChangeToday={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        const _v = getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setDateVal(`${_date}`);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setSplitVals((prevState: string[]) => {
                                            return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
                                        });
                                        onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                        // 
                                        onChangeToday?.(_v);

                                        //
                                        resetPopupBlurStatus();

                                    }}
                                    onChangeMonth={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        const _v = getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setDateVal(_date);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setSplitVals((prevState: string[]) => {
                                            return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
                                        });
                                        onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                        // 
                                        onChangeMonth?.(_v);

                                        //
                                        resetPopupBlurStatus();                                        

                                    }}
                                    onChangeYear={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        const _v = getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setDateVal(_date);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        setSplitVals((prevState: string[]) => {
                                            return [_v.year, _v.month, _v.day, prevState[3], prevState[4], prevState[5]];
                                        });
                                        onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                        // 
                                        onChangeYear?.(_v);

                                        //
                                        resetPopupBlurStatus();


                                    }}
                                />
                            </div>
                        </> : null}

                        {/* /CALENDAR */}


                        {COM_HAS_TIME ? <>

                            {/* TIME CONTROL */}
                            <div className="date2d__hourslist border-end">
                                <h3>{_langHoursTitle}</h3>

                                <ul>
                                    {hoursArr.map((hour: string, i: number) => {

                                        const _curVal = getFullTimeData(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);

                                        return <li key={i}>
                                            <a
                                                data-value={hour}
                                                href="#"
                                                tabIndex={-1}
                                                onClick={(e: React.MouseEvent) => {
                                                    e.preventDefault();
                                                    resetDefauleValueExist();

                                                    //
                                                    const _val = (e.currentTarget as any).dataset.value;
                                                    const _v = getFullTimeData(`${dateVal} ${_val}:${timeVal[1]}:${timeVal[2]}`);

                                                    
                                                    setChangedVal(`${dateVal} ${_val}:${timeVal[1]}:${timeVal[2]}`);
                                                    setTimeVal((prevState: string[]) => {
                                                        return [_val, prevState[1], prevState[2]];
                                                    });
                                                    setSplitVals((prevState: string[]) => {
                                                        return [prevState[0], prevState[1], prevState[2], _v.hours, prevState[4], prevState[5]];
                                                    });
                                                    onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                                    // 
                                                    onChangeHours?.(_v);


                                                    //
                                                    resetPopupBlurStatus();

                                                }}
                                                className={combinedCls(
                                                    {
                                                        'selected': timeVal[0] == hour,
                                                        'disabled': checkDisabledHours(_curVal.year, Number(_curVal.month)-1, _curVal.day, hour)
                                                    }
                                                )}
                                            >
                                                {hour}
                                            </a>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            {/* TIME CONTROL */}

                            {/* TIME CONTROL */}
                            <div className="date2d__minuteslist border-end">
                                <h3>{_langMinutesTitle}</h3>

                                <ul>
                                    {msArr.map((v: string, i: number) => {
                                        const _curVal = getFullTimeData(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);

                                        return <li key={i}>
                                            <a
                                                data-value={v}
                                                href="#"
                                                tabIndex={-1}
                                                onClick={(e: React.MouseEvent) => {
                                                    e.preventDefault();
                                                    resetDefauleValueExist();

                                                    //
                                                    const _val = (e.currentTarget as any).dataset.value;
                                                    const _v = getFullTimeData(`${dateVal} ${timeVal[0]}:${_val}:${timeVal[2]}`);

                                                    setChangedVal(`${dateVal} ${timeVal[0]}:${_val}:${timeVal[2]}`);
                                                    setTimeVal((prevState: string[]) => {
                                                        return [prevState[0], _val, prevState[2]];
                                                    });
                                                    setSplitVals((prevState: string[]) => {
                                                        return [prevState[0], prevState[1], prevState[2], prevState[3], _v.minutes, prevState[5]];
                                                    });
                                                    onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                                    // 
                                                    onChangeMinutes?.(_v);


                                                    //
                                                    resetPopupBlurStatus();


                                                }}
                                                className={combinedCls(
                                                    {
                                                         'selected': timeVal[1] == v,
                                                         'disabled': checkDisabledMinutes(_curVal.year, Number(_curVal.month)-1, _curVal.day, _curVal.hours, v)
                                                    }
                                                )}
                                            >

                                                {v}
                                            </a>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            {/* TIME CONTROL */}


                            {/* TIME CONTROL */}
                            {(COM_NO_SECONDS) ? <>
                                <div className="date2d__secondslist border-end">
                                    <h3>{_langSecondsTitle}</h3>

                                    <ul>
                                        {msArr.map((v: string, i: number) => {
                                            const _curVal = getFullTimeData(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                            
                                            return <li key={i}>
                                                <a
                                                    data-value={v}
                                                    href="#"
                                                    tabIndex={-1}
                                                    onClick={(e: React.MouseEvent) => {
                                                        e.preventDefault();
                                                        resetDefauleValueExist();

                                                        //
                                                        const _val = (e.currentTarget as any).dataset.value;
                                                        const _v = getFullTimeData(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${_val}`);
                                                        setChangedVal(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${_val}`);
                                                        setTimeVal((prevState: string[]) => {
                                                            return [prevState[0], prevState[1], _val];
                                                        });
                                                        setSplitVals((prevState: string[]) => {
                                                            return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[5], _v.seconds ];
                                                        });
                                                        onChange?.(inputRef.current, _v, true, getAllSplittingInputs());

                                                        // 
                                                        onChangeSeconds?.(_v);


                                                        //
                                                        resetPopupBlurStatus();                                                  

                                                    }}
                                                    className={combinedCls(
                                                        {
                                                            'selected': timeVal[2] == v,
                                                            'disabled': checkDisabledSeconds(_curVal.year, Number(_curVal.month)-1, _curVal.day, _curVal.hours, _curVal.minutes, v)
                                                        }
                                                    )}
                                                >

                                                    {v}
                                                </a>
                                            </li>
                                        })}

                                    </ul>
                                </div>
                            </> : null}
                            {/* TIME CONTROL */}
                        </> : null}



                    </div>

                </div>
            </RootPortal>





        </>
    )
});


export default Date;