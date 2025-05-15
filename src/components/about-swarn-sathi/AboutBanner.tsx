import Link from "next/link";

const AboutBanner = () => {
    return (
        <section className="banner-section inner-banner about">
            <div className="overlay about">
                <div className="banner-content d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-start down-the-banner">
                            <div className="col-lg-7 col-md-10">
                                <div className="main-content">
                                    <h1 style={{ fontWeight: "600" }}>About</h1>
                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                <li className="breadcrumb-item">
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    About us
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
