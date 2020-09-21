import React from "react";
import { TextField, Typography } from "@material-ui/core";

const RgbField = (props) => {
  return (
    <>
      <Typography>RGB</Typography>
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeR}
        value={props.value[0]}
        />
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeG}
        value={props.value[1]}
        />
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255 }}
        placeholder="000"
        type="number"
        onChange={props.onChangeB}
        value={props.value[2]}
      />
    </>
  );
};

export default RgbField;
