import React from "react";
import Form from "../components/Form.jsx";
import { useState } from "react";
import ToDoList from "../components/ToDoList";
import { Container } from "@mui/material";
import List from "@mui/material/List";
export default function Home() {
  
  const [lists, setLists] = useState([]);
  
  const handleAddToList = (list) =>{
    console.log('nome', list)
    setLists([...lists, list]);
  }

  const handleDeleteToDO = ()=> {

  }

  return (
    <div>
      <Container className="container" maxWidth="xs">
        <Form handleAddToList={handleAddToList} />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {lists.map((list) => (
            <ToDoList list={list}  />
          ))}
        </List>
      </Container>
    </div>
  );
}
