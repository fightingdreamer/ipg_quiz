// packages

import React, { useContext } from 'react';

// React Context API

import RankContext from '../../context/RankContext';

// UI-Terminal components

import { Table } from "@fightingdreamer/nes-react";

// code

export default function MaterialTable() {
  const { getRank } = useContext(RankContext);
  const rank = getRank();

  return (
    <div className="quiz-table">
      <Table centered aria-label="Hall of Fame">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
