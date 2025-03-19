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
    // Check if we're on mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set on initial load
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="overlay topsocial">
            <Container>
                <div
                    className={`row p-0 ${
                        isMobile ? "justify-content-center" : ""
                    }`}
                >
                    <div
                        className={`${isMobile ? "col-12" : "col-md-6"}`}
                    ></div>
                    <div className={`${isMobile ? "col-12" : "col-md-6"}`}>
                        <div
                            className={`social-link-top d-flex align-items-center ${
                                isMobile
                                    ? "justify-content-center"
                                    : "justify-content-end"
                            } gap-3 py-2`}
                        >
                            <a
                                href="https://www.facebook.com/swarnsathi2022"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="https://twitter.com/Swarnsathi2022"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/swarn-sathi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://www.instagram.com/swarn_sathi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
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
        <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
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

// Function to apply inline styles to override any global CSS causing the vertical bar
// // eslint-disable-next-line 
const applyInlineStyles = (element:any) => {
    if (!element) return;

    // Direct style overrides for all children
    // @ts-ignore
    const applyToChildren = (parent: any) => {
        if (!parent) return;

        // Apply to the element itself
        if (parent instanceof HTMLElement) {
            parent.style.borderRight = "none";
            parent.style.borderLeft = "none";
            parent.style.backgroundImage = "none";
            parent.style.boxShadow = "none";

            // Check for after pseudo-element with computed style
            const style = window.getComputedStyle(parent, "::after");
            if (
                style &&
                (style.width !== "0px" ||
                    style.height !== "0px" ||
                    style.background !== "none")
            ) {
                // Create a style override for this specific element
                const id = `no-bar-${Math.random().toString(36).substr(2, 9)}`;
                parent.classList.add(id);

                const styleEl = document.createElement("style");
                styleEl.innerHTML = `.${id}::after, .${id}::before { 
                    display: none !important; 
                    content: none !important;
                    width: 0 !important;
                    height: 0 !important;
                    background: none !important;
                    border: none !important;
                }`;
                document.head.appendChild(styleEl);
            }
        }

        // Apply to all children recursively
        Array.from(parent.children).forEach((child) => {
            applyToChildren(child);
        });
    };

    applyToChildren(element);
};

const Header = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const [showAbout, setShowAbout] = useState(false);
    const [showPartner, setShowPartner] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Detect mobile screen size
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Set on initial load
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Directly target and remove the purple/blue vertical bar
    useEffect(() => {
        // Only apply when mobile menu is expanded
        if (!expanded) return;

        // Create a MutationObserver to catch any dynamically added elements
        const observer = new MutationObserver(() => {
            const navElement = document.querySelector(".navbar-nav");
            if (navElement) {
                applyInlineStyles(navElement);
            }
        });

        // Start observing after a short delay to ensure DOM is ready
        setTimeout(() => {
            const navElement = document.querySelector(".navbar-nav");
            if (navElement) {
                // First apply immediately
                applyInlineStyles(navElement);

                // Then observe for changes
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ["class", "style"],
                });
            }

            // Add a global style to override any vertical bars
            const styleEl = document.createElement("style");
            styleEl.innerHTML = `
                /* Target the specific vertical bar shown in the screenshot */
                .navbar-nav::after,
                .navbar-nav::before,
                .navbar-nav *::after,
                .navbar-nav *::before,
                .navbar-nav .active::after,
                .navbar-nav .active::before,
                .navbar-nav .show::after,
                .navbar-nav .show::before {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                    background: none !important;
                    background-color: transparent !important;
                    border: none !important;
                    content: none !important;
                }
                
                /* Override any Bootstrap or global.css styles */
                .navbar-nav .nav-link.active,
                .navbar-nav .show > .nav-link {
                    border-right: none !important;
                    border-right-color: transparent !important;
                    background: none !important;
                    background-image: none !important;
                }
                
                /* Target all navigation items */
                .navbar-nav .nav-item {
                    background-image: none !important;
                    border-right: none !important;
                    border-left: none !important;
                }
            `;
            document.head.appendChild(styleEl);
        }, 100);

        return () => {
            observer.disconnect();
        };
    }, [expanded]);

    // Handle dropdown for mobile
    const handleDropdownClick = (dropdown: string) => {
        if (isMobile) {
            if (dropdown === "about") {
                setShowAbout(!showAbout);
                if (showPartner) setShowPartner(false);
            } else if (dropdown === "partner") {
                setShowPartner(!showPartner);
                if (showAbout) setShowAbout(false);
            }
        }
    };

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        if (isMobile && expanded) {
            setExpanded(false);
        }
    };

    return (
        <header className="header-section">
            <TopSocialBar />
            <div className="overlay">
                <Container>
                    <Navbar
                        expand="lg"
                        className="navbar-light py-2 mobile-navbar"
                        expanded={expanded}
                        onToggle={setExpanded}
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
                                    height: "auto",
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
                                            About us
                                            <DropdownArrow />
                                        </>
                                    }
                                    id="about-dropdown"
                                    show={isMobile ? showAbout : showAbout}
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
                                        className="dropdown-hover"
                                        onClick={handleLinkClick}
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-core-values"
                                        className="dropdown-hover"
                                        onClick={handleLinkClick}
                                    >
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-team"
                                        className="dropdown-hover"
                                        onClick={handleLinkClick}
                                    >
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#careers"
                                        className="dropdown-hover"
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
                                            Be our partner
                                            <DropdownArrow />
                                        </>
                                    }
                                    id="partner-dropdown"
                                    show={isMobile ? showPartner : showPartner}
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
                                        href="/swarnsathi-champion"
                                        className="dropdown-hover"
                                        onClick={handleLinkClick}
                                    >
                                        Swarn Sathi Champion
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion"
                                        className="dropdown-hover"
                                        onClick={handleLinkClick}
                                    >
                                        Business Associate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/lending-champion"
                                        className="dropdown-hover"
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