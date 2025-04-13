'use client'
import { useState, useEffect } from "react";
import BranchInnerBanner from "@/components/swarn-sathi-branch-locator/BranchInnerBanner";
import CounterEducation from "@/components/swarn-sathi-branch-locator/CounterEducation";
import MapSection from "@/components/swarn-sathi-branch-locator/MapSection";
import React from "react";
import Map from "@/components/swarn-sathi-branch-locator/Map";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("../../components/contact-swarn-sathi/Map"), {
//     ssr: false,
//     loading: () => <div>Loading Map...</div>,
// });

interface Location {
    lat: number;
    lng: number;
    title: string;
    description: string;
    highlight?: boolean;
    highlightColor?: string;
}

const sampleLocations = [
    {
        lat: 22.54166015314027,
        lng: 88.38682666137262,
        title: "Swarn Sathi",
        description: "Fintech",
        highlight: true,
        highlightColor: "#FF0000",
        
    },
];

const page = () => {
    const [locationData, setLocationData] = useState<Location[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store-locations`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data);
                
                const formattedLocations = data.map((location: any) => ({
                    lat: Number(location.longitude), // Swap these values
                    lng: Number(location.latitude),  // Swap these values
                    title: location.name,
                    description: location.description,
                    highlight: true,
                    highlightColor: "#FF0000"
                }));
                console.log('Formatted Locations:', formattedLocations);
                setLocationData(formattedLocations);
            } catch (error) {
                console.error('Error fetching locations:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLocationData();
    }, []);

    return (
        <>
            <BranchInnerBanner />
            {/* <MapSection /> */}
            {/* <div style={{width:"300px", display:"flex", justifyContent:"center", justifyItems:"center"}}>

            <Map locations={sampleLocations} />
            </div> */}
            <div
                style={{
                    marginTop: "100px",
                }}
            >
                <div className="section-header text-center">
                    <h2
                        className="title"
                        style={{ textTransform: "capitalize" }}
                    >
                        Find our branches and partner shops
                    </h2>
                    <p>
                        You are welcome to visit us at any time or reach us
                        through whatsapp, mail or telephone
                    </p>
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "220px",
                    }}
                >
                    <div
                        style={{
                            width: "900px",
                            height: "600px", // Square map
                            borderRadius: "8px", // Optional
                            overflow: "hidden",
                            padding: "30px",
                            boxShadow: "6px 7px 20px 0px #fc9f3e61",
                        }}
                    >
                        {isLoading ? (
                            <div>Loading map...</div>
                        ) : (
                            <Map locations={locationData} />
                        )}
                    </div>
                </div>
            </div>

            <CounterEducation />
        </>
    );
};

export default page;
