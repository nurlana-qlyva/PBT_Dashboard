import { createContext, useState, useContext } from 'react';

const LokasyonDagilimDateContext = createContext();

export const LokasyonDagilimDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(['2020-01-01', '2024-03-01']);

  return (
    <LokasyonDagilimDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </LokasyonDagilimDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(LokasyonDagilimDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
