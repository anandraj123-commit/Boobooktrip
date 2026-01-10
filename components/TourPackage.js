"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import { tripLists } from "../constant/trip";
import TripPopup from "../components/TripPopup";   // ✅ popup import

export default function TourPackage() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <div className="slider-container">

      <h1 className="heading">
        Tour <span>Packages</span>
      </h1>

      <p className="sub-heading">
        World's leading tour and travels Booking website, Over 30,000 packages worldwide.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {tripLists.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="slide">

              <img src={trip.imageUrl} alt={trip.name} />

              <div className="slide-content">
                <h2 style={{ color: "#e63950" }}>{trip.name}</h2>
                <p className="duration" >{trip.duration}</p>

                <p>
                  <span className="tag">{trip.offer}</span> OFF
                </p>

                {/* 🔥 OPEN POPUP */}
                <button
                  style={{
                    color: "#fff",
                    background: "#ff2a4a",
                    borderRadius: "4px",
                    padding: "10px 18px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onClick={() => setSelectedTrip(trip)}
                >
                  Ask For
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>

      {/* 🔥 POPUP */}
      {selectedTrip && (
        <TripPopup
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}

    </div>
  );
}
