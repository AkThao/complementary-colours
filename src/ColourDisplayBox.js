import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    width: 300,
    height: 200,
    border: "2px solid black",
    borderRadius: 20,
    margin: "20px 0px 40px 0px",
    backgroundColor: props => props.colour,
  },
}));

const ColourDisplayBox = (colour) => {
  const classes = useStyles(colour);

  return <div className={classes.container}></div>;
};


export default ColourDisplayBox;