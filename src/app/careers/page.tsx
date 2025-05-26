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
import CareersSection from '@/components/about-swarn-sathi/CareersSection'
import { useSearchParams } from "next/navigation";

const InnerCareersPage = () => {
    const searchParams = useSearchParams();
    const position = searchParams.get("position");

    return (
        <>
            {/* <CareersSection/> */}
            <CareerBanner />
            {/* <CareersSection/> */}
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

// // import AboutBanner from '@/components/about-swarn-sathi/AboutBanner'
// // import AboutSection from '@/components/about-swarn-sathi/AboutSection';
// import CareersSection from '@/components/about-swarn-sathi/CareersSection';
// // import CoreValues from '@/components/about-swarn-sathi/CoreValues';
// // import TeamSection from '@/components/about-swarn-sathi/TeamSection';
// // import ContactUs from '@/components/about-swarn-sathi/ContactUs';
// import React from 'react'

// const page = () => {
//   return (
//       <>
//           {/* <AboutBanner />
//           <AboutSection />
//           <CoreValues />
//           <TeamSection /> */}
//           <CareersSection/>
//           {/* <ContactUs/> */}
//       </>
//   )
// }

// export default page;
