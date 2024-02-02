import React, { createContext, useState } from 'react';

export const AverageMarksContext = createContext();

export const AverageMarksProvider = ({ children }) => {
  const [averageMarks, setAverageMarks] = useState(null);

  return (
    <AverageMarksContext.Provider value={{ averageMarks, setAverageMarks }}>
      {children}
    </AverageMarksContext.Provider>
  );
};