// // 'use client'
// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import useOtp from "../hooks/useOtp";

// // interface ModalProps {
// //     show: boolean;
// //     onClose: () => void;
// //     phoneNumber?: string;
// //     loanType?: string;
// // }

// // const ModalComponent = ({ show, onClose, phoneNumber, loanType = "gold-loan" }: ModalProps) => {
// //     const router = useRouter();
// //     const [showOtpForm, setShowOtpForm] = useState(!!phoneNumber);
// //     const [otp, setOtp] = useState("");
// //     const [mobileNumber, setMobileNumber] = useState(phoneNumber || "");
// //     const [pincode, setPincode] = useState("");
// //     const { sendOtp, verifyOtp, verifyLoginOtp, isSending, isVerifying, error, resetState } = useOtp();

// //     // Timer for OTP expiry countdown
// //     const [timer, setTimer] = useState(0);
// //     const [canResend, setCanResend] = useState(false);

// //     useEffect(() => {
// //         if (phoneNumber) {
// //             setMobileNumber(phoneNumber);
// //             setShowOtpForm(true);
// //         }
// //     }, [phoneNumber]);

// //     // Set up countdown timer when OTP is sent
// //     useEffect(() => {
// //         let interval: NodeJS.Timeout;
        
// //         if (showOtpForm && timer > 0) {
// //             interval = setInterval(() => {
// //                 setTimer((prevTime) => {
// //                     if (prevTime <= 1) {
// //                         setCanResend(true);
// //                         clearInterval(interval);
// //                         return 0;
// //                     }
// //                     return prevTime - 1;
// //                 });
// //             }, 1000);
// //         }
        
// //         return () => {
// //             if (interval) clearInterval(interval);
// //         };
// //     }, [showOtpForm, timer]);

// //     const handleSubmit = async (e: React.FormEvent) => {
// //         e.preventDefault();
// //         resetState();

// //         try {
// //             if (showOtpForm) {
// //                 const verified = await verifyOtp(mobileNumber, otp);
// //                 if (verified) {
// //                     onClose();
// //                     router.push("/");
// //                 }
// //             } else {
// //                 if (!isValidIndianMobile(mobileNumber)) {
// //                     throw new Error("Please enter a valid 10-digit Indian mobile number");
// //                 }
                
// //                 if (!isValidPincode(pincode)) {
// //                     throw new Error("Please enter a valid 6-digit pincode");
// //                 }
                
// //                 const sent = await sendOtp(mobileNumber, pincode, loanType);
// //                 if (sent) {
// //                     setShowOtpForm(true);
// //                     setTimer(600); // 10 minutes in seconds
// //                     setCanResend(false);
// //                 }
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //         }
// //     };

// //     const handleResendOtp = async () => {
// //         if (!canResend) return;
        
// //         resetState();
// //         const sent = await sendOtp(mobileNumber, pincode, loanType);
// //         if (sent) {
// //             setTimer(600);
// //             setCanResend(false);
// //             setOtp("");
// //         }
// //     };

// //     const isValidIndianMobile = (phone: string) => {
// //         return /^[6-9]\d{9}$/.test(phone);
// //     };

// //     const isValidPincode = (code: string) => {
// //         return /^\d{6}$/.test(code);
// //     };

// //     const formatTime = (seconds: number) => {
// //         const mins = Math.floor(seconds / 60);
// //         const secs = seconds % 60;
// //         return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// //     };

// //     if (!show) return null;

// //     return (
// //         <div
// //             className="modal fade show fixed"
// //             style={{
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 paddingRight: "6px",
// //                 color: "black",
// //                 zIndex: "100000",
// //                 margin: "40px",
// //                 position: "fixed",
// //             }}
// //             role="dialog"
// //         >
// //             <div
// //                 className="modal-dialog modal-dialog-centered modal-lg"
// //                 style={{ position: "fixed" }}
// //             >
// //                 <div className="modal-content">
// //                     <div className="modal-body p-0">
// //                         <button
// //                             type="button"
// //                             className="btn-close"
// //                             onClick={onClose}
// //                             aria-label="Close"
// //                         ></button>

// //                         <section
// //                             className="sign-in-up register"
// //                             style={{ marginTop: 0 }}
// //                         >
// //                             <div
// //                                 className="overlay"
// //                                 style={{ padding: "10px 10px 20px 20px" }}
// //                             >
// //                                 <div className="container">
// //                                     <div className="row">
// //                                         <div className="section-header">
// //                                             <h5 className="sub-title">
// //                                                 The Power of Financial Freedom
// //                                             </h5>
// //                                             <h2 className="title">
// //                                                 Let's Get Started!
// //                                             </h2>
// //                                         </div>

