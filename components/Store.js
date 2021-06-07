import React, { useState } from 'react';

export const StoreContext = React.createContext();

export function StoreProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <StoreContext.Provider value={{ open, setOpen }}>
      {children}
    </StoreContext.Provider>
  );
}
