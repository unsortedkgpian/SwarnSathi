import React, { useState } from "react";
// import './BusinessLoanSection.css'
import '../app/globals.css'

const BusinessLoanSection: React.FC = () => {
    const [purity, setPurity] = useState<number>(22);
    const [weight, setWeight] = useState<number>(20);

    const calculateApproxValue = () => {
        const pricePerGram24K = 5000; // Update this with actual gold price
        const purityPercentage = purity / 24;
        return (purityPercentage * weight * pricePerGram24K).toFixed(2);
    };

    return (
        <section className="business-loan-section personal-loan flex ">
            <div className="overlay">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-content">
                                <div className="section-text">
                                    <h2 className="title">
                                        Check the value of your jewellery
                                    </h2>
                                    <p>
                                        Change the value of Karat and Weight to
                                        see the approx. value of your jewellery
                                    </p>
                                </div>
                                <form action="#">
                                    <div className="form-group">
                                        {/* Gold Purity Slider */}
                                        <div className="range-amount">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: 100,
                                                    }}
                                                >
                                                    Gold Purity:{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={`${purity}K`}
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: 100,
                                                    }}
                                                />
                                            </h4>
                                        </div>
                                        <div
                                            className="slider-container"
                                            style={{
                                                position: "relative",
                                                height: "20px",
                                            }}
                                        >
                                            <input
                                                type="range"
                                                min="18"
                                                max="24"
                                                step="1"
                                                value={purity}
                                                onChange={(e) =>
                                                    setPurity(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    opacity: 0,
                                                    height: "100%",
                                                    cursor: "pointer",
                                                    zIndex: 2,
                                                }}
                                            />
                                            <div className="ui-slider ui-corner-all ui-slider-horizontal">
                                                <div
                                                    className="ui-slider-range"
                                                    style={{
                                                        width: `${
                                                            ((purity - 18) /
                                                                6) *
                                                            100
                                                        }%`,
                                                    }}
                                                />
                                                <span
                                                    className="ui-slider-handle"
                                                    style={{
                                                        left: `${
                                                            ((purity - 18) /
                                                                6) *
                                                            100
                                                        }%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span>18K</span>
                                            <span>24K</span>
                                        </div>

                                        {/* Gold Weight Slider */}
                                        <div className="range-amount mt-4">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: 100,
                                                    }}
                                                >
                                                    Gold Weight:{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={`${weight}g`}
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: 100,
                                                    }}
                                                />
                                            </h4>
                                        </div>
                                        <div
                                            className="slider-container"
                                            style={{
                                                position: "relative",
                                                height: "20px",
                                            }}
                                        >
                                            <input
                                                type="range"
                                                min="0"
                                                max="50"
                                                value={weight}
                                                onChange={(e) =>
                                                    setWeight(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    opacity: 0,
                                                    height: "100%",
                                                    cursor: "pointer",
                                                    zIndex: 2,
                                                }}
                                            />
                                            <div className="ui-slider ui-corner-all ui-slider-horizontal">
                                                <div
                                                    className="ui-slider-range"
                                                    style={{
                                                        width: `${
                                                            (weight / 50) * 100
                                                        }%`,
                                                    }}
                                                />
                                                <span
                                                    className="ui-slider-handle"
                                                    style={{
                                                        left: `${
                                                            (weight / 50) * 100
                                                        }%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span>0</span>
                                            <span>50</span>
                                        </div>

                                        {/* Approx Value Display */}
                                        <div className="range-amount mt-4">
                                            <h4 className="d-flex align-items-center justify-content-center">
                                                <label
                                                    style={{
                                                        fontSize: "30px",
                                                        fontWeight: 100,
                                                    }}
                                                >
                                                    Approx Value:{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={`₹${calculateApproxValue()}`}
                                                    style={{
                                                        fontFamily:
                                                            "'Roboto', sans-serif",
                                                        fontSize: "40px",
                                                        fontWeight: "bold",
                                                        color: "#333",
                                                    }}
                                                />
                                            </h4>
                                        </div>
                                        <div className="text-center mt-2">
                                            <small
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#666",
                                                }}
                                            >
                                                *This value might get changed
                                                upon physical verification
                                            </small>
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

export default BusinessLoanSection;