// //                                         {/* Mobile Entry Form */}
// //                                         <div className="col-lg-6">
// //                                             <div className="form-content">
// //                                                 {error && (
// //                                                     <div className="alert alert-danger" role="alert">
// //                                                         {error}
// //                                                     </div>
// //                                                 )}
// //                                                 <form onSubmit={handleSubmit}>
// //                                                     {!showOtpForm ? (
// //                                                         <div id="mobileentry">
// //                                                             <div className="single-input">
// //                                                                 <label htmlFor="applynowmobile">
// //                                                                     Mobile Number
// //                                                                 </label>
// //                                                                 <input
// //                                                                     type="tel"
// //                                                                     id="applynowmobile"
// //                                                                     value={mobileNumber}
// //                                                                     onChange={(e) => setMobileNumber(e.target.value.trim())}
// //                                                                     placeholder="10-digit mobile number"
// //                                                                     required
// //                                                                     disabled={!!phoneNumber}
// //                                                                     autoComplete="off"
// //                                                                     maxLength={10}
// //                                                                 />
// //                                                                 <small className="text-muted">
// //                                                                     Enter a 10-digit number without country code
// //                                                                 </small>
// //                                                             </div>
// //                                                             <div className="single-input">
// //                                                                 <label htmlFor="applynowpincode">
// //                                                                     Enter Your Pincode
// //                                                                 </label>
// //                                                                 <input
// //                                                                     type="text"
// //                                                                     id="applynowpincode"
// //                                                                     value={pincode}
// //                                                                     onChange={(e) => setPincode(e.target.value.trim())}
// //                                                                     placeholder="6-digit pincode"
// //                                                                     required
// //                                                                     autoComplete="off"
// //                                                                     maxLength={6}
// //                                                                 />
// //                                                             </div>
// //                                                         </div>
// //                                                     ) : (
// //                                                         <div id="otpverifyform">
// //                                                             <div className="single-input">
// //                                                                 <label>
// //                                                                     Enter OTP sent to {mobileNumber}
// //                                                                 </label>
// //                                                                 <input
// //                                                                     type="text"
// //                                                                     id="verifyotp"
// //                                                                     value={otp}
// //                                                                     onChange={(e) => setOtp(e.target.value.trim())}
// //                                                                     placeholder="Enter OTP"
// //                                                                     required
// //                                                                     autoComplete="off"
// //                                                                     style={{
// //                                                                         fontSize: "40px",
// //                                                                         letterSpacing: "0.5em",
// //                                                                     }}
// //                                                                     maxLength={6}
// //                                                                 />
// //                                                             </div>
// //                                                             {timer > 0 && (
// //                                                                 <div className="text-center mt-2">
// //                                                                     <small>OTP expires in {formatTime(timer)}</small>
// //                                                                 </div>
// //                                                             )}
// //                                                             <div className="d-flex justify-content-between mt-3">
// //                                                                 <button 
// //                                                                     type="button" 
// //                                                                     className="btn btn-link"
// //                                                                     onClick={() => setShowOtpForm(false)}
// //                                                                 >
// //                                                                     Edit Phone Number
// //                                                                 </button>
// //                                                                 <button 
// //                                                                     type="button" 
// //                                                                     className={`btn btn-link ${!canResend ? 'text-muted' : ''}`}
// //                                                                     onClick={handleResendOtp}
// //                                                                     disabled={!canResend || isSending}
// //                                                                 >
// //                                                                     {canResend ? "Resend OTP" : "Resend OTP"}
// //                                                                 </button>
// //                                                             </div>
// //                                                         </div>
// //                                                     )}

// //                                                     <div className="btn-area submitmodal">
// //                                                         <button
// //                                                             className="cmn-btn"
// //                                                             type="submit"
// //                                                             disabled={isSending || isVerifying}
// //                                                         >
// //                                                             {isSending || isVerifying
// //                                                                 ? "Processing..."
// //                                                                 : showOtpForm
// //                                                                 ? "Verify OTP"
// //                                                                 : "Send OTP"}
// //                                                         </button>
// //                                                     </div>
// //                                                 </form>
// //                                             </div>
// //                                         </div>

// //                                         {/* Image Section */}
// //                                         <div className="col-lg-6 d-none d-sm-block">
// //                                             <div className="d-flex justify-content-center">
// //                                                 <img
// //                                                     src="/images/sign-in-up-bg.png"
// //                                                     className="imagewel"
// //                                                     alt="welcome"
// //                                                 />
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </section>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ModalComponent;


// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { usePathname } from "next/navigation";

// interface ModalProps {
//     show: boolean;
//     onClose: () => void;
//     phoneNumber?: string;
//     loanType?: string;
// }

// interface FormData {
//     name: string;
//     phone: string;
//     pincode: string;
//     type: string;
// }

// const ModalComponent: React.FC<ModalProps> = ({ show, onClose, phoneNumber, loanType = "gold-loan" }) => {
//     const pathname = usePathname();
//     const url = process.env.NEXT_PUBLIC_API_URL;

//     const [formData, setFormData] = useState<FormData>({
//         name: "",
//         phone: phoneNumber || "",
//         pincode: "",
//         type: loanType.replace("-", "_"),
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null);
//     const [showOtpInput, setShowOtpInput] = useState(!!phoneNumber);
//     const [genOtp, setGenOtp] = useState("");
//     const [otp, setOtp] = useState("");
//     const [otpVerified, setOtpVerified] = useState(false);
    
//     // Timer for OTP expiry countdown
//     const [timer, setTimer] = useState(0);
//     const [canResend, setCanResend] = useState(false);

//     // Set up countdown timer when OTP is sent
//     useEffect(() => {
//         let interval: NodeJS.Timeout;
        
//         if (showOtpInput && timer > 0) {
//             interval = setInterval(() => {
//                 setTimer((prevTime) => {
//                     if (prevTime <= 1) {
//                         setCanResend(true);
//                         clearInterval(interval);
//                         return 0;
//                     }
//                     return prevTime - 1;
//                 });
//             }, 1000);
//         }
        
//         return () => {
//             if (interval) clearInterval(interval);
//         };
//     }, [showOtpInput, timer]);

