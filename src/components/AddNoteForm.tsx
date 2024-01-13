import React, {useState} from 'react';

import {Button, TableCell, TextField} from '@mui/material';

const AddNoteForm = () => {
  const [notes, setNotes] = useState<Record<string, any>[]>([]);
  const note = {title: '', category: ''};
  const addNote = () => {
    setNotes([...notes, note]);
  };
  return (
    <>
      <TableCell sx={{border: 'none'}}>
        <TextField
          placeholder='Title'
          id='input-title'
          label='Title'
          variant='outlined'
          size='small'
          onChange={(e) => {
            note.title = e.target.value;
          }}
        />
      </TableCell>
      <TableCell sx={{border: 'none'}}>
        <TextField
          placeholder='Category'
          id='input-category'
          label='Category'
          variant='outlined'
          size='small'
          onChange={(e) => {
            note.category = e.target.value;
          }}
        />
      </TableCell>
      <TableCell sx={{border: 'none'}}>
        <TextField placeholder='Content' id='input-content' label='Content' variant='outlined' size='small' />
      </TableCell>
      <TableCell sx={{border: 'none'}}>
        <TextField type={'date'} id='input-date' variant='outlined' size='small' />
      </TableCell>
      <TableCell sx={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
        <TextField type={'time'} id='input-time' variant='outlined' size='small' />
        <Button variant='contained' size='small' onClick={addNote}>
          Add new note
        </Button>
      </TableCell>
    </>
  );
};

export default AddNoteForm;
