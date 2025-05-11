// // // // // // // // // "use client";

// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { usePathname } from "next/navigation";
// // // // // // // // // import axios from "axios";
// // // // // // // // // // import { url } from "inspector";

// // // // // // // // // interface FormData {
// // // // // // // // //     name: string;
// // // // // // // // //     phone: string;
// // // // // // // // //     pincode?: string;
// // // // // // // // //     email?: string;
// // // // // // // // //     type: string;
// // // // // // // // // }

// // // // // // // // // const RegistrationForm: React.FC = () => {
// // // // // // // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // // // // // // //     const pathname = usePathname();
// // // // // // // // //     const [activeTab, setActiveTab] = useState<
// // // // // // // // //         "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
// // // // // // // // //     >("Swarnsathi_Champion");

// // // // // // // // //     // Corrected type mapping with consistent naming
// // // // // // // // //     const tabToType = {
// // // // // // // // //         Swarnsathi_Champion: "swarnsathi_champion",
// // // // // // // // //         Business_Associate: "business_associate",
// // // // // // // // //         Lending_Partner: "lending_partner",
// // // // // // // // //     };

// // // // // // // // //     const [formData, setFormData] = useState<FormData>({
// // // // // // // // //         name: "",
// // // // // // // // //         phone: "",
// // // // // // // // //         pincode: "",
// // // // // // // // //         email: "",
// // // // // // // // //         type: tabToType[activeTab], // Initialize with correct type
// // // // // // // // //     });

// // // // // // // // //     const [loading, setLoading] = useState<boolean>(false);
// // // // // // // // //     const [error, setError] = useState<string | null>(null);
// // // // // // // // //     const [success, setSuccess] = useState<string | null>(null);
// // // // // // // // //     const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
// // // // // // // // //     const [otp, setOtp] = useState<string>("");
// // // // // // // // //     const [otpVerified, setOtpVerified] = useState<boolean>(false);

// // // // // // // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // // // // //         const { name, value } = e.target;
// // // // // // // // //         setFormData((prev) => ({
// // // // // // // // //             ...prev,
// // // // // // // // //             [name]: value,
// // // // // // // // //         }));
// // // // // // // // //     };

// // // // // // // // //     const handleTabChange = (
// // // // // // // // //         tab: "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
// // // // // // // // //     ) => {
// // // // // // // // //         setActiveTab(tab);
// // // // // // // // //         setFormData((prev) => ({
// // // // // // // // //             ...prev,
// // // // // // // // //             type: tabToType[tab],
// // // // // // // // //             pincode: tab !== "Lending_Partner" ? "" : undefined,
// // // // // // // // //             email: tab === "Lending_Partner" ? "" : undefined,
// // // // // // // // //         }));
// // // // // // // // //         setError(null);
// // // // // // // // //         setSuccess(null);
// // // // // // // // //         setShowOtpInput(false);
// // // // // // // // //         setOtpVerified(false);
// // // // // // // // //     };

// // // // // // // // //     const handleSendOtp = async () => {
// // // // // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // // // // //             setError("Please enter a valid 10-digit phone number");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         try {
// // // // // // // // //             setLoading(true);
// // // // // // // // //             setError(null);

// // // // // // // // //             await axios.post(`/api/send-otp`, {
// // // // // // // // //                 phone: formData.phone,
// // // // // // // // //             });

// // // // // // // // //             setSuccess("OTP sent successfully to your phone");
// // // // // // // // //             setShowOtpInput(true);
// // // // // // // // //         } catch (err) {
// // // // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // // // // // // //         } finally {
// // // // // // // // //             setLoading(false);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleVerifyOtp = async () => {
// // // // // // // // //         if (!otp || otp.length !== 6) {
// // // // // // // // //             setError("Please enter a valid 6-digit OTP");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         try {
// // // // // // // // //             setLoading(true);
// // // // // // // // //             setError(null);

// // // // // // // // //             await axios.post(`/api/be-our-partner/verify-phone-otp`, {
// // // // // // // // //                 phone: formData.phone,
// // // // // // // // //                 otp: otp,
// // // // // // // // //             });

// // // // // // // // //             setSuccess("Phone number verified successfully");
// // // // // // // // //             setOtpVerified(true);
// // // // // // // // //         } catch (err) {
// // // // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // // // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // // // // // // // //         } finally {
// // // // // // // // //             setLoading(false);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // //         e.preventDefault();

// // // // // // // // //         if (!formData.name.trim()) {
// // // // // // // // //             setError("Name is required");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // // // // //             setError("Valid phone number is required");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         if (!otpVerified) {
// // // // // // // // //             setError("Please verify your phone number before submitting");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         if (
// // // // // // // // //             activeTab !== "Lending_Partner" &&
// // // // // // // // //             (!formData.pincode || formData.pincode.length !== 6)
// // // // // // // // //         ) {
// // // // // // // // //             setError("Valid 6-digit pincode is required");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // // // // // // // //             setError("Email is required for lending partners");
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         try {
// // // // // // // // //             setLoading(true);
// // // // // // // // //             setError(null);

// // // // // // // // //             await axios.post(`${url}/api/be-our-partner/`, formData);

// // // // // // // // //             setSuccess("Registration successful! We'll contact you soon.");

// // // // // // // // //             // Reset form
// // // // // // // // //             setFormData({
// // // // // // // // //                 name: "",
// // // // // // // // //                 phone: "",
// // // // // // // // //                 pincode: "",
// // // // // // // // //                 email: "",
// // // // // // // // //                 type: tabToType[activeTab],
// // // // // // // // //             });
// // // // // // // // //             setOtp("");
// // // // // // // // //             setShowOtpInput(false);
// // // // // // // // //             setOtpVerified(false);
// // // // // // // // //         } catch (err) {
// // // // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // // // //             setError(error.response?.data?.message || "Registration failed");
// // // // // // // // //         } finally {
// // // // // // // // //             setLoading(false);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <section className="sign-in-up register">
// // // // // // // // //             <style jsx>{`
// // // // // // // // //                 .btn-attention {
// // // // // // // // //                     animation: pulse 1s infinite;
// // // // // // // // //                     box-shadow: 0 0 0 0 rgba(251, 158, 71, 0.7);
// // // // // // // // //                 }

// // // // // // // // //                 @keyframes pulse {
// // // // // // // // //                     0% {
// // // // // // // // //                         transform: scale(0.95);
// // // // // // // // //                     }
// // // // // // // // //                     70% {
// // // // // // // // //                         transform: scale(1);
// // // // // // // // //                     }
// // // // // // // // //                     100% {
// // // // // // // // //                         transform: scale(0.95);
// // // // // // // // //                     }
// // // // // // // // //                 }

// // // // // // // // //                 .verification-warning {
// // // // // // // // //                     color: #dc3545;
// // // // // // // // //                     font-style: italic;
// // // // // // // // //                     margin-top: 5px;
// // // // // // // // //                 }
// // // // // // // // //             `}</style>

// // // // // // // // //             <div className="overlay pt-120 pb-120">
// // // // // // // // //                 <div className="container">
// // // // // // // // //                     <div className="row">
// // // // // // // // //                         <div className="col-lg-6 col-12">
// // // // // // // // //                             <div className="form-content">
// // // // // // // // //                                 <div className="section-header">
// // // // // // // // //                                     <h5 className="sub-title">
// // // // // // // // //                                         The power of financial freedom
// // // // // // // // //                                     </h5>
// // // // // // // // //                                     <h2
// // // // // // // // //                                         className="title"
// // // // // // // // //                                         style={{ textTransform: "capitalize" }}
// // // // // // // // //                                     >
// // // // // // // // //                                         Let&apos;s get started!
// // // // // // // // //                                     </h2>
// // // // // // // // //                                     <p>
// // // // // // // // //                                         Please fill out the form to start your
// // // // // // // // //                                         online application
// // // // // // // // //                                     </p>
// // // // // // // // //                                 </div>

// // // // // // // // //                                 {error && (
// // // // // // // // //                                     <div className="alert alert-danger">
// // // // // // // // //                                         {error}
// // // // // // // // //                                     </div>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {success && (
// // // // // // // // //                                     <div className="alert alert-success">
// // // // // // // // //                                         {success}
// // // // // // // // //                                     </div>
// // // // // // // // //                                 )}

// // // // // // // // //                                 <ul
// // // // // // // // //                                     className="nav nav-tabs"
// // // // // // // // //                                     id="myTab"
// // // // // // // // //                                     role="tablist"
// // // // // // // // //                                 >
// // // // // // // // //                                     {[
// // // // // // // // //                                         {
// // // // // // // // //                                             id: "Swarnsathi_Champion",
// // // // // // // // //                                             label: "Swarnsathi Champion",
// // // // // // // // //                                         },
// // // // // // // // //                                         {
// // // // // // // // //                                             id: "Business_Associate",
// // // // // // // // //                                             label: "Business Associate",
// // // // // // // // //                                         },
// // // // // // // // //                                         {
// // // // // // // // //                                             id: "Lending_Partner",
// // // // // // // // //                                             label: "Lending Partner",
// // // // // // // // //                                         },
// // // // // // // // //                                     ].map((tab) => (
// // // // // // // // //                                         <li key={tab.id} className="nav-item">
// // // // // // // // //                                             <button
// // // // // // // // //                                                 className={`nav-link ${
// // // // // // // // //                                                     activeTab === tab.id
// // // // // // // // //                                                         ? "active"
// // // // // // // // //                                                         : ""
// // // // // // // // //                                                 }`}
// // // // // // // // //                                                 onClick={() =>
// // // // // // // // //                                                     handleTabChange(
// // // // // // // // //                                                         tab.id as typeof activeTab
// // // // // // // // //                                                     )
// // // // // // // // //                                                 }
// // // // // // // // //                                                 style={{
// // // // // // // // //                                                     border: "1px solid #fb9e47",
// // // // // // // // //                                                 }}
// // // // // // // // //                                             >
// // // // // // // // //                                                 {tab.label}
// // // // // // // // //                                             </button>
// // // // // // // // //                                         </li>
// // // // // // // // //                                     ))}
// // // // // // // // //                                 </ul>

// // // // // // // // //                                 <div className="tab-content p-3">
// // // // // // // // //                                     <form onSubmit={handleSubmit}>
// // // // // // // // //                                         <div className="row">
// // // // // // // // //                                             <div className="col-12">
// // // // // // // // //                                                 <div className="single-input">
// // // // // // // // //                                                     <label>Name</label>
// // // // // // // // //                                                     <input
// // // // // // // // //                                                         name="name"
// // // // // // // // //                                                         type="text"
// // // // // // // // //                                                         placeholder="Please enter your name"
// // // // // // // // //                                                         value={formData.name}
// // // // // // // // //                                                         onChange={handleChange}
// // // // // // // // //                                                         required
// // // // // // // // //                                                     />
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             </div>

// // // // // // // // //                                             <div className="col-9">
// // // // // // // // //                                                 <div className="single-input">
// // // // // // // // //                                                     <label>Phone *</label>
// // // // // // // // //                                                     <input
// // // // // // // // //                                                         name="phone"
// // // // // // // // //                                                         type="tel"
// // // // // // // // //                                                         placeholder="10 digit mobile number"
// // // // // // // // //                                                         value={formData.phone}
// // // // // // // // //                                                         onChange={handleChange}
// // // // // // // // //                                                         required
// // // // // // // // //                                                         disabled={otpVerified}
// // // // // // // // //                                                         maxLength={10}
// // // // // // // // //                                                     />
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             </div>

// // // // // // // // //                                             <div className="col-3">
// // // // // // // // //                                                 <div className="single-input">
// // // // // // // // //                                                     <label>&nbsp;</label>
// // // // // // // // //                                                     <button
// // // // // // // // //                                                         type="button"
// // // // // // // // //                                                         className="btn btn-primary w-100"
// // // // // // // // //                                                         style={{
// // // // // // // // //                                                             padding: "12px",
// // // // // // // // //                                                             background:
// // // // // // // // //                                                                 "#fb9e47",
// // // // // // // // //                                                         }}
// // // // // // // // //                                                         onClick={handleSendOtp}
// // // // // // // // //                                                         disabled={
// // // // // // // // //                                                             loading ||
// // // // // // // // //                                                             otpVerified
// // // // // // // // //                                                         }
// // // // // // // // //                                                     >
// // // // // // // // //                                                         {loading
// // // // // // // // //                                                             ? "Sending..."
// // // // // // // // //                                                             : otpVerified
// // // // // // // // //                                                             ? "Verified"
// // // // // // // // //                                                             : "Verify"}
// // // // // // // // //                                                     </button>
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             </div>

// // // // // // // // //                                             {showOtpInput && !otpVerified && (
// // // // // // // // //                                                 <div className="col-12">
// // // // // // // // //                                                     <div className="single-input">
// // // // // // // // //                                                         <label>
// // // // // // // // //                                                             Enter OTP *
// // // // // // // // //                                                         </label>
// // // // // // // // //                                                         <div className="d-flex gap-2">
// // // // // // // // //                                                             <input
// // // // // // // // //                                                                 type="text"
// // // // // // // // //                                                                 placeholder="6-digit OTP"
// // // // // // // // //                                                                 value={otp}
// // // // // // // // //                                                                 onChange={(e) =>
// // // // // // // // //                                                                     setOtp(
// // // // // // // // //                                                                         e.target
// // // // // // // // //                                                                             .value
// // // // // // // // //                                                                     )
// // // // // // // // //                                                                 }
// // // // // // // // //                                                                 required
// // // // // // // // //                                                                 maxLength={6}
// // // // // // // // //                                                                 className="flex-grow-1"
// // // // // // // // //                                                             />
// // // // // // // // //                                                             <button
// // // // // // // // //                                                                 type="button"
// // // // // // // // //                                                                 className="btn btn-primary"
// // // // // // // // //                                                                 style={{
// // // // // // // // //                                                                     background:
// // // // // // // // //                                                                         "#fb9e47",
// // // // // // // // //                                                                 }}
// // // // // // // // //                                                                 onClick={
// // // // // // // // //                                                                     handleVerifyOtp
// // // // // // // // //                                                                 }
// // // // // // // // //                                                                 disabled={
// // // // // // // // //                                                                     loading
// // // // // // // // //                                                                 }
// // // // // // // // //                                                             >
// // // // // // // // //                                                                 {loading
// // // // // // // // //                                                                     ? "Verifying..."
// // // // // // // // //                                                                     : "Verify OTP"}
// // // // // // // // //                                                             </button>
// // // // // // // // //                                                         </div>
// // // // // // // // //                                                     </div>
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             )}

// // // // // // // // //                                             {activeTab !==
// // // // // // // // //                                                 "Lending_Partner" && (
// // // // // // // // //                                                 <div className="col-12">
// // // // // // // // //                                                     <div className="single-input">
// // // // // // // // //                                                         <label>Pincode *</label>
// // // // // // // // //                                                         <input
// // // // // // // // //                                                             name="pincode"
// // // // // // // // //                                                             type="text"
// // // // // // // // //                                                             placeholder="6 digit pincode"
// // // // // // // // //                                                             value={
// // // // // // // // //                                                                 formData.pincode
// // // // // // // // //                                                             }
// // // // // // // // //                                                             onChange={
// // // // // // // // //                                                                 handleChange
// // // // // // // // //                                                             }
// // // // // // // // //                                                             required
// // // // // // // // //                                                             maxLength={6}
// // // // // // // // //                                                         />
// // // // // // // // //                                                     </div>
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             )}

// // // // // // // // //                                             {activeTab ===
// // // // // // // // //                                                 "Lending_Partner" && (
// // // // // // // // //                                                 <div className="col-12">
// // // // // // // // //                                                     <div className="single-input">
// // // // // // // // //                                                         <label>Email *</label>
// // // // // // // // //                                                         <input
// // // // // // // // //                                                             name="email"
// // // // // // // // //                                                             type="email"
// // // // // // // // //                                                             placeholder="Your email ID"
// // // // // // // // //                                                             value={
// // // // // // // // //                                                                 formData.email
// // // // // // // // //                                                             }
// // // // // // // // //                                                             onChange={
// // // // // // // // //                                                                 handleChange
// // // // // // // // //                                                             }
// // // // // // // // //                                                             required
// // // // // // // // //                                                         />
// // // // // // // // //                                                     </div>
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             )}

