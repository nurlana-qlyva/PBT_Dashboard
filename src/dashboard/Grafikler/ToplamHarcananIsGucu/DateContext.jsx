import { createContext, useState, useContext } from 'react';

const ToplamHarcanaIsGucuDateContext = createContext();

export const ToplamHarcanaIsGucuDateProvider = ({ children }) => {
  
  const [selectedDate, setSelectedDate] = useState(['2023-06-15', '2023-06-22']);

  return (
    <ToplamHarcanaIsGucuDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </ToplamHarcanaIsGucuDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(ToplamHarcanaIsGucuDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
