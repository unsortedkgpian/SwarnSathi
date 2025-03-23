

"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { url } from "inspector";

interface FormData {
    name: string;
    phone: string;
    pincode?: string;
    email?: string;
    type: string;
}

const RegistrationForm: React.FC = () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<
        "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
    >("Swarnsathi_Champion");

    // Corrected type mapping with consistent naming
    const tabToType = {
        Swarnsathi_Champion: "swarnsathi_champion",
        Business_Associate: "business_associate",
        Lending_Partner: "lending_partner",
    };

    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        pincode: "",
        email: "",
        type: tabToType[activeTab], // Initialize with correct type
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [otpVerified, setOtpVerified] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTabChange = (
        tab: "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
    ) => {
        setActiveTab(tab);
        setFormData((prev) => ({
            ...prev,
            type: tabToType[tab],
            pincode: tab !== "Lending_Partner" ? "" : undefined,
            email: tab === "Lending_Partner" ? "" : undefined,
        }));
        setError(null);
        setSuccess(null);
        setShowOtpInput(false);
        setOtpVerified(false);
    };

    const handleSendOtp = async () => {
        if (!formData.phone || formData.phone.length !== 10) {
            setError("Please enter a valid 10-digit phone number");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await axios.post(
                `${url}/api/send-otp`,
                { phone: formData.phone}
            );

            setSuccess("OTP sent successfully to your phone");
            setShowOtpInput(true);
        } catch (err) {
            const error = err as { response?: { data?: { message?: string } } };
            setError(error.response?.data?.message || "Failed to send OTP");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await axios.post(
                `${url}/api/be-our-partner/verify-phone-otp`,
                {
                    phone: formData.phone,
                    otp: otp,
                }
            );

            setSuccess("Phone number verified successfully");
            setOtpVerified(true);
        } catch (err) {
            const error = err as { response?: { data?: { message?: string } } };
            setError(error.response?.data?.message || "Failed to verify OTP");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

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
            return;
        }

        if (
            activeTab !== "Lending_Partner" &&
            (!formData.pincode || formData.pincode.length !== 6)
        ) {
            setError("Valid 6-digit pincode is required");
            return;
        }

        if (activeTab === "Lending_Partner" && !formData.email) {
            setError("Email is required for lending partners");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await axios.post(
                `${url}/api/be-our-partner/`,
                formData
            );

            setSuccess("Registration successful! We'll contact you soon.");

            // Reset form
            setFormData({
                name: "",
                phone: "",
                pincode: "",
                email: "",
                type: tabToType[activeTab],
            });
            setOtp("");
            setShowOtpInput(false);
            setOtpVerified(false);
        } catch (err) {
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
                    }
                    70% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(0.95);
                    }
                }

                .verification-warning {
                    color: #dc3545;
                    font-style: italic;
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
                                    <h2
                                        className="title"
                                        style={{ textTransform: "capitalize" }}
                                    >
                                        Let&apos;s get started!
                                    </h2>
                                    <p>
                                        Please fill out the form to start your
                                        online application
                                    </p>
                                </div>

                                {error && (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="alert alert-success">
                                        {success}
                                    </div>
                                )}

                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    {[
                                        {
                                            id: "Swarnsathi_Champion",
                                            label: "Swarnsathi Champion",
                                        },
                                        {
                                            id: "Business_Associate",
                                            label: "Business Associate",
                                        },
                                        {
                                            id: "Lending_Partner",
                                            label: "Lending Partner",
                                        },
                                    ].map((tab) => (
                                        <li key={tab.id} className="nav-item">
                                            <button
                                                className={`nav-link ${
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
                                                    <label>Name</label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder="Please enter your name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-9">
                                                <div className="single-input">
                                                    <label>Phone *</label>
                                                    <input
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="10 digit mobile number"
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
                                                        type="button"
                                                        className="btn btn-primary w-100"
                                                        style={{
                                                            padding: "12px",
                                                            background:
                                                                "#fb9e47",
                                                        }}
                                                        onClick={handleSendOtp}
                                                        disabled={
                                                            loading ||
                                                            otpVerified
                                                        }
                                                    >
                                                        {loading
                                                            ? "Sending..."
                                                            : otpVerified
                                                            ? "Verified"
                                                            : "Verify"}
                                                    </button>
                                                </div>
                                            </div>

                                            {showOtpInput && !otpVerified && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label>
                                                            Enter OTP *
                                                        </label>
                                                        <div className="d-flex gap-2">
                                                            <input
                                                                type="text"
                                                                placeholder="6-digit OTP"
                                                                value={otp}
                                                                onChange={(e) =>
                                                                    setOtp(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                required
                                                                maxLength={6}
                                                                className="flex-grow-1"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                style={{
                                                                    background:
                                                                        "#fb9e47",
                                                                }}
                                                                onClick={
                                                                    handleVerifyOtp
                                                                }
                                                                disabled={
                                                                    loading
                                                                }
                                                            >
                                                                {loading
                                                                    ? "Verifying..."
                                                                    : "Verify OTP"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab !==
                                                "Lending_Partner" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label>Pincode *</label>
                                                        <input
                                                            name="pincode"
                                                            type="text"
                                                            placeholder="6 digit pincode"
                                                            value={
                                                                formData.pincode
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                            maxLength={6}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab ===
                                                "Lending_Partner" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label>Email *</label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Your email ID"
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="col-12">
                                                <div className="single-input">
                                                    <p>
                                                        By clicking submit, you
                                                        agree to Swarn Sathi's
                                                        terms of use, privacy
                                                        policy, e-sign &amp;
                                                        communication
                                                        authorization.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="btn-area">
                                                <button
                                                    type="submit"
                                                    className="cmn-btn"
                                                    disabled={
                                                        loading || !otpVerified
                                                    }
                                                >
                                                    {loading
                                                        ? "Submitting..."
                                                        : "Submit Now"}
                                                </button>
                                                {!otpVerified && (
                                                    <div className="verification-warning">
                                                        <small>
                                                            * Phone verification
                                                            required
                                                        </small>
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
                                src="/images/sign-in-up-bg.png"
                                alt="Registration"
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
