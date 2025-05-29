import React from 'react';

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Konfirmasi Pembelian Tiket</h1>
        <p>Pembelian tiket berhasil!</p>
        <p>Silakan cetak atau simpan bukti pembelian ini.</p>
      </div>
    </div>
  );
};

export default Confirmation;