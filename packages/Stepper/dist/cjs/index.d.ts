import React from 'react';
interface StepperPanelProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
interface StepperProps {
    wrapperClassName?: string;
    indicatorClickAllowed?: boolean;
    style?: React.CSSProperties;
    initialStep?: number;
    layout?: 'horizontal' | 'vertical';
    completeIcon?: React.ReactNode;
    disableCompleteIcon?: boolean;
    onChange?: (index: number, isLastStepComplete: boolean) => void;
    children: React.ReactElement<StepperPanelProps>[];
}
interface StepperRef {
    goto: (index: number) => void;
    next: () => void;
    prev: () => void;
}
declare const StepperPanel: React.FC<StepperPanelProps>;
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<StepperRef>>;
export { Stepper, StepperPanel };
export type { StepperProps, StepperPanelProps, StepperRef };
