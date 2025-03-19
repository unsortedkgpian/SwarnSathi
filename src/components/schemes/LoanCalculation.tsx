'use client'

import React, { useState, useEffect } from "react";
// import "./LoanCalculation.css"; // Import the provided CSS

const LoanCalculation: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(3000);
    const [tenure, setTenure] = useState<number>(1);
    const [selectedRepayment, setSelectedRepayment] = useState<string>("0.04");
    const [selectedInterestRepayment, setSelectedInterestRepayment] =
        useState<string>("0.0006");
    const [principalRepay, setPrincipalRepay] = useState<string>("");
    const [interestRepay, setInterestRepay] = useState<string>("");
    const [totalRepay, setTotalRepay] = useState<string>("");

    useEffect(() => {
        // Calculation logic (simplified example)
        const principal = loanAmount * parseFloat(selectedRepayment);
        const interest =
            loanAmount * parseFloat(selectedInterestRepayment) * tenure;
        const total = principal + interest;

        setPrincipalRepay(`₹${principal.toFixed(2)}`);
        setInterestRepay(`₹${interest.toFixed(2)}`);
        setTotalRepay(`₹${total.toFixed(2)}`);
    }, [loanAmount, tenure, selectedRepayment, selectedInterestRepayment]);

    return (
        <section className="loan-calculation pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-header text-center">
                            <h5
                                className="sub-title"
                                style={{ textTransform: "none" }}
                            >
                                Get a quick and easy loan against your gold
                            </h5>
                            <h2 className="title">
                                Get started with the gold loan experience
                            </h2>
                            <p className="top-para">
                                Prequalify or apply for your Gold Loan in
                                minutes
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 cus-ord">
                        {/* Loan Amount Slider */}
                        <div className="form-group">
                            <div className="range-amount">
                                <h5 className="d-flex align-items-center">
                                    <label>
                                        Loan Amount&nbsp;(Rs)&nbsp;:&nbsp;{" "}
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        id="home-loan-amount"
                                        value={`₹${loanAmount}`}
                                    />
                                </h5>
                            </div>
                            <input
                                type="range"
                                min="3000"
                                max="200000"
                                value={loanAmount}
                                onChange={(e) =>
                                    setLoanAmount(Number(e.target.value))
                                }
                                className="form-range"
                                id="home-loan-slide"
                            />
                            <div className="d-flex justify-content-between">
                                <p style={{ fontFamily: "'Roboto'" }}>₹3,000</p>
                                <p style={{ fontFamily: "'Roboto'" }}>
                                    ₹2 Lacs
                                </p>
                            </div>
                        </div>

                        {/* Tenure Slider */}
                        <div className="form-group">
                            <div className="range-amount">
                                <h5 className="d-flex align-items-center">
                                    <label>
                                        Tenure&nbsp;(Months)&nbsp;:&nbsp;{" "}
                                    </label>
                                    <input
                                        type="text"
                                        disabled
                                        id="down-payment-amount"
                                        value={`${tenure} Month${
                                            tenure > 1 ? "s" : ""
                                        }`}
                                    />
                                </h5>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="12"
                                value={tenure}
                                onChange={(e) =>
                                    setTenure(Number(e.target.value))
                                }
                                className="form-range"
                                id="down-payment-slide"
                            />
                            <div className="d-flex justify-content-between">
                                <p>1 Month</p>
                                <p>12 Months</p>
                            </div>
                        </div>

                        {/* Repayment Terms */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="radio-area">
                                    <h6>Principle repayment terms</h6>
                                    {["0.04", "0.24", "1", ""].map((value) => (
                                        <label
                                            key={value}
                                            className="single-radio repayment"
                                        >
                                            {
                                                [
                                                    "Daily",
                                                    "Weekly",
                                                    "Monthly",
                                                    "End of the tenure",
                                                ][
                                                    [
                                                        "0.04",
                                                        "0.24",
                                                        "1",
                                                        "",
                                                    ].indexOf(value)
                                                ]
                                            }
                                            <input
                                                type="radio"
                                                name="repaymentradio"
                                                value={value}
                                                checked={
                                                    selectedRepayment === value
                                                }
                                                onChange={(e) =>
                                                    setSelectedRepayment(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="radio-area">
                                    <h6>Interest repayment terms</h6>
                                    {["0.0006", "0.004", "0.0184", "0.02"].map(
                                        (value) => (
                                            <label
                                                key={value}
                                                className="single-radio repayment"
                                            >
                                                {
                                                    [
                                                        "Daily",
                                                        "Weekly",
                                                        "Monthly",
                                                        "End of the tenure",
                                                    ][
                                                        [
                                                            "0.0006",
                                                            "0.004",
                                                            "0.0184",
                                                            "0.02",
                                                        ].indexOf(value)
                                                    ]
                                                }
                                                <input
                                                    type="radio"
                                                    name="interestrepay"
                                                    value={value}
                                                    checked={
                                                        selectedInterestRepayment ===
                                                        value
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedInterestRepayment(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="col-lg-5">
                        <div className="content-box text-center">
                            <div className="info-block mb-60 d-flex justify-content-center">
                                <div
                                    className="d-flex justify-content-center"
                                    style={{ marginTop: "25px" }}
                                >
                                    <div className="info-single text-center">
                                        <h6 style={{ color: "#000" }}>
                                            Principle Repayment Amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                value={principalRepay}
                                            />
                                        </div>
                                    </div>
                                    <div className="info-single text-center">
                                        <h6 style={{ color: "#000" }}>
                                            Interest repayment amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                value={interestRepay}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-block mb-60 d-flex justify-content-center">
                                <div
                                    className="d-flex justify-content-center"
                                    style={{ marginTop: "25px" }}
                                >
                                    <div className="info-single text-center">
                                        <h6 style={{ color: "#000" }}>
                                            Total repayment amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                value={totalRepay}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-area">
                                <button
                                    className="cmn-btn applyloan"
                                    onClick={() => console.log("Apply now")}
                                >
                                    Apply for loan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoanCalculation;
