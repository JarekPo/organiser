import React from 'react';

import {TableBody} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {format} from 'date-fns';

import {notesList} from './constants';

const Notes = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notesList.map((note) => {
            return (
              <TableRow key={note.title}>
                <TableCell>{note.title}</TableCell>
                <TableCell>{note.category}</TableCell>
                <TableCell>{note.content}</TableCell>
                <TableCell>{format(note.date, 'yyyy/MM/dd hh:mm')}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Notes;
