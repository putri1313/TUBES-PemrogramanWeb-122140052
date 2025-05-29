import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Galeri Konser</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/random/400x300?concert,${i}`}
            alt={`Concert ${i}`}
            className="rounded shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
