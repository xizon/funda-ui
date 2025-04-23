import React, { useRef, useEffect, forwardRef, useImperativeHandle, useState } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


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

const StepperPanel: React.FC<StepperPanelProps> = (props) => {
    const {
        header = <><svg width="1rem" height="1rem"><rect fill="none"/></svg></>, 
        children, 
        style
    } = props;

    return (
        <div className="stepper-panel" style={style}>
            <div className="stepper-panel-header">{header}</div>
            <div className="stepper-panel-content">{children}</div>
        </div>
    );
};

const Stepper = forwardRef<StepperRef, StepperProps>((props, ref) => {
    const {
        wrapperClassName,
        indicatorClickAllowed = false,
        style,
        initialStep = 0,
        layout = 'horizontal',
        completeIcon = <><svg width="20px" height="20px" viewBox="0 0 20 20" fill="none"><path d="M15.3742 5.98559L10.3742 14.9856C9.72664 16.1511 7.97832 15.1798 8.62585 14.0143L13.6258 5.01431C14.2734 3.84876 16.0217 4.82005 15.3742 5.98559Z" fill="#fff"/><path d="M5.1247 9.71907L10.1247 13.7191C11.1659 14.552 9.91646 16.1137 8.87531 15.2808L3.87531 11.2808C2.83415 10.4479 4.08354 8.88615 5.1247 9.71907Z" fill="#fff"/></svg></>,
        disableCompleteIcon = true,
        onChange,
        children
    } = props;


    const rootRef = useRef<HTMLDivElement>(null);
    const [isLastStepComplete, setIsLastStepComplete] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(initialStep);
    const panels = React.Children.toArray(children) as React.ReactElement<StepperPanelProps>[];
    const isVertical: boolean = layout === 'vertical';
    const prevActiveIndexRef = useRef<number>(activeIndex);
    const prevIsLastStepCompleteRef = useRef<boolean>(isLastStepComplete);

    useImperativeHandle(
        ref,
        () => ({
            goto: (index: number) => {
                if (index >= 0 && index < panels.length) {
                    setActiveIndex(index);
                }
            },
            next: () => {
                setActiveIndex((prevState) => {
                    const _val = Math.min(prevState + 1, panels.length - 1);
                    return _val;
                });
            },
            prev: () => {
                setActiveIndex((prevState) => {
                    const _val = Math.max(prevState - 1, 0);
                    return _val;
                });

                setIsLastStepComplete(false);
            },
            setLastStepComplete: (val: boolean) => {
                setIsLastStepComplete(val);
            },
        }),
        [panels.length],
    );

    const horizontalPanelsGenerator = (): JSX.Element => {
        return <>
            <div className="stepper-header">
                {panels.map((panel, index) => {
                    const { header } = panel.props;
                    const isActive = index === activeIndex;
                    const isCompleted = index < activeIndex || (index === panels.length - 1 && isLastStepComplete); 

                    return (
                        <React.Fragment key={index}>
                            <div 
                                data-step-index={index}
                                className={combinedCls(
                                    'step-item',
                                    {
                                        'step-item--clickable': indicatorClickAllowed && !isLastStepComplete
                                    }
                                )} 
                                onClick={indicatorClickAllowed && !isLastStepComplete ? () => {
                                    setActiveIndex(index);
                                    setIsLastStepComplete(false);
                                } : undefined}
                            >
                                <div
                                    className={combinedCls(
                                        'step-indicator',
                                        {
                                            'step-indicator--active': isActive,
                                            'step-indicator--complete': isCompleted
                                        }
                                    )} 
                                >
                                    {isCompleted ? <>{disableCompleteIcon ? index + 1 : completeIcon}</> : index + 1}
                                </div>
                                <div
                                    className={combinedCls(
                                        'step-title',
                                        {
                                            'step-title--active': isActive,
                                            'step-title--complete': isCompleted
                                        }
                                    )} 
                                >
                                    {header}
                                </div>
                            </div>
                            {index < panels.length - 1 && (
                                <div
                                    className={combinedCls(
                                        'step-line',
                                        {
                                            'step-line--active': index === activeIndex - 1,
                                            'step-line--complete': index < activeIndex - 1
                                        }
                                    )} 
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="stepper-panels">
                {panels[activeIndex]}
            </div>
        </>;
    };

    const verticalPanelsGenerator = (): JSX.Element => {
        return <>
            {panels.map((panel, index) => {
                const { header } = panel.props;
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex || (index === panels.length - 1 && isLastStepComplete);

                return (
                    <div 
                        key={index} 
                        className={combinedCls(
                            'vertical-step-row',
                            {
                                'vertical-step-row--active': isActive,
                                'vertical-step-row--complete': isCompleted
                            }
                        )} 
                    >
                        {/* Left */}
                        <div className="vertical-step-left">
                            <div
                                data-step-index={index}
                                className={combinedCls(
                                    'step-item',
                                    {
                                        'step-item--clickable': indicatorClickAllowed && !isLastStepComplete
                                    }
                                )} 
                                onClick={indicatorClickAllowed && !isLastStepComplete ? () => {
                                    setActiveIndex(index);
                                    setIsLastStepComplete(false);
                                } : undefined}
                            >
                                <div
                                    className={combinedCls(
                                        'step-indicator',
                                        {
                                            'step-indicator--active': isActive,
                                            'step-indicator--complete': isCompleted
                                        }
                                    )} 
                                >
                                    {isCompleted ?  <>{disableCompleteIcon ? index + 1 : completeIcon}</> : index + 1}
                                </div>
                                <div
                                    className={combinedCls(
                                        'step-title',
                                        {
                                            'step-title--active': isActive,
                                            'step-title--complete': isCompleted
                                        }
                                    )} 
                                >
                                    {header}
                                </div>
                            </div>

                            {index < panels.length - 1 && (
                                <div
                                    className={combinedCls(
                                        'step-line',
                                        {
                                            'step-line--active': index === activeIndex - 1,
                                            'step-line--complete': index < activeIndex - 1
                                        }
                                    )} 
                                />
                            )}
                        </div>

                        {/* Right */}
                        {isActive && (
                            <div className="vertical-step-right">
                                {panels[activeIndex]}
                            </div>
                        )}
                    </div>
                );
            })}
        </>;
    };

    // Calculate the width/height of the progress line
    const calculateProgressStyle = () => {
        if (!panels.length || rootRef.current === null) return {};
        
        const stepItems = rootRef.current.querySelectorAll('.step-item');
        if (!stepItems.length) return {};

        if (isVertical) {
            const totalHeight = stepItems[0].clientHeight * (panels.length - 1);
            const progress = (activeIndex / (panels.length - 1)) * 100;
            return {
                '--stepper-progress-height': `${progress}%`
            } as React.CSSProperties;
        } else {
            
            const defaultProgress = (activeIndex / (panels.length - 1)) * 100;
            const firstItem = stepItems[0] as HTMLDivElement;
            const lastItem = stepItems[stepItems.length - 1] as HTMLDivElement;
            if (!firstItem || !lastItem) return {};

            const firstCenter = firstItem.offsetLeft + (firstItem.clientWidth / 2);
            const lastCenter = lastItem.offsetLeft + (lastItem.clientWidth / 2);
            const totalWidth = lastCenter - firstCenter;

            const currentItem = stepItems[activeIndex] as HTMLDivElement;
            if (!currentItem) return {};

            const currentCenter = currentItem.offsetLeft + (currentItem.clientWidth / 2);
            const progress = defaultProgress !== 0 && activeIndex > 0 ? defaultProgress : ((currentCenter - firstCenter) / totalWidth) * 100;

            return {
                '--stepper-progress-width': `${isNaN(progress) ? 0 : progress}%`
            } as React.CSSProperties;
        }
    };

    useEffect(() => {
        // Only trigger onChange if values actually changed from previous values
        if (prevActiveIndexRef.current !== activeIndex || 
            prevIsLastStepCompleteRef.current !== isLastStepComplete) {
            
            prevActiveIndexRef.current = activeIndex;
            prevIsLastStepCompleteRef.current = isLastStepComplete;
            
            onChange?.(activeIndex, isLastStepComplete);
        }
    }, [activeIndex, isLastStepComplete]);


    useEffect(() => {
        // Force a recalculation of the progress line
        const timer = setTimeout(() => {
            setActiveIndex(prev => prev);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            ref={rootRef}
            className={combinedCls(
                'stepper-container',
                clsWrite(wrapperClassName, ''),
                {
                    'stepper-container--vertical': isVertical
                }
            )} 
            style={{
                ...style,
                ...calculateProgressStyle()
            }}
        >
            {!isVertical && horizontalPanelsGenerator()}
            {isVertical && verticalPanelsGenerator()}
        </div>
    );
});

export { Stepper, StepperPanel };
export type { StepperProps, StepperPanelProps, StepperRef };