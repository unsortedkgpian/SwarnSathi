// // import React from "react";

// // interface FeatureItemProps {
// //     title: string;
// //     description: string;
// //     imageSrc: string;
// //     imageAlt: string;
// //     points: string[];
// //     isImageLeft: boolean;
// //     onApplyNow: () => void;
// // }

// // const FeatureItem: React.FC<FeatureItemProps> = ({
// //     title,
// //     description,
// //     imageSrc,
// //     imageAlt,
// //     points,
// //     isImageLeft,
// //     onApplyNow,
// // }) => {
// //     const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
// //         e.preventDefault();
// //         onApplyNow();
// //     };

// //     return (
// //         <div className="row">
// //             {isImageLeft ? (
// //                 <>
// //                     <div className="col-lg-6 text-start">
// //                         <div className="img-area">
// //                             <img src={imageSrc} alt={imageAlt} />
// //                         </div>
// //                     </div>
// //                     <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center">
// //                         <div className="top-section">
// //                             <h2 className="title">{title}</h2>
// //                             <p>{description}</p>
// //                             <ul className="list">
// //                                 {points.map((point, index) => (
// //                                     <li
// //                                         key={index}
// //                                         className="list-item d-flex align-items-center"
// //                                     >
// //                                         <span className="check d-flex align-items-center justify-content-center">
// //                                             <img
// //                                                 src="https://swarnsathi.com/images/icon/check.png"
// //                                                 alt="icon"
// //                                             />
// //                                         </span>
// //                                         <span>{point}</span>
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                             <a
// //                                 href="#"
// //                                 className="applybutton cmn-btn inputapply mt-4"
// //                                 onClick={handleApplyClick}
// //                             >
// //                                 Apply now
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </>
// //             ) : (
// //                 <>
// //                     <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center cus-ord">
// //                         <div className="top-section">
// //                             <h2 className="title">{title}</h2>
// //                             <p>{description}</p>
// //                             <ul className="list">
// //                                 {points.map((point, index) => (
// //                                     <li
// //                                         key={index}
// //                                         className="list-item d-flex align-items-center"
// //                                     >
// //                                         <span className="check d-flex align-items-center justify-content-center">
// //                                             <img
// //                                                 src="https://swarnsathi.com/images/icon/check.png"
// //                                                 alt="icon"
// //                                             />
// //                                         </span>
// //                                         <span>{point}</span>
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                             <a
// //                                 href="#"
// //                                 className="applybutton cmn-btn inputapply mt-4"
// //                                 onClick={handleApplyClick}
// //                             >
// //                                 Apply now
// //                             </a>
// //                         </div>
// //                     </div>
// //                     <div className="col-lg-6 text-end">
// //                         <div className="img-area">
// //                             <img src={imageSrc} alt={imageAlt} />
// //                         </div>
// //                     </div>
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // const FeaturesSection: React.FC = () => {
// //     const handleApplyNow = () => {
// //         // Handle apply now logic here
// //         console.log("Apply now clicked");
// //     };

// //     const features = [
// //         {
// //             title: "Instant loan approval",
// //             description:
// //                 "The loan amount is instantly provided to you once the process is completed",
// //             imageSrc: "https://swarnsathi.com/images/Instant-loan-approval.png",
// //             imageAlt: "image",
// //             points: ["No hidden charges whatsoever", "Minimum documentation"],
// //             isImageLeft: false,
// //         },
// //         {
// //             title: "IOT enabled bank grade security",
// //             description:
// //                 "All your assets are safe with us. Your peace of mind is our utmost priority. You can go to bed without worrying about losing your assets",
// //             imageSrc:
// //                 "https://swarnsathi.com/images/Security-with-no-compromises.png",
// //             imageAlt: "image",
// //             points: [
// //                 "Your gold jewelleries are kept in IOT powered Swarn Sathi vaults or partner Bank vaults",
// //                 "Take back your gold in their exact conditions",
// //             ],
// //             isImageLeft: true,
// //         },
// //         {
// //             title: "Free insurance on the asset",
// //             description:
// //                 "Your jewellery is insured fully. Our priority is your peace of mind",
// //             imageSrc:
// //                 "https://swarnsathi.com/images/Free-Insurance-on-the-asset.png",
// //             imageAlt: "image",
// //             points: [
// //                 "Your gold jewelries are fully insured",
// //                 "Free transit insurance",
// //             ],
// //             isImageLeft: false,
// //         },
// //         {
// //             title: "Hassle free repayment",
// //             description:
// //                 "Why do you have to visit our branches everytime you plan to repay the amount? We don’t want that. So we have made repayment easy for you. Pay now at the comfort of your home",
// //             imageSrc: "https://swarnsathi.com/images/hassle-free-payments.png",
// //             imageAlt: "image",
// //             points: [
// //                 "Repay with any UPI application",
// //                 "Wallets and Netbanking also accepted",
// //             ],
// //             isImageLeft: true,
// //         },
// //     ];

