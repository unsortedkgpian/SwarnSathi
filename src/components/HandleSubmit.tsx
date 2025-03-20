// import { useState } from "react";

// interface ModalProps {
//     show: boolean;
//     onClose: () => void;
//     phoneNumber: string;
// }

// const ModalComponent = ({ show, onClose, phoneNumber }: ModalProps) => {
//     const [showOtpForm, setShowOtpForm] = useState(true);
//     const [otp, setOtp] = useState("");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission with phoneNumber and OTP
//     };

//     const handleSendOtp = () => {
//         // Send OTP to the phoneNumber
//         setShowOtpForm(true);
//     };

//     const handleVerifyOtp = () => {
//         // Verify OTP logic
//         onClose(); // Close modal after verification
//     };

//     if (!show) return null;

//     return (
//         <div
//             className="modal fade show"
//             style={{ display: "block", paddingRight: "6px" }}
//             role="dialog"
//         >
//             <div className="modal-dialog modal-dialog-centered modal-lg">
//                 <div className="modal-content">
//                     <div className="modal-body p-0">
//                         <button
//                             type="button"
//                             className="btn-close"
//                             onClick={onClose}
//                             aria-label="Close"
//                         ></button>

//                         {/* Add phoneNumber to the modal content */}
//                         <div className="single-input">
//                             <label>Verifying number: {phoneNumber}</label>
//                         </div>

//                         {/* Rest of your modal content */}
//                         {/* ... */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModalComponent;

import { useState } from "react";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    phoneNumber: string;
}

const ModalComponent = ({ show, onClose, phoneNumber }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showOtpForm, setShowOtpForm] = useState(true);
    const [otp, setOtp] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleSendOtp = () => {
        // Add OTP sending logic here
        setShowOtpForm(true);
    };

    const handleVerifyOtp = () => {
        // Add OTP verification logic here
    };

    if (!show) return null;

    return (
        <>
            <div
                className="modal fade show"
                
                style={{ display: "block", paddingRight: "6px", color:"black" }}
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                            ></button>

                            <section
                                className="sign-in-up register"
                                style={{ marginTop: 0 }}
                            >
                                <div
                                    className="overlay"
                                    style={{
                                        padding: "10px 10px 20px 20px",
                                    }}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="section-header">
                                                <h5 className="sub-title">
                                                    The Power of Financial
                                                    Freedom
                                                </h5>
                                                <h2 className="title">
                                                    Let’s Get Started!
                                                </h2>
                                            </div>

                                            {/* Mobile Image - Visible only on small screens */}
                                            <div className="col-lg-6 d-block d-sm-none">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src="/images/transperant.gif"
                                                        width="200px"
                                                        alt="namaskar"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-content">
                                                    <form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        {/* Hidden inputs */}
                                                        <input
                                                            type="hidden"
                                                            name="_token"
                                                            value="fz6wIqm4ie6Q1rJxMJaETwLH4sGDa3JiO4szFvT4"
                                                        />
                                                        {/* Add other hidden inputs here */}

                                                        <div
                                                            id="mobileentry"
                                                            style={{
                                                                display:
                                                                    showOtpForm
                                                                        ? "none"
                                                                        : "block",
                                                            }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="single-input">
                                                                        <label htmlFor="fname">
                                                                            Mobile
                                                                            Number
                                                                        </label>
                                                                        <input
                                                                            type="tel"
                                                                            id="applynowmobile"
                                                                            value={
                                                                                mobileNumber
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setMobileNumber(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            autoComplete="off"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            id="otpverifyform"
                                                            style={{
                                                                display:
                                                                    showOtpForm
                                                                        ? "block"
                                                                        : "none",
                                                            }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="single-input">
                                                                        <label htmlFor="mobileverify">
                                                                            Enter
                                                                            6
                                                                            digit
                                                                            OTP
                                                                            sent
                                                                            to
                                                                            your
                                                                            mobile
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            id="verifyotp"
                                                                            value={
                                                                                otp
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setOtp(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            style={{
                                                                                fontSize:
                                                                                    "40px",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="btn-area submitmodal">
                                                            <button
                                                                className="cmn-btn"
                                                                type="button"
                                                                onClick={
                                                                    handleSendOtp
                                                                }
                                                            >
                                                                Send OTP
                                                            </button>
                                                            <button
                                                                className="cmn-btn"
                                                                type="button"
                                                                onClick={
                                                                    handleVerifyOtp
                                                                }
                                                            >
                                                                Verify OTP
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            {/* Desktop Image - Visible on larger screens */}
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

export default ModalComponent;
