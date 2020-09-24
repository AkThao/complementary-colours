import React, { useState } from "react";
import convert from "color-convert";
import { makeStyles, Button } from "@material-ui/core";
import ForwardIcon from "@material-ui/icons/Forward";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
  },
  button: {
    height: 80,
    width: 200,
    alignSelf: "center",
    backgroundColor: "#7bdced",
    border: "1px solid black",
    boxShadow: "2px 2px #666",
    "&:hover": {
      backgroundColor: "#11aa00",
      transition: "background-color 0.4s",
      "& $arrow": {
        fontSize: 75,
      },
    },
    "&:active": {
      boxShadow: "none",
      transform: "translate(2px, 2px)",
      transition: "box-shadow transform 0.4s",
    },
  },
  arrow: {
    fontSize: 60,
    transition: "font-size 0.4s",
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
        <Button onClick={calculateComplementary} className={classes.button}>
          <ForwardIcon className={classes.arrow} />
        </Button>
        <OutputSection colour={outputColour} />
      </div>
    </>
  );
}

export default App;