//     const resetState = () => {
//         setError(null);
//         setSuccess(null);
//         setShowOtpInput(false);
//         setOtpVerified(false);
//         setOtp("");
//         setGenOtp("");
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const formatTime = (seconds: number) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     const isValidIndianMobile = (phone: string) => {
//         return /^[6-9]\d{9}$/.test(phone);
//     };

//     const isValidPincode = (code: string) => {
//         return /^\d{6}$/.test(code);
//     };

//     const handleSendOtp = async () => {
//         if (!isValidIndianMobile(formData.phone)) {
//             setError("Please enter a valid 10-digit Indian mobile number");
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const response = await axios.post(`/api/send-otp`, {
//                 phone: formData.phone,
//                 type: formData.type,
//             });

//             if (response.data.success) {
//                 setSuccess("OTP sent successfully");
//                 setShowOtpInput(true);
//                 setGenOtp(response.data.genOtp);
//                 setTimer(600); // 10 minutes in seconds
//                 setCanResend(false);
//             } else {
//                 setError(response.data.message || "Failed to send OTP");
//             }
//         } catch (err) {
//             setError("Failed to send OTP. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleVerifyOtp = async () => {
//         if (!/^\d{6}$/.test(otp)) {
//             setError("Please enter a valid 6-digit OTP");
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             const response = await axios.post(`/api/verify-otp`, {
//                 phoneNumber: formData.phone,
//                 otp: otp,
//                 genOtp: genOtp,
//             });

//             if (response.data.success) {
//                 setSuccess("Phone verified successfully");
//                 setOtpVerified(true);
//             } else {
//                 setError(response.data.message || "Invalid OTP");
//             }
//         } catch (err) {
//             setError("Failed to verify OTP. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleResendOtp = async () => {
//         if (!canResend) return;
        
//         resetState();
//         try {
//             const response = await axios.post(`/api/send-otp`, {
//                 phone: formData.phone,
//                 type: formData.type,
//             });
            
//             if (response.data.success) {
//                 setShowOtpInput(true);
//                 setGenOtp(response.data.genOtp);
//                 setTimer(600);
//                 setCanResend(false);
//                 setOtp("");
//             } else {
//                 setError(response.data.message || "Failed to resend OTP");
//             }
//         } catch (err) {
//             setError("Failed to resend OTP. Please try again.");
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!formData.name.trim()) {
//             setError("Name is required");
//             return;
//         }

//         if (!otpVerified) {
//             setError("Please verify your phone number first");
//             return;
//         }

//         if (!isValidPincode(formData.pincode)) {
//             setError("Valid 6-digit pincode is required");
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);
            
//             const response = await axios.post(`${url}/api/registration`, formData);
            
//             if (response.data.success) {
//                 setSuccess("Gold loan application submitted successfully! Our team will contact you shortly.");
                
//                 // Reset form
//                 setFormData({
//                     name: "",
//                     phone: "",
//                     pincode: "",
//                     type: "gold_loan",
//                 });
//                 resetState();
//             } else {
//                 setError(response.data.message || "Submission failed. Please try again.");
//             }
//         } catch (err) {
//             setError("Submission failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Don't render if show is false
//     if (!show) return null;

//     return (
//         <div
//             className="modal fade show fixed"
//             style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingRight: "6px",
//                 color: "black",
//                 zIndex: "100000",
//                 margin: "40px",
//                 position: "fixed",
//             }}
//             role="dialog"
//         >
//             <div
//                 className="modal-dialog modal-dialog-centered modal-lg"
//                 style={{ position: "fixed" }}
//             >
//                 <div className="modal-content">
//                     <div className="modal-body p-0">
//                         <button
//                             type="button"
//                             className="btn-close"
//                             onClick={onClose}
//                             aria-label="Close"
//                         ></button>
                        
//                         <section
//                             className="sign-in-up register"
//                             style={{ marginTop: 0 }}
//                         >
//                             <div
//                                 className="overlay"
//                                 style={{ padding: "10px 10px 20px 20px" }}
//                             >
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="section-header">
//                                             <h5 className="sub-title">The Power of Financial Freedom</h5>
//                                             <h2 className="title">Gold Loan Application</h2>
//                                             <p className="text-muted">
//                                                 Apply for a gold loan with our simple process
//                                             </p>
//                                         </div>

//                                 {error && (
//                                     <div className="alert alert-danger mb-3">
//                                         {error}
//                                     </div>
//                                 )}
//                                 {success && (
//                                     <div className="alert alert-success mb-3">
//                                         {success}
//                                     </div>
//                                 )}

//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row g-3">
//                                         <div className="col-12">
//                                             <div className="form-floating">
//                                                 <input
//                                                     name="name"
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Name"
//                                                     value={formData.name}
//                                                     onChange={handleChange}
//                                                     required
//                                                 />
//                                                 <label>Full Name</label>
//                                             </div>
//                                         </div>

//                                         <div className="col-12">
//                                             <div className="input-group">
//                                                 <div className="form-floating flex-grow-1">
//                                                     <input
//                                                         name="phone"
//                                                         type="tel"
//                                                         className="form-control"
//                                                         placeholder="Phone"
//                                                         value={formData.phone}
//                                                         onChange={handleChange}
//                                                         required
//                                                         disabled={otpVerified}
//                                                         maxLength={10}
//                                                     />
//                                                     <label>
//                                                         Phone Number *
//                                                     </label>
//                                                 </div>
//                                                 <button
//                                                     type="button"
//                                                     className="btn btn-primary"
//                                                     onClick={handleSendOtp}
//                                                     disabled={loading || otpVerified}
//                                                 >
//                                                     {loading && !showOtpInput
//                                                         ? "Sending..."
//                                                         : otpVerified
//                                                         ? "Verified"
//                                                         : "Verify"}
//                                                 </button>
//                                             </div>
//                                             <small className="text-muted">
//                                                 Enter a 10-digit number without country code
//                                             </small>
//                                         </div>

//                                         {showOtpInput && !otpVerified && (
//                                             <div className="col-12">
//                                                 <div className="input-group">
//                                                     <div className="form-floating flex-grow-1">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             placeholder="OTP"
//                                                             value={otp}
//                                                             onChange={(e) => setOtp(e.target.value.trim())}
//                                                             required
//                                                             maxLength={6}
//                                                             style={{
//                                                                 fontSize: "24px",
//                                                                 letterSpacing: "0.5em"
//                                                             }}
//                                                         />
//                                                         <label>
//                                                             Enter OTP sent to {formData.phone}
//                                                         </label>
//                                                     </div>
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-primary"
//                                                         onClick={handleVerifyOtp}
//                                                         disabled={loading}
//                                                     >
//                                                         {loading
//                                                             ? "Verifying..."
//                                                             : "Verify OTP"}
//                                                     </button>
//                                                 </div>
//                                                 {timer > 0 && (
//                                                     <div className="text-center mt-2">
//                                                         <small>OTP expires in {formatTime(timer)}</small>
//                                                     </div>
//                                                 )}
//                                                 <div className="d-flex justify-content-between mt-2">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn btn-link btn-sm"
//                                                         onClick={() => {
//                                                             setShowOtpInput(false);
//                                                             setOtp("");
//                                                         }}
//                                                     >
//                                                         Edit Phone Number
//                                                     </button>
//                                                     <button 
//                                                         type="button" 
//                                                         className={`btn btn-link btn-sm ${!canResend ? 'text-muted' : ''}`}
//                                                         onClick={handleResendOtp}
//                                                         disabled={!canResend || loading}
//                                                     >
//                                                         {canResend ? "Resend OTP" : "Resend OTP"}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         )}

//                                         <div className="col-12">
//                                             <div className="form-floating">
//                                                 <input
//                                                     name="pincode"
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Pincode"
//                                                     value={formData.pincode}
//                                                     onChange={handleChange}
//                                                     required
//                                                     maxLength={6}
//                                                 />
//                                                 <label>Pincode *</label>
//                                             </div>
//                                             <small className="text-muted">
//                                                 Enter a valid 6-digit pincode
//                                             </small>
//                                         </div>

//                                         <div className="col-12">
//                                             <div className="btn-area submitmodal">
//                                                 <button
//                                                     className="cmn-btn"
//                                                     type="submit"
//                                                     disabled={loading || !otpVerified}
//                                                 >
//                                                     {loading
//                                                         ? "Submitting..."
//                                                         : "Apply Now"}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>

//                         {/* Image Section */}
//                         <div className="col-lg-6 d-none d-sm-block">
//                             <div className="d-flex justify-content-center">
//                                 <img
//                                     src="/images/sign-in-up-bg.png"
//                                     className="imagewel"
//                                     alt="welcome"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModalComponent;

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    phoneNumber?: string;
    loanType?: string;
}

interface FormData {
    name: string;
    phone: string;
    pincode: string;
    type: string;
}

const ModalComponent: React.FC<ModalProps> = ({
    show,
    onClose,
    phoneNumber,
    loanType = "gold-loan",
}) => {
    const pathname = usePathname();
    const url = process.env.NEXT_PUBLIC_API_URL;

    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: phoneNumber || "",
        pincode: "",
        type: loanType.replace("-", "_"),
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showOtpInput, setShowOtpInput] = useState(!!phoneNumber);
    const [genOtp, setGenOtp] = useState("");
    const [otp, setOtp] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [timer, setTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (showOtpInput && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => (prev <= 1 ? 0 : prev - 1));
            }, 1000);
        }
        if (timer === 0 && showOtpInput) {
            setCanResend(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [showOtpInput, timer]);

    const resetState = () => {
        setError(null);
        setSuccess(null);
        setOtp("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidIndianMobile = (phone: string) => /^[6-9]\d{9}$/.test(phone);
    const isValidPincode = (code: string) => /^\d{6}$/.test(code);
    const formatTime = (seconds: number) =>
        `${Math.floor(seconds / 60)}:${(seconds % 60)
            .toString()
            .padStart(2, "0")}`;

    const handleSendOtp = async () => {
        if (!isValidIndianMobile(formData.phone)) {
            setError("Please enter a valid 10-digit Indian mobile number");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(`/api/send-otp`, {
                phone: formData.phone,
                type: formData.type,
            });

            if (response.data.success) {
                setShowOtpInput(true);
                setGenOtp(response.data.genOtp);
                setTimer(600);
                setCanResend(false);
                setSuccess("OTP sent successfully!");
            }
        } catch (err) {
            setError("Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!/^\d{6}$/.test(otp)) {
            setError("Please enter a valid 6-digit OTP");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(`/api/verify-otp`, {
                phoneNumber: formData.phone,
                otp: otp,
                genOtp: genOtp,
            });

            if (response.data.success) {
                setOtpVerified(true);
                setSuccess("Phone number verified!");
            }
        } catch (err) {
            setError("Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (!canResend) return;
        setCanResend(false);
        await handleSendOtp();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError("Please enter your name");
            return;
        }

        if (!isValidPincode(formData.pincode)) {
            setError("Please enter a valid 6-digit pincode");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.post(`${url}/api/registration`, formData);
            
            if (response.data.success) {
                setSuccess("Registration successful! Redirecting to home page...");
                
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    pincode: "",
                    type: "gold_loan",
                });
                resetState();

                // Wait for 3 seconds then redirect
                setTimeout(() => {
                    window.location.href = "/";
                }, 3000);
            } else {
                setError(response.data.message || "Submission failed. Please try again.");
            }
        } catch (err) {
            setError("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Don't render if show is false
    if (!show) return null;

    return (
        <>
            <div 
                className="modal-backdrop fade show" 
                style={{ 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 99999
                }}
            />
            <div 
                className="modal fade show" 
                style={{
                    display: 'block',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 100000,
                    overflow: 'auto'
                }}
                role="dialog"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    style={{ 
                        transform: 'none',
                        margin: '1.75rem auto'
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '1rem',
                                    zIndex: 1
                                }}
                            />

                            <section
                                className="sign-in-up register"
                                style={{ marginTop: 0 }}
                            >
                                <div
                                    className="overlay"
                                    style={{ padding: "10px 10px 20px 20px" }}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="section-header">
                                                <h5 className="sub-title">
                                                    The Power of Financial Freedom
                                                </h5>
                                                <h2 className="title">
                                                    Gold Loan Application
                                                </h2>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-content">
                                                    {error && (
                                                        <div className="alert alert-danger">
                                                            {error}
                                                        </div>
                                                    )}
                                                    {success && (
                                                        <div className="alert alert-success">
                                                            {success}
                                                        </div>
                                                    )}

                                                    <form onSubmit={handleSubmit}>
                                                        <div className="single-input">
                                                            <label>Full Name</label>
                                                            <input
                                                                type="text"
                                                                value={
                                                                    formData.name
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                name="name"
                                                                required
                                                                disabled={
                                                                    !otpVerified
                                                                }
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>
                                                                Mobile Number
                                                            </label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="tel"
                                                                    value={formData.phone}
                                                                    onChange={handleChange}
                                                                    name="phone"
                                                                    required
                                                                    disabled={otpVerified}
                                                                    maxLength={10}
                                                                    style={{ marginBottom: '10px' }}
                                                                />
                                                                {!otpVerified && (
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary "
                                                                        onClick={handleSendOtp}
                                                                        disabled={loading || showOtpInput}
                                                                        style={{ marginTop: '10px', borderRadius: '5px' }}
                                                                    >
                                                                        {loading ? "Sending..." : "Verify"}
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {showOtpInput &&
                                                            !otpVerified && (
                                                                <div className="single-input">
                                                                    <label>
                                                                        OTP
                                                                        Verification
                                                                    </label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            value={otp}
                                                                            onChange={(e) =>
                                                                                setOtp(e.target.value)
                                                                            }
                                                                            placeholder="Enter OTP"
                                                                            style={{
                                                                                fontSize: "24px",
                                                                                letterSpacing: "0.5em",
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            maxLength={6}
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-primary"
                                                                            onClick={handleVerifyOtp}
                                                                            disabled={loading}
                                                                            style={{ marginTop: '10px', borderRadius: '5px' }}
                                                                        >
                                                                            {loading
                                                                                ? "Verifying..."
                                                                                : "Verify OTP"}
                                                                        </button>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between mt-2">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-link"
                                                                            onClick={() =>
                                                                                setShowOtpInput(
                                                                                    false
                                                                                )
                                                                            }
                                                                        >
                                                                            Edit
                                                                            Number
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className={`btn btn-link ${
                                                                                !canResend
                                                                                    ? "text-muted"
                                                                                    : ""
                                                                            }`}
                                                                            onClick={
                                                                                handleResendOtp
                                                                            }
                                                                            disabled={
                                                                                !canResend
                                                                            }
                                                                        >
                                                                            Resend
                                                                            OTP{" "}
                                                                            {timer >
                                                                                0 &&
                                                                                `(${formatTime(
                                                                                    timer
                                                                                )})`}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}

                                                        <div className="single-input">
                                                            <label>Pincode</label>
                                                            <input
                                                                type="text"
                                                                value={
                                                                    formData.pincode
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                name="pincode"
                                                                required
                                                                maxLength={6}
                                                                disabled={
                                                                    !otpVerified
                                                                }
                                                            />
                                                        </div>

                                                        <div className="btn-area submitmodal">
                                                            <button
                                                                type="submit"
                                                                className="cmn-btn"
                                                                disabled={
                                                                    loading ||
                                                                    !otpVerified
                                                                }
                                                            >
                                                                {loading
                                                                    ? "Submitting..."
                                                                    : "Apply Now"}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 d-none d-sm-block">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src="/images/sign-in-up-bg.png"
                                                        className="imagewel"
                                                        alt="welcome"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const modalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "6px",
    color: "black",
    zIndex: "100000",
    margin: "40px",
    position: "fixed",
};

export default ModalComponent;