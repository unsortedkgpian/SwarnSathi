'use client'
import React from "react";

interface Job {
    jobName: string;
    role: string;
    location: string;
    applyLink: string;
}

const CareersSection: React.FC = () => {
    // Example jobs data - replace with your actual data source
    const jobs: Job[] = [
        {
            jobName: "Office Manager",
            role: "Full Time",
            location: "Kolkata",
            applyLink: "/careers", // Consider using Next.js Link component here
        },
        // Add more job objects as needed
    ];

    return (
        <section className="our-team" id="careers">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-header text-center">
                                <h5 className="sub-title">
                                    Join our amazing team
                                </h5>
                                <h2 className="title">Current job openings</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead
                                    style={{
                                        background: "#fea123",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    <tr>
                                        <th
                                            style={{
                                                background: "#fea123",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            Job Name
                                        </th>
                                        <th
                                            style={{
                                                background: "#fea123",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            Role
                                        </th>
                                        <th
                                            style={{
                                                background: "#fea123",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            Location
                                        </th>
                                        <th
                                            style={{
                                                background: "#fea123",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            Apply
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job, index) => (
                                        <tr key={index}>
                                            <td
                                                style={{
                                                    textAlign: "center",
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                {job.jobName}
                                            </td>
                                            <td
                                                style={{
                                                    textAlign: "center",
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                {job.role}
                                            </td>
                                            <td
                                                style={{
                                                    textAlign: "center",
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                {job.location}
                                            </td>
                                            <td
                                                style={{
                                                    textAlign: "center",
                                                    verticalAlign: "middle",
                                                }}
                                            >
                                                <a
                                                    className="cmn-btn"
                                                    href={job.applyLink}
                                                >
                                                    Apply now
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;