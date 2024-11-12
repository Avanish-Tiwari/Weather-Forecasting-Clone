// PinCodeContext.js
import React, { createContext, useState } from 'react';

// Create Context
export const PinCodeContext = createContext();

// Create a Provider component
export function PinCodeProvider({ children }) {
  const [pinCode, setPinCode] = useState('');

  return (
    <PinCodeContext.Provider value={{ pinCode, setPinCode }}>
      {children}
    </PinCodeContext.Provider>
  );
}
