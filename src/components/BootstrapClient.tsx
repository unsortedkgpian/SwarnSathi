// "use client";

// import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensures Bootstrap JS is loaded

// export default function BootstrapClient() {
//     useEffect(() => {
//         <>
            
//         </>
//     }, []);

//     return null;
// }



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
