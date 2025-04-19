import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './TestimonialsSection.css'

const TestimonialsSection = () => {
    const testimonials = [
        {
            image: "/images/Sliding website content.png",
            link: "/lending-partner",
        },
        {
            image: "/images/Swarn Sathi champion.png",
            link: "/swarnsathi-champion",
        },
        {
            image: "/images/Refer a friend.png",
            link: "#",
        },
        {
            image: "/images/Business Associate.png",
            link: "/swarnsathi-partner",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: false,
        draggable: false,
        // New additions to disable all interactions
        focusOnSelect: false,
        accessibility: false,
        keyboard: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            }, 
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },            
        ],
    };
    return (
        <section className="testimonials-section personal-loan pt-120 " >
            <div className=" hoverslide">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider
                                {...settings}
                                className="testimonials-slider-two"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="single-slide">
                                        <a
                                            href={testimonial.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={testimonial.image}
                                                alt={`Testimonial ${index + 1}`}
                                                style={{
                                                    borderRadius: "16px",
                                                    width: "100%",
                                                    height: "auto",
                                                    margin: "0 auto",
                                                }}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
