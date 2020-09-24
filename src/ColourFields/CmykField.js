import React from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";

const TooltipTextField = (props) => {
  return (
    <Tooltip arrow title={props.title}>
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
        onChange={props.onChange}
        value={props.value}
      />
    </Tooltip>
  );
};

const CmykField = (props) => {
  return (
    <>
      <Tooltip arrow title="Four CMYK components, each in the range 0-100%">
        <Typography>CMYK</Typography>
      </Tooltip>
      <TooltipTextField
        title="Cyan: 0-100%"
        value={props.value[0]}
        onChange={props.onChangeC}
      />
      <TooltipTextField
        title="Magenta: 0-100%"
        value={props.value[1]}
        onChange={props.onChangeM}
      />
      <TooltipTextField
        title="Yellow: 0-100%"
        value={props.value[2]}
        onChange={props.onChangeY}
      />
      <TooltipTextField
        title="Black: 0-100%"
        value={props.value[3]}
        onChange={props.onChangeK}
      />
      {/* <TextField
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
      /> */}
    </>
  );
};

export default CmykField;
