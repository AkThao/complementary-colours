import React from "react";
import { TextField, Typography, Tooltip, makeStyles } from "@material-ui/core";
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
      borderColor: (props) => {
        return `${props.colour}`;
      },
      borderWidth: 2,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: (props) => {
        return `${props.colour}`;
      },
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
}));

const TooltipTextField = (props) => {
  const classes = useStyles(props);

  return (
    <Tooltip arrow title={props.title}>
      <TextField
        InputProps={{
          className: clsx(classes.textField, classes.textFieldCustomBorder),
        }}
        variant="outlined"
        inputProps={{ min: 0, max: 255 }}
        placeholder="000"
        type="number"
        onChange={props.onChange}
        value={props.value}
        disabled={!props.input}
      />
    </Tooltip>
  );
};

const RgbField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.colourSection}>
      <Tooltip arrow title="Three RGB components, each in the range 0-255">
        <Typography className={classes.labelContainer}>
          <span className={classes.label}>RGB</span>
        </Typography>
      </Tooltip>
      <div className={classes.colourField}>
        <TooltipTextField
          title="Red: 0-255"
          value={props.value[0]}
          onChange={props.onChangeR}
          colour="red"
          input={props.input}
        />
        <TooltipTextField
          title="Green: 0-255"
          value={props.value[1]}
          onChange={props.onChangeG}
          colour="green"
          input={props.input}
        />
        <TooltipTextField
          title="Blue: 0-255"
          value={props.value[2]}
          onChange={props.onChangeB}
          colour="blue"
          input={props.input}
        />
      </div>
    </div>
  );
};

export default RgbField;
