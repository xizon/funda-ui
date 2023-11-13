/// <reference types="react" />
declare type CalendarProps = {
    tmpl?: (date: any) => void;
    militaryTime?: boolean;
};
declare const Calendar: (props: CalendarProps) => JSX.Element;
export default Calendar;
