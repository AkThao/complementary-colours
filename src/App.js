import React, { useState } from "react";
import convert from "color-convert";
import { makeStyles, Button } from "@material-ui/core";
import Header from "./Header";
import ForwardIcon from "@material-ui/icons/Forward";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginTop: theme.header.height - 20,
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
    "@media (max-width: 1300px)": {
      flexDirection: "column",
    },
  },
  button: theme.button,
  arrow: theme.arrow,
}));

function App() {
  const [inputColour, setInputColour] = useState("#000");
  const [outputColour, setOutputColour] = useState("#000");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);
  const [page, setPage] = useState("about");
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
      <Header
        menuAnchor={menuAnchor}
        setMenuAnchor={setMenuAnchor}
        open={open}
        setPage={setPage}
      />

      {page === "home" ? (
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
      ) : (
        <About />
      )}
    </>
  );
}

export default App;
