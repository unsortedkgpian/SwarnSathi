import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth <= 991);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const testimonials = [
        {
            image: "/images/Sliding website content.png",
            link: "/swarnsathi-champion#Lending_Partner",
        },
        {
            image: "/images/Swarn Sathi champion.png",
            link: "/swarnsathi-champion#Swarnsathi_Champion",
        },
        {
            image: "/images/Refer a friend.png",
            link: "https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Swarn%20Sathi%20Champions!",
        },
        {
            image: "/images/Business Associate.png",
    link: "/swarnsathi-champion#Business_Associate",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="testimonials-section personal-loan pt-120">
            <div className="hoverslide">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-12">
                            {isMobileOrTablet ? (
                                <Slider {...settings} className="testimonials-slider-two">
                                    {testimonials.map((t, index) => (
                                        <div key={index} className="single-slide">
                                            <a href={t.link} rel="noopener noreferrer">
                                                <img
                                                    src={t.image}
                                                    alt={`Testimonial ${index + 1}`}
                                                    style={{
                                                        borderRadius: "16px",
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <div className="d-flex justify-content-between gap-3">
                                    {testimonials.map((t, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                flex: "1",
                                                maxWidth: "24%",
                                            }}
                                        >
                                            <a href={t.link} rel="noopener noreferrer">
                                                <img
                                                    src={t.image}
                                                    alt={`Testimonial ${index + 1}`}
                                                    style={{
                                                        borderRadius: "16px",
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