// // // // // // // // //                                             <div className="col-12">
// // // // // // // // //                                                 <div className="single-input">
// // // // // // // // //                                                     <p>
// // // // // // // // //                                                         By clicking submit, you
// // // // // // // // //                                                         agree to Swarn Sathi's
// // // // // // // // //                                                         terms of use, privacy
// // // // // // // // //                                                         policy, e-sign &amp;
// // // // // // // // //                                                         communication
// // // // // // // // //                                                         authorization.
// // // // // // // // //                                                     </p>
// // // // // // // // //                                                 </div>
// // // // // // // // //                                             </div>

// // // // // // // // //                                             <div className="btn-area">
// // // // // // // // //                                                 <button
// // // // // // // // //                                                     type="submit"
// // // // // // // // //                                                     className="cmn-btn"
// // // // // // // // //                                                     disabled={
// // // // // // // // //                                                         loading || !otpVerified
// // // // // // // // //                                                     }
// // // // // // // // //                                                 >
// // // // // // // // //                                                     {loading
// // // // // // // // //                                                         ? "Submitting..."
// // // // // // // // //                                                         : "Submit Now"}
// // // // // // // // //                                                 </button>
// // // // // // // // //                                                 {!otpVerified && (
// // // // // // // // //                                                     <div className="verification-warning">
// // // // // // // // //                                                         <small>
// // // // // // // // //                                                             * Phone verification
// // // // // // // // //                                                             required
// // // // // // // // //                                                         </small>
// // // // // // // // //                                                     </div>
// // // // // // // // //                                                 )}
// // // // // // // // //                                             </div>
// // // // // // // // //                                         </div>
// // // // // // // // //                                     </form>
// // // // // // // // //                                 </div>
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="col-lg-6 col-12">
// // // // // // // // //                             <img
// // // // // // // // //                                 src="/images/sign-in-up-bg.png"
// // // // // // // // //                                 alt="Registration"
// // // // // // // // //                                 className="img-fluid"
// // // // // // // // //                             />
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
// // // // // // // // //         </section>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default RegistrationForm;
// // // // // // // // "use client";

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import axios from "axios";
// // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // interface FormData {
// // // // // // // //     name: string;
// // // // // // // //     phone: string;
// // // // // // // //     pincode?: string;
// // // // // // // //     email?: string;
// // // // // // // //     type: string;
// // // // // // // // }

// // // // // // // // const RegistrationForm = () => {
// // // // // // // //     const router = useRouter();
// // // // // // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // // // // // //     const [activeTab, setActiveTab] = useState<
// // // // // // // //         "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
// // // // // // // //     >("Swarnsathi_Champion");
// // // // // // // //     const [formData, setFormData] = useState<FormData>({
// // // // // // // //         name: "",
// // // // // // // //         phone: "",
// // // // // // // //         pincode: "",
// // // // // // // //         email: "",
// // // // // // // //         type: "swarnsathi_champion",
// // // // // // // //     });
// // // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // // //     const [error, setError] = useState("");
// // // // // // // //     const [success, setSuccess] = useState("");
// // // // // // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // // // // // //     const [otp, setOtp] = useState("");
// // // // // // // //     const [otpVerified, setOtpVerified] = useState(false);

// // // // // // // //     const tabToType = {
// // // // // // // //         Swarnsathi_Champion: "swarnsathi_champion",
// // // // // // // //         Business_Associate: "business_associate",
// // // // // // // //         Lending_Partner: "lending_partner",
// // // // // // // //     };

// // // // // // // //     const handleTabChange = (tab: typeof activeTab) => {
// // // // // // // //         setActiveTab(tab);
// // // // // // // //         setFormData((prev) => ({
// // // // // // // //             ...prev,
// // // // // // // //             type: tabToType[tab],
// // // // // // // //             pincode: tab !== "Lending_Partner" ? "" : undefined,
// // // // // // // //             email: tab === "Lending_Partner" ? "" : undefined,
// // // // // // // //         }));
// // // // // // // //         resetState();
// // // // // // // //     };

// // // // // // // //     const resetState = () => {
// // // // // // // //         setError("");
// // // // // // // //         setSuccess("");
// // // // // // // //         setShowOtpInput(false);
// // // // // // // //         setOtpVerified(false);
// // // // // // // //         setOtp("");
// // // // // // // //     };

// // // // // // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // // // //         const { name, value } = e.target;
// // // // // // // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // // // //     };

// // // // // // // //     const handleSendOtp = async () => {
// // // // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // // // //             setError("Please enter a valid 10-digit phone number");
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         try {
// // // // // // // //             setLoading(true);
// // // // // // // //             setError("");
// // // // // // // //             const response = await axios.post("/api/send-otp", {
// // // // // // // //                 phone: formData.phone,
// // // // // // // //             });

// // // // // // // //             if (response.data.success) {
// // // // // // // //                 setSuccess("OTP sent successfully");
// // // // // // // //                 setShowOtpInput(true);
// // // // // // // //             } else {
// // // // // // // //                 setError("Failed to send OTP");
// // // // // // // //             }
// // // // // // // //         } catch (error: any) {
// // // // // // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // // // // // //         } finally {
// // // // // // // //             setLoading(false);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleVerifyOtp = async () => {
// // // // // // // //         if (!otp || otp.length !== 6) {
// // // // // // // //             setError("Please enter a valid 6-digit OTP");
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         try {
// // // // // // // //             setLoading(true);
// // // // // // // //             setError("");
// // // // // // // //             const response = await axios.post("/api/verify-otp", {
// // // // // // // //                 phone: formData.phone,
// // // // // // // //                 otp: otp,
// // // // // // // //             });

// // // // // // // //             if (response.data.success) {
// // // // // // // //                 setSuccess("Phone verified successfully");
// // // // // // // //                 setOtpVerified(true);
// // // // // // // //             } else {
// // // // // // // //                 setError("Invalid OTP");
// // // // // // // //             }
// // // // // // // //         } catch (error: any) {
// // // // // // // //             setError(
// // // // // // // //                 error.response?.data?.message || "OTP verification failed"
// // // // // // // //             );
// // // // // // // //         } finally {
// // // // // // // //             setLoading(false);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //         e.preventDefault();

// // // // // // // //         if (!otpVerified) {
// // // // // // // //             setError("Please verify your phone number first");
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         if (!formData.name.trim()) {
// // // // // // // //             setError("Name is required");
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         try {
// // // // // // // //             setLoading(true);
// // // // // // // //             setError("");
// // // // // // // //             const response = await axios.post(
// // // // // // // //                 `${url}/api/registrations`,
// // // // // // // //                 formData
// // // // // // // //             );

// // // // // // // //             if (response.data.success) {
// // // // // // // //                 setSuccess("Registration successful! Redirecting...");
// // // // // // // //                 setTimeout(() => router.push("/"), 1500);
// // // // // // // //             } else {
// // // // // // // //                 setError("Registration failed");
// // // // // // // //             }
// // // // // // // //         } catch (error: any) {
// // // // // // // //             setError(error.response?.data?.message || "Registration failed");
// // // // // // // //         } finally {
// // // // // // // //             setLoading(false);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <section className="sign-in-up register pt-120">
// // // // // // // //             <div className="overlay pt-120 pb-120">
// // // // // // // //                 <div className="container">
// // // // // // // //                     <div className="row align-items-center justify-content-between">
// // // // // // // //                         <div className="col-lg-5 col-md-6 order-md-first order-last">
// // // // // // // //                             <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // // // // // // //                                 <div className="section-header">
// // // // // // // //                                     <h2 className="mb-3">Join Our Network</h2>
// // // // // // // //                                     <p className="text-muted">
// // // // // // // //                                         Please select your partner type and fill
// // // // // // // //                                         the details
// // // // // // // //                                     </p>
// // // // // // // //                                 </div>

// // // // // // // //                                 {error && (
// // // // // // // //                                     <div className="alert alert-danger">
// // // // // // // //                                         {error}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                                 {success && (
// // // // // // // //                                     <div className="alert alert-success">
// // // // // // // //                                         {success}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}

// // // // // // // //                                 <div className="nav nav-tabs mb-4">
// // // // // // // //                                     {[
// // // // // // // //                                         "Swarnsathi_Champion",
// // // // // // // //                                         "Business_Associate",
// // // // // // // //                                         "Lending_Partner",
// // // // // // // //                                     ].map((tab) => (
// // // // // // // //                                         <button
// // // // // // // //                                             key={tab}
// // // // // // // //                                             className={`nav-link ${
// // // // // // // //                                                 activeTab === tab
// // // // // // // //                                                     ? "active"
// // // // // // // //                                                     : ""
// // // // // // // //                                             }`}
// // // // // // // //                                             onClick={() =>
// // // // // // // //                                                 handleTabChange(
// // // // // // // //                                                     tab as typeof activeTab
// // // // // // // //                                                 )
// // // // // // // //                                             }
// // // // // // // //                                             style={{
// // // // // // // //                                                 border: "1px solid #d18a2c",
// // // // // // // //                                                 marginRight: "10px",
// // // // // // // //                                             }}
// // // // // // // //                                         >
// // // // // // // //                                             {tab.replace(/_/g, " ")}
// // // // // // // //                                         </button>
// // // // // // // //                                     ))}
// // // // // // // //                                 </div>

// // // // // // // //                                 <form onSubmit={handleSubmit}>
// // // // // // // //                                     <div className="row">
// // // // // // // //                                         <div className="col-12">
// // // // // // // //                                             <div className="single-input mb-3">
// // // // // // // //                                                 <label>Full Name</label>
// // // // // // // //                                                 <input
// // // // // // // //                                                     type="text"
// // // // // // // //                                                     className="form-control"
// // // // // // // //                                                     name="name"
// // // // // // // //                                                     value={formData.name}
// // // // // // // //                                                     onChange={handleChange}
// // // // // // // //                                                     required
// // // // // // // //                                                 />
// // // // // // // //                                             </div>

// // // // // // // //                                             <div className="single-input mb-3">
// // // // // // // //                                                 <label>Mobile Number</label>
// // // // // // // //                                                 <div className="input-group">
// // // // // // // //                                                     <input
// // // // // // // //                                                         type="tel"
// // // // // // // //                                                         className="form-control"
// // // // // // // //                                                         name="phone"
// // // // // // // //                                                         value={formData.phone}
// // // // // // // //                                                         onChange={handleChange}
// // // // // // // //                                                         disabled={otpVerified}
// // // // // // // //                                                         required
// // // // // // // //                                                     />
// // // // // // // //                                                     <button
// // // // // // // //                                                         type="button"
// // // // // // // //                                                         className="btn btn-outline-secondary"
// // // // // // // //                                                         onClick={handleSendOtp}
// // // // // // // //                                                         disabled={
// // // // // // // //                                                             otpVerified ||
// // // // // // // //                                                             loading
// // // // // // // //                                                         }
// // // // // // // //                                                     >
// // // // // // // //                                                         {otpVerified
// // // // // // // //                                                             ? "Verified"
// // // // // // // //                                                             : "Send OTP"}
// // // // // // // //                                                     </button>
// // // // // // // //                                                 </div>
// // // // // // // //                                             </div>

// // // // // // // //                                             {showOtpInput && !otpVerified && (
// // // // // // // //                                                 <div className="single-input mb-3">
// // // // // // // //                                                     <label>
// // // // // // // //                                                         OTP Verification
// // // // // // // //                                                     </label>
// // // // // // // //                                                     <div className="input-group">
// // // // // // // //                                                         <input
// // // // // // // //                                                             type="text"
// // // // // // // //                                                             className="form-control"
// // // // // // // //                                                             value={otp}
// // // // // // // //                                                             onChange={(e) =>
// // // // // // // //                                                                 setOtp(
// // // // // // // //                                                                     e.target
// // // // // // // //                                                                         .value
// // // // // // // //                                                                 )
// // // // // // // //                                                             }
// // // // // // // //                                                             placeholder="6-digit OTP"
// // // // // // // //                                                         />
// // // // // // // //                                                         <button
// // // // // // // //                                                             type="button"
// // // // // // // //                                                             className="btn btn-primary"
// // // // // // // //                                                             onClick={
// // // // // // // //                                                                 handleVerifyOtp
// // // // // // // //                                                             }
// // // // // // // //                                                             disabled={loading}
// // // // // // // //                                                         >
// // // // // // // //                                                             Verify
// // // // // // // //                                                         </button>
// // // // // // // //                                                     </div>
// // // // // // // //                                                 </div>
// // // // // // // //                                             )}

// // // // // // // //                                             {activeTab !==
// // // // // // // //                                                 "Lending_Partner" && (
// // // // // // // //                                                 <div className="single-input mb-3">
// // // // // // // //                                                     <label>Pincode</label>
// // // // // // // //                                                     <input
// // // // // // // //                                                         type="text"
// // // // // // // //                                                         className="form-control"
// // // // // // // //                                                         name="pincode"
// // // // // // // //                                                         value={formData.pincode}
// // // // // // // //                                                         onChange={handleChange}
// // // // // // // //                                                         required
// // // // // // // //                                                     />
// // // // // // // //                                                 </div>
// // // // // // // //                                             )}

// // // // // // // //                                             {activeTab ===
// // // // // // // //                                                 "Lending_Partner" && (
// // // // // // // //                                                 <div className="single-input mb-3">
// // // // // // // //                                                     <label>Email Address</label>
// // // // // // // //                                                     <input
// // // // // // // //                                                         type="email"
// // // // // // // //                                                         className="form-control"
// // // // // // // //                                                         name="email"
// // // // // // // //                                                         value={formData.email}
// // // // // // // //                                                         onChange={handleChange}
// // // // // // // //                                                         required
// // // // // // // //                                                     />
// // // // // // // //                                                 </div>
// // // // // // // //                                             )}

// // // // // // // //                                             <div className="btn-area d-grid mt-4">
// // // // // // // //                                                 <button
// // // // // // // //                                                     type="submit"
// // // // // // // //                                                     className="cmn-btn btn py-2"
// // // // // // // //                                                     style={{
// // // // // // // //                                                         background: "#d18a2c",
// // // // // // // //                                                         color: "#fff",
// // // // // // // //                                                     }}
// // // // // // // //                                                     disabled={
// // // // // // // //                                                         loading || !otpVerified
// // // // // // // //                                                     }
// // // // // // // //                                                 >
// // // // // // // //                                                     {loading
// // // // // // // //                                                         ? "Submitting..."
// // // // // // // //                                                         : "Complete Registration"}
// // // // // // // //                                                 </button>
// // // // // // // //                                             </div>
// // // // // // // //                                         </div>
// // // // // // // //                                     </div>
// // // // // // // //                                 </form>
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="col-lg-6 col-md-6 order-md-last order-first mb-md-0 mb-4">
// // // // // // // //                             <div className="text-center">
// // // // // // // //                                 <img
// // // // // // // //                                     src="/images/partner-registration.jpg"
// // // // // // // //                                     className="img-fluid rounded-3"
// // // // // // // //                                     alt="Registration Visual"
// // // // // // // //                                     style={{ maxWidth: "100%", height: "auto" }}
// // // // // // // //                                 />
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </section>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default RegistrationForm;

// // // // // // // "use client";

// // // // // // // import React, { useState } from "react";
// // // // // // // import axios from "axios";

// // // // // // // interface FormData {
// // // // // // //     name: string;
// // // // // // //     phone: string;
// // // // // // //     pincode?: string;
// // // // // // //     email?: string;
// // // // // // //     type: string;
// // // // // // // }

// // // // // // // const RegistrationForm: React.FC = () => {
// // // // // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // // // // //     const [activeTab, setActiveTab] = useState<
// // // // // // //         "Swarnsathi_Champion" | "Business_Associate" | "Lending_Partner"
// // // // // // //     >("Swarnsathi_Champion");

// // // // // // //     const tabToType = {
// // // // // // //         Swarnsathi_Champion: "swarnsathi_champion",
// // // // // // //         Business_Associate: "business_associate",
// // // // // // //         Lending_Partner: "lending_partner",
// // // // // // //     };

// // // // // // //     const [formData, setFormData] = useState<FormData>({
// // // // // // //         name: "",
// // // // // // //         phone: "",
// // // // // // //         pincode: "",
// // // // // // //         email: "",
// // // // // // //         type: tabToType[activeTab],
// // // // // // //     });

// // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // //     const [error, setError] = useState<string | null>(null);
// // // // // // //     const [success, setSuccess] = useState<string | null>(null);
// // // // // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // // // // //     const [otp, setOtp] = useState("");
// // // // // // //     const [otpVerified, setOtpVerified] = useState(false);

// // // // // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // // //         const { name, value } = e.target;
// // // // // // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // // //     };

// // // // // // //     const handleTabChange = (tab: typeof activeTab) => {
// // // // // // //         setActiveTab(tab);
// // // // // // //         setFormData((prev) => ({
// // // // // // //             ...prev,
// // // // // // //             type: tabToType[tab],
// // // // // // //             pincode: tab !== "Lending_Partner" ? "" : undefined,
// // // // // // //             email: tab === "Lending_Partner" ? "" : undefined,
// // // // // // //         }));
// // // // // // //         setError(null);
// // // // // // //         setSuccess(null);
// // // // // // //         setShowOtpInput(false);
// // // // // // //         setOtpVerified(false);
// // // // // // //     };

// // // // // // //     const handleSendOtp = async () => {
// // // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // // //             setError("Please enter a valid 10-digit phone number");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             setLoading(true);
// // // // // // //             setError(null);
// // // // // // //             await axios.post(`/api/send-otp`, { phone: formData.phone });
// // // // // // //             setSuccess("OTP sent successfully to your phone");
// // // // // // //             setShowOtpInput(true);
// // // // // // //         } catch (err) {
// // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // // // // //         } finally {
// // // // // // //             setLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleVerifyOtp = async () => {
// // // // // // //         if (!otp || otp.length !== 6) {
// // // // // // //             setError("Please enter a valid 6-digit OTP");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             setLoading(true);
// // // // // // //             setError(null);
// // // // // // //             await axios.post(`/api/verify-phone-otp`, {
// // // // // // //                 phone: formData.phone,
// // // // // // //                 otp: otp,
// // // // // // //             });
// // // // // // //             setSuccess("Phone number verified successfully");
// // // // // // //             setOtpVerified(true);
// // // // // // //         } catch (err) {
// // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // // // // // //         } finally {
// // // // // // //             setLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // // // // //         e.preventDefault();

// // // // // // //         if (!formData.name.trim()) {
// // // // // // //             setError("Name is required");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // // //             setError("Valid phone number is required");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         if (!otpVerified) {
// // // // // // //             setError("Please verify your phone number before submitting");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         if (
// // // // // // //             activeTab !== "Lending_Partner" &&
// // // // // // //             (!formData.pincode || formData.pincode.length !== 6)
// // // // // // //         ) {
// // // // // // //             setError("Valid 6-digit pincode is required");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // // // // // //             setError("Email is required for lending partners");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             setLoading(true);
// // // // // // //             setError(null);
// // // // // // //             await axios.post(`${url}/api/be-our-partner/`, formData);
// // // // // // //             setSuccess("Registration successful! We'll contact you soon.");

// // // // // // //             setFormData({
// // // // // // //                 name: "",
// // // // // // //                 phone: "",
// // // // // // //                 pincode: "",
// // // // // // //                 email: "",
// // // // // // //                 type: tabToType[activeTab],
// // // // // // //             });
// // // // // // //             setOtp("");
// // // // // // //             setShowOtpInput(false);
// // // // // // //             setOtpVerified(false);
// // // // // // //         } catch (err) {
// // // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // // //             setError(error.response?.data?.message || "Registration failed");
// // // // // // //         } finally {
// // // // // // //             setLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <section className="sign-in-up register">
// // // // // // //             <div className="overlay pt-120 pb-120">
// // // // // // //                 <div className="container">
// // // // // // //                     <div className="row g-4">
// // // // // // //                         <div className="col-lg-6">
// // // // // // //                             <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // // // // // //                                 <div className="section-header mb-4">
// // // // // // //                                     <h2 className="title text-primary mb-3">
// // // // // // //                                         Let&apos;s Get Started!
// // // // // // //                                     </h2>
// // // // // // //                                     <p className="text-muted">
// // // // // // //                                         Please fill out the form to start your
// // // // // // //                                         online application
// // // // // // //                                     </p>
// // // // // // //                                 </div>

// // // // // // //                                 {error && (
// // // // // // //                                     <div className="alert alert-danger mb-3">
// // // // // // //                                         {error}
// // // // // // //                                     </div>
// // // // // // //                                 )}
// // // // // // //                                 {success && (
// // // // // // //                                     <div className="alert alert-success mb-3">
// // // // // // //                                         {success}
// // // // // // //                                     </div>
// // // // // // //                                 )}

// // // // // // //                                 <div className="d-flex gap-2 mb-4">
// // // // // // //                                     {[
// // // // // // //                                         "Swarnsathi_Champion",
// // // // // // //                                         "Business_Associate",
// // // // // // //                                         "Lending_Partner",
// // // // // // //                                     ].map((tab) => (
// // // // // // //                                         <button
// // // // // // //                                             key={tab}
// // // // // // //                                             className={`btn btn-outline-primary flex-grow-1 ${
// // // // // // //                                                 activeTab === tab
// // // // // // //                                                     ? "active bg-primary text-white"
// // // // // // //                                                     : ""
// // // // // // //                                             }`}
// // // // // // //                                             onClick={() =>
// // // // // // //                                                 handleTabChange(
// // // // // // //                                                     tab as typeof activeTab
// // // // // // //                                                 )
// // // // // // //                                             }
// // // // // // //                                         >
// // // // // // //                                             {tab.replace(/_/g, " ")}
// // // // // // //                                         </button>
// // // // // // //                                     ))}
// // // // // // //                                 </div>

// // // // // // //                                 <form onSubmit={handleSubmit}>
// // // // // // //                                     <div className="row g-3">
// // // // // // //                                         <div className="col-12">
// // // // // // //                                             <div className="form-floating">
// // // // // // //                                                 <input
// // // // // // //                                                     name="name"
// // // // // // //                                                     type="text"
// // // // // // //                                                     className="form-control"
// // // // // // //                                                     placeholder="Name"
// // // // // // //                                                     value={formData.name}
// // // // // // //                                                     onChange={handleChange}
// // // // // // //                                                     required
// // // // // // //                                                 />
// // // // // // //                                                 <label>Full Name</label>
// // // // // // //                                             </div>
// // // // // // //                                         </div>

// // // // // // //                                         <div className="col-12">
// // // // // // //                                             <div className="input-group">
// // // // // // //                                                 <div className="form-floating flex-grow-1">
// // // // // // //                                                     <input
// // // // // // //                                                         name="phone"
// // // // // // //                                                         type="tel"
// // // // // // //                                                         className="form-control"
// // // // // // //                                                         placeholder="Phone"
// // // // // // //                                                         value={formData.phone}
// // // // // // //                                                         onChange={handleChange}
// // // // // // //                                                         required
// // // // // // //                                                         disabled={otpVerified}
// // // // // // //                                                         maxLength={10}
// // // // // // //                                                     />
// // // // // // //                                                     <label>
// // // // // // //                                                         Phone Number *
// // // // // // //                                                     </label>
// // // // // // //                                                 </div>
// // // // // // //                                                 <button
// // // // // // //                                                     type="button"
// // // // // // //                                                     className="btn btn-primary"
// // // // // // //                                                     onClick={handleSendOtp}
// // // // // // //                                                     disabled={
// // // // // // //                                                         loading || otpVerified
// // // // // // //                                                     }
// // // // // // //                                                 >
// // // // // // //                                                     {loading
// // // // // // //                                                         ? "Sending..."
// // // // // // //                                                         : otpVerified
// // // // // // //                                                         ? "Verified"
// // // // // // //                                                         : "Verify"}
// // // // // // //                                                 </button>
// // // // // // //                                             </div>
// // // // // // //                                         </div>

// // // // // // //                                         {showOtpInput && !otpVerified && (
// // // // // // //                                             <div className="col-12">
// // // // // // //                                                 <div className="input-group">
// // // // // // //                                                     <div className="form-floating flex-grow-1">
// // // // // // //                                                         <input
// // // // // // //                                                             type="text"
// // // // // // //                                                             className="form-control"
// // // // // // //                                                             placeholder="OTP"
// // // // // // //                                                             value={otp}
// // // // // // //                                                             onChange={(e) =>
// // // // // // //                                                                 setOtp(
// // // // // // //                                                                     e.target
// // // // // // //                                                                         .value
// // // // // // //                                                                 )
// // // // // // //                                                             }
// // // // // // //                                                             required
// // // // // // //                                                             maxLength={6}
// // // // // // //                                                         />
// // // // // // //                                                         <label>
// // // // // // //                                                             Enter OTP *
// // // // // // //                                                         </label>
// // // // // // //                                                     </div>
// // // // // // //                                                     <button
// // // // // // //                                                         type="button"
// // // // // // //                                                         className="btn btn-primary"
// // // // // // //                                                         onClick={
// // // // // // //                                                             handleVerifyOtp
// // // // // // //                                                         }
// // // // // // //                                                         disabled={loading}
// // // // // // //                                                     >
// // // // // // //                                                         {loading
// // // // // // //                                                             ? "Verifying..."
// // // // // // //                                                             : "Verify OTP"}
// // // // // // //                                                     </button>
// // // // // // //                                                 </div>
// // // // // // //                                             </div>
// // // // // // //                                         )}

// // // // // // //                                         {activeTab !== "Lending_Partner" && (
// // // // // // //                                             <div className="col-12">
// // // // // // //                                                 <div className="form-floating">
// // // // // // //                                                     <input
// // // // // // //                                                         name="pincode"
// // // // // // //                                                         type="text"
// // // // // // //                                                         className="form-control"
// // // // // // //                                                         placeholder="Pincode"
// // // // // // //                                                         value={formData.pincode}
// // // // // // //                                                         onChange={handleChange}
// // // // // // //                                                         required
// // // // // // //                                                         maxLength={6}
// // // // // // //                                                     />
// // // // // // //                                                     <label>Pincode *</label>
// // // // // // //                                                 </div>
// // // // // // //                                             </div>
// // // // // // //                                         )}

// // // // // // //                                         {activeTab === "Lending_Partner" && (
// // // // // // //                                             <div className="col-12">
// // // // // // //                                                 <div className="form-floating">
// // // // // // //                                                     <input
// // // // // // //                                                         name="email"
// // // // // // //                                                         type="email"
// // // // // // //                                                         className="form-control"
// // // // // // //                                                         placeholder="Email"
// // // // // // //                                                         value={formData.email}
// // // // // // //                                                         onChange={handleChange}
// // // // // // //                                                         required
// // // // // // //                                                     />
// // // // // // //                                                     <label>
// // // // // // //                                                         Email Address *
// // // // // // //                                                     </label>
// // // // // // //                                                 </div>
// // // // // // //                                             </div>
// // // // // // //                                         )}

// // // // // // //                                         <div className="col-12">
// // // // // // //                                             <p className="text-muted small">
// // // // // // //                                                 By clicking submit, you agree to
// // // // // // //                                                 our terms of use, privacy
// // // // // // //                                                 policy, e-sign &amp;
// // // // // // //                                                 communication authorization.
// // // // // // //                                             </p>
// // // // // // //                                         </div>

// // // // // // //                                         <div className="col-12">
// // // // // // //                                             <button
// // // // // // //                                                 type="submit"
// // // // // // //                                                 className="btn btn-primary w-100 py-3"
// // // // // // //                                                 disabled={
// // // // // // //                                                     loading || !otpVerified
// // // // // // //                                                 }
// // // // // // //                                             >
// // // // // // //                                                 {loading
// // // // // // //                                                     ? "Submitting..."
// // // // // // //                                                     : "Submit Now"}
// // // // // // //                                             </button>
// // // // // // //                                             {!otpVerified && (
// // // // // // //                                                 <div className="text-danger small mt-2">
// // // // // // //                                                     * Phone verification
// // // // // // //                                                     required
// // // // // // //                                                 </div>
// // // // // // //                                             )}
// // // // // // //                                         </div>
// // // // // // //                                     </div>
// // // // // // //                                 </form>
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="col-lg-6 d-flex align-items-center justify-content-center">
// // // // // // //                             <img
// // // // // // //                                 src="/images/sign-in-up-bg.png"
// // // // // // //                                 alt="Registration"
// // // // // // //                                 className="img-fluid rounded-3"
// // // // // // //                                 style={{ maxWidth: "100%", height: "auto" }}
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </section>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default RegistrationForm;

// // // // // // "use client";

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "axios";
// // // // // // import { usePathname } from "next/navigation";

// // // // // // interface FormData {
// // // // // //     name: string;
// // // // // //     phone: string;
// // // // // //     pincode?: string;
// // // // // //     email?: string;
// // // // // //     type: string;
// // // // // // }

// // // // // // const RegistrationForm: React.FC = () => {
// // // // // //     const pathname = usePathname();
// // // // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // // // //     const validTabs = [
// // // // // //         "Swarnsathi_Champion",
// // // // // //         "Business_Associate",
// // // // // //         "Lending_Partner",
// // // // // //     ];

// // // // // //     // Get initial tab from URL hash
// // // // // //     const getInitialTab = (): (typeof validTabs)[number] => {
// // // // // //         if (typeof window !== "undefined") {
// // // // // //             const hash = window.location.hash.substring(1);
// // // // // //             return validTabs.includes(hash)
// // // // // //                 ? (hash as (typeof validTabs)[number])
// // // // // //                 : "Swarnsathi_Champion";
// // // // // //         }
// // // // // //         return "Swarnsathi_Champion";
// // // // // //     };

// // // // // //     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
// // // // // //         getInitialTab()
// // // // // //     );
// // // // // //     const [formData, setFormData] = useState<FormData>({
// // // // // //         name: "",
// // // // // //         phone: "",
// // // // // //         pincode: "",
// // // // // //         email: "",
// // // // // //         type: "swarnsathi_champion",
// // // // // //     });
// // // // // //     const [loading, setLoading] = useState(false);
// // // // // //     const [error, setError] = useState<string | null>(null);
// // // // // //     const [success, setSuccess] = useState<string | null>(null);
// // // // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // // // //     const [otp, setOtp] = useState("");
// // // // // //     const [otpVerified, setOtpVerified] = useState(false);

// // // // // //     // Handle hash changes
// // // // // //     useEffect(() => {
// // // // // //         const handleHashChange = () => {
// // // // // //             const newHash = window.location.hash.substring(1);
// // // // // //             if (validTabs.includes(newHash)) {
// // // // // //                 setActiveTab(newHash as (typeof validTabs)[number]);
// // // // // //             }
// // // // // //         };

// // // // // //         window.addEventListener("hashchange", handleHashChange);
// // // // // //         return () => window.removeEventListener("hashchange", handleHashChange);
// // // // // //     }, []);

// // // // // //     // Update form when tab changes
// // // // // //     useEffect(() => {
// // // // // //         const typeMap = {
// // // // // //             Swarnsathi_Champion: "swarnsathi_champion",
// // // // // //             Business_Associate: "business_associate",
// // // // // //             Lending_Partner: "lending_partner",
// // // // // //         };

// // // // // //         setFormData((prev) => ({
// // // // // //             ...prev,
// // // // // //             type: typeMap[activeTab],
// // // // // //             pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// // // // // //             email: activeTab === "Lending_Partner" ? "" : undefined,
// // // // // //         }));

// // // // // //         resetState();
// // // // // //     }, [activeTab]);

// // // // // //     const resetState = () => {
// // // // // //         setError(null);
// // // // // //         setSuccess(null);
// // // // // //         setShowOtpInput(false);
// // // // // //         setOtpVerified(false);
// // // // // //         setOtp("");
// // // // // //     };

// // // // // //     const handleTabChange = (tab: (typeof validTabs)[number]) => {
// // // // // //         window.location.hash = tab;
// // // // // //         setActiveTab(tab);
// // // // // //     };

// // // // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //         const { name, value } = e.target;
// // // // // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // //     };

// // // // // //     const handleSendOtp = async () => {
// // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // //             setError("Please enter a valid 10-digit phone number");
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             setLoading(true);
// // // // // //             setError(null);
// // // // // //             await axios.post(`/api/send-otp`, { phone: formData.phone });
// // // // // //             setSuccess("OTP sent successfully");
// // // // // //             setShowOtpInput(true);
// // // // // //         } catch (err) {
// // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleVerifyOtp = async () => {
// // // // // //         if (!otp || otp.length !== 6) {
// // // // // //             setError("Please enter a valid 6-digit OTP");
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             setLoading(true);
// // // // // //             setError(null);
// // // // // //             await axios.post(`/api/verify-phone-otp`, {
// // // // // //                 phone: formData.phone,
// // // // // //                 otp: otp,
// // // // // //             });
// // // // // //             setSuccess("Phone verified successfully");
// // // // // //             setOtpVerified(true);
// // // // // //         } catch (err) {
// // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // // // //         e.preventDefault();

// // // // // //         if (!formData.name.trim()) {
// // // // // //             setError("Name is required");
// // // // // //             return;
// // // // // //         }

// // // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // // //             setError("Valid phone number is required");
// // // // // //             return;
// // // // // //         }

// // // // // //         if (!otpVerified) {
// // // // // //             setError("Please verify your phone number first");
// // // // // //             return;
// // // // // //         }

// // // // // //         if (
// // // // // //             activeTab !== "Lending_Partner" &&
// // // // // //             (!formData.pincode || formData.pincode.length !== 6)
// // // // // //         ) {
// // // // // //             setError("Valid 6-digit pincode is required");
// // // // // //             return;
// // // // // //         }

// // // // // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // // // // //             setError("Email is required for lending partners");
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             setLoading(true);
// // // // // //             setError(null);
// // // // // //             await axios.post(`${url}/api/be-our-partner/`, formData);
// // // // // //             setSuccess("Registration successful!");

// // // // // //             setFormData({
// // // // // //                 name: "",
// // // // // //                 phone: "",
// // // // // //                 pincode: "",
// // // // // //                 email: "",
// // // // // //                 type: "swarnsathi_champion",
// // // // // //             });
// // // // // //             setOtp("");
// // // // // //             setShowOtpInput(false);
// // // // // //             setOtpVerified(false);
// // // // // //         } catch (err) {
// // // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // // //             setError(error.response?.data?.message || "Registration failed");
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <section className="sign-in-up register" id="registration-form">
// // // // // //             <div className="overlay pt-120 pb-120">
// // // // // //                 <div className="container">
// // // // // //                     <div className="row g-4">
// // // // // //                         <div className="col-lg-6">
// // // // // //                             <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // // // // //                                 <div className="section-header mb-4">
// // // // // //                                     <h2 className="title text-primary mb-3">
// // // // // //                                         Let&apos;s Get Started!
// // // // // //                                     </h2>
// // // // // //                                     <p className="text-muted">
// // // // // //                                         Please fill out the form to start your
// // // // // //                                         application
// // // // // //                                     </p>
// // // // // //                                 </div>

// // // // // //                                 {error && (
// // // // // //                                     <div className="alert alert-danger mb-3">
// // // // // //                                         {error}
// // // // // //                                     </div>
// // // // // //                                 )}
// // // // // //                                 {success && (
// // // // // //                                     <div className="alert alert-success mb-3">
// // // // // //                                         {success}
// // // // // //                                     </div>
// // // // // //                                 )}

// // // // // //                                 <div className="d-flex gap-2 mb-4">
// // // // // //                                     {validTabs.map((tab) => (
// // // // // //                                         <a
// // // // // //                                             key={tab}
// // // // // //                                             href={`${pathname}#${tab}`}
// // // // // //                                             className={`btn btn-outline-primary flex-grow-1 ${
// // // // // //                                                 activeTab === tab
// // // // // //                                                     ? "active bg-primary text-white"
// // // // // //                                                     : ""
// // // // // //                                             }`}
// // // // // //                                             onClick={(e) => {
// // // // // //                                                 e.preventDefault();
// // // // // //                                                 handleTabChange(tab);
// // // // // //                                             }}
// // // // // //                                         >
// // // // // //                                             {tab.replace(/_/g, " ")}
// // // // // //                                         </a>
// // // // // //                                     ))}
// // // // // //                                 </div>

// // // // // //                                 <form onSubmit={handleSubmit}>
// // // // // //                                     <div className="row g-3">
// // // // // //                                         <div className="col-12">
// // // // // //                                             <div className="form-floating">
// // // // // //                                                 <input
// // // // // //                                                     name="name"
// // // // // //                                                     type="text"
// // // // // //                                                     className="form-control"
// // // // // //                                                     placeholder="Name"
// // // // // //                                                     value={formData.name}
// // // // // //                                                     onChange={handleChange}
// // // // // //                                                     required
// // // // // //                                                 />
// // // // // //                                                 <label>Full Name</label>
// // // // // //                                             </div>
// // // // // //                                         </div>

// // // // // //                                         <div className="col-12">
// // // // // //                                             <div className="input-group">
// // // // // //                                                 <div className="form-floating flex-grow-1">
// // // // // //                                                     <input
// // // // // //                                                         name="phone"
// // // // // //                                                         type="tel"
// // // // // //                                                         className="form-control"
// // // // // //                                                         placeholder="Phone"
// // // // // //                                                         value={formData.phone}
// // // // // //                                                         onChange={handleChange}
// // // // // //                                                         required
// // // // // //                                                         disabled={otpVerified}
// // // // // //                                                         maxLength={10}
// // // // // //                                                     />
// // // // // //                                                     <label>
// // // // // //                                                         Phone Number *
// // // // // //                                                     </label>
// // // // // //                                                 </div>
// // // // // //                                                 <button
// // // // // //                                                     type="button"
// // // // // //                                                     className="btn btn-primary"
// // // // // //                                                     onClick={handleSendOtp}
// // // // // //                                                     disabled={
// // // // // //                                                         loading || otpVerified
// // // // // //                                                     }
// // // // // //                                                 >
// // // // // //                                                     {loading
// // // // // //                                                         ? "Sending..."
// // // // // //                                                         : otpVerified
// // // // // //                                                         ? "Verified"
// // // // // //                                                         : "Verify"}
// // // // // //                                                 </button>
// // // // // //                                             </div>
// // // // // //                                         </div>

// // // // // //                                         {showOtpInput && !otpVerified && (
// // // // // //                                             <div className="col-12">
// // // // // //                                                 <div className="input-group">
// // // // // //                                                     <div className="form-floating flex-grow-1">
// // // // // //                                                         <input
// // // // // //                                                             type="text"
// // // // // //                                                             className="form-control"
// // // // // //                                                             placeholder="OTP"
// // // // // //                                                             value={otp}
// // // // // //                                                             onChange={(e) =>
// // // // // //                                                                 setOtp(
// // // // // //                                                                     e.target
// // // // // //                                                                         .value
// // // // // //                                                                 )
// // // // // //                                                             }
// // // // // //                                                             required
// // // // // //                                                             maxLength={6}
// // // // // //                                                         />
// // // // // //                                                         <label>
// // // // // //                                                             Enter OTP *
// // // // // //                                                         </label>
// // // // // //                                                     </div>
// // // // // //                                                     <button
// // // // // //                                                         type="button"
// // // // // //                                                         className="btn btn-primary"
// // // // // //                                                         onClick={
// // // // // //                                                             handleVerifyOtp
// // // // // //                                                         }
// // // // // //                                                         disabled={loading}
// // // // // //                                                     >
// // // // // //                                                         {loading
// // // // // //                                                             ? "Verifying..."
// // // // // //                                                             : "Verify OTP"}
// // // // // //                                                     </button>
// // // // // //                                                 </div>
// // // // // //                                             </div>
// // // // // //                                         )}

// // // // // //                                         {activeTab !== "Lending_Partner" && (
// // // // // //                                             <div className="col-12">
// // // // // //                                                 <div className="form-floating">
// // // // // //                                                     <input
// // // // // //                                                         name="pincode"
// // // // // //                                                         type="text"
// // // // // //                                                         className="form-control"
// // // // // //                                                         placeholder="Pincode"
// // // // // //                                                         value={
// // // // // //                                                             formData.pincode ||
// // // // // //                                                             ""
// // // // // //                                                         }
// // // // // //                                                         onChange={handleChange}
// // // // // //                                                         required
// // // // // //                                                         maxLength={6}
// // // // // //                                                     />
// // // // // //                                                     <label>Pincode *</label>
// // // // // //                                                 </div>
// // // // // //                                             </div>
// // // // // //                                         )}

// // // // // //                                         {activeTab === "Lending_Partner" && (
// // // // // //                                             <div className="col-12">
// // // // // //                                                 <div className="form-floating">
// // // // // //                                                     <input
// // // // // //                                                         name="email"
// // // // // //                                                         type="email"
// // // // // //                                                         className="form-control"
// // // // // //                                                         placeholder="Email"
// // // // // //                                                         value={
// // // // // //                                                             formData.email || ""
// // // // // //                                                         }
// // // // // //                                                         onChange={handleChange}
// // // // // //                                                         required
// // // // // //                                                     />
// // // // // //                                                     <label>
// // // // // //                                                         Email Address *
// // // // // //                                                     </label>
// // // // // //                                                 </div>
// // // // // //                                             </div>
// // // // // //                                         )}

// // // // // //                                         <div className="col-12">
// // // // // //                                             <p className="text-muted small">
// // // // // //                                                 By submitting, you agree to our
// // // // // //                                                 terms and privacy policy
// // // // // //                                             </p>
// // // // // //                                         </div>

// // // // // //                                         <div className="col-12">
// // // // // //                                             <button
// // // // // //                                                 type="submit"
// // // // // //                                                 className="btn btn-primary w-100 py-3"
// // // // // //                                                 disabled={
// // // // // //                                                     loading || !otpVerified
// // // // // //                                                 }
// // // // // //                                             >
// // // // // //                                                 {loading
// // // // // //                                                     ? "Submitting..."
// // // // // //                                                     : "Submit Now"}
// // // // // //                                             </button>
// // // // // //                                             {!otpVerified && (
// // // // // //                                                 <div className="text-danger small mt-2">
// // // // // //                                                     * Phone verification
// // // // // //                                                     required
// // // // // //                                                 </div>
// // // // // //                                             )}
// // // // // //                                         </div>
// // // // // //                                     </div>
// // // // // //                                 </form>
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         <div className="col-lg-6 d-flex align-items-center justify-content-center">
// // // // // //                             <img
// // // // // //                                 src="/images/sign-in-up-bg.png"
// // // // // //                                 alt="Registration"
// // // // // //                                 className="img-fluid rounded-3"
// // // // // //                                 style={{ maxWidth: "100%", height: "auto" }}
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </section>
// // // // // //     );
// // // // // // };

// // // // // // export default RegistrationForm;

// // // // // "use client";

// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import { usePathname } from "next/navigation";

// // // // // interface FormData {
// // // // //     name: string;
// // // // //     phone: string;
// // // // //     pincode?: string;
// // // // //     email?: string;
// // // // //     type: string;
// // // // // }

// // // // // const RegistrationForm: React.FC = () => {
// // // // //     const pathname = usePathname();
// // // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // // //     const validTabs = [
// // // // //         "Swarnsathi_Champion",
// // // // //         "Business_Associate",
// // // // //         "Lending_Partner",
// // // // //     ];

// // // // //     // Get initial tab from URL hash
// // // // //     const getInitialTab = (): (typeof validTabs)[number] => {
// // // // //         if (typeof window !== "undefined") {
// // // // //             const hash = window.location.hash.substring(1);
// // // // //             return validTabs.includes(hash)
// // // // //                 ? (hash as (typeof validTabs)[number])
// // // // //                 : "Swarnsathi_Champion";
// // // // //         }
// // // // //         return "Swarnsathi_Champion";
// // // // //     };

// // // // //     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
// // // // //         getInitialTab()
// // // // //     );
// // // // //     const [formData, setFormData] = useState<FormData>({
// // // // //         name: "",
// // // // //         phone: "",
// // // // //         pincode: "",
// // // // //         email: "",
// // // // //         type: "swarnsathi_champion",
// // // // //     });
// // // // //     const [loading, setLoading] = useState(false);
// // // // //     const [error, setError] = useState<string | null>(null);
// // // // //     const [success, setSuccess] = useState<string | null>(null);
// // // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // // //     const [otp, setOtp] = useState("");
// // // // //     const [otpVerified, setOtpVerified] = useState(false);

// // // // //     // Handle hash changes
// // // // //     useEffect(() => {
// // // // //         const handleHashChange = () => {
// // // // //             const newHash = window.location.hash.substring(1);
// // // // //             if (validTabs.includes(newHash)) {
// // // // //                 setActiveTab(newHash as (typeof validTabs)[number]);
// // // // //             }
// // // // //         };

// // // // //         // Run once on initial load to respect URL hash
// // // // //         handleHashChange();

// // // // //         window.addEventListener("hashchange", handleHashChange);
// // // // //         return () => window.removeEventListener("hashchange", handleHashChange);
// // // // //     }, [validTabs]);

// // // // //     // Update form when tab changes
// // // // //     useEffect(() => {
// // // // //         const typeMap = {
// // // // //             Swarnsathi_Champion: "swarnsathi_champion",
// // // // //             Business_Associate: "business_associate",
// // // // //             Lending_Partner: "lending_partner",
// // // // //         };

// // // // //         setFormData((prev) => ({
// // // // //             ...prev,
// // // // //             type: typeMap[activeTab],
// // // // //             pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// // // // //             email: activeTab === "Lending_Partner" ? "" : undefined,
// // // // //         }));

// // // // //         resetState();
// // // // //     }, [activeTab]);

// // // // //     const resetState = () => {
// // // // //         setError(null);
// // // // //         setSuccess(null);
// // // // //         setShowOtpInput(false);
// // // // //         setOtpVerified(false);
// // // // //         setOtp("");
// // // // //     };

// // // // //     const handleTabChange = (tab: (typeof validTabs)[number]) => {
// // // // //         window.location.hash = tab;
// // // // //         setActiveTab(tab);
// // // // //     };

// // // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //         const { name, value } = e.target;
// // // // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //     };

// // // // //     const handleSendOtp = async () => {
// // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // //             setError("Please enter a valid 10-digit phone number");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             setLoading(true);
// // // // //             setError(null);
// // // // //             await axios.post(`/api/send-otp`, { phone: formData.phone });
// // // // //             setSuccess("OTP sent successfully");
// // // // //             setShowOtpInput(true);
// // // // //         } catch (err) {
// // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // // //         } finally {
// // // // //             setLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const handleVerifyOtp = async () => {
// // // // //         if (!otp || otp.length !== 6) {
// // // // //             setError("Please enter a valid 6-digit OTP");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             setLoading(true);
// // // // //             setError(null);
// // // // //             await axios.post(`/api/verify-phone-otp`, {
// // // // //                 phone: formData.phone,
// // // // //                 otp: otp,
// // // // //             });
// // // // //             setSuccess("Phone verified successfully");
// // // // //             setOtpVerified(true);
// // // // //         } catch (err) {
// // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // // // //         } finally {
// // // // //             setLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // // //         e.preventDefault();

// // // // //         if (!formData.name.trim()) {
// // // // //             setError("Name is required");
// // // // //             return;
// // // // //         }

// // // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // // //             setError("Valid phone number is required");
// // // // //             return;
// // // // //         }

// // // // //         if (!otpVerified) {
// // // // //             setError("Please verify your phone number first");
// // // // //             return;
// // // // //         }

// // // // //         if (
// // // // //             activeTab !== "Lending_Partner" &&
// // // // //             (!formData.pincode || formData.pincode.length !== 6)
// // // // //         ) {
// // // // //             setError("Valid 6-digit pincode is required");
// // // // //             return;
// // // // //         }

// // // // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // // // //             setError("Email is required for lending partners");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             setLoading(true);
// // // // //             setError(null);
// // // // //             await axios.post(`${url}/api/be-our-partner/`, formData);
// // // // //             setSuccess("Registration successful!");

// // // // //             setFormData({
// // // // //                 name: "",
// // // // //                 phone: "",
// // // // //                 pincode: "",
// // // // //                 email: "",
// // // // //                 type: formData.type, // Keep the current type
// // // // //             });
// // // // //             setOtp("");
// // // // //             setShowOtpInput(false);
// // // // //             setOtpVerified(false);
// // // // //         } catch (err) {
// // // // //             const error = err as { response?: { data?: { message?: string } } };
// // // // //             setError(error.response?.data?.message || "Registration failed");
// // // // //         } finally {
// // // // //             setLoading(false);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <section className="sign-in-up register" id="registration-form">
// // // // //                 <div className="overlay pt-120 pb-120">
// // // // //                     <div className="container">
// // // // //                         <div className="row g-4">
// // // // //                             <div className="col-lg-6">
// // // // //                                 <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // // // //                                     <div className="section-header mb-4">
// // // // //                                         <h2 className="title text-primary mb-3">
// // // // //                                             Let&apos;s Get Started!
// // // // //                                         </h2>
// // // // //                                         <p className="text-muted">
// // // // //                                             Please fill out the form to start your
// // // // //                                             application
// // // // //                                         </p>
// // // // //                                     </div>

// // // // //                                     {error && (
// // // // //                                         <div className="alert alert-danger mb-3">
// // // // //                                             {error}
// // // // //                                         </div>
// // // // //                                     )}
// // // // //                                     {success && (
// // // // //                                         <div className="alert alert-success mb-3">
// // // // //                                             {success}
// // // // //                                         </div>
// // // // //                                     )}

// // // // //                                     <div className="d-flex gap-2 mb-4">
// // // // //                                         {validTabs.map((tab) => (
// // // // //                                             <a
// // // // //                                                 key={tab}
// // // // //                                                 href={`${pathname}#${tab}`}
// // // // //                                                 className={`btn btn-outline-primary flex-grow-1 ${
// // // // //                                                     activeTab === tab
// // // // //                                                         ? "active bg-primary text-white"
// // // // //                                                         : ""
// // // // //                                                 }`}
// // // // //                                                 onClick={(e) => {
// // // // //                                                     e.preventDefault();
// // // // //                                                     handleTabChange(tab);
// // // // //                                                 }}
// // // // //                                             >
// // // // //                                                 {tab.replace(/_/g, " ")}
// // // // //                                             </a>
// // // // //                                         ))}
// // // // //                                     </div>

// // // // //                                     <form onSubmit={handleSubmit}>
// // // // //                                         <div className="row g-3">
// // // // //                                             <div className="col-12">
// // // // //                                                 <div className="form-floating">
// // // // //                                                     <input
// // // // //                                                         name="name"
// // // // //                                                         type="text"
// // // // //                                                         className="form-control"
// // // // //                                                         placeholder="Name"
// // // // //                                                         value={formData.name}
// // // // //                                                         onChange={handleChange}
// // // // //                                                         required
// // // // //                                                     />
// // // // //                                                     <label>Full Name</label>
// // // // //                                                 </div>
// // // // //                                             </div>

// // // // //                                             <div className="col-12">
// // // // //                                                 <div className="input-group">
// // // // //                                                     <div className="form-floating flex-grow-1">
// // // // //                                                         <input
// // // // //                                                             name="phone"
// // // // //                                                             type="tel"
// // // // //                                                             className="form-control"
// // // // //                                                             placeholder="Phone"
// // // // //                                                             value={formData.phone}
// // // // //                                                             onChange={handleChange}
// // // // //                                                             required
// // // // //                                                             disabled={otpVerified}
// // // // //                                                             maxLength={10}
// // // // //                                                         />
// // // // //                                                         <label>
// // // // //                                                             Phone Number *
// // // // //                                                         </label>
// // // // //                                                     </div>
// // // // //                                                     <button
// // // // //                                                         type="button"
// // // // //                                                         className="btn btn-primary"
// // // // //                                                         onClick={handleSendOtp}
// // // // //                                                         disabled={
// // // // //                                                             loading || otpVerified
// // // // //                                                         }
// // // // //                                                     >
// // // // //                                                         {loading
// // // // //                                                             ? "Sending..."
// // // // //                                                             : otpVerified
// // // // //                                                             ? "Verified"
// // // // //                                                             : "Verify"}
// // // // //                                                     </button>
// // // // //                                                 </div>
// // // // //                                             </div>

// // // // //                                             {showOtpInput && !otpVerified && (
// // // // //                                                 <div className="col-12">
// // // // //                                                     <div className="input-group">
// // // // //                                                         <div className="form-floating flex-grow-1">
// // // // //                                                             <input
// // // // //                                                                 type="text"
// // // // //                                                                 className="form-control"
// // // // //                                                                 placeholder="OTP"
// // // // //                                                                 value={otp}
// // // // //                                                                 onChange={(e) =>
// // // // //                                                                     setOtp(
// // // // //                                                                         e.target
// // // // //                                                                             .value
// // // // //                                                                     )
// // // // //                                                                 }
// // // // //                                                                 required
// // // // //                                                                 maxLength={6}
// // // // //                                                             />
// // // // //                                                             <label>
// // // // //                                                                 Enter OTP *
// // // // //                                                             </label>
// // // // //                                                         </div>
// // // // //                                                         <button
// // // // //                                                             type="button"
// // // // //                                                             className="btn btn-primary"
// // // // //                                                             onClick={
// // // // //                                                                 handleVerifyOtp
// // // // //                                                             }
// // // // //                                                             disabled={loading}
// // // // //                                                         >
// // // // //                                                             {loading
// // // // //                                                                 ? "Verifying..."
// // // // //                                                                 : "Verify OTP"}
// // // // //                                                         </button>
// // // // //                                                     </div>
// // // // //                                                 </div>
// // // // //                                             )}

// // // // //                                             {activeTab !== "Lending_Partner" && (
// // // // //                                                 <div className="col-12">
// // // // //                                                     <div className="form-floating">
// // // // //                                                         <input
// // // // //                                                             name="pincode"
// // // // //                                                             type="text"
// // // // //                                                             className="form-control"
// // // // //                                                             placeholder="Pincode"
// // // // //                                                             value={
// // // // //                                                                 formData.pincode ||
// // // // //                                                                 ""
// // // // //                                                             }
// // // // //                                                             onChange={handleChange}
// // // // //                                                             required
// // // // //                                                             maxLength={6}
// // // // //                                                         />
// // // // //                                                         <label>Pincode *</label>
// // // // //                                                     </div>
// // // // //                                                 </div>
// // // // //                                             )}

// // // // //                                             {activeTab === "Lending_Partner" && (
// // // // //                                                 <div className="col-12">
// // // // //                                                     <div className="form-floating">
// // // // //                                                         <input
// // // // //                                                             name="email"
// // // // //                                                             type="email"
// // // // //                                                             className="form-control"
// // // // //                                                             placeholder="Email"
// // // // //                                                             value={
// // // // //                                                                 formData.email || ""
// // // // //                                                             }
// // // // //                                                             onChange={handleChange}
// // // // //                                                             required
// // // // //                                                         />
// // // // //                                                         <label>
// // // // //                                                             Email Address *
// // // // //                                                         </label>
// // // // //                                                     </div>
// // // // //                                                 </div>
// // // // //                                             )}

// // // // //                                             <div className="col-12">
// // // // //                                                 <p className="text-muted small">
// // // // //                                                     By submitting, you agree to our
// // // // //                                                     terms and privacy policy
// // // // //                                                 </p>
// // // // //                                             </div>

// // // // //                                             <div className="col-12">
// // // // //                                                 <button
// // // // //                                                     type="submit"
// // // // //                                                     className="btn btn-primary w-100 py-3"
// // // // //                                                     disabled={
// // // // //                                                         loading || !otpVerified
// // // // //                                                     }
// // // // //                                                 >
// // // // //                                                     {loading
// // // // //                                                         ? "Submitting..."
// // // // //                                                         : "Submit Now"}
// // // // //                                                 </button>
// // // // //                                                 {!otpVerified && (
// // // // //                                                     <div className="text-danger small mt-2">
// // // // //                                                         * Phone verification
// // // // //                                                         required
// // // // //                                                     </div>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </form>
// // // // //                                 </div>
// // // // //                             </div>

// // // // //                             <div className="col-lg-6 d-flex align-items-center justify-content-center">
// // // // //                                 <img
// // // // //                                     src="/images/sign-in-up-bg.png"
// // // // //                                     alt="Registration"
// // // // //                                     className="img-fluid rounded-3"
// // // // //                                     style={{ maxWidth: "100%", height: "auto" }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>
// // // // //     );
// // // // // };

// // // // // export default RegistrationForm;

// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { usePathname } from "next/navigation";

// // // // interface FormData {
// // // //     name: string;
// // // //     phone: string;
// // // //     pincode?: string;
// // // //     email?: string;
// // // //     type: string;
// // // // }

// // // // const RegistrationForm: React.FC = () => {
// // // //     const pathname = usePathname();
// // // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // // //     const validTabs = [
// // // //         "Swarnsathi_Champion",
// // // //         "Business_Associate",
// // // //         "Lending_Partner",
// // // //     ];

// // // //     // Get initial tab from URL hash
// // // //     const getInitialTab = (): (typeof validTabs)[number] => {
// // // //         if (typeof window !== "undefined") {
// // // //             const hash = window.location.hash.substring(1);
// // // //             return validTabs.includes(hash)
// // // //                 ? (hash as (typeof validTabs)[number])
// // // //                 : "Swarnsathi_Champion";
// // // //         }
// // // //         return "Swarnsathi_Champion";
// // // //     };

// // // //     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
// // // //         getInitialTab()
// // // //     );
// // // //     const [formData, setFormData] = useState<FormData>({
// // // //         name: "",
// // // //         phone: "",
// // // //         pincode: "",
// // // //         email: "",
// // // //         type: "swarnsathi_champion",
// // // //     });
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [error, setError] = useState<string | null>(null);
// // // //     const [success, setSuccess] = useState<string | null>(null);
// // // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // // //     const [otp, setOtp] = useState("");
// // // //     const [otpVerified, setOtpVerified] = useState(false);

// // // //     // Handle hash changes and direct tab changes from header links
// // // //     useEffect(() => {
// // // //         const handleHashChange = () => {
// // // //             const newHash = window.location.hash.substring(1);
// // // //             if (validTabs.includes(newHash)) {
// // // //                 setActiveTab(newHash as (typeof validTabs)[number]);
// // // //             }
// // // //         };

// // // //         // Run once on initial load to respect URL hash
// // // //         handleHashChange();

// // // //         // Listen for hash changes
// // // //         window.addEventListener("hashchange", handleHashChange);

// // // //         // For handling clicks when already on the page (Next.js won't trigger a full page reload)
// // // //         // We need to check for changes in the URL hash directly
// // // //         const checkHashInterval = setInterval(() => {
// // // //             const currentHash = window.location.hash.substring(1);
// // // //             if (validTabs.includes(currentHash) && currentHash !== activeTab) {
// // // //                 setActiveTab(currentHash as (typeof validTabs)[number]);
// // // //             }
// // // //         }, 100);

// // // //         return () => {
// // // //             window.removeEventListener("hashchange", handleHashChange);
// // // //             clearInterval(checkHashInterval);
// // // //         };
// // // //     }, [validTabs, activeTab]);

// // // //     // Update form when tab changes
// // // //     useEffect(() => {
// // // //         const typeMap = {
// // // //             Swarnsathi_Champion: "swarnsathi_champion",
// // // //             Business_Associate: "business_associate",
// // // //             Lending_Partner: "lending_partner",
// // // //         };

// // // //         setFormData((prev) => ({
// // // //             ...prev,
// // // //             type: typeMap[activeTab],
// // // //             pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// // // //             email: activeTab === "Lending_Partner" ? "" : undefined,
// // // //         }));

// // // //         resetState();
// // // //     }, [activeTab]);

// // // //     const resetState = () => {
// // // //         setError(null);
// // // //         setSuccess(null);
// // // //         setShowOtpInput(false);
// // // //         setOtpVerified(false);
// // // //         setOtp("");
// // // //     };

// // // //     const handleTabChange = (tab: (typeof validTabs)[number]) => {
// // // //         window.location.hash = tab;
// // // //         setActiveTab(tab);
// // // //     };

// // // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //         const { name, value } = e.target;
// // // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleSendOtp = async () => {
// // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // //             setError("Please enter a valid 10-digit phone number");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             setLoading(true);
// // // //             setError(null);
// // // //             await axios.post(`/api/send-otp`, { phone: formData.phone });
// // // //             setSuccess("OTP sent successfully");
// // // //             setShowOtpInput(true);
// // // //         } catch (err) {
// // // //             const error = err as { response?: { data?: { message?: string } } };
// // // //             setError(error.response?.data?.message || "Failed to send OTP");
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleVerifyOtp = async () => {
// // // //         if (!otp || otp.length !== 6) {
// // // //             setError("Please enter a valid 6-digit OTP");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             setLoading(true);
// // // //             setError(null);
// // // //             await axios.post(`/api/verify-phone-otp`, {
// // // //                 phone: formData.phone,
// // // //                 otp: otp,
// // // //             });
// // // //             setSuccess("Phone verified successfully");
// // // //             setOtpVerified(true);
// // // //         } catch (err) {
// // // //             const error = err as { response?: { data?: { message?: string } } };
// // // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (e: React.FormEvent) => {
// // // //         e.preventDefault();

// // // //         if (!formData.name.trim()) {
// // // //             setError("Name is required");
// // // //             return;
// // // //         }

// // // //         if (!formData.phone || formData.phone.length !== 10) {
// // // //             setError("Valid phone number is required");
// // // //             return;
// // // //         }

// // // //         if (!otpVerified) {
// // // //             setError("Please verify your phone number first");
// // // //             return;
// // // //         }

// // // //         if (
// // // //             activeTab !== "Lending_Partner" &&
// // // //             (!formData.pincode || formData.pincode.length !== 6)
// // // //         ) {
// // // //             setError("Valid 6-digit pincode is required");
// // // //             return;
// // // //         }

// // // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // // //             setError("Email is required for lending partners");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             setLoading(true);
// // // //             setError(null);
// // // //             await axios.post(`${url}/api/be-our-partner/`, formData);
// // // //             setSuccess("Registration successful!");

// // // //             setFormData({
// // // //                 name: "",
// // // //                 phone: "",
// // // //                 pincode: "",
// // // //                 email: "",
// // // //                 type: formData.type, // Keep the current type
// // // //             });
// // // //             setOtp("");
// // // //             setShowOtpInput(false);
// // // //             setOtpVerified(false);
// // // //         } catch (err) {
// // // //             const error = err as { response?: { data?: { message?: string } } };
// // // //             setError(error.response?.data?.message || "Registration failed");
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <section className="sign-in-up register" id="registration-form">
// // // //                 <div className="overlay pt-120 pb-120">
// // // //                     <div className="container">
// // // //                         <div className="row g-4">
// // // //                             <div className="col-lg-6">
// // // //                                 <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // // //                                     <div className="section-header mb-4">
// // // //                                         <h2 className="title text-primary mb-3">
// // // //                                             Let&apos;s Get Started!
// // // //                                         </h2>
// // // //                                         <p className="text-muted">
// // // //                                             Please fill out the form to start your
// // // //                                             application
// // // //                                         </p>
// // // //                                     </div>

// // // //                                     {error && (
// // // //                                         <div className="alert alert-danger mb-3">
// // // //                                             {error}
// // // //                                         </div>
// // // //                                     )}
// // // //                                     {success && (
// // // //                                         <div className="alert alert-success mb-3">
// // // //                                             {success}
// // // //                                         </div>
// // // //                                     )}

// // // //                                     <div className="d-flex gap-2 mb-4">
// // // //                                         {validTabs.map((tab) => (
// // // //                                             <a
// // // //                                                 key={tab}
// // // //                                                 href={`${pathname}#${tab}`}
// // // //                                                 className={`btn btn-outline-primary flex-grow-1 ${
// // // //                                                     activeTab === tab
// // // //                                                         ? "active bg-primary text-white"
// // // //                                                         : ""
// // // //                                                 }`}
// // // //                                                 onClick={(e) => {
// // // //                                                     e.preventDefault();
// // // //                                                     handleTabChange(tab);
// // // //                                                 }}
// // // //                                             >
// // // //                                                 {tab.replace(/_/g, " ")}
// // // //                                             </a>
// // // //                                         ))}
// // // //                                     </div>

// // // //                                     <form onSubmit={handleSubmit}>
// // // //                                         <div className="row g-3">
// // // //                                             <div className="col-12">
// // // //                                                 <div className="form-floating">
// // // //                                                     <input
// // // //                                                         name="name"
// // // //                                                         type="text"
// // // //                                                         className="form-control"
// // // //                                                         placeholder="Name"
// // // //                                                         value={formData.name}
// // // //                                                         onChange={handleChange}
// // // //                                                         required
// // // //                                                     />
// // // //                                                     <label>Full Name</label>
// // // //                                                 </div>
// // // //                                             </div>

// // // //                                             <div className="col-12">
// // // //                                                 <div className="input-group">
// // // //                                                     <div className="form-floating flex-grow-1">
// // // //                                                         <input
// // // //                                                             name="phone"
// // // //                                                             type="tel"
// // // //                                                             className="form-control"
// // // //                                                             placeholder="Phone"
// // // //                                                             value={formData.phone}
// // // //                                                             onChange={handleChange}
// // // //                                                             required
// // // //                                                             disabled={otpVerified}
// // // //                                                             maxLength={10}
// // // //                                                         />
// // // //                                                         <label>
// // // //                                                             Phone Number *
// // // //                                                         </label>
// // // //                                                     </div>
// // // //                                                     <button
// // // //                                                         type="button"
// // // //                                                         className="btn btn-primary"
// // // //                                                         onClick={handleSendOtp}
// // // //                                                         disabled={
// // // //                                                             loading || otpVerified
// // // //                                                         }
// // // //                                                     >
// // // //                                                         {loading
// // // //                                                             ? "Sending..."
// // // //                                                             : otpVerified
// // // //                                                             ? "Verified"
// // // //                                                             : "Verify"}
// // // //                                                     </button>
// // // //                                                 </div>
// // // //                                             </div>

// // // //                                             {showOtpInput && !otpVerified && (
// // // //                                                 <div className="col-12">
// // // //                                                     <div className="input-group">
// // // //                                                         <div className="form-floating flex-grow-1">
// // // //                                                             <input
// // // //                                                                 type="text"
// // // //                                                                 className="form-control"
// // // //                                                                 placeholder="OTP"
// // // //                                                                 value={otp}
// // // //                                                                 onChange={(e) =>
// // // //                                                                     setOtp(
// // // //                                                                         e.target
// // // //                                                                             .value
// // // //                                                                     )
// // // //                                                                 }
// // // //                                                                 required
// // // //                                                                 maxLength={6}
// // // //                                                             />
// // // //                                                             <label>
// // // //                                                                 Enter OTP *
// // // //                                                             </label>
// // // //                                                         </div>
// // // //                                                         <button
// // // //                                                             type="button"
// // // //                                                             className="btn btn-primary"
// // // //                                                             onClick={
// // // //                                                                 handleVerifyOtp
// // // //                                                             }
// // // //                                                             disabled={loading}
// // // //                                                         >
// // // //                                                             {loading
// // // //                                                                 ? "Verifying..."
// // // //                                                                 : "Verify OTP"}
// // // //                                                         </button>
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             )}

// // // //                                             {activeTab !== "Lending_Partner" && (
// // // //                                                 <div className="col-12">
// // // //                                                     <div className="form-floating">
// // // //                                                         <input
// // // //                                                             name="pincode"
// // // //                                                             type="text"
// // // //                                                             className="form-control"
// // // //                                                             placeholder="Pincode"
// // // //                                                             value={
// // // //                                                                 formData.pincode ||
// // // //                                                                 ""
// // // //                                                             }
// // // //                                                             onChange={handleChange}
// // // //                                                             required
// // // //                                                             maxLength={6}
// // // //                                                         />
// // // //                                                         <label>Pincode *</label>
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             )}

// // // //                                             {activeTab === "Lending_Partner" && (
// // // //                                                 <div className="col-12">
// // // //                                                     <div className="form-floating">
// // // //                                                         <input
// // // //                                                             name="email"
// // // //                                                             type="email"
// // // //                                                             className="form-control"
// // // //                                                             placeholder="Email"
// // // //                                                             value={
// // // //                                                                 formData.email || ""
// // // //                                                             }
// // // //                                                             onChange={handleChange}
// // // //                                                             required
// // // //                                                         />
// // // //                                                         <label>
// // // //                                                             Email Address *
// // // //                                                         </label>
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             )}

