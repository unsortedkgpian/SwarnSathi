// 'use client';

// import CareerBanner from "@/components/careers/CareerBanner";
// import CareerSingleSection from "@/components/careers/CarrerSingleSection";
// import React from "react";
// import '../globals.css'
// import JobApplicationForm from "@/components/careers/Application";
// import { useSearchParams } from 'next/navigation';

// const CareersPage = () => {
//     const searchParams = useSearchParams();
//     const position = searchParams.get('position');

//     return (
//         <>
//             <CareerBanner />
//             {/* <CareerSingleSection /> */}
//             <JobApplicationForm defaultPosition={position || ''} />
//         </>
//     );"use client";

//     import React, { Suspense } from "react";
//     import CareerBanner from "@/components/careers/CareerBanner";
//     import JobApplicationForm from "@/components/careers/Application";
//     import { useSearchParams } from "next/navigation";

//     const InnerCareersPage = () => {
//         const searchParams = useSearchParams();
//         const position = searchParams.get("position");

//         return (
//             <>
//                 <CareerBanner />
//                 <JobApplicationForm defaultPosition={position || ""} />
//             </>
//         );
//     };

//     const CareersPage = () => {
//         return (
//             <Suspense fallback={<div>Loading...</div>}>
//                 <InnerCareersPage />
//             </Suspense>
//         );
//     };

//     export default CareersPage;

// };

// export default CareersPage;

"use client";

import React, { Suspense } from "react";
import CareerBanner from "@/components/careers/CareerBanner";
import JobApplicationForm from "@/components/careers/Application";
import { useSearchParams } from "next/navigation";

const InnerCareersPage = () => {
    const searchParams = useSearchParams();
    const position = searchParams.get("position");

    return (
        <>
            <CareerBanner />
            <JobApplicationForm defaultPosition={position || ""} />
        </>
    );
};

const CareersPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <InnerCareersPage />
        </Suspense>
    );
};

export default CareersPage;
