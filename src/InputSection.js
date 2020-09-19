import React, { useState, useEffect } from "react";
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

  const handleChange = (prop) => (e) => {
    if (e.target.value === "") {
      setState({ ...state, [prop]: 0 });
    } else {
      setState({ ...state, [prop]: e.target.value });
    }
    if (prop.slice(0, 3) === "rgb") {
      setLastColourUpdated(0);
    } else if (prop.slice(0, 3) === "hex") {
      setLastColourUpdated(1);
    }
  };

  return (
    <>
      <div>
        <Typography>Input Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <RgbField
          onChangeR={handleChange("rgbR")}
          onChangeG={handleChange("rgbG")}
          onChangeB={handleChange("rgbB")}
        />
        <HexField
          onChangeR={handleChange("hexR")}
          onChangeG={handleChange("hexG")}
          onChangeB={handleChange("hexB")}
        />
        <HslField />
        <CmykField />
      </div>
    </>
  );
};

export default InputSection;
