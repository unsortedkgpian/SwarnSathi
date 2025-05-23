import { useEffect, useRef, useMemo, useState } from "react";
import { CountUp } from "countup.js"; // ✅ Correct Import
import ModalComponent from "../HandleSubmit";
import { useRouter } from "next/navigation";
import { useContact } from "@/context/ContactContext";


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
}

const CounterEducation = ({
    title = "We believe you are more than a number.",
    counters = [
        { number: 5, suffix: "Cr+", label: "Loans given" },
        { number: 1000, suffix: "+", label: "Customers served" },
        { number: 167, label: "Pincode Covered" },
    ],
    buttonText = "Apply for a Swarn Sathi gold loan",
    imageSrc = "images/details-of-loan-disbursed.png",
}: CounterEducationProps) => {
    
    const router = useRouter();
    const { loading } = useContact();
    const [showModal, setShowModal] = useState(false);
    const url = process.env.NEXT_PUBLIC_API_URL || "";
    // Create an array of refs for counters
    const counterRefs = useRef<HTMLSpanElement[]>([]);
    // Memoizing counters to avoid unnecessary re-renders
    const stableCounters = useMemo(() => counters, [counters]);
    // Render conditionals for loading states
    // if (loading) return <p className="text-center p-4">Loading...</p>;
    // Create an array of refs for counters


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

    

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleApply = () => {
    // Check authentication status
    // const token = localStorage.getItem('token');
    
    // if (!token) {
    //   // User is logged-out
    //    router.push('/login');
    // } else{
        setShowModal(true);
    // }
}

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
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {title}
                                </h2>
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
                                            />
                                            {/* Removed the manual suffix rendering here */}
                                        </h3>
                                        <p>{counter.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="btn-area">
                                <button
                                    className="cmn-btn"
                                    onClick={handleApply}
                                    type="button"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                show={showModal}
                onClose={handleModalClose}
            />
        </section>
    );
};

export default CounterEducation;
