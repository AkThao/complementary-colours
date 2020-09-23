import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
  },
}));

function App() {
  const [colour, setColour] = useState("#000");
  const classes = useStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <InputSection colour={colour} handleColourChange={setColour} />
        {/* <OutputSection /> */}
      </div>
    </>
  );
}

export default App;
