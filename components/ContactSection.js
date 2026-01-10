// "use client";
// import { useEffect } from "react";
// import Link from "next/link";

// export default function ContactSection() {
//     useEffect(() => {
//         // Trigger animation on page load
//         document.querySelector(".contact-left")?.classList.add("animate-left");
//         document.querySelector(".contact-right")?.classList.add("animate-right");
//     }, []);

//     return (
//         <section className="contact-section container py-5">
//             <div className="row g-5">

//                 {/* LEFT SIDE */}
//                 <div className="col-md-6 contact-left">

//                     <h2 className="contact-title mb-4">Get in Touch</h2>

//                     <div className="row g-4">

//                         {/* Address */}
//                         <div className="col-md-6">
//                             <div className="info-box shadow-sm">
//                                 <i className="bi bi-geo-alt-fill icon-blue"></i>
//                                 <h5>Address</h5>
//                                 <p>
//   Brookshabad, Kanchi Nala, Chakkar Gaon <br />
//   Port Blair (Sri Vijaya Puram), South Andaman <br />
//   A & N Islands – 744112
// </p>
//                             </div>
//                         </div>

//                         {/* Mail */}
//                         <div className="col-md-6">
//                             <div className="info-box shadow-sm">
//                                 <i className="bi bi-envelope-fill icon-blue"></i>
//                                 <h5>Mail Us</h5>
//                                 <p>supports@boobook.in</p>
//                             </div>
//                         </div>

//                         {/* Phone */}
//                         <div className="col-md-6">
//                             <div className="info-box shadow-sm">
//                                 <i className="bi bi-telephone-fill icon-blue"></i>
//                                 <h5>Telephone</h5>
//                                 <p>(+91) 0169296377</p>
//                             </div>
//                         </div>

//                         {/* Website */}
//                         <div className="col-md-6">
//                             <div className="info-box shadow-sm">
//                                 <i className="bi bi-globe2 icon-blue"></i>
//                                 <h5>boobook.in</h5>
//                                 <p>(+91) 7484052727</p>
//                             </div>
//                         </div>

//                     </div>

//                    {/* SOCIAL ICONS */}
// <div className="social-row mt-4 shadow-sm">

// <a href="https://www.facebook.com/tripboobook" target="_blank">
//     <div className="social-icon">
//         <i className="fab fa-facebook-f"></i>
//     </div>
// </a>

// <a href="https://x.com/BoobookTrip" target="_blank">
//     <div className="social-icon">
//         <i className="fab fa-twitter"></i>
//     </div>
// </a>

// <a href=" https://www.instagram.com/boobooktrip" target="_blank">
//     <div className="social-icon">
//         <i className="fab fa-instagram"></i>
//     </div>
// </a>

// <a href=" https://www.linkedin.com/company/boobook-trip/posts/?feedView=all" target="_blank">
//     <div className="social-icon">
//         <i className="fab fa-linkedin-in"></i>
//     </div>
// </a>

// </div>


//                 </div>

//                 {/* RIGHT SIDE FORM */}
//                 <div className="col-md-6 contact-right">
//                     <div className="form-box shadow-sm">

//                         <h2 className="contact-title mb-4">Send Your Message</h2>

//                         <form>
//                             <div className="row g-3">
//                                 <div className="col-md-6">
//                                     <input type="text" className="form-control" placeholder="Your Name" />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <input type="email" className="form-control" placeholder="Your Email" />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <input type="text" className="form-control" placeholder="Mobile" />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <input type="text" className="form-control" placeholder="Subject" />
//                                 </div>
//                                 <div className="col-12">
//                                     <textarea className="form-control msg-box" placeholder="Leave a message here"></textarea>
//                                 </div>
//                             </div>

//                             <button type="submit" className="btn btn-primary w-100 mt-4 submit-btn">
//                                 Send Message
//                             </button>
//                         </form>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { type: "error" | "success", text: string }

  useEffect(() => {
    document.querySelector(".contact-left")?.classList.add("animate-left");
    document.querySelector(".contact-right")?.classList.add("animate-right");
  }, []);

  function validate() {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Enter a valid email";
    if (!form.mobile.match(/^\d{10}$/))
      return "Mobile must be exactly 10 digits";
    if (!form.subject.trim()) return "Subject is required";
    if (form.message.trim().length < 10)
      return "Message must be at least 10 characters";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setAlert(null);

    const error = validate();
    if (error) {
      setAlert({ type: "error", text: error });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact-us",
          name: form.name,
          email: form.email,
          phone: form.mobile,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");

      setAlert({
        type: "success",
        text: "Message sent successfully! We’ll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setAlert({
        type: "error",
        text: err.message || "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  }

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
                <p>
                  <a
                    href="mailto:support@boobook.in"
                    className="text-decoration-none"
                  >
                    support@boobook.in
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <div className="info-box shadow-sm">
                <i className="bi bi-telephone-fill icon-blue"></i>
                <h5>Telephone</h5>
                <p>
                  <a href="tel:+9101169296377" className="text-decoration-none">
                    +91-01169296377
                  </a>,{" "}
                  <a href="tel:+917484052727" className="text-decoration-none">
                    +91-7484052727
                  </a>
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="col-md-6">
              <div className="info-box shadow-sm">
                <i className="bi bi-globe2 icon-blue"></i>
                <h5>Website:</h5>
                <p>
                  <a
                    href="https://boobook.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    boobook.in
                  </a>
                </p>
                {/* Google My Business */}

              </div>
            </div>

            <div className="col-md-12">
              <div className="info-box shadow-sm">
                <i className="bi bi-globe2 icon-blue"></i>
                <h5>Google My Bussiness:</h5>
                {/* Google My Business */}
                <p>
                  <a
                    href="https://share.google/xaODzaI3u0ivWNGsj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none fw-bold"
                    style={{ color: "#4285F4" }} // Google's blue
                  >
                    ⭐ Find us on Google
                  </a>
                </p>
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

              <a
                href=" https://www.linkedin.com/company/boobook-trip/posts/?feedView=all"
                target="_blank"
              >
                <div className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
            </div>

          </div>

        </div>
        {/* RIGHT FORM */}
        <div className="col-md-6 contact-right">
          <div className="form-box shadow-sm">

            <h2 className="contact-title mb-4 text-center">Your Feedback = Our Compass</h2>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    value={form.mobile}
                    onChange={e =>
                      setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") })
                    }
                    maxLength={10}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control msg-box"
                    placeholder="Leave a message here"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>

              {/* ALERT (red / green) */}
              {alert && (
                <div
                  className={`mt-3 p-2 rounded text-center ${alert.type === "error"
                    ? "bg-danger text-white"
                    : "bg-success text-white"
                    }`}
                >
                  {alert.text}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="d-flex align-items-center justify-content-center gap-2">
                    <span className="spinner-border spinner-border-sm" />
                    Submitting…
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
