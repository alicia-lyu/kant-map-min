import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
            console.log("Window size changes: %d, %d", window.innerWidth, window.innerHeight);
        }
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
