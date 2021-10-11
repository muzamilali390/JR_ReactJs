import React, {  useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';

const App = () =>{

  const [number, setnumber] = useState(0)
  const [output1, setoutput1] = useState("")
  const [output2, setoutput2] = useState(0)

  async function IsPrime()
  {
    
    if (number===1)
    {
      setoutput1("false");
      setoutput2(number);
    }
    else if(number === 2)
    {
      setoutput1("true");
      setoutput2(number);
    }
    else
    {
      for(var x = 2; x < number; x++)
      {
        if(number % x === 0)
        {
          setoutput1("false");
          setoutput2(number);
        }
      }
      setoutput1("true");
      setoutput2(number);  
    }
  }

  return (
    <div>
        <div>
            <h1>Fun With Prime Numbers</h1>
            <TextField id="input" 
            label="Enter A Number " 
            variant="outlined" 
            onChange={(e) => setnumber(e.target.value)}
            value={number}
            />
            <Button variant="contained" onClick={IsPrime}>Is it Prime ?</Button>
            <h3>output 1: {output1}</h3>
            <h3>output 2: {output2}</h3>
        </div>
    </div>
  );
}

export default App;
