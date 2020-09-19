import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const InputSection = () => {
  const [colour, setColour] = useState("rgb(255, 255, 255)");

  const [state, setState] = useState({
    rgbR: 0,
    rgbG: 0,
    rgbB: 0,
  });

  useEffect(() => {
    setColour(`rgb(${state.rgbR}, ${state.rgbG}, ${state.rgbB})`);
  }, [state.rgbR, state.rgbG, state.rgbB]);

  const handleChange = (prop) => (e) => {
    setState({ ...state, [prop]: e.target.value });
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
        <HexField />
        <HslField />
        <CmykField />
      </div>
    </>
  );
};

export default InputSection;
