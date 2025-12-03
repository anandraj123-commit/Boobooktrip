export default function HomeCard({ title, description }) {
    return (
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl cursor-pointer">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    );

}