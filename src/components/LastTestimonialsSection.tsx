import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LastTestimonialsSection.css";

const LastTestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            image: "https://swarnsathi.com/assets/admin/img/client/thumbnail/1661422345.4393_thumb.png",
            text: "I am running a kirana store for last 15 years. Last month I wanted to expand my inventories and product lines for upcoming festive seasons. I took a gold loan from Swarn Sathi effortlessly on my very first visit.",
            name: "Sanjiv Ghosh (Fultala)",
        },
        {
            id: 2,
            image: "https://swarnsathi.com/assets/admin/img/client/thumbnail/1661420562.3613_thumb.png",
            text: "I was working in a factory. During lockdown, I lost my job. Unable to earn any other living. I decided to buy a auto rickshaw. After putting together all my savings I was a lakh short of the budget, I came to Swarn Sathi for funding my living.",
            name: "Biswanath Ram (Sitakundu)",
        },
        {
            id: 3,
            image: "https://swarnsathi.com/assets/admin/img/client/thumbnail/1661418962.411_thumb.png",
            text: 'I wanted to start my own garment shop. I went to several banks and financial institutions for several days. I got in touch with a Self Help Group (SHG) They referred me to "Swarn Sathi Gold Loan". I got my gold loan in 30 minutes without any hassle.',
            name: "Malati Naskar (Ramnagar)",
        },
    ];

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: (
    //         <button type="button" className="slick-prev pull-left slick-arrow">
    //             <i className="icon-a-left-arrow" aria-hidden="true"></i>
    //         </button>
    //     ),
    //     nextArrow: (
    //         <button type="button" className="slick-next pull-right slick-arrow">
    //             <i className="icon-b-right-arrow" aria-hidden="true"></i>
    //         </button>
    //     ),
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: (
            <button type="button" className="slick-prev pull-left slick-arrow">
                <i className="icon-a-left-arrow" aria-hidden="true" />
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next pull-right slick-arrow">
                <i className="icon-b-right-arrow" aria-hidden="true" />
            </button>
        ),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <section className="testimonials">
            <div className="overlay pt-120 pb-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h2 className="title">
                                    Don&apos;t take our word for it, take theirs
                                </h2>
                                <p>
                                    Take a look at our past customers success
                                    stories. Our goal is to help you grow
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="testimonials-carousel slick-initialized slick-slider">
                            <Slider {...settings}>
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="slide-item"
                                    >
                                        <div className="single-slide">
                                            <div className="thumb">
                                                <img
                                                    src={testimonial.image}
                                                    alt="client"
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
                                                        src="https://swarnsathi.com/images/icon/quote.png"
                                                        alt="quote"
                                                    />
                                                    <p className="xxlr">
                                                        {testimonial.text}
                                                    </p>
                                                </div>
                                                <div className="bottom-content">
                                                    <h5 className="name">
                                                        {testimonial.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="testimonials-carousel slick-initialized slick-slider">
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`slick-slide${
                                            index === 1
                                                ? " slick-current slick-active"
                                                : ""
                                        }`}
                                        data-slick-index={index}
                                        aria-hidden="false"
                                        style={{ width: "60px" }}
                                        tabIndex={-1}
                                    >
                                        <div>
                                            <div
                                                className="slide-item"
                                                style={{
                                                    width: "100%",
                                                    display: "inline-block",
                                                }}
                                            >
                                                <div className="single-slide">
                                                    <div className="thumb">
                                                        <img
                                                            src={
                                                                testimonial.image
                                                            }
                                                            alt="client"
                                                            className="max-un"
                                                            style={{
                                                                width: "200px",
                                                                borderRadius:
                                                                    "50%",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <div className="top-content">
                                                            <img
                                                                src="https://swarnsathi.com/images/icon/quote.png"
                                                                alt="quote"
                                                            />
                                                            <p
                                                                className="xxlr"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: testimonial.text,
                                                                }}
                                                                style={{
                                                                    width: "100px",
                                                                    fontSize:
                                                                        "10px",
                                                                    inlineSize:
                                                                        "2px",
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="bottom-content">
                                                            <h5 className="name">
                                                                {
                                                                    testimonial.name
                                                                }
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default LastTestimonialsSection;
