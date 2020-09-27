import React from "react";
import {
  InputAdornment,
  TextField,
  Typography,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  colourSection: theme.colourSection,
  colourField: theme.colourField,
  textField: theme.textField,
  textFieldCustomBorder: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      borderWidth: 1,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      borderWidth: 2,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      borderWidth: 2,
    },
    "&.Mui-disabled": {
      color: "black",
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      borderWidth: 1,
    },
    "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: 2,
    },
  },
  label: theme.label,
  labelContainer: theme.labelContainer,
  inputAdornment: {
    "& .MuiTypography-body1": {
      color: "black",
    },
  },
}));

const TooltipTextField = (props) => {
  const classes = useStyles();

  return (
    <Tooltip arrow title={props.title}>
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.inputAdornment} position="end">
              %
            </InputAdornment>
          ),
          className: clsx(classes.textField, classes.textFieldCustomBorder),
        }}
        inputProps={{
          min: 0,
          max: 100,
        }}
        type="number"
        placeholder="0%"
        onChange={props.onChange}
        value={props.value}
        disabled={!props.input}
      />
    </Tooltip>
  );
};

const HslField = (props) => {
  const degree = String.fromCharCode(176);
  const classes = useStyles();

  return (
    <div className={classes.colourSection}>
      <Tooltip
        arrow
        title={`Three HSL components, with ranges of 0-360${degree}, 0-100% and 0-100%`}
      >
        <Typography className={classes.labelContainer}>
          <span className={classes.label}>HSL</span>
        </Typography>
      </Tooltip>
      <div className={classes.colourField}>
        <Tooltip arrow title={`Hue: 0-360${degree}`}>
          <TextField
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  className={classes.inputAdornment}
                  position="end"
                >
                  {degree}
                </InputAdornment>
              ),
              className: clsx(classes.textField, classes.textFieldCustomBorder),
            }}
            inputProps={{
              min: 0,
              max: 360,
            }}
            type="number"
            placeholder={`0${degree}`}
            onChange={props.onChangeH}
            value={props.value[0]}
            disabled={!props.input}
          />
        </Tooltip>
        <TooltipTextField
          title="Saturation: 0-100%"
          value={props.value[1]}
          onChange={props.onChangeS}
          input={props.input}
        />
        <TooltipTextField
          title="Lightness: 0-100%"
          value={props.value[2]}
          onChange={props.onChangeL}
          input={props.input}
        />
      </div>
    </div>
  );
};

export default HslField;
