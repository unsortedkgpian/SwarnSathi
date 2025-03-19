
// // "use client";

// // import "./Header.css";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //     faFacebookF,
// //     faTwitter,
// //     faLinkedinIn,
// //     faInstagram,
// // } from "@fortawesome/free-brands-svg-icons";

// // const TopSocialBar = () => (
// //     <div className="overlay topsocial left-1/2 m-0 p-1 bg-light">
// //         <Container>
// //             <Row className="p-0">
// //                 <Col md={6}></Col>
// //                 <Col md={6}>
// //                     <div className="social-link-top d-flex justify-content-end align-items-center gap-2">
// //                         {[
// //                             {
// //                                 href: "https://www.facebook.com/swarnsathi2022",
// //                                 icon: faFacebookF,
// //                             },
// //                             {
// //                                 href: "https://twitter.com/Swarnsathi2022",
// //                                 icon: faTwitter,
// //                             },
// //                             {
// //                                 href: "https://www.linkedin.com/company/swarn-sathi",
// //                                 icon: faLinkedinIn,
// //                             },
// //                             {
// //                                 href: "https://www.instagram.com/swarn_sathi/",
// //                                 icon: faInstagram,
// //                             },
// //                         ].map(({ href, icon }, index) => (
// //                             <a
// //                                 key={index}
// //                                 href={href}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="d-flex align-items-center justify-content-center border border-warning rounded-circle"
// //                                 style={{ width: "24px", height: "24px" }}
// //                             >
// //                                 <FontAwesomeIcon
// //                                     icon={icon}
// //                                     className="top-icon-style"
// //                                 />
// //                             </a>
// //                         ))}
// //                     </div>
// //                 </Col>
// //             </Row>
// //         </Container>
// //     </div>
// // );

// // const Header = () => {
// //     const pathname = usePathname();
// //     const isActive = (path: string) => pathname === path;

// //     return (
// //         <header className="header-section">
// //             <TopSocialBar />
// //             <div className="overlay">
// //                 <Container>
// //                     <Navbar expand="lg" className="navbar-light">
// //                         <Navbar.Brand href="/">
// //                             <img
// //                                 src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
// //                                 className="logo"
// //                                 alt="logo"
// //                                 width="300px"
// //                             />
// //                         </Navbar.Brand>
// //                         <Navbar.Toggle aria-controls="navbar-content" />
// //                         <Navbar.Collapse
// //                             id="navbar-content"
// //                             className="justify-content-end"
// //                         >
// //                             <Nav className="mr-auto mb-2 mb-lg-0">
// //                                 <Nav.Link
// //                                     as={Link}
// //                                     href="/"
// //                                     style={{
// //                                         color: isActive("/")
// //                                             ? "#fea123"
// //                                             : "#333",
// //                                     }}
// //                                 >
// //                                     Home
// //                                 </Nav.Link>
// //                                 <Nav.Link
// //                                     as={Link}
// //                                     href="/schemes"
// //                                     style={{
// //                                         color: isActive("/schemes")
// //                                             ? "#fea123"
// //                                             : "#333",
// //                                     }}
// //                                 >
// //                                     Schemes
// //                                 </Nav.Link>
// //                                 <Nav.Link
// //                                     as={Link}
// //                                     href="/swarn-sathi-branch-locator"
// //                                     style={{
// //                                         color: isActive(
// //                                             "/swarn-sathi-branch-locator"
// //                                         )
// //                                             ? "#fea123"
// //                                             : "#333",
// //                                     }}
// //                                 >
// //                                     Branch Locator
// //                                 </Nav.Link>
// //                                 <NavDropdown
// //                                     title="About us"
// //                                     id="about-dropdown"
// //                                     show={pathname.startsWith(
// //                                         "/about-swarn-sathi"
// //                                     )}
// //                                 >
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-company"
// //                                     >
// //                                         Our Company
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-core-values"
// //                                     >
// //                                         Our Core Values
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-team"
// //                                     >
// //                                         Our Team
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#careers"
// //                                     >
// //                                         Career
// //                                     </NavDropdown.Item>
// //                                 </NavDropdown>
// //                                 <Nav.Link
// //                                     as={Link}
// //                                     href="/contact-swarn-sathi"
// //                                     style={{
// //                                         color: isActive("/contact-swarn-sathi")
// //                                             ? "#fea123"
// //                                             : "#333",
// //                                     }}
// //                                 >
// //                                     Contact us
// //                                 </Nav.Link>
// //                                 <Nav.Item className="roundmenu">
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/login"
// //                                         style={{
// //                                             color: "#fff",
// //                                             backgroundColor: isActive("/login")
// //                                                 ? "#fea123"
// //                                                 : "transparent",
// //                                         }}
// //                                     >
// //                                         Login
// //                                     </Nav.Link>
// //                                 </Nav.Item>
// //                             </Nav>
// //                         </Navbar.Collapse>
// //                     </Navbar>
// //                 </Container>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;


