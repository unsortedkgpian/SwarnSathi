// // import { useState } from "react";
// // // import "./TopBanner.css"; // Assume you have corresponding CSS

// // const TopBanner = () => {
// //     const [phoneNumber, setPhoneNumber] = useState("");
// //     const [validMessage, setValidMessage] = useState("");

// //     const validatePhoneNumber = () => {
// //         const regex = /^[789]\d{9}$/;
// //         if (regex.test(phoneNumber)) {
// //             setValidMessage("✓ Valid number");
// //             // Add your submit logic here
// //         } else {
// //             setValidMessage(
// //                 "Please enter a valid 10-digit phone number starting with 7, 8, or 9"
// //             );
// //         }
// //     };

// //     return (
// //         // <section className="banner-section topbanner" id="applysection">
// //         //     <div className="overlay">
// //         //         <div className="banner-content d-flex align-items-center">
// //         //             <div className="container">
// //         //                 <div className="row justify-content-start">
// //         //                     <div className="col-lg-7 col-md-10">
// //         //                         <div className="main-content">
// //         //                             <div className="top-area section-text justify-content-center">
// //         //                                 <h4 className="sub-title">
// //         //                                     Simple. Transparent. Secure
// //         //                                 </h4>
// //         //                                 <h1
// //         //                                     className="title"
// //         //                                     style={{
// //         //                                         color: "rgb(253, 160, 51)",
// //         //                                     }}
// //         //                                 >
// //         //                                     Super fast gold loan
// //         //                                 </h1>
// //         //                                 <p className="xlr">
// //         //                                     Customised product designed for all
// //         //                                     your financial needs
// //         //                                 </p>
// //         //                             </div>
// //         //                             <div className="align-items-center">
// //         //                                 <div className="row">
// //         //                                     <div className="col-md-8 col-sm-12 col-12">
// //         //                                         <div
// //         //                                             className="d-flex align-items-center mb-3"
// //         //                                             style={{
// //         //                                                 borderRadius: "30px",
// //         //                                                 border: "1px solid gold",
// //         //                                                 paddingRight: "3px",
// //         //                                                 background: "#8ed7fd91",
// //         //                                                 boxShadow:
// //         //                                                     "6px 7px 20px 0px #fc9f3e61",
// //         //                                             }}
// //         //                                         >
// //         //                                             <p className="phone-text">
// //         //                                                 +91
// //         //                                             </p>
// //         //                                             <input
// //         //                                                 type="text"
// //         //                                                 className="apply-now"
// //         //                                                 id="applynow"
// //         //                                                 autoComplete="off"
// //         //                                                 placeholder="Enter your phone number"
// //         //                                                 pattern="[789][0-9]{9}"
// //         //                                                 value={phoneNumber}
// //         //                                                 onChange={(e) =>
// //         //                                                     setPhoneNumber(
// //         //                                                         e.target.value
// //         //                                                     )
// //         //                                                 }
// //         //                                                 style={{ flex: 1 }}
// //         //                                             />
// //         //                                             <button
// //         //                                                 id="applybutton"
// //         //                                                 className="applybutton cmn-btn inputapply"
// //         //                                                 style={{
// //         //                                                     marginRight: 0,
// //         //                                                 }}
// //         //                                                 onClick={
// //         //                                                     validatePhoneNumber
// //         //                                                 }
// //         //                                             >
// //         //                                                 Apply now
// //         //                                             </button>
// //         //                                             <span
// //         //                                                 id="validno"
// //         //                                                 className="vaildno"
// //         //                                             >
// //         //                                                 {validMessage}
// //         //                                             </span>
// //         //                                         </div>
// //         //                                         <span className="callus">
// //         //                                             Call us at{" "}
// //         //                                             <a href="tel:033-4804-0009">
// //         //                                                 033-4804-0009
// //         //                                             </a>{" "}
// //         //                                             or WhatsApp at{" "}
// //         //                                             <a
// //         //                                                 target="_blank"
// //         //                                                 href="https://wa.me/7044494994"
// //         //                                                 rel="noreferrer"
// //         //                                             >
// //         //                                                 +91-7044494994
// //         //                                             </a>
// //         //                                         </span>
// //         //                                     </div>
// //         //                                 </div>
// //         //                             </div>
// //         //                         </div>
// //         //                     </div>
// //         //                 </div>
// //         //             </div>
// //         //         </div>
// //         //     </div>
// //         // </section>

