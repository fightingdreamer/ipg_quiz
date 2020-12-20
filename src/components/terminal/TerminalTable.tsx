// packages

import React from 'react';

// UI-Terminal components

import { Table } from 'nes-react';

// code

function createData(rank: number, name: string, score: number) {
  return { rank, name, score };
}

const rows = [
  createData(1, 'Player#0150', 3444),
  createData(2, 'Player#0017', 2195),
  createData(3, 'Player#0001', 552),
];

export default function MaterialTable() {
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
        {rows.map((row) => (
          <tbody key={row.rank}>
            <tr>
              <td>{row.rank}</td>
            </tr>
            <tr>
              <td>{row.name}</td>
            </tr>
            <tr>
              <td>{row.score}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
