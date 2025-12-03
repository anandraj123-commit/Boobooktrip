import Link from "next/link";
import HomeCard from "./HomeCard";

export default function QuickActions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link href="/trips">
        <HomeCard title="View Trips" description="See all your trips." />
      </Link>

      <Link href="/trips/create">
        <HomeCard title="Create Trip" description="Plan a new adventure." />
      </Link>

      <Link href="/calendar">
        <HomeCard title="Trip Calendar" description="View monthly trip schedule." />
      </Link>
    </section>
  );
}