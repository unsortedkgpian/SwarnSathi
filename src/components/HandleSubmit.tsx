"use client";

import React, { useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import ThankYou from "./thankyou";

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

// enum GoldType {
//   GOLD_18K
//   GOLD_20K
//   GOLD_22K
//   NO_HALLMARK
// }


interface FormData {
  name: string;
  phone: string;
  pincode: string;
  qualityOfGold?: string;
  quantityOfGold?: number;
}

const ModalComponent: React.FC<ModalProps> = ({
  show,
  onClose,
  loanType = "gold-loan",
  user,
}) => {
  const pathname = usePathname();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl = "http://localhost:4000";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    pincode: "",
    qualityOfGold: "",
    quantityOfGold: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [leadId, setLeadId] = useState(null);
  const [genOtp, setGenOtp] = useState("");
  const [isOtpSignIn, setIsOtpSignIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sendOtpLogin = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!formData.pincode || formData.pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");
    console.log("Checking verification for:", phoneNumber);
    try {
      const verifyResponse = await axios.post(`${url}/api/lead/check-pincode`, {
        phone: phoneNumber,
        pincode: formData.pincode,
      });
      if (!verifyResponse.data.success) {
        setError(verifyResponse.data.message || "Pincode is not verified. Please contact support.");
        setIsLoading(false);
        return;
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
      setIsLoading(false);
      return;
    }

    try {
      // 1. Check if lead is verified
      let los_url = 'http://localhost:4000'

      let lead_url = 'https://lead.regalfintech.com/api/leads/new'

      // 2. Proceed to send OTP if verified
      const otpResponse = await axios.post(`/api/send-otp`, {
        phone: phoneNumber,
        pincode: formData.pincode,
        loanType: "gold-loan",
      });

      console.log("OTP response:", otpResponse.data);

      if (otpResponse.data.success) {
        setSuccess("OTP sent successfully to your mobile number");
        setOtpSent(true);

        if (otpResponse.data.genOtp) {
          setGenOtp(otpResponse.data.genOtp);
          console.log("OTP received for testing:", otpResponse.data.genOtp);
        }
      } else {
        setError(otpResponse.data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error: any) {
      console.error("Error during OTP process:", error);
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const verifyOtpLogin = async () => {
    if (!phoneNumber || !otp) {
      setError("Please enter both phone number and OTP");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("Verifying OTP:", { phone: phoneNumber, otp });
      const response = await axios.post(`/api/verify-otp`, {
        phoneNumber,
        otp: otp
      });

      console.log("OTP verification response:", response.data);

      if (response.data.success) {
        // Store the JWT token in localStorage and cookies

        // Store user info if available
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        // Show success message
        setSuccess("OTP verification Successfully ");
        setIsOtpSignIn(true);

      } else {
        setError(response.data.message || "OTP verification failed. Please try again.");
      }
    } catch (error: any) {
      console.error("OTP verification failed", error);
      setError(error.response?.data?.message || "OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    if (name == "phone") {
      setPhoneNumber(e.target.value);
    }
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

    try {
      setLoading(true);
      setError(null);

      
      let lead_url = 'https://lead.regalfintech.com/api/leads/new';
      const response = await axios.post(`https://lead.regalfintech.com/api/leads/new`, {
        name: formData.name,
        phone: formData.phone,
        loanType: "gold",
        pincode: formData.pincode,
        // goldQuality:formData.qualityOfGold,
        goldWeight: parseFloat(formData.quantityOfGold.toString()),
      });
      console.log("data:", response.data);



      if (response.status === 201) {
        setSuccess("Loan application submitted successfully!");
        setLeadId(response.data.leadId);
        await axios.post(`${url}/api/lead`, {
        leadId:response.data.leadId,
        name: formData.name,
        phone: formData.phone,
        pincode: formData.pincode,
        qualityOfGold: formData.qualityOfGold,
        quantityOfGold: Number(formData.quantityOfGold),
      });

      

        //fetchLeadId();

        setShowThankYou(true);

        // Reset form
        setFormData({
          name: "",
          phone: "",
          pincode: "",
          qualityOfGold: "",
          quantityOfGold: 0,
        });
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 99999,
        }}
      />

      <div
        className="modal fade show"
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 100000,
          overflow: "auto",
        }}
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          style={{
            transform: "none",
            margin: "1.75rem auto",
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
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                  zIndex: 1,
                }}
              />

              {showThankYou ? (
                <ThankYou leadId={leadId} />
              ) : (
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
                          </h5>
                          <h2 className="title" style={{ color: '#DAA520' }}>Apply For Gold Loan</h2>

                        </div>

                        <div className="col-lg-6">
                          <div className="form-content">
                            {error && (
                              <div className="alert alert-danger">{error}</div>
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
                                <label>Quantity of Gold (in grams)</label>
                                <input
                                  type="number"
                                  value={formData.quantityOfGold}
                                  onChange={handleChange}
                                  name="quantityOfGold"
                                  min="0"
                                  max="100"
                                  required
                                />
                              </div>



                              <div className="single-input">
                                <label>Select Gold Type (in Karat)</label>
                                <div className="button-group">
                                  {["18", "20", "22", "No Hallmark"].map(
                                    (type) => (
                                      <button
                                        key={type}
                                        type="button"
                                        className={
                                          formData.qualityOfGold === type
                                            ? "selected"
                                            : ""
                                        }
                                        onClick={() =>
                                          setFormData({
                                            ...formData,
                                            qualityOfGold: type,
                                          })
                                        }
                                      >
                                        {type === "No Hallmark"
                                          ? type
                                          : `${type}K`}
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>

                              {otpSent && (
                                <div className="single-input mb-4">
                                  <label
                                    htmlFor="otpverifyvalue"
                                    className="form-label"
                                  >
                                    Enter OTP to verify
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="otpverifyvalue"
                                    autoComplete="off"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                  />
                                </div>
                              )}

                              {/* <div className="btn-area submitmodal">
                                <button
                                  type="submit"
                                  className="cmn-btn"
                                  disabled={loading}
                                >
                                  {loading ? "Submitting..." : "Apply Now"}
                                </button>
                              </div> */}
                              <div className="btn-area submitmodal">
                                {isOtpSignIn ? (
                                  <button
                                    className="cmn-btn"
                                    type="submit"
                                    // style={{
                                    //     background: "#d18a2c",
                                    //     color: "#fff",
                                    // }}
                                    disabled={isLoading}
                                  >
                                    {isLoading ? 'Submitting...' : 'Apply Now'}
                                  </button>
                                ) : (
                                  <>
                                    {!otpSent ? (
                                      <button
                                        type="button"
                                        className="cmn-btn"
                                        onClick={sendOtpLogin}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? 'Sending...' : 'Send OTP'}
                                      </button>
                                    ) : (
                                      <>

                                        <button
                                          type="button"
                                          className="cmn-btn"
                                          onClick={verifyOtpLogin}
                                          style={{
                                            background: "#fda033",
                                            color: "#fff"
                                          }}
                                          disabled={isLoading}
                                        >
                                          {isLoading ? 'Verifying...' : 'Verify OTP'}
                                        </button>
                                        <button
                                          type="button"
                                          className="cmn-btn btn btn-outline-secondary py-2"
                                          onClick={sendOtpLogin}
                                          disabled={isLoading}
                                        >
                                          Resend OTP
                                        </button>
                                      </>
                                    )}
                                  </>
                                )}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
