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
    //se o list.id for diferente o id, exclui o id igual.

    const filteredList = lists.filter((list) => list.id !== id);
    //mudar o estado da list, excluindo o id igual.
    setLists(filteredList);
  };

  const handleEditToDo = (id, editedText) => {
    let listsArray = [...lists];
    for (var i in listsArray) {
      if (listsArray[i].id === id) {
        listsArray[i].text = editedText;
      }
    }
    // listsArray.splice(id, 1, {text:editedText, id:id})
    setLists(listsArray);
  };

  return (
    <div>
      <Container className="container" maxWidth="xs">
        <Form handleAddToList={handleAddToList} />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {lists.map((list) => (
            <ToDoList
              list={list}
              handleDeleteToDO={handleDeleteToDO}
              handleEditToDo={handleEditToDo}
            />
          ))}
        </List>
      </Container>
    </div>
  );
}
