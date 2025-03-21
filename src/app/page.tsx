"use client";
import FeaturesSection from "@/components/Homepage/FeaturesSection";
import HowItWorks from "@/components/Homepage/HowItWorks";
import LastTestimonialsSection from "@/components/Homepage/LastTestimonialsSection";
import PartnerSection from "@/components/Homepage/PartnerSection";
import PersonalizedSection from "@/components/Homepage/PersonalizedSection";
import TestimonialsSection from "@/components/Homepage/TestimonialsSection";
import TopBanner from "@/components/Homepage/TopBanner";
import GoldValueCalculator from "@/components/Homepage/GoldValueCalculator";
import { useEffect } from "react";
import { usePreloader } from "@/context/PreloaderContext";

export default function Home() {
    const { setIsLoading } = usePreloader();

        useEffect(() => {
            // Fetch data and hide preloader when done
            fetch("/api/data") // Replace with your actual API
                .then((res) => res.json())
                .then(() => {
                    setIsLoading(false); // Hide preloader when data is fetched
                });
        }, []);
    return (
        <>
            <TopBanner /> 
            <TestimonialsSection />
            <PartnerSection />
            <HowItWorks />
            <FeaturesSection />
            <GoldValueCalculator />
            <PersonalizedSection />
            <LastTestimonialsSection />
        </>
    );
}
