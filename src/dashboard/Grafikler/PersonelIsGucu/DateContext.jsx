import { createContext, useState, useContext } from 'react';

const PersonelIsGucuDateContext = createContext();

export const PersonelIsGucuDateProvider = ({ children }) => {
  
  const [selectedDate, setSelectedDate] = useState(['2023-06-15', '2023-06-22']);

  return (
    <PersonelIsGucuDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </PersonelIsGucuDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(PersonelIsGucuDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