// //     return (
// //         <section className="features-section">
// //             <div className="overlay pt-120">
// //                 <div
// //                     className="container wow fadeInUp"
// //                     style={{ visibility: "visible", animationName: "fadeInUp" }}
// //                 >
// //                     <div className="row d-flex justify-content-center">
// //                         <div className="col-lg-6">
// //                             <div className="section-header text-center">
// //                                 <h2 className="title">
// //                                     Why choose Swarn Sathi gold loan
// //                                 </h2>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     {features.map((feature, index) => (
// //                         <FeatureItem
// //                             key={index}
// //                             {...feature}
// //                             onApplyNow={handleApplyNow}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default FeaturesSection;


// import React from "react";

// const FeaturesSection: React.FC = () => {
//     const applyNow = () => {
//         // Implement the applyNow function logic here
//         console.log("Apply now clicked");
//     };

//     return (
//         <section className="features-section">
//             <div className="overlay pt-120">
//                 <div
//                     className="container wow fadeInUp"
//                     style={{ visibility: "visible", animationName: "fadeInUp" }}
//                 >
//                     <div className="row d-flex justify-content-center">
//                         <div className="col-lg-6">
//                             <div className="section-header text-center">
//                                 <h2 className="title">
//                                     Why choose Swarn Sathi gold loan
//                                 </h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center cus-ord">
//                             <div className="top-section">
//                                 <h2 className="title">Instant loan approval</h2>
//                                 <p>
//                                     The loan amount is instantly provided to you
//                                     once the process is completed
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             No hidden charges whatsoever
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>Minimum documentation</span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 text-end">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Instant-loan-approval.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6 text-start">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Security-with-no-compromises.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">
//                                     IOT enabled bank grade security
//                                 </h2>
//                                 <p>
//                                     All your assets are safe with us. Your peace
//                                     of mind is our utmost priority. You can go
//                                     to bed without worrying about losing your
//                                     assets
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Your gold jewelleries are kept in
//                                             IOT powered Swarn Sathi vaults or
//                                             partner Bank vaults
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Take back your gold in their exact
//                                             conditions
//                                         </span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center cus-ord">
//                             <div className="top-section">
//                                 <h2 className="title">
//                                     Free insurance on the asset
//                                 </h2>
//                                 <p>
//                                     Your jewellery is insured fully. Our
//                                     priority is your peace of mind
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Your gold jewelries are fully
//                                             insured
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>Free transit insurance</span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 text-end">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Free-Insurance-on-the-asset.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6 text-start">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/hassle-free-payments.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 align-items-center d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">Hassle free repayment</h2>
//                                 <p>
//                                     Why do you have to visit our branches
//                                     everytime you plan to repay the amount? We
//                                     don’t want that. So we have made repayment
//                                     easy for you. Pay now at the comfort of your
//                                     home
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Repay with any UPI application
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Wallets and Netbanking also accepted
//                                         </span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturesSection;


// import React from "react";

// const FeaturesSection: React.FC = () => {
//     const applyNow = () => {
//         // Implement the applyNow function logic here
//         console.log("Apply now clicked");
//     };

