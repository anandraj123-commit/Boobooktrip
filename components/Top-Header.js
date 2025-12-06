'use client';
import Link from "next/link";

export default function TopHeader() {
    return (
        <div className="top-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 20px", flexWrap: "wrap" }}>
            
            {/* PHONE NUMBERS ON LEFT */}
            <div style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <a
                    href="tel:+917484052727"
                    style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        animation: "bounce 2s infinite",
                        fontSize: "14px"
                    }}
                >
                    <i className="fas fa-phone-alt"></i> +91 7484052727
                </a>
                <a
                    href="tel:+911169296377"
                    style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        animation: "bounce 2s infinite",
                        fontSize: "14px"
                    }}
                >
                    <i className="fas fa-phone-alt"></i> +91 1169296377
                </a>
            </div>

            <div className="right-section" style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "5px" }}>
                
                {/* SOCIAL ICONS */}
                <div className="social-icons" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                <div className="search-box" style={{ marginRight: "10px" }}>
                    <i className="fas fa-search"></i>
                </div>

                {/* HOME BUTTON */}
                <Link href="/" className="btn-custom btn-profile" style={{ fontSize: "14px" }}>
                    Home
                </Link>
            </div>

            {/* ANIMATION INLINE STYLE */}
            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-5px);
                    }
                    60% {
                        transform: translateY(-3px);
                    }
                }

                @media (max-width: 768px) {
                    .top-bar {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 10px;
                    }

                    .right-section {
                        margin-top: 10px;
                        justify-content: flex-start;
                    }

                    .social-icons i {
                        font-size: 16px;
                    }

                    .btn-custom {
                        font-size: 14px;
                        padding: 4px 8px;
                    }
                }
            `}</style>
        </div>
    );
}
