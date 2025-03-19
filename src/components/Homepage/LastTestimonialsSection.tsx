"use client";

import React from "react";

// Define interfaces for our types
interface TestimonialData {
    thumbnail: string;
    quote: string;
    name: string;
}

const LastTestimonialsSection: React.FC = () => {
    // Data for testimonials, exactly as in the HTML
    const testimonials: TestimonialData[] = [
        {
            thumbnail:
                "assets/admin/img/client/thumbnail/1661422345.4393_thumb.png",
            quote: "I am running a kirana store for last 15 years. Last month I wanted to expand my inventories and product lines for upcomming festive seasons. I took a gold loan from Swarn Sathi effortlessly on my very first visit.",
            name: "Sanjiv Ghosh (Fultala)",
        },
        {
            thumbnail:
                "assets/admin/img/client/thumbnail/1661420562.3613_thumb.png",
            quote: "I was working in a factory. During lockdown, I lost my job. Unable to earn any other living. decided to buy a auto rickshaw. After putting together all my savings I was a lakh short of the budget, I came to Swarn Sathi for funding my living.",
            name: "Biswanath Ram (Sitakundu)",
        },
        {
            thumbnail:
                "assets/admin/img/client/thumbnail/1661418962.411_thumb.png",
            quote: 'I wanted to start my own garment shop. I went to severall banks and financial institutions for several days. I got in touch with a Self Help Group (SHG) They referred me to "Swarn Sathi Gold Loan". I got my gold loan in 30 minutes without any hassle.',
            name: "Malati Naskar (Ramnagar)",
        },
    ];

    return (
        <section className="testimonials">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2 className="title">
                                    Don't take our word for it, take theirs
                                </h2>
                                <p>
                                    Take a look at our past customers success
                                    stories. Our goal is to help you grow
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="testimonials-carousel"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                overflowX: "auto",
                                scrollbarWidth: "none" /* Firefox */,
                                msOverflowStyle: "none" /* IE and Edge */,
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {/* Hide scrollbar for Chrome, Safari and Opera */}
                            <style jsx>{`
                                .testimonials-carousel::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    className="slide-item"
                                    key={index}
                                    style={{
                                        flex: "0 0 auto",
                                        marginRight: "20px",
                                    }}
                                >
                                    <div className="single-slide">
                                        <div className="thumb">
                                            <img
                                                src={testimonial.thumbnail}
                                                alt="image"
                                                className="max-un"
                                                style={{
                                                    width: "200px",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        </div>
                                        <div className="content">
                                            <div className="top-content">
                                                <img
                                                    src="assets/images/icon/quote.png"
                                                    alt="quote"
                                                />
                                                {/* <h5>"I love Swarn Sathi, they're the best"</h5> */}
                                                <p
                                                    className="xxlr"
                                                    style={{ width: "200px" }}
                                                >
                                                    <p>{testimonial.quote}</p>
                                                </p>
                                            </div>
                                            <div className="bottom-content">
                                                <h5 className="name">
                                                    {testimonial.name}
                                                </h5>
                                                {/* <span className="country"> United Kingdom</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastTestimonialsSection;
