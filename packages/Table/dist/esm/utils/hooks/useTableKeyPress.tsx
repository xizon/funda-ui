/**
 * Listens for changes in the pressed state of a given key
 * 
 * @usage:

const App = () => {

    const keyboardFocusable = true;
    const rootRef = useRef<any>(null);
    
    // effective element movement on keystroke
    const [rootDataInfo, setRootDataInfo] = useState<null | {totalRow: number}>(null);
    const refNode = useRef(new Map<string, HTMLTableElement>());
    const [focusableCellId, setFocusableCellId] = useState<string>('');

    const { handleKeyPressed } = useTableKeyPress({
        enabled: keyboardFocusable,
        data: [{a: 1, b: 2, c: 3}],
        spyElement: rootRef.current,
        rootDataInfo,
        setRootDataInfo,
        refNode,
        focusableCellId,
        setFocusableCellId,
        onCellKeyPressed,
        onCellPressEnter,
    }, [rootRef]);
    

    return (
        <div 
            ref={rootRef} 
            tabIndex={-1}
            onKeyDown={handleKeyPressed}  // require "tabIndex" attribute
        >Test</div>
    );
};

 */
import { useEffect, useCallback, KeyboardEvent } from "react";

import { initOrderProps, initRowColProps, cellMark, removeCellFocusClassName } from '../func';

export interface UseTableKeyPressProps {
    enabled?: boolean;
    data: any[];
    spyElement?: any;
    rootDataInfo: null | {totalRow: number}; 
    setRootDataInfo: (s: null | {totalRow: number}) => void;
    refNode: any;
    focusableCellId: string;
    setFocusableCellId: (s: string) => void;
    onCellKeyPressed: (classname: string, elem: HTMLTableCellElement, event: KeyboardEvent) => void;
    onCellPressEnter: (classname: string, elem: HTMLTableCellElement, event: KeyboardEvent) => void;
    onKeyDown?: (e: any) => void;
}


const useTableKeyPress = ({
    enabled,
    data,
    spyElement,
    rootDataInfo,
    setRootDataInfo,
    refNode,
    focusableCellId,
    setFocusableCellId,
    onCellKeyPressed,
    onCellPressEnter,
    onKeyDown
}: UseTableKeyPressProps, deps: any[]) => {
   
    const handleKeyPressed = useCallback( async (event: KeyboardEvent<HTMLTableCellElement>) => {
        const key = event.code;

        if ((key === 'Enter' || key === 'NumpadEnter') && !enabled) {
            const currentCell = event.target as HTMLTableCellElement;
            const row = Number(currentCell.getAttribute('data-table-row'));
            const col = Number(currentCell.getAttribute('data-table-col'));
            const nextCellSignal: string = cellMark(row, col);
            onCellPressEnter?.(nextCellSignal, refNode.current.get(nextCellSignal), event);
            return;
        }

        if (!Array.isArray(data) || rootDataInfo === null || spyElement === null || typeof enabled === 'undefined' || enabled === false) return;

        const oldCellSignal = focusableCellId?.replace('cell-', '').split('-');
        let _row = Number(oldCellSignal[0]);
        let _col = Number(oldCellSignal[1]);


        const move = (key: string) => {
  
            switch (key) {
                case 'ArrowLeft':
                case 'Numpad4':
                    _col = _col - 1 < 0 ? 0 : _col - 1;
                break;
                case 'ArrowRight':
                case 'Numpad6':
                    _col = _col + 1 > data.length - 1 ? data.length -1 : _col + 1;
                break;
                case 'ArrowUp':
                case 'Numpad8':
                    _row =  _row - 1 < 0 ? 0 : _row - 1;
                break;
                case 'ArrowDown':
                case 'Numpad2':
                    _row = _row + 1 > rootDataInfo.totalRow - 1 ? rootDataInfo.totalRow - 1 : _row + 1;
                break;
            }

            const nextCellSignal: string = cellMark(_row, _col);
            
            // focus current cell
            removeCellFocusClassName(spyElement);
            spyElement.querySelector(`.${nextCellSignal}`)?.classList.add('cell-focus');

            
            //
            setFocusableCellId(nextCellSignal);

            // callback
            onCellKeyPressed?.(nextCellSignal, refNode.current.get(nextCellSignal), event);
            onKeyDown?.(event);

        };
      
        if (key === 'ArrowLeft' || key === 'Numpad4') {
            move('ArrowLeft');
        }

        if (key === 'ArrowRight' || key === 'Numpad6') {
            move('ArrowRight');
        }

      
        if (key === 'ArrowUp' || key === 'Numpad8') {
            move('ArrowUp');
        }

        if (key === 'ArrowDown' || key === 'Numpad2') {
            move('ArrowDown');
        }

        if (key === 'Enter' || key === 'NumpadEnter') {
            const nextCellSignal: string = cellMark(_row, _col);
            onCellPressEnter?.(nextCellSignal, refNode.current.get(nextCellSignal), event);
        }        

    }, [focusableCellId]);

    useEffect(() => {
        if (enabled) {

            // Initialize custom props of table elements
            initOrderProps(spyElement);
            initRowColProps(spyElement);

            // Update cell ids
            if (Array.isArray(data)) {
                setRootDataInfo({
                    totalRow: data.length
                });
            }
        }
    }, [enabled, spyElement, ...deps]);


    return {
        handleKeyPressed
    };
};

export default useTableKeyPress;

