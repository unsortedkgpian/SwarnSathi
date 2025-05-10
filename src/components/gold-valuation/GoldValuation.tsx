
"use client";
import { useEffect, useState } from "react";
import "./GoldValueCalculator.css";

const validPurities = [10, 14, 18, 20, 22, 24];

function GoldValueCalculator() {
    const [goldPurity, setGoldPurity] = useState(22);
    const [goldWeight, setGoldWeight] = useState(10);
    const [goldRate24K, setGoldRate24K] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
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
        return (goldRate24K * goldWeight).toFixed(2);
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
        return (goldRate24K * goldWeight * purityRatio).toFixed(2);
    };
    const updateSliderStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        e.target.style.setProperty("--progress", `${progress}%`);
    };
    const updateSliderStyle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const slider = document.querySelector("#gold-weight-slider") as HTMLInputElement;
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        slider.style.setProperty("--progress", `${progress}%`);
    };
    const handlePurityChange = (e) => {
        updateSliderStyle(e);
        setGoldPurity(Number(e.target.value));
    };


    return (
        <section className="business-loan-section personal-loan" id="gold-calculator">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-content">
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
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label style={{ fontSize: "30px", fontWeight: "400" }}>
                                                    Gold Weight:&nbsp;
                                                </label>
                                                
                                                <input
                                                    type="number"
                                                    className="!w-24 !h-10 px-4 text-base border rounded-md"
                                                    step="0.01"
                                                    min="0"
                                                    max="100"
                                                    value={goldWeight}
                                                    onChange={(e) => {
                                                    setGoldWeight(Number(e.target.value));
                                                    updateSliderStyle2(e);
                                                    }}
                                                    id="personal-amount-inter"
                                                    
                                                />
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={`G`}
                                                    id="personal-amount"
    
                                                />
                                                   
                                            </h4>
                                        </div>

                                        <input
                                            type="range"
                                            step="0.01"
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
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label className="resp-val-label">
                                                    Maximum Gold Price:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    className="resp-val-input"
                                                    value={isLoading ? "Loading..." : `₹${calculateApproxValue()}`}
                                                    id="approx-value"
                                                />
                                            </h4>
                                        </div>

                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label className="resp-val-label">
                                                    Your Gold Price:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    className="resp-val-input"
                                                    value={isLoading ? "Loading..." : `₹${yourGoldValue()}`}
                                                    id="approx-value"
                                                />
                                            </h4>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default GoldValueCalculator;