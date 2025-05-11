"use client";
import React, { useState, useEffect } from "react";
import "./LoanCalculation.css";
import ModalComponent from "../HandleSubmit";
import { useRouter } from "next/navigation"; // Add this import

interface ModalComponentProps {
    show: boolean;
    onClose: () => void;
}

const LoanCalculation: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [loanAmount, setLoanAmount] = useState<number>(3000);
    const [tenure, setTenure] = useState<number>(1);
    const [selectedRepayment, setSelectedRepayment] = useState<string>("0.04");
    const [selectedInterestRepayment, setSelectedInterestRepayment] =
        useState<string>("0.0006");
    const [principalRepay, setPrincipalRepay] = useState<string>("");
    const [interestRepay, setInterestRepay] = useState<string>("");
    const [totalRepay, setTotalRepay] = useState<string>("");
    const [principalFrequency, setPrincipalFrequency] =
        useState<string>("Daily");
    const [interestFrequency, setInterestFrequency] = useState<string>("Daily");
    const[loanType, setLoanType] = useState("")
    const router = useRouter();

    const applyNow = (type: string) => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            // Redirect to login if not authenticated
            router.push('/login');
            return;
        }
        else{
            // Format the loan type to match the expected format
            const formattedType = type.toLowerCase().replace(/_/g, "-");
            setLoanType(formattedType);
            setShowModal(true);
            console.log(`Apply now clicked for ${formattedType}`);
        }
    };

    // Initialize slider positions
    useEffect(() => {
        initializeSliders();
        calculateRepayments();
    }, []);

    const initializeSliders = () => {
        const loanSlider = document.getElementById(
            "home-loan-slide"
        ) as HTMLInputElement;
        const tenureSlider = document.getElementById(
            "down-payment-slide"
        ) as HTMLInputElement;

        if (loanSlider) {
            const loanProgress = ((loanAmount - 3000) / (200000 - 3000)) * 100;
            loanSlider.style.setProperty("--progress", `${loanProgress}%`);
        }

        if (tenureSlider) {
            const tenureProgress = ((tenure - 1) / (12 - 1)) * 100;
            tenureSlider.style.setProperty("--progress", `${tenureProgress}%`);
        }
    };

    const updateSliderStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        e.target.style.setProperty("--progress", `${progress}%`);
    };

    const updateSliderStyle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const loanSlider = document.getElementById(
            "home-loan-slide"
        ) as HTMLInputElement;
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        loanSlider.style.setProperty("--progress", `${progress}%`);
    };

    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = Number(e.target.value);
        setLoanAmount(newAmount);
        updateSliderStyle(e);
    };
    const handleLoanAmountChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = Number(e.target.value);
        setLoanAmount(newAmount);
        updateSliderStyle2(e);
    };

    const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTenure = Number(e.target.value);
        setTenure(newTenure);
        updateSliderStyle(e);
    };

    const handlePrincipalRepaymentChange = (value: string, label: string) => {
        setSelectedRepayment(value);
        setPrincipalFrequency(label === "End of the tenure" ? "Full" : label);
    };

    const handleInterestRepaymentChange = (value: string, label: string) => {
        setSelectedInterestRepayment(value);
        setInterestFrequency(label === "End of the tenure" ? "Full" : label);
    };

    // Calculate repayments whenever inputs change
    useEffect(() => {
        calculateRepayments();
    }, [loanAmount, tenure, selectedRepayment, selectedInterestRepayment]);

    const calculateRepayments = () => {
        // Handle bullet payment (end of tenure) for principal
        let principalRate = parseFloat(selectedRepayment || "0");
        if (selectedRepayment === "") {
            principalRate = 1; // For bullet payment, pay full amount
        }

        const principal = loanAmount * principalRate;

        // Calculate interest based on selected frequency
        const interestRate = parseFloat(selectedInterestRepayment);
        const interest = loanAmount * interestRate * tenure;

        // Total repayment
        const total = principal + interest;

        // Format with Indian Rupee format
        setPrincipalRepay(`₹${principal.toFixed(2)}`);
        setInterestRepay(`₹${interest.toFixed(2)}`);
        setTotalRepay(`₹${total.toFixed(2)}`);
    };

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
                            <h2
                                className="title"
                                style={{ textTransform: "capitalize" }}
                            >
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
                                        Loan Amount&nbsp;(Rs)&nbsp;:&nbsp;
                                    </label>
                                    <input
                                        type="text"  
                                        disabled                                     
                                        id="home-loan-amount"                                        
                                        value="₹"
                                    />
                                    <input
                                        type="Number"
                                        min="3000"
                                        max="200000"
                                        className="!w-24 !h-10 px-4 text-base border rounded-md"
                                        id="home-loan-amount"
                                        onChange={handleLoanAmountChange2}
                                        value={loanAmount}
                                    />
                                </h5>
                            </div>
                            <input
                                type="range"
                                min="3000"
                                max="200000"
                                value={loanAmount}
                                onChange={handleLoanAmountChange}
                                className="orange-slider"
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
                                        Tenure&nbsp;(Months)&nbsp;:&nbsp;
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
                                onChange={handleTenureChange}
                                className="orange-slider"
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
                                    <h6>Principal repayment terms</h6>
                                    {[
                                        { value: "0.04", label: "Daily" },
                                        { value: "0.24", label: "Weekly" },
                                        { value: "1", label: "Monthly" },
                                        {
                                            value: "",
                                            label: "End of the tenure",
                                        },
                                    ].map((option) => (
                                        <label
                                            key={option.value}
                                            className="single-radio repayment"
                                        >
                                            <input
                                                type="radio"
                                                name="repaymentradio"
                                                value={option.value}
                                                checked={
                                                    selectedRepayment ===
                                                    option.value
                                                }
                                                onChange={() =>
                                                    handlePrincipalRepaymentChange(
                                                        option.value,
                                                        option.label
                                                    )
                                                }
                                            />
                                            <span className="checkmark"></span>
                                            {option.label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="radio-area">
                                    <h6>Interest repayment terms</h6>
                                    {[
                                        { value: "0.0006", label: "Daily" },
                                        { value: "0.004", label: "Weekly" },
                                        { value: "0.0184", label: "Monthly" },
                                        {
                                            value: "0.02",
                                            label: "End of the tenure",
                                        },
                                    ].map((option) => (
                                        <label
                                            key={option.value}
                                            className="single-radio repayment"
                                        >
                                            <input
                                                type="radio"
                                                name="interestrepay"
                                                value={option.value}
                                                checked={
                                                    selectedInterestRepayment ===
                                                    option.value
                                                }
                                                onChange={() =>
                                                    handleInterestRepaymentChange(
                                                        option.value,
                                                        option.label
                                                    )
                                                }
                                            />
                                            <span className="checkmark"></span>
                                            {option.label}
                                        </label>
                                    ))}
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
                                        <h6
                                            style={{ color: "#000" }}
                                            id="principleheading"
                                        >
                                            {principalFrequency} Principal
                                            repayment amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                id="principalrepay"
                                                value={principalRepay}
                                                style={{
                                                    fontFamily:
                                                        "'Roboto','sans-serif'",
                                                    fontSize: "40px",
                                                    fontWeight: "500",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="info-single text-center">
                                        <h6
                                            style={{ color: "#000" }}
                                            id="interestrepayheading"
                                        >
                                            {interestFrequency} Interest
                                            repayment amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                id="intrepay"
                                                value={interestRepay}
                                                style={{
                                                    fontFamily:
                                                        "'Roboto','sans-serif'",
                                                    fontSize: "40px",
                                                    fontWeight: "500",
                                                }}
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
                                        <h6
                                            style={{
                                                color: "#000",
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            Total repayment amount
                                        </h6>
                                        <div className="d-flex justify-content-center">
                                            <input
                                                className="schemeinput"
                                                type="text"
                                                disabled
                                                id="totalrepayamount"
                                                value={totalRepay}
                                                style={{
                                                    fontFamily:
                                                        "'Roboto','sans-serif'",
                                                    fontSize: "40px",
                                                    fontWeight: "500",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-area">
                                <button
                                    className="cmn-btn applyloan"
                                    onClick={() => applyNow("Secured-Gold-Loan")}
                                >
                                    Apply for loan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
                loanType={loanType}
            />
        </section>
    );
};

export default LoanCalculation;
