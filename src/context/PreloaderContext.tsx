"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

const PreloaderContext = createContext({
    isLoading: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsLoading: (loading: boolean) => {},
});

export const PreloaderProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ensure that preloader is removed even if API call fails
        const timeout = setTimeout(() => setIsLoading(false), 300); // Max wait time 5s

        return () => clearTimeout(timeout);
    }, []);

    return (
        <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && <div className="preloader" id="preloader"></div>}
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);
