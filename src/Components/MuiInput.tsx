import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

type Props = {
  title: string;
  value: string | number;
  setValue: (value: string) => void;
  type: string;
};
function MuiInput({ setValue, title, type, value }: Props) {
  return (
    <Box>
      <TextField
        className="customMui"
        fullWidth
        inputProps={{
          sx: {
        
            fontFamily: "Montserrat ",
            
            paddingLeft: "15px",
            fontSize: "13px",
    
          },
        }}
        InputProps={{
          sx: {
            "& fieldset": {
              fontFamily: "Montserrat ",
             
              border: "1px solid #59bab2 !important",
              borderRadius: "9px",
            },
            "&:hover fieldset": {
              border: "2px solid #59bab2 !important",
              borderRadius: "9px",
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "2px solid #59bab2 !important",
              borderRadius: "9px",
            },
          },
        }}
        InputLabelProps={{ style: { display: "none" } }} // font size of input label
        id="outlined-basic"
        variant="outlined"
        required
        type="text"
        placeholder={title}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Box>
  );
}

export default MuiInput;
