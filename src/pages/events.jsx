import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Jadwal Konser Mendatang</h2>
      <ul className="space-y-4">
        <li className="bg-gray-800 p-4 rounded">🎤 Live Jazz - 20 Mei 2025</li>
        <li className="bg-gray-800 p-4 rounded">🎸 Indie Fest - 28 Mei 2025</li>
        <li className="bg-gray-800 p-4 rounded">🎧 Senandung EDM - 5 Juni 2025</li>
      </ul>
    </div>
  );
};

export default Events;
