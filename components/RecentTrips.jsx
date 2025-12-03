export default function RecentTrips() {
    const dummyTrips = [
      { name: "Goa Trip", date: "12 Dec 2025" },
      { name: "Manali Trip", date: "20 Jan 2026" }
    ];
  
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Trips</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyTrips.map((trip, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <h3 className="text-lg font-medium">{trip.name}</h3>
              <p className="text-gray-500">{trip.date}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }