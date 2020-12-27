// packages

import React from 'react';

// UI-Material components

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    <TableContainer className="quiz-table mobile-off">
      <Table size="small" aria-label="Hall of Fame">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.rank}>
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
