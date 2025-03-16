'use client'
import BusinessLoanSection from "@/components/BusinessLoanSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import LastTestimonialsSection from "@/components/LastTestimonialsSection";
import PartnerSection from "@/components/PartnerSection";
import PersonalizedSection from "@/components/PersonalizedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TopBanner from "@/components/TopBanner";
// import { Tenor_Sans } from "next/font/google";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header />
            <TopBanner />
            <TestimonialsSection />
            <PartnerSection />
            <HowItWorks />
            <FeaturesSection />
            <BusinessLoanSection />
            <PersonalizedSection />
            <LastTestimonialsSection />
            {/* <Footer /> */}
            <FooterSection/>
        </>
    );
}