// // "use client";

// // import "./Header.css";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useState } from "react";
// // import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //     faFacebookF,
// //     faTwitter,
// //     faLinkedinIn,
// //     faInstagram,
// // } from "@fortawesome/free-brands-svg-icons";

// // const TopSocialBar = () => (
// //     <div className="overlay topsocial">
// //         <Container>
// //             <div className="row p-0">
// //                 <div className="col-md-6"></div>
// //                 <div className="col-md-6">
// //                     <div className="social-link-top d-flex align-items-center justify-content-end gap-3">
// //                         <a
// //                             href="https://www.facebook.com/swarnsathi2022"
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                         >
// //                             <FontAwesomeIcon icon={faFacebookF} />
// //                         </a>
// //                         <a
// //                             href="https://twitter.com/Swarnsathi2022"
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                         >
// //                             <FontAwesomeIcon icon={faTwitter} />
// //                         </a>
// //                         <a
// //                             href="https://www.linkedin.com/company/swarn-sathi"
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                         >
// //                             <FontAwesomeIcon icon={faLinkedinIn} />
// //                         </a>
// //                         <a
// //                             href="https://www.instagram.com/swarn_sathi/"
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                         >
// //                             <FontAwesomeIcon icon={faInstagram} />
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //         </Container>
// //     </div>
// // );

// // const Header = () => {
// //     const pathname = usePathname();
// //     const isActive = (path: string) => pathname === path;
// //     const [showAbout, setShowAbout] = useState(false);
// //     const [showPartner, setShowPartner] = useState(false);

// //     return (
// //         <header className="header-section">
// //             <TopSocialBar />
// //             <div className="overlay">
// //                 <Container>
// //                     <Navbar expand="lg" className="navbar-light">
// //                         <Navbar.Brand href="/">
// //                             <img
// //                                 src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
// //                                 className="logo"
// //                                 alt="logo"
// //                                 width="300px"
// //                             />
// //                         </Navbar.Brand>
// //                         <Navbar.Toggle aria-controls="navbar-content" />
// //                         <Navbar.Collapse
// //                             id="navbar-content"
// //                             className="justify-content-end"
// //                         >
// //                             <Nav as="ul" className="mb-2 mb-lg-0">
// //                                 {/* Home Link */}
// //                                 <Nav.Item>
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/"
// //                                         active={isActive("/")}
// //                                         className="nav-hover"
// //                                     >
// //                                         Home
// //                                     </Nav.Link>
// //                                 </Nav.Item>

// //                                 {/* Schemes Link */}
// //                                 <Nav.Item>
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/schemes"
// //                                         active={isActive("/schemes")}
// //                                         className="nav-hover"
// //                                     >
// //                                         Schemes
// //                                     </Nav.Link>
// //                                 </Nav.Item>

// //                                 {/* Branch Locator Link */}
// //                                 <Nav.Item>
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/swarn-sathi-branch-locator"
// //                                         active={isActive(
// //                                             "/swarn-sathi-branch-locator"
// //                                         )}
// //                                         className="nav-hover"
// //                                     >
// //                                         Branch Locator
// //                                     </Nav.Link>
// //                                 </Nav.Item>

// //                                 {/* About Us Dropdown */}
// //                                 <NavDropdown
// //                                     title="About us"
// //                                     id="about-dropdown"
// //                                     show={showAbout}
// //                                     onMouseEnter={() => setShowAbout(true)}
// //                                     onMouseLeave={() => setShowAbout(false)}
// //                                     className="nav-hover"
// //                                 >
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-company"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Our Company
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-core-values"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Our Core Values
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#our-team"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Our Team
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/about-swarn-sathi#careers"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Career
// //                                     </NavDropdown.Item>
// //                                 </NavDropdown>

// //                                 {/* Contact Us Link */}
// //                                 <Nav.Item>
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/contact-swarn-sathi"
// //                                         active={isActive(
// //                                             "/contact-swarn-sathi"
// //                                         )}
// //                                         className="nav-hover"
// //                                     >
// //                                         Contact us
// //                                     </Nav.Link>
// //                                 </Nav.Item>

