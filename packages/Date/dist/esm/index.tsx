import React, { useId, useState, useRef, useEffect, forwardRef, ChangeEvent, useImperativeHandle } from 'react';

import Input from 'funda-input';
import RootPortal from 'funda-root-portal';


import Calendar from './Calendar';


import { getAbsolutePositionOfStage } from './utils/get-element-property';


// Localization
import i18n__en_US from './localization/en_US';
import i18n__zh_CN from './localization/zh_CN';


import { debounce } from './utils/performance';

import { 
    padZero,
    dateFormat,
    getNow,
    isValidDate,
    isNumeric,
    isValidHours,
    isValidMinutesAndSeconds,
    isValidYear,
    isValidMonth,
    isValidDay,
    getCurrentYear,
    getCurrentMonth,
    getCurrentDay,
    getLastDayInMonth
 } from './utils/date';



type DateProps = {
    popupRef?: React.RefObject<any>;
    popupClassName?: string;
    triggerClassName?: string;
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    delimiter?: string;
    offset?: number;
    exceededSidePosOffset?: number;
    localization?: 'en_US' | 'zh_CN';
    type?: 'date' | 'datetime-local' | 'time';
    onlyTime?: boolean;
    truncateSeconds?: boolean;
    valueUseSlash?: boolean;
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
    onLoad?: (e: any, data: any) => void;
    onChange?: (e: any, data: any, isValidDate: boolean) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
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


const Date = forwardRef((props: DateProps, ref: any) => {
    const {
        popupRef,
        triggerClassName,
        popupClassName,
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        delimiter,
        offset,
        exceededSidePosOffset,
        localization,
        type,
        onlyTime,
        truncateSeconds,
        valueUseSlash,
        disabled,
        required,
        readOnly,
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

    const defaultValueIsEmpty= typeof value === 'undefined' || value === null || value === 'null' || value === '';



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



    // placeholder
    let datePlaceholder = placeholder || placeholder === '' ? placeholder : 'yyyy/MM/dd HH:mm:ss';

    if (typeof placeholder === 'undefined') {
        datePlaceholder = `${typeof onlyTime === 'undefined' || onlyTime === false ? 'yyyy/MM/dd ' : ''}${type === 'datetime-local' || type === 'time' ? `HH:mm${typeof truncateSeconds === 'undefined' || truncateSeconds === false ? ':ss' : ''}` : ''}`;
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
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);

    const partedInputYear = useRef<HTMLInputElement>(null);
    const partedInputMonth = useRef<HTMLInputElement>(null);
    const partedInputDay = useRef<HTMLInputElement>(null);
    const partedInputHours = useRef<HTMLInputElement>(null);
    const partedInputMinutes = useRef<HTMLInputElement>(null);
    const partedInputSeconds = useRef<HTMLInputElement>(null);

    const [dateDefaultValueExist, setDateDefaultValueExist] = useState<boolean>(false);
    const [initSplitClickEvOk, setInitSplitClickEvOk] = useState<boolean>(false);
    const [splitVals, setSplitVals] = useState<any[]>(['0000','00','00','00','00','00']);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isShow, setIsShow] = useState<boolean>(false);
    const [dateVal, setDateVal] = useState<string>('');
    const [timeVal, setTimeVal] = useState<string[]>(['00', '00', '00']);

    const hoursArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const msArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];



    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                popwinPosHide();
            },
        }),
        [popupRef],
    );


    const windowScrollUpdate = debounce(handleScrollEvent, 50);

    const eventFire = (el: any, etype: string) => {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    };


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
    const currentMinDateDisabled = MIN !== '' ? (Number(new window.Date().getTime()) < Number(new window.Date(MIN.res).getTime()) ? true : false) : false;
    const currentMaxDateDisabled = MAX !== '' ? (Number(new window.Date().getTime()) > Number(new window.Date(MAX.res).getTime()) ? true : false) : false;

    const getActualDefaultValue = (v?: any, init: boolean = false) => {
        const _v = getFullTimeData(getNow());
        const _nowVal: any = `${_v.date} ${_v.hours}:${_v.minutes}:${_v.seconds}`;

        if (!init) setInitSplitClickEvOk(true);


        if (!initSplitClickEvOk) {


            let noTargetVal = typeof clickInitValue === 'undefined' || clickInitValue === null || clickInitValue === 'null' || clickInitValue === '';
            if (!defaultValueIsEmpty) {
                noTargetVal = true;
            }

            //
            let targetVal: any = noTargetVal ? (defaultValueIsEmpty ? _nowVal : v) : clickInitValue;

            if (typeof v === 'undefined') {
                targetVal = noTargetVal ? _nowVal : clickInitValue;
            }

            //
            return [false, noTargetVal, targetVal];
        } else {

        
            let targetVal: any = defaultValueIsEmpty ? _nowVal : v;

            if (typeof v === 'undefined') {
                targetVal = _nowVal;
            }

            return [true, true, targetVal]; 
        }


        
    };

    function handleScrollEvent() {
        popwinPosHide();
    }


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
        if (typeof _modalContent.dataset.offset === 'undefined') {

            if (_modalBox.right > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if (_modalBox.left < 0) {
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
        onClosePopup?.([partedInputYear.current, partedInputMonth.current, partedInputDay.current, partedInputHours.current, partedInputMinutes.current, partedInputSeconds.current]);
    }

    function handleClickOutside(event: any) {
        if (event.target.closest(`.date2d__wrapper`) === null && event.target.closest(`.date2d-cal__wrapper`) === null) {
            popwinPosHide();

            //remove focus style
            rootRef.current.classList.remove('focus');
        }

    }


    function handleShow() {
        setIsShow(true);

        setTimeout(() => {
            popwinPosInit();

            onOpenPopup?.([partedInputYear.current, partedInputMonth.current, partedInputDay.current, partedInputHours.current, partedInputMinutes.current, partedInputSeconds.current]);

        }, 0);

    }


    function handleFocus(event: ChangeEvent<HTMLElement>) {
        rootRef.current.classList.add('focus');


        //
        onFocus?.(event);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        //
        onChange?.(inputRef.current, val, isValidDate(val));

    }


    function handleBlur(event: ChangeEvent<HTMLElement>) {

        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        onBlur?.(inputRef.current);
    }


    function handleInitSplitClickEv(e: any) {
        e.preventDefault();
        e.stopPropagation();  // Avoid triggering other inputs

        e.target.select();

        resetDefauleValueExist();


        const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
        const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
        onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));

    }


    function clearAll() {
        setDateDefaultValueExist(false);
        onChange?.(inputRef.current, '', false);
    }



    function resetDefauleValueExist() {
        if (!dateDefaultValueExist) setDateDefaultValueExist(true);
    }

    function valueResConverter(inputData: any) {
        const v = isValidDate(inputData) ? inputData : `${getFullTimeData(getNow()).date} ${inputData}`;

        const _onlyTime = `${getFullTimeData(v).hours}:${getFullTimeData(v).minutes}${truncateSeconds ? `` : `:${getFullTimeData(v).seconds}`}`;
        const _date = `${getFullTimeData(v).year}${valueUseSlash ? `/` : '-'}${getFullTimeData(v).month}${valueUseSlash ? `/` : '-'}${getFullTimeData(v).day}`;
        const _time = type === 'datetime-local' || type === 'time' ? ` ${getFullTimeData(v).hours}:${getFullTimeData(v).minutes}${truncateSeconds ? `` : `:${getFullTimeData(v).seconds}`}` : '';

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
    

    useEffect(() => {

   
        // update default value
        //--------------
        const [curInitSplitClickEvOk, curNoTargetVal, curTargetVal] = getActualDefaultValue(value, true);
        setDateDefaultValueExist(defaultValueIsEmpty ? false : true);
        const [a, b] = initValue(curTargetVal);
        onLoad?.(a, getFullTimeData(b));


        //--------------
        document.removeEventListener('pointerdown', handleClickOutside);
        document.addEventListener('pointerdown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);


        // // Add function to the element that should be used as the scrollable area.
        // //--------------
        // window.removeEventListener('scroll', windowScrollUpdate);
        // window.removeEventListener('touchmove', windowScrollUpdate);
        // window.addEventListener('scroll', windowScrollUpdate);
        // window.addEventListener('touchmove', windowScrollUpdate);
        // windowScrollUpdate();


        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);

            // window.removeEventListener('scroll', windowScrollUpdate);
            // window.removeEventListener('touchmove', windowScrollUpdate);

        }

    }, [value]);

    return (
        <>

            <div
                ref={rootRef}
                data-overlay-id={`date2d__wrapper-${idRes}`}
                className={`date2d__trigger d-inline-block is-${type} ${triggerClassName || ''}`}
                onClick={handleShow}

                onFocus={handleFocus}
                onBlur={handleBlur}

            >


                <div className="date2d__control">
                    <Input
                        ref={(node) => {
                            inputRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
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
                        label={label}
                        units={units}
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        required={required}
                        appendControl={<>
                         <div className="date2d__control__inputplaceholder">



                                {typeof onlyTime === 'undefined' || onlyTime === false ? <>
                                    <input
                                        ref={partedInputYear}
                                        inputMode="numeric"
                                        tabIndex={tabIndex || 0}
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

                               

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [_val, prevState[1], prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            
                                        }}
                                        {...attributes}
                                    />
                                    {dateDefaultValueExist ? DELIMITER_DATE : null}
                                    <input
                                        ref={partedInputMonth}
                                        inputMode="numeric"
                                        tabIndex={tabIndex || 0}
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

                   

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], _val, prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
                                            
                                        }}
                                        {...attributes}
                                    />
                                    {dateDefaultValueExist ? DELIMITER_DATE : null}
                                    <input
                                        ref={partedInputDay}
                                        inputMode="numeric"
                                        tabIndex={tabIndex || 0}
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




                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], _val, prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            
                                        }}
                                        {...attributes}
                                    />
                                    &nbsp;

                                </> : null}

                                {type === 'datetime-local' || type === 'time' ? <>
                                    {/* TIME CONTROL */}
                                    <input
                                        ref={partedInputHours}
                                        inputMode="numeric"
                                        tabIndex={tabIndex || 0}
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
                                            

                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], _val, prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([_val, splitVals[4], splitVals[5]]);

                                            
                                        }}
                                        {...attributes}
                                    />
                                    {/* TIME CONTROL */}

                                    {/* TIME CONTROL */}
                                    {dateDefaultValueExist ? DELIMITER_TIME : null}
                                    <input
                                        ref={partedInputMinutes}
                                        inputMode="numeric"
                                        tabIndex={tabIndex || 0}
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


                                            onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], prevState[3], _val, prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], _val, splitVals[5]]);

                                            
                                        }}
                                        {...attributes}
                                    />
                                    {/* TIME CONTROL */}


                                    {/* TIME CONTROL */}
                                    {(typeof truncateSeconds === 'undefined' || truncateSeconds === false) ? <>
                                        {dateDefaultValueExist ? DELIMITER_TIME : null}
                                        <input
                                            ref={partedInputSeconds}
                                            inputMode="numeric"
                                            tabIndex={tabIndex || 0}
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


                                                onChange?.(inputRef.current, valueResConverter(_full), isValidDate(_full));
                                                setSplitVals((prevState: string[]) => {
                                                    return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[4], _val];
                                                });


                                                // update other data
                                                setDateVal(_date);
                                                setChangedVal(_full);
                                                setTimeVal([splitVals[3], splitVals[4], _val]);
                                                    
                                            }}
                                            {...attributes}
                                        />
                                    </> : null}
                                    {/* TIME CONTROL */}
                                </> : null}



                            </div>
                        </>}
                        style={style}
                        {...attributes}
                    />

                    <span className="date2d__control__icon">

                        <a tabIndex={-1} href="#" className={`date2d__control__icon__close ${dateDefaultValueExist ? '' : 'd-none'}`} onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();  // Avoid triggering pop-ups
                            clearAll();
                        }}><svg width="12px" height="12px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>
                        
                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                            <path d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                   
                </div>

                

            </div>


            <RootPortal show={isShow} containerClassName={`Date Date--${type}`}>
                <div
                    ref={modalRef}
                    id={`date2d__wrapper-${idRes}`}
                    className={`date2d__wrapper is-${type} ${popupClassName || ''} active`}
                    style={{
                        display: 'none'
                    }}
                    {...attributes}
                >


                    <div
                        ref={listContentRef}
                        className="date2d__tools-container d-flex flex-row"
                    >
                        {/* CALENDAR */}
                        {typeof onlyTime === 'undefined' || onlyTime === false ? <>
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
                                        onChange?.(inputRef.current, _v, true);

                                        // 
                                        onChangeDate?.(_v);
                                        

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
                                        onChange?.(inputRef.current, _v, true);

                                        // 
                                        onChangeToday?.(_v);

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
                                        onChange?.(inputRef.current, _v, true);

                                        // 
                                        onChangeMonth?.(_v);

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
                                        onChange?.(inputRef.current, _v, true);

                                        // 
                                        onChangeYear?.(_v);

                                    }}
                                />
                            </div>
                        </> : null}

                        {/* /CALENDAR */}


                        {type === 'datetime-local' || type === 'time' ? <>

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
                                                    onChange?.(inputRef.current, _v, true);

                                                    // 
                                                    onChangeHours?.(_v);

                                                }}
                                                className={`${timeVal[0] == hour ? 'selected' : ''} ${checkDisabledHours(_curVal.year, Number(_curVal.month)-1, _curVal.day, hour) ? 'disabled' : ''}`}
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
                                                    onChange?.(inputRef.current, _v, true);

                                                    // 
                                                    onChangeMinutes?.(_v);

                                                }}
                                                className={`${timeVal[1] == v ? 'selected' : ''} ${checkDisabledMinutes(_curVal.year, Number(_curVal.month)-1, _curVal.day, _curVal.hours, v) ? 'disabled' : ''}`}
                                            >

                                                {v}
                                            </a>
                                        </li>
                                    })}

                                </ul>
                            </div>
                            {/* TIME CONTROL */}


                            {/* TIME CONTROL */}
                            {(typeof truncateSeconds === 'undefined' || truncateSeconds === false) ? <>
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
                                                        onChange?.(inputRef.current, _v, true);

                                                        // 
                                                        onChangeSeconds?.(_v);

                                                    }}
                                                    className={`${timeVal[2] == v ? 'selected' : ''} ${checkDisabledSeconds(_curVal.year, Number(_curVal.month)-1, _curVal.day, _curVal.hours, _curVal.minutes, v) ? 'disabled' : ''}`}
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