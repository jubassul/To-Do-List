import React from 'react'
import Form from "../components/Form.jsx";

import ToDoList from "../components/ToDoList";
import { Container } from "@mui/material";
import List from "@mui/material/List";
export default function 
ome() {
  return (
    <div>
       <Container className="container" maxWidth="xs">
        <Form />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ToDoList />
        </List>
      </Container>



    </div>
  )
}
