import React, { createContext, useState } from 'react';

export const DayCodeContext = createContext();

export default function DayCode({ children }) {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <DayCodeContext.Provider value={[ selectedDay, setSelectedDay ]}>
      {children}
    </DayCodeContext.Provider>
  );
}
