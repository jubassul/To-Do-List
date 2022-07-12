import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Form({ handleAddToList }) {
  const [inputText, setInputText] = useState();
  const [id, setId] = useState(0);

  const listCreate = (inputText) => {
    const listObj = { text: inputText, id: id };
    setId(id + 1);
    handleAddToList(listObj);
    //limpar o input ao add, porém nao esta funcionando
    //document.getElementById("oi").value = null;
  };
  return (
    <>
      <div className="form">
        <h1>To Do List:</h1>
        <TextField
          id="oi"
          label="Outlined"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <Button className="button" onClick={() => listCreate(inputText)}>
          Add
        </Button>
      </div>
    </>
  );
}
