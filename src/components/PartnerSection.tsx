import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerSection.css"

const PartnerSection = () => {
    const partners = [
        { image: "https://swarnsathi.com/images/idfc.png" },
        { image: "https://swarnsathi.com/images/partner-4.png" },
        { image: "https://swarnsathi.com/images/partner-5.png" },
        { image: "https://swarnsathi.com/images/mpj.png" },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="partner-section">
            <div className="partner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-3">
                            <h4>
                                <a href="#" className="partnerhvr">
                                    Partners
                                </a>
                            </h4>
                        </div>
                        <div className="col-md-9 col-9">
                            <Slider
                                {...sliderSettings}
                                className="partner-box partner-carousel"
                            >
                                {partners.map((partner, index) => (
                                    <div key={index} className="single">
                                        <div className="item d-flex align-items-center">
                                            <img
                                                src={partner.image}
                                                alt={`Partner ${index + 1}`}
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    margin: "0 auto",
                                                }}
                                            />
                                        </div>
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

export default PartnerSection;
