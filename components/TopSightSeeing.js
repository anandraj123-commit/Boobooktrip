'use client';

import { useState, useRef, useEffect } from "react";
import { tripLists } from "../constant/trip";
import "../styles/TopSightSeeing.scss";

export default function TopSightSeeing() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  // ✅ TODAY DATE (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedTrip(null);
      }
    }

    if (selectedTrip) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedTrip]);

  const handleSearch = () => {
    if (!selectedTrip) {
      setError("Please select a tour trip");
      return;
    }

    if (!checkIn || !checkOut || !guests) {
      setError("Please fill all inquiry details");
      return;
    }

    setError("");

    const params = new URLSearchParams({
      location: selectedTrip.location || "Andaman & Nicobar",
      checkIn,
      checkOut,
      guests,
      trip: selectedTrip.slug,
    });

    window.location.href = `/trip/${selectedTrip.slug}?${params.toString()}`;
  };

  return (
    <section className="sight-section py-5">
      <div className="container text-center">

        <h1 className="section-title">
          Top <span className="highlight">Sight Seeing</span> In This Month
        </h1>

        <p className="section-subtitle">
          World's leading tour and travels Booking website, Over 30,000 packages worldwide.
        </p>

        {/* ================= TRIP CARDS ================= */}
        <div className="row mt-5 g-5">
          {tripLists.map((trip) => (
            <div key={trip.id} className="col-md-6 d-flex">
              <div className="package-card d-flex gap-4">
                <img src={trip.imageUrl} alt={trip.name} className="package-img" />

                <div className="text-start">
                  <h6 className="pkg-head">{trip.name}</h6>
                  <h5 className="pkg-days">{trip.duration}</h5>
                  <p className="pkg-text">{trip.description}</p>

                  <button
                    className="info-btn"
                    onClick={() => setSelectedTrip(trip)}
                  >
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= POPUP MODAL ================= */}
        {selectedTrip && (
          <div className="modal fade show custom-modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content border-0 rounded-4" ref={modalRef}>

                {/* ================= HERO ================= */}
                <div className="popup-hero">
                  <img
                    src={selectedTrip.imageUrl}
                    alt={selectedTrip.name}
                    className="popup-img"
                  />

                  <div className="popup-overlay">
                    <h3 className="popup-title">{selectedTrip.name}</h3>
                    <p className="popup-location">{selectedTrip.location}</p>

                    <div className="popup-tags">
                      {selectedTrip.servicesAvailable?.map((srv, i) => (
                        <span key={i} className="service-item">
                          <i className="fa fa-check tick"></i> {srv}
                        </span>
                      ))}
                    </div>

                    <div className="popup-price">
                      ₹ {selectedTrip.price} ({selectedTrip.offer} OFF)
                    </div>
                  </div>
                </div>

                {/* ================= BODY ================= */}
                <div className="popup-body">

                  {/* ================= INQUIRY ================= */}
                  <div className="popup-inquiry">
                    <form className="inquiry-form">

                      <div className="inquiry-field">
                        <label>
                          <i className="fa fa-calendar-check"></i> Check In
                        </label>
                        <input
                          type="date"
                          min={today}                 // ✅ NO PREVIOUS DATE
                          value={checkIn}
                          onChange={(e) => {
                            setCheckIn(e.target.value);
                            setCheckOut("");          // optional reset
                          }}
                        />
                      </div>

                      <div className="inquiry-field">
                        <label>
                          <i className="fa fa-calendar-times"></i> Check Out
                        </label>
                        <input
                          type="date"
                          min={checkIn || today}      // ✅ AFTER CHECK-IN
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                        />
                      </div>

                      <div className="inquiry-field">
                        <label>
                          <i className="fa fa-user"></i> Guests
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                        />
                      </div>

                      {error && <p className="inquiry-error">{error}</p>}

                      <button
                        type="button"
                        className="inquiry-btn"
                        onClick={handleSearch} 
                      >
                        <i className="fa fa-search"></i> Search
                      </button>
                    </form>
                  </div>

                  {/* ================= ITINERARY ================= */}
                  <div className="popup-itinerary text-start">
                    <h4 className="itinerary-title">
                      <i className="fa fa-clipboard-list me-2"></i> Itineraries
                    </h4>

                    <div className="itinerary-wrapper">
                      <table className="table itinerary-table">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Travel</th>
                            <th>Places to Visit</th>
                            <th>Night Stay / Activity</th>
                          </tr>
                        </thead>

                        <tbody>
                          {selectedTrip.itinerary.map((item, index) => (
                            <tr key={index}>
                              <td className="day-badge">Day {item.day}</td>

                              <td>{item.travel || <span className="muted">—</span>}</td>

                              <td>
                                {item.places_to_visit
                                  ? item.places_to_visit.map((place, i) => (
                                      <span key={i} className="place-chip">
                                        <i className="fa fa-map-marker-alt"></i> {place}
                                      </span>
                                    ))
                                  : <span className="muted">—</span>}
                              </td>

                              <td>{item.night_stay || item.activity || "—"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* ================= CLOSE ================= */}
                <button
                  className="popup-close"
                  onClick={() => setSelectedTrip(null)}
                >
                  ✕
                </button>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
