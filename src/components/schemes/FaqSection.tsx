'use client'
// FaqSection.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./FaqSection.css";

interface FaqItem {
    id: string;
    question: string;
    answer: React.ReactNode;
    ariaControls: string;
}

interface FaqData {
    _id: string;
    title: string;
    description: string;
}

const FaqSection: React.FC = () => {
    const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (faqId: string) => {
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`);
                
                // Map the API response to our FaqItem interface
                const mappedFaqs = response.data.map((faq: FaqData, index: number) => {
                    const i = index + 1;
                    return {
                        id: `heading${i}`,
                        question: faq.title,
                        answer: <p dangerouslySetInnerHTML={{ __html: faq.description }} />,
                        ariaControls: `collapse${i}`
                    };
                });
                
                setFaqItems(mappedFaqs);
                setError(null);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
                setError("Failed to load FAQs");
                
                // Fallback data in case of error
                setFaqItems([
                    {
                        id: "heading1",
                        question: "What type of gold can I pledge to get a gold loan from Swarnsathi?",
                        answer: "With Swarnsathi, you can pledge any type of gold jewellery, which are of regular domestic use. This can include gold jewellery items like necklaces, rings, bracelets or traditional wears.",
                        ariaControls: "collapse1",
                    },
                    {
                        id: "heading2",
                        question: "What are the documents required for a gold loan?",
                        answer: "The documents required for gold loan includes: 1) ID proof: Aadhar Card, Voter ID, Driving Licence or Passport. 2) Address proof: Aadhar Card, Voter ID, Driving Licence or Passport, Electricity Bill, Gas Bill, Recent postpaid Bill. 3) Bank Passbook (If applicable). 4) PAN Card/Form 60.",
                        ariaControls: "collapse2",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    return (
        <section className="faqs-section account" id="faq">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h5 className="sub-title">
                                    If you have question, we have answer
                                </h5>
                                <h2 className="title">
                                    Frequently asked questions
                                </h2>
                                <p>
                                    Get answers to all questions you have and
                                    boost your knowledge
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-8">
                            {loading ? (
                                <div className="text-center">Loading FAQs...</div>
                            ) : error ? (
                                <div className="text-center text-danger">{error}</div>
                            ) : (
                                <div className="faq-box wow fadeInUp">
                                    <div className="accordion">
                                        {faqItems.map((item) => (
                                            <div
                                                className="accordion-item"
                                                key={item.id}
                                            >
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${openFaq === item.id ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => toggleFaq(item.id)}
                                                    >
                                                        {item.question}
                                                    </button>
                                                </h5>
                                                <div
                                                    className={`accordion-collapse collapse ${openFaq === item.id ? 'show' : ''}`}
                                                >
                                                    <div className="accordion-body">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
