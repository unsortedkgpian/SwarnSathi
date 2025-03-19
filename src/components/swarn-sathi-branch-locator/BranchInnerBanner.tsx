'use client'
import Link from "next/link";

interface InnerBannerProps {
    title?: string;
    homeUrl?: string;
}

const BranchInnerBanner = ({
    title = "Branch Locator",
    homeUrl = "/",
}: InnerBannerProps) => {
    return (
        <section className="banner-section inner-banner branch">
            <div className="overlay">
                <div className="banner-content d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-7 col-md-10">
                                <div className="main-content">
                                    <h1>{title}</h1>
                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                <li className="breadcrumb-item">
                                                    <Link href={homeUrl}>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    {title}
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

export default BranchInnerBanner;
