"use client";
import { useEffect, useState } from "react";
import "./GoldValueCalculator.css";
import ModalComponent from "../HandleSubmit";

interface ModalComponentProps {
    show: boolean;
    onClose: () => void;
}

const validPurities = [10, 14, 18, 20, 22, 24];

export default function GoldValueCalculator() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [goldPurity, setGoldPurity] = useState(22);
    const [goldWeight, setGoldWeight] = useState(10);
    const [goldRate24K, setGoldRate24K] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    const applyNow = () => {
        setShowModal(true);
    };

    useEffect(() => {
    const fetchGoldRate = async () => {
        try {
            const cached = localStorage.getItem("goldRateCache");
            const now = new Date();

            if (cached) {
                const { rate, timestamp } = JSON.parse(cached);
                const cachedDate = new Date(timestamp);

                // Check if data is from today
                const isStale = now.toDateString() !== cachedDate.toDateString();

                if (!isStale) {
                    setGoldRate24K(rate);
                    setLastUpdated(timestamp);
                    setIsLoading(false);
                    return;
                }
            }

            // Fetch fresh data if no cache or stale
            const res = await fetch(url + "/api/goldrate");
            const data = await res.json();
            if (data?.rate) {
                setGoldRate24K(data.rate);
                setLastUpdated(data.timestamp);
                localStorage.setItem(
                    "goldRateCache",
                    JSON.stringify({ rate: data.rate, timestamp: data.timestamp })
                );
            } else {
                throw new Error("Invalid response from API");
            }
        } catch (err) {
            console.error("Error fetching gold rate:", err);
            setError("Failed to fetch gold rate");
        } finally {
            setIsLoading(false);
        }
    };

    fetchGoldRate();
}, []);


    const url = process.env.NEXT_PUBLIC_API_URL;
    // Fetch the 24K gold rate from backend API
    useEffect(() => {
        const fetchGoldRate = async () => {
            try {
                const res = await fetch(url+"/api/goldrate");
                const data = await res.json();
                if (data.rate) {
                    setGoldRate24K(data.rate);
                    setIsLoading(false);
                } else {
                    throw new Error("Invalid response from API");
                }
            } catch (err) {
                console.error("Error fetching gold rate:", err);
                setError("Failed to fetch gold rate");
                setIsLoading(false);
            }
        };

        fetchGoldRate();
    }, []);

    const calculateApproxValue = () => {
    if (!goldRate24K) return 0;
    const rawValue = goldRate24K * goldWeight;
    return Math.floor(rawValue / 500) * 500;
};
    
    useEffect(() => {
        const initializeSlider = (selector: string, value: number) => {
            const slider = document.querySelector(selector) as HTMLInputElement;
            if (slider) {
                const min = Number(slider.min);
                const max = Number(slider.max);
                const progress = ((value - min) / (max - min)) * 100;
                slider.style.setProperty("--progress", `${progress}%`);
            }
        };
        

        initializeSlider("#gold-purity-slider", 22);
        initializeSlider("#gold-weight-slider", 10);
    }, []);
    

  const yourGoldValue = () => {
    if (!goldRate24K) return 0;
    const purityRatio = goldPurity / 24;
    const rawValue = goldRate24K * goldWeight * purityRatio;
    return (Math.floor(rawValue / 500) * 500);
};

  const yourLoanValue = () => {
    if (!goldRate24K) return 0;
    const purityRatio = goldPurity / 24;
    const rawValue = goldRate24K * goldWeight * purityRatio;
    const loanVal = rawValue*0.75;
    return (Math.floor(loanVal / 500) * 500);
};
    const updateSliderStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        e.target.style.setProperty("--progress", `${progress}%`);
    };
    const handlePurityChange = (e) => {
        updateSliderStyle(e);
        setGoldPurity(Number(e.target.value));
    };

    const updateSliderStyle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const slider = document.querySelector("#gold-weight-slider") as HTMLInputElement;
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        slider.style.setProperty("--progress", `${progress}%`);
    };

    const date = new Date(lastUpdated);
    

    const formattedDateTime = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    return (
        <>
        <section className="business-loan-section personal-loan">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-content">
                                {!isLoading && goldRate24K && lastUpdated && (
                                    <div
                                        style={{
                                                position: "relative", 
                                                top: "0px", 
                                                right: "150px", 
                                                backgroundColor: "white",
                                                padding: "6px 12px",
                                                borderRadius: "10px",
                                                color: "black",
                                                zIndex: 10,
                                                width: "fit-content", 
                                                fontFamily: "Segoe UI, Roboto, sans-serif",
                                                lineHeight: 1.5,
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.15)" 
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <div style={{ fontSize: "17px", fontWeight: 700, color: "#DAA520" }}> 
                                        Gold Rate: 
                                        </div>
                                        
                                        <div style={{ fontSize: "17px", fontWeight: 700, color: "#e3442c" }}> 
                                        ₹{goldRate24K.toFixed(2)}/Gm
                                        </div>
                                        </div>
                                         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <div style={{ fontSize: "17px", fontWeight: 700, color: "#DAA520" }}> 
                                        Updated:
                                        </div>
                                        <div style={{ fontSize: "14px", fontWeight: 500 , marginTop: "6px", color: "#e3442c" }}>
                                            {formattedDateTime}
                                        </div>
                                        </div>
                                    </div>
                                )}

                                <div className="section-text">                                    
                                    <h2 className="title" style={{ textTransform: "capitalize" }}>
                                        Check the value of your jewellery
                                    </h2>
                                    <p>
                                        Change the value of Karat and Weight to see the approx. value of your jewellery
                                    </p>
                                    {error && <p className="text-danger small">{error}</p>}
                                </div>

                                <form action="#">
                                    <div className="form-group">

                                        {/* Gold Purity Section */}
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label style={{ fontSize: "30px", fontWeight: "400" }}>
                                                    Gold Purity:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={`${goldPurity}K`}
                                                    style={{
                                                    width: `${goldPurity.toString().length + 1}ch`,
                                                    }} 
                                                    id="personal-amount"
                                                    
                                                />
                                            </h4>
                                        </div>

                                        <input
                                            type="range"
                                            min="10"
                                            max="24"
                                            step="1"
                                            value={goldPurity}
                                            onChange={handlePurityChange}
                                            className="form-range orange-slider"
                                            id="gold-purity-slider"
                                            list="purity-values"
                                        />
                                        <datalist id="purity-values">
                                            {validPurities.map((purity) => (
                                                <option key={purity} value={purity} />
                                            ))}
                                        </datalist>

                                        <div className="d-flex justify-content-between" style={{ marginTop: "10px" }}>
                                            <p>10K</p>
                                            <p>24K</p>
                                        </div>

                                        {/* Gold Weight Section */}
                                        <div className="range-amount relative inline-block">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label style={{ fontSize: "30px", fontWeight: "400" }}>
                                                    Gold Weight:&nbsp;
                                                </label>

                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    max="100"
                                                    value={goldWeight}
                                                    onChange={(e) => {
                                                    setGoldWeight(Number(e.target.value));
                                                    updateSliderStyle2(e);
                                                    }}
                                                    id="personal-amount-inter"
                                                    style={{
                                                    width: `${goldWeight.toString().length + 1}ch`,
                                                    border: "1px solid #ccc",
                                                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                                                    borderRadius: "0.275rem",
                                                    textAlign:"center",
                                                    }}                                                    
                                                />
                                                <input
                                                    type="text"                                                   
                                                    disabled
                                                    value={`Gm`}
                                                    id="personal-amount"
                                                    style={{
                                                    width: "3.25ch",
                                                    minWidth: "2.25ch",
                                                    }}                                                    
                                                />
                                            </h4>
                                        </div>

                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={goldWeight}
                                            onChange={(e) => {setGoldWeight(Number(e.target.value));updateSliderStyle(e)}}
                                            className="form-range orange-slider"
                                            id="gold-weight-slider"
                                        />
                                        <div className="d-flex justify-content-between" style={{ marginTop: "10px" }}>
                                            <p>0</p>
                                            <p>100</p>
                                        </div>

                                        {/* Approx Value Section */}
                                        {/* <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label>
                                                    Maximum Gold Price:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    className = "res-val-input"
                                                    disabled
                                                    style={{
                                                    width: `${calculateApproxValue().toString().length + 1}ch`,
                                                    }} 
                                                    value={isLoading ? "Loading..." : `₹${ calculateApproxValue() }`}
                                                    id="approx-value"
                                                />
                                            </h4>
                                        </div> */}

                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label >
                                                    Your Gold Price:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    className = "res-val-input"
                                                    disabled
                                                    style={{
                                                    width: `${yourGoldValue().toString().length + 1}ch`,
                                                    }} 
                                                    value={isLoading ? "Loading..." : `₹${yourGoldValue()}`}
                                                    id="approx-value"
                                                />
                                            </h4>
                                        </div>

                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label >
                                                    Maximum Loan Amount:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    className = "res-val-input"
                                                    disabled
                                                    style={{
                                                    width: `${yourLoanValue().toString().length + 1}ch`,
                                                    }} 
                                                    value={isLoading ? "Loading..." : `₹${yourLoanValue()}`}
                                                    id="approx-value"
                                                />
                                            </h4>
                                        </div>

                                        {/* <div className="range-amount">
                                            <p style={{ fontSize: "12px" }}>
                                                *This value might get changed upon physical verification
                                            </p>
                                            {!isLoading && (
                                                <p style={{ fontSize: "12px" }}>
                                                    *Using real-time gold prices from goldapi.io
                                                </p>
                                            )}
                                        </div> */}
                                         
                                    </div>
                                </form>
                                <div className="btn-area">
                                        <button
                                        className="cmn-btn applyloan"
                                        onClick={() => applyNow()}
                                        >
                                            Apply Now
                                    </button>
                                </div>
                                <div className="range-amount">
                                            <p style={{ fontSize: "12px" }}>
                                                *This value might get changed upon physical verification
                                            </p>
                                            {!isLoading && (
                                                <p style={{ fontSize: "12px" }}>
                                                    *Using real-time gold prices from goldapi.io
                                                </p>
                                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                <ModalComponent
                show={showModal}
                onClose={() => setShowModal(false)}
            />
            </>
    );
}



