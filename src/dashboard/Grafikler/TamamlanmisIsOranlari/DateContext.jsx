import { createContext, useState, useContext } from 'react';

const TamamlanmisIsOranlariDateContext = createContext();

export const TamamlanmisIsOranlariDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState('2023');

  return (
    <TamamlanmisIsOranlariDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </TamamlanmisIsOranlariDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(TamamlanmisIsOranlariDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
