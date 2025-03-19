'use client'
import { useState } from "react";
import './SignInRegister.tsx'

// const SignInRegister = () => {
//     const [isOtpSignIn, setIsOtpSignIn] = useState(false);

//     const handleSignInMethodToggle = () => {
//         setIsOtpSignIn(!isOtpSignIn);
//     };

//     const sendOtpLogin = () => {
//         // Implement your send OTP logic here
//     };

//     const verifyOtpLogin = () => {
//         // Implement your OTP verification logic here
//     };

//     return (
//         <section className="sign-in-up register pt-120">
//             <div className="overlay pt-120 pb-120">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-5 col-md-5 col-12 cus-ord">
//                             <div className="form-content">
//                                 <div
//                                     id="form-message-warning"
//                                     className="mb-4"
//                                 ></div>
//                                 <div id="form-message-success" className="mb-4">
//                                     <div className="section-header">
//                                         <p>
//                                             Please enter your registered mobile
//                                             no
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <form
//                                     action="https://swarnsathi.com/assoicate/login"
//                                     method="post"
//                                 >
//                                     <input
//                                         type="hidden"
//                                         name="loginassoc"
//                                         value="loginassociate"
//                                     />
//                                     <input
//                                         type="hidden"
//                                         name="g-recaptcha-response-assoc-login"
//                                         id="g-recaptcha-response-assoc-login"
//                                         value="03AFcWeA6wKj4heqIYuWkj1Rx8Ql65WEyqGD2_-YzicHzr_EbzsvHkzVkV1E-njInSDd23xiQmT0kL6xKJ7jBvW0JAtUuSn15BIz5Gi1MwGaIUddBvcWK900guBA6LpCTIN4Hqa4Q0c5-11zXTmAGhYhU8E2zzgyGFg-rLY8uhBD_e0jWb_VzeJ0lXAmkZtG2fK5pZ8ucUBmtDAqVjavEzt9-ysddR7aN2r5ct_cfughfLJPLf-q-y_SH_b4LOpEeFM1W6GORrpzve9sXDEpa4TvL1yQ7YIGD6fZmZuFEldYlYi6VsybvBX6PIBTIFORXO5ZMvN6UBmOop7H2DaZ_u0PWoxOO8Q2JX7fPNjRQTI9nhOJ_8a5yi_zRNxA_fDwfytKgL-rm8QSlbALq3CkC9XZMiQcEWRUr9ELEK7Zeq98nGetphxQ4vXiIywMDDBZJJnDV3GnfqWuWfRzFkLMMmNKpgi23kc29Hlf4DPQuY45uqgLOnC04MyoJimENNaVWjKCLijetLsZPf1dj514ywJ8-Ade9dayIDygxOiEQ1vf1evv0yUnWlIcLFGtp9cx5fbJ7lELY5_YmmjLdUQkmCDIyh_293thXyPlY3Iyzh51AQaptk5Pj6saoYLjhFFlAqemQZsJgVOPYKbXf9hCvQybSguhOrnp1RQu_4DaLD_Na064sZlZ72_cdyy1BI1AoXTX2Oe0Dt7WGZ4YGeYWhTNB5YxjKgw6CuTNNHWZnL5_GrFqGnpGVoVj-VZ2HUkLebnGcxtvAMfYIhSTQwf58vAl-oXSePa1KHVwPeYeXEMTCywtwwgk7-y4-DlWHFfOTAClOI1DpSsTICt6nDtK1D36N9LovjslR0AXtxkSEIayEMINTBr7-iIWHHIGqYu3CWfq5OW4fh409sH9vhbzReExlcZdAqBLiAhyI39SuNMGbwV174K474www"
//                                     />
//                                     <input
//                                         type="hidden"
//                                         name="_token"
//                                         value="CYZ9Jo7U52IMbyP8bkLk4JcbMzfVo2NZlEprgwVC"
//                                     />
//                                     <div className="row">
//                                         <div className="col-12 col-md-6 col-lg-6 col-sm-6">
//                                             <span
//                                                 id="error"
//                                                 style={{ color: "red" }}
//                                             ></span>
//                                             <div
//                                                 className="single-input"
//                                                 id="displaymobile"
//                                             >
//                                                 <label htmlFor="fname">
//                                                     Mobile Number
//                                                 </label>
//                                                 <input
//                                                     type="tel"
//                                                     id="applynowmobileassoc"
//                                                     name="applynowmobile"
//                                                     autoComplete="off"
//                                                     required
//                                                 />
//                                             </div>

//                                             {!isOtpSignIn && (
//                                                 <div
//                                                     className="single-input"
//                                                     id="passwordlogin"
//                                                 >
//                                                     <label htmlFor="fname">
//                                                         Password
//                                                     </label>
//                                                     <input
//                                                         type="password"
//                                                         name="passwordlogin"
//                                                         autoComplete="off"
//                                                         required
//                                                     />
//                                                 </div>
//                                             )}

//                                             {isOtpSignIn && (
//                                                 <div
//                                                     className="single-input"
//                                                     id="otpverify"
//                                                 >
//                                                     <label htmlFor="fname">
//                                                         Enter OTP to verify
//                                                     </label>
//                                                     <input
//                                                         type="password"
//                                                         id="otpverifyvalue"
//                                                         autoComplete="off"
//                                                     />
//                                                 </div>
//                                             )}

