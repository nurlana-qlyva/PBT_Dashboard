import { createContext, useState, useContext } from 'react';

const IsEmriOzetTabloDateContext = createContext();

export const IsEmriOzetTabloDateProvider = ({ children }) => {
  
  const [selectedDate, setSelectedDate] = useState(['2021-01-01', '2024-12-12']);

  return (
    <IsEmriOzetTabloDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </IsEmriOzetTabloDateContext.Provider>
  );
};

export const useDate = () => {
  const context = useContext(IsEmriOzetTabloDateContext);
  if (!context) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
