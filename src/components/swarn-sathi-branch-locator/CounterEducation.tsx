"use client";

import { useEffect, useRef, useMemo } from "react";
import { CountUp } from "countup.js"; // ✅ Correct Import

interface CounterItem {
    number: number;
    suffix?: string;
    label: string;
}

interface CounterEducationProps {
    title?: string;
    counters?: CounterItem[];
    buttonText?: string;
    imageSrc?: string;
    onButtonClick?: () => void;
}

const CounterEducation = ({
    title = "We believe you are more than a number.",
    counters = [
        { number: 1, suffix: "M+", label: "Loans given" },
        { number: 100, suffix: "+", label: "Customers served" },
        { number: 167, label: "Pincode" },
    ],
    buttonText = "Apply for a Swarn Sathi gold loan",
    imageSrc = "images/details-of-loan-disbursed.png",
    onButtonClick = () => console.log("Apply button clicked"),
}: CounterEducationProps) => {
    // Create an array of refs for counters
    const counterRefs = useRef<HTMLSpanElement[]>([]);

    // Memoizing counters to avoid unnecessary re-renders
    const stableCounters = useMemo(() => counters, [counters]);

    useEffect(() => {
        counterRefs.current.forEach((ref, index) => {
            if (ref) {
                const countUp = new CountUp(ref, stableCounters[index].number, {
                    suffix: stableCounters[index].suffix || "",
                    duration: 2,
                    separator: ",",
                });

                if (!countUp.error) {
                    countUp.start();
                } else {
                    console.error("CountUp error:", countUp.error);
                }
            }
        });
    }, [stableCounters]);

    return (
        <section className="counter-educations">
            <div className="overlay">
                <div className="container wow fadeInUp">
                    <div className="row d-flex align-items-end justify-content-center">
                        <div className="col-lg-5">
                            <div className="img-area">
                                <img
                                    src={imageSrc}
                                    className="max-un"
                                    alt="loan statistics"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 pt-120 pb-120">
                            <div className="section-text">
                                <h2 className="title">{title}</h2>
                            </div>
                            <div className="counter-area mb-60 d-flex align-items-center justify-content-between">
                                {stableCounters.map((counter, index) => (
                                    <div key={index} className="single">
                                        <h3>
                                            <span
                                                ref={(el) => {
                                                    if (el)
                                                        counterRefs.current[
                                                            index
                                                        ] = el;
                                                }}
                                                className="counter"
                                            >
                                                {counter.number}
                                            </span>
                                            {counter.suffix}
                                        </h3>
                                        <p>{counter.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="btn-area">
                                <button
                                    className="cmn-btn"
                                    onClick={onButtonClick}
                                    type="button"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterEducation;
