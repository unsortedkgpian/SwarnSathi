'use client'
import { useEffect, useState } from "react";

const AboutSection = () => {
    const [locationCount, setLocationCount] = useState(0);
    const [isNarrow, setIsNarrow] = useState(false);
    
    useEffect(() => {
    const handleResize = () => {      
        setIsNarrow(window.innerWidth > 991);       
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store-locations`);
                const data = await response.json();
                
                // Count the number of unique locations, pincodes, and partners
                if (data && Array.isArray(data)) {
                    setLocationCount(data.length);
                    
                }
            } catch (error) {
                console.error("Error fetching location data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <section className="about-section" id="our-company">
            <div className="overlay pt-120 pb-210">
                <div className="container wow fadeInUp">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-area">
                                <h5 className="sub-title">About us</h5>
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    We are here to help you achieve financial
                                    freedom!
                                </h2>
                                <p>
                                    We have a vision to extend credit support to
                                    the underbanked in Tier 3, 4 cities and
                                    rural parts of Eastern India by providing
                                    instant funds to the people who don&apos;t
                                    have any formal access to credit support.
                                    Consider us for any kind of financial needs
                                    that you might be in. We are here to be your
                                    partner in your celebration, your struggle.
                                </p>
                            </div>
                            <div className="row cus-mar ">
                                <div className={`col-xl-4 col-md-4 w-full ${isNarrow ? "d-flex":"" }`}>
                                    <div className="count-content text-center">
                                        <div className="count-number">
                                            <h4 className="counter" style={{ fontWeight: 800 }}>{locationCount}</h4>
                                        </div>
                                        <p>Locations covered</p>
                                    </div>
                                </div>
                                <div className={`col-xl-4 col-md-4 w-full ${isNarrow ? "d-flex":"" }`}>
                                    <div className="count-content text-center ">
                                        <div className="count-number ">
                                            <h4 className="counter" style={{ fontWeight: 800 }}>175</h4>
                                        </div>
                                        <p>Pincode covered</p>
                                    </div>
                                </div>
                                <div className={`col-xl-4 col-md-4 w-full ${isNarrow ? "d-flex":"" }`}>
                                    <div className="count-content text-center">
                                        <div className="count-number ">
                                            <h4 className="counter" style={{ fontWeight: 800 }}>2</h4>
                                        </div>
                                        <p>Partner shops</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    className="img-1"
                                    src="/images/building-for-web.png"
                                    alt="Company building"
                                />
                                <img
                                    className="img-3"
                                    src="/images/branchall.png"
                                    alt="Branch network"
                                />
                                <img
                                    className="img-2"
                                    src="/images/office.webp"
                                    alt="Branch locations"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
