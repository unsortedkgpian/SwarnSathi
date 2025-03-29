"use clinet";

import React, { useState } from "react";
import ModalComponent from "../HandleSubmit";

const FeaturesSection: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loanType, setLoanType] = useState("gold-loan"); // Default loan type

    const applyNow = (type: string) => {
        // Set the loan type and show the modal
        setLoanType(type);
        setShowModal(true);
        console.log(`Apply now clicked for ${type}`);
    };

    const checkIcon = (
        <span className="check d-flex align-items-center justify-content-center">
            <img src="/images/icon/check.png" alt="icon" />
        </span>
    );

    return (
        <section className="features-section">
            <div className="overlay pt-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Why choose Swarn Sathi gold loan
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Instant loan approval
                                </h2>
                                <p>
                                The loan amount is disbursed instantly upon completion of the process.
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                        We ensure complete transparency with no hidden charges and require only minimal           documentation for a hassle-free experience.
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={() => applyNow("instant-gold-loan")}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="img-area">
                                <img
                                    src="/images/Instant-loan-approval.png"
                                    alt="image" width="70%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="/images/Security-with-no-compromises.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    IOT enabled bank grade security
                                </h2>
                                <p>
                                We prioritize the safety of your assets with advanced IoT-powered security. Your gold jewellery is securely stored in Swarn Sathi vault or partner bank vaults, ensuring maximum protection.
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                        Rest assured, your gold will be returned to you in its original condition. Your peace of mind is our commitment.
                                        </span>
                                    </li>
                                    
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={() => applyNow("secured-gold-loan")}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Free insurance on the asset
                                </h2>
                                <p>
                                Your gold jewellery is fully insured, ensuring complete protection and peace of mind. We also provide free transit insurance for added security.
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Your gold jewelries are fully
                                            insured
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>Free transit insurance</span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={() => applyNow("insured-gold-loan")}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    src="/images/Free-Insurance-on-the-asset.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="/images/hassle-free-payments.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Hassle free repayment
                                </h2>
                                <p>
                                We value your time and convenience, which is why we have simplified the repayment    process for you. There is no need to visit our branches—now you can repay your dues   effortlessly from the comfort of your home.
                                

                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                        Make payments seamlessly using any UPI application, digital wallets, or net banking.
                                        </span>
                                    </li>
                                    
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={() => applyNow("flexible-repayment-loan")}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
                phoneNumber={phoneNumber}
                loanType={loanType}
            />
        </section>
    );
};

export default FeaturesSection;
