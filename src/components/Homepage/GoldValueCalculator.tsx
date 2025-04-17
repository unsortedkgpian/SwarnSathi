"use client";
import "./GoldValueCalculator.css";
import { useState, useEffect } from "react";

interface GoldPrices {
    timestamp: number;
    metal: string;
    currency: string;
    exchange: string;
    symbol: string;
    prev_close_price: number;
    open_price: number;
    low_price: number;
    high_price: number;
    open_time: number;
    price: number;
    ch: number;
    chp: number;
    ask: number;
    bid: number;
    price_gram_24k: number;
    price_gram_22k: number;
    price_gram_21k: number;
    price_gram_20k: number;
    price_gram_18k: number;
    price_gram_16k: number;
    price_gram_14k: number;
    price_gram_10k: number;
}

const GoldValueCalculator = () => {
    const [goldPurity, setGoldPurity] = useState<number>(22);
    const [goldWeight, setGoldWeight] = useState<number>(20);
    const [goldPrices, setGoldPrices] = useState<GoldPrices | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Valid purity values (10, 14, 16, 18, 20, 21, 22, 24)
    const validPurities = [10, 14, 16, 18, 20, 21, 22, 24];

    // Fetch gold prices from API
    useEffect(() => {
        const fetchGoldPrices = async () => {
            setIsLoading(true);
            
            try {
                const myHeaders = new Headers();
                myHeaders.append("x-access-token", "goldapi-41bk03e19m9jvgefg-io");
                myHeaders.append("Content-Type", "application/json");

                const requestOptions: RequestInit = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                const response = await fetch("https://www.goldapi.io/api/XAU/INR", requestOptions);
                
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                
                const result = await response.json();
                setGoldPrices(result);
                setError(null);
            } catch (error) {
                console.error('Error fetching gold prices:', error);
                setError('Failed to load gold prices. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchGoldPrices();
    }, []);

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

    const getPriceForPurity = (purity: number): number => {
        if (!goldPrices) return 0;
        
        switch (purity) {
            case 24: return goldPrices.price_gram_24k;
            case 22: return goldPrices.price_gram_22k;
            case 21: return goldPrices.price_gram_21k;
            case 20: return goldPrices.price_gram_20k;
            case 18: return goldPrices.price_gram_18k;
            case 16: return goldPrices.price_gram_16k;
            case 14: return goldPrices.price_gram_14k;
            case 10: return goldPrices.price_gram_10k;
            default: {
                // For purities not provided directly by API, interpolate between closest values
                if (purity > 22 && purity < 24) {
                    return goldPrices.price_gram_22k + ((purity - 22) / 2) * (goldPrices.price_gram_24k - goldPrices.price_gram_22k);
                } else if (purity > 21 && purity < 22) {
                    return goldPrices.price_gram_21k + (purity - 21) * (goldPrices.price_gram_22k - goldPrices.price_gram_21k);
                } else if (purity > 20 && purity < 21) {
                    return goldPrices.price_gram_20k + (purity - 20) * (goldPrices.price_gram_21k - goldPrices.price_gram_20k);
                } else if (purity > 18 && purity < 20) {
                    return goldPrices.price_gram_18k + ((purity - 18) / 2) * (goldPrices.price_gram_20k - goldPrices.price_gram_18k);
                } else if (purity > 16 && purity < 18) {
                    return goldPrices.price_gram_16k + ((purity - 16) / 2) * (goldPrices.price_gram_18k - goldPrices.price_gram_16k);
                } else if (purity > 14 && purity < 16) {
                    return goldPrices.price_gram_14k + ((purity - 14) / 2) * (goldPrices.price_gram_16k - goldPrices.price_gram_14k);
                } else if (purity > 10 && purity < 14) {
                    return goldPrices.price_gram_10k + ((purity - 10) / 4) * (goldPrices.price_gram_14k - goldPrices.price_gram_10k);
                } else {
                    return goldPrices.price_gram_24k * (purity / 24);
                }
            }
        }
    };

    const calculateApproxValue = () => {
        const pricePerGram = getPriceForPurity(goldPurity);
        return Math.round(goldWeight * pricePerGram).toString();
    };

    const yourGoldValue = () => {
        const goldValue = parseFloat(calculateApproxValue());
        return Math.round(goldValue * 0.75).toString();
    };

    const updateSliderStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        const progress = ((value - min) / (max - min)) * 100;
        e.target.style.setProperty("--progress", `${progress}%`);
    };

    const handlePurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        updateSliderStyle(e);
        
        // Find closest valid purity value
        const closest = validPurities.reduce((prev, curr) => {
            return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        });
        
        setGoldPurity(closest);
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
                                    {error && <p className="text-danger small">{error}</p>}
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
                                            {validPurities.map(purity => (
                                                <option key={purity} value={purity} />
                                            ))}
                                        </datalist>
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <p>10K</p>
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
                                            <p>60</p>
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
                                                    id="approx-value"
                                                    className="resp-val-input"
                                                    value={isLoading ? "Loading..." : `₹${calculateApproxValue()}`}
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
                                                    id="approx-value"
                                                    className="resp-val-input"
                                                    value={isLoading ? "Loading..." : `₹${yourGoldValue()}`}
                                                />
                                            </h4>
                                        </div>
                                        <div className="range-amount">
                                            <p style={{ fontSize: "12px" }}>
                                                *This value might get changed
                                                upon physical verification
                                            </p>
                                            {!isLoading && <p style={{ fontSize: "12px" }}>
                                                *Using real-time gold prices from goldapi.io
                                            </p>}
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
