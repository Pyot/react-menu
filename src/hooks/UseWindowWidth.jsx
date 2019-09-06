import { useEffect, useState } from 'react';

//It returns dynamically window width.
export const useWindowWidth = () => {
    const isClient = typeof window === 'object';

    const getSize = () => isClient ? window.innerWidth : undefined;

    const [windowWidth, setWindowWidth] = useState(getSize);
    
    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowWidth(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return windowWidth;
}
