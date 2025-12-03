'use client'
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutUsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Smooth counter from 0 to 'end'
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [end, duration]);

    return <>{count}</>;
  };

  return (
    <section className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side images */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-12" data-aos="fade-right">
                <img src="/images/about3.jpg" className="img-fluid rounded img-anim" alt="" />
              </div>
              <div className="col-6" data-aos="zoom-in">
                <img src="/images/about1.jpg" className="img-fluid rounded img-anim" alt="" />
              </div>
              <div className="col-6" data-aos="fade-up">
                <img src="/images/about2.jpg" className="img-fluid rounded img-anim" alt="" />
              </div>
            </div>

          </div>

          {/* Right side content */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h6 className="about-tag" data-aos="fade-left">About Us</h6>

            <h1 className="fw-bold display-5" data-aos="fade-left">
              Comfortable Travel <br /> Made Simple.
            </h1>

            <p className="text-secondary mt-3" data-aos="fade-left">
              Enjoy smooth and easy travel services built for comfort and quality. Plan your trips with 
              support that makes every journey simple and stress-free.
            </p>

            <div className="row mt-4">
              <div className="col-4 border-end text-center" data-aos="zoom-in">
                <h3 className="fw-bold"><Counter end={25} /></h3>
                <p className="text-secondary small">Our Travelers</p>
              </div>
              <div className="col-4 border-end text-center" data-aos="zoom-in">
                <h3 className="fw-bold"><Counter end={300} /></h3>
                <p className="text-secondary small">Destinations</p>
              </div>
              <div className="col-4 text-center" data-aos="zoom-in">
                <h3 className="fw-bold"><Counter end={35} /></h3>
                <p className="text-secondary small">Years of Experience</p>
              </div>
            </div>

            <button 
              className="btn btn-success px-4 py-3 mt-4 rounded-pill" 
              data-aos="fade-up" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Discover More →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
