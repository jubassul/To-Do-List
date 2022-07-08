import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Form({handleAddToList}) {
  const [input, setInput] = useState();
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
        <Button className="button" onClick={() => handleAddToList(input)}>
          Add
        </Button>
      </div>
    </>
  );
}
