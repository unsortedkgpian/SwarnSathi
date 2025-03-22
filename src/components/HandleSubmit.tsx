'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useOtp from "../hooks/useOtp";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    phoneNumber?: string;
    loanType?: string;
}

const ModalComponent = ({ show, onClose, phoneNumber, loanType = "gold-loan" }: ModalProps) => {
    const router = useRouter();
    const [showOtpForm, setShowOtpForm] = useState(!!phoneNumber);
    const [otp, setOtp] = useState("");
    const [mobileNumber, setMobileNumber] = useState(phoneNumber || "");
    const [pincode, setPincode] = useState("");
    const { sendOtp, verifyOtp, verifyLoginOtp, isSending, isVerifying, error, resetState } = useOtp();

    // Timer for OTP expiry countdown
    const [timer, setTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (phoneNumber) {
            setMobileNumber(phoneNumber);
            setShowOtpForm(true);
        }
    }, [phoneNumber]);

    // Set up countdown timer when OTP is sent
    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        if (showOtpForm && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTime) => {
                    if (prevTime <= 1) {
                        setCanResend(true);
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [showOtpForm, timer]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        resetState();

        try {
            if (showOtpForm) {
                const verified = await verifyOtp(mobileNumber, otp);
                if (verified) {
                    onClose();
                    router.push("/");
                }
            } else {
                if (!isValidIndianMobile(mobileNumber)) {
                    throw new Error("Please enter a valid 10-digit Indian mobile number");
                }
                
                if (!isValidPincode(pincode)) {
                    throw new Error("Please enter a valid 6-digit pincode");
                }
                
                const sent = await sendOtp(mobileNumber, pincode, loanType);
                if (sent) {
                    setShowOtpForm(true);
                    setTimer(600); // 10 minutes in seconds
                    setCanResend(false);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleResendOtp = async () => {
        if (!canResend) return;
        
        resetState();
        const sent = await sendOtp(mobileNumber, pincode, loanType);
        if (sent) {
            setTimer(600);
            setCanResend(false);
            setOtp("");
        }
    };

    const isValidIndianMobile = (phone: string) => {
        return /^[6-9]\d{9}$/.test(phone);
    };

    const isValidPincode = (code: string) => {
        return /^\d{6}$/.test(code);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    if (!show) return null;

    return (
        <div
            className="modal fade show fixed"
            style={{
                display: "block",
                paddingRight: "6px",
                color: "black",
                zIndex: "100000",
                margin: "40px",
                position: "fixed",
            }}
            role="dialog"
        >
            <div
                className="modal-dialog modal-dialog-centered modal-lg"
                style={{ position: "fixed" }}
            >
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>

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
                                                Let's Get Started!
                                            </h2>
                                        </div>

                                        {/* Mobile Entry Form */}
                                        <div className="col-lg-6">
                                            <div className="form-content">
                                                {error && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {error}
                                                    </div>
                                                )}
                                                <form onSubmit={handleSubmit}>
                                                    {!showOtpForm ? (
                                                        <div id="mobileentry">
                                                            <div className="single-input">
                                                                <label htmlFor="applynowmobile">
                                                                    Mobile Number
                                                                </label>
                                                                <input
                                                                    type="tel"
                                                                    id="applynowmobile"
                                                                    value={mobileNumber}
                                                                    onChange={(e) => setMobileNumber(e.target.value.trim())}
                                                                    placeholder="10-digit mobile number"
                                                                    required
                                                                    disabled={!!phoneNumber}
                                                                    autoComplete="off"
                                                                    maxLength={10}
                                                                />
                                                                <small className="text-muted">
                                                                    Enter a 10-digit number without country code
                                                                </small>
                                                            </div>
                                                            <div className="single-input">
                                                                <label htmlFor="applynowpincode">
                                                                    Enter Your Pincode
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="applynowpincode"
                                                                    value={pincode}
                                                                    onChange={(e) => setPincode(e.target.value.trim())}
                                                                    placeholder="6-digit pincode"
                                                                    required
                                                                    autoComplete="off"
                                                                    maxLength={6}
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div id="otpverifyform">
                                                            <div className="single-input">
                                                                <label>
                                                                    Enter OTP sent to {mobileNumber}
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="verifyotp"
                                                                    value={otp}
                                                                    onChange={(e) => setOtp(e.target.value.trim())}
                                                                    placeholder="Enter OTP"
                                                                    required
                                                                    autoComplete="off"
                                                                    style={{
                                                                        fontSize: "40px",
                                                                        letterSpacing: "0.5em",
                                                                    }}
                                                                    maxLength={6}
                                                                />
                                                            </div>
                                                            {timer > 0 && (
                                                                <div className="text-center mt-2">
                                                                    <small>OTP expires in {formatTime(timer)}</small>
                                                                </div>
                                                            )}
                                                            <div className="d-flex justify-content-between mt-3">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-link"
                                                                    onClick={() => setShowOtpForm(false)}
                                                                >
                                                                    Edit Phone Number
                                                                </button>
                                                                <button 
                                                                    type="button" 
                                                                    className={`btn btn-link ${!canResend ? 'text-muted' : ''}`}
                                                                    onClick={handleResendOtp}
                                                                    disabled={!canResend || isSending}
                                                                >
                                                                    {canResend ? "Resend OTP" : "Resend OTP"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="btn-area submitmodal">
                                                        <button
                                                            className="cmn-btn"
                                                            type="submit"
                                                            disabled={isSending || isVerifying}
                                                        >
                                                            {isSending || isVerifying
                                                                ? "Processing..."
                                                                : showOtpForm
                                                                ? "Verify OTP"
                                                                : "Send OTP"}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Image Section */}
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
    );
};

export default ModalComponent;