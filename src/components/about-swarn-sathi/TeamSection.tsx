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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
    name: string;
    position?: string;
    description: string;
    image: { file: string };
    socialMedia: { linkedin: string };
    category: string;
}

const TeamSection = () => {
    const [activeTab, setActiveTab] = useState("Founding_Team");
    const [teamMembersData, setTeamMembersData] = useState<
        Record<string, TeamMember[]>
    >({});

    useEffect(() => {
        async function getTeam() {
            try {
                const response = await fetch("/api/team");
                const data: TeamMember[] = await response.json();

                // Group members by category
                const groupedData: Record<string, TeamMember[]> = {};
                data.forEach((member) => {
                    if (!groupedData[member.category]) {
                        groupedData[member.category] = [];
                    }
                    groupedData[member.category].push(member);
                });

                setTeamMembersData(groupedData);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        }

        getTeam();
    }, []);

    const teamCategories = [
        "Founding_Team",
        "Core_Team",
        "Interns",
        "Advisors",
        "Investors",
        "Leadership Team",
        "Board of Director",
    ];

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
                                            {teamMembersData[category]?.map(
                                                (member, index) => (
                                                    <div
                                                        key={index}
                                                        className="col-md-3 col-sm-6"
                                                    >
                                                        <div className="single-box">
                                                            <div className="icon-box">
                                                                <Image
                                                                    src={
                                                                        member
                                                                            .image
                                                                            .file
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
                                                                <p>
                                                                    {
                                                                        member.position
                                                                    }
                                                                </p>
                                                                <p />
                                                                {member
                                                                    .description
                                                                    .length >
                                                                100
                                                                    ? member.description.slice(
                                                                          0,
                                                                          100
                                                                      ) + "..."
                                                                    : member.description}
                                                                <p>
                                                                    {member
                                                                        .socialMedia
                                                                        .linkedin && (
                                                                        <a
                                                                            href={
                                                                                member
                                                                                    .socialMedia
                                                                                    .linkedin
                                                                            }
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <i className="fab fa-linkedin-in"></i>
                                                                        </a>
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            ) || (
                                                <p>
                                                    No team members in this
                                                    category.
                                                </p>
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
