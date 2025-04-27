import React from 'react';
interface SplitterPanelSubProps {
    children: React.ReactNode;
}
declare const SplitterPanelLeft: React.FC<SplitterPanelSubProps>;
declare const SplitterPanelRight: React.FC<SplitterPanelSubProps>;
interface SplitterPanelProps {
    wrapperClassName?: string;
    draggable?: boolean;
    initialWidth?: number;
    minWidth?: number;
    maxWidth?: number;
    onDrag?: (type: 'dragStart' | 'dragEnd' | 'drag', leftWidth: number) => void;
    children?: React.ReactNode;
}
declare const SplitterPanel: React.FC<SplitterPanelProps> & {
    Left: typeof SplitterPanelLeft;
    Right: typeof SplitterPanelRight;
};
export default SplitterPanel;
