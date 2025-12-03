// export default function TopSightSeeing() {
//     return (
//       <section className="sight-section py-5">
//         <div className="container text-center">
  
//           {/* TITLE */}
//           <h1 className="section-title">
//             Top <span className="highlight">Sight Seeing</span> In This Month
//           </h1>
  
//           <p className="section-subtitle">
//             World's leading tour and travels Booking website, Over 30,000 packages worldwide.
//             Book travel packages and enjoy your holidays with distinctive experience
//           </p>
  
//           {/* Decorative Dot */}
  
//           {/* PACKAGE GRID */}
//           <div className="row mt-5 g-5">
  
//             {/* CARD 1 */}
//             <div className="col-md-6 d-flex">
//               <div className="package-card d-flex gap-4">
//                 <img
//                   src="/images/sightseeing1.jpg"
//                   alt="London"
//                   className="package-img"
//                 />
  
//                 <div>
//                   <h6 className="pkg-head">Honeymoon Package</h6>
//                   <h5 className="pkg-days">7 DAYS / 6 NIGHTS</h5>
//                   <p className="pkg-text">
//                     lorem ipsum simplelorem ipsum simplelorem ipsum simple
//                   </p>
//                   <button className="info-btn">more info</button>
//                 </div>
//               </div>
//             </div>
  
//             {/* CARD 2 */}
//             <div className="col-md-6 d-flex">
//               <div className="package-card d-flex gap-4">
//                 <img
//                   src="/images/sightseeing2.jpg"
//                   alt="Vegas"
//                   className="package-img"
//                 />
  
//                 <div>
//                   <h6 className="pkg-head">Family Package</h6>
//                   <h5 className="pkg-days">14 DAYS / 13 NIGHTS</h5>
//                   <p className="pkg-text">
//                     lorem ipsum simplelorem ipsum simplelorem ipsum simple
//                   </p>
//                   <button className="info-btn">more info</button>
//                 </div>
//               </div>
//             </div>
  
//             {/* CARD 3 */}
//             <div className="col-md-6 d-flex">
//               <div className="package-card d-flex gap-4">
//                 <img
//                   src="./images/sightseeing3.jpg"
//                   alt="Airplane"
//                   className="package-img"
//                 />
  
//                 <div>
//                   <h6 className="pkg-head">Weekend Package</h6>
//                   <h5 className="pkg-days">3 DAYS / 2 NIGHTS</h5>
//                   <p className="pkg-text">
//                     lorem ipsum simplelorem ipsum simplelorem ipsum simple
//                   </p>
//                   <button className="info-btn">more info</button>
//                 </div>
//               </div>
//             </div>
  
//             {/* CARD 4 */}
//             <div className="col-md-6 d-flex">
//               <div className="package-card d-flex gap-4">
//                 <img
//                   src="/images/sightseeing4.jpg"
//                   alt="Sydney"
//                   className="package-img"
//                 />
  
//                 <div>
//                   <h6 className="pkg-head">Group Package</h6>
//                   <h5 className="pkg-days">10 DAYS / 9 NIGHTS</h5>
//                   <p className="pkg-text">
//                     lorem ipsum simplelorem ipsum simplelorem ipsum simple
//                   </p>
//                   <button className="info-btn">more info</button>
//                 </div>
//               </div>
//             </div>
  
//           </div>
//         </div>
//       </section>
//     );
//   }
  

import { tripLists } from "../constant/trip";

export default function TopSightSeeing() {
  return (
    <section className="sight-section py-5">
      <div className="container text-center">

        {/* TITLE */}
        <h1 className="section-title">
          Top <span className="highlight">Sight Seeing</span> In This Month
        </h1>

        <p className="section-subtitle">
          World's leading tour and travels Booking website, Over 30,000 packages worldwide.
          Book travel packages and enjoy your holidays with a distinctive experience.
        </p>

        {/* PACKAGE GRID */}
        <div className="row mt-5 g-5">

          {tripLists.map((trip) => (
            <div key={trip.id} className="col-md-6 d-flex">
              <div className="package-card d-flex gap-4">

                <img
                  src={trip.imageUrl}
                  alt={trip.name}
                  className="package-img"
                />

                <div>
                  <h6 className="pkg-head">{trip.name}</h6>

                  {/* ⬅ Show duration here */}
                  <h5 className="pkg-days">{trip.duration}</h5>

                  <p className="pkg-text">{trip.description}</p>

                  <button className="info-btn">more info</button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
