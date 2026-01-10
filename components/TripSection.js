"use client";

import { useState, useEffect } from "react";
import { tripLists } from "../constant/trip";

export default function TripSection(params) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { checkIn, checkOut, guests, tripInfo } = params;

  const [selectedPackage, setSelectedPackage] = useState("");
  const [arrival, setArrival] = useState(checkIn);
  const [departure, setDeparture] = useState(checkOut);
  const [adultGuests, setAdultGuests] = useState(guests);
  const [destination, setDestination] = useState('')
  const [children, setChildren] = useState(0);
  // 🔹 FORM STATES
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tripLists.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedPackage(tripInfo);
  }, [tripInfo]);

  const slide = tripLists[currentSlide];

  // 🔹 VALIDATION
  const validateForm = () => {
    if (!name || name.trim().length < 3)
      return "Name must be at least 3 characters";

    if (!/^[6-9]\d{9}$/.test(phone))
      return "Enter valid 10 digit mobile number";

    if (!/^\S+@\S+\.\S+$/.test(email))
      return "Enter valid email address";

    if (!selectedPackage)
      return "Please select a package";

    if (!arrival || !departure)
      return "Please select arrival and departure dates";

    if (new Date(departure) <= new Date(arrival))
      return "Departure date must be after arrival date";

    if (!adultGuests || adultGuests < 1)
      return "At least 1 adult is required";

    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice))
      return "Minimum price cannot be greater than maximum price";

    return "";
  };

  // 🔹 SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: 'tour-inquiry',
          name,
          phone,
          email,
          destination: "Andaman & Nicobar",
          tourTrip: selectedPackage,
          arrival,
          departure,
          adults: adultGuests,
          // ✅ if children is empty, null, or undefined → set 0
          children:
            children === "" || children === null || children === undefined
              ? 0
              : Number(children),
          minPrice,
          maxPrice,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Thank you! Our expert will contact you shortly.");
        setName("");
        setPhone("");
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row g-0 shadow-lg rounded overflow-hidden">

          {/* LEFT SIDE */}
          <div className="col-md-6 bg-white p-4">

            {/* IMAGE SLIDER */}
            <div
              style={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <img
                src={slide.imageUrl}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s ease-in-out",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "15px",
                  right: "15px",
                  color: "#fff",
                }}
              >
                <h5 className="fw-bold mb-1">
                  <i className="fa-solid fa-plane-departure me-2"></i>
                  {slide.name}
                </h5>

                <p className="m-0">
                  <i className="fa-solid fa-location-dot me-2"></i>
                  {slide.location}
                </p>

                <div className="d-flex flex-wrap gap-2 mt-2">
                  {slide.servicesAvailable.map((service, idx) => (
                    <span
                      key={idx}
                      className="badge bg-warning text-dark px-2 py-1"
                      style={{ fontSize: "12px" }}
                    >
                      <i className="fa-solid fa-check me-1"></i>
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-2">
                  <span className="badge bg-danger fs-6 px-3 py-2">
                    ₹{slide.price}
                    {slide.offer && (
                      <span className="ms-2">({slide.offer} OFF)</span>
                    )}
                  </span>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                {tripLists.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: currentSlide === idx ? "12px" : "8px",
                      height: currentSlide === idx ? "12px" : "8px",
                      background:
                        currentSlide === idx
                          ? "#fff"
                          : "rgba(255,255,255,0.6)",
                      borderRadius: "50%",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* REMAINING LEFT CONTENT */}
            <h4 className="fw-bold text-center mt-3">
              Why Thousands Trust Boobook Trip Holidays
            </h4>

            <hr />

            {/* ICONS ROW 1 */}
            <div className="row text-center my-1">
              <div className="col-4">
                <i className="fa-solid fa-lock fa-2x text-warning mb-2"></i>
                <p className="fw-semibold small m-0">Trusted by</p>
                <p className="text-muted small">10,000+ Agents</p>
              </div>

              <div className="col-4">
                <i className="fa-solid fa-people-group fa-2x text-warning mb-2"></i>
                <p className="fw-semibold small m-0">7 Lakh+ Happy</p>
                <p className="text-muted small">Travelers</p>
              </div>

              <div className="col-4">
                <i className="fa-solid fa-star fa-2x text-warning mb-2"></i>
                <p className="fw-semibold small m-0">20+ Years</p>
                <p className="text-muted small">Travel Expertise</p>
              </div>
            </div>

            {/* ICONS ROW 2 */}
            <div className="row text-center my-2">
              <div className="col-6">
                <i className="fa-solid fa-trophy fa-2x text-warning mb-2"></i>
                <p className="fw-semibold small m-0">4.5★ Google Rating</p>
                <p className="text-muted small">(7K+ Reviews)</p>
              </div>

              <div className="col-6">
                <i className="fa-solid fa-suitcase fa-2x text-warning mb-2"></i>
                <p className="fw-semibold small m-0">250+ Experts</p>
                <p className="text-muted small">At Your Service</p>
              </div>
            </div>

            <hr />

            <h6 className="fw-bold text-center">DMC Specialist For Pan India</h6>

            <hr />

            <h6 className="fw-bold text-center mb-3">
              Contact With Us :- For Latest Travel Deals and Offers
            </h6>

            {/* INLINE CONTACTS */}
            <div className="text-center d-flex justify-content-center align-items-center flex-wrap gap-4 py-2">

              {/* Plain phone */}
              <span className="fw-bold fs-6">
                <a href="tel:+917484052727" className="text-decoration-none text-dark">
                  📞 +91-7484052727
                </a>
              </span>

              {/* WhatsApp */}
              <span>
                <i className="fa-brands fa-whatsapp text-success me-1"></i>
                <a
                  href="https://wa.me/917484052727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  +91-7484052727
                </a>
              </span>

              {/* Another phone */}
              <span>
                <i className="fa-solid fa-phone text-primary me-1"></i>
                <a href="tel:+9101169296377" className="text-decoration-none text-dark">
                  +91-01169296377
                </a>
              </span>

              {/* Email */}
              <span>
                <i className="fa-solid fa-envelope text-danger me-1"></i>
                <a href="mailto:help@boobook.in" className="text-decoration-none text-dark">
                  help@boobook.in
                </a>
              </span>

            </div>


          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="col-md-6 p-4 text-white d-flex justify-content-center"
            style={{ background: "#262a5c" }}
          >
            <div className="mx-auto" style={{ width: "90%" }}>
              <h4 className="fw-bold text-center mt-3">
                Hurry! Fill Form & Get Best Travel Deals
              </h4>

              <form onSubmit={handleSubmit}>
                <label className="fw-semibold">Name</label>
                <input
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label className="fw-semibold">Mobile</label>
                <input
                  className="form-control mb-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label className="fw-semibold">Email</label>
                <input
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="fw-semibold">Destination</label>
                <input
                  className="form-control mb-3"
                  value="Andaman & Nicobar"
                  disabled
                />

                <label className="fw-semibold">Package</label>
                <select
                  className="form-control mb-3"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  <option value="">Select Package</option>
                  {tripLists.map((trip) => (
                    <option key={trip.id} value={trip.slug}>
                      {trip.name}
                    </option>
                  ))}
                </select>




                <div className="row">
                  <div className="col-6">
                    <label className="fw-semibold">Arrival Date</label>
                    <input
                      type="date"
                      className="form-control mb-3"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <label className="fw-semibold">Departure Date</label>
                    <input
                      type="date"
                      className="form-control mb-3"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <label className="fw-semibold">Adults</label>
                    <input
                      type="number"
                      min="1"
                      className="form-control mb-3"
                      value={adultGuests}
                      onChange={(e) => setAdultGuests(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <label className="fw-semibold">Children</label>
                    <input type="number" min="0" className="form-control mb-3" value={children} onChange={(e) => setChildren(e.target.value)} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control mb-3"
                      placeholder="₹ Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control mb-3"
                      placeholder="₹ Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>

                {error && <p className="text-danger fw-semibold">{error}</p>}
                {success && <p className="text-success fw-semibold">{success}</p>}

                <button
                  className="btn btn-warning w-100 fw-bold py-2 mt-2"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>

              <h5 className="text-center fw-bold mt-4 text-warning">
                Get Instant Response From Expert's !!
              </h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
