import styles from "../styles/Faqs.module.css";
import FaqSection from '../components/FaqSection.jsx';

export default function Faqs() {
  return (
    <>
    <section className={styles.faqHeroSection}>
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-6 text-white">
            <h1 className="fw-bold display-4">Most Questions</h1>
            <h1 className="fw-bold display-4 mb-4">We Answered</h1>

            <p className="lead opacity-75">
              Explore our FAQ page for comprehensive answers to common queries.
              Find solutions, troubleshoot, and gain insights into our services
              and offerings. Your questions, answered with clarity and detail.
            </p>
          </div>

          {/* RIGHT IMAGE SECTION WITH TWO IMAGES */}
          <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
            <div className={styles.imageContainer}>
              
              {/* BACKGROUND IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200"
                className={styles.bgImage}
                alt="Office Background"
              />

              {/* FOREGROUND IMAGE */}
             {/* <img 
                src="images/faqs-image.jpg"
                className={styles.frontImage}
                alt="Customer Support"
              />  */}

            </div>
          </div>

        </div>
      </div>
    </section>
    <FaqSection/>
    </>
  );
}
