import CareerBanner from "@/components/careers/CareerBanner";
import CareerSingleSection from "@/components/careers/CarrerSingleSection";
import React from "react";
import '../globals.css'
import JobApplicationForm from "@/components/careers/Application";

const page = () => {
    return (
        <>
            <CareerBanner />
            <CareerSingleSection />
            <JobApplicationForm/>
        </>
    );
};

export default page;
