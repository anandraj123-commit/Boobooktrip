import Link from "next/link";

export default function TripCoverPage(params) {
    const {name} = params?.trip;
    return (
        <section className="trip-cover-page">
        <div className="trip-coverpage trip-banner d-flex align-items-center">
            <div className="container text-center text-white">
                <h1 className="banner-title">
                    <span className="highlight">{name}</span> Packages
                </h1>

                <div className="divider"></div>

                <p className="banner-subtitle mt-3">
                    World's leading Hotel Booking website, Over 30,000 Hotel rooms worldwide.
                </p>


                <nav className="mt-3 breadcrumb-nav">
                    <Link href="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-current">{name}</span>
                </nav>
            </div>
        </div>
        </section>
    )
}