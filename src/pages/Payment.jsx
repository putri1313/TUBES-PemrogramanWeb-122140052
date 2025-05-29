import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TICKET_PRICE = 450000;
const SERVICE_FEE = 25000;

const Payment = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const eventDetails = location.state?.event;

  // Redirect jika tidak ada detail event
  if (!eventDetails) {
    navigate('/'); // Ganti dengan halaman yang sesuai
    return null;
  }

  // Hitung total harga
  const ticketsTotal = TICKET_PRICE * quantity;
  const serviceFee = SERVICE_FEE * quantity;
  const total = ticketsTotal + serviceFee;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      event: eventDetails.title,
      date: eventDetails.date,
      location: eventDetails.location,
      quantity,
      total,
      fullName,
      email,
      phoneNumber,
      eticket: eventDetails.image7, // Gunakan gambar event
    };

    const oldTickets = JSON.parse(localStorage.getItem('myTickets') || '[]');
    localStorage.setItem('myTickets', JSON.stringify([...oldTickets, newTicket]));
    alert("Pembelian berhasil! Silakan lanjutkan ke halaman My Tickets.");
    navigate('/riwayat');
  };

  return (
    <div className="min-h-screen bg-purple-50 py-10 px-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8">Purchase Tickets</h2>
        <form onSubmit={handleSubmit}>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Event Details */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Event Details</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={eventDetails.image}
                  alt="Event"
                  className="w-full md:w-40 h-32 object-cover rounded"
                />
                <div>
                  <p className="font-bold">{eventDetails.title}</p>
                  <p className="text-sm text-gray-500">{eventDetails.desc}</p>
                  <p className="text-sm text-gray-500">{eventDetails.location}</p>
                  <p className="text-sm text-gray-500">{eventDetails.date}</p>
                </div>
              </div>
              <label className="block mt-4">
                <span className="text-sm font-medium">Ticket Quantity</span>
                <select
                  className="w-full mt-2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(q => (
                    <option key={q} value={q}>{q} ticket{q > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Tickets ({quantity})</span>
                <span className="font-semibold">Rp {ticketsTotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Service Fee</span>
                <span className="font-semibold">Rp {serviceFee.toLocaleString('id-ID')}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-purple-700">Rp {total.toLocaleString('id-ID')}</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Ticket delivery: E-ticket via email<br />
                All purchases are final and cannot be refunded.
              </p>
            </div>
          </div>

          {/* Customer Information & Payment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Customer Info */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your full name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your phone number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                  className="accent-purple-600"
                />
                <label htmlFor="credit-card" className="ml-2">Credit Card</label>
              </div>
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment-method"
                  value="bank-transfer"
                  checked={paymentMethod === 'bank-transfer'}
                  onChange={() => setPaymentMethod('bank-transfer')}
                  className="accent-purple-600"
                />
                <label htmlFor="bank-transfer" className="ml-2">Bank Transfer</label>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === 'credit-card' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVC</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="123" />
                  </div>
                </div>
              )}

              {/* Bank Transfer Info */}
              {paymentMethod === 'bank-transfer' && (
                <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-2 text-sm text-gray-700">
                  <p className="mb-1">Please transfer the exact amount to:</p>
                  <p><b>Bank senandung.id</b></p>
                  <p>Account number: <b>1234567890</b></p>
                  <p>Account name: PT senandung Indonesia</p>
                </div>
              )}
            </div>
          </div>

          {/* Button Submit */}
          <button
            type="submit"
            className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold mt-4 shadow transition"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;