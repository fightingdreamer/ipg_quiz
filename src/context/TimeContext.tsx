// packages

import React, { createContext, useState } from 'react';

// types

export interface ITimeContext {
  time: number;
}

// React Context API

const TimeContext = createContext({} as ITimeContext);

const TimeProvider = (props) => {
  const [time] = useState(20); // points default value

  return (
    <TimeContext.Provider
      value={{
        time,
      }}
    >
      {props.children}
    </TimeContext.Provider>
  );
};

export default TimeContext;

export { TimeProvider };
