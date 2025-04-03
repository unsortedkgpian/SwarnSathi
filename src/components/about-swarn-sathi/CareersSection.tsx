'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Job {
    _id: string;
    jobName: string;
    role: string;
    location: string;
    googleSheetLink: string;
}

const CareersSection: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([
        {
            _id: "1",
            jobName: "Office Manager",
            role: "Full Time",
            location: "Kolkata",
            googleSheetLink: "/careers",
        },
        {
            _id: "2",
            jobName: "Sales Executive",
            role: "Full Time",
            location: "Kolkata",
            googleSheetLink: "/careers",
        }
    ]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // throw Error;
                setLoading(true);
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/job-openings`);
                setJobs(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching job openings:", error);
                // setError("Failed to load job openings");
                
                // Fallback data in case of error
                setJobs([
                    {
                        _id: "1",
                        jobName: "Office Manager",
                        role: "Full Time",
                        location: "Kolkata",
                        googleSheetLink: "/careers",
                    },
                    {
                        _id: "2",
                        jobName: "Sales Executive",
                        role: "Full Time",
                        location: "Kolkata",
                        googleSheetLink: "/careers",
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

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
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Current job openings
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {loading ? (
                            <div className="text-center">
                                Loading job openings...
                            </div>
                        ) : error ? (
                            <div className="text-center text-danger">
                                {error}
                            </div>
                        ) : jobs.length === 0 ? (
                            <div className="text-center">
                                No job openings available at the moment.
                            </div>
                        ) : (
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
                                        {jobs.map((job) => (
                                            <tr key={job._id}>
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
                                                        href={
                                                            job.googleSheetLink
                                                        }
                                                    >
                                                        Apply now
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
