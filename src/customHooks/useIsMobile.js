import { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowSize";

const useIsMobile = () => {
    const { width } = useWindowDimensions();
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (width < 870) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [width]);
    return isMobile;
};

export default useIsMobile;
