import { createContext, useState, useContext } from 'react';

const IsEmirlerininZamanDagilimiYearContext = createContext();

export const IsEmirlerininZamanDagilimiYearProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(['2011-03-01', '2023-03-30']);

  return (
    <IsEmirlerininZamanDagilimiYearContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </IsEmirlerininZamanDagilimiYearContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(IsEmirlerininZamanDagilimiYearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
