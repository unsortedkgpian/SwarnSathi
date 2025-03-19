'use client'

// import { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

interface BranchLocation {
    id: string;
    title: string;
    image: string;
    position: string;
}

const MapSection = () => {
    // const [selectedLocation, setSelectedLocation] = useState<string | null>(
    //     null
    // );

    const locations: BranchLocation[] = [
        {
            id: "1",
            title: "Topsia more",
            image: "/images/office200.jpg",
            position: "pos-2",
        },
        {
            id: "3",
            title: "Fultala, Baruipur",
            image: "/images/fultala.png",
            position: "pos-3",
        },
    ];

    return (
        <section className="map-section">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-header text-center">
                                <h2 className="title">
                                    Find our branches and partner shops
                                </h2>
                                <p>
                                    You are welcome to visit us at any time or
                                    reach us through whatsapp, mail or telephone
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="map-area">
                            <img src="/images/world-map.png" alt="world map" />

                            {locations.map((location) => (
                                <div
                                    key={location.id}
                                    className={`element ${location.position}`}
                                >
                                    <div className="details">
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="right"
                                            overlay={
                                                <Popover id={location.id}>
                                                    <Popover.Body>
                                                        <img
                                                            src={location.image}
                                                            alt={location.title}
                                                        />
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <button className="btn btn-warning maphover-branch">
                                                {location.title}
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="dot-area">
                                        <img
                                            src="/images/icon/maps-dot.png"
                                            alt="location marker"
                                            style={{ width: "25px" }}
                                        />
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

export default MapSection;