// //         // <section className="banner-section topbanner" id="applysection">
// //         //     <div className="overlay">
// //         //         <div className="content-wrapper">
// //         //             <div className="top-area section-text">
// //         //                 <h4 className="sub-title">
// //         //                     Simple. Transparent. Secure
// //         //                 </h4>
// //         //                 <h1
// //         //                     className="title"
// //         //                     style={{ color: "rgb(253, 160, 51)" }}
// //         //                 >
// //         //                     Super fast gold loan
// //         //                 </h1>
// //         //                 <p className="xlr">
// //         //                     Customised product designed for all your financial
// //         //                     needs
// //         //                 </p>
// //         //             </div>
// //         //             <div className="input-container">
// //         //                 <p className="phone-text">+91</p>
// //         //                 <input
// //         //                     type="text"
// //         //                     className="apply-now"
// //         //                     id="applynow"
// //         //                     autoComplete="off"
// //         //                     placeholder="Enter your phone number"
// //         //                     value={phoneNumber}
// //         //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //         //                 />
// //         //                 <button
// //         //                     id="applybutton"
// //         //                     className="applybutton cmn-btn inputapply"
// //         //                     onClick={validatePhoneNumber}
// //         //                 >
// //         //                     Apply now
// //         //                 </button>
// //         //             </div>
// //         //             <span id="validno" className="vaildno">
// //         //                 {validMessage}
// //         //             </span>
// //         //             <span className="callus">
// //         //                 Call us at <a href="tel:033-4804-0009">033-4804-0009</a>{" "}
// //         //                 or WhatsApp at
// //         //                 <a
// //         //                     target="_blank"
// //         //                     href="https://wa.me/7044494994"
// //         //                     rel="noreferrer"
// //         //                 >
// //         //                     +91-7044494994
// //         //                 </a>
// //         //             </span>
// //         //         </div>
// //         //     </div>
// //         // </section>

// //         <section className="banner-section topbanner" id="applysection">
// //             <div className="overlay">
// //                 <div className="content-wrapper">
// //                     <div className="top-area section-text">
// //                         <h4 className="sub-title">
// //                             Simple. Transparent. Secure
// //                         </h4>
// //                         <h1
// //                             className="title"
// //                             style={{ color: "rgb(253, 160, 51)" }}
// //                         >
// //                             Super fast gold loan
// //                         </h1>
// //                         <p className="xlr">
// //                             Customised product designed for all your financial
// //                             needs
// //                         </p>
// //                     </div>
// //                     <div className="input-container">
// //                         <p className="phone-text">+91</p>
// //                         <input
// //                             type="text"
// //                             className="apply-now"
// //                             id="applynow"
// //                             autoComplete="off"
// //                             placeholder="Enter your phone number"
// //                             value={phoneNumber}
// //                             onChange={(e) => setPhoneNumber(e.target.value)}
// //                         />
// //                         <button
// //                             id="applybutton"
// //                             className="applybutton cmn-btn inputapply"
// //                             onClick={validatePhoneNumber}
// //                         >
// //                             Apply now
// //                         </button>
// //                     </div>
// //                     <span id="validno" className="vaildno">
// //                         {validMessage}
// //                     </span>
// //                     <span className="callus">
// //                         Call us at <a href="tel:033-4804-0009">033-4804-0009</a>{" "}
// //                         or WhatsApp at
// //                         <a
// //                             target="_blank"
// //                             href="https://wa.me/7044494994"
// //                             rel="noreferrer"
// //                         >
// //                             +91-7044494994
// //                         </a>
// //                     </span>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default TopBanner;


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// // import "./BannerSection.css";
// import './TopBanner.css'

// const TopBanner = () => {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [isValid, setIsValid] = useState(true);

//     const validatePhoneNumber = (number: string) => {
//         const regex = /^[789]\d{9}$/;
//         return regex.test(number);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setPhoneNumber(value);
//         setIsValid(validatePhoneNumber(value) || value === "");
//     };

//     const handleApplyNow = () => {
//         if (validatePhoneNumber(phoneNumber)) {
//             // Handle apply now logic
//             console.log("Valid phone number:", phoneNumber);
//         }
//     };

