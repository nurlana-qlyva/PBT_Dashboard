import { createContext, useState, useContext } from 'react';

const ToplamHarcanaIsGucuYearContext = createContext();

export const ToplamHarcanaIsGucuYearProvider = ({ children }) => {
  
  const [selectedYear, setSelectedYear] = useState(['2023-06-15', '2023-06-22']);

  return (
    <ToplamHarcanaIsGucuYearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </ToplamHarcanaIsGucuYearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(ToplamHarcanaIsGucuYearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
