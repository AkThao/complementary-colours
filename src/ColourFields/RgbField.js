import React from "react";
import { TextField, Typography, Tooltip } from "@material-ui/core";

const TooltipTextField = (props) => {
  return (
    <Tooltip arrow title={props.title}>
      <TextField
        variant="outlined"
        inputProps={{ min: 0, max: 255 }}
        placeholder="000"
        type="number"
        onChange={props.onChange}
        value={props.value}
      />
    </Tooltip>
  );
};

const RgbField = (props) => {
  return (
    <>
      <Tooltip arrow title="Three RGB components, each in the range 0-255">
        <Typography>RGB</Typography>
      </Tooltip>
      <TooltipTextField
        title="Red: 0-255"
        value={props.value[0]}
        onChange={props.onChangeR}
      />
      <TooltipTextField
        title="Green: 0-255"
        value={props.value[1]}
        onChange={props.onChangeG}
      />
      <TooltipTextField
        title="Blue: 0-255"
        value={props.value[2]}
        onChange={props.onChangeB}
      />
    </>
  );
};

export default RgbField;
