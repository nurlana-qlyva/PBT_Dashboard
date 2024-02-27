import { createContext, useState, useContext } from 'react';

const TamamlanmisIsOranlariYearContext = createContext();

export const TamamlanmisIsOranlariYearProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <TamamlanmisIsOranlariYearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </TamamlanmisIsOranlariYearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(TamamlanmisIsOranlariYearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
