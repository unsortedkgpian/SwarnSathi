import Image from "next/image";

const CoreValues = () => {
    return (
        <section className="our-core-values" id="our-core-values">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-header text-center">
                                <h5 className="sub-title">Our core values</h5>
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Our core values are what makes us the best
                                    in what we do!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        {/* Value 1 */}
                        <div className="col-xl-4 col-md-4">
                            <div className="single-box">
                                <div className="icon">
                                    <Image
                                        src="/images/icon/core-values-1.png"
                                        alt="People first icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="text-area">
                                    <h5>People first</h5>
                                    <p>
                                        We empathise with the large group of
                                        people who, instead of having sheer
                                        potential, lag behind just because they
                                        don&apos;t have access to funds. We want
                                        to empower them!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Value 2 */}
                        <div className="col-xl-4 col-md-4">
                            <div className="single-box">
                                <div className="icon">
                                    <Image
                                        src="/images/icon/core-values-2.png"
                                        alt="Passion & Commitment icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="text-area">
                                    <h5>Passion & Commitment</h5>
                                    <p>
                                        We hire passionate people who drive our
                                        vision and work hard everyday to make it
                                        a reality. We are fully committed to
                                        provide super easy access of fund to the
                                        underbanked
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Value 3 */}
                        <div className="col-xl-4 col-md-4">
                            <div className="single-box">
                                <div className="icon">
                                    <Image
                                        src="/images/icon/core-values-3.png"
                                        alt="Integrity icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="text-area">
                                    <h5>Integrity</h5>
                                    <p>
                                        Everything we do comes from a deep sense
                                        of purpose. We hold ourselves to high
                                        moral standards and strong ethical
                                        practices to ensure that everyone of us
                                        is accountable!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
