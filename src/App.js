import React from "react";
import { makeStyles } from "@material-ui/core";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.pageContainer}>
          <InputSection />
          <OutputSection />
      </div>
    </>
  );
}

export default App;
