import { useEffect, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

export const useIsMobile = () => {
  const { width } = useScreenWidth();
  const [isMobile, setIsMobile] = useState(width < 720);

  useEffect(() => {
    if (width < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return { isMobile };
};
