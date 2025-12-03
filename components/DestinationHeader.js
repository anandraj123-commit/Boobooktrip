// app/destinations/[slug]/header.jsx

import "../styles/destinations.scss";

export default function DestinationHeader({ title, image }) {
  return (
    <section
      className="destination-hero d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <h1 className="destination-title">{title}</h1>
    </section>
  );
}
