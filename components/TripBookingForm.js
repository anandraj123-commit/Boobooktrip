"use client";

import { useState, useEffect } from "react";
import { tripLists } from "../constant/trip"; // adjust path

export default function TripBookingForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    destination: "",
    package: "",
    arrival: "",
    departure: "",
    adults: "",
    children: "",
    minPrice: "",
    maxPrice: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/; // strict 10-digit mobile number
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!mobileRegex.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address";

    if (!form.destination.trim()) newErrors.destination = "Destination is required";
    if (!form.package.trim()) newErrors.package = "Select a package";
    if (!form.arrival.trim()) newErrors.arrival = "Arrival date is required";
    if (!form.departure.trim()) newErrors.departure = "Departure date is required";
    if (!form.adults.trim()) newErrors.adults = "Select number of adults";
    if (!form.children.trim()) newErrors.children = "Select number of children";
    if (!form.minPrice.trim()) newErrors.minPrice = "Select min price";
    if (!form.maxPrice.trim()) newErrors.maxPrice = "Select max price";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Form submitted successfully!");
  };

  const showError = (field) =>
    touched[field] && errors[field] ? (
      <small className="text-danger">{errors[field]}</small>
    ) : null;

  return (
    <div
      className="bg-image d-flex justify-content-center align-items-center"
      style={{
        minHeight: "150vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="trip-booking-box p-5 rounded shadow-lg bg-white" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center fw-bold mb-1">
          Booking by <span style={{ color: "#ff4d4f" }}>Email</span>
        </h2>
        <p className="text-center mb-4 text-muted">It's free and always will be.</p>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showError("name")}
          </div>

          {/* MOBILE + EMAIL */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Mobile</label>
              <input
                name="mobile"
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
                value={form.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("mobile")}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("email")}
            </div>
          </div>

          {/* DESTINATION */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input
              name="destination"
              type="text"
              className="form-control"
              placeholder="Destination"
              value={form.destination}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {showError("destination")}
          </div>

          {/* PACKAGE */}
          <div className="mb-3">
            <label className="form-label">Package</label>
            <select
              name="package"
              className="form-select"
              value={form.package}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select your package</option>
              {tripLists.map((trip) => (
                <option key={trip.id} value={trip.slug}>
                  {trip.name}
                </option>
              ))}
            </select>
            {showError("package")}
          </div>

          {/* ARRIVAL / DEPARTURE */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Arrival Date</label>
              <input
                name="arrival"
                type="date"
                className="form-control"
                value={form.arrival}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("arrival")}
            </div>
            <div className="col-md-6">
              <label className="form-label">Departure Date</label>
              <input
                name="departure"
                type="date"
                className="form-control"
                value={form.departure}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("departure")}
            </div>
          </div>

          {/* ADULTS & CHILDREN */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">No of Adults</label>
              <select
                name="adults"
                className="form-select"
                value={form.adults}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select number of adults</option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {showError("adults")}
            </div>

            <div className="col-md-6">
              <label className="form-label">No of Children</label>
              <select
                name="children"
                className="form-select"
                value={form.children}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select number of children</option>
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {showError("children")}
            </div>
          </div>

          {/* PRICE RANGE */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Min Price</label>
              <select
                name="minPrice"
                className="form-select"
                value={form.minPrice}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select min price</option>
                {[100, 300, 500, 700, 1000].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {showError("minPrice")}
            </div>

            <div className="col-md-6">
              <label className="form-label">Max Price</label>
              <select
                name="maxPrice"
                className="form-select"
                value={form.maxPrice}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select max price</option>
                {[500, 1000, 2000, 3000, 5000].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {showError("maxPrice")}
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="btn btn-primary w-100 py-2 book-now-btn"
          >
            <i className="fa-solid fa-paper-plane me-2"></i> ASK For
          </button>
        </form>
      </div>
    </div>
  );
}

