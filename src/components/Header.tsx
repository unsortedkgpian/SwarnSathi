"use client";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/globals.css"

import { usePathname } from "next/navigation";
import { useState } from "react";

const TopSocialBar = () => (
    <div className="overlay topsocial right-1/2 m-0 p-1 bg-white">
        <Container>
            <Row className="p-0 ">
                <Col md={6}></Col>
                <Col md={6}>
                    <div className="social-link-top d-flex justify-content-end align-items-center gap-2">
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

// const MainNavigation = () => (
//     <div className="overlay">
//         <Container>
//             <div className="row d-flex header-area">
//                 <Navbar expand="lg" className="navbar-light">
//                     <Link href="https://swarnsathi.com" passHref>
//                         <Navbar.Brand>
//                             <Image
//                                 src="https://swarnsathi.com/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
//                                 alt="logo"
//                                 width={300}
//                                 height={50} // Adjust based on your logo's aspect ratio
//                                 className="logo"
//                             />
//                         </Navbar.Brand>
//                     </Link>

//                     <Navbar.Toggle aria-controls="navbar-content" />

//                     <Navbar.Collapse
//                         id="navbar-content"
//                         className="justify-content-end"
//                     >
//                         <Nav className="mr-auto mb-2 mb-lg-0">
//                             <Nav.Link href="https://swarnsathi.com" active>
//                                 Home
//                             </Nav.Link>
//                             <Nav.Link href="https://swarnsathi.com/schemes">
//                                 Schemes
//                             </Nav.Link>
//                             <Nav.Link href="https://swarnsathi.com/swarn-sathi-branch-locator">
//                                 Branch Locator
//                             </Nav.Link>

//                             <NavDropdown
//                                 title="About us"
//                                 id="about-us-dropdown"
//                             >
//                                 <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-company">
//                                     Our Company
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-core-values">
//                                     Our Core Values
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-team">
//                                     Our Team
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#careers">
//                                     Career
//                                 </NavDropdown.Item>
//                             </NavDropdown>

//                             <Nav.Link href="https://swarnsathi.com/contact-swarn-sathi">
//                                 Contact us
//                             </Nav.Link>

//                             <NavDropdown
//                                 title="Be our partner"
//                                 id="partner-dropdown"
//                             >
//                                 <NavDropdown.Item href="https://swarnsathi.com/swarnsathi-champion">
//                                     Swarn Sathi Champion
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="https://swarnsathi.com/swarnsathi-partner">
//                                     Business Associate
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="https://swarnsathi.com/lending-partner">
//                                     Lending Partner
//                                 </NavDropdown.Item>
//                             </NavDropdown>

//                             <Nav.Item className="roundmenu">
//                                 <Nav.Link
//                                     href="https://swarnsathi.com/login"
//                                     style={{ color: "#fff" }}
//                                 >
//                                     Login
//                                 </Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>
//         </Container>
//     </div>
// );

const MainNavigation = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="overlay right-1/2 m-0"
            style={{ paddingRight: "20px", paddingLeft: "30px" }}
        >
            <Container fluid>
                {" "}
                {/* Changed to fluid for full-width container */}
                <div className="header-area">
                    <Navbar
                        expand="lg"
                        className="navbar-light header-navbar-text"
                    >
                        <Link href="https://swarnsathi.com" passHref>
                            <Navbar.Brand className="d-flex align-items-center">
                                <Image
                                    src="https://swarnsathi.com/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
                                    alt="logo"
                                    width={300}
                                    height={50}
                                    className="logo img-fluid"
                                    style={{ maxWidth: "225px", height: "40" }} // Responsive logo sizing
                                />
                            </Navbar.Brand>
                        </Link>

                        <Navbar.Toggle
                            aria-controls="navbar-content"
                            className="border-0"
                        />

                        <Navbar.Collapse
                            id="navbar-content"
                            className="justify-content-end"
                        >
                            <Nav
                                className="align-items-lg-center header-navbar-text"
                                style={{
                                    color: "black",
                                    padding: "0 10px",
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                {" "}
                                {/* Better alignment */}
                                <Nav.Link
                                    href="https://swarnsathi.com"
                                    active
                                    className="px-lg-3 header-navbar-text"
                                    style={{
                                        color:
                                            pathname === "http://localhost:3000"
                                                ? "#fc9f3e"
                                                : "#FEA123",
                                        // color: "#FEA123",
                                        padding: "0 10px",
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "14px",
                                    }}
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    href="https://swarnsathi.com/schemes"
                                    className="px-lg-3"
                                    style={{
                                        color:
                                            pathname ===
                                            "http://localhost:3000/schemes"
                                                ? "#fc9f3e"
                                                : "#000",
                                        // color: "#FEA123",
                                        padding: "0 10px",
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "14px",
                                    }}
                                >
                                    Schemes
                                </Nav.Link>
                                <Nav.Link
                                    href="https://swarnsathi.com/swarn-sathi-branch-locator"
                                    className="px-lg-3"
                                    style={{
                                        color:
                                            pathname ===
                                            "http://localhost:3000/brachLocator"
                                                ? "#fc9f3e"
                                                : "#000",
                                        // color: "#FEA123",
                                        padding: "0 10px",
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "14px",
                                    }}
                                >
                                    Branch Locator
                                </Nav.Link>
                                {/* <NavDropdown
                                    title="About us"
                                    id="about-us-dropdown"
                                    className="px-lg-3"
                                >
                                    <NavDropdown.Item
                                        href="https://swarnsathi.com/about-swarn-sathi#our-company"
                                        style={{
                                            backgroundColor: pathname.includes(
                                                "/about-swarn-sathi#our-company"
                                            )
                                                ? "#fc9f3e"
                                                : "transparent",
                                        }}
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-core-values">
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-team">
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#careers">
                                        Career
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                {/* <NavDropdown
                                    title={
                                        <span className="d-flex align-items-center">
                                            About us
                                            <span className="ms-2">
                                                {isOpen ? (
                                                    <img
                                                        src="/path-to-your-custom-arrow-up.svg"
                                                        alt=""
                                                        width={12}
                                                    />
                                                ) : (
                                                    <img
                                                        src="/path-to-your-custom-arrow-down.svg"
                                                        alt=""
                                                        width={12}
                                                    />
                                                )}
                                            </span>
                                        </span>
                                    }
                                    id="about-us-dropdown"
                                    className="px-lg-3"
                                    show={isOpen}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    <NavDropdown.Item
                                        href="https://swarnsathi.com/about-swarn-sathi#our-company"
                                        style={{
                                            backgroundColor: pathname.includes(
                                                "/about-swarn-sathi#our-company"
                                            )
                                                ? "#fc9f3e"
                                                : "transparent",
                                        }}
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-core-values">
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-team">
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#careers">
                                        Career
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <NavDropdown
                                    title={
                                        <span className="d-flex align-items-center">
                                            About us
                                            <span className="ms-2">
                                                {isOpen ? (
                                                    <img
                                                        src="/custom-arrow-up.svg"
                                                        alt=""
                                                        width={0}
                                                    />
                                                ) : (
                                                    <img
                                                        src="/custom-arrow-down.svg"
                                                        alt=""
                                                        width={0}
                                                    />
                                                )}
                                            </span>
                                        </span>
                                    }
                                    id="about-us-dropdown"
                                    className="custom-dropdown px-lg-3"
                                    show={isOpen}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    <NavDropdown.Item
                                        href="https://swarnsathi.com/about-swarn-sathi#our-company"
                                        style={{
                                            backgroundColor: pathname.includes(
                                                "/about-swarn-sathi#our-company"
                                            )
                                                ? "#fc9f3e"
                                                : "transparent",
                                        }}
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-core-values">
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#our-team">
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/about-swarn-sathi#careers">
                                        Career
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link
                                    href="https://swarnsathi.com/contact-swarn-sathi"
                                    className="px-lg-3"
                                >
                                    Contact us
                                </Nav.Link>
                                <NavDropdown
                                    title="Be our partner"
                                    id="partner-dropdown"
                                    className="px-lg-3"
                                >
                                    <NavDropdown.Item href="https://swarnsathi.com/swarnsathi-champion">
                                        Swarn Sathi Champion
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/swarnsathi-partner">
                                        Business Associate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://swarnsathi.com/lending-partner">
                                        Lending Partner
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item className="roundmenu mt-3 mt-lg-0">
                                    {" "}
                                    {/* Mobile spacing */}
                                    <Nav.Link
                                        href="https://swarnsathi.com/login"
                                        className="text-white rounded-pill px-4 py-2 header-navbar-text"
                                        style={{ background: "#fc9f3e" }}
                                    >
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container>
        </div>
    );
};

const Header = () => (
    <header className="header-section">
        <TopSocialBar />
        <MainNavigation />
    </header>
);

export default Header;
