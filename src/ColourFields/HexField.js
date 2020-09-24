import React from "react";
import { TextField, Typography, Tooltip } from "@material-ui/core";

const TooltipTextField = (props) => {
  return (
    <Tooltip arrow title={props.title}>
      <TextField
        variant="outlined"
        placeholder="00"
        onChange={props.onChange}
        value={props.value}
      />
    </Tooltip>
  );
};

const HexField = (props) => {
  return (
    <>
      <Tooltip arrow title="Three hex components, each in the range 00-FF">
        <Typography>Hex (#)</Typography>
      </Tooltip>
      <TooltipTextField
        title="Red: 00-FF"
        value={props.value[0]}
        onChange={props.onChangeR}
      />
      <TooltipTextField
        title="Green: 00-FF"
        value={props.value[1]}
        onChange={props.onChangeG}
      />
      <TooltipTextField
        title="Blue: 00-FF"
        value={props.value[2]}
        onChange={props.onChangeB}
      />
    </>
  );
};

export default HexField;
