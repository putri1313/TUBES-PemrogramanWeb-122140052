import React from 'react';

const ConcertCard = ({ concert }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={concert.image} alt={concert.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{concert.title}</h2>
        <p className="text-sm text-gray-400">{concert.date} • {concert.location}</p>
        <p className="mt-2 text-gray-300">{concert.desc}</p>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
          Beli Tiket
        </button>
      </div>
    </div>
  );
};

export default ConcertCard;