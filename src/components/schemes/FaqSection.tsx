// FaqSection.tsx
import React from "react";
// import "./FaqSection.css";

interface FaqItem {
    id: string;
    question: string;
    answer: React.ReactNode;
    ariaControls: string;
}

const FaqSection: React.FC = () => {
    const faqItems: FaqItem[] = [
        {
            id: "heading6",
            question:
                "What type of gold can I pledge to get a gold loan from Swarnsathi?",
            answer: (
                <p>
                    With Swarnsathi, you can pledge any type of gold jewellery,
                    which are of regular domestic use. This can include gold
                    jewellery items like necklaces, rings, bracelets or
                    traditional wears.
                </p>
            ),
            ariaControls: "collapsesix",
        },
        {
            id: "heading7",
            question: "What are the documents required for a gold loan?",
            answer: (
                <>
                    <p>The documents required for gold loan includes :</p>
                    <ol>
                        <li className="faq">
                            ID proof: Aadhar Card, Voter ID, Driving Licence or
                            Passport.
                        </li>
                        <li className="faq">
                            Address proof: Aadhar Card, Voter ID, Driving
                            Licence or Passport, Electricity Bill, Gas Bill,
                            Recent postpaid Bill.
                        </li>
                        <li className="faq">Bank Passbook (If applicable).</li>
                        <li className="faq">PAN Card/Form 60.</li>
                    </ol>
                </>
            ),
            ariaControls: "collapsesaven",
        },
        // Add other FAQ items following the same structure
    ];

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
                            <div className="faq-box wow fadeInUp">
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    {faqItems.map((item, index) => (
                                        <div
                                            className="accordion-item"
                                            key={item.id}
                                        >
                                            <h5
                                                className="accordion-header"
                                                id={item.id}
                                            >
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.ariaControls}`}
                                                    aria-expanded="false"
                                                    aria-controls={
                                                        item.ariaControls
                                                    }
                                                >
                                                    {item.question}
                                                </button>
                                            </h5>
                                            <div
                                                id={item.ariaControls}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={item.id}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
