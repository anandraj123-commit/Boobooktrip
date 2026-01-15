export default function AboutWelcomeSection() {
  return (
    <section className="welcome-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h3 className="welcome-title">
              Hi! Welcome to <span>Boobook Trip</span>
            </h3>

            <h5 className="welcome-subtitle fst-italic">
            Book your journey with comfort and confidence.
            </h5>

            <p className="welcome-text">
              We offer smooth and reliable travel solutions designed for your comfort. Enjoy 
              well-planned trips, helpful support, and a worry-free experience from the start 
              to the finish of your journey. Our team ensures simple, clear, and quality 
              assistance for every traveler.
            </p>

            <p className="welcome-text">
              From planning to travel, we focus on providing convenient, safe, and enjoyable 
              experiences for all our customers.
            </p>

            <a href="#" className="btn call-btn px-4 py-3 mt-3">
              CALL TO US: +91-7484052727
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src="/images/about-team.jpg"
              className="img-fluid rounded shadow-lg"
              alt="Team Image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
