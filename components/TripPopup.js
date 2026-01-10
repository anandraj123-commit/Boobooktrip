'use client';

import { useState, useEffect, useRef } from "react";
import "../styles/tripPopup.scss";

export default function TripPopup({ trip, onClose }) {
  const modalRef = useRef(null);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");

  /* Close on outside click */
  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const handleSearch = () => {
    if (!checkIn || !checkOut || !guests) {
      setError("Please fill all inquiry details");
      return;
    }

    setError("");

    const params = new URLSearchParams({
      location: trip.location || "Andaman & Nicobar",
      checkIn,
      checkOut,
      guests,
      trip: trip.slug,
    });

    window.location.href = `/trip/${trip.slug}?${params.toString()}`;
  };

  return (
    <div className="tripPopup modal fade show custom-modal" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content border-0 rounded-4 overflow-hidden"
          ref={modalRef}
        >
          {/* IMAGE */}
          <div className="popup-hero">
            <img src={trip.imageUrl} alt={trip.name} className="popup-img" />

            <div className="popup-overlay">
              <h3 className="popup-title">{trip.name}</h3>
              <p className="popup-location">{trip.location}</p>

              <div className="popup-tags">
                {trip.servicesAvailable?.map((srv, i) => (
                  <span key={i} className="service-item">
                    <i className="fa fa-check tick"></i> {srv}
                  </span>
                ))}
              </div>

              <div className="popup-price">
                ₹ {trip.price} (10% OFF)
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="popup-inquiry">
            <form className="inquiry-form">
              <div className="inquiry-field">
                <label><i className="fa fa-calendar-check"></i> Check In</label>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </div>

              <div className="inquiry-field">
                <label><i className="fa fa-calendar-times"></i> Check Out</label>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>

              <div className="inquiry-field">
                <label><i className="fa fa-user"></i> Guests</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Total"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>

              {error && <p className="inquiry-error">{error}</p>}

              <button type="button" className="inquiry-btn" onClick={handleSearch}>
                <i className="fa fa-search"></i> Search
              </button>
            </form>
          </div>

          {/* CLOSE */}
          <button className="popup-close" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
