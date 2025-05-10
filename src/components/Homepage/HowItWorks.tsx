"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Step {
    howWorksIcon: string;
    icon: string;
    title: string;
    description: string;
    link?: string; // Optional link
}

const HowItWorks = () => {
    const [steps, setSteps] = useState<Step[]>([]);
    const url = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchSteps = async () => {
            try {
                const response = await axios.get(`${url}/api/hiws`);
                const howWorksIcons = [
                    "/images/howitworks1.svg",
                    "/images/howitworks2.svg",
                    "/images/howitworks3.svg",
                    "/images/howitworks4.svg",
                ];

                const mappedSteps: Step[] = response.data.map((step: any, index: number) => {
                    const common = {
                        howWorksIcon: howWorksIcons[index],
                        icon: step.icon,
                        title: step.title,
                        description: step.description,
                    };
                    // Only add link for first two steps
                    if (index === 0) return { ...common, link: "/swarn-sathi-branch-locator" };
                    if (index === 1) return { ...common, link: "/gold-valuation" };
                    return common;
                });

                setSteps(mappedSteps);
            } catch (error) {
                console.error("Error fetching steps data:", error);
                setSteps([
                    {
                        howWorksIcon: "/images/howitworks1.svg",
                        icon: "/images/icon/get-loan-1.png",
                        title: "Visit us",
                        description: "Identify our nearest partner and pay a visit there",
                        link: "/swarn-sathi-branch-locator",
                    },
                    {
                        howWorksIcon: "/images/howitworks2.svg",
                        icon: "/images/icon/get-loan-2.png",
                        title: "Gold valuation",
                        description: "Get your jewellery valued by an expert",
                        link: "/gold-valuation",
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
                        description: "Get the fund either directly in account or in cash",
                    },
                ]);
            }
        };

        fetchSteps();
    }, []);

    return (
        <section className="account-feature get-loan home-loan howitworkshome">
            <div className="overlay pt-120">
                <div className="container wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-header topheader text-center">
                                <h5 className="sub-title">A better way to get loan</h5>
                                <h2 className="title" style={{ textTransform: "capitalize", fontWeight: 600 }}>
                                    How it works
                                </h2>
                                <p>It's easier than you think. Follow the following simple easy steps</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        {steps.map((step, index) => {
                            const cardContent = (
                                <div className="single-box howworkshome">
                                    <div className="icon-box iconhowboxhome">
                                        <img src={step.howWorksIcon} alt="how it works icon" />
                                    </div>
                                    <div className="icon-box">
                                        <img src={`${url}/${step.icon}`} alt="step icon" />
                                    </div>
                                    <h5 style={{ textTransform: "capitalize" }}>{step.title}</h5>
                                    <p>{step.description}</p>
                                </div>
                            );

                            return (
                                <div key={index} className="col-lg-3 col-12">
                                    {step.link ? (
                                        <Link href={step.link}>
                                        <div className="text-black no-underline">
                                          {cardContent}
                                        </div>
                                      </Link>
                                    ) : (
                                        cardContent
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
