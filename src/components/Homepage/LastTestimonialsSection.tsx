"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define interfaces for our types
interface TestimonialData {
    image: string;
    description: string;
    name: string;
}

const LastTestimonialsSection: React.FC = () => {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`
                );
                setTestimonials(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
                setTestimonials([
                    {
                        image: "assets/admin/img/client/thumbnail/1661422345.4393_thumb.png",
                        description:
                            "I  have been running a Kirana store for the past 15 years. Last month, as I planned to expand my inventory and product range for the upcoming festive season, I chose Swarn Sathi for a gold loan. The process was seamless, and I received the loan effortlessly on my very first visit.",
                        name: "Sanjiv Ghosh (Fultala)",
                    },
                    {
                        image: "assets/admin/img/client/thumbnail/1661420562.3613_thumb.png",
                        description:
                            "I was working in a factory, but during the lockdown, I lost my job and struggled to find an alternative source of income. I decided to buy an auto-rickshaw to support my livelihood. After pooling all my savings, I was still short by a lakh. That’s when I turned to Swarn Sathi, and they provided the financial support I needed to rebuild my future.",
                        name: "Biswanath Ram (Sitakundu)",
                    },
                    {
                        image: "assets/admin/img/client/thumbnail/1661418962.411_thumb.png",
                        description:
                            "I wanted to start my own garment shop and spent several days approaching banks and financial institutions for funding. Eventually, I connected with a Self-Help Group (SHG), which referred me to Swarn Sathi Gold Loan. To my surprise, I received my gold loan in just 30 minutes—quickly and without any hassle.",
                        name: "Malati Naskar (Ramnagar)",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    // Slick settings for the slider
    const settings = {
        dots: false, // Hide bottom dots
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Auto-rotate every 3 sec
        arrows: false, // Hide navigation arrows
        swipe: true, // Enable swipe gesture
        draggable: true, // Enable dragging with a mouse
        touchThreshold: 10, // Improve touch response
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                },
            },
        ],
    };

    return (
        <section className="testimonials">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    Don&apos;t take our word for it, take theirs
                                </h2>
                                <p>
                                    Take a look at our past customers' success
                                    stories.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading ? (
                            <div className="text-center">
                                Loading testimonials...
                            </div>
                        ) : error ? (
                            <div className="text-center text-danger">
                                {error}
                            </div>
                        ) : (
                            <Slider
                                {...settings}
                                className="testimonials-carousel"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div className="slide-item" key={index}>
                                        <div
                                            className="single-slide text-center"
                                            style={{ padding: "10px" }}
                                        >
                                            <div className="thumb">
                                                <img
                                                    src={`${testimonial.image}`}
                                                    alt="client"
                                                    className="rounded-circle"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                    }}
                                                />
                                            </div>
                                            <div className="content">
                                                <img
                                                    src="assets/images/icon/quote.png"
                                                    alt="quote"
                                                    style={{ width: "30px" }}
                                                />
                                                <p
                                                    style={{
                                                        fontSize: "14px",
                                                        maxWidth: "350px",
                                                        margin: "0 auto",
                                                    }}
                                                >
                                                    {testimonial.description}
                                                </p>
                                                <h5 className="name mt-2">
                                                    {testimonial.name}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastTestimonialsSection;