// // // //                                             <div className="col-12">
// // // //                                                 <p className="text-muted small">
// // // //                                                     By submitting, you agree to our
// // // //                                                     terms and privacy policy
// // // //                                                 </p>
// // // //                                             </div>

// // // //                                             <div className="col-12">
// // // //                                                 <button
// // // //                                                     type="submit"
// // // //                                                     className="btn btn-primary w-100 py-3"
// // // //                                                     disabled={
// // // //                                                         loading || !otpVerified
// // // //                                                     }
// // // //                                                 >
// // // //                                                     {loading
// // // //                                                         ? "Submitting..."
// // // //                                                         : "Submit Now"}
// // // //                                                 </button>
// // // //                                                 {!otpVerified && (
// // // //                                                     <div className="text-danger small mt-2">
// // // //                                                         * Phone verification
// // // //                                                         required
// // // //                                                     </div>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </form>
// // // //                                 </div>
// // // //                             </div>

// // // //                             <div className="col-lg-6 d-flex align-items-center justify-content-center">
// // // //                                 <img
// // // //                                     src="/images/sign-in-up-bg.png"
// // // //                                     alt="Registration"
// // // //                                     className="img-fluid rounded-3"
// // // //                                     style={{ maxWidth: "100%", height: "auto" }}
// // // //                                 />
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //     );
// // // // };

