import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Form() {
  const [input, setInput] = useState("teste");
  const addToList = () => {
    alert("O que o usuário digitou " + input);
  };
  return (
    <>
      <div className="form">
        <h1>To Do List:</h1>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button className="button" onClick={addToList}>
          Add
        </Button>
      </div>
    </>
  );
}
