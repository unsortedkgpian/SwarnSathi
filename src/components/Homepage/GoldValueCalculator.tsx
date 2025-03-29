"use client";
import "./GoldValueCalculator.css";
import { useState, useEffect } from "react";

const GoldValueCalculator = () => {
    const [goldPurity, setGoldPurity] = useState<number>(22);
    const [goldWeight, setGoldWeight] = useState<number>(20);
    const GOLD_PRICE_PER_GRAM = 9089;

    // Initialize slider positions
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
        initializeSlider("#gold-weight-slider", 20);
    }, []);

    const calculateApproxValue = () => {
        const purityRatio = goldPurity / 24;
        return (purityRatio * goldWeight * GOLD_PRICE_PER_GRAM).toFixed(2);
    };

    const updateSliderStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        e.target.style.setProperty("--progress", `${progress}%`);
    };

    return (
        <section className="business-loan-section personal-loan">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-content">
                                <div className="section-text">
                                    <h2
                                        className="title"
                                        style={{
                                  
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Check the value of your jewellery
                                    </h2>
                                    <p>
                                        Change the value of Karat and Weight to
                                        see the approx. value of your jewellery
                                    </p>
                                </div>
                                <form action="#">
                                    <div className="form-group">
                                        {/* Gold Purity Section */}
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    Gold Purity:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    id="personal-amount"
                                                    value={`${goldPurity}K`}
                                                />
                                            </h4>
                                        </div>
                                        <input
                                            type="range"
                                            min="18"
                                            max="24"
                                            value={goldPurity}
                                            onChange={(e) => {
                                                setGoldPurity(
                                                    Number(e.target.value)
                                                );
                                                updateSliderStyle(e);
                                            }}
                                            className="form-range orange-slider"
                                            id="gold-purity-slider"
                                        />
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <p>18K</p>
                                            <p>24K</p>
                                        </div>

                                        {/* Gold Weight Section */}
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    Gold Weight:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    id="personal-amount-inter"
                                                    value={`${goldWeight}g`}
                                                />
                                            </h4>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="60"
                                            value={goldWeight}
                                            onChange={(e) => {
                                                setGoldWeight(
                                                    Number(e.target.value)
                                                );
                                                updateSliderStyle(e);
                                            }}
                                            style={{
                                                fontFamily:
                                                    "'Roboto', 'sans-serif'",
                                                fontSize: "50px",
                                            }}
                                            className="form-range orange-slider"
                                            id="gold-weight-slider"
                                        />
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <p>0</p>
                                            <p>50</p>
                                        </div>

                                        {/* Approx Value Section */}
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center resp-val">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: "500",
                                                    }}
                                                    className="resp-val-label"
                                                >
                                                    Approx Value:&nbsp;
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    id="approx-value"
                                                    className="resp-val-input"
                                                    style={{
                                                        
                                                        fontSize: "37px",
                                                    }}
                                                    value={`₹${calculateApproxValue()}`}
                                                />
                                            </h4>
                                        </div>
                                        <div className="range-amount">
                                            <p style={{ fontSize: "12px" }}>
                                                *This value might get changed
                                                upon physical verification
                                            </p>
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
};

export default GoldValueCalculator;
