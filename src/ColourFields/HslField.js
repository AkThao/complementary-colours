import React from "react";
import { InputAdornment, TextField, Typography } from "@material-ui/core";

const HslField = (props) => {
  return (
    <>
      <Typography>HSL</Typography>
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {String.fromCharCode(176)}
            </InputAdornment>
          ),
        }}
        inputProps={{
          min: 0,
          max: 360,
        }}
        type="number"
        placeholder={`0${String.fromCharCode(176)}`}
        onChange={props.onChangeH}
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
        onChange={props.onChangeS}
        value={props.value[1]}
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
        onChange={props.onChangeL}
        value={props.value[2]}
      />
    </>
  );
};

export default HslField;
