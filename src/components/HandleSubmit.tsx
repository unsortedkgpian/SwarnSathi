"use client";

import React, { useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

interface User {
  id: string;
  name: string;
  phone: string;
  role: string;
  email?: string;

}

interface ModalProps {
    show: boolean;
    onClose: () => void;
    loanType?: string;
    user?: User | null;
}

interface FormData {
    name: string;
    phone: string;
    pincode: string;
    address: string;
    qualityOfGold: number;
    quantityOfGold: number;
}

const ModalComponent: React.FC<ModalProps> = ({
    show,
    onClose,
    loanType = "gold-loan",
    user ,
}) => {
    const pathname = usePathname();
    const url = process.env.NEXT_PUBLIC_API_URL;

    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        pincode: "",
        address: "",
        qualityOfGold: 0,
        quantityOfGold: 0,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError("Please enter your name");
            return;
        }

        if (!/^\d{6}$/.test(formData.pincode)) {
            setError("Please enter a valid 6-digit pincode");
            return;
        }

        if (formData.qualityOfGold <= 0 || formData.qualityOfGold > 24) {
            setError("Please enter valid gold quality (1-24 Karat)");
            return;
        }

        if (formData.quantityOfGold <= 0) {
            setError("Please enter valid gold quantity");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            let los_url = 'http://localhost:3000'
            
            // const response = await axios.post(`${los_url}/api/applications`, {
            //     name: formData.name,
            //     phone_number: user.phone,
            //     type:"SWARN_SATHI",
            //     crm_id:user.phone,
            //     pincode: formData.pincode,
            //     address: formData.address,
            //     ss_details:{
            //     goldQuality: Number(formData.qualityOfGold),
            //     goldAmount: Number(formData.quantityOfGold),
            //     }
            // });
            const response = await axios.post(`${url}/api/applications`, {
                name: formData.name,
                phone: formData.phone,
                pincode: formData.pincode,
                address: formData.address,
                qualityOfGold: Number(formData.qualityOfGold),
                quantityOfGold: Number(formData.quantityOfGold),
            });

            if (response.status==201) {
                setSuccess("Loan application submitted successfully! Redirecting...");
                
                // Reset form
                setFormData({
                    name: "",
                    phone: "",
                    pincode: "",
                    address: "",
                    qualityOfGold: 0,
                    quantityOfGold: 0,
                });

                setTimeout(() => {
                    window.location.href = "/";
                }, 3000);
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 
                           err.message || 
                           "Submission failed. Please try again.";
        setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    if (!show) return null;

    return (
        <>
            <div 
                className="modal-backdrop fade show" 
                style={{ 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 99999
                }}
            />
            <div 
                className="modal fade show" 
                style={{
                    display: 'block',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 100000,
                    overflow: 'auto'
                }}
                role="dialog"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    style={{ 
                        transform: 'none',
                        margin: '1.75rem auto'
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '1rem',
                                    zIndex: 1
                                }}
                            />

                            <section
                                className="sign-in-up register"
                                style={{ marginTop: 0 }}
                            >
                                <div
                                    className="overlay"
                                    style={{ padding: "10px 10px 20px 20px" }}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="section-header">
                                                <h5 className="sub-title">
                                                    The Power of Financial Freedom
                                                </h5>
                                                <h2 className="title">
                                                    Gold Loan Application
                                                </h2>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-content">
                                                    {error && (
                                                        <div className="alert alert-danger">
                                                            {error}
                                                        </div>
                                                    )}
                                                    {success && (
                                                        <div className="alert alert-success">
                                                            {success}
                                                        </div>
                                                    )}

                                                    <form onSubmit={handleSubmit}>
                                                        <div className="single-input">
                                                            <label>Full Name</label>
                                                            <input
                                                                type="text"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                name="name"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>Mobile Number</label>
                                                            <input
                                                                type="tel"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                name="phone"
                                                                required
                                                                maxLength={10}
                                                                pattern="[6-9]{1}[0-9]{9}"
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>Pincode</label>
                                                            <input
                                                                type="text"
                                                                value={formData.pincode}
                                                                onChange={handleChange}
                                                                name="pincode"
                                                                required
                                                                maxLength={6}
                                                                pattern="\d{6}"
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>Address</label>
                                                            <input
                                                                type="text"
                                                                value={formData.address}
                                                                onChange={handleChange}
                                                                name="address"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>Quality of Gold (in Karat)</label>
                                                            <input
                                                                type="number"
                                                                value={formData.qualityOfGold}
                                                                onChange={handleChange}
                                                                name="qualityOfGold"
                                                                min="1"
                                                                max="24"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="single-input">
                                                            <label>Quantity of Gold (in grams)</label>
                                                            <input
                                                                type="number"
                                                                value={formData.quantityOfGold}
                                                                onChange={handleChange}
                                                                name="quantityOfGold"
                                                                min="1"
                                                                max="100"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="btn-area submitmodal">
                                                            <button
                                                                type="submit"
                                                                className="cmn-btn"
                                                                disabled={loading}
                                                            >
                                                                {loading ? "Submitting..." : "Apply Now"}
                                                            </button>
                                                        </div>
                                                    </form> 
                                                </div>
                                            </div>

                                            <div className="col-lg-6 d-none d-sm-block">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src="/images/sign-in-up-bg.png"
                                                        className="imagewel"
                                                        alt="welcome"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalComponent;