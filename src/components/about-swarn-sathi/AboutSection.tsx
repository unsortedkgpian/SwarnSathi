const AboutSection = () => {
    return (
        <section className="about-section" id="our-company">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-area">
                                <h5 className="sub-title">About us</h5>
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    We are here to help you achieve financial
                                    freedom!
                                </h2>
                                <p>
                                    We have a vision to extend credit support to
                                    the underbanked in Tier 3, 4 cities and
                                    rural parts of Eastern India by providing
                                    instant funds to the people who don&apos;t
                                    have any formal access to credit support.
                                    Consider us for any kind of financial needs
                                    that you might be in. We are here to be your
                                    partner in your celebration, your struggle.
                                </p>
                            </div>
                            <div className="row cus-mar">
                                <div className="col-xl-4 col-md-4">
                                    <div className="count-content text-center">
                                        <div className="count-number">
                                            <h4 className="counter">2</h4>
                                        </div>
                                        <p>Locations covered</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="count-content text-center">
                                        <div className="count-number ">
                                            <h4 className="counter">175</h4>
                                        </div>
                                        <p>Pincode covered</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="count-content text-center">
                                        <div className="count-number ">
                                            <h4 className="counter">2</h4>
                                        </div>
                                        <p>Partner shops</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="img-area">
                                <img
                                    className="img-1"
                                    src="/images/building-for-web.png"
                                    alt="Company building"
                                />
                                <img
                                    className="img-2"
                                    src="/images/branchall.png"
                                    alt="Branch locations"
                                />
                                <img
                                    className="img-3"
                                    src="/images/branchall1.png"
                                    alt="Branch network"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
