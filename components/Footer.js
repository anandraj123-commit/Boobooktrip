import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            {/* OFFER SECTION */}
            <div className="offer-section">
                <div className="offer-card">
                    <img
                        src="/images/port-blair.jpg"
                        alt="Offer Image"
                    />
                    <div className="offer-content">
                        <h2><span>30%</span> OFF</h2>
                        <h3>Port Blair, Andaman & Nicobar</h3>
                        <p>Valid only for 15th Dec</p>
                        <a href="#" className="btn">Ask For</a>
                    </div>
                </div>

                <div className="offer-card">
                    <img
                        src="/images/havelock-island.jpg"
                        alt="Offer Image"
                    />
                    <div className="offer-content">
                        <h2><span>42%</span> OFF</h2>
                        <h3>Havelock Island</h3>
                        <p>Valid only for 20th Dec</p>
                        <a href="#" className="btn">Ask For</a>
                    </div>
                </div>
            </div>

            {/* VACATION TAGS SECTION */}
            <div className="vacation-section">
                <h3>Most Popular Vacations</h3>
                <div className="tags">
                    <span>Port Blair</span>
                    <span>Havelock Island</span>
                    <span>Neil Island</span>
                    <span>Baratang Island</span>
                    <span>Diglipur Island</span>
                    <span>Rangat Island</span>
                    <span>Long Island</span>
                    <span>Mayabunder Island</span>
                </div>
            </div>

            {/* FOOTER GRID SECTION */}
            <div className="footer-container">

                <div className="footer-col">
                    <h3>Holiday Tour & Travels</h3>
                    <p>
                        World's leading tour and travels booking website,
                        over 30,000 packages worldwide.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Address & Contact Info</h3>
                    <p>
                        Brookshabad, Kanchi Nala,Brookshabad<br />
                        Chakkar Gaon,Port Blair(SRI VIJAYA PURAM)<br/>
                        South Andaman, A & N Islands-744112
                    </p>
                    <p className="phone">Phone: +91-7484052727, +91-01169296377</p>
                </div>

                <div className="footer-col">
                    <h3>Support & Help</h3>
                    <ul>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        {/* <li>
                            <Link href="/blog">Blog</Link>
                        </li> */}
                        <li>
                            <Link href="/privacy">Privacy</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Follow With Us</h3>
                    <p>Join thousands of happy travelers—discover why so many choose Boobooktrip for unforgettable journeys.</p>

                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}
