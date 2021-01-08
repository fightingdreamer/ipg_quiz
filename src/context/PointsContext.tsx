// packages

import React, { createContext, useState } from 'react';

// types

export interface IPointsContext {
  totalPoints: number;
  setPoints: (name: number) => void;
  reset: () => void;
}

// React Context API

const PointsContext = createContext({} as IPointsContext);

const PointsProvider = (props) => {
  const [totalPoints, setPoints] = useState(0); // points default value

  return (
    <PointsContext.Provider
      value={{
        totalPoints,
        setPoints: (newPoints) => setPoints((p) => p + newPoints),
        reset: () => setPoints(0),
      }}
    >
      {props.children}
    </PointsContext.Provider>
  );
};

export default PointsContext;

export { PointsProvider };
