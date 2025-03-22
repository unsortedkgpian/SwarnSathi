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
            <img src="images/icon/check.png" alt="icon" />
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
                                    The loan amount is instantly provided to you
                                    once the process is completed
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            No hidden charges whatsoever
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>Minimum documentation</span>
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
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/Instant-loan-approval.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/Security-with-no-compromises.png"
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
                                    All your assets are safe with us. Your peace
                                    of mind is our utmost priority. You can go
                                    to bed without worrying about losing your
                                    assets
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Your gold jewelleries are kept in
                                            IOT powered Swarn Sathi vaults or
                                            partner Bank vaults
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Take back your gold in their exact
                                            conditions
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
                                    Your jewellery is insured fully. Our
                                    priority is your peace of mind
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
                                    src="https://swarnsathi.com/images/Free-Insurance-on-the-asset.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/hassle-free-payments.png"
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
                                    Why do you have to visit our branches
                                    everytime you plan to repay the amount? We
                                    don't want that. So we have made repayment
                                    easy for you. Pay now at the comfort of your
                                    home
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Repay with any UPI application
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Wallets and Netbanking also accepted
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
