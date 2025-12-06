export default function TripContent(params){
  const {name,imageUrl,offer,duration,price,title,description, availableTickets,destination} = params.trip;
    return (
        <div className="container my-5 trip-content">
        <div className="row g-4 align-items-stretch">
  
          {/* LEFT SIDE - IMAGE CARD */}
          <div className="col-lg-6 d-flex">
            <div className="package-card shadow-lg rounded-4 overflow-hidden w-100">
              <div className="position-relative h-100">
                <img
                  src={imageUrl}
                  className="img-fluid package-img"
                  alt={title}
                />
  
                <span className="discount-badge">{offer} Off</span>
                <h3 className="package-title">{name}</h3>
  
                <div className="price-tag">
                  {price}/person <span className="duration">{duration}</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* RIGHT SIDE - DETAILS ONLY */}
          <div className="col-lg-6 d-flex flex-column">
            <div className="package-details flex-grow-1">
  
              <h2 className="fw-bold mb-2">{name} package</h2>
  
              {/* Ratings */}
              <div className="text-warning mb-3">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
  
              <p className="text-muted">
                {description}
              </p>
  
              {/* Only Available Tickets badge remains */}
              <div className="d-flex gap-3 my-3 flex-wrap">
                <span className="badge bg-success px-3 py-2 fs-6">
                  Available Tickets : {availableTickets}
                </span>
              </div>
  
              <h5 className="fw-bold mt-4 mb-3">
                <i className="fa fa-location-dot text-success"></i> PACKAGE LOCATIONS
              </h5>
  
              <ul className="list-unstyled ms-2">
                <li className="mb-2">
                  <i className="fa fa-check-circle text-primary me-2"></i>
                  {destination} (3 days)
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle text-primary me-2"></i>
                  8 Breakfast, 3 Dinners
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle text-primary me-2"></i>
                  First class Sightseeing
                </li>
              </ul>
  
            </div>
          </div>
  
        </div>
      </div>
    );
}