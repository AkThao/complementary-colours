import React from "react";
import {
  TextField,
  Typography,
  InputAdornment,
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
  inputAdornment: {
    "& .MuiTypography-body1": {
      color: "black",
    },
  },
}));

const TooltipTextField = (props) => {
  const classes = useStyles(props);

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

const CmykField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.colourSection}>
      <Typography className={classes.labelContainer}>
        <Tooltip arrow title="Four CMYK components, each in the range 0-100%">
          <span className={classes.label}>CMYK</span>
        </Tooltip>
      </Typography>
      <div className={classes.colourField}>
        <TooltipTextField
          title="Cyan: 0-100%"
          value={props.value[0]}
          onChange={props.onChangeC}
          colour="cyan"
          input={props.input}
        />
        <TooltipTextField
          title="Magenta: 0-100%"
          value={props.value[1]}
          onChange={props.onChangeM}
          colour="magenta"
          input={props.input}
        />
        <TooltipTextField
          title="Yellow: 0-100%"
          value={props.value[2]}
          onChange={props.onChangeY}
          colour="yellow"
          input={props.input}
        />
        <TooltipTextField
          title="Black: 0-100%"
          value={props.value[3]}
          onChange={props.onChangeK}
          colour="black"
          input={props.input}
        />
      </div>
    </div>
  );
};

export default CmykField;
