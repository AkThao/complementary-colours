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
        placeholder="00"
        onChange={props.onChange}
        value={props.value}
        disabled={!props.input}
      />
    </Tooltip>
  );
};

const HexField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.colourSection}>
      <Typography className={classes.labelContainer}>
        <Tooltip arrow title="Three hex components, each in the range 00-FF">
          <span className={classes.label}>Hex (#)</span>
        </Tooltip>
      </Typography>
      <div className={classes.colourField}>
        <TooltipTextField
          title="Red: 00-FF"
          value={props.value[0]}
          onChange={props.onChangeR}
          colour="red"
          input={props.input}
        />
        <TooltipTextField
          title="Green: 00-FF"
          value={props.value[1]}
          onChange={props.onChangeG}
          colour="green"
          input={props.input}
        />
        <TooltipTextField
          title="Blue: 00-FF"
          value={props.value[2]}
          onChange={props.onChangeB}
          colour="blue"
          input={props.input}
        />
      </div>
    </div>
  );
};

export default HexField;
