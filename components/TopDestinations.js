export default function TopDestinations() {
    return (
        <section className="top-destinations py-5">
            <div className="container">

                {/* Title Section */}
                <div className="text-center">
                    <h1 className="section-title">
                        Top <span>Destinations</span>
                    </h1>

                    <div className="divider">
                        <span className="circle"></span>
                    </div>

                    <p className="subtitle">
                        World's leading Hotel Booking website, Over 30,000 Hotel rooms worldwide.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="row mt-5 g-4">

                    {/* Left Large Card */}
                    <div className="col-lg-6">
                        <div className="destination-card large-card">
                            <img 
                                src="/images/top_destination_port_blair.jpg"
                                alt="Port-Blair"
                            />
                            <div className="content">
                                <p className="small-text">12 Packages</p>
                                <h2>Port Blair</h2>
                                <p>Starting from Rs4500</p>
                            </div>
                        </div>
                    </div>

                    {/* Right 4 Smaller Cards */}
                    <div className="col-lg-6">
                        <div className="row g-4">

                            <div className="col-6">
                                <div className="destination-card small-card">
                                    <img 
                                        src="/images/havelock-island.jpg"
                                        alt="top_destination_havelock_island"
                                    />
                                    <div className="content">
                                        <h2>Havelock Island</h2>
                                        <p>Starting from Rs6000</p>
                                    </div>
                                </div>
                            </div>

                           

                            <div className="col-6">
                                <div className="destination-card small-card">
                                    <img 
                                        src="/images/barren-island.jpg"
                                        alt="USA"
                                    />
                                    <div className="content">
                                        <h2>Barren Island</h2>
                                        <p>Starting from Rs4800</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="destination-card small-card">
                                    <img src="images/baratang-island.jpg" />
                                    <div className="content">
                                        <h2>Baratang Island </h2>
                                        <p>Starting from Rs2400</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="destination-card small-card">
                                    <img 
                                        src="/images/neil-island.png"
                                        alt="India"
                                    />
                                    <div className="content">
                                        <h2>Neil Island</h2>
                                        <p>Starting from Rs2400</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
