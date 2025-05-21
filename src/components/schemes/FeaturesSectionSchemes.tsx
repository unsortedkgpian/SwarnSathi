// FeaturesSectionSchema.tsx
"use client";
import Image from "next/image";
import ModalComponent from "../HandleSubmit";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Add this import




const FeaturesSectionSchemes = () => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter(); // Initialize router
    const features = [
        {
            title: "0% Interest for the first month",
            description:
                "For the first month you don't have to pay any interest. Pay only EMI or not!",
            imageSrc: "/images/Zero-percent-inerest.png",
            imageAlt: "0% interest",
            applyClass: "applyloan",
        },
        {
            title: "Instant fund disbursal within 30 minutes",
            description:
                "You will not have to wait more than 30 minutes to get the fund. Funds will be either credited to your account or you can avail quick cash upto Rs. 1,99,999",
            imageSrc: "/images/Instant-disbursal.png",
            imageAlt: "Instant disbursal",
            applyClass: "applyloan",
        },
        {
            title: "Minimal documentation",
            description:
                "Your KYC, PAN and Bank passbook is all that is needed to approve the loan. No unnecessary documentation or formalities",
            imageSrc: "/images/Minimal-documentation.png",
            imageAlt: "Minimal documentation",
            applyClass: "applyloan",
        },
        {
            title: "No processing charges",
            description:
                "Unlike other loans, there are no processing charges for availing gold loans. Take away the entire amount that’s been approved",
            imageSrc: "/images/No-processing-fee.png",
            imageAlt: "No processing fee",
            applyClass: "applyloan",
        },
        {
            title: "No credit score required",
            description:
                "We don’t require your credit history. If you have gold jewellery or ornaments, that will be enough for you to get instant credit approval",
            imageSrc: "/images/no-credit-score-required.png",
            imageAlt: "No credit score required",
            applyClass: "",
        },
    ];

    const handleApplyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        // router.push('/login');
        
        // Check if user is logged in (using localStorage token)
        // const token = localStorage.getItem('token');
        
        // if (!token) {
        //     // Redirect to login if not authenticated
        //     router.push('/login');
        // } else {
        //     // Show modal if authenticated
        //     setShowModal(true);
        // }
        setShowModal(true);
    };

    return (
        <section className="features-section">
            <div className="overlay pt-120">
                <div className="container wow fadeInUp">
                    {features.map((feature, index) => (
                        <div className="row mb-5" key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    {/* Text Column */}
                                    <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center cus-ord">
                                        <div className="top-section">
                                            <h2
                                                className="title"
                                                style={{
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                {feature.title}
                                            </h2>
                                            <p>{feature.description}</p>
                                            <a
                                                href="#"
                                                className={`applybutton cmn-btn inputapply mt-4 ${feature.applyClass}`}
                                                onClick={handleApplyNow}
                                            >
                                                Apply now
                                            </a>
                                        </div>
                                    </div>
                                    {/* Image Column */}
                                    <div className="col-lg-6 text-center">
                                        <div className="img-area">
                                            <Image
                                                src={feature.imageSrc}
                                                alt={feature.imageAlt}
                                                width={350}
                                                height={210}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Image Column */}
                                    <div className="col-lg-6 text-center">
                                        <div className="img-area">
                                            <Image
                                                src={feature.imageSrc}
                                                alt={feature.imageAlt}
                                                width={350}
                                                height={210}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    {/* Text Column */}
                                    <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center cus-ord">
                                        <div className="top-section">
                                            <h2 className="title">
                                                {feature.title}
                                            </h2>
                                            <p>{feature.description}</p>
                                            <a
                                                href="#"
                                                className={`applybutton cmn-btn inputapply mt-4 ${feature.applyClass}`}
                                                onClick={handleApplyNow}
                                            >
                                                Apply now
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </section>
    );
};

export default FeaturesSectionSchemes;