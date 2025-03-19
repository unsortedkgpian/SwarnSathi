import BranchInnerBanner from "@/components/swarn-sathi-branch-locator/BranchInnerBanner";
import CounterEducation from "@/components/swarn-sathi-branch-locator/CounterEducation";
import MapSection from '@/components/swarn-sathi-branch-locator/MapSection';
import React from "react";

const page = () => {
    return (
        <>
            <BranchInnerBanner />
            <MapSection />
            <CounterEducation />
        </>
    );
};

export default page;
