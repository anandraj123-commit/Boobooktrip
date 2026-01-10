"use client";

import { useState } from "react";
import Link from "next/link";
import TripPopup from "@/components/TripPopup";     // ✅ adjust path if needed
import { tripLists } from "@/constant/trip";       // ✅ adjust path if needed

export default function Footer() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Example keywords list (replace with full 500)
  const keywords = [
  "Andaman travel", "Andaman and Nicobar tours", "Andaman trip booking", "Andaman holiday packages", "Andaman tour operators", "Andaman vacation deals", "Andaman Island tours", "Nicobar Island tours", "Andaman trips", "Andaman travel agency", "Havelock Island tour", "Neil Island tour", "Ross Island visit", "Port Blair tour", "Andaman honeymoon packages", "Andaman family tour packages", "Andaman group tours", "Andaman island hopping", "Andaman adventure tours", "Andaman sightseeing tours", "Port Blair tour", "Havelock Island tour", "Neil Island tour", "Ross Island visit", "Cellular Jail tour", "Radhanagar Beach tours", "Elephant Beach snorkelling", "North Bay Island trip", "Mahatma Gandhi Marine Sanctuary", "Chidiya Tapu sunset tour", "Baratang Island tour", "Limestone Caves tour", "Barren Island volcano tour", "Swaraj Dweep packages", "Little Andaman adventure", "Diglipur tour packages", "Andaman ferry booking", "Andaman airport pickup", "Andaman Ayushman Bharat tours", "Andaman tribal culture tour", "Best Andaman tour packages from India", "Affordable Andaman trip packages", "Customized Andaman holiday", "Best beaches in Andaman tours", "Andaman honeymoon trip deals", "Andaman snorkeling tour packages", "Andaman scuba diving packages", "Andaman luxury tours", "Andaman budget tour packages", "Andaman family friendly tours", "Andaman couple packages", "3 night 4 day Andaman tour", "4 night 5 day Andaman package", "Andaman tour with ferry tickets", "Andaman package with hotel", "Andaman tour with flights", "Andaman beach hopping tour", "Best Andaman sightseeing tour", "Andaman adventure activities tour", "Andaman tour with scuba diving", "Andaman tour booking", "Andaman tour management services", "Andaman trip planner agency", "Book Andaman trips online", "Andaman hotel booking", "Andaman ferry ticket booking", "Andaman tour support", "Andaman travel assistance", "Andaman travel consultant", "Book Andaman adventure tour", "Cheap Andaman trip bookings", "Secure Andaman bookings", "Andaman travel packages booking", "Best booking site for Andaman trips", "Andaman trip cost calculator", "Andaman group tour booking", "Andaman package deals", "Andaman travel discounts", "Andaman season deals", "Book Andaman holidays", "How to book Andaman tour", "What to see in Andaman", "Best time to visit Andaman", "Andaman tour tips", "Andaman trek packages", "Andaman honeymoon ideas", "Andaman tour cost per person", "Andaman water sports cost", "Best beaches in Andaman Islands", "Andaman tour with kids", "Best resorts in Andaman", "Andaman eco-tourism tours", "Andaman local experiences", "Andaman itinerary ideas", "How long to visit Andaman", "Andaman trip reviews", "Andaman tour planning guide", "Andaman travel checklist", "Andaman airport transfers", "Andaman national parks tours", "Andaman 5 day tour package", "Andaman 7 day tour package", "Andaman all-inclusive trip", "Andaman adventure holiday packages", "Andaman group tour offers", "Andaman solo traveler packages", "Andaman family vacation ideas", "Best beaches in Havelock Island", "Best beaches in Neil Island", "Andaman sightseeing tours with guide", "Andaman private tour packages", "Andaman boat ride packages", "Andaman snorkeling tour costs", "Andaman scuba diving booking", "Andaman tour with photography", "Andaman honeymoon resort deals", "Andaman hotel + sightseeing package", "Andaman last-minute deals", "Andaman travel packages for couples", "Andaman eco-friendly tour packages", "Andaman tour with ferry schedule", "Andaman travel agency online booking", "Andaman budget family trip", "Andaman package with airport pickup", "Andaman 3 island tour package", "Andaman Ross Island tour booking", "Andaman Cellular Jail tour tickets", "Andaman North Bay snorkeling", "Andaman Radhanagar Beach packages", "Andaman Elephant Beach trips", "Andaman Baratang Island excursion", "Andaman limestone caves visit", "Andaman Barren Island volcano tour", "Andaman Little Andaman adventure tour", "Andaman Swaraj Dweep day tour", "Andaman Diglipur sightseeing", "Andaman water sports adventure", "Andaman coral reef snorkeling", "Andaman island hopping deals", "Andaman beach resort booking", "Andaman honeymoon package with resort", "Andaman scuba diving packages Havelock", "Andaman private yacht tour", "Andaman photography tour packages", "Andaman luxury vacation package", "Andaman short weekend tour", "Andaman trekking and sightseeing", "Andaman family package 4 days", "Andaman honeymoon tour 3 nights", "Andaman adventure & water sports combo", "Havelock Island honeymoon trip", "Havelock Island beach packages", "Neil Island snorkeling tour", "Ross Island historical tour", "North Bay Island coral tour", "Radhanagar Beach sunset trip", "Chidiya Tapu eco-tour", "Baratang Island boat ride", "Limestone caves Andaman visit", "Barren Island volcano tour", "Swaraj Dweep snorkeling", "Little Andaman adventure trip", "Diglipur Andaman tour", "Port Blair travel packages", "Andaman ferry schedule booking", "Andaman Port Blair hotel deals", "Havelock Island resort booking", "Neil Island eco stay packages", "Ross Island guided tour", "North Bay Island scuba diving", "Radhanagar Beach family trip", "Chidiya Tapu bird watching tour", "Baratang Island mangrove tour", "Limestone caves guided visit", "Barren Island day trip", "Swaraj Dweep day tour", "Little Andaman trekking", "Diglipur sightseeing Andaman", "Andaman island adventure trip", "Andaman ferry + tour package", "Port Blair airport pickup + hotel", "Havelock honeymoon package", "Neil Island romantic getaway", "Ross Island photography tour", "North Bay snorkeling day trip", "Radhanagar Beach couple package", "Chidiya Tapu sunset photography", "Baratang Island boat trip", "Limestone caves eco-tour", "Barren Island volcano adventure", "Swaraj Dweep family day tour", "Little Andaman adventure package", "Diglipur Andaman eco-tour", "Andaman top beaches tour", "Andaman historic sightseeing tour", "Andaman scuba diving resort package", "Andaman adventure sports booking", "Andaman package with private guide", "Andaman honeymoon + water sports", "Andaman island hopping for couples" 
  ];

  return (
    <footer>

      {/* ================= OFFER SECTION ================= */}
      <div className="offer-section">
        <div className="offer-card">
          <img src="/images/port-blair.jpg" alt="Offer Image" />
          <div className="offer-content">
            <h2><span>5%</span> OFF</h2>
            <h3>Visit Andaman</h3>
            <p>Valid only for 15th Dec</p>
            <button type="button" className="btn" onClick={() => setSelectedTrip(tripLists[0])}>
              Ask For
            </button>
          </div>
        </div>

        <div className="offer-card">
          <img src="/images/havelock-island.jpg" alt="Offer Image" />
          <div className="offer-content">
            <h2><span>10%</span> OFF</h2>
            <h3>Andaman Family</h3>
            <p>Valid only for 20th Dec</p>
            <button type="button" className="btn" onClick={() => setSelectedTrip(tripLists[1])}>
              Ask For
            </button>
          </div>
        </div>
      </div>

      {/* ================= VACATION TAGS ================= */}
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

      {/* ================= FOOTER GRID ================= */}
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
            Brookshabad, Kanchi Nala, Brookshabad<br />
            Chakkar Gaon, Port Blair (SRI VIJAYA PURAM)<br />
            South Andaman, A & N Islands - 744112
          </p>
          <p className="phone">
            Phone:{" "}
            <a href="tel:+9101169296377" className="text-decoration-none">
              +91-01169296377
            </a>
            ,{" "}
            <a href="tel:+917484052727" className="text-decoration-none">
              +91-7484052727
            </a>
          </p>
        </div>

        <div className="footer-col">
          <h3>Support & Help</h3>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            {/* <li><Link href="/faq">FAQ</Link></li> */}
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow With Us</h3>
          <p>
            Join thousands of happy travelers—discover why so many choose
            Boobooktrip for unforgettable journeys.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
          </div>

          <div className="mt-2">
    <a 
      href="https://share.google/xaODzaI3u0ivWNGsj" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-decoration-none fw-bold"
      style={{ color: "#4285F4" }} // Google's blue
    >
      ⭐ Find us on Google
    </a>
  </div>
          
        </div>

      </div>

      {/* ================= KEYWORDS SECTION ================= */}
      <div className="footer-keywords" style={{ padding: "10px 20px", fontSize: "12px", color: "#999", textAlign: "justify" }}>
        {keywords.join(", ")}
      </div>

      {/* ================= POPUP ================= */}
      {selectedTrip && (
        <TripPopup
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}

    </footer>
  );
}
