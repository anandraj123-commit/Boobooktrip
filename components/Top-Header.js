import Link from "next/link";

export default function TopHeader() {
    return (
        <div className="top-bar">
            <div className="right-section">

                {/* SOCIAL ICONS */}
                <div className="social-icons me-3">
                    <Link href="https://www.facebook.com/tripboobook" target="_blank" className="icon fb">
                        <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link href="https://x.com/BoobookTrip" target="_blank" className="icon tw">
                        <i className="fab fa-twitter"></i>
                    </Link>

                    <Link href="https://www.instagram.com/boobooktrip" target="_blank" className="icon ig">
                        <i className="fab fa-instagram"></i>
                    </Link>

                    <Link href="https://www.linkedin.com/company/boobook-trip/posts/?feedView=all" target="_blank" className="icon li">
                        <i className="fab fa-linkedin"></i>
                    </Link>

                    <Link href="https://wa.me/917484052727" target="_blank" className="icon wa">
                        <i className="fab fa-whatsapp"></i>
                    </Link>
                </div>

                {/* SEARCH ICON */}
                <div className="search-box">
                    <i className="fas fa-search"></i>
                </div>

                {/* HOME BUTTON */}
                <Link href="/" className="btn-custom btn-profile">
                    Home
                </Link>
            </div>
        </div>
    );
}
