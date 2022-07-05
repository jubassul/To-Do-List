import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Form() {
    return (
        <> 
        
        <div className="form">
           <h1>To Do List:</h1>
            <TextField id="outlined-basic" label="Outlined" 
            variant="outlined" fullWidth  />
            <Button  className='button'> Add </Button> 
        </div>

        </>
    );
}
