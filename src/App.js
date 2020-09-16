import React from "react";
import ColourDisplayBox from "./ColourDisplayBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
  }
}));

function App() {
  const classes = useStyles();
  const colour = "#ffffff";

  return (
    <>
      <div className={classes.pageContainer}>
        <h1>Input colour</h1>
        <ColourDisplayBox colour={colour} />
        <h1>Complementary colour</h1>
        <ColourDisplayBox colour={colour} />
      </div>
    </>
  );
}

export default App;
