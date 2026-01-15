"use client";
import { useState } from "react";
import { tripLists } from "../constant/trip";

export default function HeroSection() {
  const [trip, setTrip] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");

  // ✅ TODAY's DATE USING LOCAL TIME (NOT UTC)
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD (local time)

  const handleSearch = () => {
    if (!trip) {
      setError("Please select a tour trip");
      return;
    }

    setError("");

    const params = new URLSearchParams({
      location: "Andaman & Nicobar",
      checkIn,
      checkOut,
      guests,
      trip,
    });

    window.location.href = `/trip/${trip}?${params.toString()}`;
  };

  return (
    <div className="hero-section">
      <div className="hero-bg"></div>

      <div className="overlay-content container text-start">
  {/* TAGLINE */}
  <h5
    className="fw-light fst-italic mb-2"
    style={{
      color: "#ffffff",
      letterSpacing: "1px",
      maxWidth: "600px",
    }}
  >
    Beyond Travel, Into the Heart of the Andamans.
  </h5>

  {/* WELCOME TEXT */}
  <h2
    className="fw-normal text-uppercase mb-1"
    style={{
      color: "#ffffff",
      letterSpacing: "4px",
    }}
  >
    Welcome To
  </h2>

  {/* MAIN TITLE */}
  <h1
  className="fw-bold"
  style={{
    color: "#ffffff",
    fontSize: "5.8rem",
    fontWeight: 900,          // 👈 MUCH bolder
    letterSpacing: "2px",     // 👈 adds visual weight
    lineHeight: "1",
  }}
>
  ANDAMAN
</h1>

  {/* DESCRIPTION */}
  <p
    className="mt-3"
    style={{
      color: "#ffffff",
      maxWidth: "520px",
      fontSize: "14px",
      letterSpacing: "0.6px",
      lineHeight: "1.6",
    }}
  >
    Where the ocean sings softly and green islands shine like gems, the
    Andamans invite you to explore.
  </p>

        <div className="search-box container mt-73">
          <div className="row g-3 align-items-center">

            {/* LOCATION */}
            <div className="col-md-3">
              <label className="fw-bold">
                <i className="fa-solid fa-location-dot icon"></i> Location
              </label>
              <input
                type="text"
                className="form-control"
                value="Andaman & Nicobar"
                disabled
              />
            </div>

            {/* TOUR TRIP */}
            <div className="col-md-3">
              <label className="fw-bold">
                <i className="fa-solid fa-box icon"></i> Tour Trip
              </label>

              <select
                className={`form-select ${error ? "is-invalid" : ""}`}
                value={trip}
                onChange={(e) => {
                  setTrip(e.target.value);
                  setError("");
                }}
              >
                <option value="">Select Tour Trip</option>

                {tripLists.map((t) => (
                  <option key={t.id} value={t.slug}>
                    {t.name}
                  </option>
                ))}
              </select>

              {error && (
                <div className="text-danger small mt-1">
                  <i className="fa-solid fa-circle-exclamation"></i> {error}
                </div>
              )}
            </div>

            {/* CHECK-IN */}
            <div className="col-md-2">
              <label className="fw-bold">
                <i className="fa-solid fa-calendar-check icon"></i> Check In
              </label>
              <input
                type="date"
                className="form-control"
                value={checkIn}
                min={today} // ✅ Past dates disabled using LOCAL DATE
                onChange={(e) => {
                  setCheckIn(e.target.value);

                  // If checkout < checkin, reset checkout
                  if (checkOut && e.target.value > checkOut) {
                    setCheckOut("");
                  }
                }}
              />
            </div>

            {/* CHECK-OUT */}
            <div className="col-md-2">
              <label className="fw-bold">
                <i className="fa-solid fa-calendar-xmark icon"></i> Check Out
              </label>
              <input
                type="date"
                className="form-control"
                value={checkOut}
                min={checkIn || today} // cannot choose before check-in
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* GUESTS */}
            <div className="col-md-1">
              <label className="fw-bold">
                <i className="fa-solid fa-user icon"></i> Guests
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Total"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={0}
              />
            </div>

            {/* SEARCH BTN */}
            <div className="col-md-1 d-flex justify-content-center align-items-end">
              <button className="search-btn" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
