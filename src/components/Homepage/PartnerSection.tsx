import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./PartnerSection.css"
interface Partner {
    _id: string;
    title: string;
    img: string;
}

const PartnerSection = () => {
    const [partners, setPartners] = useState<Partner[]>([
        {
            _id: "1",
            title: "IDFC",
            img: "/images/idfc.png",
        },
        {
            _id: "2",
            title: "Partner-4",
            img: "/images/partner-4.png",
        },
        {
            _id: "3",
            title: "Partner-5",
            img: "/images/partner-5.png",
        },
        {
            _id: "4",
            title: "MPJ",
            img: "/images/mpj.png",
        },
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/partners`
                );
                setPartners(response.data);
                setLoading(false);
            } catch (error) {
                // if (axios.isAxiosError(error)) {
                //     setError(error.response?.data?.message || 'Failed to fetch partners');
                // } else {
                //     setError('Failed to fetch partners');
                // }
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    if (loading) {
        return <div>Loading partners...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="partner-section">
            <div className="partner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-3">
                            <h4 style={{marginBottom:"0px"}}>
                               
                                    Partners
                               
                            </h4>
                        </div>
                        <div className="col-md-9 col-9">
                            <Slider
                                {...sliderSettings}
                                className="partner-box partner-carousel"
                            >
                                {partners.map((partner) => (
                                    <div key={partner._id} className="single">
                                        <div className="item d-flex align-items-center">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/${partner.img}`}
                                                // src={`${partner.img}`}
                                                alt={partner.title}
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
