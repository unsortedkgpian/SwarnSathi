"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./TopBanner.css";
import ModalComponent from "../HandleSubmit";

const TopBanner = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");

    const validatePhoneNumber = async () => {
        const regex = /^[6789]\d{9}$/;
        if (regex.test(phoneNumber)) {
            setValidMessage("✓ Valid number");
            try {
                setIsLoading(true);
                const response = await axios.post(
                    `/api/send-otp`,
                    { phoneNumber: phoneNumber, pincode: "000000" }
                );

                if (response.data) {
                    setValidMessage("OTP sent successfully!");
                    setShowOtpInput(true);
                }
            } catch (err: any) {
                const message =
                    err.response?.data?.message || "Failed to send OTP";
                setValidMessage(message);
                setShowOtpInput(false);
            } finally {
                setIsLoading(false);
            }
        } else {
            setValidMessage(
                "Please enter a valid 10-digit phone number starting with 6,7, 8, or 9"
            );
            setShowOtpInput(false);
        }
    };

    const verifyOtp = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/verify-otp`,
                { phoneNumber: phoneNumber, otp: otp }
            );

            if (response.data) {
                setValidMessage("OTP verified successfully!");
                setShowModal(true);
                setShowOtpInput(false);
            }
        } catch (err: any) {
            const message =
                err.response?.data?.message || "Failed to verify OTP";
            setValidMessage(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="banner-section topbanner" id="applysection">
            <div className="overlay">
                <div className="banner-content d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-7 col-md-10">
                                <div className="main-content">
                                    <div className="top-area section-text justify-content-center">
                                        <h4 className="sub-title">
                                            Simple. Transparent. Secure
                                        </h4>
                                        <h1 style={{ color: "#fda033", textTransform:"capitalize" }}>
                                            Super fast gold loan
                                        </h1>
                                        <p className="xlr">
                                            Customised product designed for all
                                            your financial needs
                                        </p>
                                    </div>
                                    <div className="align-items-center">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12 col-12">
                                                <div className="input-container">
                                                    <div className="phone-prefix">
                                                        +91
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className={`apply-now ${
                                                            validMessage.includes(
                                                                "✓"
                                                            )
                                                                ? "valid"
                                                                : ""
                                                        }`}
                                                        placeholder="Enter your phone number"
                                                        value={phoneNumber}
                                                        onChange={(e) =>
                                                            setPhoneNumber(
                                                                e.target.value.replace(
                                                                    /\D/g,
                                                                    ""
                                                                )
                                                            )
                                                        }
                                                        maxLength={10}
                                                    />
                                                    <button
                                                        className="applybutton cmn-btn inputapply"
                                                        onClick={
                                                            validatePhoneNumber
                                                        }
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading
                                                            ? "Loading..."
                                                            : "Apply now"}
                                                    </button>
                                                </div>
                                                <div className="validation-message">
                                                    {validMessage}
                                                </div>
                                                {showOtpInput && (
                                                    <div className="input-container mt-3">
                                                        <input
                                                            type="text"
                                                            className="apply-now"
                                                            placeholder="Enter OTP"
                                                            value={otp}
                                                            onChange={(e) =>
                                                                setOtp(
                                                                    e.target.value.replace(
                                                                        /\D/g,
                                                                        ""
                                                                    )
                                                                )
                                                            }
                                                            maxLength={6}
                                                        />
                                                        <button
                                                            className="applybutton cmn-btn inputapply"
                                                            onClick={verifyOtp}
                                                            disabled={
                                                                isLoading ||
                                                                otp.length !== 6
                                                            }
                                                        >
                                                            {isLoading
                                                                ? "Verifying..."
                                                                : "Verify OTP"}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="contact-info">
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                        className="contact-icon"
                                                    />
                                                    <span className="callus">
                                                        Call us at{" "}
                                                        <Link
                                                            href="tel:+9103348040009"
                                                            className="contact-link"
                                                        >
                                                            033-4804-0009
                                                        </Link>
                                                    </span>
                                                    <FontAwesomeIcon
                                                        icon={faWhatsapp}
                                                        className="contact-icon"
                                                    />
                                                    <span className="callus">
                                                        WhatsApp{" "}
                                                        <Link
                                                            href="https://wa.me/917044494994"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="contact-link"
                                                        >
                                                            +91-7044494994
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
                phoneNumber={phoneNumber}
            />
        </section>
    );
};

export default TopBanner;
