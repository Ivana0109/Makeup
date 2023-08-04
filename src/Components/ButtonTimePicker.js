import { Button, FormControl, Grid, InputLabel } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import "./ButtonTimePicker.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  orange } from '@mui/material/colors';


function ButtonTimePicker(   {onChange,value}) {
  const [time, setTime] = useState();

  let array1 = new Array(16).fill(0);

  const timeOptions = new Array(27).fill(0).map((item,index)=> dayjs().utc().set('hour', (index)/2+7).set('minute', index%2*30))
  ;

  
console.log(timeOptions)
  return (
    <div>
      <h3>ODABERI VRIJEME: </h3>
      <Grid container justifyContent="center" gap={8}>
        {timeOptions.map((item) => (
          <Grid item xs={3} md={1}>
            {" "}
          
            <Button className="customMuiButton"
           onClick={()=>onChange(item)}
              variant={item.isSame(value,"hour") &&item.isSame(value,"minutes")?"contained":"outlined"}
              size="medium"
              key={item}
             
            
            >
              {item.format("HH:mm")}
            </Button>
          
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default ButtonTimePicker;