//                                             <span
//                                                 style={{
//                                                     color: "#2046ff",
//                                                     cursor: "pointer",
//                                                 }}
//                                                 id="signinspanpass"
//                                                 onClick={
//                                                     handleSignInMethodToggle
//                                                 }
//                                             >
//                                                 {isOtpSignIn
//                                                     ? "or sign in using password"
//                                                     : "or sign in using otp"}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="btn-area">
//                                         {!isOtpSignIn && (
//                                             <button
//                                                 className="cmn-btn"
//                                                 id="signinbutton"
//                                                 type="submit"
//                                             >
//                                                 Sign In
//                                             </button>
//                                         )}
//                                         {isOtpSignIn && (
//                                             <>
//                                                 <button
//                                                     className="cmn-btn"
//                                                     id="signinotp"
//                                                     type="button"
//                                                     onClick={sendOtpLogin}
//                                                 >
//                                                     Send OTP
//                                                 </button>
//                                                 <button
//                                                     className="cmn-btn"
//                                                     id="verifyotp"
//                                                     type="button"
//                                                     onClick={verifyOtpLogin}
//                                                 >
//                                                     Verify OTP
//                                                 </button>
//                                             </>
//                                         )}
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-lg-7 col-md-7 col-12">
//                             <img
//                                 src="https://swarnsathi.com/images/LOGIN2.jpg"
//                                 id="loaderlogin"
//                                 alt="Login visual"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SignInRegister;

const SignInRegister = () => {
    const [isOtpSignIn, setIsOtpSignIn] = useState(false);

    const handleSignInMethodToggle = () => {
        setIsOtpSignIn(!isOtpSignIn);
    };

    const sendOtpLogin = () => {
        // Implement send OTP logic
    };

    const verifyOtpLogin = () => {
        // Implement verify OTP logic
    };

    return (
        <section className="sign-in-up register pt-120">
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
                                            Please enter your registered mobile
                                            number
                                        </p>
                                    </div>
                                </div>

                                <form
                                    action="https://swarnsathi.com/assoicate/login"
                                    method="post"
                                >
                                    <input
                                        type="hidden"
                                        name="loginassoc"
                                        value="loginassociate"
                                    />
                                    <input
                                        type="hidden"
                                        name="g-recaptcha-response-assoc-login"
                                        value="03AFcWeA6wKj4heqIYuWkj1Rx8Ql65WEyqGD2_-YzicHzr_EbzsvHkzVkV1E-njInSDd23xiQmT0kL6xKJ7jBvW0JAtUuSn15BIz5Gi1MwGaIUddBvcWK900guBA6LpCTIN4Hqa4Q0c5-11zXTmAGhYhU8E2zzgyGFg-rLY8uhBD_e0jWb_VzeJ0lXAmkZtG2fK5pZ8ucUBmtDAqVjavEzt9-ysddR7aN2r5ct_cfughfLJPLf-q-y_SH_b4LOpEeFM1W6GORrpzve9sXDEpa4TvL1yQ7YIGD6fZmZuFEldYlYi6VsybvBX6PIBTIFORXO5ZMvN6UBmOop7H2DaZ_u0PWoxOO8Q2JX7fPNjRQTI9nhOJ_8a5yi_zRNxA_fDwfytKgL-rm8QSlbALq3CkC9XZMiQcEWRUr9ELEK7Zeq98nGetphxQ4vXiIywMDDBZJJnDV3GnfqWuWfRzFkLMMmNKpgi23kc29Hlf4DPQuY45uqgLOnC04MyoJimENNaVWjKCLijetLsZPf1dj514ywJ8-Ade9dayIDygxOiEQ1vf1evv0yUnWlIcLFGtp9cx5fbJ7lELY5_YmmjLdUQkmCDIyh_293thXyPlY3Iyzh51AQaptk5Pj6saoYLjhFFlAqemQZsJgVOPYKbXf9hCvQybSguhOrnp1RQu_4DaLD_Na064sZlZ72_cdyy1BI1AoXTX2Oe0Dt7WGZ4YGeYWhTNB5YxjKgw6CuTNNHWZnL5_GrFqGnpGVoVj-VZ2HUkLebnGcxtvAMfYIhSTQwf58vAl-oXSePa1KHVwPeYeXEMTCywtwwgk7-y4-DlWHFfOTAClOI1DpSsTICt6nDtK1D36N9LovjslR0AXtxkSEIayEMINTBr7-iIWHHIGqYu3CWfq5OW4fh409sH9vhbzReExlcZdAqBLiAhyI39SuNMGbwV174K474www"
                                    />
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value="CYZ9Jo7U52IMbyP8bkLk4JcbMzfVo2NZlEprgwVC"
                                    />

                                    <div className="row">
                                        <div className="col-12">
                                            <span
                                                id="error"
                                                className="text-danger small"
                                            ></span>
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
                                                    />
                                                </div>
                                            ) : (
                                                <div className="single-input mb-4">
                                                    <label
                                                        htmlFor="otpverifyvalue"
                                                        className="form-label"
                                                    >
                                                        Enter OTP to verify
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="otpverifyvalue"
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            )}

                                            <div className="mb-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-link p-0 text-decoration-none"
                                                    onClick={
                                                        handleSignInMethodToggle
                                                    }
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
                                                className="cmn-btn btn  py-2"
                                                type="submit"
                                                style={{
                                                    background: "#d18a2c",
                                                    color: "#fff",
                                                }}
                                            >
                                                Sign In
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    className="cmn-btn btn btn-primary py-2"
                                                    onClick={sendOtpLogin}
                                                >
                                                    Send OTP
                                                </button>
                                                <button
                                                    type="button"
                                                    className="cmn-btn btn py-2"
                                                    onClick={verifyOtpLogin}
                                                    style={{
                                                        background: "#fda033",
                                                        color:"#fff"
                                                    }}
                                                >
                                                    Verify OTP
                                                </button>
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
                                    src="https://swarnsathi.com/images/LOGIN2.jpg"
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