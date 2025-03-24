"use client";
import { useEffect } from "react";

const BootstrapClient = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const popoverTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="popover"]')
            );
            popoverTriggerList.map((popoverTriggerEl) => {
                return new window.bootstrap.Popover(popoverTriggerEl);
            });
        }
    }, []);

    return null; // This component only runs an effect, so no need to return JSX
};

export default BootstrapClient;
