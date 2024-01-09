import React from 'react';

import {TableBody, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {format} from 'date-fns';

import AddNoteForm from './AddNoteForm';
import {notesList} from './constants';
import Note from './Note';

const Notes = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{width: '90vw', margin: 'auto'}}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6'>Title</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Category</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Content</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notesList.map((note) => {
              return (
                <Note
                  key={note.title}
                  title={note.title}
                  category={note.category}
                  content={note.content}
                  date={format(note.date, 'yyyy/MM/dd hh:mm')}
                />
              );
            })}
            <AddNoteForm />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Notes;
