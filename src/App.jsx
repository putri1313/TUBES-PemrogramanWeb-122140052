import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import DetailKonser from './pages/DetailKonser';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Payment from './pages/Payment'; // Pastikan di-import

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-6 px-4 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/konser/:id" element={<DetailKonser />} />
          <Route path="/riwayat" element={<MyBookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/payment" element={<Payment />} /> {/* Pastikan ada */}
        </Routes>
      </main>
    </div>
  );
}

export default App;