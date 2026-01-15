"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { tripLists } from "../constant/trip";
import Link from "next/link";
import { destinationsLists } from "../constant/destinations";

export default function BottomHeader() {
  const [sticky, setSticky] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const [openTripsDropdown, setOpenTripsDropdown] = useState(false);
  const [openDestinationsDropdown, setOpenDestinationsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <div className={`bottom-header ${sticky ? "sticky-header" : ""}`}>
        {/* LOGO + TEXT */}
        <Link href="/" style={{ textDecoration: "none" }}>
  <div
    className="bh-logo-container"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    }}
  >
    {/* Logo */}
    <Image src="/Boobook_trip_logo.jpg" alt="Logo" width={70} height={70} />

    {/* Title + Tagline */}
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
        BOOBOOK TRIP
      </span>
      <span
        style={{
          fontFamily: "'Brush Script MT', cursive",
          fontSize: "0.85rem",
          color: "#e73348",
          fontWeight: 500,
          letterSpacing: "0.5px",
          animation: "fadeMove 2s ease-in-out infinite alternate",
          marginTop: "0px",
        }}
      >
        Making Trip Planning Easier For You
      </span>
    </div>
  </div>
</Link>


        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          <div className="dropdown">
            <span className="dropdown-title">Tour Trips ▾</span>
            <div className="dropdown-menu">
              {tripLists.map((trip) => (
                <Link key={trip.id} href={`/trip/${trip.slug}`} className="dropdown-item">
                  <Image src={trip.imageUrl} width={40} height={40} alt={trip.name} />
                  <span>{trip.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdown-title">Destinations ▾</span>
            <div className="dropdown-menu">
              {destinationsLists.map((destination) => (
                <Link key={destination.id} href={`/destinations/${destination.slug}`} className="dropdown-item">
                  <span>{destination.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact-us">Contact Us</Link>
        </nav>

        <button className="bh-hamburger" onClick={() => setOpenSidebar(true)}>
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`sidebar-overlay ${openSidebar ? "show" : ""}`}
        onClick={() => setOpenSidebar(false)}
      ></div>

      {/* MOBILE SIDEBAR */}
      <aside className={`mobile-sidebar ${openSidebar ? "open" : ""}`}>
        <button className="sidebar-close" onClick={() => setOpenSidebar(false)}>
          ✖
        </button>
        <nav className="sidebar-links">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-title"
              onClick={() => setOpenTripsDropdown(!openTripsDropdown)}
            >
              Tour Trips {openTripsDropdown ? "▲" : "▼"}
            </button>
            {openTripsDropdown && (
              <div className="mobile-dropdown-menu">
                {tripLists.map((trip) => (
                  <Link key={trip.id} href={`/trip/${trip.slug}`} className="mobile-dropdown-item">
                    <Image src={trip.imageUrl} width={40} height={40} alt={trip.name} />
                    <span>{trip.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-title"
              onClick={() => setOpenDestinationsDropdown(!openDestinationsDropdown)}
            >
              Destinations {openDestinationsDropdown ? "▲" : "▼"}
            </button>
            {openDestinationsDropdown && (
              <div className="mobile-dropdown-menu">
                {destinationsLists.map((destination) => (
                  <Link key={destination.id} href={`/destinations/${destination.slug}`} className="mobile-dropdown-item">
                    <span>{destination.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact-us">Contact Us</Link>
        </nav>
      </aside>

      {/* INLINE CSS */}
      <style jsx>{`
        .bottom-header {
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          z-index: 9999;
        }

        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .desktop-nav {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: center;
        }

        .desktop-nav a,
        .desktop-nav .dropdown-title {
          text-decoration: none !important;
          font-size: 16px;
          color: #222;
          cursor: pointer;
        }

        .desktop-nav a:hover,
        .desktop-nav .dropdown-title:hover {
          background: #c91f35;
          color: white;
          padding: 4px 6px;
          border-radius: 4px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 240px;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          padding: 10px 0;
          z-index: 100000;
        }

        @media (min-width: 992px) {
          .dropdown:hover .dropdown-menu {
            display: block;
          }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-bottom: 1px solid #eee;
          text-decoration: none !important;
          color: #222;
        }

        .dropdown-item:hover {
          background: #c91f35;
          color: white;
        }

        .bh-hamburger {
          font-size: 28px;
          background: none;
          border: 1px solid #001f3f;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          display: none;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .bh-hamburger {
            display: block;
          }
        }

        .mobile-sidebar {
          position: fixed;
          right: -300px;
          top: 0;
          width: 300px;
          height: 100vh;
          overflow-y: auto;
          background: #fff;
          padding: 20px;
          transition: 0.3s ease;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.25);
          z-index: 100000;
        }

        .mobile-sidebar.open {
          right: 0;
        }

        .sidebar-close {
          font-size: 26px;
          background: none;
          border: 1px solid #001f3f;
          padding: 5px 10px;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .sidebar-links a,
        .mobile-dropdown-title {
          width: 100%;
          display: block;
          text-decoration: none !important;
          padding: 14px 8px;
          border-bottom: 1px solid #ddd;
          color: #333;
          font-size: 16px;
        }

        .sidebar-links a:hover,
        .mobile-dropdown-title:hover {
          background: #c91f35;
          color: #fff;
        }

        .mobile-dropdown-menu {
          background: #f8f8f8;
          border-left: 2px solid #c91f35;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-bottom: 1px solid #eee;
          color: #333;
          text-decoration: none !important;
        }

        .mobile-dropdown-item:hover {
          background: #c91f35;
          color: #fff;
        }

        .sidebar-overlay {
          position: fixed;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          top: 0;
          left: 0;
          opacity: 0;
          pointer-events: none;
          transition: 0.3s;
          z-index: 90000;
        }

        .sidebar-overlay.show {
          opacity: 1;
          pointer-events: all;
        }

        @keyframes fadeMove {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(2px); opacity: 0.9; }
          100% { transform: translateY(0px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
