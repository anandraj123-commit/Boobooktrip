// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";

// const slides = [
//   { title: "Adventure package", img: "/images/package1.jpg" },
//   { title: "Religious package", img: "/images/package2.jpg" },
//   { title: "Water sports package", img: "/images/package3.jpg" },
//   { title: "Beach package", img: "/images/package3.jpg" },
//   { title: "Honeymoon package", img: "/images/package3.jpg" },
// ];

// export default function TourPackage() {
//   return (
//     <div className="slider-container">

//       <h1 className="heading">
//         Tour <span>Packages</span>
//       </h1>

//       <p className="sub-heading">
//         World's leading tour and travels Booking website, Over 30,000 packages worldwide.
//       </p>

//       <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false
//         }}
//         pagination={{
//           el: ".custom-pagination",
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {slides.map((s, i) => (
//           <SwiperSlide key={i}>
//             <div className="slide">
//               <img src={s.img} alt={s.title} />
//               <div className="slide-content">
//                 <h2>{s.title}</h2>
//                 <p><span className="tag">20+</span> destinations</p>
//                 <button>Book now</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* PAGINATION OUTSIDE SWIPER */}
//       <div className="custom-pagination"></div>

//     </div>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import { tripLists } from "../constant/trip";  // <-- import trip.js

export default function TourPackage() {
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
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {tripLists.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="slide">

              {/* IMAGE */}
              <img src={trip.imageUrl} alt={trip.name} />

              <div className="slide-content">

                {/* TITLE */}
                <h2>{trip.name}</h2>

                {/* DURATION */}
                <p className="duration">{trip.duration}</p>

                {/* OFFER TAG */}
                <p>
                  <span className="tag">{trip.offer}</span> OFF
                </p>

                {/* BUTTON */}
                <button>Ask For</button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION OUTSIDE SWIPER */}
      <div className="custom-pagination"></div>

    </div>
  );
}
