import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-purple-700 text-white px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80">
          <span className="bg-white text-purple-700 font-bold text-xl px-2 py-1 rounded">senandung.id</span>
          <span className="font-bold text-xl">konser kekinian</span>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Cari konser..."
        className="w-full md:w-1/3 px-3 py-1 rounded-md text-black"
      />

      <div className="flex space-x-4">
        <Link
          to="/"
          className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-gray-200 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/riwayat"
          className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-gray-200 font-semibold"
        >
          My Tickets
        </Link>
        {user ? (
          <>
            <span>Halo, {user.name}</span>
            <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-gray-200">
              Login
            </Link>
            <Link to="/register" className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-gray-200">
              Sign in
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;