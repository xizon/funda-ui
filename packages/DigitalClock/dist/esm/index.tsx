import React, { useState } from 'react';


import useInterval from 'funda-utils/dist/cjs/useInterval';


export type DigitalClockProps = {
    tmpl?: (date: any) => void;
    militaryTime?: boolean;
};


const DigitalClock = (props: DigitalClockProps) => {
    const { 
        tmpl, 
        militaryTime 
    } = props;

    const [date, setDate] = useState<any>({
        minutes: 'NULL',
        seconds: 'NULL',
        hours: 'NULL',
        amPm: 'NULL'
    });
    const [clockAppearance, setClockAppearance] = useState<React.ReactNode>(null);

    let time: Date = new Date();
    let minutes: any = time.getMinutes();
    let seconds: any = time.getSeconds();
    let hours: any = time.getHours();
    let amPm = time.getHours() > 12 ? "pm" : "am";

    const { startTimer, stopTimer } = useInterval(() => {
        time = new Date();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        hours = time.getHours();

        if ( militaryTime ) {
            amPm = 'NULL';
        } else {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            hours = hours < 10 ? "0" + hours : hours;
            hours = hours > 12 ? hours - 12 : hours;
            hours = hours == 0 ? 12 : hours;
        }


        const curData = {
            minutes: minutes,
            seconds: seconds,
            hours: hours,
            amPm: amPm
        };

        setDate(curData);

        //callback
        const res: any = tmpl?.(curData);
        setClockAppearance(res);
    }, 1000);


    return (
        <>
            {date ? <>{clockAppearance}</> : null}

        </>
    )
};


export default DigitalClock;