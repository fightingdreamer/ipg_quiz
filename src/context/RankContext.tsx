// packages

import React, { createContext, useState } from 'react';

// types

export interface IRankContext {
  getRank: any;
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

// code

const RankProvider = (props) => {
  const [rank, setRank] = useState<any>([]); // default active user

  const addRank = ({ name, points, score, questions }) => {
    setRank([...rank, { name: name, points: points, score: score, questions: questions }]);
  };

  const getRank = () => {
    const data = localStorage.getItem('rank') || '';
    if (data) {
      const filteredData = JSON.parse(data).sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }
        if (a.points < b.points) {
          return 1;
        }
        return 0;
      });
      return filteredData;
    }
    return [];
  };

  return (
    <RankContext.Provider
      value={{
        rank,
        addRank,
        getRank,
      }}
    >
      {props.children}
    </RankContext.Provider>
  );
};

export default RankContext;

export { RankProvider };
