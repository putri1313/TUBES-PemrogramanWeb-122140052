import React, { createContext, useState } from 'react';

export const ConcertContext = createContext();

export const ConcertProvider = ({ children }) => {
  const [concerts, setConcerts] = useState([]);

  return (
    <ConcertContext.Provider value={{ concerts, setConcerts }}>
      {children}
    </ConcertContext.Provider>
  );
};
