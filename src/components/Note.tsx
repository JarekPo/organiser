import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {format} from 'date-fns';

import {NotesList} from './types';

const Note = (note: NotesList) => {
  return (
    <TableRow key={note.title}>
      <TableCell>{note.title}</TableCell>
      <TableCell>{note.category}</TableCell>
      <TableCell>{note.content}</TableCell>
      <TableCell>{format(note.date, 'yyyy/MM/dd')}</TableCell>
      <TableCell>{note.time}</TableCell>
    </TableRow>
  );
};

export default Note;
