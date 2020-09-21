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
          maxLength: 3,
        }}
        placeholder={`0${String.fromCharCode(176)}`}
        onChange={props.onChangeH}
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
        onChange={props.onChangeS}
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
        onChange={props.onChangeL}
      />
    </>
  );
};

export default HslField;
