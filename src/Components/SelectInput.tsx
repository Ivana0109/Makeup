import * as React from "react";
import "./Select.css";
import { Box, InputLabel, MenuItem, OutlinedInput, createMuiTheme } from "@mui/material";
import Select from "@mui/material/Select";

type Props = {
  title: string;
  options: string[];
  setValue: (value: string) => void;
  chosenValue: any;
};




function SelectInput({ title, options, setValue, chosenValue }: Props) {
  return (
    <Box >

      <Select sx={{ width: 1}}  
       
        style={{  fontFamily: "Montserrat ",
         fontSize: "20px",color:"black", backgroundColor:"white", borderRadius:"13px",}}
 
        value={chosenValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        
      > 
        {options.map((item) => {
          return (
            <MenuItem sx={{ fontSize: 20, color:"grey" }} value={item}
            
            
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}

export default SelectInput;
