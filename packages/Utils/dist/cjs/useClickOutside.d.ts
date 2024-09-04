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
import { PointerEvent } from 'react';
export interface UseClickOutsideProps {
    enabled: boolean;
    isOutside: any;
    handle: (event: PointerEvent) => void;
    spyElement?: any;
}
declare function useClickOutside({ enabled, isOutside, handle, spyElement, }: UseClickOutsideProps, deps: any[]): void;
export default useClickOutside;
