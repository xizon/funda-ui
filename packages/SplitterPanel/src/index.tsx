import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import useIsMobile from 'funda-utils/dist/cjs/useIsMobile';


interface SplitterPanelSubProps {
    children: React.ReactNode;
  }
  
  const SplitterPanelLeft: React.FC<SplitterPanelSubProps> = ({ children }) => <>{children}</>;
  const SplitterPanelRight: React.FC<SplitterPanelSubProps> = ({ children }) => <>{children}</>;
  
  interface SplitterPanelProps {
      wrapperClassName?: string;
      draggable?: boolean
      initialWidth?: number;
      minWidth?: number;
      maxWidth?: number;
      onDrag?: (type: 'dragStart' | 'dragEnd' | 'drag', leftWidth: number) => void; 
      children?: React.ReactNode;
  }
  

  const SplitterPanel: React.FC<SplitterPanelProps> & {
    Left: typeof SplitterPanelLeft;
    Right: typeof SplitterPanelRight;
  } = (props) => {
      const {
          wrapperClassName,
          draggable = true,
          maxWidth,
          minWidth = 100,
          initialWidth = 200,
          onDrag,
          children
      } = props;
      
    const containerRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const getDefaultWidth = () => {
        if (typeof initialWidth === 'number') return initialWidth;
        if (typeof minWidth === 'number') return minWidth;
        return 200;
    };
    const [leftWidth, setLeftWidth] = useState<number>(getDefaultWidth());
    const isMobile = useIsMobile();

    // adjust split panel
    const [dragging, setDragging] = useState<boolean>(false);

    // Update only when initialWidth changes and is valid, and only when it has not been dragged
    const hasDragged = useRef(false);

    let left: React.ReactNode = null;
    let right: React.ReactNode = null;

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;
        if (child.type === SplitterPanelLeft) left = child.props.children;
        if (child.type === SplitterPanelRight) right = child.props.children;
    });



    // dragdrop
    function handleSplitPanelsChange(clientX: number) {
        if (!containerRef.current) return;
        const containerLeft = containerRef.current.getBoundingClientRect().left;
        const separatorXPosition = clientX - containerLeft;
        const minWidthValue = minWidth || 100;
        const maxWidthValue = maxWidth || window.innerWidth / 2;
        if (dragging && separatorXPosition > minWidthValue && separatorXPosition < maxWidthValue) {
            setLeftWidth(separatorXPosition);
            onDrag?.('drag', separatorXPosition);
            hasDragged.current = true;
        }
    }
    function handleMouseDownSplitPanels(e: React.MouseEvent) {
        setDragging(true);
        onDrag?.('dragStart', leftWidth ?? initialWidth);
    }
    function handleTouchStartSplitPanels(e: React.TouchEvent) {
        setDragging(true);
        onDrag?.('dragStart', leftWidth ?? initialWidth);
    }

    function handleMouseMoveSplitPanels(e: MouseEvent) {
        handleSplitPanelsChange(e.clientX);
    }
    function handleTouchMoveSplitPanels(e: TouchEvent) {
        handleSplitPanelsChange(e.touches[0].clientX);
    }

    function handleMouseUpSplitPanels() {
        setDragging(false);
        onDrag?.('dragEnd', leftWidth ?? initialWidth);
    }


    useEffect(() => {
        if (!draggable) return;
    
        // 事件监听用原生事件
        document.addEventListener('mousemove', handleMouseMoveSplitPanels, false);
        document.addEventListener('touchmove', handleTouchMoveSplitPanels, false);
        document.addEventListener('mouseup', handleMouseUpSplitPanels, false);
        document.addEventListener('touchend', handleMouseUpSplitPanels, false);
        return () => {
            document.removeEventListener('mousemove', handleMouseMoveSplitPanels, false);
            document.removeEventListener('touchmove', handleTouchMoveSplitPanels, false);
            document.removeEventListener('mouseup', handleMouseUpSplitPanels, false);
            document.removeEventListener('touchend', handleMouseUpSplitPanels, false);
        };
    }, [draggable, dragging]);

    useEffect(() => {
        if (!hasDragged.current && typeof initialWidth === 'number') {
            setLeftWidth(initialWidth);
        }
    }, [initialWidth]);

    return (
        <>
        
        {isMobile ? <>
            <div className={combinedCls(
                'splitter-panel-vertical',
                clsWrite(wrapperClassName, '')
            )}>
                <div className="splitter-panel-top">{left}</div>
                <div className="splitter-panel-bottom">{right}</div>
            </div>

        </> : <>
            <div
                className={combinedCls(
                    'splitter-panel',
                    clsWrite(wrapperClassName, '')
                )}
                ref={containerRef}
            >
           
                <div 
                    className="splitter-panel-left"
                    style={{ "--splitter-panel-left-w": `${leftWidth}px` } as React.CSSProperties}
                >
                    {left}
                </div>
             
                {/*<!--DIVIDER-->*/}
                <div
                    ref={dividerRef}
                    className={`splitter-panel-divider ${dragging ? 'dragging' : ''}`}
                    onMouseDown={handleMouseDownSplitPanels}
                    onTouchStart={handleTouchStartSplitPanels}
                    onTouchEnd={handleMouseUpSplitPanels}
                />
                {/*<!--/DIVIDER-->*/}
    
                <div className="splitter-panel-right">
                    {right}
                </div>
            </div>
        </>}

    </>
    )
};

SplitterPanel.Left = SplitterPanelLeft;
SplitterPanel.Right = SplitterPanelRight;

export default SplitterPanel;