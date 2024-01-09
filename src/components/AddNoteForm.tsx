import React from 'react';

import {Button, TableCell, TextField} from '@mui/material';

const AddNoteForm = () => {
  return (
    <>
      <TableCell sx={{border: 'none'}}>
        <TextField placeholder='Title' id='input-title' label='Title' variant='outlined' size='small' />
      </TableCell>
      <TableCell sx={{border: 'none'}}>
        <TextField placeholder='Category' id='input-category' label='Category' variant='outlined' size='small' />
      </TableCell>
      <TableCell sx={{border: 'none'}}>
        <TextField placeholder='Content' id='input-content' label='Content' variant='outlined' size='small' />
      </TableCell>
      <TableCell sx={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
        <TextField placeholder='Date' id='input-date' label='Date' variant='outlined' size='small' />
        <Button variant='contained' size='small'>
          Add new note
        </Button>
      </TableCell>
    </>
  );
};

export default AddNoteForm;
