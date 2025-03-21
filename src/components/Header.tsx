"use client";

import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TopSocialBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="overlay topsocial">
            <Container>
                <div
                    className={`row ${
                        isMobile ? "justify-content-center" : ""
                    }`}
                >
                    <div
                        className={`${isMobile ? "col-12" : "col-md-6"}`}
                    ></div>
                    <div className={`${isMobile ? "col-12" : "col-md-6"}`}>
                        <div
                            className={`social-link-top d-flex ${
                                isMobile
                                    ? "justify-content-center"
                                    : "justify-content-end"
                            } gap-3 py-2`}
                        >
                            <a
                                href="https://www.facebook.com/swarnsathi2022"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="https://twitter.com/Swarnsathi2022"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/swarn-sathi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://www.instagram.com/swarn_sathi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const DropdownArrow = () => (
    <span className="dropdown-arrow ms-2">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

const Header = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const [showAbout, setShowAbout] = useState(false);
    const [showPartner, setShowPartner] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!expanded) return;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                Array.from(mutation.addedNodes).forEach((node) => {
                    if (node instanceof HTMLElement) {
                        node.style.border = "none";
                        node.style.background = "none";
                    }
                });
            });
        });

        const navElement = document.querySelector(".navbar-nav");
        if (navElement) {
            observer.observe(navElement, {
                childList: true,
                subtree: true,
                attributes: true,
            });
        }

        return () => observer.disconnect();
    }, [expanded]);

    const handleDropdownClick = (dropdown: string) => {
        if (!isMobile) return;
        setShowAbout(dropdown === "about" ? !showAbout : false);
        setShowPartner(dropdown === "partner" ? !showPartner : false);
    };

    const handleLinkClick = () => {
        if (isMobile && expanded) {
            setExpanded(false);
            setShowAbout(false);
            setShowPartner(false);
        }
    };

    return (
        <header className="header-section animated fadeInDown header-fixed zIndex-10">
            {/* <TopSocialBar /> */}
            <div className="overlay">
                <Container>
                    <Navbar
                        expand="lg"
                        className="navbar-light py-2 mobile-navbar"
                        expanded={expanded}
                        onToggle={(isOpen) => {
                            setExpanded(isOpen);
                            if (!isOpen) {
                                setShowAbout(false);
                                setShowPartner(false);
                            }
                        }}
                        style={
                            {
                                "--bs-navbar-active-color": "#fea123",
                                "--bs-navbar-active-border-color":
                                    "transparent",
                            } as React.CSSProperties
                        }
                    >
                        <Navbar.Brand href="/">
                            <img
                                src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
                                className="logo"
                                alt="logo"
                                style={{
                                    maxWidth: isMobile ? "200px" : "300px",
                                }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="navbar-content"
                            className="border-0 shadow-none"
                        />
                        <Navbar.Collapse
                            id="navbar-content"
                            className="justify-content-end"
                        >
                            <Nav
                                as="ul"
                                className="mb-2 mb-lg-0 align-items-lg-center"
                                style={{
                                    color: "#0b2238",
                                }}
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/"
                                        className={`nav-hover ${
                                            isActive("/") ? "active-link" : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Home
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/schemes"
                                        className={`nav-hover ${
                                            isActive("/schemes")
                                                ? "active-link"
                                                : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Schemes
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/swarn-sathi-branch-locator"
                                        className={`nav-hover ${
                                            isActive(
                                                "/swarn-sathi-branch-locator"
                                            )
                                                ? "active-link"
                                                : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Branch Locator
                                    </Nav.Link>
                                </Nav.Item>

                                <NavDropdown
                                    title={
                                        <>
                                            About Us
                                            <DropdownArrow />
                                        </>
                                    }
                                    id="about-dropdown"
                                    show={showAbout}
                                    onMouseEnter={() =>
                                        !isMobile && setShowAbout(true)
                                    }
                                    onMouseLeave={() =>
                                        !isMobile && setShowAbout(false)
                                    }
                                    onClick={() => handleDropdownClick("about")}
                                    className={`nav-hover ${
                                        pathname.startsWith(
                                            "/about-swarn-sathi"
                                        )
                                            ? "active-link"
                                            : ""
                                    }`}
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-company"
                                        onClick={handleLinkClick}
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-core-values"
                                        onClick={handleLinkClick}
                                    >
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-team"
                                        onClick={handleLinkClick}
                                    >
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#careers"
                                        onClick={handleLinkClick}
                                    >
                                        Career
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/contact-swarn-sathi"
                                        className={`nav-hover ${
                                            isActive("/contact-swarn-sathi")
                                                ? "active-link"
                                                : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Contact us
                                    </Nav.Link>
                                </Nav.Item>

                                <NavDropdown
                                    title={
                                        <>
                                            Be Our partner
                                            <DropdownArrow />
                                        </>
                                    }
                                    id="partner-dropdown"
                                    show={showPartner}
                                    onMouseEnter={() =>
                                        !isMobile && setShowPartner(true)
                                    }
                                    onMouseLeave={() =>
                                        !isMobile && setShowPartner(false)
                                    }
                                    onClick={() =>
                                        handleDropdownClick("partner")
                                    }
                                    className={`nav-hover ${
                                        pathname.startsWith("/partner")
                                            ? "active-link"
                                            : ""
                                    }`}
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion#Swarnsathi_Champion"
                                        onClick={handleLinkClick}
                                    >
                                        Swarn Sathi Champion
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion#Business_Associate"
                                        onClick={handleLinkClick}
                                    >
                                        Business Associate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion#Lending_Partner"
                                        onClick={handleLinkClick}
                                    >
                                        Lending Partner
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item
                                    className={`${
                                        isMobile ? "mt-2" : ""
                                    } roundmenu`}
                                >
                                    <Nav.Link
                                        as={Link}
                                        href="/login"
                                        className="nav-hover text-center"
                                        style={{
                                            color: "#fff",
                                            backgroundColor: isActive("/login")
                                                ? "#fea123"
                                                : "transparent",
                                        }}
                                        onClick={handleLinkClick}
                                    >
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </header>
    );
};

export default Header;
