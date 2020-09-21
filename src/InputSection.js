import React, { useState, useEffect } from "react";
import convert from "color-convert";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const InputSection = () => {
  const [colour, setColour] = useState("black");
  const [lastColourUpdated, setLastColourUpdated] = useState();

  const [state, setState] = useState({
    rgbR: 0,
    rgbG: 0,
    rgbB: 0,
    hexR: 0,
    hexG: 0,
    hexB: 0,
  });

  useEffect(() => {
    if (lastColourUpdated === 0) {
      setColour(`rgb(${state.rgbR}, ${state.rgbG}, ${state.rgbB})`);
    } else if (lastColourUpdated === 1) {
      setColour(`#${state.hexR}${state.hexG}${state.hexB}`);
    }
  }, [
    state.rgbR,
    state.rgbG,
    state.rgbB,
    state.hexR,
    state.hexG,
    state.hexB,
    lastColourUpdated,
  ]);

  const convertColours = (prop) => {
    console.log(prop);
  };

  const handleChange = (prop) => (e) => {
    if (e.target.value === "") {
      setState({ ...state, [prop]: 0 });
    } else {
      setState({ ...state, [prop]: e.target.value });
    }
    if (prop === "rgb") {
      setLastColourUpdated(0);
    } else if (prop === "hex") {
      setLastColourUpdated(1);
    }
    convertColours(prop);
  };

  return (
    <>
      <div>
        <Typography>Input Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <RgbField
          onChangeR={handleChange("rgb")}
          onChangeG={handleChange("rgb")}
          onChangeB={handleChange("rgb")}
        />
        <HexField
          onChangeR={handleChange("hex")}
          onChangeG={handleChange("hex")}
          onChangeB={handleChange("hex")}
        />
        <HslField
          onChangeH={handleChange("hsl")}
          onChangeS={handleChange("hsl")}
          onChangeL={handleChange("hsl")}
        />
        <CmykField
          onChangeC={handleChange("cmyk")}
          onChangeM={handleChange("cmyk")}
          onChangeY={handleChange("cmyk")}
          onChangeK={handleChange("cmyk")}
        />
      </div>
    </>
  );
};

export default InputSection;
