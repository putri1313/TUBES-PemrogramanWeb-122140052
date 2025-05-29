import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Komponen utama
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Halaman
import Home from './pages/Home';
import DetailKonser from './pages/DetailKonser';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Payment from './pages/Payment';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow py-6 px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/konser/:id" element={<DetailKonser />} />
            <Route path="/riwayat" element={<MyBookings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/riwayat" element={<MyBookings />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;