// // // // export default RegistrationForm;

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { usePathname } from "next/navigation";

// // // interface FormData {
// // //     name: string;
// // //     phone: string;
// // //     pincode?: string;
// // //     email?: string;
// // //     type: string;
// // // };

// // // const RegistrationForm: React.FC = () => {
// // //     const pathname = usePathname();
// // //     const url = process.env.NEXT_PUBLIC_API_URL;
// // //     const validTabs = [
// // //         "Swarnsathi_Champion",
// // //         "Business_Associate",
// // //         "Lending_Partner",
// // //     ];

// // //     // Get initial tab from URL hash
// // //     const getInitialTab = (): (typeof validTabs)[number] => {
// // //         if (typeof window !== "undefined") {
// // //             const hash = window.location.hash.substring(1);
// // //             return validTabs.includes(hash)
// // //                 ? (hash as (typeof validTabs)[number])
// // //                 : "Swarnsathi_Champion";
// // //         }
// // //         return "Swarnsathi_Champion";
// // //     };

// // //     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
// // //         getInitialTab()
// // //     );
// // //     const [formData, setFormData] = useState<FormData>({
// // //         name: "",
// // //         phone: "",
// // //         pincode: "",
// // //         email: "",
// // //         type: "swarnsathi_champion",
// // //     });
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState<string | null>(null);
// // //     const [success, setSuccess] = useState<string | null>(null);
// // //     const [showOtpInput, setShowOtpInput] = useState(false);
// // //     const [genOtp, setGenOtp] = useState("");
// // //     const [otp, setOtp] = useState("");
// // //     const [otpVerified, setOtpVerified] = useState(false);

