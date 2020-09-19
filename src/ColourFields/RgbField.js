import React from "react";
import { TextField, Typography } from "@material-ui/core";

const RgbField = (props) => {
  return (
    <>
      <Typography>RGB</Typography>
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255, maxLength: 3 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeR}
      />
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255, maxLength: 3 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeG}
      />
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255, maxLength: 3 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeB}
      />
    </>
  );
};

export default RgbField;
