import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditListDialog({open, HandlerDialog, list, handleEditToDo}) {
const [editedText, setEditedText] = useState(list.text);


const HandlerText = () => {
  handleEditToDo(list.id, editedText)
  HandlerDialog();
   };

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={HandlerDialog}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <TextField fullWidth defaultValue={editedText} onChange={(e)=> setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={HandlerDialog}>Disagree</Button>
          <Button onClick={HandlerText} >Agree</Button>
        </DialogActions>
      </Dialog>
    
  );
}
