"use client";

import {Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
// import "./FooterSection.css"; // Import the CSS file
import '../app/globals.css'

const TopSocialBar = () => (
    <div className="overlay topsocial left-1/2 m-0 p-1 bg:{#ddd}">
        <Container>
            <Row className="p-0 ">
                <Col md={6}></Col>
                <Col md={6}>
                    <div className="social-link-top d-flex justify-content-end align-items-center gap-2" style={{textDecoration:"none"}}>
                        <a
                            href="https://www.facebook.com/swarnsathi2022"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "24px",
                                height: "24px",
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
                        <a
                            href="https://twitter.com/Swarnsathi2022"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "24px",
                                height: "24px",
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
                        <a
                            href="https://www.linkedin.com/company/swarn-sathi"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "24px",
                                height: "24px",
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
                        <a
                            href="https://www.instagram.com/swarn_sathi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "24px",
                                height: "24px",
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
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

const FooterSection: React.FC = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                        <div className="footer-box">
                            <a href="index.html" className="logo">
                                <img
                                    src="https://swarnsathi.com/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
                                    alt="logo"
                                />
                            </a>
                            <p>
                                Democratising credit to provide easy access to
                                funds!
                            </p>
                            {/* <div className="social-link d-flex align-items-center">
                                <a href="javascript:void(0)">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div> */}
                            <TopSocialBar/>

                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-6">
                        <div className="footer-box">
                            <h5>Company</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="https://swarnsathi.com/about-swarn-sathi#our-company">
                                        Our company
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/about-swarn-sathi#our-core-values">
                                        Our core values
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/about-swarn-sathi#our-team">
                                        Our team
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/about-swarn-sathi#careers">
                                        Career
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-6">
                        <div className="footer-box">
                            <h5>Useful links</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="https://swarnsathi.com/schemes">
                                        Scheme
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/swarn-sathi-branch-locator">
                                        Branch locator
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/swarnsathi-partner">
                                        Business associate
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/swarnsathi-champion">
                                        Swarn sathi champion
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/lending-partner">
                                        Lending partner
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-6">
                        <div className="footer-box">
                            <h5>Support</h5>
                            <ul className="footer-link">
                                <li>
                                    <a href="mailto:query@swarnsathi.com">
                                        query@swarnsathi.com
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/contact-swarn-sathi">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a href="https://swarnsathi.com/schemes#faq">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-8">
                        <div className="footer-box">
                            <h5>Subscribe</h5>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14739.978596312914!2d88.386655!3d22.5418732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbecd8f2f0a839d63!2sRegal%20Fincorp%20%E2%84%A2!5e0!3m2!1sen!2sin!4v1660184550498!5m2!1sen!2sin"
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
                                    {" "}
                                    Copyright ©{" "}
                                    <a href="index.html">Swarn Sathi</a> |
                                    Made by <a href="#">Aditya Kumar & Somya</a>
                                </p>
                            </div>
                            <div className="right">
                                <a href="#" className="cus-bor">
                                    Privacy{" "}
                                </a>
                                <a href="#">Terms &amp; Condition </a>
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

