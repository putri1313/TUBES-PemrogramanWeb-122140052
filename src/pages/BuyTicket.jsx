import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyTicket = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pembelian berhasil! Silakan lanjutkan ke halaman konfirmasi.");
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Konfirmasi Pembelian Tiket</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Jumlah Tiket:
            <input type="number" min="1" defaultValue="1" className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none mb-4" required />
          </label>
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Lanjutkan ke Pembayaran
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;