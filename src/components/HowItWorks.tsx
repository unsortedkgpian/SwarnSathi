const HowItWorks = () => {
    // Define the steps data
    interface Step {
        howWorksIcon: string;
        icon: string;
        title: string;
        description: string;
    }

    const steps: Step[] = [
        {
            howWorksIcon: "https://swarnsathi.com/images/howitworks1.svg",
            icon: "https://swarnsathi.com/images/icon/get-loan-1.png",
            title: "Visit us",
            description: "Identify our nearest partner and pay a visit there",
        },
        {
            howWorksIcon: "https://swarnsathi.com/images/howitworks2.svg",
            icon: "https://swarnsathi.com/images/icon/get-loan-2.png",
            title: "Gold valuation",
            description: "Get you jewellery valued by an expert",
        },
        {
            howWorksIcon: "https://swarnsathi.com/images/howitworks3.svg",
            icon: "https://swarnsathi.com/images/icon/get-loan-3.png",
            title: "Paper work",
            description: "Provide KYC and fill up the paper works",
        },
        {
            howWorksIcon: "https://swarnsathi.com/images/howitworks4.svg",
            icon: "https://swarnsathi.com/images/icon/how-works-4.png",
            title: "Amount disbursal",
            description: "Get the fund either directly in account or in cash",
        },
    ];

    return (
        <section className="account-feature get-loan home-loan howitworkshome">
            <div className="overlay pt-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-header topheader text-center">
                                <h5 className="sub-title">
                                    A better way to get loan
                                </h5>
                                <h2 className="title">How it works</h2>
                                <p>
                                    It's easier than you think. Follow the
                                    following simple easy steps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        {steps.map((step, index) => (
                            <div key={index} className="col-lg-3 col-12">
                                <div className="single-box howworkshome">
                                    <div className="icon-box iconhowboxhome">
                                        <img
                                            src={step.howWorksIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    <div className="icon-box">
                                        <img src={step.icon} alt="icon" />
                                    </div>
                                    <h5>{step.title}</h5>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
