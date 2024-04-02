import React, { useId, useState, useRef, useEffect, forwardRef, ChangeEvent } from 'react';

import Input from 'funda-input';
import RootPortal from 'funda-root-portal';


import Calendar from './Calendar';


import { getAbsolutePositionOfStage } from './utils/get-element-property';


// Localization
import i18n__en_US from './localization/en_US';
import i18n__zh_CN from './localization/zh_CN';


type DateProps = {
    popupClassName?: string;
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    offset?: number;
    exceededSidePosOffset?: number;
    localization?: 'en_US' | 'zh_CN';
    type?: 'date' | 'datetime-local' | 'time';
    onlyTime?: boolean;
    truncateSeconds?: boolean;
    valueUseSlash?: boolean;
    value?: string;
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
    onChange?: (e: any, data: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;


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
        popupClassName,
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
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



    // Localization
    let _langHoursTitle = langHoursTitle || 'Hours';
    let _langMinutesTitle = langMinutesTitle || 'Minutes';
    let _langSecondsTitle= langSecondsTitle || 'Seconds';
    let _langWeek = langWeek;
    let _langWeekFull = langWeekFull;
    let _langMonths = langMonths;
    let _langMonthsFull = langMonthsFull;
    let _langToday = langToday;


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

    const [dateDefaultValueExist, setDateDefaultValueExist] = useState<boolean>(false);
    const [splitVals, setSplitVals] = useState<any[]>(['0000','00','00','00','00','00']);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isShow, setIsShow] = useState<boolean>(false);
    const [dateVal, setDateVal] = useState<string>('');
    const [timeVal, setTimeVal] = useState<string[]>(['00', '00', '00']);

    const hoursArr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];
    const msArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

    const isValidDate = (v: string) => {
        return !(String(new window.Date(v) as any).toLowerCase() === 'invalid date');
    };

    const eventFire = (el: any, etype: string) => {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    };


    const dateFormat = (v: Date | String) => {
        const date = typeof v === 'string' ? new window.Date(v.replace(/-/g, "/")) : v;  // fix "Invalid date in safari"
        return date;
    };

    const getNow = () => {
        return new window.Date(window.Date.now());
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

        const date: any = dateFormat(v);
        const padZero = (num: number) => {
            if (padZeroEnabled) {
                return num < 10 ? '0' + num : num.toString();
            } else {
                return num.toString();
            }

        };
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1);
        const day = padZero(date.getDate());
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        const seconds = padZero(date.getSeconds());
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
            _modalRef.style.top = 'auto';
            _modalRef.style.bottom = (window.innerHeight - _triggerBox.top) + POS_OFFSET + 2 + 'px';
            _modalRef.style.setProperty('position', 'fixed', 'important');
            _modalRef.style.setProperty('position', 'fixed', 'important');
            _modalRef.classList.add('pos-top');
        }

        if (targetPos === 'bottom') {
            _modalRef.style.left = x + 'px';
            _modalRef.style.bottom = 'auto';
            _modalRef.style.top = y + height + POS_OFFSET + 'px';
            _modalRef.style.setProperty('position', 'absolute', 'important');
            _modalRef.classList.remove('pos-top');
        }



        // STEP 3:
        //-----------
        // Determine whether it exceeds the far right or left side of the screen
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


        }

    }

    function popwinPosHide() {
        setIsShow(false);
    }

    function handleClose(event: any) {
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
        onChange?.(inputRef.current, val);

    }


    function handleBlur(event: ChangeEvent<HTMLElement>) {

        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        onBlur?.(inputRef.current);
    }


    function handleInitSplitClickEv(e: any) {
        e.target.select();
        resetDefauleValueExist();

        if (!dateDefaultValueExist) {
            const _full = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
            onChange?.(inputRef.current, valueResConverter(_full));
            setChangedVal(_full);
        }
    }


    function clearAll() {
        setDateDefaultValueExist(false);
        setChangedVal('');
        onChange?.(inputRef.current, '');
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



    useEffect(() => {

        // update default value
        //--------------
        if (typeof value === 'undefined' || value === null || value === 'null' || value === '') {
            setDateDefaultValueExist(false);

            //
            const {
                date,
                year,
                month,
                day,
                hours,
                minutes,
                seconds
            } = getFullTimeData(getNow());

            setDateVal(date);
            setTimeVal([hours, minutes, seconds]);
            setSplitVals([year, month, day, hours, minutes, seconds]);

        } else {
            setDateDefaultValueExist(true);

            //
            const _dVal: any = onlyTime ? `${getFullTimeData(getNow()).date} ${value}` : value;
            const _res = valueResConverter(_dVal);

            setChangedVal(_res);
            
            if (isValidDate(_dVal)) {
                const {
                    date,
                    year,
                    month,
                    day,
                    hours,
                    minutes,
                    seconds
                } = getFullTimeData(_dVal);


                setDateVal(date);
                setTimeVal([hours, minutes, seconds]);
                setSplitVals([year, month, day, hours, minutes, seconds]);
            }

            onLoad?.(_res, getFullTimeData(_dVal));

        }


        //--------------
        document.removeEventListener('pointerdown', handleClose);
        document.addEventListener('pointerdown', handleClose);

        return () => {
            document.removeEventListener('pointerdown', handleClose);

        };
    }, [value]);

    return (
        <>

            <div
                ref={rootRef}
                data-overlay-id={`date2d__wrapper-${idRes}`}
                className={`date2d__trigger d-inline-block is-${type}`}
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
                        data-date-info={JSON.stringify(getFullTimeData(changedVal))}
                        wrapperClassName={wrapperClassName}
                        controlClassName={controlClassName}
                        controlGroupWrapperClassName={controlGroupWrapperClassName}
                        controlGroupTextClassName={controlGroupTextClassName}
                        id={idRes}
                        name={name}
                        alt={alt}
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
                                        tabIndex={tabIndex || 0}
                                        className="date2d__control__inputplaceholder--year"
                                        value={!dateDefaultValueExist ? `` : (splitVals[0] === '0000' ? '' : splitVals[0])}
                                        maxLength={4}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            const _val = e.target.value;
                                            const _date = `${_val}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
                                            onChange?.(inputRef.current, valueResConverter(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [_val, prevState[1], prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            
                                        }}
                                    />
                                    -
                                    <input
                                        tabIndex={tabIndex || 0}
                                        className="date2d__control__inputplaceholder--month"
                                        value={!dateDefaultValueExist ? `` : (splitVals[1] === '00' ? '' : splitVals[1])}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            const _val = e.target.value;
                                            const _date = `${splitVals[0]}-${_val}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
                                            onChange?.(inputRef.current, valueResConverter(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], _val, prevState[2], prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);
                                            
                                        }}
                                    />
                                    -
                                    <input
                                        tabIndex={tabIndex || 0}
                                        className="date2d__control__inputplaceholder--day"
                                        value={!dateDefaultValueExist ? `` : (splitVals[2] === '00' ? '' : splitVals[2])}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            const _val = e.target.value;
                                            const _date = `${splitVals[0]}-${splitVals[1]}-${_val}`;
                                            const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${splitVals[5]}`;
                                            onChange?.(inputRef.current, valueResConverter(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], _val, prevState[3], prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], splitVals[4], splitVals[5]]);

                                            
                                        }}
                                    />
                                    &nbsp;

                                </> : null}

                                {type === 'datetime-local' || type === 'time' ? <>
                                    {/* TIME CONTROL */}
                                    <input
                                        tabIndex={tabIndex || 0}
                                        className="date2d__control__inputplaceholder--hours"
                                        value={!dateDefaultValueExist ? `` : (splitVals[3] === '00' ? '' : splitVals[3])}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            const _val = e.target.value;
                                            const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${_val}:${splitVals[4]}:${splitVals[5]}`;
                                            onChange?.(inputRef.current, valueResConverter(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], _val, prevState[4], prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([_val, splitVals[4], splitVals[5]]);

                                            
                                        }}
                                    />
                                    {/* TIME CONTROL */}

                                    {/* TIME CONTROL */}
                                    :
                                    <input
                                        tabIndex={tabIndex || 0}
                                        className="date2d__control__inputplaceholder--minutes"
                                        value={!dateDefaultValueExist ? `` : (splitVals[4] === '00' ? '' : splitVals[4])}
                                        maxLength={2}
                                        autoComplete="off"
                                        disabled={disabled || null}
                                        readOnly={readOnly || null}
                                        onClick={handleInitSplitClickEv}
                                        onChange={(e: any) => {
                                            const _val = e.target.value;
                                            const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                            const _full = `${_date} ${splitVals[3]}:${_val}:${splitVals[5]}`;
                                            onChange?.(inputRef.current, valueResConverter(_full));
                                            setSplitVals((prevState: string[]) => {
                                                return [prevState[0], prevState[1], prevState[2], prevState[3], _val, prevState[5]];
                                            });

                                            // update other data
                                            setDateVal(_date);
                                            setChangedVal(_full);
                                            setTimeVal([splitVals[3], _val, splitVals[5]]);

                                            
                                        }}
                                    />
                                    {/* TIME CONTROL */}


                                    {/* TIME CONTROL */}
                                    {(typeof truncateSeconds === 'undefined' || truncateSeconds === false) ? <>
                                        :
                                        <input
                                            tabIndex={tabIndex || 0}
                                            className="date2d__control__inputplaceholder--seconds"
                                            value={!dateDefaultValueExist ? `` : (splitVals[5] === '00' ? '' : splitVals[5])}
                                            maxLength={2}
                                            autoComplete="off"
                                            disabled={disabled || null}
                                            readOnly={readOnly || null}
                                            onClick={handleInitSplitClickEv}
                                            onChange={(e: any) => {
                                                const _val = e.target.value;
                                                const _date = `${splitVals[0]}-${splitVals[1]}-${splitVals[2]}`;
                                                const _full = `${_date} ${splitVals[3]}:${splitVals[4]}:${_val}`;
                                                onChange?.(inputRef.current, valueResConverter(_full));
                                                setSplitVals((prevState: string[]) => {
                                                    return [prevState[0], prevState[1], prevState[2], prevState[3], prevState[4], _val];
                                                });


                                                // update other data
                                                setDateVal(_date);
                                                setChangedVal(_full);
                                                setTimeVal([splitVals[3], splitVals[4], _val]);
                                                    
                                            }}
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
                >


                    <div
                        ref={listContentRef}
                        className="date2d__tools-container d-flex flex-row"
                    >
                        {/* CALENDAR */}
                        {typeof onlyTime === 'undefined' || onlyTime === false ? <>
                            <div className="date2d__calendar">
                                <Calendar
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
                                        onChange?.(inputRef.current, _v);
                                        

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
                                        onChange?.(inputRef.current, _v);
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
                                        onChange?.(inputRef.current, _v);

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
                                        onChange?.(inputRef.current, _v);

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
                                                    onChange?.(inputRef.current, _v);

                                                }}
                                                className={`${timeVal[0] == hour ? 'selected' : ''}`}
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
                                                    onChange?.(inputRef.current, _v);

                                                }}
                                                className={`${timeVal[1] == v ? 'selected' : ''}`}
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
                                                        onChange?.(inputRef.current, _v);

                                                    }}
                                                    className={`${timeVal[2] == v ? 'selected' : ''}`}
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