//     return (
//         <section className="features-section">
//             <div className="overlay pt-120">
//                 <div
//                     className="container wow fadeInUp"
//                     style={{ visibility: "visible", animationName: "fadeInUp" }}
//                 >
//                     <div className="row d-flex justify-content-center">
//                         <div className="col-lg-6">
//                             <div className="section-header text-center">
//                                 <h2 className="title">
//                                     Why choose Swarn Sathi gold loan
//                                 </h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">Instant loan approval</h2>
//                                 <p>
//                                     The loan amount is instantly provided to you
//                                     once the process is completed
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             No hidden charges whatsoever
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>Minimum documentation</span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 text-end">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Instant-loan-approval.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 text-start">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Security-with-no-compromises.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">
//                                     IOT enabled bank grade security
//                                 </h2>
//                                 <p>
//                                     All your assets are safe with us. Your peace
//                                     of mind is our utmost priority. You can go
//                                     to bed without worrying about losing your
//                                     assets
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Your gold jewelleries are kept in
//                                             IOT powered Swarn Sathi vaults or
//                                             partner Bank vaults
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Take back your gold in their exact
//                                             conditions
//                                         </span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">
//                                     Free insurance on the asset
//                                 </h2>
//                                 <p>
//                                     Your jewellery is insured fully. Our
//                                     priority is your peace of mind
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Your gold jewelries are fully
//                                             insured
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>Free transit insurance</span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 text-end">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/Free-Insurance-on-the-asset.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 text-start">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/hassle-free-payments.png"
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 d-flex flex-column justify-content-center">
//                             <div className="top-section">
//                                 <h2 className="title">Hassle free repayment</h2>
//                                 <p>
//                                     Why do you have to visit our branches
//                                     everytime you plan to repay the amount? We
//                                     don’t want that. So we have made repayment
//                                     easy for you. Pay now at the comfort of your
//                                     home
//                                 </p>
//                                 <ul className="list">
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Repay with any UPI application
//                                         </span>
//                                     </li>
//                                     <li className="list-item d-flex align-items-center">
//                                         <span className="check d-flex align-items-center justify-content-center">
//                                             <img
//                                                 src="https://swarnsathi.com/images/icon/check.png"
//                                                 alt="icon"
//                                             />
//                                         </span>
//                                         <span>
//                                             Wallets and Netbanking also accepted
//                                         </span>
//                                     </li>
//                                 </ul>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="applybutton cmn-btn inputapply mt-4"
//                                     onClick={applyNow}
//                                 >
//                                     Apply now
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturesSection;



import React from "react";

const FeaturesSection: React.FC = () => {
    const applyNow = () => {
        // Implement the applyNow function logic here
        console.log("Apply now clicked");
    };

    const checkIcon = (
        <span className="check d-flex align-items-center justify-content-center">
            <img
                src="https://swarnsathi.com/images/icon/check.png"
                alt="icon"
            />
        </span>
    );

    return (
        <section className="features-section">
            <div className="overlay pt-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2 className="title">
                                    Why choose Swarn Sathi gold loan
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2 className="title">Instant loan approval</h2>
                                <p>
                                    The loan amount is instantly provided to you
                                    once the process is completed
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            No hidden charges whatsoever
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>Minimum documentation</span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={applyNow}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/Instant-loan-approval.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/Security-with-no-compromises.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2 className="title">
                                    IOT enabled bank grade security
                                </h2>
                                <p>
                                    All your assets are safe with us. Your peace
                                    of mind is our utmost priority. You can go
                                    to bed without worrying about losing your
                                    assets
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Your gold jewelleries are kept in
                                            IOT powered Swarn Sathi vaults or
                                            partner Bank vaults
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Take back your gold in their exact
                                            conditions
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={applyNow}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2 className="title">
                                    Free insurance on the asset
                                </h2>
                                <p>
                                    Your jewellery is insured fully. Our
                                    priority is your peace of mind
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Your gold jewelries are fully
                                            insured
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>Free transit insurance</span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={applyNow}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/Free-Insurance-on-the-asset.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="img-area">
                                <img
                                    src="https://swarnsathi.com/images/hassle-free-payments.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="top-section">
                                <h2 className="title">Hassle free repayment</h2>
                                <p>
                                    Why do you have to visit our branches
                                    everytime you plan to repay the amount? We
                                    don’t want that. So we have made repayment
                                    easy for you. Pay now at the comfort of your
                                    home
                                </p>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Repay with any UPI application
                                        </span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        {checkIcon}
                                        <span>
                                            Wallets and Netbanking also accepted
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void(0)"
                                    className="applybutton cmn-btn inputapply mt-4"
                                    onClick={applyNow}
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
