// export default function BudgetPackages() {
//     return (
//       <section className="budget-package">
//         <div className="container">

//           <div className="row align-items-center">

//             {/* LEFT CONTENT */}
//             <div className="col-md-7">

//               <div className="stars-box">★ ★ ★ ★ ★</div>

//               <h1 className="mt-4 fw-bold" style={{ fontSize: "48px" }}>
//                 STANDARDIZED <br /> BUDGET PACKAGES
//               </h1>

//               <hr style={{ width: "130px", border: "1px solid rgba(255,255,255,0.3)" }} />

//               <h2 className="fw-bold mt-3" style={{ fontSize: "60px" }}>$99/-</h2>

//               {/* Icons Row */}
//               <div className="row text-center mt-5">

//                 <div className="col-4 col-md-2">
//                   <div className="icon-box">
//                     <img src="https://cdn-icons-png.flaticon.com/128/864/864685.png" width="32" alt="" />
//                   </div>
//                   <div className="icon-label">Free WiFi</div>
//                 </div>

//                 <div className="col-4 col-md-2">
//                   <div className="icon-box">
//                     <img src="https://cdn-icons-png.flaticon.com/128/1046/1046784.png" width="32" alt="" />
//                   </div>
//                   <div className="icon-label">Breakfast</div>
//                 </div>

//                 <div className="col-4 col-md-2">
//                   <div className="icon-box">
//                     <img src="https://cdn-icons-png.flaticon.com/128/558/558475.png" width="32" alt="" />
//                   </div>
//                   <div className="icon-label">Pool</div>
//                 </div>

//                 <div className="col-4 col-md-2">
//                   <div className="icon-box">
//                     <img src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png" width="32" alt="" />
//                   </div>
//                   <div className="icon-label">Television</div>
//                 </div>

//                 <div className="col-4 col-md-2">
//                   <div className="icon-box">
//                     <img src="https://cdn-icons-png.flaticon.com/128/2964/2964514.png" width="32" alt="" />
//                   </div>
//                   <div className="icon-label">GYM</div>
//                 </div>

//               </div>
//             </div>

//             {/* RIGHT SIDE CIRCLES */}
//             <div className="col-md-5">
//               <div className="mini-circle">
//                 <span style={{ fontSize: "28px", color: "#ff375f" }}>Go </span>
//                <small className="nav-underline">NAVIGAR</small>
//               </div>

//               <div className="big-circle">
//                 <h1 className="fw-bold" style={{ fontSize: "50px" }}>
//                   Get<br />70%<br />Off
//                 </h1>
//                 {/* <div className="offer-code">Use Code: RG5481WERQ</div> */}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     );
//   }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { tripLists } from "../constant/trip";

export default function TripSlider() {
  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {tripLists.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div
              className="relative w-full h-[550px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${trip.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Background Overlay */}
              <div className="absolute inset-0 bg-[#0e1d3d]/80"></div>

              {/* Main Content */}
              <div className="relative z-10 text-center px-4 max-w-3xl text-white">
                <div className="inline-block bg-red-500 px-4 py-2 rounded text-xl tracking-widest mb-4">
                  ★★★★★
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {trip.name}
                </h1>

                <p className="text-lg md:text-xl opacity-90 mb-4">
                  {trip.description}
                </p>

                <p className="text-4xl md:text-5xl font-semibold mb-4">
                  {trip.price}
                </p>

                <p className="text-lg font-medium italic mb-6">{trip.duration}</p>

                {/* Services Available */}
                <div className="flex justify-center flex-wrap gap-4 text-sm">
                  {trip.servicesAvailable.map((service, index) => (
                    <span
                      key={index}
                      className="bg-red-500 px-4 py-2 rounded-md shadow"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Discount Bubble */}
              {/* Discount Bubble */}
              <div
                className="
    absolute right-6 top-6 md:right-16 md:top-16 
    w-40 h-40 md:w-52 md:h-52 
    bg-red-500 hover:bg-[rgb(244,186,54)] 
    text-white rounded-full border-8 border-white 
    flex flex-col items-center justify-center 
    transition-all duration-300 
    z-10
  "
              >

                <p className="text-2xl font-semibold">Get</p>

                <p className="text-4xl md:text-6xl font-extrabold">
                  {trip.offer}
                </p>

                <p className="text-2xl font-semibold">Off</p>
              </div>

              {/* Trip Name Badge */}
              <div className="absolute right-57 top-10 bg-white text-red-500
  w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center shadow
  z-0"
              >
                <p className="text-xl md:text-2xl font-extrabold text-center">
                  GO
                </p>
                <p className="tracking-widest text-black mt-1 text-xs md:text-sm">
                  Navigar
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
