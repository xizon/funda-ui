/**
 * Listens for changes in the pressed state of a given key
 * 
 * @usage:
 *
 const App = () => {
     const keyboardFocusable = true;
     const rootRef = useRef<any>(null);
     // Effective element movement on keystroke
 
     const refNode = useRef(new Map<string, HTMLTableElement>());
     const [focusableCellId, setFocusableCellId] = useState<string>('');
 
     // Count the number of columns per row
     const rootDataInfo = {"totalRow":2,"totalCol":[{"row":0,"colCount":6},{"row":1,"colCount":6},{"row":2,"colCount":6}]};

     // Example: handle cell key press with edge detection
     const handleCellKeyPressed = (
         classname: string,
         elem: HTMLTableCellElement,
         event: React.KeyboardEvent<Element>,
         isLeftEdge: boolean,
         isRightEdge: boolean,
         isTopEdge: boolean,
         isBottomEdge: boolean
     ) => {
         if (isLeftEdge) {
             // Handle when at the leftmost cell
         }
         if (isRightEdge) {
             // Handle when at the rightmost cell
         }
         if (isTopEdge) {
             // Handle when at the topmost cell
         }
         if (isBottomEdge) {
             // Handle when at the bottommost cell
         }
         // Your business logic here
     };

     const { handleKeyPressed } = useTableKeyPress({
         enabled: keyboardFocusable,
         data: [{ a: 1, b: 2, c: 3 }],
         spyElement: rootRef.current,
         rootDataInfo,
         refNode,
         focusableCellId,
         setFocusableCellId,
         onCellKeyPressed: handleCellKeyPressed,
         onCellPressEnter: () => {},
     }, [rootRef]);

     return (
         <div
             ref={rootRef}
             tabIndex={-1}
             onKeyDown={handleKeyPressed} // require "tabIndex" attribute
         >Test</div>
     );
 };
 */
import { useEffect, useCallback, KeyboardEvent, useRef } from "react";

import { initOrderProps, initRowColProps, cellMark, removeCellFocusClassName } from '../func';

export interface UseTableKeyPressProps {
    enabled?: boolean;
    data?: any[];
    spyElement?: any;
    rootDataInfo: null | { totalRow: number; totalCol: { row: number; colCount: number }[] };
    refNode: any;
    focusableCellId: string;
    setFocusableCellId: (s: string) => void;
    onCellKeyPressed?: (
        classname: string,
        elem: HTMLTableCellElement,
        event: KeyboardEvent<Element>,
        isLeftEdge: boolean,
        isRightEdge: boolean,
        isTopEdge: boolean,
        isBottomEdge: boolean
    ) => void;
    onCellPressEnter?: (classname: string, elem: HTMLTableCellElement, event: KeyboardEvent<Element>) => void;
    onKeyDown?: (e: any) => void;
}

