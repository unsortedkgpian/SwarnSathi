const CareerSingleSection = () => {
    return (
        <section className="career-single">
            <div className="overlay pt-120 pb-120">
                <div
                    className="container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-area mb-60">
                                <div className="content">
                                    <h2>Office Manager</h2>
                                    <div className="sub-heading d-flex align-items-center">
                                        <div className="single-sub d-flex align-items-center cus-bor">
                                            <div className="icon-area">
                                                <img
                                                    src="images/icon/time-icon.png"
                                                    alt="time icon"
                                                />
                                            </div>
                                            <span>Full Time</span>
                                        </div>
                                        <div className="single-sub d-flex align-items-center">
                                            <div className="icon-area">
                                                <img
                                                    src="images/icon/map-icon.png"
                                                    alt="map icon"
                                                />
                                            </div>
                                            <span>Kolkata</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-area mb-60">
                                <h2>
                                    <strong>Job Overview</strong>
                                </h2>
                                <p>
                                    We are looking for an Office Manager to
                                    organize and coordinate administration
                                    duties and office procedures.
                                </p>
                                <p>
                                    Your role is to create and maintain a
                                    pleasant work environment, ensuring high
                                    levels of organizational effectiveness,
                                    communication and safety.
                                </p>
                                <p>
                                    <strong>
                                        How to Apply to this Position?
                                    </strong>
                                </p>
                                <p>
                                    Please send your resume to{" "}
                                    <strong>hr@regalfincorp.com</strong>.
                                </p>

                                <h2>
                                    <strong>
                                        Roles &amp; Responsibilities:
                                    </strong>
                                </h2>
                                <p>
                                    <strong>
                                        <em>
                                            Key&nbsp;Responsibilities:&nbsp;
                                        </em>
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        Schedule meetings and appointments of
                                        directors
                                    </li>
                                    <li>
                                        Organize the office layout and order
                                        stationery and equipment
                                    </li>
                                    <li>
                                        Partner with HR to update and maintain
                                        office policies as necessary
                                    </li>
                                    <li>
                                        Organize office operations and
                                        procedures
                                    </li>
                                    <li>
                                        Ensure that all items are invoiced and
                                        paid on time
                                    </li>
                                    <li>Provide general support to visitors</li>
                                    <li>
                                        Assist in the onboarding process for new
                                        hires
                                    </li>
                                    <li>
                                        Address employees queries regarding
                                        office management issues (e.g.
                                        stationery, Hardware and travel
                                        arrangements)
                                    </li>
                                    <li>
                                        Plan in-house or off-site activities,
                                        like parties, celebrations and
                                        conferences
                                    </li>
                                </ul>

                                <h2>
                                    <strong>Desired Skills:</strong>
                                </h2>
                                <ul>
                                    <li>
                                        Proven experience as an Office Manager,
                                        Front Office Manager or Administrative
                                        Assistant with 1Y+ Experience
                                    </li>
                                    <li>
                                        Knowledge of Office Administrator
                                        responsibilities, systems and procedures
                                    </li>
                                    <li>
                                        Proficiency in MS Office (MS Excel and
                                        MS Outlook, in particular)
                                    </li>
                                    <li>
                                        Hands on experience with office machines
                                        (e.g. fax machines and printers)
                                    </li>
                                    <li>
                                        Graduate with good spoken english
                                        ability
                                    </li>
                                </ul>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="cmn-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginTop: "50px" }}
                                >
                                    Apply for this job
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-item">
                                <h4>Let's grow together.</h4>
                                <p>
                                    We’re out to prove ourselves. If you feel
                                    the same, join us in one of our many offices
                                    across India. Come for the perks, stay for
                                    the personal growth!
                                </p>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="cmn-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply for this job
                                </a>
                            </div>

                            {/* Social links commented out
              <div className="d-flex align-items-center">
                <span>Share</span>
                <div className="social-link d-flex align-items-center">
                  <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                  <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                  <a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a>
                  <a href="javascript:void(0)"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSingleSection;
