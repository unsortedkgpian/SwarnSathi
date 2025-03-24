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
                                    src="/images/BRANCH-LOCATOR.png"
                                    alt="branch locator"
                                    className="img-fluid w-100 h-auto"
                                />
                            </div>
                        </div>
                        {/* Text Column */}
                        <div className="col-md-6 py-5">
                            <div className="section-text text-center text-md-start">
                                <h3 className="title mb-4" style={{textTransform:"capitalize"}}>
                                    Visit our nearest branch
                                </h3>
                                <p className="mb-4">
                                    Get in touch with us and let us help you
                                    realise your dream
                                </p>
                                <a
                                    href="/swarn-sathi-branch-locator"
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
