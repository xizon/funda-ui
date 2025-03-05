/**
 * Session StorageListener
 * 
 * @usage:

const App = () => {
    const myValue = useSessionStorageListener("myKey");

    useEffect(() => {
    console.log("sessionStorage change:", myValue);
    }, [myValue]);
};

 */
import { useEffect, useState } from "react";

const useSessionStorageListener = (key: string) => {
    const [value, setValue] = useState(sessionStorage.getItem(key) || "");

    useEffect(() => {
        const handleStorageChange = (event: Event) => {
            if (event instanceof CustomEvent && event.detail.key === key) {
                setValue(event.detail.value);
            }
        };

        window.addEventListener("sessionStorageChange", handleStorageChange);

        return () => window.removeEventListener("sessionStorageChange", handleStorageChange);
    }, [key]);

    return value;
};

// interception sessionStorage.setItem
const originalSetItem = sessionStorage.setItem;
sessionStorage.setItem = function (key, value) {
    const event = new CustomEvent("sessionStorageChange", {
        detail: { key, value },
    });
    window.dispatchEvent(event);
    originalSetItem.apply(this, [key, value]);
};

export default useSessionStorageListener;