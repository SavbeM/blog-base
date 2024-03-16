import {useEffect, useState} from "react";
import {WindSize} from "@/types/types";

export function useWindowSize() {

    const [windowSize, setWindowSize] = useState<WindSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}