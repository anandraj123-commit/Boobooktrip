"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { tripLists } from "../constant/trip";
import Link from "next/link";
import { destinationsLists } from "../constant/destinations";

export default function BottomHeader() {
  const [sticky, setSticky] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  // Separate states for each dropdown
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
        {/* LOGO */}
        <div className="bh-logo-container">
           <Image src="/Boobook_trip_logo.jpg" alt="Logo" width={70} height={70} /> 
           <div className="logo-text"> 
            <span className="bh-title">BOOBOOK TRIP</span> 
            </div> </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          {/* DESKTOP DROPDOWN - TRIPS */}
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

          {/* DESKTOP DROPDOWN - DESTINATIONS */}
          <div className="dropdown">
            <span className="dropdown-title">Destinations ▾</span>

            <div className="dropdown-menu">
              {destinationsLists.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/destinations/${destination.slug}`}
                  className="dropdown-item"
                >
                  <span>{destination.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact-us">Contact Us</Link>
        </nav>

        {/* HAMBURGER */}
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

          {/* MOBILE DROPDOWN - TRIPS */}
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

          {/* MOBILE DROPDOWN - DESTINATIONS */}
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
                  <Link
                    key={destination.id}
                    href={`/destinations/${destination.slug}`}
                    className="mobile-dropdown-item"
                  >
                    <span>{destination.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact-us">Contact Us</Link>
        </nav>
      </aside>

      {/* CSS */}
      <style jsx>{`
        /* HEADER */
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

        .bh-logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bh-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        /* DESKTOP NAV */
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

        /* DESKTOP DROPDOWN (HOVER) */
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

        /* HAMBURGER */
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

        /* MOBILE SIDEBAR */
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

        /* MOBILE LINKS */
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

        /* OVERLAY */
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
      `}</style>
    </>
  );
}