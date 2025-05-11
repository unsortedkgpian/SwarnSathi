// 'use client'
import FaqSection from "@/components/schemes/FaqSection";
import FeaturesSectionSchemes from "@/components/schemes/FeaturesSectionSchemes";
import HowItWorks from "@/components/Homepage/HowItWorks";
import LoanCalculation from "@/components/schemes/LoanCalculation";
import React from "react";

const Schemes = () => {
    return (
        <>
            {/* <LoanCalculation /> */}
            <FeaturesSectionSchemes />
            <HowItWorks />
            <FaqSection />
        </>
    );
};

export default Schemes;
