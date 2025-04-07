// // // // "use client";

// // // // import { useState } from "react";

// // // // import Link from "next/link";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import { faPhone } from "@fortawesome/free-solid-svg-icons";
// // // // import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// // // // import axios from "axios";
// // // // import "./TopBanner.css";
// // // // import ModalComponent from "../HandleSubmit";
// // // // import { useRouter } from "next/navigation";
// // // // import { useContact } from "@/context/ContactContext";

// // // // const TopBanner = () => {
// // // //     const router = useRouter();
// // // //         const { contact, loading } = useContact();
// // // //         if (!contact) return <p>loading</p>;
// // // //         const phone = contact.phone;
// // // //         const telephone = contact.telephone;
// // // //         const urlo=`https://wa.me/91${phone}#${telephone}`;
// // // //     const [phoneNumber, setPhoneNumber] = useState("");
// // // //     const [validMessage, setValidMessage] = useState("");
// // // //     const [showModal, setShowModal] = useState(false);
// // // //     const [isLoading, setIsLoading] = useState(false);
// // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // //     const [otp, setOtp] = useState("");
// // // //     const [loanType, setLoanType] = useState("quick-gold-loan"); // Default loan type
// // // //     const url = process.env.NEXT_PUBLIC_API_URL;

// // // //     const validatePhoneNumber = async () => {
// // // //         const regex = /^[6789]\d{9}$/;
// // // //         if (regex.test(phoneNumber)) {
// // // //             setValidMessage("✓ Valid number");
// // // //             try {
// // // //                 setIsLoading(true);
// // // //                 console.log("------------------");
// // // //                 console.log(url);
// // // //                 const response = await axios.post(
// // // //                     `${url}/api/be-our-partner/send-otp`,
// // // //                     { phone: phoneNumber }
// // // //                 );

// // // //                 if (response.data) {
// // // //                     setValidMessage("OTP sent successfully!");
// // // //                     setShowOtpInput(true);
// // // //                 }
// // // //             } catch (err) {
// // // //                 const message =
// // // //                     err.response?.data?.message || "Failed to send OTP";
// // // //                 setValidMessage(message);
// // // //                 setShowOtpInput(false);
// // // //             } finally {
// // // //                 setIsLoading(false);
// // // //             }
// // // //         } else {
// // // //             setValidMessage(
// // // //                 "Please enter a valid 10-digit phone number starting with 6,7, 8, or 9"
// // // //             );
// // // //             setShowOtpInput(false);
// // // //         }
// // // //     };

// // // //     const verifyOtp = async () => {
// // // //         try {
// // // //             setIsLoading(true);
// // // //             const response = await axios.post(
// // // //                 `${url}/api/be-our-partner/verify-otp`,
// // // //                 { phone: phoneNumber, otp: otp }
// // // //             );

