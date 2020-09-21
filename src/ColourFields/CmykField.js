import React from "react";
import { TextField, Typography, InputAdornment } from "@material-ui/core";

const CmykField = (props) => {
  return (
    <>
      <Typography>CMYK</Typography>
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          maxLength: 3,
        }}
        placeholder="0%"
        onChange={props.onChangeC}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          maxLength: 3,
        }}
        placeholder="0%"
        onChange={props.onChangeM}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          maxLength: 3,
        }}
        placeholder="0%"
        onChange={props.onChangeY}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          maxLength: 3,
        }}
        placeholder="0%"
        onChange={props.onChangeK}
      />
    </>
  );
};

export default CmykField;
