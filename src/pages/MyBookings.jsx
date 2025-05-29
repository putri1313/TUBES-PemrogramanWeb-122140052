import React, { useEffect, useState } from 'react';

const MyBookings = () => {
  const [myTickets, setMyTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('myTickets') || '[]');
    setMyTickets(tickets);
  }, []);

  const handleDownloadClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">My Tickets</h2>
      {myTickets.length === 0 && (
        <p className="text-gray-500">Belum ada tiket yang dibeli.</p>
      )}
      {myTickets.map(ticket => (
        <div key={ticket.id} className="bg-white rounded-xl shadow mb-6 flex flex-col md:flex-row">
          <div className="p-6 flex-1">
            <h3 className="font-bold">{ticket.event}</h3>
            <p className="text-sm text-gray-500">{ticket.date}</p>
            <p className="text-sm text-gray-500">{ticket.location}</p>
            <p className="mt-2">Quantity: <b>{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</b></p>
            <p>Total price: <b>Rp {ticket.total.toLocaleString('id-ID')}</b></p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...Array(ticket.quantity)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDownloadClick(ticket)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                  View E-Ticket {ticket.quantity > 1 ? `#${idx + 1}` : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Modal for displaying QR Code */}
      {selectedTicket && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-bold mb-4">E-Ticket for {selectedTicket.event}</h3>
            <img src={selectedTicket.eticket} alt="E-Ticket" className="w-64 h-64 mx-auto mb-4" />
            <button onClick={handleCloseModal} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;