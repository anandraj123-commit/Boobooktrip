"use client";

export default function GetIntouch() {
    return (
        <section
            id="getInTouch"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                padding: "60px 0",
                color: "white",
            }}
        >
            <div
                className="overlay"
                style={{ background: "rgba(0, 25, 60, 0.75)", padding: "60px 30px" }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-md-6 mb-5 mb-md-0">
                        <a href="tel:+917484052727" className="text-decoration-none">
                                <button className="title-btn mb-4">
                                    GET IN TOUCH WITH US
                                </button>
                            </a>

                            <h1 className="fw-bold display-4">GET BEST TRAVEL DEALS</h1>

                            <p
                                className="mt-4 text-white-50"
                                style={{ fontSize: "18px" }}
                            >
                               Get the best travel deals on hotels, holiday packages, and more. At Boobooktrip, we make every journey smoother, easier, and more enjoyable.
                            </p>

                            <div className="help-line-box mt-4">
                                Help line:{" "}
                                <a href="tel:+917484052727" className="text-white">
                                    +91-7484052727
                                </a>
                            </div>

                            <div className="mt-4 d-flex gap-3">
                                {/* <button className="btn btn-primary btn-custom">
                                    BOOK NOW
                                </button> */}

                                {/* CALL BUTTON */}
                                <a
                                    href="tel:+917484052727"
                                    className="btn btn-info btn-custom text-white"
                                >
                                    CONTACT NOW
                                </a>
                            </div>
                        </div>

                        {/* RIGHT ANIMATED IMAGE */}
                        <div className="col-md-6">
                            <div className="animated-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
                                    alt="Beautiful Travel Location"
                                    className="animated-img"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