// // // //             if (response.data) {
// // // //                 setValidMessage("OTP verified successfully!");
// // // //                 setShowModal(true);
// // // //                 setShowOtpInput(false);
// // // //                 router.push("/");
// // // //             }
// // // //         } catch (err) {
// // // //             const message =
// // // //                 err.response?.data?.message || "Failed to verify OTP";
// // // //             setValidMessage(message);
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <section className="banner-section topbanner" id="applysection">
// // // //             <div className="overlay">
// // // //                 <div className="banner-content d-flex align-items-center">
// // // //                     <div className="container">
// // // //                         <div className="row justify-content-start">
// // // //                             <div className="col-lg-7 col-md-10">
// // // //                                 <div className="main-content">
// // // //                                     <div className="top-area section-text justify-content-center">
// // // //                                         <h4 className="sub-title">
// // // //                                             Simple. Transparent. Secure
// // // //                                         </h4>
// // // //                                         <h1
// // // //                                             style={{
// // // //                                                 color: "#fda033",
// // // //                                                 textTransform: "capitalize",
// // // //                                                 fontWeight: "600"
// // // //                                             }}
// // // //                                         >
// // // //                                             Super fast gold loan
// // // //                                         </h1>
// // // //                                         <p className="xlr">
// // // //                                             Customised product designed for all
// // // //                                             your financial needs
// // // //                                         </p>
// // // //                                     </div>
// // // //                                     <div className="align-items-center">
// // // //                                         <div className="row">
// // // //                                             <div className="col-md-8 col-sm-12 col-12">
// // // //                                                 <div
// // // //                                                     className="input-container"
// // // //                                                     style={{
// // // //                                                         background: "#8ed7fd91",
// // // //                                                     }}
// // // //                                                 >
// // // //                                                     <div className="phone-prefix">
// // // //                                                         +91
// // // //                                                     </div>
// // // //                                                     <input
// // // //                                                         type="text"
// // // //                                                         className={`apply-now ${
// // // //                                                             validMessage.includes(
// // // //                                                                 "✓"
// // // //                                                             )
// // // //                                                                 ? "valid"
// // // //                                                                 : ""
// // // //                                                         }`}
// // // //                                                         placeholder="Enter your phone number"
// // // //                                                         value={phoneNumber}
// // // //                                                         onChange={(e) =>
// // // //                                                             setPhoneNumber(
// // // //                                                                 e.target.value.replace(
// // // //                                                                     /\D/g,
// // // //                                                                     ""
// // // //                                                                 )
// // // //                                                             )
// // // //                                                         }
// // // //                                                         style={{}}
// // // //                                                         maxLength={10}
// // // //                                                     />
// // // //                                                     <button
// // // //                                                         className="applybutton cmn-btn inputapply"
// // // //                                                         onClick={
// // // //                                                             validatePhoneNumber
// // // //                                                         }
// // // //                                                         disabled={isLoading}
// // // //                                                     >
// // // //                                                         {isLoading
// // // //                                                             ? "Loading..."
// // // //                                                             : "Apply now"}
// // // //                                                     </button>
// // // //                                                 </div>
// // // //                                                 <div className="validation-message">
// // // //                                                     {validMessage}
// // // //                                                 </div>
// // // //                                                 {showOtpInput && (
// // // //                                                     <div className="input-container mt-3">
// // // //                                                         <input
// // // //                                                             type="text"
// // // //                                                             className="apply-now"
// // // //                                                             placeholder="Enter OTP"
// // // //                                                             value={otp}
// // // //                                                             onChange={(e) =>
// // // //                                                                 setOtp(
// // // //                                                                     e.target.value.replace(
// // // //                                                                         /\D/g,
// // // //                                                                         ""
// // // //                                                                     )
// // // //                                                                 )
// // // //                                                             }
// // // //                                                             maxLength={6}
// // // //                                                         />
// // // //                                                         <button
// // // //                                                             className="applybutton cmn-btn inputapply"
// // // //                                                             onClick={verifyOtp}
// // // //                                                             disabled={
// // // //                                                                 isLoading ||
// // // //                                                                 otp.length !== 6
// // // //                                                             }
// // // //                                                         >
// // // //                                                             {isLoading
// // // //                                                                 ? "Verifying..."
// // // //                                                                 : "Verify OTP"}
// // // //                                                         </button>
// // // //                                                     </div>
// // // //                                                 )}
// // // //                                                 <div className="contact-info">
// // // //                                                     <div>
// // // //                                                         <FontAwesomeIcon
// // // //                                                             icon={faPhone}
// // // //                                                             className="contact-icon"
// // // //                                                         />
// // // //                                                         <span className="callus">
// // // //                                                             Call us at{" "}
// // // //                                                             <Link
// // // //                                                                 href="tel:+9103348040009"
// // // //                                                                 className="contact-link"
// // // //                                                             >
// // // //                                                                 {contact.telephone}
// // // //                                                             </Link>
// // // //                                                         </span>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <FontAwesomeIcon
// // // //                                                             icon={faWhatsapp}
// // // //                                                             className="contact-icon"
// // // //                                                         />
// // // //                                                         <span className="callus">
// // // //                                                             WhatsApp{" "}
// // // //                                                             <Link
// // // //                                                                 href={urlo}
// // // //                                                                 target="_blank"
// // // //                                                                 rel="noopener noreferrer"
// // // //                                                                 className="contact-link"
// // // //                                                             >
// // // //                                                                 +91-{contact.phone}
// // // //                                                             </Link>
// // // //                                                         </span>
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <div className="modal-container flex justify-center items-center">
// // // //             <ModalComponent
// // // //                 show={showModal}
// // // //                 onClose={() => setShowModal(false)}
// // // //                 phoneNumber={phoneNumber}
// // // //                 loanType={loanType}
// // // //             />
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default TopBanner;

// // // "use client";

// // // import { useState } from "react";

// // // import Link from "next/link";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faPhone } from "@fortawesome/free-solid-svg-icons";
// // // import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// // // import axios from "axios";
// // // import "./TopBanner.css";
// // // import ModalComponent from "../HandleSubmit";
// // // import { useRouter } from "next/navigation";
// // // import { useContact } from "@/context/ContactContext";

// // // const TopBanner = () => {
// // //     const router = useRouter();
// // //     const { contact, loading } = useContact();

// // //     // Handle the case when contact is not available
// // //     if (loading) return <p>Loading...</p>;
// // //     if (!contact) return <p>Contact information not available</p>;

// // //     const phone = contact.phone || "";
// // //     const telephone = contact.telephone || "";
// // //     const urlo = `https://wa.me/91${phone}#${telephone}`;

// // //     const [phoneNumber, setPhoneNumber] = useState("");
// // //     const [validMessage, setValidMessage] = useState("");
// // //     const [showModal, setShowModal] = useState(false);
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // //     const [otp, setOtp] = useState("");
// // //     const [loanType, setLoanType] = useState("quick-gold-loan"); // Default loan type
// // //     const url = process.env.NEXT_PUBLIC_API_URL || ""; // Provide a fallback

// // //     const validatePhoneNumber = async () => {
// // //         const regex = /^[6789]\d{9}$/;
// // //         if (regex.test(phoneNumber)) {
// // //             setValidMessage("✓ Valid number");
// // //             try {
// // //                 setIsLoading(true);
// // //                 console.log("API URL:", url);

// // //                 // Check if the URL is available
// // //                 if (!url) {
// // //                     throw new Error("API URL is not configured");
// // //                 }

// // //                 const response = await axios.post(
// // //                     `/api/send-otp`,
// // //                     { phone: phoneNumber }
// // //                 );

