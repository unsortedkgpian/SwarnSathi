"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./TopBanner.css";
import ModalComponent from "../HandleSubmit";
import { useRouter } from "next/navigation";
import { useContact } from "@/context/ContactContext";

const TopBanner = () => {
    const router = useRouter();
    const { contact, loading } = useContact();

    // State variables
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");
    const [genOtp, setGenOtp] = useState("");
    const url = process.env.NEXT_PUBLIC_API_URL || "";

    // Render conditionals for loading states
    if (loading) return <p className="text-center p-4">Loading...</p>;

    // Get contact info
    // const contactInfo = contact || {};
    const phone = contact.phone || "";
    const telephone = contact.telephone || "";
    const urlo = `https://wa.me/91${phone}#${telephone}`;

    const validatePhoneNumber = async () => {
        const regex = /^[6789]\d{9}$/;
        if (!regex.test(phoneNumber)) {
            setValidMessage(
                "Please enter a valid 10-digit number starting with 6,7,8, or 9"
            );
            return;
        }

        try {
            setIsLoading(true);
            setValidMessage("Sending OTP...");

            // Use the correct API endpoint
            const apiEndpoint = `/api/send-otp`;
            console.log("Sending OTP request to:", apiEndpoint);

            const response = await axios.post(apiEndpoint, {
                phone: phoneNumber,
                type: "gold_loan",
            });
            console.log("response from /api/send-otp");
            console.log(response);
            if (response.data.success) {
                setValidMessage("✓ OTP sent successfully!");
                setShowOtpInput(true);
                setGenOtp(response.data.genOtp);
            } else {
                setValidMessage(response.data?.message || "Failed to send OTP");
            }
        } catch (err) {
            console.error("Error sending OTP:", err);
            setValidMessage(
                err.response?.data?.message ||
                "Failed to send OTP. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const verifyOtp = async () => {
        console.log("here atleast");
        if (!/^\d{6}$/.test(otp)) {
            setValidMessage("Please enter a valid 6-digit OTP");
            return;
        }
        console.log("---1---");

        try {
            console.log("---2---");
            setIsLoading(true);
            setValidMessage(""); // Clear previous messages

            // Step 1: Verify OTP
            const verifyResponse = await axios.post(`/api/verify-otp`, {
                phoneNumber: phoneNumber, // ✅ Corrected key
                otp,
                genOtp,
            });
            console.log("---3---");
            console.log({ verifyResponse });

            if (!verifyResponse.data.success) {
                setValidMessage(verifyResponse.data.message || "Invalid OTP");
                return;
            }
            console.log("---4---");
            setValidMessage("✓ OTP verified successfully!");

            // Step 2: Registration
            const registrationResponse = await axios.post(
                `${url}/api/registration`,
                {
                    phone: phoneNumber,
                    type: "gold_loan",
                    name: "gold_name",
                }
            );
            console.log("---5---");
            if (!registrationResponse.data.success) {
                setValidMessage(
                    registrationResponse.data?.message || "Registration failed"
                );
                return;
            }
            console.log("---6---");
            setValidMessage("Registration successful!");
            setShowModal(true);
            setShowOtpInput(false);
        } catch (err) {
            console.error("Error during verification/registration:", err);
            setValidMessage(
                err.response?.data?.message ||
                err.message ||
                "Verification failed. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        router.push("/");
    };

    const handleApply = () => {
    // Check authentication status
    const token = localStorage.getItem('token');
    
    if (token) {
      // User is logged in - redirect to dashboard
      router.push('/dashboard');
    } else {
      // User not logged in - redirect to login
      router.push('/login');
    }
}

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
                                        <h1
                                            style={{
                                                color: "#fda033",
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Super fast gold loan
                                        </h1>
                                         <p
                                                style={{
                                                    fontSize: "17px",
                                                    fontWeight: "500",
                                                    lineHeight: "1.5",
                                                    color: "##0f0f0f", // Slightly darker if needed for readability
                                                    marginTop: "0.5rem"
                                                }}
                                                >
                                            Customised product designed for all
                                            your financial needs
                                        </p>
                                    </div>

                                    <div >
                                                    <button 
                                                        className="applybutton cmn-btn inputapply"
                                                        onClick={handleApply}
                                                        style={{
                                                                    marginRight: "10px",
                                                                }}
                                                    >
                                                        Apply Now
                                                    </button>
                                                </div>
                                    <div className="contact-info mt-2 m-2" >
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faPhone}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">                                                            
                                                            <Link
                                                                href={`tel:+91${telephone}`}
                                                                className="contact-link"
                                                            >
                                                                {telephone ||
                                                                    "Contact Number"}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faWhatsapp}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">                                                           
                                                            <Link
                                                                href={urlo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="contact-link"
                                                            >
                                                                +91-
                                                                {phone ||
                                                                    "WhatsApp Number"}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                    {/* <div className="align-items-center">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12 col-12">
                                                {
                                                    !showOtpInput && (
                                                        <div
                                                            className="input-container"
                                                            style={{
                                                                background: "#8ed7fddd",
                                                            }}
                                                        >
                                                            <div className="phone-prefix">
                                                                +91
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className={`apply-now ${validMessage.includes(
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
                                                                style={{
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                {isLoading
                                                                    ? "Loading..."
                                                                    : "Apply now"}
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                                <div className="validation-message">
                                                    {validMessage}
                                                </div>
                                                {showOtpInput && (
                                                    <div
                                                        className="input-container"
                                                        style={{
                                                            background:
                                                                "#8ed7fddd",
                                                        }}
                                                    >
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
                                                            style={{
                                                                marginRight: "10px",
                                                            }}
                                                        >
                                                            {isLoading
                                                                ? "Verifying..."
                                                                : "Verify OTP"}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="contact-info" >
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faPhone}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">                                                            
                                                            <Link
                                                                href={`tel:+91${telephone}`}
                                                                className="contact-link"
                                                            >
                                                                {telephone ||
                                                                    "Contact Number"}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faWhatsapp}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">                                                           
                                                            <Link
                                                                href={urlo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="contact-link"
                                                            >
                                                                +91-
                                                                {phone ||
                                                                    "WhatsApp Number"}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-container flex justify-center items-center">
                <ModalComponent
                    show={showModal}
                    onClose={handleModalClose}
                    loanType="gold_loan"
                />
            </div>
        </section>
    );
};

export default TopBanner;