//     return (
//         <section className="banner-section topbanner" id="applysection">
//             <div className="overlay">
//                 <div className="banner-content d-flex align-items-center">
//                     <div className="container">
//                         <div className="row justify-content-start">
//                             <div className="col-lg-7 col-md-10">
//                                 <div className="main-content">
//                                     <div className="top-area section-text justify-content-center">
//                                         <h4 className="sub-title">
//                                             Simple. Transparent. Secure
//                                         </h4>
//                                         <h1
//                                             className="title"
//                                             style={{ color: "#fda033" }}
//                                         >
//                                             Super fast gold loan
//                                         </h1>
//                                         <p className="xlr">
//                                             Customised product designed for all
//                                             your financial needs
//                                         </p>
//                                     </div>
//                                     <div className="align-items-center">
//                                         <div className="row">
//                                             <div className="col-md-8 col-sm-12 col-12">
//                                                 <div className="input-container">
//                                                     <div className="phone-prefix">
//                                                         +91
//                                                     </div>
//                                                     <input
//                                                         type="text"
//                                                         className={`apply-now ${
//                                                             !isValid
//                                                                 ? "invalid"
//                                                                 : ""
//                                                         }`}
//                                                         placeholder="Enter your phone number"
//                                                         value={phoneNumber}
//                                                         onChange={
//                                                             handleInputChange
//                                                         }
//                                                         maxLength={10}
//                                                     />
//                                                     <button
//                                                         className="applybutton cmn-btn inputapply"
//                                                         onClick={handleApplyNow}
//                                                         disabled={
//                                                             !isValid ||
//                                                             phoneNumber.length !==
//                                                                 10
//                                                         }
//                                                     >
//                                                         Apply now
//                                                     </button>
//                                                     {!isValid && (
//                                                         <span className="error-message">
//                                                             Please enter a valid
//                                                             phone number
//                                                         </span>
//                                                     )}
//                                                 </div>
//                                                 <div className="contact-info">
//                                                     <FontAwesomeIcon
//                                                         icon={faPhone}
//                                                         className="contact-icon"
//                                                     />
//                                                     <span className="callus">
//                                                         Call us at{" "}
//                                                         <a
//                                                             href="tel:033-4804-0009"
//                                                             className="contact-link"
//                                                         >
//                                                             033-4804-0009
//                                                         </a>
//                                                     </span>
//                                                     <FontAwesomeIcon
//                                                         icon={faWhatsapp}
//                                                         className="contact-icon"
//                                                     />
//                                                     <span className="callus">
//                                                         WhatsApp at{" "}
//                                                         <a
//                                                             href="https://wa.me/7044494994"
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             className="contact-link"
//                                                         >
//                                                             +91-7044494994
//                                                         </a>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TopBanner;

"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import "./TopBanner.css";

const TopBanner = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");

    const validatePhoneNumber = async () => {
        const regex = /^[789]\d{9}$/;
        if (regex.test(phoneNumber)) {
            setValidMessage("✓ Valid number");
            try {
                console.log(process.env.NEXT_PUBLIC_API_URL)
                setIsLoading(true);
                setError(null);
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions/send-otp`, {
                    phone: phoneNumber
                });
                
                if (response.data) {
                    setValidMessage("OTP sent successfully!");
                    // Show OTP input field
                    setShowOtpInput(true);
                }
            } catch (err: unknown) {
                setError(err.response?.data?.message || 'Failed to send OTP');
                setValidMessage(err.response?.data?.message || 'Failed to send OTP');
            } finally {
                setIsLoading(false);
            }
        } else {
            setValidMessage(
                "Please enter a valid 10-digit phone number starting with 7, 8, or 9"
            );
        }
    };

    const verifyOtp = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/be-our-partner/verify-otp`, {
                phoneNumber: phoneNumber,
                otp: otp
            });
            
            if (response.data) {
                setValidMessage("OTP verified successfully!");
                // Handle successful verification (e.g., redirect or show next step)
            }
        } catch (err: unknown) {
            setError(err.response?.data?.message || 'Failed to verify OTP');
            setValidMessage(err.response?.data?.message || 'Failed to verify OTP');
        } finally {
            setIsLoading(false);
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
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? 'Loading...' : 'Apply now'}
                                                    </button>
                                                </div>
                                                <div className="validation-message">
                                                    {validMessage}
                                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                                </div>
                                                {showOtpInput && (
                                                    <div className="input-container mt-3">
                                                        <input
                                                            type="text"
                                                            className="apply-now"
                                                            placeholder="Enter OTP"
                                                            value={otp}
                                                            onChange={(e) => setOtp(e.target.value)}
                                                            maxLength={6}
                                                        />
                                                        <button
                                                            className="applybutton cmn-btn inputapply"
                                                            onClick={verifyOtp}
                                                            disabled={isLoading || otp.length !== 6}
                                                        >
                                                            {isLoading ? 'Verifying...' : 'Verify OTP'}
                                                        </button>
                                                    </div>
                                                )}
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
        </section>
    );
};

export default TopBanner;