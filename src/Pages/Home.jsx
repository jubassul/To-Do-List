import React from "react";
import Form from "../components/Form.jsx";
import { useState } from "react";
import ToDoList from "../components/ToDoList";
import { Container } from "@mui/material";
import List from "@mui/material/List";
export default function Home() {
  const [lists, setLists] = useState([]);

  const handleAddToList = (list) => {
    console.log("nome", list);
    setLists([...lists, list]);
  };

  const handleDeleteToDO = (id) => {
    console.log(id);
    //se o list.id for diferente o id, exclui o id igual.

    const filteredList = lists.filter((list) => list.id !== id);
    //mudar o estado da list, excluindo o id igual.
    setLists(filteredList);
  };

  return (
    <div>
      <Container className="container" maxWidth="xs">
        <Form handleAddToList={handleAddToList} />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {lists.map((list) => (
            <ToDoList list={list} handleDeleteToDO={handleDeleteToDO} />
          ))}
        </List>
      </Container>
    </div>
  );
}
