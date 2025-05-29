import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ConcertContext = createContext();

export const ConcertProvider = ({ children }) => {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await axios.get('https://api.example.com/concerts');
        setConcerts(response.data);
      } catch (error) {
        console.error('Gagal mengambil data konser:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  return (
    <ConcertContext.Provider value={{ concerts, setConcerts, loading }}>
      {children}
    </ConcertContext.Provider>
  );
};
