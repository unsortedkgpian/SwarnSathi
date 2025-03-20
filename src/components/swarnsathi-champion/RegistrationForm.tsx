'use client';

import React, { useState } from "react";
import axios from "axios";

interface FormData {
    name: string;
    phone: string;
    pincode?: string;
    email?: string;
    type: string;
}

const RegistrationForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"home" | "profile" | "contact">(
        "profile"
    );
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        pincode: "",
        email: "",
        type: "business-associate"
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [otpVerified, setOtpVerified] = useState<boolean>(false);

    // Map activeTab to form type
    const tabToType = {
        home: "swarna-sathi",
        profile: "business-associate",
        contact: "lending-partner"
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle tab change
    const handleTabChange = (tab: "home" | "profile" | "contact") => {
        setActiveTab(tab);
        setFormData(prev => ({
            ...prev,
            type: tabToType[tab],
            // Reset form-specific fields
            pincode: tab !== "contact" ? prev.pincode : "",
            email: tab === "contact" ? prev.email : ""
        }));
        // Reset states
        setError(null);
        setSuccess(null);
        setShowOtpInput(false);
        setOtpVerified(false);
    };

    // Send OTP
    const handleSendOtp = async () => {
        if (!formData.phone || formData.phone.length !== 10) {
            setError("Please enter a valid 10-digit phone number");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions/send-otp`,
                { phone: formData.phone }
            );
            
            setSuccess("OTP sent successfully to your phone");
            setShowOtpInput(true);
        } catch (err: unknown) {
            const error = err as { response?: { data?: { message?: string } } };
            setError(error.response?.data?.message || "Failed to send OTP");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions/verify-otp`,
                { 
                    phone: formData.phone,
                    otp: otp
                }
            );
            
            setSuccess("Phone number verified successfully");
            setOtpVerified(true);
        } catch (err: unknown) {
            const error = err as { response?: { data?: { message?: string } } };
            setError(error.response?.data?.message || "Failed to verify OTP");
        } finally {
            setLoading(false);
        }
    };

    // Submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim()) {
            setError("Name is required");
            return;
        }

        if (!formData.phone || formData.phone.length !== 10) {
            setError("Valid phone number is required");
            return;
        }

        if (!otpVerified) {
            setError("Please verify your phone number before submitting");
            // Highlight the verify button to draw attention
            const verifyButton = document.querySelector('.verify-phone-btn');
            if (verifyButton) {
                verifyButton.classList.add('btn-attention');
                setTimeout(() => {
                    verifyButton.classList.remove('btn-attention');
                }, 2000);
            }
            return;
        }

        if (activeTab !== "contact" && (!formData.pincode || formData.pincode.length !== 6)) {
            setError("Valid 6-digit pincode is required");
            return;
        }

        if (activeTab === "contact" && !formData.email) {
            setError("Email is required for lending partners");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions`,
                formData
            );
            
            setSuccess("Registration successful! We'll contact you soon.");
            
            // Reset form
            setFormData({
                name: "",
                phone: "",
                pincode: "",
                email: "",
                type: tabToType[activeTab]
            });
            setOtp("");
            setShowOtpInput(false);
            setOtpVerified(false);
        } catch (err: unknown) {
            const error = err as { response?: { data?: { message?: string } } };
            setError(error.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="sign-in-up register">
            <style jsx>{`
                .btn-attention {
                    animation: pulse 1s infinite;
                    box-shadow: 0 0 0 0 rgba(251, 158, 71, 0.7);
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(0.95);
                        box-shadow: 0 0 0 0 rgba(251, 158, 71, 0.7);
                    }
                    
                    70% {
                        transform: scale(1);
                        box-shadow: 0 0 0 10px rgba(251, 158, 71, 0);
                    }
                    
                    100% {
                        transform: scale(0.95);
                        box-shadow: 0 0 0 0 rgba(251, 158, 71, 0);
                    }
                }
                
                .verification-warning {
                    color: #dc3545;
                    font-style: italic;
                    text-align: center;
                    margin-top: 5px;
                }
            `}</style>

            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="form-content">
                                <div className="section-header">
                                    <h5 className="sub-title">
                                        The power of financial freedom
                                    </h5>
                                    <h2 className="title">
                                        Let&apos;s get started!
                                    </h2>
                                    <p>
                                        Please fill out the form to start your
                                        online application
                                    </p>
                                </div>

                                {/* Display success or error messages */}
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}

                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                    style={{ border: "none" }}
                                >
                                    {[
                                        {
                                            id: "home",
                                            label: "Swarnsathi champion",
                                        },
                                        {
                                            id: "profile",
                                            label: "Business associate",
                                        },
                                        {
                                            id: "contact",
                                            label: "Lending partner",
                                        },
                                    ].map((tab) => (
                                        <li
                                            key={tab.id}
                                            className="nav-item"
                                            role="presentation"
                                        >
                                            <button
                                                className={`nav-link navtab ${
                                                    activeTab === tab.id
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleTabChange(
                                                        tab.id as typeof activeTab
                                                    )
                                                }
                                                style={{
                                                    border: "1px solid #fb9e47",
                                                }}
                                            >
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="tab-content p-3">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-input">
                                                    <label htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        id="name"
                                                        placeholder="Please enter your name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-9">
                                                <div className="single-input">
                                                    <label htmlFor="phone">
                                                        Phone
                                                        <span className="requiredfill">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        id="phone"
                                                        placeholder="Please enter your 10 digit mobile number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={otpVerified}
                                                        maxLength={10}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="single-input">
                                                    <label>&nbsp;</label>
                                                    <button
                                                        className="btn btn-primary verify-phone-btn"
                                                        type="button"
                                                        style={{
                                                            width: "100%",
                                                            padding: "12px",
                                                            background: "#fb9e47",
                                                            border: "none",
                                                        }}
                                                        onClick={handleSendOtp}
                                                        disabled={loading || otpVerified}
                                                    >
                                                        {loading ? "Sending..." : otpVerified ? "Verified" : "Verify"}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* OTP Input field (shows only after sending OTP) */}
                                            {showOtpInput && !otpVerified && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="otp">
                                                            Enter OTP
                                                            <span className="requiredfill">
                                                                *
                                                            </span>
                                                        </label>
                                                        <div className="d-flex">
                                                            <input
                                                                name="otp"
                                                                type="text"
                                                                id="otp"
                                                                placeholder="Enter the 6-digit OTP"
                                                                value={otp}
                                                                onChange={(e) => setOtp(e.target.value)}
                                                                required
                                                                maxLength={6}
                                                                className="me-2"
                                                                style={{ flex: 1 }}
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={handleVerifyOtp}
                                                                disabled={loading}
                                                                style={{
                                                                    background: "#fb9e47",
                                                                    border: "none",
                                                                }}
                                                            >
                                                                {loading ? "Verifying..." : "Verify OTP"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Dynamic Field Section */}
                                            {activeTab !== "contact" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="pincode">
                                                            Enter your pincode
                                                            <span className="requiredfill">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            name="pincode"
                                                            type="text"
                                                            id="pincode"
                                                            placeholder="Please enter your 6 digit pincode"
                                                            value={formData.pincode}
                                                            onChange={handleChange}
                                                            required
                                                            maxLength={6}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === "contact" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="email">
                                                            Enter your email id
                                                            <span className="requiredfill">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            id="email"
                                                            placeholder="Your email ID here"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="col-12">
                                                <div className="single-input">
                                                    <p>
                                                        By clicking submit, you
                                                        agree to{" "}
                                                        <span>
                                                            Swarn Sathi terms of
                                                            use, privacy policy,
                                                            e-sign
                                                        </span>{" "}
                                                        &amp;
                                                        <span>
                                                            communication
                                                            authorization.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="btn-area">
                                                <button 
                                                    type="submit"
                                                    className="cmn-btn registersubmit"
                                                    disabled={loading || !otpVerified}
                                                >
                                                    {loading ? "Submitting..." : "Submit now"}
                                                </button>
                                                {!otpVerified && (
                                                    <div className="verification-warning mt-2 text-danger">
                                                        <small>* Phone verification required before submission</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <img
                                src="https://swarnsathi.com/images/sign-in-up-bg.png"
                                alt="Registration visual"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
