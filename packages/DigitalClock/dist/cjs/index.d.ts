/// <reference types="react" />
declare type DigitalClockProps = {
    tmpl?: (date: any) => void;
    militaryTime?: boolean;
};
declare const DigitalClock: (props: DigitalClockProps) => JSX.Element;
export default DigitalClock;
