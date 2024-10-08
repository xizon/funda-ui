/**
 * Handles the event of clicking outside of the wrapped component
 * 
 * @usage:

const App = () => {

    const [show, setShow] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside({
        enabled: show && dropdownRef.current,
        isOutside: (event: any) => {
            return event.target.closest(`.test__wrapper`) === null && event.target.closest(`.test__wrapper2`) === null;
        },
        handle: (event: any) => {
            // do something
            //...
        },
        spyElement: document
    }, [show, dropdownRef]);
};

 */
import { useEffect, useRef, PointerEvent } from 'react';

export interface UseClickOutsideProps {
    enabled: boolean;
    isOutside: any;
    handle: (event: PointerEvent) => void;
    spyElement?: any;
}

function useClickOutside({
    enabled,
    isOutside,
    handle,
    spyElement = typeof document === 'undefined' ? null : document,
}: UseClickOutsideProps, deps: any[]) {
    const isOutsideRef = useRef<(event: PointerEvent) => boolean>(isOutside);
    const handleRef = useRef<(event: PointerEvent) => void>(handle);

    useEffect(() => {
        isOutsideRef.current = isOutside;

        // fix possible issue if clicking on a focusable element
        handleRef.current = handle;
    }, [isOutside, handle]);

    useEffect(() => {
        if (enabled) {
            const eventHandler: any = (event: PointerEvent) => {
                if (isOutsideRef.current?.(event)) {
                    handleRef.current?.(event);
                }
            };

            spyElement?.addEventListener('pointerdown', eventHandler);

            return () => {
                spyElement?.removeEventListener('pointerdown', eventHandler);
            };
        }
    }, [enabled, ...deps]);
}


export default useClickOutside;

