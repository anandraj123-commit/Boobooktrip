
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

export default function AboutTestimonialsSection() {

  // Counter Animation
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 30;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  const testimonialData = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
      name: "Vinay Rai",
      role: "Manager, Hotel SRI KPN",
      text:
        "Amazing tour experience with Boobook Trip. Package is very affordable price, Very Good Services. If want to explore Andaman look no further than it. Highly Recommend this."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      name: "Advip Raj",
      role: "Sales Manager",
      text:
        "Very Good Services Provided by Them. I am Happy with this bcz of luxury Hotel with offordable Price. I visited Andaman. With my Family and Friends there is no complaints an All."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      name: "Satendra Raj",
      role: "Sup.SVPMC",
      text:
        "This the best ever company for Trip Planner. I travel with my family on Havelock trip there we explored so many places and the guide by Boobook Trip is So helpful for us on every steps. Thanks to Boobook Trip. We highly recommend this on Andaman Trip."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      name: "Ayush Kumar",
      role: "Sea Man,Port Blair",
      text:
        "The accommodations were comfortable and stylish, and the transportation was seamless. Our guide was knowledgeable, friendly, and went above and beyond to ensure our needs were met. Five stars isn't enough - I'd give it ten stars if I could! Would I travel with BooBook Trip again? Absolutely!"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      name: "Janardhan Upreti",
      role: "Trip Traveller",
      text:
        "The accommodations were comfortable and stylish, and the transportation was seamless. Our guide was knowledgeable, friendly, and went above and beyond to ensure our needs were met. Five stars isn't enough - I'd give it ten stars if I could! Would I travel with BooBook Trip again? Absolutely!"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      name: "Magesh",
      role: "Visitor",
      text:
        "Really had a excellent trip with family where the car service was fantastic. Cordinator amit raj bhansi was very nice, cooperative and was good human being also available at dot time, when needed. I will like to plan all my future trips with In boobook travel with friends. All the best."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
      name: "Michel Saha",
      role: "Traveller",
      text:
      "Very nice experience with Boobook trip and enjoyed full of Fun."
    }

  ];

  return (
    <section className="testimonial-section">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT SIDE TEXT */}
          <div className="col-lg-5">
            <h1 className="heading">
              What our Customers <br />
              <span className="sub">are <span className="green">saying us?</span></span>
            </h1>

            <p className="text-light mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="d-flex gap-5 mt-4">
              <div>
                <h2 className="green"><span className="counter" data-target="3000">0</span>+</h2>
                <p className="text-light">Happy Guest</p>
              </div>

              <div>
                <h2 className="green"><span className="counter" data-target="4.9">0</span>+</h2>
                <p className="text-light">Overall Rating</p>
              </div>
            </div>

            <button className="discover-btn mt-4">Discover More →</button>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="col-lg-7">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".nextBtn",
                prevEl: ".prevBtn",
              }}
              pagination={{
                el: ".line-pagination",
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="line-bullet ${className}"></span>`
              }}
              autoplay={{ delay: 4000 }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonialData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-card fade-in">

                    <div className="stars">⭐⭐⭐⭐⭐</div>

                    <p className="message">{item.text}</p>

                    <div className="d-flex align-items-center mt-4">
                      <img src={item.img} className="profile-img float-anim" alt="profile" />

                      <div className="ms-3">
                        <h5 className="name">{item.name}</h5>
                        <p className="role">{item.role}</p>
                      </div>

                      <div className="ms-auto quote">❝❞</div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* navigation arrows + line pagination */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button className="nav-btn prevBtn">←</button>

              <div className="line-pagination"></div>

              <button className="nav-btn nextBtn">→</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

