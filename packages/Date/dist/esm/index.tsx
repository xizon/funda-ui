import React, { useId, useState, useRef, useEffect, forwardRef, ChangeEvent } from 'react';

import Input from 'funda-input';
import RootPortal from 'funda-root-portal';


import Calendar from './Calendar';


import { getAbsolutePositionOfStage } from './utils/get-element-property';


// Localization
import i18n__en_US from './localization/en_US';
import i18n__zh_CN from './localization/zh_CN';


type DateProps = {
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
    min?: any;
    max?: any;
    value?: string;
    label?: React.ReactNode | string;
    units?: string;
    name?: string;
    alt?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    pattern?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;

    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any) => void;
    onInputCallback?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
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
        min,
        max,
        disabled,
        required,
        placeholder,
        pattern,
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
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
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


    function handleFocus(event: ChangeEvent<HTMLInputElement>) {
        rootRef.current.classList.add('focus');


        //
        onFocus?.(event);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        //
        onChange?.(inputRef.current, val);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(inputRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


    }


    function handleBlur(event: ChangeEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        //
        onBlur?.(inputRef.current);

        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(inputRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }

    function handleKeyPressed(event: React.KeyboardEvent<HTMLInputElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(inputRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
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
            if (onlyTime) {
                const {
                    date,
                    hours,
                    minutes,
                    seconds
                } = getFullTimeData(getNow());

                setDateVal(date);
                setTimeVal([hours, minutes, seconds]);
            }

        } else {
            setDateDefaultValueExist(true);

            //
            const _dVal: any = onlyTime ? `${getFullTimeData(getNow()).date} ${value}` : value;
            const _res = valueResConverter(_dVal);

            setChangedVal(_res);

            if (isValidDate(_dVal)) {
                const {
                    date,
                    hours,
                    minutes,
                    seconds
                } = getFullTimeData(_dVal);


                setDateVal(date);
                setTimeVal([hours, minutes, seconds]);
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
                        tabIndex={tabIndex || 0}
                        type="text"
                        data-date-info={JSON.stringify(getFullTimeData(changedVal))}
                        wrapperClassName={wrapperClassName}
                        controlClassName={controlClassName}
                        controlGroupWrapperClassName={controlGroupWrapperClassName}
                        controlGroupTextClassName={controlGroupTextClassName}
                        id={idRes}
                        name={name}
                        alt={alt}
                        pattern={pattern}
                        placeholder={placeholder}
                        value={!dateDefaultValueExist ? `` : valueResConverter(changedVal)}
                        autoComplete={autoComplete}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onKeyPressedCallback={handleKeyPressed}
                        disabled={disabled}
                        required={required}
                        readOnly={readOnly}
                        label={label}
                        units={units}
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        style={style}
                        {...attributes}
                    />

                    <span className="date2d__control__icon">
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
                    className={`date2d__wrapper is-${type} active`}
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
                                        setDateVal(currentData.date);
                                        setChangedVal(`${currentData.date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        onChange?.(inputRef.current, getFullTimeData(`${currentData.date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`));

                                    }}
                                    onChangeToday={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        setDateVal(`${_date}`);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        onChange?.(inputRef.current, getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`));
                                    }}
                                    onChangeMonth={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        setDateVal(_date);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        onChange?.(inputRef.current, getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`));

                                    }}
                                    onChangeYear={(currentData: any) => {
                                        resetDefauleValueExist();

                                        //
                                        const _date = `${currentData.year}-${currentData.month}-${currentData.day}`;
                                        setDateVal(_date);
                                        setChangedVal(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`);
                                        onChange?.(inputRef.current, getFullTimeData(`${_date} ${timeVal[0]}:${timeVal[1]}:${timeVal[2]}`));

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
                                                    setChangedVal(`${dateVal} ${_val}:${timeVal[1]}:${timeVal[2]}`);
                                                    setTimeVal((prevState: string[]) => {
                                                        return [_val, prevState[1], prevState[2]];
                                                    });
                                                    onChange?.(inputRef.current, getFullTimeData(`${dateVal} ${_val}:${timeVal[1]}:${timeVal[2]}`));

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
                                                    setChangedVal(`${dateVal} ${timeVal[0]}:${_val}:${timeVal[2]}`);
                                                    setTimeVal((prevState: string[]) => {
                                                        return [prevState[0], _val, prevState[2]];
                                                    });
                                                    onChange?.(inputRef.current, getFullTimeData(`${dateVal} ${timeVal[0]}:${_val}:${timeVal[2]}`));

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
                                                        setChangedVal(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${_val}`);
                                                        setTimeVal((prevState: string[]) => {
                                                            return [prevState[0], prevState[1], _val];
                                                        });
                                                        onChange?.(inputRef.current, getFullTimeData(`${dateVal} ${timeVal[0]}:${timeVal[1]}:${_val}`));

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