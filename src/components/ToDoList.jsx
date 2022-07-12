import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditListDialog from "./EditListDialog";
import { useState } from "react";
export default function ToDoList({ list, handleDeleteToDO, handleEditToDo}) {

const [openDialog, setOpenDialog] = useState('false')

const HandlerDialog = () =>{
  setOpenDialog(!openDialog)
}



  return (
    <>
    <EditListDialog handleEditToDo={handleEditToDo} open={openDialog} HandlerDialog={HandlerDialog} list={list}/>
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDeleteToDO(list.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple  />
          <button onClick={() => setOpenDialog(true)}>editar </button>
        </ListItemIcon>
        <ListItemText primary={list.text}/>
      </ListItemButton>
    </ListItem>
    </>
  );
}
