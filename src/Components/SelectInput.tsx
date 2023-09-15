import * as React from "react";
import "./SelectInput.css";
import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
 
} from "@mui/material";
import Select from "@mui/material/Select";

type Props = {
  title: string;
  options: Options;
  setValue: (value: string) => void;
  chosenValue: any;
};

type Options = { [key: string]: string };

function SelectInput({ title, options, setValue, chosenValue }: Props) {
  return (
    <Box>
      <Select 
        sx={{ width: 1 }}
        style={{
          fontFamily: "Montserrat ",
          fontSize: "18px !Important" ,
          color: "black",
          backgroundColor: "white",
          borderRadius: "13px",
        }}
        value={chosenValue}
        onChange={(e) => {
          console.log(e.target.value)
          setValue(e.target.value);
        }}
      >
        {Object.keys(options).map((key) => {
        
          return (
            <MenuItem sx={{ fontSize: 20, color: "grey" }} value={key}>
              {options[key]}
              
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}

export default SelectInput;