// // //     // Handle hash changes and direct tab changes from header links
// // //     useEffect(() => {
// // //         const handleHashChange = () => {
// // //             const newHash = window.location.hash.substring(1);
// // //             if (validTabs.includes(newHash)) {
// // //                 setActiveTab(newHash as (typeof validTabs)[number]);
// // //             }
// // //         };

// // //         // Run once on initial load to respect URL hash
// // //         handleHashChange();

// // //         // Listen for hash changes
// // //         window.addEventListener("hashchange", handleHashChange);

// // //         // For handling clicks when already on the page (Next.js won't trigger a full page reload)
// // //         // We need to check for changes in the URL hash directly
// // //         const checkHashInterval = setInterval(() => {
// // //             const currentHash = window.location.hash.substring(1);
// // //             if (validTabs.includes(currentHash) && currentHash !== activeTab) {
// // //                 setActiveTab(currentHash as (typeof validTabs)[number]);
// // //             }
// // //         }, 100);

// // //         return () => {
// // //             window.removeEventListener("hashchange", handleHashChange);
// // //             clearInterval(checkHashInterval);
// // //         };
// // //     }, [validTabs, activeTab]);

// // //     // Update form when tab changes
// // //     useEffect(() => {
// // //         const typeMap = {
// // //             Swarnsathi_Champion: "swarnsathi_champion",
// // //             Business_Associate: "business_associate",
// // //             Lending_Partner: "lending_partner",
// // //         };

// // //         setFormData((prev) => ({
// // //             ...prev,
// // //             type: typeMap[activeTab],
// // //             pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// // //             email: activeTab === "Lending_Partner" ? "" : undefined,
// // //         }));

// // //         resetState();
// // //     }, [activeTab]);

// // //     const resetState = () => {
// // //         setError(null);
// // //         setSuccess(null);
// // //         setShowOtpInput(false);
// // //         setOtpVerified(false);
// // //         setOtp("");
// // //     };

// // //     const handleTabChange = (tab: (typeof validTabs)[number]) => {
// // //         window.location.hash = tab;
// // //         setActiveTab(tab);
// // //     };

// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //         const { name, value } = e.target;
// // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // //     };

// // //     const handleSendOtp = async () => {
// // //         if (!formData.phone || formData.phone.length !== 10) {
// // //             setError("Please enter a valid 10-digit phone number");
// // //             return;
// // //         }

// // //         try {
// // //             setLoading(true);
// // //             setError(null);

// // //             // Call the API to send OTP
// // //             const response = await axios.post(`/api/send-otp`, {
// // //                 phone: formData.phone,
// // //                 type: formData.type // Pass the partner type
// // //             });

