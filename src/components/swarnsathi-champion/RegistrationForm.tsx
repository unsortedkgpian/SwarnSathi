'use client'
// import { useState } from "react";

// const RegistrationForm = () => {
//     const [activeTab, setActiveTab] = useState<"home" | "profile" | "contact">(
//         "profile"
//     );

//     return (
//         <section className="sign-in-up register">
//             <div className="overlay pt-120 pb-120">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-6 col-12">
//                             <div className="form-content">
//                                 <div className="section-header">
//                                     <h5 className="sub-title">
//                                         The power of financial freedom
//                                     </h5>
//                                     <h2 className="title">
//                                         Let’s get started!
//                                     </h2>
//                                     <p>
//                                         Please fill out the form to start your
//                                         online application
//                                     </p>
//                                 </div>
//                                 <div
//                                     id="form-message-warning"
//                                     className="mb-4"
//                                 ></div>
//                                 <div
//                                     id="form-message-success"
//                                     className="mb-4"
//                                 ></div>

//                                 <ul
//                                     className="nav nav-tabs"
//                                     id="myTab"
//                                     role="tablist"
//                                     style={{ border: "none" }}
//                                 >
//                                     {["home", "profile", "contact"].map(
//                                         (tab) => (
//                                             <li
//                                                 key={tab}
//                                                 className="nav-item"
//                                                 role="presentation"
//                                             >
//                                                 <button
//                                                     className={`nav-link navtab ${
//                                                         activeTab === tab
//                                                             ? "active"
//                                                             : ""
//                                                     }`}
//                                                     id={`${tab}-tab`}
//                                                     onClick={() =>
//                                                         setActiveTab(
//                                                             tab as typeof activeTab
//                                                         )
//                                                     }
//                                                     style={{
//                                                         border: "1px solid #fb9e47",
//                                                     }}
//                                                 >
//                                                     {tab === "home" &&
//                                                         "Swarnsathi champion"}
//                                                     {tab === "profile" &&
//                                                         "Business associate"}
//                                                     {tab === "contact" &&
//                                                         "Lending partner"}
//                                                 </button>
//                                             </li>
//                                         )
//                                     )}
//                                 </ul>

//                                 <div className="tab-content" id="myTabContent">
//                                     {/* Champion Form */}
//                                     <div
//                                         className={`tab-pane fade ${
//                                             activeTab === "home"
//                                                 ? "show active"
//                                                 : ""
//                                         } tab-all`}
//                                         role="tabpanel"
//                                     >
//                                         <form
//                                             action="https://swarnsathi.com/register/associate"
//                                             method="post"
//                                             name="form"
//                                         >
//                                             <input
//                                                 type="hidden"
//                                                 name="keyform"
//                                                 value="champion"
//                                             />
//                                             <input
//                                                 type="hidden"
//                                                 name="g-recaptcha-response"
//                                                 id="g-recaptcha-response"
//                                                 value="03AFcWeA5FK..."
//                                             />
//                                             <input
//                                                 type="hidden"
//                                                 name="_token"
//                                                 value="CYZ9Jo7U52IMbyP8bkLk4JcbMzfVo2NZlEprgwVC"
//                                             />
//                                             <input
//                                                 type="hidden"
//                                                 name="type"
//                                                 value="swarnsathi champion"
//                                             />

//                                             <div className="row">
//                                                 <div className="col-12">
//                                                     <div className="single-input">
//                                                         <label htmlFor="name">
//                                                             Name
//                                                         </label>
//                                                         <input
//                                                             name="name"
//                                                             type="text"
//                                                             id="name"
//                                                             placeholder="Please enter your name"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-9">
//                                                     <div className="single-input">
//                                                         <label htmlFor="phone">
//                                                             Phone
//                                                             <span className="requiredfill">
//                                                                 *
//                                                             </span>
//                                                         </label>
//                                                         <input
//                                                             name="phone"
//                                                             type="text"
//                                                             id="phone"
//                                                             placeholder="Please enter your 10 digit mobile number"
//                                                             required
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-3">
//                                                     <div className="single-input">
//                                                         <button
//                                                             className="btn btn-primary"
//                                                             type="button"
//                                                             style={{
//                                                                 width: "100%",
//                                                                 padding: "12px",
//                                                                 background:
//                                                                     "#fb9e47",
//                                                                 border: "none",
//                                                             }}
//                                                         >
//                                                             Verify
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <div className="single-input">
//                                                         <label htmlFor="pincode">
//                                                             Pincode
//                                                             <span className="requiredfill">
//                                                                 *
//                                                             </span>
//                                                         </label>
//                                                         <input
//                                                             name="pincode"
//                                                             type="text"
//                                                             id="pincode"
//                                                             placeholder="Please enter your 6 digit pincode"
//                                                             required
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <div className="single-input">
//                                                         <p>
//                                                             By clicking submit,
//                                                             you agree to{" "}
//                                                             <span>
//                                                                 Swarn Sathi
//                                                                 terms of use,
//                                                                 privacy policy,
//                                                                 e-sign
//                                                             </span>{" "}
//                                                             &amp;{" "}
//                                                             <span>
//                                                                 communication
//                                                                 authorization.
//                                                             </span>
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="btn-area">
//                                                     <button className="cmn-btn registersubmit">
//                                                         Submit now
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>

