interface ContactMethod {
    iconSrc: string;
    iconAlt: string;
    title: string;
    content: string;
    hasBr?: boolean;
}

interface NeedHelpProps {
    variant?: string;
    subTitle: string;
    title: string;
    description: string;
    contactMethods: ContactMethod[];
}

const NeedHelpSection = ({
    variant = "need-more-help",
    subTitle,
    title,
    description,
    contactMethods,
}: NeedHelpProps) => {
    return (
        <section className={`account-feature loan-feature ${variant}`}>
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-header text-center">
                                <h5 className="sub-title">{subTitle}</h5>
                                <h2
                                    className="title"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    {title}
                                </h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                      
                        {contactMethods.map((method, index) => (
                             <div className="col-md-4 d-flex" key={index} >
                            <div className="single-box flex-fill d-flex flex-column justify-content-between" >               
                              <div className="icon-box">
                                <img
                                  src={method.iconSrc}
                                  alt={method.iconAlt}
                                />
                              </div>
                              <h5>{method.title}</h5>
                              <p >{method.content}</p>
                              {method.hasBr && <br />}
                            </div>  
                            </div>                        
                        ))}
                        </div> 
                    </div>
                </div>
            
        </section>
    );
};

export default NeedHelpSection;