// // //             if (response.data.success) {
// // //                 setSuccess("OTP sent successfully");
// // //                 setShowOtpInput(true);
// // //                 // Store the generated OTP from backend
// // //                 setGenOtp(response.data.genOtp);
// // //             } else {
// // //                 setError(response.data.message || "Failed to send OTP");
// // //             }
// // //         } catch (err) {
// // //             const error = err as { response?: { data?: { message?: string } } };
// // //             setError(error.response?.data?.message || "Failed to send OTP");
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const handleVerifyOtp = async () => {
// // //         if (!otp || otp.length !== 6) {
// // //             setError("Please enter a valid 6-digit OTP");
// // //             return;
// // //         }

// // //         try {
// // //             setLoading(true);
// // //             setError(null);

// // //             // Call the API to verify OTP, following your existing pattern
// // //             const response = await axios.post(`/api/verify-otp`, {
// // //                 phoneNumber: formData.phone,
// // //                 otp: otp,
// // //                 genOtp: genOtp,
// // //             });

// // //             if (response.data.success) {
// // //                 setSuccess("Phone verified successfully");
// // //                 setOtpVerified(true);
// // //             } else {
// // //                 setError(response.data.message || "Failed to verify OTP");
// // //             }
// // //         } catch (err) {
// // //             const error = err as { response?: { data?: { message?: string } } };
// // //             setError(error.response?.data?.message || "Failed to verify OTP");
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const handleSubmit = async (e: React.FormEvent) => {
// // //         e.preventDefault();

// // //         if (!formData.name.trim()) {
// // //             setError("Name is required");
// // //             return;
// // //         }

// // //         if (!formData.phone || formData.phone.length !== 10) {
// // //             setError("Valid phone number is required");
// // //             return;
// // //         }

// // //         if (!otpVerified) {
// // //             setError("Please verify your phone number first");
// // //             return;
// // //         }

// // //         if (
// // //             activeTab !== "Lending_Partner" &&
// // //             (!formData.pincode || formData.pincode.length !== 6)
// // //         ) {
// // //             setError("Valid 6-digit pincode is required");
// // //             return;
// // //         }

// // //         if (activeTab === "Lending_Partner" && !formData.email) {
// // //             setError("Email is required for lending partners");
// // //             return;
// // //         }

// // //         try {
// // //             setLoading(true);
// // //             setError(null);
// // //             await axios.post(`${url}/api/be-our-partner/`, formData);
// // //             setSuccess("Registration successful!");

// // //             setFormData({
// // //                 name: "",
// // //                 phone: "",
// // //                 pincode: "",
// // //                 email: "",
// // //                 type: formData.type, // Keep the current type
// // //             });
// // //             setOtp("");
// // //             setShowOtpInput(false);
// // //             setOtpVerified(false);
// // //         } catch (err) {
// // //             const error = err as { response?: { data?: { message?: string } } };
// // //             setError(error.response?.data?.message || "Registration failed");
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <section className="sign-in-up register" id="registration-form">
// // //                 <div className="overlay pt-120 pb-120">
// // //                     <div className="container">
// // //                         <div className="row g-4">
// // //                             <div className="col-lg-6">
// // //                                 <div className="form-content shadow-sm bg-white p-4 rounded-3">
// // //                                     <div className="section-header mb-4">
// // //                                         <h2 className="title text-primary mb-3">
// // //                                             Let&apos;s Get Started!
// // //                                         </h2>
// // //                                         <p className="text-muted">
// // //                                             Please fill out the form to start your
// // //                                             application
// // //                                         </p>
// // //                                     </div>

// // //                                     {error && (
// // //                                         <div className="alert alert-danger mb-3">
// // //                                             {error}
// // //                                         </div>
// // //                                     )}
// // //                                     {success && (
// // //                                         <div className="alert alert-success mb-3">
// // //                                             {success}
// // //                                         </div>
// // //                                     )}

// // //                                     <div className="d-flex gap-2 mb-4">
// // //                                         {validTabs.map((tab) => (
// // //                                             <a
// // //                                                 key={tab}
// // //                                                 href={`${pathname}#${tab}`}
// // //                                                 className={`btn btn-outline-primary flex-grow-1 ${
// // //                                                     activeTab === tab
// // //                                                         ? "active bg-primary text-white"
// // //                                                         : ""
// // //                                                 }`}
// // //                                                 onClick={(e) => {
// // //                                                     e.preventDefault();
// // //                                                     handleTabChange(tab);
// // //                                                 }}
// // //                                             >
// // //                                                 {tab.replace(/_/g, " ")}
// // //                                             </a>
// // //                                         ))}
// // //                                     </div>

// // //                                     <form onSubmit={handleSubmit}>
// // //                                         <div className="row g-3">
// // //                                             <div className="col-12">
// // //                                                 <div className="form-floating">
// // //                                                     <input
// // //                                                         name="name"
// // //                                                         type="text"
// // //                                                         className="form-control"
// // //                                                         placeholder="Name"
// // //                                                         value={formData.name}
// // //                                                         onChange={handleChange}
// // //                                                         required
// // //                                                     />
// // //                                                     <label>Full Name</label>
// // //                                                 </div>
// // //                                             </div>

// // //                                             <div className="col-12">
// // //                                                 <div className="input-group">
// // //                                                     <div className="form-floating flex-grow-1">
// // //                                                         <input
// // //                                                             name="phone"
// // //                                                             type="tel"
// // //                                                             className="form-control"
// // //                                                             placeholder="Phone"
// // //                                                             value={formData.phone}
// // //                                                             onChange={handleChange}
// // //                                                             required
// // //                                                             disabled={otpVerified}
// // //                                                             maxLength={10}
// // //                                                         />
// // //                                                         <label>
// // //                                                             Phone Number *
// // //                                                         </label>
// // //                                                     </div>
// // //                                                     <button
// // //                                                         type="button"
// // //                                                         className="btn btn-primary"
// // //                                                         onClick={handleSendOtp}
// // //                                                         disabled={
// // //                                                             loading || otpVerified
// // //                                                         }
// // //                                                     >
// // //                                                         {loading
// // //                                                             ? "Sending..."
// // //                                                             : otpVerified
// // //                                                             ? "Verified"
// // //                                                             : "Verify"}
// // //                                                     </button>
// // //                                                 </div>
// // //                                             </div>

// // //                                             {showOtpInput && !otpVerified && (
// // //                                                 <div className="col-12">
// // //                                                     <div className="input-group">
// // //                                                         <div className="form-floating flex-grow-1">
// // //                                                             <input
// // //                                                                 type="text"
// // //                                                                 className="form-control"
// // //                                                                 placeholder="OTP"
// // //                                                                 value={otp}
// // //                                                                 onChange={(e) =>
// // //                                                                     setOtp(
// // //                                                                         e.target
// // //                                                                             .value
// // //                                                                     )
// // //                                                                 }
// // //                                                                 required
// // //                                                                 maxLength={6}
// // //                                                             />
// // //                                                             <label>
// // //                                                                 Enter OTP *
// // //                                                             </label>
// // //                                                         </div>
// // //                                                         <button
// // //                                                             type="button"
// // //                                                             className="btn btn-primary"
// // //                                                             onClick={
// // //                                                                 handleVerifyOtp
// // //                                                             }
// // //                                                             disabled={loading}
// // //                                                         >
// // //                                                             {loading
// // //                                                                 ? "Verifying..."
// // //                                                                 : "Verify OTP"}
// // //                                                         </button>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}

// // //                                             {activeTab !== "Lending_Partner" && (
// // //                                                 <div className="col-12">
// // //                                                     <div className="form-floating">
// // //                                                         <input
// // //                                                             name="pincode"
// // //                                                             type="text"
// // //                                                             className="form-control"
// // //                                                             placeholder="Pincode"
// // //                                                             value={
// // //                                                                 formData.pincode ||
// // //                                                                 ""
// // //                                                             }
// // //                                                             onChange={handleChange}
// // //                                                             required
// // //                                                             maxLength={6}
// // //                                                         />
// // //                                                         <label>Pincode *</label>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}

// // //                                             {activeTab === "Lending_Partner" && (
// // //                                                 <div className="col-12">
// // //                                                     <div className="form-floating">
// // //                                                         <input
// // //                                                             name="email"
// // //                                                             type="email"
// // //                                                             className="form-control"
// // //                                                             placeholder="Email"
// // //                                                             value={
// // //                                                                 formData.email || ""
// // //                                                             }
// // //                                                             onChange={handleChange}
// // //                                                             required
// // //                                                         />
// // //                                                         <label>
// // //                                                             Email Address *
// // //                                                         </label>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}

// // //                                             <div className="col-12">
// // //                                                 <p className="text-muted small">
// // //                                                     By submitting, you agree to our
// // //                                                     terms and privacy policy
// // //                                                 </p>
// // //                                             </div>

// // //                                             <div className="col-12">
// // //                                                 <button
// // //                                                     type="submit"
// // //                                                     className="btn btn-primary w-100 py-3"
// // //                                                     disabled={
// // //                                                         loading || !otpVerified
// // //                                                     }
// // //                                                 >
// // //                                                     {loading
// // //                                                         ? "Submitting..."
// // //                                                         : "Submit Now"}
// // //                                                 </button>
// // //                                                 {!otpVerified && (
// // //                                                     <div className="text-danger small mt-2">
// // //                                                         * Phone verification
// // //                                                         required
// // //                                                     </div>
// // //                                                 )}
// // //                                             </div>
// // //                                         </div>
// // //                                     </form>
// // //                                 </div>
// // //                             </div>

// // //                             <div className="col-lg-6 d-flex align-items-center justify-content-center">
// // //                                 <img
// // //                                     src="/images/sign-in-up-bg.png"
// // //                                     alt="Registration"
// // //                                     className="img-fluid rounded-3"
// // //                                     style={{ maxWidth: "100%", height: "auto" }}
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //     );
// // // };

// // // export default RegistrationForm;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { usePathname } from "next/navigation";

// // interface FormData {
// //     name: string;
// //     phone: string;
// //     pincode?: string;
// //     email?: string;
// //     type: string;
// // }

// // const RegistrationForm: React.FC = () => {
// //     const pathname = usePathname();
// //     const url = process.env.NEXT_PUBLIC_API_URL;
// //     const validTabs = [
// //         "Swarnsathi_Champion",
// //         "Business_Associate",
// //         "Lending_Partner",
// //     ];

// //     // Get initial tab from URL hash
// //     const getInitialTab = (): (typeof validTabs)[number] => {
// //         if (typeof window !== "undefined") {
// //             const hash = window.location.hash.substring(1);
// //             return validTabs.includes(hash)
// //                 ? (hash as (typeof validTabs)[number])
// //                 : "Swarnsathi_Champion";
// //         }
// //         return "Swarnsathi_Champion";
// //     };

// //     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
// //         getInitialTab()
// //     );
// //     const [formData, setFormData] = useState<FormData>({
// //         name: "",
// //         phone: "",
// //         pincode: "",
// //         email: "",
// //         type: "swarnsathi_champion",
// //     });
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState<string | null>(null);
// //     const [success, setSuccess] = useState<string | null>(null);
// //     const [showOtpInput, setShowOtpInput] = useState(false);
// //     const [genOtp, setGenOtp] = useState("");
// //     const [otp, setOtp] = useState("");
// //     const [otpVerified, setOtpVerified] = useState(false);

// //     // Handle initial form setup - important for correct tab loading
// //     useEffect(() => {
// //         // Initialize form data based on active tab
// //         const typeMap = {
// //             Swarnsathi_Champion: "swarnsathi_champion",
// //             Business_Associate: "business_associate",
// //             Lending_Partner: "lending_partner",
// //         };

// //         setFormData({
// //             name: "",
// //             phone: "",
// //             pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// //             email: activeTab === "Lending_Partner" ? "" : undefined,
// //             type: typeMap[activeTab],
// //         });
// //     }, []);

// //     // Handle hash changes and direct tab changes from header links
// //     useEffect(() => {
// //         const handleHashChange = () => {
// //             const newHash = window.location.hash.substring(1);
// //             if (validTabs.includes(newHash)) {
// //                 setActiveTab(newHash as (typeof validTabs)[number]);
// //             }
// //         };

// //         // Run once on initial load to respect URL hash
// //         handleHashChange();

// //         // Listen for hash changes
// //         window.addEventListener("hashchange", handleHashChange);

// //         // For handling clicks when already on the page (Next.js won't trigger a full page reload)
// //         // We need to check for changes in the URL hash directly
// //         const checkHashInterval = setInterval(() => {
// //             const currentHash = window.location.hash.substring(1);
// //             if (validTabs.includes(currentHash) && currentHash !== activeTab) {
// //                 setActiveTab(currentHash as (typeof validTabs)[number]);
// //             }
// //         }, 100);

// //         return () => {
// //             window.removeEventListener("hashchange", handleHashChange);
// //             clearInterval(checkHashInterval);
// //         };
// //     }, [validTabs, activeTab]);

// //     // Update form when tab changes
// //     useEffect(() => {
// //         const typeMap = {
// //             Swarnsathi_Champion: "swarnsathi_champion",
// //             Business_Associate: "business_associate",
// //             Lending_Partner: "lending_partner",
// //         };

// //         // Reset form data when tab changes to prevent field conflicts
// //         setFormData({
// //             name: formData.name, // Keep name if already entered
// //             phone: formData.phone, // Keep phone if already entered
// //             pincode:
// //                 activeTab !== "Lending_Partner"
// //                     ? formData.pincode || ""
// //                     : undefined,
// //             email:
// //                 activeTab === "Lending_Partner"
// //                     ? formData.email || ""
// //                     : undefined,
// //             type: typeMap[activeTab],
// //         });

// //         resetState();
// //     }, [activeTab]);

// //     const resetState = () => {
// //         setError(null);
// //         setSuccess(null);
// //         setShowOtpInput(false);
// //         setOtpVerified(false);
// //         setOtp("");
// //         setGenOtp("");
// //     };

// //     const handleTabChange = (tab: (typeof validTabs)[number]) => {
// //         window.location.hash = tab;
// //         setActiveTab(tab);
// //     };

// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         const { name, value } = e.target;
// //         setFormData((prev) => ({ ...prev, [name]: value }));
// //     };

// //     const handleSendOtp = async () => {
// //         if (!formData.phone || formData.phone.length !== 10) {
// //             setError("Please enter a valid 10-digit phone number");
// //             return;
// //         }

// //         try {
// //             setLoading(true);
// //             setError(null);

// //             // Call the API to send OTP
// //             const response = await axios.post(`/api/send-otp`, {
// //                 phone: formData.phone,
// //                 type: formData.type, // Pass the partner type
// //             });

// //             if (response.data.success) {
// //                 setSuccess("OTP sent successfully");
// //                 setShowOtpInput(true);
// //                 // Store the generated OTP from backend
// //                 setGenOtp(response.data.genOtp);
// //             } else {
// //                 setError(response.data.message || "Failed to send OTP");
// //             }
// //         } catch (err) {
// //             const error = err as { response?: { data?: { message?: string } } };
// //             setError(error.response?.data?.message || "Failed to send OTP");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handleVerifyOtp = async () => {
// //         if (!otp || otp.length !== 6) {
// //             setError("Please enter a valid 6-digit OTP");
// //             return;
// //         }

// //         try {
// //             setLoading(true);
// //             setError(null);

// //             // Call the API to verify OTP, following your existing pattern
// //             const response = await axios.post(`/api/verify-otp`, {
// //                 phoneNumber: formData.phone,
// //                 otp: otp,
// //                 genOtp: genOtp,
// //             });

// //             if (response.data.success) {
// //                 setSuccess("Phone verified successfully");
// //                 setOtpVerified(true);
// //             } else {
// //                 setError(response.data.message || "Failed to verify OTP");
// //             }
// //         } catch (err) {
// //             const error = err as { response?: { data?: { message?: string } } };
// //             setError(error.response?.data?.message || "Failed to verify OTP");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handleSubmit = async (e: React.FormEvent) => {
// //         e.preventDefault();

// //         if (!formData.name.trim()) {
// //             setError("Name is required");
// //             return;
// //         }

// //         if (!formData.phone || formData.phone.length !== 10) {
// //             setError("Valid phone number is required");
// //             return;
// //         }

// //         if (!otpVerified) {
// //             setError("Please verify your phone number first");
// //             return;
// //         }

// //         // Different validation based on tab type
// //         if (activeTab === "Lending_Partner") {
// //             // For Lending Partner, validate email
// //             if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
// //                 setError(
// //                     "Valid email address is required for lending partners"
// //                 );
// //                 return;
// //             }
// //         } else {
// //             // For other partner types, validate pincode
// //             if (!formData.pincode || formData.pincode.length !== 6) {
// //                 setError("Valid 6-digit pincode is required");
// //                 return;
// //             }
// //         }

// //         try {
// //             setLoading(true);
// //             setError(null);
// //             await axios.post(`${url}/api/be-our-partner/`, formData);
// //             setSuccess("Registration successful!");

// //             setFormData({
// //                 name: "",
// //                 phone: "",
// //                 pincode: activeTab !== "Lending_Partner" ? "" : undefined,
// //                 email: activeTab === "Lending_Partner" ? "" : undefined,
// //                 type: formData.type, // Keep the current type
// //             });
// //             setOtp("");
// //             setGenOtp("");
// //             setShowOtpInput(false);
// //             setOtpVerified(false);
// //         } catch (err) {
// //             const error = err as { response?: { data?: { message?: string } } };
// //             setError(error.response?.data?.message || "Registration failed");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <section className="sign-in-up register" id="registration-form">
// //             <div className="overlay pt-120 pb-120">
// //                 <div className="container">
// //                     <div className="row g-4">
// //                         <div className="col-lg-6">
// //                             <div className="form-content shadow-sm bg-white p-4 rounded-3">
// //                                 <div className="section-header mb-4">
// //                                     <h2 className="title text-primary mb-3">
// //                                         Let&apos;s Get Started!
// //                                     </h2>
// //                                     <p className="text-muted">
// //                                         Please fill out the form to start your
// //                                         application
// //                                     </p>
// //                                 </div>

// //                                 {error && (
// //                                     <div className="alert alert-danger mb-3">
// //                                         {error}
// //                                     </div>
// //                                 )}
// //                                 {success && (
// //                                     <div className="alert alert-success mb-3">
// //                                         {success}
// //                                     </div>
// //                                 )}

// //                                 <div className="d-flex gap-2 mb-4">
// //                                     {validTabs.map((tab) => (
// //                                         <a
// //                                             key={tab}
// //                                             href={`${pathname}#${tab}`}
// //                                             className={`btn btn-outline-primary flex-grow-1 ${
// //                                                 activeTab === tab
// //                                                     ? "active bg-primary text-white"
// //                                                     : ""
// //                                             }`}
// //                                             onClick={(e) => {
// //                                                 e.preventDefault();
// //                                                 handleTabChange(tab);
// //                                             }}
// //                                         >
// //                                             {tab.replace(/_/g, " ")}
// //                                         </a>
// //                                     ))}
// //                                 </div>

// //                                 <form onSubmit={handleSubmit}>
// //                                     <div className="row g-3">
// //                                         <div className="col-12">
// //                                             <div className="form-floating">
// //                                                 <input
// //                                                     name="name"
// //                                                     type="text"
// //                                                     className="form-control"
// //                                                     placeholder="Name"
// //                                                     value={formData.name}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                 />
// //                                                 <label>Full Name</label>
// //                                             </div>
// //                                         </div>

// //                                         <div className="col-12">
// //                                             <div className="input-group">
// //                                                 <div className="form-floating flex-grow-1">
// //                                                     <input
// //                                                         name="phone"
// //                                                         type="tel"
// //                                                         className="form-control"
// //                                                         placeholder="Phone"
// //                                                         value={formData.phone}
// //                                                         onChange={handleChange}
// //                                                         required
// //                                                         disabled={otpVerified}
// //                                                         maxLength={10}
// //                                                     />
// //                                                     <label>
// //                                                         Phone Number *
// //                                                     </label>
// //                                                 </div>
// //                                                 <button
// //                                                     type="button"
// //                                                     className="btn btn-primary"
// //                                                     onClick={handleSendOtp}
// //                                                     disabled={
// //                                                         loading || otpVerified
// //                                                     }
// //                                                 >
// //                                                     {loading
// //                                                         ? "Sending..."
// //                                                         : otpVerified
// //                                                         ? "Verified"
// //                                                         : "Verify"}
// //                                                 </button>
// //                                             </div>
// //                                         </div>

// //                                         {showOtpInput && !otpVerified && (
// //                                             <div className="col-12">
// //                                                 <div className="input-group">
// //                                                     <div className="form-floating flex-grow-1">
// //                                                         <input
// //                                                             type="text"
// //                                                             className="form-control"
// //                                                             placeholder="OTP"
// //                                                             value={otp}
// //                                                             onChange={(e) =>
// //                                                                 setOtp(
// //                                                                     e.target
// //                                                                         .value
// //                                                                 )
// //                                                             }
// //                                                             required
// //                                                             maxLength={6}
// //                                                         />
// //                                                         <label>
// //                                                             Enter OTP *
// //                                                         </label>
// //                                                     </div>
// //                                                     <button
// //                                                         type="button"
// //                                                         className="btn btn-primary"
// //                                                         onClick={
// //                                                             handleVerifyOtp
// //                                                         }
// //                                                         disabled={loading}
// //                                                     >
// //                                                         {loading
// //                                                             ? "Verifying..."
// //                                                             : "Verify OTP"}
// //                                                     </button>
// //                                                 </div>
// //                                             </div>
// //                                         )}

// //                                         {activeTab !== "Lending_Partner" && (
// //                                             <div className="col-12">
// //                                                 <div className="form-floating">
// //                                                     <input
// //                                                         name="pincode"
// //                                                         type="text"
// //                                                         className="form-control"
// //                                                         placeholder="Pincode"
// //                                                         value={
// //                                                             formData.pincode ||
// //                                                             ""
// //                                                         }
// //                                                         onChange={handleChange}
// //                                                         required
// //                                                         maxLength={6}
// //                                                     />
// //                                                     <label>Pincode *</label>
// //                                                 </div>
// //                                             </div>
// //                                         )}

// //                                         {activeTab === "Lending_Partner" && (
// //                                             <div className="col-12">
// //                                                 <div className="form-floating">
// //                                                     <input
// //                                                         name="email"
// //                                                         type="email"
// //                                                         className="form-control"
// //                                                         placeholder="Email"
// //                                                         value={
// //                                                             formData.email || ""
// //                                                         }
// //                                                         onChange={handleChange}
// //                                                         required
// //                                                     />
// //                                                     <label>
// //                                                         Email Address *
// //                                                     </label>
// //                                                 </div>
// //                                             </div>
// //                                         )}

// //                                         <div className="col-12">
// //                                             <p className="text-muted small">
// //                                                 By submitting, you agree to our
// //                                                 terms and privacy policy
// //                                             </p>
// //                                         </div>

// //                                         <div className="col-12">
// //                                             <button
// //                                                 type="submit"
// //                                                 className="btn btn-primary w-100 py-3"
// //                                                 disabled={
// //                                                     loading || !otpVerified
// //                                                 }
// //                                             >
// //                                                 {loading
// //                                                     ? "Submitting..."
// //                                                     : "Submit Now"}
// //                                             </button>
// //                                             {!otpVerified && (
// //                                                 <div className="text-danger small mt-2">
// //                                                     * Phone verification
// //                                                     required
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                     </div>
// //                                 </form>
// //                             </div>
// //                         </div>

// //                         <div className="col-lg-6 d-flex align-items-center justify-content-center">
// //                             <img
// //                                 src="/images/sign-in-up-bg.png"
// //                                 alt="Registration"
// //                                 className="img-fluid rounded-3"
// //                                 style={{ maxWidth: "100%", height: "auto" }}
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default RegistrationForm;

// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { usePathname } from "next/navigation";

// interface FormData {
//     name: string;
//     phone: string;
//     pincode?: string;
//     email?: string;
//     type: string;
// }

// const RegistrationForm: React.FC = () => {
//     const pathname = usePathname();
//     const url = process.env.NEXT_PUBLIC_API_URL;
//     const validTabs = [
//         "Swarnsathi_Champion",
//         "Business_Associate",
//         "Lending_Partner",
//     ];

//     // Get initial tab from URL hash
//     const getInitialTab = (): (typeof validTabs)[number] => {
//         if (typeof window !== "undefined") {
//             const hash = window.location.hash.substring(1);
//             return validTabs.includes(hash)
//                 ? (hash as (typeof validTabs)[number])
//                 : "Swarnsathi_Champion";
//         }
//         return "Swarnsathi_Champion";
//     };

//     const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(
//         getInitialTab()
//     );
//     const [formData, setFormData] = useState<FormData>({
//         name: "",
//         phone: "",
//         pincode: undefined,
//         email: undefined,
//         type: "swarnsathi_champion",
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null);
//     const [showOtpInput, setShowOtpInput] = useState(false);
//     const [genOtp, setGenOtp] = useState("");
//     const [otp, setOtp] = useState("");
//     const [otpVerified, setOtpVerified] = useState(false);

//     // Handle initial form setup - important for correct tab loading
//     useEffect(() => {
//         // Get the current tab from URL hash or default
//         const initialTab = getInitialTab();

//         // Initialize form data based on active tab
//         const typeMap = {
//             Swarnsathi_Champion: "swarnsathi_champion",
//             Business_Associate: "business_associate",
//             Lending_Partner: "lending_partner",
//         };

//         // Set initial form data with correct field structure based on the tab
//         if (initialTab === "Lending_Partner") {
//             setFormData({
//                 name: "",
//                 phone: "",
//                 pincode: undefined, // No pincode for Lending Partner
//                 email: "",
//                 type: typeMap[initialTab],
//             });
//         } else {
//             setFormData({
//                 name: "",
//                 phone: "",
//                 pincode: "",
//                 email: undefined, // No email for other partner types
//                 type: typeMap[initialTab],
//             });
//         }
//     }, []);

//     // Handle hash changes and direct tab changes from header links
//     useEffect(() => {
//         const handleHashChange = () => {
//             const newHash = window.location.hash.substring(1);
//             if (validTabs.includes(newHash)) {
//                 setActiveTab(newHash as (typeof validTabs)[number]);
//             }
//         };

//         // Run once on initial load to respect URL hash
//         handleHashChange();

//         // Listen for hash changes
//         window.addEventListener("hashchange", handleHashChange);

//         // For handling clicks when already on the page (Next.js won't trigger a full page reload)
//         // We need to check for changes in the URL hash directly
//         const checkHashInterval = setInterval(() => {
//             const currentHash = window.location.hash.substring(1);
//             if (validTabs.includes(currentHash) && currentHash !== activeTab) {
//                 setActiveTab(currentHash as (typeof validTabs)[number]);
//             }
//         }, 100);

//         return () => {
//             window.removeEventListener("hashchange", handleHashChange);
//             clearInterval(checkHashInterval);
//         };
//     }, [validTabs, activeTab]);

//     // Update form when tab changes
//     useEffect(() => {
//         const typeMap = {
//             Swarnsathi_Champion: "swarnsathi_champion",
//             Business_Associate: "business_associate",
//             Lending_Partner: "lending_partner",
//         };

//         // Create a new form data object instead of modifying the existing one
//         // This ensures a clean state for the new tab
//         if (activeTab === "Lending_Partner") {
//             setFormData({
//                 name: formData.name, // Keep name if already entered
//                 phone: formData.phone, // Keep phone if already entered
//                 pincode: undefined, // Important: No pincode for Lending Partner
//                 email: formData.email || "", // Use existing email or empty string
//                 type: typeMap[activeTab],
//             });
//         } else {
//             setFormData({
//                 name: formData.name, // Keep name if already entered
//                 phone: formData.phone, // Keep phone if already entered
//                 pincode: formData.pincode || "", // Use existing pincode or empty string
//                 email: undefined, // Important: No email for other partner types
//                 type: typeMap[activeTab],
//             });
//         }

//         resetState();
//     }, [activeTab]);

//     const resetState = () => {
//         setError(null);
//         setSuccess(null);
//         setShowOtpInput(false);
//         setOtpVerified(false);
//         setOtp("");
//         setGenOtp("");
//     };

//     const handleTabChange = (tab: (typeof validTabs)[number]) => {
//         window.location.hash = tab;
//         setActiveTab(tab);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSendOtp = async () => {
//         if (!formData.phone || formData.phone.length !== 10) {
//             setError("Please enter a valid 10-digit phone number");
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             // Call the API to send OTP
//             const response = await axios.post(`/api/send-otp`, {
//                 phone: formData.phone,
//                 type: formData.type, // Pass the partner type
//             });

//             if (response.data.success) {
//                 setSuccess("OTP sent successfully");
//                 setShowOtpInput(true);
//                 // Store the generated OTP from backend
//                 setGenOtp(response.data.genOtp);
//             } else {
//                 setError(response.data.message || "Failed to send OTP");
//             }
//         } catch (err) {
//             const error = err as { response?: { data?: { message?: string } } };
//             setError(error.response?.data?.message || "Failed to send OTP");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleVerifyOtp = async () => {
//         if (!otp || otp.length !== 6) {
//             setError("Please enter a valid 6-digit OTP");
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);

