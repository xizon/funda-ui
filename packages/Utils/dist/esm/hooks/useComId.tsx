/**
 * Create an available ID
 * 
*/

import { useId } from "react";

const useComId = () => {
    return `ID-${useId().replace(/\:/g, "-")}`;
};

export default useComId;

