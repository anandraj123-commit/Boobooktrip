import TripContent from "@/components/Trip-Content";
import TripCoverPage from "@/components/TripCoverPage";
import TravelCondition from "@/components/TravelCondition";
import TripSection from "@/components/TripSection";
import TourPackage from "@/components/TourPackage";

import { tripLists } from "@/constant/trip";

export default async function TripPage({ params, searchParams }) {
  const { slug } = await params;

  // ⬅️ Important: unwrap the promise
  const query = await searchParams;

  // FIND TRIP BY SLUG
  const trip = tripLists.find(
    (t) => t.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!trip) {
    return (
      <div className="text-center py-5">
        <h2>Trip Not Found</h2>
      </div>
    );
  }

  // READ UNWRAPPED QUERY PARAMS
  const location = query.location || "";
  const checkIn = query.checkIn || "";
  const checkOut = query.checkOut || "";
  const guests = query.guests || "";
  const tripInfo = query.trip || "";

  return (
    <>
      <TripCoverPage trip={trip} />

      <TripContent trip={trip} />

      <TripSection
        trip={trip}
        location={location}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        tripInfo={tripInfo}
      />

      <TravelCondition />

      <TourPackage />
    </>
  );
}