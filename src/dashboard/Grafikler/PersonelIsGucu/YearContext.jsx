import { createContext, useState, useContext } from 'react';

const PersonelIsGucuYearContext = createContext();

export const PersonelIsGucuYearProvider = ({ children }) => {
  
  const [selectedYear, setSelectedYear] = useState(['2023-06-15', '2023-06-22']);

  return (
    <PersonelIsGucuYearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </PersonelIsGucuYearContext.Provider>
  );
};

export const useYear = () => {
  const context = useContext(PersonelIsGucuYearContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
