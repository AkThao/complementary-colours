import React, { useState } from "react";
import convert from "color-convert";
import { makeStyles } from "@material-ui/core";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column", // This will eventually be set to row
    justifyContent: "space-around",
    padding: 10,
  },
}));

function App() {
  const [inputColour, setInputColour] = useState("#000");
  const [outputColour, setOutputColour] = useState("#000");
  const classes = useStyles();

  const calculateComplementary = () => {
    const rgbValues = convert.hex.rgb(inputColour);
    const complementaryValues = [];
    rgbValues.forEach((colourElement, idx) => {
      complementaryValues[idx] = 255 - colourElement;
    });
    setOutputColour(`#${convert.rgb.hex(...complementaryValues)}`);
  };

  return (
    <>
      <div className={classes.pageContainer}>
        <InputSection
          colour={inputColour}
          handleColourChange={setInputColour}
        />
        <button style={{ marginTop: 20 }} onClick={calculateComplementary}>
          Calcuate complementary colour
        </button>
        <OutputSection colour={outputColour} />
      </div>
    </>
  );
}

export default App;
