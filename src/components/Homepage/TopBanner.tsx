"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./TopBanner.css";
import ModalComponent from "../HandleSubmit";

const TopBanner = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const validatePhoneNumber = () => {
        const regex = /^[6789]\d{9}$/;
        if (regex.test(phoneNumber)) {
            setValidMessage("✓ Valid number");
            setShowModal(true); 
            // Add your submit logic here
            
        } else {
            setValidMessage(
                "Please enter a valid 10-digit phone number starting with 7, 8, or 9"
            );
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
                                        <h1
                                            className="title"
                                            style={{ color: "#fda033" }}
                                        >
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
                                                                e.target.value
                                                            )
                                                        }
                                                        maxLength={10}
                                                    />
                                                    <button
                                                        className="applybutton cmn-btn inputapply"
                                                        onClick={
                                                            validatePhoneNumber
                                                        }
                                                    >
                                                        Apply now
                                                    </button>
                                                </div>
                                                <div className="validation-message">
                                                    {validMessage}
                                                </div>
                                                <div className="contact-info">
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                        className="contact-icon"
                                                    />
                                                    <span className="callus">
                                                        Call us at{" "}
                                                        <Link
                                                            href="tel:033-4804-0009"
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
                                                            href="https://wa.me/7044494994"
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