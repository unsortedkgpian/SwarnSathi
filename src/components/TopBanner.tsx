import { useState } from "react";
import "./TopBanner.css"; // Assume you have corresponding CSS

const TopBanner = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validMessage, setValidMessage] = useState("");

    const validatePhoneNumber = () => {
        const regex = /^[789]\d{9}$/;
        if (regex.test(phoneNumber)) {
            setValidMessage("✓ Valid number");
            // Add your submit logic here
        } else {
            setValidMessage(
                "Please enter a valid 10-digit phone number starting with 7, 8, or 9"
            );
        }
    };

    return (
        // <section className="banner-section topbanner" id="applysection">
        //     <div className="overlay">
        //         <div className="banner-content d-flex align-items-center">
        //             <div className="container">
        //                 <div className="row justify-content-start">
        //                     <div className="col-lg-7 col-md-10">
        //                         <div className="main-content">
        //                             <div className="top-area section-text justify-content-center">
        //                                 <h4 className="sub-title">
        //                                     Simple. Transparent. Secure
        //                                 </h4>
        //                                 <h1
        //                                     className="title"
        //                                     style={{
        //                                         color: "rgb(253, 160, 51)",
        //                                     }}
        //                                 >
        //                                     Super fast gold loan
        //                                 </h1>
        //                                 <p className="xlr">
        //                                     Customised product designed for all
        //                                     your financial needs
        //                                 </p>
        //                             </div>
        //                             <div className="align-items-center">
        //                                 <div className="row">
        //                                     <div className="col-md-8 col-sm-12 col-12">
        //                                         <div
        //                                             className="d-flex align-items-center mb-3"
        //                                             style={{
        //                                                 borderRadius: "30px",
        //                                                 border: "1px solid gold",
        //                                                 paddingRight: "3px",
        //                                                 background: "#8ed7fd91",
        //                                                 boxShadow:
        //                                                     "6px 7px 20px 0px #fc9f3e61",
        //                                             }}
        //                                         >
        //                                             <p className="phone-text">
        //                                                 +91
        //                                             </p>
        //                                             <input
        //                                                 type="text"
        //                                                 className="apply-now"
        //                                                 id="applynow"
        //                                                 autoComplete="off"
        //                                                 placeholder="Enter your phone number"
        //                                                 pattern="[789][0-9]{9}"
        //                                                 value={phoneNumber}
        //                                                 onChange={(e) =>
        //                                                     setPhoneNumber(
        //                                                         e.target.value
        //                                                     )
        //                                                 }
        //                                                 style={{ flex: 1 }}
        //                                             />
        //                                             <button
        //                                                 id="applybutton"
        //                                                 className="applybutton cmn-btn inputapply"
        //                                                 style={{
        //                                                     marginRight: 0,
        //                                                 }}
        //                                                 onClick={
        //                                                     validatePhoneNumber
        //                                                 }
        //                                             >
        //                                                 Apply now
        //                                             </button>
        //                                             <span
        //                                                 id="validno"
        //                                                 className="vaildno"
        //                                             >
        //                                                 {validMessage}
        //                                             </span>
        //                                         </div>
        //                                         <span className="callus">
        //                                             Call us at{" "}
        //                                             <a href="tel:033-4804-0009">
        //                                                 033-4804-0009
        //                                             </a>{" "}
        //                                             or WhatsApp at{" "}
        //                                             <a
        //                                                 target="_blank"
        //                                                 href="https://wa.me/7044494994"
        //                                                 rel="noreferrer"
        //                                             >
        //                                                 +91-7044494994
        //                                             </a>
        //                                         </span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        // <section className="banner-section topbanner" id="applysection">
        //     <div className="overlay">
        //         <div className="content-wrapper">
        //             <div className="top-area section-text">
        //                 <h4 className="sub-title">
        //                     Simple. Transparent. Secure
        //                 </h4>
        //                 <h1
        //                     className="title"
        //                     style={{ color: "rgb(253, 160, 51)" }}
        //                 >
        //                     Super fast gold loan
        //                 </h1>
        //                 <p className="xlr">
        //                     Customised product designed for all your financial
        //                     needs
        //                 </p>
        //             </div>
        //             <div className="input-container">
        //                 <p className="phone-text">+91</p>
        //                 <input
        //                     type="text"
        //                     className="apply-now"
        //                     id="applynow"
        //                     autoComplete="off"
        //                     placeholder="Enter your phone number"
        //                     value={phoneNumber}
        //                     onChange={(e) => setPhoneNumber(e.target.value)}
        //                 />
        //                 <button
        //                     id="applybutton"
        //                     className="applybutton cmn-btn inputapply"
        //                     onClick={validatePhoneNumber}
        //                 >
        //                     Apply now
        //                 </button>
        //             </div>
        //             <span id="validno" className="vaildno">
        //                 {validMessage}
        //             </span>
        //             <span className="callus">
        //                 Call us at <a href="tel:033-4804-0009">033-4804-0009</a>{" "}
        //                 or WhatsApp at
        //                 <a
        //                     target="_blank"
        //                     href="https://wa.me/7044494994"
        //                     rel="noreferrer"
        //                 >
        //                     +91-7044494994
        //                 </a>
        //             </span>
        //         </div>
        //     </div>
        // </section>

        <section className="banner-section topbanner" id="applysection">
            <div className="overlay">
                <div className="content-wrapper">
                    <div className="top-area section-text">
                        <h4 className="sub-title">
                            Simple. Transparent. Secure
                        </h4>
                        <h1
                            className="title"
                            style={{ color: "rgb(253, 160, 51)" }}
                        >
                            Super fast gold loan
                        </h1>
                        <p className="xlr">
                            Customised product designed for all your financial
                            needs
                        </p>
                    </div>
                    <div className="input-container">
                        <p className="phone-text">+91</p>
                        <input
                            type="text"
                            className="apply-now"
                            id="applynow"
                            autoComplete="off"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button
                            id="applybutton"
                            className="applybutton cmn-btn inputapply"
                            onClick={validatePhoneNumber}
                        >
                            Apply now
                        </button>
                    </div>
                    <span id="validno" className="vaildno">
                        {validMessage}
                    </span>
                    <span className="callus">
                        Call us at <a href="tel:033-4804-0009">033-4804-0009</a>{" "}
                        or WhatsApp at
                        <a
                            target="_blank"
                            href="https://wa.me/7044494994"
                            rel="noreferrer"
                        >
                            +91-7044494994
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;
