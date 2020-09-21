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
          min: 0,
          max: 100,
        }}
        type="number"
        placeholder="0%"
        onChange={props.onChangeC}
        value={props.value[0]}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          min: 0,
          max: 100,
        }}
        type="number"
        placeholder="0%"
        onChange={props.onChangeM}
        value={props.value[1]}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        type="number"
        inputProps={{
          min: 0,
          max: 100,
        }}
        placeholder="0%"
        onChange={props.onChangeY}
        value={props.value[2]}
      />
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        inputProps={{
          min: 0,
          max: 100,
        }}
        type="number"
        placeholder="0%"
        onChange={props.onChangeK}
        value={props.value[3]}
      />
    </>
  );
};

export default CmykField;
