import '../styles/Partners.scss';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">

        <h2 className="section-title">Our Trusted Partners</h2>

        <div className="row justify-content-center g-4">

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/sinclairs.jpg" alt="Nautika Logo" />
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/foret.jpg" alt="De Foret Logo" />
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/boutique.jpg" alt="Sand Heaven Logo" />
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/jalakara.jpg" alt="Sinclairs Logo" />
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/nutika.jpg" alt="Jalakara Logo" />
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="partner-box">
              <img src="/images/seashell.jpg" alt="Seashell Logo" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
