// 'use client'
// import { useState } from "react";
// import Image from "next/image";

// interface TeamMember {
//     name: string;
//     role?: string;
//     description: string;
//     image: string;
//     linkedin: string;
// }

// const TeamSection = () => {
//     const [activeTab, setActiveTab] = useState("Founding_Team");

//     const teamCategories = [
//         "Founding_Team",
//         "Core_Team",
//         "Interns",
//         "Advisors",
//         "Investors",
//         "Employee_Speaks",
//     ];

//     // Example data structure - replace with actual data
//     const teamData: Record<string, TeamMember[]> = {
//         Founding_Team: [
//             {
//                 name: "Prodyut Purkait",
//                 description:
//                     "Alumni of IIT Kharagpur and IIM Calcutta. He has 8+ years of experience in financial sector.",
//                 image: "/images/team/PP.jfif",
//                 linkedin:
//                     "https://www.linkedin.com/in/aditya-kumar-b7b79b22b",
//             },
//         ],
//         Core_Team: [],
//         Interns: [],
//         Advisors: [],
//         Investors: [],
//         Employee_Speaks: [],
//     };

//     return (
//         <section className="our-team" id="our-team">
//             <div className="overlay pt-120 pb-120">
//                 <div className="container wow fadeInUp">
//                     <div className="row justify-content-center">
//                         <div className="col-xl-9 col-lg-10">
//                             <div className="section-header text-center">
//                                 <h5 className="sub-title">
//                                     The amazing team behind our company
//                                 </h5>
//                                 <h2 className="title">Meet our team</h2>
//                                 <p>
//                                     Our diversity and youthfulness are the
//                                     sources of our strength as a team and shape
//                                     our views
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row justify-content-center">
//                         <div className="col-xxl-12 col-lg-12 col-md-12">
//                             <ul className="nav nav-tabs mb-60" role="tablist">
//                                 {teamCategories.map((category) => (
//                                     <li
//                                         key={category}
//                                         className="nav-item"
//                                         role="presentation"
//                                     >
//                                         <button
//                                             className={`nav-link ${
//                                                 activeTab === category
//                                                     ? "active"
//                                                     : ""
//                                             }`}
//                                             onClick={() =>
//                                                 setActiveTab(category)
//                                             }
//                                             style={{
//                                                 textTransform: "uppercase",
//                                             }}
//                                         >
//                                             {category.replace(/_/g, " ")}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="col-lg-12">
//                             <div className="tab-content">
//                                 {teamCategories.map((category) => (
//                                     <div
//                                         key={category}
//                                         className={`tab-pane fade ${
//                                             activeTab === category
//                                                 ? "show active"
//                                                 : ""
//                                         }`}
//                                         role="tabpanel"
//                                     >
//                                         <div className="row">
//                                             {teamData[category].map(
//                                                 (member, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className="col-md-3 col-sm-6"
//                                                     >
//                                                         <div className="single-box">
//                                                             <div className="icon-box">
//                                                                 <Image
//                                                                     src={
//                                                                         member.image
//                                                                     }
//                                                                     alt={
//                                                                         member.name
//                                                                     }
//                                                                     width={300}
//                                                                     height={300}
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </div>
//                                                             <div className="test-area">
//                                                                 <h5>
//                                                                     {
//                                                                         member.name
//                                                                     }
//                                                                 </h5>
//                                                                 <p
//                                                                     dangerouslySetInnerHTML={{
//                                                                         __html: member.description,
//                                                                     }}
//                                                                 />
//                                                                 <p>
//                                                                     <a
//                                                                         href={
//                                                                             member.linkedin
//                                                                         }
//                                                                         target="_blank"
//                                                                         rel="noopener noreferrer"
//                                                                     >
//                                                                         <i className="fab fa-linkedin-in"></i>
//                                                                     </a>
//                                                                 </p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TeamSection;

'use client'

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
    name: string;
    role?: string;
    description: string;
    image: string;
    linkedin: string;
}

const TeamSection = () => {
    const [activeTab, setActiveTab] = useState("Founding_Team");

    const teamCategories = [
        "Founding_Team",
        "Core_Team",
        "Interns",
        "Advisors",
        "Investors",
        "Employee_Speaks",
    ];

    // Example data structure - replace with actual data
    const teamData: Record<string, TeamMember[]> = {
        Founding_Team: [
            {
                name: "Prodyut Purkait",
                description:
                    "Alumni of IIT Kharagpur and IIM Calcutta. He has 8+ years of experience in financial sector.",
                image: "/images/team/PP.jfif",
                linkedin:
                    "https://www.linkedin.com/in/prodyut-purkait-69402120/",
            },
            // Add more team members here
        ],
        Core_Team: [],
        Interns: [],
        Advisors: [],
        Investors: [],
        Employee_Speaks: [],
    };

    return (
        <section className="our-team" id="our-team">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-header text-center">
                                <h5 className="sub-title">
                                    The amazing team behind our company
                                </h5>
                                <h2 className="title">Meet our team</h2>
                                <p>
                                    Our diversity and youthfulness are the
                                    sources of our strength as a team and shape
                                    our views
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xxl-12 col-lg-12 col-md-12">
                            <ul className="nav nav-tabs mb-60" role="tablist">
                                {teamCategories.map((category) => (
                                    <li
                                        key={category}
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className={`nav-link ${
                                                activeTab === category
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setActiveTab(category)
                                            }
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {category.replace(/_/g, " ")}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-12 p-5">
                            <div className="tab-content">
                                {teamCategories.map((category) => (
                                    <div
                                        key={category}
                                        className={`tab-pane fade ${
                                            activeTab === category
                                                ? "show active"
                                                : ""
                                        }`}
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            {teamData[category].map(
                                                (member, index) => (
                                                    <div
                                                        key={index}
                                                        className="col-md-3 col-sm-6"
                                                    >
                                                        <div className="single-box">
                                                            <div className="icon-box">
                                                                <Image
                                                                    src={
                                                                        member.image
                                                                    }
                                                                    alt={
                                                                        member.name
                                                                    }
                                                                    width={300}
                                                                    height={300}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="test-area">
                                                                <h5>
                                                                    {
                                                                        member.name
                                                                    }
                                                                </h5>
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: member.description,
                                                                    }}
                                                                />
                                                                <p>
                                                                    <a
                                                                        href={
                                                                            member.linkedin
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="linkedin-link"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 24 24"
                                                                            style={{
                                                                                fill: "#fea123",
                                                                                verticalAlign:
                                                                                    "middle",
                                                                            }}
                                                                        >
                                                                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.711z" />
                                                                        </svg>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;