// //                                 {/* Be Our Partner Dropdown */}
// //                                 <NavDropdown
// //                                     title="Be our partner"
// //                                     id="partner-dropdown"
// //                                     show={showPartner}
// //                                     onMouseEnter={() => setShowPartner(true)}
// //                                     onMouseLeave={() => setShowPartner(false)}
// //                                     className="nav-hover"
// //                                 >
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/swarnsathi-champion"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Swarn Sathi Champion
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/swarnsathi-partner"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Business Associate
// //                                     </NavDropdown.Item>
// //                                     <NavDropdown.Item
// //                                         as={Link}
// //                                         href="/lending-partner"
// //                                         className="dropdown-hover"
// //                                     >
// //                                         Lending Partner
// //                                     </NavDropdown.Item>
// //                                 </NavDropdown>

// //                                 {/* Login Link */}
// //                                 <Nav.Item className="roundmenu">
// //                                     <Nav.Link
// //                                         as={Link}
// //                                         href="/login"
// //                                         className="nav-hover"
// //                                         style={{
// //                                             color: "#fff",
// //                                             backgroundColor: isActive("/login")
// //                                                 ? "#fea123"
// //                                                 : "transparent",
// //                                         }}
// //                                     >
// //                                         Login
// //                                     </Nav.Link>
// //                                 </Nav.Item>
// //                             </Nav>
// //                         </Navbar.Collapse>
// //                     </Navbar>
// //                 </Container>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;


// "use client";

// import "./Header.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebookF,
//     faTwitter,
//     faLinkedinIn,
//     faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const TopSocialBar = () => (
//     <div className="overlay topsocial">
//         <Container>
//             <div className="row p-0">
//                 <div className="col-md-6"></div>
//                 <div className="col-md-6">
//                     <div className="social-link-top d-flex align-items-center justify-content-end gap-3">
//                         <a
//                             href="https://www.facebook.com/swarnsathi2022"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FontAwesomeIcon icon={faFacebookF} />
//                         </a>
//                         <a
//                             href="https://twitter.com/Swarnsathi2022"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FontAwesomeIcon icon={faTwitter} />
//                         </a>
//                         <a
//                             href="https://www.linkedin.com/company/swarn-sathi"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FontAwesomeIcon icon={faLinkedinIn} />
//                         </a>
//                         <a
//                             href="https://www.instagram.com/swarn_sathi/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FontAwesomeIcon icon={faInstagram} />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     </div>
// );

// const DropdownArrow = () => (
//     <span className="dropdown-arrow ms-2">
//         <svg
//             width="10"
//             height="6"
//             viewBox="0 0 10 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M1 1L5 5L9 1"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     </span>
// );

// const Header = () => {
//     const pathname = usePathname();
//     const isActive = (path: string) => pathname === path;
//     const [showAbout, setShowAbout] = useState(false);
//     const [showPartner, setShowPartner] = useState(false);

//     return (
//         <header className="header-section">
//             <TopSocialBar />
//             <div className="overlay">
//                 <Container>
//                     <Navbar expand="lg" className="navbar-light">
//                         <Navbar.Brand href="/">
//                             <img
//                                 src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
//                                 className="logo"
//                                 alt="logo"
//                                 width="300px"
//                             />
//                         </Navbar.Brand>
//                         <Navbar.Toggle aria-controls="navbar-content" />
//                         <Navbar.Collapse
//                             id="navbar-content"
//                             className="justify-content-end"
//                         >
//                             <Nav as="ul" className="mb-2 mb-lg-0">
//                                 {/* Home Link */}
//                                 <Nav.Item>
//                                     <Nav.Link
//                                         as={Link}
//                                         href="/"
//                                         className={`nav-hover ${
//                                             isActive("/") ? "active-link" : ""
//                                         }`}
//                                     >
//                                         Home
//                                     </Nav.Link>
//                                 </Nav.Item>

//                                 {/* Schemes Link */}
//                                 <Nav.Item>
//                                     <Nav.Link
//                                         as={Link}
//                                         href="/schemes"
//                                         className={`nav-hover ${
//                                             isActive("/schemes")
//                                                 ? "active-link"
//                                                 : ""
//                                         }`}
//                                     >
//                                         Schemes
//                                     </Nav.Link>
//                                 </Nav.Item>

//                                 {/* Branch Locator Link */}
//                                 <Nav.Item>
//                                     <Nav.Link
//                                         as={Link}
//                                         href="/swarn-sathi-branch-locator"
//                                         className={`nav-hover ${
//                                             isActive(
//                                                 "/swarn-sathi-branch-locator"
//                                             )
//                                                 ? "active-link"
//                                                 : ""
//                                         }`}
//                                     >
//                                         Branch Locator
//                                     </Nav.Link>
//                                 </Nav.Item>

