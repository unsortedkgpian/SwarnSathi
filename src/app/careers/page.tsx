'use client';

import CareerBanner from "@/components/careers/CareerBanner";
import CareerSingleSection from "@/components/careers/CarrerSingleSection";
import React from "react";
import '../globals.css'
import JobApplicationForm from "@/components/careers/Application";
import { useSearchParams } from 'next/navigation';

const CareersPage = () => {
    const searchParams = useSearchParams();
    const position = searchParams.get('position');

    return (
        <>
            <CareerBanner />
            {/* <CareerSingleSection /> */}
            <JobApplicationForm defaultPosition={position || ''} />
        </>
    );
};

export default CareersPage;
