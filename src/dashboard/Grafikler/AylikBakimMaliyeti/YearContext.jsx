import { createContext, useState, useContext } from 'react';

const AylikBakimMaliyetiYearContext = createContext();

export const AylikBakimMaliyetiYearProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <AylikBakimMaliyetiYearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </AylikBakimMaliyetiYearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(AylikBakimMaliyetiYearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
