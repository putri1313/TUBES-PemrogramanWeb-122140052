import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <p>Selamat datang di dashboard admin Senandung.id!</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded mt-4">
        Kelola Konser
      </button>
      <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded mt-4">
        Lihat Transaksi Tiket
      </button>
    </div>
  );
};

export default AdminPanel;