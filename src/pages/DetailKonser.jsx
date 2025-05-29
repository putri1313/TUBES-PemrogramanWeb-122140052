import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const dummyConcerts = [
  {
    id: 1,
    title: "Classical Melodies",
    image: image1,
    desc: "Experience the beauty of classical music with the Surabaya Symphony Orchestra performing works by Mozart, Beethoven, and local composers.",
    date: "Saturday, 28 June 2025",
    location: "Heritage Hall, Surabaya",
    price: 300000,
    ticketsLeft: 430,
  },
  {
    id: 2,
    title: "Night of Jazz",
    image: image2,
    desc: "Jakarta Jazz Ensemble",
    date: "Sunday, 15 June 2025",
    location: "Grand Amphitheater, Jakarta",
    price: 350000,
    ticketsLeft: 245,
  },
  {
    id: 3,
    title: "Rock Revolution",
    image: image3,
    desc: "Thunder Strike",
    date: "Saturday, 5 July 2025",
    location: "Mountain View Arena, Bandung",
    price: 400000,
    ticketsLeft: 320,
  }
];

const DetailKonser = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1); // State untuk menyimpan jumlah tiket
  const navigate = useNavigate();

  const concert = dummyConcerts.find(c => c.id === parseInt(id));

  if (!concert) {
    return <p>Konser tidak ditemukan</p>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value)); // Update state quantity saat select berubah
  };

  const handleBuyTicket = () => {
    if (!user) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    // Redirect ke halaman pembayaran dengan membawa data event
    navigate('/payment', { state: { event: concert, quantity: quantity } });
  };

  const totalPrice = concert.price * quantity; // Hitung total harga

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{concert.title}</h1>
        <button className="bg-purple-700 text-white px-4 py-2 rounded">Get Tickets</button>
      </header>

      {/* Gambar Konser */}
      <img src={concert.image} alt={concert.title} className="w-full h-64 object-cover mb-6" />

      {/* Informasi Konser */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Concert Details</h2>
          <p><strong>Date & Time:</strong> {concert.date}</p>
          <p><strong>Ticket Price:</strong> Rp {concert.price.toLocaleString('id-ID')}</p>
          <p><strong>Availability:</strong> {concert.ticketsLeft} tickets remaining</p>
          <p><strong>About This Concert:</strong></p>
          <p>{concert.desc}</p>
        </div>

        {/* Form Pembelian Tiket */}
        <div>
          <h2 className="text-xl font-bold mb-2">Get Tickets</h2>
          <p className="text-sm">Secure your spot at {concert.title}</p>
          
          <label className="block mt-4">
            Quantity:
            <select
              className="w-full mt-2 border p-2 rounded"
              value={quantity}
              onChange={handleQuantityChange}
            >
              <option value="1">1 ticket</option>
              <option value="2">2 tickets</option>
              <option value="3">3 tickets</option>
              <option value="4">4 tickets</option>
              <option value="5">5 tickets</option>
            </select>
          </label>

          <p className="mt-2"><strong>Total Price:</strong> Rp {totalPrice.toLocaleString('id-ID')}</p>
          
          <button
            onClick={handleBuyTicket}
            className="bg-purple-700 text-white px-4 py-2 rounded mt-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailKonser;