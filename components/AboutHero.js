export default function AboutHero() {
    return (
        <section className="about-hero d-flex align-items-center justify-content-center position-relative">
            <div className="text-center text-white hero-content">
                <h1 className="fw-bold display-4">ABOUT US</h1>
            </div>

            {/* Breadcrumb at bottom */}
            <div className="breadcrumb-box position-absolute w-100 text-center">
                <a href="#" className="breadcrumb-btn">Home // About</a>
            </div>
        </section>
    )
}