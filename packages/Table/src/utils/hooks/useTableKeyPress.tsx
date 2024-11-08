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
        onCellKeyPressed
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
    onKeyDown
}: UseTableKeyPressProps, deps: any[]) => {
   
    const handleKeyPressed = useCallback( async (event: KeyboardEvent<HTMLTableCellElement>) => {
        if (!Array.isArray(data) || rootDataInfo === null || spyElement === null || typeof enabled === 'undefined' || enabled === false) return;

        const key = event.code;
        const oldCellSignal = focusableCellId?.replace('cell-', '').split('-');
        let _row = Number(oldCellSignal[0]);
        let _col = Number(oldCellSignal[1]);


        const move = (key: string) => {
  
            switch (key) {
                case 'ArrowLeft':
                    _col = _col - 1 < 0 ? 0 : _col - 1;
                break;
                case 'ArrowRight':
                    _col = _col + 1 > data.length - 1 ? data.length -1 : _col + 1;
                break;
                case 'ArrowUp':
                    _row =  _row - 1 < 0 ? 0 : _row - 1;
                break;
                case 'ArrowDown':
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
      
        if (key === 'ArrowLeft') {
            move('ArrowLeft');
        }

        if (key === 'ArrowRight') {
            move('ArrowRight');
        }

      
        if (key === 'ArrowUp') {
            move('ArrowUp');
        }

        if (key === 'ArrowDown') {
            move('ArrowDown');
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

