"use client";

import "./Header.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import axios from "axios";
import { deleteCookie } from 'cookies-next';




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
    const url = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<any>(null);
    const isActive = (path: string) => pathname === path;
    const [showAbout, setShowAbout] = useState(false);
    const [showPartner, setShowPartner] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setIsLoggedIn(false);
                setIsLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `/api/get-me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.success) {
                    setIsLoggedIn(true);
                    setUser(response.data.data);
                    
                    // Update user data in localStorage if needed
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                } else {
                    // Handle invalid token
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                // If token is invalid or expired
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [url  , router]);

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

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        
        if (token) {
            try {
                // Call the backend logout API via proxy
                await axios.post(`/api/logout`, { 
                    token 
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                console.log("Logged out successfully from the server");
            } catch (error) {
                console.error("Error during logout:", error);
                // Continue with local logout even if server logout fails
            }
        }
        
        // Clear local storage and cookies
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        deleteCookie('token');
        
        // Update state
        setIsLoggedIn(false);
        setUser(null);
        
        // Redirect to login page
        router.push("/login");
    };

    return (
        <header
            className="header-section animated fadeInDown header-fixed zIndex-1000 "
            // style={{ height: "56px", padding: "0 !important" }}
        >
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
                                    width: isMobile ? "180px" : "300px",

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
                                        HOME
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
                                        SCHEMES
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
                                        BRANCH LOCATOR
                                    </Nav.Link>
                                </Nav.Item>

                                <NavDropdown
                                    title={
                                        <>
                                            ABOUT US
                                            <DropdownArrow />
                                        </>
                                    }
                                    style={{ background: "#fff" }}
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
                                        OUR COMPANY
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-core-values"
                                        onClick={handleLinkClick}
                                    >
                                        OUR CORE VALUES
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-team"
                                        onClick={handleLinkClick}
                                    >
                                        OUR TEAM
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#careers"
                                        onClick={handleLinkClick}
                                    >
                                        CAREERS
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#contact-us"
                                        onClick={handleLinkClick}
                                    >
                                        CONTACT US
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/gold-valuation"
                                        className={`nav-hover ${
                                            isActive("/gold-valuation")
                                                ? "active-link"
                                                : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        CALCULATOR
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/swarnsathi-champion"
                                        className={`nav-hover ${
                                            isActive("/swarnsathi-champion")
                                                ? "active-link"
                                                : ""
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        BE OUR PARTNER
                                    </Nav.Link>
                                </Nav.Item>

                                {/* <NavDropdown
                                    title={
                                        <>
                                            BE OUR PARTNER
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
                                        SWARNSATHI CHAMPION
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion#Business_Associate"
                                        onClick={handleLinkClick}
                                    >
                                        BUSINESS ASSOCIATE
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-champion#Lending_Partner"
                                        onClick={handleLinkClick}
                                    >
                                        LENDING PARTNER
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                                <Nav.Item
                                    className={`${
                                        isMobile ? "mt-2" : ""
                                    } roundmenu`}
                                >
                                    {isLoading ? (
                                        <div
                                            className="spinner-border spinner-border-sm text-primary mx-2"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : isLoggedIn ? (
                                        <Nav.Link
                                            as={Link}
                                            href="/dashboard"
                                            className="text-center"
                                            style={{
                                                boxShadow: "none !important",
                                                filter: "none !important",
                                                textShadow: "none",
                                                transition: "none",
                                                display: "flex",
                                                justifyContent: "center",
                                                padding: "0",
                                                height: "30px",
                                                margin: "0",
                                                color: "#fff !important",
                                                backgroundColor: isActive("/dashboard")
                                                    ? "#fea123"
                                                    : "transparent",
                                            }}
                                            onClick={handleLinkClick}
                                        >
                                            DASHBOARD
                                        </Nav.Link>
                                    ) : (
                                        <Nav.Link
                                            as={Link}
                                            href="/login"
                                            className="text-center"
                                            style={{
                                                boxShadow: "none !important",
                                                filter: "none !important",
                                                textShadow: "none",
                                                transition: "none",
                                                display: "flex",
                                                justifyContent: "center",
                                                padding: "0",
                                                height: "30px",
                                                margin: "0",
                                                color: "#fff !important",
                                                backgroundColor: isActive(
                                                    "/login"
                                                )
                                                    ? "#fea123"
                                                    : "transparent",
                                            }}
                                            onClick={handleLinkClick}
                                        >
                                            LOGIN
                                        </Nav.Link>
                                    )}
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