//                                 {/* About Us Dropdown */}
//                                 <NavDropdown
//                                     title={
//                                         <>
//                                             <span>About us</span>
//                                             <DropdownArrow />
//                                         </>
//                                     }
//                                     id="about-dropdown"
//                                     show={showAbout}
//                                     onMouseEnter={() => setShowAbout(true)}
//                                     onMouseLeave={() => setShowAbout(false)}
//                                     className={`nav-hover ${
//                                         pathname.startsWith(
//                                             "/about-swarn-sathi"
//                                         )
//                                             ? "active-link"
//                                             : ""
//                                     }`}
//                                 >
//                                     <NavDropdown.Item
//                                         as={Link}
//                                         href="/about-swarn-sathi#our-company"
//                                         className="dropdown-hover"
//                                     >
//                                         Our Company
//                                     </NavDropdown.Item>
//                                     {/* ... other dropdown items ... */}
//                                 </NavDropdown>

//                                 {/* Contact Us Link */}
//                                 <Nav.Item>
//                                     <Nav.Link
//                                         as={Link}
//                                         href="/contact-swarn-sathi"
//                                         className={`nav-hover ${
//                                             isActive("/contact-swarn-sathi")
//                                                 ? "active-link"
//                                                 : ""
//                                         }`}
//                                     >
//                                         Contact us
//                                     </Nav.Link>
//                                 </Nav.Item>

//                                 {/* Be Our Partner Dropdown */}
//                                 <NavDropdown
//                                     title={
//                                         <>
//                                             <span>Be our partner</span>
//                                             <DropdownArrow />
//                                         </>
//                                     }
//                                     id="partner-dropdown"
//                                     show={showPartner}
//                                     onMouseEnter={() => setShowPartner(true)}
//                                     onMouseLeave={() => setShowPartner(false)}
//                                     className={`nav-hover ${
//                                         pathname.startsWith("/partner")
//                                             ? "active-link"
//                                             : ""
//                                     }`}
//                                 >
//                                     <NavDropdown.Item
//                                         as={Link}
//                                         href="/swarnsathi-champion"
//                                         className="dropdown-hover"
//                                     >
//                                         Swarn Sathi Champion
//                                     </NavDropdown.Item>
//                                     {/* ... other dropdown items ... */}
//                                 </NavDropdown>

//                                 {/* Login Link */}
//                                 <Nav.Item className="roundmenu">
//                                     <Nav.Link
//                                         as={Link}
//                                         href="/login"
//                                         className="nav-hover"
//                                         style={{
//                                             color: "#fff",
//                                             backgroundColor: isActive("/login")
//                                                 ? "#fea123"
//                                                 : "transparent",
//                                         }}
//                                     >
//                                         Login
//                                     </Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Navbar>
//                 </Container>
//             </div>
//         </header>
//     );
// };

// export default Header;


"use client";

import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TopSocialBar = () => (
    <div className="overlay topsocial">
        <Container>
            <div className="row p-0">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <div className="social-link-top d-flex align-items-center justify-content-end gap-3">
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

const Header = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const [showAbout, setShowAbout] = useState(false);
    const [showPartner, setShowPartner] = useState(false);

    return (
        <header className="header-section">
            <TopSocialBar />
            <div className="overlay">
                <Container>
                    <Navbar expand="lg" className="navbar-light">
                        <Navbar.Brand href="/">
                            <img
                                src="/assets/admin/img/18079e4870e2c0caa8a4da7b0bba083b.png"
                                className="logo"
                                alt="logo"
                                width="300px"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-content" />
                        <Navbar.Collapse
                            id="navbar-content"
                            className="justify-content-end"
                        >
                            <Nav
                                as="ul"
                                className="mb-2 mb-lg-0 align-items-center"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        href="/"
                                        className={`nav-hover ${
                                            isActive("/") ? "active-link" : ""
                                        }`}
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
                                    show={showAbout}
                                    onMouseEnter={() => setShowAbout(true)}
                                    onMouseLeave={() => setShowAbout(false)}
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
                                    >
                                        Our Company
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-core-values"
                                        className="dropdown-hover"
                                    >
                                        Our Core Values
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#our-team"
                                        className="dropdown-hover"
                                    >
                                        Our Team
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/about-swarn-sathi#careers"
                                        className="dropdown-hover"
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
                                    show={showPartner}
                                    onMouseEnter={() => setShowPartner(true)}
                                    onMouseLeave={() => setShowPartner(false)}
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
                                    >
                                        Swarn Sathi Champion
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/swarnsathi-partner"
                                        className="dropdown-hover"
                                    >
                                        Business Associate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        href="/lending-partner"
                                        className="dropdown-hover"
                                    >
                                        Lending Partner
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item className="roundmenu">
                                    <Nav.Link
                                        as={Link}
                                        href="/login"
                                        className="nav-hover"
                                        style={{
                                            color: "#fff",
                                            backgroundColor: isActive("/login")
                                                ? "#fea123"
                                                : "transparent",
                                        }}
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