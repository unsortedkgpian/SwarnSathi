"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const HowItWorks = () => {
    const [steps, setSteps] = useState<Step[]>([]);
    const url = process.env.NEXT_PUBLIC_API_URL;
    console.log(url);
    // Define the steps data
    interface Step {
        howWorksIcon: string;
        icon: string;
        title: string;
        description: string;
    }

    useEffect(() => {
        const fetchSteps = async () => {
            try {
                const response = await axios.get(url + "/api/hiws");
                // Map the response data with static howWorksIcons
                const howWorksIcons = [
                    "/images/howitworks1.svg",
                    "/images/howitworks2.svg",
                    "/images/howitworks3.svg",
                    "/images/howitworks4.svg",
                ];

                // const mappedSteps = response.data.map(
                //     (step: unknown, index: number) => ({
                //         howWorksIcon: howWorksIcons[index],
                //         icon: step.icon,
                //         title: step.title,
                //         description: step.description,
                //     })
                // );

                const mappedSteps = response.data.map(
                    (step: any, index: number) => ({
                        howWorksIcon: howWorksIcons[index],
                        icon: (step as { icon: string }).icon,
                        title: (step as { title: string }).title,
                        description: (step as { description: string })
                            .description,
                    })
                );

                setSteps(mappedSteps);
            } catch (error) {
                console.error("Error fetching steps data:", error);
                // Fallback data in case of error
                setSteps([
                    {
                        howWorksIcon: "/images/howitworks1.svg",
                        icon: "/images/icon/get-loan-1.png",
                        title: "Visit us",
                        description:
                            "Identify our nearest partner and pay a visit there",
                    },
                    {
                        howWorksIcon: "/images/howitworks2.svg",
                        icon: "/images/icon/get-loan-2.png",
                        title: "Gold valuation",
                        description: "Get you jewellery valued by an expert",
                    },
                    {
                        howWorksIcon: "/images/howitworks3.svg",
                        icon: "/images/icon/get-loan-3.png",
                        title: "Paper work",
                        description: "Provide KYC and fill up the paperwork",
                    },
                    {
                        howWorksIcon: "/images/howitworks4.svg",
                        icon: "/images/icon/how-works-4.png",
                        title: "Amount disbursal",
                        description:
                            "Get the fund either directly in account or in cash",
                    },
                ]);
            }
        };

        fetchSteps();
    }, []);

    return (
        <section className="account-feature get-loan home-loan howitworkshome">
            <div className="overlay pt-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-header topheader text-center">
                                <h5 className="sub-title ">
                                    A better way to get loan
                                </h5>
                                <h2
                                    className="title"
                                    style={{
                                        textTransform: "capitalize",
                                        fontWeight: "600 !important",
                                    }}
                                >
                                    How it works
                                </h2>
                                <p>
                                    It&apos;s easier than you think. Follow the
                                    following simple easy steps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        {steps.map((step, index) => (
                            <div key={index} className="col-lg-3 col-12">
                                <div className="single-box howworkshome">
                                    <div className="icon-box iconhowboxhome">
                                        <img
                                            src={step.howWorksIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    <div className="icon-box">
                                        <img
                                            src={`${url}/${step.icon}`}
                                            alt="icon"
                                        />
                                    </div>
                                    <h5 style={{ textTransform: "capitalize" }}>
                                        {step.title}
                                    </h5>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
