import React from "react";
import { TextField, Typography } from "@material-ui/core";

const HexField = (props) => {
  return (
    <>
      <Typography>Hex (#)</Typography>
      <TextField
        variant="outlined"
        placeholder="00"
        onChange={props.onChangeR}
        value={props.value[0]}
        />
      <TextField
        variant="outlined"
        placeholder="00"
        onChange={props.onChangeG}
        value={props.value[1]}
        />
      <TextField
        variant="outlined"
        placeholder="00"
        onChange={props.onChangeB}
        value={props.value[2]}
      />
    </>
  );
};

export default HexField;
