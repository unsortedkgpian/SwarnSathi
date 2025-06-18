"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

//this is a test comment

import React from "react";
// import "./FooterSection.css"; // Import the CSS file
import '../app/globals.css'

interface SocialMedia {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
}

const TopSocialBar = () => {
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    const [socialLinks, setSocialLinks] = useState<SocialMedia>({
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSocialMedia = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${url}/api/social`);
                if (!response.ok) {
                    throw new Error("Failed to fetch social media links");
                }
                const data = await response.json();
                console.log(data);
                setSocialLinks(data);
                setError(false);
            } catch (error) {
                console.error("Error fetching social media links:", error);
                setError(true);
                // Set fallback values on error
                setSocialLinks({
                    facebook: "https://www.facebook.com/swarnsathi2022",
                    twitter: "https://twitter.com/Swarnsathi2022",
                    linkedin: "https://www.linkedin.com/company/swarn-sathi",
                    instagram: "https://www.instagram.com/swarn_sathi/"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchSocialMedia();
    }, [url]);

    // Skip rendering if we're still loading or if all links are empty
    if (loading) {
        return <div className="loading-indicator">Loading social links...</div>;
    }

    return (
        <div className="overlay topsocial left-1/2 m-0 p-1 bg:{#ddd}">
            <Container>
                <Row className="p-0 ">
                    <Col md={6}></Col>
                    <Col md={6}>
                        <div className="social-link-top d-flex justify-content-md-end" style={{ textDecoration: "none" }}>
                            {socialLinks.facebook && (
                                <a
                                    href={socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        border: "1px solid #fc9f3e",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="top-icon-sytle"
                                    />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        border: "1px solid #fc9f3e",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="top-icon-sytle"
                                    />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        border: "1px solid #fc9f3e",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                        className="top-icon-sytle"
                                    />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        border: "1px solid #fc9f3e",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="top-icon-sytle"
                                    />
                                </a>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const FooterSection: React.FC = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-12 mb-4 mb-lg-0">
                        <div className="footer-box">
                            <a href="index.html" className="logo">
                                <img
                                    src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
                                    alt="logo"
                                />
                            </a>
                            <p>
                                Democratising credit to provide easy access to
                                funds!
                            </p>

                            <TopSocialBar />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-12 mb-4 mb-lg-0">
                        <div className="footer-box">
                            <h5>Company</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="/about-swarn-sathi#our-company">
                                        Our Company
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-swarn-sathi#our-core-values">
                                        Our Core Values
                                    </a>
                                </li>
                                <li>
                                    <a href="/our-team">
                                        Our Team
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-swarn-sathi#careers">
                                        Career
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-12 mb-4 mb-lg-0">
                        <div className="footer-box">
                            <h5>Useful links</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="/schemes">Scheme</a>
                                </li>
                                <li>
                                    <a href="/swarn-sathi-branch-locator">
                                        Branch Locator
                                    </a>
                                </li>
                                <li>
                                    <a href="/swarnsathi-champion#Business_Associate">
                                        Business Associate
                                    </a>
                                </li>
                                <li>
                                    <a href="swarnsathi-champion#swarnsathi-champion">
                                        Swarn Sathi Champion
                                    </a>
                                </li>
                                <li>
                                    <a href="/swarnsathi-champion#Lending_Partner">
                                        Lending Partner
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-12 mb-4 mb-lg-0">
                        <div className="footer-box">
                            <h5>Support</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="mailto:query@swarnsathi.com">
                                        query@swarnsathi.com
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact-swarn-sathi">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/schemes#faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-12">
                        <div className="footer-box">
                            <h5>Subscribe</h5>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6834973083835!2d88.3452501!3d22.5532488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770e37f7a67f%3A0xcdfc7d34b2f8f6af!2sChatterjee%20International%20Center%2C%2033%20A%2C%20Jawaharlal%20Nehru%20Rd%2C%20Park%20Street%20area%2C%20Kolkata%2C%20West%20Bengal%20700071!5e0!3m2!1sen!2sin!4v1713083520944!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom">
                            <div className="left">
                                <p>
                                    Copyright © <a href="/">Swarn Sathi</a>
                                </p>
                            </div>
                            <div className="right">
                                <a
                                    href="/swarn-sathi-branch-locator"
                                    className="cus-bor"
                                >
                                    Privacy
                                </a>
                                <a href="/swarn-sathi-branch-locator">
                                    Terms &amp; Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-area">
                {/* Uncomment if you want to include the images */}
                {/* <img src="https://swarnsathi.com/images/footer-Illu-left.png" className="left" alt="Images" />
        <img src="https://swarnsathi.com/images/footer-Illu-right.png" className="right" alt="Images" /> */}
            </div>
        </div>
    );
};

export default FooterSection;

