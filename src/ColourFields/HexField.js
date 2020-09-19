import React from "react";
import { TextField, Typography } from "@material-ui/core";

const HexField = (props) => {
  return (
    <>
      <Typography>Hex (#)</Typography>
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
        onChange={props.onChangeR}
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
        onChange={props.onChangeG}
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
        onChange={props.onChangeB}
      />
    </>
  );
};

export default HexField;