// // //                 if (response.data) {
// // //                     setValidMessage("OTP sent successfully!");
// // //                     setShowOtpInput(true);
// // //                 }
// // //             } catch (err) {
// // //                 console.error("Error sending OTP:", err);
// // //                 const message =
// // //                     err.response?.data?.message || "Failed to send OTP";
// // //                 setValidMessage(message);
// // //                 setShowOtpInput(false);
// // //             } finally {
// // //                 setIsLoading(false);
// // //             }
// // //         } else {
// // //             setValidMessage(
// // //                 "Please enter a valid 10-digit phone number starting with 6,7, 8, or 9"
// // //             );
// // //             setShowOtpInput(false);
// // //         }
// // //     };

// // //     const verifyOtp = async () => {
// // //         try {
// // //             setIsLoading(true);

// // //             // Check if the URL is available
// // //             if (!url) {
// // //                 throw new Error("API URL is not configured");
// // //             }

// // //             const response = await axios.post(
// // //                 `/api/verify-otp`,
// // //                 { phone: phoneNumber, otp: otp }
// // //             );

// // //             if (response.data) {
// // //                 setValidMessage("OTP verified successfully!");
// // //                 setShowModal(true); // Show the modal
// // //                 setShowOtpInput(false);

// // //                 // Remove the redirect to allow the modal to show
// // //                 // router.push("/");
// // //             }
// // //         } catch (err) {
// // //             console.error("Error verifying OTP:", err);
// // //             const message =
// // //                 err.response?.data?.message || "Failed to verify OTP";
// // //             setValidMessage(message);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     const handleModalClose = () => {
// // //         setShowModal(false);
// // //         // Navigate to home page after closing the modal
// // //         router.push("/");
// // //     };

// // //     return (
// // //         <section className="banner-section topbanner" id="applysection">
// // //             <div className="overlay">
// // //                 <div className="banner-content d-flex align-items-center">
// // //                     <div className="container">
// // //                         <div className="row justify-content-start">
// // //                             <div className="col-lg-7 col-md-10">
// // //                                 <div className="main-content">
// // //                                     <div className="top-area section-text justify-content-center">
// // //                                         <h4 className="sub-title">
// // //                                             Simple. Transparent. Secure
// // //                                         </h4>
// // //                                         <h1
// // //                                             style={{
// // //                                                 color: "#fda033",
// // //                                                 textTransform: "capitalize",
// // //                                                 fontWeight: "600",
// // //                                             }}
// // //                                         >
// // //                                             Super fast gold loan
// // //                                         </h1>
// // //                                         <p className="xlr">
// // //                                             Customised product designed for all
// // //                                             your financial needs
// // //                                         </p>
// // //                                     </div>
// // //                                     <div className="align-items-center">
// // //                                         <div className="row">
// // //                                             <div className="col-md-8 col-sm-12 col-12">
// // //                                                 <div
// // //                                                     className="input-container"
// // //                                                     style={{
// // //                                                         background: "#8ed7fd91",
// // //                                                     }}
// // //                                                 >
// // //                                                     <div className="phone-prefix">
// // //                                                         +91
// // //                                                     </div>
// // //                                                     <input
// // //                                                         type="text"
// // //                                                         className={`apply-now ${
// // //                                                             validMessage.includes(
// // //                                                                 "✓"
// // //                                                             )
// // //                                                                 ? "valid"
// // //                                                                 : ""
// // //                                                         }`}
// // //                                                         placeholder="Enter your phone number"
// // //                                                         value={phoneNumber}
// // //                                                         onChange={(e) =>
// // //                                                             setPhoneNumber(
// // //                                                                 e.target.value.replace(
// // //                                                                     /\D/g,
// // //                                                                     ""
// // //                                                                 )
// // //                                                             )
// // //                                                         }
// // //                                                         style={{}}
// // //                                                         maxLength={10}
// // //                                                     />
// // //                                                     <button
// // //                                                         className="applybutton cmn-btn inputapply"
// // //                                                         onClick={
// // //                                                             validatePhoneNumber
// // //                                                         }
// // //                                                         disabled={isLoading}
// // //                                                     >
// // //                                                         {isLoading
// // //                                                             ? "Loading..."
// // //                                                             : "Apply now"}
// // //                                                     </button>
// // //                                                 </div>
// // //                                                 <div className="validation-message">
// // //                                                     {validMessage}
// // //                                                 </div>
// // //                                                 {showOtpInput && (
// // //                                                     <div className="input-container mt-3">
// // //                                                         <input
// // //                                                             type="text"
// // //                                                             className="apply-now"
// // //                                                             placeholder="Enter OTP"
// // //                                                             value={otp}
// // //                                                             onChange={(e) =>
// // //                                                                 setOtp(
// // //                                                                     e.target.value.replace(
// // //                                                                         /\D/g,
// // //                                                                         ""
// // //                                                                     )
// // //                                                                 )
// // //                                                             }
// // //                                                             maxLength={6}
// // //                                                         />
// // //                                                         <button
// // //                                                             className="applybutton cmn-btn inputapply"
// // //                                                             onClick={verifyOtp}
// // //                                                             disabled={
// // //                                                                 isLoading ||
// // //                                                                 otp.length !== 6
// // //                                                             }
// // //                                                         >
// // //                                                             {isLoading
// // //                                                                 ? "Verifying..."
// // //                                                                 : "Verify OTP"}
// // //                                                         </button>
// // //                                                     </div>
// // //                                                 )}
// // //                                                 <div className="contact-info">
// // //                                                     <div>
// // //                                                         <FontAwesomeIcon
// // //                                                             icon={faPhone}
// // //                                                             className="contact-icon"
// // //                                                         />
// // //                                                         <span className="callus">
// // //                                                             Call us at{" "}
// // //                                                             <Link
// // //                                                                 href={`tel:+91${telephone}`}
// // //                                                                 className="contact-link"
// // //                                                             >
// // //                                                                 {telephone}
// // //                                                             </Link>
// // //                                                         </span>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <FontAwesomeIcon
// // //                                                             icon={faWhatsapp}
// // //                                                             className="contact-icon"
// // //                                                         />
// // //                                                         <span className="callus">
// // //                                                             WhatsApp{" "}
// // //                                                             <Link
// // //                                                                 href={urlo}
// // //                                                                 target="_blank"
// // //                                                                 rel="noopener noreferrer"
// // //                                                                 className="contact-link"
// // //                                                             >
// // //                                                                 +91-{phone}
// // //                                                             </Link>
// // //                                                         </span>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div className="modal-container flex justify-center items-center">
// // //                 <ModalComponent
// // //                     show={showModal}
// // //                     onClose={handleModalClose}
// // //                     phoneNumber={phoneNumber}
// // //                     loanType={loanType}
// // //                 />
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default TopBanner;

// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faPhone } from "@fortawesome/free-solid-svg-icons";
// // import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// // import axios from "axios";
// // import "./TopBanner.css";
// // import ModalComponent from "../HandleSubmit";
// // import { useRouter } from "next/navigation";
// // import { useContact } from "@/context/ContactContext";

// // const TopBanner = () => {
// //     const router = useRouter();
// //     const { contact, loading } = useContact();
// //     const [apiAvailable, setApiAvailable] = useState(true);

// //     // State variables
// //     const [phoneNumber, setPhoneNumber] = useState("");
// //     const [validMessage, setValidMessage] = useState("");
// //     const [showModal, setShowModal] = useState(false);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [showOtpInput, setShowOtpInput] = useState(false);
// //     const [otp, setOtp] = useState("");
// //     const [genOtp, setGenOtp] = useState("");
// //     const url = process.env.NEXT_PUBLIC_API_URL || "";

// //     // Check API availability on mount
// //     useEffect(() => {
// //         const checkApiAvailability = async () => {
// //             try {
// //                 const response = await axios.head(`${url}/api/registration`);
// //                 if (response.status === 404) {
// //                     setApiAvailable(false);
// //                 }
// //             } catch (error) {
// //                 if (error.response?.status === 404) {
// //                     setApiAvailable(false);
// //                 }
// //             }
// //         };
// //         checkApiAvailability();
// //     }, [url]);

// //     // Handle API availability and contact loading
// //     if (!apiAvailable) return null;
// //     if (loading) return <p>Loading...</p>;
// //     if (!contact) return <p>Contact information not available</p>;

// //     const phone = contact.phone || "";
// //     const telephone = contact.telephone || "";
// //     const urlo = `https://wa.me/91${phone}#${telephone}`;

// //     const validatePhoneNumber = async () => {
// //         const regex = /^[6789]\d{9}$/;
// //         if (!regex.test(phoneNumber)) {
// //             setValidMessage(
// //                 "Please enter a valid 10-digit number starting with 6,7,8, or 9"
// //             );
// //             return;
// //         }

// //         try {
// //             setIsLoading(true);
// //             const response = await axios.post(`/api/send-otp`, {
// //                 phone: phoneNumber,
// //                 type: "gold_loan",
// //             });

