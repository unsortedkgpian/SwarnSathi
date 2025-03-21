// import React, { useState } from "react";

// const BusinessLoanSection: React.FC = () => {
//     const [goldPurity, setGoldPurity] = useState(66.67);
//     const [goldWeight, setGoldWeight] = useState(40);
//     const [approxValue, setApproxValue] = useState(0);

//     const handleGoldPurityChange = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         const value = parseFloat(event.target.value);
//         setGoldPurity(value);
//         calculateApproxValue(value, goldWeight);
//     };

//     const handleGoldWeightChange = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         const value = parseFloat(event.target.value);
//         setGoldWeight(value);
//         calculateApproxValue(goldPurity, value);
//     };

//     const calculateApproxValue = (purity: number, weight: number) => {
//         // Example calculation logic
//         const value = (purity / 100) * weight * 5000; // Assuming some base rate
//         setApproxValue(value);
//     };

//     return (
//         <section className="business-loan-section personal-loan">
//             <div className="overlay">
//                 <div
//                     className="container wow fadeInUp"
//                     style={{ visibility: "visible", animationName: "fadeInUp" }}
//                 >
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="main-content">
//                                 <div className="section-text">
//                                     <h2 className="title">
//                                         Check the value of your jewellery
//                                     </h2>
//                                     <p>
//                                         Change the value of Karat and Weight to
//                                         see the approx. value of your jewellery
//                                     </p>
//                                 </div>
//                                 <form>
//                                     <div className="form-group">
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                 >
//                                                     Gold Purity&nbsp;:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     value={`${goldPurity.toFixed(
//                                                         2
//                                                     )}K`}
//                                                     id="personal-amount"
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="18"
//                                             max="24"
//                                             value={goldPurity}
//                                             onChange={handleGoldPurityChange}
//                                             className="ui-slider"
//                                             id="personal-slide"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>18K</p>
//                                             <p>24K</p>
//                                         </div>
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                 >
//                                                     Gold Weight&nbsp;:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     value={`${goldWeight}g`}
//                                                     id="personal-amount-inter"
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="0"
//                                             max="50"
//                                             value={goldWeight}
//                                             onChange={handleGoldWeightChange}
//                                             className="ui-slider"
//                                             id="personal-slide-inter"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>0</p>
//                                             <p>50</p>
//                                         </div>
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center resp-val">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                     className="resp-val-label"
//                                                 >
//                                                     Approx Value&nbsp;:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     value={`₹${approxValue.toFixed(
//                                                         2
//                                                     )}`}
//                                                     id="approx-value"
//                                                     className="resp-val-input"
//                                                     style={{
//                                                         fontFamily:
//                                                             "'Roboto','sans-serif'",
//                                                         fontSize: "40px",
//                                                     }}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <div className="range-amount">
//                                             <p style={{ fontSize: "12px" }}>
//                                                 *This value might get changed
//                                                 upon physical verification
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BusinessLoanSection;


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