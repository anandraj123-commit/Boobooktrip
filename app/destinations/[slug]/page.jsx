import { destinationsLists } from "@/constant/destinations";
import DestinationHeader from "@/components/DestinationHeader";
import Link from "next/link";
import DestinationDescription from "@/components/DestinationDescription";

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const cleanedSlug = slug?.toLowerCase();

  const destination = destinationsLists.find(
    (item) => item.slug.toLowerCase() === cleanedSlug
  );

  if (!destination) {
    return (
      <div className="container py-5">
        <h2 className="text-xl font-semibold">Destination not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-gray-200 p-5 rounded-2xl h-fit sticky top-[140px] self-start">
          <h2 className="text-xl font-semibold mb-4">Top Destinations</h2>

         <div className="flex flex-col gap-3">
  {destinationsLists.map((d) => {
    const isActive = cleanedSlug === d.slug.toLowerCase();
    return (
      <Link
        key={d.id}
        href={`/destinations/${d.slug}`}
        className={`
          block p-4 rounded-xl border shadow-sm transition-all duration-200 font-bold no-underline
          ${isActive
            ? "bg-[#c91f35] text-white border-[#c91f35] shadow-md text-lg"
            : "bg-white text-black border-gray-200 hover:bg-gray-100"
          }
        `}
      >
        {d.name}
      </Link>
    );
  })}
</div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1">

          {/* DESTINATION HEADER */}
          <DestinationHeader
            title={destination.name}
            image={destination.image}
          />

          {/* DESTINATION DESCRIPTION */}
          <DestinationDescription destination={destination} />

          {/* TOP PLACES */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">
              Top Places in {destination.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destination.locations.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden border"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-justify">
                    <h4 className="text-lg font-semibold">{loc.name}</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {loc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
