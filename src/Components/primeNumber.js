
import React from 'react'
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';

function primeNumber() {
    async function IsPrime(n)
    {
      if (n===1)
      {
        return false;
      }
      else if(n === 2)
      {
        return true;
      }else
      {
        for(var x = 2; x < n; x++)
        {
          if(n % x === 0)
          {
            return false;
          }
        }
        return true;  
      }
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Enter A Number " variant="outlined" />
            <Button onClick={IsPrime(10)}>Is it Prime ?</Button>
        </div>
    )
}


export default primeNumber