// //             if (response.data.success) {
// //                 setValidMessage("OTP sent successfully!");
// //                 setShowOtpInput(true);
// //                 setGenOtp(response.data.genOtp);
// //             } else {
// //                 setValidMessage(response.data.message || "Failed to send OTP");
// //             }
// //         } catch (err) {
// //             if (err.response?.status === 404) {
// //                 setApiAvailable(false);
// //                 return;
// //             }
// //             setValidMessage(
// //                 err.response?.data?.message || "Failed to send OTP"
// //             );
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const verifyOtp = async () => {
// //         if (otp.length !== 6) {
// //             setValidMessage("Please enter a valid 6-digit OTP");
// //             return;
// //         }

// //         try {
// //             setIsLoading(true);
// //             // Verify OTP
// //             const verifyResponse = await axios.post(`/api/verify-otp`, {
// //                 phone: phoneNumber,
// //                 otp: otp,
// //                 genOtp: genOtp,
// //             });

// //             if (!verifyResponse.data.success) {
// //                 throw new Error("OTP verification failed");
// //             }

// //             // Submit registration
// //             const registrationResponse = await axios.post(
// //                 `${url}/api/registration`,
// //                 {
// //                     phone: phoneNumber,
// //                     type: "gold_loan",
// //                 }
// //             );

// //             setShowModal(true);
// //             setValidMessage("Registration successful!");
// //             setShowOtpInput(false);
// //         } catch (err) {
// //             if (err.response?.status === 404) {
// //                 setApiAvailable(false);
// //                 return;
// //             }
// //             setValidMessage(
// //                 err.response?.data?.message ||
// //                     "Registration failed. Please try again."
// //             );
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const handleModalClose = () => {
// //         setShowModal(false);
// //         router.push("/");
// //     };

// //     return (
// //         <section className="banner-section topbanner" id="applysection">
// //             {/* ... (keep existing JSX structure unchanged) */}
// //             <div
// //                 className="input-container"
// //                 style={{ background: "#8ed7fd91" }}
// //             >
// //                 <div className="phone-prefix">+91</div>
// //                 <input
// //                     type="text"
// //                     className={`apply-now ${
// //                         validMessage.includes("✓") ? "valid" : ""
// //                     }`}
// //                     placeholder="Enter your phone number"
// //                     value={phoneNumber}
// //                     onChange={(e) =>
// //                         setPhoneNumber(e.target.value.replace(/\D/g, ""))
// //                     }
// //                     maxLength={10}
// //                 />
// //                 <button
// //                     className="applybutton cmn-btn inputapply"
// //                     onClick={validatePhoneNumber}
// //                     disabled={isLoading}
// //                 >
// //                     {isLoading ? "Loading..." : "Apply now"}
// //                 </button>
// //             </div>
// //             {/* ... (rest of the JSX remains similar) */}
// //             <div className="modal-container flex justify-center items-center">
// //                 <ModalComponent
// //                     show={showModal}
// //                     onClose={handleModalClose}
// //                     phoneNumber={phoneNumber}
// //                     loanType="gold_loan"
// //                 />
// //             </div>
// //         </section>
// //     );
// // };

// // export default TopBanner;

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import axios from "axios";
// import "./TopBanner.css";
// import ModalComponent from "../HandleSubmit";
// import { useRouter } from "next/navigation";
// import { useContact } from "@/context/ContactContext";

// const TopBanner = () => {
//     const router = useRouter();
//     const { contact, loading } = useContact();
//     const [apiAvailable, setApiAvailable] = useState(true);

//     // State variables
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [validMessage, setValidMessage] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [showOtpInput, setShowOtpInput] = useState(false);
//     const [otp, setOtp] = useState("");
//     const [genOtp, setGenOtp] = useState("");
//     const url = process.env.NEXT_PUBLIC_API_URL || "";

//     // Check API availability on mount
//     useEffect(() => {
//         const checkApiAvailability = async () => {
//             try {
//                 await axios.head(`${url}/api/registration`);
//                 setApiAvailable(true);
//             } catch (error) {
//                 console.error("API availability check failed:", error);
//                 // Only set false if we got a 404 response
//                 if (error.response?.status === 404) {
//                     setApiAvailable(false);
//                 }
//             }
//         };

//         if (url) {
//             checkApiAvailability();
//         }
//     }, [url]);

//     // Render conditionals for loading states
//     if (loading) return <p className="text-center p-4">Loading...</p>;

//     // This conditional should be after getting contact info
//     const contactInfo = contact || {};
//     const phone = contact.phone || "";
//     const telephone = contact.telephone || "";
//     const urlo = `https://wa.me/91${phone}#${telephone}`;

//     const validatePhoneNumber = async () => {
//         const regex = /^[6789]\d{9}$/;
//         if (!regex.test(phoneNumber)) {
//             setValidMessage(
//                 "Please enter a valid 10-digit number starting with 6,7,8, or 9"
//             );
//             return;
//         }

//         try {
//             setIsLoading(true);
//             setValidMessage("Sending OTP...");

//             // Use the correct API endpoint
//             const apiEndpoint = `${url}/api/send-otp`;
//             console.log("Sending OTP request to:", apiEndpoint);

//             const response = await axios.post(apiEndpoint, {
//                 phone: phoneNumber,
//                 type: "gold_loan",
//             });

//             if (response.data.success) {
//                 setValidMessage("✓ OTP sent successfully!");
//                 setShowOtpInput(true);
//                 setGenOtp(response.data.genOtp);
//             } else {
//                 setValidMessage(response.data.message || "Failed to send OTP");
//             }
//         } catch (err) {
//             console.error("Error sending OTP:", err);

//             // Check for API availability
//             if (err.response?.status === 404) {
//                 setApiAvailable(false);
//                 setValidMessage(
//                     "Service currently unavailable. Please try again later."
//                 );
//                 return;
//             }

//             setValidMessage(
//                 err.response?.data?.message ||
//                     "Failed to send OTP. Please try again."
//             );
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const verifyOtp = async () => {
//         if (otp.length !== 6) {
//             setValidMessage("Please enter a valid 6-digit OTP");
//             return;
//         }

//         try {
//             setIsLoading(true);
//             setValidMessage("Verifying OTP...");

//             // Use the correct API endpoint
//             const verifyEndpoint = `${url}/api/verify-otp`;
//             console.log("Verifying OTP at:", verifyEndpoint);

//             // Verify OTP
//             const verifyResponse = await axios.post(verifyEndpoint, {
//                 phone: phoneNumber,
//                 otp: otp,
//                 genOtp: genOtp,
//             });

//             if (!verifyResponse.data.success) {
//                 throw new Error(
//                     verifyResponse.data.message || "OTP verification failed"
//                 );
//             }

//             setValidMessage("✓ OTP verified successfully!");

//             // Submit registration
//             const registrationEndpoint = `${url}/api/registration`;
//             console.log("Submitting registration to:", registrationEndpoint);

//             const registrationResponse = await axios.post(
//                 registrationEndpoint,
//                 {
//                     phone: phoneNumber,
//                     type: "gold_loan",
//                 }
//             );

//             if (!registrationResponse.data.success) {
//                 throw new Error(
//                     registrationResponse.data.message || "Registration failed"
//                 );
//             }

//             setValidMessage("Registration successful!");
//             setShowModal(true);
//             setShowOtpInput(false);
//         } catch (err) {
//             console.error("Error during verification/registration:", err);

//             // Check for API availability
//             if (err.response?.status === 404) {
//                 setApiAvailable(false);
//                 setValidMessage(
//                     "Service currently unavailable. Please try again later."
//                 );
//                 return;
//             }

//             setValidMessage(
//                 err.message ||
//                     err.response?.data?.message ||
//                     "Verification failed. Please try again."
//             );
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleModalClose = () => {
//         setShowModal(false);
//         router.push("/");
//     };

//     // If API is not available, don't show the form, show fallback UI
//     // if (!apiAvailable) {
//         return (
//             <section className="banner-section topbanner" id="applysection">
//                 <div className="overlay">
//                     <div className="banner-content d-flex align-items-center">
//                         <div className="container">
//                             <div className="row justify-content-start">
//                                 <div className="col-lg-7 col-md-10">
//                                     <div className="main-content">
//                                         <div className="top-area section-text justify-content-center">
//                                             <h4 className="sub-title">
//                                                 Simple. Transparent. Secure
//                                             </h4>
//                                             <h1
//                                                 style={{
//                                                     color: "#fda033",
//                                                     textTransform: "capitalize",
//                                                     fontWeight: "600",
//                                                 }}
//                                             >
//                                                 Super fast gold loan
//                                             </h1>
//                                             <p className="xlr">
//                                                 Customised product designed for
//                                                 all your financial needs
//                                             </p>

//                                             <div className="mt-4 p-3 bg-amber-100 border border-amber-300 rounded">
//                                                 <p>
//                                                     Online application is
//                                                     currently unavailable.
//                                                     Please contact us directly:
//                                                 </p>

//                                                 <div className="contact-info mt-3">
//                                                     <div className="mb-2">
//                                                         <FontAwesomeIcon
//                                                             icon={faPhone}
//                                                             className="contact-icon"
//                                                         />
//                                                         <span className="callus">
//                                                             Call us at{" "}
//                                                             <Link
//                                                                 href={`tel:+91${telephone}`}
//                                                                 className="contact-link"
//                                                             >
//                                                                 {telephone ||
//                                                                     "Contact Number"}
//                                                             </Link>
//                                                         </span>
//                                                     </div>
//                                                     <div>
//                                                         <FontAwesomeIcon
//                                                             icon={faWhatsapp}
//                                                             className="contact-icon"
//                                                         />
//                                                         <span className="callus">
//                                                             WhatsApp{" "}
//                                                             <Link
//                                                                 href={urlo}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="contact-link"
//                                                             >
//                                                                 +91-
//                                                                 {phone ||
//                                                                     "WhatsApp Number"}
//                                                             </Link>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );

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
//                                             style={{
//                                                 color: "#fda033",
//                                                 textTransform: "capitalize",
//                                                 fontWeight: "600",
//                                             }}
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
//                                                 <div
//                                                     className="input-container"
//                                                     style={{
//                                                         background: "#8ed7fd91",
//                                                     }}
//                                                 >
//                                                     <div className="phone-prefix">
//                                                         +91
//                                                     </div>
//                                                     <input
//                                                         type="text"
//                                                         className={`apply-now ${
//                                                             validMessage.includes(
//                                                                 "✓"
//                                                             )
//                                                                 ? "valid"
//                                                                 : ""
//                                                         }`}
//                                                         placeholder="Enter your phone number"
//                                                         value={phoneNumber}
//                                                         onChange={(e) =>
//                                                             setPhoneNumber(
//                                                                 e.target.value.replace(
//                                                                     /\D/g,
//                                                                     ""
//                                                                 )
//                                                             )
//                                                         }
//                                                         maxLength={10}
//                                                     />
//                                                     <button
//                                                         className="applybutton cmn-btn inputapply"
//                                                         onClick={
//                                                             validatePhoneNumber
//                                                         }
//                                                         disabled={isLoading}
//                                                     >
//                                                         {isLoading
//                                                             ? "Loading..."
//                                                             : "Apply now"}
//                                                     </button>
//                                                 </div>
//                                                 <div className="validation-message">
//                                                     {validMessage}
//                                                 </div>
//                                                 {showOtpInput && (
//                                                     <div className="input-container mt-3">
//                                                         <input
//                                                             type="text"
//                                                             className="apply-now"
//                                                             placeholder="Enter OTP"
//                                                             value={otp}
//                                                             onChange={(e) =>
//                                                                 setOtp(
//                                                                     e.target.value.replace(
//                                                                         /\D/g,
//                                                                         ""
//                                                                     )
//                                                                 )
//                                                             }
//                                                             maxLength={6}
//                                                         />
//                                                         <button
//                                                             className="applybutton cmn-btn inputapply"
//                                                             onClick={verifyOtp}
//                                                             disabled={
//                                                                 isLoading ||
//                                                                 otp.length !== 6
//                                                             }
//                                                         >
//                                                             {isLoading
//                                                                 ? "Verifying..."
//                                                                 : "Verify OTP"}
//                                                         </button>
//                                                     </div>
//                                                 )}
//                                                 <div className="contact-info">
//                                                     <div>
//                                                         <FontAwesomeIcon
//                                                             icon={faPhone}
//                                                             className="contact-icon"
//                                                         />
//                                                         <span className="callus">
//                                                             Call us at{" "}
//                                                             <Link
//                                                                 href={`tel:+91${telephone}`}
//                                                                 className="contact-link"
//                                                             >
//                                                                 {telephone ||
//                                                                     "Contact Number"}
//                                                             </Link>
//                                                         </span>
//                                                     </div>
//                                                     <div>
//                                                         <FontAwesomeIcon
//                                                             icon={faWhatsapp}
//                                                             className="contact-icon"
//                                                         />
//                                                         <span className="callus">
//                                                             WhatsApp{" "}
//                                                             <Link
//                                                                 href={urlo}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="contact-link"
//                                                             >
//                                                                 +91-
//                                                                 {phone ||
//                                                                     "WhatsApp Number"}
//                                                             </Link>
//                                                         </span>
//                                                     </div>
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

//             <div className="modal-container flex justify-center items-center">
//                 <ModalComponent
//                     show={showModal}
//                     onClose={handleModalClose}
//                     phoneNumber={phoneNumber}
//                     loanType="gold_loan"
//                 />
//             </div>
//         </section>
//     );
// }

// export default TopBanner;

"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./TopBanner.css";
import ModalComponent from "../HandleSubmit";
import { useRouter } from "next/navigation";
import { useContact } from "@/context/ContactContext";

const TopBanner = () => {
    const router = useRouter();
    const { contact, loading } = useContact();

    // State variables
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");
    const [genOtp, setGenOtp] = useState("");
    const url = process.env.NEXT_PUBLIC_API_URL || "";

    // Render conditionals for loading states
    if (loading) return <p className="text-center p-4">Loading...</p>;

    // Get contact info
    // const contactInfo = contact || {};
    const phone = contact.phone || "";
    const telephone = contact.telephone || "";
    const urlo = `https://wa.me/91${phone}#${telephone}`;

    const validatePhoneNumber = async () => {
        const regex = /^[6789]\d{9}$/;
        if (!regex.test(phoneNumber)) {
            setValidMessage(
                "Please enter a valid 10-digit number starting with 6,7,8, or 9"
            );
            return;
        }

        try {
            setIsLoading(true);
            setValidMessage("Sending OTP...");

            // Use the correct API endpoint
            const apiEndpoint = `/api/send-otp`;
            console.log("Sending OTP request to:", apiEndpoint);

            const response = await axios.post(apiEndpoint, {
                phone: phoneNumber,
                type: "gold_loan",
            });
            console.log("response from /api/send-otp");
            console.log(response);
            if (response.data.success) {
                setValidMessage("✓ OTP sent successfully!");
                setShowOtpInput(true);
                setGenOtp(response.data.genOtp);
            } else {
                setValidMessage(response.data?.message || "Failed to send OTP");
            }
        } catch (err) {
            console.error("Error sending OTP:", err);
            setValidMessage(
                err.response?.data?.message ||
                    "Failed to send OTP. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    // const verifyOtp = async () => {
    //     if (otp.length !== 6) {
    //         setValidMessage("Please enter a valid 6-digit OTP");
    //         return;
    //     }

    //     try {
    //         setIsLoading(true);
    //         setValidMessage("Verifying OTP...");

    //         // Use the correct API endpoint
    //         const verifyEndpoint = `/api/verify-otp`;
    //         console.log("Verifying OTP at:", verifyEndpoint);

    //         // Verify OTP
    //         const verifyResponse = await axios.post(verifyEndpoint, {
    //             phone: phoneNumber,
    //             otp: otp,
    //             genOtp: genOtp,
    //         });

    //         if (!verifyResponse.data.success) {
    //             throw new Error(
    //                 verifyResponse.data.message || "OTP verification failed"
    //             );
    //         }

    //         setValidMessage("✓ OTP verified successfully!");

    //         // Submit registration
    //         const registrationEndpoint = `${url}/api/registration`;
    //         console.log("Submitting registration to:", registrationEndpoint);

    //         const registrationResponse = await axios.post(
    //             registrationEndpoint,
    //             {
    //                 phone: phoneNumber,
    //                 type: "gold_loan",
    //             }
    //         );

    //         if (!registrationResponse.data.success) {
    //             throw new Error(
    //                 registrationResponse.data.message || "Registration failed"
    //             );
    //         }

    //         setValidMessage("Registration successful!");
    //         setShowModal(true);
    //         setShowOtpInput(false);
    //     } catch (err) {
    //         console.error("Error during verification/registration:", err);
    //         setValidMessage(
    //             err.message ||
    //                 err.response?.data?.message ||
    //                 "Verification failed. Please try again."
    //         );
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const verifyOtp = async () => {
    //     if (!/^\d{6}$/.test(otp)) {
    //         setValidMessage("Please enter a valid 6-digit OTP");
    //         return;
    //     }

    //     try {
    //         setIsLoading(true);
    //         setValidMessage(null); // Clear any previous messages

    //         // Step 1: Verify OTP
    //         const verifyResponse = await axios.post(`/api/verify-otp`, {
    //             phone: phoneNumber,
    //             otp: otp,
    //             genOtp: genOtp,
    //         });

    //         if (!verifyResponse.data.success) {
    //             setValidMessage(verifyResponse.data.message || "Invalid OTP");
    //             return;
    //         }

    //         setValidMessage("✓ OTP verified successfully!");

    //         // Step 2: Submit Registration
    //         const registrationResponse = await axios.post(
    //             `${url}/api/registration`,
    //             {
    //                 phone: phoneNumber,
    //                 type: "gold_loan",
    //             }
    //         );

    //         if (!registrationResponse.data.success) {
    //             setValidMessage(
    //                 registrationResponse.data.message || "Registration failed"
    //             );
    //             return;
    //         }

    //         setValidMessage("Registration successful!");
    //         setShowModal(true);
    //         setShowOtpInput(false);
    //     } catch (err) {
    //         console.error("Error during verification/registration:", err);
    //         setValidMessage(
    //             err.response?.data?.message ||
    //                 err.message ||
    //                 "Verification failed. Please try again."
    //         );
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const verifyOtp = async () => {
        console.log("here atleast");
        if (!/^\d{6}$/.test(otp)) {
            setValidMessage("Please enter a valid 6-digit OTP");
            return;
        }
        console.log("---1---");

        try {
            console.log("---2---");
            setIsLoading(true);
            setValidMessage(""); // Clear previous messages

            // Step 1: Verify OTP
            const verifyResponse = await axios.post(`/api/verify-otp`, {
                phoneNumber: phoneNumber, // ✅ Corrected key
                otp,
                genOtp,
            });
            console.log("---3---");
            console.log({ verifyResponse });

            if (!verifyResponse.data.success) {
                setValidMessage(verifyResponse.data.message || "Invalid OTP");
                return;
            }
            console.log("---4---");
            setValidMessage("✓ OTP verified successfully!");

            // Step 2: Registration
            const registrationResponse = await axios.post(
                `${url}/api/registration`,
                {
                    phone: phoneNumber,
                    type: "gold_loan",
                    name: "gold_name",
                }
            );
            console.log("---5---");
            if (!registrationResponse.data.success) {
                setValidMessage(
                    registrationResponse.data?.message || "Registration failed"
                );
                return;
            }
            console.log("---6---");
            setValidMessage("Registration successful!");
            setShowModal(true);
            setShowOtpInput(false);
        } catch (err) {
            console.error("Error during verification/registration:", err);
            setValidMessage(
                err.response?.data?.message ||
                    err.message ||
                    "Verification failed. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        router.push("/");
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
                                            style={{
                                                color: "#fda033",
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                            }}
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
                                                <div
                                                    className="input-container"
                                                    style={{
                                                        background: "#8ed7fd91",
                                                    }}
                                                >
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
                                                                e.target.value.replace(
                                                                    /\D/g,
                                                                    ""
                                                                )
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
                                                        {isLoading
                                                            ? "Loading..."
                                                            : "Apply now"}
                                                    </button>
                                                </div>
                                                <div className="validation-message">
                                                    {validMessage}
                                                </div>
                                                {showOtpInput && (
                                                    <div className="input-container mt-3">
                                                        <input
                                                            type="text"
                                                            className="apply-now"
                                                            placeholder="Enter OTP"
                                                            value={otp}
                                                            onChange={(e) =>
                                                                setOtp(
                                                                    e.target.value.replace(
                                                                        /\D/g,
                                                                        ""
                                                                    )
                                                                )
                                                            }
                                                            maxLength={6}
                                                        />
                                                        <button
                                                            className="applybutton cmn-btn inputapply"
                                                            onClick={verifyOtp}
                                                            disabled={
                                                                isLoading ||
                                                                otp.length !== 6
                                                            }
                                                        >
                                                            {isLoading
                                                                ? "Verifying..."
                                                                : "Verify OTP"}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="contact-info">
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faPhone}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">
                                                            Call us at{" "}
                                                            <Link
                                                                href={`tel:+91${telephone}`}
                                                                className="contact-link"
                                                            >
                                                                {telephone ||
                                                                    "Contact Number"}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon
                                                            icon={faWhatsapp}
                                                            className="contact-icon"
                                                        />
                                                        <span className="callus">
                                                            WhatsApp{" "}
                                                            <Link
                                                                href={urlo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="contact-link"
                                                            >
                                                                +91-
                                                                {phone ||
                                                                    "WhatsApp Number"}
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
            </div>

            <div className="modal-container flex justify-center items-center">
                <ModalComponent
                    show={showModal}
                    onClose={handleModalClose}
                    phoneNumber={phoneNumber}
                    loanType="gold_loan"
                />
            </div>
        </section>
    );
};

export default TopBanner;
