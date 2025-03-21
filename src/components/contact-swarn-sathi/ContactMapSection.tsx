'use client'

interface ContactMapSectionProps {
    variant?: string;
    title: string;
    description?: string;
    iframeSrc?: string;
}

const ContactMapSection = ({
    variant = "contact",
    title,
    description,
    iframeSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14739.978596312914!2d88.386655!3d22.5418732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbecd8f2f0a839d63!2sRegal%20Fincorp%20%E2%84%A2!5e0!3m2!1sen!2sin!4v1659941170463!5m2!1sen!2sin",
}: ContactMapSectionProps) => {
    return (
        <section className={`apply-for-loan ${variant}`}>
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-header text-center">
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {title}
                                </h2>
                                {description && <p>{description}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="form-content">
                                <iframe
                                    src={iframeSrc}
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;
