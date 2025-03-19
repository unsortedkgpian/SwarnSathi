import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for the TestimonialItem props
interface TestimonialItemProps {
    imageSrc: string;
    quote: string;
    name: string;
}

// Testimonial Item Component
const TestimonialItem: React.FC<TestimonialItemProps> = ({
    imageSrc,
    quote,
    name,
}) => (
    <div className="slide-item">
        <div className="single-slide">
            <div className="thumb">
                <img
                    src={imageSrc}
                    alt="image"
                    className="max-un"
                    style={{ width: "200px", borderRadius: "50%" }}
                />
            </div>
            <div className="content">
                <div className="top-content">
                    <img src="images/icon/quote.png" alt="quote" />
                    <p className="xxlr">{quote}</p>
                </div>
                <div className="bottom-content">
                    <h5 className="name">{name}</h5>
                </div>
            </div>
        </div>
    </div>
);

// Testimonials Section Component
const Testimonials: React.FC = () => {
    const testimonials: TestimonialItemProps[] = [
        {
            imageSrc:
                "assets/admin/img/client/thumbnail/1661422345.4393_thumb.png",
            quote: "I am running a kirana store for last 15 years. Last month I wanted to expand my inventories and product lines for upcoming festive seasons. I took a gold loan from Swarn Sathi effortlessly on my very first visit.",
            name: "Sanjiv Ghosh (Fultala)",
        },
        {
            imageSrc:
                "assets/admin/img/client/thumbnail/1661420562.3613_thumb.png",
            quote: "I was working in a factory. During lockdown, I lost my job. Unable to earn any other living. I decided to buy an auto rickshaw. After putting together all my savings I was a lakh short of the budget, I came to Swarn Sathi for funding my living.",
            name: "Biswanath Ram (Sitakundu)",
        },
        {
            imageSrc:
                "assets/admin/img/client/thumbnail/1661418962.411_thumb.png",
            quote: 'I wanted to start my own garment shop. I went to several banks and financial institutions for several days. I got in touch with a Self Help Group (SHG). They referred me to "Swarn Sathi Gold Loan". I got my gold loan in 30 minutes without any hassle.',
            name: "Malati Naskar (Ramnagar)",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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
                        <div className="testimonials-carousel">
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialItem
                                        key={index}
                                        imageSrc={testimonial.imageSrc}
                                        quote={testimonial.quote}
                                        name={testimonial.name}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
