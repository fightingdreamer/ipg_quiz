// packages

import React, { createContext, useEffect, useState } from 'react';

// types

export interface IRankContext {
  rank: any;
  addRank: ({
    name,
    points,
    score,
    questions,
  }: {
    name: string;
    points: number;
    score: number;
    questions: number;
  }) => void;
}

// React Context API

const RankContext = createContext({} as IRankContext);

const RankProvider = (props) => {
  const [rank, setRank] = useState<any>([]); // default active user

  const addRank = ({ name, points, score, questions }) => {
    setRank([...rank, { name: name, points: points, score: score, questions: questions }]);
  };

  useEffect(() => {
    const data = localStorage.getItem('rank') || '';
    data && setRank(JSON.parse(data));
  }, []);

  return (
    <RankContext.Provider
      value={{
        rank,
        addRank,
      }}
    >
      {props.children}
    </RankContext.Provider>
  );
};

export default RankContext;

export { RankProvider };