const useTableKeyPress = ({
    enabled,
    data,
    spyElement,
    rootDataInfo,
    refNode,
    focusableCellId,
    setFocusableCellId,
    onCellKeyPressed,
    onCellPressEnter,
    onKeyDown
}: UseTableKeyPressProps, deps: any[]) => {
    const focusableCellIdRef = useRef(focusableCellId);
    useEffect(() => {
        focusableCellIdRef.current = focusableCellId;
    }, [focusableCellId]);
   
    const handleKeyPressed = useCallback( async (event: KeyboardEvent<HTMLTableCellElement>) => {
        const key = event.code;
        const isNumLockOn = event.getModifierState && event.getModifierState('NumLock');

   
        // If Enter is pressed and keyboard navigation is disabled, just trigger onCellPressEnter
        if ((key === 'Enter' || key === 'NumpadEnter') && !enabled) {
            const currentCell = event.target as HTMLTableCellElement;
            const row = Number(currentCell.getAttribute('data-table-row'));
            const col = Number(currentCell.getAttribute('data-table-col'));
            const nextCellSignal: string = cellMark(row, col);
            onCellPressEnter?.(nextCellSignal, refNode.current.get(nextCellSignal), event);
            return;
        }

        // Guard: Only proceed if all required data and enabled flag are valid
        if (!Array.isArray(data) || rootDataInfo === null || spyElement === null || typeof enabled === 'undefined' || enabled === false) return;


        // Parse the current focused cell's row and column
        const oldCellSignal = focusableCellIdRef.current?.replace('cell-', '').split('-');
        let _row = Number(oldCellSignal[0]);
        let _col = Number(oldCellSignal[1]);


        // Move function to handle arrow key navigation
        const move = (key: string) => {
            let isLeftEdge = false;
            let isRightEdge = false;
            let isTopEdge = false;
            let isBottomEdge = false;
            let maxCol = 0;
            if (rootDataInfo && Array.isArray(rootDataInfo.totalCol)) {
                const rowInfo = rootDataInfo.totalCol.find(r => r.row === _row);
                if (rowInfo) {
                    maxCol = rowInfo.colCount;
                }
            }

            
            // Numpad2/4/6/8 trigger direction is allowed only when NumLock is off
            if ((key === 'ArrowLeft') || (key === 'Numpad4' && !isNumLockOn)) {
                if (_col - 1 < 0) {
                    isLeftEdge = true;
                    _col = 0;
                } else {
                    _col = _col - 1;
                }
            }

            if ((key === 'ArrowRight') || (key === 'Numpad6' && !isNumLockOn)) {
                if (_col + 1 > maxCol - 1) {
                    isRightEdge = true;
                    _col = maxCol - 1;
                } else {
                    _col = _col + 1;
                }
            }

            if ((key === 'ArrowUp') || (key === 'Numpad8' && !isNumLockOn)) {
                if (_row - 1 < 0) {
                    isTopEdge = true;
                    _row = 0;
                } else {
                    _row = _row - 1;
                }
            }

            if ((key === 'ArrowDown') || (key === 'Numpad2' && !isNumLockOn)) {
                if (_row + 1 > rootDataInfo.totalRow - 1) {
                    isBottomEdge = true;
                    _row = rootDataInfo.totalRow - 1;
                } else {
                    _row = _row + 1;
                }
            }

            

            const nextCellSignal: string = cellMark(_row, _col);
            // Focus the current cell
            removeCellFocusClassName(spyElement);


            const targetCell = refNode.current.get(nextCellSignal);
            if (typeof targetCell !== 'undefined') {
                targetCell.classList.add('cell-focus');
            }
            
     
            setFocusableCellId(nextCellSignal);
            // Callback with edge detection
            onCellKeyPressed?.(
                nextCellSignal,
                refNode.current.get(nextCellSignal),
                event,
                isLeftEdge,
                isRightEdge,
                isTopEdge,
                isBottomEdge
            );
            onKeyDown?.(event);
        };
      
        // Handle arrow key navigation
        // Numpad2/4/6/8 trigger direction is allowed only when NumLock is off
        if ((key === 'ArrowLeft') || (key === 'Numpad4' && !isNumLockOn)) {
            move('ArrowLeft');
        }

        if ((key === 'ArrowRight') || (key === 'Numpad6' && !isNumLockOn)) {
            move('ArrowRight');
        }

        if ((key === 'ArrowUp') || (key === 'Numpad8' && !isNumLockOn)) {
            move('ArrowUp');
        }

        if ((key === 'ArrowDown') || (key === 'Numpad2' && !isNumLockOn)) {
            move('ArrowDown');
        }

        // Handle Enter key
        if (key === 'Enter' || key === 'NumpadEnter') {
            const nextCellSignal: string = cellMark(_row, _col);
            onCellPressEnter?.(nextCellSignal, refNode.current.get(nextCellSignal), event);
        }        

    }, [focusableCellId, rootDataInfo, data]);

    useEffect(() => {
        if (enabled) {
            // Initialize custom props of table elements (only once)
            initOrderProps(spyElement);
            initRowColProps(spyElement);
        }
    }, [enabled, spyElement, ...deps]);

    return {
        handleKeyPressed,
        
        /**
         * Expose handleKeyPressed for external usage, e.g., via contentRef in Table component.
         * This allows calling handleKeyPressed programmatically from outside, such as with a custom onCellKeyPressed method.
         */
        triggerCellKeyPressed: handleKeyPressed,
    };
};

export default useTableKeyPress;

