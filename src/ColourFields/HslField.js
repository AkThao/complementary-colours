import React from "react";
import {
  InputAdornment,
  TextField,
  Typography,
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

const HslField = (props) => {
  const degree = String.fromCharCode(176);

  return (
    <>
      <Tooltip
        arrow
        title={`Three HSL components, with ranges of 0-360${degree}, 0-100% and 0-100%`}
      >
        <Typography>HSL</Typography>
      </Tooltip>
      <Tooltip arrow title={`Hue: 0-360${degree}`}>
        <TextField
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{degree}</InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 360,
          }}
          type="number"
          placeholder={`0${degree}`}
          onChange={props.onChangeH}
          value={props.value[0]}
        />
      </Tooltip>
      <TooltipTextField
        title="Saturation: 0-100%"
        value={props.value[1]}
        onChange={props.onChangeS}
      />
      <TooltipTextField
        title="Lightness: 0-100%"
        value={props.value[2]}
        onChange={props.onChangeL}
      />
    </>
  );
};

export default HslField;
