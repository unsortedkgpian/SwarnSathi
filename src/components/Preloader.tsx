"use client";
import "./Preloader.css";

import { useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching (replace with real API call)
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulating 3s delay
    }, []);

    if (!isLoading) return null; // Hide preloader after loading is done

    return <div className="preloader" id="preloader"></div>;
};

export default Preloader;
