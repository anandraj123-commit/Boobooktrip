import '@/styles/trip.scss';

export const metadata = {
  title: "Trips | Your Website Name",
  description: "Explore our exciting travel packages and trips",
};

export default function TripLayout({ children }) {
  return (
    <>
     {children}
    </>
  );
}