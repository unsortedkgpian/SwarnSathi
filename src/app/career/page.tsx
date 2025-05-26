"use client";

import React, { Suspense } from "react";
import CareerBanner from "@/components/careers/CareerBanner";
import CareersSection from '@/components/about-swarn-sathi/CareersSection'
import { useSearchParams } from "next/navigation";

const InnerCareersPage = () => {
    const searchParams = useSearchParams();
    const position = searchParams.get("position");

    return (
        <>
            {/* <CareersSection/> */}
            <CareerBanner />
            <CareersSection/>
            {/* <JobApplicationForm defaultPosition={position || ""} /> */}
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