//                                     {/* Business Associate Form */}
//                                     <div
//                                         className={`tab-pane fade ${
//                                             activeTab === "profile"
//                                                 ? "show active"
//                                                 : ""
//                                         } tab-all`}
//                                         role="tabpanel"
//                                     >
//                                         <form
//                                             action="https://swarnsathi.com/register/associate"
//                                             method="post"
//                                             name="form1"
//                                         >
//                                             {/* Similar structure with different hidden inputs */}
//                                             {/* ... */}
//                                         </form>
//                                     </div>

//                                     {/* Lending Partner Form */}
//                                     <div
//                                         className={`tab-pane fade ${
//                                             activeTab === "contact"
//                                                 ? "show active"
//                                                 : ""
//                                         } tab-all`}
//                                         role="tabpanel"
//                                     >
//                                         <form
//                                             action="https://swarnsathi.com/register/associate"
//                                             method="post"
//                                             name="form2"
//                                         >
//                                             {/* Similar structure with email field */}
//                                             {/* ... */}
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-6 col-12">
//                             <img
//                                 src="https://swarnsathi.com/images/sign-in-up-bg.png"
//                                 alt="Registration Visual"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default RegistrationForm;

import React, { useState } from "react";
import signInUpBg from "/public/images/sign-in-up-bg.png";

const RegistrationForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"home" | "profile" | "contact">(
        "profile"
    );

    return (
        <section className="sign-in-up register">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="form-content">
                                <div className="section-header">
                                    <h5 className="sub-title">
                                        The power of financial freedom
                                    </h5>
                                    <h2 className="title">
                                        Let’s get started!
                                    </h2>
                                    <p>
                                        Please fill out the form to start your
                                        online application
                                    </p>
                                </div>

                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                    style={{ border: "none" }}
                                >
                                    {[
                                        {
                                            id: "home",
                                            label: "Swarnsathi champion",
                                        },
                                        {
                                            id: "profile",
                                            label: "Business associate",
                                        },
                                        {
                                            id: "contact",
                                            label: "Lending partner",
                                        },
                                    ].map((tab) => (
                                        <li
                                            key={tab.id}
                                            className="nav-item"
                                            role="presentation"
                                        >
                                            <button
                                                className={`nav-link navtab ${
                                                    activeTab === tab.id
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setActiveTab(
                                                        tab.id as typeof activeTab
                                                    )
                                                }
                                                style={{
                                                    border: "1px solid #fb9e47",
                                                }}
                                            >
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="tab-content p-3">
                                    <form
                                        action="https://swarnsathi.com/register/associate"
                                        method="post"
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            value="njPMqyp8D5PJKcdwV6CN4wViYvAYy7XevoCyFcBY"
                                        />

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-input">
                                                    <label htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        id="name"
                                                        placeholder="Please enter your name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-9">
                                                <div className="single-input">
                                                    <label htmlFor="phone">
                                                        Phone
                                                        <span className="requiredfill">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        id="phone"
                                                        placeholder="Please enter your 10 digit mobile number"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <div className="single-input">
                                                    <label>&nbsp;</label>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        style={{
                                                            width: "100%",
                                                            padding: "12px",
                                                            background:
                                                                "#fb9e47",
                                                            border: "none",
                                                        }}
                                                    >
                                                        Verify
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Dynamic Field Section */}
                                            {activeTab === "home" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="pincode">
                                                            Enter your pincode
                                                            <span className="requiredfill">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            name="pincode"
                                                            type="text"
                                                            id="pincode"
                                                            placeholder="Please enter your 6 digit pincode"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === "profile" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="additionalPhone">
                                                            Enter your pincode
                                                            <span className="requiredfill">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            name="pincode"
                                                            type="text"
                                                            id="pincode"
                                                            placeholder="Please enter your 6 digit pincode"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === "contact" && (
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="email">
                                                            Enter your email id
                                                        </label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            id="email"
                                                            placeholder="Your email ID here"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="col-12">
                                                <div className="single-input">
                                                    <p>
                                                        By clicking submit, you
                                                        agree to{" "}
                                                        <span>
                                                            Swarn Sathi terms of
                                                            use, privacy policy,
                                                            e-sign
                                                        </span>{" "}
                                                        &
                                                        <span>
                                                            communication
                                                            authorization.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="btn-area">
                                                <button className="cmn-btn registersubmit">
                                                    Submit now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <img
                                src="https://swarnsathi.com/images/sign-in-up-bg.png"
                                alt="Registration visual"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
