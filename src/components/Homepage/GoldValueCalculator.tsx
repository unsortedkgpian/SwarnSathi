'use client'

// "use client";
import "./GoldValueCalculator.css";

// "use client";

import { useState } from "react";

const GoldValueCalculator = () => {
    const [goldPurity, setGoldPurity] = useState<number>(22);
    const [goldWeight, setGoldWeight] = useState<number>(20);
    const GOLD_PRICE_PER_GRAM = 5000;

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
                                        style={{ fontWeight: 500 }}
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
                                                        fontWeight: "bold",
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
                                                        fontWeight: "bold",
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
                                            max="50"
                                            value={goldWeight}
                                            onChange={(e) => {
                                                setGoldWeight(
                                                    Number(e.target.value)
                                                );
                                                updateSliderStyle(e);
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
                                                        fontWeight: "bold",
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
                                                        fontFamily:
                                                            "'Roboto', 'sans-serif'",
                                                        fontSize: "40px",
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


// import { useState } from "react";

// const GoldValueCalculator = () => {
//     const [goldPurity, setGoldPurity] = useState<number>(22);
//     const [goldWeight, setGoldWeight] = useState<number>(20);
//     const GOLD_PRICE_PER_GRAM = 5000;

//     const calculateApproxValue = () => {
//         const purityRatio = goldPurity / 24;
//         return (purityRatio * goldWeight * GOLD_PRICE_PER_GRAM).toFixed(2);
//     };

//     const handleGoldPurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = Number(e.target.value);
//         setGoldPurity(value);
//         e.target.style.setProperty(
//             "--progress",
//             `${((value - 18) / (24 - 18)) * 100}%`
//         );
//     };

//     const handleGoldWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = Number(e.target.value);
//         setGoldWeight(value);
//         e.target.style.setProperty("--progress", `${(value / 50) * 100}%`);
//     };

//     return (
//         <section className="business-loan-section personal-loan">
//             <div className="overlay">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="main-content">
//                                 <div className="section-text">
//                                     <h2
//                                         className="title"
//                                         style={{ fontWeight: 500 }}
//                                     >
//                                         Check the value of your jewellery
//                                     </h2>
//                                     <p>
//                                         Change the value of Karat and Weight to
//                                         see the approx. value of your jewellery
//                                     </p>
//                                 </div>
//                                 <form action="#">
//                                     <div className="form-group">
//                                         {/* Gold Purity Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Gold Purity:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount"
//                                                     value={`${goldPurity}K`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="18"
//                                             max="24"
//                                             value={goldPurity}
//                                             onChange={handleGoldPurityChange}
//                                             className="form-range orange-slider"
//                                             id="personal-slide"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>18K</p>
//                                             <p>24K</p>
//                                         </div>

//                                         {/* Gold Weight Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Gold Weight:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount-inter"
//                                                     value={`${goldWeight}g`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="0"
//                                             max="50"
//                                             value={goldWeight}
//                                             onChange={handleGoldWeightChange}
//                                             className="form-range orange-slider"
//                                             id="personal-slide-inter"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>0</p>
//                                             <p>50</p>
//                                         </div>

//                                         {/* Approx Value Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center resp-val">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                     className="resp-val-label"
//                                                 >
//                                                     Approx Value:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="approx-value"
//                                                     className="resp-val-input"
//                                                     style={{
//                                                         fontFamily:
//                                                             "'Roboto', 'sans-serif'",
//                                                         fontSize: "40px",
//                                                     }}
//                                                     value={`₹${calculateApproxValue()}`}
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

// export default GoldValueCalculator;



// "use client";

// import { useState } from "react";

// const GoldValueCalculator = () => {
//     const [goldPurity, setGoldPurity] = useState<number>(22);
//     const [goldWeight, setGoldWeight] = useState<number>(20);
//     const GOLD_PRICE_PER_GRAM = 5000;

//     const calculateApproxValue = () => {
//         const purityRatio = goldPurity / 24;
//         return (purityRatio * goldWeight * GOLD_PRICE_PER_GRAM).toFixed(2);
//     };

//     return (
//         <section className="business-loan-section personal-loan">
//             <div className="overlay">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="main-content">
//                                 <div className="section-text">
//                                     <h2
//                                         className="title"
//                                         style={{ fontWeight: 500 }}
//                                     >
//                                         Check the value of your jewellery
//                                     </h2>
//                                     <p>
//                                         Change the value of Karat and Weight to
//                                         see the approx. value of your jewellery
//                                     </p>
//                                 </div>
//                                 <form action="#">
//                                     <div className="form-group">
//                                         {/* Gold Purity Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Gold Purity:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount"
//                                                     value={`${goldPurity}K`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="18"
//                                             max="24"
//                                             value={goldPurity}
//                                             onChange={(e) =>
//                                                 setGoldPurity(
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="form-range orange-slider"
//                                             id="personal-slide"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>18K</p>
//                                             <p>24K</p>
//                                         </div>

//                                         {/* Gold Weight Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Gold Weight:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount-inter"
//                                                     value={`${goldWeight}g`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="0"
//                                             max="50"
//                                             value={goldWeight}
//                                             onChange={(e) =>
//                                                 setGoldWeight(
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="form-range orange-slider"
//                                             id="personal-slide-inter"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>0</p>
//                                             <p>50</p>
//                                         </div>

//                                         {/* Approx Value Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center resp-val">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                     className="resp-val-label"
//                                                 >
//                                                     Approx Value:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="approx-value"
//                                                     className="resp-val-input"
//                                                     style={{
//                                                         fontFamily:
//                                                             "'Roboto', 'sans-serif'",
//                                                         fontSize: "40px",
//                                                     }}
//                                                     value={`₹${calculateApproxValue()}`}
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
//             <style jsx>{`
//                 .orange-slider::-webkit-slider-thumb {
//                     background: #fc9f3e;
//                 }
//                 .orange-slider::-moz-range-thumb {
//                     // background: #fc9f3e;
//                 }
//                 .orange-slider::-webkit-slider-runnable-track {
//                     // background: #fc9f3e;
//                     height: 4px;
//                     border-radius: 2px;
//                 }
//                 .orange-slider::-moz-range-track {
//                     // background: #fc9f3e;
//                     height: 4px;
//                     border-radius: 2px;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default GoldValueCalculator;

// import { useState } from "react";

// const GoldValueCalculator = () => {
//     const [goldPurity, setGoldPurity] = useState<number>(22);
//     const [goldWeight, setGoldWeight] = useState<number>(20);

//     // Placeholder gold price (adjust according to your needs)
//     const GOLD_PRICE_PER_GRAM = 5000; // Example value in your currency

//     const calculateApproxValue = () => {
//         const purityRatio = goldPurity / 24;
//         return (purityRatio * goldWeight * GOLD_PRICE_PER_GRAM).toFixed(2);
//     };

//     return (
//         <section className="business-loan-section personal-loan">
//             <div className="overlay">
//                 <div className="container">
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
//                                 <form action="#">
//                                     <div className="form-group">
//                                         {/* Gold Purity Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                 >
//                                                     Gold Purity:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount"
//                                                     value={`${goldPurity}K`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="18"
//                                             max="24"
//                                             value={goldPurity}
//                                             onChange={(e) =>
//                                                 setGoldPurity(
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="form-range"
//                                             id="personal-slide"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>18K</p>
//                                             <p>24K</p>
//                                         </div>

//                                         {/* Gold Weight Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                 >
//                                                     Gold Weight:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="personal-amount-inter"
//                                                     value={`${goldWeight}g`}
//                                                 />
//                                             </h4>
//                                         </div>
//                                         <input
//                                             type="range"
//                                             min="0"
//                                             max="50"
//                                             value={goldWeight}
//                                             onChange={(e) =>
//                                                 setGoldWeight(
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="form-range"
//                                             id="personal-slide-inter"
//                                         />
//                                         <div
//                                             className="d-flex justify-content-between"
//                                             style={{ marginTop: "10px" }}
//                                         >
//                                             <p>0</p>
//                                             <p>50</p>
//                                         </div>

//                                         {/* Approx Value Section */}
//                                         <div className="range-amount">
//                                             <h4 className="d-flex align-items-center justify-content-center resp-val">
//                                                 <label
//                                                     style={{
//                                                         fontSize: "30px",
//                                                         fontWeight: 100,
//                                                     }}
//                                                     className="resp-val-label"
//                                                 >
//                                                     Approx Value:&nbsp;
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     disabled
//                                                     id="approx-value"
//                                                     className="resp-val-input"
//                                                     style={{
//                                                         fontFamily:
//                                                             "'Roboto', 'sans-serif'",
//                                                         fontSize: "40px",
//                                                     }}
//                                                     value={`₹${calculateApproxValue()}`} // Update currency symbol as needed
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

// export default GoldValueCalculator;


// import { useState } from 'react';

// const GoldValueCalculator = () => {
//   const [goldPurity, setGoldPurity] = useState<number>(22);
//   const [goldWeight, setGoldWeight] = useState<number>(20);
//   const GOLD_PRICE_PER_GRAM = 5000;

//   const calculateApproxValue = () => {
//     const purityRatio = goldPurity / 24;
//     return (purityRatio * goldWeight * GOLD_PRICE_PER_GRAM).toFixed(2);
//   };

//   return (
//     <section className="business-loan-section personal-loan">
//       <div className="overlay">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="main-content">
//                 <div className="section-text">
//                   <h2 className="title" style={{ color: '#fc9f3e', fontWeight: 600 }}>
//                     Check the value of your jewellery
//                   </h2>
//                   <p style={{ color: '#fc9f3e' }}>
//                     Change the value of Karat and Weight to see the approx. value of your jewellery
//                   </p>
//                 </div>
//                 <form action="#">
//                   <div className="form-group">
//                     {/* Gold Purity Section */}
//                     <div className="range-amount">
//                       <h4 className="d-flex align-items-center justify-content-center" 
//                           style={{ color: '#fc9f3e', fontWeight: 500 }}>
//                         <label style={{ fontSize: '30px', marginRight: '10px' }}>
//                           Gold Purity:
//                         </label>
//                         <input 
//                           type="text" 
//                           disabled 
//                           value={`${goldPurity}K`}
//                           style={{ 
//                             fontSize: '30px',
//                             color: '#fc9f3e',
//                             fontWeight: 'bold',
//                             border: 'none',
//                             background: 'transparent'
//                           }}
//                         />
//                       </h4>
//                     </div>
//                     <input
//                       type="range"
//                       min="18"
//                       max="24"
//                       value={goldPurity}
//                       onChange={(e) => setGoldPurity(Number(e.target.value))}
//                       className="gold-slider"
//                     />
//                     <div className="d-flex justify-content-between" style={{ marginTop: '10px', color: '#fc9f3e' }}>
//                       <p>18K</p>
//                       <p>24K</p>
//                     </div>

//                     {/* Gold Weight Section */}
//                     <div className="range-amount">
//                       <h4 className="d-flex align-items-center justify-content-center" 
//                           style={{ color: '#fc9f3e', fontWeight: 500 }}>
//                         <label style={{ fontSize: '30px', marginRight: '10px' }}>
//                           Gold Weight:
//                         </label>
//                         <input 
//                           type="text" 
//                           disabled 
//                           value={`${goldWeight}g`}
//                           style={{ 
//                             fontSize: '30px',
//                             color: '#fc9f3e',
//                             fontWeight: 'bold',
//                             border: 'none',
//                             background: 'transparent'
//                           }}
//                         />
//                       </h4>
//                     </div>
//                     <input
//                       type="range"
//                       min="0"
//                       max="50"
//                       value={goldWeight}
//                       onChange={(e) => setGoldWeight(Number(e.target.value))}
//                       className="gold-slider"
//                     />
//                     <div className="d-flex justify-content-between" style={{ marginTop: '10px', color: '#fc9f3e' }}>
//                       <p>0</p>
//                       <p>50</p>
//                     </div>

//                     {/* Approx Value Section */}
//                     <div className="range-amount">
//                       <h4 className="d-flex align-items-center justify-content-center resp-val" 
//                           style={{ color: '#fc9f3e', fontWeight: 500 }}>
//                         <label style={{ fontSize: '30px', marginRight: '10px' }}>
//                           Approx Value:
//                         </label>
//                         <input
//                           type="text"
//                           disabled
//                           value={`₹${calculateApproxValue()}`}
//                           style={{ 
//                             fontFamily: "'Roboto', 'sans-serif'",
//                             fontSize: '40px',
//                             color: '#fc9f3e',
//                             fontWeight: 'bold',
//                             border: 'none',
//                             background: 'transparent'
//                           }}
//                         />
//                       </h4>
//                     </div>
//                     <div className="range-amount">
//                       <p style={{ fontSize: '12px', color: '#fc9f3e' }}>
//                         *This value might get changed upon physical verification
//                       </p>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .gold-slider {
//           width: 100%;
//           height: 4px;
//           accent-color: #fc9f3e;
//           }
          
//           .gold-slider::-webkit-slider-thumb {
//             width: 20px;
//             border:2px solid white;
//           height: 20px;
//           background: #fc9f3e;
//           border-radius: 50%;
//         }

//         .title {
//           font-weight: 600 !important;
//           letter-spacing: 0.5px;
//         }

//         input[type="text"] {
//           max-width: 200px;
//           text-align: center;
//         }

//         .form-group {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 30px 0;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default GoldValueCalculator;