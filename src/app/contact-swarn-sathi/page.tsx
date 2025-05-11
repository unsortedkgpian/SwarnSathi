"use client";

import ContactMapSection from "@/components/contact-swarn-sathi/ContactMapSection";
import InnerBanner from "@/components/contact-swarn-sathi/InnerBanner";
import NeedHelpSection from "@/components/contact-swarn-sathi/NeedHelpSection";
// import MapSection from '@/components/swarn-sathi-branch-locator/MapSection';

import React from "react";
import Map from "@/components/swarn-sathi-branch-locator/Map";

// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("../../components/contact-swarn-sathi/Map"), {
//     ssr: false,
//     loading: () => <div>Loading Map...</div>,
// });

const sampleLocations = [
    {
        lat: 40.712776,
        lng: -74.005974,
        title: "New York City",
        description: "The Big Apple",
        highlight: true,
        highlightColor: "#FF0000",
    },
    {
        lat: 34.052235,
        lng: -118.243683,
        title: "Los Angeles",
        description: "City of Angels",
    },
    {
        lat: 41.878113,
        lng: -87.629799,
        title: "Chicago",
        highlight: true,
        highlightColor: "#00FF00",
    },
];

const page = () => {
    return (
        <>
            <InnerBanner pageTitle="Contact Us" variant="contact" />
            <ContactMapSection
                title="Get in touch with us."
                description="Visit your nearest branch"
                variant="contact"
            />
            {/* <Map locations={sampleLocations} /> */}
            <NeedHelpSection
                subTitle="You can reach out to us for all your"
                title="Need more help?"
                description="Queries, complaints and feedback. We will be happy to serve you"
                contactMethods={[
                    {
                        iconSrc: "/images/icon/need-help-1.png",
                        iconAlt: "phone icon",
                        title: "Contact",
                        content: "+91-9007711488",
                        hasBr: true,
                    },
                    {
                        iconSrc: "/images/icon/need-help-2.png",
                        iconAlt: "email icon",
                        title: "Help & Support",
                        content: "query@swarnsathi.com",
                        hasBr: true,
                    },
                    {
                        iconSrc: "/images/icon/need-help-3.png",
                        iconAlt: "address icon",
                        title: "Address",
                        content:
                            "2nd floor, 29/5E, Dr Ambedkar Sarani, Topsia More, Kolkata, West Bengal 700046",
                    },
                ]}
            />
        </>
    );
};

export default page;
