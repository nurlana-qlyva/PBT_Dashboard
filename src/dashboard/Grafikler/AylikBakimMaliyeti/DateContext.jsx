import { createContext, useState, useContext } from 'react';

const AylikBakimMaliyetiDateContext = createContext();

export const AylikBakimMaliyetiDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState('2023');

  return (
    <AylikBakimMaliyetiDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </AylikBakimMaliyetiDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(AylikBakimMaliyetiDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
