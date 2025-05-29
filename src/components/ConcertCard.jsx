const ConcertCard = ({ concert }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
    <img src={concert.image} alt={concert.title} className="rounded-md w-full h-48 object-cover" />
    <h3 className="text-xl font-semibold mt-2">{concert.title}</h3>
    <p className="text-gray-600">{concert.desc}</p>
    <p className="text-gray-500 text-sm">{concert.date} – {concert.location}</p>
    <p className="text-red-600 font-bold mt-2">{concert.price}</p>
  </div>
);

export default ConcertCard;
