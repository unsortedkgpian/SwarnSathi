'use client'
import { useState } from "react";
import './SignInRegister.tsx'
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from 'cookies-next';

const SignInRegister = () => {
    const [genOtp, setGenOtp] = useState("");
    const router = useRouter();
    const [isOtpSignIn, setIsOtpSignIn] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const url = process.env.NEXT_PUBLIC_API_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignInMethodToggle = () => {
        setIsOtpSignIn(!isOtpSignIn);
        setError("");
        setSuccess("");
        setOtpSent(false);
    };

    const sendOtpLogin = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
        setError("Please enter a valid 10-digit mobile number");
        return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");
    console.log("Checking verification for:", phoneNumber);

    try {
        // 1. Check if lead is verified
        let los_url = 'http://localhost:4000'
        const verifyResponse = await axios.get(`${los_url}/api/lead/${phoneNumber}`);

        if (!verifyResponse.data.success || !verifyResponse.data.data?.isVerified) {
            setError("Lead is not verified. Please contact support.");
            setIsLoading(false);
            return;
        }

        // 2. Proceed to send OTP if verified
        const otpResponse = await axios.post(`/api/send-otp`, {
            phone: phoneNumber,
            loanType: "gold-loan",
        });

        console.log("OTP response:", otpResponse.data);

        if (otpResponse.data.success) {
            setSuccess("OTP sent successfully to your mobile number");
            setOtpSent(true);

            if (otpResponse.data.genOtp) {
                setGenOtp(otpResponse.data.genOtp);
                console.log("OTP received for testing:", otpResponse.data.genOtp);
            }
            } else {
                setError(otpResponse.data.message || "Failed to send OTP. Please try again.");
            }
        } catch (error: any) {
            console.error("Error during OTP process:", error);
            setError(error.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    const verifyOtpLogin = async () => {
        if (!phoneNumber || !otp) {
            setError("Please enter both phone number and OTP");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            console.log("Verifying OTP:", { phone: phoneNumber, otp });
            const response = await axios.post(`/api/verify-otp`, {
                phoneNumber,
                otp: otp
            });
            
            console.log("OTP verification response:", response.data);
            
            if (response.data.success) {
                // Store the JWT token in localStorage and cookies
                const token = response.data.token;
                localStorage.setItem("token", token);
                setCookie('token', token, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
                
                // Store user info if available
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                }
                
                // Show success message
                setSuccess("Successfully logged in! Redirecting...");
                setIsLoggedIn(true);
                
                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            } else {
                setError(response.data.message || "OTP verification failed. Please try again.");
            }
        } catch (error: any) {
            console.error("OTP verification failed", error);
            setError(error.response?.data?.message || "OTP verification failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!phoneNumber || !password) {
            setError("Please enter both phone number and password");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post(`/api/login`, {
                phone: phoneNumber,
                password: password
            });
            
            if (response.data.success) {
                // Store the JWT token in localStorage and cookies
                const token = response.data.token;
                localStorage.setItem("token", token);
                setCookie('token', token, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
                
                // Store user info if available
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                }
                
                // Show success message
                setSuccess("Successfully logged in! Redirecting...");
                setIsLoggedIn(true);
                
                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            } else {
                setError(response.data.message || "Login failed. Please check your credentials.");
            }
        } catch (error: any) {
            console.error("Login failed", error);
            setError(error.response?.data?.message || "Login failed. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="sign-in-up register pt-80">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        {/* Form Column */}
                        <div className="col-lg-5 col-md-6 order-md-first order-last">
                            <div className="form-content shadow-sm bg-white p-4 rounded-3">
                                <div
                                    id="form-message-warning"
                                    className="mb-4"
                                ></div>
                                <div id="form-message-success" className="mb-4">
                                    <div className="section-header">
                                        <h2 className="mb-3">Welcome Back</h2>
                                        <p className="text-muted">
                                            Please enter your registered mobile number</p>
                                    </div>
                                </div>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}

                                <form
                                    onSubmit={!isOtpSignIn ? handlePasswordLogin : (e) => e.preventDefault()}
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="single-input mb-3">
                                                <label
                                                    htmlFor="applynowmobileassoc"
                                                    className="form-label"
                                                >
                                                    Mobile Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="applynowmobileassoc"
                                                    name="applynowmobile"
                                                    autoComplete="off"
                                                    required
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </div>

                                            {!isOtpSignIn ? (
                                                <div className="single-input mb-4">
                                                    <label
                                                        htmlFor="password"
                                                        className="form-label"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="passwordlogin"
                                                        autoComplete="off"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            ) : (
                                                <>
                                                    {otpSent && (
                                                        <div className="single-input mb-4">
                                                            <label
                                                                htmlFor="otpverifyvalue"
                                                                className="form-label"
                                                            >
                                                                Enter OTP to verify
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="otpverifyvalue"
                                                                autoComplete="off"
                                                                value={otp}
                                                                onChange={(e) => setOtp(e.target.value)}
                                                            />
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            <div className="mb-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-link p-0 text-decoration-none"
                                                    onClick={handleSignInMethodToggle}
                                                    style={{ color: "#2046ff" }}
                                                >
                                                    {isOtpSignIn
                                                        ? "Use password instead"
                                                        : "Use OTP instead"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-area d-grid gap-3">
                                        {!isOtpSignIn ? (
                                            <button
                                                className="cmn-btn btn py-2"
                                                type="submit"
                                                style={{
                                                    background: "#d18a2c",
                                                    color: "#fff",
                                                }}
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Signing In...' : 'Sign In'}
                                            </button>
                                        ) : (
                                            <>
                                                {!otpSent ? (
                                                    <button
                                                        type="button"
                                                        className="cmn-btn btn btn-primary py-2"
                                                        onClick={sendOtpLogin}
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? 'Sending...' : 'Send OTP'}
                                                    </button>
                                                ) : (
                                                    <>
                                                        <button
                                                            type="button"
                                                            className="cmn-btn btn py-2"
                                                            onClick={verifyOtpLogin}
                                                            style={{
                                                                background: "#fda033",
                                                                color:"#fff"
                                                            }}
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? 'Verifying...' : 'Verify OTP'}
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="cmn-btn btn btn-outline-secondary py-2"
                                                            onClick={sendOtpLogin}
                                                            disabled={isLoading}
                                                        >
                                                            Resend OTP
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="col-lg-6 col-md-6 order-md-last order-first mb-md-0 mb-4">
                            <div className="text-center">
                                <img
                                    src="/images/LOGIN2.jpg"
                                    className="img-fluid rounded-3"
                                    alt="Login Visual"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInRegister;