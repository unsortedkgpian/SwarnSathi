import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextModal from "../TextModal";

const TestimonialsSection = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [showTextModal, setShowTextModal] = useState(false);

    const [refId, setRefId] = useState();
    const [refText, setRefText] = useState("Please login to get your referral id");

    const getRefId = async () =>{
        const user = localStorage.getItem("user");
        if(!user) return null;
        const userJson = JSON.parse(user);
        const phoneNumber = userJson.phone;
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/referrals/phone/"+phoneNumber, {
            method: "GET"
         }) 

         const data = await response.json();

         console.log(data.referralId)
        setRefId(data.referralId);

        let reftext = "Refer a friend and earn rewards! Share this message: 'Join Swarn Sathi for amazing gold loan benefits! Use my referral code: ";
        reftext+= data.referralId;
        return reftext;
    }

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth <= 991);
        };

        getRefId();

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
            image: "/images/Business Associate.png",
            link: "/swarnsathi-champion#Business_Associate",
        },
        {
            image: "/images/Refer a friend.png",
            action: "modal" // Special marker for modal action
        },
    ];

    const settings = {
        dots: true,
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
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleReferralClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        const reftext = await getRefId();
        if(reftext==null){
            setRefText("Please login to get your referral id")
        } 
        else setRefText(reftext);
        setShowTextModal(true);
    };

    return (
        <section className="testimonials-section personal-loan pt-120">
            {showTextModal  && (
                <TextModal
                    onClose={() => setShowTextModal(false)}
                    text={refText}
                />
            )}

            <div className="hoverslide">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-12">
                            {isMobileOrTablet ? (
                                <Slider {...settings} className="testimonials-slider-two">
                                    {testimonials.map((t, index) => (
                                        <div key={index} className="single-slide">
                                            {index === 3 ? (
                                                <div 
                                                    onClick={handleReferralClick}
                                                    style={{ 
                                                        cursor: "pointer",
                                                        borderRadius: "16px",
                                                        overflow: "hidden"
                                                    }}
                                                >
                                                    <img
                                                        src={t.image}
                                                        alt={`Testimonial ${index + 1}`}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </div>
                                            ) : (
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
                                            )}
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
                                                borderRadius: "16px",
                                                overflow: "hidden"
                                            }}
                                        >
                                            {index === 3 ? (
                                                <div 
                                                    onClick={handleReferralClick}
                                                    style={{ 
                                                        cursor: "pointer",
                                                        height: "100%"
                                                    }}
                                                >
                                                    <img
                                                        src={t.image}
                                                        alt={`Testimonial ${index + 1}`}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <a href={t.link} rel="noopener noreferrer">
                                                    <img
                                                        src={t.image}
                                                        alt={`Testimonial ${index + 1}`}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </a>
                                            )}
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