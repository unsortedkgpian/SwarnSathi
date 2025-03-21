"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
    _id: string;
    name: string;
    position: string;
    description: string;
    image: string;
    linkedinLink: string;
}

const TeamSection = () => {
    const [activeTab, setActiveTab] = useState("Founding_Team");
    const [teamMembersData, setTeamMembersData] = useState<
        Record<string, TeamMember[]>
    >({

        Founding_Team: [
            {
                _id: "1",
                name: "Prodyut Purkait",
                position: "Leadership",
                description:
                    "Alumni of IIT Kharagpur and IIM Calcutta. He has 8+ years of experience in financial sector.",
                image: "/images/team/PP.jfif",
                linkedinLink:
                    "https://www.linkedin.com/in/",
            },
        ],
        Core_Team: [],
        Interns: [],
        Advisors: [],
        Investors: [],
        Employee_Speaks: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const url = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        async function getTeam() {
            try {
                setLoading(true);
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/team-members");
                const data = await response.json();
                console.log(data)
                // Group members by category
                const groupedData: Record<string, TeamMember[]> = {};
                
                // Check if data is an array before using forEach
                if (Array.isArray(data)) {
                    data.forEach((member) => {
                        if (!groupedData[member.position]) {
                            groupedData[member.position] = [];
                        }
                        groupedData[member.position].push(member);
                    });
                    setTeamMembersData(groupedData);
                } else {
                    console.error("Expected an array but received:", data);
                    setError("Failed to load team data");
                }
            } catch (error) {
                console.error("Error fetching team data:", error);
                // setError("Failed to load team data");
            } finally {
                setLoading(false);
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
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Meet our team
                                </h2>
                                <p>
                                    Our diversity and youthfulness are the
                                    sources of our strength as a team and shape
                                    our views
                                </p>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center">
                            <p>Loading team members...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center text-danger">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="row justify-content-center">
                            <div className="col-xxl-12 col-lg-12 col-md-12">
                                <ul
                                    className="nav nav-tabs mb-60"
                                    role="tablist"
                                >
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

                            <div className="col-lg-12">
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
                                                {teamMembersData[category]
                                                    ?.length > 0 ? (
                                                    teamMembersData[
                                                        category
                                                    ].map((member, index) => (
                                                        <div
                                                            key={member._id}
                                                            className="col-md-3 col-sm-6 mb-4"
                                                        >
                                                            <div className="single-box">
                                                                <div className="icon-box">
                                                                    <img
                                                                        // src={`${url}/${member.image}`}
                                                                        src={`${member.image}`}
                                                                        alt={
                                                                            member.name
                                                                        }
                                                                        width={
                                                                            300
                                                                        }
                                                                        height={
                                                                            300
                                                                        }
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                                <div className="test-area">
                                                                    <h5>
                                                                        {
                                                                            member.name
                                                                        }
                                                                    </h5>
                                                                    <p className="position">
                                                                        {member.position.replace(
                                                                            /_/g,
                                                                            " "
                                                                        )}
                                                                    </p>
                                                                    <p className="description">
                                                                        {member
                                                                            .description
                                                                            .length >
                                                                        100
                                                                            ? member.description.slice(
                                                                                  0,
                                                                                  100
                                                                              ) +
                                                                              "..."
                                                                            : member.description}
                                                                    </p>
                                                                    {member.linkedinLink && (
                                                                        <p>
                                                                            <a
                                                                                href={
                                                                                    member.linkedinLink
                                                                                }
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                <i className="fab fa-linkedin-in"></i>
                                                                            </a>
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="col-12 text-center">
                                                        <p>
                                                            No team members in
                                                            this category.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
