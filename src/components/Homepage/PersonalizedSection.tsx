// const PersonalizedSection = () => {
//     return (
//         <section className="personalized">
//             <div className="overlay">
//                 <div
//                     className="container wow fadeInUp"
//                     style={{ visibility: "visible", animationName: "fadeInUp" }}
//                 >
//                     <div className="row d-flex justify-content-between">
//                         <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
//                             <div className="img-area">
//                                 <img
//                                     src="https://swarnsathi.com/images/BRANCH-LOCATOR.png"
//                                     alt="branch locator"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-xl-5 pt-120 pb-120">
//                             <div className="section-text">
//                                 <h3 className="title">
//                                     Visit our nearest branch
//                                 </h3>
//                                 <p>
//                                     Get in touch with us and let us help you
//                                     realise your dream
//                                 </p>
//                             </div>
//                             <a
//                                 href="https://swarnsathi.com/swarn-sathi-branch-locator"
//                                 className="cmn-btn"
//                             >
//                                 Locate us
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PersonalizedSection;

// import './PersonalizedSection.css'

const PersonalizedSection = () => {
    return (
        <section className="personalized">
            <div className="overlay">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row align-items-center">
                        {" "}
                        {/* Added vertical alignment */}
                        {/* Image Column */}
                        <div className="col-md-6 d-flex justify-content-center flex-grow-1">
                            <div
                                className="img-area"
                                style={{ maxWidth: "500px" }}
                            >
                                <img
                                    src="https://swarnsathi.com/images/BRANCH-LOCATOR.png"
                                    alt="branch locator"
                                    className="img-fluid w-100 h-auto"
                                />
                            </div>
                        </div>
                        {/* Text Column */}
                        <div className="col-md-6 py-5">
                            <div className="section-text text-center text-md-start">
                                <h3 className="title mb-4">
                                    Visit our nearest branch
                                </h3>
                                <p className="mb-4">
                                    Get in touch with us and let us help you
                                    realise your dream
                                </p>
                                <a
                                    href="https://swarnsathi.com/swarn-sathi-branch-locator"
                                    className="cmn-btn btn-primary"
                                >
                                    Locate us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalizedSection;
