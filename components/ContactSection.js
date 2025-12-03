"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function ContactSection() {
    useEffect(() => {
        // Trigger animation on page load
        document.querySelector(".contact-left")?.classList.add("animate-left");
        document.querySelector(".contact-right")?.classList.add("animate-right");
    }, []);

    return (
        <section className="contact-section container py-5">
            <div className="row g-5">

                {/* LEFT SIDE */}
                <div className="col-md-6 contact-left">

                    <h2 className="contact-title mb-4">Get in Touch</h2>

                    <div className="row g-4">

                        {/* Address */}
                        <div className="col-md-6">
                            <div className="info-box shadow-sm">
                                <i className="bi bi-geo-alt-fill icon-blue"></i>
                                <h5>Address</h5>
                                <p>
  Brookshabad, Kanchi Nala, Chakkar Gaon <br />
  Port Blair (Sri Vijaya Puram), South Andaman <br />
  A & N Islands – 744112
</p>
                            </div>
                        </div>

                        {/* Mail */}
                        <div className="col-md-6">
                            <div className="info-box shadow-sm">
                                <i className="bi bi-envelope-fill icon-blue"></i>
                                <h5>Mail Us</h5>
                                <p>supports@boobook.in</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                            <div className="info-box shadow-sm">
                                <i className="bi bi-telephone-fill icon-blue"></i>
                                <h5>Telephone</h5>
                                <p>(+91) 0169296377</p>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="col-md-6">
                            <div className="info-box shadow-sm">
                                <i className="bi bi-globe2 icon-blue"></i>
                                <h5>boobook.in</h5>
                                <p>(+91) 7484052727</p>
                            </div>
                        </div>

                    </div>

                   {/* SOCIAL ICONS */}
<div className="social-row mt-4 shadow-sm">

<a href="https://www.facebook.com/tripboobook" target="_blank">
    <div className="social-icon">
        <i className="fab fa-facebook-f"></i>
    </div>
</a>

<a href="https://x.com/BoobookTrip" target="_blank">
    <div className="social-icon">
        <i className="fab fa-twitter"></i>
    </div>
</a>

<a href=" https://www.instagram.com/boobooktrip" target="_blank">
    <div className="social-icon">
        <i className="fab fa-instagram"></i>
    </div>
</a>

<a href=" https://www.linkedin.com/company/boobook-trip/posts/?feedView=all" target="_blank">
    <div className="social-icon">
        <i className="fab fa-linkedin-in"></i>
    </div>
</a>

</div>


                </div>

                {/* RIGHT SIDE FORM */}
                <div className="col-md-6 contact-right">
                    <div className="form-box shadow-sm">

                        <h2 className="contact-title mb-4">Send Your Message</h2>

                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control msg-box" placeholder="Leave a message here"></textarea>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-4 submit-btn">
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}
