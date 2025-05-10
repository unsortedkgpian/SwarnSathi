// import Link from "next/link";

// interface InnerBannerProps {
//     pageTitle: string;
//     variant?: string;
// }

// const InnerBanner = ({ pageTitle, variant = "contact" }: InnerBannerProps) => {
//     return (
//         <section className={`banner-section inner-banner ${variant}`}>
//             <div className="overlay">
//                 <div className="banner-content d-flex align-items-center">
//                     <div className="container">
//                         <div className="row justify-content-start">
//                             <div className="col-lg-7 col-md-10">
//                                 <div className="main-content">
//                                     <h1 style={{fontWeight:"600"}}>{pageTitle}</h1>
//                                     <div className="breadcrumb-area">
//                                         <nav aria-label="breadcrumb">
//                                             <ol className="breadcrumb d-flex align-items-center">
//                                                 <li className="breadcrumb-item">
//                                                     <Link href="/">Home</Link>
//                                                 </li>
//                                                 <li
//                                                     className="breadcrumb-item active"
//                                                     aria-current="page"
//                                                 >
//                                                     {pageTitle}
//                                                 </li>
//                                             </ol>
//                                         </nav>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default InnerBanner;

import React from "react";
import Link from "next/link";

interface InnerBannerProps {
    pageTitle: string;
    variant?: "contact" | "about" | "services" | "blog" | "faq" | "custom";
    customClass?: string;
    breadcrumbItems?: Array<{
        label: string;
        href?: string;
        active?: boolean;
    }>;
}

/**
 * InnerBanner - A reusable banner component for inner pages
 *
 * @param {string} pageTitle - The title to display in the banner
 * @param {string} variant - The visual variant of the banner (defaults to "contact")
 * @param {string} customClass - Additional CSS classes to apply
 * @param {Array} breadcrumbItems - Custom breadcrumb items (optional)
 */
const InnerBanner: React.FC<InnerBannerProps> = ({
    pageTitle,
    variant = "contact",
    customClass = "",
    breadcrumbItems,
}) => {
    // Default breadcrumb if not provided
    const defaultBreadcrumb = [
        { label: "Home", href: "/" },
        { label: pageTitle, active: true },
    ];

    // Use provided breadcrumb items or default
    const breadcrumb = breadcrumbItems || defaultBreadcrumb;

    return (
        <section
            className={`banner-section inner-banner ${variant} ${customClass}`.trim()}
            aria-label={`${pageTitle} Banner`}
        >
            <div className="overlay">
                <div className="banner-content d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-7 col-md-10">
                                <div className="main-content  ">
                                    <h1 className="fw-semibold">{pageTitle}</h1>

                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                {breadcrumb.map(
                                                    (item, index) => (
                                                        <li
                                                            key={`breadcrumb-${index}`}
                                                            className={`breadcrumb-item ${
                                                                item.active
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                            aria-current={
                                                                item.active
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            {item.active ? (
                                                                item.label
                                                            ) : (
                                                                <Link
                                                                    href={
                                                                        item.href ||
                                                                        "#"
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    )
                                                )}
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

export default InnerBanner;