//             // Call the API to verify OTP, following your existing pattern
//             const response = await axios.post(`/api/verify-otp`, {
//                 phoneNumber: formData.phone,
//                 otp: otp,
//                 genOtp: genOtp,
//             });

//             if (response.data.success) {
//                 setSuccess("Phone verified successfully");
//                 setOtpVerified(true);
//             } else {
//                 setError(response.data.message || "Failed to verify OTP");
//             }
//         } catch (err) {
//             const error = err as { response?: { data?: { message?: string } } };
//             setError(error.response?.data?.message || "Failed to verify OTP");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!formData.name.trim()) {
//             setError("Name is required");
//             return;
//         }

//         if (!formData.phone || formData.phone.length !== 10) {
//             setError("Valid phone number is required");
//             return;
//         }

//         if (!otpVerified) {
//             setError("Please verify your phone number first");
//             return;
//         }

//         // Different validation based on tab type
//         if (activeTab === "Lending_Partner") {
//             // For Lending Partner, validate email
//             if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
//                 setError(
//                     "Valid email address is required for lending partners"
//                 );
//                 return;
//             }
//         } else {
//             // For other partner types, validate pincode
//             if (!formData.pincode || formData.pincode.length !== 6) {
//                 setError("Valid 6-digit pincode is required");
//                 return;
//             }
//         }

//         try {
//             setLoading(true);
//             setError(null);
//             await axios.post(`${url}/api/be-our-partner/`, formData);
//             setSuccess("Registration successful!");

//             // Set initial form based on which tab is active
//             if (activeTab === "Lending_Partner") {
//                 setFormData({
//                     name: "",
//                     phone: "",
//                     pincode: undefined,
//                     email: "",
//                     type: formData.type,
//                 });
//             } else {
//                 setFormData({
//                     name: "",
//                     phone: "",
//                     pincode: "",
//                     email: undefined,
//                     type: formData.type,
//                 });
//             }
//             setOtp("");
//             setGenOtp("");
//             setShowOtpInput(false);
//             setOtpVerified(false);
//         } catch (err) {
//             const error = err as { response?: { data?: { message?: string } } };
//             setError(error.response?.data?.message || "Registration failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <section className="sign-in-up register" id="registration-form">
//             <div className="overlay pt-120 pb-120">
//                 <div className="container">
//                     <div className="row g-4">
//                         <div className="col-lg-6">
//                             <div className="form-content shadow-sm bg-white p-4 rounded-3">
//                                 <div className="section-header mb-4">
//                                     <h2 className="title text-primary mb-3">
//                                         Let&apos;s Get Started!
//                                     </h2>
//                                     <p className="text-muted">
//                                         Please fill out the form to start your
//                                         application
//                                     </p>
//                                 </div>

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

//                                 <div className="d-flex gap-2 mb-4">
//                                     {validTabs.map((tab) => (
//                                         <a
//                                             key={tab}
//                                             href={`${pathname}#${tab}`}
//                                             className={`btn btn-outline-primary flex-grow-1 ${
//                                                 activeTab === tab
//                                                     ? "active bg-primary text-white"
//                                                     : ""
//                                             }`}
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 handleTabChange(tab);
//                                             }}
//                                         >
//                                             {tab.replace(/_/g, " ")}
//                                         </a>
//                                     ))}
//                                 </div>

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
//                                                     disabled={
//                                                         loading || otpVerified
//                                                     }
//                                                 >
//                                                     {loading
//                                                         ? "Sending..."
//                                                         : otpVerified
//                                                         ? "Verified"
//                                                         : "Verify"}
//                                                 </button>
//                                             </div>
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
//                                                             onChange={(e) =>
//                                                                 setOtp(
//                                                                     e.target
//                                                                         .value
//                                                                 )
//                                                             }
//                                                             required
//                                                             maxLength={6}
//                                                         />
//                                                         <label>
//                                                             Enter OTP *
//                                                         </label>
//                                                     </div>
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-primary"
//                                                         onClick={
//                                                             handleVerifyOtp
//                                                         }
//                                                         disabled={loading}
//                                                     >
//                                                         {loading
//                                                             ? "Verifying..."
//                                                             : "Verify OTP"}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         )}

//                                         {activeTab !== "Lending_Partner" && (
//                                             <div className="col-12">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         name="pincode"
//                                                         type="text"
//                                                         className="form-control"
//                                                         placeholder="Pincode"
//                                                         value={
//                                                             formData.pincode ||
//                                                             ""
//                                                         }
//                                                         onChange={handleChange}
//                                                         required
//                                                         maxLength={6}
//                                                     />
//                                                     <label>Pincode *</label>
//                                                 </div>
//                                             </div>
//                                         )}

//                                         {activeTab === "Lending_Partner" && (
//                                             <div className="col-12">
//                                                 <div className="form-floating">
//                                                     <input
//                                                         name="email"
//                                                         type="email"
//                                                         className="form-control"
//                                                         placeholder="Email"
//                                                         value={
//                                                             formData.email || ""
//                                                         }
//                                                         onChange={handleChange}
//                                                         required
//                                                     />
//                                                     <label>
//                                                         Email Address *
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         )}

//                                         <div className="col-12">
//                                             <p className="text-muted small">
//                                                 By submitting, you agree to our
//                                                 terms and privacy policy
//                                             </p>
//                                         </div>

//                                         <div className="col-12">
//                                             <button
//                                                 type="submit"
//                                                 className="btn btn-primary w-100 py-3"
//                                                 disabled={
//                                                     loading || !otpVerified
//                                                 }
//                                             >
//                                                 {loading
//                                                     ? "Submitting..."
//                                                     : "Submit Now"}
//                                             </button>
//                                             {!otpVerified && (
//                                                 <div className="text-danger small mt-2">
//                                                     * Phone verification
//                                                     required
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="col-lg-6 d-flex align-items-center justify-content-center">
//                             <img
//                                 src="/images/sign-in-up-bg.png"
//                                 alt="Registration"
//                                 className="img-fluid rounded-3"
//                                 style={{ maxWidth: "100%", height: "auto" }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default RegistrationForm;
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

interface FormData {
  name: string;
  phone: string;
  pincode?: string;
  email?: string;
  type: string;
}

const RegistrationForm: React.FC = () => {
  const pathname = usePathname();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const validTabs = [
    "Swarnsathi_Champion",
    "Business_Associate",
    "Lending_Partner",
  ] as const;

  const typeMap = {
    Swarnsathi_Champion: "swarnsathi_champion",
    Business_Associate: "business_associate",
    Lending_Partner: "lending_partner",
  };

  const [activeTab, setActiveTab] = useState<(typeof validTabs)[number]>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      return validTabs.includes(hash as any)
        ? (hash as (typeof validTabs)[number])
        : "Swarnsathi_Champion";
    }
    return "Swarnsathi_Champion";
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    type: typeMap[activeTab],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [genOtp, setGenOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (validTabs.includes(newHash as any)) {
        setActiveTab(newHash as (typeof validTabs)[number]);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      type: typeMap[activeTab],
      pincode: activeTab === "Lending_Partner" ? undefined : "",
      email: activeTab === "Lending_Partner" ? "" : undefined,
    }));
    resetState();
  }, [activeTab]);

  const resetState = () => {
    setError(null);
    setSuccess(null);
    setShowOtpInput(false);
    setOtpVerified(false);
    setOtp("");
    setGenOtp("");
  };

  const handleTabChange = (tab: (typeof validTabs)[number]) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
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
        setSuccess("OTP sent successfully");
        setShowOtpInput(true);
        setGenOtp(response.data.genOtp);
      } else {
        setError(response.data.message || "Failed to send OTP");
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
        setSuccess("Phone verified successfully");
        setOtpVerified(true);
      } else {
        setError(response.data.message || "Invalid OTP");
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    if (!otpVerified) {
      setError("Please verify your phone number first");
      return;
    }

    if (activeTab === "Lending_Partner") {
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        setError("Valid email address is required");
        return;
      }
    } else {
      if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
        setError("Valid 6-digit pincode is required");
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${url}/api/partner-form/`, {
        ...formData,
        type: typeMap[activeTab]
      });

      setSuccess(response.data.message);
      setFormData({
        name: "",
        phone: "",
        pincode: activeTab === "Lending_Partner" ? undefined : "",
        email: activeTab === "Lending_Partner" ? "" : undefined,
        type: typeMap[activeTab],
      });
      resetState();
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sign-in-up register" id="registration-form">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="form-content shadow-sm bg-white p-4 rounded-3">
                <div className="section-header mb-4">
                  <h2 className="title mb-3 text-[#fb9e47]">Let's Get Started!</h2>
                  <p className="text-muted text-[#fb9e47]">
                    Please fill out the form to start your application
                  </p>
                </div>

                {error && <div className="alert alert-danger mb-3">{error}</div>}
                {success && <div className="alert alert-success mb-3">{success}</div>}

                <div className="d-flex gap-2 mb-4">
                  {validTabs.map((tab) => (
                    <a
                      key={tab}
                      href={`${pathname}#${tab}`}
                      className={`btn flex-grow-1 border border-[#fb9e47] text-[#fb9e47] hover:text-[#fb9e47] ${
                        activeTab === tab ? "active !bg-[#fb9e47] !text-white" : "bg-transparent"
                      }`}
                      style={{
                        borderColor: "#fb9e47",
                        color: activeTab === tab ? "white" : "#fb9e47",
                        backgroundColor: activeTab === tab ? "#fb9e47" : "transparent",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTabChange(tab);
                      }}
                    >
                      {tab.replace(/_/g, " ")}
                    </a>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label>Full Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <div className="form-floating flex-grow-1">
                          <input
                            name="phone"
                            type="tel"
                            className="form-control"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={otpVerified}
                            maxLength={10}
                          />
                          <label>Phone Number *</label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#fb9e47", border: "#fb9e47" }}
                          onClick={handleSendOtp}
                          disabled={loading || otpVerified}
                        >
                          {loading ? "Sending..." : otpVerified ? "Verified" : "Verify"}
                        </button>
                      </div>
                    </div>

                    {showOtpInput && !otpVerified && (
                      <div className="col-12">
                        <div className="input-group">
                          <div className="form-floating flex-grow-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="OTP"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              required
                              maxLength={6}
                            />
                            <label>Enter OTP *</label>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ backgroundColor: "#fb9e47", border: "#fb9e47" }}
                            onClick={handleVerifyOtp}
                            disabled={loading}
                          >
                            {loading ? "Verifying..." : "Verify OTP"}
                          </button>
                        </div>
                      </div>
                    )}

                    {activeTab !== "Lending_Partner" && (
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            name="pincode"
                            type="text"
                            className="form-control"
                            placeholder="Pincode"
                            value={formData.pincode || ""}
                            onChange={handleChange}
                            required
                            maxLength={6}
                          />
                          <label>Pincode *</label>
                        </div>
                      </div>
                    )}

                    {activeTab === "Lending_Partner" && (
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            required
                          />
                          <label>Email Address *</label>
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3"
                        disabled={loading || !otpVerified}
                        style={{ backgroundColor: "#fb9e47", border: "#fb9e47" }}
                      >
                        {loading ? "Submitting..." : "Submit Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img
                src="/images/sign-in-up-bg.png"
                alt="Registration"
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;